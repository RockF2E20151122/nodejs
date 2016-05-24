var fs = require('fs');

function copy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
	// 使用fs.readFileSync从源路径读取文件内容，并使用fs.writeFileSync将文件内容写入目标路径。
}

function main(argv) {
	copy(argv[0], argv[1]);
}

main(process.argv.slice(2));		//[1,2,3,4].slice(2)	return 	[3, 4]

// process是一个全局变量，可通过process.argv获得命令行参数。
// 由于argv[0]固定等于NodeJS执行程序的绝对路径，argv[1]固定等于主模块的绝对路径，因此第一个命令行参数从argv[2]这个位置开始。

