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
    description="A fully functioning frontend side of the travel agency web application, built using the MEAN tech stack." 
    :languages="['Angular', 'TypeScript', 'NodeJS', 'CSS']" 
    gitLink="https://github.com/AkosoCodes/Travel-Agency-Frontend" 
    exLink="" 
    imageURL="src/assets/images/theme.png"
    ></Tile>

    <Tile 
    title="Travel Agency API (Backend)" 
    description="A fully functioning backend side of the travel agency web application. It was built in JavaScript, and uses a non-relational MongoDB database." 
    :languages="['JavaScript (ES6)', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose']" 
    gitLink="https://github.com/AkosoCodes/Travel-Agency-Frontend" 
    exLink="" 
    imageURL="src/assets/images/theme.png"
    ></Tile>

    <Tile 
    flip="true"
    title="Connect Four Game" 
    description="The Connect 4 game is a classic strategy game in which players alternately place pieces on a grid. It is terminal based and built using C programming language. " 
    :languages="['C', 'Terminal']" 
    gitLink="https://github.com/AkosoCodes/Travel-Agency-Frontend" 
    exLink="" 
    imageURL="src/assets/images/theme.png"
    ></Tile>

    <div class="w-2/3 h-auto rounded-lg bg-accent mx-auto mb-50px z-0">

        <h1 class="text-main text-center text-[35px]">For other projects, feel free to check <a class="hover:text-main text-accent" href="https://www.github.com/AkosoCodes" target="_blank">my GitHub Profile.</a></h1>

    </div>


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

