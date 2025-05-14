<template>
  <main>
    <base-toast></base-toast>
    <router-view />

  </main>
</template>

<script setup lang="ts">

import { RouterView } from 'vue-router'
import BaseToast from "@/components/ui/BaseToast.vue";
</script>