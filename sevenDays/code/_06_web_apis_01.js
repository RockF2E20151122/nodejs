var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-Type' : 'text-plain'
	});
	response.end('Hello World\n');
}).listen(8124);

// 在Linux系统下，监听1024以下端口需要root权限。因此，如果想监听80或443端口的话，需要使用sudo命令启动程序。

