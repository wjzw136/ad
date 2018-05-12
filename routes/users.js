var express = require("express");
var mysql = require("mysql");
var select = require("../sql/select");
var func = require("../func");
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
    let sql='SELECT * FROM cp LIMIT 0, 10';
    connect.query(sql, function(err,rows,fields){
      if (err) throw err;
      if(rows[0]){
        console.log(rows);
        res.render("admin/cpguanli", { data:rows})
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
    let sql='SELECT * FROM yuangong order by id desc';
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

router.post("/addyg", function(req, res, next) {
  if (req.cookies.user) {
    let connect = select.getconnect();
    let name=req.body.name;
    let zhiwei=req.body.zhiwei;
    let bumen=req.body.bumen;
    let zhanghao =req.body.zhanghao;
    let mima='123456';
    let sql='INSERT INTO yuangong ( name, zhiwei,bumen,zhanghao,mima )VALUES( ?,?,?,?,?);';
    connect.query(sql,[name,zhiwei,bumen,zhanghao,mima],function(err,rows,fields){
      if (err) throw err;
      if(rows){
        console.log(rows);
        res.redirect("/users/yuangonglist")
      }else{
        res.render("xiexie", { data: "查询数据库出错" });
      }
    })
    connect.end();
  }else{
    res.redirect('/login');
  }
})


router.post("/addcp", function(req, res, next) {
  if (req.cookies.user) {
    let connect = select.getconnect();
    let mingcheng=req.body.mingcheng;
    let neibie=req.body.neibie;
    let xinghao=req.body.xinghao;
    let time=func.getNowFormatDate();
    let sql='INSERT INTO cp ( mingcheng, neibie,xinghao,time )VALUES( ?,?,?,?);';
    connect.query(sql,[mingcheng,neibie,xinghao,time],function(err,rows,fields){
      if (err) throw err;
      if(rows){
        console.log(rows);
        res.redirect("/users/cpguanli")
      }else{
        res.render("xiexie", { data: "查询数据库出错" });
      }
    })
    connect.end();
  }else{
    res.redirect('/login');
  }
})


router.post("/chanchu", function(req, res, next) {
  if (req.cookies.user) {

    console.log(req.body.id)
    let connect = select.getconnect();
    let id=req.body.id;
    let neibie =req.body.neibie
    let sql="DELETE FROM "+neibie+" WHERE id=?";
    connect.query(sql,[id],function(err,rows,fields){
      if (err) throw err;
      res.send(id);
    })
    connect.end();
  }else{
    res.redirect('/login');
   }
})


router.post("/addnews", function(req, res, next) {
  if (req.cookies.user) {
    let user=req.cookies.user;
    let connect = select.getconnect();
    let biaoti=req.body.biaoti;
    let neirong=req.body.neirong;
    let biaoqian=req.body.biaoqian;
    let time=func.getNowFormatDate();
    let sql='INSERT INTO news ( biaoti,neirong,time,user,biaoqian)VALUES( ?,?,?,?,?)';
    connect.query(sql,[biaoti,neirong,time,user,biaoqian],function(err,rows,fields){
      if (err) throw err;
      if(rows){
        console.log(rows);
        res.redirect("/users/xinwenguanli")
      }else{
        res.render("xiexie", { data: "查询数据库出错" });
      }
    })
    connect.end();
  }else{
    res.redirect('/login');
  }
})
module.exports = router;
