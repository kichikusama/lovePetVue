var express = require('express');
var router = express.Router();

const { addShop } = require('../service/shopsService');

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
});

router.get('/getUsers',async function(req, res, next) {
  res.send(await getUsers())
});

module.exports = router;
