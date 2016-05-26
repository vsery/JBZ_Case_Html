//  表格上移方法
//  function GoUpLine(e) {
//      var tr = $(e).parents("tr");
//      if ( $(tr).index() != 0 ){
//          $(tr).fadeOut().fadeIn();
//          $(tr).prev().before($(tr));
//      }
//  }
//  表格下移方法
//  function GoDownLine(e) {
//      var tr = $(e).parents("tr");
//      var len = $("#article_table tr").length;
//      if ( $(tr).index() != len -1 ){
//          $(tr).fadeOut().fadeIn();
//          $(tr).next().after($(tr));
//      }
//  }
// 跳转页面方法
function srcpage (surl) {
    htmlobj=$.ajax({
        type:"get", 
        url:surl,
        dataType:"html", 
        async:false
    });
    $(".app-init-container").html(htmlobj.responseText);
}

// 删除表格行记录
function del(e) {
    $(e).parent().removeClass("in");
    $(e).parents("tr").remove();
}
// 状态切换方法 1->2
function upcircle(e) {
    $(e).button("loading"), setTimeout(function() {
        $(e).button("reset")
    }, 3000);
    $(e).addClass("hide");
    $(e).next().removeClass("hide");
};

// 状态切换方法 2->1
function downcircle(e) {
    $(e).button("loading"), setTimeout(function() {
        $(e).button("reset")
    }, 3000);
    $(e).addClass("hide");
    $(e).prev().removeClass("hide");
};

// 下拉菜单,选择显示在文本框
function dropdown(drop){
    var d_txt = drop.text();
    drop.parents('.input-group').children('input.form-control').eq(0).val(d_txt);
}

// 下拉菜单,选择显示在按钮上
function form_dropdown(drop){            
    var drop_txt = drop.text();
    var parent = drop.parents('.form-group').find('a.btn.btn-default');
    parent.text(drop_txt);
    parent.append(" <span class='caret'></span>");
}

// 上传图片方法
function readFile() {
    var file = this.files[0];
    if (!/image\/\w+/.test(file.type)) {
        alert("请确保文件为图像类型");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
        result.innerHTML = '<img src="' + this.result + '" alt=""/>'
    }
}
// 显示时间面板
function ShowTime(e) {
    $(e).datetimepicker({
        lang:'ch',
        datepicker:false,
        format:'H:i'
    });
}

// 初始化时间面板
function ShowDate(e) {
    $(e).datetimepicker({
        lang:'ch',
        format: 'Y-m-d H:i:s'
    });
}
// 显示日期面板
function ShowDateNotTime(e) {
    $(e).datetimepicker({
        lang:'ch',
        timepicker:false,
        format:'Y-m-d'
    });
}

$(function () {
    $("body").off();
    
    $('input.password').focus(function() {
        if ($(this).hasClass('password')) {
            $(this).attr("type", "text");
        }
    });

    $('input.password').blur(function() {
        if ($(this).hasClass('password')) {
            $(this).attr("type", "password");
        }
    });

    // 修改排序
    $("span.SequenceID").click(function() {
        var edit_span = $(this); var txt = edit_span.text(); 
        var input = $("<input type='text'value='" + txt + "'/>"); 
        edit_span.html(input);
        input.click(function() { return false; });
        input.keyup(function() { this.value=this.value.replace(/[^0-9-]+/,''); });
        input.trigger("focus");
        input.blur(function() {
            var newtxt = $(this).val();
            if (newtxt != txt) { edit_span.html(newtxt); }else{ edit_span.html(txt); }
        });            
    });

    // 弹出框,屏蔽背景关闭窗口
    $(".modal.fade").modal({ backdrop: 'static', keyboard: false, show: false });

    // 表格全选
    $(".table tr th input[type='checkbox']").click(function() {
        var parent = $(this).parents('.table');
        if ($(this).attr('checked') == 'checked') {
            $(this).removeAttr('checked');
            parent.find("input[type='checkbox']").prop('checked', false);
        } else {
            $(this).attr('checked', true);
            parent.find("input[type='checkbox']").prop('checked', true);
        };
    });

    // 下拉按钮内容显示到文本框
    $('.dropdown-menu li').on("click", "a", function() {
        dropdown($(this));
        form_dropdown($(this));
        $('.danger_txt').removeClass("in");
    });

    // 清空之间时间面板
    $('.xdsoft_datetimepicker').remove();
    // 初始化时间面板
    $('.datetimepicker').datetimepicker({
        lang:'ch',
        format: 'Y-m-d H:i:s'
    });
    // 显示日期面板
    $('.date_select_panel').datetimepicker({
        lang:'ch',
        timepicker:false,
        format:'Y-m-d'
    });
    // 显示时间面板
    $('.time_select_panel').datetimepicker({
        lang:'ch',
        datepicker:false,
        format:'H:i'
    });

    // 开关切换动画
    $('label.js-switch').click(function() {
        var index = $('label.js-switch').index(this);
        $(this).addClass("ui-switcher-loading");
        setTimeout(function() {
            if ($('label.js-switch:eq(' + index + ')').hasClass('ui-switcher-off')) {
                $('label.js-switch:eq(' + index + ')').removeClass('ui-switcher-off');
                $('label.js-switch:eq(' + index + ')').addClass('ui-switcher-on');
            } else if ($('label.js-switch:eq(' + index + ')').hasClass('ui-switcher-on')) {
                $('label.js-switch:eq(' + index + ')').removeClass('ui-switcher-on');
                $('label.js-switch:eq(' + index + ')').addClass('ui-switcher-off');
            }
            $('label.js-switch:eq(' + index + ')').removeClass("ui-switcher-loading");
        }, 400);
    });

    // 删除按钮弹框
    $(".close_btn").click(function() {
        $(".close_box").removeClass("in");
        $(this).parent().find(".close_box").addClass("in");
    });

    $(".bomb_close_btn").click(function() {
        $(this).parents(".close_box").removeClass("in");
    });

    // 成功提示框
    $("a.btn.success_btn").click(function(){
        $(".js-message.success").addClass("show");
        setTimeout(function(){
            $(".js-message.success").removeClass("show");
        },1000)
    });
    
    // 消息提示框
    $("a.btn.error_btn").click(function(){
        $(".js-message.error").addClass("show");
        setTimeout(function(){
            $(".js-message.error").removeClass("show");
        },1000)
    });
});