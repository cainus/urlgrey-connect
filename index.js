var dir = './lib/';
if (process.env.urlgreyconnect_COVERAGE){
  dir = './lib-cov/';
}
module.exports = require(dir + 'urlgrey-connect');
