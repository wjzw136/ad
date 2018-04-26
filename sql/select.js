var mysql = require("mysql");
var express =require('express');
var config = require("./config");
// connection.query(sql, function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
//connection.end();
exports.getconnect = function() {
  var connection = mysql.createConnection({
    host: config.dbhost,
    user: config.dbuser,
    password: config.dbpassword,
    database: config.dbdatabase
  });
  connection.connect();
  return connection;
};
function getconnect(){
    var connection = mysql.createConnection({
        host: config.dbhost,
        user: config.dbuser,
        password: config.dbpassword,
        database: config.dbdatabase
      });
      connection.connect();
      return connection;
}
var yx={
    qian:"res.render(",
    zhong:",{",
    hou:"})"
}
//查询所有员工
exports.getallyuangong=function(){
    let sql ='SELECT * FROM yuangong WHERE zhanghao="ts125"';
    let connect=getconnect();
    connect.query(sql,function(err,results,fields){

        if(err)throw err;
        //console.log();
        //res.render(code,{main:results[0].name})
        //yx.qian+code+yx.zhong+data+":"+results[0].name+yx.hou;
        sdsd= results[0].name
    })
    connect.end();

}