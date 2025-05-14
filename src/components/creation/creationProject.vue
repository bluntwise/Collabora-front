<template>

  <div class="projects">
    <card-project
        :description="'Project'"
        :avatar="'/images/projects.png'"
        :button_caption="'CREATE'"
        :on-click-button-show="() => showFormProject()"
        :on-click-button-hide="() => removeFormProject()"
        ></card-project>
  </div>
  <form-project v-if="showForm">

  </form-project>
</template>
<script setup>
import {defineComponent, ref} from "vue";
import CardProject from "@/components/tools/CardProject.vue";
import FormProject from "@/components/tools/formProject.vue";
import FormUser from "@/components/tools/formUser.vue";

const showForm = ref(false);

const showFormProject = () => {
  console.log("alan")
  if (!showForm.value) {
    showForm.value = true;
  }
  console.log(showForm.value);
}

const removeFormProject = () => {
  if (showForm.value === true){
    showForm.value = !showForm.value;
  }
  console.log(showForm.value);
}
</script>
<style scoped></style>