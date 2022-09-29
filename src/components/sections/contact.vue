<template>

    <Heading heading="Contact" headingNum="03"></Heading>

    <div class=" w-2/3 flex justify-center flex-col mt-[50px] mx-auto select-none mb-[50px]">

        <h1 class="text-accent text-[40px] font-bold text-center">Get in touch.</h1>
        <p class="text-main text-center text-[20px]">
            I am currently looking for any new opportunities, be it projects, interships or junior positions. Whether you have a question, proposal or just want to say hi, my inbox is always open! :)
        </p>

		<!-- Learn More Button -->
		<a href="mailto:andrijas0721@gmail.com" class="mx-auto"><button class="mx-auto w-150px h-50px bg-accent text-main my-5 bg-opacity-70 hover:bg-main hover:bg-opacity-30 hover:text-accent">
			Send Message
		</button></a>
    
    </div>

</template>

<script>

import Heading from '../heading.vue';

export default{
    name: "Contact",
    components: {
        Heading,

    }
}
</script>