$(function () {
    //返回顶部
    $('.go-btn').click(function () {
        $('html,body').animate({scrollTop: 0});
    });
//    订单状态切换
    $('.tabed-ul>li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    });

//登录前后
    $('.js-user-activity').click(function (e) {
        $('.user-item').show();
        $(document).one('click', function () {
            $('.user-item').hide();
        });
        e.stopPropagation();
    });
//    点击搜索
    $('.js-btn-search').click(function () {
        alert('搜索内容');
    });
//回车搜索
    $('.js-order-search').keydown(function (e) {
        console.log(e.keyCode);
        if (e.keyCode === 13 && $(this).val() !== '') {
            alert('搜索内容');
        }
    });
//    自动进度
    var mm = null;
    (function () {
        mm = parseInt($('.new-jindu').text()) / 100 * 60;
        $('.js-new-progress').width(mm);
    })()
//    点击删除
    $('.js-del-box').click(function () {
        //点击删除图标
            $('.js-confirm-box').show();
    });


});//end function