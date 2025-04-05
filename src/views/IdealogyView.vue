<template>
    <section>
        <div id='textContainer' class="noSelect cinzel">
            <p> Centered around the belief that technology should empower businesses, inspire innovation, and create
                lasting value. We strive to deliver intelligent, scalable software solutions
                that are not only technically robust but also deeply aligned with the unique goals and challenges of our
                clients</p>
            <p>We value collaboration, transparency, and adaptability, working alongside our partners to craft
                solutions that evolve with their needs</p>
            <p>Our commitment to excellence, ethical practices, and continuous
                learning drives us to push the boundaries of what's possible, ensuring that the software we create today
                helps shape a better tomorrow</p>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: var(--idealogy-bg);
    padding: 120px 28vw 150px 180px;
}

#textContainer{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

p {
    /* background-color: aqua; */
    height: 100%;
    color: var(--white);
    line-height: 3.5rem;
    font-size: 2rem;
}

@media screen and (max-width: 800px) {
    section {
        background-color: var(--idealogy-bg);
        padding: 8rem 4rem 6rem;
    }

    p {
        line-height: 2.5rem;
        font-size: 1.25rem;
    }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
    section {
    padding: 100px 28vw 120px 140px;
}
    p {
        font-size: 1.5rem;
    }
}
</style>