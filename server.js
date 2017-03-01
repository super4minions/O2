'use strict';

var http = require("http");
var mainHandler = require("./main.js");
var https = require('https');
var google = require('googleapis');
var key = require('./key.json');
http.createServer(mainHandler).listen(process.env.PORT || 8080, function() {
    console.log('Listening on 8080');
});