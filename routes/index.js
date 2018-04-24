var express = require("express");
var fs = require("fs");
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
  res.render("xiexie", { main: "还没写，请等待。。。。"  });
});
router.get("/lx", function(req, res, next) {
  res.render("xiexie", { main: "还没写，请等待。。。。"  });
});


//留言
router.post("/liuyan", function(req, res, next) {
 // let email=req.body.email;
  //let dianhua=req.bady.dianhua;
  //let neirong =req.body.neirong;
  //console.log(email+dianhua+neirong)
  console.log(req.body.email)
  res.render("xiexie", { main: "谢谢您提出宝贵意见！" });
});
module.exports = router;
