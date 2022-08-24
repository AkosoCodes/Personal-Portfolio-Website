<template>


    <ul id="navbar" class="flex flex-row justify-end bg-inherit sticky t-0 opacity-90  w-full h-80px border-solid border-b-4 border-accent border-opacity-50  bg-main-dark z-10">
      <li class="my-auto mx-1 p-5 text-main hover:text-accent bg-inherit"><a href="" class="bg-inherit"><span class="text-accent bg-inherit">01. </span>About</a></li>
      <li class="my-auto mx-1 p-5 text-main hover:text-accent bg-inherit"><a href="" class="bg-inherit"><span class="text-accent bg-inherit">02. </span>Projects</a></li>
      <li class="my-auto mx-1 p-5 text-main hover:text-accent bg-inherit"><a href="" class="bg-inherit"><span class="text-accent bg-inherit">03. </span>Resume</a></li>
      <li class="my-auto mx-1 mr-20 p-5 text-main hover:text-accent bg-inherit"><a href="" class="bg-inherit"><span class="text-accent bg-inherit">04. </span>Contact</a></li>

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