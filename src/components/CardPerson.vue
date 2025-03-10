<template>
  <article>
    <span class="description">{{ description }}</span>
    <img class="logoUser" :src="avatar">
    <button>{{ button_caption }}</button>
  </article>
</template>


<script setup>

  const props = defineProps({
    avatar: {
      type: String,
      required: true
    },
    description : {
      type: String,
      required: true
    },
    button_caption : {
      type: String,
      required: true
    }
  })

</script>

<style scoped>

article{
  display: flex;
  flex-direction: column;
  align-items: center;
}
span{
  text-align: center;
}

img{
  width: 50%;
}

button{
  width: fit-content;
  border-radius: 5em;
  border-color: black;
  border-style: solid;
  background: white;
}

</style>