<template>
  <div
    class="zoom-pan-wrapper"
    @mouseenter="startZoom"
    @mousemove="handleMouseMove"
    @mouseleave="resetTransform"
    ref="wrapper"
  >
    <img
      ref="imgEl"
      :src="mapImage"
      alt="Map"
      class="zoom-pan-image"
      :style="imageStyle"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import mapImage from '../assets/map.png'

const props = defineProps({
  zoom: { type: Number, default: 1.2 },
  resetDelay: { type: Number, default: 200 },
  zoomDuration: { type: Number, default: 300 }
})

const wrapper = ref(null)
const imgEl = ref(null)
let isZoomed = false
let rafId = null
let resetTimeout = null
let zoomCompleteTimeout = null
let lastOrigin = { x: 50, y: 50 }
let queuedOrigin = null
let animationRunning = false

// --- helpers ---
function clearTimers() {
  if (resetTimeout) { clearTimeout(resetTimeout); resetTimeout = null }
  if (zoomCompleteTimeout) { clearTimeout(zoomCompleteTimeout); zoomCompleteTimeout = null }
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
}

function startZoom(e) {
  clearTimers()
  const img = imgEl.value
  const rect = wrapper.value.getBoundingClientRect()

  // Get mouse position relative to the image
  const relX = ((e.clientX - rect.left) / rect.width) * 100
  const relY = ((e.clientY - rect.top) / rect.height) * 100

  // Store this as the "entry origin"
  lastOrigin = { x: relX, y: relY }

  // Apply transition and start zoom centered on the entry point
  img.style.transition = `transform ${props.zoomDuration}ms ease, transform-origin ${props.zoomDuration}ms ease`
  img.style.transformOrigin = `${relX}% ${relY}%`
  img.style.transform = `scale(${props.zoom})`

  zoomCompleteTimeout = setTimeout(() => {
    isZoomed = true
    zoomCompleteTimeout = null
  }, props.zoomDuration + 10)
}


function handleMouseMove(e) {
  if (!isZoomed || animationRunning) return

  const rect = wrapper.value.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  queuedOrigin = { x, y }

  if (!rafId) {
    animationRunning = true
    rafId = requestAnimationFrame(() => {
      const img = imgEl.value
      if (img && queuedOrigin) {
        img.style.transition = 'none'
        img.style.transformOrigin = `${queuedOrigin.x}% ${queuedOrigin.y}%`
        lastOrigin = queuedOrigin
      }
      rafId = null
      animationRunning = false
    })
  }
}

function resetTransform() {
  clearTimers()
  const img = imgEl.value
  if (!img) return

  resetTimeout = setTimeout(() => {
    img.style.transition = `transform ${props.zoomDuration}ms ease, transform-origin ${props.zoomDuration}ms ease`
    img.style.transformOrigin = `${lastOrigin.x}% ${lastOrigin.y}%`
    img.style.transform = 'scale(1)'

    setTimeout(() => {
      img.style.transition = 'none'
      img.style.transformOrigin = '50% 50%'
      isZoomed = false
    }, props.zoomDuration + 10)

    resetTimeout = null
  }, props.resetDelay)
}

onMounted(() => {
  const img = imgEl.value
  img.style.width = '100%'
  img.style.height = '100%'
  img.style.objectFit = 'cover'
  img.style.display = 'block'
  img.style.willChange = 'transform, transform-origin'
  img.style.transition = `transform ${props.zoomDuration}ms ease, transform-origin ${props.zoomDuration}ms ease`
  img.style.transform = 'scale(1)'
  img.style.transformOrigin = '50% 50%'
})

onBeforeUnmount(clearTimers)
</script>


<style scoped>
.zoom-pan-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  cursor: default;
}

.zoom-pan-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform, transform-origin;
  display: block;
  pointer-events: none;
}
</style>
