//require('dotenv').config();
var https = require('https');
var utils1 = require('./utils1.js');
var read = require('./google-sheet-api/read.js')

module.exports = function(fbid,sheet_info){
  // TODO: read the sheet and pass it throw sheet_info then check if the fb_id included or not
  // if (sheet_info.includes(fbid) == true){
  //   var postData = JSON.stringify({
  //     recipient:{id:fbid},
  //     "message":{
  //     	"text":"hello, world!"
  //     }
  //   });
  //   } else {
    var key = Math.floor((Math.random() * 100000) + 1);;

    var postData = JSON.stringify({
      recipient:{id:fbid},
      "message":{
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"button",
            "text":`Welcom to Gaza Sky Geeks and thank You for your intrest in Bootcamp. For regestration please fill the following form and use this key: ${key}`,
            "buttons":[
              {
                "type":"web_url",
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSdMW42u_uLkOLQLguE94e89V1NJ0lFFzCdWG1M0hXR9lUvGvQ/viewform",
                "title":"Apply Now"
              }
            ]
          }
        }
      }
    });
  // }

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

}