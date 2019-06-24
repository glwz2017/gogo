$(function () {
// //   活动轮播图开始
//     void function () {
//         var index = 0;
//         var activeTimer;
//         var length = $('.js-activity-box .activity-item').length - 1;
//         function activityMove() {
//             index++;
//             index = index > length ? 0 : index;
//             $('.js-activity-box .activity-item').eq(index).stop().fadeIn().siblings('.activity-item').stop().fadeOut();
//         }
//         activeTimer = setInterval(function () {
//             activityMove();
//         }, 2500);
//         $('.js-activity-box').hover(function () {
//             clearInterval(activeTimer);
//         }, function () {
//             activeTimer = setInterval(function () {
//                 activityMove();
//             }, 2500);
//         });
//         $('.js-btn-left').click(function () {
//             if (index == 0) {
//                 index = length;
//             } else {
//                 index--;
//             }
//             $('.js-activity-box .activity-item').eq(index).stop().fadeIn().siblings('.activity-item').stop().fadeOut();
//         });
//
//         $('.js-btn-right').click(function () {
//             index++;
//             index = index > length ? 0 : index;
//             $('.js-activity-box .activity-item').eq(index).stop().fadeIn().siblings('.activity-item').stop().fadeOut();
//         });
//     }();
//     //   活动轮播图结束

    // $('.categories-title li').click(function () {
    //     $(this).addClass('active-item').siblings('li').removeClass('active-item');
    // });
//over
});//end function