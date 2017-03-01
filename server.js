'use strict';

var https = require('https');
var google = require('googleapis');
var key = require('./service/key.json');
var SHEET_ID = '149YRkZaiBdCnDuaeQJl9ZnOdnob1fvwum_OnvKa9Mok';

var jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  null );

  jwtClient.authorize((err, tokens) => {
     if (err) {
       console.log(err); return;
      }
      console.log('here');
      var opts = {
        hostname: 'sheets.googleapis.com',
        port: 443,
        path: `/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A1:B3`,
        method: 'GET',
        headers: { 'Authorization': `Bearer ${tokens.access_token}` }
      };

      var req = https.request(opts, (res) => {
        var store = '';
        res.on('data', (chunk) => store = store + chunk);
        res.on('end', () => console.log('store',store));
      });

      req.end(); });
