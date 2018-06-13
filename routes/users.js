var express = require("express");
var mysql = require("mysql");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });
var select = require("../sql/select");
var func = require("../func");
var router = express.Router();

/* GET users listing. */
router.get("/*", function(req, res, next) {
  if (req.cookies.user) {
    res.locals.user = req.cookies.user;
    next();
  } else {
    res.redirect("/login");
  }
});

router.get("/", function(req, res, next) {

    res.render("admin/home");

});
router.get("/home", function(req, res, next) {

    let connect = select.getconnect();
    let sql = "SELECT COUNT(*) FROM tongji";
    let sql2 = "SELECT COUNT(*) FROM liuyan";
    connect.query(sql + ";" + sql2, function(err, rows, fields) {
      if (err) throw err;
      if (rows) {
        res.render("admin/home", {
          fw: rows[0][0]["COUNT(*)"],
          liuyan: rows[1][0]["COUNT(*)"]
        });
      } else {
        res.render("xiexie", { data: "查询数据库出错" });
      }
    });
    connect.end();
});

router.get("/yglist", function(req, res, next) {
    let connect = select.getconnect();
    let sql = "SELECT * FROM yuangong LIMIT 0, 10";
    let sql2 = "SELECT count(*) FROM yuangong";
    connect.query(sql + ";" + sql2, function(err, rows, fields) {
      if (err) throw err;
      if (rows[0]) {
        res.render("admin/yglist", { data: rows[0] });
      } else {
        res.render("xiexie", { data: "查询数据库出错" });
      }
    });
    connect.end();
});
router.get("/fwtongji", function(req, res, next) {

    let connect = select.getconnect();
    let sql = "SELECT * FROM tongji ORDER BY id desc";
    connect.query(sql, function(err, rows, fields) {
      if (err) throw err;
      if (rows[0]) {
        res.render("admin/fwtongji", { data: rows });
      } else {
        res.render("xiexie", { data: "查询数据库出错" });
      }
    });
    connect.end();
});
router.get("/cpguanli", function(req, res, next) {

    let connect = select.getconnect();
    let sql = "SELECT * FROM cp order by id desc";
    connect.query(sql, function(err, rows, fields) {
      if (err) throw err;
      if (rows[0]) {
        res.render("admin/cpguanli", { data: rows });
      } else {
        res.render("xiexie", { data: "查询数据库出错" });
      }
    });
    connect.end();

});
router.get("/liuyanchakan", function(req, res, next) {

    let connect = select.getconnect();
    let sql = "SELECT * FROM liuyan ORDER BY id desc";
    connect.query(sql, function(err, rows, fields) {
      if (err) throw err;
      if (rows[0]) {
        res.render("admin/liuyanchakan", { data: rows });
      } else {
        res.render("xiexie", { data: "查询数据库出错" });
      }
    });
    connect.end();

});
router.get("/xinwenguanli", function(req, res, next) {

    let connect = select.getconnect();
    let sql = "SELECT * FROM news ORDER BY id desc";
    connect.query(sql, function(err, rows, fields) {
      if (err) throw err;
      if (rows[0]) {
        res.render("admin/xinwenguanli", { data: rows });
      } else {
        res.render("xiexie", { data: "查询数据库出错" });
      }
    });
    connect.end();

});
router.get("/yuangonglist", function(req, res, next) {

    let connect = select.getconnect();
    let sql = "SELECT * FROM yuangong order by id desc";

    connect.query(sql, function(err, rows, fields) {
      if (err) throw err;
      if (rows[0]) {
        res.render("admin/yuangonglist", {
          data: rows,
          user: req.cookies.user
        });
      } else {
        res.render("xiexie", { data: "查询数据库出错" });
      }
    });
    connect.end();

});

router.post("/addyg", function(req, res, next) {

    let connect = select.getconnect();
    let name = req.body.name;
    let xingbie = req.body.xingbie;
    let zhiwei = req.body.zhiwei;
    let bumen = req.body.bumen;
    let zhanghao = req.body.zhanghao;
    let mima = "123456";
    let lv = "1";
    let sql =
      "INSERT INTO yuangong ( name,zhiwei,bumen,zhanghao,mima,lv,xingbie )VALUES( ?,?,?,?,?,?,?)";
    connect.query(
      sql,
      [name, zhiwei, bumen, zhanghao, mima, lv, xingbie],
      function(err, rows, fields) {
        if (err) throw err;
        if (rows) {
          res.redirect("/users/yuangonglist");
        } else {
          res.render("xiexie", { data: "添加数据库出错" });
        }
      }
    );
    connect.end();

});
router.post("/addcp", upload.any(), function(req, res, next) {

    let connect = select.getconnect();
    let name = req.body.name;
    let miaoshu = req.body.miaoshu;
    let neibie = req.body.neibie;
    let tedian = req.body.tedian;
    let changjing = req.body.changjing;
    let fangan = req.body.fangan;
    let bianhao = req.body.bianhao;
    let time = func.getNowFormatDate();
    if (req.files[0]) {
      var imgurl = "/uploads/" + req.files[0].originalname;
    } else {
      var imgurl = "/uploads/moren.jpg";
    }
    let sql =
      "INSERT INTO cp ( name, miaoshu,tedian,changjing,imgurl,neibie,fangan,bianhao)VALUES( ?,?,?,?,?,?,?,?)";
    connect.query(
      sql,
      [name, miaoshu, tedian, changjing, imgurl, neibie, fangan, bianhao],
      function(err, rows, fields) {
        if (err) throw err;
        if (rows) {
          res.redirect("/users/cpguanli");
        } else {
          res.render("xiexie", { data: "添加出错" });
        }
      }
    );
    connect.end();

});
router.post("/shanchu", function(req, res, next) {

    let connect = select.getconnect();
    let user = req.cookies.user;
    let sql = "SELECT lv from yuangong WHERE zhanghao =?";
    connect.query(sql, [user], function(err, row1, fields) {
      if (err) throw err;
      if (row1[0].lv == 10) {
        next();
        //res.render("xiexie", { data: "查询数据库出错" });
      } else {
        res.send({ zhuangtai: "shibai" });
        //res.redirect("/users/"+neibie+"list");
      }
    });
    connect.end();

});

router.post("/getlbt", function(req, res, next) {
  let connect = select.getconnect();
  let user = req.cookies.user;
  let sql = "SELECT lv from yuangong WHERE zhanghao =?";
  connect.query(sql, [user], function(err, row1, fields) {
    if (err) throw err;
    if (row1[0].lv == 10) {
      next();
      //res.render("xiexie", { data: "查询数据库出错" });
    } else {
      res.send({ zhuangtai: "shibai" });
      //res.redirect("/users/"+neibie+"list");
    }
  });
  connect.end();
});

router.post("/shanchu", function(req, res, next) {

    let connect = select.getconnect();
    let id = req.body.id;
    let neibie = req.body.neibie;
    let sql = "DELETE FROM " + neibie + " WHERE id=?";
    connect.query(sql, [id], function(err, rows, fields) {
      if (err) throw err;
      res.send({ zhuangtai: "ok", id: id });
    });

    connect.end();
});

router.post("/bianji", function(req, res, next) {
    let connect = select.getconnect();
    let id = req.body.id;
    let neibie = req.body.neibie;
    let sql =
      "select name,zhiwei,bumen,mima,zhanghao,id FROM " +
      neibie +
      " WHERE id=?";
    connect.query(sql, [id], function(err, rows, fields) {
      if (err) throw err;
      res.send({ zhuangtai: "ok", data: rows });
    });
    connect.end();
});

router.post("/gxyg", function(req, res, next) {
    let connect = select.getconnect();
    let name = req.body.name;
    let zhiwei = req.body.zhiwei;
    let bumen = req.body.bumen;
    let zhanghao = req.body.zhanghao;
    let mima = "123456";
    let id = req.body.id;
    let neibie = "yuangong";
    let sql =
      "UPDATE " +
      neibie +
      " SET name=?,zhiwei=?,bumen=?,mima=?,zhanghao=? WHERE id=?";
    connect.query(sql, [name, zhiwei, bumen, mima, zhanghao, id], function(
      err,
      rows,
      fields
    ) {
      if (err) throw err;
      res.redirect("/users/yuangonglist");
    });
    connect.end();

});

router.post("/addnews", function(req, res, next) {

    let user = req.cookies.user;
    let connect = select.getconnect();
    let biaoti = req.body.biaoti;
    let neirong = req.body.neirong;
    let biaoqian = req.body.biaoqian;
    let time = func.getNowFormatDate();
    let sql =
      "INSERT INTO news ( biaoti,neirong,time,user,biaoqian)VALUES( ?,?,?,?,?)";
    connect.query(sql, [biaoti, neirong, time, user, biaoqian], function(
      err,
      rows,
      fields
    ) {
      if (err) throw err;
      if (rows) {
        res.redirect("/users/xinwenguanli");
      } else {
        res.render("xiexie", { data: "查询数据库出错" });
      }
    });
    connect.end();

});

router.get("/tuichu", function(req, res, next) {
  res.clearCookie("user");
  res.redirect("/login");
});

module.exports = router;
