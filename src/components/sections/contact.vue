<template>

    <Heading tempID="contact" heading="Contact" headingNum="03"></Heading>

    <div class="nav-sm:w-[80%] ssm:w-[85%] w-2/3 flex justify-center flex-col  mx-auto select-none mb-[50px]">

        <h1 class="text-accent text-[40px] font-bold text-center">Get in touch.</h1>
        <p class="text-main text-center text-base ssm:text-base-sm">
            I am currently looking for any new opportunities, be it projects, interships or junior positions. Whether you have a question, proposal or just want to say hi, my inbox is always open! :)
        </p>

		<!-- Learn More Button -->
        <div class="mx-auto">
            <a href="mailto:andrijas0721@gmail.com" class=""><button class=" w-150px h-50px bg-accent text-main my-5 bg-opacity-70 hover:bg-main hover:bg-opacity-30 hover:text-accent">
                Send Email
            </button></a>
    
            <a href="tel:+381695566136" class="ml-[10px]"><button class="w-50px h-50px bg-accent text-main my-5 bg-opacity-70 hover:bg-main hover:bg-opacity-30 hover:text-accent">
                Call
            </button></a>
        </div>
    
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