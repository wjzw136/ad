var express = require("express");
var mysql = require("mysql");
var select = require("../sql/select");
var router = express.Router();

/* GET users listing. */


router.get("/", function(req, res, next) {
  res.render("admin/home", { data: "还没写，请等待。。。。" });
});
router.get("/home", function(req, res, next) {

    res.render("admin/home")

});

router.get("/yglist", function(req, res, next) {
  if (req.cookies.user) {
    let connect = select.getconnect();
    let sql='SELECT * FROM yuangong LIMIT 0, 10';
    let sql2='SELECT count(*) FROM yuangong';
    connect.query(sql+';'+sql2, function(err,rows,fields){
      if (err) throw err;
      if(rows[0]){
        console.log(rows);
        res.render("admin/yglist", { data:rows[0]})
      }else{
        res.render("xiexie", { data: "查询数据库出错" });
      }
    })
    connect.end();
  } else {
    res.redirect("/login");
  }

});
router.get("/fwtongji", function(req, res, next) {
  if (req.cookies.user) {
    let connect = select.getconnect();
    let sql='SELECT * FROM tongji ORDER BY id desc';
    connect.query(sql, function(err,rows,fields){
      if (err) throw err;
      if(rows[0]){
        console.log(rows);
        res.render("admin/fwtongji", { data:rows})
      }else{
        res.render("xiexie", { data: "查询数据库出错" });
      }
    })
    connect.end();
  }else{
    res.redirect("/login");
  }
})
router.get("/cpguanli", function(req, res, next) {
  if (req.cookies.user) {
    let connect = select.getconnect();
    let sql='SELECT * FROM tongji LIMIT 0, 10';
    connect.query(sql, function(err,rows,fields){
      if (err) throw err;
      if(rows[0]){
        console.log(rows);
        res.render("admin/fwtongji", { data:rows})
      }else{
        res.render("xiexie", { data: "查询数据库出错" });
      }
    })
    connect.end();
  }else{
    res.redirect("/login");
  }
})
router.get("/liuyanchakan", function(req, res, next) {
  if (req.cookies.user) {
    let connect = select.getconnect();
    let sql='SELECT * FROM liuyan ORDER BY id desc';
    connect.query(sql, function(err,rows,fields){
      if (err) throw err;
      if(rows[0]){
        console.log(rows);
        res.render("admin/liuyanchakan", { data:rows})
      }else{
        res.render("xiexie", { data: "查询数据库出错" });
      }
    })
    connect.end();
  }else{
    res.redirect("/login");
  }
})
router.get("/xinwenguanli", function(req, res, next) {
  if (req.cookies.user) {

    res.render('admin/xinwenguanli');

  }else{
    res.redirect("/login");
  }
})
router.get("/yuangonglist", function(req, res, next) {
  if (req.cookies.user) {
    let connect = select.getconnect();
    let sql='SELECT * FROM yuangong';
    connect.query(sql, function(err,rows,fields){
      if (err) throw err;
      if(rows[0]){
        console.log(rows);
        res.render("admin/yuangonglist", { data:rows})
      }else{
        res.render("xiexie", { data: "查询数据库出错" });
      }
    })
    connect.end();
  }else{
    res.redirect("/login");
  }
})
module.exports = router;
