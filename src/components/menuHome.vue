<template>
  <div class="navbar">
    <ul>
      <li v-if="user" @click="logout"><span class="menu-link">Disconnect</span></li>
      <li v-if="user">
        <span class="menu-link">{{ user.firstName }}</span>
      </li>
      <li v-else>
        <router-link to="/">Login</router-link>
      </li>

      <li><router-link to="/users">Users</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/creation">Creation</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue'
import useAPIRequest from '@/api/useAPIRequest.js'
import router from "@/router/index.js";
import { token, user } from '@/stores/auth.js'

watch(token, async (newVal) => {
  if (newVal) {
    console.log("aàçduadaodoiahdoihoih")
    await checkUser()
  }else{
    user.value = null
  }
})

onMounted(async () => {
  await checkUser()
})

async function checkUser() {

  if (!token.value) {
    user.value = null;
    return;
  }
  const { request } = useAPIRequest({
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  try {
    user.value = await request({endpoint: '/users/me'})
  } catch (error) {
    user.value = null;
  }
}

function logout(){
  localStorage.removeItem('token')
  token.value = null;
  user.value = null;
  router.push('/')
}
</script>

<style scoped>

.navbar{
  display: flex;
  justify-content: center;
  height: fit-content;

}
ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 2em auto;

}
.menu-link {
  font-size: 18px;
  font-weight: bold;
  display: block;
  color: white;
  text-decoration: none;
}
.menu-link:hover {
  cursor: pointer;
}


li {
  padding: 10px 20px;
  background: #444;
  border-radius: 8px;
  transition: background 0.3s ease;

}

li:hover {
  background: #ffcc00;
  color:black;
}


a {
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: block;
  background: none;
  color: white;

}

a:focus {
  color: red;
}



</style>
