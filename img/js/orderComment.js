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
            window.location.href = '../index.html';
        });
        e.stopPropagation();
    });
    //    二级导航默认选择第一项
    (function () {
        $('.tabed-ul li').eq(0).addClass('active').siblings().removeClass('active');
        $('.tabed-ul li').eq(0).css({borderBottom: '2px solid transparent'}).siblings().css({borderBottom: '2px solid #b21f1f'});
    })();

// Communication好评1
    var getGoodStars1 = $('.js-good-stars1 li');
    var starsFlag1 = false;
    var comm_number = null;
    //鼠标进入时候
    getGoodStars1.mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).prevAll().addClass('active');
        $('.js-good-num1').html($(this).index() + 1);
    });
    //记录是否点击
    getGoodStars1.click(function () {
        comm_number = $(this).index();
        starsFlag1 = true;
        $('.js-good-num1').html(comm_number + 1);
    });
    //鼠标离开时候
    $('.js-good-stars1').mouseleave(function () {
        if (starsFlag1) {
            getGoodStars1.eq(comm_number).addClass('active').siblings().removeClass('active');
            getGoodStars1.eq(comm_number).prevAll().addClass('active');
            $('.js-good-num1').html(comm_number + 1);
        } else {
            getGoodStars1.removeClass('active');
            $('.js-good-num1').html(0);
        }
    });

    // Professional好评2
    var getGoodStars2 = $('.js-good-stars2 li');
    var starsFlag2 = false;
    var comm_number2 = null;
    //鼠标进入时候
    getGoodStars2.mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).prevAll().addClass('active');
        $('.js-good-num2').html($(this).index() + 1);
    });
    // //记录是否点击
    getGoodStars2.click(function () {
        comm_number2 = $(this).index();
        starsFlag2 = true;
        $('.js-good-num2').html(comm_number2 + 1);
    });
    // //鼠标离开时候
    $('.js-good-stars2').mouseleave(function () {
        if (starsFlag2) {
            getGoodStars2.eq(comm_number2).addClass('active').siblings().removeClass('active');
            getGoodStars2.eq(comm_number2).prevAll().addClass('active');
            $('.js-good-num2').html(comm_number2 + 1);
        } else {
            getGoodStars2.removeClass('active');
            $('.js-good-num2').html(0);
        }
    });

    // On-time好评3
    var getGoodStars3 = $('.js-good-stars3 li');
    var starsFlag3 = false;
    var comm_number3 = null;
    //鼠标进入时候
    getGoodStars3.mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).prevAll().addClass('active');
        $('.js-good-num3').html($(this).index() + 1);
    });
    // //记录是否点击
    getGoodStars3.click(function () {
        comm_number3 = $(this).index();
        starsFlag3 = true;
        $('.js-good-num3').html(comm_number3 + 1);
    });
    // //鼠标离开时候
    $('.js-good-stars3').mouseleave(function () {
        if (starsFlag3) {
            getGoodStars3.eq(comm_number3).addClass('active').siblings().removeClass('active');
            getGoodStars3.eq(comm_number3).prevAll().addClass('active');
            $('.js-good-num3').html(comm_number3 + 1);
        } else {
            getGoodStars3.removeClass('active');
            $('.js-good-num3').html(0);
        }
    });

//    列表好评4
    // On-time好评3
    var getGoodStars4 = $('.js-good-stars4 li');
    var starsFlag4 = false;
    var comm_number4 = null;
    //鼠标进入时候
    getGoodStars4.mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).prevAll().addClass('active');
        $('.js-good-num4').html($(this).index() + 1);
    });
    // //记录是否点击
    getGoodStars4.click(function () {
        comm_number4 = $(this).index();
        starsFlag4 = true;
        $('.js-good-num4').html(comm_number4 + 1);
    });
    // //鼠标离开时候
    $('.js-good-stars4').mouseleave(function () {
        if (starsFlag4) {
            getGoodStars4.eq(comm_number4).addClass('active').siblings().removeClass('active');
            getGoodStars4.eq(comm_number4).prevAll().addClass('active');
            $('.js-good-num4').html(comm_number4 + 1);
        } else {
            getGoodStars4.removeClass('active');
            $('.js-good-num4').html(0);
        }
    });
//
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