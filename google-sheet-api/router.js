var fs = require('fs');
var utils1 = require('../facebook-api/utils1');
var send = require('../facebook-api/send.js');
// var utils1 = require('./utils1.js');
var write = require('../google-sheet-api/utils.js');
require('dotenv').config();
var qs = require('querystring');
var https = require('https');
var google = require('googleapis');

var source;
module.exports = {
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
      }else if (message == "bootcamp") {
        console.log("Welcome to bootcamp");
        send(user_id,function (err,data) {
          write.writesheet(JSON.stringify(data),function (err,res) {

          })

        });


      }
      // console.log('JSON.stringify(payload)',JSON.stringify(payload.entry));
      //
      // console.log('bes',payload.entry[0].messaging[0].message.text);
      res.end();
    });
  }
}
