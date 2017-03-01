var fs = require('fs');
var utils1 = require('../facebook-api/utils1');

var send = require('../facebook-api/send.js');

module.exports = {
  // 'GET /facebook.jpg':function (req, res) {
  //   res.writeHead(200, {'Content-type' : 'image/jpg'});
  //   var fileContents = fs.readFileSync('./front-end/img/facebook.jpg', {encoding: 'utf8'});
  //   res.write(fileContents);
  //   res.end();
  // },
  // "GET /": require("./front-end/img/facebook.jpg"),

  // "GET /facebook.jpg": require("../front-end/img/facebook.jpg"),
    "GET /": require("../google-sheet-api/index.js"),
    //"GET /facebook" : require('../app')}
    "POST /sheet": require("../google-sheet-api/sheet.js"),
    "GET /facebook": (req, res) => {
    var challenge = utils1.parseUrl(req.url);
//     console.log("RESSSSS",challenge['hub.challenge']);
    res.end(challenge['hub.challenge']);
  },
  "POST /facebook": (req, res) => {
    utils1.parseBody(req, (err,payload) => {
      var message = payload.entry[0].messaging[0].message.text;
      var user_id = payload.entry[0].messaging[0].sender.id;
      if(err) {
        console.log('err',err);
        return res.end('Error');
      }else if (message == "bootcamp") {
        console.log("Welcome to bootcamp");
        send(user_id);
      }
      // console.log('JSON.stringify(payload)',JSON.stringify(payload.entry));
      //
      // console.log('bes',payload.entry[0].messaging[0].message.text);
      res.end();
    });
  }
}
