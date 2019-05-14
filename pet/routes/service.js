var express = require('express');
var router = express.Router();

const { addService,getService,deleteServiceByPage,getServiceByPage,getServiceById,updateServiceById,getServiceByUserId, addShopIdToService} = require('../service/serviceService.js');

//新增
router.post('/addService', async function(req, res, next) {
  res.send(await addService(req.body))
});
router.post('/getServiceByPage',async function(req, res, next) {
  res.send(await getServiceByPage(req.body))
});//获取当前管理员所有门店（具有分页）

router.get('/getService',async function(req, res, next) {
  res.send(await getService())
});

// 通过 id 修改shopId 的属性
router.post('/deleteServiceByPage', async function (req, res, next) {
  res.send(await deleteServiceByPage(req.body))
});

// 通过 id 获取数据
router.post('/getServiceById', async function (req, res, next) {
  res.send(await getServiceById(req.body))
});

router.post('/updateServiceById', async function (req, res, next) {
  res.send(await updateServiceById(req.body))
});

// 通过 shopId 获取数据
router.post('/getServiceByUserId', async function (req, res, next) {
  res.send(await getServiceByUserId(req.body))
});

// 向商品身上添加 shopId
router.post('/addShopIdToService', async function (req, res, next) {
  res.send(await addShopIdToService(req.body))
});

module.exports = router;
