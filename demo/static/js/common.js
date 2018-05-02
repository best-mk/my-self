/**
 * @name anyi 移动端公共js
 * @create libo
 * @update 2017-7-3
 * 只用于产品库
 */

/**
 * 表单验证
 */
+function ($) {
	'use strict';

	// VALIDATOR CLASS DEFINITION
	// ==========================

	function getValue($el) {
		if($el.is('[type="file"]')) {
			return $el.data("val") || "none";
		}
		return $el.is('[type="checkbox"]') ? $el.prop('checked') :
			$el.is('[type="radio"]') ? !!$('[name="' + $el.attr('name') + '"]:checked').length :
				$.trim($el.val())
	}

	var Validator = function (element, options) {
		this.options = options;
		this.$element = $(element);
		if(this.$element.is(":visible") == true){
			if(options.show){
				this.$inputs = this.$element.find(Validator.INPUT_ALLSELECTOR);
			} else {
				this.$inputs = this.$element.find(Validator.INPUT_SELECTOR);
			}
		} else {
			this.$inputs = this.$element.find(Validator.INPUT_ALLSELECTOR);
		}
		if(options.btn){
			this.$btn = $(options.btn);
		} else {
			this.$btn = $('button[type="submit"], input[type="submit"]')
				.filter('[form="' + this.$element.attr('id') + '"]')
				.add(this.$element.find('input[type="submit"], button[type="submit"]'));
		}
		options.errors = $.extend({}, Validator.DEFAULTS.errors, options.errors);

		for (var custom in options.custom) {
			if (!options.errors[custom]) throw new Error('Missing default error message for custom validator: ' + custom)
		}

		$.extend(Validator.VALIDATORS, options.custom);

		this.$element.attr('novalidate', true); // disable automatic native validation
		this.toggleSubmit();

		this.$element.on('input.bs.validator change.bs.validator focusout.bs.validator', Validator.INPUT_SELECTOR, $.proxy(this.onInput, this));
		this.$element.on('submit.bs.validator', $.proxy(this.onSubmit, this));

		this.$element.find('[data-match]').each(function () {
			var $this = $(this);
			var target = $this.data('match');

			$(target).on('input.bs.validator', function (e) {
				getValue($this) && $this.trigger('input.bs.validator')
			})
		});
	};

	Validator.INPUT_SELECTOR = ':input:not([type="submit"], button):enabled:visible'; //只适用隐藏的

	Validator.INPUT_ALLSELECTOR = ':input:not([type="submit"], button):enabled'; //没有显示的文本框也支持

	Validator.FOCUS_OFFSET = 20;

	Validator.DEFAULTS = {
		delay: 500,
		html: false,
		disable: true,
		focus: true,
		custom: {},
		errors: {
			match: '不一致',
			minlength: '长度不够'
		},
		feedback: {
			success: 'fa-check-circle',
			error: 'fa-times-circle'
		}
	};

	Validator.VALIDATORS = {
		'native': function ($el) {
			var el = $el[0];
			if($el.is('[type="file"]')){
				return true;
			}
			return el.checkValidity ? el.checkValidity() : true
		},
		'match': function ($el) {
			var target = $el.data('match');
			return !$el.val() || $el.val() === $(target).val()
		},
		'minlength': function ($el) {
			var minlength = $el.data('minlength');
			return !$el.val() || $el.val().length >= minlength
		}
	};

	Validator.prototype.onInput = function (e) {
		var self = this;
		var $el = $(e.target);
		var deferErrors = e.type !== 'focusout';
		this.validateInput($el, deferErrors).done(function () {
			self.toggleSubmit()
		})
	};

	Validator.prototype.validateInput = function ($el, deferErrors) {
		var value = getValue($el);
		var prevValue = $el.data('bs.validator.previous');
		var prevErrors = $el.data('bs.validator.errors');
		var errors;

		if (prevValue === value) return $.Deferred().resolve();
		else $el.data('bs.validator.previous', value);

		if ($el.is('[type="radio"]')) $el = this.$element.find('input[name="' + $el.attr('name') + '"]');

		var e = $.Event('validate.bs.validator', {relatedTarget: $el[0]});
		this.$element.trigger(e);
		if (e.isDefaultPrevented()) return;

		var self = this;

		return this.runValidators($el).done(function (errors) {
			$el.data('bs.validator.errors', errors);

			errors.length
				? deferErrors ? self.defer($el, self.showErrors) : self.showErrors($el)
				: self.clearErrors($el);

			if (!prevErrors || errors.toString() !== prevErrors.toString()) {
				e = errors.length
					? $.Event('invalid.bs.validator', {relatedTarget: $el[0], detail: errors})
					: $.Event('valid.bs.validator', {relatedTarget: $el[0], detail: prevErrors});

				self.$element.trigger(e)
			}

			self.toggleSubmit();

			self.$element.trigger($.Event('validated.bs.validator', {relatedTarget: $el[0]}))
		})
	};


	Validator.prototype.runValidators = function ($el) {
		var errors = [];
		var deferred = $.Deferred();
		var options = this.options;

		$el.data('bs.validator.deferred') && $el.data('bs.validator.deferred').reject();
		$el.data('bs.validator.deferred', deferred);

		function getErrorMessage(key) {
			var field = $el.data("placeholder") || $el.attr("placeholder") || $el.prev("label").text();
			var prefix = $el[0].nodeName === "SELECT" || /checkbox|radio|file|date/gi.test($el.attr("type")) ? "请选择" : "请输入";
			prefix = /^请.+$/.test(field) ? "" : prefix;
			var eMsg = field ? prefix + field : ($el.data(key + '-error') || $el[0].validationMessage);
			return (key == 'native' && $el.attr('required') && $el.val() === "" ? eMsg : ($el.data(key + '-error') || $el.data('error') || $el[0].validationMessage))
				|| $el.data(key + '-error')
				|| options.errors[key]
				|| $el.data('error')
				|| key == 'native' && $el[0].validationMessage
		}

		$.each(Validator.VALIDATORS, $.proxy(function (key, validator) {
			if ((getValue($el) || $el.attr('required')) &&
				($el.data(key) || key == 'native') && !validator.call(this, $el)) {
				var error = getErrorMessage(key);
				!~errors.indexOf(error) && errors.push(error)
			}
		}, this));

		if (!errors.length && getValue($el) && $el.data('remote')) {
			this.defer($el, function () {
				var data = {};
				data[$el.attr('name')] = getValue($el);
				$.get($el.data('remote'), data)
					.fail(function (jqXHR, textStatus, error) {
						errors.push(getErrorMessage('remote') || error)
					})
					.always(function () {
						deferred.resolve(errors)
					})
			})
		} else deferred.resolve(errors);

		return deferred.promise();
	};

	Validator.prototype.validate = function () {
		var self = this;
		$.when(this.$inputs.map(function (el) {
			return self.validateInput($(this), false);
		})).then(function () {
			self.toggleSubmit();
			self.focusError();
		});
		return this;
	};

	Validator.prototype.formValidate = function () {
		var self = this;
		$.when(this.$inputs.map(function (el) {
			return self.validateInput($(this), false);
		})).then(function () {
			self.toggleSubmit();
			self.focusError(true);
		});
		return this;
	};

	Validator.prototype.pageValidate = function () {
		var self = this;
		$.when(this.$inputs.map(function (el) {
			return self.validateInput($(this), false);
		})).then(function () {
			self.toggleSubmit();
			self.pageFocusError();
			self.pageShowError();
		});
		return this;
	};

	/**
	 * 浮出层显示错误信息
	 * TODO 多个选择器的时候存在性能问题
	 */
	Validator.prototype.pageShowError = function () {
		var $input = $(".has-error:first :input");
		if ($input.length === 0) return;
		var errors = $input.data("bs.validator.errors");

		if (errors && errors.length > 0) {
			/*this.options.errors = this.options.errors || [];
			 errors.concat(errors);
			 console.log(errors);*/
			clearInterval(this.timer);
			var $body = $("body");
			var $error = $body.children(".page-error");
			if ($error.length === 0) {
				$error = $('<div class="page-error fade-hide hide"><div class="page-error-body"></div></div>');
				$error.off("click").on("click", function () {
					$(this).removeData("show").addClass("hide").removeClass("fade-hide");
				});
				$body.append($error);
			}
			$error.children(".page-error-body").html(errors[0]);
			$error.css({"top":"auto", "left": "auto"}).removeClass("hide");
			var w = $error.width();
			var h = $error.height();
			var winW = $(window).width();
			var winH = $(window).height();
			var top = parseInt((winH - h) / 2);
			var left = parseInt((winW - w) / 2);
			$error.css({top: top, left: left}).removeClass("fade-hide").data("show", true);
			//$error.removeClass("hide fade-hide").data("show", true);

			setTimeout(function () {
				$error.addClass("fade-hide");
			}, 10);

			this.timer = setInterval(function () {
				$error.data("show") && $error.addClass("hide").removeData("show");
			}, 4000);

		}
	};

	Validator.prototype.pageFocusError = function () {
		if (!this.options.focus) return;
		var $input = $(".has-error:first :input");
		if ($input.length === 0) return;
		var top = $input.offset().top;
		if (($input.attr("type") == "radio" || $input.attr("type") == "checkbox") && $input.parent()[0].nodeName == "LABEL") {
			top = $input.parent().offset().top;
		}
		$(document.body).animate({scrollTop: top - Validator.FOCUS_OFFSET}, 250);
	};

	Validator.prototype.focusError = function (inForm) {
		if (!this.options.focus) return;
		var $input;
		if(inForm){
			$input = this.$element.find(".has-error:first :input");
		} else{
			$input = $(".has-error:first :input");
		}
		if ($input.length === 0) return;

		var top  = $input.offset().top;
		if(($input.attr("type") == "radio" || $input.attr("type") == "checkbox") && $input.parent()[0].nodeName == "LABEL" ) {
			top = $input.parent().offset().top;
		}

		$(document.body).animate({scrollTop: top - Validator.FOCUS_OFFSET}, 250);
		$input.focus()
	};

	Validator.prototype.showErrors = function ($el) {
		var method = this.options.html ? 'html' : 'text';
		var errors = $el.data('bs.validator.errors');
		var $group = $el.closest('.form-group');
		var $block = $group.find('.help-block.with-errors');
		var $feedback = $group.find('.form-control-feedback');

		if (!errors.length) return;

		errors = $('<ul/>')
			.addClass('list-unstyled')
			.append($.map(errors, function (error) {
				return $('<li/>')[method](error)
			}));

		$block.data('bs.validator.originalContent') === undefined && $block.data('bs.validator.originalContent', $block.html());
		$block.empty().append(errors);
		$group.addClass('has-error has-danger');

		$group.hasClass('has-feedback')
		&& $feedback.removeClass(this.options.feedback.success)
		&& $feedback.addClass(this.options.feedback.error)
		&& $group.removeClass('has-success')
	};

	Validator.prototype.clearErrors = function ($el) {
		var $group = $el.closest('.form-group');
		var $block = $group.find('.help-block.with-errors');
		var $feedback = $group.find('.form-control-feedback');

		$block.html($block.data('bs.validator.originalContent'));
		$group.removeClass('has-error has-danger');

		$group.hasClass('has-feedback')
		&& $feedback.removeClass(this.options.feedback.error)
		&& getValue($el)
		&& $feedback.addClass(this.options.feedback.success)
		&& $group.addClass('has-success')
	};

	Validator.prototype.hasErrors = function () {
		function fieldErrors() {
			return !!($(this).data('bs.validator.errors') || []).length
		}

		return !!this.$inputs.filter(fieldErrors).length
	};

	Validator.prototype.isIncomplete = function () {
		function fieldIncomplete() {
			return !getValue($(this))
		}

		return !!this.$inputs.filter('[required]').filter(fieldIncomplete).length
	};

	Validator.prototype.onSubmit = function (e) {
		this.validate();
		if (this.isIncomplete() || this.hasErrors()) e.preventDefault()
	};

	Validator.prototype.toggleSubmit = function () {
		if (!this.options.disable) return;
		this.$btn.toggleClass('disabled', this.isIncomplete() || this.hasErrors());
	};

	Validator.prototype.defer = function ($el, callback) {
		callback = $.proxy(callback, this, $el);
		if (!this.options.delay) return callback();
		window.clearTimeout($el.data('bs.validator.timeout'));
		$el.data('bs.validator.timeout', window.setTimeout(callback, this.options.delay))
	};

	Validator.prototype.destroy = function () {
		this.$element
			.removeAttr('novalidate')
			.removeData('bs.validator')
			.off('.bs.validator')
			.find('.form-control-feedback')
			.removeClass([this.options.feedback.error, this.options.feedback.success].join(' '));

		this.$inputs
			.off('.bs.validator')
			.removeData(['bs.validator.errors', 'bs.validator.deferred', 'bs.validator.previous'])
			.each(function () {
				var $this = $(this);
				var timeout = $this.data('bs.validator.timeout');
				window.clearTimeout(timeout) && $this.removeData('bs.validator.timeout')
			});

		this.$element.find('.help-block.with-errors').each(function () {
			var $this = $(this);
			var originalContent = $this.data('bs.validator.originalContent');

			$this
				.removeData('bs.validator.originalContent')
				.html(originalContent)
		});

		this.$element.find('input[type="submit"], button[type="submit"]').removeClass('disabled');

		this.$element.find('.has-error, .has-danger').removeClass('has-error has-danger');

		return this
	};

	// VALIDATOR PLUGIN DEFINITION
	// ===========================


	function Plugin(option) {
		var setting = arguments[1];
		return this.each(function () {
			var $this = $(this);
			var options = $.extend(true, {}, Validator.DEFAULTS, $this.data(), typeof option == 'object' && option, typeof option == 'string' && typeof setting === "object" && setting);
			var data = $this.data('bs.validator');
			if (!data && option == 'destroy') return;
			if (!data) $this.data('bs.validator', (data = new Validator(this, options)));
			if(!data.options.show) {
				data.$inputs = data.$element.find(Validator.INPUT_SELECTOR);
			}
			if (typeof option == 'string') {
				data[option]();
			}
		})
	}

	var old = $.fn.validator;

	$.fn.validator = Plugin;
	$.fn.validator.Constructor = Validator;


	// VALIDATOR NO CONFLICT
	// =====================

	$.fn.validator.noConflict = function () {
		$.fn.validator = old;
		return this
	};


	// VALIDATOR DATA-API
	// ==================

	$(window).on('load', function () {
		$('form[data-toggle="validator"]').each(function () {
			var $form = $(this);
			Plugin.call($form, $form.data())
		})
	})

}(jQuery);

/**
 * 模态窗口
 */
+function ($) {
	'use strict';

	// MODAL CLASS DEFINITION
	// ======================

	var Modal = function (element, options) {
		this.options = options;
		this.$body = $(document.body);
		this.$element = $(element);
		this.$dialog = this.$element.find('.modal-dialog');
		this.$backdrop = null;
		this.isShown = null;
		this.originalBodyPad = null;
		this.scrollbarWidth = 0;
		this.ignoreBackdropClick = false;

		if (this.options.remote) {
			this.$element
				.find('.modal-content')
				.load(this.options.remote, $.proxy(function () {
					this.$element.trigger('loaded.bs.modal')
				}, this))
		}
	};

	Modal.VERSION = '3.3.6';

	Modal.TRANSITION_DURATION = 300;
	Modal.BACKDROP_TRANSITION_DURATION = 150;

	Modal.DEFAULTS = {
		backdrop: true,
		keyboard: true,
		show: true
	};

	Modal.prototype.toggle = function (_relatedTarget) {
		return this.isShown ? this.hide() : this.show(_relatedTarget)
	};

	Modal.prototype.position = function () {



	};

	Modal.prototype.update = function () {
		this.position();
		var dHeight = this.$dialog.height("auto").outerHeight();
		var wHeight = $(window).height();
		var top = parseInt((wHeight - dHeight) / 2);
		this.$dialog.css("top", top);
		var $content = this.$dialog.children(".modal-content");
		var $header = $content.children(".modal-header");
		var hHeight = $header.outerHeight();
		var $body = $content.children(".modal-body");
		var $footer = $content.children(".modal-footer");
		var fHeight = $footer.outerHeight();
		var bHeight = dHeight - hHeight - fHeight;
		$body.outerHeight(bHeight);
	};

	Modal.prototype.show = function (_relatedTarget) {
		var that = this;
		var e = $.Event('show.bs.modal', {relatedTarget: _relatedTarget});

		this.$element.trigger(e);

		if (this.isShown || e.isDefaultPrevented()) return;

		this.isShown = true;

		this.checkScrollbar();
		this.setScrollbar();
		this.$body.addClass('modal-open');

		this.escape();
		this.resize();

		this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

		this.$dialog.on('mousedown.dismiss.bs.modal', function () {
			that.$element.one('mouseup.dismiss.bs.modal', function (e) {
				if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
			})
		});

		this.backdrop(function () {
			var transition = $.support.transition && that.$element.hasClass('fade');

			if (!that.$element.parent().length) {
				that.$element.appendTo(that.$body) // don't move modals dom position
			}

			that.$element
				.show()
				.scrollTop(0);
			that.position();

			that.adjustDialog();

			if (transition) {
				that.$element[0].offsetWidth ;// force reflow
			}

			that.$element.addClass('in');

			that.enforceFocus();

			var e = $.Event('shown.bs.modal', {relatedTarget: _relatedTarget});

			transition ?
				that.$dialog // wait for modal to slide in
					.one('bsTransitionEnd', function () {
						that.$element.trigger('focus').trigger(e)
					})
					.emulateTransitionEnd(Modal.TRANSITION_DURATION) :
				that.$element.trigger('focus').trigger(e)
		})
	};

	Modal.prototype.hide = function (e) {
		if (e) e.preventDefault()

		e = $.Event('hide.bs.modal')

		this.$element.trigger(e)

		if (!this.isShown || e.isDefaultPrevented()) return

		this.isShown = false

		this.escape()
		this.resize()

		$(document).off('focusin.bs.modal')

		this.$element
			.removeClass('in')
			.off('click.dismiss.bs.modal')
			.off('mouseup.dismiss.bs.modal')

		this.$dialog.off('mousedown.dismiss.bs.modal')

		$.support.transition && this.$element.hasClass('fade') ?
			this.$element
				.one('bsTransitionEnd', $.proxy(this.hideModal, this))
				.emulateTransitionEnd(Modal.TRANSITION_DURATION) :
			this.hideModal()
	}

	Modal.prototype.enforceFocus = function () {
		$(document)
			.off('focusin.bs.modal') // guard against infinite focus loop
			.on('focusin.bs.modal', $.proxy(function (e) {
				if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
					this.$element.trigger('focus')
				}
			}, this))
	}

	Modal.prototype.escape = function () {
		if (this.isShown && this.options.keyboard) {
			this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
				e.which == 27 && this.hide()
			}, this))
		} else if (!this.isShown) {
			this.$element.off('keydown.dismiss.bs.modal');
		}
	};

	Modal.prototype.resize = function () {
		if (this.isShown) {
			$(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
		} else {
			$(window).off('resize.bs.modal')
		}
	};

	Modal.prototype.hideModal = function () {
		var that = this;
		this.$element.hide();
		this.backdrop(function () {
			that.$body.removeClass('modal-open');
			that.resetAdjustments();
			that.resetScrollbar();
			that.$element.trigger('hidden.bs.modal')
		})
	};

	Modal.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove()
		this.$backdrop = null
	};

	Modal.prototype.backdrop = function (callback) {
		var that = this;
		var animate = this.$element.hasClass('fade') ? 'fade' : '';

		if (this.isShown && this.options.backdrop) {
			var doAnimate = $.support.transition && animate

			this.$backdrop = $(document.createElement('div'))
				.addClass('modal-backdrop ' + animate)
				.appendTo(this.$body);

			this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
				if (this.ignoreBackdropClick) {
					this.ignoreBackdropClick = false;
					return;
				}
				if (e.target !== e.currentTarget) return;
				this.options.backdrop == 'static'
					? this.$element[0].focus()
					: this.hide();
			}, this));

			if (doAnimate) this.$backdrop[0].offsetWidth ;// force reflow

			this.$backdrop.addClass('in');

			if (!callback) return;

			doAnimate ?
				this.$backdrop
					.one('bsTransitionEnd', callback)
					.emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
				callback()

		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass('in');

			var callbackRemove = function () {
				that.removeBackdrop();
				callback && callback()
			};
			$.support.transition && this.$element.hasClass('fade') ?
				this.$backdrop
					.one('bsTransitionEnd', callbackRemove)
					.emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
				callbackRemove()

		} else if (callback) {
			callback()
		}
	};

	// these following methods are used to handle overflowing modals

	Modal.prototype.handleUpdate = function () {
		this.adjustDialog()
	};

	Modal.prototype.adjustDialog = function () {
		var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
			paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
		})
	}

	Modal.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: '',
			paddingRight: ''
		})
	}

	Modal.prototype.checkScrollbar = function () {
		var fullWindowWidth = window.innerWidth
		if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
			var documentElementRect = document.documentElement.getBoundingClientRect()
			fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
		this.scrollbarWidth = this.measureScrollbar()
	}

	Modal.prototype.setScrollbar = function () {
		var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
		this.originalBodyPad = document.body.style.paddingRight || ''
		if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	}

	Modal.prototype.resetScrollbar = function () {
		this.$body.css('padding-right', this.originalBodyPad)
	}

	Modal.prototype.measureScrollbar = function () { // thx walsh
		var scrollDiv = document.createElement('div')
		scrollDiv.className = 'modal-scrollbar-measure'
		this.$body.append(scrollDiv)
		var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
		this.$body[0].removeChild(scrollDiv)
		return scrollbarWidth
	}


	// MODAL PLUGIN DEFINITION
	// =======================

	function Plugin(option, _relatedTarget) {
		return this.each(function () {
			var $this = $(this)
			var data = $this.data('bs.modal')
			var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

			if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
			if (typeof option == 'string') data[option](_relatedTarget)
			else if (options.show) data.show(_relatedTarget)
		})
	}

	var old = $.fn.modal

	$.fn.modal = Plugin
	$.fn.modal.Constructor = Modal


	// MODAL NO CONFLICT
	// =================

	$.fn.modal.noConflict = function () {
		$.fn.modal = old
		return this
	}


	// MODAL DATA-API
	// ==============

	$(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
		var $this = $(this)
		var href = $this.attr('href')
		var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
		var option = $target.data('bs.modal') ? 'toggle' : $.extend({remote: !/#/.test(href) && href}, $target.data(), $this.data())

		if ($this.is('a')) e.preventDefault()

		$target.one('show.bs.modal', function (showEvent) {
			if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
			$target.one('hidden.bs.modal', function () {
				$this.is(':visible') && $this.trigger('focus')
			})
		})
		Plugin.call($target, option, this)
	})

}(jQuery);

/**
 * jQuery扩展
 */
(function ($) {

	$.cookie = function (name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
		}
		return null;
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

	$.removeCookie = function (name) {
		setCookie(name, "", -1);
	};

	/**
	 * load 模板
	 * @type {string}
	 */
	var loadTemplates = '<div class="loading"><div class="l-dialog"><div class="loading-gif-box"><div class="loading-gif"></div></div></div></div>';

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
	 * ajax全局配置，用于替代之前重载的$.ajax
	 */
	$(document).ajaxSend(function(event, jqXhr, settings) {
		//settings.url = (anyi && anyi.common && anyi.common.ajaxUrl || "") + settings.url;
		settings.loading && buildLoading(settings.loading);
	});

	/**
	 * ajax全局配置，用于替代之前重载的$.ajax
	 */
	$(document).ajaxComplete(function(event, jqXhr, settings) {
		var sStatus = jqXhr.getResponseHeader('sessionstatus');
		if(sStatus === 'timeout') {
			if (anyi.sso) {
				var sso = new anyi.sso();
				sso.mobileLogin();
			} else {
				$.alert("您没有权限访问");
			}
			settings.loading && $("body").children(".loading").addClass("hide");
			return;
		}

		var statusCode = {
			404: function () {
			}, 401: function (jqXHR) {
				if (anyi.sso) {
					var sso = new anyi.sso();
					sso.mobileLogin();
				} else {
					$.alert("您没有权限访问");
				}
			}
		};

		var status = statusCode[jqXhr.status];
		status && status.call(this, jqXhr);
		//隐藏loading
		settings.loading && $("body").children(".loading").addClass("hide");
	});

	/**
	 * 获取url中的参数
	 * @param name
	 * @returns {*}
	 */
	$.getUrlParam = $.url = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return decodeURIComponent(r[2]);
		return null;
	};

	var templates = {
		modal: '' +
		'<div class="modal animated zoomIn modal-alert" id="anyi-modal-alert" tabindex="-1">' +
		'<div class="modal-dialog modal-sm">' +
		'<div class="modal-content">' +
		'<div class="modal-header hide">' +
		'<a class="close" data-dismiss="modal">&times;</a>' +
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
		'<div class="modal-header">' +
		// '<a class="close" data-dismiss="modal">&times;</a>' +
		// '<h4 class="blue bigger"></h4>' +
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
	$.alert = function (text, callback) {
		var tit = "提示";
		var message = "异常";
		if (typeof text === "object") {
			if (text.status === 401) {
				return;
			} else if (text.status === 0) {
				message = "网络异常";
			} else if (text.status === 502) {
				message = "抱歉，您所访问的网站暂时处于维护中。请稍后尝试。";
			} else {
				text = text.responseJSON || text;
				message = text.msg || text.errMsg || text.errmsg || "未知异常，请重试";
			}
		} else if (typeof text === "string" || typeof text === "number") {
			message = text;
		}
		var $alert = $("#anyi-modal-alert");
		if ($alert.length === 0) {
			$alert = $(templates.modal);
			$("body").append($alert);
		}
		$alert.find("div.modal-header>h4").html(tit);
		$alert.find("div.modal-body").html(message);
		var wHeight = $(window).height();
		var top = (wHeight - 150) / 2;
		$alert.children("div.modal-dialog").css("top", top);
		$alert.modal("toggle").off("hide.bs.modal").on("hide.bs.modal", function () {
			callback && callback();
		});
	};

	/**
	 * 安逸新版自动隐藏提示框
	 * @param option
	 * @param callback
	 */
	$.pageAlert = function (option,callback) {
		var msg = (typeof option === "string" && option) || (typeof option === "object" && option.title || "");
		var timer = anyi.timer && anyi.timer.alert;
		clearInterval(timer);
		var $body = $("body");
		var $error = $body.children(".page-error");
		if ($error.length === 0) {
			$error = $('<div class="page-error fade-hide hide"><div class="page-error-body"></div></div>');
			$error.off("click").on("click", function () {
				$(this).removeData("show").addClass("hide").removeClass("fade-hide");
			});
			$body.append($error);
		}
		$error.children(".page-error-body").html(msg);
		$error.css({"top":"auto", "left": "auto"}).removeClass("hide");
		var w = $error.width();
		var h = $error.height();
		var winW = $(window).width();
		var winH = $(window).height();
		var top = parseInt((winH - h) / 2);
		var left = parseInt((winW - w) / 2);
		$error.css({top: top, left: left}).removeClass("fade-hide").data("show", true);

		setTimeout(function () {
			$error.addClass("fade-hide");
		}, 10);
		anyi.timer = anyi.timer || {};
		anyi.timer.alert = setInterval(function () {
			$error.data("show") && $error.addClass("hide").removeData("show");
		}, 4000);
		callback && callback();
	};

	/**
	 * 确认框
	 * @param title
	 * @param text
	 * @param ok
	 * @param cancel
	 */
	$.confirm = function (title, text, ok, cancel) {
		title = title || "提示";
		text = text || "请确认";
		var $confirm = $("#anyi-modal-confirm");
		if ($confirm.length == 0) {
			$confirm = $(templates.confirm);
			$("body").append($confirm);
		}
		$confirm.find("div.modal-header>h4").html(title);
		$confirm.find("div.modal-body").html(text);

		var wHeight = $(window).height();
		var top = (wHeight - 150) / 2;
		$confirm.children("div.modal-dialog").css("top", top);
		$confirm.find(".modal-ok").off("click").on("click", function () {
			ok && ok($(this));
			$("#anyi-modal-confirm").modal("hide")
		});
		$confirm.modal("toggle").off("hide.bs.modal").on("hide.bs.modal", function () {
			cancel && cancel($(this));
		});
	};

	/**
	 * Loading
	 * @param option
	 * @param callback
	 */
	$.loading = function (option,callback) {
		if (typeof option == "string") {
			if (option == "close") {
				$("body").children(".loading").addClass("hide");
			}
		} else if (typeof option == "object" || option == undefined) {
			buildLoading(option);
		}
		callback && callback();
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

	/**
	 * anyiTab
	 * @returns {*}
	 */
	$.fn.anyiTab = $.fn.weiTab = function (options) {

		return this.each(function () {
			var $this = $(this);
			$this.data("anyiTab", options);
			$this.children(".tab-tit").on("click", "li", function () {
				var $li = $(this);
				var $a = $li.children("a");
				if ($li.hasClass("active")) {
					return;
				}
				var $content = $li.closest(".tab-tit").siblings(".tab-content");
				var target = $li.data("target") || $li.attr("data-target") || $a.attr("data-target") || $a.attr("href");
				var $ref = $content.children(target);
				if (target && $ref.length > 0) {
					$ref.siblings().addClass("hide");
					$ref.removeClass("hide");
					$li.siblings().removeClass("active");
					$li.addClass("active");
					var $tab = $this.closest(".tab");
					var option = $tab.data("anyiTab");
					option && option.click && option.click($li);
				}
			});
		});
	}

})(jQuery);

var anyi = anyi || {};


/**
 *
 * 一些公共的方法
 */
anyi.common = (function (self) {

    window.FastClick && FastClick.attach(document.body);

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
     * @returns {{}} 返回模型属性
     */
    self.getValues = function (selector) {
        var model = {};
        var $selector = $(selector);
        if ($selector.length > 0) {
            $selector.find("input,textarea,select").each(function (index, item) {
                getInputValues(model, item, $selector);
            });
        }
        return model;
    };

    /**
     * 设置表单的值
     * @param selector
     * @param model
     */
    self.setValues = function (selector, model) {
        var $selector = $(selector);
        if ($selector.length > 0 && model) {
            $selector.find("input,textarea,select").each(function (index, item) {
                setInputValues(model, item, $selector);
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
        if ($selector.length > 0) {
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
        }
        return $selector;
    };

    /**
     * 绑定数据
     * @param selector
     * @param model
     */
    self.bind = function(selector,model) {
        var $selector = $(selector);
        if ($selector.length > 0) {
            $selector.find("div[data-field],pre[data-field],label[data-field],span[data-field],img[data-field],a[data-field]").each(function (index, dom) {
                var nodeName = dom.nodeName;
                var $dom = $(dom);
                var field = $dom.data("field");
                var value = getModelValue(field,model);
                if(nodeName == "IMG" && value ) {
                    $dom.attr("src", value);
                }else if(nodeName == "A" && value){
                    $dom.attr("href", value);
                } else if(nodeName == "LABEL" || nodeName == "SPAN"){
                    $dom.text(value);
                } else if(value) {
                    $dom.html(value);
                }
            });
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
	$.fn.formGetValues = $.fn.getFormValues = function () {
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
		var method = form["empty"];
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
 * 日期相关方法
 */
anyi.convert = (function (self) {

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
	self.datetime = function(dateString){
		return formatDate.call(dateString,"yyyy-MM-dd hh:mm:ss");
	};

	/**
	 * 转换为日期格式 yyyy-MM-dd DEPRECATED 这接口已经弃用，将使用最新的format
	 * @param dateString
	 * @returns {*}
	 */
	self.date = function(dateString){
		return formatDate.call(dateString,"yyyy-MM-dd");
	};

	if(!String.prototype.format) {
		String.prototype.format = String.prototype.toFormat = Date.prototype.toFormat = Date.prototype.format = function (fmt) {
			//IE9 不支持，必须这么写
			return formatDate.call(this, fmt);
		};
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

	/**
	 * 金额分转元，四舍五入
	 * @param num
	 * @returns {string}
	 */
	self.amount  = function (num) {
		return parseFloat((num || 0) / 100).toFixed(2);
	};

	Number.prototype.amount = function () {
		return self.amount.call(this, this);
	};

	String.prototype.amount = function () {
		return parseFloat(this).amount();
	};


	return self;
})(anyi.convert || {});

/**
 * 一些数据验证
 */
anyi.validator = (function (self) {


	/**
	 * 根据身份证获取性别、出生日期、年龄 自己写的，有bug请联系
	 * @param val
	 * @returns {{sex: string, birdth: string}}
	 */
	self.getBirthday = function (val) {
		if (!val) return null;
		if (val.length != 18) return null;
		var reg = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/;
		if (!reg.test(val)) return null;
		var last = val.substring(val.length - 1);
		var lastNum = self.checkIdLast(val);
		if (last != lastNum) return null;
		var result = {};
		var array = /^(\d{6})(\d{8})(\d{2})(\d{1})(\d{1}|x|X)$/.exec(val);
		result.birth = array[2].replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
		result.sex = array[4] % 2 == 0 ? "女" : "男";
		var bArr = array[2].match(/^(\d{4})(\d{2})(\d{2})$/);
		var date = new Date(bArr[1], bArr[2] - 1, bArr[3]);
		var now = new Date();
		var year = now.getFullYear() - date.getFullYear();
		if (date.getMonth() > now.getMonth()) {
			year--;
		} else if (date.getMonth() == now.getMonth() && date.getDate() > now.getDate()) {
			year--;
		}
		result.age = year;
		return result;
	};




	/**
	 * 18位身份证号最后一位校验
	 * @param Num
	 * @returns {*}
	 */
	self.checkIdLast = function (Num) {
		if (Num.length != 18)
			return false;
		var x = 0;
		var y = '';
		for (i = 18; i >= 2; i--)
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
		for (j = 1; j <= y; j++)
			i *= x;
		return i;
	}

	/**
	 * 获取两个时间的时间差，返回总年数和总天数
	 * @param date1
	 * @param date2
	 * @returns {{year: number, day: number}}
	 */
	self.getDiffDate = function (date1, date2) {
		if (typeof date1 === "string") date1 = date1.toDate();
		if (typeof date2 === "string") date2 = date2.toDate();
		var year = date2.getFullYear() - date1.getFullYear();
		if (date1.getMonth() > date2.getMonth()) {
			year--;
		} else if (date1.getMonth() == date2.getMonth() && date1.getDate() > date2.getDate()) {
			year--;
		}
		var times = date2.getTime() - date1.getTime();
		var day = parseInt(times / (24 * 3600 * 1000));
		return {year: year, day: day};
	};

	return self;

})(anyi.validator || {});


