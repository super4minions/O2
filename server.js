var http = require("http");
var mainHandler = require("./main.js");
http.createServer(mainHandler).listen(process.env.PORT || 8080, function() {
    console.log('Listening on 8080');
});
