<template>
  <form @submit.prevent="addProject" class="form-container" method="post">
    <div class="form-group">
      <input type="text" name="projectId" placeholder="projectId" required class="input-field" for="projectId" v-model="project.projectId"/>
    </div>
    <div class="form-group">
      <input type="text" name="description" placeholder="description" required class="input-field" for="description" v-model="project.description"/>
    </div>
    <div class="form-group">
      <input type="text" name="startDate" placeholder="startDate" required class="input-field" for="startDate" v-model="project.startDate"/>
    </div>
    <div class="form-group">
      <input type="text" name="endDate" placeholder="endDate" required class="input-field" for="endDate" v-model="project.endDate"/>
    </div>
    <div class="form-group">
      <input type="text" name="projectManager" placeholder="projectManager" required class="input-field" for="projectManager" v-model="project.projectManager" />
    </div>
    <div class="form-button">
      <button type="submit" class="btn-submit" @submit.prevent="addProject">Submit</button>
    </div>
  </form>
</template>
<script setup>
  import { ref } from 'vue'
  import { addProject } from "@/api/apiRequest.js";

  const project = ref({
    projectId : '',
    description : '',
    startDate : '',
    endDate : '',
    projectManager: '',
    teamMembers : []
  })



</script>

<style scoped></style>*
