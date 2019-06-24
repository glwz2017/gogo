$(function () {
    (function () {
        if (checkLogin()) {
            $('.join').hide();
            $('.sign-in').hide();
            $('.hi-in').show();
            $('.joined').show();
            $('.js-hints .active').show();
        } else {
            $('.join').show();
            $('.sign-in').show();
            $('.hi-in').hide();
            $('.joined').hide();
            $('.js-hints .active').hide();
        }
    })();

    //检测是否登录
    function checkLogin() {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
            return false;
        }//如果是IE7退出不执行
        var aEmail = window.localStorage.getItem('email');
        var aPwd = window.localStorage.getItem('pwd');
        if (aEmail === '000@163.com' && aPwd === '000000') {
            return true;
        }
    }

    //获取网页链接指定文档显示高度：
    var urlStr = window.location.href;
    if (urlStr.match('pcbaAssemblyProcess.html')) {
        $(document).scrollTop($('.sample-show-box').offset().top);
    }
    if (urlStr.match('pcbaSpecialReminders.html')) {
        $(document).scrollTop($('.sample-show-box').offset().top);
    }
    if (urlStr.match('rapidPcbAssembaly.html')) {
        $(document).scrollTop($('.sample-show-box').offset().top);
    }
    if (urlStr.match('filesRequestedInPcba.html')) {
        $(document).scrollTop($('.sample-show-box').offset().top);
    }
    if (urlStr.match('pcbaAssemblyFaq.html')) {
        $(document).scrollTop($('.sample-show-box').offset().top);
    }
    if (urlStr.match('pcbSampleToShow.html')) {
        $(document).scrollTop($('.sample-show-box').offset().top);
    }

    //二级导航吸顶
    $(window).scroll(function () {
        if ($('.nb').length <= 0) {
            return;
        }
        //二级导航吸顶
        var navTop = $(document).scrollTop();//文档卷走的距离
        if (navTop >= 370) {
            $('.nb').css({position: 'fixed', top: 0, left: 0, zIndex: 999});
        } else {
            $('.nb').css({position: 'relative', zIndex: 999});
        }
        //点击取消广告推送
        $('.js-calculate').click(function () {
            $('.js-promote-box').hide();
        });
        var moveElement = $('.js-calculate').css('display'); //移动的元素
        var jspro = $('.js-proto').css('display');
        if (moveElement === 'block') {
            nowMove();  //黑色按钮
            console.log('黑色');
        }
        console.log($('.js-proto').css('display'));
        if (jspro === 'inline-block' || jspro === 'inline' || jspro === 'block') {
            nowMove();  //红色按钮
            console.log('红色');
        }
    });

//nowMove函数
    function nowMove() {
        var navTop = $(document).scrollTop();//文档卷走的距离
        var floatElement = $('.js-floating-element').height(); //移动元素自身的高度;
        var totalMain = $('.main')[0].offsetTop; //外盒子距离顶部的高度
        var getDibu = $('.footer').offset().top;  //固定元素距离文档顶部距离;
        var defaulTop = navTop - totalMain; //默认的高度;
        if (navTop >= 370) {
            $('.nb').css({position: 'fixed', top: 0, left: 0, zIndex: 999});
            if ((getDibu - (navTop + floatElement) <= 200)) {
                $('.js-content-r').css({position: 'relative', bottom: 0, zIndex: 99});
            } else {
                $('.js-content-r').stop(true).animate({top: defaulTop}, 0, function () {
                    defaulTop = null;
                });
            }
        } else {
            $('.nb').css({position: 'relative', zIndex: 999});
            $('.js-content-r').css({position: 'relative', top: 0, zIndex: 99});
        }
        //end if
    }//end nowMove(函数);

    //语言选择遮罩层弹出
    $('.sign-lists .language').hover(function () {
        localStorage.setItem('name', '000');
        $('.language-box').show();
    }, function () {
        $(".language-box").hide();
    });

//        //模拟是否登录
    $('.sign-in').click(function () {
        if (checkLogin()) {
            $('.join').hide();
            $('.sign-in').hide();
            $('.hi-in').show();
            $('.joined').show();
        } else {
            var urlStr = window.location.pathname;//获取之前的地址
            var splitIndex = urlStr.lastIndexOf('/');//截取位置
            var oldStr = urlStr.substr(splitIndex + 1);
            window.location.href = 'login.html?=' + compileStr(oldStr);//加密后的
        }

    });

//url地址加密函数
    function compileStr(code) {
        var c = String.fromCharCode(code.charCodeAt(0) + code.length);
        for (var i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
        }
        return escape(c);
    }

//弹窗登出账户
    $('.joined').click(function (e) {
        $('.user-item').show();
        $(document).one('click', function () {
            $('.user-item').hide();
        });
        e.stopPropagation();
    });
//退出登录
    $('.out-btn').click(function () {
        window.localStorage.setItem('pwd', '');
        $(this).parent().hide();
        window.location.reload();
    });
//注册账户
    $('.join').click(function () {
        window.location.href = 'register.html';
    });
//获取元素与鼠标切换
    $(window).scroll(function () {
        if ($('.sample-show-box').length <= 0) {
            return;
        }
        var docNowHeight = $(document).scrollTop();//文档卷走高度
        var moveHeight = docNowHeight - $('.sample-show-box')[0].offsetTop;  //要移动的总高度
        var fixedHeight = $('.valuation-box')[0].offsetTop;  //固定元素高度
        var jumpHeight = $('.sample-l')[0].offsetTop;
        var selfHeight = $('.mmk').height();
        if (docNowHeight > jumpHeight) {
            if (fixedHeight - (docNowHeight + selfHeight) <= 250) {
                $('.mmk').css({position: 'relative', bottom: 0, zIndex: 9999});
            } else {
                $('.mmk').stop().animate({top: moveHeight}, 0, function () {
                    moveHeight = null;
                });
            }
        } else {
            $('.mmk').css({position: 'relative', top: 0, zIndex: 9999});
        }
    });

})
;//end function
