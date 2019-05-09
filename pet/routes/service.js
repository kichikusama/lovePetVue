var express = require('express');
var router = express.Router();

const { addService,getService,deleteServiceById } = require('../service/serviceService.js');

//新增
router.post('/addService', async function(req, res, next) {
  res.send(await addService(req.body))
});

router.get('/getService',async function(req, res, next) {
  res.send(await getService())
});

//删除服务通过id
router.get('/deleteServiceById', async function (req, res, next) {
  res.send(await deleteServiceById(req.query))
});
module.exports = router;
