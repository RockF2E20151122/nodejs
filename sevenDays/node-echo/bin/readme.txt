
1.
#! /usr/bin/env node

2.
chmod +x /Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/node-echo/bin/node-echo2.js

3.
LM-SHC-16501205:nodejs dihwang$ sudo ln -s /Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/node-echo/bin/node-echo2.js /Users/dihwang/workspace-sts-3.7.2.RELEASE/nodejs/sevenDays/node-echo/bin/node-echo



failured;




http://nqdeng.github.io/7-days-nodejs/#3

Linux

在Linux系统下，我们可以把JS文件当作shell脚本来运行，从而达到上述目的，具体步骤如下：

在shell脚本中，可以通过#!注释来指定当前脚本使用的解析器。所以我们首先在node-echo.js文件顶部增加以下一行注释，表明当前脚本使用NodeJS解析。

 #! /usr/bin/env node
NodeJS会忽略掉位于JS模块首行的#!注释，不必担心这行注释是非法语句。

然后，我们使用以下命令赋予node-echo.js文件执行权限。

 $ chmod +x /home/user/bin/node-echo.js
最后，我们在PATH环境变量中指定的某个目录下，例如在/usr/local/bin下边创建一个软链文件，文件名与我们希望使用的终端命令同名，命令如下：

 $ sudo ln -s /home/user/bin/node-echo.js /usr/local/bin/node-echo
这样处理后，我们就可以在任何目录下使用node-echo命令了。

Windows

在Windows系统下的做法完全不同，我们得靠.cmd文件来解决问题。假设node-echo.js存放在C:\Users\user\bin目录，并且该目录已经添加到PATH环境变量里了。接下来需要在该目录下新建一个名为node-echo.cmd的文件，文件内容如下：

@node "C:\User\user\bin\node-echo.js" %*
这样处理后，我们就可以在任何目录下使用node-echo命令了。