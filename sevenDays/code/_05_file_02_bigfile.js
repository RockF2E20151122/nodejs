var fs = require('fs');

function copy(src, dst) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
	copy(argv[0], argv[1]);
}

main(process.argv.slice(2));


//以上程序使用fs.createReadStream创建了一个源文件的只读数据流，并使用fs.createWriteStream创建了一个目标文件的只写数据流，并且用pipe方法把两个数据流连接了起来。
//连接起来后发生的事情，水顺着水管从一个桶流到了另一个桶。

//test:
/**
 * LM-SHC-16501205:npmOnly dihwang$ 
 * node /Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/_05_file_02_bigfile.js /Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/node-echo/README.md /Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/npmOnly/README.md
 */