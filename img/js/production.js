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

    //左侧导航 与二级列表显示与隐藏
    $('.js-category-index li').click(function () {
        var index = $(this).index();
        if (index == 5) {
            $(this).addClass('active');
            $(this).removeClass('more-list').siblings().removeClass('active');
            $('.second-item').show();
        } else {
            $('.second-item').hide();
            $(this).addClass('active').siblings().removeClass('active');
            $('.js-category-index li').eq(5).addClass('more-list');
        }
    });
    $('.second-item li').click(function () {
        $(this).addClass('second-active').siblings().removeClass('second-active');
    });
//   订单流程进度
    (function () {
        $('.js-now-num').width((parseInt($('.js-numed').text()) / 100) * 130);
    })();

    $('.js-lists-box ol').on('mouseenter', function () {
        console.log(0);
        $(this).addClass('show-yellow-border').siblings('ol').removeClass('show-yellow-border');
    });

    $('.js-lists-box').on('mouseleave', function () {
        $('.js-lists-box ol').eq(0).addClass('show-yellow-border').siblings('ol').removeClass('show-yellow-border');})
});//end function