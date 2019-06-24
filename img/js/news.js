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

    //    二级导航默认选择第一项
    (function () {
        $('.tabed-ul li').eq(0).addClass('active').siblings().removeClass('active');
        $('.tabed-ul li').eq(0).css({borderBottom: '2px solid transparent'}).siblings().css({borderBottom: '2px solid #b21f1f'});
    })();

    $('.js-update-btn').click(function () {
        var newStr=' <div class="new-item ie-float">\n' +
            '                <div class="item-l">\n' +
            '                    <i><img src="../img/images/user.png" alt=""></i>\n' +
            '                    <div class="item-text">\n' +
            '                        <p class="item-time">2015.12.31 15:53:56</p>\n' +
            '                        <p class="item-describe">\n' +
            '                            <span style="margin-right: 10px">●</span>Dear Customer Happy New year! And the customer\n' +
            '                            service in our factory will have holiday from 1st Jan to 3rd Jan.But our factory will work\n' +
            '                            on 2rd Jan.\n' +
            '                        </p>\n' +
            '                        <!--图片盒子-->\n' +
            '                        <div class="list-activity-box">\n' +
            '                            <div class="item-activity"><img src="../img/images/order/list-activity.png" alt=""></div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <i></i>\n' +
            '                </div>\n' +
            '            </div>';

        $('.js-new-lists').prepend(newStr);
        $('.box-l').css({height: $('.box-r').height()});
    });

    //关闭图片按钮
    $('.up-activity-box').on('click','.js-close-btn',function () {
        $(this).parent().hide();
    });
//    上传图片
    $(".js-fileElem").change(function () {
        if (window.navigator.userAgent.indexOf("MSIE") >= 1) {
            this.select();
            console.log(document.selection.createRange().text);
            var str = ' <div class="up-pics">\n' +
                '  <img src="' + document.selection.createRange().text + '" alt="">\n' + ' <i class="close-btn js-close-btn">X</i>\n' + ' </div>';
            $('.js-file-List').prepend(str);
        }else{
            var file = this.files[0];
            if (window.FileReader) {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                //监听文件读取结束后事件
                reader.onloadend = function (e) {
                    //e.target.result就是最后的路径地址
                    console.log(e.target.result);
                    var str = ' <div class="up-pics">\n' +
                        '  <img src="' + e.target.result + '" alt="">\n' + ' <i class="close-btn js-close-btn">X</i>\n' + ' </div>';
                    $('.js-file-List').prepend(str);
                };
            }
        }
    });

});//end function
