<template>
  <form @submit.prevent="addProject" class="form-container" method="post">
    <h2 class="form-title">Créer un projet</h2>

    <div class="form-group">
      <label>Identifiant du projet</label>
      <input type="text" name="projectId" placeholder="projectId" required class="input-field" v-model="project.projectId" />
    </div>

    <div class="form-group">
      <label>Description</label>
      <input type="text" name="description" placeholder="description" required class="input-field" v-model="project.description" />
    </div>

    <div class="form-group">
      <label>Date de début</label>
      <input type="date" name="startDate" placeholder="startDate" required class="input-field" v-model="project.startDate" />
    </div>

    <div class="form-group">
      <label>Date de fin</label>
      <input type="date" name="endDate" placeholder="endDate" required class="input-field" v-model="project.endDate" />
    </div>

    <!-- <div class="form-group">
      <label>Chef de projet</label>
      <input type="text" name="projectManager" placeholder="projectManager" required class="input-field" v-model="project.projectManager" />
    </div> -->

    <!-- <div class="form-group">
      <label>Membres de l’équipe</label>
      <select id="teamMembers" multiple class="select-field" v-model="project.teamMembers">
        <option v-for="user in users" :key="user.id" :value="user.id">
          {{ user.firstName }} {{ user.lastName }} — {{ user.email }}
        </option>
      </select>
    </div> -->
    
    <div class="form-group">
        <CustomDropDown
          label="Chef de projet"
          :options="projectManagers"
          v-model="project.projectManager"
          placeholder="-- Sélectionner un chef de projet --"
        />
    </div>
    
    <div class="form-group">
        <CustomDropDown
          label="Membres de l’équipe"
          :options="users"
          v-model="project.teamMembers"
          multiple
        />
    </div>
    


    <div class="form-button">
      <button type="submit" class="btn-submit">Créer le projet</button>
    </div>
  </form>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import useAPIRequest from '@/api/useAPIRequest.js';
import CustomDropDown from './CustomDropDown.vue';
const project = ref({
  projectId: '',
  description: '',
  startDate: '',
  endDate: '',
  projectManager: '',
  teamMembers: []
});

const users = ref([]);
const projectManagers = ref([])
onMounted(async () => {
  const { request } = useAPIRequest({ method: "GET" });
  try {
    const data = await request({ endpoint: "/users" });
    users.value = (data || []).filter(user => user.role === "Team Member");
    projectManagers.value = (data || []).filter(user => user.role === "Project Manager")
  } catch (error) {
    console.error("Erreur lors du chargement des utilisateurs :", error);
  }
});

async function addProject() {
  const { request } = useAPIRequest({ method: "POST" });
  try {
    console.log(project.value)
    await request({ endpoint: "/projects", body: project.value });
    alert("Projet créé !");
  } catch (error) {
    console.error("Erreur :", error);
  }
}
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 5% auto;
  padding: 2em;
  border: 2px solid #ccc;
  border-radius: 12px;
  background-color: #fafafa;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  font-family: 'Segoe UI', sans-serif;
}

.form-title {
  text-align: center;
  margin-bottom: 1.5em;
  font-size: 1.8em;
  font-weight: 600;
  color: #333;
}

.form-group {
  margin-bottom: 1.2em;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5em;
  font-weight: 500;
  color: #555;
}

.input-field,
.select-field {
  width: 100%;
  padding: 0.6em 0.8em;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s;
}

.input-field:focus,
.select-field:focus {
  border-color: #007bff;
}

.select-field {
  min-height: 6em;
  background-color: white;
}

.form-button {
  text-align: center;
}

.btn-submit {
  background-color: #007bff;
  color: white;
  padding: 0.8em 2em;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-submit:hover {
  background-color: #0056b3;
}

</style>