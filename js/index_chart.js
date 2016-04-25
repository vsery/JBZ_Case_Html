    var randomScalingFactor = function() {
        return Math.round(Math.random() * 6000)
    };
    //每日新增粉丝量 , 每日扫描量
    var lineChartData = {
            labels: ["07月", "08月", "09月", "10月", "11月", "12月"],
            datasets: [{
                label: "扫码量",
                fillColor: "rgba(89,155,239,0.2)",
                strokeColor: "rgba(89,155,239,1)",
                pointColor: "rgba(89,155,239,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(89,155,239,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }, {
                label: "粉丝",
                fillColor: "rgba(94,203,105,0.2)",
                strokeColor: "rgba(94,203,105,1)",
                pointColor: "rgba(94,203,105,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(94,203,105,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]
        }
    //区域销售统计
    var storetData = [{
            value: 3055,
            color: "#5a82b6",
            label: "湖南",
        }, {
            value: 14420,
            color: "#599bef",
            label: "上海"
        }, {
            value: 10440,
            color: "#7aaced",
            label: "湖北"
        }, {
            value: 9330,
            color: "#8fb6e8",
            label: "广州"
        }, {
            value: 4454,
            color: "#b4c9e5",
            label: "深圳"
        }, {
            value: 1550,
            color: "#b4c9e5",
            label: "其他"
        }]
        //串货量总表
    var conflicttData = {
            labels: ["07月", "08月", "09月", "10月", "11月", "12月"],
            datasets: [{
                label: "串货量",
                fillColor: "rgba(94,203,105,0.2)",
                strokeColor: "rgba(94,203,105,1)",
                pointColor: "rgba(94,203,105,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(94,203,105,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]
        }
    //中奖量表
    var winningData = {
            labels: ["07月", "08月", "09月", "10月", "11月", "12月"],
            datasets: [{
                label: "中奖量",
                fillColor: "rgba(89,155,239,0.2)",
                strokeColor: "rgba(89,155,239,1)",
                pointColor: "rgba(89,155,239,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(89,155,239,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]
        }
    //加载图表信息
    var ctx = $("#canvas").get(0).getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });
    var stx = $("#storetData").get(0).getContext("2d");
    window.myLine = new Chart(stx).Doughnut(storetData, {
        responsive: true
    });
    var cotx = $("#conflictcanvas").get(0).getContext("2d");
    window.myLine = new Chart(cotx).Bar(conflicttData, {
        responsive: true
    });
    var cotx = $("#winningData").get(0).getContext("2d");
    window.myLine = new Chart(cotx).Line(winningData, {
        responsive: true
    });