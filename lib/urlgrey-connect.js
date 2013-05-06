var urlgrey = require('urlgrey');

module.exports = function(name){
	if (!name){
		name = 'uri';
	}
	return function(req, res, next){
		req[name] = urlgrey(req.url);
		next();
	};
};
