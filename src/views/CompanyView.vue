<template>
    <section>
        <div id='contentContainer'>
            <div id="imageContainer">
                <div id='image'>
                    <!-- <img src="../assets/map.png"></img> -->
                </div>
                <p id='imageSub' class="noSelect sans">randomly selected map for demonstration</p>
            </div>
            <div id='textContainer' class="sans">
                <p class="noSelect">Founded.</p>
                <div>
                    <p>June, 1951</p>
                </div>
                <p class="noSelect">Officials.</p>
                <div>
                    <p>Oscar Thatcher (CEO)</p>
                    <p>Kara Snow (CDO)</p>
                    <p>Jax Fuller (COO)</p>
                    <p>Marlon Watson</p>
                    <p>Fern Lin</p>
                    <p>James Sunderland</p>
                    <p>Vicki Graves</p>
                </div>
                <p class="noSelect">Address.</p>
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
    padding: 60px 180px;
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
    gap: 8rem;
    align-items: end;
    justify-content: center;
}

#imageContainer{
    width: 900px;
    height: 550px;
}

#image {
    background-image: url('../assets/map.png');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: relative;
    flex-grow: 1;
}

#imageSub {
    color: var(--white);
    letter-spacing: 2px;
    font-size: 0.75rem;
    padding: 0.75rem 0.5rem;
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

@media screen and (max-width: 1400px) {
    #contentContainer {
        flex-direction: column;
        align-items: start;
        gap: 4rem;
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

@media screen and (min-width: 800px) and (max-width: 1400px) {
    section {
        padding: 60px 120px;
    }

    #imageContainer {
        max-width: 700px;
        width: 100%;
        height: 350px;
    }
}
</style>