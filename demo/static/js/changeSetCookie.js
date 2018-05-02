/**
 * Created by asus22 on 2017/9/5.
 */
+function () {
	//改成自执行，避免和其他库变量冲突
	var oHead = document.getElementsByTagName('head').item(0);
	var oScript = document.createElement("script");
	var env = /test|^localhost$|^127\.0\.0\.1$|^192\..*$/gi.test(location.hostname) && /^(?!.*opentest)/gi.test(location.hostname);
	var domain = env ? "sso.test.anyi-tech.com" : "sso.anyi-tech.com";
	var url = location.protocol + "//" + domain + "/ws_sso/auth/setCookie";
	oScript.type = "text/javascript";
	oScript.src = url;
	oHead.appendChild(oScript);
}();

