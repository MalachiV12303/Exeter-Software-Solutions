<template>
    <section>
        <svg width='100%' height='100%' preserveAspectRatio='xMidYMid slice'>
            <!-- <filter id='noiseFilter'>
                <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='8' stitchTiles='stitch' />
            </filter> -->
            <defs>
                <mask id="textMask" x="0" y="0" width="100%" height="100%">
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <text class='cinzel' id='logo' text-anchor='middle' y='52%' x='50%' fill="black">EXETER</text>
                    <text class='cinzel' id='logo' text-anchor='middle' y='52%' x='33%' fill="black">.</text>
                </mask>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill='#F2F0EF' mask="url(#textMask)" />
            <text id='logoSub' text-anchor='middle' y='60%' x='50%' fill="black">software solutions</text>
        </svg>
    </section>
</template>

<style scoped>
text {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

#logo {
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 10rem;
}

#logoSub {
    font-size: 2.5rem;
    letter-spacing: 3px;
}

mask {
    display: grid;
    place-content: center;
}
</style>