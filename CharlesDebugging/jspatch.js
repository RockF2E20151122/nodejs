/**
 * http://usejsdoc.org/
 */

var http = require('http');

var data = {
    key : 'value',
    hello : 'my my my my world is  is  is  is ',
    name : 'name',
    id : '33333333'
};

var srv = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type' : 'application/json'
    });
    res.end(JSON.stringify(data));
});

srv.listen(2999, function() {
    console.log('listening on localhost:2999');
}); 
