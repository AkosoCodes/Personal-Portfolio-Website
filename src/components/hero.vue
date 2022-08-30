<template>

	<div class="mx-auto my-[10vw] w-2/3 flex-col text-white ">

		<TypeWriter></TypeWriter>

		<p class="select-none text-xl font-extrabold text-main">
			
			My name is 
			<a class="select-none text-main hover:text-accent" href="">Andrija Stankovic!</a>
		</p>

		<p class="text-base">
			I’m a software engineer student, dedicated to learning how to build
			exceptional digital experiences. Currently, I’m enjoying the process of discovering new technologies and
			how to implement them in my projects.
		</p>

		<button
			class="w-150px h-50px bg-accent text-main my-5 bg-opacity-70 hover:bg-main hover:bg-opacity-30 hover:text-accent">CLICK
			ME
		</button>

	</div>

</template>

<script>

	import TypeWriter from "./typeWriter.vue";

	export default {
		name: "hero",
		components: { TypeWriter }
	}

	window.getSelection().toString();

</script>
