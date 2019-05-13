<<<<<<< HEAD
var express = require('express');
var router = express.Router();

const {  getUsers,addUser,searchUser,deleteUserById,loginUser,auditing } = require('../service/usersService.js');

/* GET users listing. */

// 新增 用户  post 请求方式 GM
router.post('/addUser', async function(req, res, next) {
  res.send(await addUser(req.body))
});
// 分页获取用户 get 请求方式  GM
// 参数：
// url: '/users/getUsers',
//type: 'get',
//data: {
//currentPage: this.pageData.currentPage,
//   eachPage: this.pageData.eachPage,
//},
router.post('/getUsers',async function(req, res, next) {
  // console.log(req.body);
  res.send(await getUsers(req.body));
});

router.post('/auditingUsers',async function(req, res, next) {
  // console.log(req.body);
  res.send(await auditing());
});
// 通过搜索框 搜索用户  get请求方式 GM 
router.post('/searchUser', async function (req, res, next) {
  // console.log(req.body);
  
  let yy =await searchUser(req.body);
  // console.log("条件搜索用户："+ yy);
  res.send(yy);
});

// 登录查询  post请求方式 GM 
router.post('/loginUser', async function (req, res, next) {
  console.log(req.body);
  let yy =await loginUser(req.body);
  // console.log("登录用户："+ yy);
  res.send(yy);
});

//删除用户通过id
router.get('/deleteUserById', async function (req, res, next) {
  res.send(await deleteUserById(req.query))
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();

const {  getUsers,addUser,searchUser,deleteUserById,loginUser,auditing,adoptUsersById,disabledUsers,againstUsersById } = require('../service/usersService.js');

/* GET users listing. */
const {uploadFile} =require("../util/upload");
router.post('/addUserImage', async function (req, res, next) {
  let result = await uploadFile(req, res, {
      fileType: 'users',   // 图片保存文件名
      path: './public' // 图片保存文件路径
  });
  res.send(result);
});

// 新增 用户  post 请求方式 GM
router.post('/addUser', async function(req, res, next) {
  res.send(await addUser(req.body))
});
// 分页获取用户 get 请求方式  GM
// 参数：
// url: '/users/getUsers',
//type: 'get',
//data: {
//currentPage: this.pageData.currentPage,
//   eachPage: this.pageData.eachPage,
//},
router.post('/getUsers',async function(req, res, next) {
  console.log(req.body);
  res.send(await getUsers(req.body));
});

router.post('/auditingUsers',async function(req, res, next) {
  // console.log(req.body);
  res.send(await auditing());
});
router.post('/disabledUsers',async function(req, res, next) { // 获取违规用户
  // console.log(req.body);
  res.send(await disabledUsers());
});
// 通过搜索框 搜索用户  get请求方式 GM 
router.post('/searchUser', async function (req, res, next) {
  // console.log(req.body);
  
  let yy =await searchUser(req.body);
  // console.log("条件搜索用户："+ yy);
  res.send(yy);
});

// 登录查询  post请求方式 GM 
router.post('/loginUser', async function (req, res, next) {
  console.log(req.body);
  let yy =await loginUser(req.body);
  console.log("登录用户："+ yy);
  res.send(yy);
});

//删除用户通过id
router.get('/deleteUserById', async function (req, res, next) {
  res.send(await deleteUserById(req.query))
});

 //通过Id修改  待审批用户状态
 router.post('/adoptUsersById', async function (req, res, next) {
  // console.log("adoptUsersById")
  res.send(await adoptUsersById(req.body));
}); 
 //通过Id修改  违规用户状态
 router.post('/againstUsersById', async function (req, res, next) {
  // console.log("adoptUsersById")
  res.send(await againstUsersById(req.body));
}); 
module.exports = router;
>>>>>>> 1b9b766fe195e35ff46709a0860ef0c49c6c3ab5
