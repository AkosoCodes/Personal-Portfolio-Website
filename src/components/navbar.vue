<template>


    <ul id="navbar" class="flex flex-row justify-end bg-inherit sticky t-0 opacity-90  w-full h-80px border-solid border-b-4 border-accent border-opacity-50  bg-main-dark z-50">
      <li class="my-auto mx-1 p-5 text-main hover:text-accent bg-inherit"><a href="" class="bg-inherit"><span class="text-accent bg-inherit">01. </span>About</a></li>
      <li class="my-auto mx-1 p-5 text-main hover:text-accent bg-inherit"><a href="" class="bg-inherit"><span class="text-accent bg-inherit">02. </span>Projects</a></li>
      <li class="my-auto mx-1 p-5 text-main hover:text-accent bg-inherit"><a href="" class="bg-inherit"><span class="text-accent bg-inherit">03. </span>Contact</a></li>
      <li class="my-auto mx-1 p-5 text-main hover:text-accent bg-inherit">
        <form method="get" action="src/assets/files/resume.pdf">
          <button class="text-accent bg-accent bg-opacity-25 rounded-md px-5 py-1 border-accent border-[2px] hover:scale-105 hover:bg-opacity-0" type="submit">Resume</button>
        </form>

      </li>
    </ul>


</template>

<script>
export default {
  name: "nav-bar"
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
} 


</script>

<style scoped>

</style>