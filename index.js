var urlgrey = require('urlgrey');
var isFunction = function(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

module.exports = function(protocol, name){
	if (!name){
		name = 'uri';
	}
	return function(req, res, next){
    var protocolValue = protocol;
    if (isFunction(protocol)){
      protocolValue = protocol(req);
    }
    var url = protocolValue + '://' + req.headers.host + req.url;
		req[name] = urlgrey(url);
		next();
	};
};
