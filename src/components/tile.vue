<template>      


    <div class="flex flex-row relative w-2/3 h-[400px] bg-test m-auto">

        <div class="flex flex-col relative w-3/6 h-[400px] justify-center bg-accent">

            <!-- Type -->
            <p>Featured Project:</p>

            <!-- Title -->
            <h2>Title of Project</h2>

            <!-- Description -->
            <div class="bg-test w-7/6">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis esse temporibus nesciunt aperiam accusantium atque eaque, amet est? Quaerat cumque animi eum illum, dignissimos architecto! Unde ullam porro sit magni!</p>
            </div>

            <!-- Language Tags -->
            <div class="">
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>

                </ul>
            </div>

            <!-- Links -->
            <div class="">
                <ul>
                    <li>link1</li>
                    <li>link2</li>
                </ul>
            </div>
        </div>

        <div class="w-3/6 h-[400px] bg-test">
            <img class=" w-full h-[400px]" src="../assets/images/me.jpg" alt="">
        </div>
    </div>

</template>

<script>

    export default{
        name: "tile",
        props: [],
    }
</script>