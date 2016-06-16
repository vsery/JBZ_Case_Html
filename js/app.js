/*LazyLoad.css([
    'font/css/font-awesome.min.css',
    'css/bootstrap.min.css',
    'css/pc.css',
    'css/app.css'
], function() {
    console.log('\n all css have been loaded');
});
LazyLoad.js(
    [
        'js/jquery.min.js',
        'js/bootstrap.js',
        'js/ShowData.js',
        'plugins/PowerPage/PowerPage.js'
    ],
    function() {
        console.log('all bind JavaScript have been loaded \n');
        console.log(obj);
        $(function() {
                var dom = $('#WebPage');
                PowerPage.Show.Show(obj, dom);
            })
            //ShowApp(obj);
            $("a.titleMusic").click(function() {
                var tp = $(this).parents("li");
                var ts = $(this).children("audio.hide");
                if (ts[0].paused) { //判断是否暂停状态
                    $("li.music").each(function(index, el) { //关闭上一音频
                        if ($(this).hasClass('active')) {
                            $(this).removeClass('active').find("audio.hide")[0].pause();
                            $(this).find("a.titleMusic").removeClass('active').find("audio.hide")[0].pause();
                        }
                    });
                    tp.addClass('active'); //切换选中音频
                    $(this).addClass('active');
                    ts[0].play(); //播放音频
                } else {
                    tp.removeClass('active'); //移除选中音频
                    $(this).removeClass('active');
                    ts[0].pause(); //暂停播放
                }
            });
    });*/

function ShowApp(obj) {
    if (obj.length != -1) {
        for (var i = 0; i < obj.length; i++) {
            switch (obj[i].name) {
                case 'categroy':
                    break;
                case 'maintop':
                    break;
                case 'pagetitle':
                    $('title').html(obj[i].title);
                    break;
                case 'richtext':
                    var box = $('<div style="background-color:' + obj[i].background + '"></div>');
                    var richbox = $('<div class="custom-richtext"></div>');
                    if (obj[i].fullscreen) {
                        richbox.addClass("custom-richtext-fullscreen");
                    }
                    richbox.html(decodeURIComponent(obj[i].content));
                    box.append(richbox);
                    $('#WebPage').append(box);
                    break;
                case 'goods':
                    break;
                case 'goodslist':
                    break;
                case 'contents':
                    var box = $('<ul class="sc-goods-list clearfix"></ul>');
                    box.addClass("size-" + obj[i].size);
                    switch (obj[i].sizetype) {
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
                    if (obj[i].size == 3) {
                        box.addClass("list");
                    } else {
                        box.addClass("pic");
                    }
                    if (obj[i].contents.length == 0) {
                        if (obj[i].formatempty == null) {
                            $.extend(true, contents, PowerPage.EditTemp.defaultval.contents, obj[i].contents);
                            if (obj[i].size != 1) {
                                contents.pop();
                            }
                        } else {
                            contents = obj[i].contents;
                        }
                    } else {
                        contents = obj[i].contents;
                    }
                    for (var j = 0; j < contents.length; j++) {
                        var contentscard = $('<li class="goods-card"></li>');
                        var a = $('<a href="' + contents[j].url + '" class="link js-goods clearfix"></a>');
                        var photo = $('<div class="photo-block"></div>');
                        var img = $('<img src="' + contents[j].pic + '"/>');
                        var info = $('<div class="info"></div>');
                        var title = $('<p class="goods-title">' + contents[j].name + '</p>');
                        var price = $('<p class="goods-price"><em>￥' + contents[j].price + '</em></p>');
                        var desc = $('<p class="goods-sub-title c-black ">' + contents[j].desc + '</p>');
                        var buy = $('<div class="goods-buy btn' + obj[i].buytype + '"></div>');
                        if (obj[i].showname || obj[i].size == 3) {
                            info.append(title);
                        } else {
                            info.addClass("info-no-title");
                        }
                        if ((obj[i].showdesc && obj[i].size == 0) || (obj[i].showdesc && obj[i].size == 3)) {
                            info.append(desc);
                        }
                        if (obj[i].showprice) {
                            info.addClass("info-price");
                            info.append(price);
                        }
                        switch (obj[i].size) {
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
                        switch (obj[i].sizetype) {
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
                        img.attr("src", PowerPage.Common.AddPicHost(contents[j].pic));
                        photo.append(img);
                        a.append(photo);
                        a.append(info);
                        if (obj[i].sizetype == 3 && obj[i].size == 1) {
                            buy.html("我要抢购");
                        }
                        if (obj[i].showbuy && obj[i].sizetype != 2) {
                            a.append(buy);
                        }
                        contentscard.append(a);
                        box.append(contentscard);
                    }
                    $('#WebPage').append(box);
                    break;
                case 'contentslist':
                    break;
                case 'contentstaglist':
                    break;
                case 'contentstaglist1':
                    break;
                case 'imagead':
                    if (obj[i].showtype == 0) {
                        var box = $('<div id="topBannerList" class="carousel slide" data-ride="carousel"></div>');
                        var boxNav = $('<ol class="carousel-indicators"></ol>');
                        var swiper_wrapper = $('<div class="carousel-inner" role="listbox"></div>');
                        for (var j = 0; j < obj[i].pics.length; j++) {
                            boxNav.append('<li data-target="#topBannerList" data-slide-to="' + j + '" class="' + (j == 0 ? 'active' : '') + '"></li>');
                            swiper_wrapper.append('<div class="item ' + (j == 0 ? 'active' : '') + '">' +
                                '<img src="' + PowerPage.Common.AddPicHost(obj[i].pics[j].pic) + '" alt="' + obj[i].pics[j].name + '"/>' +
                                '<div class="carousel-caption">' + obj[i].pics[j].name + '</div>' +
                                '</div>');
                        }
                        var switcNav = $('<a class="left carousel-control" href="#topBannerList" role="button" data-slide="prev">' +
                            '<span class="fa fa-fw fa-angle-double-left" aria-hidden="true"></span>' +
                            '</a>' +
                            '<a class="right carousel-control" href="#topBannerList" role="button" data-slide="next">' +
                            '<span class="fa fa-fw fa-angle-double-right" aria-hidden="true"></span>' +
                            '</a>');
                        box.append(boxNav);
                        box.append(swiper_wrapper);
                        box.append(switcNav);
                        $('#WebPage').append(box);
                    } else if (obj[i].showtype == 1) {
                        if (obj[i].showsize == 0) {
                            var box = $('<ul class="custom-image clearfix"></ul>');
                            for (var i = 0; i < obj[i].pics.length; i++) {
                                box.append('<li>' + (obj[i].pics[j].name != "" ? '<h3 class="title">' + obj[i].pics[j].name + '</h3>' : '') + '<img src="' + PowerPage.Common.AddPicHost(obj[i].pics[j].pic) + '" alt="' + obj[i].pics[j].name + '"/></li>');
                            }
                            $('#WebPage').append(box);
                        } else if (obj[i].showsize == 1) {
                            var box = $('<ul class="custom-image clearfix"></ul>');
                            for (var i = 0; i < obj[i].pics.length; i++) {
                                box.append('<li class="custom-image-small">' + (obj[i].pics[j].name != "" ? '<h3 class="title">' + obj[i].pics[j].name + '</h3>' : '') + '<img src="' + PowerPage.Common.AddPicHost(obj[i].pics[j].pic) + '" alt="' + obj[i].pics[j].name + '"/></li>');
                            }
                            $('#WebPage').append(box);
                        }
                    }
                    $('#WebPage').append(box);
                    break;
                case 'title':
                    break;
                case 'textnav':
                    textnavs = obj[i].navs;
                    var box = $('<div class="custom-nav clearfix"><ul></ul></div>');
                    for (var j = 0; j < textnavs.length; j++) {
                        var li = $('<li><a class="clearfix" href="' + textnavs[j].url + '">' +
                            '<span class="custom-nav-title">' +
                            textnavs[j].name +
                            '</span>' +
                            '<i class="pull-right right-arrow"></i>' +
                            '</a></li>');
                        box.find('ul').append(li);
                    }
                    $('#WebPage').append(box);
                    break;
                case 'switchnav':
                    switchnavs = obj[i].navs;
                    var box = $('<div class="switch-nav swiper-container clearfix"><ul class="swiper-wrapper"></ul></div>');
                    for (var j = 0; j < switchnavs.length; j++) {
                        var li = $('<li class="swiper-slide ' + (j == obj[i].deval - 1 ? 'active' : '') + '">' +
                            '<a class="btn" href="' + switchnavs[j].url + '">' +
                            switchnavs[j].name +
                            '</a></li>');
                        box.find('ul').append(li);
                    }
                    $('#WebPage').append(box);
                    break;
                case 'search':
                    break;
                case 'line':
                    var box = $('<div class="custom-line-wrap"><hr class="custom-line"></div>');
                    $('#WebPage').append(box);
                    break;
                case 'space':
                    var box = $('<div class="control-group"><div class="custom-white text-center" style="height: ' + obj[i].height + 'px;"></div></div>');
                    $('#WebPage').append(box);
                    break;
                case 'store':
                    break;
                case 'audio':
                    var box = $('<ul class="items reading active"></ul>');
                    audio = obj[i].audio;
                    for (var j = 0; j < audio.length; j++) {
                        box.append('<li class="item music">' +
                            '<a href="javascript:;" class="titleMusic" id="' + audio[j].id + '">' +
                            '<i class="fa fa-wifi"></i>' +
                            '<title class="bookName custom-audio-title">' + audio[j].title + '</title>' +
                            '<span class="dec">' + audio[j].desc + '</span>' +
                            '<time>' + audio[j].time + '</time>' +
                            '<audio loop="' + audio[j].loop + '" src="' + audio[j].src + '" class="hide" style="display:none"></audio>' +
                            '</a>' +
                            '</li>');
                    }
                    $('#WebPage').append(box);
                    break;
                case 'audiolist':
                    break;
                case 'video':
                    var box = $('<div></div>');
                    var group = $('<ul class="items reading active"></ul>');
                    box.append(group);
                    video = obj[i].video;
                    for (var j = 0; j < video.length; j++) {
                        box.find('ul').append('<li class="item">' +
                            '<video controls="" id="' + video[j].id + '" width="100%" height="auto">' +
                            '<source src="' + video[j].src + '" type="video/mp4" />' +
                            '</video>' +
                            '</li>');
                    }
                    $('#WebPage').append(box);
                    break;
                case 'videolist':
                    break;
                case 'notice':
                    break;
                case 'coupon':
                    break;
            }
        }
    }
}
$(function() {
    $('.app-field').each(function() {
        $(this).find('.actions').remove();
        $(this).find('.sort').remove();
        var obj = eval('(' + $(this).find('desc').html() + ')');
        console.log(obj.name);
        switch (obj.name) {
            case 'videolist':
                $(this).find('ul').empty();
                for (var i = 0; i < obj.video.length; i++) {
                    $(this).find('ul').append('<li class="item">' +
                        '<video controls="" id="' + obj.video[i].id + '" width="100%" height="auto">' +
                        '<source src="' + obj.video[i].src + '" type="video/mp4" />' +
                        '</video>' +
                        '</li>');
                }
                break;
            case 'audiolist':
                $(this).find('li').remove();
                for (var i = 0; i < obj.audio.length; i++) {
                    $(this).find('ul').append('<li class="item music">' +
                        '<a href="javascript:;" class="titleMusic" id="' + obj.audio[i].id + '">' +
                        '<i class="fa fa-wifi"></i>' +
                        '<title class="bookName custom-audio-title">' + obj.audio[i].title + '</title>' +
                        '<span class="dec">' + obj.audio[i].desc + '</span>' +
                        '<time>' + obj.audio[i].time + '</time>' +
                        '<audio loop="' + obj.audio[i].loop + '" src="' + obj.audio[i].src + '" class="hide" style="display:none"></audio>' +
                        '</a>' +
                        '</li>');
                }
                break;
            case 'contentslist':
                $(this).find('li').remove();
                $(this).find('ul').addClass("size-" + obj.size);
                switch (obj.sizetype) {
                    case 0:
                        $(this).find('ul').addClass("card");
                        break;
                    case 1:
                        $(this).find('ul').addClass("waterfall");
                        break;
                    case 2:
                        $(this).find('ul').addClass("normal");
                        break;
                    case 3:
                        $(this).find('ul').addClass("promotion");
                        break;
                }
                if (obj.size == 3) {
                    $(this).find('ul').addClass("list");
                } else {
                    $(this).find('ul').addClass("pic");
                }
                for (var i = 0; i < obj.contents.length; i++) {
                    if (obj.contentscount == 0) {
                        if (i == 6) break;
                    } else if (obj.contentscount == 1) {
                        if (i == 12) break;
                    } else if (obj.contentscount == 2) {
                        if (i == 18) break;
                    }
                    var contentscard = $('<li class="goods-card"></li>');
                    var a = $('<a href="' + (obj.contents[i].isBuy != 0 ? obj.contents[i].url : "javascript:;") + '" class="link js-goods clearfix"></a>');
                    var photo = $('<div class="photo-block"></div>');
                    var img = $('<img src="' + obj.contents[i].pic + '"/>');
                    var info = $('<div class="info"></div>');
                    var title = $('<p class="goods-title">' + obj.contents[i].name + '</p>');
                    var price = $('<p class="goods-price"><em>￥' + obj.contents[i].price + '</em></p>');
                    var desc = $('<p class="goods-sub-title c-black ">' + obj.contents[i].desc + '</p>');
                    var buy = $('<div class="goods-buy btn' + obj.buytype + '" style="' + (obj.contents[i].isBuy != 0 ? "display:none" : "") + '" onclick="' + obj.contents[i].fn + '" ></div>');
                    if (obj.showname || obj.size == 3) {
                        info.append(title);
                    } else {
                        info.addClass("info-no-title");
                    }
                    /*  显示商品描述并显示样式为大图  */
                    if ((obj.showdesc && obj.size == 0) || (obj.showdesc && obj.size == 3)) {
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
                    img.attr("src", obj.contents[i].pic);
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
                    $(this).find('ul').append(contentscard);
                }
                break;
        }
    });
    var swiper = new Swiper('.swiper-container ', { paginationClickable: true });
    $(".swiper-slide").click(function() { $(this).addClass('active').siblings().removeClass('active'); });
    $("a.titleMusic").click(function() {
        var tp = $(this).parents("li");
        var ts = $(this).children("audio.hide");
        if (ts[0].paused) { //判断是否暂停状态
            $("li.music").each(function(index, el) { //关闭上一音频
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').find("audio.hide")[0].pause();
                    $(this).find("a.titleMusic").removeClass('active').find("audio.hide")[0].pause();
                }
            });
            tp.addClass('active'); //切换选中音频
            $(this).addClass('active');
            ts[0].play(); //播放音频
        } else {
            tp.removeClass('active'); //移除选中音频
            $(this).removeClass('active');
            ts[0].pause(); //暂停播放
        }
    });
})
