<template>
  <div class="response">
    <ul v-if="response">
      <li v-for="user in response" :key="user.id" class="users">
        <strong>{{ user.firstName }} {{ user.lastName }}</strong> -
        <em>{{ user.role }}</em> ({{ user.email }})
        <button class="btn-delete" @click="onDelete(user.id)">
          Supprimer
        </button>
      </li>

    </ul>
    <h1 v-else>EMPTY Users</h1>



  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import useAPIRequest from "@/api/useAPIRequest.js";

const response = ref([]); // Déclarer response comme réactive
const { request: deleteRequest, errorMessage: errDelete, loading } = useAPIRequest({ method: 'DELETE' });
const { request: getRequest } = useAPIRequest({ method: 'GET' });

onMounted(async () => {

   const {data, error, request} = useAPIRequest({method : "GET"});

   response.value = await request({endpoint : "/users"})
});


async function onDelete(userId) {
  try {
    await deleteRequest({ endpoint: `/users/${userId}` });
    // Mise à jour correcte de la liste
    let userDelete = response.value.filter(user => user.id === userId)[0];

    console.log(userDelete);
    response.value = response.value.filter(user => user.id !== userId);
    window.toast(response?.message || `Utilisateur ${userDelete.firstName} supprimé avec succès.`, 'success');

  } catch (error) {

    // Message par défaut
    let msg = 'Une erreur est survenue.';

    // Si backend a bien répondu avec un message
    if (error?.response?.data?.message) {
      msg = error.response.data.message;
    }

    // Si backend ne répond pas ou autre souci
    else if (error?.message) {
      msg = error.message;
    }

    window.toast(msg, 'error');
  }
}

</script>

<style scoped>
  .users{
    color: black;
  }
  ul{
    padding: 0;
    list-style-type: none;
  }
  .response{
    margin: 2em auto;
    display: flex;
    justify-content: center;
    color : black;
  }

  .users{
    padding: 0.5em;
    color: black;
  }
</style>