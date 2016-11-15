var allMap;//全局map变量
dojo.addOnLoad(function () {
    DCI.sidebarCtrl.initLayout();
    load2DMap();
});
(function () {
    dojo.require("esri.toolbars.draw");
    dojo.require("esri.geometry.Extent");
    dojo.require("esri.dijit.OverviewMap");
    dojo.require("esri.dijit.Scalebar");
    dojo.require("esri.dijit.Legend");
})();
function load2DMap() {
    var map = new esri.Map("map", { logo: false });
    allMap = map;
    //var layer = new esri.layers.ArcGISTiledMapServiceLayer(MapConfig.vecMapUrl);
    var layer = new esri.layers.ArcGISDynamicMapServiceLayer(MapConfig.vecMapUrl);
    map.addLayer(layer);
    //设置地图初始范围
    var initExtent = new esri.geometry.Extent({ xmin: MapConfig.mapInitParams.extent.xmin, ymin: MapConfig.mapInitParams.extent.ymin, xmax: MapConfig.mapInitParams.extent.xmax, ymax: MapConfig.mapInitParams.extent.ymax, spatialReference: MapConfig.mapInitParams.spatialReference });
    map.setExtent(initExtent);
    //加载鹰眼
    var overviewMapDijit = new esri.dijit.OverviewMap({
        map: map,
        attachTo: "bottom-left",
        color: " #D84E13",
        opacity: .40
    });
    overviewMapDijit.startup();
    //加载比例尺
    var scalebar = new esri.dijit.Scalebar({
        map: map,
        attachTo: "bottom-center",
        scalebarStyle: "ruler",//line
        scalebarUnit: "metric"
    });
    //加载底图图例
    var legend = new esri.dijit.Legend({
        map: map,
        autoUpdate:false,
        arrangement: esri.dijit.Legend.ALIGN_LEFT
    }, "mapLegend");
    legend.startup();
    //地图加载函数
    map.on("load", function () {
        setTimeout(function () {
            $(".esriLegendServiceLabel").text("图例");
            $(".mapLegend").show();
        }, 500);
    });
    //地图切换
    $("#BasemapToggle img").bind("click", function () {
        var type = $(this).attr("id");
        //map.removeAllLayers();
        if (map.getLayer("img"))
            map.removeLayer(map.getLayer("img"));
        if (map.getLayer("vec"))
            map.removeLayer(map.getLayer("vec"));
        //三角形标识切换
        switch (type) {
            case "imgmap"://影像图
                $("#imgmap").css({ display: "none" });
                $("#vecmap").css({ display: "block" });
                $(".mbasemapTitle").empty();
                $(".mbasemapTitle").append("街道图");
                var layer = new esri.layers.ArcGISTiledMapServiceLayer(MapConfig.imgMapUrl);
                layer.id = "img";
                map.setLevel(map.getMinZoom());
                break;
            case "vecmap"://街道图
                $("#imgmap").css({ display: "block" });
                $("#vecmap").css({ display: "none" });
                $(".mbasemapTitle").empty();
                $(".mbasemapTitle").append("影像图");
                var layer = new esri.layers.ArcGISTiledMapServiceLayer(MapConfig.vecMapUrl);
                layer.id = "vec";
                break;
        }
        map.addLayer(layer);
    });
    //显示地图工具栏
    DCI.map2dTool.InitTool(map);


     //var panel = DCI.sidebarCtrl.createItem("地图查询", "查询", true, "nav_but_ss","searchmodel");
    //panel.append(DCI.Poi.Html);//加载显示的内容
    // DCI.Poi.Init(map);
    var panel1 = DCI.sidebarCtrl.createItem("地图图层", "图层", false, "nav_but_layer", "layermodel");
    panel1.append(DCI.Catalog.Html);//加载显示的内容
    DCI.Catalog.Init(map);
    var panel2 = DCI.sidebarCtrl.createItem("地图定位", "定位", false, "nav_but_search", "locationmodel");
    panel2.append(DCI.Location.Html);//加载显示的内容
    DCI.Location.Init(map);


    DCI.Measure.Init(map);
    //加载用户登录信息
    //function GetQueryString(name) {
    //    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    //    var r = window.location.search.substr(1).match(reg);
    //    if (r != null) return unescape(r[2]); return null;
    //}
    //var username = GetQueryString("username");
    //if (username == "" || username == null)
    //    $("#header").append('<div id="div_login"><a class="login" style="text-decoration:none;" href="javascript:void(0)">注册</a><a class="login" style="text-decoration:none;" href="login.html">登录</a><a style="text-decoration:none;">欢迎光临！</a></div>');
    //else
    //    $("#header").append('<div id="div_login"><a class="login" style="text-decoration:none;" href="login.html">退出</a><a class="login" style="text-decoration:none;">' + username + '</a><a style="text-decoration:none;">欢迎光临！</a></div>');

}

DCI.sidebarCtrl = {
    NavBar: null,
    NavContent: null,

    initLayout: function () {
        NavBar = $('<div id="nav_bar" class="nav_bar"></div>');
        NavContent = $('<div id="nav_Content" class="nav_Content"></div>');
        $("#sidebar").append(NavBar);
        $("#sidebar").append(NavContent);
    },

    createItem: function (title, name, isHigh, cssName, id) {
        var navItem = $('<div></div>');
        navItem.attr("id", id);
        navItem.attr("title", title);
        var css = isHigh == true ? "nav_but nav_sel" : "nav_but";
        navItem.attr("class", css);
        var img = $('<div></div>');
        cssName = cssName ? cssName : "nav_but_ss";
        img.attr("class", cssName);
        navItem.append(img);
        var span = $('<span></span>');
        span.text(name);
        navItem.append(span);

        $("#nav_bar").append(navItem);
        var navItemContent = $('<div class="nav_Item_Content"></div>');
        $("#nav_Content").append(navItemContent);
        navItem.click(function () {
            $(".nav_Item_Content").css("display", "none");
            navItemContent.css("display", "block");
            $(".nav_but").attr("class", "nav_but");
            this.className = "nav_but nav_sel";
            var id = this.id;
            switch (id) {
                case "searchmodel":
                    DCI.Poi.InitState();
                    break;
                case "layermodel":
                    break;
                case "locationmodel":
                    break;
                case "businessmodel":
                    DCI.Well.InitSde("");
                    break;
            }
            //各个不同功能模块之间切换--清空Graphic
            $("#bClear").click();
            DCI.Theme.ClearStaticLayer();

        });
        return navItemContent;
    },
    clear: function () {
        $("#nav_bar").children().remove();
        $("#nav_Content").children().remove();
    }

}
