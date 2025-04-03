<template>
    <section>
        <div id='logoContainer' class="noSelect">
            <p id='logo' class='cinzel'>.EXETER</p>
            <p id='logoSub'>software solutions</p>
        </div>
    </section>
</template>

<style scoped>
@property --＠color-1 {
    syntax: "<color>";
    inherits: false;
    initial-value: crimson;
}

@property --＠color-2 {
    syntax: "<color>";
    inherits: false;
    initial-value: #098ab9;
}

/* keyframes that change the color variable */
@keyframes gradient-change {
    to {
        --＠color-1: #ff7070;
        --＠color-2: #7120b3;
    }
}

section {
    display: flex;
    flex-direction: column;
    background-color: #F2F0EF;
}

#logoContainer {
    animation: gradient-change 4s linear infinite alternate;
    background: linear-gradient(to right in oklch,
            /* use the variables in a gradient (or wherever!) */
            var(--＠color-1),
            var(--＠color-2));
    background-clip: text;
    color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#logo {
    font-size: 10rem;
    font-weight: 500;
}

#logoSub {
    color: black;
    font-size: 2vw;
    letter-spacing: 3px;
}
</style>