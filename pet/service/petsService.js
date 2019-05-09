const { addPets,getPets ,deletePetByPage} = require('../dao/petsDao.js');

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

module.exports.deletePetByPage = async function (data) {
    const result =  await deletePetByPage(data); 
    if(result.ok){
        return true
    } else{
        return false;
    }
  }