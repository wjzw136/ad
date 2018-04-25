var express = require('express');
var mysql= require('mysql');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render("admin/login", { main: "还没写，请等待。。。。"  });
});


router.get('/1', function(req, res, next) {
  res.render("admin/1", { main: "还没写，请等待。。。。"  });
});


module.exports = router;
