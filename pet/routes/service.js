var express = require('express');
var router = express.Router();

const { addService,getService,deteleService } = require('../service/serviceService.js');

//新增
router.post('/addService', async function(req, res, next) {
  res.send(await addService(req.body))
});

router.get('/getService',async function(req, res, next) {
  res.send(await getService())
});

//删除服务通过id
router.get('/deteleService', async function (req, res, next) {
  // console.log(req.query);
  
  res.send(await deteleService(req.query))
});
module.exports = router;
