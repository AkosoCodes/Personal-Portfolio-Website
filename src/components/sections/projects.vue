<template>

    <Heading heading="Projects" headingNum="02"></Heading>

    <h2>Featured Projects:</h2>

    <Tile></Tile>


</template>


<script>

    import Heading from '../heading.vue';
    import Tile from '../tile.vue';

    export default{
        name: "projects",
        components: { 
            Heading,
            Tile
        },

    }

</script>

