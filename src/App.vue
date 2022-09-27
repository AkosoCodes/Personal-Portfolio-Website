<script>
import Navbar from './components/navbar.vue';
import sideFooter from './components/side-footer.vue';
import hero from './components/sections/hero.vue';
import About from './components/sections/about.vue';
import Projects from './components/sections/projects.vue';
import Contact from './components/sections/contact.vue';
import Footer from './components/footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    sideFooter,
    hero,
    About,
    Projects,
    Contact,
    Footer
}
}
</script>

<template>

  <div class="too-small-max:hidden">
    <Navbar></Navbar>
    <sideFooter></sideFooter>
    <hero id="hero"></hero>
    <!-- <About></About> -->
    <Projects id="projects"></Projects>
    <Contact id="contact"></Contact>
    <Footer></Footer>
  </div>

  <div class="too-small-min:hidden w-1/2 h-[250px] mx-auto my-[125%]">
    <h1 class="text-main text-center text-[25px]">This website is <span class="text-accent">not optimized</span> for your device. :(</h1>
  </div>

</template>

<style>
@font-face {
  font-family: Cabin;
  src: url('./assets/fonts/Cabin/Cabin-VariableFont_wdth\,wght.ttf');
}

* {
  font-family: Cabin;
  margin: 0;
  padding: 0;
  background-color: #22333B;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
