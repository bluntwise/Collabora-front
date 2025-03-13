<template>
  <form @submit.prevent="addUser" class="form-container" method="post">
      <div class="form-group">
        <input type="text" name="firstName" placeholder="First Name" required class="input-field" for="firstName"/>
      </div>
      <div class="form-group">
        <input type="text" name="lastName" placeholder="Last Name" required class="input-field" for="lastName"/>
      </div>
      <div class="form-group">
        <input type="text" name="email" placeholder="Email" required class="input-field" for="email"/>
      </div>
      <div class="form-group">
        <input type="text" name="password" placeholder="Password" required class="input-field" for="password"/>
      </div>
      <div class="form-group">
        <input type="text" name="role" placeholder="Role" required class="input-field" for="role" v-model="role"/>
      </div>
      <div class="form-button">
        <button type="submit" class="btn-submit">Submit</button>
      </div>
  </form>
</template>

<script setup>
  import { ref, watch } from "vue";
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const role = ref('');
  const password = ref('');

  const props = defineProps({
    role : {
      type: String
    }
  })

  watch(() => props.role, (newRole) => {
    role.value = newRole;
    console.log(newRole);
  });

  async function addUser() {
    const userData = {
      firstName : firstName.value,
      lastName : lastName.value,
      email : email.value,
      role : role.value,
      password: password.value,
    }
  }

  console.log(props.role)

  role.value = props.role;
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

  & > input[type="text"]{
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