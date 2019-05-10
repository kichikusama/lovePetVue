var express = require('express');
var router = express.Router();

let { uploadFile } = require("../util/upload.js");

const { addGoods,getGoodsByPage,
  deleteGoodsByPage,getGoodsById,
  updateGoodsById,getGoodsByUserId,
  addShopIdToGoods} = require('../service/goodsService.js');

// 新增图片
router.post('/addImage', async function (req, res, next) {
  let result = await uploadFile(req, res, {
    fileType: 'goods',   // 图片保存文件名
    path: './public' // 图片保存文件路径
  });
  res.send(result);
});

// 新增商品
router.post('/addGoods', async function (req, res, next) {
  res.send(await addGoods(req.body))
});

// 分页查询
router.post('/getGoodsByPage', async function (req, res, next) {
  res.send(await getGoodsByPage(req.body))
});

// 通过 id 修改shopId 的属性
router.post('/deleteGoodsByPage', async function (req, res, next) {
  res.send(await deleteGoodsByPage(req.body))
});

// 通过 id 获取数据
router.post('/getGoodsById', async function (req, res, next) {
  res.send(await getGoodsById(req.body))
});

router.post('/updateGoodsById', async function (req, res, next) {
  res.send(await updateGoodsById(req.body))
});

// 通过 shopId 获取数据
router.post('/getGoodsByUserId', async function (req, res, next) {
  res.send(await getGoodsByUserId(req.body))
});

// 向商品身上添加 shopId
router.post('/addShopIdToGoods', async function (req, res, next) {
  res.send(await addShopIdToGoods(req.body))
});

module.exports = router;
