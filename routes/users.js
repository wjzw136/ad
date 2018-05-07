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
router.get("/home", function(req, res, next) {
  if (req.cookies.user) {
    let connect = select.getconnect();
    let sql='SELECT * FROM yuangong';
    connect.query(sql, function(err,rows,fields){
      if (err) throw err;
      if(rows[0]){
        console.log(rows);
        res.render("admin/home", { data:rows})
      }else{
        res.render("xiexie", { data: "查询数据库出错" });
      }
    })
    connect.end();
  } else {
    res.render("xiexie", { data: "你还未登录" });
  }

});


module.exports = router;
