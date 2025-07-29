

<template>

  <div class="response">
    <ul v-if="response">
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
        {{ project.projectId }} - {{ project.description }} -
        {{ project.startDate }} - {{ project.endDate }}
        <strong>{{ project.projectManager.firstName }} {{ project.projectManager.lastName }}</strong> -
        <em>{{ project.projectManager.role }}</em> ({{ project.projectManager.email }})
        <button class="btn-delete" @click="onDelete(project.projectId)">
          Supprimer
        </button>
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
  const projects = ref([]);

  const { request: fetchProjects, errorMessage: errFetch } = useAPIRequest({ method: 'GET' });
  const { request: deleteRequest, errorMessage: errDelete, loading } = useAPIRequest({ method: 'DELETE' });
  onMounted(async () => {
    try{
      response.value = await fetchProjects({endpoint : "/projects"})
      console.log(response.value)
      projects.value = await response.value;
    }catch(err){
      console.log(errFetch.value)
    }
  })

  async function onDelete(projectId) {
    try{
      await deleteRequest({ endpoint: '/projects/' + projectId });

      projects.value = projects.value.filter((item) => item.projectId !== projectId);
    }catch(err){
      console.log(errDelete.value)

    }
  }
  
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