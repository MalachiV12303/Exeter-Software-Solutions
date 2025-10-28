<template>
  <div
    v-show="enabled"
    ref="cursor"
    class="custom-cursor"
    aria-hidden="true"
  >
    <!-- Outer ring: retains route-based white variant and hover state -->
    <div
      ref="ring"
      class="cursor-ring"
      :class="{
        'cursor-ring-white': $route.path === '/company' || $route.path === '/idealogy',
        'cursor-hover': isHovering
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const cursor = ref(null);
const ring = ref(null);

let rafId = null;
let enabled = true;

// Target and current positions
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currX = targetX;
let currY = targetY;

// Velocity for spring motion
let velocityX = 0;
let velocityY = 0;

// Physics tuning
const stiffness = 0.12;
const damping = 0.75;

// Sizes
const ringSize = 38;

// Click state
let isPressed = false;

// reactive hover flag used by template class binding
const isHovering = ref(false);

/**
 * Determine if an element (or its ancestor) should be treated as "interactive"
 * You can add more selectors here or set `data-cursor-interactive` on elements you want to opt-in.
 */
function isElementInteractive(el) {
  if (!el) return false;
  // common interactive selectors + explicit data attribute
  const selector =
    "a, button, input[type='button'], input[type='submit'], input[type='reset'], textarea, select, [role='button'], [data-cursor-interactive]";
  return !!el.closest(selector);
}

function onMove(e) {
  const evt = e.touches ? e.touches[0] : e;
  targetX = evt.clientX;
  targetY = evt.clientY;

  // inspect element below the pointer and update hover state
  const node = document.elementFromPoint(targetX, targetY);
  isHovering.value = isElementInteractive(node);
}

function onEnter() {
  if (cursor.value) cursor.value.style.opacity = "1";
}

function onLeave() {
  if (cursor.value) cursor.value.style.opacity = "0";
  isHovering.value = false;
}

function onMouseDown() {
  isPressed = true;
}

function onMouseUp() {
  isPressed = false;
}

function update() {
  // spring physics for outer ring
  const dx = targetX - currX;
  const dy = targetY - currY;

  velocityX = velocityX * damping + dx * stiffness;
  velocityY = velocityY * damping + dy * stiffness;

  currX += velocityX;
  currY += velocityY;

  // speed for dynamic scaling
  const speed = Math.sqrt(velocityX ** 2 + velocityY ** 2);
  const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);

  // dynamic scale based on speed and click
  const motionScale = 1 + Math.min(0.4, speed * 0.02);
  const pressScale = isPressed ? 0.7 : 1;
  const scale = motionScale * pressScale;

  // apply transforms
  if (ring.value) {
    ring.value.style.transform = `translate3d(${currX - ringSize / 2}px, ${currY - ringSize / 2}px, 0) rotate(${angle}deg) scale(${scale})`;
  }

  // keep the loop running for responsiveness (shrinking will respond even when stationary)
  rafId = requestAnimationFrame(update);
}

onMounted(() => {
  const isCoarse =
    window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  if (isCoarse || hasTouch) {
    enabled = false;
    return;
  }

  document.body.classList.add("custom-cursor-enabled");

  window.addEventListener("mousemove", onMove);
  window.addEventListener("mousedown", onMouseDown);
  window.addEventListener("mouseup", onMouseUp);
  window.addEventListener("mouseenter", onEnter);
  window.addEventListener("mouseleave", onLeave);

  rafId = requestAnimationFrame(update);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId);
  window.removeEventListener("mousemove", onMove);
  window.removeEventListener("mousedown", onMouseDown);
  window.removeEventListener("mouseup", onMouseUp);
  window.removeEventListener("mouseenter", onEnter);
  window.removeEventListener("mouseleave", onLeave);
  document.body.classList.remove("custom-cursor-enabled");
});
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: normal;
  transition: opacity 200ms ease;
  opacity: 1;
}

/* outer ring */
.cursor-ring {
  position: fixed;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.85);
  background: rgba(255, 255, 255, 0.03);
  transform-origin: center center;
  will-change: transform;
  box-sizing: border-box;
  transition: all 0.15s ease-out; /* smooth press/hover animation */
}

/* white version for certain routes (keeps your existing logic) */
.cursor-ring-white {
  border: 2px solid rgba(240, 240, 240, 0.85);
  background: rgba(240, 240, 240, 0.03);
}

/* hover state when above an interactive element */
.cursor-hover {
  /* change fill and border when hovering interactive elements */
  background: rgba(0, 0, 0, 0.25);
  border-color: rgba(0, 0, 0, 0.95);
  transform: scale(1.15); /* subtle grow on hover */
}

/* hide native cursor */
body.custom-cursor-enabled,
body.custom-cursor-enabled * {
  cursor: none !important;
}
</style>
