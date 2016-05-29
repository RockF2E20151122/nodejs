//http://nodejs.org/api/http.html

/**
 * 'http'模块提供两种使用方式：
 * 
 * 作为服务端使用时，创建一个HTTP服务器，监听HTTP客户端请求并返回响应。
 * 
 * 作为客户端使用时，发起一个HTTP客户端请求，获取服务端响应。
 * 
 */

var http = require('http');

http.createServer(function(request, response) {//每当来了一个客户端请求，创建服务器时传入的回调函数就被调用一次。可以看出，这是一种事件机制。
	response.writeHead(200, {
		'Content-Type' : 'text-plain'
	});
	response.end('Hello World\n');
}).listen(8124);

// 在Linux系统下，监听1024以下端口需要root权限。因此，如果想监听80或443端口的话，需要使用sudo命令启动程序。

