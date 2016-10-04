var http = require('http');

// .request方法创建了一个客户端，并指定请求目标和请求头数据。之后，就可以把request对象当作一个只写数据流来写入请求体数据和结束请求。
/**
var options = {
	hostname : 'localhost', // 'http://127.0.0.1', //指定请求目标
	port : 8080,
	path : '/upload',
	method : 'POST',
	headers : { // 请求头数据
		'Content-Type' : 'application/x-www-form-urlencoded'
	}
};
var request = http.request(options, function(response) {
});
request.write('Hello World');// 可以把request对象当作一个只写数据流来写入请求体数据
request.end();// 和结束请求。
*/
/**
 * request.method: POST request.headers: {
 * 'content-type':'application/x-www-form-urlencoded', host: 'localhost:8980',
 * connection: 'close', 'transfer-encoding': 'chunked' } chunk: <Buffer 48 65 6c
 * 6c 6f 20 57 6f 72 6c 64> body: Hello World
 */

// 另外，由于HTTP请求中GET请求是最常见的一种，并且不需要请求体，因此http模块也提供了以下便捷API。
// http.get('http://127.0.0.1:8980/', function (response) {});
/**
 * request.method: GET request.headers: { host: '127.0.0.1:8080', connection:
 * 'close' } body:
 */

// 当客户端发送请求并接收到完整的服务端响应头时，就会调用回调函数。
// 在回调函数中，除了可以使用response对象访问响应头数据外，还能把response对象当作一个只读数据流来add响应体数据
http.get('http://127.0.0.1:8080/?fuck=true', function(response) {
	var body = [];

	console.log('response.statusCode:',response.statusCode);
	console.log('response.headers:',response.headers);

	response.on('data', function(chunk) {
		body.push(chunk);
	});

	response.on('end', function() {
		body = Buffer.concat(body);
		console.log('body.toString():',body.toString());
	});
});

// ------------------------------------
// 200
// { 'content-type': 'text/html',
// server: 'Apache',
// 'content-length': '801',
// date: 'Tue, 05 Nov 2013 06:08:41 GMT',
// connection: 'keep-alive' }
// <!DOCTYPE html>
/**
response.statusCode: 200
response.headers: { 'content-type': 'text/plain',
  date: 'Sun, 29 May 2016 13:51:45 GMT',
  connection: 'close',
  'transfer-encoding': 'chunked' }
body.toString(): 
*/