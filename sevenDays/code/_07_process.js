//http://nodejs.org/api/process.html

var child_process = require('child_process');
var util = require('util');

// 我们已经知道了NodeJS自带的fs模块比较基础，把一个目录里的所有文件和子目录都拷贝到另一个目录里需要写不少代码。

// 另外我们也知道，终端下的cp命令比较好用，一条cp -r source/* target命令就能搞定目录拷贝。
// 那我们首先看看如何使用NodeJS调用终端命令来简化目录拷贝，示例代码如下：
function copy(source, target, callback) {
	child_process.exec(util.format('cp -r %s* %s', source, target), callback);
}

// cp -r ./../processTest/a/* ./../processTest/b
copy('./../processTest/a/', './../processTest/b/', function(err) {
});

// 任何一个进程都有启动进程时使用的命令行参数，有:
// 标准输入
// 标准输出
// 有运行权限
// 有运行环境
// 运行状态
// 在NodeJS中，可以通过process对象感知和控制NodeJS自身进程的方方面面。
// 另外需要注意的是，process不是内置模块，而是一个全局对象，因此在任何地方都可以直接使用。 //XXX

// http://www.css88.com/archives/4548
// process模块用来与当前进程互动，可以通过全局变量process访问，不必使用require命令加载
// 它是一个EventEmitter对象的实例

/*
 * process对象提供一系列属性，用于返回系统信息。
 * 
 * process.pid：当前进程的进程号。 process.version：Node的版本，比如v0.10.18。
 * process.platform：当前系统平台，比如Linux。 process.title：默认值为“node”，可以自定义该值。
 * process.argv：当前进程的命令行参数数组。 process.env：指向当前shell的环境变量，比如process.env.HOME。
 * process.execPath：运行当前进程的可执行文件的绝对路径。 process.stdout：指向标准输出。
 * process.stdin：指向标准输入。 process.stderr：指向标准错误。
 */


