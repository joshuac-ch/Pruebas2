<template>
  <div class="contador">
  <h2>Contador: {{ cantidad }} </h2> <br>
  <div class="btn">
    <button type="button" @click="incrementar">Incrementar</button>
    <button type="button" @click="decrementar" >Decrementar</button>
  </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const cantidad=ref(0)
const incrementar=()=>{
  cantidad.value++
}
const decrementar=()=>{
  cantidad.value--
}
</script>
<style scoped>
.contador{
  border: 2px solid white;
  padding: 20px;
  width: 300px;
  height: 150px;
  border-radius: 20px;
  margin-top: 50px;
  }

.btn{
  display: flex;
  justify-content: center;
  gap: 1rem;
  button{
    border: 2px solid white;
    box-shadow: 0px 0px 12px 4px rgb(231, 229, 229);
    padding: 5px 20px;
    background-color: white;
  }
}
</style>
