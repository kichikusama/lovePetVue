const { addShop,getShopBypage,deteleShop,getShop } = require('../dao/shopsDao.js');

module.exports.getShopBypage = async function (data) {
    return await getShopBypage(data); 
}

module.exports.getShop = async function () {
  return await getShop(); 
}

module.exports.addShop = async function (data) {
  return await addShop(data); 
}

module.exports.deteleShop = async function (data) {
  return await deteleShop(data); 
}