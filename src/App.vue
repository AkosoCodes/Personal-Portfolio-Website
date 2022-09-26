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
  <Navbar></Navbar>
  <sideFooter></sideFooter>
  <hero></hero>
  <!-- <About></About> -->
  <Projects></Projects>
  <!-- <Contact></Contact>
  <Footer></Footer> -->

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
