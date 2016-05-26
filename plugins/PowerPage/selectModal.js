/*初始化参数*/
var _callback = null; var _max = 0; var _select = new Array(); var _dialog;

/*查询弹框 { 页面 }*/
function selectpage(callback) {
    _callback = callback;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_DEFAULT,
        title: '页面列表/选择页面',
        message: $('<div></div>').load('view-app/dialog/page.html')
        /*buttons: [{
            label: '确定',
            cssClass: 'btn-info'
        }, {
            label: '取消',
            action: function(dialogItself) {
                dialogItself.close();
            }
        }]*/
    });
}

/*查询弹框 { 图片 }*/
function selectpic(callback, max) {
    _callback = callback;
    _max = max;
    _select.length = 0;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_PRIMARY,
        title: '图片管理器',
        size: BootstrapDialog.SIZE_WIDE,
        cssClass: 'widget-attachment',
        message: $('<div class=""></div>').load('view-app/dialog/images.html'),
        size: "size-wide",
        onshown: function() {
            $("body").scrollTop(_NowScroll);
            _dialog.setSize(BootstrapDialog.SIZE_WIDE);
            $(".bootstrap-dialog").css("marginTop", _NowScroll);
            $(".bootstrap-dialog").css("width",900);
        }
    });
}

/*查询弹框 { 页面分组 }*/
function selectpagegroup(callback) {
    _callback = callback;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_DEFAULT,
        title: '页面分类/选择分类',
        message: $('<div></div>').load('view-app/dialog/pagegroup.html')
    });
}

/*查询弹框 { 商品 }*/
function selectgoods(callback, max) {
    _callback = callback;
    _max = max;
    _select.length = 0;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_DEFAULT,
        title: '商品列表/选择商品',
        message: $('<div></div>').load('view-app/dialog/goods.html')
    });
}

/*查询弹框 { 商品列表 }*/
function selectgoodsgroup(callback) {
    _callback = callback;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_DEFAULT,
        title: '商品分组/选择分组',
        message: $('<div></div>').load('view-app/dialog/goodsgroup.html')
    });
}

/*查询弹框 { 内容 }*/
function selectcontents(callback, max) {
    _callback = callback;
    _max = max;
    _select.length = 0;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_DEFAULT,
        title: '内容列表/选择内容',
        message: $('<div></div>').load('view-app/dialog/contents.html')
    });
}

/*查询弹框 { 内容列表 }*/
function selectcontentsgroup(callback) {
    _callback = callback;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_DEFAULT,
        title: '内容分组/选择分组',
        message: $('<div></div>').load('view-app/dialog/contentsgroup.html')
    });
}

/*查询弹框 { 音频 }*/
function selectaudio(callback, max) {
    _callback = callback;
    _max = max;
    _select.length = 0;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_DEFAULT,
        title: '音频列表/选择音频',
        message: $('<div></div>').load('view-app/dialog/audio.html')
    });
}

/*查询弹框 { 音频列表 }*/
function selectaudiolist(callback, max) {
    _callback = callback;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_DEFAULT,
        title: '音频分组/选择分组',
        message: $('<div></div>').load('view-app/dialog/audiogroup.html')
    });
}

/*查询弹框 { 视频 }*/
function selectvideo(callback, max) {
    _callback = callback;
    _max = max;
    _select.length = 0;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_DEFAULT,
        title: '视频列表/选择视频',
        message: $('<div></div>').load('view-app/dialog/video.html')
    });
}

/*查询弹框 { 视频列表 }*/
function selectvideolist(callback, max) {
    _callback = callback;
    _dialog = BootstrapDialog.show({
        type: BootstrapDialog.TYPE_DEFAULT,
        title: '音频分组/音频列表',
        message: $('<div></div>').load('view-app/dialog/videogroup.html')
    });
}

// $(function () {
    $("body").on("click", ".attachment-list-region .image-item", function() {
        if ($(this).find(".attachment-selected").length > 0) {
            $(this).find(".attachment-selected").remove();
            var index = _select.indexOf($(this).attr("data-src"));
            if( index !=-1 ) {
                _select.splice(index,1);
            }
        } else {
            $(this).append('<div class="attachment-selected"> <i class="fa fa-fw fa-check"></i> </d iv>');
            _select.push($(this).attr("data-src"));
        }
        if (_select.length > 0) {
            $(".js-confirm-choose").show();
        } else {
            $(".js-confirm-choose").hide();
        }
        console.log(_select);
    });

    /*商品弹框 选取按钮 (多选)*/
    $("body").on("click", "#js-module-goods .js-choose", function() {
        var tr = $(this).parents("tr");
        if ($(this).hasClass("btn-info")) {
            $(this).removeClass("btn-info");
            $(this).html("选取");
            var index = {
                id: tr.attr("data-id"),
                name: tr.attr("data-title"),
                desc: tr.attr("data-desc"),
                pic: tr.attr("data-pic").split(',')[0],
                url: tr.attr("data-url"),
                price: tr.attr("data-price"),
            };
            if( index !=-1 ) {
                _select.splice(index,1);
            }
        } else {
            $(this).addClass("btn-info");
            $(this).html("取消");
            _select.push({
                id: tr.attr("data-id"),
                name: tr.attr("data-title"),
                desc: tr.attr("data-desc"),
                pic: tr.attr("data-pic").split(',')[0],
                url: tr.attr("data-url"),
                price: tr.attr("data-price"),
            });
        }
        if (_select.length > 0) {
            $(".js-confirm-choose").show();
        } else {
            $(".js-confirm-choose").hide();
        }
        console.log(_select);
    });

    /*音频弹框 选取按钮 (多选)*/
    $("body").on("click", "#js-module-audio .js-choose", function() {
        var tr = $(this).parents("tr");
        if ($(this).hasClass("btn-info")) {
            $(this).removeClass("btn-info");
            $(this).html("选取");
            var index = {
                title: "请输入音频标题",
                id: tr.attr("data-id"),
                title: tr.attr("data-title"),
                desc: tr.attr("data-desc"),
                time: tr.attr("data-time"),
                src: tr.attr("data-src"),
                loop: tr.attr("data-loop"),
            };
            if( index !=-1 ) {
                _select.splice(index,1);
            }
        } else {
            $(this).addClass("btn-info");
            $(this).html("取消");
            _select.push({
                title: "请输入音频标题",
                id: tr.attr("data-id"),
                title: tr.attr("data-title"),
                desc: tr.attr("data-desc"),
                time: tr.attr("data-time"),
                src: tr.attr("data-src"),
                loop: tr.attr("data-loop"),
            });
        }
        if (_select.length > 0) {
            $(".js-confirm-choose").show();
        } else {
            $(".js-confirm-choose").hide();
        }
        console.log(_select);
    });

    /* 页面列表 / 商品列表 / 音频列表 / 视频列表 (单选并返回) */
    $("body").on( "click", "#js-module-pagegroup .js-choose, " +
        "#js-module-audiolist .js-choose, " +
        "#js-module-videolist .js-choose", function() {
        var tr = $(this).parents("tr");
        _dialog.close();
        _callback({
            id: tr.attr("data-id"),
            name: tr.attr("data-title"),
            url: tr.attr("data-url"),
        });
    });

    $("body").on( "click", "#js-module-contentsgroup .js-choose, " +
        "#js-module-audiolist .js-choose, " +
        "#js-module-videolist .js-choose", function() {
        var tr = $(this).parents("tr");
        _dialog.close();
        _callback({
            id: tr.attr("data-id"),
            name: tr.attr("data-title"),
            pic: tr.attr("data-pic"),
            url: tr.attr("data-url"),
            price: tr.attr("data-price"),
        });
    });

    /*弹出框 确定使用 (返回数组json)*/
    $("body").on("click", ".js-confirm-choose", function() {
        _dialog.close();
        _callback(_select);
    });

// })