<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
  <div class="routes">
    <h2>Rutas de la aplicacion</h2>
    <ul>
      <li><RouterLink to="contador">Contador</RouterLink></li>
      <li><RouterLink to="usuarios">Usuarios</RouterLink></li>
      <li><RouterLink to="form">Formulario de usuarios</RouterLink></li>
    </ul>
<RouterView></RouterView>
  </div>
</template>
<style>
.routes{
  ul{
    display: flex;
    justify-content: center;
    gap: 2rem;
    li{
      list-style: none;

    }
  }
}
</style>
