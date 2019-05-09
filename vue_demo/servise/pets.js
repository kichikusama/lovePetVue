const addPets = async (data) => await fetch(`/pets/addPets`,{
    headers: { 
        "Content-Type": "application/json"
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())

const getAllPets = async (data) => await fetch(`/pets/getAllPets`,{
    headers: { 
        "Content-Type": "application/json"
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())//分页获取

const getPets = async () => await fetch(`/pets/getPets`).then(response => response.json());

const deletePetByPage = async (data) => await fetch(`/pets/deletePetByPage?data=${data}`).then(response => response.json());

export default {
    addPets,
    getPets,
    deletePetByPage,
    getAllPets
}