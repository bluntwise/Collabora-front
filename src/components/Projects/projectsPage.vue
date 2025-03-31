

<template>

  <div class="response">

    <ul v-if="response">
      <li v-for="(project) in response" :key="project.id">
        {{ project.projectId }} - {{ project.description }} -
        {{ project.startDate }} - {{ project.endDate }}
        <strong>{{ user.firstName }} {{ user.lastName }}</strong> -
        <em>{{ user.role }}</em> ({{ user.email }})
      </li>
    </ul>
    <h1 v-if="responseNotHere">EMPTY</h1>


  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import { getProjects } from '@/api/apiRequest.js';
  const response = ref(null);
  const responseNotHere = ref(null);
  const projectManager = ref(null);
  onMounted(async () => {
    response.value = await getProjects();

    if (response.value.length === 0) {
      console.log("EMPTY");
      responseNotHere.value = true
    }

    
  })
</script>
<style scoped>
  .response{
    display: flex;
    justify-content: center;
    color : white;
    & > ul {
      margin: 0;
      padding: 0;
      & > li {
        color : white;
      }
    }
  }


</style>