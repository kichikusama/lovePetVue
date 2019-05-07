var express = require('express');
var router = express.Router();

const {  getUsers,addUser,searchUser,deleteUserById } = require('../service/usersService.js');

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
router.get('/getUsers',async function(req, res, next) {
  console.log(req.query);
  res.send(await getUsers(req.query));
});

// 通过搜索框 搜索用户  get请求方式 GM 
router.get('/searchUser', async function (req, res, next) {
  let yy =await searchUser(req.query);
  console.log("条件搜索用户："+ yy);
  res.send(yy);
});

//删除用户通过id
router.get('/deleteUserById', async function (req, res, next) {
  res.send(await deleteUserById(req.query))
});

module.exports = router;
