if (typeof DCI == "undefined") { var DCI = {}; }
DCI.Print = {//打印模块
    Init: function (map) {
        dojo.require("esri.tasks.PrintTemplate");
        dojo.require("esri.tasks.PrintTask");
        dojo.require("esri.tasks.PrintParameters");
        dojo.require("esri.plugins.FeatureLayerStatistics");
        printResult = function (e) {//打印成功callback
            $("#imgLoading32").css({ "display": "none" });
            map.graphics.clear();
            window.open(e.url, "_blank");
            window.location = getRootPath() + "/handler/SavePrintResultHandler.ashx?resultUrl=" + e.url;//请求后台，弹出下载
        };
        printError = function (e) {//打印失败callback
            //alert("打印失败！");
            $("#imgLoading32").css({ "display": "none" });
            promptdialog("提示信息", "打印失败!");
            console.log(e.error);
        };
        $("#imgLoading32").css({ "display": "" });
        esriConfig.defaults.io.proxyUrl = getRootPath() + "proxy.ashx";
        var printTask = new esri.tasks.PrintTask(MapConfig.printGPURL, { async: true });
        var template = new esri.tasks.PrintTemplate();
        template.exportOptions = {
            width: map.width,
            height: map.height,
            dpi: 96
        };
        template.format = "jpg";
        template.layout = "MAP_ONLY";
        template.preserveScale = false;
        var params = new esri.tasks.PrintParameters();
        params.map = map;
        params.template = template;
        printTask.execute(params, printResult, printError);

    },
}