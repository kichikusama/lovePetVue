const { addPets, getPets, deletePetByPage, getAllPets, getPetsById,updatePetsById } = require('../dao/petsDao.js');

module.exports.addPets = async function (data) {
    const result = await addPets(data);
    if (result) {
        return true;
    } else {
        return false;
    }
}

module.exports.getPets = async function () {
    return await getPets();
}

//分页
module.exports.getAllPets = async function (data) {
    return await getAllPets(data);
}
//通过ID获取
module.exports.getPetsById = async function (id) {
    return await getPetsById(id);
}
//通过ID修改对应数据
module.exports.updatePetsById = async function (id) {
    return await updatePetsById(id);
}

module.exports.deletePetByPage = async function (data) {
    const result = await deletePetByPage(data);
    if (result.ok) {
        return true
    } else {
        return false;
    }
}