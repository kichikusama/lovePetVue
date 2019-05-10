const { addShop,getShopBypage,deteleShop,getShop,revisionShop } = require('../dao/shopsDao.js');

module.exports.getShopBypage = async function (data) {
    return await getShopBypage(data); 
}

module.exports.getShop = async function (data) {
  return await getShop(data); 
}

module.exports.addShop = async function (data) {
  return await addShop(data); 
}

module.exports.deteleShop = async function (data) {
  return await deteleShop(data); 
}


module.exports.revisionShop = async function (data) {
  return await revisionShop(data); 
}