var should = require('should');
var http = require('http');
var connect = require('connect');
var urlgreyConnect = require('../index');
var hottap = require('hottap').hottap;

describe("urlgrey-connect", function(){
	it("adds urlgrey to req via connect middleware", function(done){
		var server;

		var app = connect();
		app.use(urlgreyConnect('http'));
		app.use(function(req, res) {
			req.uri.path().should.equal("/asdf");
			res.end();
			server.close(function(){
				done();
			});
		});

		server = http.createServer(app).listen(3000, function(){
			hottap("http://localhost:3000/asdf").request("GET", function(err, response){
			});
		});
	});
	it("works for https urls as well", function(done){
		var server;

		var app = connect();
		app.use(urlgreyConnect('https'));
		app.use(function(req, res) {
			req.uri.toString().should.equal("https://localhost:3000/asdf");
			res.end();
			server.close(function(){
				done();
			});
		});

		server = http.createServer(app).listen(3000, function(){
			hottap("http://localhost:3000/asdf").request("GET", function(err, response){
			});
		});
	});
	it("adds urlgrey with a given name to req via connect middleware", function(done){
		var server;

		var app = connect();
		app.use(urlgreyConnect("http", "urlgrey"));
		app.use(function(req, res) {
			req.urlgrey.path().should.equal("/asdf");
			res.end();
			server.close(function(){
				done();
			});
		});

		server = http.createServer(app).listen(3000, function(){
			hottap("http://localhost:3000/asdf").request("GET", function(err, response){
			});
		});
	});
});
