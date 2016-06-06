//http://www.css88.com/archives/4548

/*
 process对象提供以下方法：

 process.exit()：退出当前进程。
 process.cwd()：返回运行当前脚本的工作目录的路径。_
 process.chdir()：改变工作目录。
 process.nextTick()：将一个回调函数放在下次事件循环的顶部。

 */
var path = process.cwd()
console.log(path);
// /Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/code

process
		.chdir('/Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/processTest/a')

path = process.cwd()
// /Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/processTest/a
console.log(path);

// process.nextTick()的例子，指定下次事件循环首先运行的任务。

process.nextTick(function() {
	console.log('Next event loop1!');
});

// 上面代码可以用setTimeout改写，但是nextTick的效果更高、描述更准确。
setTimeout(function() {
	console.log('Next event loop2!');
}, 0)

