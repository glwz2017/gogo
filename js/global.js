//显示左侧菜单
$('.js-menu-btn').click(function () {
    $('.js-left-menu').addClass('active-menu');
    $("html,body").addClass('ovfHiden');
});

//左侧菜单点击遮罩关闭
$('.js-menu-mask').click(function () {
    $('.js-left-menu').removeClass('active-menu');
    $("html,body").removeClass('ovfHiden');
});

//    选中当前参数
$('.lists li').click(function () {
    if ($(this).hasClass('empty-list')) return;//为空返回
    if ($(this).hasClass('disabled')) return;//不可选返回
    $(this).addClass('active-list').siblings('li').removeClass('active-list');
});

//整体弹窗内容样式
var tipsArr = [
    'The full board are by only one single board or be arrayed with the same or different PCBs'
    , 'it means- we will charge extra panel costs when there are different kinds in 1 PCB design. For same kinds, it needn\'t charge.'
    , 'Coating material could be removed after board through wave soldering'
    , 'Marking of UL on board'
    , 'The number of BOM line items'
    , ' Number of SMD parts on each board (including fine pitch and leadless)'
    , ' Number of through-hole parts on each board(DIP NO.)'
    , 'If single pcb qty is more than 20pcs or the part solering points are less than 100,then we suggest do panel.Or we may charge extra wastage fee.'
    , 'Are parts mounted on one side only, or both sides?'
    ,'If you ordered pcb already on PCBgogo, you only need to select the pcb order number here so we can use the file from this pcb order to do stencil.'
    ,'We recommend that you upload the files on your personal computer because it\'s inconvenient to search the files with the phone.'
];
//整体弹窗事件
$(document).on('click', '.tips', function () {
    var index = $(this).attr('data') - 1;
    $(document).dialog({
        style: 'ios',
        titleShow: false,
        buttonTextConfirm: 'confirm',
        content: tipsArr[index],
    });
});

//创建弹窗模板fn
function createPop(getStr) {
    var newPop = ' <div class="popup-title">\n' +
        '        <span class="close-btn"></span>\n' +
        '        <span class="ok-btn"></span>\n' +
        '    </div>\n' +
        '    <!--具体内容-->\n' +
        '    <div class="popup-content">\n' +
        '\n' +
        '    </div>';
    $('.popup-box').append(newPop);//初始化弹窗取消 确定按钮
    $('.popup-content').html(getStr);//填充不同的弹窗内容  getStr
}
//创建弹窗模板fn

//弹窗模板 取消按钮
$(document).on('click', '.close-btn', function () {
    $(this).parent().parent().removeClass('active-popup');//其它弹窗
    $(this).parent().parent().removeClass('active-order');//4个计价
    $('.popup-box').empty();//清空弹窗内容
});

//fpc页面弹窗
//板子转换
function panelConversion() {
    var str = '<div class="panel-content">\n' +
        '    <h5>Inch”↔mm conversion</h5>\n' +
        '    <p>\n' +
        '        If you enter in units of inches and press the\n' +
        '        <br> [Convert] button, it will be converted into units of\n' +
        '        <br> millimeters in the quotation form.\n' +
        '    </p>\n' +
        '    <div class="panel-item">\n' +
        '        <span>X =</span>\n' +
        '        <input type="text" class="js-panel-x">\n' +
        '        <div class="panel-text ">inch</div>\n' +
        '    </div>\n' +
        '    <div class="panel-item">\n' +
        '        <span>Y =</span>\n' +
        '        <input type="text" class="js-panel-y">\n' +
        '        <div class="panel-text js-panel-y">inch</div>\n' +
        '    </div>\n' +
        '</div>';
    return str;
}

//4个 下单弹窗
$('.js-footer-right').click(function () {
    createPop($('.popup-order').html());//初始化弹窗
    $('.popup-box').addClass('active-order');//显示弹窗
});
//物流时间选择
$(document).on('click', '.js-build-time li', function () {
    $(this).addClass('active-time').siblings('li').removeClass('active-time');
});