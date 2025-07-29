<template>
  <div class="response">
    <ul v-if="response">
      <li v-for="user in response" :key="user._id" class="users">
        <strong>{{ user.firstName }} {{ user.lastName }}</strong> -
        <em>{{ user.role }}</em> ({{ user.email }})
        <button class="btn-delete" @click="onDelete(user.id)">
          Supprimer
        </button>
      </li>

    </ul>
    <h1 v-else>EMPTY Users</h1>


    <!--    <ul v-if="response">-->
<!--      <li v-for="user in response.value" :key="user._id">-->
<!--        {{ user.firstName }} {{ user.lastName }}-->
<!--      </li>-->
<!--    </ul>-->
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import useAPIRequest from "@/api/useAPIRequest.js";

const response = ref([]); // Déclarer response comme réactive
const { request: deleteRequest, errorMessage: errDelete, loading } = useAPIRequest({ method: 'DELETE' });

onMounted(async () => {

   const {data, error, request} = useAPIRequest({method : "GET"});
   console.log(data);
   response.value = await request({endpoint : "/users"})
});

async function onDelete(userId) {
  try{
    const response = await deleteRequest({ endpoint: `/users/${userId}` });
    console.log(response);
  }catch (error) {
    console.log(error);
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