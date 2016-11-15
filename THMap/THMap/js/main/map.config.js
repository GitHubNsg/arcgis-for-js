/* --------------------------------地图初始信息配置-------------------------------- */
function MapConfig() { }
MapConfig.mapInitParams = {
    fullExtent: {//全图范围
        xmin: 31.029124992268333,
        ymin: 120.24764759317975,
        xmax: 31.20865532515823,
        ymax: 120.3331785536603
    },
    extent: {//初始化范围
        xmin: 31.07229036973858,
        ymin: 120.26538421149719,
        xmax: 31.16205553618355,
        ymax: 120.30814969173748
    },
    spatialReference: {
        wkid: 4326
    },
}
/*地图调用*/
MapConfig.vecMapUrl = "http://localhost:6080/arcgis/rest/services/THMap/MapServer";
MapConfig.printGPURL = "http://localhost:6080/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map";//打印GP服务
MapConfig.searchURL = "http://localhost:6080/arcgis/rest/services/THMap/MapServer";//图层搜索服务
MapConfig.sdeURL = "http://localhost:6080/arcgis/rest/services/bjsde/FeatureServer/0";//在线编辑服务
/*图层目录构造*/
MapConfig.zNodes = [
    { id: 1, pId: 0, name: "图层目录", checked: true, iconOpen: "" + getRootPath() + "Content/images/legend/1_open.png", iconClose: "" + getRootPath() + "Content/images/legend/1_close.png" },
    { id: 11, pId: 1, name: "传统村镇公共空间", layerurl: MapConfig.searchURL, layerid: "layer0", checked: true, icon: "" + getRootPath() + "Content/images/legend/0.png" },
    { id: 12, pId: 1, name: "传统建筑", layerurl: MapConfig.searchURL, layerid: "layer1", checked: true, icon: "" + getRootPath() + "Content/images/legend/1.png" },
    { id: 13, pId: 1, name: "鱼塘", layerurl: MapConfig.searchURL, layerid: "layer2", checked: true, icon: "" + getRootPath() + "Content/images/legend/2.png" },
    { id: 14, pId: 1, name: "传统耕地", layerurl: MapConfig.searchURL, layerid: "layer3", checked: true, icon: "" + getRootPath() + "Content/images/legend/3.png" },
    { id: 15, pId: 1, name: "草地", layerurl: MapConfig.searchURL, layerid: "layer4", checked: true, icon: "" + getRootPath() + "Content/images/legend/4.png" },
    { id: 16, pId: 1, name: "人工河道", layerurl: MapConfig.searchURL, layerid: "layer5", checked: true, icon: "" + getRootPath() + "Content/images/legend/5.png" },
    { id: 17, pId: 1, name: "主干道及快速路_面", layerurl: MapConfig.searchURL, layerid: "layer6", checked: true, icon: "" + getRootPath() + "Content/images/legend/6.png" },
    { id: 18, pId: 1, name: "次级现代道路用地_面", layerurl: MapConfig.searchURL, layerid: "layer7", checked: true, icon: "" + getRootPath() + "Content/images/legend/7.png" },
    { id: 19, pId: 1, name: "传统乡村道路_面", layerurl: MapConfig.searchURL, layerid: "layer8", checked: true, icon: "" + getRootPath() + "Content/images/legend/8.png" },
    { id: 20, pId: 1, name: "茶园及果园", layerurl: MapConfig.searchURL, layerid: "layer9", checked: true, icon: "" + getRootPath() + "Content/images/legend/9.png" },
    { id: 21, pId: 1, name: "传统河道", layerurl: MapConfig.searchURL, layerid: "layer10", checked: true, icon: "" + getRootPath() + "Content/images/legend/10.png" },
    { id: 22, pId: 1, name: "现代建筑空间", layerurl: MapConfig.searchURL, layerid: "layer11", checked: true, icon: "" + getRootPath() + "Content/images/legend/11.png" },
    { id: 23, pId: 1, name: "裸地", layerurl: MapConfig.searchURL, layerid: "layer12", checked: true, icon: "" + getRootPath() + "Content/images/legend/12.png" },
    { id: 24, pId: 1, name: "传统村镇公共空间", layerurl: MapConfig.searchURL, layerid: "layer13", checked: true, icon: "" + getRootPath() + "Content/images/legend/13.png" },
    { id: 25, pId: 1, name: "林地", layerurl: MapConfig.searchURL, layerid: "layer14", checked: true, icon: "" + getRootPath() + "Content/images/legend/14.png" },
    { id: 26, pId: 1, name: "圩田", layerurl: MapConfig.searchURL, layerid: "layer15", checked: true, icon: "" + getRootPath() + "Content/images/legend/15.png" },
    { id: 27, pId: 1, name: "现代厂矿用地", layerurl: MapConfig.searchURL, layerid: "layer16", checked: true, icon: "" + getRootPath() + "Content/images/legend/16.png" }

];

