
/**
 * 模块路径解析规则
1. 
require('fs')

2.node_modules目录
例如：某个模块的绝对路径是/home/user/hello.js，在该模块中使用require('foo/bar')方式加载模块时，则NodeJS依次尝试使用以下路径。
 /home/user/node_modules/foo/bar		//: /home/user/node_modules/
 /home/node_modules/foo/bar				//: /home/node_modules/
 /node_modules/foo/bar					//: /node_modules/

3.NODE_PATH环境变量
与PATH环境变量类似，NodeJS允许通过NODE_PATH环境变量来指定额外的模块搜索路径。
NODE_PATH环境变量中包含一到多个目录路径，路径之间在Linux下使用:分隔，在Windows下使用;分隔。例如定义了以下NODE_PATH环境变量：

例如定义了以下NODE_PATH环境变量：

 NODE_PATH=/home/user/lib:/home/lib
当使用require('foo/bar')的方式加载模块时，则NodeJS依次尝试以下路径。

 /home/user/lib/foo/bar
 /home/lib/foo/bar

4.


 */