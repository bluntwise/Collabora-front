<template>

  <div class="projects">rojœ
    <card-project
        title=""
        project-id=""
        end-date=""
        start-date=""
        description=""
        team-members=""
        project-manager-id=""
        avatar=""
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