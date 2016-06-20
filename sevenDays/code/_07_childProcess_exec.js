//http://www.tuicool.com/articles/eqIV32V

//1.spawn
// 使用curl下载文件的函数
var DOWNLOAD_DIR = '/Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/processTest/download';
var url = require('url');
var wget = require('wget');
var child_process = require('child_process');

// spawn和exec之间的区别:
// 当你想要从子进程返回大量数据时使用spawn，如果只是返回简单的状态信息，那么使用exec。
// 使用wget下载文件的函数
var download_file_wget = function(file_url) {

	// 提取文件名
	var file_name = url.parse(file_url).pathname.split('/').pop();
	// 组合wget命令
	var wget = 'wget -P ' + DOWNLOAD_DIR + ' ' + file_url;
	// 使用exec执行wget命令

	var child = child_process.exec(wget, function(err, stdout, stderr) {
		if (err)
			throw err;
		else
			console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
	});

};
download_file_wget('/Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/counter.js');
