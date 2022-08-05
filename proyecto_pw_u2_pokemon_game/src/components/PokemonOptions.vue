<template>
  <div>
    <div class="options-container">
      <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id" v-on:click="$emit('eventoHijo', {idPoke:pokemon.id,idNombre:pokemon.nombre})">{{pokemon.nombre}} </li>
  
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    pokemons:{
      type:Array,
      required:true,

    }
  },
 

   
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  width: 200px;
  margin-bottom: 10px;
  cursor: pointer;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
.options-container{
    justify-content: center;
    display: flex;
}
</style>