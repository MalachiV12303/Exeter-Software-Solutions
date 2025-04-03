<template>
    <section class="noSelect">
        <div id='logoContainer'>
            <p id='logo' class='cinzel'>.EXETER</p>
        </div>
        <p id='logoSub'>software solutions</p>
    </section>
</template>

<style scoped>
section {
    background-color: var(--white);
}

#logo {
    font-size: 10rem;
    font-weight: 500;
    margin-right: 49px;
}

#logoSub {
    font-size: 2rem;
    letter-spacing: 3px;
    margin-left: 10px;
    color: var(--black);
}

#logoContainer {
    animation: gradient-change 2s linear infinite alternate;
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

@media screen and (max-width: 800px) {
    #logo {
        font-size: 5rem;
        margin-right: 0px;
    }

    #logoSub {
        font-size: 1.5rem;
        letter-spacing: 3px;
    }
}

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
</style>