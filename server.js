var http = require("http");
var mainHandler = require("./main.js");
var https = require('https');
var google = require('googleapis');
var key = require('./key.json');
http.createServer(mainHandler).listen(process.env.PORT || 8080, function() {
    console.log('Listening on 8080');
});
// var SHEET_ID = '1klLD4Wvfdb5fCwQUx0mbFqg2z1ZinuMZsTf5wO_YCgY';

// var jwtClient = new google.auth.JWT(
//     key.client_email,
//     null,
//     key.private_key, ['https://www.googleapis.com/auth/spreadsheets'],
//     null
// );

// jwtClient.authorize((err, tokens) => {
//     //console.log(tokens);
//     if (err) {
//         console.log(err);

//         return;
//     }



//     var opts = {
//         hostname: 'sheets.googleapis.com',
//         port: 443,
//         path: `/v4/spreadsheets/${SHEET_ID}/values/append?valueInputOption=USER_ENTERED`,
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${tokens.access_token}`
//         }
//     };
//     var req = https.request(opts, (res) => {
//         //console.log(res.payload);
//         var store = '';
//         res.on('data', (chunk) => store = store + chunk);
//         res.on('end', () => console.log('store', store));
//     });

//     var d = '{  "range": "",\
//   "majorDimension": "ROWS",\
//   "values": [\
//     ["Item", "Cost", "Stocked", "Ship Date"],\
//     ["aa", "$222.50", "0", "3/1/2016"],\
//     ["z", "$15", "2", "3/15/2016"],\
//     ["Eaaaangine", "$100", "1", "30/20/2016"],\
//     ["Total2222s", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]\
//   ], }'
//     req.write(d);
//     req.end();
// });

