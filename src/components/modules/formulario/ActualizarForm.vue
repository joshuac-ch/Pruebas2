<template>
  <div>
    <h1>Actualizar Usuario</h1>
    <form @submit.prevent="actualizarUsuario">
      <label for="id">ID del usuario:</label>
      <input v-model="id" type="number" id="id" required />

      <label for="imagen">Nombre:</label>
      <input v-model="nombre" type="text" id="nombre" required />



      <button type="submit">Actualizar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { reactive,ref } from "vue";

export default {
  setup() {
    // Variables reactivas para el formulario
    const id=ref("")
    const  nombre=ref("")

    //const id = ref(""); // ID del usuario a actualizar
    //const nombre = ref("");
    // Método para actualizar usuario
    const actualizarUsuario = async () => {
      try {
        const response = await axios.put(
          `http://localhost:3006/usuarios/update/${id.value}`,
          {
           nombre:nombre.value
          }
        );
        console.log("Registro actualizado:", response.data);
        alert("Usuario actualizado exitosamente");
      } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        alert("Error al actualizar el usuario");
      }
    };
    // Devuelve las variables y métodos para usarlos en el template
    return {
      id,
      nombre,
      actualizarUsuario
    };
  },
};
</script>
