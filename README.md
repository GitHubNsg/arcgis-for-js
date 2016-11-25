# arcgis-for-js
这个项目是`arcgis api for js`入门开发源代码的，合适对象是arcgis的webgis开发初学者或者从其他IT行业转向arcgis开发的，需要具备一定的html+js+css基础；<br>

项目运行需要的环境：arcgisserver+vs2012，数据库在后续会添加进来；<br>

项目的结构目录说明：<br>
1.Content文件夹主要是存放项目的css样式以及images图片等资源；<br>
2.js文件夹主要是实现系统功能模块的核心js文件，包括`arcgis api`、`jquery框架`、`map.js`(地图功能模块入口)、拓展arcgis标绘Draw类文件夹、`control.js`（地图自定义导航工具文件）、`map.config.js`（地图配置信息文件）、`map.map2dPanel.js`（地图工具栏实现js文件）、`map.plot.js`（地图标绘模块）、`map.poi.js`（地图搜索模块）、`map.spatialquery.js`（地图空间查询模块）、`measure.js`（地图量算工具s模块）等等；<br>
3.lib，dll引用包文件夹；<br>
4.`map.html`,地图主页面；<br>
5.`tdt.html`，arcgis api加载天地图的页面；<br>
6.`proxy.ashx`、`proxy.config`，跨越请求代理文件；<br>
7.`Web.config`，项目配置文件，可以配置数据库连接、首页设置等配置信息；<br>


