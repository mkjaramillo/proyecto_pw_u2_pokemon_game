<template>
  <div>
    <div class="pokemon-container">
      <img class="pokemon-oculto" :src="imagenFuente" alt="no existe imagen" />

      <img v-if="mostrarPokemon" :src="imagenFuente" alt="no existe imagen" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    mostrarPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-oculto {
  filter: brightness(0);
}
img {
  height: 200px;
  position: absolute;
  right: 40%;
}
.pokemon-container {
  height: 300px;
}
</style>