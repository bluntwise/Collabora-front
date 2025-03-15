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
  import { ref } from "vue";
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
    },
    onClickButtonShow : {
      type: Function
    },
    onClickButtonHide : {
      type: Function
    }

  })
  const userData = ref([]);
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
.button_group{
  display: flex;
  flex-direction: row;
  width: 50%;
  margin-top: 5%;
  justify-content: center;
}
.button_group button{
  width: fit-content;
  border-radius: 5em;
  border-color: black;
  border-style: solid;
  background: white;
  padding : 1em;
  margin : auto;
}

button:hover{
  background-color: grey;
}

</style>