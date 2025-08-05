<template>
  <login></login>
</template>
<script>


import {defineComponent} from "vue";
import CreationUser from "@/components/creation/creationUser.vue";
import CreationPage from "@/components/creationPage.vue";
import Login from "@/components/login.vue";


export default defineComponent({
  components: {Login, CreationPage, CreationUser: CreationUser}
})
</script>