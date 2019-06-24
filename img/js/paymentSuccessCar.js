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
        });
        e.stopPropagation();
    });
    //    模拟进度条进度指示条
    var getJsUl = $('.js-progress-li li');
    function showProgress() {
        var steped = parseInt(Math.random() * 3);//模拟后台返回数据接受【0,1,2】代表3个状态
        getJsUl.eq(steped).css({color: '#b21f1f'});
        getJsUl.eq(steped).prevAll().css({color: '#b21f1f'});
        getJsUl.eq(steped).children().css({borderBottom: '2px solid #b21f1f'});
        getJsUl.eq(steped).children().children('img').attr('src', '../img/images/order/show2.png');
        getJsUl.eq(steped).prevAll().children().children('img').attr('src', '../img/images/order/show2.png');
        getJsUl.eq(steped).prevAll().children().css({borderBottom: '2px solid #b21f1f'});
        console.log(steped);
    }
    showProgress();//调用订单进度状态

});//end function