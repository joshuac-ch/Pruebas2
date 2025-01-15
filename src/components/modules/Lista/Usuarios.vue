<template>
  <h2>Welcome to Users</h2>
    <ul>
      <li v-for="u in usuarios" :key="u.id">
        {{ u.nombre }}
      </li>
    </ul>
</template>
<script >
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default{
  setup(){
    const usuarios=ref([])
    onMounted(()=>{
      axios.get("http://localhost:3006/")
      .then(res=>{
        console.log(res.data)
        usuarios.value=res.data
      })
      .catch(e=>{
        console.log("Error: ",e)
      })
    })
    return {usuarios}
  }
}

</script>
<style>
</style>
