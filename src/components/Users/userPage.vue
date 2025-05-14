<template>
  <div class="response">
    <ul v-if="response">
      <li v-for="user in response" :key="user._id" class="users">
        <strong>{{ user.firstName }} {{ user.lastName }}</strong> -
        <em>{{ user.role }}</em> ({{ user.email }})
      </li>
    </ul>
    <h1 v-else>EMPTY Users</h1>


    <!--    <ul v-if="response">-->
<!--      <li v-for="user in response.value" :key="user._id">-->
<!--        {{ user.firstName }} {{ user.lastName }}-->
<!--      </li>-->
<!--    </ul>-->
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import useAPIRequest from "@/api/useAPIRequest.js";

const response = ref([]); // Déclarer response comme réactive

onMounted(async () => {

   const {data, error, request} = useAPIRequest({method : "GET"});
   response.value = await request({endpoint : "/users"})
   // response.value = await useAPIRequest({endpoint : '/users'});
});
</script>

<style scoped>
  .users{
    color: black;
  }
  ul{
    padding: 0;
    list-style-type: none;
  }
  .response{
    margin: 2em auto;
    display: flex;
    justify-content: center;
    color : black;
  }

  .users{
    padding: 0.5em;
    color: black;
  }
</style>