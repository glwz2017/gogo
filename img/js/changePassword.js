$(function () {
    //返回顶部
    $('.go-btn').click(function () {
        $('html,body').animate({scrollTop: 0});
        console.log(0);
    });
    //导航列表
    $('.js-order-li >li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.nav-c').mouseleave(function () {
        $('.js-order-li >li').eq(0).addClass('active').siblings().removeClass('active');
    });
    //登录前后
    $('.js-user-activity').click(function (e) {
        $('.user-item').show();
        $(document).one('click', function () {
            $('.user-item').hide();
        });
        e.stopPropagation();
    });
    //    二级导航默认选择第一项
    (function () {
        $('.tabed-ul li').eq(0).addClass('active').siblings().removeClass('active');
        $('.tabed-ul li').eq(0).css({borderBottom: '2px solid transparent'}).siblings().css({borderBottom: '2px solid #b21f1f'});
    })();
    //弹出确认密码遮罩层
    $('.js-update-btn').click(function () {
        $('.js-confirm-box').show();
    });
    $('.yes-btn').click(function () {
        $('.js-confirm-box').hide();
    });
    $('.no-btn').click(function () {
        $('.js-confirm-box').hide();
    });
});//end function