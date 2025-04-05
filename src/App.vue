<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <nav id='homeNav' class="noSelect">
    <RouterLink to="/" class='cinzel'
      :class="{ 'textWhite': $route.path === '/company' || $route.path === '/idealogy' }">
      .EXETER</RouterLink>
  </nav>
  <nav id='pageNav' class="noSelect">
    <RouterLink to="/idealogy" class='navAnim' active-class="activeNav"
      :class="{ 'textWhite': $route.path === '/company' || $route.path === '/idealogy' }">idealogy</RouterLink>
    <RouterLink to="/company" class='navAnim' active-class="activeNav"
      :class="{ 'textWhite': $route.path === '/company' || $route.path === '/idealogy' }">company</RouterLink>
    <RouterLink to="/members" class='navAnim' active-class="activeNav"
      :class="{ 'textWhite': $route.path === '/company' || $route.path === '/idealogy' }">members</RouterLink>
  </nav>
  <main>
    <!-- <div id='grid'></div> -->
    <RouterView v-slot="{ Component }">
      <Transition name='fade' mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style>
#grid {
  position: fixed;
  border: 1px solid var(--black);
  width: 50%;
  height: 100%;
  z-index: 40;
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

#homeNav {
  font-size: 2rem;
  top: 2%;
  left: 2%;
}

#pageNav {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 3px;
  font-size: 0.9rem;
  gap: 0.75rem;
  align-items: start;
  transform: rotate(90deg);
  bottom: 48.5%;
  right: 10%;
}

#pageNav a {
  text-decoration: underline;
}

@media screen and (max-width: 1000px) {
  #homeNav {
    top: 2%;
    left: 4%;
  }

  #pageNav {
    right: 0%;
  }
}

@media screen and (max-width: 800px) {
  #homeNav {
    font-size: 2.5rem;
    top: 3.1%;
    left: 8%;
  }

  #pageNav {
    transform: rotate(0deg);
    font-size: 1rem;
    top: 4%;
    right: 8%;
    align-items: end;
    bottom: 48.5%;
  }
}

.navAnim:before,
.navAnim:after {
  display: inline-block;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
  -moz-transition: -moz-transform 0.3s, opacity 0.2s;
  transition: transform 0.3s, opacity 0.2s;
}

.navAnim:before {
  margin-right: 10px;
  content: '[';
  -webkit-transform: translateX(20px);
  -moz-transform: translateX(20px);
  transform: translateX(20px);
}

.navAnim:after {
  margin-left: 10px;
  content: ']';
  -webkit-transform: translateX(-20px);
  -moz-transform: translateX(-20px);
  transform: translateX(-20px);
}

.navAnim:hover:before,
.navAnim:hover:after,
.navAnim:focus:before,
.navAnim:focus:after {
  opacity: 1;
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  transform: translateX(0px);
}

/* this keeps the effect present when on page */
.activeNav:before,
.activeNav:after {
  opacity: 1;
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
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