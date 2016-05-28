function FullMenus() {
    var nav = [
        'richtext',
        'contents',
        'contentslist',
        'contentstaglist',
        'imagead',
        'title',
        'textnav',
        'switchnav',
        'line',
        'space',
        'audio',
        'audiolist',
        'video',
        'videolist'];
    NavList(nav);
}
function NavList(obj) {
    var box = $(".js-add-region .app-add-field");
    box.append("<ul></ul>");
    for (var i = 0; i < obj.length; i++) {
        if ( obj[i] == 'richtext' ) { box.find('ul').append('<li><a class="js-new-field" data-field-type="richtext">    富文本          </a></li>');}
        if ( obj[i] == 'goods' )    { box.find('ul').append('<li><a class="js-new-field" data-field-type="goods">       商品          </a></li>');}
        if ( obj[i] == 'goodslist' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="goodslist">   商品<br>列表  </a></li>');}
        if ( obj[i] == 'imagead' )  { box.find('ul').append('<li><a class="js-new-field" data-field-type="imagead">     图片<br>广告  </a></li>');}
        if ( obj[i] == 'contents' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="contents">    内容          </a></li>');}
        if ( obj[i] == 'contentslist' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="contentslist">内容<br>列表  </a></li>');}
        if ( obj[i] == 'contentstaglist' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="contentstaglist">内容<br>分组  </a></li>');}
        if ( obj[i] == 'cube2' )    { box.find('ul').append('<li><a class="js-new-field" data-field-type="cube2">       魔方          </a></li>');}
        if ( obj[i] == 'title' )    { box.find('ul').append('<li><a class="js-new-field" data-field-type="title">       标题          </a></li>');}
        if ( obj[i] == 'textnav' )  { box.find('ul').append('<li><a class="js-new-field" data-field-type="textnav">     文本<br>导航  </a></li>');}
        if ( obj[i] == 'switchnav' )  { box.find('ul').append('<li><a class="js-new-field" data-field-type="switchnav">   切换<br>导航  </a></li>');}
        if ( obj[i] == 'imagenav' ) { box.find('ul').append('<li><a class="js-new-field" data-field-type="imagenav">    图片<br>导航  </a></li>');}
        if ( obj[i] == 'link' )     { box.find('ul').append('<li><a class="js-new-field" data-field-type="link">        关联<br>链接  </a></li>');}
        if ( obj[i] == 'search' )   { box.find('ul').append('<li><a class="js-new-field" data-field-type="search">      商品<br>搜索  </a></li>');}
        if ( obj[i] == 'showcase' ) { box.find('ul').append('<li><a class="js-new-field" data-field-type="showcase">    橱窗          </a></li>');}
        if ( obj[i] == 'line' )     { box.find('ul').append('<li><a class="js-new-field" data-field-type="line">        辅助线        </a></li>');}
        if ( obj[i] == 'space' )    { box.find('ul').append('<li><a class="js-new-field" data-field-type="space">       辅助<br>空白  </a></li>');}
        if ( obj[i] == 'component' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="component">   自定义<br>模块</a></li>');}
        if ( obj[i] == 'store' )    { box.find('ul').append('<li><a class="js-new-field" data-field-type="store">       进入<br>店铺  </a></li>');}
        if ( obj[i] == 'tag_list' ) { box.find('ul').append('<li><a class="js-new-field" data-field-type="tag_list">    商品<br>分组1 </a></li>');}
        if ( obj[i] == 'tags' )     { box.find('ul').append('<li><a class="js-new-field" data-field-type="tags">        商品<br>分组2 </a></li>');}
        if ( obj[i] == 'audio' )    { box.find('ul').append('<li><a class="js-new-field" data-field-type="audio">       语音          </a></li>');}
        if ( obj[i] == 'audiolist' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="audiolist">   语音<br>列表  </a></li>');}
        if ( obj[i] == 'video' )    { box.find('ul').append('<li><a class="js-new-field" data-field-type="video">       视频          </a></li>');}
        if ( obj[i] == 'videolist' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="videolist">   视频<br>列表  </a></li>');}
        if ( obj[i] == 'notice' )   { box.find('ul').append('<li><a class="js-new-field" data-field-type="notice">      公告          </a></li>');}
        if ( obj[i] == 'coupon' )   { box.find('ul').append('<li><a class="js-new-field" data-field-type="coupon">      优惠券        </a></li>');}
    }
}
/*  $("head").append('<script type="text/javascript" src="plugins/PowerPage/uppic.js"></script>');  */
/*  初始化菜单 (菜单列表)  */
$(".js-add-region .app-add-field").append('<ul>' +
    '<li><a class="js-new-field" data-field-type="richtext">    富文本        </a></li>' +
    /*  '<li><a class="js-new-field" data-field-type="goods">       商品          </a></li>' +  */
    '<li><a class="js-new-field" data-field-type="contents">    内容          </a></li>' +
    '<li><a class="js-new-field" data-field-type="contentslist">内容<br>列表  </a></li>' +
    '<li><a class="js-new-field" data-field-type="contentstaglist">内容<br>分组  </a></li>' +
    /*  '<li><a class="js-new-field" data-field-type="goodslist">   商品<br>列表  </a></li>' +  */
    '<li><a class="js-new-field" data-field-type="imagead">     图片<br>广告  </a></li>' +
    /*  '<li><a class="js-new-field" data-field-type="cube2">       魔方          </a></li>' +  */
    /*  '<li><a class="js-new-field" data-field-type="title">       标题          </a></li>' +  */
    '<li><a class="js-new-field" data-field-type="textnav">     文本<br>导航  </a></li>' +
    '<li><a class="js-new-field" data-field-type="switchnav">   切换<br>导航  </a></li>' +
    /*  '<li><a class="js-new-field" data-field-type="imagenav">    图片<br>导航  </a></li>' +  */
    /*  '<li><a class="js-new-field" data-field-type="link">        关联<br>链接  </a></li>' +  */
    /*  '<li><a class="js-new-field" data-field-type="search">      商品<br>搜索  </a></li>' +  */
    /*  '<li><a class="js-new-field" data-field-type="showcase">    橱窗          </a></li>' +  */
    '<li><a class="js-new-field" data-field-type="line">        辅助线        </a></li>' +
    '<li><a class="js-new-field" data-field-type="space">       辅助<br>空白  </a></li>' +
    /*  '<li><a class="js-new-field" data-field-type="component">   自定义<br>模块</a></li>' +  */
    /*  '<li><a class="js-new-field" data-field-type="store">       进入<br>店铺  </a></li>' +  */
    /*  '<li><a class="js-new-field" data-field-type="tag_list">    商品<br>分组1 </a></li>' +  */
    /*  '<li><a class="js-new-field" data-field-type="tags">        商品<br>分组2 </a></li>' +  */
    '<li><a class="js-new-field" data-field-type="audio">       语音          </a></li>' +
    '<li><a class="js-new-field" data-field-type="audiolist">   语音<br>列表  </a></li>' +
    '<li><a class="js-new-field" data-field-type="video">       视频          </a></li>' +
    '<li><a class="js-new-field" data-field-type="videolist">   视频<br>列表  </a></li>' +
    /*  '<li><a class="js-new-field" data-field-type="notice">      公告          </a></li>' +  */
    /*  '<li><a class="js-new-field" data-field-type="coupon">      优惠券        </a></li>' +  */
    '</ul>');