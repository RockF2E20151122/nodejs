
//http://nodejs.org/api/stream.html

//当内存中无法一次装下需要处理的数据时，或者一边读取一边处理更加高效时，我们就需要用到数据流。NodeJS中通过各种Stream来提供对数据流的操作。

var rs = fs.createReadStream(pathname);

rs.on('data', function(chunk) {
	doSomething(chunk);
});

rs.on('end', function() {
	cleanUp();
});

//Stream基于事件机制工作，所有Stream的实例都继承于NodeJS提供的EventEmitter。

var rs = fs.createReadStream(src);

rs.on('data', function (chunk) {
    rs.pause();
    //optimization01:以上代码给doSomething函数加上了回调，因此我们可以在处理数据前暂停数据读取，并在处理数据后继续读取数据。
    doSomething(chunk, function () {
        rs.resume();
    });
});

rs.on('end', function () {
    cleanUp();
});



//
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

rs.on('data', function (chunk) {
    ws.write(chunk);
});

rs.on('end', function () {
    ws.end();
});

//我们把doSomething换成了往只写数据流里写入数据后，以上代码看起来就像是一个文件拷贝程序了。
//但是以上代码存在上边提到的问题，如果写入速度跟不上读取速度的话，只写数据流内部的缓存会爆仓。
//我们可以根据.write方法的返回值来判断传入的数据是写入目标了，还是临时放在了缓存了，并根据drain事件来判断什么时候只写数据流已经将缓存中的数据写入目标，可以传入下一个待写数据了。
//因此代码可以改造如下：

var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

rs.on('data', function (chunk) {
    if (ws.write(chunk) === false) {		//in order of write results;
        rs.pause();
    }
});

rs.on('end', function () {
    ws.end();
});

ws.on('drain', function () {//根据drain事件来判断什么时候只写数据流已经将缓存中的数据写入目标，可以传入下一个待写数据了。
    rs.resume();
});


