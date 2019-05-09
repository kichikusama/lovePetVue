const { addShop,getShop,deteleShop } = require('../dao/shopsDao.js');

module.exports.getShop = async function (data) {
    return await getShop(data); 
}

module.exports.addShop = async function (data) {
  return await addShop(data); 
}

module.exports.deteleShop = async function (data) {
  return await deteleShop(data); 
}