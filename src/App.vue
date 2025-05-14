<script setup>
import BaseContainer from "@/components/layout/BaseContainer.vue";
import BaseHeader from "@/components/layout/BaseHeader.vue";
import BaseFooter from "@/components/layout/BaseFooter.vue";
import BaseToast from "@/components/ui/BaseToast.vue";

</script>



<template>
  <base-header></base-header>
  <base-container></base-container>
  <base-footer></base-footer>

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
