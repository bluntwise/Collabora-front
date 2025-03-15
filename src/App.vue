<script setup>

import CardPerson from "@/components/creationViewUser/CardPerson.vue";
import CardResult from "@/components/creationViewUser/CardResult.vue"
import CreationUser from "@/components/CreationUser.vue";
import MenuHome from "@/components/menuHome.vue";
import CreationPage from "@/components/creationPage.vue";
</script>



<template>

  <creation-page></creation-page>
</template>
<style scoped>

header {
  line-height: 1.5;
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

div{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}

</style>
