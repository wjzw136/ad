var express = require("express");
var fs = require("fs");
//var mysql = require("mysql");
var select = require("../sql/select");
var func = require("../func");
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
router.get("/lx", function(req, res, next) {
  res.render("lx", { title: "联系我们" });
});
router.get("/newssss", function(req, res, next) {
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
router.get("/news", function(req, res, next) {
  let connect =select.getconnect();
  let sql ='select * from news order by id desc limit 0,10'
  connect.query(sql,function(err,row){
    if(err) throw err;
    if(row[0]){
      res.render("news", { data: row});
    }else{
      res.render("xiexie", { data: "查询出错" });
    }
  })

});
router.get("/cp", function(req, res, next) {
  let connect =select.getconnect();
  let sql ='select * from cp';
  let sql2='select * from cp where neibie="动中通卫通天线"';
  let sql3='select * from cp where neibie="静中通卫通天线"';
  connect.query(sql + ";" + sql2+ ";" + sql3,function(err,row){
    if(err) throw err;
    if(row[0]){
      console.log(row[1]);
      res.render("cp",{ all: row[0],dzt: row[1],jzt: row[2]});
    }else{
      res.render("xiexie", { data: "查询出错" });
    }
  })
  connect.end();




});
router.get('/cp/:id',function(req, res, next){
  let id=req.params.id;
  let connect =select.getconnect();
  let sql ='select * from cp where id =?'
  connect.query(sql,[id],function(err,row){
    if(err) throw err;
    if(row[0]){
      console.log(row);
      res.render("cpye", { data: row});
    }else{
      res.render("xiexie", { data: "新闻不存在" });
    }
  })
  connect.end();

})









router.get("/fa", function(req, res, next) {
  res.render("fa", { data: "还没写，请等待。。。。" });
});

//留言
router.post("/liuyan", function(req, res, next) {
  let email = req.body.email;
  let dianhua = req.body.dianhua;
  let neirong = req.body.neirong;
  let time = func.getNowFormatDate();
  var connect = select.getconnect();
  let sql = "INSERT INTO liuyan (dianhua,email,neirong,time)VALUES(?,?,?,?);";
  connect.query(sql, [dianhua, email, neirong, time], function(
    err,
    rows,
    fields
  ) {
    if (err) throw err;
    if (rows[0]) {
      console.log(rows);
    }
  });
  res.render("xiexie", { data: "谢谢您提出宝贵意见！" });
  connect.end();
});

router.post("/login", function(req, res, next) {
  let zhanghao = req.body.zhanghao;
  let password = req.body.password;
  let jizhu = req.body.jizhu;
  console.log(req.body);
  // var connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "",
  //   database: "tonesat"
  // });
  // connection.connect();
  let connect = select.getconnect();
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
          if (jizhu=='on') {
             res.cookie("user", zhanghao);
             res.redirect("/users/home");
           } else {
            res.clearCookie("user");
            res.redirect("/users/home");
           }
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

router.get("/login", function(req, res, next) {
  res.render("login");
});




router.get('/news/:id',function(req, res, next){
  let id=req.params.id;
  let connect =select.getconnect();
  let sql ='select * from news where id =?'
  connect.query(sql,[id],function(err,row){
    if(err) throw err;
    if(row[0]){
      res.render("newsye", { data: row});
    }else{
      res.render("xiexie", { data: "新闻不存在" });
    }
  })
  connect.end();

})



router.get("/xiazai", function(req, res, next) {
  res.download('public/images/产品手册.pdf', '产品手册.pdf')
});
module.exports = router;
