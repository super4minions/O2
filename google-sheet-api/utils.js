require('dotenv').config();
//var qs = require('querystring');
var https = require('https');
var google = require('googleapis');
var key = require('../key.json');

function writesheet(source, cb) {

    var jwtClient = new google.auth.JWT(
        process.env.CLIENT_EMAIL,
        null,
        key.private_key, ['https://www.googleapis.com/auth/spreadsheets'],
        null
    );

    var SHEET_ID = '1klLD4Wvfdb5fCwQUx0mbFqg2z1ZinuMZsTf5wO_YCgY';
    jwtClient.authorize((err, tokens) => {
        if (err) {
            console.log('err auth with google',err);
            return;
        }
        var opts = {
            hostname: 'sheets.googleapis.com',
            port: 443,
            path: `/v4/spreadsheets/${SHEET_ID}/values/Sheet1:append?valueInputOption=USER_ENTERED`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${tokens.access_token}`
            }
        };
        var req = https.request(opts, (res) => {
            cb(undefined,res);
        });
        req.write(JSON.stringify(source));
        req.end();
    });
}
module.exports = {
    writesheet: writesheet

};
