<!--Formularios-->
<template>
<div class="">
  <h2>Formulario de Usuarios</h2>
  <div class="users">
    <form @submit.prevent="enviar">
      <div class="box">
        <label for="">Nombre</label>
        <input type="text"  v-model="user.nombre" placeholder="Ingrese su nombre">
      </div>
      <div class="btn">
        <button type="submit">Enviar datos</button>
      </div>
    </form>
  </div>
</div>
</template>
<script>
import axios from 'axios';
import { reactive } from 'vue';
export default{
  setup(){
    const user=reactive({
      nombre:""
    })
    const enviar=async()=>{
      try{
      const response=await axios.post("http://localhost:3006/insert",user)
      alert("se ingresaron los datos")
      console.log(response.data)
      user.nombre=""
    }catch(e){
      console.log("hubo un erro",e)
    }}
    return {user,enviar}
  }
}
</script>
<style></style>
