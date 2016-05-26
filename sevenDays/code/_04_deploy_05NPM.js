/**
NPM: F:\workspace-ggts-3.6.4.RELEASE\nodejs\sevenDays\node-echo

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

允许用户从NPM服务器下载别人编写的三方包到本地使用。

允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。

允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

可以看到，NPM建立了一个NodeJS生态圈，NodeJS开发者和用户可以在里边互通有无。以下分别介绍这三种场景下怎样使用NPM。

下载三方包

需要使用三方包时，首先得知道有哪些包可用。虽然npmjs.org提供了个搜索框可以根据包名来搜索，但如果连想使用的三方包的名字都不确定的话，就请百度一下吧。知道了包名后，比如上边例子中的argv，就可以在工程目录下打开终端，使用以下命令来下载三方包。

$ npm install argv
...
argv@0.0.2 node_modules\argv
下载好之后，argv包就放在了工程目录下的node_modules目录中，因此在代码中只需要通过require('argv')的方式就好，无需指定三方包路径。

以上命令默认下载最新版三方包，如果想要下载指定版本的话，可以在包名后边加上@<version>，例如通过以下命令可下载0.0.1版的argv。

$ npm install argv@0.0.1
...
argv@0.0.1 node_modules\argv
如果使用到的三方包比较多，在终端下一个包一条命令地安装未免太人肉了。因此NPM对package.json的字段做了扩展，允许在其中申明三方包依赖。因此，上边例子中的package.json可以改写如下：

{
    "name": "node-echo",
    "main": "./lib/echo.js",
    "dependencies": {
        "argv": "0.0.2"
    }
}
这样处理后，在工程目录下就可以使用npm install命令批量安装三方包了。更重要的是，当以后node-echo也上传到了NPM服务器，别人下载这个包时，NPM会根据包中申明的三方包依赖自动下载进一步依赖的三方包。例如，使用npm install node-echo命令时，NPM会自动创建以下目录结构。

- project/
    - node_modules/
        - node-echo/
            - node_modules/
                + argv/
            ...
    ...
如此一来，用户只需关心自己直接使用的三方包，不需要自己去解决所有包的依赖关系。

*/

/**
 * npm 常用命令
 * 
NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

使用npm help <command>可查看某条命令的详细帮助，例如npm help install。

在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。

使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。

使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。

使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。

使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。


小结

本章介绍了使用NodeJS编写代码前需要做的准备工作，总结起来有以下几点：

编写代码前先规划好目录结构，才能做到有条不紊。

稍大些的程序可以将代码拆分为多个模块管理，更大些的程序可以使用包来组织模块。

合理使用node_modules和NODE_PATH来解耦包的使用方式和物理路径。

使用NPM加入NodeJS生态圈互通有无。

想到了心仪的包名时请提前在NPM上抢注。

*/