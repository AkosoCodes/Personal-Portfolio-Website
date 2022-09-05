<template>

    <Heading heading="Projects" headingNum="02"></Heading>

    <Tile 
        title="The North Star Theme" 
        description="A cyan-ish dark theme extension for Visual Studio Code." 
        :languages="['VS Code', 'JSON', 'Coolors']" 
        gitLink="https://github.com/AkosoCodes/north-star-theme" 
        exLink="https://marketplace.visualstudio.com/items?itemName=AkosoCodes.north-star-theme" 
        imageURL="src/assets/images/theme.png"
    ></Tile>

    <Tile 
    flip="true"
    title="Travel Agency Web App" 
    description="A fully functioning front end side of the travel agency web application, built using the MEAN tech stack." 
    :languages="['Angular', 'TypeScript', 'NodeJS', 'CSS']" 
    gitLink="https://github.com/AkosoCodes/Travel-Agency-Frontend" 
    exLink="" 
    imageURL="src/assets/images/theme.png"
    ></Tile>

    <Tile 
    title="Travel Agency API (Backend)" 
    description="A cyan-ish dark theme extension for Visual Studio Code." 
    :languages="['JavaScript (ES6)', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose']" 
    gitLink="https://github.com/AkosoCodes/Travel-Agency-Frontend" 
    exLink="" 
    imageURL="src/assets/images/theme.png"
    ></Tile>



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

