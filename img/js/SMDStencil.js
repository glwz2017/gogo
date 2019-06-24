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
//左侧计价开始
//    所有项选择效果
    $('.item-right .list').click(function () {
        $(this).addClass('active-list').siblings('.list').removeClass('active-list');
    });
    //第一项
    $('.js-framework .list').click(function () {
        var frameIndex = $(this).index();
        $('.js-size-input').val('');
        $('.item-right .js-valid-size').eq(frameIndex).show().siblings('.js-valid-size').hide();
    });
//    第二项   鼠标进入显示下拉菜单
    $('.js-valid-size').hover(function () {
        $('.js-size-list').show();
        $('.js-size-list>li').click(function () {
            $('.js-size-input').val($.trim($(this).html()));
            $(this).parent().hide();
        });
    }, function () {
        $('.js-size-list').hide();
    });

//    第三项
    $('.js-side >.list').click(function () {
        return $(this).index() == 3 ? $('.js-pieces').val(2):$('.js-pieces').val(1);
    });
//左侧计价结束
});//end function
