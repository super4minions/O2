//require('dotenv').config();
var https = require('https');
var utils1 = require('./utils1.js');

var postData = JSON.stringify({
  recipient:{id:1502992586398188},
  message:{text:"Im a bot ,hhhhh :)"}

});

var opts = {
  hostname: 'graph.facebook.com',
  port: 443,
  path: `/v2.6/me/messages?access_token=EAAS3JTmMICoBAIIo62bwQQk1hWjITKEURA416OEZAiDo7PhgtWoCnVrMXCnKBKYhAP0GU5oSykpmh4kLTP2wXQZBXlVlO44hmIYkguTdINk5lHz7kTNFRffmuOmdsWktOlqvPjiLyKj3WLbWjPKpejksGpPnlcAP4A41LRJgZDZD`,
  method: 'POST',
  headers: {'Content-Type': 'application/json'}
};

var req = https.request(opts, (res) => {
  utils1.parseBody(res, (err, body) => {
    if(err) {
      console.log('err',err);
      return res.end();
    }

    //console.log('body',body);
  });
});

req.write(postData);
req.end();
