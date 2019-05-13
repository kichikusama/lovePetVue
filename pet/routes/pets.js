var express = require('express');
var router = express.Router();

const { addPets, getPets, deletePetByPage, getAllPets, getPetsById, updatePetsById, getPetsByUserId, addShopIdToPets } = require('../service/petsService.js');

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

//渲染分页列表
router.post('/getAllPets', async function (req, res, next) {
  res.send(await getAllPets(req.body))     //当请求方式是post时候  就要用req.body身上拿数据
});

//删除
router.post('/deletePetByPage', async function (req, res, next) {
  res.send(await deletePetByPage(req.body))   //当请求方式是get时候  就要用req.query身上拿数据
});

//通过ID获取数据
router.get('/getPetsById', async function (req, res, next) {
  res.send(await getPetsById(req.query))      //当请求方式是get时候  就要用req.query身上拿数据
});

//通过ID修改对应数据
router.post('/updatePetsById', async function (req, res, next) {
  res.send(await updatePetsById(req.body))
});

// 通过 shopId 获取数据
router.post('/getPetsByUserId', async function (req, res, next) {
  res.send(await getPetsByUserId(req.body))
});

// 向宠物身上添加 shopId
router.post('/addShopIdToPets', async function (req, res, next) {
  res.send(await addShopIdToPets(req.body))
});

module.exports = router;
