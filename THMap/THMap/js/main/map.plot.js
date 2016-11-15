if (typeof DCI == "undefined") { var DCI = {}; }
DCI.Plot = {
    /**
     * 地图标注功能模块的Html部分
    */
    Html: "<!-- 菜单部分 -->" +
              "<!--我的标注-->" +
              "<div class='foldmenu'>" +
                 "<div class='foldmenu_title' id='foldmenu_title'>行政区域<span class='w_sub'></span><span class='w_add' style='display:none;'></span></div>" +
                  "<div id='foldmenu_reg'>" +
                   "<ul id='foldmenuul_Div'>" +
                      "<li class='foldmenu_li'>思茅区</li>" +
                      "<li class='foldmenu_li'>景东彝族自治县</li>" +
                      "<li class='foldmenu_li'>西盟佤族自治县</li>" +
                      "<li class='foldmenu_li'>澜沧拉祜族自治县</li>" +
                      "<li class='foldmenu_li'>墨江哈尼族自治县</li>" +
                      "<li class='foldmenu_li'>景谷傣族彝族自治县</li>" +
                      "<li class='foldmenu_li'>江城哈尼族彝族自治县</li>" +
                      "<li class='foldmenu_li'>宁洱哈尼族彝族自治县</li>" +
                      "<li class='foldmenu_li'>孟连傣族拉祜族佤族自治县</li>" +
                      "<li class='foldmenu_li'>镇沅彝族哈尼族拉祜族自治县</li>" +
                   "</ul>" +
                  "</div>"+
              "</div>" +
              "<div class='foldmenu'>" +
                 "<div class='foldmenu_title' id='xiaof'>消防站<span class='x_sub' style='display:none;'></span><span class='x_add'></span></div>" +
                  "<div id='foldmenu_xiaofz'>" +
                   "<ul id='xiaof_Div' style='display:none;' >" +
                      "<li class='foldmenu_li'>现役消防站</li>" +
                      "<li class='foldmenu_li'>专职队消防站</li>" +
                      "<li class='foldmenu_li'>微型消防站</li>" +
                   "</ul>" +
                  "</div>" +
              "</div>" +
              "<div class='foldmenu'>" +
                 "<div class='foldmenu_title' id='shuiy'>水源<span class='s_sub' style='display:none;'></span><span class='s_add'></span></div>" +
                  "<div id='foldmenu_shuiy'>" +
                   "<ul id='shuiy_Div' style='display:none;'>" +
                      "<li class='foldmenu_li'>消火栓</li>" +
                      "<li class='foldmenu_li'>消火栓官网</li>" +
                      "<li class='foldmenu_li'>天然水源</li>" +
                   "</ul>" +
                  "</div>" +
              "</div>" +
              "<div class='foldmenu'>" +
                 "<div class='foldmenu_title' id='danw'>重点单位<span class='z_sub' style='display:none;'></span><span class='z_add'></span></div>" +
                  "<div id='foldmenu_danwei'>" +
                   "<ul id='danw_Div' style='display:none;'>" +
                      "<li class='foldmenu_li'>一般单位</li>" +
                      "<li class='foldmenu_li'>其他单位</li>"+
                   "</ul>" +
                  "</div>" +
              "</div>",

              //"<div id='plot_0'>" +
              //    "<!--标注绘制-->" +
              //     "<div class='menu_tool'>" +
              //       "<div class='menu_toolline'>" +
              //       "<ul>" +
              //          "<li class='plottool' onclick='DCI.Plot.drawPlot(\"point\")'><a href='javascript:void(0)' class='addlayerbg'><span class='Pointlabel'></span>点</a></li>" +
              //          "<li class='menupubline'></li>" +
              //          "<li class='plottool' onclick='DCI.Plot.drawPlot(\"polyline\")'><a href='javascript:void(0)' class='downloadlayerbg'><span class='blinelabel'></span>线</a></li>" +
              //          "<li class='menupubline'></li>" +
              //          //"<li class='plottool' onclick='DCI.Plot.drawPlot(\"polygon\")'><a href='javascript:void(0)' class='downloadlayerbg'><span class='bpolylabel'></span>面</a></li>" +
              //          //"<li class='menupubline'></li>" +
              //          "<li class='researchtool'><div><div class='plot_serch_left'><input type='text' class='plot_syn_txt' id='plotToTxt'></div><input type='button' class='plot_syn_bom' id='plotToQuery'></div></li>" +
              //       "</ul>" +
              //       "</div>" +
              //     "</div>" +
              //     "<!--标注表格-->" +
              //     "<div>" +
              //         "<div class='ydph-table-wrap'>" +
              //           "<div class='ydph-talbe-head'>" +
              //               "<table id='plot_label_table' class='table table-bordered'><thead><tr><th class='colspan2'>标注名称</th><th class='colspan5'>类型</th><th class='colspan5'>修改</th><th class='colspan5'>删除</th></tr></thead>" +
              //               "</table>" +
              //            "</div>" +
              //         "</div>" +
              //     "</div>" +

              //"</div>",
    /**
     * 水源气泡窗口
    */
    wininfo_shuiy: "<!--水源气泡窗口-->" +
                   "<div>" +
                       "<div class='ydph-table-wrap'>" +
                         "<div class='ydph-talbe-head'>" +
                             "<table id='plot_label_table' class='table table-bordered'>" +
                                  "<tr><td>水源名称:</td><td>龙生06</td></tr>" +
                                  "<tr><td>消火栓编号:</td><td>5300830750008</td><td>所属管网:</td><td>市政</td></tr>" +
                                  "<tr><td>放置形式:</td><td>室外地上</td><td>管网形式:</td><td>环状</td></tr>" +
                                  "<tr><td>可用状态:</td><td>可用</td><td>管网压力:</td><td>0.0000MPa</td></tr>" +
                             "</table>" +
                          "</div>" +
                       "</div>" +
                       "<div>" +
                         "<a href='javascript:void(0)' style='float:right;margin-left:7px;'>水源删除</a>" +
                         "<a href='javascript:void(0)' style='float:right;margin-left:7px;' onclick='DCI.Plot.info_water()'>水源手册</a>" +
                       "</div>"+
                   "</div>",
    /**
     * 水源手册
    */
    info_shuiy:"<!-- tab导航部分 -->" +
               "<div class='allleft_top' id='topwater'>" +
               "<div class='triangle_div' id='triangle_water'></div>" +
                 "<ul style='margin-left:0px;'>"+
                   "<li id='waterinfo'><span><span class='flss'></span><a href='javascript:void(0)'>水源详情</a></span></li>" +
                   "<li id='waterimg'><span><span class='flss'></span><a href='javascript:void(0);'>方位图</a></span></li>"+
                 "</ul>" +
               "</div>"+
               "<div id='waterinfopage' style='height:100%;margin-top:20px;margin-bottom:5px;'>" +
                       "<div class='ydph-table-wrap'>" +
                         "<div class='ydph-talbe-head'>" +
                             "<table id='plot_label_table' class='table table-bordered'>" +
                                  "<tr><td>编号:</td><td>5300830750008</td><td>名称:</td><td>龙生06</td></tr>" +
                                  "<tr><td>地址:</td><td>龙生路</td><td>所属路段:</td><td></td></tr>" +
                                  "<tr><td>放置形式:</td><td>室外地上</td><td>管辖机构:</td><td>特勤中队</td></tr>" +
                                  "<tr><td>所属管网:</td><td>市政</td><td>取水形式:</td><td>市政供水</td></tr>" +
                                  "<tr><td>管网直径(mm):</td><td>0.0000</td><td>水源动态:</td><td>正常运行</td></tr>" +
                                  "<tr><td>管网压力(Mpa):</td><td>0.0000</td><td>归属:</td><td>市政道路</td></tr>" +
                                  "<tr><td>管网形状:</td><td>环状</td><td>可用状态:</td><td>可用</td></tr>" +
                                  "<tr><td>供水单位:</td><td></td><td>接口形式:</td><td>内扣式接口</td></tr>" +
                                  "<tr><td>审核状态:</td><td>已归档</td><td>联系方式:</td><td></td></tr>" +
                                  "<tr><td>建造日期:</td><td>2014-03-27</td><td>备注:</td><td></td></tr>" +
                             "</table>" +
                          "</div>" +
                       "</div>" +
                       "<div>" +
                         "<a href='javascript:void(0)' style='float:right;margin-left:7px;'>导出Excel</a>" +
                         "<img src='./Content/images/plot/消防水源/东.png' class='img_plot'/>" +
                       "</div>" +
               "</div>"+
               "<div id='waterimgpage' style='height:100%;display:none;margin-top:20px;margin-bottom:5px;'>" +
                       "<div class='ydph-table-wrap'>" +
                         "<div class='ydph-talbe-head'>" +
                             "<table id='plot_label_table' class='table table-bordered'>" +
                                  "<tr><td>东</td><td>南</td></tr>" +
                                  "<tr><td><img src='./Content/images/plot/消防水源/东.png' class='img_plot'/></td><td><img src='./Content/images/plot/消防水源/南.png' class='img_plot'/></td></tr>" +
                                  "<tr><td>西</td><td>北</td></tr>" +
                                  "<tr><td><img src='./Content/images/plot/消防水源/西.png' class='img_plot'/></td><td><img src='./Content/images/plot/消防水源/北.png' class='img_plot'/></td></tr>" +
                             "</table>" +
                          "</div>" +
                       "</div>" +
               "</div>",
    /**
     * 重点单位
    */
    wininfo_danwei: "<!-- tab导航部分 -->" +
               "<div class='allleft_top' id='topdanwei'>" +
               "<div class='triangle_div' id='triangle_danwei'></div>" +
                 "<ul style='margin-left:0px;'>" +
                   "<li id='danwei_situation'><span><span class='flss'></span><a href='javascript:void(0)' style='text-decoration:none;'>灭火单位概况</a></span></li>" +
                   "<li id='danwei_info'><span><span class='flss'></span><a href='javascript:void(0);' style='text-decoration:none;'>单位消防信息</a></span></li>" +
                   "<li id='danwei_plan'><span><span class='flss'></span><a href='javascript:void(0);' style='text-decoration:none;'>相关预案</a></span></li>" +
                 "</ul>" +
               "</div>" +
               "<div id='danwei_situationpage' style='height:100%;margin-top:20px;margin-bottom:5px;'>" +
                       "<div class='ydph-table-wrap'>" +
                         "<div class='ydph-talbe-head'>" +
                             "<table id='plot_label_table' class='table table-bordered'>" +
                                  "<tr><td>单位名称:</td><td>孟连县民族中学</td><td>拼音简称:</td><td>mlxmzzx</td></tr>" +
                                  "<tr><td>单位地址:</td><td>云南省普洱市孟连县马镇城东路12</td><td>单位电话:</td><td>8798721</td></tr>" +
                                  "<tr><td>单位邮政编码:</td><td>665800</td><td>单位电子邮箱:</td><td></td></tr>" +
                                  "<tr><td>单位等级:</td><td></td><td>行政区域:</td><td></td></tr>" +
                                  "<tr><td>单位成立时间:</td><td></td><td>单位性质:</td><td>国有</td></tr>" +
                                  "<tr><td>法人代表或主要负责人:</td><td></td><td>法人电话:</td><td></td></tr>" +
                                  "<tr><td>消防安全负责人:</td><td></td><td>消防安全负责人电话:</td><td></td></tr>" +
                                  "<tr><td>消防安全管理人:</td><td></td><td>消防安全管理人电话:</td><td></td></tr>" +
                                  "<tr><td>专兼职消防管理人:</td><td></td><td>专兼职消防管理人电话:</td><td></td></tr>" +
                                  "<tr><td>单位主属性:</td><td></td><td>单位次属性:</td><td></td></tr>" +
                                  "<tr><td>经济所有制:</td><td></td><td>消防管辖:</td><td></td></tr>" +
                                  "<tr><td>固定资产(万元):</td><td>0</td><td>占有面积(平方):</td><td>0</td></tr>" +
                                  "<tr><td>建筑面积(平方):</td><td>0</td><td>建筑数量:</td><td>0</td></tr>" +
                                  "<tr><td>职工人数(人):</td><td>0</td><td>自动消防设施情况:</td><td>无</td></tr>" +
                                  "<tr><td>地理位置:</td><td></td><td>单位历史沿革:</td><td></td></tr>" +
                             "</table>" +
                          "</div>" +
                       "</div>" +
               "</div>" +
               "<div id='danwei_infopage' style='height:100%;display:none;margin-top:20px;margin-bottom:5px;'>" +
                       "<div class='ydph-table-wrap'>" +
                         "<div class='ydph-talbe-head'>" +
                             "<table id='plot_label_table' class='table table-bordered'>" +
                                  "<tr><td>法人代表或主要负责人:</td><td></td><td>法人电话:</td><td></td></tr>" +
                                  "<tr><td>消防安全负责人:</td><td></td><td>消防安全负责人电话:</td><td></td></tr>" +
                                  "<tr><td>消防安全管理人:</td><td></td><td>消防安全管理人电话:</td><td></td></tr>" +
                                  "<tr><td>建筑结构:</td><td></td><td>使用性质:</td><td></td></tr>" +
                                  "<tr><td>建筑高度(米):</td><td></td><td>建筑层数:</td><td></td></tr>" +
                                  "<tr><td>存储物品:</td><td></td><td>周边毗邻情况:</td><td></td></tr>" +
                                  "<tr><td>消防通道或疏散通道:</td><td></td><td>内部消防设施:</td><td></td></tr>" +
                                  "<tr><td>防火设施:</td><td></td><td>消防控制室信息:</td><td></td></tr>" +
                                  "<tr><td>其他:</td><td></td><td>附件:</td><td></td></tr>" +
                             "</table>" +
                          "</div>" +
                       "</div>" +
                       "<a href='javascript:void(0)' style='float:left;margin-left:5px;margin-top:5px;text-decoration:none;'>重点部门列表</a>" +
                       "<div class='ydph-table-wrap'>" +
                         "<div class='ydph-talbe-head'>" +
                             "<table id='plot_label_table' class='table table-bordered'>"+
                                    "<thead>"+
                                        "<tr><th class='colspan2'>部门名称</th><th class='colspan5'>部门位置</th><th class='colspan5'>建筑结构</th><th class='colspan5'>使用性质</th><th class='colspan5'>耐火等级</th><th class='colspan5'>责任人</th></tr>" +
                                    "</thead>" +
                             "</table>" +
                          "</div>" +
                       "</div>" +
               "</div>"+
               "<div id='danwei_planpage' style='height:100%;display:none;margin-top:20px;margin-bottom:5px;'>" +
                   "暂时没有测试数据"+
               "</div>",
    /**
     * 消防站
    */
    wininfo_xiaofz: "<!--消防站气泡窗口-->" +
                   "<div>" +
                       "<div class='ydph-table-wrap'>" +
                         "<div class='ydph-talbe-head'>" +
                             "<table id='plot_label_table' class='table table-bordered'>" +
                                  "<tr><td>单位名称:</td><td>xxxx</td><td>单位电话:</td><td>xxxx</td></tr>" +
                                  "<tr><td>单位地址:</td><td>xxxxxxx</td><td>传真:</td><td>xxxxxx</td></tr>" +
                                  "<tr><td>主要负责人:</td><td>某某</td><td>单位性质:</td><td></td></tr>" +
                                  "<tr><td>消防力量人数:</td><td>0</td><td>消防力量联系人:</td><td>0</td></tr>" +
                                  "<tr><td>备注:</td><td>0</td><td>附件:</td><td>0</td></tr>" +
                             "</table>" +
                          "</div>" +
                       "</div>" +
                       "<div>" +
                         "<a href='javascript:void(0)' style='float:right;margin-left:7px;'>消防站删除</a>" +
                       "</div>" +
                   "</div>",
    /**
     * 全局变量
    */
    map: null,//地图对象
    graphicslayer: null,//显示图层
    drawtool: null,
    queryTask: null,
    query: null,
    pictype: null,//专题类型 消防站 水源 重点单位
    title: null,
    wininfoType:null,//加载气泡窗口内容类型
    /**
     * 初始化加载部分
    */
    Init: function (map) {
        //dojo.require("esri.toolbars.draw");
        DCI.Plot.map = map;
        DCI.Plot.graphicslayer = new esri.layers.GraphicsLayer();
        DCI.Plot.graphicslayer.id = "plot";
        DCI.Plot.map.addLayer(DCI.Plot.graphicslayer);  //将图层赋给地图
        //DCI.Plot.drawtool = new esri.toolbars.Draw(map, { showTooltips: true });
        DCI.Plot.drawtool = new esri.toolbars.Draw(map);
        DCI.Plot.drawtool.on("draw-end", DCI.Plot.addToMap);

        DCI.Plot.queryTask = new esri.tasks.QueryTask(MapConfig.taskUrl);
        DCI.Plot.query = new esri.tasks.Query();
        DCI.Plot.query.returnGeometry = true;
        DCI.Plot.query.outFields = ["NAME"];
        DCI.Plot.InitEvent();
    },
    InitEvent: function () {
        //行政区域
        $("#foldmenu_title").bind("click", function () {
            if ($('#foldmenuul_Div').is(':hidden'))//隐藏          
            {
                $("#foldmenuul_Div").show();
                $(".w_sub").css({ display: "block" });
                $(".w_add").css({ display: "none" });
            }
            else {//可见
                $("#foldmenuul_Div").hide();
                $(".w_sub").css({ display: "none" });
                $(".w_add").css({ display: "block" });
            }
        });
        //消防站
        $("#xiaof").bind("click", function () {
            if ($('#xiaof_Div').is(':hidden'))//隐藏          
            {
                $("#xiaof_Div").show();
                $(".x_sub").css({ display: "block" });
                $(".x_add").css({ display: "none" });
            }
            else {//可见
                $("#xiaof_Div").hide();
                $(".x_sub").css({ display: "none" });
                $(".x_add").css({ display: "block" });
            }
        });
        //水源
        $("#shuiy").bind("click", function () {
            if ($('#shuiy_Div').is(':hidden'))//隐藏          
            {
                $("#shuiy_Div").show();
                $(".s_sub").css({ display: "block" });
                $(".s_add").css({ display: "none" });
            }
            else {//可见
                $("#shuiy_Div").hide();
                $(".s_sub").css({ display: "none" });
                $(".s_add").css({ display: "block" });
            }
        });
        //重点单位
        $("#danw").bind("click", function () {
            if ($('#danw_Div').is(':hidden'))//隐藏          
            {
                $("#danw_Div").show();
                $(".z_sub").css({ display: "block" });
                $(".z_add").css({ display: "none" });
            }
            else {//可见
                $("#danw_Div").hide();
                $(".z_sub").css({ display: "none" });
                $(".z_add").css({ display: "block" });
            }
        });
        //标绘---图片标注 选择监听事件
        $("#foldmenu_reg li").bind("click", function () {
            var text = $(this).text();
            DCI.Plot.query.where = "NAME like '%" + text + "%'";
            DCI.Plot.queryTask.execute(DCI.Plot.query, showResults);
            function showResults(results) {
                DCI.Plot.graphicslayer.clear();
                var resultCount = results.features.length;
                for (var i = 0; i < resultCount; i++) {
                    //查询结果定位到地图上
                    var university;
                    university = results.features[i];
                    var symbol = new esri.symbol.SimpleFillSymbol(
                           esri.symbol.SimpleFillSymbol.STYLE_SOLID,
                           new esri.symbol.SimpleLineSymbol(
                                          esri.symbol.SimpleLineSymbol.STYLE_DASHDOT,
                                          new dojo.Color([255, 0, 0]), 2),
                                          new dojo.Color([255, 255, 0, 0.2])
                             );
                    university.setSymbol(symbol);
                    DCI.Plot.graphicslayer.add(university);
                }
                DCI.Plot.map.setLevel(DCI.Plot.map.getMinZoom());
                DCI.Plot.map.centerAt(university.geometry.getCentroid());
            }
        });
        //水源 li
        $("#foldmenu_shuiy li").bind("click", function () {
            DCI.Plot.wininfoType = 1;
            DCI.Plot.title = $(this).text();
            switch ($(this).index()) {
                case 0://消火栓
                    DCI.Plot.pictype = "./Content/images/plot/消防水源/消火栓42.png";
                    break;
                case 1://消火栓官网
                    DCI.Plot.pictype = "./Content/images/plot/消防水源/消防水鹤42.png";
                    break;
                case 2://天然水源
                    DCI.Plot.pictype = "./Content/images/plot/消防水源/消防水池42.png";
                    break;
            }
            DCI.Plot.drawPlot("point");
        });
        //重点单位 li
        $("#foldmenu_danwei li").bind("click", function () {
            DCI.Plot.wininfoType = 2;
            DCI.Plot.title = $(this).text();
            switch ($(this).index()) {
                case 0://一般单位
                    DCI.Plot.pictype = "./Content/images/plot/重点单位/重点单位.png";
                    break;
                case 1://其他单位
                    DCI.Plot.pictype = "./Content/images/plot/重点单位/重点单位2.png";
                    break;
            }
            DCI.Plot.drawPlot("point");
        });
        //消防站 li
        $("#foldmenu_xiaofz li").bind("click", function () {
            DCI.Plot.wininfoType = 0;
            DCI.Plot.title = $(this).text();
            switch ($(this).index()) {
                case 0://现役消防站
                    DCI.Plot.pictype = "./Content/images/plot/消防力量/现役.png";
                    break;
                case 1://专职队消防站
                    DCI.Plot.pictype = "./Content/images/plot/消防力量/专职、微型消防.png";
                    break;
                case 2://微型消防站
                    DCI.Plot.pictype = "./Content/images/plot/消防力量/微型消防站.png";
                    break;
            }
            DCI.Plot.drawPlot("point");
        });




    },
    drawPlot: function (type) {
        DCI.Plot.map.setMapCursor("crosshair");
        switch (type) {
            case "point":
                DCI.Plot.drawtool.activate(esri.toolbars.Draw.POINT);
                break;
            case "polyline":
                DCI.Plot.drawtool.lineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 160, 122]), 3);
                DCI.Plot.drawtool.activate(esri.toolbars.Draw.POLYLINE);
                break;
        }
    },
    addToMap: function (evt) {
        var symbol;
        switch (evt.geometry.type) {
            case "point":
            case "multipoint":
                //symbol = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 8, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 69, 0]), 2), new dojo.Color([255, 255, 255, 1]));
                symbol = new esri.symbol.PictureMarkerSymbol(DCI.Plot.pictype, 32, 32)
                DCI.Plot.map.centerAt(evt.geometry);
                DCI.Plot.map.infoWindow.setTitle(DCI.Plot.title);
                if (DCI.Plot.wininfoType == 0) {
                    DCI.Plot.map.infoWindow.resize(350, 200);
                    DCI.Plot.map.infoWindow.setContent(DCI.Plot.wininfo_xiaofz);
                }
                else if (DCI.Plot.wininfoType == 1) {//水源
                    DCI.Plot.map.infoWindow.resize(350, 200);
                    DCI.Plot.map.infoWindow.setContent(DCI.Plot.wininfo_shuiy);
                }
                else if (DCI.Plot.wininfoType == 2) {//重点单位
                    DCI.Plot.map.infoWindow.resize(400, 550);
                    DCI.Plot.map.infoWindow.setContent(DCI.Plot.wininfo_danwei);
                    //搜索模块的顶端部分的切换事件
                    $("#topdanwei li").bind("click", function () {
                        var keyword = $(this).attr("id");
                        //三角形标识切换
                        switch ($(this).index()) {
                            case 0://单位概况
                                $("#triangle_danwei").css("left", "50px");
                                break;
                            case 1://消防信息
                                $("#triangle_danwei").css("left", "165px");
                                break;
                            case 2://相关预案
                                $("#triangle_danwei").css("left", "260px");
                                break;
                        }
                        DCI.Plot.onSelectdanweiTab(keyword);
                    });
                }
                setTimeout(function () {
                    DCI.Plot.map.infoWindow.show(evt.geometry);
                }, 500);
                break;
            case "polyline":
                symbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 160, 122]), 3);
                break;
            default:
                symbol = DCI.Plot.drawtool.fillSymbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 160, 122]), 2), new dojo.Color([255, 255, 255, 0.5]));
                break;
        }
        var graphic = new esri.Graphic(evt.geometry, symbol);
        DCI.Plot.graphicslayer.add(graphic);
        DCI.Plot.drawtool.deactivate();
        DCI.Plot.map.setMapCursor("default");
    },
    /**
     * 水源手册
    */
    info_water: function () {
        DCI.Plot.map.infoWindow.resize(350, 550);
        DCI.Plot.map.infoWindow.setContent(DCI.Plot.info_shuiy);
        //搜索模块的顶端部分的切换事件
        $("#topwater li").bind("click", function () {
            var keyword = $(this).attr("id");
            //三角形标识切换
            switch ($(this).index()) {
                case 0://形状选择
                    $("#triangle_water").css("left", "48px");
                    break;
                case 1://文本输入
                    $("#triangle_water").css("left", "125px");
                    break;
            }
            DCI.Plot.onSelectTab(keyword);
        });
    },
    onSelectTab: function (keyword) {
        if (keyword == "waterinfo" || keyword == null) {
            DCI.Plot.map.infoWindow.resize(350, 550);
            $("#waterinfopage").css({ display: "block" });
            $("#waterimgpage").css({ display: "none" });
        }
        else if (keyword == "waterimg") {
            DCI.Plot.map.infoWindow.resize(350, 430);
            $("#waterinfopage").css({ display: "none" });
            $("#waterimgpage").css({ display: "block" });
        }
    },
    onSelectdanweiTab: function (keyword) {
        if (keyword == "danwei_situation" || keyword == null) {
            //setTimeout(function () {
                DCI.Plot.map.infoWindow.resize(400, 500);
            //}, 500);
            $("#danwei_situationpage").css({ display: "block" });
            $("#danwei_infopage").css({ display: "none" });
            $("#danwei_planpage").css({ display: "none" });
        }
        else if (keyword == "danwei_info") {
            //setTimeout(function () {
                DCI.Plot.map.infoWindow.resize(400, 430);
            //}, 500);
            $("#danwei_situationpage").css({ display: "none" });
            $("#danwei_infopage").css({ display: "block" });
            $("#danwei_planpage").css({ display: "none" });
        }
        else if (keyword == "danwei_plan") {
            //setTimeout(function () {
                DCI.Plot.map.infoWindow.resize(400, 430);
            //}, 500);
            $("#danwei_situationpage").css({ display: "none" });
            $("#danwei_infopage").css({ display: "none" });
            $("#danwei_planpage").css({ display: "block" });
        }
    },




}