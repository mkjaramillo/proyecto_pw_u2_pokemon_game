<template>
  <div>
    <h1 v-if="!pokemonCorrecto">Espere porfavor....</h1>
    <div v-else>
      <h1>¿Quién es este pókemon?</h1>
      <PokemonPicture
        :pokemonId="pokemonCorrecto.id"
        :mostrarPokemon="mostrarPokemon"
      ></PokemonPicture>
      <PokemonOptions
        :pokemons="pokemonAr"
        @eventoHijo="validarRespuesta($event)"
      ></PokemonOptions>
      <div v-if="mostrarMensaje">
        <h1>{{ mensajeResultado }}</h1>
        <button v-on:click="resetearJuego">Nuevo Juego</button>
      </div>
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
      mostrarPokemon: false,
      mensajeResultado: "",
      mostrarMensaje: false,
    };
  },
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  methods: {
    async cargaPokemonInicial() {
      this.pokemonAr = await getPokemonOptions();
      const numeroAleatorio = Math.floor(Math.random() * 4);
      console.log(numeroAleatorio);
      this.pokemonCorrecto = this.pokemonAr[numeroAleatorio];

      //importar varios metodos de un archivo
      console.log("page");

      console.log(this.pokemonAr);
    },
    validarRespuesta(pokemonSeleccionadoHijo) {
      const idPoke=pokemonSeleccionadoHijo.idPoke
      const namePoke=pokemonSeleccionadoHijo.idNombre
      this.mostrarPokemon = true;
      console.log("se emitio un evento");
      console.log(pokemonSeleccionadoHijo);
      if (this.pokemonCorrecto.id === idPoke) {
        console.log(namePoke);
        this.mensajeResultado = `CORRECTO, ${this.pokemonCorrecto.nombre}`;
      } else {
        console.log("incorrecto");
        this.mensajeResultado = `ERROR POKEMON CORRECTO ES: ${this.pokemonCorrecto.nombre}`;
      }
      this.mostrarMensaje=true
    },
    resetearJuego(){
      this.pokemonAr=[]
      this.pokemonCorrecto=null
      this.mostrarPokemon=false
      this.mensajeResultado=""
      this.mostrarMensaje=false
      this.cargaPokemonInicial()
    }

  },
  mounted() {
    this.cargaPokemonInicial();
  },
};
</script>

<style>
</style>