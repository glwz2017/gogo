$(function () {
    //   返回顶部
    $('.go-btn').click(function () {
        $('html,body').animate({scrollTop: 0});
    });
    // if ($('.box-lines').height() < getWindowHeight) {
    //     $('.box-r').css({minHeight: getWindowHeight});
    //     $('.font-line').css({minHeight: getWindowHeight});
    //     $('.box-l').height($('.box-lines').height());
    //     $('.font-line').height($('.box-lines').height());
    // } else {
    //     $('.box-l').height($('.box-lines').height());
    //     $('.font-line').height($('.box-lines').height());
    // }
    //左右保持一致
    function changeHeight() {
        var getWindowHeight = $(window).height();
        if ($('.order-main').height() < getWindowHeight) {
            $('.order-main').css({minHeight: getWindowHeight});
            $('.font-line').css({minHeight: getWindowHeight});
            $('.box-l').height($('.order-main').height());
            $('.box-r').height($('.order-main').height());
            $('.font-line').height($('.order-main').height());
        } else {
            $('.box-l').height($('.order-main').height());
            $('.box-r').height($('.order-main').height());
            $('.font-line').height($('.order-main').height());
        }
    }
    changeHeight();
    $(window).resize(function () {
        changeHeight();
    });
});//end function
