require('dotenv').config();
var https = require('https');
var google = require('googleapis');
var qs = require('querystring');
var key = require('../key.json');
var SHEET_ID = '1FzHsFg0mQaN80zVyZug6Q_CyuA_q18w_hVXXyaFqUok';
var SHEET_ID2 = '1klLD4Wvfdb5fCwQUx0mbFqg2z1ZinuMZsTf5wO_YCgY';


var jwtClient = new google.auth.JWT(
  process.env.CLIENT_EMAIL,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  null
);

function readsheet(shid,cb) {
  jwtClient.authorize((err, tokens) => {
  if (err) {
    console.log(err);
    return;
  }
  var opts = {
    hostname: 'sheets.googleapis.com',
    port: 443,
    path: `/v4/spreadsheets/${SHEET_ID}/values/!A1:B50`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokens.access_token}`
    }
  };
  var req = https.request(opts, (res) => {
    var store = '';
    res.on('data', (chunk) => store = store + chunk);
    // console.log("fdd",store);
    res.on('end', () => cb(undefined , qs.parse(store)));
  });
  req.end();
});
}
module.exports = {
  readsheet:readsheet
}
// var sheet1 =readsheet(SHEET_ID,function(err,data){
//    for(i=1;i<Object.keys(data)[0].length; i++){
//    var res = JSON.parse(Object.keys(data)[0]);

//   console.log(res.values[i][1]);
// }

// });
// var sheet2 = readsheet(SHEET_ID,function(err,data){
//   var array =[];
//    for(i=1;i<Object.keys(data)[0].length; i++){
//    var res = JSON.parse(Object.keys(data)[0]);

//   array[i--] = res.values[i][1];
//   console.log(array [i]);
// }
// return array;

// });