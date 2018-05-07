var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql=require('mysql');
var select = require("./sql/select");
var index = require('./routes/index');
var users = require('./routes/users');
var func=require('./func');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html',require('ejs').__express);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next){
  if (req.cookies.aa) {
    console.log('已记录');
    // var connection = mysql.createConnection({
    //   host: "localhost",
    //   user: "root",
    //   password: "",
    //   database: "tonesat"
    // });
    // let sql ="SELECT * FROM yuangong WHERE zhanghao='ts123'";
    // connection.connect()
    // connection.query(sql,function(err,rows,fields){
    //   if (err) throw err;
    //   console.log(rows[0].name);
    // })
    // connection.end();
  } else {
    res.cookie('aa','tongxing')
    let connect= select.getconnect();
    let sql ='INSERT INTO tongji VALUES( ?,?,?,?,?)';
    connect.query(sql,[,req.ip,'sds',req.hostname,func.getNowFormatDate()]);
    console.log('访问者IP:'+req.ip+'，网址为：'+req.hostname+",时间:"+func.getNowFormatDate());

  }
  next();

})
app.use('/', index);
app.use('/users', users);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
