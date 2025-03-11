
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

  <card-result title="resultat"/>
</template>

<script setup>
  import CardPerson from "@/components/creationViewUser/CardPerson.vue";
  import CardResult from "@/components/creationViewUser/CardResult.vue";
</script>

<style scoped></style>

