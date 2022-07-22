<template>
<div>
      <h1>¿Quién es este pokemón?</h1>
<PokemonPicture :pokemonId="6" :mostrarPokemon="false"></PokemonPicture>
  <PokemonOptions></PokemonOptions>
</div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

export default {
components:{
    PokemonPicture,
    PokemonOptions
}
}
</script>

<style>

</style>