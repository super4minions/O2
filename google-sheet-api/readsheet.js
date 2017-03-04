var https = require('https');
var google = require('googleapis');
var key = require('../key.json');
var qs = require('querystring');
var SHEET_ID = '1FzHsFg0mQaN80zVyZug6Q_CyuA_q18w_hVXXyaFqUok';

var jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  null
);

function readsheet(cb) {
  jwtClient.authorize((err, tokens) => {
  if (err) {
    console.log(err);
    return;
  }
  var opts = {
    hostname: 'sheets.googleapis.com',
    port: 443,
    path: `/v4/spreadsheets/${SHEET_ID}/values/!A1:C3`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokens.access_token}`
    }
  };
  var req = https.request(opts, (res) => {
    var store = '';
    res.on('data', (chunk) => store = store + chunk);
    console.log(data);
    res.on('end', () => cb(undefined , qs.parse(store)));
  });
  req.end();
});
}
module.exports = {
  readsheet:readsheet
}
