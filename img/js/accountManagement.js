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

    //左右保持一致
    function changeHeight() {
        $('.box-l').css({height: $('.box-r').height()});
    }

    //    二级导航默认选择第一项
    // (function () {
    //     $('.tabed-ul li').eq(0).addClass('active').siblings().removeClass('active');
    //     $('.tabed-ul li').eq(0).css({borderBottom: '2px solid transparent'}).siblings().css({borderBottom: '2px solid #b21f1f'});
    // })();
//tab切换
    $('.tabed-ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        // $(this).css({borderBottom: '2px solid transparent'}).siblings().css({borderBottom: '2px solid #b21f1f'});
        // var index = $(this).index();
        // $('.order-stats-box .js-boxed').eq(index).show().siblings().not('.select-all').hide();
        // //   显示相关板块
        // $('.zx').children('.orders-box1').eq($(this).index()).show().siblings().hide();
        // //   重置窗体左右高度
        // //筛选内容
        // $('.js-person-lists').eq($(this).index()).show().siblings('.js-person-lists').hide();
        // changeHeight();
    });
//    点击搜索
//     $('.js-btn-search').click(function () {
//         alert('搜索内容');
//     });
//回车搜索
//     $('.js-order-search').keydown(function (e) {
//         console.log(e.keyCode);
//         if (e.keyCode === 13 && $(this).val() !== '') {
//             alert('搜索内容');
//         }
//     });
//   复选框选择
    $('.js-pay4').click(function () {
        if (this.checked) {
            $('.js-pay-checked4').css({backgroundImage: 'url("../img/images/order/goued.png")'});
        } else {
            $('.js-pay-checked4').css({backgroundImage: 'url("../img/images/order/gou.png")'});
        }
    });

    // $('.js-quota-box .js-quota-item').click(function () {
    //     $(this).addClass('active').siblings('.js-quota-item').removeClass('active');
    //     if ($('.js-quota-item').eq(0).hasClass('active')) {
    //         $('.js-order-list-box').show();
    //         $('.js-coupon-box').hide();
    //         changeHeight();
    //     }else if($('.js-quota-item').eq(1).hasClass('active')){
    //         $('.js-coupon-box').show();
    //         $('.js-order-list-box').hide();
    //         changeHeight();
    //     }
    //     changeHeight();
    // });

});//end function