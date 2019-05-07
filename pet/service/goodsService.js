const { addGoods } = require('../dao/goodsDao.js');

module.exports.addGoods = async function (data) {
    const result = await addUser(data);
    // if (result) {
    //     return true;
    // } else {
    //     return false;
    // }
}

module.exports.getUsers = async function () {
  return await getUsers(); 
}