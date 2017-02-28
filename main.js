var router = require('./app/router.js');
module.exports = function mainHandler(req, res) {
    var path = req.method + ' ' + req.url;
    try {
        router[path](req, res);

    } catch (error) {
        console.log('path', path);
        console.log('error', error);
        console.log("not found");

    }

};
