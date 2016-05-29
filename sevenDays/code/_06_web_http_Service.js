var http = require('http');

http.createServer(function(request, response) {
	var body = [];

	console.log( 'request.method:', request.method );
	console.log( 'request.headers:', request.headers );

	response.writeHead( 200, {
		'Content-Type': 'text/plain',
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
	
}).listen(8080);

// ------------------------------------
//GET
//{ host: '127.0.0.1:8080',
//  connection: 'keep-alive',
//  'cache-control': 'max-age=0',
//  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//  'upgrade-insecure-requests': '1',
//  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
//  'accept-encoding': 'gzip, deflate, sdch',
//  'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6,en-US;q=0.4,zh-TW;q=0.2',
//  cookie: 'session_id_welcome=127.0.0.1-d21e4bd3-dc87-43f0-b94c-165fecda7609' }

/**
 * HTTP请求本质上是一个数据流，由请求头（headers）和请求体（body）组成。例如以下是一个完整的HTTP请求数据内容。
 * 
 * POST / HTTP/1.1 
 * User-Agent: curl/7.26.0 
 * Host: localhost Accept:
 * Content-Length: 11 Content-Type: application/x-www-form-urlencoded
 * 
 * Hello World
 * 
 * 可以看到，空行之上是请求头，之下是请求体。HTTP请求在发送给服务器时，可以认为是按照从头到尾的顺序一个字节一个字节地以数据流方式发送的。
 * 而http模块创建的HTTP服务器在接收到完整的请求头后，就会调用回调函数。
 * 在回调函数中，除了可以使用request对象访问请求头数据外，还能把request对象当作一个只读数据流来访问请求体数据。以下是一个例子。
 * 
 */