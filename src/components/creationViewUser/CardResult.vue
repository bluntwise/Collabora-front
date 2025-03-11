<template>
  <h1>ALAN</h1>
  <article>
    <h1> {{ title }} </h1>
    <p> {{ response }} </p>
  </article>

</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { requestApi } from "@/api/apiRequest.js";
  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  });



  const response = ref(null);

  onMounted(async () => {

  });
</script>

<style scoped>
</style>

