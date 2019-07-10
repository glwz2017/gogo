$(function () {
    //    js-board-type  选择
    $('.js-board-type li').click(function () {
        var index = $(this).attr('data');
        if (index == 2) {
            $('.js-board-hide').show();
            $('.js-hide-requirements').hide();
        } else if (index == 3) {
            $('.js-hide-requirements').show();
            $('.js-board-hide').show();
        } else {
            $('.js-board-hide').hide();
            $('.js-hide-requirements').hide();
        }
    });

    // 隐藏元素 Edge Rails 是否切换按钮
    $('.js-switch-box li').click(function () {
        $(this).addClass('active-btn').siblings('li').removeClass('active-btn');
    });
    //单位转换
    $('.js-inch-tips').click(function () {
        createPop(unitConversion());//单位转换模板
        $('.popup-box').addClass('active-popup');//显示弹窗
        //关闭按钮处理
        $('.ok-btn').on('click', function () {
            var x = parseInt($('.js-inch-x').val().trim());
            var y = parseInt($('.js-inch-y').val().trim());
            if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
                $(document).dialog({
                    type: 'notice',
                    infoText: 'Please enter the correct value',
                    autoClose: 1500,
                    position: 'center'  // center: 居中; bottom: 底部
                });
            } else {
                //转换后的值  fn();
                $('.popup-box').removeClass('active-popup'); //关闭弹窗
            }
        });
    });

    //unitConversion fn单位转换模板
    function unitConversion() {
        var str = ' <div  class="inch-content">\n' +
            '            <h5>Inch”↔mm conversion</h5>\n' +
            '            <p>\n' +
            '                If you enter in units of inches and press the\n' +
            '                <br> [Convert] button, it will be converted into units of\n' +
            '                <br> millimeters in the quotation form.\n' +
            '            </p>\n' +
            '            <div class="inch-item">\n' +
            '                <span>X =</span>\n' +
            '                <input type="text" class="js-inch-x">\n' +
            '                <div class="inch-text ">inch</div>\n' +
            '            </div>\n' +
            '            <div class="inch-item">\n' +
            '                <span>Y =</span>\n' +
            '                <input type="text" class="js-inch-y">\n' +
            '                <div class="inch-text js-inch-y">inch</div>\n' +
            '            </div>\n' +
            '        </div>';
        return str;
    }

    //  Quantity (single)
    $('.js-quantity-box').click(function () {
        createPop(parameter());//添加各个参数
        $('.popup-box').addClass('active-popup');//显示弹窗
        $('.ok-btn').on('click', function () {
            var otherValue = $('.js-other').val();
            if (isNaN(otherValue) || otherValue <= 0) {
                $(document).dialog({
                    type: 'notice',
                    infoText: 'Please enter the correct value',
                    autoClose: 1500,
                    position: 'center'  // center: 居中; bottom: 底部
                });
            } else {
                $('.js-quantity-box').val(otherValue);
                $('.popup-box').empty();//清空元素
                $('.popup-box').removeClass('active-popup'); //关闭弹窗
            }
        });
    });

    //Parameter fn各个参数
    function parameter() {
        var str = '<div class="quantity-content">\n' +
            '            <ul class="select-quantity js-select">\n' +
            '                <li>5</li>\n' +
            '                <li>10</li>\n' +
            '                <li>15</li>\n' +
            '                <li>20</li>\n' +
            '                <li>25</li>\n' +
            '                <li>30</li>\n' +
            '                <li>40</li>\n' +
            '                <li>50</li>\n' +
            '                <li>75</li>\n' +
            '                <li>100</li>\n' +
            '                <li>125</li>\n' +
            '                <li>150</li>\n' +
            '                <li>200</li>\n' +
            '                <li>250</li>\n' +
            '                <li>300</li>\n' +
            '                <li>350</li>\n' +
            '                <li>400</li>\n' +
            '                <li>450</li>\n' +
            '                <li>500</li>\n' +
            '                <li>600</li>\n' +
            '                <li>700</li>\n' +
            '                <li>800</li>\n' +
            '                <li>900</li>\n' +
            '                <li>1000</li>\n' +
            '                <li>1500</li>\n' +
            '                <li>2000</li>\n' +
            '                <li>2500</li>\n' +
            '                <li>3000</li>\n' +
            '                <li>3500</li>\n' +
            '                <li>4000</li>\n' +
            '                <li>4500</li>\n' +
            '                <li>5000</li>\n' +
            '                <li>5500</li>\n' +
            '                <li>6000</li>\n' +
            '                <li>6500</li>\n' +
            '                <li>7000</li>\n' +
            '                <li>7500</li>\n' +
            '                <li>8000</li>\n' +
            '                <li class="empty-list"></li>\n' +
            '                <li class="empty-list"></li>\n' +
            '            </ul>\n' +
            '            <!--other -->\n' +
            '            <div class="other-box">\n' +
            '                <h2>Other</h2>\n' +
            '                <input type="text" class="js-other">\n' +
            '            </div>\n' +
            '        </div>';
        return str;
    }

    //other 软键盘输入
    $(document).on('focus', '.other-box .js-other', function () {
        $('.popup-content').addClass('soft-keyboard');
        $(document).on('blur', '.other-box .js-other', function (e) {
            console.log(e);
            $('.popup-content').removeClass('soft-keyboard');
        });
    });

    //选择参数
    $(document).on('click', '.js-select li', function () {
        console.log('kp');
        if ($(this).hasClass('empty-list')) return;
        $('.js-other').blur();
        $('.js-quantity-box').val($(this).html().trim());
        $('.popup-box').empty();//清空元素
        $('.popup-box').removeClass('active-popup');//关闭弹窗

    });


    //  js-layers板子 4 6 8 10 层数
    $('.js-layers li').click(function () {
        $('.js-hide-layers').hide();//隐藏1层板的参数
        var index = $(this).attr('data');//获取自定义属性判断点击的板子
        if (index == 1) {
            $('.js-hide-layers').show();//显示1层板的参数
        } else if (index == 2) {
            $('.js-thickness li').removeClass('disabled');//2层板子厚度不可选
        } else if (index == 4) {
            createPop(popLayer.addLayerPar(index));//添加4层元素
            $('.popup-box').addClass('active-popup');//显示板子弹窗
            popLayer.layerKeyboard(index - 2);//唤起软键盘
            $('.js-thickness li').removeClass('disabled');//2层板子厚度不可选
            //   关闭弹窗
            $('.ok-btn').click(function () {
                //popLayer.inputFn()  判断用户输入的板子图层是否有效
                if (popLayer.inputFn()) {

                    alert('处理数据');

                    $('.popup-box').removeClass('active-popup'); //关闭弹窗
                    $('.popup-box').empty();//清空元素
                }
            });

        } else if (index == 6) {
            createPop(popLayer.addLayerPar(index));//添加6层元素
            $('.popup-box').addClass('active-popup');//显示板子弹窗
            popLayer.layerKeyboard(index - 2);//唤起软键盘
            layerDisabled(1); //6层板子厚度不可选
            //   关闭弹窗
            $('.ok-btn').click(function () {
                if (popLayer.inputFn()) {

                    alert('处理数据');

                    $('.popup-box').removeClass('active-popup'); //关闭弹窗
                    $('.popup-box').empty();//清空元素
                }
            });
        } else if (index == 8) {
            createPop(popLayer.addLayerPar(index));//添加4层元素
            $('.popup-box').addClass('active-popup');//显示板子弹窗
            popLayer.layerKeyboard(index - 4);//唤起软键盘
            layerDisabled(3);//8层板子厚度不可选
            //   关闭弹窗
            $('.ok-btn').click(function () {
                if (popLayer.inputFn()) {

                    alert('处理数据');

                    $('.popup-box').removeClass('active-popup'); //关闭弹窗
                    $('.popup-box').empty();//清空元素
                }
            });
        } else if (index == 10) {
            layerDisabled(4);//10层板子厚度不可选
        } else {
            $('.js-hide-layers').hide();
        }
    });
    //4.6.8层板子弹窗封装
    var popLayer = {
        //添加板子父级
        addLayerPar: function (num) {
            var fillLayer = '   <div class="fill-box">\n' +
                '        <p>Please fill in the layer order from top to bottom\n' +
                '        here.</p>\n' +
                '        <p class="fill-layer">\n' +
                '            Please fill in the layer order from top side view\n' +
                '            <br>tobottom side according to the layers name in your file.\n' +
                '        </p>\n' +
                '        <ul class="layers-lists js-layers-lists">\n' +
                '          \n' + this.addLayers(num) + '</ul>\n' +
                '    </div>';
            return fillLayer;
        },
        //判断用户是否输入正确 板子层级数量
        inputFn: function () {
            var flag = false;
            $('.js-layers-lists input').each(function () {
                if ($(this).val() <= 0 || isNaN($(this).val())) {
                    flag = true;
                    $(document).dialog({
                        type: 'notice',
                        infoText: 'Please enter the correct value',
                        autoClose: 1500,
                        position: 'center'  // center: 居中; bottom: 底部
                    });
                }
            });
            return !flag;
        },
        //添加板子子级 4,6,8层
        addLayers: function (num) {
            var str = '';
            for (var i = 1; i <= num; i++) {
                str += '  <li>\n' +
                    '                <input type="text" placeholder="L' + i + ':" data="' + i + '">\n' +
                    '            </li>';
            }
            return str;
        },
        // 手机软键盘定位
        layerKeyboard: function (num) {
            $(document).on('focus', '.js-layers-lists input', function () {
                if ($(this).attr('data') >= 4) {
                    $('.popup-content').css({position: 'fixed', top: '-' + num + 'rem'});
                }
            });
            $(document).on('blur', '.js-layers-lists input', function () {
                $('.popup-content').css({position: 'static', top: '0'});
            });
        },
    };

//Thickness 板子联动
    function layerDisabled(num) {
        $('.js-thickness li').removeClass('disabled'); //移除板子不可选
        for (var i = 0; i <= num; i++) {
            $('.js-thickness li').eq(i).addClass('disabled');
        }
    }

    //Material
    $('.js-material li').click(function () {
        var index = $(this).attr('data');
        $('.js-thickness li').removeClass('disabled'); //移除板子不可选
        $('.js-solder li').removeClass('disabled'); //移除solder mask 颜色不可选
        if (index == 1) {
            $('.js-fr4').show();
            $('.js-mcpcb').hide();
        } else if (index == 2) {
            $('.js-fr4').hide();
            $('.js-mcpcb').show();
            layerDisabled(1);
            $('.js-thickness li[data="2.4"]').addClass('disabled');
            $('.js-solder li[data="mt-black"]').addClass('disabled');//solder mask   不可选
        } else {
            $('.js-fr4').show();
            $('.js-mcpcb').hide();
        }
    });

    //  Solder Mask
    $('.js-solder li').click(function () {
        $('.js-silkscreen li').removeClass('disabled');
        $('.js-silkscreen li').removeClass('active-list');
        var color = $(this).attr('data');//获取颜色
        if (color == 'white') {
            $('.js-silkscreen li[data="white"]').addClass('disabled');
            $('.js-silkscreen li[data="black"]').addClass('active-list');
        } else if (color == 'none') {
            $('.js-silkscreen li').removeClass('disabled');
        } else if (color == 'green' || color == 'yellow') {
            $('.js-silkscreen li').removeClass('disabled');
            $('.js-silkscreen li[data="black"]').addClass('active-list');
        } else {
            $('.js-silkscreen li[data="black"]').addClass('disabled');
            $('.js-silkscreen li[data="white"]').addClass('active-list');
        }
    });

    //金手指选择[废除]
    // $('.js-switch-gold li').click(function () {
    //     $(this).addClass('active-btn').siblings('li').removeClass('active-btn');
    //     if ($(this).html().trim() == 'YES') {
    //         $('.js-bevelling').show();
    //     } else {
    //         $('.js-bevelling').hide();
    //     }
    // });
    //金手指选择 [新]
    $('.js-switch-gold').click(function () {
        $(this).toggleClass('active-switch');
        if ($(this).hasClass('active-switch')) {
            $('.js-bevelling').show();
        } else {
            $('.js-bevelling').hide();
        }
    });


    //Surface Finish [废除]
    // $('.js-switch-tick li').click(function () {
    //     $(this).addClass('active-btn').siblings('li').removeClass('active-btn');
    // });

    //Surface Finish [新]
    $('.js-switch-tick').click(function () {
        $(this).toggleClass('active-switch');
    });


    //  surface-finish
    $('.js-surface-finish li').click(function () {
        var index = $(this).attr('data');
        if (index == 1 || index == 2) {
            $('.js-tick-box').show();
        } else {
            $('.js-tick-box').hide();
        }
    });

    //   Additional Options

    $('.js-options-title').click(function () {
        $(this).toggleClass('active-options');
        if ($(this).hasClass('active-options')) {
            $('.options-box').addClass('active-add');
        } else {
            $('.options-box').removeClass('active-add');
        }
    });
    //Peelable Soldermask

    $('.js-solder-masked').click(function () {
        createPop(solderMask());//初始化弹窗
        $('.popup-box').addClass('active-popup');//显示弹窗
        //选择弹窗数据
        $('.js-solder-mask li').click(function () {
            $('.js-solder-masked').val($(this).attr('data'));
            $('.popup-box').removeClass('active-popup'); //关闭弹窗
            $('.popup-box').empty();//清空元素
        });
        //点击弹窗确定按钮
        $('.ok-btn').click(function () {
            $(document).dialog({
                type: 'notice',
                infoText: 'Please select parameters',
                autoClose: 1500,
                position: 'center'  // center: 居中; bottom: 底部
            });
        });
    });

//solderMask fn
    function solderMask() {
        var str = '<div class="solder-mask">\n' +
            '        <ul class="solder-mask js-solder-mask">\n' +
            '             <li data="None">None</li>\n' +
            '            <li data="Top side">Top side</li>\n' +
            '            <li data="Bottom side">Bottom side</li>\n' +
            '        </ul>\n' +
            '    </div>';
        return str;
    }

//UL Marking
    $('.js-marking').click(function () {
        createPop(marking());//初始化弹窗
        $('.popup-box').addClass('active-popup');//显示弹窗
        //选择弹窗数据
        $('.js-solder-mark li').click(function () {
            $('.js-marking').val($(this).attr('data'));
            $('.popup-box').removeClass('active-popup'); //关闭弹窗
            $('.popup-box').empty();//清空元素
        });
        $('.ok-btn').click(function () {
            $(document).dialog({
                type: 'notice',
                infoText: 'Please select parameters',
                autoClose: 1500,
                position: 'center'  // center: 居中; bottom: 底部
            });
        });
    });

//Marking fn
    function marking() {
        var str = '<div class="solder-mask">\n' +
            '        <ul class="solder-mask js-solder-mark">\n' +
            '             <li data="None">None</li>\n' +
            '            <li data="Yes - add to top silkscreen">Yes - add to top silkscreen</li>\n' +
            '            <li data="Yes - add to bottom silkscreen">Yes - add to bottom silkscreen</li>\n' +
            '            <li data="Yes - add to top soldermask">Yes - add to top solder mask</li>\n' +
            '            <li data="Yes - add to bottom soldermask">Yes - add to bottom solder mask</li>\n' +
            '            <li data="Yes - add to top copper">Yes - add to top copper</li>\n' +
            '            <li data="Yes - add to bottom copper">Yes - add to bottom copper</li>\n' +
            '            <li data="Yes - as PCBGOGO default">Yes - as PCBGOGO default</li>\n' +
            '        </ul>\n' +
            '    </div>';
        return str;
    }

// 多选参数
    $('.js-options-items li').click(function () {
        if ($(this).hasClass('empty-list')) return;//为空返回
        $(this).toggleClass('active-list');
    });
});//end function
