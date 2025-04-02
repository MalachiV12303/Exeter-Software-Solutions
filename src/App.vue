<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <nav id='homeNav' >
    <RouterLink to="/" class='cinzel' :class="{ 'white': $route.path !== '/'}">.EXETER</RouterLink>
  </nav>
  <nav id='pageNav'>
    <RouterLink to="/company" class='navAnim' active-class="activeNav">company</RouterLink>
    <RouterLink to="/members" class='navAnim' active-class="activeNav">members</RouterLink>
    <RouterLink to="/idealogy" class='navAnim' active-class="activeNav">idealogy</RouterLink>
  </nav>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name='fade' mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style>
main {
  will-change: opacity, transform;
  height: 100%;
  width: 100%;
}

a {
  color: black;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 2s ease-in-out
}

.white{
  color: #F2F0EF;
}

nav {
  z-index: 10;
  position: absolute;
}

#homeNav {
  top: 0;
  right: 0;
  padding: 2rem 4rem;
}

#pageNav {
  transform: rotate(-90deg);
  top: 42%;
  left: 15%;
  display: flex;
  flex-direction: column;
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
.activeNav:before, .activeNav:after{
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