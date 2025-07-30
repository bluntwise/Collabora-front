  <template>
    <div
        v-if="show"
        class="toast"
        :class="type"
        :style="{ transform: isHiding ? 'translateX(200%)' : 'translateX(0)' }"
    >
      {{ message }}
    </div>
  </template>


  <script setup>
    import { ref, onMounted } from 'vue'

    const show = ref(false);
    const message = ref('');
    const type = ref('success');
    const isHiding = ref(false);

    let timeoutId = null;

    const showToast = (msg, toastType = 'success', duration = 3000) => {

      message.value = msg;
      type.value = toastType; // sucess or error
      show.value = true;
      isHiding.value = false;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isHiding.value = true;
        setTimeout(() => {
          show.value = false
        }, 500)
      },duration);
    }

    const toastStyle = {

    }
    onMounted(() => {
      window.toast = showToast
    })
  </script>


  <style scoped>
  .toast.success{
    position: fixed;
    top: 6rem;
    right: 1rem;
    padding: 1em 2em;
    background: white;
    color: black;
    border: 3px solid yellowgreen;
    border-radius: 0.5em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 0;
    transition: transform 0.5s ease; /* Transition fluide */
  }

  .toast.error {
    position: fixed;
    top: 6rem;
    right: 1rem;
    padding: 1em 2em;
    border-radius: 0.5em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 0;
    transition: transform 0.5s ease; /* Transition fluide */
    border-color: #e74c3c;
    background: #ffe6e6;
  }

  </style>