<template>
  <div>
    
      <img src="./assets/logo.png" alt="" />
    
   
      <router-view></router-view>
      <componente-picture></componente-picture>
  
  </div>
</template>

<script>

import ComponentePicture from "../src/modulos/pokemon/componentes/componentePicture.vue";
export default {
  name: "App",
  components: {
    
    ComponentePicture,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
