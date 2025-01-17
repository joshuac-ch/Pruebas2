<template>
<div class="">
  <h1>welcome at test Api</h1>
  <div class="caja">
    <form action="" @submit.prevent="funtionAcutalidar">
      <input type="number" placeholder="ingrese el id" v-model="id2" >
      <input type="text" placeholder="ingrese el noimbre" v-model="nombre" name="" id="">
      <button type="submit">enviar datos</button>
    </form>
  </div>
</div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup(){
  const id2=ref(0)
  const nombre=ref("")
  const funtionAcutalidar=async()=>{
    const response=axios.put(`http://localhost:3006/update/use/${id2.value}`,{
      nombre:nombre.value
    }).then(data=>{
      console.log("datos actualizados correctamente",data.data)
    alert("se actualizaron los datos")
    }).catch(e=>{
      alert("hubo un error")
      console.log("hubop un error",e)
    })

  }
  return {funtionAcutalidar,nombre,id2}
}
}
</script>
<style>
</style>

