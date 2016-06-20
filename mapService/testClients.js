var http = require('http');

// .request方法创建了一个客户端，并指定请求目标和请求头数据。之后，就可以把request对象当作一个只写数据流来写入请求体数据和结束请求。

var options = {
	hostname : 'localhost', // 'http://127.0.0.1', //指定请求目标
	port : 2345,
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

/**
 * request.method: POST request.headers: {
 * 'content-type':'application/x-www-form-urlencoded', host: 'localhost:8980',
 * connection: 'close', 'transfer-encoding': 'chunked' } chunk: <Buffer 48 65 6c
 * 6c 6f 20 57 6f 72 6c 64> body: Hello World
 */