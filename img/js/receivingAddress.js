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


    $('.js-region').click(function (e) {
        $('.region-down').show();
        // selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.region-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.region-down>li').click(function () {
        $('.region-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });

    $('.js-region-input').click(function (e) {
        $('.js-region-ul').show();
        // selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.js-region-ul').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.js-region-ul>li').click(function () {
        $('.js-region-input').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    $('.js-city-input').click(function (e) {
        $('.js-city-ul').show();
        // selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.js-city-ul').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.js-city-ul>li').click(function () {
        $('.js-city-input').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    $('.js-city').click(function (e) {
        $('.city-down').show();
        // selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.city-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.city-down>li').click(function () {
        $('.city-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });


    //选择地址
    $('.js-ress-box li').click(function () {
        console.log( $('.js-ress-box .now-address'));
        $(this).addClass('active-address').siblings('li').removeClass('active-address');
        $(this).children('.edit-box').children('.set-default').hide();
        $(this).siblings('li').children('.edit-box').children('.set-default').show();
        $(this).children('.now-address').addClass('show-new-address');
        $(this).siblings('li').children('.now-address').removeClass('show-new-address');
    });
//弹出地址
    $('.js-new-address').click(function () {
        $('.js-address-mask').show();
    });

    $('.js-update-btn-box').click(function () {
        $('.js-address-mask').show();
    });

//编辑收货地址
    $('.js-edit').click(function () {
        $('.js-address-mask').show();
    });
    $('.js-del').click(function () {
        $(this).parent().parent().hide();
    });
    $('.close').click(function () {
        $('.js-address-mask').hide();
    });

});//end function