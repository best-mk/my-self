/**
 * Created by puxuedong on 2017/7/11.
 */
//autoSize
(function(a,d){var b=a.documentElement,e="orientationchange"in window?"orientationchange":"resize",c=function(){var a=b.clientWidth;a&&(b.style.fontSize=Math.min(a,640)/320*100+"px")};a.addEventListener&&(d.addEventListener(e,c,!1),a.addEventListener("DOMContentLoaded",c,!1))})(document,window);
//弹层自适应居中
function commonPop(domp) {$(".popmask").show().height($("body").height());domp.show().css({"top": ($(window).height() + 200 - domp.height()) / 2 + $(window).scrollTop(), "left": ($(window).width() - domp.width()) / 2});}


//接口域名
//var hostsUrl = 'http://192.168.100.225:8080/riskeys_neighbor_communicate';
var hostsUrl = 'http://114.55.58.53:8086';
//微信分享
var shareUrl = location.origin+'/activity/wacai/index.html';

$(function(){
    /**
     * 是否安卓微信
     * @returns {boolean}
     */
    var isWeixin = function () {
        var ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == "micromessenger";
    };
    //PDF
    $(".page-modal").find(".p-modal-body a").each(function () {
        var $this = $(this);
        var href = $this.attr("href");
        if(!!href &&　isWeixin()) {
            var url = "down.html?url=" + encodeURIComponent(href);
            $this.after("<br /><a class='no-download hide' href='" + url + "'>无法下载请点击此处</a>");
        }
        $('.tab-doc').on("click", 'a', function () {
            $(this).siblings("a.no-download").removeClass("hide");
        });
    });
    //立即领取
    $('.now-pop-btn').on('click', function(){
        $('.mask-layer').hide();
        $('.popmask').hide();
        $('.share-tips').hide();
        $('#realname').focus();
    });
    //查看规则
    $('.guize-click').on('click', function(){
        commonPop($('.mask-guize'));
    });
    //弹层关闭
    $('.guize-close').click(function(){
        $('.mask-layer').hide();
        $('.popmask').hide();
        $('.share-tips').hide();
    });
    $('.popmask').on('click', function(){
        $('.mask-layer').hide();
        $('.popmask').hide();
        $('.share-tips').hide();
    });
    //分享
    $('.succ-share-btn').on('click', function(){
        $('.share-tips').show();
        $('.popmask').show();
        $('.mask-layer').hide();
    });
    //选择保险产品
    $('.chose-btn').on('click', 'a', function(){
        $(this).addClass('on').parent('li').siblings().find('a').removeClass('on');
        var str = ['18岁（周岁）以上可领取','18-65周岁（含）可领取','18-45周岁女性可领取','请输入证件号码','45-80周岁可领取'];
        $('#idcard').attr('placeholder', str[$(this).parent('li').index()]).data('idcard', $(this).parent('li').index());
        if($(this).parent('li').index() == 3){
            $('.form-box .apply-input.childhood').show();
            $('#realname').siblings().text('投保人');
        } else{
            $('.form-box .apply-input.childhood').hide();
            $('#realname').siblings().text('您的姓名');
        }
        commonPop($('.mask-kind-pop.v-' + ($(this).parent('li').index()+1)));
    });
    //保险条款须知
    $('.page-modal-toubaoxuzhi').on('click',function(){
        $('#page-modal-toubaoxuzhi-v0').addClass('show-top').css('position', 'fixed');
        var $this = $(this);
        setTimeout(function(){$('#page-modal-toubaoxuzhi-v0').addClass('show');}, 10);
        $('.p-modal-body').css('height', $(window).height() - 42);
        $('body, .family-wrap').css('height', $(window).height()).addClass('modal-open');
    });
    $('.page-modal-baoxiantiaokuan').on('click',function(){
        $('#page-modal-baoxiantiaokuan-v0').addClass('show-top').css('position', 'fixed');
        var $this = $(this);
        setTimeout(function(){$('#page-modal-baoxiantiaokuan-v0').addClass('show');}, 10);
        $('.p-modal-body').css('height', $(window).height() - 42);
        $('body, .family-wrap').css('height', $(window).height()).addClass('modal-open');
    });
    //关闭条款须知
    $('.page-modal .close-pop, .page-modal-close').on('click', function(){
        $('.page-modal').removeClass('show');
        setTimeout(function(){$('.page-modal').removeClass('show-top');}, 500);
        $('body, .family-wrap').css('height', 'auto').removeClass('modal-open');
    });

    //少儿险
    $('.relation-box').click(function(){
        showMaskEditCom({
            text: '<p class="ed_mask">与被保险人关系必须是父母关系</p>',
            duration: 1500
        });
    });

    //用户协议勾选
    $('.protocol-choose dt').click(function(){
        if($(this).hasClass('has')){
            $(this).removeClass('has');
            $(this).data('protocol', 0);
        } else{
            $(this).addClass('has');
            $(this).data('protocol', 1);
        }
    });

    //验证码
    var senStop = true;//发送验证码开关
    $(".verify-btn").click(function(event){
        event.preventDefault();
        var realname = $('#realname').val(), idcard = $('#idcard').val(), mobile = $('#mobile').val();
        if(mobile == ''){
            showMaskEditCom({
                text: '请输入手机号',
                duration: 1500
            });
            return false;
        } else if(!commonPhoneReg.test(mobile)){
            showMaskEditCom({
                text: '<p class="ed_mask">请输入正确的手机号</p>',
                duration: 1500
            });
            return false;
        } else if(senStop){
            $('.ajax-loading').show();
            $.ajax({
                url: hostsUrl + "/ja_neighbor/system/sendMsg",
                type: "post",
                data: {"number": mobile, 'type': 3},
                dataType: "json",
                success: function(res){
                    $('.ajax-loading').hide();
                    if(res.code == '0'){
                        showMaskEditCom({
                            text: res.msg,
                            duration: 1500
                        });
                        $('#verify').focus();
                        $(".verify-btn").removeClass('on').addClass('none');
                        if(!senStop){
                            //验证码已发送
                            showMaskEditCom({
                                text: '验证码已发送',
                                duration: 1500
                            });
                            return false;
                        }
                        //成功开始倒计时
                        senStop = false;
                        countDown($(".verify-btn"),59,function(){
                            senStop = true;
                            $(".verify-btn").text('获取验证码');
                            $(".verify-btn").removeClass('none').addClass('on');
                        });
                        //verify test
                        //$('#verify').val(res.data).attr('value', res.data);
                    } else{
                        showMaskEditCom({
                            text: res.msg,
                            duration: 1500
                        });
                    }
                },
                error: function(){
                    $('.ajax-loading').hide();
                    showMaskEditCom({
                        text: '网络异常',
                        duration: 1500
                    });
                }
            });
        } else{
            showMaskEditCom({
                text: '验证码已发送',
                duration: 1500
            });
            return false;
        }
    });
    //倒计时
    function countDown(obj,time,fun){
        var oTimer = null;
        var i = time||60;
        oTimer = setInterval(function(){
            obj.text(i);
            if(i==0){
                clearInterval(oTimer);
                fun?fun():null;
            }
            i--;
        },1000);
    }

    //报名提交
    var sub = true;
    $('.draw-insurance-btn').on('click', function(event){
        event.preventDefault();
        if(!sub){return false;}

        var realname = $('#realname').val(),
            childname = $('#childname').val(),
            idcard = $('#idcard').val(),
            childidcard = $('#childidcard').val(),
            mobile = $('#mobile').val(), verify = $('#verify').val(),
            type = '意外险',
            idcardType = $('#idcard').data('idcard');

        if(realname == ''){
            showMaskEditCom({
                text: '<p class="ed_mask">请输入您的真实姓名</p>',
                duration: 1500
            });
            $('#realname').focus();
            return false;
        }
        if(idcard == ''){
            showMaskEditCom({
                text: '<p class="ed_mask">请输入您的身份证号码</p>',
                duration: 1500
            });
            return false;
        }

        if(CheckIdCard(idcard) != '验证通过!'){
            showMaskEditCom({
                text: CheckIdCard(idcard),
                duration: 1500
            });
            return false;
        }
        var birth = getBirthday(idcard);
        if(birth.age<18||birth.age>60){
            showMaskEditCom({
                text: '<p class="ed_mask">限18周岁至60周岁的用户领取</p>',
                duration: 1500
            });
            return false;
        }
        /*if(idcard != ''){
            switch(idcardType)
            {
                case 0:
                    if(IdCard(idcard, 3) < '18'){
                        showMaskEditCom({
                            text: '<p class="ed_mask">18岁（周岁）以上可领取</p>',
                            duration: 1500
                        });
                        return false;
                    }
                    break;
                case 1:
                    if(IdCard(idcard, 3) < '18' || IdCard(idcard, 3) >= '66'){
                        showMaskEditCom({
                            text: '<p class="ed_mask">18-65周岁（含）可领取</p>',
                            duration: 1500
                        });
                        return false;
                    }
                    break;
                case 2:
                    if(IdCard(idcard, 3) < '18' || IdCard(idcard, 3) >= '46' || IdCard(idcard, 2) == '男'){
                        showMaskEditCom({
                            text: '<p class="ed_mask">18-45周岁女性可领取</p>',
                            duration: 1500
                        });
                        return false;
                    }
                    break;
                case 3:
                    break;
                case 4:
                    if(IdCard(idcard, 3) < '45' || IdCard(idcard, 3) >= '81'){
                        showMaskEditCom({
                            text: '<p class="ed_mask">45-80周岁可领取</p>',
                            duration: 1500
                        });
                        return false;
                    }
                    break;
            }
        }*/
        if(mobile == ''){
            showMaskEditCom({
                text: '<p class="ed_mask">请输入您的手机号</p>',
                duration: 1500
            });
            return false;
        }
        if(!commonPhoneReg.test(mobile)){
            showMaskEditCom({
                text: '<p class="ed_mask">请输入正确手机号</p>',
                duration: 1500
            });
            return false;
        }
        if(verify == ''){
            showMaskEditCom({
                text: '<p class="ed_mask">请输入验证码</p>',
                duration: 1500
            });
            return false;
        }
        if(idcardType == 3){
            if(childname == ''){
                showMaskEditCom({
                    text: '<p class="ed_mask">请输入被保险人的真实姓名</p>',
                    duration: 1500
                });
                $('#childname').focus();
                return false;
            }
            if(childidcard == ''){
                showMaskEditCom({
                    text: '<p class="ed_mask">请输入被保险人的身份证号码</p>',
                    duration: 1500
                });
                return false;
            }
            if(CheckIdCard(childidcard) != '验证通过!'){
                showMaskEditCom({
                    text: '被保险人' + CheckIdCard(childidcard),
                    duration: 1500
                });
                return false;
            }
            if(IdCard(childidcard, 3) < '1' || IdCard(childidcard, 3) >= '28'){
                showMaskEditCom({
                    text: '<p class="ed_mask">被保险人1-17周岁可领取</p>',
                    duration: 1500
                });
                return false;
            }
        }
        if($('.protocol-choose dt').data('protocol') == 0){
            showMaskEditCom({
                text: '<p class="ed_mask">请阅读并同意投保须知和保险条款</p>',
                duration: 1500
            });
            return false;
        }

        sub = false;
        $('.ajax-loading').show();
        var strData = {};
        strData = {
            'insuranceType': type,
            'name': encryptMobileNumber(realname),
            'idCard': encryptMobileNumber(idcard),
            'phone': encryptMobileNumber(mobile),
            'verifyCode': verify,
            'description': 'WACAI_' + urlHrefObject.channel
        };
        if(idcardType == 3){
            strData.childName = encryptMobileNumber(childname);
            strData.childIdcard = encryptMobileNumber(childidcard);
        }

        $.ajax({
            url: hostsUrl + "/ja_neighbor/familyBucketInsurer/insert",
            type: "post",
            data: strData,
            dataType: "json",
            success: function(res){
                sub = true;
                $('.ajax-loading').hide();
                if(res.code == '0'){
                    commonPop($('.mask-success'));
                    $('#realname').val('');
                    $('#idcard').val('');
                    $('#mobile').val('');
                    $('#verify').val('');
                } else if(res.code == '1'){
                    showMaskEditCom({
                        text: '<p class="ed_mask">' + res.msg + '</p>',
                        duration: 1500
                    });
                    $('#realname').val('');
                    $('#idcard').val('');
                    $('#mobile').val('');
                    $('#verify').val('');
                } else{
                    showMaskEditCom({
                        text: '<p class="ed_mask">' + res.msg + '</p>',
                        duration: 1500
                    });
                }
            },
            error: function(){
                sub = true;
                $('.ajax-loading').hide();
                showMaskEditCom({
                    text: '网络异常',
                    duration: 1500
                });
            }
        });

    });

});


//公钥加密
function encryptMobileNumber(mobileNumber) {
    var publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDEChqe80lJLTTkJD3X3Lyd7Fj+zuOhDZkjuLNPog3YR20e5JcrdqI9IFzNbACY/GQVhbnbvBqYgyql8DfPCGXpn0+XNSxELIUw9Vh32QuhGNr3/TBpechrVeVpFPLwyaYNEk1CawgHCeQqf5uaqiaoBDOTqeox88Lc1ld7MsfggQIDAQAB';
    var encryptor = new JSEncrypt();
    encryptor.setPublicKey(publicKey);
    return encryptor.encrypt(mobileNumber);
}

//----------------------------------------------------------
//    功能：检查身份证号码
//  参数：
//    idcard
//    返回值：
//----------------------------------------------------------
function CheckIdCard(idcard){
    var Errors=[
        "验证通过!",
        "身份证号码位数不对!",
        "身份证号码出生日期超出范围或含有有误字符!",
        "身份证号码校验错误!",
        "身份证地区有误!"
    ];
    var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",
        31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",
        41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",
        61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};

    var idcard,Y,JYM;
    var S,M;
    var idcard_array = new Array();
    idcard_array = idcard.split("");
    //地区检验
    if(area[parseInt(idcard.substr(0,2))]==null) return Errors[4];
    //身份号码位数及格式检验
    switch(idcard.length){
        case 15:
            if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 &&
                (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){
                ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
            } else {
                ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
            }
            if(ereg.test(idcard)) return Errors[0];
            else return Errors[2];

            break;
        case 18:
            //18位身份号码检测
            //出生日期的合法性检查
            //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
            //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
            if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 &&
                parseInt(idcard.substr(6,4))%4 == 0 )){
                ereg=/^[1-9][0-9]{5}[1-2][0-9][0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
            } else {
                ereg=/^[1-9][0-9]{5}[1-2][0-9][0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
            }
            if(ereg.test(idcard)){//测试出生日期的合法性
                //计算校验位
                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
                    + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
                    + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
                    + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
                    + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
                    + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
                    + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
                    + parseInt(idcard_array[7]) * 1
                    + parseInt(idcard_array[8]) * 6
                    + parseInt(idcard_array[9]) * 3 ;
                Y = S % 11;
                M = "F";
                JYM = "10X98765432";
                M = JYM.substr(Y,1);//判断校验位
                if(M == idcard_array[17]) return Errors[0]; //检测ID的校验位
                else return Errors[3];
            }
            else return Errors[2];
            break;
        default:
            return Errors[1];
            break;
    }
}
//身份证信息
function IdCard(UUserCard,num){
    if(num==1){
        //获取出生日期
        birth=UUserCard.substring(6, 10) + "-" + UUserCard.substring(10, 12) + "-" + UUserCard.substring(12, 14);
        return birth;
    }
    if(num==2){
        //获取性别
        if (parseInt(UUserCard.substr(16, 1)) % 2 == 1) {
            //男
            return "男";
        } else {
            //女
            return "女";
        }
    }
    if(num==3){
        //获取年龄
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        var day = myDate.getDate();
        var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
        if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day) {
            age++;
        }
        return age;
    }
}
//身份证判定年龄
var getBirthday = function (val) {
    if (!val) return null;
    if (val.length != 18) return null;
    var reg = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/;
    if (!reg.test(val)) return null;
    var last = val.substring(val.length - 1);
    var lastNum = checkIdLast(val);
    if (last != lastNum) return null;
    var result = {};
    var array = /^(\d{6})(\d{8})(\d{2})(\d{1})(\d{1}|x|X)$/.exec(val);
    result.birth = array[2].replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
    result.sex = array[4] % 2 == 0 ? "女" : "男";
    var bArr = array[2].match(/^(\d{4})(\d{2})(\d{2})$/);
    var date = new Date(bArr[1], bArr[2] - 1, bArr[3]);
    var now = new Date();
    var nowDate = now.getDate();
    if( nowDate <= 25 ){
        now = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    }else {
        now = new Date(now.getFullYear(), now.getMonth() + 2, 1);
    }
    var year = now.getFullYear() - date.getFullYear();
    if (date.getMonth() > now.getMonth()) {
        year--;
    } else if (date.getMonth() == now.getMonth() && date.getDate() > now.getDate()) {
        year--;
    }
    result.age = year;
    return result;
};
var checkIdLast = function (Num) {
    if (Num.length != 18)
        return false;
    var x = 0;
    var y = '';
    for (var i = 18; i >= 2; i--)
        x = x + (square(2, (i - 1)) % 11) * parseInt(Num.charAt(19 - i - 1));
    x %= 11;
    y = 12 - x;
    if (x == 0)
        y = '1';
    if (x == 1)
        y = '0';
    if (x == 2)
        y = 'X';
    return y;
};
// 求得x的y次方
function square(x, y) {
    var i = 1;
    for (var j = 1; j <= y; j++)
        i *= x;
    return i;
}