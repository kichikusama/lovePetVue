<<<<<<< HEAD
const { addShop,getShopBypage,deteleShop,getShop,revisionShop } = require('../dao/shopsDao.js');
=======
const { addShop,getShopBypage,deteleShop,getShop,getShopById } = require('../dao/shopsDao.js');
>>>>>>> 79dcf948b923ee4cc749ea055125ffda4a1ef15e

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
<<<<<<< HEAD


module.exports.revisionShop = async function (data) {
  return await revisionShop(data); 
=======
module.exports.getShopById = async function (userId) {// 通过用户ID找门店   GM
  return await getShopById(userId); 
>>>>>>> 79dcf948b923ee4cc749ea055125ffda4a1ef15e
}