<template>
  <creation-page></creation-page>
</template>
<script>
import {defineComponent} from "vue";
import CreationUser from "@/components/creationUser.vue";
import CreationPage from "@/components/creationPage.vue";


export default defineComponent({
  components: {CreationPage, CreationUser: CreationUser}
})
</script>