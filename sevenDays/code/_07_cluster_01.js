//http://nodejs.org/api/cluster.html

//cluster模块是对child_process模块的进一步封装，专用于解决单进程NodeJS Web服务器无法充分利用多核CPU的问题。
//使用该模块可以简化多进程服务器程序的开发，让每个核上运行一个工作进程，并统一通过主进程监听端口和分发请求。

//应用场景
//获取命令行参数

//function main(argv) {
//	console.log(argv);
//}
//main(process.argv.slice(2));

// 如何退出程序
try {
	function main(argv) {
		console.log('argv:', argv);
	}

	main(process.argv.slice(2));
} catch (err) {
	process.exit(1);
	// 退出程序
}

// 如何控制输入输出
// NodeJS程序的标准输入流（stdin）、一个标准输出流（stdout）、一个标准错误流（stderr)
// 分别对应process.stdin、process.stdout
// 和process.stderr，第一个是只读数据流，后边两个是只写数据流，对它们的操作按照对数据流的操作方式即可。
// 例如，console.log可以按照以下方式实现
var util = require('util');
function log() {
	process.stdout.write(util.format.apply(util, arguments) + '\n');
}

log('1 .3 3');

// 如何降权
//系统下，我们知道需要使用root权限才能监听1024以下端口。
//但是一旦完成端口监听后，继续运行在root权限下存在安全隐患，因此最好能把权限降下来。以下是这样一个例子。
http.createServer(callback).listen(80, function() {
	var env = process.env, uid = parseInt(env['SUDO_UID'] || process.getuid(), 10), //process.setuid和process.setgid方法只接受number类型的参数
	gid = parseInt(env['SUDO_GID'] || process.getgid(), 10);
	//如果是通过sudo获取root权限的，运行程序的用户的UID和GID保存在环境变量SUDO_UID和SUDO_GID里边。
	//如果是通过chmod +s方式获取root权限的，运行程序的用户的UID和GID可直接通过process.getuid和process.getgid方法获取。

	//process.setuid和process.setgid方法只接受number类型的参数
	process.setgid(gid);
	process.setuid(uid);
});

//如何创建子进程
var child_process = require('child_process');
var child = child_process.spawn('node', ['xxx.js']);

child.stdout.on('data', function(data) {
	console.log('stdout: ' + data);
});

child.stderr.on('data', function(data) {
	console.log('stderr: ' + data);
});

child.on('close', function(code) {
	console.log('child process exited with code ' + code);
});

