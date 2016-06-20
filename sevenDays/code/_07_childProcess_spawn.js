//http://www.tuicool.com/articles/eqIV32V

//1.spawn
//使用child_process模块可以创建和控制子进程。该模块提供的API中最核心的是.spawn，其余API都是针对特定使用场景对它的进一步封装，算是一种语法糖
// 使用curl下载文件的函数
var DOWNLOAD_DIR = '/Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/processTest/download/';

var url = require('url');
var fs = require('fs');
var spawn = require('child_process').spawn;

var download_file_curl = function(file_url) {

	// 提取文件名
	var file_name = url.parse(file_url).pathname.split('/').pop();
	// 创建一个可写流的实例
	var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);
	// 使用spawn运行curl
	var curl = spawn('curl', [ file_url ]);		// 英[spɔːn]美[spɔn] vt.产卵；酿成，造成；大量生产
	// 为spawn实例添加了一个data事件
	curl.stdout.on('data', function(data) {
		file.write(data);
		console.log('on data.');
	});
	// 添加一个end监听器来关闭文件流
	curl.stdout.on('end', function(data) {
		file.end();
		console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
	});
	// 当子进程退出时，检查是否有错误，同时关闭文件流
	curl.on('exit', function(code) {
		if (code != 0) {
			console.log('Failed: ' + code);
		}
	});
};

download_file_curl('/Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/counter.js');

