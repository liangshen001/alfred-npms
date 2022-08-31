## @liangshen/alfred-npms

*Alfred工作流，使用Jenkins Remote Api构建项目*

### 运行环境

* MacOS
* Nodejs 14.x.x
* Alfred Powerpack

### 安装

```
npm i -g @liangshen/alfred-npms
```

### 使用方法

可使用 option + J 快捷键调出本工作流搜索框(或者调出alfred搜索框输入关键字 jenkins)

![](./docs/jenkins.png)


使用之前登记Jenkins地址 需要选择Login Jenkins回车

输入Jenkins URL地址

例:
http://wangliang:11a80c78335a99c57def933dd1dbxxxxxx@jenkins.longtu.xyz:6086
![](./docs/jenkins2.png)

如果信息正确将提示
![](./docs/jenkins3.png)

再次使用 option + J 快捷键调出本工作流搜索框(或者调出alfred搜索框输入关键字 jenkins)
![](./docs/jenkins4.png)

按住command键+回车将构建选中项目

直接回车选中将在浏览器中打开项目
![](./docs/jenkins5.png)

### Changelog

* 1.0.9
  1. [x] 搜索Jenkins项目时支持 使用'|'表示或逻辑 如:xxx|xxxx 支持使用'&'表示与逻辑如: xxx&xxx 俩个逻辑同时出现时做先'&'(与)逻辑
  2. [x] 首条添加Open Jenkins URL选项 回车直接在浏览器中打开jenkins地址
* 1.0.8
  1. [x] 查询Jenkins中的所有Jobs时会实时显示Job正在构建的百分比进度
  2. [x] 列表中如果有Jobs正在构建, 由于实时查询列表, 鼠标选中元素也会实时回到列表的第一条Job上, 对于这种情况可以在搜索框最后(或最前)加上'!'符号, 表示不需要实时返回锁定列表结果
  3. [x] 选中一个正在构建中的Job 按住Command+回车可以取消本次的构建
* 1.0.4 
  1. [x] 可以配置Jenkins的URL
  2. [x] 查询Jenkins中的所有Jobs
  3. [x] 选中一个Job回车会使用Safari打开Jenkins中此Job的界面
  4. [x] 选中一个Job按住Command+回车可以直接构建此Job








