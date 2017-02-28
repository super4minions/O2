var fs = require('fs');
module.exports = {
    "GET /": require("../app/index.js"),
    //"GET /facebook" : require('../app')}
    "GET/sheet.js": function(req,res){
res.writeHead(200, {'Content-type' : 'text/javascript'});
var fileContents = fs.readFileSync('./app/sheet.js', {encoding: 'utf8'});
res.write(fileContents);
res.end();
}
}
