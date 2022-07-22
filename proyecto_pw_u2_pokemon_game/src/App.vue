<template>
<div>
 
 
 <PokemonPage></PokemonPage>
</div>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PokemonPage from'@/components/PokemonPage.vue'
import MostrarPokemon from '@/components/MostrarPokemon.vue'
export default {
  name: 'App',
  components: {
    
    MostrarPokemon,
    PokemonPage
}
}
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
