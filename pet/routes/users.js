var express = require('express');
var router = express.Router();



/* GET users listing. */

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
router.post('/disabledUsers',async function(req, res, next) {
  // console.log(req.body);
  res.send(await disabledUsers());  // 获取违规用户
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
router.post('/againstUsersById',async function(req, res, next) { // 修改用户 状态为 禁用
  console.log(req.body);
  res.send(await againstUsersById(req.body));
});

//删除用户通过id
router.get('/deleteUserById', async function (req, res, next) {
  res.send(await deleteUserById(req.query))
});

module.exports = router;
