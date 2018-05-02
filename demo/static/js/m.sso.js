/**
 * Created by libo on 2017/7/26.
 * 安逸SSO 单点登录库
 * TODO 时间不够，基于jQuery编写
 */

'use strict';
var anyi = anyi || {};
//anyi.env = "dev";
anyi.sso = function (options) {

	/**
	 * 判断测试还是生产环境，没有平行环境配置
	 * @type {boolean}
	 */
	var env = /test|^localhost$|^127\.0\.0\.1$|^192\..*$/gi.test(location.hostname) && /^(?!.*opentest)/gi.test(location.hostname);

	var defaults = {
		url: {
			"login": "/ws_sso/ssoUser/login",
			"logout": "/ws_sso/ssoUser/logout",
			"loginByPhone": "/ws_sso/ssoUser/loginByPhone",
			"wechatLogin": "/ws_sso/weixin/phoneBindWeixin",
			"getUserInfoByUserId": "/ws_sso/ssoUser/getUserInfoByUserId",
			"getCaptcha": "/ws_sso/captcha/getCaptcha",
			"regist": "/ws_sso/ssoUser/regist",
			"getCode": "/ws_sso/phone/getCode",
			"setCookie": "/ws_sso/auth/setCookie"
		},
		domain: env ? "sso.test.anyi-tech.com" : "sso.anyi-tech.com",
		iFrameId: "anyi_login_iframe",
		blankUrl: "blank.html",
		formId: "anyi_login_form",
		allowCross: true, //允许跨域
		mobile: {
			modal: '<div class="modal modal-style1" style="position: absolute;"  id="anyi-modal-login" tabindex="-1"><div class="modal-dialog">' +
			'<div class="modal-content modal-iframe"></div>' +
			'</div></div>',
			login: location.protocol + "//" + (env ? "test.m.anyi-tech.com" : "m.anyi-tech.com") +
			"/login.html?fromUrl=" + encodeURIComponent(location.origin + "/static/blank.html")
		}
	};
	this.options = $.extend(true, defaults, options);
	this.options.origin = location.protocol + "//" + this.options.domain;
	this.options.isIe = $.support.cors === false;
	this.options.cors = this.options.allowCross === true && $.support.cors;
};

anyi.sso.prototype = {
	init: function () {

	},
	ajaxUrl: function (name) {
		return this.options.origin + this.options.url[name];
	},
	sendLoginService: function (data) {
		var promises = [];
		$(data.loginServiceUrl).each(function (index, url) {
			url.loginServiceUrl += "?sso_token=" + data.token;
			var $iFrame = $('<iframe name="frame-send" src="' + url.loginServiceUrl + '" style="display:none;"></iframe>');
			var dtd = $.Deferred();
			$iFrame.on("load", function () {
				$(this).remove();
				dtd.resolve();
			});
			$("body").append($iFrame);
			promises.push(dtd.promise())
		});
		return $.when.apply($, promises)
	},
	loadSetCookie:function (data) {
		return $.getScript(this.options.origin + this.options.url["setCookie"]);
	},
	getAjaxOption:function (name,params,type) {
		var self = this;
		var option = {
			url: self.ajaxUrl(name),
			type: type ? type : 'post',
			contentType: "application/json",
			dataType: 'json',
			data: type && type.toLowerCase() === "get" ? params : JSON.stringify(params),
			headers: {"sso-token": self.cookie.get("sso_token")}
		};
		if (option.type === "get") {
			option.cache = false;
		}
		return option;
	},
	commonLogin:function (name,param) {
		var self = this;
		var dtd = $.Deferred();
		var ajaxOption = self.getAjaxOption(name, param);
		var promise = self.options.cors ? $.ajax(ajaxOption) : self.crossAjax(ajaxOption);
		promise && promise.done(function (data, textStatus, jqXHR) {
			if (data.code === 1 && data.result && data.result.token) {
				if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
					self.cookie.set("sso_token", data.result.token, 1 / 48);
				}
				$.when(self.sendLoginService(data.result),self.loadSetCookie(data)).always(function () {
					dtd.resolve(data, textStatus, jqXHR);
				});
			} else {
				dtd.resolve(data, textStatus, jqXHR);
			}
		}).fail(function (jqXHR, textStatus, errorThrown) {
			dtd.reject(jqXHR, textStatus, errorThrown);
		});
		return dtd.promise();
	},
	login: function (param) {
		return this.commonLogin("login", param);
	},
	logout:function () {
		var self = this;
		var dtd = $.Deferred();
		var ajaxOption = self.getAjaxOption("logout");
		var promise = self.options.cors ? $.ajax(ajaxOption) : self.crossAjax(ajaxOption);
		promise && promise.done(function (data, textStatus, jqXHR) {
			if (data.code === 1) {
				self.cookie.del("sso_token");
			}
			dtd.resolve(data, textStatus, jqXHR);
		}).fail(function (jqXHR, textStatus, errorThrown) {
			dtd.reject(jqXHR, textStatus, errorThrown);
		});
		return dtd.promise();
	},
	userInfo:function () {
		var self = this;
		var ajaxOption = self.getAjaxOption("getUserInfoByUserId");
		return self.options.cors ? $.ajax(ajaxOption) : self.crossAjax(ajaxOption);
	},
	userInfo2:function () {
		var self = this;
		var ajaxOption = self.getAjaxOption("getUserInfoByUserId");
		ajaxOption["redirect"] = false;
		return self.options.cors ? $.ajax(ajaxOption) : self.crossAjax(ajaxOption);
	},
	loginByPhone:function (param) {
		return this.commonLogin("loginByPhone", param);
	},
	wechatLogin:function (param) {
		return this.commonLogin("wechatLogin", param);
    },
	getCaptcha:function () {
		var self = this;
		var ajaxOption = self.getAjaxOption("getCaptcha", null, "get");
		var promise = self.options.cors ? $.ajax(ajaxOption) : self.crossAjax(ajaxOption);
		promise.done(function (data, textStatus, jqXHR) {
			if (data.code === 1) {
				self.cookie.set("captche", data.result.captche)
			}
		});
		return promise;
	},
	getCode:function (param) {
		var self = this;
		var ajaxOption = self.getAjaxOption("getCode", param);
		ajaxOption.headers["captche"] = self.cookie.get("captche");
		return self.options.cors ? $.ajax(ajaxOption) : self.crossAjax(ajaxOption);
	},
    regist:function (param) {
		return this.commonLogin("regist", param);
	},
	cookie: {
		set: function (name, value, days) {
			var expires = "";
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toGMTString();
			}
			document.cookie = name + "=" + value + expires + "; path=/";
		},
		get: function (name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
			}
			return null;
		},
		del: function (name) {
			this.set(name, "", -1);
		}
	},
	createAjaxFrame:function (ajaxOption) {
		var dtd = $.Deferred();
		var self = this;
		var time = new Date().getTime();
		var $body = $("body");
		if ($body.children("#cross_" + time).length > 0) {
			time = new Date().getTime();
		}
		$(window).one("message" + "." + time, function (event) {
			var o = event.originalEvent;
			var data = o.data;
			if (typeof data === "string") data = $.parseJSON(data);
			if (!data.messageId || data.messageId + "" !== event.handleObj.namespace) return;
			if (data.type === "done") {
				dtd.resolve(data.data);
			} else {
				dtd.reject({status: data.status});
			}
			var origin = o.origin;
		});
		ajaxOption.messageId = time;
		var domain = self.options.origin + "/domain.html?" + time;
		//var domain = self.options.origin + "/domain.html";
		var $iFrame = $('<iframe id="cross_' + time + '" src="' + domain + '" style="display:none;"></iframe>');
		$body.append($iFrame);
		$iFrame.on("load", function () {
			var origin = self.options.origin;
			if (self.options.isIe) {
				ajaxOption = JSON.stringify(ajaxOption);
			}
			this.contentWindow.postMessage(ajaxOption, origin);
		});
		return dtd.promise();
	},
	crossAjax: function (ajaxOption) {
		return this.createAjaxFrame(ajaxOption);
	},
	/**
	 * 移动端登录
	 */
	mobileLogin:function () {
		var dtd = $.Deferred();
		var that = this;
		var $modal = $("#anyi-modal-login");
		if ($modal.length === 0) {
			$modal = $(this.options.mobile.modal);
			$("body").append($modal);
		}
		$modal.children(".modal-dialog").height($(window).height()-100);
		var href = this.options.mobile.login + "?" + new Date().getTime();
		var $iFrame = $modal.find("#anyi-login-iframe");
		if ($iFrame.length === 0) {
			$iFrame = $('<iframe frameborder="0" id="anyi-login-iframe" style="height: 100%;width: 100%;border: none;"></iframe>');
			$iFrame.on("load", function () {
				try {
					if (/^(?!.*fromUrl).*blank\.html/gi.test(this.contentWindow.location.href)) {
						$.when(that.loadSetCookie()).always(function () {
							$("#anyi-modal-login").modal("hide");
							dtd.resolve();
						});
					}
				} catch (e) {

				}
			});
			$modal.find("> .modal-dialog > .modal-content").append($iFrame);
		}
		$iFrame.attr("src", href);
		$modal.modal("show");
		$(document).scrollTop(0);
		return dtd.promise();
	},
	checkLogin:function () {
		var ssoToken = this.cookie.get("sso_token");
		if (!ssoToken) {
			//登录成功是可以回调的，时间紧，当前不做处理
			this.mobileLogin();
		}
		return !!ssoToken;
	}
};

/**
 * 第一次页面加载
 */
+function () {
	var sso = new anyi.sso();
	sso.loadSetCookie();
}();