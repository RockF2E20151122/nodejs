//http://javascript.ruanyifeng.com/nodejs/basic.html#toc22

//1.exit事件

//当前进程退出时，会触发exit事件，可以对该事件指定回调函数。这一个用来定时检查模块的状态的好钩子(hook)(例如单元测试),当主事件循环在执行完’exit’的回调函数后将不再执行,所以在exit事件中定义的定时器可能不会被加入事件列表.
var fs = require('fs');

process.on('exit', function() {
	fs.writeFileSync('/tmp/myfile', 'This MUST be saved on exit.');
});

// 2.uncaughtException事件
// 当前进程抛出一个没有被捕捉的意外时，会触发uncaughtException事件。

process.on('uncaughtException', function(err) {
	console.error('An uncaught error occurred!');
	console.error(err.stack);
});