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
        utils1.parseBody(req, (err, payload) => {
            if (err) {
                console.log('err parsing body', err);
                return res.end('Error');
            }
            var message = payload.entry[0].messaging[0].message.text;
            var user_id = payload.entry[0].messaging[0].sender.id;

            if (message === "bootcamp") {
                console.log("Welcome to bootcamp");
                send(user_id, function(err, data) {
                    

                    
                });
            } else {
              res.end("ALAAAAA");
            }
        });
    }
}
