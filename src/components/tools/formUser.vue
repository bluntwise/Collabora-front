<template>
  <form @submit.prevent="addUser" class="form-container" method="post">
      <div class="form-group">
        <input type="text" name="firstName" placeholder="First Name" required class="input-field" for="firstName" v-model="user.firstName"/>
      </div>
      <div class="form-group">
        <input type="text" name="lastName" placeholder="Last Name" required class="input-field" for="lastName" v-model="user.lastName"/>
      </div>
      <div class="form-group">
        <input type="text" name="email" placeholder="Email" required class="input-field" for="email" v-model="user.email"/>
      </div>
      <div class="form-group">
        <input type="password" name="password" placeholder="Password" required class="input-field" for="password" v-model="user.password"/>
      </div>
      <div class="form-group">
        <input type="text" name="role" placeholder="Role" required class="input-field" for="role" v-model="roleLocal" />
      </div>
      <div class="form-button">
        <button type="submit" class="btn-submit" @submit.prevent="addUser">Submit</button>
      </div>
  </form>
</template>

<script setup>
import {ref, watch, onMounted} from "vue";
import { createUser } from "@/api/useAPIRequest.js";
import useAPIRequest from "@/api/useAPIRequest.js";

const props = defineProps({
    role : {
      type: String
    }
  })

const roleLocal = ref(props.role)

console.log(roleLocal.value)

  const user = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: props.role || '',
  });

  watch(() => props.role, (newRole) => {
    user.value.role = newRole;
    roleLocal.value = newRole;
  });
  onMounted(() => {
    if (!user.value.role) {
      user.value.role = props.role;
    }


  });

  const addUser = async () => {
    user.value.role = roleLocal.value;

    const { response, error } = await useAPIRequest({
      method: "POST",
      endpoint: "/users",
      body: user.value      // ← on transmet le contenu à poster
    });

    if (!error) {
      window.toast("User " + user.value.firstName + " stored");
    } else {
      console.error(error);
    }
  };

</script>

<style scoped>



.form-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 5% auto;
  border: black solid 2px;
  border-radius: 10px;

}

.form-group{
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30%;

  & > input[type="text"], & > input[type="password"]{
    width: 100%;
    border-radius: 5px;
    padding: 0.5em;
    text-align: center;
    border-color: red;
    border-style : solid;
  }


}

.form-button{
  margin: 0.5em;
  width: 30%;
  display: flex;
  align-items: center;

  .btn-submit {
    padding: 0.8em 1.5em;
    width: 100%;
    max-width: 200px; /* Pour éviter un bouton trop large */
    background-color: #007bff; /* Bleu */
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    display: block;
    margin: 1em auto; /* Centre horizontalement */
  }

  .btn-submit:hover {
    background-color: #0056b3; /* Bleu foncé au hover */
    transform: scale(1.05); /* Effet de zoom */
  }

  .btn-submit:active {
    background-color: #004494; /* Encore plus foncé au clic */
    transform: scale(0.98);
  }

}

</style>