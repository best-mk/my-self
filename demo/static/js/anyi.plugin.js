"use strict";

var anyi = anyi || {};

anyi.select = (function (self) {

    //var self = {};

    self.defaults = {
		title: "", //标题，为空时，则不显示
		itemClick: function (oldValue, newValue, values) {
			//每次选择一个项回调函数
			//console.log("oldValue:" + oldValue + ",newValue:" + newValue);
		},
		complete: function (values) {
			//全部选择完成回调函数
		},
		scroll: false,
		autoInput: true, //自动往文本框录入
		split: "/", //自动往文本框录入时的分隔符
		showGroup: true, //是否显示左边的菜单
		display: "", //一共有3种显示方式modal(弹窗),bottom(从下推出),input(跟随文本框) //移动端默认为modal，pc默认为input
		inline: false, //项目的显示方式，默认为一行一条,
		must: [],
		fields: []
	};

    var hideBox = function ($box) {
    	setTimeout(function () {
			$box.removeClass("ay-select-box-show");
		},0);
		$("body").children("div.ay-select-scroll").height(0);
        setTimeout(function() {
            $box.parent("div.ay-select-modal").hide();
        }, 500);
    };

    /**
     * 自动录入数据
     */
    var autoInput = function(options) {
        var $input = options.target;
        if (options.autoInput) {
            var inputValue = [];
            var split = options.split;
            for (var v in options.selectValue) {
                if (options.selectValue.hasOwnProperty(v)) {
                    inputValue.push(options.selectValue[v]);
                }
            }
            $input.val(inputValue.join(split));
        }
    };

    /**
     * 改变tab页
     */
    var changeTab = function ($groups, $values, $items, index, options) {

        $values.children(".active").removeClass("active");
        var value = $values.children().eq(index);
        var group = value.data("group");
        if (options && !options.selectValue[group]) {
            value.addClass("active").text("请选择" + value.data("group"));
        }
        $groups.children(".active").removeClass("active");
        $groups.children().eq(index).addClass("active");

        $items.children(".active").removeClass("active");
        var $item = $items.children(".ay-select-item[data-index=" + index + "]");
        $item.addClass("active");
    };

    var resizeBox = function(options, type) {
		var $box = options.box;
		var display = options.display;
		if (display == "input") {
			if (type == "init") {
				if ($box.hasClass("ay-select-box-show")) {
					$box.removeClass("ay-select-box-show");
					return;
				} else {
					$box.addClass("ay-select-box-show");
				}
			} else {
				$box.addClass("ay-select-box-show");
			}
		} else if (display === "modal") {
			$box.parent().show();
			$box.addClass("ay-select-box-show");
		} else if (display === "bottom"){
			setTimeout(function () {
				$box.addClass("ay-select-box-show");
			},0);
		} else {

		}
		var titleHeight = 0;
		if (options.title && options.title != "") {
			var $title = $box.children("div.ay-select-title");
			titleHeight += $title.outerHeight();
		}

		var $items = $box.children("div.ay-select-items");
		if (options.inline) {
			$items.css("height", "auto");
		}

		var setHeight = function ($box, $items) {
			var boxWidth = $box.outerWidth();
			var boxHeight = $box.outerHeight();
			var $values = $box.children("ul.ay-select-values");
			var itemHeight = boxHeight - titleHeight - $values.outerHeight();
			$items.outerHeight(itemHeight);
		};

		if (display === "modal") {
			var boxWidth = $box.outerWidth();
			var boxHeight = $box.outerHeight();
			$box.css({left: "50%", marginLeft: -boxWidth / 2, top: "50%", marginTop: -boxHeight / 2});
		} else if (display === "mobile") {
			if (type == "init") {
				setTimeout(function () {
					$box.addClass("ay-select-box-show");
					if (options.scroll) {
						var $scorll = $("body").children(".ay-select-scroll");
						if ($scorll.length == 0) {
							$scorll = $("<div class='ay-select-scroll'></div>");
							$("body").append($scorll);
						}
						var height = $(document).outerHeight() - options.target.offset().top - 40;
						var bHeight = $box.outerHeight();
						if (bHeight > height) {
							$scorll.height(bHeight - height + options.target.outerHeight());
							$("body").scrollTop($(document).outerHeight());
						}
					}
				}, 20);
			}
		} else if (display === "page") {
			$box.addClass("ay-select-box-show");
			/*var wHeight = $(window).height();
			var headHeight = $box.children(".ay-select-title").outerHeight() + $box.children(".ay-select-values").outerHeight();
			var p = parseFloat(headHeight * 100 / wHeight);
			p = p.toFixed(2);
			$items.height(p + "%");*/
		} else {
			//var $inputBox = $
		}
	};

    var bulidTab = function(options, index, searchKey) {
        /// <summary>生成每页数据</summary>

        var $box = options.box;
        //内容
        var $items = $box.children("div.ay-select-items");
        //左边标题
        var $groups = $box.children("ul.ay-select-groups");
        //上面选择值
        var $values = $box.children("ul.ay-select-values");

        changeTab($groups, $values, $items, index, options);
        var $item = $items.children(".ay-select-item[data-index=" + index + "]");
        var group = options.groups[index];

        var create = function(data) {
			var key = group["key"];
			if (!key) {
				key = "name";
			}
			if (data && $.isArray(data) && data.length > 0) {
				var html = "";
				$(data).each(function (i, item) {
					var dataHtml = [];
					if(options.fields && options.fields.length > 0) {
						$(options.fields).each(function (i, f) {
							if (item[f]) {
								dataHtml.push(" data-" + f + "=" + item[f]);
							}
						})
					}
					html += '<li data-key="' + item[key] + '" ' + dataHtml.join("") + '>' + item[key] + '</li>';
				});
				$item.html(html).data("load", true);
			} else {
				if (options.must === false) {
					hideBox(options.box);
					if (options.complete) {
						//var $active = options.box.children("div.ay-select-items").children("[data-index='" + (index - 1) + "']").children(".active");
						options.complete.call(options.target, options.selectValue, options.values);
						//options.complete(options.selectValue, options.values);
					}
					return;
				} else {
					var $error;
					if (index > 0) {
						var prevGroup = options.groups[index - 1];
						var name = prevGroup["name"];
						$error = $("<li class=\"ay-select-no\">" + options.selectValue[name] + "下找不到任何" + group["name"] + "</li>").on("click", function (e) {
							e.stopPropagation();
						});
					} else {
						$error = $("<li class=\"ay-select-no\">找不到任何" + group["name"] + "</li>").on("click", function (e) {
							e.stopPropagation();
						});
					}
					$item.empty().append($error);
				}
			}
			resizeBox(options);
		};

        if (group && group.get) {
			var $load = $("<li>正在加载数据中……</li>").on("click", function (e) {
				e.stopPropagation();
			});
			$item.append($load);
			group.get.call(options, searchKey, options.selectValue, create);
			//group.get(searchKey, options.selectValue, create);
		}
    };

    var control = function ($this, options) {
        var $modal = $("body").children("div.ay-select-modal");
        if ($modal.length == 0) {
            $modal = $("<div class=\"ay-select-modal\"></div>");
            $("body").append($modal);
        }
        var selectId = new Date().valueOf() + Math.random();
        $this.attr("data-select", selectId);
        options.selectId = selectId;
        
        var html = "<div class=\"ay-select-box\" id=\"" + selectId + "\">" +
            "<div class=\"ay-select-title\"><span></span><div class=\"ay-select-close\"></div></div>" +
            "<ul class=\"ay-select-values\">" +
            "</ul>" +
            "<ul class=\"ay-select-groups\">" +
            "</ul>" +
            "<div class=\"ay-select-items\"></div>" +
            "</div>";

        var $box = $(html);

        if(options.display == "input") {
            var $inputBox = $this.parent();
            if ($inputBox.css("position") == "static") {
                $inputBox.css("position", "relative")
            }
            $inputBox.append($box);
        } else{
            $modal.append($box);
        }

        var $close = $box.find("div.ay-select-title > .ay-select-close");
        $close.on("click", function () {
            var $b = $(this).closest(".ay-select-box");
            hideBox($b);
        });
        options.mobile = ("ontouchstart" in window);
		var cfg = {
			"modal": "ay-select-pc", "bottom": "ay-select-mobile", "input": "ay-select-input", "page": "ay-select-page"
		};
		if(!options.display) {
			options.display = options.mobile ? "bottom" : "modal";
		}
		$box.addClass(cfg[options.display]);
		if(options.display === "input") {
			options.title = null;
		}
        var $title = $box.children("div.ay-select-title");
        if (!!options.title) {
            $title.addClass("ay-select-title-show");
            $title.children("span").text(options.title);
        } else {
            $title.removeClass("ay-select-title-show");
        }
        if (!options.showGroup) {
            $box.addClass("ay-select-group-hide");
        }

        if (options.inline) {
            $box.addClass("ay-select-inline");
        }
        var $items = $box.children("div.ay-select-items");
        var $groups = $box.children("ul.ay-select-groups");
        var $values = $box.children("ul.ay-select-values");

        $groups.on("click", "li", function() {
            var $group = $(this);
            var index = $group.data("index");
            if (index != undefined) {
                var $thisItems = $group.parent().next(".ay-select-items");
                var $item = $thisItems.children().eq(index);
                if ($item.data("load") == true) {
                    var $thisValues = $thisItems.siblings("ul.ay-select-values");
                    var $value = $thisValues.children().eq(index);
                    if ($item.length > 0 && $value.length > 0) {
                        $thisValues.children("li.active").removeClass("active");
                        $value.addClass("active");
                        $item.siblings("ul.active").removeClass("active");
                        $item.addClass("active");
                        $group.siblings("li.active").removeClass("active");
                        $group.addClass("active");
                        var $li = $item.children(".active");
                        if ($li.length > 0) {
                            $thisItems.scrollTop($li.position().top);
                        }
                    }
                }
            }
        });

        $values.on("click", "li", function() {
            var $value = $(this);
            var index = $value.data("index");
            if (index != undefined) {
                var $thisItems = $value.parent().siblings(".ay-select-items");
                var $item = $thisItems.children().eq(index);
                var $thisGroups = $thisItems.siblings("ul.ay-select-groups");
                var $group = $thisGroups.children().eq(index);
                if ($item.length > 0 && $group.length > 0) {
                    $thisGroups.children("li.active").removeClass("active");
                    $group.addClass("active");
                    $item.siblings("ul.active").removeClass("active");
                    $item.addClass("active");
                    var $li = $item.children(".active");
                    if ($li.length > 0) {
                        $thisItems.scrollTop($li.position().top);
                    }
                    $value.siblings("li.active").removeClass("active");
                    $value.addClass("active");
                }
            }
        });

        options.target = $this;
        options.box = $box;

        if (options.groups && options.groups.length > 0) {

            options.count = options.groups.length;
            var gHtml = "";
            var vHtml = "";
            var iHtml = "";
            var titles = [];

            $(options.groups).each(function(index, item) {
                gHtml += "<li data-group=\"" + item["name"] + "\" data-index=\"" + index + "\">" + item["name"] + "</li>";
                vHtml += "<li data-group=\"" + item["name"] + "\" data-index=\"" + index + "\"></li>";
                iHtml += "<ul data-group=\"" + item["name"] + "\" data-index=\"" + index + "\" class=\"ay-select-item\"></ul>";
                titles.push(item["name"]);
            });
            options.titles = titles;
            options.selectValue = {};
            $groups.html(gHtml);
            $values.html(vHtml);
            $items.html(iHtml);
			options.values = {};

            $items.children("ul").on("click", "li", function() {
                var $thisLi = $(this);
                var liKey = $thisLi.data("key");
                var $item = $thisLi.parent();
                var i = $item.data("index");
				var liData = $thisLi.data();

                var $thisItems = $item.parent();
                var $thisValues = $thisItems.siblings("ul.ay-select-values");
                var $thisGroups = $thisValues.siblings("ul.ay-select-groups");
                
                var $value = $thisValues.children("li").eq(i);
                $value.text(liKey);
                var name = options.titles[i];
                $thisLi.siblings(".active").removeClass("active");
                $thisLi.addClass("active");
                var oldValue = options.selectValue[name];
                options.selectValue[name] = liKey;
				options.values[name] = liData;
                if (options.itemClick) {
					options.itemClick(oldValue, liKey, options.selectValue);
				}
                if (oldValue === liKey) {
                    autoInput(options);
                    if (i + 1 >= options.count) {
                        hideBox(options.box);
                        if (options.complete) {
							//options.complete(options.selectValue, options.values);
							options.complete.call(options.target, options.selectValue, options.values);
						}
                    } else {
                        changeTab($thisGroups, $thisValues, $thisItems, i + 1, options);
                    }
                } else {
					for (var j = i + 1; j < options.count; j++) {
						var dName = options.titles[j];
						if (options.selectValue.hasOwnProperty(dName)) {
							delete options.selectValue[dName];
							delete options.values[dName];
						}
						$thisValues.children().eq(j).empty();
						$thisItems.children().eq(j).empty().removeData("load");
					}
					autoInput(options);
					if (i + 1 >= options.count) {
						hideBox(options.box);
						if (options.complete) {
							//options.complete(options.selectValue, options.values);
							options.complete.call(options.target, options.selectValue, options.values);
						}
					} else {
						bulidTab(options, i + 1, liKey);
					}
				}
               
            });

            $this.data("anyiSelect", options);
        }
    };

    self.build = function ($this, settings) {

        control($this, settings);

        $this.off("focus").on("focus",function () {
            $(this).blur();
        });

        $this.css({ cursor: "pointer" }).off("click").on("click", function () {

            var $input = $(this);

            var options = $input.data("anyiSelect");
            var selectId = options.selectId;

            if (options && selectId) {
                if(options.display != "input") {
                    $("body").children("div.ay-select-modal").show();
                }
                //options.input = $input;
                resizeBox(options, "init");
                var $box = options.box;
                var $items = $box.children("div.ay-select-items");
                
                if (!$items.children().eq(0).data("load")) {
                    bulidTab(options, 0, "");
                }
            }
            return true;
        });

        return $this;
    };

    self.init = function (options) {
        /// <summary>初始化</summary>
        return this.each(function () {
            var $this = $(this);
            // 尝试去获取settings，如果不存在，则返回“undefined”
            var settings = $this.data("anyiSelect");
            // 如果获取settings失败，则根据options和default创建它
            if (typeof settings === "undefined") {
                settings = $.extend({}, self.defaults, options, $this.data());
            } else {
                settings = $.extend({}, settings, options);
            }
            //$this.data("anyiSelect", settings);
            return self.build($this, settings);
        });
    };

    return self;


})(anyi.select || {});

/**
 * 安逸城市选择
 * 一两个小时改的，很多不完善
 */
anyi.city = (function (self) {
	'use strict';

	var modalHtml = '<div class="page-modal" id="page-modal-city">' +
		'<div class="p-modal-content">' +
		'<div class="p-modal-header">' +
		'<h3 class="">选择城市</h3>' +
		'<div class="page-modal-close" data-action="close">' +
		'<i class="fa fa-times-circle"></i>' +
		'</div>' +
		'</div>' +
		'<div class="p-modal-body no-padding">' +
		'<div class="citys" id="citys">' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>';

	var Modal = function (element, options) {
		this.options = options;
		this.$body = $(document.body);
		this.$target = $(element);
		var $modal = $("#page-modal-city");
		if ($modal.length == 0) {
			$modal = $(options.modalHtml);
			var $container = this.$body.children(".container");
			if ($container.length > 0) {
				$container.append($modal);
			} else {
				$("body").append($modal);
			}
		}
		this.$element = $modal;
		this.isShown = null;
	};

	Modal.DEFAULTS = {
		show: true,
		title: "城市选择",
		complete: function (value) {/*全部选择完成回调函数*/},
		data: window.citys || {},
		modalHtml: modalHtml
	};

	Modal.prototype.build = function (_relatedTarget) {
		var that = this;

		if (!this.load) {
			var html = "";
			var options = this.options;
			if (options.title) {
				this.$element.find("div.p-modal-header > h3").html(options.title);
			}
			for (var d in options.data) {
				if (options.data.hasOwnProperty(d)) {
					var item = options.data[d];
					if ($.isArray(item) && item.length > 0) {
						var listHtml = '';
						item.forEach(function (val, index) {
							if (typeof val === "object") {
								listHtml += '<p data-id="' + val.id + '" data-name="' + val.n + '">' + val.n + '</p>';
							} else if (typeof val === "string") {
								listHtml += '<p data-name="' + val + '">' + val + '</p>';
							}
						});
						html += '<div class="city-list">' +
							'<span class="city-letter" id="span-' + d + '">' + d + '</span>' +
							listHtml +
							'</div>';
					}
				}
			}
			this.$element.find("div.citys").html(html).find(".city-list > p").off("click").on("click", $.proxy(this.select, this));
			this.load = true;
		} else {
		}
	};
	
	Modal.prototype.select = function (e) {
		if (e) e.preventDefault();
		var $p = $(e.currentTarget);
		var cityId = $p.data("id");
		var name = $p.data("name");
		this.$target.data("cityId", cityId).val(name);
		this.options.complete && this.options.complete(name);
		this.hide();
	};
	
	Modal.prototype.toggle = function (_relatedTarget) {
		return this.isShown ? this.hide() : this.show(_relatedTarget)
	};

	Modal.prototype.setScroll = function () {
		var hHeight = this.$element.find("div.p-modal-header").outerHeight() || 0;
		var fHeight = this.$element.find("div.p-modal-footer").outerHeight() || 0;
		var $body = this.$element.find("div.p-modal-body");
		var wHeight = $(window).height();
		var bHeight = wHeight - hHeight - fHeight;
		$body.height(bHeight).css("overflowY", "auto");
	};

	Modal.prototype.show = function (_relatedTarget) {
		var that = this;
		var e = $.Event('show.city', {relatedTarget: _relatedTarget});
		this.$element.trigger(e);
		if (this.isShown || e.isDefaultPrevented()) return;
		this.isShown = true;
		var scrollTop = this.$body.scrollTop(); //记住滑动位置
		this.$body.data("scrollTop", scrollTop);
		var wHeight = $(window).height();
		this.$element.css("position", "fixed").addClass("show-top");
		setTimeout(function () {
			that.$element.addClass("show");
		},0);
		this.setScroll();
		setTimeout(function () {
			if(that.isShown){
				that.$body.addClass("modal-open").height(wHeight).scrollTop(0);
			}
		}, 300);
		this.$element.on('click.dismiss.city', '[data-action="close"]', $.proxy(this.hide, this));
		$(window).on("hashchange.city", $.proxy(this.hashchange, this));
		location.href = "#doc";
	};

	Modal.prototype.hashchange = function () {
		var hash = location.hash;
		if (hash != "#doc" && this.isShown == true) {
			this.hide();
			this.$body.removeClass("modal-open").height("auto")
		}
	};

	Modal.prototype.hide = function (e) {
		var that = this;
		if (e) e.preventDefault();
		e = $.Event('hide.city');
		this.$element.trigger(e);
		if (!this.isShown || e.isDefaultPrevented()) return;
		this.isShown = false;
		var scrollTop = this.$body.data("scrollTop") || 0;
		this.$body.removeClass("modal-open").height("auto").scrollTop(scrollTop);
		$(window).off("hashchange.city");
		this.$element.removeClass('show').off('click.dismiss.city');
		setTimeout(function () {
			that.$element.removeClass('show-top');
			if(location.hash == "#doc"){
				history.back();
			}
		}, 300);
	};
	
	Modal.prototype.init = function (e) {
		var $this = $(this);
		//this.$element
		this.$target.off("focus").on("focus", function () {
			$(this).blur();
			return false;
		});
		this.build(e);
		this.$target.off("click").on("click", $.proxy(this.toggle,this));
	};

	function Plugin(option, _relatedTarget) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data('anyi.city');
			var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);
			if (!data) $this.data('anyi.city', (data = new Modal(this, options)));
			if (typeof option == 'string') data[option](_relatedTarget);
			else data.init(_relatedTarget)
		});
	}

	self = Plugin;
	return self;
})(anyi.city || {});

/**
 * 安逸全屏弹窗
 * TODO 没有多余时间， 拿bootstrap的modal改的
 */
anyi.pageModal = function (self) {
	'use strict';
	var Modal = function (element, options) {
		this.options = options;
		this.$body = $(document.body);
		this.$element = $(element);
		this.isShown = null;
	};

	Modal.TRANSITION_DURATION = 300;
	Modal.BACKDROP_TRANSITION_DURATION = 150;

	Modal.DEFAULTS = {
		show: true
	};

	Modal.prototype.toggle = function (_relatedTarget) {
		return this.isShown ? this.hide() : this.show(_relatedTarget)
	};

	Modal.prototype.setScroll = function () {
		var hHeight = this.$element.find("div.p-modal-header").outerHeight() || 0;
		var fHeight = this.$element.find("div.p-modal-footer").outerHeight() || 0;
		var $body = this.$element.find("div.p-modal-body");
		var wHeight = $(window).height();
		var bHeight = wHeight - hHeight - fHeight;
		$body.height(bHeight).css("overflowY", "auto");
	};

	Modal.prototype.show = function (_relatedTarget) {
		var that = this;
		var e = $.Event('show.modal', {relatedTarget: _relatedTarget});
		this.$element.trigger(e);
		if (this.isShown || e.isDefaultPrevented()) return;
		this.isShown = true;
		var scrollTop = this.$body.scrollTop(); //记住滑动位置
		this.$body.data("scrollTop", scrollTop);
		var wHeight = $(window).height();
		//this.$body.addClass("modal-open").css("position","relative").height(wHeight).scrollTop(0);
		this.$element.css("position", "fixed").addClass("show-top");
		setTimeout(function () {
			that.$element.addClass("show");
		},0);
		this.setScroll();
		setTimeout(function () {
			if(that.isShown){
				that.$body.addClass("modal-open").height(wHeight).scrollTop(0);
			}
		}, 300);
		this.$element.on('click.dismiss.modal', '[data-action="close"]', $.proxy(this.hide, this));
		$(window).on("hashchange.modal", $.proxy(this.hashchange, this));
		location.href = "#doc";
	};

	Modal.prototype.hashchange = function () {
		var hash = location.hash;
		if (hash != "#doc" && this.isShown == true) {
			this.hide();
			this.$body.removeClass("modal-open").height("auto")
		}
	};

	Modal.prototype.hide = function (e) {
		var that = this;
		if (e) e.preventDefault();
		e = $.Event('hide.modal');
		this.$element.trigger(e);
		if (!this.isShown || e.isDefaultPrevented()) return;
		this.isShown = false;
		var scrollTop = this.$body.data("scrollTop") || 0;
		this.$body.removeClass("modal-open").height("auto").scrollTop(scrollTop);
		$(window).off("hashchange.modal");
		this.$element.removeClass('show').off('click.dismiss.modal');
		setTimeout(function () {
			that.$element.removeClass('show-top');
			if(location.hash == "#doc"){
				history.back();
			}
		}, 300);
	};

	function Plugin(option, _relatedTarget) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data('anyi.page');
			var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);

			if (!data) $this.data('anyi.page', (data = new Modal(this, options)));
			if (typeof option == 'string') data[option](_relatedTarget);
			else if (options.show) data.show(_relatedTarget)
		})
	}

	$(document).on('click.page.data-api', '[data-toggle="page"]', function (e) {
		var $this = $(this);
		var href = $this.attr('href');
		var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) ;
		var option = $target.data('anyi.page') ? 'toggle' : $.extend({remote: !/#/.test(href) && href}, $target.data(), $this.data());

		var html = $this.data("html");
		var load = $this.data("load");
		if (html) {
			$target.find(".p-modal-body").load(html, function (response, status, xhr) {
				if (!load)  return;
				if (typeof load === "string") {
					var f = new Function(load + ".apply(this,arguments)");
					f.apply(this, arguments);
				} else if (typeof load === "function") {
					load.apply(this, arguments);
				}
			});
		}
		if ($this.is('a')) e.preventDefault();

		$target.one('show.modal', function (showEvent) {
			if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
			$target.one('hidden.bs.modal', function () {
				$this.is(':visible') && $this.trigger('focus')
			})
		});
		Plugin.call($target, option, this)
	});

	self = Plugin;
	return self;
}(anyi.pageModal || {});

anyi.calendar = function (self) {
	'use strict';

	////'<div class="page-modal page-calendar" id="page-modal-calendar">' +
	var modalHtml = ''+
		'<div class="page-modal-fixed model-hide page-calendar" id="page-modal-calendar">' +
		'<div class="p-modal-content">' +
		'<div class="p-modal-header">' +
		'<h3 class="">选择日期</h3>' +
		'<div class="page-modal-close" data-action="close">' +
		'<i class="fa fa-times-circle"></i>' +
		'</div>' +
		'</div>' +
		'<div class="p-modal-body no-padding">' +
		'<div class="anyi-calendar" >' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>';

	var Modal = function (element, options) {
		this.options = options;
		this.$body = $(document.body);
		this.$target = $(element);

		var calendarId = this.$target.data("calendarid");
		if (!calendarId) {
			calendarId = new Date().valueOf() + Math.random();
			this.$target.attr("data-calendarid", calendarId);
		}
		options.calendarId = calendarId;
		var $modal = this.$body.children("#anyi-calendar" + calendarId);
		if ($modal.length == 0) {
			$modal = $(options.modalHtml).attr("id", "#anyi-calendar" + calendarId);
			var $container = this.$body.children(".container");
			if ($container.length > 0) {
				$container.append($modal);
			} else {
				$("body").append($modal);
			}
		}
		this.$element = $modal;
		this.isShown = null;

	};

	Modal.DEFAULTS = {
		show: true,
		title: "日期选择",
		complete: function (value) {/*全部选择完成回调函数*/
		},
		data: window.citys || {},
		modalHtml: modalHtml,
		range: {year: 0, month: 0, day: 0}, //日历范围，三个参数组合, 如果有data-minday 类似参数，优先级将高于range
		start: new Date(), //开始时间，日历可选日期不包含这天。
		showMonthCount: 0 //日历显示多少个月，首先根据开始时间和结束时间算出一个月数，如果showMonthCount > 计算出的月数，将使用这个
	};


	Modal.prototype.create = function () {

		var createWeek = function () {
			var weekDays = ["一", "二", "三", "四", "五", "六", "日"];
			var html = "";
			html += "<ul class=\"week-box clearfix\">";
			for (var j = 0; j < weekDays.length; j++) {
				html += "<li><span class=\"week\">" + weekDays[j] + "</span></li>";
			}
			html += "</ul>";
			return html;
		};

		var createCalendar = function (pYear, pMonth, startWeek, startDay, endDay) {
			if (startWeek == 0) startWeek = 7;
			var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			if (((pYear % 4 === 0) && (pYear % 100 !== 0)) || (pYear % 400 === 0)) monthDays[1] = 29;
			if (pMonth < 0) pMonth = 0;
			if (pMonth > 11) pMonth = pMonth - 12;
			var dateData = 1;
			var html = "";
			var monthText = pYear + "年" + (pMonth + 1) + "月";
			var now = new Date();
			var monthVal = pYear + "-" + ((pMonth + 1) < 10 ? "0" + (pMonth + 1) : (pMonth + 1));
			html += "<ul data-month='" + monthVal + "' class=\"calendar clearfix\">";
			html += "<li data-month='" + monthVal + "' class='month'><span class=\"\">" + monthText + "</span></li>";
			for (var k = 1; k < monthDays[pMonth] + startWeek; k++) {
				if (k < startWeek) {
					html += "<li class='day-disabled'><span class=\"day\"></span></li>";
				} else if ((startDay && dateData < startDay) || (endDay && dateData > endDay) || (startDay === "all" && endDay === "all")) {
					if(dateData === now.getDate() && pMonth === now.getMonth() && pYear === now.getFullYear()){
						html += "<li class='day-disabled' data-day=\"" + dateData + "\"><span class=\"day\">今天</span></li>";
					} else {
						html += "<li class='day-disabled' data-day=\"" + dateData + "\"><span class=\"day\">" + dateData + "</span></li>";
					}
					dateData++;
				} else if (startDay && dateData === now.getDate()) {
					html += "<li class='day-disabled' data-day=\"" + dateData + "\"><span class=\"day\">今天</span></li>";
					dateData++;
				} else {
					html += "<li data-day=\"" + dateData + "\"><span class=\"day\">" + dateData + "</span></li>";
					dateData++;
				}
			}
			html += "</ul>";
			return html;
		};

		//日期，控件中的min-day等属性的，优先级高于range中的配置
		if (typeof this.options.start === "string") {
			this.options.start = new Date(this.options.start)
		}
		var start = new Date(this.options.start.getTime());

		var minDay = this.options["minday"] || 0;
		var minMonth = this.options["minmonth"] || 0;
		var minYear = this.options["minyear"] || 0;
		minYear > 0 && start.setFullYear(start.getFullYear() + minYear);
		minMonth > 0 && start.setMonth(start.getMonth() + minMonth);
		minDay > 0 && start.setDate(start.getDate() + minDay);

		var maxDay = this.options["maxday"] || 0;
		var maxMonth2 = this.options["maxmonth"] || 0;
		var maxYear = this.options["maxyear"] || 0;
		var range = this.options.range;
		range.day = maxDay > 0 ? maxDay : range.day;
		range.month = maxMonth2 > 0 ? maxMonth2 : range.month;
		range.year = maxYear > 0 ? maxYear : range.year;
		var end = new Date(this.options.start.getTime());
		if (range.year == 0 && range.month == 0 && range.day == 0) {
			range.year = 1;
		}
		range.year > 0 && end.setFullYear(end.getFullYear() + range.year);
		range.month > 0 && end.setMonth(end.getMonth() + range.month);
		range.day > 0 && end.setDate(end.getDate() + range.day);

		var totalMonth;
		if(start.getFullYear() == end.getFullYear() && start.getMonth() == end.getMonth() ) {
			totalMonth = 1;
		} else if(range.year == 0 && range.month == 0 && range.day + start.getDate() > new Date(start.getFullYear(),start.getMonth()+1,0).getDate()) {
			totalMonth = range.year * 12 + range.month + parseInt(range.day / 31) + 2;
		} else {
			totalMonth = range.year * 12 + range.month + parseInt(range.day / 31) + 1;
		}

		var html = createWeek();
		var sYear = start.getFullYear();
		var sMonth = start.getMonth();
		var maxMonth = Math.max(this.options.showMonthCount,totalMonth);
		for (var m = 0; m < maxMonth; m++) {
			var date = new Date(sYear, sMonth + m, 1);
			if(m + 1 > totalMonth){
				html += createCalendar(date.getFullYear(), date.getMonth(), date.getDay(), "all", "all");
			} else if (m == 0 && totalMonth > 1) {
				html += createCalendar(date.getFullYear(), date.getMonth(), date.getDay(), start.getDate());
			} else if (m == 0 && totalMonth == 1) {
				html += createCalendar(date.getFullYear(), date.getMonth(), date.getDay(), start.getDate(), end.getDate());
			} else if ((date.getFullYear() == end.getFullYear() && date.getMonth() == end.getMonth()) || m == maxMonth - 1) {
				html += createCalendar(date.getFullYear(), date.getMonth(), date.getDay(), null, end.getDate());
			} else {
				html += createCalendar(date.getFullYear(), date.getMonth(), date.getDay());
			}
			if (maxMonth <= totalMonth && date > end) {
				break;
			}
		}

		var $calendar = this.$element.find(".anyi-calendar");
		$calendar.html(html);
	};

	Modal.prototype.setValue = function (val) {
		if(!!val) {
			var r = /^(\d{4}-\d{1,2})-(\d{1,2})$/.exec(val);
			if (r && r.length == 3) {
				var day = Math.abs(r[2]);
				this.$element.find("li.active").removeClass("active");
				this.$element.find("ul[data-month='" + r[1] + "']").children("li[data-day='" + day + "']").addClass("active");
			}
		}
	};

	Modal.prototype.build = function (_relatedTarget) {
		var that = this;
		if (!this.load) {
			var html = "";
			var options = this.options;
			if (options.title) {
				this.$element.find("div.p-modal-header > h3").html(options.title);
			}
			this.create();
			this.setValue(this.$target.val());
			this.$element.find("ul.calendar > li").off("click").on("click", $.proxy(this.select, this));
			this.load = true;
		} else {

		}
	};

	Modal.prototype.select = function (e) {
		if (e) e.preventDefault();
		var $li = $(e.currentTarget);
		if($li.hasClass("day-disabled") || $li.hasClass("month")) return;
		var month = $li.siblings(".month").data("month");
		var day = $li.data("day");
		day = parseInt(day) < 10 ? "0" + day : day;
		var full = month + "-" + day;
		this.$target.val(full);
		this.$element.find("li.active").removeClass("active");
		$li.addClass("active");
		this.options.complete && this.options.complete(full);
		this.hide();
	};

	Modal.prototype.toggle = function (_relatedTarget) {
		return this.isShown ? this.hide() : this.show(_relatedTarget)
	};

	Modal.prototype.setScroll = function () {
		var hHeight = this.$element.find("div.p-modal-header").outerHeight() || 0;
		var fHeight = this.$element.find("div.p-modal-footer").outerHeight() || 0;
		var $body = this.$element.find("div.p-modal-body");
		var wHeight = $(window).height();
		var bHeight = wHeight - hHeight - fHeight;
		$body.height(bHeight).css("overflowY", "auto"); //.scrollTop(0)
	};

	Modal.prototype.show = function (_relatedTarget) {
		var that = this;
		var e = $.Event('show.calendar', {relatedTarget: _relatedTarget});
		this.$element.trigger(e);
		if (this.isShown || e.isDefaultPrevented()) return;
		this.isShown = true;
		this.setValue(this.$target.val());

		var scrollTop = this.$body.scrollTop(); //记住滑动位置
		this.$body.data("scrollTop", scrollTop);
		var wHeight = $(window).height();
		this.$element.removeClass("hide-top");
		this.$element.removeClass("model-hide");
		this.setScroll();
		setTimeout(function () {
			if(that.isShown){
				that.$body.addClass("modal-open").height(wHeight).scrollTop(0);
			}
		}, 300);
		this.$element.on('click.dismiss.calendar', '[data-action="close"]', $.proxy(this.hide, this));
		$(window).on("hashchange.calendar", $.proxy(this.hashchange, this));
		location.href = "#doc";
	};

	Modal.prototype.hashchange = function () {
		var hash = location.hash;
		if (hash != "#doc" && this.isShown == true) {
			this.hide();
			this.$body.removeClass("modal-open").height("auto")
		}
	};

	Modal.prototype.hide = function (e) {
		var that = this;
		if (e) e.preventDefault();
		e = $.Event('hide.calendar');
		this.$element.trigger(e);
		if (!this.isShown || e.isDefaultPrevented()) return;
		this.isShown = false;
		var scrollTop = this.$body.data("scrollTop") || 0;
		this.$body.removeClass("modal-open").height("auto").scrollTop(scrollTop);
		$(window).off("hashchange.calendar");
		this.$element.addClass('model-hide').off('click.dismiss.calendar');
		setTimeout(function () {
			that.$element.addClass('hide-top');
			if (location.hash == "#doc") {
				history.back();
			}
		}, 300);

		/*this.$element.removeClass('show').off('click.dismiss.calendar');
		 setTimeout(function () {
		 that.$element.removeClass('show-top');
		 if(location.hash == "#doc"){
		 history.back();
		 }
		 }, 300);*/
	};

	Modal.prototype.init = function (e) {
		var $this = $(this);
		//this.$element
		this.$target.off("focus").on("focus", function () {
			$(this).blur();
			return false;
		});
		this.build(e);
		this.$target.off("click").on("click", $.proxy(this.toggle, this));
	};

	function Plugin(option, _relatedTarget) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data('anyi.calendar');
			var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);
			if (!data) $this.data('anyi.calendar', (data = new Modal(this, options)));
			if (typeof option == 'string') data[option](_relatedTarget);
			else data.init(_relatedTarget)
		});
	}

	self = Plugin;
	return self;
}(anyi.calendar || {});

(function ($) {

	$.fn.anyiSelect = function () {
		var method = arguments[0];
		var args = arguments;
		var city = anyi.select;
		if (city[method]) {
			method = city[method];
			args = Array.prototype.slice.call(arguments, 1);
		} else if (typeof method === "object" || !method) {
			method = city.init;
		} else {
			$.error("Method" + method + "does not exist on jQuery.anyiSelect");
			return this;
		}
		return method.apply(this, args);
	};

	$.fn.anyiCity = function () {
		var args = arguments;
		return anyi.city.apply(this, args);
	};

	$.fn.calendar = function () {
		var args = arguments;
		return anyi.calendar.apply(this, args);
	};

	$.fn.pageModal = function () {
		var args = arguments;
		var pageModal = anyi.pageModal;
		return pageModal.apply(this, args);
	};

})(jQuery);