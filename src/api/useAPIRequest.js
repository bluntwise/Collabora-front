// src/api/useAPIRequest.js
import { ref } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export default function useAPIRequest({ method = 'GET' } = {}) {
    const data = ref(null);
    const errorMessage = ref(null);
    const loading = ref(false);

    async function request({ endpoint, body = null }) {
        loading.value = true;
        errorMessage.value = null;

        const url = `${apiUrl}${endpoint}`;
        const headers = {};

        const token = localStorage.getItem('token');
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        if (body && !(body instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }
        const options = { method, headers };
        if (body) {
            options.body = body instanceof FormData ? body : JSON.stringify(body);
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                const err = await response.json();
                errorMessage.value = err.message || `Error ${response.status}`;
                throw new Error(errorMessage.value);
            }
            data.value = await response.json();
            return data.value;
        } finally {
            loading.value = false;
        }
    }

    return { data, errorMessage, loading, request };
}
