<template>
  <div>
    <div class="options-container">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
   
};
</script>

<style>
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