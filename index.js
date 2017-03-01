'use strict';
var http = require("http");
var mainHandler = require("./main.js");
var https = require('https');
var google = require('googleapis');
var key = require('./googleapis/key.json');
var SHEET_ID = '187i1ncUEzvArtwET8lRxqgUev0QfkpeHIbMRhCiQtEg';
var jwtClient = new google.auth.JWT(key.client_email,
    null,
    key.private_key, ['https://www.googleapis.com/auth/spreadsheets'],
    null);
jwtClient.authorize((err, tokens) => {

    if (err) {
        console.log(err);
        return;
    }


    console.log('token', tokens);
    var opts = {
        hostname: 'sheets.googleapis.com',
        port: 443,
         path: `/v4/spreadsheets/${SHEET_ID}/values/o2facebook:append?valueInputOption=USER_ENTERED`,
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${tokens.access_token}`
        }
    };


    console.log('here 2');
    var req = https.request(opts, (res) => {
        console.log('here 3');
        var store = '';
        res.on('data', (chunk) => store = store + chunk);

        res.on('end', () =>   console.log('store',store));
      //  res.on('end', () => accessextractdata.extractdata(store));
    });

    var d='{  "range": "o2facebook",\
      "majorDimension": "ROWS",\
      "values": [\
        ["shahenaz", "Cost", "Stocked", "Ship Date"],\
        ["aa", "$222.50", "0", "3/1/2016"],\
        ["z", "$15", "2", "3/15/2016"],\
        ["Eaaaangine", "$100", "1", "30/20/2016"],\
        ["Total2222s", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]\
      ], }'
            req.write(d);
            req.end();
        });

http.createServer(mainHandler).listen(process.env.PORT || 8079, function() {
    console.log('Listening on 8079');
});
