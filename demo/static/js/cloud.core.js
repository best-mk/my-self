/**
 * @Created by libo on 2017/2/23.
 * @desc 安莱v1.0
 */
'use strict';

var anyi = anyi || {};


/**
 * jQuery 扩展
 */
(function($){

    var _ajax=$.ajax;

    /**
     * load 模板
     * @type {string}
     */
    var loadTemplates = '' +
        '<div class="loading">'+
        '	<div class="l-dialog">'+
        '		<div class="l-content none">'+
        '			<div class="l-header">提示</div>'+
        '			<div class="l-body">'+
        '				<div class="center"><i class="fa fa-spinner fa-spin"></i> <span class="l-msg">正在处理中</span></div>'+
        '			</div>'+
        '		</div>'+
        '	</div>'+
        '</div>';


    /**
     * ajax loading
     * @param option
     */
    var buildLoading = function (option) {
        var $loading = $("body").children(".loading");
        if ($loading.length == 0) {
            $loading = $(loadTemplates);
            $("body").append($loading);
        }
        var defaults = {
            title: "提示",
            msg: "正在处理中……"
        };
        if (typeof option === "object") {
            $loading.find("div.l-dialog").removeClass("none");
            defaults = $.extend(true, defaults, option);
        } else if (typeof option === "string") {
            defaults.msg = option;
        }
        $loading.find("div.l-header").html(defaults.title);
        $loading.find("span.l-msg").html(defaults.msg);
        $loading.removeClass("hide");
    };

	/**
	 *
	 */
	$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
		options.url = anyi.global.host(options.url);
		//options.crossDomain = true;
		//options.contentType ='text/plain';
	});

	/**
	 * ajax全局配置，用于替代之前重载的$.ajax
	 */
	$(document).ajaxSend(function(event, jqXhr, settings) {
		//settings.url = anyi.global.host(settings.url);
		settings.loading && buildLoading(settings.loading);
	});

	/**
	 * ajax全局配置，用于替代之前重载的$.ajax
	 */
	$(document).ajaxComplete(function(event, jqXhr, settings) {
		var sStatus = jqXhr.getResponseHeader('sessionstatus');
		if (sStatus === 'timeout') {
			var history = location.pathname + location.search;
			window.top.location.href = "login.html?history=" + encodeURIComponent(history);
			return;
		}

		var statusCode = {
			404: function () {
			}, 401: function (jqXHR) {
				var history = location.pathname + location.search;
				window.top.location.href = "login.html?history=" + encodeURIComponent(history);
			}
		};

		var status = statusCode[jqXhr.status];
		status && status.call(this, jqXhr);
		//隐藏loading
		settings.loading && $("body").children(".loading").addClass("hide");
	});

	/**
	 * 获取URL中参数
	 * @param name 参数名称
	 * @returns {*}
	 */
	$.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    };

	/**
	 * 获取cookie
	 * @param name
	 * @param value
	 * @param days
	 * @returns {*}
	 */
    $.cookie = function (name,value,days) {
        if (arguments.length == 1) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
            return null;
        } else if (arguments.length > 1) {
            setCookie(name, encodeURIComponent(value), days);
        }
    };

    /**
     * 设置cookie
     * @param {string} name  键名
     * @param {string} value 键值
     * @param {integer} days cookie周期
     */
    var setCookie = function (name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else {
            var expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    };

	/**
	 * 移除cookie
	 * @param name
	 */
	$.removeCookie = function (name) {
        setCookie(name, "", -1);
    };

    var templates = {
        modal: '' +
		'<div class="modal animated zoomIn modal-alert" id="anyi-modal-alert" tabindex="-1">' +
        '<div class="modal-dialog modal-sm">' +
        '<div class="modal-content">' +
        '<div class="modal-header hide">' +
        '<a class="close" data-dismiss="modal"><i class="fa fa-times"></i></a>' +
        '<h4 class="blue bigger"></h4>' +
        '</div>' +
        '<div class="modal-body" ></div>' +
        '<div class="modal-footer"><a class="modal-close" data-dismiss="modal">确定</a></div>' +
        '</div>' +
        '</div>' +
        '</div>',
        confirm: '' +
        '<div class="modal animated zoomIn modal-alert" id="anyi-modal-confirm" tabindex="-1">' +
        '<div class="modal-dialog modal-sm">' +
        '<div class="modal-content">' +
        '<div class="modal-header hide">' +
        '<button class="close" data-dismiss="modal">×</button>' +
        '<h4 class="blue bigger"></h4>' +
        '</div>' +
        '<div class="modal-body yellow" ></div>' +
        '<div class="modal-footer">' +
        '<a class="modal-cancel" data-dismiss="modal">取消</a>' +
        '<a class="modal-ok">确定</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    };

    /**
     * 提示框
     * @param text
     * @param callback
     */
    $.alert = anyi.alert = function (text, callback) {
		var tit = "提示";
		var message = "异常";
		if (typeof text === "object") {
			if (text.status == "401") {
				return;
			} else if (text.status == "0") {
				message = "网络异常";
			} else if (text.status == "502") {
				message = "抱歉，您所访问的网站暂时处于维护中。请稍后尝试。";
			} else {
				text = text.responseJSON || text;
				message = text.msg || text.errMsg || text.errmsg || text.message || "未知异常，请重试";
			}
		} else if (typeof text === "string") {
			message = text;
		}
		var $body = $("body");
		//var $alert = $body.children(".modal-alert:not(.in)").first();
		var $alert =  $("#anyi-modal-alert");

		if ($alert.length == 0) {
			$alert = $(templates.modal);
			$body.append($alert);
		}
		$alert.find("div.modal-header>h4").html(tit);
		$alert.find("div.modal-body").html(message);
		var wHeight = $(window).height();
		var top = (wHeight - 150) / 2;
		$alert.children("div.modal-dialog").css("top", top);
		$alert.modal("show").off("hide.bs.modal").on("hide.bs.modal", function () {
			callback && callback();
		});
	};

    /**
     * 确认框
     * @param options
     * @param text
     * @param ok
     * @param cancel
     */
    $.confirm = anyi.confirm = function (options, text, ok, cancel) {

        var okText;
        var cancelText;
        var title;
        if(typeof options === "object" && options.title !== undefined && !!options.text ) {
            title = options.title;
            text = options.text;
            ok = options.ok;
            cancel = options.cancel;
            okText = options.okText;
            cancelText = options.cancelText;
        } else {
            title = options;
        }

        text = text || "请确认";
        var $confirm = $("#anyi-modal-confirm");
        if ($confirm.length === 0) {
            $confirm = $(templates.confirm);
            $("body").append($confirm);
        }
        if(!!title) {
			$confirm.find("div.modal-header").removeClass("hide");
			$confirm.find("div.modal-header>h4").html(title);
		}

        $confirm.find("div.modal-body").html(text);
        okText && $confirm.find("a.modal-ok").html(okText);
        cancelText && $confirm.find("a.modal-cancel").html(cancelText);

        var wHeight = $(window).height();
        var top = (wHeight - 150) / 2;
        $confirm.children("div.modal-dialog").css("top", top);
        $confirm.find(".modal-ok").off("click").on("click", function () {
            ok && ok($(this));
            $("#anyi-modal-confirm").modal("hide")
        });
        $confirm.modal("show").off("hide.bs.modal").on("hide.bs.modal", function () {
            cancel && cancel($(this));
        });
    };

    /**
     * ajax下载
     */
    $.ajaxDownload = function () {
        var $body = $("body");
        var $iframe = $body.children("#iframe-download");
        if ($iframe.length === 0) {
            $iframe = $("<iframe id='iframe-download' style='display: none;'></iframe>");
            $body.append($iframe);
        }
        var option = {};
        if (typeof arguments[0] === "string") {
            option = {
                url: arguments[0],
                callback: arguments[1] && typeof arguments[1] === "function" && arguments[1] || null
            }
        } else if (typeof arguments[0] === "object" && arguments[0].url) {
            option = arguments[0];
        }
        if (!option) return;
        $iframe.prop("src", option.url);
        option.callback && option.callback();
    };

	var local = function (store,storage) {
		function isJSON(obj) {
			return typeof(obj) === "object" && Object.prototype.toString.call(obj).toLowerCase() && !obj.length;
		}

		function stringify(val) {
			return val === undefined || typeof val === "function" ? val + '' : JSON.stringify(val);
		}

		function deserialize(value) {
			if (typeof value !== 'string') {
				return undefined;
			}
			try {
				return JSON.parse(value);
			}
			catch (e) {
				return value || undefined;
			}
		}

		function isFunction(value) {
			return ({}).toString.call(value) === "[object Function]";
		}

		function isString(obj) {
			return typeof obj === 'string';
		}

		function isArray(value) {
			return value instanceof Array;
		}

		var _api = {
			set: function (key, val) {
				if (val === undefined) {
					return this.remove(key);
				}
				storage.setItem(key, stringify(val));
				return val;
			},
			setAll: function (data) {
				var changed, val;
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						val = data[key];
						if (this.set(key, val) !== val) {
							changed = true;
						}
					}
				}
				return changed;
			},
			get: function (key) {
				return deserialize(storage.getItem(key));
			},
			getAll: function () {
				var ret = {};
				this.forEach(function (key, val) {
					ret[key] = val;
				});
				return ret;
			},
			clear: function () {
				return storage.clear();
			},
			remove: function (key) {
				var val = this.get(key);
				storage.removeItem(key);
				return val;
			},
			has: function (key) {
				return storage.hasOwnProperty(key);
			},
			keys: function () {
				var d = [];
				this.forEach(function (k) {
					d.push(k);
				});
				return d;
			},
			size: function () {
				return this.keys().length;
			},
			forEach: function (callback) {
				for (var i = 0; i < storage.length; i++) {
					var key = storage.key(i);
					if (callback(key, this.get(key)) === false) break;
				}
			}
		};
		store = function (key, data) {
			var argm = arguments, dt = null,
				_store = function (key, data) {
					if (isFunction(data)) {
						if (isString(key)) {
							dt = data(store.get(key));
							return dt ? store.set(key, dt) : undefined;
						}
						if (isArray(key)) for (var a in key) {
							if (key.hasOwnProperty(a)) {
								dt = data(store.get(key[a]));
								if (dt) store.set(key[a], dt);
							}
						}
						return;
					}
					if (isJSON(key)) return store.setAll(key);
					if (argm.length === 0) {
						return store.getAll();
					}
					if (data === false) {
						return store.remove(key);
					}
					if (data !== undefined) {
						return store.set(key, data);
					}
					if (key) {
						return store.get(key);
					}
					return store.setAll(key, data);
				};
			return _store(key, data);
		};
		for (var a in _api) {
			if (_api.hasOwnProperty(a)) {
				store[a] = _api[a];
			}
		}
		return store;
	};

	/**
	 * localStorage 操作
	 */
	$.store = (function (store) {
		if (!window.localStorage) return;
		var storage = window.localStorage;
		return local(store,storage);
	})();

	/**
	 * sessionStorage 操作
	 */
	$.session = (function (store) {
		if (!window.sessionStorage) return;
		var storage = window.sessionStorage;
		return local(store, storage);
	})();

})(jQuery);


anyi.global = (function () {
	var self = {};

	self.config = "dev";

	self.config = {
			"open.anyi-tech.com": "pro",
			"opentest.anyi-tech.com": "pre",
			"test.spb.riskeys.com": "dev"}[location.host] || "dev";

	self.dev = {
		"core": "http://test.core.riskeys.com",
		"ocr": "http://test.ocr.riskeys.com",
		"opr": "http://test.opr.riskeys.com",
		"opp": "http://116.62.31.140:9009",
		"oper": "http://test.operation.anyi-tech.com",
		"pay": "http://testpay.riskeys.com/"
	};

	self.pro  = {
		"core": "http://lscore.riskeys.com",
		"ocr": "http://ocr.riskeys.com",
		"opr": "http://opr.riskeys.com",
		"opp": "http://operation.anyi-tech.com",
		"oper": "http://operation.anyi-tech.com",
		"pay": "http://pay.riskeys.com/"
	};

	/**
	 * 获取URL
	 * @param name
	 * @returns {*}
	 */
	self.getUrl = function (name) {
		return self[self.config][name];
	};

	self.host = function (url) {
		if (/^\/ws_opplatform\/|^\/ws_common\/|^\/zhpt\//.test(url)) {
			return self.getUrl("oper") + url;
		}
		return url;

		/*if (/^\/zhpt/.test(url)) {
			return self.getUrl("opr") + url;
		} else if (/^\/ws_opplatform|^\/ws_common/.test(url)) {
			return self.getUrl("opp") + url;
		}
		return url*/
	};
	return self;
})();

/**
 * 公共方法
 */
anyi.common = (function(self) {

	var menuConfig = [
		{name: "综合运营平台", href: "index.html"},
		{name: "产品管理", href: "product-index.html"},
		{
			name: "车险",
			href: "car-index.html",
			child: [
				{name: "查询", href: "car-index.html"},
				{name: "报价", href: "car-offer.html"},
				{name: "承保", href: "car-accept.html"},
				{name: "退费", href: "car-refund.html"},
				{name: "车险管理", href: "car-management.html"}
			]
		},
		{name: "寿险", href: "life-index.html"},
		{
			name: "非车非寿险",
			href: "other-list.html",
			child: [
				{name: "预约列表", href: "other-list.html"},
				{name: "订单列表", href: "other-order.html"}
			]
		},{
			name: "账号管理系统",
			href: "user-list.html",
			child: [
				{name: "用户管理", href: "user-list.html"},
				{name: "角色管理", href: "user-list.html"},
				{name: "权限管理", href: "user-list.html"}
			]
		},{
			name:"保险理赔",
			href: "claim-index.html",
			child:[
			   {name:"待初审的理赔",href:"claim-index.html"},
			   {name:"待送审的理赔",href:"claim-review.html"},
			   {name:"待回录的理赔",href:"claim-record.html"},
			   {name:"综合查询",href:"claim-query.html"}
			]
		}
	];

	/**
	 * 生成nav html
	 * 高亮通过body data-nav实现，偷懒方法，非最终解决方案
	 * @param data
	 */
	var buildNav = function (data) {
		var html = [];
		var cHtml = [];
		var nav = $("body").data("nav");
		var arr = nav && nav.split(",") || [];
		$(menuConfig).each(function (index, item) {
			var active = arr[0] && item.name === arr[0] ? "class='active'" : "";
			html.push('<li ' + active + ' data-name="' + item.name + '"><a href="' + item.href + '">' + item.name + '</a></li>');
			if (item.name === arr[0] && item.child) {
				$(item.child).each(function (index, item) {
					var active = arr[1] && item.name === arr[1] ? "class='active'" : "";
					cHtml.push('<li ' + active + ' data-name="' + item.name + '"><a href="' + item.href + '">' + item.name + '</a></li>');
				});
			}
		});
		$("#nav").append(html.join(""));
		$("#sidebar").children("ul").append(cHtml.join(""));
	};

	/**
	 * 退出登录
	 */
	var logout = function () {
		$("#link-logout").on("click", function () {
			$.ajax({
				url: '/ws_anlai/logout',
				type: 'post',
				contentType: "application/json",
				dataType: 'json'
			}).done(function (data) {
				if (data && data.code == 0) {
					location.href = anyi.product && anyi.product.login || "/login.html";
				} else {
					$.alert(data);
				}
			}).fail(function (jqXhr) {
				$.alert(jqXhr);
			});
			return false;
		});
	};

	/**
	 * 事件
	 */
	var event = function () {
		//生成菜单
		buildNav();
	};

	self.init = function () {
		//getUserInfo();
		if (anyi && anyi.product) {
			var product = anyi.product;
			document.title = document.title + " - " + product.name;
		}
		logout();
		event();
	};

	/**
	 * table 语言配置
	 */
	self.tableLanguage = {
		"processing": "正在加载中...",
		"lengthMenu": "显示 _MENU_ 项",
		"emptyTable": "没有可用的数据",
		"zeroRecords": "没有匹配结果",
		"info": "显示条目 _START_ - _END_ 条，共 _TOTAL_ 项",
		"infoEmpty": "显示第 0 至 0 项结果，共 0 项",
		"infoFiltered": "(由 _MAX_ 项结果过滤)",
		"infoPostFix": "",
		"search": "搜索:",
		"paginate": {
			"sFirst": "&#xf048;",
			"sPrevious": "&#xf04a;",
			"sNext": "&#xf04e;",
			"sLast": "&#xf051;"
		}
	};


	/**
	 * 获取上传图片链接
	 * @param id
	 * @returns {string}
	 */
	self.fileUrl = function (id) {
		var url = "/ws_common/download_file/fileReader/" + id;
		return anyi.global.getUrl("core") + url;
	};

	return self;
})(anyi.common || {});

/**
 * anyi 表单相关
 */
anyi.form = (function (self) {

    /**
     * 根据field设置model的值
     * @param field
     * @param model
     * @param value
     */
    var setModelValue = function (field, model, value) {
		var val = model;
		field = field && field.split('.');
		$(field).each(function (index, item) {
			if (index < field.length - 1) {
				val[item] = val[item] || {};
				val = val[item]
			} else {
				val[item] = value;
			}
		});
	};

    /**
     * 根据field获取model的值
     * @param field
     * @param model
     * @returns {*}
     */
    var getModelValue = function (field, model) {
		var val = model;
		$(field && field.split(".")).each(function (index, item) {
			val = val[item];
			if(!val) return false;
		});
		return val;
	};

    /**
     * 获取文本框类型的值
     * @param model model
     * @param dom dom
     * @param $selector $selector
     */
    var getInputValues = function (model, dom, $selector) {
        var inputType = dom.type;
        var nodeName = dom.nodeName;
        var $dom = $(dom);
        var field = $dom.data("field");
        if (field) {
            if (nodeName == "INPUT") {
                var attrName = $dom.attr("name");
                if (inputType == "checkbox") {
                    if (attrName) {
                        var $checkbox = $selector.find("input[type=checkbox][name=" + attrName + "]:checked");
                        var checkValues = [];
                        $checkbox.each(function (index, item) {
                            if($(item).attr("value")){
                                checkValues.push(item.value);
                            } else {
                                checkValues.push($(item).prop("checked"));
                            }
                        });
                        setModelValue(field, model, checkValues);
                    } else {
                        if ($dom.attr("value")) {
                            setModelValue(field, model, $dom.val());
                        } else {
                            setModelValue(field, model, $dom.prop("checked"));
                        }
                    }
                } else if (inputType == "radio") {
                    if (attrName) {
                        var $radio = $selector.find("input[type=radio][name=" + attrName + "]:checked");
                        if ($radio.attr("value")) {
                            setModelValue(field, model, $radio.val());
                        } else {
                            setModelValue(field, model, $radio.prop("checked"));
                        }
                    } else {
                        setModelValue(field, model, $dom.prop("checked"));
                    }
                } else if (inputType == "file") {
                    setModelValue(field, model, $dom.data("val"));
                } else {
                    setModelValue(field, model, $dom.val());
                }
            } else if (nodeName == "SELECT") {
                setModelValue(field, model, $dom.val());
            } else if (nodeName == "TEXTAREA") {
                setModelValue(field, model, $dom.val());
            } else {
                setModelValue(field, model, $dom.val());
            }
        }
    };

    /**
     * 设置文本框类型的值
     * @param model model
     * @param dom dom
     * @param $selector jQuery对象
	 * @param format 格式化
     */
    var setInputValues = function (model, dom, $selector,format) {
		var inputType = dom.type;
		var nodeName = dom.nodeName;
		var $dom = $(dom);
		var field = $dom.data("field");
		var value = getModelValue(field, model);
		//格式化
		value = format && format[field] && typeof format[field] === "function" && format[field].call(dom, value, model) || value;
		if (field && value != undefined) {
			if (nodeName === "INPUT") {
				var attrName = $dom.attr("name");
				if (inputType === "checkbox") {
					if (attrName) {
						var $checkbox = $selector.find("input[type=checkbox][name=" + attrName + "]");
						if ($.isArray(value)) {
							$checkbox.each(function (index, item) {
								if ($dom.attr("value")) {
									if($.inArray(item.value,value) > -1){
										$(item).prop("checked", true);
									}
								} else {
									$(item).prop("checked", value[index]);
								}
							});
						} else {
							if ($dom.attr("value")) {
								if (value == $dom.val()) {
									$dom.prop("checked", true);
								}
							} else {
								$dom.prop("checked", value);
							}
						}
					} else {
						if ($dom.attr("value")) {
							if (value == $dom.val()) {
								$dom.prop("checked", true);
							}
						} else {
							$dom.prop("checked", value);
						}
					}
				} else if (inputType == "radio") {
					if (attrName) {
						var $radio = $selector.find("input[type=radio][name=" + attrName + "]");
						$radio.each(function (index, item) {
							if (value == item.value) {
								$(item).prop("checked", true);
							}
						});
					} else {
						if (value == $dom.val()) {
							$dom.prop("checked", true);
						}
					}
				} else if (inputType == "file") {
					$dom.data({val: value, array: value.split(",")});
				} else {
					$dom.val(value);
				}
			} else if (nodeName == "SELECT") {
				$dom.val(value);
			} else if (nodeName == "TEXTAREA") {
				$dom.val(value);
			} else {
				$dom.val(value);
			}
		}
	};

    /**
     * 获取表单的值
     * @param selector 表单选择器
	 * @param format 格式化
     * @returns {{}} 返回模型属性
     */
    self.getValues = function (selector,format) {
		var model = {};
		var $selector = $(selector);
		if ($selector.length > 0) {
			$selector.find("input,textarea,select").each(function (index, item) {
				getInputValues(model, item, $selector, format);
			});
		}
		return model;
	};

    /**
     * 设置表单的值
     * @param selector
     * @param model
	 * @param format 格式化
     */
    self.setValues = function (selector, model,format) {
		var $selector = $(selector);
		if ($selector.length > 0 && model) {
			$selector.find("input,textarea,select").each(function (index, item) {
				setInputValues(model, item, $selector, format);
			});
		}
		return $selector;
	};

    /**
     * 下拉框绑定
     * @param selector
     * @param data
     * @param valueName
     * @param textName
     */
    self.select = function (selector, data, valueName, textName) {
        var $selector = $(selector);
        if ($selector.length > 0) {
            if ($.isArray(data)) {
                if (!valueName) {
                    valueName = "id";
                }
                if (!textName) {
                    textName = "name";
                }
                var optionHtml = "<option value='' selected></option>";
                $(data).each(function (index, item) {
                    optionHtml += "<option value='" + item[valueName] + "'>" + item[textName] + "</option>"
                });
                $selector.html(optionHtml);
            }
        }
        return $selector;
    };

    /**
     * 单选
     */
    self.singleSelect = function(selector) {
        var $selector = $(selector);
        if ($selector.length == 0) {
            $selector = $('.chosen-select');
        }
        $selector.trigger("chosen:updated");
        if (!ace.vars['touch'] && $.fn.chosen) {
            $selector.chosen({
                allow_single_deselect: true,
                default_no_result_text: "没有匹配的选项",
                width: "100%"
            });
        }
        return $selector;
    };

    /**
     * 清空表单
     * @param selector
     */
    self.empty = function (selector) {
        var $selector = $(selector);
        if($selector.length == 0) return $selector;
        $selector.find("input,textarea,select").each(function (index, dom) {
            var inputType = dom.type;
            var nodeName = dom.nodeName;
            var $dom = $(dom);
            if (nodeName == "INPUT") {
                var attrName = $dom.attr("name");
                if (inputType == "checkbox") {
                    $dom.prop("checked", false);
                } else if (inputType == "radio") {
                    if (attrName) {
                        var $radio = $selector.find("input[type=radio][name=" + attrName + "]");
                        $radio.eq(0).prop("checked", true);
                    } else {
                        $dom.prop("checked", false);
                    }
                } else if (inputType == "file") {
                    $dom.val(null);
                    if($dom.data("type") == "files"){
                        $dom.parent().next("ul.anyi-file-list").empty();
                    } else {
                        var $img = $dom.siblings("img.anyi-file-img");
                        if ($img.length > 0) {
                            $img.attr("src", "")
                        }
                    }
                } else {
                    $dom.val(null);
                }
            } else if (nodeName == "SELECT") {
                if (dom.selectedIndex) {
                    dom.selectedIndex = 0;
                }
            } else if (nodeName == "TEXTAREA") {
                $dom.val(null);
            } else {
                $dom.val(null);
            }
        });
        return $selector;
    };

    /**
     * 有绑定的表单清空
     * @param selector
     * @returns {*|jQuery|HTMLElement}
     */
    self.formEmpty = function (selector) {
        var $selector = $(selector);
        if ($selector.length == 0) return $selector;
        $selector.find("[data-field]").each(function (index, dom) {
            var nodeName = dom.nodeName;
            var inputType = dom.type;
            var $dom = $(dom);
            if (nodeName == "INPUT") {
                var attrName = $dom.attr("name");
                if (inputType == "checkbox") {
                    if (attrName) {
                        var $checkbox = $selector.find("input[type=checkbox][name=" + attrName + "]");
                        $checkbox.each(function () {
                            $(this).prop("checked", false);
                        });
                    } else {
                        $dom.prop("checked", false);
                    }
                } else if (inputType == "radio") {
                    if (attrName) {
                        var $radio = $selector.find("input[type=radio][name=" + attrName + "]");
                        $radio.eq(0).prop("checked", true);
                    } else {
                        $dom.prop("checked", false);
                    }
                } else if (inputType == "file") {
                    $dom.val(null).removeData("array").removeData("val");
                    if ($dom.data("type") == "files") {
                        $dom.parent().next("ul.anyi-file-list").empty();
                    } else {
                        var $img = $dom.siblings("img.anyi-file-img");
                        if ($img.length > 0) {
                            $img.attr("src", "")
                        }
                    }
                } else {
                    $dom.val(null);
                }
            } else if (nodeName == "SELECT") {
                if (dom.selectedIndex) {
                    dom.selectedIndex = 0;
                }
            } else if (nodeName == "TEXTAREA") {
                $dom.val(null);
            } else {
                $dom.empty();
            }
        });
    };

    /**
     * 绑定数据
     * @param selector
     * @param model
     */
    self.bind = function(selector,model) {
        var $selector = $(selector);
        if ($selector.length > 0) {
            $selector.find("[data-field]").each(function (index, dom) {
                var nodeName = dom.nodeName;
                var $dom = $(dom);
                var field = $dom.data("field");
                var value = getModelValue(field, model) || "";
                if (nodeName == "IMG" && value) {
                    $dom.attr("src", value);
                } else if (nodeName == "A" && value) {
                    $dom.attr("href", value);
                } else if (nodeName == "LABEL" || nodeName == "SPAN") {
                    $dom.text(value);
                } else if(nodeName == "INPUT") {
					$dom.val(value);
                } else if (value != undefined) {
                    $dom.html(value);
                }
            });
        }
        return $selector;
    };

    /**
     * 时间选择
     */
    self.daterangepicker = function(selector) {
        var $selector = $(selector);
        if ($selector.length > 0) {
            if($.fn.datepicker){
                $selector.datepicker({
                    autoclose: true,
                    format: "yyyy-mm-dd"
                });
            }
        }
        return $selector;
    };

    return self;

})(anyi.form || {});

/**
 * 将anyi.form变成jQuery扩展
 */
(function ($) {


	/**
	 * 获取一个选择器内有data-field标记的所有值
	 * @returns {*}
	 */
	$.fn.formGetValues = function () {
		var form = anyi.form;
		var args = arguments;
		var method = form["getValues"];

		var newArgs = Array.prototype.slice.call(args, 0);
		newArgs.splice(0, 0, this);
		return method.apply(this, newArgs);
	};

	/**
	 * 设置一个选择器内有data-field标记的所有值
	 * @returns {*}
	 */
	$.fn.formSetValues = function () {
		var form = anyi.form;
		var args = arguments;
		var method = form["setValues"];
		var newArgs = Array.prototype.slice.call(args, 0);
		newArgs.splice(0, 0, this);
		return method.apply(this, newArgs);
	};

	/**
	 * 绑定一个选择器内有data-field标记的所有值
	 * @returns {*}
	 */
	$.fn.formBind = function () {

		var form = anyi.form;
		var args = arguments;
		var method = form["bind"];
		var newArgs = Array.prototype.slice.call(args, 0);
		newArgs.splice(0, 0, this);
		return method.apply(this, newArgs);
	};

	/**
	 * 清空一个选择器内有data-field标记的所有值
	 * @returns {*}
	 */
	$.fn.formEmpty = function () {
		var form = anyi.form;
		var args = arguments;
		var method = form["formEmpty"];
		var newArgs = Array.prototype.slice.call(args, 0);
		newArgs.splice(0, 0, this);
		return method.apply(this, newArgs);
	};

    /**
     * louding 没多少时间写，先将就用
     * @param options
     * @returns {*}
     */
    $.fn.loading = function (options) {

        var defaults = {
            text: '<i class="ace-icon fa fa-spinner fa-spin"></i> 正在加载中……',
            isVal: false
        };

        var methods = {
            close:function () {
                return this.each(function () {
                    $(this).find(".anyi-load-msg").remove()
                });
            },
            build : function ($box,options) {
                var $msg = $box.children(".anyi-load-msg");
                if ($msg.length == 0) {
                    $msg = $("<div class='anyi-load-msg'></div>");
                    if (!options.isVal) {
                        $box.append($msg);
                    }
                }
                options.isVal ? $box.html(options.text) : $msg.html(options.text);
            },
            iFrameLoad : function ($this) {
                $this.on("load",function () {
                    $(this).siblings(".anyi-load-msg").remove();
                });
            },
            init:function () {
                return this.each(function () {
                    var $this = $(this);
                    if (typeof options === "string") {
                        return;
                    }
                    options = $.extend(true, defaults, options, $this.data);
                    var nodeName = this.nodeName;
                    var $box = $this, position;
                    if (nodeName == "IFRAME") {
                        $box = $this.parent();
                    }

                    position = $box.css("position");
                    if (position === "static") {
                        $box.css({"position": "relative"});
                    }
                    methods.build($box, options);
                    if (nodeName == "IFRAME") {
                        methods.iFrameLoad($this);
                    }
                });
            }
        };

        var method = arguments[0];
        var args = arguments;
        if (methods[method]) {
            method = methods[method];
            args = Array.prototype.slice.call(arguments, 1);
        } else if (typeof method === "object" || !method) {
            method = methods.init;
        } else {
            $.error("Method" + method + "does not exist on jQuery.loading");
            return this;
        }
        return method.apply(this, args);
    };

})(jQuery);

/**
 * 日期格式化
 */
anyi.convert = (function(self){


	/**
	 * 日期格式化
	 * @param fmt 格式化参数 yyyy-MM-dd
	 * @returns {*}
	 */
	var formatDate = function (fmt) {
		if(!this || !fmt){
			return "";
		}
		var date = null;
		if (Object.prototype.toString.call(this) === '[object Date]') {
			date = this;
		} else if (Object.prototype.toString.call(this) === '[object String]') {
			date = new Date(this);
			if (isNaN(date)) {
				var reg = /^(1[89]\d\d|2[01][01]\d)[-|\/](1[0-2]|0\d|\d)[-|\/](\d|[0-2]\d|3[01])$/;
				if (this.indexOf("T") > -1) {
					var parts = this.match(/\d+/g);
					var isoTime = Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
					date = new Date(isoTime);
				} else if (reg.test(this)) {
					date = new Date(this.replace(reg, "$2/$3/$1"))
				}
			}
		}
		//其他规则暂时不支持
		if(date === null  || isNaN(date) || date === "Invalid Date") {
			return "";
		}
		var o = {
			"M+": date.getMonth() + 1,                 //月份
			"d+": date.getDate(),                    //日
			"h+": date.getHours(),                   //小时
			"m+": date.getMinutes(),                 //分
			"s+": date.getSeconds(),                 //秒
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度
			"S": date.getMilliseconds()             //毫秒
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	};

    /**
     * 转换为日期时间格式 yyyy-MM-dd HH:mm:ss DEPRECATED 这接口已经弃用，将使用最新的format
	 * @param dateString
     * @returns {*}
     */
    self.convert = function(dateString){
		return formatDate.call(dateString,"yyyy-MM-dd hh:mm:ss");
    };

    /**
     * 转换为日期格式 yyyy-MM-dd DEPRECATED 这接口已经弃用，将使用最新的format
     * @param dateString
     * @returns {*}
     */
    self.convertDate = function(dateString){
		return formatDate.call(dateString,"yyyy-MM-dd");
    };

    if(!String.prototype.format) {
		String.prototype.format = String.prototype.toFormat = Date.prototype.toFormat = function (fmt) {
			//IE9 不支持，必须这么写
			return formatDate.call(this, fmt);
		};

		Number.prototype.toFormat = function (fmt) {
			var date = new Date(this);
			return formatDate.call(date, fmt);
		}
	}

	/**
	 * 字符串转日期
	 */
	if(!String.prototype.toDate) {
		/**
		 * 字符串转日期用于支持IE8
		 */
		String.prototype.toDate = function () {
			var date = new Date(this);
			if (isNaN(date)) {
				var reg = /^(1[89]\d\d|2[01][01]\d)[-|\/](1[0-2]|0\d|\d)[-|\/](\d|[0-2]\d|3[01])$/;
				if (this.indexOf("T") > -1) {
					var parts = this.match(/\d+/g);
					var isoTime = Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
					date = new Date(isoTime);
				} else if (reg.test(this)) {
					date = new Date(this.replace(reg, "$2/$3/$1"))
				}
			}
			return date
		}
	}

	/**
	 * 判断是否日期，正则验证，不严谨
	 */
	if(!String.prototype.isDate) {
		/**
		 * 判断是否为日期格式
		 */
		String.prototype.isDate = function () {
			var date = new Date(this);
			if (date !== "Invalid Date" && date.getTime()) return true;
			return /^(1[89]\d\d|2[01][01]\d)[-|\/](1[0-2]|0\d|\d)[-|\/](\d|[0-2]\d|3[01])$/.test(this);
		}
	}

    if(!String.prototype.toMoney) {
		/**
         * 将分转成功元，四舍五入保留两位小数
         * @type {Number.toMoney}
         */
        String.prototype.toMoney = Number.prototype.toMoney = function () {
            var num = parseFloat(this) || 0;
            return parseFloat(num / 100).toFixed(2);
        }
    }

    return self;
})(anyi.convert || {});


/**
 * 订阅发布器
 */
anyi.sub = (function (self) {

	/**
	 * 订阅器 可以带参数，参数直接写砸后面，如function(subName,callback,param1,param2)
	 * @param subName 订阅名称
	 * @param callback 回调函数
	 */
	self.subscribe = function (subName, callback) {
		if (self[subName] || !Array.isArray(subName)) {
			self[subName] = [];
		}
		if (callback) {
			var args = [];
			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments, 1);
			}
			self[subName].push({fun: callback, param: args});
		}
	};

	/**
	 * 发布
	 */
	self.publish = function (subName) {
		if (self[subName] && $.isArray(self[subName]) && self[subName].length > 0) {
			self[subName].forEach(function (sub) {
				sub.fun && sub.fun.apply(this, sub.param);
			});
		}
	};

	return self;

})(anyi.sub || {});

$(function () {
    anyi && anyi.common.init();
});


