<template>

    <!-- Heading Component -->
    <div :id=tempID>
        <div  class="heading-md:w-[85%] md:w-[70%] ssm:hidden flex flex-row justify-between w-2/3 h-auto mx-auto select-none">
            <h1 class="heading-md:text-[6vw] md:text-[5vw] text-main hover:text-accent"><span class="text-accent">{{headingNum}}. </span>{{heading}}</h1>
            <div class="heading-md:w-[60%] md:w-3/5 h-0.5 my-auto  bg-main"></div>
        </div>
    
        <div class="heading-md:w-[85%] md:w-[70%] ssm:block hidden flex flex-row justify-left w-2/3 h-auto mx-auto my-[20px] select-none">
            <h1 class="text-[35px]  text-main hover:text-accent"><span class="text-accent">{{headingNum}}. </span>{{heading}}</h1>
        </div>
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
            },
            tempID: {
                type: String,
                required: true
            }
        },
    }
</script>