<script setup>
import { ref } from 'vue';

const props = defineProps({
    name: { type: String, required: true },
    title: { type: String, required: true },
    imageName: { type: String, required: true },
    contentText: { type: Array, required: true }
})

function getImageUrl() {
    // This path must be correct for your file
    return new URL(`../assets/${props.imageName}`, import.meta.url)
}

var open = ref(false);
</script>

<template>
    <div id="container">
        <div id="nameContainer">
            <h1 id="jobTitle">{{ title }}</h1>
            <button @click="open = !open">
                {{ name }}
            </button>
        </div>
        <Transition name='expand'>
            <div v-show="open" id='contentContainer'>
                <div id="contentText">
                    <p v-for="(item, index) in contentText" :key="index">
                        {{ item }}
                    </p>
                </div>
                <div id="contentImage">
                    <img :src="getImageUrl()" />
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

#nameContainer {
    position: relative;
}

#contentContainer {
    will-change: max-height;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

#contentText {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    line-height: 1.5;
    font-size: 1.25rem;
    letter-spacing: 1px;
}

#contentImage {
    margin-left: 4rem;
    width: 40%;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
}

#jobTitle {
    color: var(--white);
    position: absolute;
    bottom: 7px;
    transform: translateX(-100%);
    font-weight: 400;
    letter-spacing: 2px;
    padding-right: 3rem;
}

button {
    background-color: transparent;
    color: var(--black);
    border: none;
    font-family: "Cormorant Garamond", serif;
    font-size: 3.5rem;
    transition: color 0.3s ease-out;
}

button:hover {
    color: var(--white);
}

#container:not(:first-child) button {
    margin-top: 2rem;
}

/* Expanding Animation */
.expand-enter-from,
.expand-leave-to {
    max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
    max-height: 1100px;
}

.expand-enter-active,
.expand-leave-active {
    transition: max-height 1s cubic-bezier(.19, 1, .22, 1);
}
</style>