<template>
    <div class="about">
        <Nav />
    </div>
  </template>
  
  <script>
  import Welcome from '../components/Welcome.vue'
  import Nav from '../components/Nav.vue'
  
  export default {
    name: 'About',
    components: {
      Nav,
    },
  }
  </script>
  