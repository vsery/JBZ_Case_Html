var _callback=null;
var _max=0;
var _select=new Array();
var _dialog;
function selectpage(callback){
    _callback=callback;
    _dialog=BootstrapDialog.show({
        type:BootstrapDialog.TYPE_DEFAULT,
        title:'选择微页面',
        message: $('<div></div>').load('/shop/page/list?status=1&select=select')
    });
}
function selectgoodsgroup(callback){
    _callback=callback;
    _dialog=BootstrapDialog.show({
        type:BootstrapDialog.TYPE_DEFAULT,
        title:'选择商品分类',
        message: $('<div></div>').load('/shop/goods/grouplist?select=select')
    });
}
function selectgoods(callback,max) {
    _callback=callback;
    _max=max;
    _select.length=0;
    _dialog=BootstrapDialog.show({
        type:BootstrapDialog.TYPE_DEFAULT,
        title:'选择商品',
        message: $('<div></div>').load('/shop/goods/list?select=select&status=1')
    });
}
$("body").on("click","#js-module-page .js-choose,#js-module-goodslist .js-choose",function(){
    var tr=$(this).parent().parent().parent();
    _dialog.close();
    _callback({
        id:tr.attr("data-id"),
        name:tr.attr("data-title"),
        url:tr.attr("data-url"),
    });
});
$("body").on("click","#js-module-goods .js-choose",function(){
    if($(this).hasClass("btn-primary")){
        $(this).removeClass("btn-primary");
        $(this).html("选取");
    }else{
        $(this).addClass("btn-primary");
        $(this).html("取消");
        var tr=$(this).parent().parent().parent();
        _select.push({
                    id:tr.attr("data-id"),
                    name : tr.attr("data-title"),
                    desc : tr.attr("data-desc"),
                    pic : tr.attr("data-pic").split(',')[0],
                    url:tr.attr("data-url"),
                    price : tr.attr("data-price"),
                });
    }
    if(_select.length>0){
        $(".js-confirm-choose").show();
    }else{
        $(".js-confirm-choose").hide();
    }
});
$("body").on("click",".js-confirm-choose",function(){
    _dialog.close();
    _callback(_select);
    
});