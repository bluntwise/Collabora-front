import {ref} from 'vue';

const apiUrl = import.meta.env.VITE_API_URL;

export async function getUsers() {
    try {
        const response = await fetch(apiUrl + "/users");
         // ✅ ici on récupère les données
        const data = await response.json()
        return await data; // ✅ renvoie un tableau utilisable dans Vue
    } catch (error) {
        console.error("Erreur dans getUsers:", error);
    }
}

export async function createUser(userData){
    const jsonData = JSON.stringify(userData);

    const response = await fetch(apiUrl + "/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  // Indique qu'on envoie du JSON
            "x-api-key": "super-secret-key"  // Si l'API attend une clé spécifique
        },
        body: jsonData,
    })

    return await response.json();
}


export async function getProjects(){
    try{
        const response = await fetch(apiUrl + "/projects");
        const data = await response.json();
        console.log(data);
        return data;
    }catch (error){
        console.log(error);
    }
}

export async function addProject(projectData){
    console.log(projectData);
}
export default ({ method = "GET", endpoint }) => {
    const data = ref(null);
    const errorMessage = ref(null);

    const _request = async ({ endpoint: _endpoint, body }) => {
        const url = import.meta.env.VITE_API_URL + _endpoint;
        const isFormData = body instanceof FormData;

        // 1️⃣ On ne met Content-Type que si on a vraiment un body JSON
        const headers = {};
        if (body && !isFormData) {
            headers["Content-Type"] = "application/json";
        }

        // 2️⃣ On n’ajoute options.body que si body est défini
        const options = { method, headers };
        if (body) {
            options.body = isFormData
                ? body
                : JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            const err = await response.json();
            errorMessage.value = err.message || `Error ${response.status}`;
            throw new Error(errorMessage.value);
        }

        data.value = await response.json();
        return data.value;
    };

    return _request({ endpoint });
};
