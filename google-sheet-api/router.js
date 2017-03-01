var fs = require('fs');
module.exports = {
    "GET /": require("../google-sheet-api/index.js"),
    //"GET /facebook" : require('../app')}
    "POST /sheet": require("../google-sheet-api/sheet.js")
}
