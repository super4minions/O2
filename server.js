
var http = require("http");
var mainHandler = require("./main.js");




var https = require('https');
	
	var google = require('googleapis');
var key = require('./key.json');

var SHEET_ID = '1klLD4Wvfdb5fCwQUx0mbFqg2z1ZinuMZsTf5wO_YCgY';

var jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/spreadsheets'],
  null
);

jwtClient.authorize((err, tokens) => {
  //console.log(tokens);
  if (err) {
    console.log(err);

    return;
  }

  var batchUpdate = {
    "valueInputOption": "value_input_option",
    "data": [
        {
            "range": "A1:B9",
            "values" : [
                [
                   'shahenaz'
                ],
                'alaa'
            ]
        },
    ]
};

console.log(batchUpdate);

  var opts = {
    hostname: 'sheets.googleapis.com',
    port: 443,
    path: '/v4/spreadsheets/${SHEET_ID}/values'+batchUpdate,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokens.access_token}`
    }
  };


  var req = https.request(opts, (res) => {
    console.log('here 3');
    var store = '';
    res.on('data', (chunk) => store = store + chunk);
    res.on('end', () => console.log('store',store));
  });

  req.end();
});




http.createServer(mainHandler).listen(process.env.PORT || 8080, function() {
    console.log('Listening on 8080');
});