<template>
  <div class = "container">

    <h1>Collabora</h1>
    <menu-home></menu-home>
    <h2>Contact Us</h2>
  </div>
</template>
<script setup lang="ts">
import MenuHome from "@/components/menuHome.vue";
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10%;
  margin-top: 2em;
}
</style>