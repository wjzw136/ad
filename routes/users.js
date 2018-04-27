var express = require("express");
var mysql = require("mysql");
var select = require("../sql/select");
var router = express.Router();

/* GET users listing. */
router.get("/login", function(req, res, next) {
  res.render("admin/login", { data: "还没写，请等待。。。。" });
});

router.get("/1", function(req, res, next) {
  res.render("admin/1", { data: "还没写，请等待。。。。" });
});
router.get("/index", function(req, res, next) {
  if (req.cookies.user) {
    var connect = select.getconnect();
    connect.query("SELECT * FROM yuangong", function(err,rows,fields){
      if (err) throw err;
      if(rows[0]){
        console.log(rows);
        res.render("admin/index", { data:rows})
      }
    })

  } else {
    res.render("xiexie", { data: "你还未登录" });
  }
});

router.post("/login", function(req, res, next) {
  let zhanghao = req.body.zhanghao;
  let password = req.body.password;
  // var connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "",
  //   database: "tonesat"
  // });
  // connection.connect();
  var connect = select.getconnect();
  connect.query("SELECT * FROM yuangong WHERE zhanghao=?", [zhanghao], function(
    err,
    rows,
    fields
  ) {
    if (err) throw err;
    if (rows == "undefined") {
      res.render("xiexie", { data: "账号不正确" });
    } else {
      if (rows[0]) {
        if (rows[0].mima == password) {
          res.cookie("user", zhanghao);
          res.render("xiexie", { data: "欢迎你" + zhanghao + "登录成功" });
        } else {
          res.render("xiexie", { data: "密码不正确" });
        }
      } else {
        res.render("xiexie", { data: "密码不正确" });
      }
      //   else{
      //   res.render("xiexie",{data:'账户不存在'});
      // }
    }
  });
  connect.end();
  //select.getallyuangong('222',res.render('xiexie',{main:'sdad[0].name'}));
  //console.log(select.getallyuangong1());
  // console.log(sdsd);
  // connection.query(
  //   "SELECT * FROM yuangong WHERE zhanghao=" + connection.escape(zhanghao),
  //   function(err, rows, fields) {
  //     if (err) throw err;
  //     console.log(rows[0].name);
  //     if (rows[0].mima == password) {
  //       res.cookie("user", req.query.user);
  //       res.cookie("password", req.query.password);
  //       res.render("index", {main:"ssss"});
  //     } else {
  //res.render("xiexie",{main:"sdsdsd"});
  //     }
  //   }
  // );
  //connection.end();

  //console.log(row);
});
module.exports = router;
