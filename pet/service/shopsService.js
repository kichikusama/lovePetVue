const { addShop,getShopBypage,deteleShop,getShop,getShopById } = require('../dao/shopsDao.js');

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
module.exports.getShopById = async function (userId) {// 通过用户ID找门店   GM
  return await getShopById(userId); 
}