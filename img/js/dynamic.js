$(function () {

    // 检测是否为登录状态
    // (function () {
    //     if (checkLogin()) {
    //         $('.user-box').show();
    //         $('.no-user-box').hide();
    //     } else {
    //         $('.user-box').hide();
    //         $('.no-user-box').show();
    //         // $('.user-item').hide();
    //     }
    // })();
    //
    // //检测是否登录
    // function checkLogin() {
    //     var aEmail = window.localStorage.getItem('email');
    //     var aPwd = window.localStorage.getItem('pwd');
    //     if (aEmail === '000@163.com' && aPwd === '000000') {
    //         return true;
    //     }
    // }
    //
    // //返回顶部
    // $('.go-btn').click(function () {
    //     $('html,body').animate({scrollTop: 0});
    // });
    // //登录与退出
    // $('.js-sg-in').click(function () {
    //     window.location.href = 'login.html';
    //     var urlStr = window.location.pathname;//获取之前的地址
    //     var splitIndex = urlStr.lastIndexOf('/');//截取位置
    //     var oldStr = urlStr.substr(splitIndex + 1);
    //     window.location.href = 'login.html?=' + compileStr(oldStr);
    // });
    // //url地址加密函数
    // function compileStr(code){
    //     var c=String.fromCharCode(code.charCodeAt(0)+code.length);
    //     for(var i=1;i<code.length;i++){
    //         c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));
    //     }
    //     return escape(c);
    // }
    // $('.js-user-pic').click(function () {
    //     $('.user-item').show();
    // });
    // $('.out-btn').click(function () {
    //     window.localStorage.setItem('pwd', '');
    //     $('.user-box').hide();
    //     $('.no-user-box').show();
    // });
    // $('.js-sg-free').click(function () {
    //     window.location.href = 'register.html';
    // });
//轮播图
//
//     void function () {
//         var index = 0;
//         var activeTimer;
//         var length = $('.banner-box .img-item').length - 1;
//         function activityMove() {
//             index++;
//             index = index > length ? 0 : index;
//             $('.banner-box .img-item').eq(index).stop().fadeIn().siblings('.img-item').stop().fadeOut();
//             $('.main-l .dynamic-list-title').eq(index).stop().show().siblings('.dynamic-list-title').stop().hide();
//         }
//         activeTimer = setInterval(function () {
//             activityMove();
//         }, 2500);
//         $('.index-btn li').hover(function () {
//             clearInterval(activeTimer);
//         }, function () {
//             activeTimer = setInterval(function () {
//                 activityMove();
//             }, 2500);
//         });
//         $('.index-btn .left-index').click(function () {
//             if (index == 0) {
//                 index = length;
//             } else {
//                 index--;
//             }
//             $('.banner-box .img-item').eq(index).stop().fadeIn().siblings('.img-item').stop().fadeOut();
//             $('.main-l .dynamic-list-title').eq(index).stop().show().siblings('.dynamic-list-title').stop().hide();
//         });
//
//         $('.index-btn .right-index').click(function () {
//             index++;
//             index = index > length ? 0 : index;
//             $('.banner-box .img-item').eq(index).stop().fadeIn().siblings('.img-item').stop().fadeOut();
//             $('.main-l .dynamic-list-title').eq(index).stop().show().siblings('.dynamic-list-title').stop().hide();
//         });
//     }();
    //轮播图结束
// //   layer点击
//     $('.js-layer-val').click(function () {
//         $('.js-layer-ul').show();
//     });
//     $('.js-layer-ul li').click(function () {
//         $('.js-layer-val').val($(this).html());
//         $('.js-layer-ul').hide();
//     });
// //   Thickness点击
//     $('.js-thickness-val').click(function () {
//         $('.js-thickness-ul').show();
//     });
//     $('.js-thickness-ul li').click(function () {
//         $('.js-thickness-val').val($(this).html());
//         $('.js-thickness-ul').hide();
//     });
    //over
});//end function