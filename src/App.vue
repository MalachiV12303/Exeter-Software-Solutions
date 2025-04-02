<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">EXETER</RouterLink>
    <RouterLink to="/login">MEMBERS</RouterLink>
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

a{
  color: black;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 1s ease-in;
}

a:hover{
  text-shadow: 1px 1px 2px crimson;
}

a:nth-child(1){
  margin-right: auto;
}

nav{
  z-index: 10;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  justify-content: end;
  gap: 1rem;
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

/* .fade-leave-to {
  transform: translateX(100%)
} */
</style>