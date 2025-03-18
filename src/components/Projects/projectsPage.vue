

<template>
  <h1>CHANTIER EN COURS</h1>
  <p> {{ response }}</p>

  <ul v-if="response">
    <li v-for="(project) in response" :key="project.id">
      {{ project.projectId }} - {{ project.description }} -
      {{ project.startDate }} - {{ project.endDate }}
      {{ project.projectManager }}

    </li>
  </ul>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import { getProjects } from '@/api/apiRequest.js';
  const response = ref(null);
  onMounted(async () => {
    response.value = await getProjects();
    console.log(response.value);
  })
</script>
<style scoped>



</style>