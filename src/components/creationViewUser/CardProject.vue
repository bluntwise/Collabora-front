<template>
  <article>
    <span class="description">{{ description }}</span>
    <img class="logoUser" :src="avatar" alt="img">
    <div class="button_group">
      <button @click="onClickButtonShow">{{ button_caption }}</button>
      <button @click="onClickButtonHide">X</button>
    </div>
  </article>

</template>

<script setup>
  const props = defineProps({
    avatar : {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    button_caption : {
      type: String,
      required: true
    },
    onClickButtonShow : {
      type: Function
    },
    onClickButtonHide : {
      type: Function
    }



  });

</script>

<style scoped>
.description{
  color: white;
  font-size: 20px;
  padding: 1% 2%;
  border: white 3px solid;
  margin-bottom: 10px;
  width: fit-content;
}


article{
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

