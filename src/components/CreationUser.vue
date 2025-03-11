
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

  <form-user/>
</template>

<script setup>
  import CardPerson from "@/components/creationViewUser/CardPerson.vue";
  import formUser from "@/components/creationViewUser/formUser.vue";
</script>

<style scoped></style>

