$(function () {
//  导航吸顶
    $(window).scroll(function () {
        var navTop = $(this).scrollTop();
        if (navTop >= 130) {
            $('.nav-box')[0].classList.add('nav-fixed');
        } else {
            $('.nav-box')[0].classList.remove('nav-fixed');
        }
    });
//        表单3选择型号：
    $('.stencil-l .frame-box').click(function () {
        $(this).addClass('now-active').siblings('.frame-box').removeClass('now-active');
    });
//表单填充

//      banner淡隐淡现轮播图
//banner轮播图
    var index = 0;//判断轮播图的张数
    var timer = null;//清除定时器
    var bannerLi = $('.banner-num>li').length;
    var several = bannerLi - 1;
    timer = setInterval(function () {
        changePic();
    }, 5000);

    // 点击改变当前显示的图片
    $('.banner-box').mouseenter(function () {
        clearInterval(timer);
    });
    $('.banner-box').mouseleave(function () {
        timer = setInterval(function () {
            changePic();
        }, 5000);
    });
    $('.banner-num>li').mouseenter(function () {
        index = $(this).index();
        movePic();
    });
    //改变图片
    function changePic() {
        if (index > several) {
            index = 0;
        }
        movePic();
        index++;
    }
//图片切换
    function movePic() {
        $('.advert .banner-num>li').eq(index).addClass('change-bgc').siblings().removeClass('change-bgc');
        $('.banner-picbox>.banner-pic').eq(index).stop().fadeIn().siblings().stop().fadeOut();
    }

//点击左右切换按钮切换图片
    $('.js-banner-left').click(function () {
        if (index < 0) {
            index = several;
        }
        index--;
        movePic();
    });
    $('.js-banner-right').click(function () {
        if (index >= several) {
            index = -1;
        }
        index++;
        movePic();
    });
//表单切换
    $('.form-title li').click(function () {
        var n = $(this).index();
        $(this).addClass('selected-li').siblings().removeClass('selected-li');
        $('.boxed>div').eq(n).show().siblings().hide();
    });

    //样板图片切换
    $('.js-layer-title li').click(function () {
        $(this).addClass('active-flag').siblings().removeClass('active-flag');
        var indexd = $(this).index();
        $('.js-layer-img .img-item').eq(indexd).show().siblings().hide();
    });

    //自动改变进度条显示与移动
    setInterval(function () {
        var current = $('.country-price>li');
        var getprice = $('.country-price');
        var kk = current.length;
        getprice.animate({marginTop: 48}, 'slow', function () {
            getprice.css({marginTop: 0});
            getprice.prepend(current.eq(kk - 1));
        });
    }, 2500);
//        自动改变进度条的显示长度
    (function () {
        var mm = $('.process-box>span');
        var cc = $('.process-box .process-color');
        for (var i = 0; i < mm.length; i++) {
            cc.eq(i).css({width: (parseInt(mm.eq(i).html())) * (0.6)});
        }
    })();//自动改变进度条的显示长度

//    数字滚动动画
    void function () {
        var control = 0;//4次循环
        var getDigital = $('.move-num .digital');
        setInterval(function () {
            if (control > 10) {
                return control = 0;
            }
            var arr = [];
            for (var i = 0; i < getDigital.length; i++) {
                arr.push($(getDigital[i]).attr('data-show'));
            }
            arr[1] = 9;
            nowMove(arr);
        }, 10000);

        //数字移动
        function nowMove(arr) {
            for (var j = 0; j < arr.length; j++) {
                $(getDigital[3]).css({marginTop: 0});
                $(getDigital[4]).css({marginTop: 0});
                $(getDigital[j]).animate({marginTop: -(arr[j] * 20)}, 1500);
            }
            control++;
            switch (control) {
                case 1:
                    $(getDigital[3]).attr('data-show', 2);
                    $(getDigital[4]).attr('data-show', 7);
                    break;
                case 2:
                    $(getDigital[3]).attr('data-show', 3);
                    $(getDigital[4]).attr('data-show', 6);
                    break;
                case 3:
                    $(getDigital[3]).attr('data-show', 4);
                    $(getDigital[4]).attr('data-show', 1);
                    break;
                case 4:
                    $(getDigital[3]).attr('data-show', 4);
                    $(getDigital[4]).attr('data-show', 6);
                    break;
                case 5:
                    $(getDigital[3]).attr('data-show', 5);
                    $(getDigital[4]).attr('data-show', 3);
                    break;
                case 6:
                    $(getDigital[3]).attr('data-show', 6);
                    $(getDigital[4]).attr('data-show', 8);
                    break;
                case 7:
                    $(getDigital[3]).attr('data-show', 7);
                    $(getDigital[4]).attr('data-show', 1);
                    break;
                case 8:
                    $(getDigital[3]).attr('data-show', 8);
                    $(getDigital[4]).attr('data-show', 6);
                    break;
                case 9:
                    $(getDigital[3]).attr('data-show', 9);
                    $(getDigital[4]).attr('data-show', 5);
                    break;
                case 10:
                    $(getDigital[2]).attr('data-show', 5);
                    $(getDigital[3]).attr('data-show', 0);
                    $(getDigital[4]).attr('data-show', 4);
                    break;
                default :
                    $(getDigital[2]).attr('data-show', 4);
                    $(getDigital[3]).attr('data-show', 0);
                    $(getDigital[4]).attr('data-show', 1);
                    break;
            }
        }
    }();

//视频弹窗播放
    myPlayer = videojs('my-video');
    videojs("my-video").ready(function () {
        myPlayer = this;
    });
//打开视频
    $('.open-video').click(function () {
        $('.pop-window').show();
    });
//    关闭视频
    $('.js-close').click(function () {
        myPlayer.load();
        $('.pop-window').hide();
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            myPlayer.pause();
            $('.pop-window').hide();
        }
    });

});//end function