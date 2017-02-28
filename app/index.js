var fs = require('fs');
var mainpage = fs.readFileSync(__dirname + '/../front-end/index.html')
module.exports  = function (req, res) {
	res.end(mainpage);
}

