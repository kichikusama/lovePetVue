var express = require('express');
var router = express.Router();

const { addShop,getShop,deteleShop } = require('../service/shopsService');

const {uploadFile} =require("../util/upload.js");
router.post('/addShopsImage', async function (req, res, next) {
  let result = await uploadFile(req, res, {
      fileType: 'shops',   // 图片保存文件名
      path: './public' // 图片保存文件路径
  });
  res.send(result);
});


/* GET users listing. */
router.post('/addShop', async function(req, res, next) {
  res.send(await addShop(req.body))
});//添加门店

router.post('/getShop',async function(req, res, next) {
  console.log(req.body)
  res.send(await getShop(req.body))
});//获取所有门店


router.get('/deteleShop',async function(req, res, next) {
  res.send(await deteleShop(req.query))
});//删除指定门店

module.exports = router;
