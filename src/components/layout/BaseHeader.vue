<template>
  <div>

    <h1>Collabora</h1>
    <menu-home></menu-home>
    <h2>Contact Us</h2>
  </div>
</template>
<script setup lang="ts">
import MenuHome from "@/components/menuHome.vue";
</script>

<style scoped>
div{
  display: flex;
  height: fit-content;
  flex-direction: row;
  justify-content: space-between;
}
</style>