<template>

  <!-- Burger Navbar -->
  <ul v-if="showHiddenDiv" class="nav-sm:visible md:hidden flex flex-col h-full w-[70%] justify-center mx-auto text-base bg-main-dark fixed right-0 z-50">

    <!-- Burger Icon -->
    <button v-on:click="toggleHidden()" class=" bg-inherit absolute top-0 right-0 m-10px mr-[15px]">
      <svg v-if="!showClose" class="bg-inherit fill-main hover:fill-accent z-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px">
        <path
          d="M25.707,6.293c-0.195-0.195-1.805-1.805-2-2c-0.391-0.391-1.024-0.391-1.414,0c-0.195,0.195-17.805,17.805-18,18c-0.391,0.391-0.391,1.024,0,1.414c0.279,0.279,1.721,1.721,2,2c0.391,0.391,1.024,0.391,1.414,0c0.195-0.195,17.805-17.805,18-18C26.098,7.317,26.098,6.683,25.707,6.293z" 
        />
        <path
          d="M23.707,25.707c0.195-0.195,1.805-1.805,2-2c0.391-0.391,0.391-1.024,0-1.414c-0.195-0.195-17.805-17.805-18-18c-0.391-0.391-1.024-0.391-1.414,0c-0.279,0.279-1.721,1.721-2,2c-0.391,0.391-0.391,1.024,0,1.414c0.195,0.195,17.805,17.805,18,18C22.683,26.098,23.317,26.098,23.707,25.707z" 
        />
      </svg>
    </button>

    <!-- About -->
    <li class="w-[145px] mx-auto py-2  text-main  bg-inherit">
      <a href="" class="flex flex-col justify-center bg-inherit">
        <span class="text-accent bg-inherit mx-auto">01. </span>
        <span class="text-main bg-inherit mx-auto hover:text-accent">About Me</span>
      </a>
    </li>

    <!-- Projects -->
    <li class="w-[145px] mx-auto py-5 text-main hover:text-accent bg-inherit">
      <a href="" class="flex flex-col  mx-auto bg-inherit">
        <span class="text-accent mx-auto bg-inherit">02. </span>
        <span class="text-main bg-inherit mx-auto hover:text-accent">Projects</span>
      </a>
    </li>

    <!-- Contact -->
    <li class="w-[145px] mx-auto py-2 text-main hover:text-accent bg-inherit">
      <a href="" class="flex flex-col  mx-auto bg-inherit">
        <span class="text-accent mx-auto bg-inherit">03. </span>
        <span class="text-main bg-inherit mx-auto hover:text-accent">Contact</span>
      </a>
    </li>
    
    <!-- Resume -->
    <li class="mx-auto py-5 text-main hover:text-accent bg-inherit">
      <form method="get" action="src/assets/files/resume.pdf">
        <button class="text-accent bg-accent bg-opacity-25 rounded-md px-5 py-1 border-accent border-[2px] hover:scale-105 hover:bg-opacity-0" type="submit">
          Resume
        </button>
      </form>
    </li>

  </ul>

  <!-- Normal Navbar -->
  <div id="navbar" class=" flex flex-row justify-end sticky opacity-90 t-0 w-full h-80px border-solid border-b-[3px] border-accent border-opacity-50  bg-main-dark z-30">

    <!-- Item List -->
    <ul class="nav-sm:hidden flex flex-row justify-end sticky t-0 opacity-90  w-full h-80px border-solid border-b-[3px] border-accent border-opacity-50  bg-main-dark z-50">

      <!-- About -->
      <li class="my-auto mx-1 p-5 text-main hover:text-accent bg-inherit">
        <a href="" class="bg-inherit">
          <span class="text-accent bg-inherit">01.</span>
          About
        </a>
      </li>
      
      <!-- Projects -->
      <li class="my-auto mx-1 p-5 text-main hover:text-accent bg-inherit">
        <a href="" class="bg-inherit">
          <span class="text-accent bg-inherit">02.</span>
          Projects
        </a>
      </li>

      <!-- Contact -->
      <li class="my-auto mx-1 p-5 text-main hover:text-accent bg-inherit">
        <a href="" class="bg-inherit">
          <span class="text-accent bg-inherit">03.</span>
          Contact
        </a>
      </li>

      <!-- Resume -->
      <li class="my-auto mx-1 mr-[20px] p-5 text-main hover:text-accent bg-inherit">
        <form method="get" action="src/assets/files/resume.pdf">
          <button class="text-accent bg-accent bg-opacity-25 rounded-md px-5 py-1 border-accent border-[2px] hover:scale-105 hover:bg-opacity-0" type="submit">
            Resume
          </button>
        </form>
      </li>

    </ul>

    <!-- Burger Toggle -->
    <button v-on:click="toggleHidden()" class="nav-sm:visible md:hidden bg-inherit justify-end m-10px mr-[15px]">

      <!-- Open Icon -->
      <svg v-if="showClose" class="bg-inherit stroke-main hover:stroke-accent" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30" width="50px" height="50px">
        <path class="stroke-main hover:stroke-accent" stroke-linecap="" stroke-linejoin="round" stroke-miterlimit="10"
          stroke-width="3" d="M3 15L27 15M3 8L27 8M3 22L27 22" />
      </svg>

      <!-- Close Icon -->
      <svg v-if="!showClose" class="bg-inherit fill-main hover:fill-accent z-70" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30" width="50px" height="50px">
        <path
          d="M25.707,6.293c-0.195-0.195-1.805-1.805-2-2c-0.391-0.391-1.024-0.391-1.414,0c-0.195,0.195-17.805,17.805-18,18c-0.391,0.391-0.391,1.024,0,1.414c0.279,0.279,1.721,1.721,2,2c0.391,0.391,1.024,0.391,1.414,0c0.195-0.195,17.805-17.805,18-18C26.098,7.317,26.098,6.683,25.707,6.293z" />
        <path
          d="M23.707,25.707c0.195-0.195,1.805-1.805,2-2c0.391-0.391,0.391-1.024,0-1.414c-0.195-0.195-17.805-17.805-18-18c-0.391-0.391-1.024-0.391-1.414,0c-0.279,0.279-1.721,1.721-2,2c-0.391,0.391-0.391,1.024,0,1.414c0.195,0.195,17.805,17.805,18,18C22.683,26.098,23.317,26.098,23.707,25.707z" />
      </svg>

    </button>

  </div>

</template>

<script>
  export default {
    name: "nav-bar",
    data() {
      return {
        showHiddenDiv,
        showClose,
      }
    },
    methods: {
      toggleHidden() {
        this.showHiddenDiv = !this.showHiddenDiv
        this.showClose = !this.showClose
      }
    }
  }

  // Initial States
  let showHiddenDiv = false;
  let showClose = true;
  var prevScrollpos = window.pageYOffset;
   
  // Show Navbar on Scroll
  window.onscroll = function () {

    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

</script>