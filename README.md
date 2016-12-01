# arcgis-for-js
这个项目提供的是`arcgis api for js`入门开发源代码，合适对象为arcgis开发初学者或者从其他IT行业转向arcgis开发，需要具备一定的html+js+css基础；<br>

项目运行需要的环境：arcgisserver+vs2012，数据库在后续会添加进来；<br>

项目的结构目录说明：<br>
1.Content文件夹主要是存放项目的css样式以及images图片等资源；<br>
2.js文件夹主要是实现系统功能模块的核心js文件，包括`arcgis api`、`jquery框架`、`map.js`(地图功能模块入口)、拓展arcgis标绘Draw类文件夹、`control.js`（地图自定义导航工具文件）、`map.config.js`（地图配置信息文件）、`map.map2dPanel.js`（地图工具栏实现js文件）、`map.plot.js`（地图标绘模块）、`map.poi.js`（地图搜索模块）、`map.spatialquery.js`（地图空间查询模块）、`measure.js`（地图量算工具s模块）等等；<br>
3.lib，dll引用包文件夹；<br>
4.`map.html`,地图主页面；<br>
5.`tdt.html`，arcgis api加载天地图的页面；<br>
6.`proxy.ashx`、`proxy.config`，跨越请求代理文件；<br>
7.`Web.config`，项目配置文件，可以配置数据库连接、首页设置等配置信息；<br>

简单的介绍系统功能模块：<br>
1.地图主界面加载显示地图：<br>
```
var map = new esri.Map("map", { logo: false, lods: MapConfig.mapInitParams.lods, slider: false });//创建一个map对象，然后地图填充在div容器，通过div的ID（map）来关联;{}里面是构造地图的可选参数设置，logo设置图标是否显示，lods是设置瓦片地图的显示级别level有哪些，从配置文件config获取
allMap = map;
var layer = new esri.layers.ArcGISTiledMapServiceLayer(MapConfig.imgMapUrl);//创建一个ArcGISTiledMapServiceLayer对象，解析arcgis的瓦片服务图层；MapConfig.imgMapUrl是layer对象的参数，请求发布地图服务的url，用来获取地图服务的数据来渲染
layer.id = "img";//layer的id，用来方便后面获取getLayer（id)图层
map.addLayer(layer);//layer添加到地图map对象
```
效果图：<br>
![](https://github.com/gishome/arcgis-for-js/blob/master/BlogMap/IMG/主界面.png) 

2.地图工具栏：<br>
```
//显示地图工具栏
DCI.map2dTool.InitTool(map);
```
效果图：<br>
![](https://github.com/gishome/arcgis-for-js/blob/master/BlogMap/IMG/地图工具.png) 

3.地图量算工具：<br>
```
//测距
$("#bMeasureLine").click(function () {
DCI.Measure.measureDistance();
});

//测面积
$("#bMeasureArea").click(function () {
DCI.Measure.measureArea();
});
```
效果图：<br>
![](https://github.com/gishome/arcgis-for-js/blob/master/BlogMap/IMG/量算工具.png) 

4.地图拉框缩放：<br>
```
//放大缩小
$("#zoomOut").click(function () {
            map.setMapCursor("url('" + getRootPath() + "Content/images/index/cursor/zoomin.cur'),auto");
            DCI.map2dTool.drawtool.activate(esri.toolbars.Draw.EXTENT);
            DCI.map2dTool.drawExtent(null, function (geometry) {
                DCI.map2dTool.zoomInByExtent(geometry);
            });
});
$("#zoomIn").click(function () {
            map.setMapCursor("url('" + getRootPath() + "Content/images/index/cursor/zoomout.cur'),auto");
            DCI.map2dTool.drawtool.activate(esri.toolbars.Draw.EXTENT);
            DCI.map2dTool.drawExtent(null, function (geometry) {
                DCI.map2dTool.zoomOutByExtent(geometry);
            });
});
```
效果图：<br>
![](https://github.com/gishome/arcgis-for-js/blob/master/BlogMap/IMG/拉框放大.png) 

5.地图搜索：<br>
```
//图层属性查询
var panel = DCI.sidebarCtrl.createItem("地图搜索", "搜索", true, "nav_but_poisearch", "poisearch");
panel.append(DCI.Poi.InitHtml);//加载显示的内容
DCI.Poi.Init(map);
```
效果图：<br>
![](https://github.com/gishome/arcgis-for-js/blob/master/BlogMap/IMG/搜索1.png)
![](https://github.com/gishome/arcgis-for-js/blob/master/BlogMap/IMG/搜索2.png) 

6.地图空间查询：<br>
```
//空间查询
var pane1 = DCI.sidebarCtrl.createItem("空间查询", "查询", false, "nav_but_spa", "spatialQuery");
pane1.append(DCI.SpatialQuery.Html);//加载显示的内容
DCI.SpatialQuery.Init(map);
```
效果图：<br>
![](https://github.com/gishome/arcgis-for-js/blob/master/BlogMap/IMG/空间查询.png)

7.地图标绘：<br>
```
//态势标绘
$("#bPlot").click(function () {
            //初始化军势标绘接口
            if (!DCI.Plot.isload)
                DCI.Plot.Init(map);
            if (DCI.Plot.dialog)
                DCI.Plot.dialog.close();
            DCI.Plot.dialog = jDialog.dialog({
                title: '态势标绘',
                width: 370,
                height: 200,
                left: 450,
                top: 200,
                modal: false, // 非模态，即不显示遮罩层
                content: DCI.Plot.Html
            });
            DCI.Plot.InitEvent();

});
```
效果图：<br>
![](https://github.com/gishome/arcgis-for-js/blob/master/BlogMap/IMG/地图标绘.png)

8.地图分屏：<br>
```
//地图对比
$("#mapCompare").bind("mouseenter", function () {
            if (!DCI.map2dTool.is_initialize) {//地图对比分屏,初始化加载一次
                DCI.SplitScreen.initialize(map);
                DCI.map2dTool.is_initialize = true;
            }
            $("#mapcompareDiv").show();
        });
        $("#mapCompare").bind("mouseleave", function () { $("#mapcompareDiv").hide(); });
        //地图对比
        $("#mapcompareDiv li").click(function () {
            switch ($(this).index()) {
                case 0://单屏
                    $("#centerPanel").removeClass("map_two");
                    DCI.SplitScreen.splitMap('splitOne');
                    $("#toolBar").show();
                    break;
                case 1://二屏     
                    //动态设置二屏高度
                    var mainmapheight = $("#map").css("height");
                    $("#map-two").css("height", mainmapheight);
                    $("#centerPanel").addClass("map_two");
                    DCI.SplitScreen.splitMap('splitTwo');
                    $("#toolBar").hide();
                    break;
                default:
            }
});
```
效果图：<br>
![](https://github.com/gishome/arcgis-for-js/blob/master/BlogMap/IMG/地图分屏.png)

9.地图图层：<br>
```
//地图图层
var panel2 = DCI.sidebarCtrl.createItem("地图图层", "图层", true, "nav_but_layer", "layermodel");
panel2.append(DCI.Catalog.Html);//加载显示的内容
DCI.Catalog.Init(map);
```
效果图：<br>
![](https://github.com/gishome/arcgis-for-js/blob/master/BlogMap/IMG/地图图层.png)


