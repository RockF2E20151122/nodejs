//目录是一个树状结构，在遍历时一般使用深度优先+先序遍历算法。
//深度优先，意味着到达一个节点后，首先接着遍历子节点而不是邻居节点。
//先序遍历，意味着首次到达了某节点就算遍历完成，而不是最后一次返回某节点才算数。因此使用这种遍历方式时，下边这棵树的遍历顺序是A > B > D > E > C > F。
/**
 * A / \ B C / \ \ D E F
 */
var fs = require('fs');
var path = require('path');

//同步遍历
function travel(dir, callback) {
	fs.readdirSync(dir).forEach(function(file) {
		var pathname = path.join(dir, file);

		if (fs.statSync(pathname).isDirectory()) {
			travel(pathname, callback);
		} else {
			callback(pathname);
		}
	});
};
//可以看到，该函数以某个目录作为遍历的起点。
//遇到一个子目录时，就先接着遍历子目录。遇到一个文件时，就把文件的绝对路径传给回调函数。回调函数拿到文件路径后，就可以做各种判断和处理。因此假设有以下目录：

travel('./sevenDays/node-echo', function (pathname) {
    console.log(pathname);
});

travel('/Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/node-echo', function (pathname) {
    console.log(pathname);
});

//异步遍历
function aTravel(dir, callback, finish) {
    fs.readdir(dir, function (err, files) {
        (function next(i) {
            if (i < files.length) {
                var pathname = path.join(dir, files[i]);

                fs.stat(pathname, function (err, stats) {
                    if (stats.isDirectory()) {
                        travel(pathname, callback, function () {
                            next(i + 1);
                        });
                    } else {
                        callback(pathname, function () {
                            next(i + 1);
                        });
                    }
                });
            } else {
                finish && finish();
            }
        }(0));
    });
}

aTravel('/Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/node-echo', function (pathname) {
    console.log('aTravel:', pathname);
});

//这里不详细介绍异步遍历函数的编写技巧，在后续章节中会详细介绍这个。总之我们可以看到异步编程还是蛮复杂的。
