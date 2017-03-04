var fs = require('fs');
var utils1 = require('../facebook-api/utils1');
var send = require('../facebook-api/send.js');

module.exports = {
  'GET /style.css':function (req, res) {
    res.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('./front-end/style.css', {encoding: 'utf8'});
    res.write(fileContents);
    res.end();
  },
    "GET /": require("../google-sheet-api/index.js"),
    "POST /sheet": require("../google-sheet-api/sheet.js"),
    "GET /facebook": (req, res) => {
    var challenge = utils1.parseUrl(req.url);
    res.end(challenge['hub.challenge']);
  },
  "POST /facebook": (req, res) => {
    utils1.parseBody(req, (err,payload) => {
      var message = payload.entry[0].messaging[0].message.text;
      var user_id = payload.entry[0].messaging[0].sender.id;
      if(err) {
        console.log('err',err);
        return res.end('Error');
<<<<<<< HEAD
      }      
      console.log('bes',payload.entry[0].messaging[0].message.text);
=======
      }else if (message == "bootcamp") {
        console.log("Welcome to bootcamp");
        send(user_id);
      }
>>>>>>> c17dd6c99960fb9ce89681641ed57f6e018d19db
      res.end();
    });
  }
}
