<template>
  <div class="response">
    <ul v-if="response">
      <li v-for="user in response" :key="user._id" class="users">
        <strong>{{ user.firstName }} {{ user.lastName }}</strong> -
        <em>{{ user.role }}</em> ({{ user.email }})
      </li>
    </ul>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUsers } from '@/api/apiRequest.js';

const response = ref(null); // Déclarer response comme réactive

onMounted(async () => {
  response.value = await getUsers(); // Mettre à jour response
  console.log(response.value);
  console.log("RECEIVED");
});
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

  }

  .users{
    padding: 0.5em;
    color: black;
  }
</style>