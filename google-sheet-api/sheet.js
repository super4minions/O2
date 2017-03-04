var utils = require('../google-sheet-api/utils.js');

module.exports = function(req, res) {
<<<<<<< HEAD
    var id = Math.floor((Math.random() * 200) + 1);;
    utils.parseBody(req, function(err, data) {
        data.values[0][2] = id;

        utils.writesheet(JSON.stringify(data));
        res.end("To confirm your submition you shoud send this number  " + id + " by message to this Facebook page https://www.facebook.com/Test-API-1737409489904164/ ");
    	        console.log("sheet", res.payload);
=======
    //var id = Math.floor((Math.random() * 100000) + 1);;
    utils.parseBody(req, function(err, data) {
        //data.values[0][2] = id;
        console.log("sheet", data);
        utils.writesheet(JSON.stringify(data));
        res.end("To confirm your submition you shoud send message ( bootcamp) to this page https://www.facebook.com/Test-API-1737409489904164/ ");

>>>>>>> c17dd6c99960fb9ce89681641ed57f6e018d19db
    });

}