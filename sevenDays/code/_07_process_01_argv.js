//http://www.css88.com/archives/4548

//process.argv返回命令行脚本的各个参数组成的数组。

console.log("argv: ", process.argv);
console.log("argc: ", process.argc);

// LM-SHC-16501205:code dihwang$ node /Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/code/_07_process_02_argv.js a b c

/*
  argv:  [ '/usr/local/bin/node',
  '/Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/code/_07_process_02_argv.js',
  'a',
  'b',
  'c' ]
  argc:  undefined
 */
var myArgs = process.argv.slice(2);
console.log(myArgs);
//[ 'a', 'b', 'c' ]
