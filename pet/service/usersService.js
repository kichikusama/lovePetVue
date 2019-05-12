const { getUsers, addUser, searchUser, deleteUserById, loginUser,auditing } = require('../dao/usersDao.js');


// 新增 用户  POST 请求方式 GM
module.exports.addUser = async function (data) {
  const result = await addUser(data);
  console.log(result);
  
  if (result) {
    return true;
  } else {
    return false;
  }
}
// 分页获取用户  get 请求方式  GM
module.exports.getUsers = async function (data) {
  let ss = await getUsers(data);
  // console.log("ss:"+ss);
  return ss;
}
module.exports.auditing = async function () {
  let ss = await auditing();
  // console.log("ss:"+ss);
  return ss;
}
//搜索框 搜索用户 get 请求方式 GM
module.exports.searchUser = async function (search) {
  return await searchUser(search);
}

// 登录查询  post请求方式 GM 
module.exports.loginUser = async function (user) {
  return await loginUser(user); 
}

//删除用户通过id
module.exports.deleteUserById = async function (data) {
  let remove = await deleteUserById(data);
  if (remove.ok) {
    return true
  } else {
    return false
  }
}