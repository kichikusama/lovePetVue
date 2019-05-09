var express = require('express');
var router = express.Router();

const { addPets, getPets,deletePetByPage} = require('../service/petsService.js');

const { uploadFile } = require("../util/upload.js");

//新增图片
router.post('/addImage', async function (req, res, next) {
  let result = await uploadFile(req, res, {
    fileType: 'pets',   // 图片保存文件名
    path: './public' // 图片保存文件路径
  });
  res.send(result);
});

//新增宠物
router.post('/addPets', async function (req, res, next) {
  res.send(await addPets(req.body))
});

//渲染列表
router.get('/getPets', async function (req, res, next) {
  res.send(await getPets())
});

//删除
router.post('/deletePetByPage', async function (req, res, next) {
  console.log(44444444);
  res.send(await deletePetByPage(req.query))
});

module.exports = router;
