//http://nodejs.org/api/process.html

//process.stdout用来控制标准输出，也就是在命令行窗口向用户显示内容。
//它的write方法等同于console.log。

var process = require('process');
var util = require('util');

exports.log = function() {
	process.stdout.write(util.format.apply(this, arguments) + '\n');
}('what the fuck test.');