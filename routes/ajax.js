var express = require("express");
var fs = require("fs");
//var mysql = require("mysql");
var select = require("../sql/select");
var func = require("../func");
var router = express.Router();
router.get("/", function(req, res, next) {
  res.render("2", { title: "Express" });
});

module.exports = router;
