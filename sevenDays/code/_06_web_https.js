//http://nodejs.org/api/https.html

const https = require('https');
const fs = require('fs');

//1. server 
var options = { // 与创建HTTP服务器相比，多了一个options对象，通过key和cert字段指定了HTTPS服务器使用的私钥和公钥。
	key : fs.readFileSync('./ssl/default.key'),// 私
	cert : fs.readFileSync('./ssl/default.cer')// 公
};

var server = https.createServer(options, function(request, response) {
});

// NodeJS支持SNI技术，可以根据 "HTTPS客户端请求使用的域名" 动态使用不同的证书，因此同一个HTTPS服务器可以使用多个域名提供服务。
// 接着上例，可以使用以下方法为HTTPS服务器添加多组证书。
server.addContext('foo.com', {
	key : fs.readFileSync('./ssl/foo.com.key'),
	cert : fs.readFileSync('./ssl/foo.com.cer')
});

server.addContext('bar.com', {
	key : fs.readFileSync('./ssl/bar.com.key'),
	cert : fs.readFileSync('./ssl/bar.com.cer')
});

//2. client
//在客户端模式下，发起一个HTTPS客户端请求与http模块几乎相同，示例如下。
var options = {
    hostname: 'www.example.com',
    port: 443,
    path: '/',
    method: 'GET'
};

var request = https.request(options, function (response) {});

request.end();

//但如果目标服务器使用的SSL证书是自制的，不是从颁发机构购买的，默认情况下https模块会拒绝连接，提示说有证书安全问题。
//在options里加入
//	rejectUnauthorized: false
//字段可以禁用对证书有效性的检查，从而允许https模块请求开发环境下使用自制证书的HTTPS服务器。

//TODO: the ssl keys
