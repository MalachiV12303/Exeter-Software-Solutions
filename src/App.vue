<script setup>
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import CustomCursor from "./components/CustomCursor.vue"

const router = useRouter()
const route = useRoute()

const routes = ['/', '/idealogy', '/company', '/members']

const isNavigating = ref(false)
const delay = 1100

const isOverMap = ref(false)

const touchStartY = ref(0)
const touchEndY = ref(0)
const touchStartTime = ref(0)

const scrollAttempts = { up: 0, down: 0 }

const resetScrollState = () => {
  scrollAttempts.up = 0
  scrollAttempts.down = 0
}

watch(() => route.path, () => {
  resetScrollState()
})

const navigate = (direction) => {
  if (isNavigating.value) return

  const currentIndex = routes.indexOf(route.path)
  if (currentIndex === -1) return

  let nextIndex = currentIndex

  if (direction === 'down') nextIndex++
  if (direction === 'up') nextIndex--

  if (nextIndex < 0) nextIndex = routes.length - 1
  if (nextIndex >= routes.length) nextIndex = 0

  isNavigating.value = true
  router.push(routes[nextIndex])

  setTimeout(() => {
    isNavigating.value = false
  }, delay)
}

const getBounds = () => {
  const scrollTop = window.scrollY
  const pageHeight = document.documentElement.scrollHeight
  const viewport = window.innerHeight

  const distanceFromBottom = pageHeight - (scrollTop + viewport)

  return {
    atTop: scrollTop <= 80,
    atBottom: distanceFromBottom <= 80
  }
}

const handleScroll = (e) => {
  if (window.innerWidth < 800) return
  if (isOverMap.value) return
  if (isNavigating.value) return
  if (Math.abs(e.deltaY) < 10) return

  const { atTop, atBottom } = getBounds()

  if (e.deltaY > 0) {
    if (!atBottom) return

    scrollAttempts.down++
    if (scrollAttempts.down < 3) return

    scrollAttempts.down = 0
    navigate('down')
  } else {
    if (!atTop) return

    scrollAttempts.up++
    if (scrollAttempts.up < 3) return

    scrollAttempts.up = 0
    navigate('up')
  }
}

const handleMouseOver = (e) => {
  if (e.target.closest('.map')) {
    isOverMap.value = true
  }
}

const handleMouseOut = (e) => {
  if (e.target.closest('.map')) {
    isOverMap.value = false
  }
}

const handleTouchStart = (e) => {
  touchStartY.value = e.touches[0].clientY
  touchStartTime.value = Date.now()
}

const handleTouchMove = (e) => {
  touchEndY.value = e.touches[0].clientY
}

const handleTouchEnd = () => {
  const diff = touchStartY.value - touchEndY.value
  const duration = Date.now() - touchStartTime.value

  if (duration < 150) return
  if (Math.abs(diff) < 70) return
  if (isNavigating.value) return
  if (isOverMap.value) return

  const { atTop, atBottom } = getBounds()

  if (diff > 0) {
    if (!atBottom) return
  } else {
    if (!atTop) return
  }

  navigate(diff > 0 ? 'down' : 'up')
}

let resizeObserver

onMounted(() => {
  window.addEventListener('wheel', handleScroll, { passive: true })
  window.addEventListener('mouseover', handleMouseOver)
  window.addEventListener('mouseout', handleMouseOut)
  window.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: true })
  window.addEventListener('touchend', handleTouchEnd)

  resizeObserver = new ResizeObserver(() => {
    resetScrollState()
  })

  resizeObserver.observe(document.body)
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll)
  window.removeEventListener('mouseover', handleMouseOver)
  window.removeEventListener('mouseout', handleMouseOut)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
  window.removeEventListener('touchend', handleTouchEnd)

  if (resizeObserver) resizeObserver.disconnect()
})
</script>

<template>
  <nav id='homeNav' class="noSelect">
    <RouterLink to="/" class='cinzel'
      :class="{ 'textWhite': $route.path === '/company' || $route.path === '/idealogy' }">
      .EXETER</RouterLink>
  </nav>
  <nav id='pageNav' class="noSelect mono">
    <RouterLink to="/idealogy" class='navItem' active-class="navActive"
      :class="{ 'textWhite': $route.path === '/company' || $route.path === '/idealogy' }">idealogy</RouterLink>
    <RouterLink to="/company" class='navItem' active-class="navActive"
      :class="{ 'textWhite': $route.path === '/company' || $route.path === '/idealogy' }">company</RouterLink>
    <RouterLink to="/members" class='navItem' active-class="navActive"
      :class="{ 'textWhite': $route.path === '/company' || $route.path === '/idealogy' }">members</RouterLink>
  </nav>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name='fade' mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <CustomCursor />
  </main>
  <footer class="mono">
    <a href='https://www.malachidev.com/' target="_blank" id="portfolioLink"
      :class="{ 'textWhite': $route.path === '/company' || $route.path === '/idealogy' }">: website by malachi valle</a>
  </footer>
</template>

<style>
body.custom-cursor-enabled, 
body.custom-cursor-enabled * {
  cursor: none !important;
}

.mono {
  font-family: "Montserrat", sans-serif;
}

main {
  will-change: opacity;
  height: 100%;
  width: 100%;
}

a {
  color: var(--black);
  text-decoration: none;
  transition: color 1s linear;
}

nav {
  z-index: 10;
  position: fixed;
  display: flex;
  flex-direction: column;
}

#pageNav {
  transform: rotate(90deg);
  bottom: 48.5%;
  right: 10%;
  align-items: start;
  gap: 0.75rem;
}

#homeNav {
  font-size: 2rem;
  top: 3%;
  left: 2%
}

#portfolioLink {
  position: fixed;
  transform-origin: top right;
  bottom: 3%;
  right: 2%;
  letter-spacing: 3px;
  font-size: 0.75rem;
}

@media screen and (min-width:800px) and (max-width: 800px) {
  #homeNav {
    top: 3%;
    left: 3%;
  }

  #gitLink {
    bottom: 3%;
    right: 3%;
  }

  #pageNav {
    transform: rotate(0deg);
    bottom: 25%;
    right: 5%;
  }
}

@media screen and (max-width: 800px) {
  #homeNav {
    font-size: 2.25rem;
    top: 2%;
    left: 3%;
  }

  #gitLink {
    bottom: 2%;
    right: 3%;
  }

  #pageNav {
    transform: rotate(0deg);
    font-size: 0.75rem;
    top: 2.7%;
    right: 3%;
    align-items: end;
  }
}

#pageNav a {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.9rem;
  font-weight: 600;
}

.navItem:before,
.navItem:after {
  display: inline-block;
  opacity: 0;
  transition: transform 0.3s, opacity 0.2s;
}

.navItem:before {
  margin-right: 10px;
  content: '[';
  transform: translateX(20px);
}

.navItem:after {
  margin-left: 10px;
  content: ']';
  transform: translateX(-20px);
}

.navItem:hover:before,
.navItem:hover:after,
.navItem:focus:before,
.navItem:focus:after {
  opacity: 1;
  transform: translateX(0px);
}

.navActive:before,
.navActive:after {
  opacity: 1;
  transform: translateX(0px);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-out;
}
</style>