<!--

    This is a component that is used to display a heading with a subtitle.
    Must state the headingNum and the Heading.

    ex:
    <Heading heading="About Me" headingNum="01"></Heading>

-->


<template>
    <div class="flex flex-row justify-between w-2/3 h-auto mx-auto ">
        <h1 class="text-lg text-main hover:text-accent"><span class="text-accent">{{headingNum}}. </span>{{heading}}</h1>
        <div class="w-3/4 h-0.5 my-auto  bg-main"></div>
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