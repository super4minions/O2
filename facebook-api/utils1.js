var qs = require('querystring');

module.exports = {
  parseUrl: (url) => {
    return qs.parse(url);
  },
  parseBody: (req, cb) => {
    var store = '';
    req.on('data', chunk => store += chunk);
    req.on('end', () => cb(undefined,JSON.parse(store)));
  }
};
