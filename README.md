# logsystem
log system

日志系统的建造

一、结构

app  //前端文件
 |--components  //公用模块
 |--routes  //路由链接的页面文件
     |--log  //页面文件夹
         |--Log.js  //主文件
         |--LogActions.js  //action
         |--LogStore.js  //store
         |--Log.css
     |--task
 |--main.js  //前端入口文件
 |--route.js  //前端路由
node_modules  //npm包模块
server  //存放后端文件
 |--controllers  //控制器
 |--lib  //模块
 |--models  //模型
 |--schemas  //数据结构
 |--task  //任务
 |--timetask  //任务时间控制器
config.js  //读取config.json文件
server.js  //入口文件
config.json  //配置文件
index.html  //页面基础文件
package.json  //应用配置
README.md  //说明文件
webpack.config.js  //前端构建配置
