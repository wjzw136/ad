var express = require("express");
var fs = require("fs");
//var mysql = require("mysql");
var select = require("../sql/select");
var func=require('../func');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("2", { title: "Express" });
});
router.get("/index", function(req, res, next) {
  res.render("2", { title: "sdsd" });
});
router.get("/main", function(req, res, next) {
  res.render("main", { title: "sdsd" });
});
router.get("/news", function(req, res, next) {
  var dataa = fs.readFileSync("./xx.json", "utf-8", function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
      return data;
      //console.log(JSON.parse(data));
    }
  });
  res.render("moban", { htmldata: JSON.parse(dataa) });
});
router.get("/cp", function(req, res, next) {
  res.render("cp", { title: "new" });
});
router.get("/fa", function(req, res, next) {
  res.render("fa", { data: "还没写，请等待。。。。" });
});
router.get("/lx", function(req, res, next) {
  res.render("xiexie", { data: "还没写，请等待。。。。" });
});

//留言
router.post("/liuyan", function(req, res, next) {
  let email= req.body.email;
  let dianhua= req.body.dianhua;
  let neirong = req.body.neirong;
  let time =func.getNowFormatDate();
  var connect = select.getconnect();
  let sql='INSERT INTO liuyan (dianhua,email,neirong,time)VALUES(?,?,?,?);'
  connect.query(sql,[dianhua,email,neirong,time], function(err,rows,fields){
    if (err) throw err;
    if(rows[0]){
      console.log(rows);
    }
  })
  res.render("xiexie", { data: "谢谢您提出宝贵意见！" });
  connect.end();
});


module.exports = router;
