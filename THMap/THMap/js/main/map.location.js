if (typeof DCI == "undefined") { var DCI = {}; }
DCI.Location = {
    Html: "<div style=' height:5px;'></div>"
    + "<div class='index_search_box'>" +
         "<label style='font-weight:normal;'>经度:</label>" +
         "<input type='text' id='xkeyword' value='120.294' style='width:75px;'/>" +
         "<label style='margin-left:6px;font-weight:normal;'>纬度:</label>" +
         "<input type='text' id='ykeyword' value='31.132' style='width:75px;'/>" +
         "<div id='locwatchQuery' class='watchQuery'></div>" +
       "</div>",
    map: null,//地图对象
    graphicslayer: null,//显示搜索结果的图层
    Init: function (map) {
        DCI.Location.map = map;
        DCI.Location.graphicslayer = new esri.layers.GraphicsLayer();
        DCI.Location.map.addLayer(DCI.Location.graphicslayer);  //将图层赋给地图 
        $("#locwatchQuery").bind("click", function () {
            var xkeyword = $("#xkeyword").val();
            var ykeyword = $("#ykeyword").val();
            if (xkeyword == "" || xkeyword == undefined || ykeyword == "" || ykeyword == undefined) {
                promptdialog("提示信息", "输入经纬度均不能为空!");
                return;
            }
            DCI.Location.search(xkeyword, ykeyword);
        });
    },
    search: function (xkeyword, ykeyword) {
        try {
            DCI.Location.graphicslayer.clear();
            //var point = new esri.geometry.Point(xkeyword, ykeyword, DCI.Location.map.spatialReference);
            var point = new esri.geometry.Point(ykeyword,xkeyword, DCI.Location.map.spatialReference);
            //使用图标标注
            var sms = new esri.symbol.PictureMarkerSymbol(getRootPath() + "Content/images/plot/point1.png", 22, 27);
            //var graphic = new esri.Graphic(point, sms, attr);
            var graphic = new esri.Graphic(point, sms);
            DCI.Location.graphicslayer.add(graphic);
            DCI.Location.map.centerAt(point);
        }
        catch (e) {
            promptdialog("提示信息", "定位不到,请重新输入经纬度!");
        }
    },



}