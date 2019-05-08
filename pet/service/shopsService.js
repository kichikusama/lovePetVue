const { addShop } = require('../dao/shopsDao.js');

module.exports.addUser = async function (data) {
    const result = await addUser(data);
    if (result) {
        return true;
    } else {
        return false;
    }
}

module.exports.addShop = async function (data) {
  return await addShop(data); 
}