/**
 * Created by libo on 2017/5/25.
 */

var anyi = anyi || {};
anyi.product = anyi.product || {};
anyi.product.auth = (function (self) {

	/**
	 * 设置弹出层的位置
	 * @param $modal
	 */
	var setPosition = function ($modal) {
		var $dialog = $modal.children(".modal-dialog");
		var mHeight = $dialog.height();
		var wHeight = $(window).height();
		if (mHeight < wHeight) {
			var top = parseFloat((wHeight - mHeight)  / 2).toFixed(2);
			$dialog.css({"top": top + "px"});
		} else {
			$dialog.css({"top": "1rem"});
		}
	};

	/**
	 * 模态窗事件
	 */
	var modalEvent = function () {
		//var $modal = this.modal;
		var $modal = $("#modal-auth");
		$modal.validator("destroy").validator({});
		$modal.modal('show');
		$modal.off("click");
		setPosition($modal);
		getVerifyCode();
		if (!$modal.data("init")) {
			tabEvent.call($modal);
			//tabEvent.call(this);
		}
	};

	/**
	 * 获取手机验证码
	 * @param phone 手机号
	 * @param verifyCode 验证码
	 */
	var getPhoneCode = function (phone,verifyCode) {
		return $.ajax({
			url: '/ws_common/phone/getCode',
			type: 'post',
			contentType: "application/json",
			dataType: 'json',
			data: JSON.stringify({"phone": phone, "verifyCode": verifyCode})
		});
	};

	/**
	 * 获取图形验证码
	 */
	var getVerifyCode = function () {
		$.ajax({
			url: "/ws_common/captcha/getCaptcha",
			type: "GET",
			cache: "false",
			headers: {
				"Accept": "image/xvg+xml",
				"Content-Type": "image/xvg+xml"
			},
			dataType: "text"
		}).done(function (data) {
			$("#img-code,#img-code2").html(data).children("svg").removeAttr("width").removeAttr("height").attr({
				"preserveAspectRatio": "xMinYMin meet", "viewBox": "0 0 100 34"
			});
		});
	};

	/**
	 * 验证码倒计时
	 * @param $btn
	 */
	var btnTimer = function ($btn) {
		var text = $.trim($btn.data("text") || $btn.text());
		$btn.data("old", text);
		$btn.addClass("diabled");
		var s = 60;
		var timer = setInterval(function () {
			if (s <= 0) {
				clearInterval(timer);
				$btn.text($btn.data("old")).removeClass("disabled");
				return;
			}
			$btn.text("发送成功（" + s + "）");
			s--;
		}, 1000);
	};

	var defaults = {
		cancel: function () {
			$("#modal-auth").modal("hide");
		},
		cancelText: "跳过",
		getUser:false,
		success: function () {
			$.alert("激活成功");
		}
	};

	/**
	 * tab里面的事件
	 */
	var tabEvent = function () {
		var $modal = this;
		var option = $modal.data("option");
		if (!option) return;
		//var that = this;
		//var $tab = that.modal.find("div.tab");
		var $tab = $modal.find("div.tab");
		if (!!option.cancelText) {
			$tab.find("[data-action='cancel']").text(option.cancelText)
		}
		$tab.anyiTab();

		/**
		 * 获取验证码
		 */
		$tab.on("click", "[data-action='code']", function () {
			var $this = $(this);
			if ($this.hasClass("disabled")) return;
			var $form = $this.closest(".form");
			var model = $form.getFormValues();
			var reg = /^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|7[0-9])\d{8}$/.test(model.phone);
			if (!reg) {
				$form.find("input[data-field='phone']").focus();
				$.pageAlert("请先输入手机号码");
				$this.removeClass("disabled");
				return;
			}
			if (!model.verifyCode) {
				$form.find("input[data-field='verifyCode']").focus();
				$.pageAlert("请输入图形验证码");
				$this.removeClass("disabled");
				return;
			}
			$this.html('发送中 <i class="ace-icon fa fa-spinner fa-spin"></i>').addClass("disabled");
			var promise = getPhoneCode(model.phone, model.verifyCode);
			promise.done(function (data) {
				if (data.code === "0") {
					btnTimer($this);
				} else {
					$this.text($this.data("text")).removeClass("disabled");
					$.pageAlert(data.msg);
				}
			}).fail(function (jqXhr) {
				$.alert(jqXhr);
				$this.text($this.data("text")).removeClass("disabled");
			}).always(function () {
			});
		});

		$tab.on("click", "[data-action='submit']", function () {
			var $this = $(this);
			var type = $this.data("type");
			if ($this.hasClass("disabled")) return;
			$this.addClass("disabled");
			var $form = $this.closest(".form");
			var bsValidator1 = $form.validator("pageValidate").data("bs.validator");
			var hasErrors = bsValidator1.hasErrors() || bsValidator1.isIncomplete();
			if (hasErrors) {
				$this.removeClass("disabled");
				$this.removeClass("disabled");
				return;
			}
			var model = $form.getFormValues();
			var url = type == "1" ? "/ws_customer/userinfo/activation_weixin" : "/ws_customer/userinfo/activation_weixin_noCompany";
			$.ajax({
				url: url,
				type: 'post',
				contentType: "application/json",
				dataType: 'json',
				loading: "激活中",
				data: JSON.stringify(model)
			}).done(function (data) {
				if (data.code === "0") {
					var $modal = $("#modal-auth");
					$modal.modal("hide");
					var option = $modal.data("option");
					var dtd = $.Deferred();
					!option && !option.getUser ? dtd.resolve(option) : self.getUerInfo(option.productId).done(function (data, textStatus, jqXhr) {
						if (data.code === "0" && data.result) {
							$.session("yzb_mobile_user", data.result);
							dtd.resolve(data.result);
						} else {
							dtd.reject(jqXhr);
						}
					}).fail(function (jqXhr) {
						dtd.reject(jqXhr);
					});
					$.when(dtd.promise()).then(function (data) {
						option.success && option.success(data);
					});
				} else {
					$.pageAlert(data.msg);
					//$error.html(data.msg);
				}
			}).fail(function (jqXhr) {
				$.alert(jqXhr)
			}).always(function () {
				$this.removeClass("disabled");
			});
		});

		$tab.on("click", "[data-action='cancel']", function () {
			var option = $("#modal-auth").data("option");
			option && option.cancel && option.cancel();
		});

		$("#img-code,#img-code2").on("click", function () {
			getVerifyCode();
		});
	};

	self.getUerInfo = function (pid) {
		var param = !!pid ? JSON.stringify({product_id: pid}) : null;
		return $.ajax({
			type: "post",
			url: "http://test.core.riskeys.com:8089/ws_order/verify",
			contentType: "application/json; charset=utf-8",
			loading: "加载中……",
			data: param
		});
	};

	/**
	 * 弹窗验证
	 */
	self.modal = function () {
		var option = this;
		var $modal = $("#modal-auth");
		var deferred = $.Deferred();
		if ($modal.length > 0) {
			$modal.data("init", true);
			deferred.resolve($modal);
		} else {
			var wait = function () {
				var dfd = $.Deferred();
				$.get("/static/template/auth.html", function (html) {
					dfd.resolve(html);
				});
				return dfd.promise();
			};
			$.when(wait()).done(function (html) {
				$modal = $(html);
				$("body").append($modal);
				deferred.resolve($modal);
			});
		}
		$.when(deferred.promise()).then(function ($modal) {
			$modal.data("option", option);
			modalEvent();
			//option.modal = $modal;
			//modalEvent.call(option);
		});
	};

	/**
	 * 获取用户信息
	 * @returns {json|*}
	 */
	self.check = self.get = function (option) {
		option = $.extend(true, {}, defaults, option);
		var wait = function (dtd, op) {
			var user = $.session("yzb_mobile_user");
			user ? dtd.resolve(user) : self.getUerInfo(op.productId).done(function (data, textStatus, jqXhr) {
				if (data.code === "0" && data.result) {
					$.session("yzb_mobile_user", data.result);
					dtd.resolve(data.result);
				} else {
					dtd.reject(jqXhr);
				}
			}).fail(function (jqXhr) {
				dtd.reject(jqXhr);
			});
			return dtd.promise();
		};
		var dtd = $.Deferred();
		var noAuth = $.session("yzb_mobile_noauth");
		if (noAuth && option.must !== "yes") {
			wait = function (dtd) {
				dtd.resolve(null);
				return dtd;
			};
		}
		return $.when(wait(dtd, option)).fail(function () {
			if (option.display === "modal") {
				self.modal.call(option);
			} else {

			}
		});
	};

	return self;
})(anyi.product.auth || {});