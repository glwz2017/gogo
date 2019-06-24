$(function () {

    // //标题高度
    // void function(){
    //     var minH=$('.change-height').height();
    //     if(minH>40){
    //         $('.change-height').height(101);
    //     }
    // }();

    // // 收藏按钮
    // $('.js-collect-btn').click(function () {
    //     $(this).toggleClass('active-collect');
    //     if ($(this).hasClass('active-collect')) {
    //         $(this).html("Cancel collecting");
    //         var str = ' <li class="slower">\n' + '<img src="../img/images/forum/collect1.png" alt="header" width="24" height="24">\n' + '</li>';
    //         $('.js-collect-user').append(str);
    //     } else {
    //         $(this).html("Collecting");
    //         $('.js-collect-user>li').eq(-1).remove();
    //     }
    // });

    //富文本编辑
//     var ue = UE.getEditor('editor', {
//         //自定义工具栏按钮
//         toolbars: [
//             ['fullscreen', 'source', 'bold', 'italic', 'underline', 'strikethrough', 'blockquote', 'forecolor',
//                 'insertorderedlist', 'insertunorderedlist', 'paragraph', 'JustifyLeft', 'JustifyCenter'
//             ]
//         ],
//         // autoHeightEnabled:false,
//         //自定义高度
//         initialFrameHeight: 90
//     });
// //    模拟登陆后可以接受用户输入
//     $('.editor-mask').dblclick(function () {
//         $(this).hide();
//         $('.post-comments').hide();
//     });
//
// //    提交按钮
//     $('.js-submit-btn').click(function () {
//         //获取用户输入的纯文本
//         var getStr = ue.getContentTxt();
//
//         //获取用户编辑的样式
//         // var getStr = ue.getContent();
//         console.log(getStr);
//         if (getStr == '' || getStr == null) {
//             layer.msg('Please enter content',{
//                 time:1500,
//             });
//             return;
//         }
//         var str = '  <div class="interaction-item">\n' +
//             '                    <div class="item-left">\n' +
//             '                        <img src="../img/images/forum/header3.png" alt="header" width="40" height="40">\n' +
//             '                    </div>\n' +
//             '                    <div class="item-right js-item-right">\n' +
//             '                        <h5>x****mes</h5>\n' +
//             '                        <p>March 22, 2018, 07:18:22 pm</p>\n' +
//             '                        <p class="interaction-text">\n' + getStr +
//             '                        </p>\n' +
//             '                        <p class="reply-p"><a href="javascript:void(0)" class="reply-btn js-reply-btn">Reply</a></p>\n' +
//             '                        <!--回复框-->\n' +
//             '                        <div class="reply-box">\n' +
//             '                            <input type="text" class="reply-area">\n' +
//             '                            <span class="reply-submit js-reply-submit">Submit</span>\n' +
//             '                        </div>\n' +
//             '                        <!--回复内容-->\n' +
//             '                        <div class="reply-lists">\n' +
//             '                        </div>\n' +
//             '                    </div>\n' +
//             '                </div>';
//
//         $('.js-interaction').append(str);
//     });
// //回复按钮
//     $('body').on('click', '.js-reply-btn', function () {
//         $(this).parent().siblings('.reply-box').toggleClass('active-reply');
//     });
// //用户输入内容
//     $('body').on('click', '.js-reply-submit', function () {
//         var getText = $.trim($(this).siblings('.reply-area').val());
//         if(getText==''){
//             $(this).parent().toggleClass('active-reply');
//             return;
//         }
//         var str = ' <div class="lists">\n' +
//             '                                <div class="lists-left">\n' +
//             '                                    <img src="../img/images/forum/header2.png" alt="header" width="40" height="40">\n' +
//             '                                </div>\n' +
//             '                                <div class="lists-right">\n' +
//             '                                    <h5>x****mes</h5>\n' +
//             '                                    <p>March 22, 2018, 07:18:22 pm</p>\n' +
//             '                                    <p class="lists-text">\n' + getText +
//             '                                    </p>\n' +
//             '                                </div>\n' +
//             '                            </div>';
//         $(this).parent().siblings('.reply-lists').append(str);
//         $(this).siblings('input').val('');
//         $(this).parent().toggleClass('active-reply');
//     });


//   右侧结构
//     $('.js-follow-btn').click(function () {
//         $(this).toggleClass('active-follow');
//         if ($(this).hasClass('active-follow')) {
//             $(this).html("Cancel following");
//         } else {
//             $(this).html("Follow");
//         }
//     });

//    返回顶部动画
//     $('.go-btn').click(function () {
//         $('html,body').animate({scrollTop:0});
//     });

    //over
});//end function