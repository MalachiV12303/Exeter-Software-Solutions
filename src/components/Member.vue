<script setup>
import { ref } from 'vue';

const props = defineProps({
    name: { type: String, required: true },
    title: { type: String, required: true },
    imageName: { type: String, required: true },
    contentText: { type: Array, required: true }
})
function getImageUrl() {
    return new URL(`../assets/${props.imageName}`, import.meta.url)
}
var isOpen = ref(false);
</script>

<template>
    <Transition name='contentAppear' appear>
        <div class="outer-container">
            <div class="name-container">
                <h1>{{ title }}</h1>
                <button @click="isOpen = !isOpen" style="white-space: nowrap;">
                    {{ name }}
                </button>
            </div>
            <Transition name='expand'>
                <div v-show="isOpen" class="content-container mono">
                    <p>{{ contentText }}</p>
                    <div class="image-container">
                        <div class="image-wrapper">
                            <img :src="getImageUrl()" />
                        </div>
                    </div>

                </div>
            </Transition>
        </div>
    </Transition>
</template>

<style scoped>
.outer-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.name-container {
    position: relative;
    display: flex;
    align-items: flex-end;
    /* ensure consistent height if needed */
}

.name-container h1 {
    color: #3e4857;
    font-weight: 400;
    letter-spacing: 2px;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    white-space: nowrap;
    text-align: end;
    font-size: 0.75rem;
}

.content-container {
    color: var(--black);
    will-change: max-height;
    overflow: hidden;
    position: relative;
    font-size: 1rem;
    line-height: 2;
    text-transform: uppercase;
}

.content-container p {
    margin-top: 1rem;
    margin-right: 2rem;
}

button {
    background-color: transparent;
    color: var(--black);
    border: none;
    font-family: "Cormorant Garamond", serif;
    font-size: 2.5rem;
    transition: color 0.3s ease-out;
    grid-column: span 2 / span 2;
    text-align: start;
}

button:hover {
    color: var(--white);
}

.image-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    overflow: visible;
    padding: 0rem;
    /* allows background to extend */
}

/* Inner wrapper handles blur + offset */
.image-wrapper {
    position: relative;
    display: inline-block;
}

/* White blurred offset background */
/* .image-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: white;
    top: 5px;
    left: -5px;
    filter: blur(1px);
    z-index: 0;
} */

/* Actual member image */
.image-wrapper img {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: auto;
}


@media screen and (min-width: 800px) {
    .name-container h1 {
        bottom: 0;
        right: 100%;
        transform: translateX(-1rem) translateY(40%);
        text-align: end;
    }

    button {
        font-size: 3rem;
    }

    .name-container h1 {
        font-size: 1.5rem;
    }

    .content-container {
        font-size: 1.25rem;
    }

    .image-container {
        padding: 2rem 8rem;
        /* allows background to extend */
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