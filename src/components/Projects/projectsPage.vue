

<template>

  <div class="response">
    <div v-if="projects.length > 0" class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.projectId">
        <h2 class="project-title">{{ project.name }} <span class="project-id">({{ project.projectId }})</span></h2>
        <p class="project-desc">{{ project.description }}</p>
        <p class="project-dates">📅 Du {{ project.startDate }} au {{ project.endDate }}</p>

        <div class="project-manager">
          👤 <strong>{{ project.projectManager.firstName }} {{ project.projectManager.lastName }}</strong>
          ({{ project.projectManager.role }})<br />
          📧 {{ project.projectManager.email }}
        </div>

        <div class="project-team">
          👥 <strong>Équipe :</strong>
          <ul>

            <li v-for="user in project.teamMembers" :key="user._id">
              {{user.firstName}} {{user.lastName}}
            </li>
          </ul>
        </div>

        <button class="btn-delete" @click="onDelete(project.projectId)">🗑️ Supprimer</button>
      </div>
    </div>

    <h2 v-else class="empty-message">🚫 Aucun projet pour le moment</h2>
  </div>


</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import useAPIRequest from '@/api/useAPIRequest.js';

  const response = ref(null);
  const responseNotHere = ref(null);
  const projects = ref([]);

  const { request: fetchProjects, errorMessage: errFetch } = useAPIRequest({ method: 'GET' });
  const { request: deleteRequest, errorMessage: errDelete, loading } = useAPIRequest({ method: 'DELETE' });



  onMounted(async () => {
    try {
      const result = await fetchProjects({ endpoint: "/projects/my-projects" });
      if (Array.isArray(result.projects) && result.projects.length > 0) {
        projects.value = result.projects;
        response.value = true;
      } else {
        responseNotHere.value = true;
      }


    } catch (err) {
      console.log(errFetch.value);
      responseNotHere.value = true;
    }
  });


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
.response {
  display: flex;
  justify-content: center;
  margin-top: 2em;
  color: black;
  padding: 1em;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 100%;
  max-width: 800px;
}

.project-card {
  background-color: #fdfdfd;
  border: 2px solid #eee;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  padding: 1.5em;
  transition: box-shadow 0.2s ease;
}

.project-card:hover {
  box-shadow: 0 6px 14px rgba(0,0,0,0.1);
}

.project-title {
  font-size: 1.5em;
  margin-bottom: 0.2em;
  color: #333;
}

.project-id {
  font-size: 0.9em;
  color: #888;
}

.project-desc {
  margin: 0.3em 0;
  font-style: italic;
  color: #555;
}

.project-dates {
  font-size: 0.95em;
  color: #666;
}

.project-manager {
  margin-top: 1em;
  font-size: 0.95em;
  color: #333;
}

.project-team {
  margin-top: 1em;
  font-size: 0.95em;
}

.project-team ul {
  margin: 0.3em 0 0 1em;
  padding: 0;
  list-style-type: disc;
}

.project-team li {
  color: #444;
}

.btn-delete {
  margin-top: 1.5em;
  padding: 0.6em 1.2em;
  background-color: #ff4d4f;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-delete:hover {
  background-color: #cc0000;
}

.empty-message {
  font-size: 1.4em;
  color: #777;
  text-align: center;
  margin-top: 2em;
}


</style>