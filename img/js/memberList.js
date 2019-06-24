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
        $('.js-under-review-box').eq(index).show().siblings('.js-under-review-box').hide();
    });

//    删除
    $('.js-under-review-box').on('click','.js-del-btn',function () {
        $('.js-confirm-box').show();
    });
    $('.yes-btn').click(function () {
        $('.js-confirm-box').hide();
    });
    // 点击添加新元素
    $('.js-load-btn').click(function () {
        $('.js-under-review-box').eq(0).append(createElemnt());
        $('.box-l').css({height: $('.box-r').height()});
    });
//模拟创建新元素
    function createElemnt() {
        var ss = '  <div class="box-item">\n' +
            '                <div class="product-l">\n' +
            '                    <div class="numbers">\n' +
            '                        <p>Order No：G122892 </p>\n' +
            '                        <p>2017.01.09 11:50:23</p>\n' +
            '                    </div>\n' +
            '                    <div class="numbers-text">\n' +
            '                        <p>67mm X 80mm 1 Layers 1.6mm 1 oz\n' +
            '                            Cu HASL with lead</p>\n' +
            '                        <p style="font-weight: bold">[PCB Production]</p>\n' +
            '                        <p>$5.00 & 8122 pieces</p>\n' +
            '                        <p>Product No: WOOO10ASD159</p>\n' +
            '                    </div>\n' +
            '                    <a href="javascript:void(0)" class="numbers-activity">\n' +
            '                        <img src="../img/images/order/details.png" alt=""\n' +
            '                             style="vertical-align: middle;margin-right: 15px;">\n' +
            '                        View Detail\n' +
            '                    </a>\n' +
            '                </div>\n' +
            '                <div class="comentari-c">\n' +
            '                    <p>\n' +
            '                        <span class="stats-active">★</span>\n' +
            '                        <span class="stats-active">★</span>\n' +
            '                        <span class="stats-active">★</span>\n' +
            '                        <span class="stats-active">★</span>\n' +
            '                        <span class="stats-active">★</span>\n' +
            '                    </p>\n' +
            '                    <p style="font-weight: bold;font-size: 14px;margin-top: 10px;">PCB Order</p>\n' +
            '                    <p style="margin-top: 10px;color: #727171">\n' +
            '                        Had a project from a medical company, they were very pleased with the job, PCBWay did an awesome\n' +
            '                        job there, awesome.\n' +
            '                    </p>\n' +
            '                    <div class="product-img-box">\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                        <i> <img src="../img/images/order/product1.png" alt=""></i>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="status">\n' +
            '                    <div class="under-box">\n' +
            '                        <p class="under-activity">\n' +
            '                            <img src="../img/images/order/under-review.png" alt="" style="vertical-align: middle">\n' +
            '                            Under Review\n' +
            '                        </p>\n' +
            '                        <i class="del-btn js-del-btn"><img src="../img/images/order/del.png" alt=""></i>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <!--清浮动-->\n' +
            '                <div style="clear: both"></div>\n' +
            '            </div>';
        return ss;
    }
});//end function