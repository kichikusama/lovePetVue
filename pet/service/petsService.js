const { addPets,getPets ,deletePetByPage,getAllPets} = require('../dao/petsDao.js');

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

module.exports.deletePetByPage = async function (data) {
    const result =  await deletePetByPage(data); 
    if(result.ok){
        return true
    } else{
        return false;
    }
  }