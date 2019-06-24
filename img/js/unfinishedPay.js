$(function () {
    //返回顶部
    $('.go-btn').click(function () {
        $('html,body').animate({scrollTop: 0});
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

//付款选择状态
    $('.js-pay1').click(function () {
        if (this.checked) {
            $('.js-pay-checked1').addClass('active');
        } else {
            $('.js-pay-checked1').removeClass('active');
        }
    });
    $('.js-pay2').click(function () {
        if (this.checked) {
            $('.js-pay-checked2').addClass('active');
        } else {
            $('.js-pay-checked2').removeClass('active');
        }
    });
    $('.js-pay3').click(function () {
        if (this.checked) {
            $('.js-pay-checked3').addClass('active');
        } else {
            $('.js-pay-checked3').removeClass('active');
        }
    });
});//end function
