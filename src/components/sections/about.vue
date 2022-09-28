<template>

    <Heading id="about" heading="About" headingNum="01"></Heading>

    <div class="nav-sm:flex-col flex flex-row justify-between  w-2/3 h-auto mx-auto">
        <p class="w-3/6 text-small text-main">
        
        I'm Andrija, a third-year student striving to become a software engineer. My main passion is connecting the dots: be it ideas from different disciplines, individuals from different teams, or applications from various industries. <br><br>
        
        My interest in tech started way back since I could remember. As any other kid, I was inquisitive  with how things work. Whether it'd be electronics, or video games, my curiousity would guide me on a journy to find and understand the logic behind it.<br><br>

        Fast-forward to today, and I’ve been enjoying the process of diversifying my skillsets in various fields. My main focus these days is on Web Development, as working with different technologies and languages to build one product is a puzzle which I enjoy to solve.<br><br>

        Some of the most recent technologies I've been working with are:
        </p>

        <div class="bg-accent w-300px h-300px ">
            <img class="w-300px h-300px opacity-40 border-[10px] border-accent hover:border-[5px] hover:opacity-100" src="../../assets/images/me.jpg">
            
        </div>
        
    </div>



</template>

<script>
    import Heading from '../heading.vue';

    export default {
        name: "about",
        components: { Heading }
    }
    

</script>