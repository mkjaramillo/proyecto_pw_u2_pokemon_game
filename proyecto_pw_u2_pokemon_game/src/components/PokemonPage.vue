<template>
  <div>
    <h1 v-if="!pokemonCorrecto">Espere porfavor....</h1>
    <div v-else>
      <h1>¿Quién es este pokemón?</h1>
      <PokemonPicture
        :pokemonId="pokemonCorrecto.id"
        :mostrarPokemon="mostrarPokemon"
      ></PokemonPicture>
      <PokemonOptions :pokemons="pokemonAr"></PokemonOptions>
    </div>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "../helpers/obtenerOpcionesPokemon";
//getPokemonOptions()
export default {
  data() {
    return {
      pokemonAr: [],
      pokemonCorrecto: null,
      mostrarPokemon:false
    };
  },
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  methods: {
    async obtenerPokemonArray() {
      this.pokemonAr = await getPokemonOptions();
      const numeroAleatorio = Math.floor(Math.random() * 4);
      console.log(numeroAleatorio);
      this.pokemonCorrecto = this.pokemonAr[numeroAleatorio];

      //importar varios metodos de un archivo
      console.log("page");

      console.log(this.pokemonAr);
    },
  },
  mounted() {
    this.obtenerPokemonArray();
  },
};
</script>

<style>
</style>