const { getUsers,addUser,searchUser  } = require('../dao/usersDao.js');


// 新增 用户  get 请求方式 GM
module.exports.addUser = async function (data) {
    const result = await addUser(data);
    if (result) {
        return true;
    } else {
        return false;
    }
}
// 分页获取用户  get 请求方式  GM
module.exports.getUsers = async function () {
  return await getUsers(); 
}

//搜索框 搜索用户 get 请求方式 GM
module.exports.searchUser = async function (search) {
    return await searchUser(search);
  }