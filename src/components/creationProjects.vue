<template>

  <div class="projects">
    <card-project
        :title="'creation project'"
        :project-id="'oiuahdha'"
        :end-date="'2025-01-10'"
        :start-date="'2025-02-15'"
        :description="'Project'"
        :team-members="'[]'"
        :project-manager-id="'548547'"
        :avatar="'/images/projects.png'"
        ></card-project>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import CardProject from "@/components/creationViewUser/CardProject.vue";

export default defineComponent({
  components: {CardProject}
})
</script>
<style scoped></style>