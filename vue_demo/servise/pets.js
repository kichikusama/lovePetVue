const addPetsImage = async () => await fetch(`/pets/`).then(response => response.json());
export default {
    addPetsImage
}