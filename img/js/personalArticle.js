$(function () {
    // //点击提交按钮
    // $('.js-submit-name').click(function () {
    //     //模拟未重复用户名
    //     var that=this;
    //     checkName(that);
    // });
    // //名称输入检测
    // function checkName(that){
    //     var name = $.trim($('#first-name').val());
    //     if (name == '000') {
    //         $(that).parent().parent().hide();
    //         $('.tags-mask').fadeOut();
    //     } else {
    //         $('.js-input-tips').fadeIn();
    //         //1.5秒默认隐藏
    //         setTimeout(function () {
    //             $('.js-input-tips').fadeOut();
    //         }, 1500);
    //     }
    // }

    // //回车按键
    // $('#first-name').keyup(function (e) {
    //     var that=this;
    //     if(e.keyCode == 13){
    //         checkName(that);
    //     }
    // });

    //富文本编辑
    // var ue = UE.getEditor('editor', {
    //     //自定义工具栏按钮
    //     toolbars: [
    //         ['fullscreen', 'source', 'bold', 'italic', 'underline', 'strikethrough', 'blockquote', 'forecolor',
    //             'insertorderedlist', 'insertunorderedlist', 'paragraph', 'JustifyLeft', 'JustifyCenter', 'Link',
    //             'simpleupload', 'insertimage', 'insertcode', 'spechars', 'inserttable', 'deletetable',
    //             'horizontal'
    //         ]
    //     ],
    //     autoHeightEnabled: false,
    //     //自定义高度
    //     initialFrameHeight: 175
    // });
//    模拟进入到审核失败的时候初始化加载的数据 其他页面不加载
//     void function () {
//         if (window.location.href.match('personalEdit')) {
//             ue.ready(function () {
//                 ue.setContent("我也是之前输入提交的数据,需要重新修改");//初始化编辑器内容
//             });
//             //模拟插入原来数据
//             var str = '<li class="ui-item ui-lists">\n' +
//                 '                            <span class="ui-text">我还是之前的数据</span><span\n' +
//                 '                                class="icon-sprite delete-button"></span>\n' +
//                 '                        </li>';
//             $('.ui-item').before(str);
//         }
//     }();


// //   热门标签获取焦点
//     $("#dvKeywords").click(function () {
//         $("#iptKeywords").focus();
//     });
//
//     //动态生成热门标签
//     function createLabe(that) {
//         if (that.value && $.trim(that.value).length > 0) {
//             $(that).parent().parent().prepend('<li class="ui-item ui-lists"><span class="ui-text">' +
//                 $.trim(that.value)
//                 + '</span><span class="icon-sprite delete-button"></span></li>');
//             that.value = "";
//         }
//     }
//     //失去焦点添加内容
//     $("#iptKeywords").blur(function () {
//         var that = this;
//         createLabe(that);
//     });
//     //回车事件
//     $('#iptKeywords').keyup(function (e) {
//         var that = this;
//         if (e.keyCode == 13) {
//             createLabe(that);
//         }
//     });
//
//
//     //删除当前元素
//     $(document).delegate(".delete-button", "click", function () {
//         $(this).parent().remove();
//     });
//
// //    关闭失败原因
//     $('.release-box .js-close-btn').click(function () {
//         $(this).parent().hide();
//     });
//
// //点击重置按钮
//     $('.js-rest-btn').click(function () {
//         $('.title-input>input').val('');
//         ue.setContent("");//重置富文本内容区
//         $('#dvKeywords .ui-lists').remove();//移除动态添加内容
//     });
//over
});//end function