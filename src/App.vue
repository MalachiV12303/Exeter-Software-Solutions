<script setup>
import { RouterView, RouterLink } from 'vue-router';
import CustomCursor from "./components/CustomCursor.vue";
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
    <a href='https://github.com/MalachiV12303' target="_blank" id="gitLink"
      :class="{ 'textWhite': $route.path === '/company' || $route.path === '/idealogy' }">malachi valle</a>
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
  top: 2%;
  left: 2%
}

#gitLink {
  position: fixed;
  transform: rotate(90deg);
  transform-origin: top right;
  bottom: 2%;
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

/* Page Nav Animations*/
.navItem:before,
.navItem:after {
  display: inline-block;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
  -moz-transition: -moz-transform 0.3s, opacity 0.2s;
  transition: transform 0.3s, opacity 0.2s;
}

.navItem:before {
  margin-right: 10px;
  content: '[';
  -webkit-transform: translateX(20px);
  -moz-transform: translateX(20px);
  transform: translateX(20px);
}

.navItem:after {
  margin-left: 10px;
  content: ']';
  -webkit-transform: translateX(-20px);
  -moz-transform: translateX(-20px);
  transform: translateX(-20px);
}

.navItem:hover:before,
.navItem:hover:after,
.navItem:focus:before,
.navItem:focus:after {
  opacity: 1;
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  transform: translateX(0px);
}

/* this keeps the effect present when on page */
.navActive:before,
.navActive:after {
  opacity: 1;
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  transform: translateX(0px);
}

/* Page Transitions*/
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