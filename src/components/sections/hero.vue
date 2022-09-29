<template>

	<!-- Hero Section Container -->
	<div class="nav-sm:w-[80%] ssm:w-[85%] mx-auto w-2/3 flex flex-col text-main">

		<!-- TypeWriter -->
		<TypeWriter></TypeWriter>

		<!-- Header -->
		<p class="flex flex-col select-none font-extrabold text-main text-lg leading-none h-[10vw] ssm:h-[50px] mt-[5px]">
			<span class="ssm:text-[40px] select-none text-xl text-main ">
				I'm 
				<span class="hover:text-accent">Andrija.</span>
			</span>
		</p>

		<!-- Description -->
		<p class="text-base ssm:text-base-sm">
			I am a software engineering student, dedicated to learning how to build
			exceptional digital experiences and exploring different technologies.
		</p>

		<!-- Learn More Button -->
		<button class="w-150px h-50px bg-accent text-main my-5 bg-opacity-70 hover:bg-main hover:bg-opacity-30 hover:text-accent">
			Learn More
		</button>

	</div>

</template>

<script>

	import TypeWriter from "../typeWriter.vue";

	export default {
		name: "hero",
		components: { TypeWriter }
	}

</script>
