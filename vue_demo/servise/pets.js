const addPets = async (data) => await fetch(`/pets/addPets`,{
    headers: { 
        "Content-Type": "application/json"
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())

const getPets = async () => await fetch(`/pets/getPets`).then(response => response.json());

const deletePetByPage = async (data) => await fetch(`/pets/deletePetByPage?data=${data}`).then(response => response.json());

export default {
    addPets,
    getPets,
    deletePetByPage
}