var fs = require('fs');
var http = require('http');

var m1 = require('./mock/m1.js');
var m2 = require('./mock/m2.js');
var m3 = require('./mock/m3.js');
var m4 = require('./mock/m4.js');
var m5 = require('./mock/m5.js');

var url = require("url");

http.createServer(function(request, response) {
	request.setEncoding("utf8");

	var url_ = url.parse(request.url);
	//var url = url.parse(request.url).pathname;
	console.log('url:', url_ );
	var body = [];

	// console.log('request.method:', request.method);
	console.log('request.headers:', request.headers);

	response.writeHead(200, {
		'Content-Type' : 'application/json', //'text/plain',
		'connection' : 'keep-alive'
	});

	request.on('data', function(chunk) {
		body.push(chunk);
		console.log('chunk:', chunk);
		response.write( {
			chunk : chunk
		}.toString());
		//在例子中，服务端原样将客户端请求的请求体数据返回给客户端。
	});

	request.on('end', function() {
		body = Buffer.concat(body);
		console.log('body:', body.toString());
		response.end();
	});

	//在回调函数中，除了可以使用response对象来写入响应头数据外，还能把response对象当作一个只写数据流来写入响应体数据。

}).listen(2345);
