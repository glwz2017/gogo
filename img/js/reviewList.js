$(function () {
    // 检测是否为登录状态
    (function () {
        if (checkLogin()) {
            $('.user-box').show();
            $('.no-user-box').hide();
        } else {
            $('.user-box').hide();
            $('.no-user-box').show();
        }
    })();

    //检测是否登录
    function checkLogin() {
        var aEmail = window.localStorage.getItem('email');
        var aPwd = window.localStorage.getItem('pwd');
        if (aEmail === '000@163.com' && aPwd === '000000') {
            return true;
        }
    }

    //登录与退出
    $('.js-user-pic').click(function () {
        $('.user-item').show();
    });

    $('.js-out-btn').click(function () {
        window.localStorage.setItem('pwd', '');
        $('.user-box').hide();
        $('.no-user-box').show();
    });
    //登录与注册
    $('.js-sg-in').click(function () {
        window.location.href = 'login.html';
        var urlStr = window.location.pathname;//获取之前的地址
        var splitIndex = urlStr.lastIndexOf('/');//截取位置
        var oldStr = urlStr.substr(splitIndex + 1);
        window.location.href = 'login.html?=' + compileStr(oldStr);
    });

    //url地址加密函数
    function compileStr(code) {
        var c = String.fromCharCode(code.charCodeAt(0) + code.length);
        for (var i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
        }
        return escape(c);
    }

    $('.js-sg-free').click(function () {
        window.location.href = 'register.html';
    });
    //返回顶部
    $('.go-btn').click(function () {
        $('html,body').animate({scrollTop: 0});
    });

//瀑布流
//     var checkFlag = false;
//     window.onload = function () {
//         waterfall('main', 'box-list');
//         // parend 父级id pin 元素id
//         function waterfall() {
//             if ($('.js-full-box .box-list').length < 1) {
//                 return;
//             }
//             var aPin = getClassObj();// 获取存储块框pin的数组aPin
//             var num = 4;//每行中能容纳的pin个数【窗口宽度除以一个块框宽度】
//             var pinHArr = [];//用于存储 每列中的所有块框相加的高度。a
//             var maxHeight = 0;
//             for (var i = 0; i < aPin.length; i++) {//遍历数组aPin的每个块框元素
//                 var pinH = aPin[i].offsetHeight;
//                 if (i < num) {
//                     pinHArr[i] = pinH; //第一行中的num个块框pin 先添加进数组pinHArr
//                 } else {
//                     var minH = Math.min.apply(null, pinHArr);//数组pinHArr中的最小值minH
//                     maxHeight = Math.max.apply(null, pinHArr);//数组最大值
//                     var minHIndex = getminHIndex(pinHArr, minH);
//                     aPin[i].style.position = 'absolute';//设置绝对位移
//                     aPin[i].style.top = minH + 20 + 'px';
//                     aPin[i].style.left = aPin[minHIndex].offsetLeft + 'px';
//                     //数组 最小高元素的高 + 添加上的aPin[i]块框高
//                     pinHArr[minHIndex] += aPin[i].offsetHeight + 20;//更新添加了块框后的列高
//                     console.log(maxHeight);
//                 }
//             }
//             //  计算父级高度
//             var parentH = $('.js-full-box .box-list:last')[0].offsetTop;
//             var lastChild = $('.js-full-box .box-list:last')[0].offsetHeight / 2;
//             var smallH = parseInt($('.js-full-box').css('min-Height'));
//             if (smallH > (parentH + lastChild)) {
//
//             } else {
//                 $('.js-full-box').css({height: maxHeight + lastChild});
//                 $('.water-full-box').css({height: maxHeight + lastChild});
//             }
//             //  计算父级高度
//         }
//
//         //通过父级和子元素的class类 获取该同类子元素的数组
//         function getClassObj() {
//             var obj = $('.box-list');//获取 父级的所有子集
//             var pinS = [];//创建一个数组 用于收集子元素
//             for (var i = 0; i < obj.length; i++) {//遍历子元素、判断类别、压入数组
//                 if (obj[i].className.indexOf('box-list') > -1) {
//                     pinS.push(obj[i]);
//                 }
//             }
//             return pinS;
//         }//end getClassObj
// //获取 pin高度 最小值的索引index
//         function getminHIndex(arr, minH) {
//             for (var i in arr) {
//                 if (arr[i] == minH) {
//                     return i;
//                 }
//             }
//         }//end getminHIndex
//         // checkFlag = true;
//     };
//瀑布流
//动态创建js


});//end function
