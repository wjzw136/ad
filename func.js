var http=require('http');
const fs =require('fs');

exports.getNowFormatDate= function () {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var hours=date.getHours();
  var fen=date.getMinutes();
  var miao=date.getSeconds();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (hours >= 1 && hours <= 9) {
    hours = "0" + hours;
  }
  if (fen >= 1 && fen <= 9) {
    fen = "0" + fen;
  }
  if (miao >= 1 && miao <= 9) {
    miao = "0" + miao;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate+","+hours+ ':' +fen+ ":" +miao;
  return currentdate;
}

//获取访问者地区
exports.getIpInfo = function(ip, cb) {
  var sina_server = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=';
  var url = sina_server + ip;
  http.get(url, function(res) {
      var code = res.statusCode;
      if (code == 200) {
          res.on('data', function(data) {
              try {
                  cb(null, JSON.parse(data));
              } catch (err) {
                  cb(err);
              }
          });
      } else {
          cb({ code: code });
      }
  }).on('error', function(e) { cb(e); });
};

console.log(fs.readdirSync('./'))