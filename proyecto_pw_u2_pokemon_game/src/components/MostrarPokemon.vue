<template>
  <div>
    <table>
        <h1>Consultar pokemon</h1>
      <tr>
        <td>
          <input v-model="id" type="text" placeholder="Ingrese número"/>
        </td>
      </tr>
      <tr>
        <td>
          <button v-on:click="obtenerNamePokemon">Consultar</button>
        </td>
      </tr>
      <tr>
        <td>
          <p><b>{{ nombre }}</b> </p>
        </td>
      </tr>
      <tr>
        <td>
          <img v-bind:src="imagen" alt="no encontrado" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      imagen: null,
      nombre: null,
    };
  },
  methods: {
    async obtenerNamePokemon() {
      const { name } = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + this.id
      ).then((r) => r.json());
      this.nombre = name;
      this.obtenerImagePokemon();
      console.log(name);

      //this.respuesta = answer;
      //this.imagen = image;
    },
    obtenerImagePokemon() {
      this.imagen =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.id +
        ".svg";

      //this.respuesta = answer;
      //this.imagen = image;
    },
  },
};
</script>

<style scoped>

table {
  margin: auto;
    background:linear-gradient(to bottom, white, rgb(185, 231, 167));

}
div{

}
</style>