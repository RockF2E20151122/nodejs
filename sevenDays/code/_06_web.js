var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-Type' : 'text-plain'
	});
	response.end('Hello World\n');
}).listen(8124);

// 在Linux系统下，监听1024以下端口需要root权限。因此，如果想监听80或443端口的话，需要使用sudo命令启动程序。

/**
 * 小结
 * 
 * 本章介绍了使用NodeJS操作网络时需要的API以及一些坑回避技巧，总结起来有以下几点：
 * 
 * http和https模块支持服务端模式和客户端模式两种使用方式。
 * 
 * request和response对象除了用于读写头数据外，都可以当作数据流来操作。
 * 
 * url.parse方法加上request.url属性是处理HTTP请求时的固定搭配。
 * 
 * 使用zlib模块可以减少使用HTTP协议时的数据传输量。
 * 
 * 通过net模块的Socket服务器与客户端可对HTTP协议做底层操作。
 * 
 */
