<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Connexion</h2>

      <div class="form-group">
        <label>Prénom</label>
        <input v-model="firstName" type="text" required />
      </div>

      <div class="form-group">
        <label>Mot de passe</label>
        <input v-model="password" type="password" required />
      </div>

      <button type="submit">Se connecter</button>

      <p v-if="error" class="error-msg">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAPIRequest from '@/api/useAPIRequest.js';

const firstName = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()


if (localStorage.getItem('token')) {
  router.push('/users')
}


const handleLogin = async () => {
  error.value = null
  try {
    const { request : loginRequest } = await useAPIRequest({ method: "POST" });

    const response = await loginRequest({
      endpoint: "/auth/login",
      body : {
        firstName : firstName.value,
        password: password.value,
      }
    });
    console.log("hi")
    localStorage.setItem('token', response.token)
    router.push('/users')
  } catch (err) {
    error.value = err.response?.data?.error || 'Erreur lors de la connexion'
    console.log(err)
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-form {
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease;
}

button:hover {
  background-color: #0056b3;
}

.error-msg {
  margin-top: 1rem;
  color: red;
  text-align: center;
}
</style>
