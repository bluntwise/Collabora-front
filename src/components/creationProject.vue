<template>

  <div class="projects">
    <card-project
        :description="'Project'"
        :avatar="'/images/projects.png'"
        :button_caption="'Project'"
        :on-click-button-show="'() => showFormProject()'"
        :on-click-button-hide="'() => removeFormProject'()"
        ></card-project>
  </div>

  <from-project>

  </from-project>
</template>
<script>
import {defineComponent, ref} from "vue";
import CardProject from "@/components/creationViewUser/CardProject.vue";
import FromProject from "@/components/creationViewUser/fromProject.vue";
import FormUser from "@/components/creationViewUser/formUser.vue";

const showFormUser = ref(false);

const showFormProject = () => {
  if (!showFormUser.value) {
    showFormUser.value = true;
  }
}

const removeFormProject = () => {
  if (showFormUser.value === true){
    showFormUser.value = !showFormUser.value;
  }
}
export default defineComponent({
  components: {FormUser, FromProject, CardProject}
})
</script>
<style scoped></style>