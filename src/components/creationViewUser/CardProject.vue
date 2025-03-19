<template>
  <article>
    <span class="description">{{ description }}</span>
    <h1></h1>
    <img class="logoUser" :src="avatar" alt="img">
    <div>

    </div>
  </article>

</template>

<script setup>
  import { ref, onMounted } from "vue";
  const props = defineProps({
    avatar : {
      type: String,
      required: true
    },
    projectManagerId : {
      type: String,
      required: true,
    },
    teamMembers : {
      type: Array,
      required: true,
    },

    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    startDate : {
      type : String,
      required: true
    },
    endDate : {
      type : String,
      required: true
    },
    projectId : {
      type: String,
      required : true
    }

  });

  console.log(props.avatar);



  const response = ref(null);

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

