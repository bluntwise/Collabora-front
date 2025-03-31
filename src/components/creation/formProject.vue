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

<style scoped>

.form-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 5% auto;
  border: black solid 2px;
  border-radius: 10px;

}

.form-group{
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30%;

  & > input[type="text"]{
    width: 100%;
    border-radius: 5px;
    padding: 0.5em;
    text-align: center;
    border-color: red;
    border-style : solid;
  }


}

.form-button{
  margin: 0.5em;
  width: 30%;
  display: flex;
  align-items: center;

  .btn-submit {
    padding: 0.8em 1.5em;
    width: 100%;
    max-width: 200px; /* Pour éviter un bouton trop large */
    background-color: #007bff; /* Bleu */
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    display: block;
    margin: 1em auto; /* Centre horizontalement */
  }

  .btn-submit:hover {
    background-color: #0056b3; /* Bleu foncé au hover */
    transform: scale(1.05); /* Effet de zoom */
  }

  .btn-submit:active {
    background-color: #004494; /* Encore plus foncé au clic */
    transform: scale(0.98);
  }

}
</style>*
