var express = require('express');
var router = express.Router();

const { addPets, getPets} = require('../service/petsService.js');

const { uploadFile } = require("../util/upload.js");

router.post('/addImage', async function (req, res, next) {
  let result = await uploadFile(req, res, {
    fileType: 'pets',   // 图片保存文件名
    path: './public' // 图片保存文件路径
  });
  res.send(result);
});

/* GET users listing. */
router.post('/addPets', async function (req, res, next) {
  res.send(await addPets(req.body))
});

router.get('/getPets', async function (req, res, next) {
  console.log(await getPets());
  
  res.send(await getPets())
});

module.exports = router;
