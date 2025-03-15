<template>
  <div class="navbar"></div>
  <ul>
    <li><a href="@/components/homePage.vue">Home</a></li>
    <li><a href="">Projects</a></li>
    <li><a href="">Creation</a></li>
  </ul>
</template>

<script setup></script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 20px;
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
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: block;
  background: none;
}



</style>
