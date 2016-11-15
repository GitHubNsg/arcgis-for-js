dojo.require("dojox.charting.Chart2D");
dojo.require("dojox.charting.themes.PlotKit.blue");
dojo.require("dojox.charting.themes.PlotKit.green");
dojo.require("dojox.charting.themes.PlotKit.purple");
dojo.require("dojox.charting.action2d.Highlight");
dojo.require("dojox.charting.action2d.Tooltip");

dojo.declare("ChartGraphics", esri.Graphic, {
    constructor: function (options) {
        this._map = options.map;
        this.id = options.id;
        this._series = options.series || [];
        this.size = options.size || 50;
        this._type = options.type || "Pie";
        this.parentDiv = "";
        this.bindGraphic = options.bindGraphic || null;
        this.sum = options.sum;
        this.title = options.title || "人口比例图";
        this.style = options.style;
    },
    // 重构esri/graphic方法
    _getMap: function () {
        var gl = this._graphicsLayer;
        return gl._map;
    },
    _show: function () {
        if (this.parentDiv) {
            dojo.style(this.parentDiv, "display", "");
        }
    },
    _hide: function () {
        if (this.parentDiv) {
            dojo.style(this.parentDiv, "display", "none");
        }
    },
    _draw: function (divContainer) {
        var map = this._map;
        var graphic = this.bindGraphic;
        var type = this._type;
        var series = this._series;
        var id = this.id;
        var title = this.title;

        var _chart = new dojox.charting.Chart2D(divContainer);
        var _themes;
        if (this.style == 0) {
            _themes = dojox.charting.themes.PlotKit.base;
        }
        else if (this.style == 1) {
            _themes = dojox.charting.themes.PlotKit.blue;
        }
        else if (this.style == 2) {
            _themes = dojox.charting.themes.PlotKit.green;
        }
        else if (this.style == 3) {
            _themes = dojox.charting.themes.PlotKit.purple;
        }
        _themes.chart.fill = "transparent";
        _themes.chart.stroke = "transparent";
        _themes.plotarea.fill = "transparent";
        _chart.setTheme(_themes);
        switch (type) {
            case "Pie": {//饼状图
                _chart.addPlot("default", {
                    type: type,
                    labels: false,
                    maxPieSize: 80
                });
                _chart.addSeries(this.id, series, { stroke: { width: 1 } });
                break;
            }
            case "StackedColumns": {//柱状堆积图
                _chart.addPlot("default", {
                    type: type,
                    labels: false,
                    markers: true,
                    gap: 2
                });
                break;
            }
            case "Lines": {//线状图
                _chart.addPlot("default", {
                    type: type,
                    labels: false,
                    markers: true,
                    radius: 1,
                    tension: "X"
                });
                //_chart.addAxis("y", { vertical: true, fixLower: "major", fixUpper: "major", includeZero: true });
                var serArr = new Array();
                for (var i = 0; i < series.length; i++) {
                    serArr.push(parseFloat(series[i].y));
                }
                _chart.addSeries(id, serArr, { stroke: { width: 1 } });
                break;
            }
            default: {//柱状图
                _chart.addPlot("default", {
                    type: "ClusteredColumns",
                    labels: false
                });
                //_chart.addAxis("x");
                _chart.addAxis("y", { vertical: true, fixLower: "major", fixUpper: "major", includeZero: true, font: "normal normal 0px Tahoma" });
                for (var i = 0; i < series.length; i++) {
                    _chart.addSeries(i, [series[i]], { stroke: { width: 1 } });
                }
                break;
            }
        }
        //_chart.addSeries(this.id, series, { stroke: { width: 1 } });
        //效果
        new dojox.charting.action2d.Highlight(_chart, "default"/*, {highlight: "lightskyblue"}*/);
        //            new Tooltip(_chart, "default");
        //            new MoveSlice(_chart, "default");
        //添加plot的事件
        _chart.connectToPlot("default", divContainer, function (args) {
            switch (args.type) {
                case "onclick": {
                    //map.graphics.clear();
                    var _gExtent = graphic.geometry.getExtent();
                    //var _gCenter = _gExtent.getCenter();
                    var _gCenter = graphic.geometry;
                    var _title = graphic.attributes.NAME;

                    allMap.infoWindow.show(_gCenter);

                    var _content = dojo.doc.createElement("div"),
                        _detail = dojo.doc.createElement("div"),
                        _legend = dojo.doc.createElement("div");

                    dojo.style(_detail, {
                        "width": "300px",
                        "height": "300px"
                    });
                    _content.appendChild(_detail)
                        .appendChild(_legend);

                    allMap.infoWindow.setTitle(_title);
                    allMap.infoWindow.setContent(_content);

                    var _detailedChart = new dojox.charting.Chart2D(_detail, {
                        title: title,//"人口比例图",
                        titlePos: "top",
                        titleGap: 25,
                        titleFont: "normal normal bold 11pt Tahoma",
                        titleFontColor: "orange"
                    });
                    _detailedChart.setTheme(_themes);
                    switch (type) {
                        case "Pie": {//饼状图
                            _detailedChart.addPlot("default", {
                                type: type,
                                labels: true,
                                font: "normal normal bold 10pt Tahoma",
                                fontColor: "white",
                                labelOffset: 50
                            });
                            _detailedChart.addSeries(id, series, { stroke: { width: 1 } });
                            break;
                        }
                        case "StackedColumns": {//柱状堆积图
                            _detailedChart.addPlot("default", {
                                type: type,
                                labels: true,
                                markers: true,
                                gap: 2
                            });
                            break;
                        }
                        case "Lines": {//线状图
                            _detailedChart.addPlot("default", {
                                type: type,
                                labels: true,
                                markers: true,
                                radius: 1,
                                tension: "X"
                            });
                            _detailedChart.addAxis("y", { vertical: true, fixLower: "major", fixUpper: "major" });
                            var serArr = new Array();
                            for (var i = 0; i < series.length; i++) {
                                serArr.push(parseFloat(series[i].y));
                            }
                            _detailedChart.addSeries(id, serArr, { stroke: { width: 1 } });
                            break;
                        }
                        default: {//柱状图
                            _detailedChart.addPlot("default", {
                                type: "ClusteredColumns",
                                labels: true,
                                labelStyle: "outside",
                                gap: 3
                            });
                            //var myLabelFunc = function (text, value, precision) {
                            //    return text + " my unit";
                            //};
                            //_detailedChart.addAxis("x", { labelFunc: myLabelFunc });
                            _detailedChart.addAxis("y", { vertical: true, fixLower: "major", fixUpper: "major", includeZero: true });
                            for (var i = 0; i < series.length; i++) {
                                _detailedChart.addSeries(i, [series[i]], { stroke: { width: 1 } });
                            }
                            break;
                        }
                    }
                    //_detailedChart.addSeries(id, series, { stroke: { width: 1 } });
                    //效果
                    new dojox.charting.action2d.Highlight(_detailedChart, "default"/*, {highlight: "lightskyblue"}*/);
                    new dojox.charting.action2d.Tooltip(_detailedChart, "default");
                    _detailedChart.render();
                    //new Legend({chart: _detailedChart}, _legend);
                    allMap.infoWindow.resize(330, 300);
                    //map.infoWindow.show(_gCenter);

                    //map.setExtent(_gExtent.expand(2));
                    var _highSymbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
                        new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
                            new esri.Color([0, 255, 255]),
                            3
                        ),
                        new esri.Color([100, 100, 100, 0])
                    );
                    allMap.graphics.add(new esri.Graphic(graphic.geometry, _highSymbol));
                    break;
                }
                case "onmouseover": {
                    /*var shape = args.shape;
                    console.log(shape);
                    break;*/
                }
                case "onmouseout": {
                    //TODO...
                    break;
                }
                default: {
                    //TODO...
                    break;
                }
            }
        });
        _chart.render();
        _chart.removeAxis("y");
        this.chart = _chart;
    }
});