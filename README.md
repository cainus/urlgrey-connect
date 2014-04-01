# urlgrey-connect
[![Build
Status](https://secure.travis-ci.org/cainus/urlgrey-connect.png?branch=master)](http://travis-ci.org/cainus/urlgrey-connect)
[![Coverage Status](https://coveralls.io/repos/cainus/urlgrey-connect/badge.png?branch=master)](https://coveralls.io/r/cainus/urlgrey-connect)
[![NPM version](https://badge.fury.io/js/urlgrey-connect.png)](http://badge.fury.io/js/urlgrey-connect)

This is a [connect](https://github.com/senchalabs/connect) (or [express](http://expressjs.com/)) middleware that adds the [urlgrey](https://github.com/cainus/urlgrey) 
url-querying and manipulation library to your request object (using the current request url).  It's available as `req.uri` by default, but you can override the
name.

### example usage:

```javascript
  	var app = connect();
		app.use(urlgreyConnect());
		app.use(function(req, res) {
			res.end("the path is: ", req.uri.path());
		});
		http.createServer(app).listen(3000);
```

### To specify a protocol for the urlgrey object to use:

#### specify it as a string:
```javascript
  	app.use(urlgreyConnect("http"));  // all links will be http
```


#### specify it as a function:
```javascript
    var protocolFunction = function(req){
      // always takes a request as its only parameter
      return req.headers['x-forwarded-proto'] ||
             req.headers['x-forwarded-protocol'] ||
             'http';
    };
  	app.use(urlgreyConnect(protocolFunction, "othername"));  
    /* the protocol for all links will depend on the headers 
       in the request object. */
```


### To have the urlgrey object mapped to a different name than req.uri, provide the name as a second parameter:

```javascript
  	app.use(urlgreyConnect("http", "othername"));  // it will be available as req.othername
```

See the [urlgrey](https://github.com/cainus/urlgrey) docs for urlgrey usage. 


