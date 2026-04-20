<template>
    <section class="section">
        <Transition name="contentAppear" appear>
            <div class="content">
                <div class="map">
                    <GMapMap :center="{ lat: 61.2478, lng: -145.3204 }" :zoom="12" class="mapInner">
                        <GMapMarker :position="{ lat: 61.2478, lng: -145.3204 }" />
                    </GMapMap>
                </div>
                <div class="text mono">
                    <p>Founded.</p>
                    <div>
                        <p>June, 2010</p>
                    </div>
                    <p>Officials.</p>
                    <div>
                        <p>Oscar Thatcher (CEO)</p>
                        <p>Kara Snow (CDO)</p>
                        <p>Jax Fuller (COO)</p>
                        <p>Fern Lin</p>
                        <p>Marlon Watson</p>
                        <p>James Sunderland</p>
                    </div>
                    <p class="noSelect">Address.</p>
                    <div>
                        <p>825 Central</p>
                        <p>Silent Hill, M.E.</p>
                    </div>
                </div>
            </div>
        </Transition>
    </section>
</template>

<style scoped>
.section {
    background-color: var(--company-bg);
    padding: 60px 180px;
}

p {
    white-space: nowrap;
}

.content {
    display: flex;
    width: 100%;
    gap: 8rem;
    align-items: flex-end;
    justify-content: center;
}

.map {
    width: 100%;
    max-width: 900px;
    aspect-ratio: 16 / 10;
    display: flex;
    flex-direction: column;
}

.mapInner {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
}

.sub {
    color: var(--white);
    letter-spacing: 2px;
    font-size: 0.75rem;
    padding: 0.75rem 0.5rem;
}

.text {
    color: var(--white);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem 1.5rem;
}

@media screen and (max-width: 1400px) {
    .content {
        flex-direction: column;
        align-items: flex-start;
        gap: 4rem;
    }
}

@media screen and (max-width: 800px) {
    .section {
        padding: 120px 35px;
    }

    .map {
        aspect-ratio: 16 / 9;
    }
}

@media screen and (min-width: 800px) and (max-width: 1400px) {
    .section {
        padding: 60px 120px;
    }

    .map {
        max-width: 700px;
    }
}
</style>