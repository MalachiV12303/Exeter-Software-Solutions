<script setup>
import Member from '../components/Member.vue'
</script>

<template>
    <section>
        <div id="memberList">
            <Member name='Oscar Thatcher' title="CEO" />
            <Member name='Kara Snow' title="CDO / Creative Director" />
            <Member name='Jax Fuller' title="COO / Creative Director" />
            <Member name='Marlon Watson' title="Member of the Board" />
            <Member name='Fern Lin' title="Member of the Board" />
            <Member name='James Sunderland' title="Member of the Board" />
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: var(--members-bg);
    justify-content: start;
    padding: 180px 0px 100px 180px;
}

#memberList {
    display: flex;
    flex-direction: column;
    width: 700px;
}
</style>