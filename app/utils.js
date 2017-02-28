var qs = require('querystring');
var https = require('https');
var google = require('googleapis');
var key = require('../key.json');


function parseBody(req, callback) {
    var body = '';
    req.on('data', function(data) {
        body += data;
    });
    req.on('end', function() {
        callback(undefined, qs.parse(body));
    });
}
module.exports = {
    parseBody: parseBody
};


// function creatsheet() {
//     var https = require('https');
//     var google = require('googleapis');
//     var key = require('../key.json');

//     var SHEET_ID = '1klLD4Wvfdb5fCwQUx0mbFqg2z1ZinuMZsTf5wO_YCgY';

//     var jwtClient = new google.auth.JWT(
//         key.client_email,
//         null,
//         key.private_key, ['https://www.googleapis.com/auth/spreadsheets'],
//         null
//     );

//     jwtClient.authorize((err, tokens) => {
//         //console.log(tokens);
//         if (err) {
//             console.log(err);

//             return;
//         }

//         var resourses = {
//   "range": "Sheet1!A1:D5",
//   "majorDimension": "ROWS",
//   "values": [
//     ["Item", "Cost", "Stocked", "Ship Date"],
//     ["Wheel", "$20.50", "4", "3/1/2016"],
//     ["Door", "$15", "2", "3/15/2016"],
//     ["Engine", "$100", "1", "30/20/2016"],
//     ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
//   ],
// }

//         var opts = {
//             hostname: 'sheets.googleapis.com',
//             port: 443,
//             path: `/v4/spreadsheets/${SHEET_ID}/values/!A1:D5?valueInputOption=RAW`,
//             method: 'PUT',
//             resourses :resourses,
//             headers: {
//                 'Authorization': `Bearer ${tokens.access_token}`
//             }
//         };
//         var req = https.request(opts, (res) => {
//         	console.log(res.payload);
//             // var store = '';
//             // res.on('data', (chunk) => store = store + chunk);
//             // res.on('end', () => console.log('store', store));
//         });

//         req.end();
//     });
//}
module.exports = {
    parseBody: parseBody
};
