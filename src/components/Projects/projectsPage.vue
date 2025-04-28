

<template>

  <div class="response">
    <ul v-if="response">
      <li v-for="project in response" :key="project.id">
        {{ project.name }}
        {{ project.projectId }} - {{ project.description }} -
        {{ project.startDate }} - {{ project.endDate }}
<!--        <strong>{{ project.projectManager.firstName }} {{ project.projectManager.lastName }}</strong> - -->
        <em>{{ project.projectManager.role }}</em> ({{ project.projectManager.email }})
      </li>


    </ul>
    <h1 v-if="responseNotHere">EMPTY Projects</h1>


  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import useAPIRequest, { getProjects } from '@/api/useAPIRequest.js';
  const response = ref(null);
  const responseNotHere = ref(null);
  const projectManager = ref(null);
  onMounted(async () => {

    let endpoint = "/projects";

    response.value = await useAPIRequest({ endpoint : endpoint });

    // response.value = await getProjects();
    // if (data.length === 0) {
    //   console.log("EMPTY");
    //   responseNotHere.value = true
    // }
    for (let project of response.value) {
      console.log(project)
    }

    
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