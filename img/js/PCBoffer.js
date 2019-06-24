$(function () {
    //导航吸顶
    $(window).scroll(function () {
        var navTop = $(this).scrollTop();
        if (navTop >= 370) {
            $('.nb').css({position: 'fixed', top: 0, left: 0, zIndex: 9999});
        } else {
            $('.nb').css({position: 'relative', zIndex: 9999});
        }
    });

    $('.banner-ul li').click(function () {
        //  改变右侧定位元素
        $('.main-price').hide();
        // var fuck = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        // $('.pcb-box .js-find').eq(fuck).css({display: 'block'}).siblings().css({display: 'none'});

    });

    //列表选择
    $('.mt-box').click(function () {
        $(this).css({border: '1px solid black'});
        $(this).children('.zx').show();
        $(this).siblings('.al-board').css({border: '1px solid #efefef'});
        $(this).siblings('.al-board').children('.zx').hide();
    });
    $('.al-board').click(function () {
        $(this).css({border: '1px solid black'});
        $(this).children('.zx').show();
        $(this).siblings('.mt-box').css({border: '1px solid #efefef'});
        $(this).siblings('.mt-box').children('.zx').hide();
    });
//  弹出关闭提示一
    $('.inch-box').click(function (e) {
        // $('.inch-open').css({transform: 'translateY(0px)'});
        $('.inch-open').show();
        $('.inch-box').css({background: 'url("img/images/problemed.png") 90% center no-repeat'});
        $(document).one("click", function () {
            $('.inch-open').hide();
            $('.inch-box').css({background: 'url("img/images/problem.png") 90% center no-repeat'});
        });
        e.stopPropagation();
    });
    $('.close-tips').click(function () {
        // $('.inch-open').css({transform: 'translateY(-480px)'});
        $('.inch-box').css({background: 'url("img/images/problem.png") 90% center no-repeat'});
        $('.inch-open').hide();
        return false;
    });
//    下拉选择
    $('.js-quantity').click(function (e) {
        $('.quantity-down').show();
        if ($('.quantity-down').height() > 150) {
            $('.quantity-down').css({overflowY: 'scroll'});
        } else {
            $('.quantity-down').css({overflowY: 'auto'});
        }
        $(document).one("click", function () {
            $('.quantity-down').hide();
        });
        e.stopPropagation();
    });
    $('.quantity-down>li').click(function () {
        $('.js-quantity').val($(this).text());
        $('.quantity-down').hide();
    });
//选择其他尺寸
    $('.other-div').click(function () {
        $(this).css({border: '1px solid black'});
        $(this).children('.zx').show();
    });
//    //  弹出关闭提示二
    $('.border-tips').click(function (e) {
        $(this).children('img').attr({src: 'img/images/problemed.png'});
        $(this).children('.than-tips-box').show();
        $(document).one("click", function () {
            $('.than-tips-box').hide();
            $('.border-tips').children('img').attr({src: 'img/images/problem.png'});
        });
        e.stopPropagation();
    });
    $('.than-close').click(function () {
        $('.border-tips').children('img').attr({src: 'img/images/problem.png'});
        $('.than-tips-box').hide();
        return false;
    });
//    //  弹出关闭提示三
    $('.board-tips').click(function (e) {
        $(this).children('img').attr({src: 'img/images/problemed.png'});
        $(this).children('.different-box').show();
        $(document).one("click", function () {
            $('.different-box').hide();
            $('.board-tips').children('img').attr({src: 'img/images/problem.png'});
        });
        e.stopPropagation();
    });
    $('.different-close').click(function () {
        $('.board-tips').children('img').attr({src: 'img/images/problem.png'});
        $('.different-box').hide();
        return false;
    });
////    下拉选择
    $('.different-select').click(function (e) {
        $('.different-down').show();
        if ($('.different-down').height() > 150) {
            $('.different-down').css({overflowY: 'scroll'});
        } else {
            $('.different-down').css({overflowY: 'auto'});
        }
        $(document).one("click", function () {
            $('.different-down').hide();
        });
        e.stopPropagation();
    });
    $('.different-down > li').click(function () {
        $('.select-diff').val($(this).text());
        console.log(1);
        $('.different-down').hide();
        return false;
    });

    //版面选择
    $('.single-unit').click(function () {
        $('.panel-box').hide();
        $(this).css({border: '1px solid black'});
        $(this).children('.zx').show();
        $('.panel').css({border: '1px solid #efefef'});
        $('.panel').children('.zx').hide();
    });
    $('.panel').click(function () {
        $('.panel-box').show();
        $(this).children('.zx').show();
        $(this).css({border: '1px solid black'});
        $('.single-unit').css({border: '1px solid #efefef'});
        $('.single-unit').children('.zx').hide();
    });

//   下拉选择函数的小封装
    function selectedItems(kk) {
        $(kk).show();
        if ($(kk).height() > 150) {
            $(kk).css({overflowY: 'scroll'});
        } else {
            $(kk).css({overflowY: 'auto'});
        }
    }//end 下拉选择函数的小封装

    $('.route-select').click(function (e) {
        //调用下拉选择函数
        selectedItems($(this).children()[2]);
        $(document).one("click", function () {
            $('.route-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.route-down>li').click(function () {
        $('.select-rou').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    $('.allow-select').click(function (e) {
        //调用下拉选择函数
        selectedItems($(this).children()[2]);
        $(document).one("click", function () {
            $('.allow-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.allow-down>li').click(function () {
        $('.select-allow').val($(this).text());
        $(this).parent().hide();
        return false;
    });

//layer点击
    $('.js-layer').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.layer-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.layer-down>li').click(function () {
        $('.layer-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    // js-thick
    $('.js-thick').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.thick-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.thick-down>li').click(function () {
        $('.thick-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
//    js-space
    $('.js-space').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.space-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.space-down>li').click(function () {
        $('.space-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
//    min-size
    $('.js-minsize').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.minsize-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.minsize-down>li').click(function () {
        $('.minsize-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
//    js-solder
    $('.js-solder').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.solder-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.solder-color-lists>li').click(function () {
        $('.js-solder-color').html($(this).html());
        $('.js-solder-color').children('span').addClass('color-text');
        $(this).parent().hide();
        return false;
    });
    //    js-silk
    $('.js-silk').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.silk-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.silk-down>li').click(function () {
        $('.js-silk-color').html($(this).html());
        $('.js-silk-color').children('span').addClass('color-text');
        $(this).parent().hide();
        return false;
    });
//js-surface
    $('.js-surface').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.surface-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.surface-down>li').click(function () {
        $('.surface-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
//    第二个盒子里的js 第一个盒子里的js 第一个盒子里的js 第一个盒子里的js
//    js-cooper
    $('.js-cooper').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.cooper-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.cooper-down>li').click(function () {
        $('.cooper-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
//    是否选择切换
    $('.sd div').click(function () {
        $(this).children('img').show();
        $(this).css({border: '1px solid black'});
        $(this).siblings().children('img').hide();
        $(this).siblings().css({border: '1px solid #efefef'});
        // console.log($(this));
    });
    //js-size点击
    $('.js-size').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.size-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.size-down>li').click(function () {
        $('.size-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
//    js-stencil
    $('.js-stencil').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.stencil-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.stencil-down>li').click(function () {
        $('.stencil-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
//    点击切换
//    smd-smd
    $('.smd-two').click(function () {
        $('.smd-main').show();
        $(this).hide().siblings().show();
    });
    $('.smd-one').click(function () {
        $(this).hide().siblings().show();
        $('.smd-main').hide();
    });
//   模拟点击计算按钮【简易propoty】
    $('.js-proto').click(function () {
        if ($('.js-quantity').val() !== '' && $('.js-quantity').val() !== null) {
            $('.main-price').show();
            $('.content-r').css({position: 'absolute', right: 0, top: 160});
        } else {
            alert('请填入相关参数');
        }
    });
//     js-build-box
    $('.js-build-box div').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

//    js-shipping
    $('.shipping-title').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.shipping-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.shipping-down>li').click(function () {
        $('.js-shipping').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    //    js-country
    $('.country-title').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.country-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.country-down>li').click(function () {
        $('.js-country').val($(this).text());
        $(this).parent().hide();
        return false;
    });

    //自动显示与隐藏
    function tipsBox() {
        var gettipsbox = setTimeout(function () {
            clearTimeout(gettipsbox);
            $('.basket-tips').hide();
            // $('.basket-tips').css({opacity: 0});
        }, 3000);
    }

//add-basket
    $('.js-proto').click(function () {
        var getshipping = $('.js-shipping').val();
        var getcountry = $('.js-country').val();
        var getShipEmail = $('.shipping-email').val();
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (getshipping !== '' && getshipping !== null) {
            console.log(1);
            if (getcountry !== '' && getcountry !== null) {
                console.log(2);
                if (reg.test(getShipEmail)) {
                    console.log(3);
                    // 到此正确提交数据
                } else {
                    $('.basket-tips').show();
                    tipsBox();//显示2秒自己隐藏
                    return false;
                }//end if
            } else {
                $('.basket-tips').show();
                tipsBox();//显示2秒自己隐藏
                return false
            }//end if
        } else {
            $('.basket-tips').show();
            tipsBox();//显示2秒自己隐藏
            return false;
        }//end if
    });
    //assembly
    $('.js-assembly').click(function () {
        var getshipping = $('.js-shipping').val();
        var getcountry = $('.js-country').val();
        var getShipEmail = $('.shipping-email').val();
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

        if (getshipping !== '' && getshipping !== null) {
            console.log(1);
            if (getcountry !== '' && getcountry !== null) {
                console.log(2);
                if (reg.test(getShipEmail)) {
                    console.log(3);
                    // 到此正确提交数据
                } else {
                    $('.basket-tips').show();
                    tipsBox();//显示2秒自己隐藏
                    return false;
                }//end if
            } else {
                $('.basket-tips').show();
                tipsBox();//显示2秒自己隐藏
                return false
            }//end if
        } else {
            $('.basket-tips').show();
            tipsBox();//显示2秒自己隐藏
            return false;
        }//end if
    });

//    assembly下的列表切换 第二个个盒子里的js第二个个盒子里的js第二个个盒子里的js
    $('.assem-parts>div').click(function () {
        var getassem = $('.assem-parts>div');
        var assemIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).children('.parts-sign').show();
        $(this).children('.parts-activity').css({backgroundColor: '#b21f1f', color: '#ffffff'});
        if (assemIndex === 0) {
            $(this).children('.parts-activity').children('img').attr('src', 'img/images/turnkeyed.png');
            getassem.eq(1).children('.parts-activity').children('img').attr('src', 'img/images/kitt.png');
            getassem.eq(2).children('.parts-activity').children('img').attr('src', 'img/images/combo.png');
        }
        if (assemIndex === 1) {
            $(this).children('.parts-activity').children('img').attr('src', 'img/images/kitted.png');
            getassem.eq(0).children('.parts-activity').children('img').attr('src', 'img/images/turnkey.png');
            getassem.eq(2).children('.parts-activity').children('img').attr('src', 'img/images/combo.png');
        }
        if (assemIndex === 2) {
            $(this).children('.parts-activity').children('img').attr('src', 'img/images/comboed.png');
            getassem.eq(0).children('.parts-activity').children('img').attr('src', 'img/images/turnkey.png');
            getassem.eq(1).children('.parts-activity').children('img').attr('src', 'img/images/kitt.png');
        }
        $(this).siblings().children('.parts-sign').hide();
        $(this).siblings().children('.parts-activity').css({backgroundColor: '#efefefef', color: '#2e2525'});
    });
//js-assem
//   模拟点击计算按钮【简易】
    $('.js-assem').click(function () {
        if ($('.input-nums').val() !== '' && $('.input-nums').val() !== null) {
            $('.main-price').show();
            $('.content-r').css({position: 'absolute', right: 0, top: 160});
        } else {
            alert('请填入相关参数');
        }
    });
    // 第三个个盒子里的js第三个个盒子里的js第三个个盒子里的js
// js-terial
    $('.js-terial').click(function (e) {
        $('.terial-down').show();
        if ($('.terial-down').height() > 150) {
            $('.terial-down').css({overflowY: 'scroll'});
        } else {
            $('.terial-down').css({overflowY: 'auto'});
        }
        $(document).one("click", function () {
            $('.terial-down').hide();
        });
        e.stopPropagation();
    });
    $('.terial-down>li').click(function () {
        $('.js-terial').val($(this).text());
        $('.terial-down').hide();
    });
//    js-qty
    $('.js-qty').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.qty-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.qty-down>li').click(function () {
        $('.qty-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    //    js-lized
    $('.js-lized').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.lized-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.lized-down>li').click(function () {
        $('.lized-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    //    js-lized
    $('.js-ness').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.ness-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.ness-down>li').click(function () {
        $('.ness-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    //    js-silk///颜色选择
    $('.js-coed').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.coed-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.coed-down>li').click(function () {
        $('.js-coed-color').html($(this).html());
        $('.js-coed-color').children('span').addClass('color-text');
        $(this).parent().hide();
        return false;
    });
    //    js-nish
    $('.js-nish').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.nish-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.nish-down>li').click(function () {
        $('.nish-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    //    js-wei
    $('.js-wei').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.wei-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.wei-down>li').click(function () {
        $('.wei-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    //js-hole
    $('.js-hole').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.hole-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.hole-down>li').click(function () {
        $('.hole-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    //js-track
    $('.js-track').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.track-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.track-down>li').click(function () {
        $('.track-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
    //js-track
    $('.js-nner').click(function (e) {
        selectedItems($(this).children()[1]);
        $(document).one("click", function () {
            $('.nner-down').hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $('.nner-down>li').click(function () {
        $('.nner-val').val($(this).text());
        $(this).parent().hide();
        return false;
    });
//    js-yorn是否选择切换
    $('.js-yorn div').click(function () {
        $(this).children('img').show();
        $(this).css({border: '1px solid black'});
        $(this).siblings().children('img').hide();
        $(this).siblings().css({border: '1px solid #efefef'});
        // console.log($(this));
    });
//  js-castell
    $('.js-castell div').click(function () {
        $(this).children('img').show();
        $(this).css({border: '1px solid black'});
        $(this).siblings().children('img').hide();
        $(this).siblings().css({border: '1px solid #efefef'});
        // console.log($(this));
    });
//    js-dance
    $('.js-dance div').click(function () {
        $(this).children('img').show();
        $(this).css({border: '1px solid black'});
        $(this).siblings().children('img').hide();
        $(this).siblings().css({border: '1px solid #efefef'});
    });
//
    //   js-instace模拟点击计算按钮【简易instance】
    $('.js-tance-cal').click(function () {
        if ($('.instance-width').val() !== '' && $('.instance-width').val() !== null) {
            $('.main-price').show();
            $('.content-r').css({position: 'absolute', right: 0, top: 160});
        } else {
            alert('请填入相关参数');
        }
    });
//第四个
    $('.frame-box div').click(function () {
        $(this).css({border: '1px solid black'});
        $(this).children('img').show();
        $(this).siblings().css({border: '1px solid #efefef'});
        $(this).siblings().children('img').hide();
    });
    //    js-cussize
    $('.js-cussize').click(function (e) {
        $('.cussize-down').show();
        if ($('.cussize-down').height() > 150) {
            $('.cussize-down').css({overflowY: 'scroll'});
        } else {
            $('.cussize-down').css({overflowY: 'auto'});
        }
        $(document).one("click", function () {
            $('.cussize-down').hide();
        });
        e.stopPropagation();
    });
    $('.cussize-down>li').click(function () {
        $('.js-cussize').val($(this).text());
        $('.cussize-down').hide();
    });
//    点击关闭选择项
    $('.wrong').click(function () {
        $(this).parent().hide();
        orderFlag = false;
        $('.order-table tr').not('.table-title').css({backgroundColor: '#fff'});
        $('.order-table tr').children().children('i').children('img').attr('src', 'img/images/no-right.png');
    });
    //点击订单表格里的订单号效果
    var orderIndex = null;//获取当前点击索引
    var orderFlag = false;//记录是否点击标识nb
    $('.order-table ').on('click', 'tr', function () {
        //下次点击之前清空上次样式
        $('.order-table tr').not('.table-title').css({backgroundColor: '#fff'});
        $('.order-table tr').children().children('i').children('img').attr('src', 'img/images/no-right.png');
        $('.selected-item').show();
        $('.order-name').html($(this).children('td').eq(0).text());
        $(this).css({backgroundColor: '#efeff0'}).siblings().not('.table-title').css({backgroundColor: '#fff'});
        $(this).children('td').eq(0).children('i').eq(0).children('img').attr('src', 'img/images/righted.png');
        $(this).siblings().children().children('i').children('img').attr('src', 'img/images/no-right.png');
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

//    点击加载更多
    $('.loading-order').click(function () {
        //封装一个ajax请求即可
        if ($('.order-table tr').length - 1 <= 10) {
            var str = '';
            str += '  <tr>\n' + '<td><i><img src="img/images/no-right.png" alt=""></i> A11302AS6</td>\n' +
                '<td>2017.12.12</td>\n' + '<td>10</td>\n' + '<td>The file name 001.rar</td>\n' + '</tr>';
            $('.order-table').append(str);
        } else {
            $('.loading-order').hide();
            return false;
        }
    });

    //   js-cil模拟点击计算按钮【简易cil】
    $('.js-cil').click(function () {
        console.log($('.stenc-box .pieces-input').val());
        if ($('.stenc-box .pieces-input').val() !== '' && $('.stenc-box .pieces-input').val() !== null) {
            $('.main-price').show();
            $('.content-r').css({position: 'absolute', right: 0, top: 160});
        } else {
            alert('请填入相关参数');
        }
    });

});//end function