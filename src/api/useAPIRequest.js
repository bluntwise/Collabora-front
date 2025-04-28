import {ref} from 'vue'

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


export default({method  = "GET", endpoint}) => {

    const data = ref(null)
    const errorMessage = ref(null);
    const _request = async({endpoint : _endpoint, body}) => {
        let url = import.meta.env.VITE_API_URL + _endpoint;
        const isFormData = body instanceof FormData;
        const response = await fetch(url, {
            headers : {
                ...(isFormData ? {} : { "content-type": "application/json" })
            },
            method : {
                ...(body && { body : isFormData ? body : JSON.stringify(body) })
            }
        });

        if (!response.ok) {
            if (response.status === 400) {
                const data = await response.json();
                throw new Error(data[0].errors.issues[0].message);
            }
        }
        data.value = await response.json();
        return data;
    }

    const handle = async ({ endpoint : _endpoint, body }) => {
        try{
            return {
                response: await _request({endpoint: _endpoint, body: body}),
                error: null
            }
        }catch(error){

        }
    }

}