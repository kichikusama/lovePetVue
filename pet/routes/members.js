var express = require('express');
var router = express.Router();

const { addMembers,getMembers,deleteMembers } = require('../service/membersService.js');

/* GET users listing. */
router.post('/addmembers', async function(req, res, next) {
  res.send(await addMembers(req.body))
});//增加宠主


//需要获取参数：  {当前页，每页显示条数,查询类型,查询关键字}
router.post('/getmembers',async function(req, res, next) {
  res.send(await getMembers(req.body))
});//获取所有宠主(带分页,查询)

router.get('/deletemembers',async function(req, res, next) {
  res.send(await deleteMembers(req.query))
});//通过id删除宠主

module.exports = router;
