var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/1', function(req, res, next) {
  res.render('index1', { title: 'sdsd' });
});
router.get('/2', function(req, res, next) {
  res.render('2', { title: 'sdsd' });
});

module.exports = router;
