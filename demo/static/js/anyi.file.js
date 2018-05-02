/**
 * @Created by libo on 2017/3/28.
 * @desc 通用上传 当前版本不支持IE8 IE9
 */
'use strict';

var anyi = anyi || {};

/**
 * anyi文件上传
 */
anyi.file =(function (self) {

	var defaults = {
		maxSize: 10, //可上传最大大小，单位MB
		autoUpload: true,
		compress: true, //是否压缩
		remove: false,
		progress: true,
		preview: {
			show: true
		},
		url: "/ws_common/upload_file/fileUpload",
		loading: "上传中",//上传中提示文字
		success: function (data) {
		},
		error: function (xhr) {
		},
		change: function (dom) {

		},
		complete: function (data) {

		},
		select:function ($this) {
			//选择文件
		}
	};

	/**
	 * 文件上传
	 * @param files files
	 * @param option 上传选项
	 */
	var fileUpload = function (files, option) {
		return $.ajax({
			url: option.url,
			type: 'POST',
			cache: false,
			loading: option.loading,
			data: files,
			processData: false, // 告诉jQuery不要去处理发送的数据
			contentType: false // 告诉jQuery不要去设置Content-Type请求头
		}).done(function (data, textStatus, jqXHR) {
			if (typeof data === "string") data = $.parseJSON(data);
			if (!option) return;
			var $input = option.target;
			if (data && data.code == "0" && data.result) {
				$input.data("val", data.result.id).data("upload", data.result);
			}
			option.success && option.success(data, textStatus, jqXHR);
		}).fail(function (jqXHR, textStatus) {
			if (typeof jqXHR === "string") jqXHR = $.parseJSON(jqXHR);
			option.error && option.error(jqXHR, textStatus);
		});
	};

	/**
	 * 调整尺寸
	 * @param oFile
	 * @param callback
	 * @param option
	 */
	var resize = function (oFile, option, callback) {
		//压缩使用的 lrz，将不再使用之前移动端使用的 jquery.canvasResize.js jquery.exif.js
		if(lrz) {
			lrz(oFile).then(function (rst) {
				//console.log(rst);
				callback && callback(rst, option);
			}).catch(function (err) {
				//alert(err)
				// 处理失败会执行
			}).always(function () {
				// 不管是成功失败，都会执行
			});
		}
	};

	/**
	 * 文件读取
	 * @param oFile
	 * @param option
	 * @param callback
	 */
	var fileReader = function (oFile, option, callback) {
		var oReader = new FileReader();
		oReader.onload = function (e) {
			callback(e.target.result, option);
		};
		oReader.readAsDataURL(oFile);
	};

	self.toDataURL = function (oFile, callback) {
		var oReader = new FileReader();
		oReader.onload = function (e) {
			callback(e.target.result);
		};
		oReader.readAsDataURL(oFile);
	};

	/**
	 * 移除
	 * @param $this
	 * @param option
	 */
	var buildRemove = function ($this,option) {
		var $remove = $this.siblings("span.anyi-file-remove");
		if ($remove.length == 0) {
			$remove = $("<span class='anyi-file-remove'>&times;</span>");
			$this.after($remove)
		}

		$remove.off("click").on("click", function () {
			var $btn = $(this);
			var $input = $btn.siblings("input[type='file']");
			var $img = $btn.siblings(".anyi-file-preview");
			$img.hide();
			$btn.hide();
			$input.val(null).removeAttr("data-val").removeData("val");
			option.remove && option.remove($input);
		});
	};

	/**
	 * 图片预览
	 * @param $this
	 * @param oFile
	 * @param option
	 */
	var buildPreview = function ($this,oFile,option) {
		if (!option.preview.dom || option.preview.dom.length === 0) {
			var $preview = $this.siblings("img");
			if ($preview.length === 0) {
				$preview = $("<img class='anyi-file-preview' />");
				$this.after($preview)
			} else {
				$preview.addClass("anyi-file-preview");
			}
			option.preview.dom = $preview;
		}
		option.preview.dom.show();

		option.preview.dom.on("load", function () {
			var $img = $(this);
			var boxWidth = $img.parent().outerWidth();
			var boxHeight = $img.parent().outerHeight();
			var width = this.width;
			var height = this.height;
			var percent = 0;
			var pBox = boxWidth / boxHeight;
			var pImg = width / height;
			//更新了预览图片位置算法
			if((pBox >= 1 && pImg >= pBox) || (pBox < 1 && pImg > pBox)){
				var newHeight = parseInt(height * boxWidth / width);
				percent = parseInt((boxHeight - newHeight) * 100 / (2 * boxHeight));
				$img.css({"height": "auto", "width": "100%", left: 0, top: percent + "%"});
			} else{
				var newWidth = parseInt(width * boxHeight / height);
				percent = parseInt((boxWidth - newWidth) * 100 / (2 * boxWidth));
				$img.css({"width": "auto", "height": "100%", top: 0, left: percent + "%"});
			}
			$img.siblings("span.anyi-file-remove").show();
		});

		//直接是图片地址时，设置地址
		if (typeof oFile === "string") {
			option.preview.dom.attr("src", oFile);
		} else {
			if (option.compress === undefined || option.compress === false) {
				fileReader(oFile, option, function (data, option) {
					option.preview.dom.attr("src", data);
					option.change && option.change(option.target, option, data);
				});
			} else {
				//压缩图片
				resize(oFile, option, function (data, option) {
					option.preview.dom.attr("src", data.base64);
					option.change && option.change(option.target, option, data);
				});
			}
		}
	};


	/**
	 * 设置预览
	 * @param $this
	 * @param oFile
	 * @param option
	 */
	var buildFilePreview = function ($this,oFile,option) {
		var name = oFile.name;
		if (!option.preview.dom || option.preview.dom.length === 0) {
			var $preview = $this.siblings("span.anyi-file-preview");
			if ($preview.length === 0) {
				$preview = $("<span class='anyi-file-preview' ></span>");
				$this.after($preview)
			}
			option.preview.dom = $preview;
		}
		option.preview.dom.text(name).show();
		option.preview.dom.siblings("span.anyi-file-remove").show();
		option.change && option.change($this, option);
	};

	/**
	 * 文件上传事件，当前只有图片，且只支持图片（如需支持其他文件，后续需要修改）
	 * @param option 上传选项
	 */
	var uploadEvent = function (option) {
		var $this = $(this);
		var oFile = this.files[0];
		if(option.accept === undefined || option.accept.indexOf("image") > -1) {
			//图片预览
			buildPreview($this, oFile, option);
		} else {
			buildFilePreview($this, oFile, option);
		}
		$this.attr("data-hasFile", true);
		option.select && option.select($this);
	};

	/**
	 * 仅支持单个dom的上传，用于兼容以前的老代码
	 * @param dom
	 * @param option
	 * @returns {*|jQuery|HTMLElement}
	 */
	self.upload = function (dom, option) {
		var $dom = $(dom);
		var settings = $dom.data("anyiFile");
		if (settings === undefined) {
			option = $.extend(true, {}, defaults, option, $dom.data());
		} else {
			option = $.extend(true, {}, settings, option, $dom.data());
		}
		option.target = $dom;
		$dom.data("anyiFile", option);
		//console.log(option);
		option.imgsrc && buildPreview($dom, option.imgsrc, option);
		buildRemove($dom, option);

		$dom.on("change", function () {
			var $this = $(this);
			var options = $this.data("anyiFile");
			if (!options) return;
			option.target = $this;
			var files = this.files;
			if (!files || files.length === 0) return;
			var $fileBox = $this.parent();
			var $error = $fileBox.siblings(".anyi-file-error").addClass("hide");
			if ($error.length === 0) {
				$error = $("<div class='anyi-file-error hide'></div>");
				$fileBox.after($error);
			}
			var oFile = files[0];
			if (oFile.size > option.maxSize * 1024 * 1024) {
				$error.html('请上传' + option.maxSize + 'M以内大小文件').removeClass("hide");
				$this.val(null);
				return;
			}
			$.proxy(uploadEvent, this, options)();
			if (options.autoUpload === true) {
				$.proxy(autoUpload, this, options)();
			}
		});
		return $dom
	};

	self.multiUpload = function (option) {
		return this.each(function () {
			self.upload(this, option);
		});
	};

	self.init = function (option) {
		var args = [];
		if (typeof option === "string") {
			var method = self[option];
			args = Array.prototype.slice.call(arguments, 1);
			if(method){
				return method.apply(this, args)
			}
			return this;
		} else {
			args = Array.prototype.slice.call(arguments, 0);
			return self.multiUpload.apply(this, args);
		}
	};

	/**
	 * 自动上传是单文件单上传控件
	 * @param option
	 */
	var autoUpload = function (option) {
		var oFile = this.files[0];
		var dtd = $.Deferred();
		if (option.compress === undefined || option.compress === false) {
			var formData = new FormData();
			formData.append("file", oFile);
			var promise = fileUpload(formData, option);
			promise.always(function (data) {
				if (typeof data === "string") data = $.parseJSON(data);
				option.complete(data)
			});
		} else {
			resize(oFile, option, function (data, option) {
				//var file = convertBase64UrlToBlob(data);
				var file = data.formData;
				var promise = fileUpload(file, option);
				promise.always(function (data) {
					if (typeof data === "string") data = $.parseJSON(data);
					option.complete(data)
				});
			});
		}
	};

	/**
	 * 开始上传
	 * @param settings
	 */
	var startUpload = function (settings) {
		var promises = [];
		var dtds = [];
		this.each(function () {
			var oFile = this.files[0];
			if(!oFile) return;
			var option = $(this).data("anyiFile");
			if(!option) return;
			if (option.compress === undefined || option.compress === false) {
				var formData = new FormData();
				formData.append("file", oFile);
				var promise = fileUpload(formData, option);
				promises.push(promise);
			} else {
				var dtd = $.Deferred();
				var wait1 = function (dtd) {
					resize(oFile, option, function (data, option) {
						//var file = convertBase64UrlToBlob(data);
						var file = data.formData;
						var promise = fileUpload(file, option);
						$.when(promise).then(function () {
							dtd.resolve();
						})
					});
					return dtd.promise();
				};
				dtds.push(wait1(dtd));
			}
		});
		if(promises.length > 0) {
			$.when.apply($, promises).then(function () {
				settings.complete()
			});
		} else if(dtds.length > 0){
			$.when.apply($,dtds).then(function () {
				settings.complete()
			});
		} else {
			settings.complete()
		}
	};


	/**
	 * 设置初始值
	 * @param vals
	 */
	var setValues = function (vals) {
		this.each(function (index) {
			var val = vals[index];
			if (!val) return false;
			var src = val["src"];
			var id = val["id"];
			var $this = $(this);
			var option = $this.data("anyiFile");
			if (option.accept === undefined || option.accept.indexOf("image") > -1) {
				buildPreview($this, src, option);
			} else {
				buildFilePreview($this, {name: "文件ID:" + id}, option);
			}
			$this.data("val", id);
			buildRemove($this, option);
		});
	};

	/**
	 * 手动上传
	 * @param dom
	 * @param option
	 */
	self.start = function (option) {
		var args = Array.prototype.slice.call(arguments, 0);
		return startUpload.apply(this, args);
	};

	self.setValues = function () {
		var args = Array.prototype.slice.call(arguments, 0);
		return setValues.apply(this, args);
	};

	return self;

})(anyi.file || {});

(function ($) {

	/**
	 * 绑定一个选择器内所有的input file
	 * @returns {*}
	 */
	$.fn.fileUpload = function () {
		var args = arguments;
		var method = anyi.file.init;
		var newArgs = Array.prototype.slice.call(args, 0);
		return method.apply(this, newArgs);
	};

})(jQuery);
