<template>
  <article>
    <h1> {{ title }} </h1>
    <p> {{ response }} </p>
  </article>

</template>

<script setup>
  import { ref, onMounted } from "vue";
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

