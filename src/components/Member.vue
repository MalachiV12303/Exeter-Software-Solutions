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
    <Transition name='contentAppear' appear>
        <div id="container">
            <div id="nameContainer">
                <h1 id="jobTitle">{{ title }}</h1>
                <button @click="open = !open" style="white-space: nowrap;">
                    {{ name }}
                </button>
            </div>
            <Transition name='expand'>
                <div v-show="open" id='contentContainer'>
                    <div id="contentImage">
                        <div id="image">
                            <img :src="getImageUrl()" />
                        </div>
                        <p>{{ contentText[0] }}</p>
                    </div>
                    <div id="contentText">
                        <p v-for="(item, index) in contentText.slice(1)" :key="index">
                            {{ item }}
                        </p>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<style scoped>
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
    line-height: 1.5;
    font-size: 1.25rem;
    letter-spacing: 1px;
}

#contentImage {
    display: flex;
    align-items: center;
}

#jobTitle {
    color: var(--white);
    position: absolute;
    bottom: 7px;
    transform: translateX(-100%);
    font-weight: 400;
    letter-spacing: 2px;
    padding-right: 3rem;
    white-space: nowrap;
}

#contentText {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

#image {
    position: relative;
    display: flex;
    align-items: center;
    width: 30%;
    min-width: 30%;
    margin: 2rem;
}

#image::before {
    content: '';
    position: absolute;
    background-color: var(--white);
    border-bottom: 1px solid var(--black);
    transform-origin: center;
    bottom: 10px;
    left: -20px;
    transform: rotate(45deg);
    width: 60px;
    height: 1px;
}

#image::after {
    content: '';
    position: absolute;
    background-color: var(--white);
    border-bottom: 1px solid var(--black);
    transform-origin: center;
    top: 10px;
    right: -20px;
    transform: rotate(45deg);
    width: 60px;
    height: 1px;
}

#container:not(:first-child) button {
    margin-top: 2rem;
}

@media screen and (max-width: 1400px) {
    button {
        font-size: 3rem;
    }

    #contentImage {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;
    }

    #jobTitle {
        position: absolute;
        bottom: 5px;
        transform: translateX(0);
        transform: translateY(100%);
        padding-right: 0;
        margin-top: 1rem;
    }

    #image {
        width: 40%;
        min-width: 40%;
        margin: 2rem;
        margin-top: 3rem;
    }
}

@media screen and (max-width: 800px) {
    button {
        font-size: 2.25rem;
    }

    #image {
        width: 60%;
        min-width: 60%;
    }
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