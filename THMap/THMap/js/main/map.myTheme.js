if (typeof DCI == "undefined") { var DCI = {}; }
var testClick;
var url;
var fileName;
var fieldArr;
DCI.Theme = {
    /**
     * 在线制图我的专题模块
     */
    dialog: null,//上传对话框对象
    staticDialog: null,//统计对话框对象
    //Html: "<div class='tab-pane sidebar-Content' id='myPanel'>" +
    //                "  <div id='myPanBtn' class='btn-group btn-group-justified' role='group'>" +
    //                    "<div class='btn-group' role='group'title='上传文件'>" +
    //                     //"<span class='glyphicon glyphicon-plus'style='position: relative;top: 30px;z-index: 300;left: 50px;'></span>" +
    //                      //"<button id='exportdata' type='button' class='btn btn-default'>上传叠加文件</button>"

    //                       "<button id='exportdata' type='button' class='btn btn-info'>上传统计文件</button>" +
    //                   " </div>" +
    //                  "  <div class='btn-group' role='group'title='叠加分析' style='display:none;'>" +
    //                  " <span class='glyphicon glyphicon-signal' style='position: relative;top: 28px;z-index: 300;left: 17px;'></span>"+
    //                     " <button  id='overlayshpsdd' type='button' class='btn btn-default' style='argin-left:-1px;'>统计</button>" +
    //                   " </div>" +
    //                  "</div>" +
    //                   " <div id='layerOver'></div>" +
    //                 " <div id='staticInfo' style='border:1px #ccc solid ;display:none;'>" +
    //                 "<div class='tool-widget-content'><div class='tool-widget-expression'><span style='display:none'>数据源：</span>"+
    //           "<span style='width:221px;display:none;'>" + "shujuyuan" + "</span>"+
    //            "<div style='width:100%; margin-top:3px;position:relative;top:-13px;left:34px;'><span style='position:relative;top:20px;left:-34px;'>标题：</span><input id='inputStaTitle' value='统计图' style='margin-"+
    //            "left:9px; width:149px; border:1px #ccc solid;'/></div></div>"+
    //            "<div class='tool-widget-expression' style='height:280px; margin-top:6px;'><span style=''>统计字段：</span>"+
    //            "<ul class='sta-feature-ul' id='field' style='margin-left:10px'>" +

    //            "</ul></div>"+
    //            "<div class='tool-widget-custom' style='border:none;'><span style=' position:relative;top:-18px;'>统计图类型：</span>"+
    //            "<select id='sltGraphType' style='margin-right:82px;height:24px;position:relative;top:-39px;left:84px;'>" +
    //            "<option selected value='Lines' >线状</option>"+
    //            "<option selected value='ClusteredColumns' >柱状</option>"+
    //            "<option selected value='Pie' >饼状</option>"+
    //            "</select>"+
    //            "<span style='position:relative;left:-141px;top:-10px;'>风格：</span><select id='sltGraphStyle' style='height:24px;position:relative;top:-36px;left:48px;'>"+
    //            "<option selected value='1' >蓝色</option>"+
    //            "<option selected value='2' >绿色</option>"+
    //            "<option selected value='3' >紫色</option>"+
    //            "<option selected value='0' >默认</option>"+
    //            "</div>"+
    //             "<div class='tool-widget-btn' style='width:100%;'><img id='imgStaAjax' src='images/loading32.gif' style='float:left display:none;'/>"+
    //             "<input class='btn btn-info' style='position:relative; bottom:5px; right:-36px;top:26px;height:37px;' type='button' value='叠加统计图' id='overlayshps'/>" +
    //             "</div></div>"+
    //                 "</div>" +
    //                "</div>",
    Html: "<div class='tab-pane sidebar-Content' id='myPanel'>" +
                    "  <div id='myPanBtn' class='btn-group btn-group-justified' role='group'>" +
                        "<div class='btn-group' role='group'title='上传文件'>" +
                         //"<span class='glyphicon glyphicon-plus'style='position: relative;top: 30px;z-index: 300;left: 50px;'></span>" +
                          //"<button id='exportdata' type='button' class='btn btn-default'>上传叠加文件</button>"

                           "<button id='exportdata' type='button' class='btn btn-info'>上传统计文件</button>" +
                       " </div>" +
                      "  <div class='btn-group' role='group'title='叠加分析' style='display:none;'>" +
                      " <span class='glyphicon glyphicon-signal' style='position: relative;top: 28px;z-index: 300;left: 17px;'></span>" +
                         " <button  id='overlayshpsdd' type='button' class='btn btn-default' style='argin-left:-1px;'>统计</button>" +
                       " </div>" +
                      "</div>" +
                       " <div id='layerOver'></div>" +
                     " <div id='staticInfo' style='border:1px #ccc solid ;display:none;'>" +
                     "<div class='tool-widget-content'><div class='tool-widget-expression'><span style='display:none'>数据源：</span>" +
               "<span style='width:221px;display:none;'>" + "shujuyuan" + "</span>" +
                "<div style='width:100%;margin-top:5px;'><span>标题：</span><input id='inputStaTitle' value='统计图' style='margin-" +
                "left:1px; width:149px; border:1px #ccc solid;'/></div></div>" +
                "<div class='tool-widget-expression' style='margin-top:6px;'><span style=''>统计字段：</span>" +
                "<ul class='sta-feature-ul' id='field' style='margin-left:10px'>" +

                "</ul></div>" +
                "<div class='tool-widget-custom' style='border:none;'><span style=''>统计图类型：</span>" +
                "<select id='sltGraphType' style=''>" +
                "<option selected value='Lines' >线状</option>" +
                "<option selected value='ClusteredColumns' >柱状</option>" +
                "<option selected value='Pie' >饼状</option>" +
                "</select>" +
                "<span style='margin-left:10px;'>风格：</span><select id='sltGraphStyle' style=''>" +
                "<option selected value='1' >蓝色</option>" +
                "<option selected value='2' >绿色</option>" +
                "<option selected value='3' >紫色</option>" +
                "<option selected value='0' >默认</option>" +
                "</div>" +
                 "<div class='tool-widget-btn' style='width:100%;'><img id='imgStaAjax' src='images/loading32.gif' style='float:left display:none;'/>" +
                 "<input class='btn btn-info' style='position:relative; bottom:5px; right:-76px;top:26px;height:37px;' type='button' value='叠加统计图' id='overlayshps'/>" +
                 "</div></div>" +
                     "</div>" +
                    "</div>",
    uploadHtmls: "<div id='custom-demo' class='demo'><div class='demo-box'>" +
          "<div id='status-message'>请选择要上传的文件:</div>" +
          "<div id='making_custom-queue'></div>" +
          "<div id='making_custom_shp_upload'>" +
          "</div>" +
          "<div id='making_custom_file_path' class='custom_file_path'>" +
          "</div>" +
          "<div id='making_custom_shp'>" +
          "</div>" +
          "</div>"+
          "<span>提示：可上传csv文件以及图层压缩文件</span>"+
          "</div>",
           

    Init: function () {

        $("#exportdata").bind("click", function () {

            DCI.Theme.loadCsvShp();

        });

        $("#overlayshps").bind("click", function () {
            if (url) {
                DCI.Theme.customStaLayer();
            }
            else {
                alert("请上传统计文件!");
            }

        });



    },
    customStaLayer: function (treeNode) {
        fileName = "test";
      //  if (document.getElementById("sltDataSource").options.length > 0) {
            //var lyrName = document.getElementById("sltDataSource").options[document.getElementById("sltDataSource").selectedIndex].innerText;
            //var fileName = document.getElementById("sltDataSource").options[document.getElementById("sltDataSource").selectedIndex].value;
         var graphType = $("#sltGraphType").val();
            //var graphType = "Pie";
             fieldArr = new Array();
           // var fieldArr = ["GDP2014", "GDP2015"]
             var graphTitle = $("#inputStaTitle").val();
           // var graphTitle = "GDP年度比例图";
           var graphStyle = $("#sltGraphStyle").val();
           // var graphStyle = "0";
            try {
                DCI.Theme.removeStaLayer(fileName);
            }
            catch (ex) {

            }

           // var url = "./proxy.ashx?" + nstax.config.map.csvPathUrl + "/" + fileName + ".csv";
        //    var url = getRootPath() + 'upload/test.csv';
           
            //for (var i = 0; i < $("ul.sta-feature-ul li input").length; i++) {
            //    if ($("ul.sta-feature-ul li input")[i].checked) {
            //        fieldArr.push($("ul.sta-feature-ul li input")[i].id);
            //    }
            //}

            var csvGraLyr = new esri.layers.GraphicsLayer();
            csvGraLyr.id = fileName;

        // map.addLayer(csvGraLyr);
            allMap.addLayer(csvGraLyr);
            csvGraLyr.setVisibility(false);
        // var chartLayer = new CGL({
            
            var chartLayer = new ChartGraphicLayer({
                id: "chartLayer" + fileName,
                bindGraphicLayer: csvGraLyr,
                displayOnPan: false
            });
        // map.addLayer(chartLayer);
            allMap.addLayer(chartLayer);

            csvGraLyr.on("graphic-add", function (addGraphic) {
                var chartType = graphType;//类型有：Pie，Lines，Columns，StackedColumns
                var att = addGraphic.graphic.attributes;

                var propsName = new Array();
                var propsValue = new Array();
                for (var p in att) {//遍历获取att中的属性名和属性值
                    if (typeof (att[p]) != "function") {
                        if (p != "ID" && p != "NAME" && p != "PAC" && p != "X" && p != "Y") {//将统计数据属性名和值用数组保存
                            for (var q in fieldArr) {
                                if (p == fieldArr[q]) {
                                    propsName.push(p);
                                    propsValue.push(att[p]);
                                }
                            }
                        }
                    }
                }

                var staAttSum = 0;
                for (var i = 0; i < propsName.length; i++) {
                    staAttSum = staAttSum + parseFloat(propsValue[i]);//统计求和
                }

                var series = new Array();
                for (var i = 0; i < propsName.length; i++) {
                    var obj = new Object();
                    obj.y = propsValue[i];
                    obj.tooltip = propsName[i].toString() + "：" + parseFloat(propsValue[i]) + "(" + (100 * parseFloat(propsValue[i]) / staAttSum).toFixed(1) + "%)";
                    //获取统计值（暂时）
                    //var staticValue = []
                    //staticValue[i] = (100 * parseFloat(propsValue[i]) / staAttSum).toFixed(1) + "%";

                   
                    series.push(obj);
                }

                var chartGraphicSize = 50;
                var sum = staAttSum;
                if (staBreakArr) {
                    if (sum > 0 && sum <= staBreakArr[0]) {
                        chartGraphicSize = chartGraphicSize;
                    }
                    else if (sum > staBreakArr[0] && sum <= staBreakArr[1]) {
                        chartGraphicSize = chartGraphicSize + 8;
                    }
                    else if (sum > staBreakArr[1] && sum <= staBreakArr[2]) {
                        chartGraphicSize = chartGraphicSize + 16;
                    }
                    else if (sum > staBreakArr[2]) {
                        chartGraphicSize = chartGraphicSize + 24;
                    }
                }

                var chartGraphic = new ChartGraphics({
                    map: allMap,
                    bindGraphic: addGraphic.graphic,
                    id: "id" + addGraphic.graphic.attributes.ID,
                    series: series,
                    type: chartType,
                    size: chartGraphicSize,//设置当前chartGraphic对象在HTML页面正方形div的大小
                    sum: sum,//地图上的chartDiv上附加显示合计的label中的显示值
                    title: graphTitle,
                    style: graphStyle
                });
                chartLayer.add(chartGraphic);
                //$("#staticInfo").empty();
                //$("#staticInfo").html(innerStr.join(''));
            });

            $.ajax({
                type: "get",
                url: url,
                success: function (csv, textStatus) {
                    var data = CSV.parse(csv);//读取csv文件

                    //将csv中的文件信息读取出来
                    var innerStr=[];
                  

                    csvGraLyr.id = fileName;
                    var graArr = new Array();
                    var rowSumsStr = "";
                    var att = new Array();
                    for (var i = 0; i < data[0].length; i++) {
                        att.push(data[0][i]);
                        if (i >= 5) {
                            if ($("#" + data[0][i]).attr('checked'))
                            {
                                fieldArr.push(data[0][i]);
                            }
                          
                        
                        }
                    }
                    if (fieldArr.length >= 1) {




                        for (var i = 1; i < data.length; i++) {
                            if (data[i][3] && data[i][4]) {
                                //var pt = new esri.geometry.Point(data[i][3], data[i][4], new esri.SpatialReference({ wkid: 2435 }));
                                var pt = new esri.geometry.Point(data[i][3], data[i][4], allMap.spatialReference);
                                var marker = new esri.symbol.SimpleMarkerSymbol("solid");
                                var attr = new Object();
                                for (var j = 0; j < att.length; j++) {
                                    attr[att[j]] = data[i][j];
                                }

                                var tempSum = 0;
                                var tempStatic = [];//计算出各个字段的比例
                                for (var j = 5; j < att.length; j++) {
                                    tempSum = tempSum + parseInt(data[i][j], 10);

                                    // tempStatic.push()
                                }
                                //统计值
                                for (var j = 5; j < att.length; j++) {
                                    tempStatic.push((100 * parseFloat(data[i][j]) / tempSum).toFixed(1) + "%")
                                }
                                rowSumsStr = rowSumsStr + tempSum.toString() + ",";

                                var gra = new esri.Graphic(pt, marker, attr);
                                graArr.push(gra);
                                //添加html
                                //var GDP1 = "2014年GDP:" + attr.GDP2014;
                                //var GDP2 = "2015年GDP:" + attr.GDP2015;
                                innerStr.push('<div class="left_list_li_box"  style="color:#213F41;margin-top:5px; margin-left:6px;border-bottom:1px solid rgb(88, 155, 255);"  id="s">');
                                innerStr.push('<div class="left_list_li_box_top" onClick="" onmouseover="" onmouseout=""  style="width:260px">');
                                innerStr.push('<span  style="display: block;margin-bottom:5px;color:rgb(12, 136, 232);";class="left_list_li2"style="margin-bottom: 9px;" >' + attr.NAME + '</span>');
                                innerStr.push('<img class="list_poi_marker"style="margin-top:5px; margin-left:5px;" src="' + getRootPath() + 'Content/images/poi/dw' + i + '.png"></img>');

                                innerStr.push('<div class="left2_box2"  style="height: auto;width: 220px;margin: -23px 0 5px 30px;">');
                                innerStr.push('<div class="left_list_li1"style="margin-bottom: 9px;">');
                                for (var j = 5; j < att.length; j++) {
                                    innerStr.push('<div id="infos"><span style="width:180px;" onclick="">' + att[j] + ':' + tempStatic[j - 5] + '</span></div>');
                                }
                                innerStr.push('</div>');
                                //innerStr.push('<div class="left_list_li2">' + GDP2 +  '</span></div>');
                                innerStr.push('</div>');
                                innerStr.push('</div>');
                                innerStr.push('</div>');


                            }
                        }

                        var brks = 4;
                        if (data.length - 1 < 4) {
                            brks = data.length - 1;
                        }
                        rowSumsStr = rowSumsStr.substring(0, rowSumsStr.length - 1);

                        //$("#staticInfo").empty();
                        //$("#staticInfo").html(innerStr.join(''));
                        $.ajax({
                            type: "get",

                            url: getRootPath() + 'handler/NatureBreakHandler.ashx',
                            beforeSend: function (XMLHttpRequest) {

                            },
                            data: {
                                numStr: rowSumsStr,
                                breaks: brks
                            },
                            success: function (result, textStatus) {
                                if (result.length > 0) {
                                    staBreakArr = result.split(",");

                                    for (var i = 0; i < graArr.length; i++) {
                                        csvGraLyr.add(graArr[i]);
                                    }
                                }
                                else {
                                    staBreakArr = undefined;
                                }
                            },
                            complete: function (XMLHttpRequest, textStatus) {

                            },
                            error: function (e) {
                                alert("网络调用错误");
                            }
                        });

                    }
                    else {
                        alert("请选择统计字段！");

                    }

                },
                error: function (e) {
                    alert("网络调用错误");
                }
            });
            //var treeObj = $.fn.zTree.getZTreeObj("lyrTree");
            //treeNode.checked = true;
            //treeObj.updateNode(treeNode);
       // }
    },

    /**
  * 上传图层
  */
    loadCsvShp: function () {
        if (DCI.Theme.dialog)
            DCI.Theme.dialog.close();
        DCI.Theme.dialog = jDialog.dialog({
            title: '上传文件',
            width: 370,
            modal: false,         // 非模态，即不显示遮罩层
            content: DCI.Theme.uploadHtmls
        });

        //var path = $("#shpfile").val();
        //上传文件事件监听
        $("#making_custom_shp_upload").uploadify({
            'debug': false,
            'auto': true,
            'multi': false,
            'swf': getRootPath() + 'js/plugins/uploadify3.2.1/uploadify.swf',
            'uploader': getRootPath() + 'handler/shpUpload.ashx',
            'cancelImg': getRootPath() + 'js/plugins/uploadify3.2.1/uploadify-cancel.png',
            'folder': 'upload',
            //'fileTypeDesc': 'Shp Files',
            //'fileTypeExts': '*.shp',
            'fileTypeDesc': 'Zip Files',
            'fileTypeExts': '*.zip;*.csv;',
            'queueID': 'making_custom-queue',
            'buttonText': "浏览",
            'removeCompleted': true,
            'removeTimeout': 1,
            'progressData': 'percentage',
            //'fileSizeLimit':30,//上传文件大小的限制
            //'successTimeout':120,//服务器端响应超时时间 秒
            'onCancel': function (event, queueId, fileObj, data) {
            },
            'onUploadStart': function (file) {
                $('#making_custom-queue').show();
            },
            'onUploadSuccess': function (file, data, response) {
                if (file.type == ".zip") {
                    if (data == "") {//shp文件过大,上传不成功
                        promptdialog("提示信息", "SHP压缩文件过大，请选择另外比较小的SHP压缩文件");
                    }
                    else {
                        $("#making_custom_file_path").css({ display: "block" });
                        $("#making_custom_file_path").html("SHP压缩包:" + file.name);
                        var params = {}
                        $.ajax({
                            type: "post",
                            //dataType: "json",
                            url: getRootPath() + "handler/PlotHandler/loadShp.ashx",
                            beforeSend: function (XMLHttpRequest) {
                                $("#making_custom_shp").html('<div class="waitpanel"><div class="waitimg"></div>请稍后,SHP文件正在加载中...</div>');
                            },
                            data: params,
                            success: function (data, textStatus) {
                                var result = data.split(";");
                                var wkttype = "";
                                //将叠加的SHP添加到地图的graphics中
                                for (var i = 0; i < result.length; i++) {
                                    wkttype = result[i].substring(0, result[i].indexOf("(") - 1);
                                    var geo = null;
                                    var symbol = null;
                                    switch (wkttype.toLowerCase()) {
                                        case "point"://点
                                            geo = DCI.Making.WKTToGeometry(wkttype.toLowerCase(), result[i].substring(5));
                                            symbol = allMap.markerSymbol;
                                            break;
                                        case "line":
                                        case "linestring":
                                        case "polyline"://线
                                            geo = DCI.Making.WKTToGeometry(wkttype.toLowerCase(), result[i].substring(10));
                                            var lineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([47, 184, 250]), 2);
                                            //symbol = DCI.Plot.map.lineSymbol;
                                            symbol = lineSymbol;
                                            break;
                                        case "polygon"://面
                                            geo = DCI.Making.WKTToGeometry(wkttype.toLowerCase(), result[i].substring(7));
                                            symbol = allMap.fillSymbol;
                                            break;
                                        default:
                                    }
                                    //var attr = { "title": title, "content": htmlCon, "plotID": result[i].ID };
                                    //var graphic = new esri.Graphic(geo, symbol, attr);
                                    var graphic = new esri.Graphic(geo, symbol);
                                    //graphic.id = result[i].ID;
                                    DCI.Making.graphicslayer.add(graphic);
                                }
                                if (DCI.Making.dialog)
                                    DCI.Making.dialog.close();
                                //加载我的数据
                                $("#myThemeUl").empty();
                                $("#myThemeUl").append('<li class="lyr-li">兴趣点<span class="glyphicon glyphicon-chevron-right lyr_righticon" title="查看"></span></li>');
                                $("#myThemeUl").append("<div>抽稀百分比(%):<input type='text' value='60' style='margin:5px;height:25px;width:75px;' id='sunsetPercent'/><div class='btn btn_subset' id='point_subset'>点抽稀</div></div>");
                                //符号化面板
                                $("#myThemeUl li").bind("click", function () {
                                    DCI.Making.createSymModal(this);
                                });
                                //点抽稀
                                $("#point_subset").bind("click", function () {
                                    DCI.Making.subsetExecute();
                                });
                            },
                            error: function (e) {
                                var error = e;
                            }
                        });

                    }
                }
                else {
                    // fileName=
                    $("#staticInfo").css("display", "block");
                    $(".sta-feature-ul").empty();
                    url = getRootPath() + "uploads/" + file.name;
                    $.ajax({
                        type: "get",
                        url: url,
                        success: function (csv, textStatus) {
                            var data = CSV.parse(csv);//读取csv文件
                            var att = new Array();
                            var innerStr = [];//获取字段数组
                            for (var i = 5; i < data[0].length; i++) {
                                var valStr = "<li class='sta-lyr-li'><input type='checkbox' id='" + data[0][i] + "' class=\"" + i + "\" checked='true' /><span style='margin-left:5px;'></span>" + data[0][i] + "</li>";
                                $(".sta-feature-ul").append(valStr);
                            }
                          //  for (var i = 0; i < data[0].length; i++) {
                          //      att.push(data[0][i]);
                             
                          //  }
                          //  //获取字段的个数
                          ////  field
                          //  for (var j = 5; j < att.length; j++) {
                              
                            //  }


                         
                        }
                    });


                    if (DCI.Theme.dialog)
                        DCI.Theme.dialog.close();
                }
            },
            'onSelectError': function (file, errorCode, errorMsg) {
            }
        });

    },
    //移除统计图层
    removeStaLayer: function (fileName) {
        if (allMap.getLayer(fileName))
            allMap.removeLayer(allMap.getLayer(fileName));
        if (allMap.getLayer("chartLayer" + fileName))
            allMap.removeLayer(allMap.getLayer("chartLayer" + fileName));
        $("#chart").empty();
        //清除统计信息
        //$("#staticInfo").empty();
    },

    //判断浏览器类型
    userAgent: function () {
        var ua = navigator.userAgent;
        ua = ua.toLowerCase();
         var match = /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(msie)([\w.]+)/.exec(ua) || !/compatible/.test(ua) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];

        //判断浏览器
        switch (match[1]) {
            case "msie":      //ie      
                if (parseInt(match[2]) == 6 || parseInt(match[2]) == 7 || parseInt(match[2]) == 8 || parseInt(match[2]) == 9 || parseInt(match[2]) == 10 || parseInt(match[2]) ==11)
                   
                    //ie6       
                {
                    window.open(getRootPath() + "uploads/software/CaptureInstall.exe", "_parent");

                }
                //    window.browserInfo = "msie_6";
                //else if (parseInt(match[2]) == 7)
                //    window.browserInfo = "msie_7";
                //else if (parseInt(match[2]) == 8)
                //    window.browserInfo = "msie_8";
                //else if (parseInt(match[2]) == 8)
                //    window.browserInfo = "msie_9";
                //else if (parseInt(match[2]) == 10)
                //    window.browserInfo = "msie_10";
                //else if (parseInt(match[2]) == 11)
                //    window.browserInfo = "msie_11";
                break;
            case "webkit":     //fari or chrome     
                window.open(getRootPath() + "uploads/software/CaptureInstallChrome.exe", "_parent");
                break;
            case "opera":      //opera       
                //window.browserInfo = "opera";
                break;
            case "mozilla":    //Firefox      
              //  window.browserInfo = "firefox";
                break;
            default:
                break;
        }
    },

    //清空统计图层信息
    ClearStaticLayer: function () {

        if (allMap.getLayer("subsetlayer"))
            allMap.removeLayer(allMap.getLayer("subsetlayer"));
        //清空统计图层信息
        if (fileName)
            DCI.Theme.removeStaLayer(fileName);


    }


}