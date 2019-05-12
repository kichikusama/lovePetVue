var express = require('express');
var router = express.Router();

const {  } = require('../service/membersService.js');

/* GET users listing. */
router.post('/addUser', async function(req, res, next) {
  res.send(await addUser(req.body))
});

router.get('/getUsers',async function(req, res, next) {
  res.send(await getUsers())
});

module.exports = router;
