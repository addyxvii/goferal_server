var express = require('express')
var router = express.Router();

router.get('/', function (req, res) {
  res.send('users');
});

router.post('/', function(req, res) {
  res.send();
});

module.exports = router;
