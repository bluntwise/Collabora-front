

<template>

  <div class="response">
    <ul v-if="response">
      <li v-for="project in response" :key="project.id">
        {{ project.name }}
        {{ project.projectId }} - {{ project.description }} -
        {{ project.startDate }} - {{ project.endDate }}
        <strong>{{ project.projectManager.firstName }} {{ project.projectManager.lastName }}</strong> -
        <em>{{ project.projectManager.role }}</em> ({{ project.projectManager.email }})
      </li>


    </ul>
    <h1 v-if="responseNotHere">EMPTY Projects</h1>


  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import useAPIRequest from '@/api/useAPIRequest.js';
  const response = ref(null);
  const responseNotHere = ref(null);
  const projectManager = ref(null);

  onMounted(async () => {
    const { error, request } = useAPIRequest({method : "GET"});
    response.value = await request({endpoint : "/projects"})
  })
</script>
<style scoped>
  .response{
    display: flex;
    justify-content: center;
    color : black;
    margin-top: 2em;
    & > ul {
      margin: 0;
      padding: 0;
      & > li {
        color : black;
      }
    }
  }


</style>