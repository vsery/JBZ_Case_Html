$(function () {
    $('.app-field').each(function() {
        $(this).find('.actions').remove();
        $(this).find('.sort').remove();
        var obj = eval('(' + $(this).find('desc').html() + ')');
        console.log(obj.name);
        switch(obj.name){
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
                            '<title class="bookName custom-audio-title">' + obj.audio[i].title +'</title>' +
                            '<span class="dec">' + obj.audio[i].desc + '</span>' +
                            '<time>' + obj.audio[i].time + '</time>' +
                            '<audio loop="' + obj.audio[i].loop +'" src="' + obj.audio[i].src +'" class="hide" style="display:none"></audio>' +
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
                    if( obj.contentscount == 0 ){
                        if( i == 6 ) break;
                    }else if( obj.contentscount == 1 ){
                        if( i == 12 ) break;
                    }else if( obj.contentscount == 2 ){
                        if( i == 18 ) break;
                    }
                    var contentscard = $('<li class="goods-card"></li>');
                    var a = $('<a href="'+ ( obj.contents[i].isBuy !=  0 ? obj.contents[i].url : "javascript:;") + '" class="link js-goods clearfix"></a>');
                    var photo = $('<div class="photo-block"></div>');
                    var img = $('<img src="' + obj.contents[i].pic + '"/>');
                    var info = $('<div class="info"></div>');
                    var title = $('<p class="goods-title">' + obj.contents[i].name + '</p>');
                    var price = $('<p class="goods-price"><em>￥' + obj.contents[i].price + '</em></p>');
                    var desc = $('<p class="goods-sub-title c-black ">' + obj.contents[i].desc + '</p>');
                    var buy = $('<div class="goods-buy btn' + obj.buytype + '" style="' + ( obj.contents[i].isBuy != 0 ? "display:none": "") +'" onclick="'+ obj.contents[i].fn +'" ></div>');
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
    $(".swiper-slide").click(function() { $(this).addClass('active').siblings().removeClass('active');});
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