var fs = require('fs');
var utils1 = require('../facebook-api/utils1');

module.exports = {
    "GET /": require("../google-sheet-api/index.js"),
    //"GET /facebook" : require('../app')}
    "POST /sheet": require("../google-sheet-api/sheet.js"),
    "GET /facebook" : (req, res) => {
    var challenge = utils1.parseUrl(req.url);
    console.log(challenge['hub.challenge']);
    res.end(challenge['hub.challenge']);
  },
  'POST /facebook': (req, res) => {
    utils1.parseBody(req, (err,payload) => {
      if(err) {
        console.log('err',err);
        return res.end('Error');
      }      
      console.log('bes',payload.entry[0].messaging[0].message.text);
      res.end();
    });
  }
}
