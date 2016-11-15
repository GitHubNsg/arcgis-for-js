if (typeof DCI == "undefined") { var DCI = {}; }
DCI.Well = {
    Html:"<div id='plot_0'>" +
                  "<!--标注绘制-->" +
                   "<div class='menu_tool'>" +
                     "<div class='menu_toolline'>" +
                     "<ul>" +
                        "<li class='plottool' onclick='DCI.Well.drawPlot(\"point\")'><a href='javascript:void(0)' class='addlayerbg'><span class='Pointlabel'></span>添加</a></li>" +
                        "<li class='menupubline'></li>" +
                        "<li class='plottool' onclick='DCI.Well.exportGrid(\"导出数据\",\"plot_label_table\")'><a href='javascript:void(0)' class='addlayerbg'><span class='address_uploadlabel'></span>导出</a></li>" +
                        "<li class='menupubline'></li>" +
                        "<li class='researchtool'><div><div class='plot_serch_left'><input type='text' class='plot_syn_txt' id='plotToTxt'></div><input type='button' class='plot_syn_bom' id='plotToQuery'></div></li>" +
                     "</ul>" +
                     "</div>" +
                   "</div>" +
                   "<!--标注表格-->" +
                   "<div>" +
                       "<div class='ydph-table-wrap'>" +
                         "<div class='ydph-talbe-head'>" +
                             "<table id='plot_label_table' class='table table-bordered'><thead><tr><th class='colspan2'>名称</th><th class='colspan5'>类型</th><th class='colspan5'>修改</th><th class='colspan5'>删除</th><th class='colspan5' style='display:none;'>地址</th><th class='colspan5' style='display:none;'>所属区域</th><th class='colspan5' style='display:none;'>OBJECTID</th><th class='colspan5' style='display:none;'>井号</th><th class='colspan5' style='display:none;'>井队</th><th class='colspan5' style='display:none;'>井深</th><th class='colspan5' style='display:none;'>日期</th></tr></thead>" +
                             "</table>" +
                          "</div>" +
                       "</div>" +
                   "</div>" +

              "</div>",
    map: null,//地图对象
    graphicslayer: null,//显示搜索结果的图层
    curGraphic: null,
    addOrsave: null,//辨别修改或者添加 0添加 1修改
    drawtool: null,
    geometry:null,
    Init: function (map) {
        DCI.Well.map = map;
        DCI.Well.graphicslayer = new esri.layers.GraphicsLayer();
        DCI.Well.map.addLayer(DCI.Well.graphicslayer);  //将图层赋给地图 
        DCI.Well.drawtool = new esri.toolbars.Draw(map);
        DCI.Well.drawtool.on("draw-end", DCI.Well.addToMap);
        dojo.connect(DCI.Well.graphicslayer, "onClick", function (event) {
            DCI.Well.curGraphic = event.graphic;
            if (event.graphic.attributes)
            DCI.Well.common2ShowGraphic(event.graphic, 0);
        });
        dojo.connect(DCI.Well.graphicslayer, "onGraphicAdd", function (graphic) {
            DCI.Well.curGraphic = graphic;
        });
        $("#plotToQuery").bind("click", function () {
            var keyword = $("#plotToTxt").val();
            DCI.Well.InitSde(keyword);
        });
        $("#plotToTxt").bind("keypress", function (event) {
            if (event.keyCode == "13") {
                var keyword = $("#plotToTxt").val();
                DCI.Well.InitSde(keyword);
            }
        })


    },
    /**
     * 点击Graphic以及点击标绘Plot公用的显示气泡窗口函数 type 0代表查看 1代表修改
    */
    common2ShowGraphic: function (graphic, type) {
        if (graphic) {
            switch (graphic.geometry.type) {
                case "point"://点
                    pt = graphic.geometry;
                    break;
                //case "polyline"://线
                //    pt = graphic.geometry.getPoint(0, 0);
                //    break;
                //case "polygon"://面
                //    pt = graphic.geometry.getExtent().getCenter();
                //    break;
                //default:
            }
            if (type == 1) {
                var htmlstr = DCI.Well.getInitHtmlCon(graphic.attributes.title, graphic.attributes.type, graphic.attributes.address, graphic.attributes.region, graphic.attributes.OBJECTID, graphic.attributes.ID, graphic.attributes.team, graphic.attributes.depth, graphic.attributes.date);
            }
            else if (type == 0) {
                var htmlstr = graphic.attributes.content;
            }
            DCI.Well.map.centerAt(pt);
            DCI.Well.map.infoWindow.resize(450, 210);
            DCI.Well.map.infoWindow.setTitle(graphic.attributes.title);
            DCI.Well.map.infoWindow.setContent(htmlstr);
            setTimeout(function () {
                DCI.Well.map.infoWindow.show(pt);
            }, 500);

            if (type == 1) {
                var objselect = document.getElementById('updateType');
                if (graphic.attributes.type == "测井") {

                    //$("#updateType").children('option:selected').val();
                    objselect.options[0].selected = true;
                }
                else {
                    objselect.options[1].selected = true;
                }
            }

        }
    },
    InitSde: function (keyword) {
        esriConfig.defaults.io.proxyUrl = getRootPath() + "proxy.ashx";
        esriConfig.defaults.io.alwaysUseProxy = true;
        var query = new esri.tasks.Query();
        query.returnGeometry = true;
        query.outFields = ["*"];
        //query.outFields = ["*"];
        query.outSpatialReference = { "wkid": 4326 };
        if (keyword == "")
            query.where = "1=1";
        else
            query.where = "name like '%" + keyword + "%'";
        var queryTask = new esri.tasks.QueryTask(MapConfig.sdeURL);
        queryTask.execute(query, DCI.Well.navInfo);
    },
    /**
     * 获取气泡窗口初始化时的界面标记内容 type 0代表添加 1代表修改
    */
    getInitHtmlCon: function (name, type, address, region, objectid,id,team,depth,date) {
        var htmlstr2 = "<div><div class='ydph-table-wrap'>" +
          "<div class='ydph-talbe-head'>" +
              "<table id='well_info_table' class='table table-bordered'>" +
                   "<tr><td style='width:10%;'>名称:</td><td><input type='text' value='" + name + "' id='update_name'/></td><td style='width:15%;'>类型:</td><td><select id='updateType' style='font-size:13px;float:left;height:22px;'><option value ='0'>测井</option><option value ='1'>录井</option></select></td></tr>" +
                   "<tr><td>地址:</td><td><input type='text' value='" + address + "' id='update_address'/></td><td>所属区域:</td><td><input type='text' value='" + region + "' id='update_region'/></td></tr>" +
                   "<tr><td style='width:10%;'>井号:</td><td><input type='text' value='" + id + "' id='update_id'/></td><td style='width:15%;'>井队:</td><td><input type='text' value='" + team + "' id='update_team'/></td></tr>" +
                   "<tr><td>井深:</td><td><input type='text' value='" + depth + "' id='update_depth'/></td><td>日期:</td><td><input type='text' value='" + date + "' id='update_date'/></td></tr>" +
              "</table>" +
           "</div>" +
        "</div>";
        if (DCI.Well.addOrsave == 0) {
            htmlstr2 += "<a href='javascript:void(0);' class='plot_a_del' onClick='DCI.Well.savePlotInfo(\"all\")'>添加</a>";
            htmlstr2 += "<a href='javascript:void(0);' class='plot_a_del' onClick='DCI.Well.cancelInfo()'>取消</a>";
        }
        else if (DCI.Well.addOrsave == 1) {
            htmlstr2 += "<a href='javascript:void(0);' class='plot_a_del' onClick='DCI.Well.savePlotInfo(\"" + objectid + "\")'>保存</a>";
        }
        htmlstr2 += "</div>";
        return htmlstr2;
    },
    getInitHtml: function (name, type, address, region,id,team,depth,date) {
        var htmlstr2 = "<div class='ydph-table-wrap'>" +
          "<div class='ydph-talbe-head'>" +
              "<table id='well_info_table' class='table table-bordered'>" +
                   "<tr><td style='width:10%;'>名称:</td><td>" + name + "</td><td style='width:15%;'>类型:</td><td>" + type + "</td></tr>" +
                   "<tr><td>地址:</td><td>" + address + "</td><td>所属区域:</td><td>" + region + "</td></tr>" +
                   "<tr><td style='width:10%;'>井号:</td><td>" + id + "</td><td style='width:15%;'>井队:</td><td>" + team + "</td></tr>" +
                   "<tr><td>井深:</td><td>" + depth + "</td><td>日期:</td><td>" + date + "</td></tr>" +
              "</table>" +
           "</div>" +
        "</div>";
        return htmlstr2;
    },
    /**
     * 保存标记信息
    */
    savePlotInfo: function (objectid) {
        var features = [];
        var rec = {};
        rec.attributes = {};
        if (objectid == "all") {
            rec.geometry = DCI.Well.geometry;
            //rec.attributes["Point"]
        }
        else {
            rec.attributes["OBJECTID"] = parseInt(objectid);
        }
        rec.attributes["name"] = $("#update_name").val();
        rec.attributes["type"] = $("#updateType").children('option:selected').val();
        rec.attributes["address"] = $("#update_address").val();
        rec.attributes["region"] = $("#update_region").val();
        rec.attributes["ID"] = $("#update_id").val();
        rec.attributes["team"] = $("#update_team").val();
        rec.attributes["depth"] = $("#update_depth").val();
        rec.attributes["date"] = $("#update_date").val();
        features.push(rec);
        var feats = JSON.stringify(features);
        var params = { features: feats, f: "pjson", featureserverurl: MapConfig.sdeURL };
        if (objectid == "all") {
            $.ajax({
                type: "post",
                //dataType: "json",
                url: getRootPath() + "handler/AddFeatureHandler.ashx",
                data: params,
                //async: false,//同步
                success: function (response, textStatus) {
                    var ret = JSON.parse(response);
                    if (ret.addResults[0].success) {
                        promptdialog("提示", "添加成功!");
                        DCI.Well.InitSde("");
                        DCI.Well.map.infoWindow.hide();
                    } else {
                        promptdialog("提示", "添加失败!");
                    }
                },
                error: function (e) {
                    var error = e;
                    promptdialog("提示", "响应超时!");
                }
            });
        }
        else {
            $.ajax({
                type: "post",
                //dataType: "json",
                url: getRootPath() + "handler/UpdateFeatureHandler.ashx",
                data: params,
                //async: false,//同步
                success: function (response, textStatus) {
                    var ret = JSON.parse(response);
                    if (ret.updateResults[0].success) {
                        promptdialog("提示", "更新成功!");
                        DCI.Well.InitSde("");
                        DCI.Well.map.infoWindow.hide();
                    } else {
                        promptdialog("提示", "更新失败!");
                    }
                },
                error: function (e) {
                    var error = e;
                    promptdialog("提示", "响应超时!");
                }
            });
        }

    },
    navInfo: function (results) {
        DCI.Well.graphicslayer.clear();
        var tableStr = "";
        $("#plot_label_table tbody").html("");
        var sms = new esri.symbol.PictureMarkerSymbol(getRootPath() + "Content/images/plot/point1.png", 11, 13);
        for (var i = 0; i < results.features.length; i++) {
            if (results.features[i].attributes.type == "0")
                var TYPE = '测井';
            else
                var TYPE = '录井';
            var htmlstr2 = DCI.Well.getInitHtml(results.features[i].attributes.name, TYPE, results.features[i].attributes.address, results.features[i].attributes.region, results.features[i].attributes.ID, results.features[i].attributes.team, results.features[i].attributes.depth, results.features[i].attributes.date);
            var attr = { "title": results.features[i].attributes.name, "type": TYPE, "address": results.features[i].attributes.address, "region": results.features[i].attributes.region, "OBJECTID": results.features[i].attributes.OBJECTID, "ID": results.features[i].attributes.ID, "team": results.features[i].attributes.team, "depth": results.features[i].attributes.depth, "date": results.features[i].attributes.date, "content": htmlstr2 };
              var highlightGraphic = new esri.Graphic(results.features[i].geometry, sms, attr);
              highlightGraphic.id = results.features[i].attributes.OBJECTID;
              DCI.Well.graphicslayer.add(highlightGraphic);
              tableStr = tableStr + "<tr>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;cursor: pointer;'>" + results.features[i].attributes.name + "</a></td>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;cursor: pointer;'>" + TYPE + "</a></td>" +
                        "<td><a style='color:blue;text-decoration:underline;font-size:13px;cursor: pointer;'>修改</a></td>" +
                        "<td><a style='color:blue;text-decoration:underline;font-size:13px;cursor: pointer;'>删除</a></td>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + results.features[i].attributes.address + "</a></td>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + results.features[i].attributes.region + "</a></td>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + results.features[i].attributes.OBJECTID + "</a></td>" +

                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + results.features[i].attributes.ID + "</a></td>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + results.features[i].attributes.team + "</a></td>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + results.features[i].attributes.depth + "</a></td>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + results.features[i].attributes.date + "</a></td>" +
                       "</tr>";
        }
        $("#plot_label_table").append(tableStr);
        $('#plot_label_table tr').find('td:eq(4)').hide();//隐藏标绘表格的图层地址字段列
        $('#plot_label_table tr').find('td:eq(5)').hide();//隐藏标绘表格的所属区域字段列
        $('#plot_label_table tr').find('td:eq(6)').hide();//隐藏标绘表格的id字段列

        $('#plot_label_table tr').find('td:eq(7)').hide();//隐藏标绘表格的图层地址字段列
        $('#plot_label_table tr').find('td:eq(8)').hide();//隐藏标绘表格的所属区域字段列
        $('#plot_label_table tr').find('td:eq(9)').hide();//隐藏标绘表格的id字段列
        $('#plot_label_table tr').find('td:eq(10)').hide();//隐藏标绘表格的id字段列
        DCI.Well.plot_table_onclick();

    },
    /**
     * 标绘表格点击事件
    */
    plot_table_onclick: function () {
        $("#plot_label_table td").click(function () {
            var trSeq = $(this).parent().parent().find("tr").index($(this).parent());//选中的哪行
            var id = $("#plot_label_table tr:gt(0):eq(" + trSeq + ") td:eq(6)").text();//获取选中行的第八列值
            var tdSeq = $(this).parent().find("td").index($(this));//选中哪一列
            switch (tdSeq) {
                case 0://标绘名称
                case 1://标绘类型
                    var graphics = DCI.Well.graphicslayer.graphics;
                    var graphic = null;
                    for (var j = 0; j < graphics.length; j++) {
                        if (graphics[j].id == id) {
                            graphic = graphics[j];
                            break;
                        }
                    }
                    DCI.Well.common2ShowGraphic(graphic, 0);
                    break;
                case 2://修改
                    var graphics = DCI.Well.graphicslayer.graphics;
                    var graphic = null;
                    for (var j = 0; j < graphics.length; j++) {
                        if (graphics[j].id == id) {
                            graphic = graphics[j];
                            break;
                        }
                    }
                    //DCI.Plot.curGraphic = graphic;
                    //DCI.Plot.plotID = graphic.attributes.plotID;
                    DCI.Well.addOrsave = 1;
                    DCI.Well.common2ShowGraphic(graphic, 1);
                    break;
                case 3://删除
                    DCI.Well.plotDelete(id);
                    break;
                default:
            }

        })
    },
    plotDelete: function (id) {
        var dialog = jDialog.confirm(
             "确定需要删除吗?",
             {
                 handler: function (button, dialog) {
                     //var record = DCI.AddressMatch.featurerecord;
                     var objectid = parseInt(id);
                     var params = { OBJECTID: objectid, featureserverurl: MapConfig.sdeURL };
                     $.ajax({
                         type: "post",
                         //dataType: "json",
                         url: getRootPath() + "handler/DeleteFeatureHandler.ashx",
                         data: params,
                         //async: false,//同步
                         success: function (response, textStatus) {
                             var ret = JSON.parse(response);
                             if (ret.success) {
                                 promptdialog("提示", "删除成功!");
                                 DCI.Well.InitSde("");
                                 DCI.Well.map.infoWindow.hide();
                             } else {
                                 promptdialog("提示", "删除失败!");
                             }
                         },
                         error: function (e) {
                             var error = e;
                             promptdialog("提示", "响应超时!");
                         }
                     });
                     dialog.close();
                 }
             },
             {
                 handler: function (button, dialog) {
                     dialog.close();
                 }
             },
             {
                 title: "提示信息",
                 modal: true,         // 非模态，即不显示遮罩层
             }
         );
    },
    /**
     * 绘制函数
    */
    drawPlot: function (type) {
        //if (DCI.Well.map)
        //    DCI.Well.map.meatureTool.deactivate();
        //if (DCI.Plot.currLayerId == null) {
        //    promptdialog("提示信息", "请点击选择要添加标绘的图层!");
        //    return;
        //}
        //DCI.Plot.plotID = null;
        DCI.Well.InitSde("");
        DCI.Well.map.infoWindow.hide();
        DCI.Well.addOrsave = 0;
        //启用绘图工具 
        switch (type) {
            case "point":
                {
                    DCI.Well.map.setMapCursor('crosshair');
                    DCI.Well.drawtool.activate(esri.toolbars.Draw.POINT);
                    break;
                }
        };
    },
    addToMap: function (evt) {
        var symbol;
        switch (evt.geometry.type) {
            case "point":
            case "multipoint":
                symbol = new esri.symbol.PictureMarkerSymbol(getRootPath() + "Content/images/plot/point1.png", 11, 13);
                DCI.Well.map.centerAt(evt.geometry);
                var htmlstr = DCI.Well.getInitHtmlCon("", "", "", "", "", "", "", "", "");
                //DCI.Well.map.infoWindow.setTitle(DCI.Plot.title);
                //if (DCI.Plot.wininfoType == 0) {
                DCI.Well.map.infoWindow.resize(450, 210);
                    DCI.Well.map.infoWindow.setContent(htmlstr);
                //}
                setTimeout(function () {
                    DCI.Well.map.infoWindow.show(evt.geometry);
                }, 500);
                break;
        }
        var graphic = new esri.Graphic(evt.geometry, symbol);
        DCI.Well.geometry = evt.geometry;
        DCI.Well.graphicslayer.add(graphic);
        DCI.Well.drawtool.deactivate();
        DCI.Well.map.setMapCursor("default");
    },
    cancelInfo: function () {
        DCI.Well.map.infoWindow.hide();
        DCI.Well.graphicslayer.remove(DCI.Well.curGraphic);
    },
    //统计表格导出
    exportGrid: function (filename, id) {
        var data = "";
        var rows = $("#" + id + " tr").length;//表格行数
        var cols = $("#" + id + " th").length;//表格列数
        //拼接表头的字段值，比如 地类名称,地类编号,地块数量,选区内图斑面积,选区内图斑地类面积,
        $("#" + id + " th").each(function () {
            data += $(this).text() + ",";
        });
        data = data.substring(0, data.length - 1);
        data = data + '\n';
        for (var i = 0; i < rows - 1; i++) {
            for (var j = 0; j < cols; j++) {
                data += $("#" + id + " tr:gt(0):eq(" + i + ") td:eq(" + j + ")").text();
                if (j != cols - 1)
                    data = data + ',';
            }
            data = data + '\n';
        }
        var PARAMS = { data: escape(data), filename: escape(filename) };
        var temp = document.createElement("form");
        temp.action = getRootPath() + "handler/GridOut.ashx";
        temp.method = "post";
        temp.style.display = "none";
        for (var x in PARAMS) {
            var opt = document.createElement("textarea");
            opt.name = x;
            opt.value = PARAMS[x];
            temp.appendChild(opt);
        }
        document.body.appendChild(temp);
        temp.submit();
        return temp;
    },



}