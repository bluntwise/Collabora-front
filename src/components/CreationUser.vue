
<template>
  <CardPerson
      :description="'UTILISATEUR'"
      :avatar="'/images/user.png'"
      :button_caption="'CREATE'"
  />

  <CardPerson
      :description="'ADMINISTRATEUR'"
      :avatar="'/images/admin.png'"
      :button_caption="'CREATE'"
  />
</template>

<script setup>
  import CardPerson from "@/components/creationViewUser/CardPerson.vue";

</script>

<style scoped></style>

