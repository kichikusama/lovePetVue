var express = require('express');
var router = express.Router();

const {  } = require('../service/goodsService.js');

// 新增图片
router.post('/addGoodsImage', async function (req, res, next) {
  console.log("in");
  let result = await uploadFile(req, res, {
      fileType: 'goods',   // 图片保存文件名
      path: '../public/goods' // 图片保存文件路径
  });
  res.send(result);
});


/* GET users listing. */
router.post('/addUser', async function(req, res, next) {
  res.send(await addUser(req.body))
});

router.get('/getUsers',async function(req, res, next) {
  res.send(await getUsers())
});

module.exports = router;
