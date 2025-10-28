<script setup>
import Member from '../components/Member.vue'

const oscar = { name: "Oscar Thatcher", imgSrc: "oscar.jpg", title: "CEO", description: "Oscar Thatcher founded Exeter in 2010 with the vision to create innovative software products that streamline business operations and enhance productivity. Before founding Exeter, Oscar worked at several tech companies, where he honed his skills in software development, project management, and leadership." };
const kara = { name: "Kara Snow", imgSrc: "kara.jpg", title: "CDO / Creative Director", description: "Kara Snow is the Chief Design Officer and Creative Director at Exeter, where she leads the company’s design strategy and creative vision to deliver cutting-edge software solutions. With over 12 years of experience in the tech and design industries, Kara is known for her ability to create user-focused designs while championing innovation and collaboration across teams." };
const jax = { name: "Jax Fuller", imgSrc: "jax.jpg", title: "COO / Creative Director", description: "Jax Fuller is the Chief Operating Officer and Creative Director at Exeter, where he seamlessly blends operational leadership with creative direction to drive both business growth and innovative design." };
const fern = { name: "Fern Lin", imgSrc: "fern.jpg", title: "Member of the Board", description: "Fern Lin is a distinguished Member of the Board at Exeter, bringing over 8 years of experience in technology, business strategy, and corporate governance. With a deep understanding of the software industry, Fern plays a key role in advising the company on its strategic direction and helping drive its growth in an increasingly competitive market." };
const marlon = { name: "Marlon Watson", imgSrc: "marlon.jpg", title: "Member of the Board", description: "Marlon Watson is a highly experienced Member of the Board at Exeter, offering over 25 years of expertise in technology, finance, and strategic growth. With a background in both the corporate and entrepreneurial sectors, Marlon provides valuable insights to help guide Exeter’s expansion and innovation in the competitive software solutions market." };
const james = { name: "James Sunderland", imgSrc: "james.jpg", title: "Member of the Board", description: "James Sunderland is a seasoned Member of the Board at Exeter, bringing over 14 years of experience in the technology and software industries." };

// var kara = [`Kara Snow is the Chief Design Officer and Creative Director at Exeter, where she leads the company’s design strategy and creative vision to deliver cutting-edge software solutions. With over 12 years of experience in the tech and design industries, Kara is known for her ability to create user-focused designs while championing innovation and collaboration across teams.`, `She is responsible for setting the creative direction across the company, collaborating with developers, product teams, and executives to deliver software that aligns with both user needs and business goals. Kara’s leadership style focuses on nurturing creativity while ensuring efficient project delivery.`];
// var jax = [`Jax Fuller is the Chief Operating Officer and Creative Director at Exeter, where he seamlessly blends operational leadership with creative direction to drive both business growth and innovative design.`, `At Exeter, Jax oversees day-to-day operations, ensuring smooth collaboration across departments, while also leading the creative team to deliver engaging, high-quality software products. His dual role allows him to implement strategic initiatives that improve both product development and company efficiency, driving the company’s growth and reputation in the software solutions market.`];
// var fern = [`Fern Lin is a distinguished Member of the Board at Exeter, bringing over 8 years of experience in technology, business strategy, and corporate governance. With a deep understanding of the software industry, Fern plays a key role in advising the company on its strategic direction and helping drive its growth in an increasingly competitive market.`, `Fern’s expertise in scaling technology companies and her ability to bridge the gap between business and technology have made her an invaluable asset to Exeter. As a Board Member, Fern offers strategic insights and governance oversight, ensuring that Exeter continues to innovate while maintaining a strong focus on its long-term goals.`];
// var marlon = [`Marlon Watson is a highly experienced Member of the Board at Exeter, offering over 25 years of expertise in technology, finance, and strategic growth. With a background in both the corporate and entrepreneurial sectors, Marlon provides valuable insights to help guide Exeter’s expansion and innovation in the competitive software solutions market.`, `Marlon brings a unique perspective to the board, combining financial acumen with a forward-thinking approach to technology trends and market dynamics. He works closely with the executive team to ensure the company’s strategy aligns with long-term growth, while also optimizing operational efficiency and profitability.`];
// var james = [`James Sunderland is a seasoned Member of the Board at Exeter, bringing over 14 years of experience in the technology and software industries.`, `His expertise in navigating complex business environments and fostering cross-industry collaborations has been instrumental in the company's ongoing success. James holds a Master’s in Business Administration from the Wharton School at the University of Pennsylvania and a Bachelor’s degree in Computer Science from MIT.`];
</script>

<template>
    <section>
        <div id="memberList" class="">
            <Member :name="oscar.name" :title="oscar.title" :imageName="oscar.imgSrc"
                :contentText="oscar.description" />
            <Member :name="kara.name" :title="kara.title" :imageName="kara.imgSrc" :contentText="kara.description" />
            <Member :name="jax.name" :title="jax.title" :imageName="jax.imgSrc" :contentText="jax.description" />
            <Member :name="fern.name" :title="fern.title" :imageName="fern.imgSrc" :contentText="fern.description" />
            <Member :name="marlon.name" :title="marlon.title" :imageName="marlon.imgSrc"
                :contentText="marlon.description" />
            <Member :name="james.name" :title="james.title" :imageName="james.imgSrc"
                :contentText="james.description" />
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: var(--members-bg);
}

#memberList {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    padding: 8rem 0;
    gap: 2rem;
}

@media screen and (min-width: 1200px) {
    #memberList {
        max-width: 650px;
    }
}
</style>