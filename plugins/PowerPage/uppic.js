var _callback = null;
var _max = 0;
var _select = new Array();
var _dialog;
var _hasup = 0;
var _NowScroll = 0;

function selectpic(callback, max) {
    _callback = callback;
    _max = max;
    _select.length = 0;
    _NowScroll = $("body").scrollTop();
    _dialog = BootstrapDialog.show({
        title: '图片管理器',
        size: BootstrapDialog.SIZE_WIDE,
        message: $('<div class=""></div>').load('/home/source'),
        size: "size-wide",
        onshown: function() {
            $("body").scrollTop(_NowScroll);
            _dialog.setSize(BootstrapDialog.SIZE_WIDE);
            $(".bootstrap-dialog").css("marginTop", _NowScroll);
            //$(".bootstrap-dialog").css("width",900);
        }
    });
}

function uploadlogo(callback, max) {
    _callback = callback;
    _dialog = BootstrapDialog.show({
        title: '上传LOGO',
        message: '<div class="notify"> <p class="bg-warning">图片不允许涉及政治敏感与色情</p> <p class="bg-warning">图片大小不可大于1M</p> </div><div class="modal-body"> <div class="lflex image-pro"> <div class="flex1"> <div class="image-share-dropbox lflex lflex-v jc-center js-image-share-drop"> <div id="dropped_image"> <img src=""> <div class="image-cupture js-image-cupture ui-draggable ui-resizable"><div class="ui-resizable-handle ui-resizable-ne" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-nw" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-sw" style="z-index: 90;"></div></div> <div class="image-cupture-shadow js-image-cupture-shadow"></div> </div> <div id="dropbox"> <p class="notice-title">拖拽图片至此</p> <p class="notice-or">或者</p> <div class="file-select"> <input type="file" accept="image/*" class="ui-btn js-file" style="display:none"> <a href="javascript:void(0);" class="ui-btn ui-btn-normal js-img-btn-trigger">选择图片 …</a> <img class="js-sheared-img" style="display:none;"> </div> </div> </div> </div> <div class="flex1"> <div class="widget-image-shear__preview"> <h4 class="title">头像预览</h4> <div class="js-preview preview"> <img> </div> <div class="js-preview preview preview--circle"> <img> </div> </div> </div> </div> <div class="image-first lflex lflex-v jc-center ai-center js-origin-select"> <svg width="100" height="100" viewBox="0 0 30 30" class="js-image-add image-add"> <g class="transform-group"> <g transform="translate(0, 28.0) scale(1, -1) scale(0.03125, 0.03125)"> <path d="M984.694 387.878h-918.734c-8.062 0-14.606-6.522-14.606-14.606 0-8.034 6.522-14.582 14.606-14.582h918.734c8.062 0 14.606 6.522 14.606 14.582s-6.522 14.606-14.606 14.606zM539.907-86.086v918.734c0 8.062-6.522 14.606-14.606 14.606s-14.606-6.522-14.606-14.606v-918.734c0-8.066 6.522-14.62 14.606-14.62s14.606 6.522 14.606 14.62z" fill="#ddd"></path> </g> </g> </svg> </div> </div><div class="widget-image-shear__footer modal-footer"> <a class="ui-btn ui-btn-primary js-gen-img" href="javascript:void(0);">生成</a> </div>',
    });
}
$(function() {
    $("body").on("click", ".lflex .image-add", function() {
        if ($(".lflex .logoupload").length == 0) {
            $(".lflex").append('<input style="display:none" class="js-fileupload-input logoupload" type="file>');
        }
        alert("123");
        $(".lflex .logoupload").click();
    });
    $("body").on("change", ".lflex .logoupload", function() {
        $(".image-pro.lflex").css("display", "flex");
        $(".image-first.lflex").hide();
        $("#dropped_image").show();
        $("#dropbox").hide();
        blobToDataURL(this.file[0], function(dataurl, file) {
            $("#dropped_image img").attr("src", dataurl);
        });
    });
    $("body").on("change", ".fileupload", function() {
        getDataUrl(this.files);
    });
    $("body").on("click", ".upload-preview-img .close-modal", function() {
        $(this).parent().remove();
    });
    $("body").on("click", ".js-upload-local-region .js-upload-image", function() {
        uploadpic($(".upload-image-list"));
        $(this).val($(this).attr("data-loading-text"));
        $(this).attr("disabled", "disabled");
    });
    $("body").on("click", ".attachment-list-region .image-item", function() {
        if ($(this).find(".attachment-selected").length > 0) {
            $(this).find(".attachment-selected").remove();
            _select.splice($(this).attr("data-src"));
        } else {
            $(this).append('<div class="attachment-selected"> <i class="icon-ok icon-white"></i> </div>');
            _select.push($(this).attr("data-src"));
        }
        if (_select.length > 0) {
            $(".widget-list-footer .pull-left").show();
        } else {
            $(".widget-list-footer .pull-left").hide();
        }
    });
    $("body").on("click", ".js-choose-image", function() {
        _dialog.close();
        _callback(_select);
    });
    $("body").append('<iframe style="display:none;" id="uppiciframe" src="' + pichost + '/upload.html"></iframe>');
});

function getDataUrl(file) {
    for (var i = 0; i < file.length; i++) {
        blobToDataURL(file[i], function(dataurl, file) {
            $(".fileinput-button").before('<li class="upload-preview-img sort"><img title="' + file.name + '" src="' + dataurl + '"><a href="javascript:;" class="close-modal small js-remove-image">×</a></li>');

        });
    }
}

function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {
        callback(e.target.result, blob);
    }
    a.readAsDataURL(blob);
}

function uploadpic(e) {
    _select.length = 0;
    _hasup = 0;
    $(e).find(".upload-preview-img img").each(function() {
        document.getElementById('uppiciframe').contentWindow.postMessage({
            "uploadFile": $(this).attr("src").replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
            "accountid": accountid,
            "name": $(this).attr("title")
        }, "*");
    });
}
window.addEventListener('message', function(e) {
    _hasup++;
    _select.push($.trim(e.data));
    if (_hasup == $(".upload-preview-img img").length) {
        _dialog.close();
        _callback(_select);
    }
});
