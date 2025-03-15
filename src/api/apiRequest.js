export async function fetchUserData(){
    try{
        const response = await fetch("http://localhost:5000/api/v1/users/");
        return await response.json();
    }catch (error){
        console.log(error);
    }
}
