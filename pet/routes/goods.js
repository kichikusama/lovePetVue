var express = require('express');
var router = express.Router();

let { uploadFile } = require("../util/upload.js");

const { addGoods,getGoodsByPage,deleteGoodsByPage } = require('../service/goodsService.js');

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
router.get('/getGoodsByPage', async function (req, res, next) {
  res.send(await getGoodsByPage(req.query))
});

// 
router.get('/deleteGoodsByPage', async function (req, res, next) {
  res.send(await deleteGoodsByPage(req.query))
});
module.exports = router;
