$(function () {
    //返回顶部
    $('.go-btn').click(function () {
        $('html,body').animate({scrollTop: 0});
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
//tab切换
    $('.tabed-ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).css({borderBottom: '2px solid transparent'}).siblings().css({borderBottom: '2px solid #b21f1f'});
        var index = $(this).index();
        $('.order-stats-box .js-boxed').eq(index).show().siblings().not('.select-all').hide();
    });

    var msg = {
        result: null,
        yes:function () {
            $('.js-confirm-box').hide();
            return result=1;
        },
        no:function () {
            $('.js-confirm-box').hide();
            return restult=0;
        },
        start:function () {
            $('.js-confirm-box').show();
        }
    };
    //点击删除图标
    $('.del-activity').click(function () {
       msg.start();
    });
    //关闭遮罩层函数
    $('.yes-btn').click(function () {
       msg.yes();
    });
    $('.no-btn').click(function () {
       msg.no();
    });

    $('.js-failed-activity').click(function () {
        $('.ew-tips').show();
        setTimeout(function () {
            $('.ew-tips').hide();
        }, 2000);
    });

//订单搜索
    $('.js-order-search').click(function () {

        if ($('.js-order-input').val() !== '' && $('.js-order-input').val() !== null) {
            $('.js-table-open').show();
        } else {
            alert('请输入搜索条件');
        }
    });
    //弹出表格代码
    $('.close-box').click(function () {
        $('.js-table-open').hide();
    });
    //    点击关闭选择项
    $('.wrong').click(function () {
        $(this).parent().hide();
        orderFlag = false;
        $('.order-table tr').not('.table-title').css({backgroundColor: '#fff'});
        $('.order-table tr').children().children('i').children('img').attr('src', '../img/images/no-right.png');
    });
    //点击订单表格里的订单号效果
    var orderIndex = null;//获取当前点击索引
    var orderFlag = false;//记录是否点击标识nb
    $('.order-table ').on('click', 'tr', function () {
        //下次点击之前清空上次样式
        $('.order-table tr').not('.table-title').css({backgroundColor: '#fff'});
        $('.order-table tr').children().children('i').children('img').attr('src', '../img/images/no-right.png');
        $('.selected-item').show();
        $('.order-name').html($(this).children('td').eq(0).text());
        $(this).css({backgroundColor: '#efeff0'}).siblings().not('.table-title').css({backgroundColor: '#fff'});
        $(this).children('td').eq(0).children('i').eq(0).children('img').attr('src', '../img/images/righted.png');
        $(this).siblings().children().children('i').children('img').attr('src', '../img/images/no-right.png');
        orderIndex = $(this).context.rowIndex;
        orderFlag = true;
    });
//  鼠标移动
    $('.order-table').on('mouseenter', 'tr', function () {
        //针对IE8
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i) == "8.") {
            $('.order-table').unbind('mouseenter');
        }
        $(this).css({backgroundColor: '#efeff0'}).siblings().not('.table-title').css({backgroundColor: '#fff'});
    });//end move
    $('.order-table').on('mouseleave', 'tr', function () {
        //针对IE8
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i) == "8.") {
            // alert("IE 8.0");
            $('.order-table').unbind('mouseleave');
        }
        if (orderFlag) {
            $('.order-table tr').not('.table-title').css({backgroundColor: '#fff'});
            $('.order-table tr').eq(orderIndex).css({backgroundColor: '#efeff0'});
        } else {
            $('.order-table tr').not('.table-title').css({backgroundColor: '#fff'});
        }
    });

//    国家列表
    $('.js-country-value').click(function (e) {
        $('.js-wl-ul').hide();
        $('.js-country-ul').show();
        $(document).one("click", function () {
            $('.js-country-ul').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.js-country-ul li').click(function () {
        $('.js-country-has').val($(this).html());
        $(this).parent().hide();
    });
//    物流列表
    $('.js-wl-value').click(function (e) {
        $('.js-country-ul').hide();
        $('.js-wl-ul').show();
        $(document).one("click", function () {
            $('.js-wl-ul').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.js-wl-ul li').click(function () {
        $('.js-wl-has').val($(this).html());
        $(this).parent().hide();
    });

    //购物车列表选择样式函数
    $('.js-input-val').click(function () {
        if ($(this)[0].checked) {
            $(this).siblings('.js-label-bg').addClass('active');
        }
        else {
            $(this).siblings('.js-label-bg').removeClass('active');
        }
    });
    //获取所有选择框
    $('.js-all-val').click(function () {
        //获取全部状态下的订单选择状态
        // var getChecks = $('.all-order-box .js-input-val');
        // var getAllcheck = $(this)[0].checked;
        // for (var i = 0; i < getChecks.length; i++) {
        //     getChecks[i].checked = getAllcheck;
        // }
        // for (var j = 0; j < getChecks.length; j++) {
        //     if (getChecks[j].checked) {
        //         $('.all-order-box .js-label-bg').addClass('active');
        //     } else {
        //         $('.all-order-box .js-label-bg').removeClass('active');
        //     }
        // }
        //全选按钮样式改变
        console.log(0);
        if ($(this)[0].checked) {
            $(this).siblings('.js-all-label-bg').addClass('active');
        }
        else {
            $(this).siblings('.js-all-label-bg').removeClass('active');
        }
    });
    //单选按钮
    $(' .js-radio-val').click(function () {
        for (var j = 0; j < $('.js-radio-val').length; j++) {
            if ($('.js-radio-val').eq(j)[0].checked) {
                $('.table-open .js-label-bg').css({backgroundImage: 'url(../img/images/order/gou.png)'});
                $(this).siblings('.table-open .js-label-bg').css({backgroundImage: 'url(../img/images/order/goued.png)'});
            }
        }
    });
    //添加订单编号
    $('.js-sub-btn').click(function () {
        $('.add-numbers').empty();
        var kk = $('.now-box .js-radio-val');
        // var cc=[];
        for (var i = 0; i < kk.length; i++) {
            if (kk[i].checked) {
                var ss = ' <span class="number-span">' + $(kk[i]).parent().siblings('div').children('.li-number').html() + '<i class="close-number js-close-number">X</i>\n' + '</span>';
                $('.add-numbers').append(ss + '&nbsp;');
            }
        }
        //还原选择状态
        for (var k = 0; k < $('.js-radio-val').length; k++) {
            $('.js-radio-val').eq(k)[0].checked = false;
            $('.table-open .js-label-bg').css({backgroundImage: 'url(../img/images/order/gou.png)'});
        }
        $('.js-table-open').hide();
    });
    $('.add-numbers').on('click', '.js-close-number', function () {
        $(this).parent().parent().hide();
    });


//
    $('.js-add-file').click(function () {
        $('.js-up-file-box').show();
    });

    // $('.js-review').click(function () {
    //     $('.js-failed-tips').show();
    //     setTimeout(function () {
    //         $('.js-failed-tips').hide();
    //     }, 2000);
    // });
});//end function