const { addPet } = require('../dao/petsDao.js');

module.exports.addPet = async function (data) {
    const result = await addPet(data);
    if (result) {
        return true;
    } else {
        return false;
    }
}

module.exports.getUsers = async function () {
  return await getUsers(); 
}