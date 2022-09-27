<template>

    <!-- Heading Component -->

    <div class="heading-md:w-[85%] md:w-[70%] flex flex-row justify-between w-2/3 h-auto mx-auto ">
        <h1 class="heading-md:text-[6vw] md:text-[5vw] text-main hover:text-accent"><span class="text-accent">{{headingNum}}. </span>{{heading}}</h1>
        <div class="heading-md:w-[60%] md:w-3/5 h-0.5 my-auto  bg-main"></div>
    </div>
</template>

<script>

    export default {
        name: "heading",
        props: {
            headingNum: {
                type: String,
                required: true
            },
            heading: {
                type: String,
                required: true
            }
        },
    }
</script>