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
    //材料切换
    $('.js-material-box .material-item').click(function () {
        $(this).addClass('active-item').siblings('.material-item').removeClass('active-item');
    });

//    所有项切换

    $('.item-right .list').click(function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        $(this).addClass('active-list').siblings('.list').removeClass('active-list');
    });


//    prototype模块js开始
    $('.js-prototype-title').click(function () {
        $(this).toggleClass('active-prototype');
        $('.js-prototype-content').toggleClass('show-prototype');
    });
    /*Additional Options 模块的js开始*/
    //Peelable Soldermask
    $('.js-below1').hover(function () {
        $('.js-peelable').show();
        $('.js-peelable >li').click(function () {
            $('.js-peelable-value').val($(this).html());
            $(this).parent().hide();
        });
    }, function () {
        $('.js-peelable').hide();
    });
    //UL Marking
    $('.js-below2').hover(function () {
        $('.js-marking').show();
        $('.js-marking >li').click(function () {
            $('.js-marking-value').val($(this).html());
            $(this).parent().hide();
        });
    }, function () {
        $('.js-marking').hide();
    });
    <!--多项选择列表-->
    $('.options-item .list').click(function () {
        $(this).toggleClass('active-list');
    });
    //主体内容显示与隐藏
    $('.js-additional').click(function () {
        $('.js-options-content').toggleClass('show-content');
        if ($('.js-options-content').hasClass('show-content')) {
            $('.js-add').html('-');
        } else {
            $('.js-add').html('+');
        }
    });
    /*Additional Options 模块的js结束*/


    //prototype模块js
    //    第4项Quantity (single)
    $('.show-nums').hover(function () {
        $('.board-nums').show();
        //固定参数
        $('.js-boardnumber>li').click(function () {
            $('.js-num-value').val($.trim($(this).html()));
            $('.js-other-input').val('');
            $('.board-nums').hide();
        });
    }, function () {
        $('.board-nums').hide();
    });
    //    自定义参数
    $('.js-confirm').click(function () {
        var aValue = $.trim($('.js-other-input').val());
        $('.js-num-value').val(aValue);
        $('.board-nums').hide();
        $('.js-other-input').val('');
    });
    $('.js-cancel').click(function () {
        $('.board-nums').hide();
        $('.js-other-input').val('');
    });

//    第5项隐藏元素
//    5.1
    $('.js-dropdown1').hover(function () {
        $(this).children('.js-dropdown-ul1').show();
        $('.js-dropdown-ul1>li').click(function () {
            $('.js-dropdown-input1').val($.trim($(this).html()));
            $('.js-dropdown-ul1').hide();
        });
    }, function () {
        $(this).children('.js-dropdown-ul1').hide();
    });
    //5.2
    $('.js-dropdown2').hover(function () {
        $(this).children('.js-dropdown-ul2').show();
        $('.js-dropdown-ul2>li').click(function () {
            $('.js-dropdown-input2').val($.trim($(this).html()));
            $('.js-dropdown-ul2').hide();
        });
    }, function () {
        $(this).children('.js-dropdown-ul2').hide();
    });
//    5.3
    $('.js-dropdown3').hover(function () {
        $(this).children('.js-dropdown-ul3').show();
        $('.js-dropdown-ul3>li').click(function () {
            $('.js-dropdown-input3').val($.trim($(this).html()));
            $('.js-dropdown-ul3').hide();
        });
    }, function () {
        $(this).children('.js-dropdown-ul3').hide();
    });

//    第一项
    $('.js-type>.list').click(function () {
        if ($(this).attr('data-value') == 0) {
            $('.js-process').hide();
            $('.js-rails').hide();
        }
        if ($(this).attr('data-value') == 1) {
            $('.js-process').show();
            $('.js-rails').hide();
        }
        if ($(this).attr('data-value') == 2) {
            $('.js-process').show();
            $('.js-rails').show();
        }
    });


//    layers事件
    $('.js-layer-box>.list').click(function () {
        var aData = $(this).attr('data-value');
        if (aData == 1) {
            $('.js-solder-mask').show();
            $('.js-inner').hide();
        } else {
            $('.js-solder-mask').hide();
        }
        if (aData == 2) {
            $('.js-inner').hide();
        } else {
            $('.js-inner').show();
        }
        if (aData == 2 && $('.js-material>.list').eq(1).hasClass('active-list')) {
            $('.js-mcpcb').show();
        } else {
            $('.js-mcpcb').hide();
        }
        if (aData == 4) {
            $('.in-box .getInput-box').css({display: 'none'});
            $('.in-box .getInput-box').eq(4).prevAll().css({display: 'block'});
            $('.js-open-mask').show();
        }
        if (aData == 6) {
            $('.in-box .getInput-box').css({display: 'none'});
            $('.in-box .getInput-box').eq(6).prevAll().css({display: 'block'});
            $('.js-open-mask').show();
        }
        if (aData == 8) {
            $('.in-box .getInput-box').css({display: 'block'});
            $('.js-open-mask').show();
        }
    });
//关闭弹窗事件
    $('.js-close-box').click(function () {
        $('.js-open-mask').hide();
    });

//    js-material
    $('.js-material>.list').click(function () {
            //不可选退出
            if ($(this).hasClass('disabled')) {
                return;
            }
            var aData = $(this).attr('data-value');
            if (aData.indexOf('Aluminum') > -1) {
                $('.js-mcpcb').show(); //mc-pcb 显示
                $('.js-fr4Tg').show(); //FR4-tg 显示
                $('.js-rogers').hide(); //rogers 隐藏
            } else if (aData.indexOf('Rogers') > -1) {
                $('.js-rogers').show();
                $('.js-fr4Tg').hide();
                $('.js-mcpcb').hide();
            } else {
                $('.js-mcpcb').hide();
                $('.js-rogers').hide();
                $('.js-fr4Tg').show();
            }
        }
    );


//    js-gold
    $('.js-gold>.list').click(function () {
        if ($(this).attr('data-value') == 0) {
            $('.js-bevel').show();
            $('.js-add-surface').show();
            $('.js-auni-nickel').show();

        } else {
            $('.js-bevel').hide();
            $('.js-add-surface').hide();
            $('.js-auni-nickel').hide();
        }
    });

    //js-add-surface
    $('.js-add-surface>.list').click(function () {
        console.log($(this).attr('data-value'));
        var tempValue = $(this).attr('data-value');
        if (tempValue === 'Immersion gold(ENIG)') {
            $('.js-immersion-gold').show();
        } else {
            $('.js-immersion-gold').hide();
        }
        if (tempValue === 'Hard Gold') {
            $('.js-auni-nickel').show();
        } else {
            $('.js-auni-nickel').hide();
        }
    });


//    js-finish
    $('.js-finish>.list').click(function () {
        var aValue = $(this).attr('data-value');
        if (aValue === 'Immersion gold(ENIG)') {
            $('.js-immersion-gold2').show();
        } else {
            $('.js-immersion-gold2').hide();
        }
        if (aValue === 'HASL with lead' || aValue === 'HASL lead free') {
            $('.js-surface').show();
        } else {
            $('.js-surface').hide();
        }
    });
    //prototype模块js结束


});//end function
