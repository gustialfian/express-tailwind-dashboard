var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  return res.render('dashboard');
});

module.exports = router;
