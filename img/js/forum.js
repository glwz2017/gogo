//程序入口
$(function () {
    //模拟本地登录 用户名：000@163.com  密码：000000
    //加载检测是够登录
    void function () {
        if (checkLogin()) {
            $('.js-sg-in').hide();
            $('.js-sg-free').hide();
            $('.user-box').show();
        } else {
            $('.join').show();
            $('.sign-in').show();
            $('.hi-in').hide();
            $('.joined').hide();
        }
    }();

    //模拟检测是否登录fn
    function checkLogin() {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
            return false;
        }//如果是IE7退出不执行
        var aEmail = window.localStorage.getItem('email');
        var aPwd = window.localStorage.getItem('pwd');
        if (aEmail === '000@163.com' && aPwd === '000000') {
            return true;
        }
    }

//url地址加密函数
    function compileStr(code) {
        var c = String.fromCharCode(code.charCodeAt(0) + code.length);
        for (var i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
        }
        return escape(c);
    }

    //模拟本地登录

    //  导航吸顶
    $(window).scroll(function () {
        var navTop = $(this).scrollTop();
        if (navTop >= 30) {
            $('.banner-nav').css({position: 'fixed', top: 0, left: 0, zIndex: 99});
        }
        else {
            $('.banner-nav').css({position: 'relative', zIndex: 99, top: 0});
        }
    });
    //用户登录
    $('.js-sg-in').click(function () {
        if (checkLogin()) {
            $('.join').hide();
            $('.sign-in').hide();
            $('.hi-in').show();
            $('.joined').show();
        } else {
            var urlStr = window.location.pathname;//获取之前的地址
            var splitIndex = urlStr.indexOf('forum');//截取位置
            if (splitIndex == '-1') {
                var oldStr = urlStr.substr(splitIndex + 1);
                window.location.href = 'login.html?=' + compileStr(oldStr);//加密后的
            } else {
                var oldStr = urlStr.substr(splitIndex);
                window.location.href = '../login.html?=' + compileStr(oldStr);//加密后的
            }
        }
    });
    //退出选择
    $('.js-user-pic').click(function () {
        $('.user-item').show();
    });
    //退出按钮
    $('.out-btn').click(function () {
        window.localStorage.setItem('pwd', '');
        $(this).parent().hide();
        $('.no-user-box').show();
        window.location.reload();
    });
    //免费注册
    $('.js-sg-free').click(function () {
        window.location.href = '../register.html';
    });
    //返回顶部
    $('.go-btn').click(function () {
        $('html,body').animate({scrollTop: 0});
    });

    //状态选择  allState
    $('.js-title-right').hover(function () {
        $(this).children('.state-list').show();
    }, function () {
        $(this).children('.state-list').hide();
    });
    $('.state-list>li').click(function () {
        $(this).parent().siblings('input').val($.trim($(this).html())).end().hide();
    });

    // //  取消关注元素 collectFollow.html
    $('.js-cancel').click(function () {
        $(this).parent().parent().hide();
    });
    //
    // //取消关注人follow.html
    $('.js-cancel-foll').click(function () {
        $(this).parent().fadeOut();
    });
    // //粉丝关注与取消Follower.html
    $('.js-focus-cancel').click(function () {
        $(this).toggleClass('active-fans');
        if ($(this).hasClass('active-fans')) {
            $(this).html("Cancel following");
        } else {
            $(this).html("Follow");
        }
    });

    //标题高度
    void function () {
        var minH = $('.change-height').height();
        if (minH > 40) {
            $('.change-height').height(101);
        }
    }();
    // 收藏按钮
    $('.js-collect-btn').click(function () {
        $(this).toggleClass('active-collect');
        if ($(this).hasClass('active-collect')) {
            $(this).html("Cancel collecting");
            var str = ' <li class="slower">\n' + '<img src="../img/images/forum/collect1.png" alt="header" width="24" height="24">\n' + '</li>';
            $('.js-collect-user').append(str);
        } else {
            $(this).html("Collecting");
            $('.js-collect-user>li').eq(-1).remove();
        }
    });
//    论坛右侧按钮
    $('.js-follow-btn').click(function () {
        //模拟本地登录 用户名：000@163.com  密码：000000
        //// 判断是否登录
        // if (localStorage.pwd != '000000') {
        //     var urlStr = window.location.pathname;//获取之前的地址
        //     var splitIndex = urlStr.indexOf('forum');//截取位置
        //     var oldStr = urlStr.substr(splitIndex);
        //     window.location.href = '../login.html?=' + compileStr(oldStr);//加密后的
        // } else {
        //登录显示
        $(this).toggleClass('active-follow');
        if ($(this).hasClass('active-follow')) {
            $(this).html("Cancel following");
        } else {
            $(this).html("Follow");
        }
        // }
    });
//    富文本编辑区域js
    if ($('.edit-box').length > 0) {
        // var ue = UE.getEditor('editor', {
        //     //自定义工具栏按钮
        //     toolbars: [
        //         ['fullscreen', 'source', 'bold', 'italic', 'underline', 'strikethrough', 'blockquote', 'forecolor',
        //             'insertorderedlist', 'insertunorderedlist', 'paragraph', 'JustifyLeft', 'JustifyCenter'
        //         ]
        //     ],
        //     zIndex: 9,
        //     // autoHeightEnabled:false,
        //     //自定义高度
        //     initialFrameHeight: 90
        // });
        if ((window.location.href.match('personalArticle')) || (window.location.href.match('personalProblem')) || (window.location.href.match('personalEdit'))) {
            var ue = UE.getEditor('editor', {
                //自定义工具栏按钮
                toolbars: [
                    ['fullscreen', 'source', 'bold', 'italic', 'underline', 'strikethrough', 'blockquote', 'forecolor',
                        'insertorderedlist', 'insertunorderedlist', 'paragraph', 'JustifyLeft', 'JustifyCenter', 'simpleupload',
                        'insertimage'
                    ]
                ],
                zIndex: 9,
                // autoHeightEnabled:false,
                //自定义高度
                initialFrameHeight: 90
            });
        } else {
            var ue = UE.getEditor('editor', {
                //自定义工具栏按钮
                toolbars: [
                    ['fullscreen', 'source', 'bold', 'italic', 'underline', 'strikethrough', 'blockquote', 'forecolor',
                        'insertorderedlist', 'insertunorderedlist', 'paragraph', 'JustifyLeft', 'JustifyCenter'
                    ]
                ],
                zIndex: 9,
                // autoHeightEnabled:false,
                //自定义高度
                initialFrameHeight: 90
            });
        }
//    双击模拟登陆后可以接受用户输入【只起视觉效果】
        $('.editor-mask').dblclick(function () {
            $(this).hide();
            $('.post-comments').hide();
        });

//    提交按钮
        $('.js-submit-btn').click(function () {
            //获取用户输入的纯文本
            var getStr = ue.getContentTxt();

            //获取用户编辑的样式
            // var getStr = ue.getContent();
            if (getStr == '' || getStr == null) {
                layer.msg('Please enter content', {
                    time: 1500,
                });
                return;
            }
            var str = '  <div class="interaction-item">\n' +
                '                    <div class="item-left">\n' +
                '                        <img src="../img/images/forum/header3.png" alt="header" width="40" height="40">\n' +
                '                    </div>\n' +
                '                    <div class="item-right js-item-right">\n' +
                '                        <h5>x****mes</h5>\n' +
                '                        <p>March 22, 2018, 07:18:22 pm</p>\n' +
                '                        <p class="interaction-text">\n' + getStr +
                '                        </p>\n' +
                '                        <p class="reply-p"><a href="javascript:void(0)" class="reply-btn js-reply-btn">Reply</a></p>\n' +
                '                        <!--回复框-->\n' +
                '                        <div class="reply-box">\n' +
                '                            <input type="text" class="reply-area">\n' +
                '                            <span class="reply-submit js-reply-submit">Submit</span>\n' +
                '                        </div>\n' +
                '                        <!--回复内容-->\n' +
                '                        <div class="reply-lists">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>';

            $('.js-interaction').append(str);
        });
//回复按钮
        $('body').on('click', '.js-reply-btn', function () {
            $(this).parent().siblings('.reply-box').toggleClass('active-reply');
        });
//用户输入内容
        $('body').on('click', '.js-reply-submit', function () {
            var getText = $.trim($(this).siblings('.reply-area').val());
            if (getText == '') {
                $(this).parent().toggleClass('active-reply');
                return;
            }
            var str = ' <div class="lists">\n' +
                '                                <div class="lists-left">\n' +
                '                                    <img src="../img/images/forum/header2.png" alt="header" width="40" height="40">\n' +
                '                                </div>\n' +
                '                                <div class="lists-right">\n' +
                '                                    <h5>x****mes</h5>\n' +
                '                                    <p>March 22, 2018, 07:18:22 pm</p>\n' +
                '                                    <p class="lists-text">\n' + getText +
                '                                    </p>\n' +
                '                                </div>\n' +
                '                            </div>';
            $(this).parent().siblings('.reply-lists').append(str);
            $(this).siblings('input').val('');
            $(this).parent().toggleClass('active-reply');
        });
    }//end if
//    富文本编辑区域js

    //    点赞与取消点赞按钮
    $('.js-approval>li').click(function () {
        $(this).toggleClass('active-li');
        var str = parseInt($(this).children('span').html());
        if ($(this).hasClass('active-li')) {
            $(this).children('span').html(++str);
        } else {
            $(this).children('span').html(--str);
        }
    });

//   点赞按钮 myProblemDetail.html
    $('body').on('click', '.js-give-like', function () {
        $(this).toggleClass('active-give');
        var value = parseInt($(this).children('span').html());
        if ($(this).hasClass('active-give')) {
            $(this).children('span').html(++value);
        } else {
            $(this).children('span').html(--value);
        }
    });

    //问题编辑提交按钮开始 myProblemDetail.html
    $('.js-problem-submit').click(function () {
        //获取用户输入的纯文本
        var getStr = ue.getContentTxt();
        //获取用户编辑的样式
        // var getStr = ue.getContent();
        if (getStr == '' || getStr == null) {
            layer.msg('Please enter content', {
                time: 1500,
            });
            return;
        }
        //问题详情
        var str = '  <div class="interaction-item">\n' +
            '                    <div class="item-left">\n' +
            '                        <img src="../img/images/forum/header3.png" alt="header" width="40" height="40">\n' +
            '                    </div>\n' +
            '                    <div class="item-right js-item-right">\n' +
            '                        <h5>x****mes</h5>\n' +
            '                        <p>March 22, 2018, 07:18:22 pm</p>\n' + ' <a href="javascript:void(0)" class="adopt-btn js-adopt-btn">Adopt</a>  ' + '<div class="adopt-flag"></div>' + ' ' +
            '<p class="interaction-text">\n' + getStr + '</p>\n' +
            '<p class="reply-p">' + ' <a href="javascript:void(0)" class="give-like js-give-like">Approval(<span>0</span>)</a>' +
            '<a href="javascript:void(0)" class="reply-btn js-reply-btn">Reply</a>' +
            '</p>\n' +
            '                        <!--回复框-->\n' +
            '                        <div class="reply-box">\n' +
            '                            <input type="text" class="reply-area">\n' +
            '                            <span class="reply-submit js-reply-submit">Submit</span>\n' +
            '                        </div>\n' +
            '                        <!--回复内容-->\n' +
            '                        <div class="reply-lists">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>';

        //问题详情页面problemDetail.html
        if (window.location.href.match('problemDetail')) {
            var str = '  <div class="interaction-item">\n' +
                '                    <div class="item-left">\n' +
                '                        <img src="../img/images/forum/header3.png" alt="header" width="40" height="40">\n' +
                '                    </div>\n' +
                '                    <div class="item-right js-item-right">\n' +
                '                        <h5>x****mes</h5>\n' +
                '                        <p>March 22, 2018, 07:18:22 pm</p>\n' +
                '                        <p class="interaction-text">\n' + getStr +
                '                        </p>\n' +
                '                        <p class="reply-p">' + ' <a href="javascript:void(0)" class="give-like js-give-like">Approval(<span>0</span>)</a>' +
                '<a href="javascript:void(0)" class="reply-btn js-reply-btn">Reply</a>' +
                '</p>\n' +
                '                        <!--回复框-->\n' +
                '                        <div class="reply-box">\n' +
                '                            <input type="text" class="reply-area">\n' +
                '                            <span class="reply-submit js-reply-submit">Submit</span>\n' +
                '                        </div>\n' +
                '                        <!--回复内容-->\n' +
                '                        <div class="reply-lists">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>';
        }
//publicProblemDetail.html
        if (window.location.href.match('publicProblemDetail')) {
            var str = '  <div class="interaction-item">\n' +
                '                    <div class="item-left">\n' +
                '                        <img src="../img/images/forum/header3.png" alt="header" width="40" height="40">\n' +
                '                    </div>\n' +
                '                    <div class="item-right js-item-right">\n' +
                '                        <h5>x****mes</h5>\n' +
                '                        <p>March 22, 2018, 07:18:22 pm</p>\n' + '<div class="adopt-flag"></div>' + '<p class="interaction-text">\n' + getStr +
                '                        </p>\n' +
                '                        <p class="reply-p">' + ' <a href="javascript:void(0)" class="give-like js-give-like">Approval(<span>0</span>)</a>' +
                '<a href="javascript:void(0)" class="reply-btn js-reply-btn">Reply</a>' +
                '</p>\n' +
                '                        <!--回复框-->\n' +
                '                        <div class="reply-box">\n' +
                '                            <input type="text" class="reply-area">\n' +
                '                            <span class="reply-submit js-reply-submit">Submit</span>\n' +
                '                        </div>\n' +
                '                        <!--回复内容-->\n' +
                '                        <div class="reply-lists">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>';
        }

        $('.js-interaction').append(str);
    });
//是否采纳按钮
    $('body').on('click', '.js-adopt-btn', function () {
        var that = this;
        //确认弹窗
        layer.confirm('Glad to help you! the persons who answer the question will get some rewards after adopting. And the operation can\'t be cancelled!', {
            btn: ['Cancel', 'Adopt'] //按钮
        }, function (index) {
            layer.close(index);
        }, function (index) {
            layer.close(index);
            $(that).hide();
            $(that).siblings('.adopt-flag').show();
        });
    });
    //问题编辑提交按钮结束


    //模拟用户评论  personalArticle.html
    //点击提交按钮
    $('.js-submit-name').click(function () {
        //模拟未重复用户名
        var that = this;
        checkName(that);
    });
    //回车按键
    $('#first-name').keyup(function (e) {
        var that = this;
        if (e.keyCode == 13) {
            checkName(that);
        }
    });

    //名称输入检测
    function checkName(that) {
        var name = $.trim($('#first-name').val());
        if (name == '000') {
            $(that).parent().parent().hide();
            $('.tags-mask').fadeOut();
        } else {
            $('.js-input-tips').fadeIn();
            //1.5秒默认隐藏
            setTimeout(function () {
                $('.js-input-tips').fadeOut();
            }, 1500);
        }
    }

//    动态添加热门标签
    //   热门标签获取焦点
    $("#dvKeywords").click(function () {
        $("#iptKeywords").focus();
    });

    $("#iptKeywords").blur(function () {
        var that = this;
        createLabe(that);
    });
    //动态生成热门标签
    function createLabe(that) {
        var nowStr=$.trim(that.value.replace(/,/g,''));
        if(nowStr==''){
            return
        }
        $(that).parent().before('<li class="ui-item ui-lists"><input type="hidden" value="'+ nowStr +'"><span class="ui-text">' + nowStr+ '</span><span class="icon-sprite delete-button"></span></li>');
        that.value = "";
    }
    // //回车事件
    $('#iptKeywords').keyup(function (e) {
        var that = this;
        if (e.keyCode == 13 || e.keyCode == 188) {
            createLabe(that);
        }
    });

    //获取元素
    $('.submit-btn').click(function () {
        var numArr = []; // 定义一个空数组
        $('input:hidden').each(function () {
            numArr.push($(this).val());
        });
        console.log(numArr.join());//添加的值
    });

    //删除当前元素
    $(document).delegate(".delete-button", "click", function () {
        $(this).parent().remove();
    });

//    关闭失败原因
    $('.release-box .js-close-btn').click(function () {
        $(this).parent().hide();
    });

//    动态添加热门标签

//    模拟进入到审核失败的时候初始化加载的数据 其他页面不加载
    void function () {
        if ($('.edit-box').length == 0) {
            return;
        }
        var ue = UE.getEditor('editor', {
            //自定义工具栏按钮
            toolbars: [
                ['fullscreen', 'source', 'bold', 'italic', 'underline', 'strikethrough', 'blockquote', 'forecolor',
                    'insertorderedlist', 'insertunorderedlist', 'paragraph', 'JustifyLeft', 'JustifyCenter'
                ]
            ],
            zIndex: 9,
            // autoHeightEnabled:false,
            //自定义高度
            initialFrameHeight: 90
        });
        if (window.location.href.match('personalEdit')) {
            ue.ready(function () {
                ue.setContent("我也是之前输入提交的数据,需要重新修改");//初始化编辑器内容
            });
            //模拟插入原来数据
            var str = '<li class="ui-item ui-lists">\n' +
                '                            <span class="ui-text">我还是之前的数据</span><span\n' +
                '                                class="icon-sprite delete-button"></span>\n' +
                '                        </li>';
            $('.ui-item').before(str);
        }
        //点击重置按钮
        $('.js-rest-btn').click(function () {
            $('.title-input>input').val('');
            ue.setContent("");//重置富文本内容区
            $('#dvKeywords .ui-lists').remove();//移除动态添加内容
        });
    }();


});//end function

