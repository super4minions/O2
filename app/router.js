var fs = require('fs');
module.exports = {
    "GET /": require("../app/index.js"),
    //"GET /facebook" : require('../app')}
    "POST /sheet": require("../app/sheet.js")
}
