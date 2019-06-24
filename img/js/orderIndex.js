$(function () {
    //返回顶部按钮

    $('.go-btn').click(function () {
        $('html,body').animate({scrollTop:0});
    });
    // //导航列表
    // $('.js-order-li >li').mouseenter(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
    // $('.nav-c').mouseleave(function () {
    //     $('.js-order-li >li').eq(0).addClass('active').siblings().removeClass('active');
    // });

    // //登录前后
    // $('.js-user-activity').click(function (e) {
    //     $('.user-item').show();
    //     $(document).one('click', function () {
    //         $('.user-item').hide();
    //     });
    //     e.stopPropagation();
    // });
// //点击图片链接
//     $('.show-item li').click(function () {
//         $(this).parent().siblings().children().attr('src', $(this).children('img').attr('src'))
//     });
//     $('body').on('click', '.align-activity', function () {
//         $(this).attr('src', '../img/images/forum/liked.png');
//         $(this).siblings('span').html(parseInt($(this).siblings('span').html()) + 1);
//     });

});//end function
