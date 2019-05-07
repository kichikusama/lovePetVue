var express = require('express');
var router = express.Router();

const { addPet } = require('../service/petsService.js');

router.post('/addImage', async function (req, res, next) {
  let result = await uploadFile(req, res, {
      fileType: 'pets',   // 图片保存文件名
      path: './public' // 图片保存文件路径
  });
  res.send(result);
});

/* GET users listing. */
router.post('/addPet', async function(req, res, next) {
  res.send(await addPet(req.body))
});

router.get('/getUsers',async function(req, res, next) {
  res.send(await getUsers())
});

module.exports = router;
