<template>

	<div class="mx-auto my-[10vw] w-2/3 flex flex-col text-main">

		<TypeWriter></TypeWriter>


		<p class="flex flex-col select-none font-extrabold text-main text-lg leading-none h-[10vw]">
			 <a class="select-none text-xl text-main hover:text-accent" href="">Andrija Stankovic.</a>
		</p>

		<p class="text-base ssm:text-base-sm">
			I am a software engineering student, dedicated to learning how to build
			exceptional digital experiences and exploring different technologies.
		</p>

		<button class="w-150px h-50px bg-accent text-main my-5 bg-opacity-70 hover:bg-main hover:bg-opacity-30 hover:text-accent">Learn More</button>
	</div>


	<!-- <div class="mx-auto my-[10vw] w-2/3 flex-col text-white ">

		<TypeWriter></TypeWriter>

		<p class="select-none text-xl font-extrabold text-main">
			
			My name is 
			<a class="select-none text-main hover:text-accent" href="">Andrija Stankovic!</a>
		</p>

		<p class="text-base ">
			I’m a software engineer student, dedicated to learning how to build
			exceptional digital experiences. Currently, I’m enjoying the process of discovering new technologies and
			how to implement them in my projects.
		</p>



	</div> -->

</template>

<script>

	import TypeWriter from "../typeWriter.vue";

	export default {
		name: "hero",
		components: { TypeWriter }
	}

	window.getSelection().toString();

</script>
