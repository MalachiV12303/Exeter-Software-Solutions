<script setup>
import Member from '../components/Member.vue'

var oscar = [`Oscar Thatcher founded Exeter in 2010 with the vision to create innovative software products that streamline business operations and enhance productivity.`, `Before founding Exeter, Oscar worked at several tech companies, where he honed his skills in software development, project management, and leadership. He held roles at TechForward and DataWorks, where he was instrumental in launching several successful enterprise software products.`, `Oscar holds a Bachelor's degree in Computer Science from Stanford University and an MBA from Harvard Business School. He is passionate about innovation, technology, and mentorship, and he regularly speaks at industry conferences and events.`]
var kara = [`Kara Snow is the Chief Design Officer and Creative Director at Exeter, where she leads the company’s design strategy and creative vision to deliver cutting-edge software solutions. With over 12 years of experience in the tech and design industries, Kara is known for her ability to create user-focused designs while championing innovation and collaboration across teams.`, `Her experience spans UX/UI design, branding, and product development, allowing her to bring a holistic, user-centric approach to every project she leads. Kara’s work has earned industry recognition for its blend of aesthetic appeal and functionality, with several of her designs winning design excellence awards.`, `She is responsible for setting the creative direction across the company, collaborating with developers, product teams, and executives to deliver software that aligns with both user needs and business goals. Kara’s leadership style focuses on nurturing creativity while ensuring efficient project delivery.`];
var jax = [`Jax Fuller is the Chief Operating Officer and Creative Director at Exeter, where he seamlessly blends operational leadership with creative direction to drive both business growth and innovative design.`, `Before joining Exeter in 2015, Jax held senior roles at several prominent tech companies. He was the Operations Manager at CodeCraft, where he streamlined business processes and scaled operations. Simultaneously, as a Creative Lead at TechWave, he was instrumental in leading design teams to develop intuitive software interfaces and experiences.`, `At Exeter, Jax oversees day-to-day operations, ensuring smooth collaboration across departments, while also leading the creative team to deliver engaging, high-quality software products. His dual role allows him to implement strategic initiatives that improve both product development and company efficiency, driving the company’s growth and reputation in the software solutions market.`];
var fern = [`Fern Lin is a distinguished Member of the Board at Exeter, bringing over 8 years of experience in technology, business strategy, and corporate governance. With a deep understanding of the software industry, Fern plays a key role in advising the company on its strategic direction and helping drive its growth in an increasingly competitive market.`, `Fern’s expertise in scaling technology companies and her ability to bridge the gap between business and technology have made her an invaluable asset to Exeter. As a Board Member, Fern offers strategic insights and governance oversight, ensuring that Exeter continues to innovate while maintaining a strong focus on its long-term goals.`, `She actively contributes to discussions on company growth, market expansion, and product development, and her guidance is instrumental in navigating the evolving tech landscape.`];
var marlon = [`Marlon Watson is a highly experienced Member of the Board at Exeter, offering over 25 years of expertise in technology, finance, and strategic growth. With a background in both the corporate and entrepreneurial sectors, Marlon provides valuable insights to help guide Exeter’s expansion and innovation in the competitive software solutions market.`, `Marlon brings a unique perspective to the board, combining financial acumen with a forward-thinking approach to technology trends and market dynamics. He works closely with the executive team to ensure the company’s strategy aligns with long-term growth, while also optimizing operational efficiency and profitability.`];
var james = [`James Sunderland is a seasoned Member of the Board at Exeter, bringing over 14 years of experience in the technology and software industries.`, `Before joining InnovateTech’s Board, James held senior leadership positions at some of the largest technology firms, including as the Chief Strategy Officer at FutureSoft and the Chief Operating Officer at SoftEdge Technologies. James has a proven track record of leading companies through periods of transformation and scaling operations in the fast-paced tech sector. As a Board Member at InnovateTech, James provides valuable strategic oversight, ensuring that the company stays at the forefront of technological innovation while aligning with market trends and customer needs.`, `His expertise in navigating complex business environments and fostering cross-industry collaborations has been instrumental in the company's ongoing success. James holds a Master’s in Business Administration from the Wharton School at the University of Pennsylvania and a Bachelor’s degree in Computer Science from MIT.`];
</script>

<template>
    <section>
        <div id="memberList" class="noSelect">
            <Member name='Oscar Thatcher' title="CEO" imageName='oscar.jpg' :contentText="oscar" />
            <Member name='Kara Snow' title="CDO / Creative Director" imageName='kara.jpg' :contentText="kara" />
            <Member name='Jax Fuller' title="COO / Creative Director" imageName='jax.jpg' :contentText="jax" />
            <Member name='Fern Lin' title="Member of the Board" imageName='fern.jpg' :contentText="fern" />
            <Member name='Marlon Watson' title="Member of the Board" imageName='marlon.jpg' :contentText="marlon" />
            <Member name='James Sunderland' title="Member of the Board" imageName='james.jpg' :contentText="james" />
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: var(--members-bg);
    justify-content: start;
    padding: 160px 0px 100px 140px;
}

#memberList {
    display: flex;
    flex-direction: column;
    width: 800px;
}
</style>