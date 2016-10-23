var http = require('http');
var url = require('url');
http.createServer(function(req, res) {
    var path = url.parse(req.url).pathname;
    // debugger;
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    // debugger;
    res.write("what's the fuck");
    res.end(path);
    // debugger;
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
