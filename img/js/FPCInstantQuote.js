$(function () {
    // 右侧点击下单按钮
    $('.js-calculate').click(function () {
        $(this).hide();//隐藏计算按钮
        $('.js-main-price').show();
        $('.js-price-ul').show();
        $('.js-proto').show();
        //下单列表
        $('.pricing-list').show();
        $('.active-price').show();
    });
    //右侧下单物流选择
    $('.js-build-box div').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    //左侧各个计价参数
    //所有项选择
    $('.item-right .list').click(function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        $(this).addClass('active-list').siblings().removeClass('active-list');
    });

    //    第一项    layers
    $('.js-layers>.list').click(function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        $(this).addClass('active-list').siblings().removeClass('active-list');
    });


//    第二项Board type 列表
    $('.js-board .list').click(function () {
        $(this).addClass('active-list').parent().siblings().children('.list').removeClass('active-list');
        if ($(this).attr('data-value') == 1) {
            $('.js-pcs').show();
            $('.js-panel').hide();
        }
        if ($(this).attr('data-value') == 2) {
            $('.js-pcs').hide();
            $('.js-panel').show();
        }
    });
    //第六项  FPC Thickness列表
    $('.js-fpc>.list').click(function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        if ($.trim($(this).text()) == '0.13' || $.trim($(this).text()) == '0.15') {
            $('.js-mask>.list').eq(1).addClass('disabled');
            $('.js-silkscreen>.list').eq(1).addClass('disabled');
        } else {
            $('.js-mask>.list').eq(1).removeClass('disabled');
            $('.js-silkscreen>.list').eq(1).removeClass('disabled');
        }
    });


//    第五项Polyimide base material:列表
    $('.js-unit-item>li').click(function () {
        $('.js-unit-size').val($(this).html());
        $(this).parent().hide();
    });
    $('.js-unit-box').hover(function () {
        $(this).children('.js-unit-item').show();
    }, function () {
        $(this).children('.js-unit-item').hide();
    });

    //js-Stiffener 列表
    $('.js-stiffener>.list').click(function () {
        if ($(this).attr('data-value') == 0) {
            $('.js-stiffener-size').hide();
        } else {
            $('.js-stiffener-size').show();
        }
    });

    //stiffener 下拉
    $('.js-pi-box').hover(function () {
        $(this).find('ul').show();
        $('.js-dropdown-pi li').click(function () {
            $(this).parent().prev().val($(this).text());
            $(this).parent().hide();
        });
    },function () {
        $(this).find('ul').hide();
    });


//    3M tape

    $('.js-tape').hover(function () {
        $('.js-tape-menu').show();

    }, function () {
        $('.js-tape-menu').hide();
    });
    $('.js-tape-menu>li').click(function () {
        var str = $.trim($(this).html());
        $('.js-selTape').val(str);
        $(this).parent().hide();
        $('.js-selTape').val() === 'without' ? $('.js-onesided').hide() : $('.js-onesided').show();
    });

});//end function
