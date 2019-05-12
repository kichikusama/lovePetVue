<<<<<<< HEAD
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
=======
var express = require('express');
var router = express.Router();

const {  } = require('../service/ordersService.js');

/* GET users listing. */
router.post('/addUser', async function(req, res, next) {
  res.send(await addUser(req.body))
});

router.get('/getUsers',async function(req, res, next) {
  res.send(await getUsers())
});

module.exports = router;
>>>>>>> 6d7dcc34f2b68c9d1e225a2cdb1911f33f44b1d9
