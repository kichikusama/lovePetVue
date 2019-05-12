<<<<<<< HEAD
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
=======
const { getUsers, addUser, searchUser, deleteUserById, loginUser,auditing,adoptUsersById,disabledUsers,againstUsersById } = require('../dao/usersDao.js');


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
module.exports.auditing = async function () {  // 获取待审批用户
  let ss = await auditing();
  // console.log("ss:"+ss);
  return ss;
}
module.exports.disabledUsers = async function () {  // 获取违规用户
  let ss = await disabledUsers();
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
 //通过Id修改  待审批用户状态
module.exports.adoptUsersById = async function (UsersDetails) {
 let re = await adoptUsersById(UsersDetails);
 if(re.ok>0){
   return true
 }
 return false;
}
 //通过Id修改  违规用户状态
 module.exports.againstUsersById = async function (UsersDetails) {
  let re = await againstUsersById(UsersDetails);
  if(re.ok>0){
    return true
  }
  return false;
 }
>>>>>>> 1b9b766fe195e35ff46709a0860ef0c49c6c3ab5
