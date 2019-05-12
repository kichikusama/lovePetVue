var express = require('express');
var router = express.Router();

const { getOrdersByPage,deleteOrdersById } = require('../service/ordersService.js');

// 分页查询
router.post('/getOrdersByPage', async function (req, res, next) {
  res.send(await getOrdersByPage(req.body))
});

// 通过 id 删除订单
router.post('/deleteOrdersById', async function (req, res, next) {
  res.send(await deleteOrdersById(req.body))
});


module.exports = router;
