<template>
<div>
      <h1>¿Quién es este pokemón?</h1>
<PokemonPicture :pokemonId="6" :mostrarPokemon="false"></PokemonPicture>
  <PokemonOptions :pokemons="pokemonAr"></PokemonOptions>
</div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '../helpers/obtenerOpcionesPokemon'
//getPokemonOptions()
export default {
  data(){
    return{
      pokemonAr:[]
    }
  },
components:{
    PokemonPicture,
    PokemonOptions
},
methods:{
 async obtenerPokemonArray(){
   this.pokemonAr= await getPokemonOptions()
      console.log('page')

   console.log(this.pokemonAr)
  }
},
mounted(){
  this.obtenerPokemonArray()
}

}
</script>

<style>

</style>