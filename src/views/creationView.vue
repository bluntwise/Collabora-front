<template>
  <creation-user></creation-user>
</template>
<script>
import {defineComponent} from "vue";
import CreationUser from "@/components/Users/CreationUser.vue";

console.log("creation")

export default defineComponent({
  components: {CreationUser}
})
</script>