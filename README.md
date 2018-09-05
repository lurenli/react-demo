# react-demo
两个目标：

* 手动搭建react脚手架：react、bable、webpack、react-router-dom、webpack-dev-server
* 理解webpack从无到有打包原理

[手动搭建react脚手架项目地址](https://github.com/yuanyuanshen/react-demo)

有坑的地方会特别说明，因为好多文章都没有给出babel和webpack-dev-server的版本，所以在搭建过程中遇到比较多的问题。

##### 1.react react react-dom

##### 2.babel babel-loader babel-core babel-presets-es2015|stage-0|react

*babel 这里的坑：注意babel的版本号，比如运行时报错babel/core找不到等等，需要降低babel的版本，*

*注意webpack.config.js配置文件中的loader书写，需要从webpack官网找，有的博客写的不对会造成错误*

*注意需要有一个.babelrc的文件*

##### 3.webpack 

##### 4.webpack-dev-server

*使用webpack-dev-server --hot --inline --config webpack.config.js 运行报错，注意降低webpack-dev-server的版本号*

##### 5.react-router-dom

