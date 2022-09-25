<template>

<div class="h-[10vw] ">
	<p id="text" class="text-xl font-extrabold  text-accent select-none"></p>

</div>


<p class="text-[4vw]">My name is</p>
	
</template>

<script>
export default {
    name: "typeWriter",
    methods: {
        typeWriter(){},
        delTypeWriter(){},

    }
}



let greetingArray = ['Hello', 'Hola', 'Bonjour', 'Zdravo', '안녕하십니까', 'Здравствуй', 'Ciao', 'Hallo', 'Xαίρετε', 'Hei', 'こんにちは'];

let part = 0; // Current sentence being processed
let textPosition = 0; // Index of the letters in a word.
let interval; // setInterval Handle

// Writing Effect
function typeWriter() { 
	
	let text =  greetingArray[part].substring(0, textPosition + 1);
	document.querySelector("#text").innerHTML = text;
	textPosition++;

	// If the entire word is displayed, call delTypeWriter function.
	if(text === greetingArray[part]) {
		document.querySelector("#text").innerHTML = text + '!';
		clearInterval(interval);
		setTimeout(function() {
			interval = setInterval(delTypeWriter, 50);
		}, 1000);
	}
}

// Deletion Effect
function delTypeWriter() {
	
	let text =  greetingArray[part].substring(0, textPosition - 1);
	document.querySelector("#text").innerHTML = text;
	textPosition--;

	// If the entire word is deleted, call TypeWriter function.
	if(text === '') {
		clearInterval(interval);

		// If it reaches the end, start over, else increment to next index.
		if(part == (greetingArray.length - 1))
			part = 0;
		else
			part++;
		
		textPosition = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			interval = setInterval(typeWriter, 100);
		}, 200);
	}
}

interval = setInterval(typeWriter, 100);

</script>
