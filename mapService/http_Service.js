var http = require('http');

http.createServer(function(request, response) {
	var body = [];

	console.log( 'request.method:', request.method );
	console.log( 'request.headers:', request.headers );

	response.writeHead( 200, {
		'Content-Type': 'application/json',	//'text/plain',
		'connection': 'keep-alive'
		} );
	
	request.on('data', function(chunk) {
		body.push(chunk);
		console.log( 'chunk:', chunk );
		response.write(chunk);	//在例子中，服务端原样将客户端请求的请求体数据返回给客户端。
	});

	request.on('end', function() {
		body = Buffer.concat(body);
		console.log('body:',body.toString());
		response.end();
	});
	
	//在回调函数中，除了可以使用response对象来写入响应头数据外，还能把response对象当作一个只写数据流来写入响应体数据。
	
}).listen(2345);