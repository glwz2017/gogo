$(function () {
    // // 检测是否为登录状态
    // void function () {
    //     if (checkLogin()) {
    //         $('.user-box').show();
    //         $('.no-user-box').hide();
    //     } else {
    //         $('.user-box').hide();
    //         $('.no-user-box').show();
    //     }
    // }();
    //
    // //检测是否登录
    // function checkLogin() {
    //     var aEmail = window.localStorage.getItem('email');
    //     var aPwd = window.localStorage.getItem('pwd');
    //     if (aEmail === '000@163.com' && aPwd === '000000') {
    //         return true;
    //     }
    // }
    // //返回顶部
    // $('.go-btn').click(function () {
    //     $('html,body').animate({scrollTop: 0});
    // });
    //登录与退出
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

//   layer点击
//     $('.js-layer-val').click(function () {
//         $('.js-layer-ul').show();
//     });
//     $('.js-layer-ul li').click(function () {
//         $('.js-layer-val').val($(this).html());
//         $('.js-layer-ul').hide();
//     });
//   Thickness点击
//     $('.js-thickness-val').click(function () {
//         $('.js-thickness-ul').show();
//     });
//     $('.js-thickness-ul li').click(function () {
//         $('.js-thickness-val').val($(this).html());
//         $('.js-thickness-ul').hide();
//     });

//    点击喜欢按钮
//     $('.js-like').click(function () {
//         var src = $(this).attr('src');
//         var number= parseInt($('.js-number').html());
//         if (src === 'img/images/forum/like.png') {
//             $(this).attr('src', 'img/images/forum/liked.png');
//             $('.js-number').html(++number);
//         } else {
//             $(this).attr('src', 'img/images/forum/like.png');
//             $('.js-number').html(--number);
//         }
//     });

//    评论区域
    //富文本编辑
//     var ue = UE.getEditor('editor', {
//         //自定义工具栏按钮
//         toolbars: [
//             ['fullscreen', 'source', 'bold', 'italic', 'underline', 'strikethrough', 'blockquote', 'forecolor',
//                 'insertorderedlist', 'insertunorderedlist', 'paragraph', 'JustifyLeft', 'JustifyCenter', 'Link',
//                 'simpleupload', 'insertimage', 'insertcode', 'spechars', 'inserttable', 'deletetable',
//                 'horizontal'
//             ]
//         ],
//         autoHeightEnabled:false,
//         //自定义高度
//         initialFrameHeight: 175
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
//             '                        <img src="img/images/forum/header3.png" alt="header" width="40" height="40">\n' +
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
//             '                                    <img src="img/images/forum/header2.png" alt="header" width="40" height="40">\n' +
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
// //    评论区域
//over
});//end function