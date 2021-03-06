var express = require('express');
var router = express.Router();

const { addShop,getShopBypage,deteleShop,getShop,getShopById,auditingShopById } = require('../service/shopsService');

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
 console.log("gg"+req.body);
 let re = await addShop(req.body);
 
 
  res.send(re);
});//添加门店

router.post('/getShopBypage',async function(req, res, next) {
  console.log(req.body);
  
  res.send(await getShopBypage(req.body))
});//获取当前管理员所有门店（具有分页）

router.post('/getShop',async function(req, res, next) {
  res.send(await getShop(req.body))
});//获取当前管理员所有门店


router.get('/deteleShop',async function(req, res, next) {
  res.send(await deteleShop(req.query))
});//删除指定门店

router.post('/getShopById ',async function(req, res, next) { // 通过用户ID找门店   GM
//  console.log("in");
 
  res.send(await getShopById(req.body))
});
router.post('/auditingShopById',async function(req, res, next) {//审批门店  gm  参数： shopId,shopType
  console.log(req.body);
 
  res.send(await auditingShopById(req.body))
});
module.exports = router;
