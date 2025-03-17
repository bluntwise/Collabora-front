export async function getUsers(){
    try{
        const response = await fetch("http://localhost:5000/api/v1/users/");
        return await response.json();
    }catch (error){
        console.log(error);
    }
}


export async function createUser(userData){
    const jsonData = JSON.stringify(userData);
    console.log(jsonData);
    const response = await fetch("http://localhost:5000/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  // Indique qu'on envoie du JSON
            "x-api-key": "super-secret-key"  // Si l'API attend une clé spécifique
        },
        body: jsonData,
    })

    return await response.json();
}