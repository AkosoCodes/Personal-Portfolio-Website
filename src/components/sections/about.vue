<template>

    <div>
        <Heading tempID="about" heading="About" headingNum="01"></Heading>

        <div class="nav-sm:w-[80%] ssm:w-[85%] w-2/3 flex justify-center flex-col mx-auto select-none">
    
            <h1 class="text-accent text-[40px] font-bold text-center">Who am I?</h1>
            
            <p class="w-full text-base ssm:text-base-sm text-main">
            
                I'm Andrija, a third-year student striving to become a software engineer. My main passion is connecting the dots: be it ideas from different disciplines, individuals from different teams, or applications from various industries. <br><br>
                
                My interest in tech started way back since I could remember. As any other kid, I was inquisitive  with how things work. Whether it'd be electronics, or video games, my curiousity would guide me on a journy to find and understand the logic behind it.<br><br>
        
                Fast-forward to today, and I’ve been enjoying the process of diversifying my skillsets in various fields. My main focus these days is on <span class="text-accent">Web Development</span> as working with different technologies and languages to build one product is a puzzle which I enjoy to solve.<br><br>
        
            </p>
    
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