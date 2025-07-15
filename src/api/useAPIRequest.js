import {ref} from 'vue';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export async function addProject(projectData){
    console.log(projectData);
}

export default function ({ method = "GET" }) {
    const data = ref(null);
    const errorMessage = ref(null);

    const request = async ({ endpoint, body }) => {
        const url = apiUrl + endpoint;
        const isFormData = body instanceof FormData;

        const headers = {
            "x-api-key": apiKey, // 🔐 encore mieux : stocker dans .env
        };
        if (body && !isFormData) {
            headers["Content-Type"] = "application/json";
        }

        const options = { method, headers };
        if (body) {
            options.body = isFormData ? body : JSON.stringify(body);
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
        } catch (error) {
            errorMessage.value = error.message;
            throw error;
        }
    };

    return {
        data,
        errorMessage,
        request
    };
}
