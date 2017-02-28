var utils = require('../app/utils.js'); 
module.exports = function(req, res){
  utils.parseBody(req, function(undefined,data){
res.end("To confirm your submittin you shoud send message (bot:8)to this page https://www.facebook.com/Test-API-1737409489904164/ ");
  });
  }