'use strict';
var https = require('https');
var google = require('googleapis');
var key = require('./googleapis/key.json');
var SHEET_ID = '187i1ncUEzvArtwET8lRxqgUev0QfkpeHIbMRhCiQtEg';
var jwtClient = new google.auth.JWT(key.client_email,
    null,
    key.private_key, ['https://www.googleapis.com/auth/spreadsheets.readonly'],
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
        path: `/v4/spreadsheets/${SHEET_ID}/values/mealsheet!A1:C5`,
        method: 'GET',
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
    req.end();
});



// var fs = require("fs");
// var http = require('http');
// var home = fs.readFileSync(__dirname + '/home.html', 'utf8');
//
//
// http.createServer(function (req,res) {
//   res.end(home);
//
// }).listen( 8079, function(){
//   console.log('Listen 8079');
// });
