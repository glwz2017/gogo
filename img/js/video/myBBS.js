$(function () {

    $('.js-title-right').hover(function () {
        $(this).children('.state-list').show();
    }, function () {
        $(this).children('.state-list').hide();
    });

    $('.state-list>li').click(function () {
        $(this).parent().siblings('input').val($.trim($(this).html())).end().hide();
    });

//    取消隐藏元素
    $('.js-cancel').click(function () {
        $(this).parent().parent().hide();
    });

    //取消关注人
    $('.js-cancel-foll').click(function () {
        $(this).parent().hide();
    });

    //粉丝关注与取消
    $('.js-focus-cancel').click(function () {
        $(this).toggleClass('active-fans');
        if ($(this).hasClass('active-fans')) {
            $(this).html("Cancel following");
        } else {
            $(this).html("Follow");
        }
    });

//    瀑布流
    function waterFall() {
        var widthNum = 3,
            allHeight = [];
        for (var i = 0; i < widthNum; i++) {
            allHeight.push(0)
        }
        $(".water-box .each-item").each(function () {
            var $cur = $(this),
                indx = 0,
                minAllHeight = allHeight[0];
            for (var j = 0; j < allHeight.length; j++) {
                if (allHeight[j] < minAllHeight) {
                    minAllHeight = allHeight[j];
                    indx = j;
                }
            }
            $cur.css({
                "left": indx * $cur.outerWidth(true),
                "top": minAllHeight
            });
            allHeight[indx] = minAllHeight + $cur.outerHeight(true);
        });
        var items = $('.each-item:last-child').height();
        var lastItem = parseInt($('.each-item:last-child').css('top'));
        $('#demo').height(lastItem + items);
    }
    waterFall();
    $(window).resize(function () {
        waterFall();
    });
    //    瀑布流模拟数据
    var arr = ['../img/images/forum/feed1.png', '../img/images/forum/feed2.png',
        '../img/images/forum/feed3.png', '../img/images/forum/feed4.png', '../img/images/forum/feed3.png'
        , '../img/images/forum/feed2.png', '../img/images/forum/feed4.png'];
    $(window).scroll(function () {
        var moveTop = $(this).scrollTop();//
        var totalHeight = $(document).height();
        //如果到底部 模拟数据请求并渲染
        if ((totalHeight - moveTop) <= 947) {
            var index = parseInt(Math.random(0) * 4+1);
            var str = ' <div class="each-item">\n' +
                '                            <a href="baskOrderDetail.html">\n' +
                '                                <img src="../img/images/forum/feed' + index + '.png" alt="images" width="260">\n' +
                '                                <div class="give-like">\n' +
                '                                    Approval( <span>0</span> ) <img src="../img/images/forum/give.png" alt="">\n' +
                '                                </div>\n' +
                '                                <!--星级-->\n' +
                '                                <div class="rating-box">\n' +
                '                                    <div class="stars-box">\n' +
                '                                        <span>★</span>\n' +
                '                                        <span>★</span>\n' +
                '                                        <span>★</span>\n' +
                '                                        <span>★</span>\n' +
                '                                        <span>★</span>\n' +
                '                                    </div>\n' +
                '                                    <p>\n' +
                '                                        Prototype for toy applicationPrototype for toy applicationPrototype for.\n' +
                '                                    </p>\n' +
                '                                </div>\n' +
                '                            </a>\n' +
                '                        </div>';
            $('#demo').append(str);
            waterFall();
        }
    });

});//end function