
//http://nodejs.org/api/url.html
/**
处理HTTP请求时url模块使用率超高，因为该模块允许解析URL、生成URL，以及拼接URL。首先我们来看看一个完整的URL的各组成部分。

                           href
 -----------------------------------------------------------------
                            host              path
                      --------------- ----------------------------
 http: // user:pass @ host.com : 8080 /p/a/t/h ?query=string #hash
 -----    ---------   --------   ---- -------- ------------- -----
protocol     auth     hostname   port pathname     search     hash
                                                ------------
                                                   query
*/
var http = require('http');
var url = require('url');
//可以使用.parse方法来将一个URL字符串转换为URL对象，示例如下。
var obj = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
console.log(obj);
/*
Url {
  protocol: 'http:',
  slashes: true,			//斜杠语法
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
*/

//传给.parse方法的不一定要是一个完整的URL，例如在HTTP服务器回调函数中，request.url不包含协议头和域名，但同样可以用.parse方法解析。

http.createServer(function (request, response) {
    var tmp = request.url; // => "/foo/bar?a=b"
    url.parse(tmp);
    /* =>
    { protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?a=b',
      query: 'a=b',
      pathname: '/foo/bar',
      path: '/foo/bar?a=b',
      href: '/foo/bar?a=b' }
    */
}).listen(8970);

//.parse方法还支持第二个和第三个布尔类型可选参数
//第二个参数等于true时，该方法返回的URL对象中，query字段不再是一个字符串，而是一个经过querystring模块转换后的参数对象
//第三个参数等于true时，该方法可以正确解析不带协议头的URL，例如://www.example.com/foo/bar

//反过来，format方法允许将一个URL对象转换为URL字符串，示例如下
var formated = url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
console.log( 'formated:',formated );
/* =>
formated: http://www.example.com/p/a/t/h?query=string
*/

//另外，.resolve方法可以用于拼接URL，示例如下
var resolved = url.resolve('http://www.example.com/foo/bar', '../baz');
console.log('resolved:',resolved);
/* =>
resolved: http://www.example.com/baz
*/
