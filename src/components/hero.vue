<template>

    <div class="mx-auto my-20 w-2/3 flex-col text-white ">
        <p id="greeting" class=" text-xl font-extrabold h-80px text-ali"></p>
        <p class=" text-xl font-extrabold"><span class="text-accent">My name is </span>Andrija Stankovic!</p>
        <p class=" text-base">I’m a software engineer student, dedicated to building (and occasionally designing)
            exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</p>
        <button class="w-150px h-50px bg-accent text-main my-5  hover:bg-main hover:text-accent"
            v-on:click="writeType()">Learn More</button>
        <button class="w-150px h-50px bg-accent text-main my-5  hover:bg-main hover:text-accent"
            v-on:click="deleteType()">Learn More</button>

    </div>
</template>

<script>
export default {
    name: "hero",
    data() {
        return {
    
        }
    },
    methods: {

        writeType() {
            if (i < greetings[greetNum].length) {
                document.getElementById("greeting").innerHTML += greetings[greetNum].charAt(i);
                i++;
                setTimeout(writeType, speed);
            }
        },

        deleteType() {
            if(greetings[greetNum].length != 0)
            document.getElementById("greeting").innerHTML = document.getElementById("greeting").innerHTML.substring(0, document.getElementById("greeting").innerHTML.length-1);
            setTimeout(deleteType, speed);
            increment();
        },
        typeWriter() {
            setTimeout(writeType, 1000);
            setTimeout(deleteType, 1000);
        }
    },
}

var i = 0;
let greetNum= 0;
var speed = 50;
let greetings= ['hello', 'hola', 'bonjour', 'ciao', '안녕하십니까', 'pривет', 'zdravo', 'hallo', 'hei', 'xαίρετε', 'こんにちは'];

function writeType() {
    if (i < greetings[greetNum].length) {
        document.getElementById("greeting").innerHTML += greetings[greetNum].charAt(i);
        i++;
        setTimeout(writeType, speed);
    }

}

function deleteType() {
    if (greetings[greetNum].length != 0) {
        document.getElementById("greeting").innerHTML = document.getElementById("greeting").innerHTML.substring(0, document.getElementById("greeting").innerHTML.length - 1);
        setTimeout(deleteType, speed);
        increment();
    }

    greetNum++;

}

function increment(){
    greetNum++;
}




</script>
