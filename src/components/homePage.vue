<template>
  <h1>Home Page
  </h1>
  <h1>{{ response }}</h1>
  <ul v-if="response">
    <li v-for="user in response" :key="user._id">
      <strong>{{ user.firstName }} {{ user.lastName }}</strong> -
      <em>{{ user.role }}</em> ({{ user.email }})
    </li>
  </ul>
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

<style scoped></style>