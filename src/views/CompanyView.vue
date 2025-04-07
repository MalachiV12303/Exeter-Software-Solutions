<template>
    <section>
        <div id='contentContainer'>
            <div id='imageContainer'>
                <!-- <img src="../assets/map.png"></img> -->
            </div>
            <div id='textContainer' class="sans">
                <p>Founded.</p>
                <div>
                    <p>June, 1951</p>
                </div>
                <p>Officials.</p>
                <div>
                    <p>Oscar Thatcher (CEO)</p>
                    <p>Kara Snow (CDO)</p>
                    <p>Jax Fuller (COO)</p>
                    <p>Marlon Watson</p>
                    <p>Fern Lin</p>
                    <p>James Sunderland</p>
                    <p>Vicki Graves</p>
                </div>
                <p>Address.</p>
                <div>
                    <p>825 Central</p>
                    <p>Silent Hill, M.E.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: var(--company-bg);
    padding: 60px 140px;
}

p {
    white-space: nowrap;
}

#contentContainer {
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    flex-direction: row;
    gap: 4rem;
    align-items: end;
    justify-content: center;
}

#imageContainer {
    background-image: url('../assets/map.png');
    background-size: cover;
    background-position: center;
    width: 900px;
    height: 550px;
    position: relative;
    flex-grow: 1;
}

#textContainer {
    color: var(--white);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    row-gap: 1rem;
    column-gap: 1.5rem;
}

@media screen and (max-width: 1000px) {
    #contentContainer {
        flex-direction: column;
        align-items: start;
        gap: 2rem;
    }
}

@media screen and (max-width: 800px) {
    section {
        padding: 120px 35px;
    }

    #imageContainer {
        width: 100%;
        height: 300px;
    }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
    section {
        padding: 60px 120px;
    }

    #imageContainer {
        width: 100%;
        height: 350px;
    }
}
</style>