<template>
<div id="app">
 <div>
    <router-view/>
</div>
</div>

</template>
<script>
import HomePage from '@/views/HomePage.vue'
export default {
  name: 'App',
  component:{
    HomePage
  }
}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width:100%;
  color: #2c3e50;
}

</style>
