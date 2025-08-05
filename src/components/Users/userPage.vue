<template>
  <div class="response">
    <div v-if="users.length > 0" class="users-grid">
      <div class="user-card" v-for="user in users" :key="user._id">
        <h2 class="user-name">
          👤 {{ user.firstName }} {{ user.lastName }}
        </h2>
        <p class="user-role">
          🏷️ <strong>{{ user.role }}</strong>
        </p>
        <p class="user-email">
          📧 {{ user.email }}
        </p>
        <button class="btn-delete" @click="onDelete(user._id)">
          🗑️ Supprimer
        </button>
      </div>
    </div>

    <h2 v-else class="empty-message">🚫 Aucun utilisateur pour le moment</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useAPIRequest from "@/api/useAPIRequest.js";

const users = ref([]);

const { request: getRequest } = useAPIRequest({ method: 'GET' });
const { request: deleteRequest, errorMessage: errDelete } = useAPIRequest({ method: 'DELETE' });

onMounted(async () => {
  try {
    const result = await getRequest({ endpoint: "/users" });
    users.value = result;
  } catch (error) {
    console.error("Erreur lors du chargement des utilisateurs", error);
  }
});

async function onDelete(userId) {
  try {
    await deleteRequest({ endpoint: `/users/${userId}` });
    const deleted = users.value.find(user => user._id === userId);
    users.value = users.value.filter(user => user._id !== userId);
    window.toast(`Utilisateur ${deleted.firstName} supprimé.`, 'success');
  } catch (error) {
    let msg = error?.response?.data?.message || error?.message || 'Une erreur est survenue.';
    window.toast(msg, 'error');
  }
}
</script>
<style scoped>
.response {
  display: flex;
  justify-content: center;
  margin-top: 2em;
  color: black;
  padding: 1em;
}

.users-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 100%;
  max-width: 800px;
}

.user-card {
  background-color: #fefefe;
  border: 2px solid #eee;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  padding: 1.5em;
  transition: box-shadow 0.2s ease;
}

.user-card:hover {
  box-shadow: 0 6px 14px rgba(0,0,0,0.1);
}

.user-name {
  font-size: 1.3em;
  margin-bottom: 0.4em;
  color: #333;
}

.user-role, .user-email {
  font-size: 1em;
  color: #555;
  margin-bottom: 0.3em;
}

.btn-delete {
  margin-top: 1em;
  padding: 0.6em 1.2em;
  background-color: #ff4d4f;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-delete:hover {
  background-color: #cc0000;
}

.empty-message {
  font-size: 1.4em;
  color: #777;
  text-align: center;
  margin-top: 2em;
}
</style>
