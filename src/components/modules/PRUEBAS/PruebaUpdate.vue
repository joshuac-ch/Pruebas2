<template>
<div class="pruebas">
  <h2>Pruebas Update</h2>
  <form action="" @submit.prevent="Actualizar">
    <div>
    <label for="">Ingresar id</label>
    <br>
    <input type="number" placeholder="ingrese id" v-model="id">
    </div>
    <div>
      <label for="">Ingresar nombre</label>
      <br>
      <input type="text" placeholder="ingrese el nombre" v-model="nombre">
    </div>
    <div>
      <button type="submit">Actualizar datos</button>
    </div>
  </form>
</div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup(){
    const id=ref("")
    const nombre=ref("")
    const Actualizar=async()=>{
      try{
        const res=await axios.put(`http://localhost:3006/pruebas/update/user/${id.value}`,{
         nombre:nombre.value
        })
        console.log("datos actualizados",res.data)
        alert("se actualizaron los datos")
      }catch(e){
        alert("Error al actualizar los datos")
        console.log("hubo un error",e)
      }
    }
    return {Actualizar,id,nombre}
  }
}
</script>
<style>
</style>
