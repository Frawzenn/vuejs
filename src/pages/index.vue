<template>
  <div class="homeHaut">
    <Nav />
    <textHeader />
    <artiste />
    <basIndex />
  </div>
  <div class="homeBas">
    <IndexAussiDispo />
    <testFooter />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import textHeader from '../components/textHeader.vue'
import artiste from '../components/artiste.vue'
import basIndex from '../components/basIndex.vue';
import IndexAussiDispo from '../components/indexAussiDispo.vue';
import testFooter from '../components/testFooter.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    textHeader,
    artiste,
    basIndex,
    IndexAussiDispo,
    testFooter,
},
}
</script>

<style>
  .homeHaut{
    background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
    font-family: 'montserra', sans-serif;
    border-bottom-left-radius: 150px ;
    border-bottom-right-radius: 150px;
  }

  .homeBas{
    background: white;
    font-family: 'montserra', sans-serif;
  }
</style>

