$.extend($.fn.validatebox.defaults.rules, {
	
    minLength: {
        validator: function(value, param) {
            return value.length >= param[0];
        },
        message: '请输入至少（2）个字符.'
    },
	
    length: { validator: function(value, param) {
        var len = $.trim(value).length;
        return len >= param[0] && len <= param[1];
    },
        message: "输入内容长度必须介于{0}和{1}之间."
    },
    same: {
        validator: function (value, param) {
            if ($("#" + param[0]).val() != "" && value != "") {
                return $("#" + param[0]).val() == value;
            } else {
                return true;
            }
        },
        message: '两次输入的密码不一致！'
    },	
	
	
    username: {// 验证用户名 
        validator: function(value) {
            return /^[a-zA-Z0-9_-]{3,20}$/i.test(value);
        },
        message: '用户名不合法（3-20个字符，允许字母数字下划线和横线）'
    },
		 
    password: {// 验证密码 
        validator: function(value) {
            return /^.{6,20}$/i.test(value);
        },
        message: '密码不合法（6-20个字符）'
    },
		 
    idcard: {// 验证身份证 
        validator: function(value) {
            return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value);
        },
        message: '身份证号码格式不正确'
    },
	
	
    clength: { validator: function(value, param) { 		
        var char_length = 0;
        var arr = value.match(/[^\x00-\xff]/ig);
        char_length  = value.length + (arr == null ? 0 : arr.length);
        return char_length >= param[0] && char_length <= param[1];
    },
        message: "输入内容长度必须介于{0}和{1}之间(中文算2个长度)."
    },
	
	
    phone: {// 验证电话号码 
        validator: function(value) {
            return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
        message: '格式不正确,请使用下面格式:020-88888888-01'
    },
 
    mobile: {// 验证手机号
        validator: function(value, param) {
            // var telReg = /^(13[0-9]|14[7]|15[0-9]|18[0-9])\d{8}$/;
            var telReg = /^1\d{10}$/;
            return telReg.test(value);
        },
        message: '手机号码格式不正确'
    },
		
    integer: {// 验证整数 
        validator: function(value) {
            return /^[\+\-]{0,1}\d+$/i.test(value);
        },
        message: '请输入整数'
    },
	
    // data-options="required:true,validType:['integerbypositive']"
    integerbypositive: {// 验证正整数 
        validator: function(value) {
            return /^\d+$/i.test(value);
        },
        message: '请输入正整数'
    },	
		
    float: {// 验证整数或小数 
        validator: function(value) {
            return /^[\-\+]{0,1}\d+(\.\d+)?$/i.test(value);
        },
        message: '请输入数字，并确保格式正确'
    },
	
    floatbypositive: { 
        validator: function(value) {
            return /^\d+(\.\d+)?$/i.test(value);
        },
        message: '请输入数字，且不可为负数'
    },
	
    qq: {// 验证QQ,从10000开始 
        validator: function(value) {
            return /^\d{5,}$/i.test(value);
        },
        message: 'QQ号码格式不正确'
    },
 
    age: {// 验证年龄
        validator: function(value) {
            return /^(?:[1-9][0-9]?|1[01][0-9]|120)$/i.test(value);
        },
        message: '年龄必须是0到120之间的整数'
    },

    chinese: {// 验证中文 
        validator: function(value) {
            return /^[\Α-\￥]+$/i.test(value);
        },
        message: '请输入中文'
    },
	
    english: {// 验证英语 
        validator: function(value) {
            return /^[A-Za-z]+$/i.test(value);
        },
        message: '请输入英文'
    },
	
    unnormal: {// 验证是否包含空格和非法字符 
        validator: function(value) {
            return /.+/i.test(value);
        },
        message: '输入值不能为空和包含其他非法字符'
    },

    fax: {// 验证传真 
        validator: function(value) {
            //            return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/i.test(value); 
            return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
        message: '传真号码不正确'
    },
	
    postcode: {// 验证邮政编码 
        validator: function(value) {
            return /^\d{6}$/i.test(value);
        },
        message: '邮政编码格式不正确'
    },
	
 
    name: {// 验证姓名，可以是中文或英文 
        validator: function(value) {
            return /^[\Α-\￥]+$/i.test(value) | /^\w+[\w\s]+\w+$/i.test(value);
        },
        message: '请输入姓名'
    },
	
    datetime: {//  
        validator: function(value) {
            //格式yyyy-MM-dd或yyyy-M-d
            return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}$/i.test(value);
        },
        message: '清输入正确的时间格式(yyyy-MM-dd hh:mm:ss)'
    },
	
    datetimeendmin: { 
        validator: function(value) {
            //格式yyyy-MM-dd或yyyy-M-d
            return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(2[0123]|1[0-9]|0?[0-9]){1}:(0?[0-9]|[1-5][0-9]|60){1}$/i.test(value);
        },
        message: '清输入正确的时间格式(yyyy-MM-dd hh:mm)'
    },
 
    date: {//  
        validator: function(value) {
            //格式yyyy-MM-dd或yyyy-M-d
            return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/i.test(value);
        },
        message: '清输入正确的日期格式(yyyy-MM-dd)'
    },
	
    dateendmon: {//  
        validator: function(value) {
            //格式yyyy-MM-dd或yyyy-M-d
            return /^\d{4}[\/\-](0?[1-9]|1[012])$/i.test(value);
        },
        message: '清输入正确的日期格式(yyyy-MM)'
    },
	
    msn: {
        validator: function(value) {
            return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
        },
        message: '请输入有效的msn账号(例：abc@hotnail(msn/live).com)'
    },

    email: {
        validator: function(value) {
            return  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
        },
        message: 'Please enter a valid email address.'
    }
}

);