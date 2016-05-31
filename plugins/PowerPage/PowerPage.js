$(function() {
    /*  清楚已经绑定JS,重新绑定(以防止事件重复执行)  */
    $("body").off();
    /*  添加列表项 (添加选项并编辑)  */
    $("body").on("click", ".js-new-field", function() {
        PowerPage.Format.FormatBox({
            name: $(this).attr("data-field-type")
        });
        PowerPage.Common.LastClick();
    });
    /*  删除列表项 (删除选项) ,在后面构造函数中重新定义删除(FormatBox)  */
    $("body").on("click", ".app-field .actions .actions-wrap .delete", function() {
    });
    /*  选中状态  */
    $("body").on("click", ".app-field .actions .actions-wrap .edit", function() {
        PowerPage.Common.LastClick();
    });
    /*  选中 内容项 ,并编辑  */
    $("body").on("click", ".app-field", function() {
        $(".app-field").removeClass("editing");
        $(this).addClass("editing");
        $(".app-sidebar").css("marginTop", $(this).position().top);
        PowerPage.Modify.Modify($(this).find("desc").html());
    });
});
function FullMenus() {
    var nav = [
        'richtext',
        'contents',
        'contentslist',
        'contentstaglist',
        'contentstaglist1',
        'imagead',
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
function MaxMenus() {
    var nav = [
        'richtext',
        'contents',
        'contentslist',
        'imagead',
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
function MinMenus() {
    var nav = [
        'richtext',
        'contents',
        'imagead',
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
function SimpleMenus() {
    var nav = [
        'richtext',
        'imagead',
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
    box.append("<br/><br/><ul></ul>");
    for (var i = 0; i < obj.length; i++) {
        if ( obj[i] == 'richtext' ) { box.find('ul').append('<li><a class="js-new-field" data-field-type="richtext">    富文本          </a></li>');}
        if ( obj[i] == 'goods' )    { box.find('ul').append('<li><a class="js-new-field" data-field-type="goods">       商品          </a></li>');}
        if ( obj[i] == 'goodslist' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="goodslist">   商品<br>列表  </a></li>');}
        if ( obj[i] == 'imagead' )  { box.find('ul').append('<li><a class="js-new-field" data-field-type="imagead">     图片<br>广告  </a></li>');}
        if ( obj[i] == 'contents' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="contents">    内容          </a></li>');}
        if ( obj[i] == 'contentslist' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="contentslist">内容<br>列表  </a></li>');}
        if ( obj[i] == 'contentstaglist' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="contentstaglist">内容<br>分组  </a></li>');}
        if ( obj[i] == 'contentstaglist1' ){ box.find('ul').append('<li><a class="js-new-field" data-field-type="contentstaglist1">内容<br>分组1  </a></li>');}
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
var PowerPage = {
    /*  页面加载 接收数据  */
    Set: {
        /*  图片域名  */
        Pichost: "",
        /*  富文本编辑器是否实例化过  */
        HasUedit: false,
        /*  店铺信息  */
        ShopMess: {
            id: 0,
            shopname: "聚宝赞",
            shoplogo: "images/public/logo.png"
        },
    },
    Dom: {
        Preview: $(".app-preview"),
        Entry: $(".app-preview .app-entry"),
        Desc: $(".app-field desc"),
        SidBar: $(".app-sidebar-inner"),
        Control: $(".editing>.control-group"),
        Fields: $(".app-entry .app-fields"),
        Field: $(".app-preview .app-field"),
        Configs: $(".app-preview .app-config"),
    },
    /*  定义模板数据  */
    EditTemp: {
        /*  默认值 (初始化数据)  */
        defaultval: {
            /*  图片广告  */
            imageadpic: [
                {
                    id: -1,
                    name: "此处显示广告标题",
                    pic: "images/public/image_ad.jpg",
                    url: "",
                    urldesc: "设置链接到的页面地址",
                }
            ],
            /*  商品/商品列表  */
            goods: [
                {
                    id: 0,
                    name: "此处显示商品标题",
                    desc: '此处显示商品描述',
                    pic: "images/public/goods1.jpg",
                    url: "",
                    price: 99.99,
                }, {
                    id: 1,
                    name: "此处显示商品标题",
                    desc: '此处显示商品描述',
                    pic: "images/public/goods2.jpg",
                    url: "",
                    price: 59.99,
                }, {
                    id: 2,
                    name: "此处显示商品标题",
                    desc: '此处显示商品描述',
                    pic: "images/public/goods3.jpg",
                    url: "",
                    price: 19.99,
                }, {
                    id: 3,
                    name: "此处显示商品标题",
                    desc: '此处显示商品描述',
                    pic: "images/public/goods4.jpg",
                    url: "",
                    price: 9.99,
                }
            ],            
            /*  内容/内容列表  */
            contents: [
                {
                    id: 0,
                    name: "此处显示内容标题",
                    desc: '此处显示内容描述',
                    pic: "images/public/goods1.jpg",
                    url: "",
                    price: 99.99,
                }, {
                    id: 1,
                    name: "此处显示内容标题",
                    desc: '此处显示内容描述',
                    pic: "images/public/goods2.jpg",
                    url: "",
                    price: 99.99,
                }, {
                    id: 2,
                    name: "此处显示内容标题",
                    desc: '此处显示内容描述',
                    pic: "images/public/goods3.jpg",
                    url: "",
                    price: 99.99,
                }, {
                    id: 3,
                    name: "此处显示内容标题",
                    desc: '此处显示内容描述',
                    pic: "images/public/goods4.jpg",
                    url: "",
                    price: 99.99,
                }
            ],
            /*  内容分组  */
            contentstaglist: [
                {
                    id: 0,
                    name: "『内容列表』A",
                    desc: '此处显示内容列表描述',
                    pic: "images/public/goods1.jpg",
                    url: "",
                    urldesc: "置链接到的页面地址",
                    price: 980,
                },
                {
                    id: 0,
                    name: "『内容列表』B",
                    desc: '此处显示内容列表描述',
                    pic: "images/public/goods2.jpg",
                    url: "",
                    urldesc: "置链接到的页面地址",
                    price: 970,
                },
                {
                    id: 0,
                    name: "『内容列表』C",
                    desc: '此处显示内容列表描述',
                    pic: "images/public/goods3.jpg",
                    url: "",
                    urldesc: "置链接到的页面地址",
                    price: 960,
                },
                {
                    id: 0,
                    name: "『内容列表』D",
                    desc: '此处显示内容列表描述',
                    pic: "images/public/goods4.jpg",
                    url: "",
                    urldesc: "置链接到的页面地址",
                    price: 950,
                }
            ],
            /*  文本导航  */
            textnav: [
                {
                    name: "『文本导航』",
                    url: "",
                    urldesc: "置链接到的页面地址",
                }
            ],
            /*  切换导航  */
            switchnav: [
                {
                    name: "『切换导航』",
                    url: "",
                    urldesc: "置链接到的页面地址",
                },
                {
                    name: "『切换导航』",
                    url: "",
                    urldesc: "置链接到的页面地址",
                }
            ],
            /*  页面标题  */
            pagetitle: {
                background: "#000",
            },
            /*  富文本默认值  */
            richtext: {
                background: "#fff",
            },
            /*  首页头部  */
            maintop: {
                background: '#fff',
            },
            /*  音频列表  */
            audio: [
                {
                    id: 0,
                    name: "audio",
                    title: "请输入音频标题",
                    desc: "",
                    time: new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate(),
                    src: "",
                    loop: "",
                }
            ],
            /*  视频列表  */
            video: [
                {
                    id: 0,
                    name: "video",
                    title: "请输入视频标题",
                    desc: "",
                    time: new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate(),
                    src: "",
                    loop: "",
                }
            ],
        },
        /*  类别  */
        categroy: {
            name: "categroy",
            categroyname: "分组名称",
            background: "#000",
            showcategroyname: true,
            firstorder: 1,
            secondorder: 1,
            config: true,
        },
        /*  主页头部  */
        maintop: {
            name: "maintop",
            logo: "images/public/logo.jpg",
            backgroundpic: "images/public/titlebg.jpg",
            backgroundcolor: "#fff",
            allgoods: 500,
            newgoods: 99,
            shopname: "PSP商城",
            candelete: false,
        },
        /*  页面标题  */
        pagetitle: {
            name: "pagetitle",
            title: "微页面标题",
            desc: "",
            categroydesc: "置链接到的页面地址",
            categroy: "",
            background: "#000",
            config: true,
            candelete: false,
        },
        /*  富文本  */
        richtext: {
            name: "richtext",
            content: encodeURIComponent('<p>点此编辑『富文本』内容——&gt;</p>' +
                '<p>你可以对文字进行<strong>加粗</strong>、' +
                    '<em>斜体</em>、<span style="text-decoration: underline;">下划线</span>、' +
                    '<span style="text-decoration: line-through;">删除线</span>、文字' +
                    '<span style="color: rgb(0, 176, 240);">颜色</span>、' +
                    '<span style="background-color: rgb(255, 192, 0); color: rgb(255, 255, 255);">背景色</span>、以及字号' +
                    '<span style="font-size: 20px;">大</span><span style="font-size: 14px;">小</span>等简单排版操作。</p>' +
                '<p>还可以在这里加入表格了</p>' +
                '<table><tbody>' +
                    '<tr><td width="93" valign="top" style="word-break: break-all;">中奖客户</td>' +
                        '<td width="93" valign="top" style="word-break: break-all;">发放奖品</td>' +
                        '<td width="93" valign="top" style="word-break: break-all;">备注</td>' +
                    '</tr><tr>' +
                        '<td width="93" valign="top" style="word-break: break-all;">猪猪</td>' +
                        '<td width="93" valign="top" style="word-break: break-all;">内测码</td>' +
                        '<td width="93" valign="top" style="word-break: break-all;"><em><span style="color: rgb(255, 0, 0);">已经发放</span></em></td>' +
                    '</tr><tr>' +
                        '<td width="93" valign="top" style="word-break: break-all;">大麦</td>' +
                        '<td width="93" valign="top" style="word-break: break-all;">积分</td>' +
                        '<td width="93" valign="top" style="word-break: break-all;"><a href="javascript: void(0);" target="_blank">领取地址</a></td>' +
                    '</tr></tbody></table>' +
                '<p style="text-align: left;">' +
                    '<span style="text-align: left;">也可在这里插入图片、并对图片加上超级链接，方便用户点击。</span>' +
                '</p>'),
            fullscreen: false,
            background: "#fff",
        },
        /*  商品  */
        goods: {
            name: "goods",
            goods: [],
            size: 2,
            sizetype: 0,
            showname: false,
            showbuy: true,
            buytype: 1,
            showdesc: false,
            showprice: true,
        },
        /*  商品列表  */
        goodslist: {
            name: "goodslist",
            categroy: 0,
            categroydesc: "从商品分组中选择",
            goodscount: 0,
        },
        /*  内容  */
        contents: {
            name: "contents",
            contents: [],
            size: 2,
            sizetype: 0,
            showname: false,
            showbuy: true,
            buytype: 1,
            showdesc: false,
            showprice: true,
        },
        /*  内容列表  */
        contentslist: {
            name: "contentslist",
            categroy: 0,
            categroydesc: "从内容分组中选择",
            contentscount: 0,
        },
        /*  内容分组  */
        contentstaglist:{
            name: "contentstaglist",
            navs: [],
        },
        contentstaglist1:{
            name: "contentstaglist1",
            contents: [],
            size: 2,
            sizetype: 0,
            showname: false,
            showbuy: true,
            buytype: 1,
            showdesc: false,
            showprice: true,

        },
        /*  内容类别  */
        contentscategroy: {
            name: "contentscategroy",
            categroyname: "内容分组名称",
            background: "#000",
            showcategroyname: true,
            firstorder: 1,
            secondorder: 1,
            config: true,
        },
        /*  图片广告  */
        imagead: {
            name: "imagead",
            showtype: 0,
            showsize: 0,
            pics: [],
        },
        /*  标题  */
        title: {
            name: "title",
            title: "点击编辑『标题』",
            template: 0,
            subtitle: "",
            align: 0,
            background: "#FFFFFF",
            linkname: "",
            linkurl: "",
            date: "",
            author: "",
            nav: {},
        },
        /*  文本导航  */
        textnav: {
            name: "textnav",
            navs: [],
        },
        /*  切换导航  */
        switchnav: {
            name: "switchnav",
            deval:1,
            navs: [],
        },
        /*  商品搜索  */
        search: {
            name: "search",
            url: "/ushop/goods/search"
        },
        /*  辅助线  */
        line: {
            name: "line",
        },
        /*  辅助空白   */
        space: {
            name: "space",
            height: 0,
        },
        /*  进入店铺  */
        store: {
            name: "store",
        },
        /*  音频  */
        audio: {
            name: "audio",
            audio: [],
        },
        /*  音频列表  */
        audiolist: {
            name: "audiolist",
            categroy: 0,
            categroydesc: "从音频分组中选择",
            audiocount: 0,
        },
        /*  视频  */
        video: {
            name: "video",
            video: [],
        },
        /*  视频列表  */
        videolist: {
            name: "videolist",
            categroy: 0,
            categroydesc: "从视频分组中选择",
            audiocount: 0,
        },
        /*  公告  */
        notice: {
            name: "notice",
            value: "请填写内容，如果过长，将会在手机上滚动显示",
        },
        /*  优惠券  */
        coupon: {
            name: "coupon",
            categroy: 3,
            categroydesc: "从商品分组中选择",
            goodscount: 0,
        }
    },
    /*  格式工厂 (内容模板)  */
    Format: {
        /*  格式入口  */
        Format: function(obj) {
            var result = null;
            switch (obj.name) {
                case PowerPage.EditTemp.categroy.name:      /*  商品类别  */
                    result = PowerPage.Format.FormatCategroy($.extend(true, {}, PowerPage.EditTemp.categroy, obj));
                    break;
                case PowerPage.EditTemp.contentscategroy.name: /*  内容类别  */
                    result = PowerPage.Format.FormatContentscategroy($.extend(true,{},PowerPage.EditTemp.contents,PowerPage.EditTemp.categroy,obj));
                    break;
                case PowerPage.EditTemp.maintop.name:       /*  主页头部  */
                    result = PowerPage.Format.FormatMainTop(obj);
                    break;
                case PowerPage.EditTemp.pagetitle.name:     /*  页面标题  */
                    result = PowerPage.Format.FormatPageTitle($.extend(true, {}, PowerPage.EditTemp.pagetitle, obj));
                    break;
                case PowerPage.EditTemp.richtext.name:      /*  富文本  */
                    result = PowerPage.Format.FormatRich($.extend(true, {}, PowerPage.EditTemp.richtext, obj));
                    break;
                case PowerPage.EditTemp.goods.name:         /*  商品  */
                    result = PowerPage.Format.FormatGoods($.extend(true, {}, PowerPage.EditTemp.goods, obj));
                    break;
                case PowerPage.EditTemp.goodslist.name:     /*  商品列表  */
                    var json = $.extend(true, {}, PowerPage.EditTemp.goodslist, obj);
                    json = $.extend(true, {}, PowerPage.EditTemp.goods, json);
                    result = PowerPage.Format.FormatGoods($.extend(true, {}, PowerPage.EditTemp.goods, PowerPage.EditTemp.goodslist, obj));
                    break;
                case PowerPage.EditTemp.contents.name:      /*  内容  */
                    result = PowerPage.Format.FormatContents($.extend(true, {}, PowerPage.EditTemp.contents, obj));
                    break;
                case PowerPage.EditTemp.contentslist.name:  /*  内容列表  */
                    var json = $.extend(true, {}, PowerPage.EditTemp.contentslist, obj);
                    json = $.extend(true, {}, PowerPage.EditTemp.contents, json);
                    result = PowerPage.Format.FormatContents($.extend(true, {}, PowerPage.EditTemp.contents, PowerPage.EditTemp.contentslist, obj));
                    break;
                case PowerPage.EditTemp.contentstaglist.name:      /*  内容  */
                    result = PowerPage.Format.FormatContentsTagList($.extend(true, {}, PowerPage.EditTemp.contentstaglist, obj));
                    break;
                case PowerPage.EditTemp.contentstaglist1.name:      /*  内容1  */
                    result = PowerPage.Format.FormatContents($.extend(true, {}, PowerPage.EditTemp.contentstaglist1, obj));
                    break;
                case PowerPage.EditTemp.imagead.name:       /*  图片广告  */
                    result = PowerPage.Format.FormatImageAd($.extend(true, {}, PowerPage.EditTemp.imagead, obj));
                    break;
                /*  case PowerPage.EditTemp.cube.name:        魔方
                    result = PowerPage.Format.FormatImageAd($.extend(true, {}, PowerPage.EditTemp.cube, obj));
                    break;  */
                case PowerPage.EditTemp.title.name:         /*  标题  */
                    result = PowerPage.Format.FormatTitle($.extend(true, {}, PowerPage.EditTemp.title, obj));
                    break;
                case PowerPage.EditTemp.textnav.name:       /*  文本导航  */
                    result = PowerPage.Format.FormatTextNav($.extend(true, {}, PowerPage.EditTemp.textnav, obj));
                    break;
                case PowerPage.EditTemp.switchnav.name:       /*  切换导航  */
                    result = PowerPage.Format.FormatSwitchNav($.extend(true, {}, PowerPage.EditTemp.switchnav, obj));
                    break;
                /*  case PowerPage.EditTemp.imagenav.name:    图片导航
                    result = PowerPage.Format.FormatTextNav($.extend(true, {}, PowerPage.EditTemp.imagenav, obj));
                    break;
                case PowerPage.EditTemp.link.name:          关联链接
                    result = PowerPage.Format.FormatTextNav($.extend(true, {}, PowerPage.EditTemp.link, obj));
                    break;
                case PowerPage.EditTemp.search.name:        商品搜索
                    result = PowerPage.Format.FormatSearch(PowerPage.EditTemp.search);
                    break;
                case PowerPage.EditTemp.showcase.name:      橱窗
                    result = PowerPage.Format.FormatTextNav($.extend(true, {}, PowerPage.EditTemp.showcase, obj));
                    break;  */
                case PowerPage.EditTemp.line.name:          /*  辅助线  */
                    result = PowerPage.Format.FormatLine(PowerPage.EditTemp.line);
                    break;
                case PowerPage.EditTemp.space.name:         /*  辅助空白  */
                    result = PowerPage.Format.FormatSpace($.extend(true, {}, PowerPage.EditTemp.space, obj));
                    break;
                /*  case PowerPage.EditTemp.component.name:   自定义模块
                    result = PowerPage.Format.FormatSpace($.extend(true, {}, PowerPage.EditTemp.component, obj));
                    break;  */
                case PowerPage.EditTemp.store.name:         /*  进入店铺  */
                    result = PowerPage.Format.FormatStore(PowerPage.EditTemp.store);
                    break;
                /*  case PowerPage.EditTemp.tag_list.name:    商品列表1
                    var json = $.extend(true, {}, PowerPage.EditTemp.tag_list, obj);
                    json = $.extend(true, {}, PowerPage.EditTemp.goods, json);
                    result = PowerPage.Format.FormatGoods($.extend(true, {}, PowerPage.EditTemp.goods, PowerPage.EditTemp.tag_list, obj));
                    break;
                case PowerPage.EditTemp.tags.name:          商品列表2
                    var json = $.extend(true, {}, PowerPage.EditTemp.tags, obj);
                    json = $.extend(true, {}, PowerPage.EditTemp.goods, json);
                    result = PowerPage.Format.FormatGoods($.extend(true, {}, PowerPage.EditTemp.goods, PowerPage.EditTemp.tags, obj));
                    break;  */
                case PowerPage.EditTemp.audio.name:         /*  音频  */
                    result = PowerPage.Format.FormatAudio($.extend(true, {}, PowerPage.EditTemp.audio, obj));
                    break;
                case PowerPage.EditTemp.audiolist.name:     /*  音频列表  */
                    var json = $.extend(true, {}, PowerPage.EditTemp.audiolist, obj);
                    json = $.extend(true, {}, PowerPage.EditTemp.audio, json);
                    result = PowerPage.Format.FormatAudio($.extend(true, {}, PowerPage.EditTemp.audio, PowerPage.EditTemp.audiolist, obj));
                    break;
                case PowerPage.EditTemp.video.name:         /*  视频  */
                    result = PowerPage.Format.FormatVideo($.extend(true, {}, PowerPage.EditTemp.video, obj));
                    break;
                case PowerPage.EditTemp.videolist.name:     /*  视频列表  */
                    var json = $.extend(true, {}, PowerPage.EditTemp.videolist, obj);
                    json = $.extend(true, {}, PowerPage.EditTemp.video, json);
                    result = PowerPage.Format.FormatVideo($.extend(true, {}, PowerPage.EditTemp.video, PowerPage.EditTemp.videolist, obj));
                    break;
                case PowerPage.EditTemp.notice.name:        /*  公告  */
                    result = PowerPage.Format.FormatNotice($.extend(true, {}, PowerPage.EditTemp.notice, obj));
                    break;
                case PowerPage.EditTemp.coupon.name:        /*  优惠券  */
                    result = PowerPage.Format.FormatCoupon($.extend(true, {}, PowerPage.EditTemp.coupon, obj));
                    break;
            }
            return result;
        },
        /*  初始化编辑盒子  */
        FormatBox: function(obj) {
            var group = $('<div></div>');
            group.addClass("control-group");
            var action = $('<div></div>');
            action.addClass("actions");
            var sort = $('<div></div>');
            sort.addClass("sort");
            sort.html('<i class="sort-handler"></i>');
            action.html('<div class="actions-wrap">' +
                '<span class="action edit">编辑</span>' +
                (obj.candelete == null ? '<div class="close_bomb">' +
                    '<a href="javascript:;" class="close_btn" type="button"><span class="action delete">删除</span></a>' +
                    '<div class="close_box text-right">' +
                        '<span class="colse_txt text-center">您确定删除么?</span>' +
                        '<a href="javascript:;" class="btn btn-info deleteOKBtn" style="margin-right: 5px">确定</a>' +
                        '<a href="javascript:;" class="btn btn-default delectCloseBtn">取消</a>' +
                    '</div>' +
                '</div>': '') +
            '</div>');
            group.html(PowerPage.Format.Format(obj));
            var box = $('<div class="app-field clearfix"></div>');
            box.append(group);
            box.append(action);
            box.append(sort);
            if (obj.config) {
                PowerPage.Dom.Configs.append(box);
            } else {
                PowerPage.Dom.Fields.append(box);
            }
            /*  打开删除面板  */
            box.find(".action.delete").click(function() {
                $(this).parents('.close_bomb').find('.close_box').addClass('in');
            });
            /*  确认删除  */
            box.find(".deleteOKBtn").click(function() {
                var _this = $(this);
                _this.parentsUntil(".ui-sortable").remove();
                PowerPage.Common.LastClick();
            });
            /*  取消删除  */
            box.find(".delectCloseBtn").click(function() {
                $(this).parents('.close_box').removeClass('in');
            });
        },
        /*  盒子回调,返回对象  */
        FormatBoxReturn: function(obj) {
            return PowerPage.Format.Format(obj);
        },
        /*  类别  */
        FormatCategroy: function(obj) {
            var box = $('<div></div>');
            box.append('<h1 class="page-title" style="background-color:' + obj.background + '">' +
                '<span>' + obj.categroyname + '</span>' +
            '</h1>');
            box.find("desc").remove();
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  主页头部  */
        FormatMainTop: function(obj) {
            var box = $('<div class="tpl-shop"></div>');
            var head = $('<div class="tpl-shop-header" style="background-image: url(' + PowerPage.Common.AddPicHost(obj.backgroundpic) + '); background-color: ' + obj.backgroundcolor + ';">' +
                '<div class="tpl-shop-title">' + obj.shopname + '</div>' +
                '<div class="tpl-shop-avatar">' +
                    '<img src="' + PowerPage.Common.AddPicHost(obj.logo) + '" alt="' + obj.shopname + '">' +
                '</div>' +
            '</div>');
            var content = $('<div class="tpl-shop-content">' +
                '<ul class="clearfix">' + 
                    '<li><a href="javascript:;">' + 
                        '<span class="count">' + obj.allgoods + '</span>' +
                        '<span class="text">全部商品</span>' +
                    '</a></li>' +
                    '<li><a href="javascript:;">' +
                        '<span class="count">' + obj.newgoods + '</span>' +
                        '<span class="text">上新商品</span>' +
                    '</a></li>' +
                    '<li><a href="javascript:;">' +
                        '<span class="count user"></span>' +
                        '<span class="text">我的订单</span>' +
                    '</a></li>' +
                '</ul> </div>');
            box.append(head);
            box.append(content);
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  添加页面标题  */
        FormatPageTitle: function(obj) {
            var box = $('<div class="app-field clearfix" style="background-color:' + obj.background + '"></div>');
            var append = $.extend(PowerPage.EditTemp.pagetitle, obj);
            box.html('<h1><span>' + append.title + '</span></h1><desc>' + JSON.stringify(append) + '</desc>');
            return box;
        },
        /*  格式化富文本  */
        FormatRich: function(obj) {
            var box = $('<div style="background-color:' + obj.background + '"></div>');
            var richbox = $('<div class="custom-richtext"></div>');
            if (obj.fullscreen) {
                richbox.addClass("custom-richtext-fullscreen");
            }
            richbox.html(decodeURIComponent(obj.content));
            box.append(richbox);
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  商品  */
        FormatGoods: function(obj) {
            var box = $('<ul class="sc-goods-list clearfix"></ul>');
            box.addClass("size-" + obj.size);
            switch (obj.sizetype) {
                case 0:
                    box.addClass("card");
                    break;
                case 1:
                    box.addClass("waterfall");
                    break;
                case 2:
                    box.addClass("normal");
                    break;
                case 3:
                    box.addClass("promotion");
                    break;
            }
            if (obj.size == 3) {
                box.addClass("list");
            } else {
                box.addClass("pic");
            }
            var goods = [];
            if (obj.goods.length == 0) {
                if (obj.formatempty == null) {
                    $.extend(true, goods, PowerPage.EditTemp.defaultval.goods, obj.goods);
                    if (obj.size != 1) {
                        goods.pop();
                    }
                } else {
                    goods = obj.goods;
                }
            } else {
                goods = obj.goods;
            }
            for (var i = 0; i < goods.length; i++) {
                var goodscard = $('<li class="goods-card"></li>');
                var a = $('<a href="/view-app/dialog/goods.html?goodsid=' + goods[i].id + '" class="link js-goods clearfix"></a>');
                var photo = $('<div class="photo-block"></div>');
                var img = $('<img src=""/>');
                var info = $('<div class="info"></div>');
                var title = $('<p class="goods-title">' + goods[i].name + '</p>');
                var price = $('<p class="goods-price"><em>￥' + goods[i].price + '</em></p>');
                var desc = $('<p class="goods-sub-title c-black ">' + goods[i].desc + '</p>');
                var buy = $('<div class="goods-buy btn' + obj.buytype + '"></div>');
                if (obj.showname || obj.size == 3) {
                    info.append(title);

                } else {
                    info.addClass("info-no-title");
                }
                /*  显示商品描述并显示样式为大图  */
                if (obj.showdesc && obj.size == 0) {
                    info.append(desc);
                }
                if (obj.showprice) {
                    info.addClass("info-price");
                    info.append(price);
                }
                switch (obj.size) {
                    case 0:
                        goodscard.addClass("big-pic");
                        break;
                    case 1:
                        goodscard.addClass("small-pic");
                        break;
                    case 2:
                        if (i % 3 == 0) {
                            goodscard.addClass("big-pic");
                        } else {
                            goodscard.addClass("small-pic");
                        }
                        break;
                    case 3:
                        break;
                }
                switch (obj.sizetype) {
                    case 0:
                        goodscard.addClass("card");
                        break;
                    case 1:
                        goodscard.attr("class", "sc-waterfall-half");
                        break;
                    case 2:
                        goodscard.addClass("normal");
                        break;
                    case 3:
                        goodscard.addClass("promotion");
                        break;
                }
                img.attr("src", PowerPage.Common.AddPicHost(goods[i].pic));
                photo.append(img);
                a.append(photo);
                a.append(info);
                if (obj.sizetype == 3 && obj.size == 1) {
                    buy.html("我要抢购");
                }
                if (obj.showbuy && obj.sizetype != 2) {
                    a.append(buy);
                }
                goodscard.append(a);
                box.append(goodscard);
            }
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  内容  */
        FormatContents: function(obj) {
            var box = $('<ul class="sc-goods-list clearfix"></ul>');
            box.addClass("size-" + obj.size);
            switch (obj.sizetype) {
                case 0:
                    box.addClass("card");
                    break;
                case 1:
                    box.addClass("waterfall");
                    break;
                case 2:
                    box.addClass("normal");
                    break;
                case 3:
                    box.addClass("promotion");
                    break;
            }
            if (obj.size == 3) {
                box.addClass("list");
            } else {
                box.addClass("pic");
            }
            var contents = [];
            if (obj.contents.length == 0) {
                if (obj.formatempty == null) {
                    $.extend(true, contents, PowerPage.EditTemp.defaultval.contents, obj.contents);
                    if (obj.size != 1) {
                        contents.pop();
                    }
                } else {
                    contents = obj.contents;
                }
            } else {
                contents = obj.contents;
            }
            for (var i = 0; i < contents.length; i++) {
                var contentscard = $('<li class="goods-card"></li>');
                var a = $('<a href="'+ contents[i].url + '" class="link js-goods clearfix"></a>');
                var photo = $('<div class="photo-block"></div>');
                var img = $('<img src="' + contents[i].pic + '"/>');
                var info = $('<div class="info"></div>');
                var title = $('<p class="goods-title">' + contents[i].name + '</p>');
                var price = $('<p class="goods-price"><em>￥' + contents[i].price + '</em></p>');
                var desc = $('<p class="goods-sub-title c-black ">' + contents[i].desc + '</p>');
                var buy = $('<div class="goods-buy btn' + obj.buytype + '"></div>');
                if (obj.showname || obj.size == 3) {
                    info.append(title);
                } else {
                    info.addClass("info-no-title");
                }
                /*  显示商品描述并显示样式为大图  */
                if ( (obj.showdesc && obj.size == 0) || (obj.showdesc && obj.size == 3)){
                    info.append(desc);
                }
                if (obj.showprice) {
                    info.addClass("info-price");
                    info.append(price);
                }
                switch (obj.size) {
                    case 0:
                        contentscard.addClass("big-pic");
                        break;
                    case 1:
                        contentscard.addClass("small-pic");
                        break;
                    case 2:
                        if (i % 3 == 0) {
                            contentscard.addClass("big-pic");
                        } else {
                            contentscard.addClass("small-pic");
                        }
                        break;
                    case 3:
                        break;
                }
                switch (obj.sizetype) {
                    case 0:
                        contentscard.addClass("card");
                        break;
                    case 1:
                        contentscard.attr("class", "sc-waterfall-half");
                        break;
                    case 2:
                        contentscard.addClass("normal");
                        break;
                    case 3:
                        contentscard.addClass("promotion");
                        break;
                }
                img.attr("src", PowerPage.Common.AddPicHost(contents[i].pic));
                photo.append(img);
                a.append(photo);
                a.append(info);
                if (obj.sizetype == 3 && obj.size == 1) {
                    buy.html("我要抢购");
                }
                if (obj.showbuy && obj.sizetype != 2) {
                    a.append(buy);
                }
                contentscard.append(a);
                box.append(contentscard);
            }
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  内容类别  */
        FormatContentscategroy: function(obj) {
            var box = $('<div></div>');
            box.append('<h1 class="page-title" style="background-color:' + obj.background + '">' +
                '<span>' + obj.categroyname + '</span>' +
            '</h1>');
            box.append(PowerPage.Format.FormatContents(obj));
            box.find("desc").remove();
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  内容分组  */
        FormatContentsTagList: function(obj) {
            var box = $('<div class="custom-tag-list"><div class="custom-tag-list-goods"></div></div>');
            var group = $('<ul class="custom-tag-list-goods-list"></ul>');
            box.find('.custom-tag-list-goods').append(group);
            var contentstaglist = [];
            if (obj.navs.length == 0) {
                $.extend(true, contentstaglist, PowerPage.EditTemp.defaultval.contentstaglist, obj.navs);      
            } else {
                contentstaglist = obj.navs;
            }
            for ( var i = 0; i < contentstaglist.length ; i++ ) {
                box.find('ul').append('<li class="custom-tag-list-single-goods clearfix">' +
                    '<div class="custom-tag-list-goods-img">' +
                        '<img src="' + contentstaglist[i].pic + '" style="display: inline;">' +
                    '</div>'+
                    '<div class="custom-tag-list-goods-detail">' +
                        '<p class="custom-tag-list-goods-title">' + contentstaglist[i].name + '</p>' +
                        '<span class="custom-tag-list-goods-price">￥' + contentstaglist[i].price + '</span>'+
                        '<a class="custom-tag-list-goods-buy" id="' + contentstaglist[i].id + '" href="' + contentstaglist[i].url + '"><span></span></a>'+
                    '</div>'+
                '</li>');
            }
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;    
        },
        FormatContentsTagList1:function(obj){
            alert("1");
            return "1234";
            PowerPage.Format.FormatContents(obj);
        },
        /*  图片广告  */
        FormatImageAd: function(obj) {
            if (obj.pics.length == 0) {
                obj.pics = $.extend(PowerPage.EditTemp.defaultval.imageadpic, obj.pics);
            }
            if (obj.showtype == 0) {
                /*  var box = $('<div class="custom-image-swiper"></div>');  */
                /*  var swiper_wrapper = $('<div class="swiper-wrapper"></div>');  */
                var box = $('<div id="topBannerList" class="carousel slide" data-ride="carousel"></div>');
                var boxNav = $('<ol class="carousel-indicators"></ol>');
                var swiper_wrapper = $('<div class="carousel-inner" role="listbox"></div>');
                for (var i = 0; i < obj.pics.length; i++) {
                    /*  swiper_wrapper.append('<img src="' + PowerPage.Common.AddPicHost(obj.pics[i].pic) + '"/>');  */
                    /*  swiper_wrapper.append('<div class="swiper-slide">' +
                        '<a href="javascript: void(0);">' +
                            '<h3 class="title">' + obj.pics[i].name + '</h3>' +
                            '<img src="' + PowerPage.Common.AddPicHost(obj.pics[i].pic) + '" />' +
                        '</a>' +
                    '</div>');  */
                    boxNav.append('<li data-target="#topBannerList" data-slide-to="' + i + '" class="' + ( i == 0 ? 'active': '') + '"></li>');
                    swiper_wrapper.append('<div class="item ' + ( i == 0 ? 'active': '') + '">'+
                        '<img src="' + PowerPage.Common.AddPicHost(obj.pics[i].pic) + '" alt="...">'+
                        '<div class="carousel-caption">' + obj.pics[i].name + '</div>'+
                    '</div>');
                }
                var switcNav = $('<a class="left carousel-control" href="#topBannerList" role="button" data-slide="prev">' +
                    '<span class="fa fa-fw fa-angle-double-left" aria-hidden="true"></span>'+
                '</a>'+
                '<a class="right carousel-control" href="#topBannerList" role="button" data-slide="next">'+
                    '<span class="fa fa-fw fa-angle-double-right" aria-hidden="true"></span>'+
                '</a>');
                box.append(boxNav);
                box.append(swiper_wrapper);
                box.append(switcNav);
                box.append('<desc>' + JSON.stringify(obj) + '</desc>');
                return box;
            } else if (obj.showtype == 1) {
                if (obj.showsize == 0) {
                    var box = $('<ul class="custom-image clearfix"></ul>');
                    for (var i = 0; i < obj.pics.length; i++) {
                        box.append('<li>' + (obj.pics[i].name != "" ? '<h3 class="title">' + obj.pics[i].name + '</h3>' : '') + '<img src="' + PowerPage.Common.AddPicHost(obj.pics[i].pic) + '"/></li>');
                    }
                    box.append('<desc>' + JSON.stringify(obj) + '</desc>');
                    return box;
                } else if (obj.showsize == 1) {
                    var box = $('<ul class="custom-image clearfix"></ul>');
                    for (var i = 0; i < obj.pics.length; i++) {
                        box.append('<li class="custom-image-small">' + (obj.pics[i].name != "" ? '<h3 class="title">' + obj.pics[i].name + '</h3>' : '') + '<img src="' + PowerPage.Common.AddPicHost(obj.pics[i].pic) + '"/></li>');
                    }
                    box.append('<desc>' + JSON.stringify(obj) + '</desc>');
                    return box;
                }
            }
        },
        /*  标题  */
        FormatTitle: function(obj) {
            var box = $('<div></div>');
            if (obj.template == 0) {
                var titlebox = $('<div class="custom-title-noline" style="background:' + obj.background + '"></div>');
                var customtitle = $('<div class="custom-title"></div>');
                switch (obj.align) {
                    case 0:
                        customtitle.addClass("text-left");
                        break;
                    case 1:
                        customtitle.addClass("text-center");
                        break;
                    case 2:
                        customtitle.addClass("text-right");
                        break;
                }
                var title = $('<h2 class="title">' + obj.title + '</h2>');
                if (obj.linkname != "") {
                    title.append('<span class="custom-title-link-container"><span class="custom-title-link"><span class="gray">-</span> <a>' + obj.linkname + '</a></span></span>');
                }
                var subtitle = $('<p class="sub_title">' + obj.subtitle + '</p>');
                customtitle.append(title);
                customtitle.append(subtitle);
                titlebox.append(customtitle);
                box.append(titlebox);
                box.append('<desc>' + JSON.stringify(obj) + '</desc>');
                return box;
            } else if (obj.template == 1) {
                var titlebox = $('<div class="custom-title"></div>');
                var title = $('<h2 class="title">' + obj.title + '</h2>');
                var subtitle = $('<p class="sub_title"></p>');
                if (obj.date != "") {
                    subtitle.append('<span class="sub_title_date">' + obj.date + '</span>');
                }
                if (obj.author != "") {
                    subtitle.append('<span class="sub_title_author">' + obj.author + '</span>');
                }
                if (obj.linkname != "") {
                    subtitle.append('<a class="sub_title_link" href="javascript:;">' + obj.linkname + '</a>');
                }
                titlebox.append(title);
                titlebox.append(subtitle);
                box.append(titlebox);
                box.append('<desc>' + JSON.stringify(obj) + '</desc>');
                return box;
            }
        },
        /*  文本导航  */
        FormatTextNav: function(obj) {
            var textnavs = [];
            if (obj.navs.length == 0) {
                $.extend(true, textnavs, PowerPage.EditTemp.defaultval.textnav, obj.navs);
            } else {
                textnavs = obj.navs;
            }
            var box = $('<div class="custom-nav clearfix"><ul></ul></div>');
            for (var i = 0; i < textnavs.length; i++) {
                var li = $('<li><a class="clearfix" href="' + textnavs[i].url + '">' +
                    '<span class="custom-nav-title">' + 
                        textnavs[i].name +
                    '</span>' + 
                    '<i class="pull-right right-arrow"></i>' +
                    '</a></li>');
                box.find('ul').append(li);
            }
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  切换导航  */
        FormatSwitchNav: function(obj) {
            var switchnavs = [];
            if (obj.navs.length == 0) {
                $.extend(true, switchnavs, PowerPage.EditTemp.defaultval.switchnav, obj.navs);
            } else {
                switchnavs = obj.navs;
            }
            var box = $('<div class="switch-nav swiper-container clearfix"><ul class="swiper-wrapper"></ul></div>');
            for (var i = 0; i < switchnavs.length; i++) {
                var li = $('<li class="swiper-slide '+ (i == obj.deval-1 ? 'active' : '') +'">' +
                    '<a class="btn" href="' + switchnavs[i].url + '">' +
                        switchnavs[i].name +
                    '</a></li>');
                box.find('ul').append(li);
            }
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  商品搜索  */
        FormatSearch: function(obj) {
            var box = $('<div class="custom-search">' +
                '<form action="' + obj.url + '" method="GET">' +
                    '<input type="hidden" name="shopid" value="' + PowerPage.Set.ShopMess.id + '">' +
                    '<input type="text" class="custom-search-input" name="key" placeholder="商品搜索：请输入商品关键字">' +
                    '<button type="submit" class="custom-search-button">搜索</button>' +
                '</form>' +
                '</div>');
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  辅助线  */
        FormatLine: function(obj) {
            var box = $('<div class="custom-line-wrap"><hr class="custom-line"></div>');
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  辅助空白  */
        FormatSpace: function(obj) {
            var box = $('<div class="custom-white text-center" style="height: ' + obj.height + 'px;"></div>');
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  进入店铺  */
        FormatStore: function(obj) {
            var box = $('<div class="custom-store block-item">' +
                '<a class="custom-store-link clearfix" href="javascript:;">' +
                    '<div class="custom-store-img"></div>' +
                    '<div class="custom-store-name">' +
                        PowerPage.Set.ShopMess.shopname +
                    '</div>' +
                    '<div class="custom-store-enter">进入店铺</div>' +
                '</a>' +
            '</div>');
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  音频模板  */
        FormatAudio: function(obj) {
            var box = $('<ul class="items reading active"></ul>');
            var audio = [];
            if (obj.audio.length == 0) {
                $.extend(true, audio, PowerPage.EditTemp.defaultval.audio, obj.audio);      
            } else {
                audio = obj.audio;
            }
            for ( var i = 0; i < audio.length ; i++ ) {
                box.append('<li class="item music">' +
                    '<a href="javascript:;" class="titleMusic" id="' + audio[i].id + '">' +
                        '<i class="fa fa-wifi"></i>' +
                        '<title class="bookName custom-audio-title">' + audio[i].title +'</title>' +
                        '<span class="dec">' + audio[i].desc + '</span>' +
                        '<time>' + audio[i].time + '</time>' +
                        '<audio loop="' + audio[i].loop +'" src="' + audio[i].src +'" class="hide" style="display:none"></audio>' +
                    '</a>' +
                '</li>');
            }
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  视频模板  */
        FormatVideo: function(obj) {
            var box = $('<div></div>');
            var group = $('<ul class="items reading active"></ul>');
            box.append(group);
            var video = [];
            if (obj.video.length == 0) {
                $.extend(true, video, PowerPage.EditTemp.defaultval.video, obj.video);         
            } else {
                video = obj.video;
            }
            for ( var i = 0; i < video.length ; i++ ) {
                box.find('ul').append('<li class="item">' +
                    '<video controls="" id="' + video[i].id + '" width="100%" height="auto">' +
                        '<source src="' + video[i].src + '" type="video/mp4" />' +
                    '</video>' +
                '</li>');
            }
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  公告  */
        FormatNotice: function(obj) {
            var box = $('<dvi class="custom-notice"></div>');
            box.append('<div class="custom-notice-inner">' +
                '<div class="custom-notice-scroll">' +
                    '<span> 公告：' +
                        obj.value + 
                    '</span>' +
                '</div>' +
            '</div>');
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
        /*  优惠券模板  */
        FormatCoupon: function(obj) {
            var box = $('<ul class="custom-coupon clearfix">' +
                '<li><a href="javascript:;">' +
                    '<div class="custom-coupon-price"><span>￥</span>100</div>' +
                    '<div class="custom-coupon-desc">满500元可用</div>' +
                '</a></li>' +
                '<li><a href="javascript:;">' +
                    '<div class="custom-coupon-price"><span>￥</span>100</div>' +
                    '<div class="custom-coupon-desc">满500元可用</div>' +
                '</a></li>' +
                '<li><a href="javascript:;">' +
                    '<div class="custom-coupon-price"><span>￥</span>100</div>' +
                    '<div class="custom-coupon-desc">满500元可用</div>' +
                '</a></li>'+
            '</ul>');
            box.append('<desc>' + JSON.stringify(obj) + '</desc>');
            return box;
        },
    },
    /*  格式工厂 (编辑模板)  */
    Modify: {
        /*  格式入口  */
        Modify: function(obj) {
            obj = eval('(' + obj + ')');
            switch (obj.name) {
                case PowerPage.EditTemp.categroy.name:  /*  商品类别  */
                    PowerPage.Modify.ModifyCategroy(obj);
                    break;
                case PowerPage.EditTemp.maintop.name:   /*  主页头部  */
                    PowerPage.Modify.ModifyMainTop(obj);
                    break;
                case PowerPage.EditTemp.pagetitle.name: /*  页面标题  */
                    PowerPage.Modify.ModifyPageTitle(obj);
                    break;
                case PowerPage.EditTemp.richtext.name:  /*  富文本  */
                    PowerPage.Modify.ModifyRich(obj);
                    break;
                case PowerPage.EditTemp.goods.name:     /*  商品  */
                    PowerPage.Modify.ModifyGoods(obj);
                    break;
                case PowerPage.EditTemp.goodslist.name: /*  商品列表  */
                    PowerPage.Modify.ModifyGoodsList(obj);
                    break;
                case PowerPage.EditTemp.contents.name:     /*  内容  */
                    PowerPage.Modify.ModifyContents(obj);
                    break;
                case PowerPage.EditTemp.contentslist.name: /*  内容列表  */
                    PowerPage.Modify.ModifyContentsList(obj);
                    break;
                case PowerPage.EditTemp.contentstaglist.name:/*  内容分组  */
                    PowerPage.Modify.ModifyContentsTagList(obj);
                    break;
                case PowerPage.EditTemp.contentstaglist1.name:/*  内容分组  */
                    PowerPage.Modify.ModifyContentsTagList1(obj);
                    break;
                case PowerPage.EditTemp.contentscategroy.name:/*  内容类别  */
                    PowerPage.Modify.ModifyContentsCategroy(obj);
                    break;
                case PowerPage.EditTemp.imagead.name:   /*  图片广告  */
                    PowerPage.Modify.ModifyImageAd(obj);
                    break;
                case PowerPage.EditTemp.title.name:     /*  标题  */
                    PowerPage.Modify.ModifyTitle(obj);
                    break;
                case PowerPage.EditTemp.textnav.name:   /*  文本导航  */
                    PowerPage.Modify.ModifyTextNav(obj);
                    break;
                case PowerPage.EditTemp.switchnav.name:   /*  切换导航  */
                    PowerPage.Modify.ModifySwitchNav(obj);
                    break;
                case PowerPage.EditTemp.search.name:    /*  商品搜素  */
                    PowerPage.Modify.ModifySearch(obj);
                    break;
                case PowerPage.EditTemp.line.name:      /*  辅助线  */
                    PowerPage.Modify.ModifyLine(obj);
                    break;
                case PowerPage.EditTemp.space.name:     /*  辅助空白  */
                    PowerPage.Modify.ModifySpace(obj);
                    break;
                case PowerPage.EditTemp.audio.name:     /*  语音  */
                    PowerPage.Modify.ModifyAudio(obj);
                    break;
                case PowerPage.EditTemp.audiolist.name: /*  语音列表  */
                    PowerPage.Modify.ModifyAudioList(obj);
                    break;
                case PowerPage.EditTemp.video.name:     /*  语音  */
                    PowerPage.Modify.ModifyVideo(obj);
                    break;
                case PowerPage.EditTemp.videolist.name: /*  语音列表  */
                    PowerPage.Modify.ModifyVideoList(obj);
                    break;
                case PowerPage.EditTemp.notice.name:    /*  公告  */
                    PowerPage.Modify.ModifyNotice(obj);
                    break;
                case PowerPage.EditTemp.coupon.name:    /*  优惠券  */
                    PowerPage.Modify.ModifyCoupon(obj);
                    break;
            }
        },
        /*  修改 商品类别  */
        ModifyCategroy: function(obj) {
            var box = $('<div></div>');
            var categroys = $('<div class="form-horizontal"></div>');
            var group = $('<div class="control-group">' +
                '<label class="control-label">' +
                    '<em class="required">*</em>分类名称：' +
                '</label>' +
                '<div class="controls">' +
                    '<input class="input-xxlarge" type="text" name="title" value="' + obj.categroyname + '">' +
                '</div>' +
            '</div>');
            categroys.append(group);
            group = $('<div class="control-group">' +
                '<div class="controls">' +
                    '<label class="checkbox">' +
                        '<input type="checkbox" name="show_tag_title" value="1" ' + (obj.showcategroyname ? 'checked=""' : '') + '>' +
                        '<span>页面上显示商品分组名称</span>' +
                    '</label>' +
                '</div>' +
            '</div>');
            categroys.append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">第一优先级：</label>' +
                '<div class="controls">' +
                    '<select name="first_priority">' +
                        '<option value="1" selected="">序号越大越靠前</option>' +
                        '<option value="2">最热的排在前面</option>' +
                    '</select>' +
                '</div>' +
            '</div>');
            categroys.append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">第二优先级：</label>' +
                '<div class="controls">' +
                    '<select name="second_priority">' +
                        '<option value="1" selected="">创建时间越晚越靠前</option>' +
                        '<option value="2">创建时间越早越靠前</option>' +
                        '<option value="3">最热的排在前面</option>' +
                    '</select>' +
                '</div>' +
            '</div>');
            categroys.append(group);
            box.append(categroys);
            PowerPage.Dom.SidBar.html(box);
            PowerPage.Dom.SidBar.find("input[name='title']").blur(function() {
                obj.categroyname = $(this).val();
                PowerPage.Common.ReView(obj);
            });
            PowerPage.Dom.SidBar.find("input[name='show_tag_title']").click(function() {
                obj.showcategroyname = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
            });
            PowerPage.Dom.SidBar.find("select[name='first_priority']").val(obj.firstorder);
            PowerPage.Dom.SidBar.find("select[name='first_priority']").change(function() {
                obj.firstorder = $(this).val();
                PowerPage.Common.ReView(obj);
            });
            PowerPage.Dom.SidBar.find("select[name='second_priority']").val(obj.secondorder);
            PowerPage.Dom.SidBar.find("select[name='second_priority']").change(function() {
                obj.secondorder = $(this).val();
                PowerPage.Common.ReView(obj);
            });
        },
        /*  修改 主页头部  */
        ModifyMainTop: function(obj) {
            var box = $('<div class="form-horizontal"></div>');
            var group = $('<div class="control-group">' +
                '<label class="control-label">背景图片：</label>' +
                '<div class="controls">' +
                    /*  '<div class="tpl-shop-header" style="width: 320px; background-image: url('+ obj.backgroundpic + ');">' +
                        '<a class="close-modal small hide js-delete-image" data-index="0">×</a>' +
                    '</div>' + */
                    '<a class="control-action js-trigger-image" href="javascript: void(0);">修改</a>' +
                    '<p class="help-desc">最佳尺寸：640 x 200 像素。</p>' +
                    '<p class="help-desc">尺寸不匹配时，图片将被压缩或拉伸以铺满画面。</p>' +
                '</div>' +
            '</div>');
            box.append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">背景颜色：</label>' +
                '<div class="controls">' +
                    '<input type="color" value="#ffffff" name="backgroundColor">' +
                    '<button class="btn js-reset-bg" type="button">重置</button>' +
                '</div>' +
            '</div>');
            box.append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">Logo：</label>' +
                '<div class="controls">' +
                    '<img src="images/public/logo.jpg" width="80" height="80" class="thumb-image" style="width: 80px; height: 80px;">' +
                    '<a class="control-action js-trigger-avatar" href="javascript: void(0);">修改店铺Logo</a>' +
                '</div>' +
            '</div>');
            box.append(group);
            PowerPage.Dom.SidBar.html(box);
            PowerPage.Dom.SidBar.find(".js-trigger-image").click(function() {
                selectpic(function(result) {
                    obj.backgroundpic = result[0];
                    PowerPage.Common.ReView(obj);
                });
            });
            PowerPage.Dom.SidBar.find("input[name='backgroundColor']").change(function() {
                obj.backgroundcolor = $(this).val();
                PowerPage.Common.ReView(obj);
            });
            /*  颜色重置  */
            box.find(".js-reset-bg").click(function() {
                obj.backgroundcolor = PowerPage.EditTemp.defaultval.maintop.background;
                box.find("input[name='backgroundColor']").val(PowerPage.EditTemp.defaultval.maintop.background);
                PowerPage.Common.ReView(obj);
                $(".editing desc").html(JSON.stringify(obj));
            });
            PowerPage.Dom.SidBar.find(".js-trigger-avatar").click(function() {
                selectpic(function(result) {
                    obj.logo = result[0];
                });
                PowerPage.Common.ReView(obj);
            });
        },
        /*  修改 页面标题  */
        ModifyPageTitle: function(obj) {
            var box = $('<div class="form-horizontal"></div>');
            var group = $('<div class="control-group">' +
                '<label class="control-label"><em class="required">*</em>页面名称：</label>' +
                '<div class="controls">' +
                    '<input class="input-xxlarge" type="text" name="title" value="' + obj.name + '">' +
                '</div>' +
            '</div>');
            box.append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">页面描述：</label>' +
                '<div class="controls">' +
                    '<input class="input-xxlarge" type="text" name="description" value="" placeholder="用户通过微信分享给朋友时，会自动显示页面描述">' +
                '</div>' +
            '</div>');
            box.append(group);
            /*  group = $('<div class="control-group">' +
                '<label class="control-label"><em class="required">*</em>分类：</label>' +
                '<div class="controls">' +
                    '<a href="javascript:;" class="js-choose-pageTitle control-action">选择分类</a>' +
                '</div>' +
            '</div>');  */
             group = $('<div class="control-group">' +
                '<label class="control-label"><em class="required">*</em>分类：</label>' +
                '<div class="controls">' +
                    '<div class="dropdown hover">' +
                        '<a class="js-dropdown-toggle dropdown-toggle control-action" href="javascript:void(0);">' +
                            '<span class="label label-success" id=" '+ obj.id +'"" url="' + obj.src + '">' + obj.categroydesc + '</span>' +
                            '<i class="caret"></i>' +
                        '</a>' +
                    '</div>' +
                '</div>' +
            '</div>');
            PowerPage.Common.AddSelectPageGroupLink(group.find('.dropdown'), function() {                
                obj.categroy=PowerPage.Dom.SidBar.find('.dropdown>a>span').attr("id");
                /*  console.log('回调成功后改变的ID\t'+ PowerPage.Dom.SidBar.find('.dropdown>a>span').attr("id") + '\n修改后的JSON' + JSON.stringify(obj));  */
                PowerPage.Common.ReView(obj);
            });
            box.append(group);
            var pageTitle = $('<div class="js-audio-style-region form-horizontal"><ul class="choices ui-audio-sortable"></ul></div>');
            group = $('<div class="control-group">' +
                '<label class="control-label">背景颜色：</label>' +
                '<div class="controls">' +
                    '<input type="color" value="' + obj.background + '" name="color">' +
                    '<button class="btn js-reset-bg" type="button">重置</button>' +
                    '<p class="help-desc">背景颜色只在手机端显示。</p>' +
                '</div>' +
            '</div>');
            box.append(group);
            PowerPage.Dom.SidBar.html(box);
            box.find("input[name='title']").val(obj.title);
            box.find("input[name='title']").blur(function() {
                obj.title = $(this).val();
                $(".editing h1 span").html(obj.title);
                $(".editing desc").html(JSON.stringify(obj));
            });
            box.find("input[name='description']").val(obj.desc);
            box.find("input[name='description']").blur(function() {
                obj.desc = $(this).val();
                $(".editing desc").html(JSON.stringify(obj));
            });
            /*  添加分类  */
            /*  $(".js-choose-pageTitle").click(function() {
                var _this = $(this);
                selectpagegroup(function(result) {
                    obj.categroy = result.id;
                    alert(result.id);
                    obj.categroydesc = result.name;
                    _this.html(result.name);
                    PowerPage.Common.ReView(obj);
                });
            });  */
            /*  更改颜色  */
            box.find("input[name='color']").change(function() {
                obj.background = $(this).val();
                PowerPage.Common.ReView(obj);
                /*  console.log('修改后的颜色'+ obj.background + '\t' + PowerPage.EditTemp);  */
                $(".editing desc").html(JSON.stringify(obj));
            });
            /*  颜色重置  */
            box.find(".js-reset-bg").click(function() {
                obj.background = PowerPage.EditTemp.defaultval.pagetitle.background;
                box.find("input[name='color']").val(PowerPage.EditTemp.defaultval.pagetitle.background);
                PowerPage.Common.ReView(obj);
                $(".editing desc").html(JSON.stringify(obj));
            });
        },
        /*  修改 富文本  */
        ModifyRich: function(obj) {
            var box = $('<div></div>');
            box.addClass("form-horizontal");
            var bg = $('<div></div>');
            bg.addClass("control-group");
            bg.html('<div class="pull-left">' +
                '<label class="control-label">背景颜色：</label>' +
                '<div class="input-append"><input type="color" value="' + obj.background + '" name="color" class="span1">' +
                    '<button class="btn js-reset-bg" type="button">重置</button>' +
                '</div>' +
            '</div>' +
            '<div class="pull-left">' +
                '<label class="control-label">是否全屏：</label>' +
                '<label class="checkbox inline">' +
                '<input type="checkbox" name="fullscreen" ' + (obj.fullscreen ? 'checked=""' : '') + '> 全屏显示</label>' +
            '</div>');
            box.append(bg);
            var name = Math.random();
            var ubox = $('<script id="container' + name + '" name="content" type="text/plain"></script>');
            if (obj.content != PowerPage.EditTemp.richtext.content) {
                ubox.html(decodeURIComponent(obj.content));
            }
            box.append(ubox);
            $(".app-sidebar-inner").html(box);
            if (PowerPage.Set.HasUedit) {
                /*  UE.getEditor('container').destroy();  */
            }
            /*  UE.getEditor('container').destroy();  */
            var ue = UE.getEditor('container' + name);
            PowerPage.Set.HasUedit = true;
            /*  更改演示  */
            box.find("input[name='color']").change(function() {
                obj.background = $(this).val();
                PowerPage.Common.ReView(obj);
                /*  console.log('修改后的颜色'+ obj.background + '\t' + PowerPage.EditTemp);  */
                $(".editing desc").html(JSON.stringify(obj));
            });
            /*  颜色重置  */
            box.find(".js-reset-bg").click(function() {
                obj.background = PowerPage.EditTemp.defaultval.richtext.background;
                box.find("input[name='color']").val(PowerPage.EditTemp.defaultval.richtext.background);
                PowerPage.Common.ReView(obj);
                $(".editing desc").html(JSON.stringify(obj));
            });
            $("input[name='fullscreen']").click(function() {
                obj.fullscreen = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
            });
            ue.addListener("contentChange", function() {
                obj.content = encodeURIComponent(ue.getContent());
                $(".app-entry .editing .custom-richtext").html(ue.getContent());
                $(".editing desc").html(JSON.stringify(obj));
            });
            baidu.editor.commands['myimage'] = {
                execCommand: function() {
                    selectpic(function(result) {
                        for (var i = 0; i < result.length; i++) {
                            ue.setContent('<img src="' + pichost + result[i] + '"/>', true);
                        }
                    }, 10);
                    return true;
                },
                queryCommandState: function() {}
            };
        },
        /*  修改 商品  */
        ModifyGoods: function(obj) {
            var box = $('<div></div>');
            var controls = $('<div class="controls"></div>');
            var goods = $('<div class="form-horizontal"></div>');
            var group = $('<div class="control-group">' +
                '<label class="control-label">选择商品：</label>' +
                '<div class="controls">' +
                    '<ul class="module-goods-list clearfix ui-sortable" name="goods"></ul>' +
                '</div>' +
            '</div>');
            for (var i = 0; i < obj.goods.length; i++) {
                group.find('ul').append('<li class="sort">' +
                    '<data style="display:none;">' + JSON.stringify(obj.goods[i]) + '</data>' +
                    '<a href="' + obj.goods[i].url + '" target="_blank">' +
                        '<img src="' + PowerPage.Common.AddPicHost(obj.goods[i].pic) + '" alt="商品图" width="50" height="50">' +
                    '</a>' +
                    '<a class="close-modal js-delete-goods small hide" data-id="" title="删除">×</a>' +
                '</li>');
            }
            group.find('ul').append('<li>' +
                '<a href="javascript:void(0);" class="js-add-goods add-goods">' +
                    '<i class="icon-add"></i>'+
                '</a>' +
            '</li>');
            goods.append(group);
            var region = $('<div class="js-goods-style-region form-horizontal"></div>');
            group = $('<div class="control-group">' +
                '<label class="control-label">列表样式：</label>' +
                '<div class="controls">' +
                    '<label class="radio inline">' +
                        '<input type="radio" name="size" ' + (obj.size == 0 ? 'checked=""' : '') + ' value="0">大图'+
                    '</label>' +
                    '<label class="radio inline">' +
                        '<input type="radio" name="size" ' + (obj.size == 1 ? 'checked=""' : '') + ' value="1">小图' +
                    '</label>' +
                    '<label class="radio inline">' +
                        '<input type="radio" name="size" ' + (obj.size == 2 ? 'checked=""' : '') + ' value="2">一大两小' +
                    '</label>' +
                    '<label class="radio inline">' +
                        '<input type="radio" name="size" ' + (obj.size == 3 ? 'checked=""' : '') + ' value="3">详细列表' +
                    '</label>' +
                '</div>' +
            '</div>');
            region.append(group);
            group = $('<div class="control-group"></div>');
            var controls = $('<div class="controls"></div>');
            var controlscard = $('<div class="controls-card"> </div>');
            var sizetype = $('<div class="controls-card-tab"></div>');
            var sizetype1 = $('<label class="radio inline"><input type="radio" name="size_type" value="0" ' + (obj.sizetype == 0 ? 'checked=""' : '') + '>卡片样式</label>');
            var sizetype2 = $('<label class="radio inline"><input type="radio" name="size_type" value="1" ' + (obj.sizetype == 1 ? 'checked=""' : '') + '>瀑布流</label>');
            var sizetype3 = $('<label class="radio inline"><input type="radio" name="size_type" value="2" ' + (obj.sizetype == 2 ? 'checked=""' : '') + '>极简样式</label>');
            var sizetype4 = $('<label class="radio inline"><input type="radio" name="size_type" value="3" ' + (obj.sizetype == 3 ? 'checked=""' : '') + '>促销</label>');
            /*  选择小图模式  */
            if ( obj.size == 1 ) {
                sizetype.append(sizetype1);
                sizetype.append(sizetype2);
                sizetype.append(sizetype3);
                sizetype.append(sizetype4);
            } else {
                sizetype.append(sizetype1);
                sizetype.append(sizetype3);
            }
            controlscard.append(sizetype);
            var carditem = $('<div class="controls-card-item"></div>');
            var showbuybox = $('<label class="checkbox inline">' +
                '<input type="checkbox" name="buy_btn" value="1" ' + (obj.showbuy ? 'checked=""' : '') + '>显示购买按钮'+
            '</label>');
            var buytype = $('<div style="margin: 10px 0 0 15px;">' +
                '<label class="radio inline"><input type="radio" name="buy_btn_type" value="1" ' + (obj.buytype == 1 ? 'checked=""' : '') + '>样式1</label>' +
                '<label class="radio inline"><input type="radio" name="buy_btn_type" value="2" ' + (obj.buytype == 2 ? 'checked=""' : '') + '>样式2</label>' +
                '<label class="radio inline"><input type="radio" name="buy_btn_type" value="3" ' + (obj.buytype == 3 ? 'checked=""' : '') + '>样式3</label>' +
                '<label class="radio inline"><input type="radio" name="buy_btn_type" value="4" ' + (obj.buytype == 4 ? 'checked=""' : '') + '>样式4</label>' +
            '</div>');
            carditem.append(showbuybox);
            if (obj.showbuy) {
                carditem.append(buytype);
            }
            controlscard.append(carditem);
            var showname = $('<div class="controls-card-item">' +
                '<label class="checkbox inline">' +
                    '<input type="checkbox" name="title" value="0" ' + (obj.showname ? 'checked=""' : '') + '>显示商品名 (小图不显示名称)' +
                '</label>' +
            '</div>');
            if (obj.size != 3) {
                controlscard.append(showname);
            }
            var showdesc = $('<div class="controls-card-item">' +
                '<label class="checkbox inline">' +
                    '<input type="checkbox" name="show_sub_title" value="0" ' + (obj.showdesc ? 'checked=""' : '') + '>显示商品简介' +
                '</label>' +
            '</div>');
            if (obj.size == 0) {
                controlscard.append(showdesc);
            }
            var showprice = $('<div class="controls-card-item">' +
                '<label class="checkbox inline">' +
                    '<input type="checkbox" name="price" value="1" ' + (obj.showprice ? 'checked=""' : '') + '>显示价格' +
                '</label>' +
            '</div>');
            if (obj.size != 3) {
                controlscard.append(showprice);
            }
            controls.append(controlscard);
            group.append(controls);
            region.append(group);
            box.append(goods);
            box.append(region);
            PowerPage.Dom.SidBar.html(box);
            $("input[name='buy_btn']").click(function() {
                obj.showbuy = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });
            $("input[name='size']").change(function() {
                obj.size = parseInt($(this).val());
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });
            $("input[name='size_type']").change(function() {
                obj.sizetype = parseInt($(this).val());
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });
            $("input[name='buy_btn_type']").change(function() {
                obj.buytype = parseInt($(this).val());
                PowerPage.Common.ReView(obj);
            });
            $("input[name='title']").click(function() {
                obj.showname = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
            });
            $("input[name='price']").click(function() {
                obj.showprice = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
            });
            $("input[name='show_sub_title']").click(function() {
                obj.showdesc = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
            });
            $(".add-goods").click(function() {
                selectgoods(function(result) {
                    for (var i = 0; i < result.length; i++) {
                        obj.goods.push(result[i]);
                    }
                    PowerPage.Common.ReView(obj);
                    PowerPage.Common.EditClick();
                });
            });
            PowerPage.Dom.SidBar.find(".ui-sortable").sortable({
                containment: 'parent',
                items: 'li.sort',
                update: function() {
                    PowerPage.ReDate.ReDataGoods(obj);
                }
            });
            PowerPage.Dom.SidBar.find(".js-delete-goods").click(function() {
                $(this).parent().remove();
                PowerPage.ReDate.ReDataGoods(obj);
            });
        },
        /*  修改 商品列表  */
        ModifyGoodsList: function(obj) {
            PowerPage.Modify.ModifyGoods(obj);
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).html("");
            var group = $('<div class="control-group">' +
                '<label class="control-label">商品来源：</label>' +
                '<div class="controls">'+
                    '<a href="javascript:void(0);" class="js-add-goods add-goods control-action">' + obj.categroydesc + '</a>' +
                    '<p class="help-desc">选择商品来源后，左侧实时预览暂不支持显示其包含的商品数据</p>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">显示个数：</label>' +
                '<div class="controls">' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="0" ' + (obj.goodscount == 0 ? 'checked=""' : '') + '>6</label>' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="1" ' + (obj.goodscount == 1 ? 'checked=""' : '') + '>12</label>' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="2" ' + (obj.goodscount == 2 ? 'checked=""' : '') + '>18</label>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            $("input[name='goods_number_type']").change(function() {
                obj.goodscount = parseInt($(this).val());
                PowerPage.Common.ReView(obj);
            });
            $(".add-goods").click(function() {
                var _this = $(this);
                selectgoodsgroup(function(result) {
                    obj.categroy = result.id;
                    obj.categroydesc = result.name;
                    _this.html(result.name);
                    PowerPage.Common.ReView(obj);
                });
            });
        },
        /*  修改 内容  */
        ModifyContents: function(obj) {
            var box = $('<div></div>');
            var controls = $('<div class="controls"></div>');
            var contents = $('<div class="form-horizontal"></div>');
            var group = $('<div class="control-group">' +
                '<label class="control-label">选择内容：</label>' +
                '<div class="controls">' +
                    '<ul class="module-goods-list clearfix ui-sortable" name="goods"></ul>' +
                '</div>' +
            '</div>');
            for (var i = 0; i < obj.contents.length; i++) {
                group.find('ul').append('<li class="sort">' +
                    '<data style="display:none;">' + JSON.stringify(obj.contents[i]) + '</data>' +
                    '<a href="' + obj.contents[i].url + '" target="_blank">' +
                        '<img src="' + PowerPage.Common.AddPicHost(obj.contents[i].pic) + '" alt="内容图" width="50" height="50">' +
                    '</a>' +
                    '<a class="close-modal js-delete-goods small hide" data-id="" title="删除">×</a>' +
                '</li>');
            }
            group.find('ul').append('<li>' +
                '<a href="javascript:void(0);" class="js-add-goods add-goods">' +
                    '<i class="icon-add"></i>'+
                '</a>' +
            '</li>');
            contents.append(group);
            var region = $('<div class="js-goods-style-region form-horizontal"></div>');
            group = $('<div class="control-group">' +
                '<label class="control-label">列表样式：</label>' +
                '<div class="controls">' +
                    '<label class="radio inline">' +
                        '<input type="radio" name="size" ' + (obj.size == 0 ? 'checked=""' : '') + ' value="0">大图'+
                    '</label>' +
                    '<label class="radio inline">' +
                        '<input type="radio" name="size" ' + (obj.size == 1 ? 'checked=""' : '') + ' value="1">小图' +
                    '</label>' +
                    '<label class="radio inline">' +
                        '<input type="radio" name="size" ' + (obj.size == 2 ? 'checked=""' : '') + ' value="2">一大两小' +
                    '</label>' +
                    '<label class="radio inline">' +
                        '<input type="radio" name="size" ' + (obj.size == 3 ? 'checked=""' : '') + ' value="3">详细列表' +
                    '</label>' +
                '</div>' +
            '</div>');
            region.append(group);
            group = $('<div class="control-group"></div>');
            var controls = $('<div class="controls"></div>');
            var controlscard = $('<div class="controls-card"></div>');
            var sizetype = $('<div class="controls-card-tab"></div>');
            var sizetype1 = $('<label class="radio inline"><input type="radio" name="size_type" value="0" ' + (obj.sizetype == 0 ? 'checked=""' : '') + '>卡片样式</label>');
            /*  var sizetype2 = $('<label class="radio inline"><input type="radio" name="size_type" value="1" ' + (obj.sizetype == 1 ? 'checked=""' : '') + '>瀑布流</label>');  */
            var sizetype3 = $('<label class="radio inline"><input type="radio" name="size_type" value="2" ' + (obj.sizetype == 2 ? 'checked=""' : '') + '>极简样式</label>');
            var sizetype4 = $('<label class="radio inline"><input type="radio" name="size_type" value="3" ' + (obj.sizetype == 3 ? 'checked=""' : '') + '>促销</label>');
            /*  选择小图模式  */
            if ( obj.size == 1 ) {
                sizetype.append(sizetype1);
                /*  sizetype.append(sizetype2);  */
                sizetype.append(sizetype3);
                sizetype.append(sizetype4);
            } else {
                sizetype.append(sizetype1);
                sizetype.append(sizetype3);
            }
            controlscard.append(sizetype);
            var carditem = $('<div class="controls-card-item"></div>');
            var showbuybox = $('<label class="checkbox inline">' +
                '<input type="checkbox" name="buy_btn" value="1" ' + (obj.showbuy ? 'checked=""' : '') + '>显示购买按钮'+
            '</label>');
            var buytype = $('<div style="margin: 10px 0 0 15px;">' +
                '<label class="radio inline"><input type="radio" name="buy_btn_type" value="1" ' + (obj.buytype == 1 ? 'checked=""' : '') + '>样式1</label>' +
                '<label class="radio inline"><input type="radio" name="buy_btn_type" value="2" ' + (obj.buytype == 2 ? 'checked=""' : '') + '>样式2</label>' +
                '<label class="radio inline"><input type="radio" name="buy_btn_type" value="3" ' + (obj.buytype == 3 ? 'checked=""' : '') + '>样式3</label>' +
                '<label class="radio inline"><input type="radio" name="buy_btn_type" value="4" ' + (obj.buytype == 4 ? 'checked=""' : '') + '>样式4</label>' +
            '</div>');
            carditem.append(showbuybox);
            if (obj.showbuy) {
                carditem.append(buytype);
            }
            controlscard.append(carditem);
            var showname = $('<div class="controls-card-item">' +
                '<label class="checkbox inline">' +
                    '<input type="checkbox" name="title" value="0" ' + (obj.showname ? 'checked=""' : '') + '>显示内容名 (小图不显示名称)' +
                '</label>' +
            '</div>');
            if (obj.size != 3) {
                controlscard.append(showname);
            }
            var showdesc = $('<div class="controls-card-item">' +
                '<label class="checkbox inline">' +
                    '<input type="checkbox" name="show_sub_title" value="0" ' + (obj.showdesc ? 'checked=""' : '') + '>显示内容简介' +
                '</label>' +
            '</div>');
            if (obj.size == 0 || obj.size == 3 ) {
                controlscard.append(showdesc);
            }
            var showprice = $('<div class="controls-card-item">' +
                '<label class="checkbox inline">' +
                    '<input type="checkbox" name="price" value="1" ' + (obj.showprice ? 'checked=""' : '') + '>显示价格' +
                '</label>' +
            '</div>');
            //if (obj.size != 3) {
                controlscard.append(showprice);
            //}
            controls.append(controlscard);
            group.append(controls);
            region.append(group);
            box.append(contents);
            box.append(region);
            PowerPage.Dom.SidBar.html(box);
            $("input[name='buy_btn']").click(function() {
                obj.showbuy = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });
            $("input[name='size']").change(function() {
                obj.size = parseInt($(this).val());
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });
            $("input[name='size_type']").change(function() {
                obj.sizetype = parseInt($(this).val());
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });
            $("input[name='buy_btn_type']").change(function() {
                obj.buytype = parseInt($(this).val());
                PowerPage.Common.ReView(obj);
            });
            $("input[name='title']").click(function() {
                obj.showname = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
            });
            $("input[name='price']").click(function() {
                obj.showprice = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
            });
            $("input[name='show_sub_title']").click(function() {
                obj.showdesc = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
            });
            $(".add-goods").click(function() {
                selectcontents(function(result) {
                    for (var i = 0; i < result.length; i++) {
                        obj.contents.push(result[i]);
                    }
                    PowerPage.Common.ReView(obj);
                    PowerPage.Common.EditClick();
                });
            });
            PowerPage.Dom.SidBar.find(".ui-sortable").sortable({
                containment: 'parent',
                items: 'li.sort',
                update: function() {
                    PowerPage.ReDate.ReDataContents(obj);
                }
            });
            PowerPage.Dom.SidBar.find(".js-delete-goods").click(function() {
                $(this).parent().remove();
                PowerPage.ReDate.ReDataContents(obj);
            });
        },
        /*  修改 内容列表  */
        ModifyContentsList: function(obj) {
            PowerPage.Modify.ModifyContents(obj);
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).html("");
            var group = $('<div class="control-group">' +
                '<label class="control-label">内容来源：</label>' +
                '<div class="controls">'+
                    '<a href="javascript:void(0);" class="js-add-goods add-goods control-action">' + obj.categroydesc + '</a>' +
                    '<p class="help-desc">选择内容来源后，左侧实时预览暂不支持显示其包含的内容数据</p>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">显示个数：</label>' +
                '<div class="controls">' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="0" ' + (obj.contentscount == 0 ? 'checked=""' : '') + '>6</label>' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="1" ' + (obj.contentscount == 1 ? 'checked=""' : '') + '>12</label>' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="2" ' + (obj.contentscount == 2 ? 'checked=""' : '') + '>18</label>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            $("input[name='goods_number_type']").change(function() {
                obj.contentscount = parseInt($(this).val());
                PowerPage.Common.ReView(obj);
            });
            $(".add-goods").click(function() {
                var _this = $(this);
                selectcontentsgroup(function(result) {
                    obj.categroy = result.id;
                    obj.categroydesc = result.name;
                    _this.html(result.name);
                    PowerPage.Common.ReView(obj);
                });                    
            });
        },
        ModifyContentsTagList1:function(obj){
            PowerPage.Modify.ModifyContents(obj);
            $(".add-goods").off();
            $(".add-goods").click(function() {
                selectcontentsgroups(function(result) {
                    for (var i = 0; i < result.length; i++) {
                        obj.contents.push(result[i]);
                    }
                    PowerPage.Common.ReView(obj);
                    PowerPage.Common.EditClick();
                });
            });


        },
        /*  修改 内容分组  */
        ModifyContentsTagList: function(obj) {
            var box = $('<div class="form-horizontal"></div>');
            var group = $('<div class="control-group js-collection-region"></div>');
            var databox = $('<ul class="choices ui-sortable"></ul>');
            for (var i = 0; i < obj.navs.length; i++) {
                var dataitem = $('<li class="choice">' +
                    '<div class="control-group">' +
                        '<label class="control-label"><em class="required">*</em>导航名称：</label>' +
                        '<div class="controls">' +
                            '<input type="text" name="title" value="' + obj.navs[i].name + '">' +
                        '</div>' +
                    '</div>' +
                    '<div class="control-group">' +
                        '<label class="control-label"><em class="required">*</em>链接到：</label>' +
                        '<div class="controls">' +
                            '<div class="dropdown hover">' +
                                '<a class="js-dropdown-toggle dropdown-toggle control-action" href="javascript:void(0);">' +
                                    '<span class="label label-success" price="' + obj.navs[i].price + '" pic="' + obj.navs[i].pic + '" id="' + obj.navs[i].id + '" url="' + obj.navs[i].url + '">' + obj.navs[i].urldesc + '</span>' +
                                    '<i class="caret"></i>' +
                                '</a>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="actions">' +
                        '<span class="action delete close-modal" title="删除">×</span>' +
                    '</div>' +
                '</li>');
                PowerPage.Common.AddSelectContentsTagGroupLink(dataitem.find('.dropdown'), function() {
                    PowerPage.ReDate.ReDataContentsTagList(obj);
                });
                databox.append(dataitem);
            }
            group.append(databox);
            box.append(group);
            group = $('<div class="control-group options" style="display: block;">' +
                '<a class="add-option js-add-option" href="javascript:void(0);"><i class="icon-add"></i> 添加一个文本导航</a>' +
            '</div>');
            box.append(group);
            PowerPage.Dom.SidBar.html(box);
            PowerPage.Dom.SidBar.find(".js-add-option").click(function() {
                obj.navs.push($.extend(true, {}, PowerPage.EditTemp.defaultval.contentstaglist[0]));
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });
            PowerPage.Dom.SidBar.find("input").blur(function() {
                PowerPage.ReDate.ReView(obj);
            });
            PowerPage.Dom.SidBar.find(".ui-sortable").sortable({
                containment: 'parent',
                items: 'li.choice',
                update: function() {
                    PowerPage.ReDate.ReDataContentsTagList(obj);
                }
            });
            PowerPage.Dom.SidBar.find(".delete").click(function() {
                $(this).parents('.choice').remove();
                PowerPage.ReDate.ReDataContentsTagList(obj);
            });
        },
        /*  修改 内容类别  */
        ModifyContentsCategroy: function(obj) {
            PowerPage.Modify.ModifyContents(obj);
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).html("");
            var group = $('<div class="control-group">' +
                '<label class="control-label">' +
                    '<em class="required">*</em>分类名称：' +
                '</label>' +
                '<div class="controls">' +
                    '<input class="input-xxlarge" type="text" name="title" value="' + obj.categroyname + '">' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            group = $('<div class="control-group">' +
                '<div class="controls">' +
                    '<label class="checkbox">' +
                        '<input type="checkbox" name="show_tag_title" value="1" ' + (obj.showcategroyname ? 'checked=""' : '') + '>' +
                        '<span>页面上显示商品分组名称</span>' +
                    '</label>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">第一优先级：</label>' +
                '<div class="controls">' +
                    '<select name="first_priority">' +
                        '<option value="1" selected="">序号越大越靠前</option>' +
                        '<option value="2">最热的排在前面</option>' +
                    '</select>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">第二优先级：</label>' +
                '<div class="controls">' +
                    '<select name="second_priority">' +
                        '<option value="1" selected="">创建时间越晚越靠前</option>' +
                        '<option value="2">创建时间越早越靠前</option>' +
                        '<option value="3">最热的排在前面</option>' +
                    '</select>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            PowerPage.Dom.SidBar.find("input[name='title']").blur(function() {
                obj.categroyname = $(this).val();
                PowerPage.Common.ReView(obj);
            });
            PowerPage.Dom.SidBar.find("input[name='show_tag_title']").click(function() {
                obj.showcategroyname = $(this).is(":checked");
                PowerPage.Common.ReView(obj);
            });
            PowerPage.Dom.SidBar.find("select[name='first_priority']").val(obj.firstorder);
            PowerPage.Dom.SidBar.find("select[name='first_priority']").change(function() {
                obj.firstorder = $(this).val();
                PowerPage.Common.ReView(obj);
            });
            PowerPage.Dom.SidBar.find("select[name='second_priority']").val(obj.secondorder);
            PowerPage.Dom.SidBar.find("select[name='second_priority']").change(function() {
                obj.secondorder = $(this).val();
                PowerPage.Common.ReView(obj);
            });
        },
        /*  修改 图片广告  */
        ModifyImageAd: function(obj) {
            var box = $('<div class="form-horizontal"><p class="help-desc">注:暂不支持多组广告图,一个页面最多一组广告图</p></div>');
            if (obj.showtype == 0) {
                group = $('<div class="control-group">' +
                    '<label class="control-label">显示方式：</label>' +
                    '<div class="controls">'+
                        '<label class="radio inline"><input type="radio" name="show_method" value="0" checked="">折叠轮播</label>' +
                        '<label class="radio inline"><input type="radio" name="show_method" value="1">分开显示</label>' +
                    '</div>' +
                '</div>');
            } else if (obj.showtype == 1) {
                group = $('<div class="control-group">' +
                    '<label class="control-label">显示方式：</label>' +
                    '<div class="controls">'+
                        '<label class="radio inline"><input type="radio" name="show_method" value="0">折叠轮播</label>' +
                        '<label class="radio inline"><input type="radio" name="show_method" value="1" checked="">分开显示</label>' +
                    '</div>' +
                '</div>');
            }
            box.append(group);
            if (obj.showtype == 0) {
                group = $('<div class="control-group">' +
                    '<label class="control-label">显示大小：</label>' +
                    '<div class="controls">' +
                        '<label class="radio inline"><input type="radio" name="size" value="0" checked="">大图 </label>' +
                    '</div>' +
                '</div>');
            } else if (obj.showtype == 1) {
                if (obj.showsize == 0) {
                    group = $('<div class="control-group">' +
                        '<label class="control-label">显示大小：</label>' +
                        '<div class="controls">' +
                            '<label class="radio inline"><input type="radio" name="size" value="0" checked="">大图 </label>' +
                            '<label class="radio inline"> <input type="radio" name="size" value="1">小图</label>' +
                        '</div>' +
                    '</div>');
                } else if (obj.showsize == 1) {
                    group = $('<div class="control-group">' +
                        '<label class="control-label">显示大小：</label>' +
                        '<div class="controls">' +
                            '<label class="radio inline"><input type="radio" name="size" value="0" >大图</label>' +
                            '<label class="radio inline"><input type="radio" name="size" checked="" value="1">小图</label>' +
                        '</div>' +
                    '</div>');
                }
            }
            box.append(group);
            group = $('<div class="control-group js-choices-region"><ul class="choices ui-sortable"></ul></div>');
            for (var i = 0; i < obj.pics.length; i++) {
                if (obj.pics[i].pic != PowerPage.EditTemp.defaultval.imageadpic[0].pic) {
                    var dataitem = $('<li class="choice">' +
                        '<div class="choice-image">' +
                            '<img src="' + PowerPage.Common.AddPicHost(obj.pics[i].pic) + '" data-src="' + obj.pics[i].pic + '"  width="118" height="118" class="thumb-image">' +
                            '<a class="modify-image js-trigger-image" href="javascript: void(0);">重新上传</a>' +
                            '<div class="control-group">' +
                                '<div class="controls"></div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="choice-content">' +
                            '<div class="control-group">' +
                                '<label class="control-label">标题：</label>' +
                                '<div class="controls">' +
                                    '<input class="" type="text" name="title" value="' + obj.pics[i].name + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="control-group">' +
                                '<label class="control-label">链接：</label>' +
                                '<div class="controls"> <div class="dropdown hover">' +
                                    '<a class="js-dropdown-toggle dropdown-toggle control-action" href="javascript:void(0);">' +
                                        '<span class="label label-success" url="' + obj.pics[i].url + '" >' + obj.pics[i].urldesc + '</span>' +
                                        '<i class="caret"></i>' +
                                    '</a>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '<div class="actions">' +
                        '<span class="action delete close-modal" title="删除">×</span>' +
                    '</div>' +
                    '</li>');
                    PowerPage.Common.AddSelectLink(dataitem.find('.dropdown'), function() {
                        PowerPage.ReDate.ReDataImageAd(obj);
                    });
                    group.find(".choices").append(dataitem);
                }
            }
            box.append(group);
            group = $('<div class="control-group options"> <a href="javascript:void(0);" class="add-option js-add-option"><i class="icon-add"></i> 添加一个广告</a> </div>');
            box.append(group);
            PowerPage.Dom.SidBar.html(box);
            $(".choices .delete").click(function() {
                $(this).parentsUntil(".choices").remove();
                PowerPage.ReDate.ReDataImageAd(obj);
            });
            $("input[name='show_method']").change(function() {
                obj.showtype = $(this).val();
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });
            $("input[name='size']").change(function() {
                obj.showsize = $(this).val();
                PowerPage.Common.ReView(obj);
            });
            $(".js-add-option").click(function() {
                /*  obj.pics.push($.extend(true, {}, PowerPage.EditTemp.defaultval.imageadpic[0]));
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();  */
                if( JSON.stringify(obj.pics[0].id) == -1){
                    obj.pics.pop();
                }
                selectpic(function(result) {
                    for (var i = 0; i < result.length; i++) {
                        $(".editing .swiper-wrapper").append('<div class="swiper-slide"><img src="' + PowerPage.Common.AddPicHost(result[i]) + '" data-src="' + result[i] + '"/></div>');
                        obj.pics.push($.extend(true, {}, PowerPage.EditTemp.defaultval.imageadpic[0], {
                            pic: result[i]
                        }));
                    }
                    PowerPage.Common.ReView(obj);
                    PowerPage.Common.EditClick();
                });
            });
            $(".choices .choice input").blur(function() {
                PowerPage.ReDate.ReDataImageAd(obj);
            });
            $(".choices .choice .modify-image").click(function() {
                var _this = $(this);
                selectpic(function(result) {
                    _this.prev("img").attr("src", PowerPage.Common.AddPicHost(result[0]));
                    _this.prev("img").attr("data-src", result[0]);
                    PowerPage.ReDate.ReDataImageAd(obj);
                }, 1);
            });
            $(".choices").sortable({
                containment: 'parent',
                update: function() {
                    PowerPage.ReDate.ReDataImageAd(obj);
                }
            });
        },
        /*  修改 标题  */
        ModifyTitle: function(obj) {
            var box = $('<div class="form-horizontal"></div>');
            var group = $('<div class="control-group">' +
                '<label class="control-label"><em class="required">*</em>标题名：</label>' +
                '<div class="controls">' +
                    '<input type="text" name="title" value="" maxlength="100">' +
                '</div>' +
            '</div>');
            if (obj.title != PowerPage.EditTemp.title.title) {
                group.find("input").val(obj.title);
            }
            box.append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">标题模板：</label>' +
                '<div class="controls">' +
                    '<label class="radio inline"><input type="radio" name="title_template" value="0" ' + (obj.template == 0 ? "checked=" : "") + '>传统样式</label>' +
                    '<label class="radio inline"><input type="radio" name="title_template" value="1" ' + (obj.template == 1 ? "checked=" : "") + '>模仿微信图文页样式 </label>' +
                '</div>' +
            '</div>');
            box.append(group);
            if (obj.template == 0) {
                group = $('<div class="control-group">' +
                    '<label class="control-label">副标题：</label>' +
                    '<div class="controls">' +
                        '<input type="hidden" class="js-time-holder hasDatepicker" id="dp1455998869584">' +
                        '<input type="text" name="sub_title" value="' + obj.subtitle + '" maxlength="100" onclick="ShowDate(this)">' +
                        '<a href="javascript: void(0);" class="js-time">日期</a>' +
                    '</div>' +
                '</div>');
                box.append(group);
                group = $('<div class="control-group">' +
                    '<label class="control-label">显示：</label>' +
                    '<div class="controls">' +
                        '<label class="radio inline"><input type="radio" name="show_method" value="0" ' + (obj.align == 0 ? 'checked=""' : '') + '>居左显示 </label>' +
                        '<label class="radio inline"><input type="radio" name="show_method" value="1" ' + (obj.align == 1 ? 'checked=""' : '') + '>居中显示 </label>' +
                        '<label class="radio inline"><input type="radio" name="show_method" value="2" ' + (obj.align == 2 ? 'checked=""' : '') + '>居右显示 </label>' +
                    '</div>' +
                '</div>');
                box.append(group);
                group = $('<div class="control-group">' +
                    '<label class="control-label">背景颜色：</label>' +
                    '<div class="controls">' +
                        '<input type="color" value="' + obj.background + '" name="color">' +
                        '<button class="btn js-reset-bg" type="button">重置</button>' +
                    '</div>' +
                '</div>');
                box.append(group);
                group = $('<div class="control-group js-collection-region"><ul class="choices"></ul></div>');
                box.append(group);
                group = $('<div class="control-group options" style="display: block;">' +
                    '<a href="javascript:void(0);" class="add-option js-add-option"><i class="icon-add"></i> 添加一个文本导航</a>' +
                '</div>');
                box.append(group);
                PowerPage.Dom.SidBar.html(box);
                $("input[name='sub_title']").blur(function() {
                    obj.subtitle = $(this).val();
                    PowerPage.Common.ReView(obj);
                });
                $("input[type='color']").change(function() {
                    obj.background = $(this).val();
                    PowerPage.Common.ReView(obj);
                });
                $("input[name='show_method']").change(function() {
                    obj.align = parseInt($(this).val());
                    PowerPage.Common.ReView(obj);
                });
            } else if (obj.template == 1) {
                group = $('<div class="control-group">' +
                    '<label class="control-label">日期：</label>' +
                    '<div class="controls">' +
                        '<input type="text" name="wx_title_date" value="' + obj.date + '" maxlength="100" class="js-wx-time-holder span2 hasDatepicker" id="dp1456000360470" onclick="ShowDate(this)">' +
                    '</div>' +
                '</div>');
                box.append(group);
                group = $('<div class="control-group">' +
                    '<label class="control-label">作者：</label>' +
                    '<div class="controls">' +
                        '<input type="text" name="wx_title_author" value="' + obj.author + '" maxlength="100" class="span2">' +
                    '</div>' +
                '</div>');
                box.append(group);
                group = $('<div class="control-group">' +
                    '<label class="control-label">链接标题：</label>' +
                    '<div class="controls">' +
                        '<input type="text" name="wx_title_link" value="' + obj.linkname + '" maxlength="100" class="span2">' +
                    '</div>' +
                '</div>');
                box.append(group);
                group = $('<div class="control-group">' +
                    '<label class="control-label">链接地址：</label>' +
                    '<div class="controls">' +
                        '<label class="radio">' +
                            '<input type="radio" name="wx_title_link_type" value="0" checked="">引导关注' +
                            '<a href="/v2/setting/weixin" target="_blank" style="margin-left:20px" class="new-window">设置快速关注链接</a>' +
                        '</label>' +
                    '</div>' +
                '</div>');
                box.append(group);
                group = $('<div class="control-group">' +
                    '<div class="controls js-wx-link">' +
                        '<label class="radio wx-template-radio">' +
                            '<input type="radio" name="wx_title_link_type" value="1">其它链接' +
                            '<input type="hidden" name="wx_link_url">' +
                            '<div class="dropdown hover">' +
                                '<a class="js-dropdown-toggle dropdown-toggle control-action" href="javascript:void(0);">设置链接到的页面地址 <i class="caret"></i></a>' +
                                '<ul class="dropdown-menu">' +
                                    '<li><a class="js-modal-magazine" data-type="feature" href="javascript:void(0);">微页面及分类</a></li>' +
                                '</ul>' +
                            '</div>' +
                        '</label>' +
                    '</div>' +
                '</div>');
                box.append(group);
                PowerPage.Dom.SidBar.html(box);
                $("input[name='wx_title_date']").blur(function() {
                    obj.date = $(this).val();
                    PowerPage.Common.ReView(obj);
                });
                $("input[name='wx_title_author']").blur(function() {
                    obj.author = $(this).val();
                    PowerPage.Common.ReView(obj);
                });
                $("input[name='wx_title_link']").blur(function() {
                    obj.linkname = $(this).val();
                    PowerPage.Common.ReView(obj);
                });
            }
            $("input[name='title']").blur(function() {
                obj.title = $(this).val();
                PowerPage.Common.ReView(obj);
            });
            $("input[name='title_template']").change(function() {
                obj.template = $(this).val();
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });
        },
        /*  修改 文本导航  */
        ModifyTextNav: function(obj) {
            var box = $('<div class="form-horizontal"></div>');
            var group = $('<div class="control-group js-collection-region"></div>');
            var databox = $('<ul class="choices ui-sortable"></ul>');
            /*  console.log(obj.navs.length);  */
            for (var i = 0; i < obj.navs.length; i++) {
                var dataitem = $('<li class="choice">' +
                    '<div class="control-group">' +
                        '<label class="control-label"><em class="required">*</em>导航名称：</label>' +
                        '<div class="controls">' +
                            '<input type="text" name="title" value="' + obj.navs[i].name + '">' +
                        '</div>' +
                    '</div>' +
                    '<div class="control-group">' +
                        '<label class="control-label"><em class="required">*</em>链接到：</label>' +
                        '<div class="controls">' +
                            '<div class="dropdown hover">' +
                                '<a class="js-dropdown-toggle dropdown-toggle control-action" href="javascript:void(0);">' +
                                    '<span class="label label-success" url="' + obj.navs[i].url + '">' + obj.navs[i].urldesc + '</span>' +
                                    '<i class="caret"></i>' +
                                '</a>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="actions">' +
                        '<span class="action delete close-modal" title="删除">×</span>' +
                    '</div>' +
                '</li>');
                PowerPage.Common.AddSelectLink(dataitem.find('.dropdown'), function() {
                    PowerPage.ReDate.ReDataTextNav(obj);
                    /*  console.log(JSON.stringify(obj));  */
                });
                databox.append(dataitem);
            }
            group.append(databox);
            box.append(group);
            group = $('<div class="control-group options" style="display: block;">' +
                '<a class="add-option js-add-option" href="javascript:void(0);"><i class="icon-add"></i> 添加一个文本导航</a>' +
            '</div>');
            box.append(group);
            PowerPage.Dom.SidBar.html(box);
            PowerPage.Dom.SidBar.find(".js-add-option").click(function() {
                obj.navs.push($.extend(true, {}, PowerPage.EditTemp.defaultval.textnav[0]));
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });
            PowerPage.Dom.SidBar.find("input").blur(function() {
                PowerPage.ReDate.ReDataTextNav(obj);
            });
            PowerPage.Dom.SidBar.find(".ui-sortable").sortable({
                containment: 'parent',
                items: 'li.choice',
                update: function() {
                    PowerPage.ReDate.ReDataTextNav(obj);
                }
            });
            PowerPage.Dom.SidBar.find(".delete").click(function() {
                $(this).parents('.choice').remove();
                PowerPage.ReDate.ReDataTextNav(obj);
            });
        },
        /*  修改 切换导航  */
        ModifySwitchNav: function(obj) {
            var box = $('<div class="form-horizontal"></div>');
            var group=$('<div>默认显示：<select id="deval"><option value="1">第一项</option><option value="2">第二项</option><!--<option value="3">第三项</option><option value="4">第四项</option>--></select></div>');
            switch(obj.deval){
                case 1:group.find("option").eq(0).attr("selected","selected");break;
            case 2:group.find("option").eq(1).attr("selected","selected");break;
           /* case 3:group.find("option").eq(2).attr("selected","selected");break;
            case 4:group.find("option").eq(3).attr("selected","selected");break;*/
            }
            var databox = $('<ul class="choices ui-sortable"></ul>');
            /*obj.navs = PowerPage.EditTemp.defaultval.switchnav;????*/
            for (var i = 0; i < obj.navs.length; i++) {
                var dataitem = $('<li class="choice">' +
                    '<div class="control-group">' +
                        '<label class="control-label"><em class="required">*</em>导航名称：</label>' +
                        '<div class="controls">' +
                            '<input type="text" name="title" value="' + obj.navs[i].name + '">' +
                        '</div>' +
                    '</div>' +
                    '<div class="control-group">' +
                        '<label class="control-label"><em class="required">*</em>链接到：</label>' +
                        '<div class="controls">' +
                            '<div class="dropdown hover">' +
                                '<a class="js-dropdown-toggle dropdown-toggle control-action" href="javascript:void(0);">' +
                                    '<span class="label label-success" url="' + obj.navs[i].url + '">' + obj.navs[i].urldesc + '</span>' +
                                    '<i class="caret"></i>' +
                                '</a>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="actions">' +
                        '<span class="action delete close-modal" title="删除">×</span>' +
                    '</div>' +
                '</li>');
                PowerPage.Common.AddSelectLink(dataitem.find('.dropdown'), function() {
                    PowerPage.ReDate.ReDataTextNav(obj);
                    /*  console.log(JSON.stringify(obj));  */
                });
                databox.append(dataitem);
            }
            group.append(databox);

            box.append(group);

            group = $('<div class="control-group options" style="display: block;">' +
                '<a class="add-option js-add-option" href="javascript:void(0);"><i class="icon-add"></i> 添加一个文本导航</a>' +
            '</div>');
            box.append(group);
            PowerPage.Dom.SidBar.html(box);
            PowerPage.Dom.SidBar.find(".js-add-option").click(function() {
                obj.navs.push($.extend(true, {}, PowerPage.EditTemp.defaultval.switchnav[0]));
                PowerPage.Common.ReView(obj);
                PowerPage.Common.EditClick();
            });

            PowerPage.Dom.SidBar.find("input").blur(function() {
                PowerPage.ReDate.ReDataTextNav(obj);
            });
            PowerPage.Dom.SidBar.find(".ui-sortable").sortable({
                containment: 'parent',
                items: 'li.choice',
                update: function() {
                    PowerPage.ReDate.ReDataTextNav(obj);
                }
            });
            PowerPage.Dom.SidBar.find(".delete").click(function() {
                $(this).parents('.choice').remove();
                PowerPage.ReDate.ReDataTextNav(obj);
            });
            /*操作默认显示*/
            PowerPage.Dom.SidBar.find("#deval").change(function(){
                obj.deval=parseInt($(this).val());
                PowerPage.Common.ReView(obj);
            });
        },
        /*  修改 商品搜索  */
        ModifySearch: function(obj) {
            var box = $('<div class="app-component-desc">' +
                '<p>可随意插入任何页面和位置，方便粉丝快速搜索商品.</p>' +
                '<p>注意：记得给商品添加合适的商品标签吧。</p>' +
            '</div>');
            PowerPage.Dom.SidBar.html(box);
        },
        /*  修改 辅助线  */
        ModifyLine: function(obj) {
            var box = $('<div class="app-component-desc"><p>辅助线</p></div>');
            PowerPage.Dom.SidBar.html(box);
        },
        /*  修改 辅助空白  */
        ModifySpace: function(obj) {
            var box = $('<div class="form-horizontal"></div>');
            var group = $('<div class="control-group white-space-group">' +
                '<label class="control-label">空白高度：</label>' +
                '<div class="controls controls-slider">' +
                '<div class="js-slider white-space-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">' +
                '<a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 31.4286%;"></a>'+
                '</div>'+
                '<div class="slider-height"><span class="js-height">52</span> 像素</div>' +
                '</div>' +
            '</div>');
            box.append(group);
            PowerPage.Dom.SidBar.html(box);
        },
        /*  修改 进入店铺  */
        ModifyStore: function(obj) {
            var box = $('<div class="app-component-desc"><p>进入店铺</p></div>');
            PowerPage.Dom.SidBar.html(box);
        },
        /*  修改 语音  */
        ModifyAudio: function(obj) {
            var box = $('<div></div>');
            var group = $('<div class="form-horizontal">' +
                '<div class="control-group">' +
                    '<label class="control-label">选择商品：</label>' +
                    '<a href="javascript:;" class="js-choose-audio control-action">选择音频</a>' +
                '</div>' +
            '</div>');
            var audio = $('<div class="js-audio-style-region form-horizontal"><ul class="choices ui-audio-sortable"></ul></div>');
            for ( var i = 0; i < obj.audio.length; i++) {
                audio.find("ul").append('<li class="choice audio"><div class="control-group">' +
                    '<data style="display:none;">' + JSON.stringify(obj.audio[i]) + '</data>' +
                    '<label class="control-label">音频：</label>' +
                    '<div class="controls">' +
                        '<audio name="audio" src=" ' + obj.audio[i].src + ' " value=" ' + obj.audio[i].src + ' " class="hide"></audio>' +
                        '<span class="voice-player">' +
                        '<span class="stop">点击播放</span>' +
                        '<span class="second"></span>' +
                            '<i class="play" style="display:none;"></i>' +
                        '</span>' +
                    '</div>' +
                '</div>' +
                '<div class="control-group">' +
                    '<label class="control-label">标题：</label>' +
                    '<div class="controls">' +
                        '<input placeholder="" name="title" value="' + obj.audio[i].title + '" type="text" class="input-xxlarge">' +
                    '</div>' +
                '</div>' +
                '<div class="control-group">' +
                    '<label class="control-label">描述：</label>' +
                    '<div class="controls">' +
                        '<input placeholder="" name="desc" value="' + obj.audio[i].desc + '" type="text" class="input-xxlarge">' +
                    '</div>' +
                '</div>' +
                '<div class="control-group">' +
                    '<label class="control-label">时间：</label>' +
                    '<div class="controls">' +
                        '<input placeholder="" name="time" value="' + obj.audio[i].time + '" type="text" class="input-xxlarge" onclick="ShowDateNotTime(this)">' +
                    '</div>' +
                '</div>' +
                '<div class="control-group">' +
                    '<label class="control-label">循环：</label>' +
                    '<div class="controls">' +
                        '<label class="checkbox inline">' +
                            '<input name="loop" value="' + obj.audio[i].loop + '" type="checkbox"> 开启循环播放' +
                        '</label>' +
                    '</div>' +
                /*  '</div>' +
                '<div class="control-group">' +
                    '<label class="control-label">播放：</label>' +
                    '<div class="controls">' +
                        '<label class="radio inline"><input name="reload" value="1" type="radio"> 暂停后再恢复播放时，从头开始</label>' +
                        '<label class="radio inline"><input name="reload" value="0" type="radio" checked=""> 暂停后再恢复播放时，从暂停位置开始</label>' +
                    '</div>' +  */
                '</div>' +
                '<div class="actions"><span class="action delete close-modal" title="删除">×</span></div>' +
                '</li>');
            }
            box.append(group);
            box.append(audio);
            PowerPage.Dom.SidBar.html(box);
            box.find("input[name='title']").blur(function() {
                PowerPage.ReDate.ReDataAudio(obj);
            });
            box.find("input[name='desc']").blur(function() {
                PowerPage.ReDate.ReDataAudio(obj);
            });
            box.find("input[name='time']").blur(function() {
                PowerPage.ReDate.ReDataAudio(obj);
            });
            box.find(".js-choose-audio").click(function() {
                var _this = $(this);
                selectaudio(function(result) {
                    for (var i = 0; i < result.length; i++) {
                        obj.audio.push(result[i]);
                    }
                    PowerPage.Common.ReView(obj);
                    PowerPage.Common.EditClick();
                });
            });
            box.find("span.voice-player").click(function() {
                var ts = $(this).parents('.controls').children("audio.hide");
                if (ts[0].paused) {
                    $("ul.choices li").each(function(index, el) {
                        if( $(this).find('span.voice-player').hasClass('active') ) {
                            $(this).find('span.voice-player').removeClass('active'); 
                            $(this).find("audio.hide")[0].pause();
                        }
                    });
                    $(this).addClass('active');
                    ts[0].play();
                } else {
                    $(this).removeClass('active');
                    ts[0].pause();
                }
            });
            PowerPage.Dom.SidBar.find(".ui-audio-sortable").sortable({
                containment: 'parent',
                items: 'li.audio',
                update: function() {
                    $("ul.ui-audio-sortable").find("span.voice-player").removeClass('active');
                    PowerPage.ReDate.ReDataAudio(obj);
                }
            });
            PowerPage.Dom.SidBar.find(".delete").click(function() {                
                $(this).parents('.choice').remove();
                PowerPage.ReDate.ReDataAudio(obj);
            });
        },
        /*  修改 语音列表  */
        ModifyAudioList: function(obj) {
            /*  PowerPage.Modify.ModifyAudio(obj);  */
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).html("");
            var group = $('<div class="control-group">' +
                '<label class="control-label">音频来源：</label>' +
                '<div class="controls">' +
                    '<a href="javascript:void(0);" class="js-add-goods add-goods control-action">' + obj.categroydesc + '</a>' +
                    '<p class="help-desc">选择音频来源后，左侧实时预览暂不支持显示其包含的音频数据</p>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">显示个数：</label>' +
                '<div class="controls">' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="0" ' + (obj.audiocount == 0 ? 'checked=""' : '') + '>6</label>' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="1" ' + (obj.audiocount == 1 ? 'checked=""' : '') + '>12</label>' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="2" ' + (obj.audiocount == 2 ? 'checked=""' : '') + '>18</label>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            PowerPage.Dom.SidBar.find(".js-audio-style-region").eq(0).html("");
            $("input[name='goods_number_type']").change(function() {
                obj.audiocount = parseInt($(this).val());
                PowerPage.Common.ReView(obj);
            });
            $(".add-goods").click(function() {
                var _this = $(this);
                selectaudiolist(function(result) {
                    obj.categroy = result.id;
                    obj.categroydesc = result.name;
                    _this.html(result.name);
                    PowerPage.Common.ReView(obj);
                });
            });
        },
        /*  修改 视频  */
        ModifyVideo: function(obj) {
            var box = $('<div></div>');
            var group = $('<div class="form-horizontal">' +
                '<div class="control-group">' +
                    '<label class="control-label">选择商品：</label>' +
                    '<a href="javascript:;" class="js-choose-audio control-action">选择视频</a>' +
                '</div>' +
            '</div>');
            var video = $('<div class="js-video-style-region form-horizontal"><ul class="choices ui-video-sortable"></ul></div>');
            for ( var i = 0; i < obj.video.length; i++) {
                video.find("ul").append('<li class="choice video"><div class="control-group">' +
                    '<data style="display:none;">' + JSON.stringify(obj.video[i]) + '</data>' +
                    '<label class="control-label">音频：</label>' +
                    '<div class="controls">' +
                        '<video name="video" src=" ' + obj.video[i].src + ' " value=" ' + obj.video[i].src + ' " class="hide"></video>' +
                        '<span class="voice-player">' +
                        '<span class="stop">点击播放</span>' +
                        '<span class="second"></span>' +
                            '<i class="play" style="display:none;"></i>' +
                        '</span>' +
                    '</div>' +
                '</div>' +
                '<div class="control-group">' +
                    '<label class="control-label">标题：</label>' +
                    '<div class="controls">' +
                        '<input placeholder="" name="title" value="' + obj.video[i].title + '" type="text" class="input-xxlarge">' +
                    '</div>' +
                '</div>' +
                '<div class="control-group">' +
                    '<label class="control-label">描述：</label>' +
                    '<div class="controls">' +
                        '<input placeholder="" name="desc" value="' + obj.video[i].desc + '" type="text" class="input-xxlarge">' +
                    '</div>' +
                '</div>' +
                '<div class="control-group">' +
                    '<label class="control-label">时间：</label>' +
                    '<div class="controls">' +
                        '<input placeholder="" name="time" value="' + obj.video[i].time + '" type="text" class="input-xxlarge" onclick="ShowDateNotTime(this)">' +
                    '</div>' +
                '</div>' +
                '<div class="control-group">' +
                    '<label class="control-label">循环：</label>' +
                    '<div class="controls">' +
                        '<label class="checkbox inline">' +
                            '<input name="loop" value="' + obj.video[i].loop + '" type="checkbox"> 开启循环播放' +
                        '</label>' +
                    '</div>' +
                '</div>' +
                '<div class="actions"><span class="action delete close-modal" title="删除">×</span></div>' +
                '</li>');
            }
            box.append(group);
            box.append(video);
            PowerPage.Dom.SidBar.html(box);
            box.find("input[name='title']").blur(function() {
                PowerPage.ReDate.ReDataVideo(obj);
            });
            box.find("input[name='desc']").blur(function() {
                PowerPage.ReDate.ReDataVideo(obj);
            });
            box.find("input[name='time']").blur(function() {
                PowerPage.ReDate.ReDataVideo(obj);
            });
            box.find(".js-choose-audio").click(function() {
                var _this = $(this);
                selectvideo(function(result) {
                    for (var i = 0; i < result.length; i++) {
                        obj.video.push(result[i]);
                    }
                    PowerPage.Common.ReView(obj);
                    PowerPage.Common.EditClick();
                });
            });
            box.find("span.voice-player").click(function() {
                var ts = $(this).parents('.controls').children("video.hide");
                var index = $(this).parents("li.choice.video").index();
                var td = $('.editing .items');
                if( $(this).hasClass('active') ) {
                    $(this).removeClass('active');
                    td.find('li').eq(index).find('video')[0].pause();
                }else{
                    $("ul.ui-video-sortable li").each(function(i) {
                        if( $(this).find('span.voice-player').hasClass('active') ) { td.find('li').eq(i).find('video')[0].pause(); }
                    });
                    $(this).addClass('active').parents("li.choice.video").siblings().find("span.voice-player").removeClass('active');
                    td.find('li').eq(index).find('video')[0].play();
                }
            });
            PowerPage.Dom.SidBar.find(".ui-video-sortable").sortable({
                containment: 'parent',
                items: 'li.video',
                update: function() {
                    $("ul.ui-video-sortable").find("span.voice-player").removeClass('active');
                    PowerPage.ReDate.ReDataVideo(obj);
                }
            });
            PowerPage.Dom.SidBar.find(".delete").click(function() {
                $(this).parents('li.choice.video').remove();
                PowerPage.ReDate.ReDataVideo(obj);
            });
        },
        /*  修改 视频列表  */
        ModifyVideoList: function(obj) {
            /*  PowerPage.Modify.ModifyAudio(obj);  */
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).html("");
            var group = $('<div class="control-group">' +
                '<label class="control-label">视频来源：</label>' +
                '<div class="controls">' +
                    '<a href="javascript:void(0);" class="js-add-goods add-goods control-action">' + obj.categroydesc + '</a>' +
                    '<p class="help-desc">选择商品来源后，左侧实时预览暂不支持显示其包含的商品数据</p>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            group = $('<div class="control-group">' +
                '<label class="control-label">显示个数：</label>' +
                '<div class="controls">' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="0" ' + (obj.audiocount == 0 ? 'checked=""' : '') + '>6</label>' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="1" ' + (obj.audiocount == 1 ? 'checked=""' : '') + '>12</label>' +
                    '<label class="radio inline"><input type="radio" name="goods_number_type" value="2" ' + (obj.audiocount == 2 ? 'checked=""' : '') + '>18</label>' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.find(".form-horizontal").eq(0).append(group);
            PowerPage.Dom.SidBar.find(".js-audio-style-region").eq(0).html("");
            $("input[name='goods_number_type']").change(function() {
                obj.audiocount = parseInt($(this).val());
                PowerPage.Common.ReView(obj);
            });
            $(".add-goods").click(function() {
                var _this = $(this);
                selectvideolist(function(result) {
                    obj.categroy = result.id;
                    obj.categroydesc = result.name;
                    _this.html(result.name);
                    PowerPage.Common.ReView(obj);
                });
            });
        },
        /*  修改 公告  */
        ModifyNotice: function(obj) {
            var box = $('<div class="form-horizontal"></div>');
            box.append('<div class="control-group">' +
                '<label class="control-label">公告：</label>' +
                '<div class="controls">' +
                    '<input type="text" name="content" value="' + (obj.value == PowerPage.EditTemp.notice.value ? "" : obj.value) + '" class="input-xxlarge" placeholder="请填写内容，如果过长，将会在手机上滚动显示">' +
                '</div>' +
            '</div>');
            PowerPage.Dom.SidBar.html(box);
            $("input[name='content']").blur(function() {
                obj.value = $(this).val();
                PowerPage.Common.ReView(obj);
            });
        },
        /*  修改 优惠券  */
        ModifyCoupon: function(obj) {
            var box = $('<form class="form-horizontal edit-custom-coupon" novalidate="" onsubmit="return false">' +
                '<div class="control-group">' +
                    '<label class="control-label">优惠券：</label>' +
                    '<div class="controls">' +
                        '<a href="javascript:;" class="control-action js-add-coupon">添加优惠券</a>' +
                        '<input name="coupon" type="hidden">' +
                    '</div>' +
                '</div>' +
            '</form>');
            PowerPage.Dom.SidBar.html(box);
        },
    },
    /*  返回手机端,构造显示格式  */
    Show: {
        Show: function(obj, dom) {
            for (var i = 0; i < obj.length; i++) {
                switch (obj[i].name) {
                    case PowerPage.EditTemp.maintop.name:       /*  主页头部  */
                        PowerPage.Show.ShowMainTop(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.pagetitle.name:     /*  页面标题  */
                        PowerPage.Show.ShowPageTitle(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.richtext.name:      /*  富文本  */
                        PowerPage.Show.ShowRichText(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.goods.name:         /*  商品,商品列表  */
                    case PowerPage.EditTemp.goodslist.name:
                        PowerPage.Show.ShowGoods(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.imagead.name:       /*  图片广告  */
                        PowerPage.Show.ShowPicsAd(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.title.name:         /*  标题  */
                        PowerPage.Show.ShowTitle(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.textnav.name:       /*  文本导航  */
                        PowerPage.Show.ShowTextNav(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.search.name:        /*  商品搜索  */
                        PowerPage.Show.ShowSearch(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.store.name:         /*  进入店铺  */
                        PowerPage.Show.ShowStore(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.line.name:          /*  辅助线  */
                        PowerPage.Show.ShowLine(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.space.name:         /*  辅助空白  */
                        PowerPage.Show.ShowSpace(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.audio.name:         /*  音频,音频列表  */
                    case PowerPage.EditTemp.audiolist.name:
                        PowerPage.Show.ShowAudio(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.notice.name:        /*  公告  */
                        PowerPage.Show.ShowNotice(obj[i], dom);
                        break;
                    case PowerPage.EditTemp.coupon.name:        /*  优惠券  */
                        PowerPage.Show.ShowCoupon(obj[i], dom);
                        break;
                }
            }
        },
        /*  显示主页头部  */
        ShowMainTop: function(obj, dom) {
            var box = PowerPage.Format.FormatMainTop(obj);
            box.find("desc").remove();
            dom.append(box);
        },
        /*  显示页面标题  */
        ShowPageTitle: function(obj, dom) {
            dom.css("background", obj.background);
        },
        /*  显示富文本  */
        ShowRichText: function(obj, dom) {
            var box = $('<div style="background:' + obj.background + '"></div>');
            var richbox = $('<div class="custom-richtext"></div>');
            if (obj.fullscreen) {
                richbox.addClass("custom-richtext-fullscreen");
            }
            richbox.html(decodeURIComponent(obj.content));
            box.append(richbox);
            $(dom).append(box);
        },
        /*  显示商品  */
        ShowGoods: function(obj, dom) {
            obj.formatempty = false;
            var box = PowerPage.Format.FormatGoods(obj);
            box.find("desc").remove();
            dom.append(box);
        },
        /*  显示图片  */
        ShowPicsAd: function(obj, dom) {
            if (obj.pics.length == 1) {
                dom.append('<div class="custom-image-single clearfix"> <a href="' + obj.pics[0].url + '" target="_blank"> <img class="js-res-load " src="' + PowerPage.Common.AddPicHost(obj.pics[0].pic) + '"> </a> </div>');
            } else {
                if (obj.showtype == 1) {
                    var ul = $('<ul class="custom-image clearfix"></ul>');
                    for (var i = 0; i < obj.pics.length; i++) {
                        var li = $('<li><a href="' + obj.pics[i].url + '">' + (obj.pics[i].name != "" ? '<h3 class="title">' + obj.pics[i].name + '</h3>' : '') + '<img src="' + PowerPage.Common.AddPicHost(obj.pics[i].pic) + '"/></a></li>');
                        if (obj.showsize == 1) {
                            li.addClass("custom-image-small");
                        }
                        ul.append(li);
                    }
                    dom.append(ul);
                }
            }
        },
        /*  显示标题  */
        ShowTitle: function(obj, dom) {
            var box = PowerPage.Format.FormatTitle(obj);
            box.find("desc").remove();
            dom.append(box);
        },
        /*  显示文本导航  */
        ShowTextNav: function(obj, dom) {
            var box = $('<div class="custom-nav clearfix"></div>');
            for (var i = 0; i < obj.navs.length; i++) {
                var li = $('<li> <a class="clearfix relative arrow-right" href="' + obj.navs[i].url + '"> <span class="custom-nav-title">' + obj.navs[i].name + '</span></a> </li>');
                box.append(li);
            }
            dom.append(box);
        },
        /*  显示商品搜索  */
        ShowSearch: function(obj, dom) {
            var box = PowerPage.Format.FormatSearch(obj);
            box.find("desc").remove();
            dom.append(box);
        },
        /*  显示辅助线  */
        ShowLine: function(obj, dom) {
            var box = PowerPage.Format.FormatLine(obj);
            box.find("desc").remove();
            dom.append(box);
        },
        /*  显示辅助留白  */
        ShowSpace: function(obj, dom) {
            var box = PowerPage.Format.FormatSpace(obj);
            box.find("desc").remove();
            dom.append(box);
        },
        /*  显示进入店铺  */
        ShowStore: function(obj, dom) {
            var box = PowerPage.Format.FormatStore(obj);
            box.find("desc").remove();
            dom.append(box);
        },
        /*  显示音频  */
        ShowAudio: function(obj, dom) {
            obj.formatempty = false;
            var box = PowerPage.Format.FormatGoods(obj);
            box.find("desc").remove();
            dom.append(box);
        },
        /*  显示音频  */
        ShowContentstaglist: function(obj, dom) {
            obj.formatempty = false;
            var box = PowerPage.Format.FormatContentsTagList(obj);
            box.find("desc").remove();
            dom.append(box);
        },
        /*  显示公告  */
        ShowNotice: function(obj, dom) {
            var box = PowerPage.Format.FormatNotice(obj);
            box.find("desc").remove();
            dom.append(box);
        },
        /*  显示优惠券  */
        ShowCoupon: function(obj, dom) {
            var box = PowerPage.Format.ShowCoupon(obj);
            box.find("desc").remove();
            dom.append(box);
        }
    },
    /*  返回数据  */
    ReDate: {
        /*  返回数据 商品  */
        ReDataContents: function(obj) {
            obj.contents.length = 0;
            PowerPage.Dom.SidBar.find(".sort data").each(function() {
                obj.contents.push(eval('(' + $(this).html() + ')'));
            });
            PowerPage.Common.ReView(obj);
        },
        /*  返回数据 商品  */
        ReDataGoods: function(obj) {
            obj.goods.length = 0;
            PowerPage.Dom.SidBar.find(".sort data").each(function() {
                obj.goods.push(eval('(' + $(this).html() + ')'));
            });
            PowerPage.Common.ReView(obj);
        },
        /*  返回数据 图片广告  */
        ReDataImageAd: function(obj) {
            obj.pics.length = 0;
            $(".choices .choice").each(function() {
                obj.pics.push({
                    name: $(this).find("input").val(),
                    pic: $(this).find("img").attr("data-src"),
                    url: $(this).find(".label").attr("url"),
                    urldesc: $(this).find(".label").html(),
                });
            });
            PowerPage.Common.ReView(obj);
        },
        /*  返回数据 文本导航  */
        ReDataTextNav: function(obj) {
            obj.navs.length = 0;
            $(".choices .choice").each(function() {
                obj.navs.push({
                    name: $(this).find("input").val(),
                    url: $(this).find(".label").attr("url"),
                    urldesc: $(this).find(".label").html(),
                });
            });
            PowerPage.Common.ReView(obj);
        },
        /*  返回数据 内容分组  */
        ReDataContentsTagList: function(obj) {
            obj.navs.length = 0;
            $(".choices .choice").each(function() {
                obj.navs.push({
                    id: $(this).find("span.label").attr("id"),
                    name: $(this).find("input").val(),
                    pic: $(this).find("span.label").attr("pic"),
                    url: $(this).find("span.label").attr("url"),
                    urldesc: $(this).find("span.label").html(),
                    price: $(this).find("span.label").attr("price"),
                });
            });
            PowerPage.Common.ReView(obj);
        },
        /*  返回数据 音频  */
        ReDataAudio: function(obj){
            obj.audio.length = 0;
            $(".choices .choice").each(function() {
                obj.audio.push({
                    title: $(this).find("input[name='title']").val(),
                    desc: $(this).find("input[name='desc']").val(),
                    time: $(this).find("input[name='time']").val(),
                    src: $(this).find("audio").attr("src"),
                    loop: $(this).find("input[name='loop']").val(),
                });
            });
            PowerPage.Common.ReView(obj);
        },
        /*  返回数据 视频  */
        ReDataVideo: function(obj){
            obj.video.length = 0;
            $(".choices .choice").each(function() {
                /*  console.log( $(this).attr('src') + '\t' + $(this).find('input').val());  */
                obj.video.push({
                    title: $(this).find("input[name='title']").val(),
                    desc: $(this).find("input[name='desc']").val(),
                    time: $(this).find("input[name='time']").val(),
                    src: $(this).find("video").attr("src"),
                    loop: $(this).find("input[name='loop']").val(),
                });
            });
            PowerPage.Common.ReView(obj);
        }
    },
    /*  获取页面信息  */
    Get: {
        GetPageTitle: function() {
            var result = "";
            $(".app-field desc").each(function() {
                var json = eval('(' + $(this).html() + ')');
                if (json.name == "pagetitle") {
                    result = json.title;
                }
                if (json.name == "categroy") {
                    result = json.categroyname;
                }
            });
            return result;
        },
        GetPageDesc: function() {
            var result = "";
            $(".app-field desc").each(function() {
                var json = eval('(' + $(this).html() + ')');
                if (json.name == "pagetitle") {
                    result = json.desc;
                }
            });
            return result;
        },
        GetPageCont: function() {
            var CONT = new Array();
            $(".app-field desc").each(function() {
                var json = eval('(' + $(this).html() + ')');
                CONT.push(json);
            });
            return JSON.stringify(CONT);
        }
    },
    Common: {
        /*  添加选中项链接说明  */
        AddSelectLink: function(dom, callback) {
            var dropmenu = $('<ul class="dropdown-menu">' +
                '<li><a class="js-modal-magazine" data-type="page" href="javascript:void(0);">微页面</a></li>' +
                '<li><a class="js-modal-magazine" data-type="pagegroup" href="javascript:void(0);">微页面分类</a></li>' +
                '<li><a class="js-modal-goods" data-type="contents" href="javascript:void(0);">内容</a></li>' +
                '<li><a class="js-modal-goods" data-type="contentsgroup" href="javascript:void(0);">内容分组</a></li>' +
            '</ul>');
            dom.append(dropmenu);
            dropmenu.find("a").click(function() {
                var _this = $(this).parents(".dropdown").find("span");
                switch ($(this).attr("data-type")) {
                    case "page":
                        selectpage(function(result) {
                            _this.attr("id", result.id);
                            _this.attr("url", result.url);
                            _this.html("微页面|" + result.name);
                            callback();
                        });
                        break;
                    case "pagegroup":
                        selectpagegroup(function(result) {
                            _this.attr("id", result.id);
                            _this.attr("url", result.url);
                            _this.html("页面分类|" + result.name);
                            callback();
                        });
                        break;
                    case "contents":
                        selectcontents(function(result) {
                            _this.attr("id", result[0].id);
                            _this.attr("url", result[0].url);
                            _this.html("内容|" + result[0].name);
                            callback();
                        });
                        break;
                    case "contentsgroup":
                        selectcontentsgroup(function(result) {
                            _this.attr("id", result.id);
                            _this.attr("url", result.url);
                            _this.html("内容分组|" + result.name);
                            callback();
                        });
                        break;
                }
            });
        },
        /*  添加选中项链接说明 (页面分类)  */
        AddSelectPageGroupLink: function(dom, callback) {
            var dropmenu = $('<ul class="dropdown-menu">' +
                '<li><a class="js-modal-magazine" data-type="pagegroup" href="javascript:void(0);">微页面分类</a></li>' +
            '</ul>');
            dom.append(dropmenu);
            dropmenu.find("a").click(function() {
                var _this = $(this).parents(".dropdown").find("span");
                switch ($(this).attr("data-type")) {
                    case "pagegroup":
                        selectpagegroup(function(result) {
                            /*  alert(JSON.stringify(result));  */
                            _this.attr("id", result.id);
                            _this.html("页面分类|" + result.name);
                            callback();
                        });
                }
            });
        },
        /*  添加选中项链接说明 (内容列表)  */
        AddSelectContentsTagGroupLink: function(dom, callback) {
            var dropmenu = $('<ul class="dropdown-menu">' +
                '<li><a class="js-modal-magazine" data-type="contentsgroup" href="javascript:void(0);">内容分组</a></li>' +
            '</ul>');
            dom.append(dropmenu);
            dropmenu.find("a").click(function() {
                var _this = $(this).parents(".dropdown").find("span");
                switch ($(this).attr("data-type")) {
                    case "contentsgroup":
                        selectcontentsgroup(function(result) {
                            /*  console.log(JSON.stringify(result));  */
                            _this.attr("id", result.id);
                            _this.parents(".choice").find('input[name="title"]').val(result.name);
                            _this.html("内容分组|" + result.name);
                            _this.attr("pic", result.pic);
                            _this.attr("url", result.url);
                            _this.attr("price", result.price);
                            callback();
                        });
                }
            });
        },
        /*  最后一个 选中状态  */
        LastClick: function() {
            $(".app-preview .app-field").last().click();
        },
        /*  编辑状态  */
        EditClick: function() {
            $(".app-preview .app-field.editing").click();
        },
        /*  回调界面  */
        ReView: function(obj) {
            $(".editing>.control-group").html(PowerPage.Format.Format(obj));
        },
        /*  给图片地址加域名  */
        AddPicHost: function(pic) {
            if (pic.indexOf('upload') != 0) {
                return pic;
            } else {
                return PowerPage.Set.Pichost + pic;
            }
        },
        /*  初始化(用于将数据再次展示)  */
        CSH: function(obj, pagetype) {
            /*  商城首页  */
            if (pagetype == 1) {
                var hashead = false;
                for (var i = 0; i < obj.length; i++) {
                    if (obj[i].name == PowerPage.EditTemp.maintop.name) {
                        hashead = true;
                    }
                }
                if (!hashead) {
                    obj.unshift($.extend(true, {}, PowerPage.EditTemp.maintop));
                }
            }
            for (var i = 0; i < obj.length; i++) {
                PowerPage.Format.FormatBox(obj[i]);
            }
            PowerPage.Common.LastClick();
        }
    }
};
