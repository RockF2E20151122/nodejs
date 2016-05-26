
var counter1 = require('./sevenDays/counter.js');
var counter2 = require('./sevenDays/counter.js');
//counter.js并没有因为被require了两次而初始化两次。

console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());

//summary:

/**

NodeJS是一个JS脚本解析器，任何操作系统下安装NodeJS本质上做的事情都是把NodeJS执行程序复制到一个目录，然后保证这个目录在系统PATH环境变量下，以便终端下可以使用node命令。

终端下直接输入node命令可进入命令交互模式，很适合用来测试一些JS代码片段，比如正则表达式。

NodeJS使用CMD模块系统，主模块作为程序入口点，所有模块在执行过程中只初始化一次。

除非JS模块不能满足需求，否则不要轻易使用二进制模块，否则你的用户会叫苦连天。

 */