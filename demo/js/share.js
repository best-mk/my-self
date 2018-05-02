var anyi = anyi || {};

/**
 * 安逸微信分享类，会替代 anyi.common.weixin
 */
anyi.weixin = (function (self) {

    self.defaults = {
        title: "百万国庆出行保障免费送！",
        desc: "民航班机和火车都能保障，完美覆盖国庆长假！",
        type: "link",
        link: location.origin+'/activity/family/index.html',
        imgUrl: location.href.substr(0, location.href.lastIndexOf("/") + 1) +'images/weixin-share-icon.jpg',
        dataUrl: "",
        success: function () {
        },
        cancel: function () {

        }
    };
    /**
     * 微信分享
     * @param config 微信分享配置，用默认不传 或用 {}
     * @param onready 分享初始化成功回调函数
     * @param loading load 具体使用方法查看我写的$.ajax的扩展方法
     */
    self.share = function (config, onready, loading) {
        var link = encodeURIComponent(location.href.split('#')[0]);
        var url = "/wechat/getjsconfig?url=" + link;
        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            loading: loading
        }).done(function (data) {
            if (window.wx) {
                window.wx.config(data);
                window.wx.ready(function () {
                    if (onready) {
                        onready(window.wx, config || {});
                    } else {
                        self.update(config || {});
                    }
                });
            }
        });
    };
    /**
     * 微信公众号分享设置
     * @param config
     */
    self.update = function (config) {
        config = config || {};
        config = $.extend(true, self.defaults, config);
        if (window.wx) {
            window.wx.onMenuShareTimeline(config);
            window.wx.onMenuShareAppMessage(config);
        }
    };
    return self;
})(anyi.weixin || {});