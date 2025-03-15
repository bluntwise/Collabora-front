
<template>


  <section>
    <div class="roles">
      <CardPerson
          :description="'User'"
          :avatar="'/images/user.png'"
          :button_caption="'CREATE'"
          :on-click-button-show="() => showFormRole('Team Member')"
          :on-click-button-hide="() => removeForm()"

      />

      <CardPerson
          :description="'Admin'"
          :avatar="'/images/admin.png'"
          :button_caption="'CREATE'"
          :on-click-button-show="() => showFormRole('Admin')"
          :on-click-button-hide="() => removeForm()"
      />
    </div>

    <div class="form">
      <form-user v-if="showForm" :role="selectedRole"/>
    </div>
  </section>

</template>

<script setup>
  import { ref } from "vue"
  import CardPerson from "@/components/creationViewUser/CardPerson.vue";
  import formUser from "@/components/creationViewUser/formUser.vue";
  const showForm = ref(false);
  const selectedRole = ref(false);

  const showFormRole = (role) => {
    if (!showForm.value) {
      showForm.value = true;
    }
    selectedRole.value = role;
  }

  const removeForm = () => {
    showForm.value = !showForm.value;
  }
</script>

<style scoped>

.roles{
  display: flex;
  flex-direction: row;

}

.form{
  display: flex;
  justify-content: center;
}

</style>

