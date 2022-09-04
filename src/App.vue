<script>
import Navbar from './components/navbar.vue';
import sideFooter from './components/side-footer.vue';
import hero from './components/sections/hero.vue';
import About from './components/sections/about.vue';
import Projects from './components/sections/projects.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    sideFooter,
    hero,
    About,
    Projects
}
}
</script>

<template>
  <Navbar></Navbar>
  <sideFooter></sideFooter>
  <hero></hero>
  <About></About>
  <Projects></Projects>

  <p class="w-50px h-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora perferendis accusamus
    repudiandae laborum saepe corrupti perspiciatis magnam incidunt temporibus, quos illo suscipit? Temporibus atque ea
    animi ab est consequatur quibusdam. Voluptatibus, doloribus eaque! Hic iusto, alias autem laborum distinctio dolorem
    qui cumque maxime mollitia. Reiciendis temporibus consequatur dolores reprehenderit. Perferendis sunt minima
    dignissimos magni excepturi. Molestias, at incidunt odit architecto obcaecati mollitia ipsum iusto sapiente velit
    nobis illum voluptatem labore similique quas magnam voluptatum. Quam dolor aliquid id. Ea sit unde laboriosam
    adipisci reiciendis sed, ipsam sint sunt corrupti nihil aliquid repudiandae ipsum laudantium? Expedita molestias qui
    maiores modi ipsa.</p>
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
