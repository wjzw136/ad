var express = require("express");
var mysql = require("mysql");
var select = require("../sql/select");
var router = express.Router();

/* GET users listing. */


router.get("/1", function(req, res, next) {
  res.render("admin/1", { data: "还没写，请等待。。。。" });
});
router.get("/index", function(req, res, next) {

    res.render("admin/index", { data:'rows'})

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
    res.render("xiexie", { data: "你还未登录" });
  }

});
router.get("/fwtongji", function(req, res, next) {
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
  }
})
router.get("/liuyanchakan", function(req, res, next) {
  if (req.cookies.user) {
    let connect = select.getconnect();
    let sql='SELECT * FROM liuyan LIMIT 0, 10';
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
  }
})
router.get("/xinwenguanli", function(req, res, next) {
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
  }
})
module.exports = router;
