var express = require('express');
var router = express.Router();

const { addService,getService,deteleService,getServiceBypage } = require('../service/serviceService.js');

//新增
router.post('/addService', async function(req, res, next) {
  res.send(await addService(req.body))
});

router.post('/getServiceBypage',async function(req, res, next) {
  res.send(await getServiceBypage(req.body))
});//获取当前管理员所有门店（具有分页）

router.get('/getService',async function(req, res, next) {
  res.send(await getService())
});

//删除服务通过id
router.get('/deteleService', async function (req, res, next) {
  // console.log(req.query);
  
  res.send(await deteleService(req.query))
});
module.exports = router;
