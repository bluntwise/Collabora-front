<template>
  <div class="navbar">
    <ul>
      <li><router-link to="/">Users</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/creation">Creation</router-link></li>
    </ul>
  </div>

</template>

<script setup>
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
