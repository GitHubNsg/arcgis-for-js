if (typeof DCI == "undefined") { var DCI = {}; }
DCI.Poi = {
    Html:"<div style=' height:5px;'></div>"
    + "<div class='index_search_box'>" +
      "<select id='precType' style='font-size:13px;float:left;height:22px;'>" +
          "<option value ='0'>银行</option>" +
          "<option value ='1'>医疗</option>" +
          "<option value ='2'>学校</option>" +
          "<option value ='3'>公交站</option>" +
          "<option value ='4'>大厦</option>" +
          "<option value ='5'>超市商城</option>" +
          "<option value ='6'>餐饮</option>" +
          "<option value ='7'>宾馆酒店</option>" +
       "</select>" +
       "<input type='text' id='keyword' value='农行' />" +
       "<div id='watchQuery' class='watchQuery'></div>"+
      "</div>"+
      "<div>" +
        "<div id='queryShowList_scroll' class='Landstock-content'><div id='showList' style='width:100%;height:100%;margin-left:5px;'></div></div>"+
      "</div>",
    map: null,//地图对象
    graphicslayer: null,//显示搜索结果的图层
    Init: function (map) {
        DCI.Poi.map = map;
        DCI.Poi.graphicslayer = new esri.layers.GraphicsLayer();
        DCI.Poi.map.addLayer(DCI.Poi.graphicslayer);  //将图层赋给地图 
        function InitEvent() {
            //搜索列表显示结果的滚动条样式
            //$("#queryShowList_scroll").mCustomScrollbar({
            //    theme: "minimal-dark"
            //});
            //兴趣点输入点击查询
            $("#watchQuery").bind("click", function () {
                var keyword = $("#keyword").val();
                if (keyword == "" || keyword == undefined) {
                    promptdialog("提示信息", "请输入要查找的内容!");
                    return;
                }
                DCI.Poi.search(keyword);
            });
            //兴趣点输入框的键盘按下键触发事件
            $("#keyword").bind("keypress", function (event) {
                if (event.keyCode == "13") {
                    var keyword = $("#keyword").val();
                    if (keyword == "" || keyword == undefined) {
                        //alert("请输入要查找的内容！");
                        promptdialog("提示信息", "请输入要查找的内容!");
                        return;
                    }
                    DCI.Poi.search(keyword);
                }
            })
            DCI.Poi.graphicslayer.on("click", function (evt) {
                var grap = evt.graphic;
                //DCI.Poi.grapGeo = grap.attributes.geo;

                var zoompoint = null;
                //if (grap.attributes.centerPoint == null) {//兴趣点
                    zoompoint = grap.geometry;
                //}
                //DCI.Poi.map.esriMap.centerAt(grap.geometry);
                DCI.Poi.map.centerAt(zoompoint);
                DCI.Poi.map.infoWindow.resize(150, 100);
                DCI.Poi.map.infoWindow.setTitle(grap.attributes.title);
                DCI.Poi.map.infoWindow.setContent(grap.attributes.content);
                setTimeout(function () {
                    //DCI.Poi.map.esriMap.infoWindow.show(grap.geometry);
                    DCI.Poi.map.infoWindow.show(zoompoint);
                }, 500);
            });
        };
        InitEvent();//私有方法可以在函数作用域范围内使用
    },
    search: function (keyword) {
        $("#showList").html('<div class="waitpanel"><img src="' + getRootPath() + 'Content/images/index/poi_loading.gif" /></div>');
        esriConfig.defaults.io.proxyUrl = getRootPath() + "proxy.ashx";
        esriConfig.defaults.io.alwaysUseProxy = true;
        var val = $("#precType").children('option:selected').val();
        var query = new esri.tasks.Query();
        query.returnGeometry = true;
        query.outFields = ["NAME"];
        //query.outFields = ["*"];
        query.outSpatialReference = { "wkid": 4326 };
        query.where = "NAME like '%" + keyword + "%'";
        var queryTask = new esri.tasks.QueryTask(MapConfig.searchURL+"/"+ val);
        queryTask.execute(query, DCI.Poi.navInfo);
    },
    navInfo: function (results) {
        DCI.Poi.graphicslayer.clear();
        var sms = new esri.symbol.PictureMarkerSymbol(getRootPath() + "Content/images/plot/point1.png", 11, 13);
        var innerStr = [];
        for (var i = 0; i < results.features.length; i++) {
            //DCI.Poi.map.centerAt(results.features[i].geometry);
            var tempID = "tempID" + i;
            var iId = i + 1;
            var pId = "poi_" + iId;
            var attr = { "title": results.features[i].attributes.NAME, "content": results.features[i].attributes.NAME };
            var highlightGraphic = new esri.Graphic(results.features[i].geometry, sms, attr);
            highlightGraphic.id = tempID;
            DCI.Poi.graphicslayer.add(highlightGraphic);
            innerStr.push('<div class="left_list_li_box" onmouseover="DCI.Poi.onPOIMouseOverRecord(' + i + ',\'' + tempID + '\')" onmouseout="DCI.Poi.onPOIMouseOutRecord(' + i + ',\'' + tempID + '\')"  id="' + pId + '">');
            innerStr.push('<div class="left_list_li_box_top">');
            innerStr.push('<div class="left2_box2">');
            innerStr.push('<img class="list_poi_marker" style="width:11px;height:13px;" src="' + getRootPath() + 'Content/images/plot/point1.png"></img>');
            innerStr.push('<div class="left_list_li1">');
            innerStr.push('<p>');
            innerStr.push('<a onclick="DCI.Poi.toLocationPOI(' + i + ',\'' + tempID + '\',\'' + results.features[i].attributes.NAME + '\')">' + results.features[i].attributes.NAME + '</a><br/>');
            innerStr.push('</p>');
            innerStr.push('</div>');
            innerStr.push('</div>')
            innerStr.push('</div>');
            innerStr.push('</div>');
        }
        $("#showList").html(innerStr.join(''));
    },
    //点击POI查询列表在地图上显示窗口
    toLocationPOI: function (i, tempID,name) {

        var poiName = name;
        var graphics = DCI.Poi.graphicslayer.graphics;
        var grap = null;
        for (var j = 0; j < graphics.length; j++) {
            if (graphics[j].id == tempID) {
                grap = graphics[j];
                break;
            }
        }
        var zoompoint = null;
        zoompoint = grap.geometry;
        DCI.Poi.map.centerAt(zoompoint);
        DCI.Poi.map.infoWindow.resize(150, 100);
        DCI.Poi.map.infoWindow.setTitle(poiName);
        DCI.Poi.map.infoWindow.setContent(poiName);
        setTimeout(function () {
            DCI.Poi.map.infoWindow.show(zoompoint);
        }, 500);

    },
    //鼠标经过或点击结果列表，改变定位图标
    onPOIMouseOverRecord: function (i, tempID) {
        var graphics = DCI.Poi.graphicslayer.graphics;
        //var grapGeo = null;
        var grap = null;
        for (var j = 0; j < graphics.length; j++) {
            if (tempID == graphics[j].id) {
                grap = graphics[j];
                break;
            }
        }

        if (grap != null) {
            //改变颜色
            var symbol = new esri.symbol.PictureMarkerSymbol(getRootPath() + "Content/images/plot/point5.png", 11, 13);
            grap.setSymbol(symbol);
        }
    },
    //鼠标移开,改变定位图标
    onPOIMouseOutRecord: function (i, tempID) {
        var graphics = DCI.Poi.graphicslayer.graphics;
        var grap = null;
        for (var j = 0; j < graphics.length; j++) {
            if (tempID == graphics[j].id) {
                grap = graphics[j];
                break;
            }
        }
        if (grap != null) {
            //改变颜色
            var symbol = new esri.symbol.PictureMarkerSymbol(getRootPath() + "Content/images/plot/point1.png", 11, 13);
            grap.setSymbol(symbol);
        }
    },
    /**
     * 切换到其他模块再回来--默认初始化状态
    */
    InitState: function () {
        //控制显示或隐藏
        DCI.Poi.clearAndhide();
    },
    //清空和隐藏气泡窗口函数
    clearAndhide: function () {
        if (DCI.Poi.graphicslayer)
            DCI.Poi.graphicslayer.clear();
        DCI.Poi.map.infoWindow.hide();
        $("#showList").empty();
    },



}