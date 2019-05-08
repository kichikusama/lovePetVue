var express = require('express');
var router = express.Router();

const { addService,getService } = require('../service/serviceService.js');

/* GET users listing. */
router.post('/addService', async function(req, res, next) {
  res.send(await addService(req.body))
});

router.get('/getService',async function(req, res, next) {

  res.send(await getService())
});

module.exports = router;
