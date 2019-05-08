const { addGoods,getGoodsByPage,deleteGoodsByPage } = require('../dao/goodsDao.js');

module.exports.addGoods = async function (data) {
    const result = await addGoods(data);
    if (result) {
        return true;
    } else {
        return false;
    }
}

module.exports.getGoodsByPage = async function (goods) {
  return await getGoodsByPage(goods); 
}

module.exports.deleteGoodsByPage = async function (data) {
    const result =  await deleteGoodsByPage(data); 
    console.log(result);
  }