<script setup>
import { ref } from 'vue';

defineProps(['name', 'title'])
var open = ref(false);

</script>

<template>
    <div id="container">
        <div id="nameContainer">
            <h1>{{ title }}</h1>
            <button @click="open = !open">
                {{ name }}
            </button>
        </div>
        <Transition name='expand'>
            <div v-show="open" id='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tortor magna, finibus sed libero
                eget,
                vulputate euismod tellus. Cras in libero iaculis, condimentum felis vel, sagittis est. Praesent at
                laoreet
                mauris, eget suscipit velit. Nam sodales sem felis, id dictum tortor fringilla non. Proin auctor tortor
                non
                nulla facilisis consectetur. Phasellus sagittis ornare sapien ac scelerisque.
            </div>
        </Transition>
    </div>
</template>

<style scoped>
/* Need to make expanding smooth, not sure why this isnt happening with transition */
#content {
    font-size: 1.5rem;
    letter-spacing: 2px;
    will-change: max-height;
    overflow: hidden;

}

#container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

#nameContainer {
    position: relative;
}

button {
    font-family: "Cormorant Garamond", serif;
    color: var(--black);
    font-size: 3.5rem;
    background-color: transparent;
    border: none;
    transition: color 0.3s ease-out;
}

button:hover {
    color: var(--white);
}

h1 {
    color: var(--white);
    position: absolute;
    bottom: 7px;
    transform: translateX(-100%);
    font-weight: 400;
    letter-spacing: 2px;
    padding-right: 3rem;
}

#container:not(:first-child) button {
    margin-top: 2rem;
}

/* Expanding Animation */
.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    /* opacity: 0; */
}

.expand-enter-to,
.expand-leave-from {
    max-height: 400px;
    /* opacity: 1; */
}

.expand-enter-active,
.expand-leave-active {
    transition: all 0.6s cubic-bezier(.19,1,.22,1);;
}
</style>