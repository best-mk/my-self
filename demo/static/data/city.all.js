/**
 * Created by libo on 2017/9/29.
 */

var citys = [
	{
		"code": "110000",
		"parent_code": null,
		"name": "北京市",
		"alias": "北京",
		"pinyin": "BeiJing",
		"abbr": "BJ",
		"zip": "100000",
		"level": 1
	},
	{
		"code": "110101",
		"parent_code": "110000",
		"name": "东城区",
		"alias": "东城区",
		"pinyin": "DongChengQu",
		"abbr": "DCQ",
		"zip": "100010",
		"level": 2
	},
	{
		"code": "110102",
		"parent_code": "110000",
		"name": "西城区",
		"alias": "西城区",
		"pinyin": "XiChengQu",
		"abbr": "XCQ",
		"zip": "100032",
		"level": 2
	},
	{
		"code": "110105",
		"parent_code": "110000",
		"name": "朝阳区",
		"alias": "朝阳区",
		"pinyin": "ChaoYangQu",
		"abbr": "CYQ",
		"zip": "100011",
		"level": 2
	},
	{
		"code": "110106",
		"parent_code": "110000",
		"name": "丰台区",
		"alias": "丰台区",
		"pinyin": "FengTaiQu",
		"abbr": "FTQ",
		"zip": "100071",
		"level": 2
	},
	{
		"code": "110107",
		"parent_code": "110000",
		"name": "石景山区",
		"alias": "石景山区",
		"pinyin": "ShiJingShanQu",
		"abbr": "SJSQ",
		"zip": "100071",
		"level": 2
	},
	{
		"code": "110108",
		"parent_code": "110000",
		"name": "海淀区",
		"alias": "海淀区",
		"pinyin": "HaiDianQu",
		"abbr": "HDQ",
		"zip": "100091",
		"level": 2
	},
	{
		"code": "110109",
		"parent_code": "110000",
		"name": "门头沟区",
		"alias": "门头沟区",
		"pinyin": "MenTouGouQu",
		"abbr": "MTGQ",
		"zip": "102300",
		"level": 2
	},
	{
		"code": "110111",
		"parent_code": "110000",
		"name": "房山区",
		"alias": "房山区",
		"pinyin": "FangShanQu",
		"abbr": "FSQ",
		"zip": "102488",
		"level": 2
	},
	{
		"code": "110112",
		"parent_code": "110000",
		"name": "通州区",
		"alias": "通州区",
		"pinyin": "TongZhouQu",
		"abbr": "TZQ",
		"zip": "101100",
		"level": 2
	},
	{
		"code": "110113",
		"parent_code": "110000",
		"name": "顺义区",
		"alias": "顺义区",
		"pinyin": "ShunYiQu",
		"abbr": "SYQ",
		"zip": "101300",
		"level": 2
	},
	{
		"code": "110114",
		"parent_code": "110000",
		"name": "昌平区",
		"alias": "昌平区",
		"pinyin": "ChangPingQu",
		"abbr": "CPQ",
		"zip": "102200",
		"level": 2
	},
	{
		"code": "110115",
		"parent_code": "110000",
		"name": "大兴区",
		"alias": "大兴区",
		"pinyin": "DaXingQu",
		"abbr": "DXQ",
		"zip": "102600",
		"level": 2
	},
	{
		"code": "110116",
		"parent_code": "110000",
		"name": "怀柔区",
		"alias": "怀柔区",
		"pinyin": "HuaiRouQu",
		"abbr": "HRQ",
		"zip": "101400",
		"level": 2
	},
	{
		"code": "110117",
		"parent_code": "110000",
		"name": "平谷区",
		"alias": "平谷区",
		"pinyin": "PingGuQu",
		"abbr": "PGQ",
		"zip": "101200",
		"level": 2
	},
	{
		"code": "110228",
		"parent_code": "110000",
		"name": "密云县",
		"alias": "密云",
		"pinyin": "MiYun",
		"abbr": "MY",
		"zip": "101500",
		"level": 2
	},
	{
		"code": "110229",
		"parent_code": "110000",
		"name": "延庆县",
		"alias": "延庆",
		"pinyin": "YanQing",
		"abbr": "YQ",
		"zip": "102100",
		"level": 2
	},
	{
		"code": "120000",
		"parent_code": null,
		"name": "天津市",
		"alias": "天津",
		"pinyin": "TianJin",
		"abbr": "TJ",
		"zip": "300000",
		"level": 1
	},
	{
		"code": "120101",
		"parent_code": "120000",
		"name": "和平区",
		"alias": "和平区",
		"pinyin": "HePingQu",
		"abbr": "HPQ",
		"zip": "300041",
		"level": 2
	},
	{
		"code": "120102",
		"parent_code": "120000",
		"name": "河东区",
		"alias": "河东区",
		"pinyin": "HeDongQu",
		"abbr": "HDQ",
		"zip": "300171",
		"level": 2
	},
	{
		"code": "120103",
		"parent_code": "120000",
		"name": "河西区",
		"alias": "河西区",
		"pinyin": "HeXiQu",
		"abbr": "HXQ",
		"zip": "300202",
		"level": 2
	},
	{
		"code": "120104",
		"parent_code": "120000",
		"name": "南开区",
		"alias": "南开区",
		"pinyin": "NanKaiQu",
		"abbr": "NKQ",
		"zip": "300100",
		"level": 2
	},
	{
		"code": "120105",
		"parent_code": "120000",
		"name": "河北区",
		"alias": "河北区",
		"pinyin": "HeBeiQu",
		"abbr": "HBQ",
		"zip": "300143",
		"level": 2
	},
	{
		"code": "120106",
		"parent_code": "120000",
		"name": "红桥区",
		"alias": "红桥区",
		"pinyin": "HongQiaoQu",
		"abbr": "HQQ",
		"zip": "300131",
		"level": 2
	},
	{
		"code": "120110",
		"parent_code": "120000",
		"name": "东丽区",
		"alias": "东丽区",
		"pinyin": "DongLiQu",
		"abbr": "DLQ",
		"zip": "300300",
		"level": 2
	},
	{
		"code": "120111",
		"parent_code": "120000",
		"name": "西青区",
		"alias": "西青区",
		"pinyin": "XiQingQu",
		"abbr": "XQQ",
		"zip": "300380",
		"level": 2
	},
	{
		"code": "120112",
		"parent_code": "120000",
		"name": "津南区",
		"alias": "津南区",
		"pinyin": "JinNanQu",
		"abbr": "JNQ",
		"zip": "300350",
		"level": 2
	},
	{
		"code": "120113",
		"parent_code": "120000",
		"name": "北辰区",
		"alias": "北辰区",
		"pinyin": "BeiChenQu",
		"abbr": "BCQ",
		"zip": "300400",
		"level": 2
	},
	{
		"code": "120114",
		"parent_code": "120000",
		"name": "武清区",
		"alias": "武清区",
		"pinyin": "WuQingQu",
		"abbr": "WQQ",
		"zip": "301700",
		"level": 2
	},
	{
		"code": "120115",
		"parent_code": "120000",
		"name": "宝坻区",
		"alias": "宝坻区",
		"pinyin": "BaoChiQu",
		"abbr": "BCQ",
		"zip": "301800",
		"level": 2
	},
	{
		"code": "120116",
		"parent_code": "120000",
		"name": "滨海新区",
		"alias": "滨海新区",
		"pinyin": "BinHaiXinQu",
		"abbr": "BHXQ",
		"zip": "300457",
		"level": 2
	},
	{
		"code": "120221",
		"parent_code": "120000",
		"name": "宁河县",
		"alias": "宁河",
		"pinyin": "NingHe",
		"abbr": "NH",
		"zip": "301500",
		"level": 2
	},
	{
		"code": "120223",
		"parent_code": "120000",
		"name": "静海县",
		"alias": "静海",
		"pinyin": "JingHai",
		"abbr": "JH",
		"zip": "301600",
		"level": 2
	},
	{
		"code": "120225",
		"parent_code": "120000",
		"name": "蓟县",
		"alias": "蓟县",
		"pinyin": "JiXian",
		"abbr": "JX",
		"zip": "301900",
		"level": 2
	},
	{
		"code": "130000",
		"parent_code": null,
		"name": "河北省",
		"alias": "河北",
		"pinyin": "HeBei",
		"abbr": "HB",
		"zip": "050000",
		"level": 1
	},
	{
		"code": "130100",
		"parent_code": "130000",
		"name": "石家庄市",
		"alias": "石家庄",
		"pinyin": "ShiJiaZhuang",
		"abbr": "SJZ",
		"zip": "050000",
		"level": 2
	},
	{
		"code": "130102",
		"parent_code": "130100",
		"name": "长安区",
		"alias": "长安区",
		"pinyin": "ZhangAnQu",
		"abbr": "ZAQ",
		"zip": "050011",
		"level": 3
	},
	{
		"code": "130103",
		"parent_code": "130100",
		"name": "桥东区",
		"alias": "桥东区",
		"pinyin": "QiaoDongQu",
		"abbr": "QDQ",
		"zip": "050011",
		"level": 3
	},
	{
		"code": "130104",
		"parent_code": "130100",
		"name": "桥西区",
		"alias": "桥西区",
		"pinyin": "QiaoXiQu",
		"abbr": "QXQ",
		"zip": "050051",
		"level": 3
	},
	{
		"code": "130105",
		"parent_code": "130100",
		"name": "新华区",
		"alias": "新华区",
		"pinyin": "XinHuaQu",
		"abbr": "XHQ",
		"zip": "050051",
		"level": 3
	},
	{
		"code": "130107",
		"parent_code": "130100",
		"name": "井陉矿区",
		"alias": "井陉矿区",
		"pinyin": "JingXingKuangQu",
		"abbr": "JXKQ",
		"zip": "050100",
		"level": 3
	},
	{
		"code": "130108",
		"parent_code": "130100",
		"name": "裕华区",
		"alias": "裕华区",
		"pinyin": "YuHuaQu",
		"abbr": "YHQ",
		"zip": "050081",
		"level": 3
	},
	{
		"code": "130121",
		"parent_code": "130100",
		"name": "井陉县",
		"alias": "井陉",
		"pinyin": "JingXing",
		"abbr": "JX",
		"zip": "050300",
		"level": 3
	},
	{
		"code": "130123",
		"parent_code": "130100",
		"name": "正定县",
		"alias": "正定",
		"pinyin": "ZhengDing",
		"abbr": "ZD",
		"zip": "050800",
		"level": 3
	},
	{
		"code": "130124",
		"parent_code": "130100",
		"name": "栾城县",
		"alias": "栾城",
		"pinyin": "LuanCheng",
		"abbr": "LC",
		"zip": "051430",
		"level": 3
	},
	{
		"code": "130125",
		"parent_code": "130100",
		"name": "行唐县",
		"alias": "行唐",
		"pinyin": "XingTang",
		"abbr": "XT",
		"zip": "050600",
		"level": 3
	},
	{
		"code": "130126",
		"parent_code": "130100",
		"name": "灵寿县",
		"alias": "灵寿",
		"pinyin": "LingShou",
		"abbr": "LS",
		"zip": "050500",
		"level": 3
	},
	{
		"code": "130127",
		"parent_code": "130100",
		"name": "高邑县",
		"alias": "高邑",
		"pinyin": "GaoYi",
		"abbr": "GY",
		"zip": "051330",
		"level": 3
	},
	{
		"code": "130128",
		"parent_code": "130100",
		"name": "深泽县",
		"alias": "深泽",
		"pinyin": "ShenZe",
		"abbr": "SZ",
		"zip": "052560",
		"level": 3
	},
	{
		"code": "130129",
		"parent_code": "130100",
		"name": "赞皇县",
		"alias": "赞皇",
		"pinyin": "ZanHuang",
		"abbr": "ZH",
		"zip": "051230",
		"level": 3
	},
	{
		"code": "130130",
		"parent_code": "130100",
		"name": "无极县",
		"alias": "无极",
		"pinyin": "WuJi",
		"abbr": "WJ",
		"zip": "052460",
		"level": 3
	},
	{
		"code": "130131",
		"parent_code": "130100",
		"name": "平山县",
		"alias": "平山",
		"pinyin": "PingShan",
		"abbr": "PS",
		"zip": "050400",
		"level": 3
	},
	{
		"code": "130132",
		"parent_code": "130100",
		"name": "元氏县",
		"alias": "元氏",
		"pinyin": "YuanShi",
		"abbr": "YS",
		"zip": "051130",
		"level": 3
	},
	{
		"code": "130133",
		"parent_code": "130100",
		"name": "赵县",
		"alias": "赵县",
		"pinyin": "ZhaoXian",
		"abbr": "ZX",
		"zip": "051530",
		"level": 3
	},
	{
		"code": "130181",
		"parent_code": "130100",
		"name": "辛集市",
		"alias": "辛集",
		"pinyin": "XinJi",
		"abbr": "XJ",
		"zip": "052360",
		"level": 3
	},
	{
		"code": "130182",
		"parent_code": "130100",
		"name": "藁城市",
		"alias": "藁城",
		"pinyin": "GaoCheng",
		"abbr": "GC",
		"zip": "052160",
		"level": 3
	},
	{
		"code": "130183",
		"parent_code": "130100",
		"name": "晋州市",
		"alias": "晋州",
		"pinyin": "JinZhou",
		"abbr": "JZ",
		"zip": "052260",
		"level": 3
	},
	{
		"code": "130184",
		"parent_code": "130100",
		"name": "新乐市",
		"alias": "新乐",
		"pinyin": "XinLe",
		"abbr": "XL",
		"zip": "050700",
		"level": 3
	},
	{
		"code": "130185",
		"parent_code": "130100",
		"name": "鹿泉市",
		"alias": "鹿泉",
		"pinyin": "LuQuan",
		"abbr": "LQ",
		"zip": "050200",
		"level": 3
	},
	{
		"code": "130200",
		"parent_code": "130000",
		"name": "唐山市",
		"alias": "唐山",
		"pinyin": "TangShan",
		"abbr": "TS",
		"zip": "063000",
		"level": 2
	},
	{
		"code": "130202",
		"parent_code": "130200",
		"name": "路南区",
		"alias": "路南区",
		"pinyin": "LuNanQu",
		"abbr": "LNQ",
		"zip": "063017",
		"level": 3
	},
	{
		"code": "130203",
		"parent_code": "130200",
		"name": "路北区",
		"alias": "路北区",
		"pinyin": "LuBeiQu",
		"abbr": "LBQ",
		"zip": "063015",
		"level": 3
	},
	{
		"code": "130204",
		"parent_code": "130200",
		"name": "古冶区",
		"alias": "古冶区",
		"pinyin": "GuYeQu",
		"abbr": "GYQ",
		"zip": "063104",
		"level": 3
	},
	{
		"code": "130205",
		"parent_code": "130200",
		"name": "开平区",
		"alias": "开平区",
		"pinyin": "KaiPingQu",
		"abbr": "KPQ",
		"zip": "063021",
		"level": 3
	},
	{
		"code": "130207",
		"parent_code": "130200",
		"name": "丰南区",
		"alias": "丰南区",
		"pinyin": "FengNanQu",
		"abbr": "FNQ",
		"zip": "063300",
		"level": 3
	},
	{
		"code": "130208",
		"parent_code": "130200",
		"name": "丰润区",
		"alias": "丰润区",
		"pinyin": "FengRunQu",
		"abbr": "FRQ",
		"zip": "064000",
		"level": 3
	},
	{
		"code": "130209",
		"parent_code": "130200",
		"name": "曹妃甸区",
		"alias": "曹妃甸区",
		"pinyin": "CaoFeiDianQu",
		"abbr": "CFDQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "130223",
		"parent_code": "130200",
		"name": "滦县",
		"alias": "滦县",
		"pinyin": "LuanXian",
		"abbr": "LX",
		"zip": "063700",
		"level": 3
	},
	{
		"code": "130224",
		"parent_code": "130200",
		"name": "滦南县",
		"alias": "滦南",
		"pinyin": "LuanNan",
		"abbr": "LN",
		"zip": "063500",
		"level": 3
	},
	{
		"code": "130225",
		"parent_code": "130200",
		"name": "乐亭县",
		"alias": "乐亭",
		"pinyin": "LeTing",
		"abbr": "LT",
		"zip": "063600",
		"level": 3
	},
	{
		"code": "130227",
		"parent_code": "130200",
		"name": "迁西县",
		"alias": "迁西",
		"pinyin": "QianXi",
		"abbr": "QX",
		"zip": "064300",
		"level": 3
	},
	{
		"code": "130229",
		"parent_code": "130200",
		"name": "玉田县",
		"alias": "玉田",
		"pinyin": "YuTian",
		"abbr": "YT",
		"zip": "064100",
		"level": 3
	},
	{
		"code": "130281",
		"parent_code": "130200",
		"name": "遵化市",
		"alias": "遵化",
		"pinyin": "ZunHua",
		"abbr": "ZH",
		"zip": "064200",
		"level": 3
	},
	{
		"code": "130283",
		"parent_code": "130200",
		"name": "迁安市",
		"alias": "迁安",
		"pinyin": "QianAn",
		"abbr": "QA",
		"zip": "064400",
		"level": 3
	},
	{
		"code": "130300",
		"parent_code": "130000",
		"name": "秦皇岛市",
		"alias": "秦皇岛",
		"pinyin": "QinHuangDao",
		"abbr": "QHD",
		"zip": "066000",
		"level": 2
	},
	{
		"code": "130302",
		"parent_code": "130300",
		"name": "海港区",
		"alias": "海港区",
		"pinyin": "HaiGangQu",
		"abbr": "HGQ",
		"zip": "066000",
		"level": 3
	},
	{
		"code": "130303",
		"parent_code": "130300",
		"name": "山海关区",
		"alias": "山海关区",
		"pinyin": "ShanHaiGuanQu",
		"abbr": "SHGQ",
		"zip": "066200",
		"level": 3
	},
	{
		"code": "130304",
		"parent_code": "130300",
		"name": "北戴河区",
		"alias": "北戴河区",
		"pinyin": "BeiDaiHeQu",
		"abbr": "BDHQ",
		"zip": "066100",
		"level": 3
	},
	{
		"code": "130321",
		"parent_code": "130300",
		"name": "青龙满族自治县",
		"alias": "青龙满族",
		"pinyin": "QingLongManZu",
		"abbr": "QLMZ",
		"zip": "066500",
		"level": 3
	},
	{
		"code": "130322",
		"parent_code": "130300",
		"name": "昌黎县",
		"alias": "昌黎",
		"pinyin": "ChangLi",
		"abbr": "CL",
		"zip": "066600",
		"level": 3
	},
	{
		"code": "130323",
		"parent_code": "130300",
		"name": "抚宁县",
		"alias": "抚宁",
		"pinyin": "FuNing",
		"abbr": "FN",
		"zip": "066300",
		"level": 3
	},
	{
		"code": "130324",
		"parent_code": "130300",
		"name": "卢龙县",
		"alias": "卢龙",
		"pinyin": "LuLong",
		"abbr": "LL",
		"zip": "066400",
		"level": 3
	},
	{
		"code": "130400",
		"parent_code": "130000",
		"name": "邯郸市",
		"alias": "邯郸",
		"pinyin": "HanDan",
		"abbr": "HD",
		"zip": "056000",
		"level": 2
	},
	{
		"code": "130402",
		"parent_code": "130400",
		"name": "邯山区",
		"alias": "邯山区",
		"pinyin": "HanShanQu",
		"abbr": "HSQ",
		"zip": "056001",
		"level": 3
	},
	{
		"code": "130403",
		"parent_code": "130400",
		"name": "丛台区",
		"alias": "丛台区",
		"pinyin": "CongTaiQu",
		"abbr": "CTQ",
		"zip": "056004",
		"level": 3
	},
	{
		"code": "130404",
		"parent_code": "130400",
		"name": "复兴区",
		"alias": "复兴区",
		"pinyin": "FuXingQu",
		"abbr": "FXQ",
		"zip": "056003",
		"level": 3
	},
	{
		"code": "130406",
		"parent_code": "130400",
		"name": "峰峰矿区",
		"alias": "峰峰矿区",
		"pinyin": "FengFengKuangQu",
		"abbr": "FFKQ",
		"zip": "056200",
		"level": 3
	},
	{
		"code": "130421",
		"parent_code": "130400",
		"name": "邯郸县",
		"alias": "邯郸",
		"pinyin": "HanDan",
		"abbr": "HD",
		"zip": "056105",
		"level": 3
	},
	{
		"code": "130423",
		"parent_code": "130400",
		"name": "临漳县",
		"alias": "临漳",
		"pinyin": "LinZhang",
		"abbr": "LZ",
		"zip": "056600",
		"level": 3
	},
	{
		"code": "130424",
		"parent_code": "130400",
		"name": "成安县",
		"alias": "成安",
		"pinyin": "ChengAn",
		"abbr": "CA",
		"zip": "056700",
		"level": 3
	},
	{
		"code": "130425",
		"parent_code": "130400",
		"name": "大名县",
		"alias": "大名",
		"pinyin": "DaMing",
		"abbr": "DM",
		"zip": "056900",
		"level": 3
	},
	{
		"code": "130426",
		"parent_code": "130400",
		"name": "涉县",
		"alias": "涉县",
		"pinyin": "SheXian",
		"abbr": "SX",
		"zip": "056400",
		"level": 3
	},
	{
		"code": "130427",
		"parent_code": "130400",
		"name": "磁县",
		"alias": "磁县",
		"pinyin": "CiXian",
		"abbr": "CX",
		"zip": "056500",
		"level": 3
	},
	{
		"code": "130428",
		"parent_code": "130400",
		"name": "肥乡县",
		"alias": "肥乡",
		"pinyin": "FeiXiang",
		"abbr": "FX",
		"zip": "057550",
		"level": 3
	},
	{
		"code": "130429",
		"parent_code": "130400",
		"name": "永年县",
		"alias": "永年",
		"pinyin": "YongNian",
		"abbr": "YN",
		"zip": "057150",
		"level": 3
	},
	{
		"code": "130430",
		"parent_code": "130400",
		"name": "邱县",
		"alias": "邱县",
		"pinyin": "QiuXian",
		"abbr": "QX",
		"zip": "057450",
		"level": 3
	},
	{
		"code": "130431",
		"parent_code": "130400",
		"name": "鸡泽县",
		"alias": "鸡泽",
		"pinyin": "JiZe",
		"abbr": "JZ",
		"zip": "057350",
		"level": 3
	},
	{
		"code": "130432",
		"parent_code": "130400",
		"name": "广平县",
		"alias": "广平",
		"pinyin": "GuangPing",
		"abbr": "GP",
		"zip": "057650",
		"level": 3
	},
	{
		"code": "130433",
		"parent_code": "130400",
		"name": "馆陶县",
		"alias": "馆陶",
		"pinyin": "GuanTao",
		"abbr": "GT",
		"zip": "057750",
		"level": 3
	},
	{
		"code": "130434",
		"parent_code": "130400",
		"name": "魏县",
		"alias": "魏县",
		"pinyin": "WeiXian",
		"abbr": "WX",
		"zip": "056800",
		"level": 3
	},
	{
		"code": "130435",
		"parent_code": "130400",
		"name": "曲周县",
		"alias": "曲周",
		"pinyin": "QuZhou",
		"abbr": "QZ",
		"zip": "057250",
		"level": 3
	},
	{
		"code": "130481",
		"parent_code": "130400",
		"name": "武安市",
		"alias": "武安",
		"pinyin": "WuAn",
		"abbr": "WA",
		"zip": "056300",
		"level": 3
	},
	{
		"code": "130500",
		"parent_code": "130000",
		"name": "邢台市",
		"alias": "邢台",
		"pinyin": "XingTai",
		"abbr": "XT",
		"zip": "054000",
		"level": 2
	},
	{
		"code": "130502",
		"parent_code": "130500",
		"name": "桥东区",
		"alias": "桥东区",
		"pinyin": "QiaoDongQu",
		"abbr": "QDQ",
		"zip": "054001",
		"level": 3
	},
	{
		"code": "130503",
		"parent_code": "130500",
		"name": "桥西区",
		"alias": "桥西区",
		"pinyin": "QiaoXiQu",
		"abbr": "QXQ",
		"zip": "054000",
		"level": 3
	},
	{
		"code": "130521",
		"parent_code": "130500",
		"name": "邢台县",
		"alias": "邢台",
		"pinyin": "XingTai",
		"abbr": "XT",
		"zip": "054001",
		"level": 3
	},
	{
		"code": "130522",
		"parent_code": "130500",
		"name": "临城县",
		"alias": "临城",
		"pinyin": "LinCheng",
		"abbr": "LC",
		"zip": "054300",
		"level": 3
	},
	{
		"code": "130523",
		"parent_code": "130500",
		"name": "内丘县",
		"alias": "内丘",
		"pinyin": "NeiQiu",
		"abbr": "NQ",
		"zip": "054200",
		"level": 3
	},
	{
		"code": "130524",
		"parent_code": "130500",
		"name": "柏乡县",
		"alias": "柏乡",
		"pinyin": "BaiXiang",
		"abbr": "BX",
		"zip": "055450",
		"level": 3
	},
	{
		"code": "130525",
		"parent_code": "130500",
		"name": "隆尧县",
		"alias": "隆尧",
		"pinyin": "LongYao",
		"abbr": "LY",
		"zip": "055350",
		"level": 3
	},
	{
		"code": "130526",
		"parent_code": "130500",
		"name": "任县",
		"alias": "任县",
		"pinyin": "RenXian",
		"abbr": "RX",
		"zip": "055150",
		"level": 3
	},
	{
		"code": "130527",
		"parent_code": "130500",
		"name": "南和县",
		"alias": "南和",
		"pinyin": "NanHe",
		"abbr": "NH",
		"zip": "054400",
		"level": 3
	},
	{
		"code": "130528",
		"parent_code": "130500",
		"name": "宁晋县",
		"alias": "宁晋",
		"pinyin": "NingJin",
		"abbr": "NJ",
		"zip": "055550",
		"level": 3
	},
	{
		"code": "130529",
		"parent_code": "130500",
		"name": "巨鹿县",
		"alias": "巨鹿",
		"pinyin": "JuLu",
		"abbr": "JL",
		"zip": "055250",
		"level": 3
	},
	{
		"code": "130530",
		"parent_code": "130500",
		"name": "新河县",
		"alias": "新河",
		"pinyin": "XinHe",
		"abbr": "XH",
		"zip": "055650",
		"level": 3
	},
	{
		"code": "130531",
		"parent_code": "130500",
		"name": "广宗县",
		"alias": "广宗",
		"pinyin": "GuangZong",
		"abbr": "GZ",
		"zip": "054600",
		"level": 3
	},
	{
		"code": "130532",
		"parent_code": "130500",
		"name": "平乡县",
		"alias": "平乡",
		"pinyin": "PingXiang",
		"abbr": "PX",
		"zip": "054500",
		"level": 3
	},
	{
		"code": "130533",
		"parent_code": "130500",
		"name": "威县",
		"alias": "威县",
		"pinyin": "WeiXian",
		"abbr": "WX",
		"zip": "054700",
		"level": 3
	},
	{
		"code": "130534",
		"parent_code": "130500",
		"name": "清河县",
		"alias": "清河",
		"pinyin": "QingHe",
		"abbr": "QH",
		"zip": "054800",
		"level": 3
	},
	{
		"code": "130535",
		"parent_code": "130500",
		"name": "临西县",
		"alias": "临西",
		"pinyin": "LinXi",
		"abbr": "LX",
		"zip": "054900",
		"level": 3
	},
	{
		"code": "130581",
		"parent_code": "130500",
		"name": "南宫市",
		"alias": "南宫",
		"pinyin": "NanGong",
		"abbr": "NG",
		"zip": "055750",
		"level": 3
	},
	{
		"code": "130582",
		"parent_code": "130500",
		"name": "沙河市",
		"alias": "沙河",
		"pinyin": "ShaHe",
		"abbr": "SH",
		"zip": "054100",
		"level": 3
	},
	{
		"code": "130600",
		"parent_code": "130000",
		"name": "保定市",
		"alias": "保定",
		"pinyin": "BaoDing",
		"abbr": "BD",
		"zip": "071000",
		"level": 2
	},
	{
		"code": "130602",
		"parent_code": "130600",
		"name": "新市区",
		"alias": "新市区",
		"pinyin": "XinShiQu",
		"abbr": "XSQ",
		"zip": "071052",
		"level": 3
	},
	{
		"code": "130603",
		"parent_code": "130600",
		"name": "北市区",
		"alias": "北市区",
		"pinyin": "BeiShiQu",
		"abbr": "BSQ",
		"zip": "071000",
		"level": 3
	},
	{
		"code": "130604",
		"parent_code": "130600",
		"name": "南市区",
		"alias": "南市区",
		"pinyin": "NanShiQu",
		"abbr": "NSQ",
		"zip": "071000",
		"level": 3
	},
	{
		"code": "130621",
		"parent_code": "130600",
		"name": "满城县",
		"alias": "满城",
		"pinyin": "ManCheng",
		"abbr": "MC",
		"zip": "072150",
		"level": 3
	},
	{
		"code": "130622",
		"parent_code": "130600",
		"name": "清苑县",
		"alias": "清苑",
		"pinyin": "QingYuan",
		"abbr": "QY",
		"zip": "071100",
		"level": 3
	},
	{
		"code": "130623",
		"parent_code": "130600",
		"name": "涞水县",
		"alias": "涞水",
		"pinyin": "LaiShui",
		"abbr": "LS",
		"zip": "074100",
		"level": 3
	},
	{
		"code": "130624",
		"parent_code": "130600",
		"name": "阜平县",
		"alias": "阜平",
		"pinyin": "FuPing",
		"abbr": "FP",
		"zip": "073200",
		"level": 3
	},
	{
		"code": "130625",
		"parent_code": "130600",
		"name": "徐水县",
		"alias": "徐水",
		"pinyin": "XuShui",
		"abbr": "XS",
		"zip": "072550",
		"level": 3
	},
	{
		"code": "130626",
		"parent_code": "130600",
		"name": "定兴县",
		"alias": "定兴",
		"pinyin": "DingXing",
		"abbr": "DX",
		"zip": "072650",
		"level": 3
	},
	{
		"code": "130627",
		"parent_code": "130600",
		"name": "唐县",
		"alias": "唐县",
		"pinyin": "TangXian",
		"abbr": "TX",
		"zip": "072350",
		"level": 3
	},
	{
		"code": "130628",
		"parent_code": "130600",
		"name": "高阳县",
		"alias": "高阳",
		"pinyin": "GaoYang",
		"abbr": "GY",
		"zip": "071500",
		"level": 3
	},
	{
		"code": "130629",
		"parent_code": "130600",
		"name": "容城县",
		"alias": "容城",
		"pinyin": "RongCheng",
		"abbr": "RC",
		"zip": "071700",
		"level": 3
	},
	{
		"code": "130630",
		"parent_code": "130600",
		"name": "涞源县",
		"alias": "涞源",
		"pinyin": "LaiYuan",
		"abbr": "LY",
		"zip": "074300",
		"level": 3
	},
	{
		"code": "130631",
		"parent_code": "130600",
		"name": "望都县",
		"alias": "望都",
		"pinyin": "WangDou",
		"abbr": "WD",
		"zip": "072450",
		"level": 3
	},
	{
		"code": "130632",
		"parent_code": "130600",
		"name": "安新县",
		"alias": "安新",
		"pinyin": "AnXin",
		"abbr": "AX",
		"zip": "071600",
		"level": 3
	},
	{
		"code": "130633",
		"parent_code": "130600",
		"name": "易县",
		"alias": "易县",
		"pinyin": "YiXian",
		"abbr": "YX",
		"zip": "074200",
		"level": 3
	},
	{
		"code": "130634",
		"parent_code": "130600",
		"name": "曲阳县",
		"alias": "曲阳",
		"pinyin": "QuYang",
		"abbr": "QY",
		"zip": "073100",
		"level": 3
	},
	{
		"code": "130635",
		"parent_code": "130600",
		"name": "蠡县",
		"alias": "蠡县",
		"pinyin": "LiXian",
		"abbr": "LX",
		"zip": "071400",
		"level": 3
	},
	{
		"code": "130636",
		"parent_code": "130600",
		"name": "顺平县",
		"alias": "顺平",
		"pinyin": "ShunPing",
		"abbr": "SP",
		"zip": "072250",
		"level": 3
	},
	{
		"code": "130637",
		"parent_code": "130600",
		"name": "博野县",
		"alias": "博野",
		"pinyin": "BoYe",
		"abbr": "BY",
		"zip": "071300",
		"level": 3
	},
	{
		"code": "130638",
		"parent_code": "130600",
		"name": "雄县",
		"alias": "雄县",
		"pinyin": "XiongXian",
		"abbr": "XX",
		"zip": "071800",
		"level": 3
	},
	{
		"code": "130681",
		"parent_code": "130600",
		"name": "涿州市",
		"alias": "涿州",
		"pinyin": "ZhuoZhou",
		"abbr": "ZZ",
		"zip": "072750",
		"level": 3
	},
	{
		"code": "130682",
		"parent_code": "130600",
		"name": "定州市",
		"alias": "定州",
		"pinyin": "DingZhou",
		"abbr": "DZ",
		"zip": "073000",
		"level": 3
	},
	{
		"code": "130683",
		"parent_code": "130600",
		"name": "安国市",
		"alias": "安国",
		"pinyin": "AnGuo",
		"abbr": "AG",
		"zip": "071200",
		"level": 3
	},
	{
		"code": "130684",
		"parent_code": "130600",
		"name": "高碑店市",
		"alias": "高碑店",
		"pinyin": "GaoBeiDian",
		"abbr": "GBD",
		"zip": "074000",
		"level": 3
	},
	{
		"code": "130700",
		"parent_code": "130000",
		"name": "张家口市",
		"alias": "张家口",
		"pinyin": "ZhangJiaKou",
		"abbr": "ZJK",
		"zip": "075000",
		"level": 2
	},
	{
		"code": "130702",
		"parent_code": "130700",
		"name": "桥东区",
		"alias": "桥东区",
		"pinyin": "QiaoDongQu",
		"abbr": "QDQ",
		"zip": "075000",
		"level": 3
	},
	{
		"code": "130703",
		"parent_code": "130700",
		"name": "桥西区",
		"alias": "桥西区",
		"pinyin": "QiaoXiQu",
		"abbr": "QXQ",
		"zip": "075061",
		"level": 3
	},
	{
		"code": "130705",
		"parent_code": "130700",
		"name": "宣化区",
		"alias": "宣化区",
		"pinyin": "XuanHuaQu",
		"abbr": "XHQ",
		"zip": "075100",
		"level": 3
	},
	{
		"code": "130706",
		"parent_code": "130700",
		"name": "下花园区",
		"alias": "下花园区",
		"pinyin": "XiaHuaYuanQu",
		"abbr": "XHYQ",
		"zip": "075300",
		"level": 3
	},
	{
		"code": "130721",
		"parent_code": "130700",
		"name": "宣化县",
		"alias": "宣化",
		"pinyin": "XuanHua",
		"abbr": "XH",
		"zip": "075100",
		"level": 3
	},
	{
		"code": "130722",
		"parent_code": "130700",
		"name": "张北县",
		"alias": "张北",
		"pinyin": "ZhangBei",
		"abbr": "ZB",
		"zip": "076450",
		"level": 3
	},
	{
		"code": "130723",
		"parent_code": "130700",
		"name": "康保县",
		"alias": "康保",
		"pinyin": "KangBao",
		"abbr": "KB",
		"zip": "076650",
		"level": 3
	},
	{
		"code": "130724",
		"parent_code": "130700",
		"name": "沽源县",
		"alias": "沽源",
		"pinyin": "GuYuan",
		"abbr": "GY",
		"zip": "076550",
		"level": 3
	},
	{
		"code": "130725",
		"parent_code": "130700",
		"name": "尚义县",
		"alias": "尚义",
		"pinyin": "ShangYi",
		"abbr": "SY",
		"zip": "076750",
		"level": 3
	},
	{
		"code": "130726",
		"parent_code": "130700",
		"name": "蔚县",
		"alias": "蔚县",
		"pinyin": "WeiXian",
		"abbr": "WX",
		"zip": "075700",
		"level": 3
	},
	{
		"code": "130727",
		"parent_code": "130700",
		"name": "阳原县",
		"alias": "阳原",
		"pinyin": "YangYuan",
		"abbr": "YY",
		"zip": "075800",
		"level": 3
	},
	{
		"code": "130728",
		"parent_code": "130700",
		"name": "怀安县",
		"alias": "怀安",
		"pinyin": "HuaiAn",
		"abbr": "HA",
		"zip": "076150",
		"level": 3
	},
	{
		"code": "130729",
		"parent_code": "130700",
		"name": "万全县",
		"alias": "万全",
		"pinyin": "WanQuan",
		"abbr": "WQ",
		"zip": "076250",
		"level": 3
	},
	{
		"code": "130730",
		"parent_code": "130700",
		"name": "怀来县",
		"alias": "怀来",
		"pinyin": "HuaiLai",
		"abbr": "HL",
		"zip": "075400",
		"level": 3
	},
	{
		"code": "130731",
		"parent_code": "130700",
		"name": "涿鹿县",
		"alias": "涿鹿",
		"pinyin": "ZhuoLu",
		"abbr": "ZL",
		"zip": "075600",
		"level": 3
	},
	{
		"code": "130732",
		"parent_code": "130700",
		"name": "赤城县",
		"alias": "赤城",
		"pinyin": "ChiCheng",
		"abbr": "CC",
		"zip": "075500",
		"level": 3
	},
	{
		"code": "130733",
		"parent_code": "130700",
		"name": "崇礼县",
		"alias": "崇礼",
		"pinyin": "ChongLi",
		"abbr": "CL",
		"zip": "076350",
		"level": 3
	},
	{
		"code": "130800",
		"parent_code": "130000",
		"name": "承德市",
		"alias": "承德",
		"pinyin": "ChengDe",
		"abbr": "CD",
		"zip": "067000",
		"level": 2
	},
	{
		"code": "130802",
		"parent_code": "130800",
		"name": "双桥区",
		"alias": "双桥区",
		"pinyin": "ShuangQiaoQu",
		"abbr": "SQQ",
		"zip": "067000",
		"level": 3
	},
	{
		"code": "130803",
		"parent_code": "130800",
		"name": "双滦区",
		"alias": "双滦区",
		"pinyin": "ShuangLuanQu",
		"abbr": "SLQ",
		"zip": "067000",
		"level": 3
	},
	{
		"code": "130804",
		"parent_code": "130800",
		"name": "鹰手营子矿区",
		"alias": "鹰手营子矿区",
		"pinyin": "YingShouYingZiKuangQu",
		"abbr": "YSYZKQ",
		"zip": "067000",
		"level": 3
	},
	{
		"code": "130821",
		"parent_code": "130800",
		"name": "承德县",
		"alias": "承德",
		"pinyin": "ChengDe",
		"abbr": "CD",
		"zip": "067400",
		"level": 3
	},
	{
		"code": "130822",
		"parent_code": "130800",
		"name": "兴隆县",
		"alias": "兴隆",
		"pinyin": "XingLong",
		"abbr": "XL",
		"zip": "067300",
		"level": 3
	},
	{
		"code": "130823",
		"parent_code": "130800",
		"name": "平泉县",
		"alias": "平泉",
		"pinyin": "PingQuan",
		"abbr": "PQ",
		"zip": "067500",
		"level": 3
	},
	{
		"code": "130824",
		"parent_code": "130800",
		"name": "滦平县",
		"alias": "滦平",
		"pinyin": "LuanPing",
		"abbr": "LP",
		"zip": "068250",
		"level": 3
	},
	{
		"code": "130825",
		"parent_code": "130800",
		"name": "隆化县",
		"alias": "隆化",
		"pinyin": "LongHua",
		"abbr": "LH",
		"zip": "068150",
		"level": 3
	},
	{
		"code": "130826",
		"parent_code": "130800",
		"name": "丰宁满族自治县",
		"alias": "丰宁满族",
		"pinyin": "FengNingManZu",
		"abbr": "FNMZ",
		"zip": "068350",
		"level": 3
	},
	{
		"code": "130827",
		"parent_code": "130800",
		"name": "宽城满族自治县",
		"alias": "宽城满族",
		"pinyin": "KuanChengManZu",
		"abbr": "KCMZ",
		"zip": "067600",
		"level": 3
	},
	{
		"code": "130828",
		"parent_code": "130800",
		"name": "围场满族蒙古族自治县",
		"alias": "围场满族蒙古族",
		"pinyin": "WeiChangManZuMengGuZu",
		"abbr": "WCMZMGZ",
		"zip": "068450",
		"level": 3
	},
	{
		"code": "130900",
		"parent_code": "130000",
		"name": "沧州市",
		"alias": "沧州",
		"pinyin": "CangZhou",
		"abbr": "CZ",
		"zip": "061000",
		"level": 2
	},
	{
		"code": "130902",
		"parent_code": "130900",
		"name": "新华区",
		"alias": "新华区",
		"pinyin": "XinHuaQu",
		"abbr": "XHQ",
		"zip": "061000",
		"level": 3
	},
	{
		"code": "130903",
		"parent_code": "130900",
		"name": "运河区",
		"alias": "运河区",
		"pinyin": "YunHeQu",
		"abbr": "YHQ",
		"zip": "061000",
		"level": 3
	},
	{
		"code": "130921",
		"parent_code": "130900",
		"name": "沧县",
		"alias": "沧县",
		"pinyin": "CangXian",
		"abbr": "CX",
		"zip": "061035",
		"level": 3
	},
	{
		"code": "130922",
		"parent_code": "130900",
		"name": "青县",
		"alias": "青县",
		"pinyin": "QingXian",
		"abbr": "QX",
		"zip": "062650",
		"level": 3
	},
	{
		"code": "130923",
		"parent_code": "130900",
		"name": "东光县",
		"alias": "东光",
		"pinyin": "DongGuang",
		"abbr": "DG",
		"zip": "061600",
		"level": 3
	},
	{
		"code": "130924",
		"parent_code": "130900",
		"name": "海兴县",
		"alias": "海兴",
		"pinyin": "HaiXing",
		"abbr": "HX",
		"zip": "061200",
		"level": 3
	},
	{
		"code": "130925",
		"parent_code": "130900",
		"name": "盐山县",
		"alias": "盐山",
		"pinyin": "YanShan",
		"abbr": "YS",
		"zip": "061300",
		"level": 3
	},
	{
		"code": "130926",
		"parent_code": "130900",
		"name": "肃宁县",
		"alias": "肃宁",
		"pinyin": "SuNing",
		"abbr": "SN",
		"zip": "062350",
		"level": 3
	},
	{
		"code": "130927",
		"parent_code": "130900",
		"name": "南皮县",
		"alias": "南皮",
		"pinyin": "NanPi",
		"abbr": "NP",
		"zip": "061500",
		"level": 3
	},
	{
		"code": "130928",
		"parent_code": "130900",
		"name": "吴桥县",
		"alias": "吴桥",
		"pinyin": "WuQiao",
		"abbr": "WQ",
		"zip": "061800",
		"level": 3
	},
	{
		"code": "130929",
		"parent_code": "130900",
		"name": "献县",
		"alias": "献县",
		"pinyin": "XianXian",
		"abbr": "XX",
		"zip": "062250",
		"level": 3
	},
	{
		"code": "130930",
		"parent_code": "130900",
		"name": "孟村回族自治县",
		"alias": "孟村回族",
		"pinyin": "MengCunHuiZu",
		"abbr": "MCHZ",
		"zip": "061400",
		"level": 3
	},
	{
		"code": "130981",
		"parent_code": "130900",
		"name": "泊头市",
		"alias": "泊头",
		"pinyin": "PoTou",
		"abbr": "PT",
		"zip": "062150",
		"level": 3
	},
	{
		"code": "130982",
		"parent_code": "130900",
		"name": "任丘市",
		"alias": "任丘",
		"pinyin": "RenQiu",
		"abbr": "RQ",
		"zip": "062550",
		"level": 3
	},
	{
		"code": "130983",
		"parent_code": "130900",
		"name": "黄骅市",
		"alias": "黄骅",
		"pinyin": "HuangHua",
		"abbr": "HH",
		"zip": "061100",
		"level": 3
	},
	{
		"code": "130984",
		"parent_code": "130900",
		"name": "河间市",
		"alias": "河间",
		"pinyin": "HeJian",
		"abbr": "HJ",
		"zip": "062450",
		"level": 3
	},
	{
		"code": "131000",
		"parent_code": "130000",
		"name": "廊坊市",
		"alias": "廊坊",
		"pinyin": "LangFang",
		"abbr": "LF",
		"zip": "065000",
		"level": 2
	},
	{
		"code": "131002",
		"parent_code": "131000",
		"name": "安次区",
		"alias": "安次区",
		"pinyin": "AnCiQu",
		"abbr": "ACQ",
		"zip": "065000",
		"level": 3
	},
	{
		"code": "131003",
		"parent_code": "131000",
		"name": "广阳区",
		"alias": "广阳区",
		"pinyin": "GuangYangQu",
		"abbr": "GYQ",
		"zip": "065000",
		"level": 3
	},
	{
		"code": "131022",
		"parent_code": "131000",
		"name": "固安县",
		"alias": "固安",
		"pinyin": "GuAn",
		"abbr": "GA",
		"zip": "065500",
		"level": 3
	},
	{
		"code": "131023",
		"parent_code": "131000",
		"name": "永清县",
		"alias": "永清",
		"pinyin": "YongQing",
		"abbr": "YQ",
		"zip": "065600",
		"level": 3
	},
	{
		"code": "131024",
		"parent_code": "131000",
		"name": "香河县",
		"alias": "香河",
		"pinyin": "XiangHe",
		"abbr": "XH",
		"zip": "065400",
		"level": 3
	},
	{
		"code": "131025",
		"parent_code": "131000",
		"name": "大城县",
		"alias": "大城",
		"pinyin": "DaCheng",
		"abbr": "DC",
		"zip": "065900",
		"level": 3
	},
	{
		"code": "131026",
		"parent_code": "131000",
		"name": "文安县",
		"alias": "文安",
		"pinyin": "WenAn",
		"abbr": "WA",
		"zip": "065800",
		"level": 3
	},
	{
		"code": "131028",
		"parent_code": "131000",
		"name": "大厂回族自治县",
		"alias": "大厂回族",
		"pinyin": "DaChangHuiZu",
		"abbr": "DCHZ",
		"zip": "065300",
		"level": 3
	},
	{
		"code": "131081",
		"parent_code": "131000",
		"name": "霸州市",
		"alias": "霸州",
		"pinyin": "BaZhou",
		"abbr": "BZ",
		"zip": "065700",
		"level": 3
	},
	{
		"code": "131082",
		"parent_code": "131000",
		"name": "三河市",
		"alias": "三河",
		"pinyin": "SanHe",
		"abbr": "SH",
		"zip": "065200",
		"level": 3
	},
	{
		"code": "131100",
		"parent_code": "130000",
		"name": "衡水市",
		"alias": "衡水",
		"pinyin": "HengShui",
		"abbr": "HS",
		"zip": "053000",
		"level": 2
	},
	{
		"code": "131102",
		"parent_code": "131100",
		"name": "桃城区",
		"alias": "桃城区",
		"pinyin": "TaoChengQu",
		"abbr": "TCQ",
		"zip": "053000",
		"level": 3
	},
	{
		"code": "131121",
		"parent_code": "131100",
		"name": "枣强县",
		"alias": "枣强",
		"pinyin": "ZaoQiang",
		"abbr": "ZQ",
		"zip": "053100",
		"level": 3
	},
	{
		"code": "131122",
		"parent_code": "131100",
		"name": "武邑县",
		"alias": "武邑",
		"pinyin": "WuYi",
		"abbr": "WY",
		"zip": "053400",
		"level": 3
	},
	{
		"code": "131123",
		"parent_code": "131100",
		"name": "武强县",
		"alias": "武强",
		"pinyin": "WuQiang",
		"abbr": "WQ",
		"zip": "053300",
		"level": 3
	},
	{
		"code": "131124",
		"parent_code": "131100",
		"name": "饶阳县",
		"alias": "饶阳",
		"pinyin": "RaoYang",
		"abbr": "RY",
		"zip": "053900",
		"level": 3
	},
	{
		"code": "131125",
		"parent_code": "131100",
		"name": "安平县",
		"alias": "安平",
		"pinyin": "AnPing",
		"abbr": "AP",
		"zip": "053600",
		"level": 3
	},
	{
		"code": "131126",
		"parent_code": "131100",
		"name": "故城县",
		"alias": "故城",
		"pinyin": "GuCheng",
		"abbr": "GC",
		"zip": "253800",
		"level": 3
	},
	{
		"code": "131127",
		"parent_code": "131100",
		"name": "景县",
		"alias": "景县",
		"pinyin": "JingXian",
		"abbr": "JX",
		"zip": "053500",
		"level": 3
	},
	{
		"code": "131128",
		"parent_code": "131100",
		"name": "阜城县",
		"alias": "阜城",
		"pinyin": "FuCheng",
		"abbr": "FC",
		"zip": "053700",
		"level": 3
	},
	{
		"code": "131181",
		"parent_code": "131100",
		"name": "冀州市",
		"alias": "冀州",
		"pinyin": "JiZhou",
		"abbr": "JZ",
		"zip": "053200",
		"level": 3
	},
	{
		"code": "131182",
		"parent_code": "131100",
		"name": "深州市",
		"alias": "深州",
		"pinyin": "ShenZhou",
		"abbr": "SZ",
		"zip": "053800",
		"level": 3
	},
	{
		"code": "140000",
		"parent_code": null,
		"name": "山西省",
		"alias": "山西",
		"pinyin": "ShanXi",
		"abbr": "SX",
		"zip": "030000",
		"level": 1
	},
	{
		"code": "140100",
		"parent_code": "140000",
		"name": "太原市",
		"alias": "太原",
		"pinyin": "TaiYuan",
		"abbr": "TY",
		"zip": "030000",
		"level": 2
	},
	{
		"code": "140105",
		"parent_code": "140100",
		"name": "小店区",
		"alias": "小店区",
		"pinyin": "XiaoDianQu",
		"abbr": "XDQ",
		"zip": "030032",
		"level": 3
	},
	{
		"code": "140106",
		"parent_code": "140100",
		"name": "迎泽区",
		"alias": "迎泽区",
		"pinyin": "YingZeQu",
		"abbr": "YZQ",
		"zip": "030024",
		"level": 3
	},
	{
		"code": "140107",
		"parent_code": "140100",
		"name": "杏花岭区",
		"alias": "杏花岭区",
		"pinyin": "XingHuaLingQu",
		"abbr": "XHLQ",
		"zip": "030001",
		"level": 3
	},
	{
		"code": "140108",
		"parent_code": "140100",
		"name": "尖草坪区",
		"alias": "尖草坪区",
		"pinyin": "JianCaoPingQu",
		"abbr": "JCPQ",
		"zip": "030003",
		"level": 3
	},
	{
		"code": "140109",
		"parent_code": "140100",
		"name": "万柏林区",
		"alias": "万柏林区",
		"pinyin": "WanBaiLinQu",
		"abbr": "WBLQ",
		"zip": "030027",
		"level": 3
	},
	{
		"code": "140110",
		"parent_code": "140100",
		"name": "晋源区",
		"alias": "晋源区",
		"pinyin": "JinYuanQu",
		"abbr": "JYQ",
		"zip": "030025",
		"level": 3
	},
	{
		"code": "140121",
		"parent_code": "140100",
		"name": "清徐县",
		"alias": "清徐",
		"pinyin": "QingXu",
		"abbr": "QX",
		"zip": "030400",
		"level": 3
	},
	{
		"code": "140122",
		"parent_code": "140100",
		"name": "阳曲县",
		"alias": "阳曲",
		"pinyin": "YangQu",
		"abbr": "YQ",
		"zip": "030100",
		"level": 3
	},
	{
		"code": "140123",
		"parent_code": "140100",
		"name": "娄烦县",
		"alias": "娄烦",
		"pinyin": "LouFan",
		"abbr": "LF",
		"zip": "030300",
		"level": 3
	},
	{
		"code": "140181",
		"parent_code": "140100",
		"name": "古交市",
		"alias": "古交",
		"pinyin": "GuJiao",
		"abbr": "GJ",
		"zip": "030200",
		"level": 3
	},
	{
		"code": "140200",
		"parent_code": "140000",
		"name": "大同市",
		"alias": "大同",
		"pinyin": "DaTong",
		"abbr": "DT",
		"zip": "037000",
		"level": 2
	},
	{
		"code": "140202",
		"parent_code": "140200",
		"name": "城区",
		"alias": "城区",
		"pinyin": "ChengQu",
		"abbr": "CQ",
		"zip": "037008",
		"level": 3
	},
	{
		"code": "140203",
		"parent_code": "140200",
		"name": "矿区",
		"alias": "矿区",
		"pinyin": "KuangQu",
		"abbr": "KQ",
		"zip": "037001",
		"level": 3
	},
	{
		"code": "140211",
		"parent_code": "140200",
		"name": "南郊区",
		"alias": "南郊区",
		"pinyin": "NanJiaoQu",
		"abbr": "NJQ",
		"zip": "037001",
		"level": 3
	},
	{
		"code": "140212",
		"parent_code": "140200",
		"name": "新荣区",
		"alias": "新荣区",
		"pinyin": "XinRongQu",
		"abbr": "XRQ",
		"zip": "037002",
		"level": 3
	},
	{
		"code": "140221",
		"parent_code": "140200",
		"name": "阳高县",
		"alias": "阳高",
		"pinyin": "YangGao",
		"abbr": "YG",
		"zip": "038100",
		"level": 3
	},
	{
		"code": "140222",
		"parent_code": "140200",
		"name": "天镇县",
		"alias": "天镇",
		"pinyin": "TianZhen",
		"abbr": "TZ",
		"zip": "038200",
		"level": 3
	},
	{
		"code": "140223",
		"parent_code": "140200",
		"name": "广灵县",
		"alias": "广灵",
		"pinyin": "GuangLing",
		"abbr": "GL",
		"zip": "037500",
		"level": 3
	},
	{
		"code": "140224",
		"parent_code": "140200",
		"name": "灵丘县",
		"alias": "灵丘",
		"pinyin": "LingQiu",
		"abbr": "LQ",
		"zip": "034400",
		"level": 3
	},
	{
		"code": "140225",
		"parent_code": "140200",
		"name": "浑源县",
		"alias": "浑源",
		"pinyin": "HunYuan",
		"abbr": "HY",
		"zip": "037400",
		"level": 3
	},
	{
		"code": "140226",
		"parent_code": "140200",
		"name": "左云县",
		"alias": "左云",
		"pinyin": "ZuoYun",
		"abbr": "ZY",
		"zip": "037100",
		"level": 3
	},
	{
		"code": "140227",
		"parent_code": "140200",
		"name": "大同县",
		"alias": "大同",
		"pinyin": "DaTong",
		"abbr": "DT",
		"zip": "037300",
		"level": 3
	},
	{
		"code": "140300",
		"parent_code": "140000",
		"name": "阳泉市",
		"alias": "阳泉",
		"pinyin": "YangQuan",
		"abbr": "YQ",
		"zip": "045000",
		"level": 2
	},
	{
		"code": "140302",
		"parent_code": "140300",
		"name": "城区",
		"alias": "城区",
		"pinyin": "ChengQu",
		"abbr": "CQ",
		"zip": "045000",
		"level": 3
	},
	{
		"code": "140303",
		"parent_code": "140300",
		"name": "矿区",
		"alias": "矿区",
		"pinyin": "KuangQu",
		"abbr": "KQ",
		"zip": "045000",
		"level": 3
	},
	{
		"code": "140311",
		"parent_code": "140300",
		"name": "郊区",
		"alias": "郊区",
		"pinyin": "JiaoQu",
		"abbr": "JQ",
		"zip": "045011",
		"level": 3
	},
	{
		"code": "140321",
		"parent_code": "140300",
		"name": "平定县",
		"alias": "平定",
		"pinyin": "PingDing",
		"abbr": "PD",
		"zip": "045200",
		"level": 3
	},
	{
		"code": "140322",
		"parent_code": "140300",
		"name": "盂县",
		"alias": "盂县",
		"pinyin": "YuXian",
		"abbr": "YX",
		"zip": "045100",
		"level": 3
	},
	{
		"code": "140400",
		"parent_code": "140000",
		"name": "长治市",
		"alias": "长治",
		"pinyin": "ZhangZhi",
		"abbr": "ZZ",
		"zip": "046000",
		"level": 2
	},
	{
		"code": "140402",
		"parent_code": "140400",
		"name": "城区",
		"alias": "城区",
		"pinyin": "ChengQu",
		"abbr": "CQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "140411",
		"parent_code": "140400",
		"name": "郊区",
		"alias": "郊区",
		"pinyin": "JiaoQu",
		"abbr": "JQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "140421",
		"parent_code": "140400",
		"name": "长治县",
		"alias": "长治",
		"pinyin": "ZhangZhi",
		"abbr": "ZZ",
		"zip": "047100",
		"level": 3
	},
	{
		"code": "140423",
		"parent_code": "140400",
		"name": "襄垣县",
		"alias": "襄垣",
		"pinyin": "XiangYuan",
		"abbr": "XY",
		"zip": "046200",
		"level": 3
	},
	{
		"code": "140424",
		"parent_code": "140400",
		"name": "屯留县",
		"alias": "屯留",
		"pinyin": "TunLiu",
		"abbr": "TL",
		"zip": "046100",
		"level": 3
	},
	{
		"code": "140425",
		"parent_code": "140400",
		"name": "平顺县",
		"alias": "平顺",
		"pinyin": "PingShun",
		"abbr": "PS",
		"zip": "047400",
		"level": 3
	},
	{
		"code": "140426",
		"parent_code": "140400",
		"name": "黎城县",
		"alias": "黎城",
		"pinyin": "LiCheng",
		"abbr": "LC",
		"zip": "047600",
		"level": 3
	},
	{
		"code": "140427",
		"parent_code": "140400",
		"name": "壶关县",
		"alias": "壶关",
		"pinyin": "HuGuan",
		"abbr": "HG",
		"zip": "047300",
		"level": 3
	},
	{
		"code": "140428",
		"parent_code": "140400",
		"name": "长子县",
		"alias": "长子",
		"pinyin": "ZhangZi",
		"abbr": "ZZ",
		"zip": "046600",
		"level": 3
	},
	{
		"code": "140429",
		"parent_code": "140400",
		"name": "武乡县",
		"alias": "武乡",
		"pinyin": "WuXiang",
		"abbr": "WX",
		"zip": "046300",
		"level": 3
	},
	{
		"code": "140430",
		"parent_code": "140400",
		"name": "沁县",
		"alias": "沁县",
		"pinyin": "QinXian",
		"abbr": "QX",
		"zip": "046400",
		"level": 3
	},
	{
		"code": "140431",
		"parent_code": "140400",
		"name": "沁源县",
		"alias": "沁源",
		"pinyin": "QinYuan",
		"abbr": "QY",
		"zip": "046500",
		"level": 3
	},
	{
		"code": "140481",
		"parent_code": "140400",
		"name": "潞城市",
		"alias": "潞城",
		"pinyin": "LuCheng",
		"abbr": "LC",
		"zip": "047500",
		"level": 3
	},
	{
		"code": "140500",
		"parent_code": "140000",
		"name": "晋城市",
		"alias": "晋城",
		"pinyin": "JinCheng",
		"abbr": "JC",
		"zip": "048000",
		"level": 2
	},
	{
		"code": "140502",
		"parent_code": "140500",
		"name": "城区",
		"alias": "城区",
		"pinyin": "ChengQu",
		"abbr": "CQ",
		"zip": "048000",
		"level": 3
	},
	{
		"code": "140521",
		"parent_code": "140500",
		"name": "沁水县",
		"alias": "沁水",
		"pinyin": "QinShui",
		"abbr": "QS",
		"zip": "048200",
		"level": 3
	},
	{
		"code": "140522",
		"parent_code": "140500",
		"name": "阳城县",
		"alias": "阳城",
		"pinyin": "YangCheng",
		"abbr": "YC",
		"zip": "048100",
		"level": 3
	},
	{
		"code": "140524",
		"parent_code": "140500",
		"name": "陵川县",
		"alias": "陵川",
		"pinyin": "LingChuan",
		"abbr": "LC",
		"zip": "048300",
		"level": 3
	},
	{
		"code": "140525",
		"parent_code": "140500",
		"name": "泽州县",
		"alias": "泽州",
		"pinyin": "ZeZhou",
		"abbr": "ZZ",
		"zip": "048012",
		"level": 3
	},
	{
		"code": "140581",
		"parent_code": "140500",
		"name": "高平市",
		"alias": "高平",
		"pinyin": "GaoPing",
		"abbr": "GP",
		"zip": "048400",
		"level": 3
	},
	{
		"code": "140600",
		"parent_code": "140000",
		"name": "朔州市",
		"alias": "朔州",
		"pinyin": "ShuoZhou",
		"abbr": "SZ",
		"zip": "036000",
		"level": 2
	},
	{
		"code": "140602",
		"parent_code": "140600",
		"name": "朔城区",
		"alias": "朔城区",
		"pinyin": "ShuoChengQu",
		"abbr": "SCQ",
		"zip": "038500",
		"level": 3
	},
	{
		"code": "140603",
		"parent_code": "140600",
		"name": "平鲁区",
		"alias": "平鲁区",
		"pinyin": "PingLuQu",
		"abbr": "PLQ",
		"zip": "038600",
		"level": 3
	},
	{
		"code": "140621",
		"parent_code": "140600",
		"name": "山阴县",
		"alias": "山阴",
		"pinyin": "ShanYin",
		"abbr": "SY",
		"zip": "036900",
		"level": 3
	},
	{
		"code": "140622",
		"parent_code": "140600",
		"name": "应县",
		"alias": "应县",
		"pinyin": "YingXian",
		"abbr": "YX",
		"zip": "037600",
		"level": 3
	},
	{
		"code": "140623",
		"parent_code": "140600",
		"name": "右玉县",
		"alias": "右玉",
		"pinyin": "YouYu",
		"abbr": "YY",
		"zip": "037200",
		"level": 3
	},
	{
		"code": "140624",
		"parent_code": "140600",
		"name": "怀仁县",
		"alias": "怀仁",
		"pinyin": "HuaiRen",
		"abbr": "HR",
		"zip": "038300",
		"level": 3
	},
	{
		"code": "140700",
		"parent_code": "140000",
		"name": "晋中市",
		"alias": "晋中",
		"pinyin": "JinZhong",
		"abbr": "JZ",
		"zip": "030600",
		"level": 2
	},
	{
		"code": "140702",
		"parent_code": "140700",
		"name": "榆次区",
		"alias": "榆次区",
		"pinyin": "YuCiQu",
		"abbr": "YCQ",
		"zip": "030600",
		"level": 3
	},
	{
		"code": "140721",
		"parent_code": "140700",
		"name": "榆社县",
		"alias": "榆社",
		"pinyin": "YuShe",
		"abbr": "YS",
		"zip": "031800",
		"level": 3
	},
	{
		"code": "140722",
		"parent_code": "140700",
		"name": "左权县",
		"alias": "左权",
		"pinyin": "ZuoQuan",
		"abbr": "ZQ",
		"zip": "032600",
		"level": 3
	},
	{
		"code": "140723",
		"parent_code": "140700",
		"name": "和顺县",
		"alias": "和顺",
		"pinyin": "HeShun",
		"abbr": "HS",
		"zip": "032700",
		"level": 3
	},
	{
		"code": "140724",
		"parent_code": "140700",
		"name": "昔阳县",
		"alias": "昔阳",
		"pinyin": "XiYang",
		"abbr": "XY",
		"zip": "045300",
		"level": 3
	},
	{
		"code": "140725",
		"parent_code": "140700",
		"name": "寿阳县",
		"alias": "寿阳",
		"pinyin": "ShouYang",
		"abbr": "SY",
		"zip": "045400",
		"level": 3
	},
	{
		"code": "140726",
		"parent_code": "140700",
		"name": "太谷县",
		"alias": "太谷",
		"pinyin": "TaiGu",
		"abbr": "TG",
		"zip": "030800",
		"level": 3
	},
	{
		"code": "140727",
		"parent_code": "140700",
		"name": "祁县",
		"alias": "祁县",
		"pinyin": "QiXian",
		"abbr": "QX",
		"zip": "030900",
		"level": 3
	},
	{
		"code": "140728",
		"parent_code": "140700",
		"name": "平遥县",
		"alias": "平遥",
		"pinyin": "PingYao",
		"abbr": "PY",
		"zip": "031100",
		"level": 3
	},
	{
		"code": "140729",
		"parent_code": "140700",
		"name": "灵石县",
		"alias": "灵石",
		"pinyin": "LingShi",
		"abbr": "LS",
		"zip": "031300",
		"level": 3
	},
	{
		"code": "140781",
		"parent_code": "140700",
		"name": "介休市",
		"alias": "介休",
		"pinyin": "JieXiu",
		"abbr": "JX",
		"zip": "032000",
		"level": 3
	},
	{
		"code": "140800",
		"parent_code": "140000",
		"name": "运城市",
		"alias": "运城",
		"pinyin": "YunCheng",
		"abbr": "YC",
		"zip": "044000",
		"level": 2
	},
	{
		"code": "140802",
		"parent_code": "140800",
		"name": "盐湖区",
		"alias": "盐湖区",
		"pinyin": "YanHuQu",
		"abbr": "YHQ",
		"zip": "044300",
		"level": 3
	},
	{
		"code": "140821",
		"parent_code": "140800",
		"name": "临猗县",
		"alias": "临猗",
		"pinyin": "LinYi",
		"abbr": "LY",
		"zip": "044100",
		"level": 3
	},
	{
		"code": "140822",
		"parent_code": "140800",
		"name": "万荣县",
		"alias": "万荣",
		"pinyin": "WanRong",
		"abbr": "WR",
		"zip": "044200",
		"level": 3
	},
	{
		"code": "140823",
		"parent_code": "140800",
		"name": "闻喜县",
		"alias": "闻喜",
		"pinyin": "WenXi",
		"abbr": "WX",
		"zip": "043800",
		"level": 3
	},
	{
		"code": "140824",
		"parent_code": "140800",
		"name": "稷山县",
		"alias": "稷山",
		"pinyin": "JiShan",
		"abbr": "JS",
		"zip": "043200",
		"level": 3
	},
	{
		"code": "140825",
		"parent_code": "140800",
		"name": "新绛县",
		"alias": "新绛",
		"pinyin": "XinJiang",
		"abbr": "XJ",
		"zip": "043100",
		"level": 3
	},
	{
		"code": "140826",
		"parent_code": "140800",
		"name": "绛县",
		"alias": "绛县",
		"pinyin": "JiangXian",
		"abbr": "JX",
		"zip": "043600",
		"level": 3
	},
	{
		"code": "140827",
		"parent_code": "140800",
		"name": "垣曲县",
		"alias": "垣曲",
		"pinyin": "YuanQu",
		"abbr": "YQ",
		"zip": "043700",
		"level": 3
	},
	{
		"code": "140828",
		"parent_code": "140800",
		"name": "夏县",
		"alias": "夏县",
		"pinyin": "XiaXian",
		"abbr": "XX",
		"zip": "044400",
		"level": 3
	},
	{
		"code": "140829",
		"parent_code": "140800",
		"name": "平陆县",
		"alias": "平陆",
		"pinyin": "PingLu",
		"abbr": "PL",
		"zip": "044300",
		"level": 3
	},
	{
		"code": "140830",
		"parent_code": "140800",
		"name": "芮城县",
		"alias": "芮城",
		"pinyin": "RuiCheng",
		"abbr": "RC",
		"zip": "044600",
		"level": 3
	},
	{
		"code": "140881",
		"parent_code": "140800",
		"name": "永济市",
		"alias": "永济",
		"pinyin": "YongJi",
		"abbr": "YJ",
		"zip": "044500",
		"level": 3
	},
	{
		"code": "140882",
		"parent_code": "140800",
		"name": "河津市",
		"alias": "河津",
		"pinyin": "HeJin",
		"abbr": "HJ",
		"zip": "043300",
		"level": 3
	},
	{
		"code": "140900",
		"parent_code": "140000",
		"name": "忻州市",
		"alias": "忻州",
		"pinyin": "XinZhou",
		"abbr": "XZ",
		"zip": "034000",
		"level": 2
	},
	{
		"code": "140902",
		"parent_code": "140900",
		"name": "忻府区",
		"alias": "忻府区",
		"pinyin": "XinFuQu",
		"abbr": "XFQ",
		"zip": "034000",
		"level": 3
	},
	{
		"code": "140921",
		"parent_code": "140900",
		"name": "定襄县",
		"alias": "定襄",
		"pinyin": "DingXiang",
		"abbr": "DX",
		"zip": "035400",
		"level": 3
	},
	{
		"code": "140922",
		"parent_code": "140900",
		"name": "五台县",
		"alias": "五台",
		"pinyin": "WuTai",
		"abbr": "WT",
		"zip": "035500",
		"level": 3
	},
	{
		"code": "140923",
		"parent_code": "140900",
		"name": "代县",
		"alias": "代县",
		"pinyin": "DaiXian",
		"abbr": "DX",
		"zip": "034200",
		"level": 3
	},
	{
		"code": "140924",
		"parent_code": "140900",
		"name": "繁峙县",
		"alias": "繁峙",
		"pinyin": "FanZhi",
		"abbr": "FZ",
		"zip": "034300",
		"level": 3
	},
	{
		"code": "140925",
		"parent_code": "140900",
		"name": "宁武县",
		"alias": "宁武",
		"pinyin": "NingWu",
		"abbr": "NW",
		"zip": "036700",
		"level": 3
	},
	{
		"code": "140926",
		"parent_code": "140900",
		"name": "静乐县",
		"alias": "静乐",
		"pinyin": "JingLe",
		"abbr": "JL",
		"zip": "035100",
		"level": 3
	},
	{
		"code": "140927",
		"parent_code": "140900",
		"name": "神池县",
		"alias": "神池",
		"pinyin": "ShenChi",
		"abbr": "SC",
		"zip": "036100",
		"level": 3
	},
	{
		"code": "140928",
		"parent_code": "140900",
		"name": "五寨县",
		"alias": "五寨",
		"pinyin": "WuZhai",
		"abbr": "WZ",
		"zip": "036100",
		"level": 3
	},
	{
		"code": "140929",
		"parent_code": "140900",
		"name": "岢岚县",
		"alias": "岢岚",
		"pinyin": "KeLan",
		"abbr": "KL",
		"zip": "036300",
		"level": 3
	},
	{
		"code": "140930",
		"parent_code": "140900",
		"name": "河曲县",
		"alias": "河曲",
		"pinyin": "HeQu",
		"abbr": "HQ",
		"zip": "036500",
		"level": 3
	},
	{
		"code": "140931",
		"parent_code": "140900",
		"name": "保德县",
		"alias": "保德",
		"pinyin": "BaoDe",
		"abbr": "BD",
		"zip": "036600",
		"level": 3
	},
	{
		"code": "140932",
		"parent_code": "140900",
		"name": "偏关县",
		"alias": "偏关",
		"pinyin": "PianGuan",
		"abbr": "PG",
		"zip": "036400",
		"level": 3
	},
	{
		"code": "140981",
		"parent_code": "140900",
		"name": "原平市",
		"alias": "原平",
		"pinyin": "YuanPing",
		"abbr": "YP",
		"zip": "034100",
		"level": 3
	},
	{
		"code": "141000",
		"parent_code": "140000",
		"name": "临汾市",
		"alias": "临汾",
		"pinyin": "LinFen",
		"abbr": "LF",
		"zip": "041000",
		"level": 2
	},
	{
		"code": "141002",
		"parent_code": "141000",
		"name": "尧都区",
		"alias": "尧都区",
		"pinyin": "YaoDouQu",
		"abbr": "YDQ",
		"zip": "041000",
		"level": 3
	},
	{
		"code": "141021",
		"parent_code": "141000",
		"name": "曲沃县",
		"alias": "曲沃",
		"pinyin": "QuWo",
		"abbr": "QW",
		"zip": "043400",
		"level": 3
	},
	{
		"code": "141022",
		"parent_code": "141000",
		"name": "翼城县",
		"alias": "翼城",
		"pinyin": "YiCheng",
		"abbr": "YC",
		"zip": "043500",
		"level": 3
	},
	{
		"code": "141023",
		"parent_code": "141000",
		"name": "襄汾县",
		"alias": "襄汾",
		"pinyin": "XiangFen",
		"abbr": "XF",
		"zip": "041500",
		"level": 3
	},
	{
		"code": "141024",
		"parent_code": "141000",
		"name": "洪洞县",
		"alias": "洪洞",
		"pinyin": "HongDong",
		"abbr": "HD",
		"zip": "041600",
		"level": 3
	},
	{
		"code": "141025",
		"parent_code": "141000",
		"name": "古县",
		"alias": "古县",
		"pinyin": "GuXian",
		"abbr": "GX",
		"zip": "042400",
		"level": 3
	},
	{
		"code": "141026",
		"parent_code": "141000",
		"name": "安泽县",
		"alias": "安泽",
		"pinyin": "AnZe",
		"abbr": "AZ",
		"zip": "042500",
		"level": 3
	},
	{
		"code": "141027",
		"parent_code": "141000",
		"name": "浮山县",
		"alias": "浮山",
		"pinyin": "FuShan",
		"abbr": "FS",
		"zip": "042600",
		"level": 3
	},
	{
		"code": "141028",
		"parent_code": "141000",
		"name": "吉县",
		"alias": "吉县",
		"pinyin": "JiXian",
		"abbr": "JX",
		"zip": "042200",
		"level": 3
	},
	{
		"code": "141029",
		"parent_code": "141000",
		"name": "乡宁县",
		"alias": "乡宁",
		"pinyin": "XiangNing",
		"abbr": "XN",
		"zip": "042100",
		"level": 3
	},
	{
		"code": "141030",
		"parent_code": "141000",
		"name": "大宁县",
		"alias": "大宁",
		"pinyin": "DaNing",
		"abbr": "DN",
		"zip": "042300",
		"level": 3
	},
	{
		"code": "141031",
		"parent_code": "141000",
		"name": "隰县",
		"alias": "隰县",
		"pinyin": "XiXian",
		"abbr": "XX",
		"zip": "041300",
		"level": 3
	},
	{
		"code": "141032",
		"parent_code": "141000",
		"name": "永和县",
		"alias": "永和",
		"pinyin": "YongHe",
		"abbr": "YH",
		"zip": "041400",
		"level": 3
	},
	{
		"code": "141033",
		"parent_code": "141000",
		"name": "蒲县",
		"alias": "蒲县",
		"pinyin": "PuXian",
		"abbr": "PX",
		"zip": "041200",
		"level": 3
	},
	{
		"code": "141034",
		"parent_code": "141000",
		"name": "汾西县",
		"alias": "汾西",
		"pinyin": "FenXi",
		"abbr": "FX",
		"zip": "031500",
		"level": 3
	},
	{
		"code": "141081",
		"parent_code": "141000",
		"name": "侯马市",
		"alias": "侯马",
		"pinyin": "HouMa",
		"abbr": "HM",
		"zip": "043000",
		"level": 3
	},
	{
		"code": "141082",
		"parent_code": "141000",
		"name": "霍州市",
		"alias": "霍州",
		"pinyin": "HuoZhou",
		"abbr": "HZ",
		"zip": "031400",
		"level": 3
	},
	{
		"code": "141100",
		"parent_code": "140000",
		"name": "吕梁市",
		"alias": "吕梁",
		"pinyin": "LvLiang",
		"abbr": "LL",
		"zip": "033000",
		"level": 2
	},
	{
		"code": "141102",
		"parent_code": "141100",
		"name": "离石区",
		"alias": "离石区",
		"pinyin": "LiShiQu",
		"abbr": "LSQ",
		"zip": "033000",
		"level": 3
	},
	{
		"code": "141121",
		"parent_code": "141100",
		"name": "文水县",
		"alias": "文水",
		"pinyin": "WenShui",
		"abbr": "WS",
		"zip": "032100",
		"level": 3
	},
	{
		"code": "141122",
		"parent_code": "141100",
		"name": "交城县",
		"alias": "交城",
		"pinyin": "JiaoCheng",
		"abbr": "JC",
		"zip": "030500",
		"level": 3
	},
	{
		"code": "141123",
		"parent_code": "141100",
		"name": "兴县",
		"alias": "兴县",
		"pinyin": "XingXian",
		"abbr": "XX",
		"zip": "033601",
		"level": 3
	},
	{
		"code": "141124",
		"parent_code": "141100",
		"name": "临县",
		"alias": "临县",
		"pinyin": "LinXian",
		"abbr": "LX",
		"zip": "033200",
		"level": 3
	},
	{
		"code": "141125",
		"parent_code": "141100",
		"name": "柳林县",
		"alias": "柳林",
		"pinyin": "LiuLin",
		"abbr": "LL",
		"zip": "033300",
		"level": 3
	},
	{
		"code": "141126",
		"parent_code": "141100",
		"name": "石楼县",
		"alias": "石楼",
		"pinyin": "ShiLou",
		"abbr": "SL",
		"zip": "032500",
		"level": 3
	},
	{
		"code": "141127",
		"parent_code": "141100",
		"name": "岚县",
		"alias": "岚县",
		"pinyin": "LanXian",
		"abbr": "LX",
		"zip": "033500",
		"level": 3
	},
	{
		"code": "141128",
		"parent_code": "141100",
		"name": "方山县",
		"alias": "方山",
		"pinyin": "FangShan",
		"abbr": "FS",
		"zip": "033100",
		"level": 3
	},
	{
		"code": "141129",
		"parent_code": "141100",
		"name": "中阳县",
		"alias": "中阳",
		"pinyin": "ZhongYang",
		"abbr": "ZY",
		"zip": "033400",
		"level": 3
	},
	{
		"code": "141130",
		"parent_code": "141100",
		"name": "交口县",
		"alias": "交口",
		"pinyin": "JiaoKou",
		"abbr": "JK",
		"zip": "032400",
		"level": 3
	},
	{
		"code": "141181",
		"parent_code": "141100",
		"name": "孝义市",
		"alias": "孝义",
		"pinyin": "XiaoYi",
		"abbr": "XY",
		"zip": "032208",
		"level": 3
	},
	{
		"code": "141182",
		"parent_code": "141100",
		"name": "汾阳市",
		"alias": "汾阳",
		"pinyin": "FenYang",
		"abbr": "FY",
		"zip": "032200",
		"level": 3
	},
	{
		"code": "150000",
		"parent_code": null,
		"name": "内蒙古自治区",
		"alias": "内蒙古",
		"pinyin": "NeiMengGu",
		"abbr": "NMG",
		"zip": "010000",
		"level": 1
	},
	{
		"code": "150100",
		"parent_code": "150000",
		"name": "呼和浩特市",
		"alias": "呼和浩特",
		"pinyin": "HuHeHaoTe",
		"abbr": "HHHT",
		"zip": "010000",
		"level": 2
	},
	{
		"code": "150102",
		"parent_code": "150100",
		"name": "新城区",
		"alias": "新城区",
		"pinyin": "XinChengQu",
		"abbr": "XCQ",
		"zip": "010050",
		"level": 3
	},
	{
		"code": "150103",
		"parent_code": "150100",
		"name": "回民区",
		"alias": "回民区",
		"pinyin": "HuiMinQu",
		"abbr": "HMQ",
		"zip": "010030",
		"level": 3
	},
	{
		"code": "150104",
		"parent_code": "150100",
		"name": "玉泉区",
		"alias": "玉泉区",
		"pinyin": "YuQuanQu",
		"abbr": "YQQ",
		"zip": "010020",
		"level": 3
	},
	{
		"code": "150105",
		"parent_code": "150100",
		"name": "赛罕区",
		"alias": "赛罕区",
		"pinyin": "SaiHanQu",
		"abbr": "SHQ",
		"zip": "010020",
		"level": 3
	},
	{
		"code": "150121",
		"parent_code": "150100",
		"name": "土默特左旗",
		"alias": "土默特左旗",
		"pinyin": "TuMoTeZuoQi",
		"abbr": "TMTZQ",
		"zip": "010100",
		"level": 3
	},
	{
		"code": "150122",
		"parent_code": "150100",
		"name": "托克托县",
		"alias": "托克托",
		"pinyin": "TuoKeTuo",
		"abbr": "TKT",
		"zip": "010200",
		"level": 3
	},
	{
		"code": "150123",
		"parent_code": "150100",
		"name": "和林格尔县",
		"alias": "和林格尔",
		"pinyin": "HeLinGeEr",
		"abbr": "HLGE",
		"zip": "011500",
		"level": 3
	},
	{
		"code": "150124",
		"parent_code": "150100",
		"name": "清水河县",
		"alias": "清水河",
		"pinyin": "QingShuiHe",
		"abbr": "QSH",
		"zip": "011600",
		"level": 3
	},
	{
		"code": "150125",
		"parent_code": "150100",
		"name": "武川县",
		"alias": "武川",
		"pinyin": "WuChuan",
		"abbr": "WC",
		"zip": "011700",
		"level": 3
	},
	{
		"code": "150200",
		"parent_code": "150000",
		"name": "包头市",
		"alias": "包头",
		"pinyin": "BaoTou",
		"abbr": "BT",
		"zip": "014000",
		"level": 2
	},
	{
		"code": "150202",
		"parent_code": "150200",
		"name": "东河区",
		"alias": "东河区",
		"pinyin": "DongHeQu",
		"abbr": "DHQ",
		"zip": "014040",
		"level": 3
	},
	{
		"code": "150203",
		"parent_code": "150200",
		"name": "昆都仑区",
		"alias": "昆都仑区",
		"pinyin": "KunDouLunQu",
		"abbr": "KDLQ",
		"zip": "014010",
		"level": 3
	},
	{
		"code": "150204",
		"parent_code": "150200",
		"name": "青山区",
		"alias": "青山区",
		"pinyin": "QingShanQu",
		"abbr": "QSQ",
		"zip": "014030",
		"level": 3
	},
	{
		"code": "150205",
		"parent_code": "150200",
		"name": "石拐区",
		"alias": "石拐区",
		"pinyin": "ShiGuaiQu",
		"abbr": "SGQ",
		"zip": "014070",
		"level": 3
	},
	{
		"code": "150206",
		"parent_code": "150200",
		"name": "白云鄂博矿区",
		"alias": "白云鄂博矿区",
		"pinyin": "BaiYunEBoKuangQu",
		"abbr": "BYEBKQ",
		"zip": "014080",
		"level": 3
	},
	{
		"code": "150207",
		"parent_code": "150200",
		"name": "九原区",
		"alias": "九原区",
		"pinyin": "JiuYuanQu",
		"abbr": "JYQ",
		"zip": "014060",
		"level": 3
	},
	{
		"code": "150221",
		"parent_code": "150200",
		"name": "土默特右旗",
		"alias": "土默特右旗",
		"pinyin": "TuMoTeYouQi",
		"abbr": "TMTYQ",
		"zip": "014100",
		"level": 3
	},
	{
		"code": "150222",
		"parent_code": "150200",
		"name": "固阳县",
		"alias": "固阳",
		"pinyin": "GuYang",
		"abbr": "GY",
		"zip": "014200",
		"level": 3
	},
	{
		"code": "150223",
		"parent_code": "150200",
		"name": "达尔罕茂明安联合旗",
		"alias": "达尔罕茂明安联合旗",
		"pinyin": "DaErHanMaoMingAnLianHeQi",
		"abbr": "DEHMMALHQ",
		"zip": "014500",
		"level": 3
	},
	{
		"code": "150300",
		"parent_code": "150000",
		"name": "乌海市",
		"alias": "乌海",
		"pinyin": "WuHai",
		"abbr": "WH",
		"zip": "016000",
		"level": 2
	},
	{
		"code": "150302",
		"parent_code": "150300",
		"name": "海勃湾区",
		"alias": "海勃湾区",
		"pinyin": "HaiBoWanQu",
		"abbr": "HBWQ",
		"zip": "016000",
		"level": 3
	},
	{
		"code": "150303",
		"parent_code": "150300",
		"name": "海南区",
		"alias": "海南区",
		"pinyin": "HaiNanQu",
		"abbr": "HNQ",
		"zip": "016030",
		"level": 3
	},
	{
		"code": "150304",
		"parent_code": "150300",
		"name": "乌达区",
		"alias": "乌达区",
		"pinyin": "WuDaQu",
		"abbr": "WDQ",
		"zip": "016040",
		"level": 3
	},
	{
		"code": "150400",
		"parent_code": "150000",
		"name": "赤峰市",
		"alias": "赤峰",
		"pinyin": "ChiFeng",
		"abbr": "CF",
		"zip": "024000",
		"level": 2
	},
	{
		"code": "150402",
		"parent_code": "150400",
		"name": "红山区",
		"alias": "红山区",
		"pinyin": "HongShanQu",
		"abbr": "HSQ",
		"zip": "024020",
		"level": 3
	},
	{
		"code": "150403",
		"parent_code": "150400",
		"name": "元宝山区",
		"alias": "元宝山区",
		"pinyin": "YuanBaoShanQu",
		"abbr": "YBSQ",
		"zip": "024076",
		"level": 3
	},
	{
		"code": "150404",
		"parent_code": "150400",
		"name": "松山区",
		"alias": "松山区",
		"pinyin": "SongShanQu",
		"abbr": "SSQ",
		"zip": "024005",
		"level": 3
	},
	{
		"code": "150421",
		"parent_code": "150400",
		"name": "阿鲁科尔沁旗",
		"alias": "阿鲁科尔沁旗",
		"pinyin": "ALuKeErQinQi",
		"abbr": "ALKEQQ",
		"zip": "025550",
		"level": 3
	},
	{
		"code": "150422",
		"parent_code": "150400",
		"name": "巴林左旗",
		"alias": "巴林左旗",
		"pinyin": "BaLinZuoQi",
		"abbr": "BLZQ",
		"zip": "025450",
		"level": 3
	},
	{
		"code": "150423",
		"parent_code": "150400",
		"name": "巴林右旗",
		"alias": "巴林右旗",
		"pinyin": "BaLinYouQi",
		"abbr": "BLYQ",
		"zip": "025150",
		"level": 3
	},
	{
		"code": "150424",
		"parent_code": "150400",
		"name": "林西县",
		"alias": "林西",
		"pinyin": "LinXi",
		"abbr": "LX",
		"zip": "025250",
		"level": 3
	},
	{
		"code": "150425",
		"parent_code": "150400",
		"name": "克什克腾旗",
		"alias": "克什克腾旗",
		"pinyin": "KeShenKeTengQi",
		"abbr": "KSKTQ",
		"zip": "025350",
		"level": 3
	},
	{
		"code": "150426",
		"parent_code": "150400",
		"name": "翁牛特旗",
		"alias": "翁牛特旗",
		"pinyin": "WengNiuTeQi",
		"abbr": "WNTQ",
		"zip": "024500",
		"level": 3
	},
	{
		"code": "150428",
		"parent_code": "150400",
		"name": "喀喇沁旗",
		"alias": "喀喇沁旗",
		"pinyin": "KaLaQinQi",
		"abbr": "KLQQ",
		"zip": "024400",
		"level": 3
	},
	{
		"code": "150429",
		"parent_code": "150400",
		"name": "宁城县",
		"alias": "宁城",
		"pinyin": "NingCheng",
		"abbr": "NC",
		"zip": "024200",
		"level": 3
	},
	{
		"code": "150430",
		"parent_code": "150400",
		"name": "敖汉旗",
		"alias": "敖汉旗",
		"pinyin": "AoHanQi",
		"abbr": "AHQ",
		"zip": "024300",
		"level": 3
	},
	{
		"code": "150500",
		"parent_code": "150000",
		"name": "通辽市",
		"alias": "通辽",
		"pinyin": "TongLiao",
		"abbr": "TL",
		"zip": "028000",
		"level": 2
	},
	{
		"code": "150502",
		"parent_code": "150500",
		"name": "科尔沁区",
		"alias": "科尔沁区",
		"pinyin": "KeErQinQu",
		"abbr": "KEQQ",
		"zip": "028000",
		"level": 3
	},
	{
		"code": "150521",
		"parent_code": "150500",
		"name": "科尔沁左翼中旗",
		"alias": "科尔沁左翼中旗",
		"pinyin": "KeErQinZuoYiZhongQi",
		"abbr": "KEQZYZQ",
		"zip": "029300",
		"level": 3
	},
	{
		"code": "150522",
		"parent_code": "150500",
		"name": "科尔沁左翼后旗",
		"alias": "科尔沁左翼后旗",
		"pinyin": "KeErQinZuoYiHouQi",
		"abbr": "KEQZYHQ",
		"zip": "028100",
		"level": 3
	},
	{
		"code": "150523",
		"parent_code": "150500",
		"name": "开鲁县",
		"alias": "开鲁",
		"pinyin": "KaiLu",
		"abbr": "KL",
		"zip": "028400",
		"level": 3
	},
	{
		"code": "150524",
		"parent_code": "150500",
		"name": "库伦旗",
		"alias": "库伦旗",
		"pinyin": "KuLunQi",
		"abbr": "KLQ",
		"zip": "028200",
		"level": 3
	},
	{
		"code": "150525",
		"parent_code": "150500",
		"name": "奈曼旗",
		"alias": "奈曼旗",
		"pinyin": "NaiManQi",
		"abbr": "NMQ",
		"zip": "028300",
		"level": 3
	},
	{
		"code": "150526",
		"parent_code": "150500",
		"name": "扎鲁特旗",
		"alias": "扎鲁特旗",
		"pinyin": "ZhaLuTeQi",
		"abbr": "ZLTQ",
		"zip": "029100",
		"level": 3
	},
	{
		"code": "150581",
		"parent_code": "150500",
		"name": "霍林郭勒市",
		"alias": "霍林郭勒",
		"pinyin": "HuoLinGuoLei",
		"abbr": "HLGL",
		"zip": "029200",
		"level": 3
	},
	{
		"code": "150600",
		"parent_code": "150000",
		"name": "鄂尔多斯市",
		"alias": "鄂尔多斯",
		"pinyin": "EErDuoSi",
		"abbr": "EEDS",
		"zip": "017004",
		"level": 2
	},
	{
		"code": "150602",
		"parent_code": "150600",
		"name": "东胜区",
		"alias": "东胜区",
		"pinyin": "DongShengQu",
		"abbr": "DSQ",
		"zip": "017000",
		"level": 3
	},
	{
		"code": "150621",
		"parent_code": "150600",
		"name": "达拉特旗",
		"alias": "达拉特旗",
		"pinyin": "DaLaTeQi",
		"abbr": "DLTQ",
		"zip": "014300",
		"level": 3
	},
	{
		"code": "150622",
		"parent_code": "150600",
		"name": "准格尔旗",
		"alias": "准格尔旗",
		"pinyin": "ZhunGeErQi",
		"abbr": "ZGEQ",
		"zip": "017100",
		"level": 3
	},
	{
		"code": "150623",
		"parent_code": "150600",
		"name": "鄂托克前旗",
		"alias": "鄂托克前旗",
		"pinyin": "ETuoKeQianQi",
		"abbr": "ETKQQ",
		"zip": "016200",
		"level": 3
	},
	{
		"code": "150624",
		"parent_code": "150600",
		"name": "鄂托克旗",
		"alias": "鄂托克旗",
		"pinyin": "ETuoKeQi",
		"abbr": "ETKQ",
		"zip": "016100",
		"level": 3
	},
	{
		"code": "150625",
		"parent_code": "150600",
		"name": "杭锦旗",
		"alias": "杭锦旗",
		"pinyin": "HangJinQi",
		"abbr": "HJQ",
		"zip": "017400",
		"level": 3
	},
	{
		"code": "150626",
		"parent_code": "150600",
		"name": "乌审旗",
		"alias": "乌审旗",
		"pinyin": "WuShenQi",
		"abbr": "WSQ",
		"zip": "017300",
		"level": 3
	},
	{
		"code": "150627",
		"parent_code": "150600",
		"name": "伊金霍洛旗",
		"alias": "伊金霍洛旗",
		"pinyin": "YiJinHuoLuoQi",
		"abbr": "YJHLQ",
		"zip": "017200",
		"level": 3
	},
	{
		"code": "150700",
		"parent_code": "150000",
		"name": "呼伦贝尔市",
		"alias": "呼伦贝尔",
		"pinyin": "HuLunBeiEr",
		"abbr": "HLBE",
		"zip": "021008",
		"level": 2
	},
	{
		"code": "150702",
		"parent_code": "150700",
		"name": "海拉尔区",
		"alias": "海拉尔区",
		"pinyin": "HaiLaErQu",
		"abbr": "HLEQ",
		"zip": "021000",
		"level": 3
	},
	{
		"code": "150721",
		"parent_code": "150700",
		"name": "阿荣旗",
		"alias": "阿荣旗",
		"pinyin": "ARongQi",
		"abbr": "ARQ",
		"zip": "162750",
		"level": 3
	},
	{
		"code": "150722",
		"parent_code": "150700",
		"name": "莫力达瓦达斡尔族自治旗",
		"alias": "莫力达瓦达斡尔族自治旗",
		"pinyin": "MoLiDaWaDaWoErZuZiZhiQi",
		"abbr": "MLDWDWEZZZQ",
		"zip": "162850",
		"level": 3
	},
	{
		"code": "150723",
		"parent_code": "150700",
		"name": "鄂伦春自治旗",
		"alias": "鄂伦春自治旗",
		"pinyin": "ELunChunZiZhiQi",
		"abbr": "ELCZZQ",
		"zip": "165450",
		"level": 3
	},
	{
		"code": "150724",
		"parent_code": "150700",
		"name": "鄂温克族自治旗",
		"alias": "鄂温克族自治旗",
		"pinyin": "EWenKeZuZiZhiQi",
		"abbr": "EWKZZZQ",
		"zip": "021100",
		"level": 3
	},
	{
		"code": "150725",
		"parent_code": "150700",
		"name": "陈巴尔虎旗",
		"alias": "陈巴尔虎旗",
		"pinyin": "ChenBaErHuQi",
		"abbr": "CBEHQ",
		"zip": "021500",
		"level": 3
	},
	{
		"code": "150726",
		"parent_code": "150700",
		"name": "新巴尔虎左旗",
		"alias": "新巴尔虎左旗",
		"pinyin": "XinBaErHuZuoQi",
		"abbr": "XBEHZQ",
		"zip": "021200",
		"level": 3
	},
	{
		"code": "150727",
		"parent_code": "150700",
		"name": "新巴尔虎右旗",
		"alias": "新巴尔虎右旗",
		"pinyin": "XinBaErHuYouQi",
		"abbr": "XBEHYQ",
		"zip": "021300",
		"level": 3
	},
	{
		"code": "150781",
		"parent_code": "150700",
		"name": "满洲里市",
		"alias": "满洲里",
		"pinyin": "ManZhouLi",
		"abbr": "MZL",
		"zip": "021400",
		"level": 3
	},
	{
		"code": "150782",
		"parent_code": "150700",
		"name": "牙克石市",
		"alias": "牙克石",
		"pinyin": "YaKeShi",
		"abbr": "YKS",
		"zip": "162650",
		"level": 3
	},
	{
		"code": "150783",
		"parent_code": "150700",
		"name": "扎兰屯市",
		"alias": "扎兰屯",
		"pinyin": "ZhaLanTun",
		"abbr": "ZLT",
		"zip": "162650",
		"level": 3
	},
	{
		"code": "150784",
		"parent_code": "150700",
		"name": "额尔古纳市",
		"alias": "额尔古纳",
		"pinyin": "EErGuNa",
		"abbr": "EEGN",
		"zip": "022250",
		"level": 3
	},
	{
		"code": "150785",
		"parent_code": "150700",
		"name": "根河市",
		"alias": "根河",
		"pinyin": "GenHe",
		"abbr": "GH",
		"zip": "022350",
		"level": 3
	},
	{
		"code": "150800",
		"parent_code": "150000",
		"name": "巴彦淖尔市",
		"alias": "巴彦淖尔",
		"pinyin": "BaYanNaoEr",
		"abbr": "BYNE",
		"zip": "015001",
		"level": 2
	},
	{
		"code": "150802",
		"parent_code": "150800",
		"name": "临河区",
		"alias": "临河区",
		"pinyin": "LinHeQu",
		"abbr": "LHQ",
		"zip": "015001",
		"level": 3
	},
	{
		"code": "150821",
		"parent_code": "150800",
		"name": "五原县",
		"alias": "五原",
		"pinyin": "WuYuan",
		"abbr": "WY",
		"zip": "015100",
		"level": 3
	},
	{
		"code": "150822",
		"parent_code": "150800",
		"name": "磴口县",
		"alias": "磴口",
		"pinyin": "DengKou",
		"abbr": "DK",
		"zip": "015200",
		"level": 3
	},
	{
		"code": "150823",
		"parent_code": "150800",
		"name": "乌拉特前旗",
		"alias": "乌拉特前旗",
		"pinyin": "WuLaTeQianQi",
		"abbr": "WLTQQ",
		"zip": "015400",
		"level": 3
	},
	{
		"code": "150824",
		"parent_code": "150800",
		"name": "乌拉特中旗",
		"alias": "乌拉特中旗",
		"pinyin": "WuLaTeZhongQi",
		"abbr": "WLTZQ",
		"zip": "015300",
		"level": 3
	},
	{
		"code": "150825",
		"parent_code": "150800",
		"name": "乌拉特后旗",
		"alias": "乌拉特后旗",
		"pinyin": "WuLaTeHouQi",
		"abbr": "WLTHQ",
		"zip": "015500",
		"level": 3
	},
	{
		"code": "150826",
		"parent_code": "150800",
		"name": "杭锦后旗",
		"alias": "杭锦后旗",
		"pinyin": "HangJinHouQi",
		"abbr": "HJHQ",
		"zip": "015400",
		"level": 3
	},
	{
		"code": "150900",
		"parent_code": "150000",
		"name": "乌兰察布市",
		"alias": "乌兰察布",
		"pinyin": "WuLanChaBu",
		"abbr": "WLCB",
		"zip": "012000",
		"level": 2
	},
	{
		"code": "150902",
		"parent_code": "150900",
		"name": "集宁区",
		"alias": "集宁区",
		"pinyin": "JiNingQu",
		"abbr": "JNQ",
		"zip": "012000",
		"level": 3
	},
	{
		"code": "150921",
		"parent_code": "150900",
		"name": "卓资县",
		"alias": "卓资",
		"pinyin": "ZhuoZi",
		"abbr": "ZZ",
		"zip": "012300",
		"level": 3
	},
	{
		"code": "150922",
		"parent_code": "150900",
		"name": "化德县",
		"alias": "化德",
		"pinyin": "HuaDe",
		"abbr": "HD",
		"zip": "013350",
		"level": 3
	},
	{
		"code": "150923",
		"parent_code": "150900",
		"name": "商都县",
		"alias": "商都",
		"pinyin": "ShangDou",
		"abbr": "SD",
		"zip": "013400",
		"level": 3
	},
	{
		"code": "150924",
		"parent_code": "150900",
		"name": "兴和县",
		"alias": "兴和",
		"pinyin": "XingHe",
		"abbr": "XH",
		"zip": "013650",
		"level": 3
	},
	{
		"code": "150925",
		"parent_code": "150900",
		"name": "凉城县",
		"alias": "凉城",
		"pinyin": "LiangCheng",
		"abbr": "LC",
		"zip": "013750",
		"level": 3
	},
	{
		"code": "150926",
		"parent_code": "150900",
		"name": "察哈尔右翼前旗",
		"alias": "察哈尔右翼前旗",
		"pinyin": "ChaHaErYouYiQianQi",
		"abbr": "CHEYYQQ",
		"zip": "012200",
		"level": 3
	},
	{
		"code": "150927",
		"parent_code": "150900",
		"name": "察哈尔右翼中旗",
		"alias": "察哈尔右翼中旗",
		"pinyin": "ChaHaErYouYiZhongQi",
		"abbr": "CHEYYZQ",
		"zip": "013550",
		"level": 3
	},
	{
		"code": "150928",
		"parent_code": "150900",
		"name": "察哈尔右翼后旗",
		"alias": "察哈尔右翼后旗",
		"pinyin": "ChaHaErYouYiHouQi",
		"abbr": "CHEYYHQ",
		"zip": "012400",
		"level": 3
	},
	{
		"code": "150929",
		"parent_code": "150900",
		"name": "四子王旗",
		"alias": "四子王旗",
		"pinyin": "SiZiWangQi",
		"abbr": "SZWQ",
		"zip": "011800",
		"level": 3
	},
	{
		"code": "150981",
		"parent_code": "150900",
		"name": "丰镇市",
		"alias": "丰镇",
		"pinyin": "FengZhen",
		"abbr": "FZ",
		"zip": "012100",
		"level": 3
	},
	{
		"code": "152200",
		"parent_code": "150000",
		"name": "兴安盟",
		"alias": "兴安盟",
		"pinyin": "XingAnMeng",
		"abbr": "XAM",
		"zip": "137401",
		"level": 2
	},
	{
		"code": "152201",
		"parent_code": "152200",
		"name": "乌兰浩特市",
		"alias": "乌兰浩特",
		"pinyin": "WuLanHaoTe",
		"abbr": "WLHT",
		"zip": "137400",
		"level": 3
	},
	{
		"code": "152202",
		"parent_code": "152200",
		"name": "阿尔山市",
		"alias": "阿尔山",
		"pinyin": "AErShan",
		"abbr": "AES",
		"zip": "137800",
		"level": 3
	},
	{
		"code": "152221",
		"parent_code": "152200",
		"name": "科尔沁右翼前旗",
		"alias": "科尔沁右翼前旗",
		"pinyin": "KeErQinYouYiQianQi",
		"abbr": "KEQYYQQ",
		"zip": "137400",
		"level": 3
	},
	{
		"code": "152222",
		"parent_code": "152200",
		"name": "科尔沁右翼中旗",
		"alias": "科尔沁右翼中旗",
		"pinyin": "KeErQinYouYiZhongQi",
		"abbr": "KEQYYZQ",
		"zip": "029400",
		"level": 3
	},
	{
		"code": "152223",
		"parent_code": "152200",
		"name": "扎赉特旗",
		"alias": "扎赉特旗",
		"pinyin": "ZhaLaiTeQi",
		"abbr": "ZLTQ",
		"zip": "137600",
		"level": 3
	},
	{
		"code": "152224",
		"parent_code": "152200",
		"name": "突泉县",
		"alias": "突泉",
		"pinyin": "TuQuan",
		"abbr": "TQ",
		"zip": "137500",
		"level": 3
	},
	{
		"code": "152500",
		"parent_code": "150000",
		"name": "锡林郭勒盟",
		"alias": "锡林郭勒盟",
		"pinyin": "XiLinGuoLeiMeng",
		"abbr": "XLGLM",
		"zip": "026021",
		"level": 2
	},
	{
		"code": "152501",
		"parent_code": "152500",
		"name": "二连浩特市",
		"alias": "二连浩特",
		"pinyin": "ErLianHaoTe",
		"abbr": "ELHT",
		"zip": "011100",
		"level": 3
	},
	{
		"code": "152502",
		"parent_code": "152500",
		"name": "锡林浩特市",
		"alias": "锡林浩特",
		"pinyin": "XiLinHaoTe",
		"abbr": "XLHT",
		"zip": "026000",
		"level": 3
	},
	{
		"code": "152522",
		"parent_code": "152500",
		"name": "阿巴嘎旗",
		"alias": "阿巴嘎旗",
		"pinyin": "ABaGaQi",
		"abbr": "ABGQ",
		"zip": "011400",
		"level": 3
	},
	{
		"code": "152523",
		"parent_code": "152500",
		"name": "苏尼特左旗",
		"alias": "苏尼特左旗",
		"pinyin": "SuNiTeZuoQi",
		"abbr": "SNTZQ",
		"zip": "011300",
		"level": 3
	},
	{
		"code": "152524",
		"parent_code": "152500",
		"name": "苏尼特右旗",
		"alias": "苏尼特右旗",
		"pinyin": "SuNiTeYouQi",
		"abbr": "SNTYQ",
		"zip": "011200",
		"level": 3
	},
	{
		"code": "152525",
		"parent_code": "152500",
		"name": "东乌珠穆沁旗",
		"alias": "东乌珠穆沁旗",
		"pinyin": "DongWuZhuMuQinQi",
		"abbr": "DWZMQQ",
		"zip": "026300",
		"level": 3
	},
	{
		"code": "152526",
		"parent_code": "152500",
		"name": "西乌珠穆沁旗",
		"alias": "西乌珠穆沁旗",
		"pinyin": "XiWuZhuMuQinQi",
		"abbr": "XWZMQQ",
		"zip": "026200",
		"level": 3
	},
	{
		"code": "152527",
		"parent_code": "152500",
		"name": "太仆寺旗",
		"alias": "太仆寺旗",
		"pinyin": "TaiPuSiQi",
		"abbr": "TPSQ",
		"zip": "027000",
		"level": 3
	},
	{
		"code": "152528",
		"parent_code": "152500",
		"name": "镶黄旗",
		"alias": "镶黄旗",
		"pinyin": "XiangHuangQi",
		"abbr": "XHQ",
		"zip": "013250",
		"level": 3
	},
	{
		"code": "152529",
		"parent_code": "152500",
		"name": "正镶白旗",
		"alias": "正镶白旗",
		"pinyin": "ZhengXiangBaiQi",
		"abbr": "ZXBQ",
		"zip": "013800",
		"level": 3
	},
	{
		"code": "152530",
		"parent_code": "152500",
		"name": "正蓝旗",
		"alias": "正蓝旗",
		"pinyin": "ZhengLanQi",
		"abbr": "ZLQ",
		"zip": "027200",
		"level": 3
	},
	{
		"code": "152531",
		"parent_code": "152500",
		"name": "多伦县",
		"alias": "多伦",
		"pinyin": "DuoLun",
		"abbr": "DL",
		"zip": "027300",
		"level": 3
	},
	{
		"code": "152900",
		"parent_code": "150000",
		"name": "阿拉善盟",
		"alias": "阿拉善盟",
		"pinyin": "ALaShanMeng",
		"abbr": "ALSM",
		"zip": "750306",
		"level": 2
	},
	{
		"code": "152921",
		"parent_code": "152900",
		"name": "阿拉善左旗",
		"alias": "阿拉善左旗",
		"pinyin": "ALaShanZuoQi",
		"abbr": "ALSZQ",
		"zip": "750300",
		"level": 3
	},
	{
		"code": "152922",
		"parent_code": "152900",
		"name": "阿拉善右旗",
		"alias": "阿拉善右旗",
		"pinyin": "ALaShanYouQi",
		"abbr": "ALSYQ",
		"zip": "737300",
		"level": 3
	},
	{
		"code": "152923",
		"parent_code": "152900",
		"name": "额济纳旗",
		"alias": "额济纳旗",
		"pinyin": "EJiNaQi",
		"abbr": "EJNQ",
		"zip": "735400",
		"level": 3
	},
	{
		"code": "210000",
		"parent_code": null,
		"name": "辽宁省",
		"alias": "辽宁",
		"pinyin": "LiaoNing",
		"abbr": "LN",
		"zip": "110000",
		"level": 1
	},
	{
		"code": "210100",
		"parent_code": "210000",
		"name": "沈阳市",
		"alias": "沈阳",
		"pinyin": "ChenYang",
		"abbr": "CY",
		"zip": "110000",
		"level": 2
	},
	{
		"code": "210102",
		"parent_code": "210100",
		"name": "和平区",
		"alias": "和平区",
		"pinyin": "HePingQu",
		"abbr": "HPQ",
		"zip": "110002",
		"level": 3
	},
	{
		"code": "210103",
		"parent_code": "210100",
		"name": "沈河区",
		"alias": "沈河区",
		"pinyin": "ChenHeQu",
		"abbr": "CHQ",
		"zip": "110013",
		"level": 3
	},
	{
		"code": "210104",
		"parent_code": "210100",
		"name": "大东区",
		"alias": "大东区",
		"pinyin": "DaDongQu",
		"abbr": "DDQ",
		"zip": "110044",
		"level": 3
	},
	{
		"code": "210105",
		"parent_code": "210100",
		"name": "皇姑区",
		"alias": "皇姑区",
		"pinyin": "HuangGuQu",
		"abbr": "HGQ",
		"zip": "110031",
		"level": 3
	},
	{
		"code": "210106",
		"parent_code": "210100",
		"name": "铁西区",
		"alias": "铁西区",
		"pinyin": "TieXiQu",
		"abbr": "TXQ",
		"zip": "110023",
		"level": 3
	},
	{
		"code": "210111",
		"parent_code": "210100",
		"name": "苏家屯区",
		"alias": "苏家屯区",
		"pinyin": "SuJiaTunQu",
		"abbr": "SJTQ",
		"zip": "110102",
		"level": 3
	},
	{
		"code": "210112",
		"parent_code": "210100",
		"name": "东陵区",
		"alias": "东陵区",
		"pinyin": "DongLingQu",
		"abbr": "DLQ",
		"zip": "110015",
		"level": 3
	},
	{
		"code": "210113",
		"parent_code": "210100",
		"name": "沈北新区",
		"alias": "沈北新区",
		"pinyin": "ChenBeiXinQu",
		"abbr": "CBXQ",
		"zip": "110121",
		"level": 3
	},
	{
		"code": "210114",
		"parent_code": "210100",
		"name": "于洪区",
		"alias": "于洪区",
		"pinyin": "YuHongQu",
		"abbr": "YHQ",
		"zip": "110024",
		"level": 3
	},
	{
		"code": "210122",
		"parent_code": "210100",
		"name": "辽中县",
		"alias": "辽中",
		"pinyin": "LiaoZhong",
		"abbr": "LZ",
		"zip": "110200",
		"level": 3
	},
	{
		"code": "210123",
		"parent_code": "210100",
		"name": "康平县",
		"alias": "康平",
		"pinyin": "KangPing",
		"abbr": "KP",
		"zip": "110500",
		"level": 3
	},
	{
		"code": "210124",
		"parent_code": "210100",
		"name": "法库县",
		"alias": "法库",
		"pinyin": "FaKu",
		"abbr": "FK",
		"zip": "110400",
		"level": 3
	},
	{
		"code": "210181",
		"parent_code": "210100",
		"name": "新民市",
		"alias": "新民",
		"pinyin": "XinMin",
		"abbr": "XM",
		"zip": "110300",
		"level": 3
	},
	{
		"code": "210200",
		"parent_code": "210000",
		"name": "大连市",
		"alias": "大连",
		"pinyin": "DaLian",
		"abbr": "DL",
		"zip": "116000",
		"level": 2
	},
	{
		"code": "210202",
		"parent_code": "210200",
		"name": "中山区",
		"alias": "中山区",
		"pinyin": "ZhongShanQu",
		"abbr": "ZSQ",
		"zip": "116001",
		"level": 3
	},
	{
		"code": "210203",
		"parent_code": "210200",
		"name": "西岗区",
		"alias": "西岗区",
		"pinyin": "XiGangQu",
		"abbr": "XGQ",
		"zip": "116011",
		"level": 3
	},
	{
		"code": "210204",
		"parent_code": "210200",
		"name": "沙河口区",
		"alias": "沙河口区",
		"pinyin": "ShaHeKouQu",
		"abbr": "SHKQ",
		"zip": "116021",
		"level": 3
	},
	{
		"code": "210211",
		"parent_code": "210200",
		"name": "甘井子区",
		"alias": "甘井子区",
		"pinyin": "GanJingZiQu",
		"abbr": "GJZQ",
		"zip": "116033",
		"level": 3
	},
	{
		"code": "210212",
		"parent_code": "210200",
		"name": "旅顺口区",
		"alias": "旅顺口区",
		"pinyin": "LvShunKouQu",
		"abbr": "LSKQ",
		"zip": "116041",
		"level": 3
	},
	{
		"code": "210213",
		"parent_code": "210200",
		"name": "金州区",
		"alias": "金州区",
		"pinyin": "JinZhouQu",
		"abbr": "JZQ",
		"zip": "116100",
		"level": 3
	},
	{
		"code": "210224",
		"parent_code": "210200",
		"name": "长海县",
		"alias": "长海",
		"pinyin": "ZhangHai",
		"abbr": "ZH",
		"zip": "116500",
		"level": 3
	},
	{
		"code": "210281",
		"parent_code": "210200",
		"name": "瓦房店市",
		"alias": "瓦房店",
		"pinyin": "WaFangDian",
		"abbr": "WFD",
		"zip": "116300",
		"level": 3
	},
	{
		"code": "210282",
		"parent_code": "210200",
		"name": "普兰店市",
		"alias": "普兰店",
		"pinyin": "PuLanDian",
		"abbr": "PLD",
		"zip": "116200",
		"level": 3
	},
	{
		"code": "210283",
		"parent_code": "210200",
		"name": "庄河市",
		"alias": "庄河",
		"pinyin": "ZhuangHe",
		"abbr": "ZH",
		"zip": "116400",
		"level": 3
	},
	{
		"code": "210300",
		"parent_code": "210000",
		"name": "鞍山市",
		"alias": "鞍山",
		"pinyin": "AnShan",
		"abbr": "AS",
		"zip": "114000",
		"level": 2
	},
	{
		"code": "210302",
		"parent_code": "210300",
		"name": "铁东区",
		"alias": "铁东区",
		"pinyin": "TieDongQu",
		"abbr": "TDQ",
		"zip": "114001",
		"level": 3
	},
	{
		"code": "210303",
		"parent_code": "210300",
		"name": "铁西区",
		"alias": "铁西区",
		"pinyin": "TieXiQu",
		"abbr": "TXQ",
		"zip": "110023",
		"level": 3
	},
	{
		"code": "210304",
		"parent_code": "210300",
		"name": "立山区",
		"alias": "立山区",
		"pinyin": "LiShanQu",
		"abbr": "LSQ",
		"zip": "114031",
		"level": 3
	},
	{
		"code": "210311",
		"parent_code": "210300",
		"name": "千山区",
		"alias": "千山区",
		"pinyin": "QianShanQu",
		"abbr": "QSQ",
		"zip": "114041",
		"level": 3
	},
	{
		"code": "210321",
		"parent_code": "210300",
		"name": "台安县",
		"alias": "台安",
		"pinyin": "TaiAn",
		"abbr": "TA",
		"zip": "114100",
		"level": 3
	},
	{
		"code": "210323",
		"parent_code": "210300",
		"name": "岫岩满族自治县",
		"alias": "岫岩满族",
		"pinyin": "XiuYanManZu",
		"abbr": "XYMZ",
		"zip": "114300",
		"level": 3
	},
	{
		"code": "210381",
		"parent_code": "210300",
		"name": "海城市",
		"alias": "海城",
		"pinyin": "HaiCheng",
		"abbr": "HC",
		"zip": "114200",
		"level": 3
	},
	{
		"code": "210400",
		"parent_code": "210000",
		"name": "抚顺市",
		"alias": "抚顺",
		"pinyin": "FuShun",
		"abbr": "FS",
		"zip": "113000",
		"level": 2
	},
	{
		"code": "210402",
		"parent_code": "210400",
		"name": "新抚区",
		"alias": "新抚区",
		"pinyin": "XinFuQu",
		"abbr": "XFQ",
		"zip": "113006",
		"level": 3
	},
	{
		"code": "210403",
		"parent_code": "210400",
		"name": "东洲区",
		"alias": "东洲区",
		"pinyin": "DongZhouQu",
		"abbr": "DZQ",
		"zip": "113003",
		"level": 3
	},
	{
		"code": "210404",
		"parent_code": "210400",
		"name": "望花区",
		"alias": "望花区",
		"pinyin": "WangHuaQu",
		"abbr": "WHQ",
		"zip": "113001",
		"level": 3
	},
	{
		"code": "210411",
		"parent_code": "210400",
		"name": "顺城区",
		"alias": "顺城区",
		"pinyin": "ShunChengQu",
		"abbr": "SCQ",
		"zip": "113006",
		"level": 3
	},
	{
		"code": "210421",
		"parent_code": "210400",
		"name": "抚顺县",
		"alias": "抚顺",
		"pinyin": "FuShun",
		"abbr": "FS",
		"zip": "113100",
		"level": 3
	},
	{
		"code": "210422",
		"parent_code": "210400",
		"name": "新宾满族自治县",
		"alias": "新宾满族",
		"pinyin": "XinBinManZu",
		"abbr": "XBMZ",
		"zip": "113200",
		"level": 3
	},
	{
		"code": "210423",
		"parent_code": "210400",
		"name": "清原满族自治县",
		"alias": "清原满族",
		"pinyin": "QingYuanManZu",
		"abbr": "QYMZ",
		"zip": "113300",
		"level": 3
	},
	{
		"code": "210500",
		"parent_code": "210000",
		"name": "本溪市",
		"alias": "本溪",
		"pinyin": "BenXi",
		"abbr": "BX",
		"zip": "117000",
		"level": 2
	},
	{
		"code": "210502",
		"parent_code": "210500",
		"name": "平山区",
		"alias": "平山区",
		"pinyin": "PingShanQu",
		"abbr": "PSQ",
		"zip": "117000",
		"level": 3
	},
	{
		"code": "210503",
		"parent_code": "210500",
		"name": "溪湖区",
		"alias": "溪湖区",
		"pinyin": "XiHuQu",
		"abbr": "XHQ",
		"zip": "117002",
		"level": 3
	},
	{
		"code": "210504",
		"parent_code": "210500",
		"name": "明山区",
		"alias": "明山区",
		"pinyin": "MingShanQu",
		"abbr": "MSQ",
		"zip": "117021",
		"level": 3
	},
	{
		"code": "210505",
		"parent_code": "210500",
		"name": "南芬区",
		"alias": "南芬区",
		"pinyin": "NanFenQu",
		"abbr": "NFQ",
		"zip": "117014",
		"level": 3
	},
	{
		"code": "210521",
		"parent_code": "210500",
		"name": "本溪满族自治县",
		"alias": "本溪满族",
		"pinyin": "BenXiManZu",
		"abbr": "BXMZ",
		"zip": "117100",
		"level": 3
	},
	{
		"code": "210522",
		"parent_code": "210500",
		"name": "桓仁满族自治县",
		"alias": "桓仁满族",
		"pinyin": "HuanRenManZu",
		"abbr": "HRMZ",
		"zip": "117200",
		"level": 3
	},
	{
		"code": "210600",
		"parent_code": "210000",
		"name": "丹东市",
		"alias": "丹东",
		"pinyin": "DanDong",
		"abbr": "DD",
		"zip": "118000",
		"level": 2
	},
	{
		"code": "210602",
		"parent_code": "210600",
		"name": "元宝区",
		"alias": "元宝区",
		"pinyin": "YuanBaoQu",
		"abbr": "YBQ",
		"zip": "118000",
		"level": 3
	},
	{
		"code": "210603",
		"parent_code": "210600",
		"name": "振兴区",
		"alias": "振兴区",
		"pinyin": "ZhenXingQu",
		"abbr": "ZXQ",
		"zip": "118002",
		"level": 3
	},
	{
		"code": "210604",
		"parent_code": "210600",
		"name": "振安区",
		"alias": "振安区",
		"pinyin": "ZhenAnQu",
		"abbr": "ZAQ",
		"zip": "118001",
		"level": 3
	},
	{
		"code": "210624",
		"parent_code": "210600",
		"name": "宽甸满族自治县",
		"alias": "宽甸满族",
		"pinyin": "KuanDianManZu",
		"abbr": "KDMZ",
		"zip": "118200",
		"level": 3
	},
	{
		"code": "210681",
		"parent_code": "210600",
		"name": "东港市",
		"alias": "东港",
		"pinyin": "DongGang",
		"abbr": "DG",
		"zip": "118300",
		"level": 3
	},
	{
		"code": "210682",
		"parent_code": "210600",
		"name": "凤城市",
		"alias": "凤城",
		"pinyin": "FengCheng",
		"abbr": "FC",
		"zip": "118100",
		"level": 3
	},
	{
		"code": "210700",
		"parent_code": "210000",
		"name": "锦州市",
		"alias": "锦州",
		"pinyin": "JinZhou",
		"abbr": "JZ",
		"zip": "121000",
		"level": 2
	},
	{
		"code": "210702",
		"parent_code": "210700",
		"name": "古塔区",
		"alias": "古塔区",
		"pinyin": "GuTaQu",
		"abbr": "GTQ",
		"zip": "121001",
		"level": 3
	},
	{
		"code": "210703",
		"parent_code": "210700",
		"name": "凌河区",
		"alias": "凌河区",
		"pinyin": "LingHeQu",
		"abbr": "LHQ",
		"zip": "121000",
		"level": 3
	},
	{
		"code": "210711",
		"parent_code": "210700",
		"name": "太和区",
		"alias": "太和区",
		"pinyin": "TaiHeQu",
		"abbr": "THQ",
		"zip": "121011",
		"level": 3
	},
	{
		"code": "210726",
		"parent_code": "210700",
		"name": "黑山县",
		"alias": "黑山",
		"pinyin": "HeiShan",
		"abbr": "HS",
		"zip": "121400",
		"level": 3
	},
	{
		"code": "210727",
		"parent_code": "210700",
		"name": "义县",
		"alias": "义县",
		"pinyin": "YiXian",
		"abbr": "YX",
		"zip": "121100",
		"level": 3
	},
	{
		"code": "210781",
		"parent_code": "210700",
		"name": "凌海市",
		"alias": "凌海",
		"pinyin": "LingHai",
		"abbr": "LH",
		"zip": "121200",
		"level": 3
	},
	{
		"code": "210782",
		"parent_code": "210700",
		"name": "北镇市",
		"alias": "北镇",
		"pinyin": "BeiZhen",
		"abbr": "BZ",
		"zip": "121300",
		"level": 3
	},
	{
		"code": "210800",
		"parent_code": "210000",
		"name": "营口市",
		"alias": "营口",
		"pinyin": "YingKou",
		"abbr": "YK",
		"zip": "115000",
		"level": 2
	},
	{
		"code": "210802",
		"parent_code": "210800",
		"name": "站前区",
		"alias": "站前区",
		"pinyin": "ZhanQianQu",
		"abbr": "ZQQ",
		"zip": "115002",
		"level": 3
	},
	{
		"code": "210803",
		"parent_code": "210800",
		"name": "西市区",
		"alias": "西市区",
		"pinyin": "XiShiQu",
		"abbr": "XSQ",
		"zip": "115004",
		"level": 3
	},
	{
		"code": "210804",
		"parent_code": "210800",
		"name": "鲅鱼圈区",
		"alias": "鲅鱼圈区",
		"pinyin": "BaYuQuanQu",
		"abbr": "BYQQ",
		"zip": "115007",
		"level": 3
	},
	{
		"code": "210811",
		"parent_code": "210800",
		"name": "老边区",
		"alias": "老边区",
		"pinyin": "LaoBianQu",
		"abbr": "LBQ",
		"zip": "115005",
		"level": 3
	},
	{
		"code": "210881",
		"parent_code": "210800",
		"name": "盖州市",
		"alias": "盖州",
		"pinyin": "GaiZhou",
		"abbr": "GZ",
		"zip": "115200",
		"level": 3
	},
	{
		"code": "210882",
		"parent_code": "210800",
		"name": "大石桥市",
		"alias": "大石桥",
		"pinyin": "DaShiQiao",
		"abbr": "DSQ",
		"zip": "115100",
		"level": 3
	},
	{
		"code": "210900",
		"parent_code": "210000",
		"name": "阜新市",
		"alias": "阜新",
		"pinyin": "FuXin",
		"abbr": "FX",
		"zip": "123000",
		"level": 2
	},
	{
		"code": "210902",
		"parent_code": "210900",
		"name": "海州区",
		"alias": "海州区",
		"pinyin": "HaiZhouQu",
		"abbr": "HZQ",
		"zip": "123000",
		"level": 3
	},
	{
		"code": "210903",
		"parent_code": "210900",
		"name": "新邱区",
		"alias": "新邱区",
		"pinyin": "XinQiuQu",
		"abbr": "XQQ",
		"zip": "123005",
		"level": 3
	},
	{
		"code": "210904",
		"parent_code": "210900",
		"name": "太平区",
		"alias": "太平区",
		"pinyin": "TaiPingQu",
		"abbr": "TPQ",
		"zip": "123003",
		"level": 3
	},
	{
		"code": "210905",
		"parent_code": "210900",
		"name": "清河门区",
		"alias": "清河门区",
		"pinyin": "QingHeMenQu",
		"abbr": "QHMQ",
		"zip": "123006",
		"level": 3
	},
	{
		"code": "210911",
		"parent_code": "210900",
		"name": "细河区",
		"alias": "细河区",
		"pinyin": "XiHeQu",
		"abbr": "XHQ",
		"zip": "123000",
		"level": 3
	},
	{
		"code": "210921",
		"parent_code": "210900",
		"name": "阜新蒙古族自治县",
		"alias": "阜新蒙古族",
		"pinyin": "FuXinMengGuZu",
		"abbr": "FXMGZ",
		"zip": "123100",
		"level": 3
	},
	{
		"code": "210922",
		"parent_code": "210900",
		"name": "彰武县",
		"alias": "彰武",
		"pinyin": "ZhangWu",
		"abbr": "ZW",
		"zip": "123200",
		"level": 3
	},
	{
		"code": "211000",
		"parent_code": "210000",
		"name": "辽阳市",
		"alias": "辽阳",
		"pinyin": "LiaoYang",
		"abbr": "LY",
		"zip": "111000",
		"level": 2
	},
	{
		"code": "211002",
		"parent_code": "211000",
		"name": "白塔区",
		"alias": "白塔区",
		"pinyin": "BaiTaQu",
		"abbr": "BTQ",
		"zip": "111000",
		"level": 3
	},
	{
		"code": "211003",
		"parent_code": "211000",
		"name": "文圣区",
		"alias": "文圣区",
		"pinyin": "WenShengQu",
		"abbr": "WSQ",
		"zip": "111000",
		"level": 3
	},
	{
		"code": "211004",
		"parent_code": "211000",
		"name": "宏伟区",
		"alias": "宏伟区",
		"pinyin": "HongWeiQu",
		"abbr": "HWQ",
		"zip": "111003",
		"level": 3
	},
	{
		"code": "211005",
		"parent_code": "211000",
		"name": "弓长岭区",
		"alias": "弓长岭区",
		"pinyin": "GongZhangLingQu",
		"abbr": "GZLQ",
		"zip": "111008",
		"level": 3
	},
	{
		"code": "211011",
		"parent_code": "211000",
		"name": "太子河区",
		"alias": "太子河区",
		"pinyin": "TaiZiHeQu",
		"abbr": "TZHQ",
		"zip": "111000",
		"level": 3
	},
	{
		"code": "211021",
		"parent_code": "211000",
		"name": "辽阳县",
		"alias": "辽阳",
		"pinyin": "LiaoYang",
		"abbr": "LY",
		"zip": "111200",
		"level": 3
	},
	{
		"code": "211081",
		"parent_code": "211000",
		"name": "灯塔市",
		"alias": "灯塔",
		"pinyin": "DengTa",
		"abbr": "DT",
		"zip": "111300",
		"level": 3
	},
	{
		"code": "211100",
		"parent_code": "210000",
		"name": "盘锦市",
		"alias": "盘锦",
		"pinyin": "PanJin",
		"abbr": "PJ",
		"zip": "124000",
		"level": 2
	},
	{
		"code": "211102",
		"parent_code": "211100",
		"name": "双台子区",
		"alias": "双台子区",
		"pinyin": "ShuangTaiZiQu",
		"abbr": "STZQ",
		"zip": "124000",
		"level": 3
	},
	{
		"code": "211103",
		"parent_code": "211100",
		"name": "兴隆台区",
		"alias": "兴隆台区",
		"pinyin": "XingLongTaiQu",
		"abbr": "XLTQ",
		"zip": "124010",
		"level": 3
	},
	{
		"code": "211121",
		"parent_code": "211100",
		"name": "大洼县",
		"alias": "大洼",
		"pinyin": "DaWa",
		"abbr": "DW",
		"zip": "124000",
		"level": 3
	},
	{
		"code": "211122",
		"parent_code": "211100",
		"name": "盘山县",
		"alias": "盘山",
		"pinyin": "PanShan",
		"abbr": "PS",
		"zip": "124100",
		"level": 3
	},
	{
		"code": "211200",
		"parent_code": "210000",
		"name": "铁岭市",
		"alias": "铁岭",
		"pinyin": "TieLing",
		"abbr": "TL",
		"zip": "112000",
		"level": 2
	},
	{
		"code": "211202",
		"parent_code": "211200",
		"name": "银州区",
		"alias": "银州区",
		"pinyin": "YinZhouQu",
		"abbr": "YZQ",
		"zip": "112000",
		"level": 3
	},
	{
		"code": "211204",
		"parent_code": "211200",
		"name": "清河区",
		"alias": "清河区",
		"pinyin": "QingHeQu",
		"abbr": "QHQ",
		"zip": "112003",
		"level": 3
	},
	{
		"code": "211221",
		"parent_code": "211200",
		"name": "铁岭县",
		"alias": "铁岭",
		"pinyin": "TieLing",
		"abbr": "TL",
		"zip": "112600",
		"level": 3
	},
	{
		"code": "211223",
		"parent_code": "211200",
		"name": "西丰县",
		"alias": "西丰",
		"pinyin": "XiFeng",
		"abbr": "XF",
		"zip": "112400",
		"level": 3
	},
	{
		"code": "211224",
		"parent_code": "211200",
		"name": "昌图县",
		"alias": "昌图",
		"pinyin": "ChangTu",
		"abbr": "CT",
		"zip": "112500",
		"level": 3
	},
	{
		"code": "211281",
		"parent_code": "211200",
		"name": "调兵山市",
		"alias": "调兵山",
		"pinyin": "DiaoBingShan",
		"abbr": "DBS",
		"zip": "112700",
		"level": 3
	},
	{
		"code": "211282",
		"parent_code": "211200",
		"name": "开原市",
		"alias": "开原",
		"pinyin": "KaiYuan",
		"abbr": "KY",
		"zip": "112300",
		"level": 3
	},
	{
		"code": "211300",
		"parent_code": "210000",
		"name": "朝阳市",
		"alias": "朝阳",
		"pinyin": "ChaoYang",
		"abbr": "CY",
		"zip": "122000",
		"level": 2
	},
	{
		"code": "211302",
		"parent_code": "211300",
		"name": "双塔区",
		"alias": "双塔区",
		"pinyin": "ShuangTaQu",
		"abbr": "STQ",
		"zip": "122000",
		"level": 3
	},
	{
		"code": "211303",
		"parent_code": "211300",
		"name": "龙城区",
		"alias": "龙城区",
		"pinyin": "LongChengQu",
		"abbr": "LCQ",
		"zip": "122000",
		"level": 3
	},
	{
		"code": "211321",
		"parent_code": "211300",
		"name": "朝阳县",
		"alias": "朝阳",
		"pinyin": "ChaoYang",
		"abbr": "CY",
		"zip": "122000",
		"level": 3
	},
	{
		"code": "211322",
		"parent_code": "211300",
		"name": "建平县",
		"alias": "建平",
		"pinyin": "JianPing",
		"abbr": "JP",
		"zip": "122400",
		"level": 3
	},
	{
		"code": "211324",
		"parent_code": "211300",
		"name": "喀喇沁左翼蒙古族自治县",
		"alias": "喀喇沁左翼蒙古族",
		"pinyin": "KaLaQinZuoYiMengGuZu",
		"abbr": "KLQZYMGZ",
		"zip": "122300",
		"level": 3
	},
	{
		"code": "211381",
		"parent_code": "211300",
		"name": "北票市",
		"alias": "北票",
		"pinyin": "BeiPiao",
		"abbr": "BP",
		"zip": "122100",
		"level": 3
	},
	{
		"code": "211382",
		"parent_code": "211300",
		"name": "凌源市",
		"alias": "凌源",
		"pinyin": "LingYuan",
		"abbr": "LY",
		"zip": "122500",
		"level": 3
	},
	{
		"code": "211400",
		"parent_code": "210000",
		"name": "葫芦岛市",
		"alias": "葫芦岛",
		"pinyin": "HuLuDao",
		"abbr": "HLD",
		"zip": "125000",
		"level": 2
	},
	{
		"code": "211402",
		"parent_code": "211400",
		"name": "连山区",
		"alias": "连山区",
		"pinyin": "LianShanQu",
		"abbr": "LSQ",
		"zip": "125001",
		"level": 3
	},
	{
		"code": "211403",
		"parent_code": "211400",
		"name": "龙港区",
		"alias": "龙港区",
		"pinyin": "LongGangQu",
		"abbr": "LGQ",
		"zip": "125004",
		"level": 3
	},
	{
		"code": "211404",
		"parent_code": "211400",
		"name": "南票区",
		"alias": "南票区",
		"pinyin": "NanPiaoQu",
		"abbr": "NPQ",
		"zip": "125027",
		"level": 3
	},
	{
		"code": "211421",
		"parent_code": "211400",
		"name": "绥中县",
		"alias": "绥中",
		"pinyin": "SuiZhong",
		"abbr": "SZ",
		"zip": "125200",
		"level": 3
	},
	{
		"code": "211422",
		"parent_code": "211400",
		"name": "建昌县",
		"alias": "建昌",
		"pinyin": "JianChang",
		"abbr": "JC",
		"zip": "125300",
		"level": 3
	},
	{
		"code": "211481",
		"parent_code": "211400",
		"name": "兴城市",
		"alias": "兴城",
		"pinyin": "XingCheng",
		"abbr": "XC",
		"zip": "125100",
		"level": 3
	},
	{
		"code": "220000",
		"parent_code": null,
		"name": "吉林省",
		"alias": "吉林",
		"pinyin": "JiLin",
		"abbr": "JL",
		"zip": "130000",
		"level": 1
	},
	{
		"code": "220100",
		"parent_code": "220000",
		"name": "长春市",
		"alias": "长春",
		"pinyin": "ZhangChun",
		"abbr": "ZC",
		"zip": "130000",
		"level": 2
	},
	{
		"code": "220102",
		"parent_code": "220100",
		"name": "南关区",
		"alias": "南关区",
		"pinyin": "NanGuanQu",
		"abbr": "NGQ",
		"zip": "130022",
		"level": 3
	},
	{
		"code": "220103",
		"parent_code": "220100",
		"name": "宽城区",
		"alias": "宽城区",
		"pinyin": "KuanChengQu",
		"abbr": "KCQ",
		"zip": "130051",
		"level": 3
	},
	{
		"code": "220104",
		"parent_code": "220100",
		"name": "朝阳区",
		"alias": "朝阳区",
		"pinyin": "ChaoYangQu",
		"abbr": "CYQ",
		"zip": "130012",
		"level": 3
	},
	{
		"code": "220105",
		"parent_code": "220100",
		"name": "二道区",
		"alias": "二道区",
		"pinyin": "ErDaoQu",
		"abbr": "EDQ",
		"zip": "130031",
		"level": 3
	},
	{
		"code": "220106",
		"parent_code": "220100",
		"name": "绿园区",
		"alias": "绿园区",
		"pinyin": "LvYuanQu",
		"abbr": "LYQ",
		"zip": "130062",
		"level": 3
	},
	{
		"code": "220112",
		"parent_code": "220100",
		"name": "双阳区",
		"alias": "双阳区",
		"pinyin": "ShuangYangQu",
		"abbr": "SYQ",
		"zip": "130600",
		"level": 3
	},
	{
		"code": "220122",
		"parent_code": "220100",
		"name": "农安县",
		"alias": "农安",
		"pinyin": "NongAn",
		"abbr": "NA",
		"zip": "130200",
		"level": 3
	},
	{
		"code": "220181",
		"parent_code": "220100",
		"name": "九台市",
		"alias": "九台",
		"pinyin": "JiuTai",
		"abbr": "JT",
		"zip": "130500",
		"level": 3
	},
	{
		"code": "220182",
		"parent_code": "220100",
		"name": "榆树市",
		"alias": "榆树",
		"pinyin": "YuShu",
		"abbr": "YS",
		"zip": "130400",
		"level": 3
	},
	{
		"code": "220183",
		"parent_code": "220100",
		"name": "德惠市",
		"alias": "德惠",
		"pinyin": "DeHui",
		"abbr": "DH",
		"zip": "130300",
		"level": 3
	},
	{
		"code": "220200",
		"parent_code": "220000",
		"name": "吉林市",
		"alias": "吉林",
		"pinyin": "JiLin",
		"abbr": "JL",
		"zip": "132000",
		"level": 2
	},
	{
		"code": "220202",
		"parent_code": "220200",
		"name": "昌邑区",
		"alias": "昌邑区",
		"pinyin": "ChangYiQu",
		"abbr": "CYQ",
		"zip": "132002",
		"level": 3
	},
	{
		"code": "220203",
		"parent_code": "220200",
		"name": "龙潭区",
		"alias": "龙潭区",
		"pinyin": "LongTanQu",
		"abbr": "LTQ",
		"zip": "132021",
		"level": 3
	},
	{
		"code": "220204",
		"parent_code": "220200",
		"name": "船营区",
		"alias": "船营区",
		"pinyin": "ChuanYingQu",
		"abbr": "CYQ",
		"zip": "132011",
		"level": 3
	},
	{
		"code": "220211",
		"parent_code": "220200",
		"name": "丰满区",
		"alias": "丰满区",
		"pinyin": "FengManQu",
		"abbr": "FMQ",
		"zip": "132113",
		"level": 3
	},
	{
		"code": "220221",
		"parent_code": "220200",
		"name": "永吉县",
		"alias": "永吉",
		"pinyin": "YongJi",
		"abbr": "YJ",
		"zip": "132100",
		"level": 3
	},
	{
		"code": "220281",
		"parent_code": "220200",
		"name": "蛟河市",
		"alias": "蛟河",
		"pinyin": "JiaoHe",
		"abbr": "JH",
		"zip": "132500",
		"level": 3
	},
	{
		"code": "220282",
		"parent_code": "220200",
		"name": "桦甸市",
		"alias": "桦甸",
		"pinyin": "HuaDian",
		"abbr": "HD",
		"zip": "132400",
		"level": 3
	},
	{
		"code": "220283",
		"parent_code": "220200",
		"name": "舒兰市",
		"alias": "舒兰",
		"pinyin": "ShuLan",
		"abbr": "SL",
		"zip": "132600",
		"level": 3
	},
	{
		"code": "220284",
		"parent_code": "220200",
		"name": "磐石市",
		"alias": "磐石",
		"pinyin": "PanShi",
		"abbr": "PS",
		"zip": "132300",
		"level": 3
	},
	{
		"code": "220300",
		"parent_code": "220000",
		"name": "四平市",
		"alias": "四平",
		"pinyin": "SiPing",
		"abbr": "SP",
		"zip": "136000",
		"level": 2
	},
	{
		"code": "220302",
		"parent_code": "220300",
		"name": "铁西区",
		"alias": "铁西区",
		"pinyin": "TieXiQu",
		"abbr": "TXQ",
		"zip": "136000",
		"level": 3
	},
	{
		"code": "220303",
		"parent_code": "220300",
		"name": "铁东区",
		"alias": "铁东区",
		"pinyin": "TieDongQu",
		"abbr": "TDQ",
		"zip": "136001",
		"level": 3
	},
	{
		"code": "220322",
		"parent_code": "220300",
		"name": "梨树县",
		"alias": "梨树",
		"pinyin": "LiShu",
		"abbr": "LS",
		"zip": "136500",
		"level": 3
	},
	{
		"code": "220323",
		"parent_code": "220300",
		"name": "伊通满族自治县",
		"alias": "伊通满族",
		"pinyin": "YiTongManZu",
		"abbr": "YTMZ",
		"zip": "130700",
		"level": 3
	},
	{
		"code": "220381",
		"parent_code": "220300",
		"name": "公主岭市",
		"alias": "公主岭",
		"pinyin": "GongZhuLing",
		"abbr": "GZL",
		"zip": "136100",
		"level": 3
	},
	{
		"code": "220382",
		"parent_code": "220300",
		"name": "双辽市",
		"alias": "双辽",
		"pinyin": "ShuangLiao",
		"abbr": "SL",
		"zip": "136400",
		"level": 3
	},
	{
		"code": "220400",
		"parent_code": "220000",
		"name": "辽源市",
		"alias": "辽源",
		"pinyin": "LiaoYuan",
		"abbr": "LY",
		"zip": "136200",
		"level": 2
	},
	{
		"code": "220402",
		"parent_code": "220400",
		"name": "龙山区",
		"alias": "龙山区",
		"pinyin": "LongShanQu",
		"abbr": "LSQ",
		"zip": "136200",
		"level": 3
	},
	{
		"code": "220403",
		"parent_code": "220400",
		"name": "西安区",
		"alias": "西安区",
		"pinyin": "XiAnQu",
		"abbr": "XAQ",
		"zip": "136201",
		"level": 3
	},
	{
		"code": "220421",
		"parent_code": "220400",
		"name": "东丰县",
		"alias": "东丰",
		"pinyin": "DongFeng",
		"abbr": "DF",
		"zip": "136300",
		"level": 3
	},
	{
		"code": "220422",
		"parent_code": "220400",
		"name": "东辽县",
		"alias": "东辽",
		"pinyin": "DongLiao",
		"abbr": "DL",
		"zip": "136600",
		"level": 3
	},
	{
		"code": "220500",
		"parent_code": "220000",
		"name": "通化市",
		"alias": "通化",
		"pinyin": "TongHua",
		"abbr": "TH",
		"zip": "134000",
		"level": 2
	},
	{
		"code": "220502",
		"parent_code": "220500",
		"name": "东昌区",
		"alias": "东昌区",
		"pinyin": "DongChangQu",
		"abbr": "DCQ",
		"zip": "134001",
		"level": 3
	},
	{
		"code": "220503",
		"parent_code": "220500",
		"name": "二道江区",
		"alias": "二道江区",
		"pinyin": "ErDaoJiangQu",
		"abbr": "EDJQ",
		"zip": "134303",
		"level": 3
	},
	{
		"code": "220521",
		"parent_code": "220500",
		"name": "通化县",
		"alias": "通化",
		"pinyin": "TongHua",
		"abbr": "TH",
		"zip": "134100",
		"level": 3
	},
	{
		"code": "220523",
		"parent_code": "220500",
		"name": "辉南县",
		"alias": "辉南",
		"pinyin": "HuiNan",
		"abbr": "HN",
		"zip": "135100",
		"level": 3
	},
	{
		"code": "220524",
		"parent_code": "220500",
		"name": "柳河县",
		"alias": "柳河",
		"pinyin": "LiuHe",
		"abbr": "LH",
		"zip": "135300",
		"level": 3
	},
	{
		"code": "220581",
		"parent_code": "220500",
		"name": "梅河口市",
		"alias": "梅河口",
		"pinyin": "MeiHeKou",
		"abbr": "MHK",
		"zip": "135000",
		"level": 3
	},
	{
		"code": "220582",
		"parent_code": "220500",
		"name": "集安市",
		"alias": "集安",
		"pinyin": "JiAn",
		"abbr": "JA",
		"zip": "134200",
		"level": 3
	},
	{
		"code": "220600",
		"parent_code": "220000",
		"name": "白山市",
		"alias": "白山",
		"pinyin": "BaiShan",
		"abbr": "BS",
		"zip": "134300",
		"level": 2
	},
	{
		"code": "220602",
		"parent_code": "220600",
		"name": "浑江区",
		"alias": "浑江区",
		"pinyin": "HunJiangQu",
		"abbr": "HJQ",
		"zip": "134300",
		"level": 3
	},
	{
		"code": "220605",
		"parent_code": "220600",
		"name": "江源区",
		"alias": "江源区",
		"pinyin": "JiangYuanQu",
		"abbr": "JYQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "220621",
		"parent_code": "220600",
		"name": "抚松县",
		"alias": "抚松",
		"pinyin": "FuSong",
		"abbr": "FS",
		"zip": "134500",
		"level": 3
	},
	{
		"code": "220622",
		"parent_code": "220600",
		"name": "靖宇县",
		"alias": "靖宇",
		"pinyin": "JingYu",
		"abbr": "JY",
		"zip": "135200",
		"level": 3
	},
	{
		"code": "220623",
		"parent_code": "220600",
		"name": "长白朝鲜族自治县",
		"alias": "长白朝鲜族",
		"pinyin": "ZhangBaiChaoXianZu",
		"abbr": "ZBCXZ",
		"zip": "134400",
		"level": 3
	},
	{
		"code": "220681",
		"parent_code": "220600",
		"name": "临江市",
		"alias": "临江",
		"pinyin": "LinJiang",
		"abbr": "LJ",
		"zip": "134600",
		"level": 3
	},
	{
		"code": "220700",
		"parent_code": "220000",
		"name": "松原市",
		"alias": "松原",
		"pinyin": "SongYuan",
		"abbr": "SY",
		"zip": "138000",
		"level": 2
	},
	{
		"code": "220702",
		"parent_code": "220700",
		"name": "宁江区",
		"alias": "宁江区",
		"pinyin": "NingJiangQu",
		"abbr": "NJQ",
		"zip": "138000",
		"level": 3
	},
	{
		"code": "220721",
		"parent_code": "220700",
		"name": "前郭尔罗斯蒙古族自治县",
		"alias": "前郭尔罗斯蒙古族",
		"pinyin": "QianGuoErLuoSiMengGuZu",
		"abbr": "QGELSMGZ",
		"zip": "131100",
		"level": 3
	},
	{
		"code": "220722",
		"parent_code": "220700",
		"name": "长岭县",
		"alias": "长岭",
		"pinyin": "ZhangLing",
		"abbr": "ZL",
		"zip": "131500",
		"level": 3
	},
	{
		"code": "220723",
		"parent_code": "220700",
		"name": "乾安县",
		"alias": "乾安",
		"pinyin": "GanAn",
		"abbr": "GA",
		"zip": "131400",
		"level": 3
	},
	{
		"code": "220800",
		"parent_code": "220000",
		"name": "白城市",
		"alias": "白城",
		"pinyin": "BaiCheng",
		"abbr": "BC",
		"zip": "137000",
		"level": 2
	},
	{
		"code": "220802",
		"parent_code": "220800",
		"name": "洮北区",
		"alias": "洮北区",
		"pinyin": "TaoBeiQu",
		"abbr": "TBQ",
		"zip": "137000",
		"level": 3
	},
	{
		"code": "220821",
		"parent_code": "220800",
		"name": "镇赉县",
		"alias": "镇赉",
		"pinyin": "ZhenLai",
		"abbr": "ZL",
		"zip": "137300",
		"level": 3
	},
	{
		"code": "220822",
		"parent_code": "220800",
		"name": "通榆县",
		"alias": "通榆",
		"pinyin": "TongYu",
		"abbr": "TY",
		"zip": "137200",
		"level": 3
	},
	{
		"code": "220881",
		"parent_code": "220800",
		"name": "洮南市",
		"alias": "洮南",
		"pinyin": "TaoNan",
		"abbr": "TN",
		"zip": "137100",
		"level": 3
	},
	{
		"code": "220882",
		"parent_code": "220800",
		"name": "大安市",
		"alias": "大安",
		"pinyin": "DaAn",
		"abbr": "DA",
		"zip": "131300",
		"level": 3
	},
	{
		"code": "222400",
		"parent_code": "220000",
		"name": "延边朝鲜族自治州",
		"alias": "延边朝鲜族",
		"pinyin": "YanBianChaoXianZu",
		"abbr": "YBCXZ",
		"zip": "133000",
		"level": 2
	},
	{
		"code": "222401",
		"parent_code": "222400",
		"name": "延吉市",
		"alias": "延吉",
		"pinyin": "YanJi",
		"abbr": "YJ",
		"zip": "133000",
		"level": 3
	},
	{
		"code": "222402",
		"parent_code": "222400",
		"name": "图们市",
		"alias": "图们",
		"pinyin": "TuMen",
		"abbr": "TM",
		"zip": "133100",
		"level": 3
	},
	{
		"code": "222403",
		"parent_code": "222400",
		"name": "敦化市",
		"alias": "敦化",
		"pinyin": "DunHua",
		"abbr": "DH",
		"zip": "133700",
		"level": 3
	},
	{
		"code": "222404",
		"parent_code": "222400",
		"name": "珲春市",
		"alias": "珲春",
		"pinyin": "HuiChun",
		"abbr": "HC",
		"zip": "133300",
		"level": 3
	},
	{
		"code": "222405",
		"parent_code": "222400",
		"name": "龙井市",
		"alias": "龙井",
		"pinyin": "LongJing",
		"abbr": "LJ",
		"zip": "133400",
		"level": 3
	},
	{
		"code": "222406",
		"parent_code": "222400",
		"name": "和龙市",
		"alias": "和龙",
		"pinyin": "HeLong",
		"abbr": "HL",
		"zip": "133500",
		"level": 3
	},
	{
		"code": "222424",
		"parent_code": "222400",
		"name": "汪清县",
		"alias": "汪清",
		"pinyin": "WangQing",
		"abbr": "WQ",
		"zip": "133200",
		"level": 3
	},
	{
		"code": "222426",
		"parent_code": "222400",
		"name": "安图县",
		"alias": "安图",
		"pinyin": "AnTu",
		"abbr": "AT",
		"zip": "133600",
		"level": 3
	},
	{
		"code": "230000",
		"parent_code": null,
		"name": "黑龙江省",
		"alias": "黑龙江",
		"pinyin": "HeiLongJiang",
		"abbr": "HLJ",
		"zip": "150000",
		"level": 1
	},
	{
		"code": "230100",
		"parent_code": "230000",
		"name": "哈尔滨市",
		"alias": "哈尔滨",
		"pinyin": "HaErBin",
		"abbr": "HEB",
		"zip": "150000",
		"level": 2
	},
	{
		"code": "230102",
		"parent_code": "230100",
		"name": "道里区",
		"alias": "道里区",
		"pinyin": "DaoLiQu",
		"abbr": "DLQ",
		"zip": "150010",
		"level": 3
	},
	{
		"code": "230103",
		"parent_code": "230100",
		"name": "南岗区",
		"alias": "南岗区",
		"pinyin": "NanGangQu",
		"abbr": "NGQ",
		"zip": "150006",
		"level": 3
	},
	{
		"code": "230104",
		"parent_code": "230100",
		"name": "道外区",
		"alias": "道外区",
		"pinyin": "DaoWaiQu",
		"abbr": "DWQ",
		"zip": "150026",
		"level": 3
	},
	{
		"code": "230108",
		"parent_code": "230100",
		"name": "平房区",
		"alias": "平房区",
		"pinyin": "PingFangQu",
		"abbr": "PFQ",
		"zip": "150060",
		"level": 3
	},
	{
		"code": "230109",
		"parent_code": "230100",
		"name": "松北区",
		"alias": "松北区",
		"pinyin": "SongBeiQu",
		"abbr": "SBQ",
		"zip": "150028",
		"level": 3
	},
	{
		"code": "230110",
		"parent_code": "230100",
		"name": "香坊区",
		"alias": "香坊区",
		"pinyin": "XiangFangQu",
		"abbr": "XFQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "230111",
		"parent_code": "230100",
		"name": "呼兰区",
		"alias": "呼兰区",
		"pinyin": "HuLanQu",
		"abbr": "HLQ",
		"zip": "150500",
		"level": 3
	},
	{
		"code": "230112",
		"parent_code": "230100",
		"name": "阿城区",
		"alias": "阿城区",
		"pinyin": "AChengQu",
		"abbr": "ACQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "230123",
		"parent_code": "230100",
		"name": "依兰县",
		"alias": "依兰",
		"pinyin": "YiLan",
		"abbr": "YL",
		"zip": "154800",
		"level": 3
	},
	{
		"code": "230124",
		"parent_code": "230100",
		"name": "方正县",
		"alias": "方正",
		"pinyin": "FangZheng",
		"abbr": "FZ",
		"zip": "150800",
		"level": 3
	},
	{
		"code": "230125",
		"parent_code": "230100",
		"name": "宾县",
		"alias": "宾县",
		"pinyin": "BinXian",
		"abbr": "BX",
		"zip": "150400",
		"level": 3
	},
	{
		"code": "230126",
		"parent_code": "230100",
		"name": "巴彦县",
		"alias": "巴彦",
		"pinyin": "BaYan",
		"abbr": "BY",
		"zip": "151800",
		"level": 3
	},
	{
		"code": "230127",
		"parent_code": "230100",
		"name": "木兰县",
		"alias": "木兰",
		"pinyin": "MuLan",
		"abbr": "ML",
		"zip": "151900",
		"level": 3
	},
	{
		"code": "230128",
		"parent_code": "230100",
		"name": "通河县",
		"alias": "通河",
		"pinyin": "TongHe",
		"abbr": "TH",
		"zip": "150900",
		"level": 3
	},
	{
		"code": "230129",
		"parent_code": "230100",
		"name": "延寿县",
		"alias": "延寿",
		"pinyin": "YanShou",
		"abbr": "YS",
		"zip": "150700",
		"level": 3
	},
	{
		"code": "230182",
		"parent_code": "230100",
		"name": "双城市",
		"alias": "双城",
		"pinyin": "ShuangCheng",
		"abbr": "SC",
		"zip": "150100",
		"level": 3
	},
	{
		"code": "230183",
		"parent_code": "230100",
		"name": "尚志市",
		"alias": "尚志",
		"pinyin": "ShangZhi",
		"abbr": "SZ",
		"zip": "150600",
		"level": 3
	},
	{
		"code": "230184",
		"parent_code": "230100",
		"name": "五常市",
		"alias": "五常",
		"pinyin": "WuChang",
		"abbr": "WC",
		"zip": "150200",
		"level": 3
	},
	{
		"code": "230200",
		"parent_code": "230000",
		"name": "齐齐哈尔市",
		"alias": "齐齐哈尔",
		"pinyin": "QiQiHaEr",
		"abbr": "QQHE",
		"zip": "161000",
		"level": 2
	},
	{
		"code": "230202",
		"parent_code": "230200",
		"name": "龙沙区",
		"alias": "龙沙区",
		"pinyin": "LongShaQu",
		"abbr": "LSQ",
		"zip": "161000",
		"level": 3
	},
	{
		"code": "230203",
		"parent_code": "230200",
		"name": "建华区",
		"alias": "建华区",
		"pinyin": "JianHuaQu",
		"abbr": "JHQ",
		"zip": "161006",
		"level": 3
	},
	{
		"code": "230204",
		"parent_code": "230200",
		"name": "铁锋区",
		"alias": "铁锋区",
		"pinyin": "TieFengQu",
		"abbr": "TFQ",
		"zip": "161000",
		"level": 3
	},
	{
		"code": "230205",
		"parent_code": "230200",
		"name": "昂昂溪区",
		"alias": "昂昂溪区",
		"pinyin": "AngAngXiQu",
		"abbr": "AAXQ",
		"zip": "161031",
		"level": 3
	},
	{
		"code": "230206",
		"parent_code": "230200",
		"name": "富拉尔基区",
		"alias": "富拉尔基区",
		"pinyin": "FuLaErJiQu",
		"abbr": "FLEJQ",
		"zip": "161041",
		"level": 3
	},
	{
		"code": "230207",
		"parent_code": "230200",
		"name": "碾子山区",
		"alias": "碾子山区",
		"pinyin": "NianZiShanQu",
		"abbr": "NZSQ",
		"zip": "161046",
		"level": 3
	},
	{
		"code": "230208",
		"parent_code": "230200",
		"name": "梅里斯达斡尔族区",
		"alias": "梅里斯达斡尔族区",
		"pinyin": "MeiLiSiDaWoErZuQu",
		"abbr": "MLSDWEZQ",
		"zip": "161021",
		"level": 3
	},
	{
		"code": "230221",
		"parent_code": "230200",
		"name": "龙江县",
		"alias": "龙江",
		"pinyin": "LongJiang",
		"abbr": "LJ",
		"zip": "161100",
		"level": 3
	},
	{
		"code": "230223",
		"parent_code": "230200",
		"name": "依安县",
		"alias": "依安",
		"pinyin": "YiAn",
		"abbr": "YA",
		"zip": "161500",
		"level": 3
	},
	{
		"code": "230224",
		"parent_code": "230200",
		"name": "泰来县",
		"alias": "泰来",
		"pinyin": "TaiLai",
		"abbr": "TL",
		"zip": "162400",
		"level": 3
	},
	{
		"code": "230225",
		"parent_code": "230200",
		"name": "甘南县",
		"alias": "甘南",
		"pinyin": "GanNan",
		"abbr": "GN",
		"zip": "162100",
		"level": 3
	},
	{
		"code": "230227",
		"parent_code": "230200",
		"name": "富裕县",
		"alias": "富裕",
		"pinyin": "FuYu",
		"abbr": "FY",
		"zip": "161200",
		"level": 3
	},
	{
		"code": "230229",
		"parent_code": "230200",
		"name": "克山县",
		"alias": "克山",
		"pinyin": "KeShan",
		"abbr": "KS",
		"zip": "161600",
		"level": 3
	},
	{
		"code": "230230",
		"parent_code": "230200",
		"name": "克东县",
		"alias": "克东",
		"pinyin": "KeDong",
		"abbr": "KD",
		"zip": "164800",
		"level": 3
	},
	{
		"code": "230231",
		"parent_code": "230200",
		"name": "拜泉县",
		"alias": "拜泉",
		"pinyin": "BaiQuan",
		"abbr": "BQ",
		"zip": "164700",
		"level": 3
	},
	{
		"code": "230281",
		"parent_code": "230200",
		"name": "讷河市",
		"alias": "讷河",
		"pinyin": "NeHe",
		"abbr": "NH",
		"zip": "161300",
		"level": 3
	},
	{
		"code": "230300",
		"parent_code": "230000",
		"name": "鸡西市",
		"alias": "鸡西",
		"pinyin": "JiXi",
		"abbr": "JX",
		"zip": "158100",
		"level": 2
	},
	{
		"code": "230302",
		"parent_code": "230300",
		"name": "鸡冠区",
		"alias": "鸡冠区",
		"pinyin": "JiGuanQu",
		"abbr": "JGQ",
		"zip": "158100",
		"level": 3
	},
	{
		"code": "230303",
		"parent_code": "230300",
		"name": "恒山区",
		"alias": "恒山区",
		"pinyin": "HengShanQu",
		"abbr": "HSQ",
		"zip": "158130",
		"level": 3
	},
	{
		"code": "230304",
		"parent_code": "230300",
		"name": "滴道区",
		"alias": "滴道区",
		"pinyin": "DiDaoQu",
		"abbr": "DDQ",
		"zip": "158150",
		"level": 3
	},
	{
		"code": "230305",
		"parent_code": "230300",
		"name": "梨树区",
		"alias": "梨树区",
		"pinyin": "LiShuQu",
		"abbr": "LSQ",
		"zip": "158160",
		"level": 3
	},
	{
		"code": "230306",
		"parent_code": "230300",
		"name": "城子河区",
		"alias": "城子河区",
		"pinyin": "ChengZiHeQu",
		"abbr": "CZHQ",
		"zip": "158170",
		"level": 3
	},
	{
		"code": "230307",
		"parent_code": "230300",
		"name": "麻山区",
		"alias": "麻山区",
		"pinyin": "MaShanQu",
		"abbr": "MSQ",
		"zip": "158180",
		"level": 3
	},
	{
		"code": "230321",
		"parent_code": "230300",
		"name": "鸡东县",
		"alias": "鸡东",
		"pinyin": "JiDong",
		"abbr": "JD",
		"zip": "158200",
		"level": 3
	},
	{
		"code": "230381",
		"parent_code": "230300",
		"name": "虎林市",
		"alias": "虎林",
		"pinyin": "HuLin",
		"abbr": "HL",
		"zip": "158400",
		"level": 3
	},
	{
		"code": "230382",
		"parent_code": "230300",
		"name": "密山市",
		"alias": "密山",
		"pinyin": "MiShan",
		"abbr": "MS",
		"zip": "158300",
		"level": 3
	},
	{
		"code": "230400",
		"parent_code": "230000",
		"name": "鹤岗市",
		"alias": "鹤岗",
		"pinyin": "HeGang",
		"abbr": "HG",
		"zip": "154100",
		"level": 2
	},
	{
		"code": "230402",
		"parent_code": "230400",
		"name": "向阳区",
		"alias": "向阳区",
		"pinyin": "XiangYangQu",
		"abbr": "XYQ",
		"zip": "154100",
		"level": 3
	},
	{
		"code": "230403",
		"parent_code": "230400",
		"name": "工农区",
		"alias": "工农区",
		"pinyin": "GongNongQu",
		"abbr": "GNQ",
		"zip": "154101",
		"level": 3
	},
	{
		"code": "230404",
		"parent_code": "230400",
		"name": "南山区",
		"alias": "南山区",
		"pinyin": "NanShanQu",
		"abbr": "NSQ",
		"zip": "154104",
		"level": 3
	},
	{
		"code": "230405",
		"parent_code": "230400",
		"name": "兴安区",
		"alias": "兴安区",
		"pinyin": "XingAnQu",
		"abbr": "XAQ",
		"zip": "154102",
		"level": 3
	},
	{
		"code": "230406",
		"parent_code": "230400",
		"name": "东山区",
		"alias": "东山区",
		"pinyin": "DongShanQu",
		"abbr": "DSQ",
		"zip": "154106",
		"level": 3
	},
	{
		"code": "230407",
		"parent_code": "230400",
		"name": "兴山区",
		"alias": "兴山区",
		"pinyin": "XingShanQu",
		"abbr": "XSQ",
		"zip": "154105",
		"level": 3
	},
	{
		"code": "230421",
		"parent_code": "230400",
		"name": "萝北县",
		"alias": "萝北",
		"pinyin": "LuoBei",
		"abbr": "LB",
		"zip": "154200",
		"level": 3
	},
	{
		"code": "230422",
		"parent_code": "230400",
		"name": "绥滨县",
		"alias": "绥滨",
		"pinyin": "SuiBin",
		"abbr": "SB",
		"zip": "156200",
		"level": 3
	},
	{
		"code": "230500",
		"parent_code": "230000",
		"name": "双鸭山市",
		"alias": "双鸭山",
		"pinyin": "ShuangYaShan",
		"abbr": "SYS",
		"zip": "155100",
		"level": 2
	},
	{
		"code": "230502",
		"parent_code": "230500",
		"name": "尖山区",
		"alias": "尖山区",
		"pinyin": "JianShanQu",
		"abbr": "JSQ",
		"zip": "155100",
		"level": 3
	},
	{
		"code": "230503",
		"parent_code": "230500",
		"name": "岭东区",
		"alias": "岭东区",
		"pinyin": "LingDongQu",
		"abbr": "LDQ",
		"zip": "155120",
		"level": 3
	},
	{
		"code": "230505",
		"parent_code": "230500",
		"name": "四方台区",
		"alias": "四方台区",
		"pinyin": "SiFangTaiQu",
		"abbr": "SFTQ",
		"zip": "155130",
		"level": 3
	},
	{
		"code": "230506",
		"parent_code": "230500",
		"name": "宝山区",
		"alias": "宝山区",
		"pinyin": "BaoShanQu",
		"abbr": "BSQ",
		"zip": "155131",
		"level": 3
	},
	{
		"code": "230521",
		"parent_code": "230500",
		"name": "集贤县",
		"alias": "集贤",
		"pinyin": "JiXian",
		"abbr": "JX",
		"zip": "155900",
		"level": 3
	},
	{
		"code": "230522",
		"parent_code": "230500",
		"name": "友谊县",
		"alias": "友谊",
		"pinyin": "YouYi",
		"abbr": "YY",
		"zip": "155800",
		"level": 3
	},
	{
		"code": "230523",
		"parent_code": "230500",
		"name": "宝清县",
		"alias": "宝清",
		"pinyin": "BaoQing",
		"abbr": "BQ",
		"zip": "155600",
		"level": 3
	},
	{
		"code": "230524",
		"parent_code": "230500",
		"name": "饶河县",
		"alias": "饶河",
		"pinyin": "RaoHe",
		"abbr": "RH",
		"zip": "155700",
		"level": 3
	},
	{
		"code": "230600",
		"parent_code": "230000",
		"name": "大庆市",
		"alias": "大庆",
		"pinyin": "DaQing",
		"abbr": "DQ",
		"zip": "163000",
		"level": 2
	},
	{
		"code": "230602",
		"parent_code": "230600",
		"name": "萨尔图区",
		"alias": "萨尔图区",
		"pinyin": "SaErTuQu",
		"abbr": "SETQ",
		"zip": "163311",
		"level": 3
	},
	{
		"code": "230603",
		"parent_code": "230600",
		"name": "龙凤区",
		"alias": "龙凤区",
		"pinyin": "LongFengQu",
		"abbr": "LFQ",
		"zip": "163711",
		"level": 3
	},
	{
		"code": "230604",
		"parent_code": "230600",
		"name": "让胡路区",
		"alias": "让胡路区",
		"pinyin": "RangHuLuQu",
		"abbr": "RHLQ",
		"zip": "163453",
		"level": 3
	},
	{
		"code": "230605",
		"parent_code": "230600",
		"name": "红岗区",
		"alias": "红岗区",
		"pinyin": "HongGangQu",
		"abbr": "HGQ",
		"zip": "163512",
		"level": 3
	},
	{
		"code": "230606",
		"parent_code": "230600",
		"name": "大同区",
		"alias": "大同区",
		"pinyin": "DaTongQu",
		"abbr": "DTQ",
		"zip": "163814",
		"level": 3
	},
	{
		"code": "230621",
		"parent_code": "230600",
		"name": "肇州县",
		"alias": "肇州",
		"pinyin": "ZhaoZhou",
		"abbr": "ZZ",
		"zip": "166400",
		"level": 3
	},
	{
		"code": "230622",
		"parent_code": "230600",
		"name": "肇源县",
		"alias": "肇源",
		"pinyin": "ZhaoYuan",
		"abbr": "ZY",
		"zip": "166500",
		"level": 3
	},
	{
		"code": "230623",
		"parent_code": "230600",
		"name": "林甸县",
		"alias": "林甸",
		"pinyin": "LinDian",
		"abbr": "LD",
		"zip": "166300",
		"level": 3
	},
	{
		"code": "230624",
		"parent_code": "230600",
		"name": "杜尔伯特蒙古族自治县",
		"alias": "杜尔伯特蒙古族",
		"pinyin": "DuErBoTeMengGuZu",
		"abbr": "DEBTMGZ",
		"zip": "166200",
		"level": 3
	},
	{
		"code": "230700",
		"parent_code": "230000",
		"name": "伊春市",
		"alias": "伊春",
		"pinyin": "YiChun",
		"abbr": "YC",
		"zip": "153000",
		"level": 2
	},
	{
		"code": "230702",
		"parent_code": "230700",
		"name": "伊春区",
		"alias": "伊春区",
		"pinyin": "YiChunQu",
		"abbr": "YCQ",
		"zip": "153000",
		"level": 3
	},
	{
		"code": "230703",
		"parent_code": "230700",
		"name": "南岔区",
		"alias": "南岔区",
		"pinyin": "NanChaQu",
		"abbr": "NCQ",
		"zip": "153100",
		"level": 3
	},
	{
		"code": "230704",
		"parent_code": "230700",
		"name": "友好区",
		"alias": "友好区",
		"pinyin": "YouHaoQu",
		"abbr": "YHQ",
		"zip": "153031",
		"level": 3
	},
	{
		"code": "230705",
		"parent_code": "230700",
		"name": "西林区",
		"alias": "西林区",
		"pinyin": "XiLinQu",
		"abbr": "XLQ",
		"zip": "153025",
		"level": 3
	},
	{
		"code": "230706",
		"parent_code": "230700",
		"name": "翠峦区",
		"alias": "翠峦区",
		"pinyin": "CuiLuanQu",
		"abbr": "CLQ",
		"zip": "153013",
		"level": 3
	},
	{
		"code": "230707",
		"parent_code": "230700",
		"name": "新青区",
		"alias": "新青区",
		"pinyin": "XinQingQu",
		"abbr": "XQQ",
		"zip": "153036",
		"level": 3
	},
	{
		"code": "230708",
		"parent_code": "230700",
		"name": "美溪区",
		"alias": "美溪区",
		"pinyin": "MeiXiQu",
		"abbr": "MXQ",
		"zip": "153021",
		"level": 3
	},
	{
		"code": "230709",
		"parent_code": "230700",
		"name": "金山屯区",
		"alias": "金山屯区",
		"pinyin": "JinShanTunQu",
		"abbr": "JSTQ",
		"zip": "152026",
		"level": 3
	},
	{
		"code": "230710",
		"parent_code": "230700",
		"name": "五营区",
		"alias": "五营区",
		"pinyin": "WuYingQu",
		"abbr": "WYQ",
		"zip": "153033",
		"level": 3
	},
	{
		"code": "230711",
		"parent_code": "230700",
		"name": "乌马河区",
		"alias": "乌马河区",
		"pinyin": "WuMaHeQu",
		"abbr": "WMHQ",
		"zip": "153011",
		"level": 3
	},
	{
		"code": "230712",
		"parent_code": "230700",
		"name": "汤旺河区",
		"alias": "汤旺河区",
		"pinyin": "TangWangHeQu",
		"abbr": "TWHQ",
		"zip": "153037",
		"level": 3
	},
	{
		"code": "230713",
		"parent_code": "230700",
		"name": "带岭区",
		"alias": "带岭区",
		"pinyin": "DaiLingQu",
		"abbr": "DLQ",
		"zip": "153106",
		"level": 3
	},
	{
		"code": "230714",
		"parent_code": "230700",
		"name": "乌伊岭区",
		"alias": "乌伊岭区",
		"pinyin": "WuYiLingQu",
		"abbr": "WYLQ",
		"zip": "153038",
		"level": 3
	},
	{
		"code": "230715",
		"parent_code": "230700",
		"name": "红星区",
		"alias": "红星区",
		"pinyin": "HongXingQu",
		"abbr": "HXQ",
		"zip": "153035",
		"level": 3
	},
	{
		"code": "230716",
		"parent_code": "230700",
		"name": "上甘岭区",
		"alias": "上甘岭区",
		"pinyin": "ShangGanLingQu",
		"abbr": "SGLQ",
		"zip": "153032",
		"level": 3
	},
	{
		"code": "230722",
		"parent_code": "230700",
		"name": "嘉荫县",
		"alias": "嘉荫",
		"pinyin": "JiaYin",
		"abbr": "JY",
		"zip": "153200",
		"level": 3
	},
	{
		"code": "230781",
		"parent_code": "230700",
		"name": "铁力市",
		"alias": "铁力",
		"pinyin": "TieLi",
		"abbr": "TL",
		"zip": "152500",
		"level": 3
	},
	{
		"code": "230800",
		"parent_code": "230000",
		"name": "佳木斯市",
		"alias": "佳木斯",
		"pinyin": "JiaMuSi",
		"abbr": "JMS",
		"zip": "154000",
		"level": 2
	},
	{
		"code": "230803",
		"parent_code": "230800",
		"name": "向阳区",
		"alias": "向阳区",
		"pinyin": "XiangYangQu",
		"abbr": "XYQ",
		"zip": "154002",
		"level": 3
	},
	{
		"code": "230804",
		"parent_code": "230800",
		"name": "前进区",
		"alias": "前进区",
		"pinyin": "QianJinQu",
		"abbr": "QJQ",
		"zip": "154002",
		"level": 3
	},
	{
		"code": "230805",
		"parent_code": "230800",
		"name": "东风区",
		"alias": "东风区",
		"pinyin": "DongFengQu",
		"abbr": "DFQ",
		"zip": "154005",
		"level": 3
	},
	{
		"code": "230811",
		"parent_code": "230800",
		"name": "郊区",
		"alias": "郊区",
		"pinyin": "JiaoQu",
		"abbr": "JQ",
		"zip": "154004",
		"level": 3
	},
	{
		"code": "230822",
		"parent_code": "230800",
		"name": "桦南县",
		"alias": "桦南",
		"pinyin": "HuaNan",
		"abbr": "HN",
		"zip": "154400",
		"level": 3
	},
	{
		"code": "230826",
		"parent_code": "230800",
		"name": "桦川县",
		"alias": "桦川",
		"pinyin": "HuaChuan",
		"abbr": "HC",
		"zip": "154300",
		"level": 3
	},
	{
		"code": "230828",
		"parent_code": "230800",
		"name": "汤原县",
		"alias": "汤原",
		"pinyin": "TangYuan",
		"abbr": "TY",
		"zip": "154700",
		"level": 3
	},
	{
		"code": "230833",
		"parent_code": "230800",
		"name": "抚远县",
		"alias": "抚远",
		"pinyin": "FuYuan",
		"abbr": "FY",
		"zip": "156500",
		"level": 3
	},
	{
		"code": "230881",
		"parent_code": "230800",
		"name": "同江市",
		"alias": "同江",
		"pinyin": "TongJiang",
		"abbr": "TJ",
		"zip": "156400",
		"level": 3
	},
	{
		"code": "230882",
		"parent_code": "230800",
		"name": "富锦市",
		"alias": "富锦",
		"pinyin": "FuJin",
		"abbr": "FJ",
		"zip": "156100",
		"level": 3
	},
	{
		"code": "230900",
		"parent_code": "230000",
		"name": "七台河市",
		"alias": "七台河",
		"pinyin": "QiTaiHe",
		"abbr": "QTH",
		"zip": "154600",
		"level": 2
	},
	{
		"code": "230902",
		"parent_code": "230900",
		"name": "新兴区",
		"alias": "新兴区",
		"pinyin": "XinXingQu",
		"abbr": "XXQ",
		"zip": "154604",
		"level": 3
	},
	{
		"code": "230903",
		"parent_code": "230900",
		"name": "桃山区",
		"alias": "桃山区",
		"pinyin": "TaoShanQu",
		"abbr": "TSQ",
		"zip": "154600",
		"level": 3
	},
	{
		"code": "230904",
		"parent_code": "230900",
		"name": "茄子河区",
		"alias": "茄子河区",
		"pinyin": "JiaZiHeQu",
		"abbr": "JZHQ",
		"zip": "154622",
		"level": 3
	},
	{
		"code": "230921",
		"parent_code": "230900",
		"name": "勃利县",
		"alias": "勃利",
		"pinyin": "BoLi",
		"abbr": "BL",
		"zip": "154500",
		"level": 3
	},
	{
		"code": "231000",
		"parent_code": "231000",
		"name": "牡丹江市",
		"alias": "牡丹江",
		"pinyin": "MuDanJiang",
		"abbr": "MDJ",
		"zip": "157000",
		"level": 3
	},
	{
		"code": "231001",
		"parent_code": "231000",
		"name": "市辖区",
		"alias": "市辖区",
		"pinyin": "ShiXiaQu",
		"abbr": "SXQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "231002",
		"parent_code": "231000",
		"name": "东安区",
		"alias": "东安区",
		"pinyin": "DongAnQu",
		"abbr": "DAQ",
		"zip": "157000",
		"level": 3
	},
	{
		"code": "231003",
		"parent_code": "231000",
		"name": "阳明区",
		"alias": "阳明区",
		"pinyin": "YangMingQu",
		"abbr": "YMQ",
		"zip": "157013",
		"level": 3
	},
	{
		"code": "231004",
		"parent_code": "231000",
		"name": "爱民区",
		"alias": "爱民区",
		"pinyin": "AiMinQu",
		"abbr": "AMQ",
		"zip": "157009",
		"level": 3
	},
	{
		"code": "231005",
		"parent_code": "231000",
		"name": "西安区",
		"alias": "西安区",
		"pinyin": "XiAnQu",
		"abbr": "XAQ",
		"zip": "157000",
		"level": 3
	},
	{
		"code": "231024",
		"parent_code": "231000",
		"name": "东宁县",
		"alias": "东宁",
		"pinyin": "DongNing",
		"abbr": "DN",
		"zip": "157200",
		"level": 3
	},
	{
		"code": "231025",
		"parent_code": "231000",
		"name": "林口县",
		"alias": "林口",
		"pinyin": "LinKou",
		"abbr": "LK",
		"zip": "157600",
		"level": 3
	},
	{
		"code": "231081",
		"parent_code": "230000",
		"name": "绥芬河市",
		"alias": "绥芬河",
		"pinyin": "SuiFenHe",
		"abbr": "SFH",
		"zip": "157300",
		"level": 2
	},
	{
		"code": "231083",
		"parent_code": "231000",
		"name": "海林市",
		"alias": "海林",
		"pinyin": "HaiLin",
		"abbr": "HL",
		"zip": "157100",
		"level": 3
	},
	{
		"code": "231084",
		"parent_code": "231000",
		"name": "宁安市",
		"alias": "宁安",
		"pinyin": "NingAn",
		"abbr": "NA",
		"zip": "157400",
		"level": 3
	},
	{
		"code": "231085",
		"parent_code": "231000",
		"name": "穆棱市",
		"alias": "穆棱",
		"pinyin": "MuLeng",
		"abbr": "ML",
		"zip": "157500",
		"level": 3
	},
	{
		"code": "231100",
		"parent_code": "230000",
		"name": "黑河市",
		"alias": "黑河",
		"pinyin": "HeiHe",
		"abbr": "HH",
		"zip": "164300",
		"level": 2
	},
	{
		"code": "231102",
		"parent_code": "231100",
		"name": "爱辉区",
		"alias": "爱辉区",
		"pinyin": "AiHuiQu",
		"abbr": "AHQ",
		"zip": "164300",
		"level": 3
	},
	{
		"code": "231121",
		"parent_code": "231100",
		"name": "嫩江县",
		"alias": "嫩江",
		"pinyin": "NenJiang",
		"abbr": "NJ",
		"zip": "161400",
		"level": 3
	},
	{
		"code": "231123",
		"parent_code": "231100",
		"name": "逊克县",
		"alias": "逊克",
		"pinyin": "XunKe",
		"abbr": "XK",
		"zip": "164400",
		"level": 3
	},
	{
		"code": "231124",
		"parent_code": "231100",
		"name": "孙吴县",
		"alias": "孙吴",
		"pinyin": "SunWu",
		"abbr": "SW",
		"zip": "164200",
		"level": 3
	},
	{
		"code": "231181",
		"parent_code": "231100",
		"name": "北安市",
		"alias": "北安",
		"pinyin": "BeiAn",
		"abbr": "BA",
		"zip": "164000",
		"level": 3
	},
	{
		"code": "231182",
		"parent_code": "231100",
		"name": "五大连池市",
		"alias": "五大连池",
		"pinyin": "WuDaLianChi",
		"abbr": "WDLC",
		"zip": "164100",
		"level": 3
	},
	{
		"code": "231200",
		"parent_code": "230000",
		"name": "绥化市",
		"alias": "绥化",
		"pinyin": "SuiHua",
		"abbr": "SH",
		"zip": "152000",
		"level": 2
	},
	{
		"code": "231202",
		"parent_code": "231200",
		"name": "北林区",
		"alias": "北林区",
		"pinyin": "BeiLinQu",
		"abbr": "BLQ",
		"zip": "152000",
		"level": 3
	},
	{
		"code": "231221",
		"parent_code": "231200",
		"name": "望奎县",
		"alias": "望奎",
		"pinyin": "WangKui",
		"abbr": "WK",
		"zip": "152100",
		"level": 3
	},
	{
		"code": "231222",
		"parent_code": "231200",
		"name": "兰西县",
		"alias": "兰西",
		"pinyin": "LanXi",
		"abbr": "LX",
		"zip": "151500",
		"level": 3
	},
	{
		"code": "231223",
		"parent_code": "231200",
		"name": "青冈县",
		"alias": "青冈",
		"pinyin": "QingGang",
		"abbr": "QG",
		"zip": "151600",
		"level": 3
	},
	{
		"code": "231224",
		"parent_code": "231200",
		"name": "庆安县",
		"alias": "庆安",
		"pinyin": "QingAn",
		"abbr": "QA",
		"zip": "152400",
		"level": 3
	},
	{
		"code": "231225",
		"parent_code": "231200",
		"name": "明水县",
		"alias": "明水",
		"pinyin": "MingShui",
		"abbr": "MS",
		"zip": "151700",
		"level": 3
	},
	{
		"code": "231226",
		"parent_code": "231200",
		"name": "绥棱县",
		"alias": "绥棱",
		"pinyin": "SuiLeng",
		"abbr": "SL",
		"zip": "152200",
		"level": 3
	},
	{
		"code": "231281",
		"parent_code": "231200",
		"name": "安达市",
		"alias": "安达",
		"pinyin": "AnDa",
		"abbr": "AD",
		"zip": "151400",
		"level": 3
	},
	{
		"code": "231282",
		"parent_code": "231200",
		"name": "肇东市",
		"alias": "肇东",
		"pinyin": "ZhaoDong",
		"abbr": "ZD",
		"zip": "151100",
		"level": 3
	},
	{
		"code": "231283",
		"parent_code": "231200",
		"name": "海伦市",
		"alias": "海伦",
		"pinyin": "HaiLun",
		"abbr": "HL",
		"zip": "152300",
		"level": 3
	},
	{
		"code": "232700",
		"parent_code": "230000",
		"name": "大兴安岭地区",
		"alias": "大兴安岭地区",
		"pinyin": "DaXingAnLingDeQu",
		"abbr": "DXALDQ",
		"zip": "165000",
		"level": 2
	},
	{
		"code": "232721",
		"parent_code": "232700",
		"name": "呼玛县",
		"alias": "呼玛",
		"pinyin": "HuMa",
		"abbr": "HM",
		"zip": "165100",
		"level": 3
	},
	{
		"code": "232722",
		"parent_code": "232700",
		"name": "塔河县",
		"alias": "塔河",
		"pinyin": "TaHe",
		"abbr": "TH",
		"zip": "165200",
		"level": 3
	},
	{
		"code": "232723",
		"parent_code": "232700",
		"name": "漠河县",
		"alias": "漠河",
		"pinyin": "MoHe",
		"abbr": "MH",
		"zip": "165300",
		"level": 3
	},
	{
		"code": "310000",
		"parent_code": null,
		"name": "上海市",
		"alias": "上海",
		"pinyin": "ShangHai",
		"abbr": "SH",
		"zip": "200000",
		"level": 1
	},
	{
		"code": "310101",
		"parent_code": "310000",
		"name": "黄浦区",
		"alias": "黄浦区",
		"pinyin": "HuangPuQu",
		"abbr": "HPQ",
		"zip": "200001",
		"level": 2
	},
	{
		"code": "310104",
		"parent_code": "310000",
		"name": "徐汇区",
		"alias": "徐汇区",
		"pinyin": "XuHuiQu",
		"abbr": "XHQ",
		"zip": "200030",
		"level": 2
	},
	{
		"code": "310105",
		"parent_code": "310000",
		"name": "长宁区",
		"alias": "长宁区",
		"pinyin": "ZhangNingQu",
		"abbr": "ZNQ",
		"zip": "200050",
		"level": 2
	},
	{
		"code": "310106",
		"parent_code": "310000",
		"name": "静安区",
		"alias": "静安区",
		"pinyin": "JingAnQu",
		"abbr": "JAQ",
		"zip": "200040",
		"level": 2
	},
	{
		"code": "310107",
		"parent_code": "310000",
		"name": "普陀区",
		"alias": "普陀区",
		"pinyin": "PuTuoQu",
		"abbr": "PTQ",
		"zip": "200062",
		"level": 2
	},
	{
		"code": "310108",
		"parent_code": "310000",
		"name": "闸北区",
		"alias": "闸北区",
		"pinyin": "ZhaBeiQu",
		"abbr": "ZBQ",
		"zip": "200070",
		"level": 2
	},
	{
		"code": "310109",
		"parent_code": "310000",
		"name": "虹口区",
		"alias": "虹口区",
		"pinyin": "HongKouQu",
		"abbr": "HKQ",
		"zip": "200080",
		"level": 2
	},
	{
		"code": "310110",
		"parent_code": "310000",
		"name": "杨浦区",
		"alias": "杨浦区",
		"pinyin": "YangPuQu",
		"abbr": "YPQ",
		"zip": "200082",
		"level": 2
	},
	{
		"code": "310112",
		"parent_code": "310000",
		"name": "闵行区",
		"alias": "闵行区",
		"pinyin": "MinXingQu",
		"abbr": "MXQ",
		"zip": "201100",
		"level": 2
	},
	{
		"code": "310113",
		"parent_code": "310000",
		"name": "宝山区",
		"alias": "宝山区",
		"pinyin": "BaoShanQu",
		"abbr": "BSQ",
		"zip": "201900",
		"level": 2
	},
	{
		"code": "310114",
		"parent_code": "310000",
		"name": "嘉定区",
		"alias": "嘉定区",
		"pinyin": "JiaDingQu",
		"abbr": "JDQ",
		"zip": "201800",
		"level": 2
	},
	{
		"code": "310115",
		"parent_code": "310000",
		"name": "浦东新区",
		"alias": "浦东新区",
		"pinyin": "PuDongXinQu",
		"abbr": "PDXQ",
		"zip": "200120",
		"level": 2
	},
	{
		"code": "310116",
		"parent_code": "310000",
		"name": "金山区",
		"alias": "金山区",
		"pinyin": "JinShanQu",
		"abbr": "JSQ",
		"zip": "201540",
		"level": 2
	},
	{
		"code": "310117",
		"parent_code": "310000",
		"name": "松江区",
		"alias": "松江区",
		"pinyin": "SongJiangQu",
		"abbr": "SJQ",
		"zip": "201600",
		"level": 2
	},
	{
		"code": "310118",
		"parent_code": "310000",
		"name": "青浦区",
		"alias": "青浦区",
		"pinyin": "QingPuQu",
		"abbr": "QPQ",
		"zip": "201700",
		"level": 2
	},
	{
		"code": "310120",
		"parent_code": "310000",
		"name": "奉贤区",
		"alias": "奉贤区",
		"pinyin": "FengXianQu",
		"abbr": "FXQ",
		"zip": "201400",
		"level": 2
	},
	{
		"code": "310230",
		"parent_code": "310000",
		"name": "崇明县",
		"alias": "崇明",
		"pinyin": "ChongMing",
		"abbr": "CM",
		"zip": "202150",
		"level": 2
	},
	{
		"code": "320000",
		"parent_code": null,
		"name": "江苏省",
		"alias": "江苏",
		"pinyin": "JiangSu",
		"abbr": "JS",
		"zip": "210000",
		"level": 1
	},
	{
		"code": "320100",
		"parent_code": "320000",
		"name": "南京市",
		"alias": "南京",
		"pinyin": "NanJing",
		"abbr": "NJ",
		"zip": "210000",
		"level": 2
	},
	{
		"code": "320102",
		"parent_code": "320100",
		"name": "玄武区",
		"alias": "玄武区",
		"pinyin": "XuanWuQu",
		"abbr": "XWQ",
		"zip": "210018",
		"level": 3
	},
	{
		"code": "320104",
		"parent_code": "320100",
		"name": "秦淮区",
		"alias": "秦淮区",
		"pinyin": "QinHuaiQu",
		"abbr": "QHQ",
		"zip": "210001",
		"level": 3
	},
	{
		"code": "320105",
		"parent_code": "320100",
		"name": "建邺区",
		"alias": "建邺区",
		"pinyin": "JianYeQu",
		"abbr": "JYQ",
		"zip": "210004",
		"level": 3
	},
	{
		"code": "320106",
		"parent_code": "320100",
		"name": "鼓楼区",
		"alias": "鼓楼区",
		"pinyin": "GuLouQu",
		"abbr": "GLQ",
		"zip": "210009",
		"level": 3
	},
	{
		"code": "320111",
		"parent_code": "320100",
		"name": "浦口区",
		"alias": "浦口区",
		"pinyin": "PuKouQu",
		"abbr": "PKQ",
		"zip": "211800",
		"level": 3
	},
	{
		"code": "320113",
		"parent_code": "320100",
		"name": "栖霞区",
		"alias": "栖霞区",
		"pinyin": "QiXiaQu",
		"abbr": "QXQ",
		"zip": "210046",
		"level": 3
	},
	{
		"code": "320114",
		"parent_code": "320100",
		"name": "雨花台区",
		"alias": "雨花台区",
		"pinyin": "YuHuaTaiQu",
		"abbr": "YHTQ",
		"zip": "210012",
		"level": 3
	},
	{
		"code": "320115",
		"parent_code": "320100",
		"name": "江宁区",
		"alias": "江宁区",
		"pinyin": "JiangNingQu",
		"abbr": "JNQ",
		"zip": "211100",
		"level": 3
	},
	{
		"code": "320116",
		"parent_code": "320100",
		"name": "六合区",
		"alias": "六合区",
		"pinyin": "LiuHeQu",
		"abbr": "LHQ",
		"zip": "211500",
		"level": 3
	},
	{
		"code": "320200",
		"parent_code": "320000",
		"name": "无锡市",
		"alias": "无锡",
		"pinyin": "WuXi",
		"abbr": "WX",
		"zip": "214000",
		"level": 2
	},
	{
		"code": "320202",
		"parent_code": "320200",
		"name": "崇安区",
		"alias": "崇安区",
		"pinyin": "ChongAnQu",
		"abbr": "CAQ",
		"zip": "214002",
		"level": 3
	},
	{
		"code": "320203",
		"parent_code": "320200",
		"name": "南长区",
		"alias": "南长区",
		"pinyin": "NanZhangQu",
		"abbr": "NZQ",
		"zip": "214021",
		"level": 3
	},
	{
		"code": "320204",
		"parent_code": "320200",
		"name": "北塘区",
		"alias": "北塘区",
		"pinyin": "BeiTangQu",
		"abbr": "BTQ",
		"zip": "214044",
		"level": 3
	},
	{
		"code": "320205",
		"parent_code": "320200",
		"name": "锡山区",
		"alias": "锡山区",
		"pinyin": "XiShanQu",
		"abbr": "XSQ",
		"zip": "214101",
		"level": 3
	},
	{
		"code": "320206",
		"parent_code": "320200",
		"name": "惠山区",
		"alias": "惠山区",
		"pinyin": "HuiShanQu",
		"abbr": "HSQ",
		"zip": "214187",
		"level": 3
	},
	{
		"code": "320211",
		"parent_code": "320200",
		"name": "滨湖区",
		"alias": "滨湖区",
		"pinyin": "BinHuQu",
		"abbr": "BHQ",
		"zip": "214062",
		"level": 3
	},
	{
		"code": "320281",
		"parent_code": "320200",
		"name": "江阴市",
		"alias": "江阴",
		"pinyin": "JiangYin",
		"abbr": "JY",
		"zip": "214400",
		"level": 3
	},
	{
		"code": "320282",
		"parent_code": "320200",
		"name": "宜兴市",
		"alias": "宜兴",
		"pinyin": "YiXing",
		"abbr": "YX",
		"zip": "214200",
		"level": 3
	},
	{
		"code": "320300",
		"parent_code": "320000",
		"name": "徐州市",
		"alias": "徐州",
		"pinyin": "XuZhou",
		"abbr": "XZ",
		"zip": "221000",
		"level": 2
	},
	{
		"code": "320302",
		"parent_code": "320300",
		"name": "鼓楼区",
		"alias": "鼓楼区",
		"pinyin": "GuLouQu",
		"abbr": "GLQ",
		"zip": "220005",
		"level": 3
	},
	{
		"code": "320303",
		"parent_code": "320300",
		"name": "云龙区",
		"alias": "云龙区",
		"pinyin": "YunLongQu",
		"abbr": "YLQ",
		"zip": "220009",
		"level": 3
	},
	{
		"code": "320305",
		"parent_code": "320300",
		"name": "贾汪区",
		"alias": "贾汪区",
		"pinyin": "JiaWangQu",
		"abbr": "JWQ",
		"zip": "220011",
		"level": 3
	},
	{
		"code": "320311",
		"parent_code": "320300",
		"name": "泉山区",
		"alias": "泉山区",
		"pinyin": "QuanShanQu",
		"abbr": "QSQ",
		"zip": "220006",
		"level": 3
	},
	{
		"code": "320312",
		"parent_code": "320300",
		"name": "铜山区",
		"alias": "铜山区",
		"pinyin": "TongShanQu",
		"abbr": "TSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "320321",
		"parent_code": "320300",
		"name": "丰县",
		"alias": "丰县",
		"pinyin": "FengXian",
		"abbr": "FX",
		"zip": "221700",
		"level": 3
	},
	{
		"code": "320322",
		"parent_code": "320300",
		"name": "沛县",
		"alias": "沛县",
		"pinyin": "PeiXian",
		"abbr": "PX",
		"zip": "221600",
		"level": 3
	},
	{
		"code": "320324",
		"parent_code": "320300",
		"name": "睢宁县",
		"alias": "睢宁",
		"pinyin": "SuiNing",
		"abbr": "SN",
		"zip": "221200",
		"level": 3
	},
	{
		"code": "320381",
		"parent_code": "320300",
		"name": "新沂市",
		"alias": "新沂",
		"pinyin": "XinYi",
		"abbr": "XY",
		"zip": "221400",
		"level": 3
	},
	{
		"code": "320382",
		"parent_code": "320300",
		"name": "邳州市",
		"alias": "邳州",
		"pinyin": "PiZhou",
		"abbr": "PZ",
		"zip": "221300",
		"level": 3
	},
	{
		"code": "320400",
		"parent_code": "320000",
		"name": "常州市",
		"alias": "常州",
		"pinyin": "ChangZhou",
		"abbr": "CZ",
		"zip": "213000",
		"level": 2
	},
	{
		"code": "320402",
		"parent_code": "320400",
		"name": "天宁区",
		"alias": "天宁区",
		"pinyin": "TianNingQu",
		"abbr": "TNQ",
		"zip": "213003",
		"level": 3
	},
	{
		"code": "320404",
		"parent_code": "320400",
		"name": "钟楼区",
		"alias": "钟楼区",
		"pinyin": "ZhongLouQu",
		"abbr": "ZLQ",
		"zip": "213002",
		"level": 3
	},
	{
		"code": "320405",
		"parent_code": "320400",
		"name": "戚墅堰区",
		"alias": "戚墅堰区",
		"pinyin": "QiShuYanQu",
		"abbr": "QSYQ",
		"zip": "213011",
		"level": 3
	},
	{
		"code": "320411",
		"parent_code": "320400",
		"name": "新北区",
		"alias": "新北区",
		"pinyin": "XinBeiQu",
		"abbr": "XBQ",
		"zip": "213001",
		"level": 3
	},
	{
		"code": "320412",
		"parent_code": "320400",
		"name": "武进区",
		"alias": "武进区",
		"pinyin": "WuJinQu",
		"abbr": "WJQ",
		"zip": "213161",
		"level": 3
	},
	{
		"code": "320481",
		"parent_code": "320400",
		"name": "溧阳市",
		"alias": "溧阳",
		"pinyin": "LiYang",
		"abbr": "LY",
		"zip": "213300",
		"level": 3
	},
	{
		"code": "320482",
		"parent_code": "320400",
		"name": "金坛市",
		"alias": "金坛",
		"pinyin": "JinTan",
		"abbr": "JT",
		"zip": "213200",
		"level": 3
	},
	{
		"code": "320500",
		"parent_code": "320000",
		"name": "苏州市",
		"alias": "苏州",
		"pinyin": "SuZhou",
		"abbr": "SZ",
		"zip": "215000",
		"level": 2
	},
	{
		"code": "320505",
		"parent_code": "320500",
		"name": "虎丘区",
		"alias": "虎丘区",
		"pinyin": "HuQiuQu",
		"abbr": "HQQ",
		"zip": "215004",
		"level": 3
	},
	{
		"code": "320506",
		"parent_code": "320500",
		"name": "吴中区",
		"alias": "吴中区",
		"pinyin": "WuZhongQu",
		"abbr": "WZQ",
		"zip": "215128",
		"level": 3
	},
	{
		"code": "320507",
		"parent_code": "320500",
		"name": "相城区",
		"alias": "相城区",
		"pinyin": "XiangChengQu",
		"abbr": "XCQ",
		"zip": "215131",
		"level": 3
	},
	{
		"code": "320508",
		"parent_code": "320500",
		"name": "姑苏区",
		"alias": "姑苏区",
		"pinyin": "GuSuQu",
		"abbr": "GSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "320509",
		"parent_code": "320500",
		"name": "吴江区",
		"alias": "吴江区",
		"pinyin": "WuJiangQu",
		"abbr": "WJQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "320581",
		"parent_code": "320500",
		"name": "常熟市",
		"alias": "常熟",
		"pinyin": "ChangShu",
		"abbr": "CS",
		"zip": "215500",
		"level": 3
	},
	{
		"code": "320582",
		"parent_code": "320500",
		"name": "张家港市",
		"alias": "张家港",
		"pinyin": "ZhangJiaGang",
		"abbr": "ZJG",
		"zip": "215600",
		"level": 3
	},
	{
		"code": "320583",
		"parent_code": "320500",
		"name": "昆山市",
		"alias": "昆山",
		"pinyin": "KunShan",
		"abbr": "KS",
		"zip": "215300",
		"level": 3
	},
	{
		"code": "320585",
		"parent_code": "320500",
		"name": "太仓市",
		"alias": "太仓",
		"pinyin": "TaiCang",
		"abbr": "TC",
		"zip": "215400",
		"level": 3
	},
	{
		"code": "320600",
		"parent_code": "320000",
		"name": "南通市",
		"alias": "南通",
		"pinyin": "NanTong",
		"abbr": "NT",
		"zip": "226000",
		"level": 2
	},
	{
		"code": "320602",
		"parent_code": "320600",
		"name": "崇川区",
		"alias": "崇川区",
		"pinyin": "ChongChuanQu",
		"abbr": "CCQ",
		"zip": "226001",
		"level": 3
	},
	{
		"code": "320611",
		"parent_code": "320600",
		"name": "港闸区",
		"alias": "港闸区",
		"pinyin": "GangZhaQu",
		"abbr": "GZQ",
		"zip": "226001",
		"level": 3
	},
	{
		"code": "320612",
		"parent_code": "320600",
		"name": "通州区",
		"alias": "通州区",
		"pinyin": "TongZhouQu",
		"abbr": "TZQ",
		"zip": "226321",
		"level": 3
	},
	{
		"code": "320621",
		"parent_code": "320600",
		"name": "海安县",
		"alias": "海安",
		"pinyin": "HaiAn",
		"abbr": "HA",
		"zip": "226600",
		"level": 3
	},
	{
		"code": "320623",
		"parent_code": "320600",
		"name": "如东县",
		"alias": "如东",
		"pinyin": "RuDong",
		"abbr": "RD",
		"zip": "226400",
		"level": 3
	},
	{
		"code": "320681",
		"parent_code": "320600",
		"name": "启东市",
		"alias": "启东",
		"pinyin": "QiDong",
		"abbr": "QD",
		"zip": "226200",
		"level": 3
	},
	{
		"code": "320682",
		"parent_code": "320600",
		"name": "如皋市",
		"alias": "如皋",
		"pinyin": "RuGao",
		"abbr": "RG",
		"zip": "226500",
		"level": 3
	},
	{
		"code": "320684",
		"parent_code": "320600",
		"name": "海门市",
		"alias": "海门",
		"pinyin": "HaiMen",
		"abbr": "HM",
		"zip": "226100",
		"level": 3
	},
	{
		"code": "320700",
		"parent_code": "320000",
		"name": "连云港市",
		"alias": "连云港",
		"pinyin": "LianYunGang",
		"abbr": "LYG",
		"zip": "222000",
		"level": 2
	},
	{
		"code": "320703",
		"parent_code": "320700",
		"name": "连云区",
		"alias": "连云区",
		"pinyin": "LianYunQu",
		"abbr": "LYQ",
		"zip": "222042",
		"level": 3
	},
	{
		"code": "320705",
		"parent_code": "320700",
		"name": "新浦区",
		"alias": "新浦区",
		"pinyin": "XinPuQu",
		"abbr": "XPQ",
		"zip": "222003",
		"level": 3
	},
	{
		"code": "320706",
		"parent_code": "320700",
		"name": "海州区",
		"alias": "海州区",
		"pinyin": "HaiZhouQu",
		"abbr": "HZQ",
		"zip": "222023",
		"level": 3
	},
	{
		"code": "320721",
		"parent_code": "320700",
		"name": "赣榆县",
		"alias": "赣榆",
		"pinyin": "GanYu",
		"abbr": "GY",
		"zip": "222100",
		"level": 3
	},
	{
		"code": "320722",
		"parent_code": "320700",
		"name": "东海县",
		"alias": "东海",
		"pinyin": "DongHai",
		"abbr": "DH",
		"zip": "222300",
		"level": 3
	},
	{
		"code": "320723",
		"parent_code": "320700",
		"name": "灌云县",
		"alias": "灌云",
		"pinyin": "GuanYun",
		"abbr": "GY",
		"zip": "222200",
		"level": 3
	},
	{
		"code": "320724",
		"parent_code": "320700",
		"name": "灌南县",
		"alias": "灌南",
		"pinyin": "GuanNan",
		"abbr": "GN",
		"zip": "222500",
		"level": 3
	},
	{
		"code": "320800",
		"parent_code": "320000",
		"name": "淮安市",
		"alias": "淮安",
		"pinyin": "HuaiAn",
		"abbr": "HA",
		"zip": "223200",
		"level": 2
	},
	{
		"code": "320802",
		"parent_code": "320800",
		"name": "清河区",
		"alias": "清河区",
		"pinyin": "QingHeQu",
		"abbr": "QHQ",
		"zip": "223001",
		"level": 3
	},
	{
		"code": "320803",
		"parent_code": "320800",
		"name": "淮安区",
		"alias": "淮安区",
		"pinyin": "HuaiAnQu",
		"abbr": "HAQ",
		"zip": "223200",
		"level": 3
	},
	{
		"code": "320804",
		"parent_code": "320800",
		"name": "淮阴区",
		"alias": "淮阴区",
		"pinyin": "HuaiYinQu",
		"abbr": "HYQ",
		"zip": "223000",
		"level": 3
	},
	{
		"code": "320811",
		"parent_code": "320800",
		"name": "清浦区",
		"alias": "清浦区",
		"pinyin": "QingPuQu",
		"abbr": "QPQ",
		"zip": "223002",
		"level": 3
	},
	{
		"code": "320826",
		"parent_code": "320800",
		"name": "涟水县",
		"alias": "涟水",
		"pinyin": "LianShui",
		"abbr": "LS",
		"zip": "223400",
		"level": 3
	},
	{
		"code": "320829",
		"parent_code": "320800",
		"name": "洪泽县",
		"alias": "洪泽",
		"pinyin": "HongZe",
		"abbr": "HZ",
		"zip": "223100",
		"level": 3
	},
	{
		"code": "320830",
		"parent_code": "320800",
		"name": "盱眙县",
		"alias": "盱眙",
		"pinyin": "XuYi",
		"abbr": "XY",
		"zip": "211700",
		"level": 3
	},
	{
		"code": "320831",
		"parent_code": "320800",
		"name": "金湖县",
		"alias": "金湖",
		"pinyin": "JinHu",
		"abbr": "JH",
		"zip": "211600",
		"level": 3
	},
	{
		"code": "320900",
		"parent_code": "320000",
		"name": "盐城市",
		"alias": "盐城",
		"pinyin": "YanCheng",
		"abbr": "YC",
		"zip": "224000",
		"level": 2
	},
	{
		"code": "320902",
		"parent_code": "320900",
		"name": "亭湖区",
		"alias": "亭湖区",
		"pinyin": "TingHuQu",
		"abbr": "THQ",
		"zip": "224005",
		"level": 3
	},
	{
		"code": "320903",
		"parent_code": "320900",
		"name": "盐都区",
		"alias": "盐都区",
		"pinyin": "YanDouQu",
		"abbr": "YDQ",
		"zip": "224055",
		"level": 3
	},
	{
		"code": "320921",
		"parent_code": "320900",
		"name": "响水县",
		"alias": "响水",
		"pinyin": "XiangShui",
		"abbr": "XS",
		"zip": "224600",
		"level": 3
	},
	{
		"code": "320922",
		"parent_code": "320900",
		"name": "滨海县",
		"alias": "滨海",
		"pinyin": "BinHai",
		"abbr": "BH",
		"zip": "224500",
		"level": 3
	},
	{
		"code": "320923",
		"parent_code": "320900",
		"name": "阜宁县",
		"alias": "阜宁",
		"pinyin": "FuNing",
		"abbr": "FN",
		"zip": "224400",
		"level": 3
	},
	{
		"code": "320924",
		"parent_code": "320900",
		"name": "射阳县",
		"alias": "射阳",
		"pinyin": "SheYang",
		"abbr": "SY",
		"zip": "224300",
		"level": 3
	},
	{
		"code": "320925",
		"parent_code": "320900",
		"name": "建湖县",
		"alias": "建湖",
		"pinyin": "JianHu",
		"abbr": "JH",
		"zip": "224700",
		"level": 3
	},
	{
		"code": "320981",
		"parent_code": "320900",
		"name": "东台市",
		"alias": "东台",
		"pinyin": "DongTai",
		"abbr": "DT",
		"zip": "224200",
		"level": 3
	},
	{
		"code": "320982",
		"parent_code": "320900",
		"name": "大丰市",
		"alias": "大丰",
		"pinyin": "DaFeng",
		"abbr": "DF",
		"zip": "224100",
		"level": 3
	},
	{
		"code": "321000",
		"parent_code": "320000",
		"name": "扬州市",
		"alias": "扬州",
		"pinyin": "YangZhou",
		"abbr": "YZ",
		"zip": "225000",
		"level": 2
	},
	{
		"code": "321002",
		"parent_code": "321000",
		"name": "广陵区",
		"alias": "广陵区",
		"pinyin": "GuangLingQu",
		"abbr": "GLQ",
		"zip": "225002",
		"level": 3
	},
	{
		"code": "321003",
		"parent_code": "321000",
		"name": "邗江区",
		"alias": "邗江区",
		"pinyin": "HanJiangQu",
		"abbr": "HJQ",
		"zip": "225100",
		"level": 3
	},
	{
		"code": "321012",
		"parent_code": "321000",
		"name": "江都区",
		"alias": "江都区",
		"pinyin": "JiangDouQu",
		"abbr": "JDQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "321023",
		"parent_code": "321000",
		"name": "宝应县",
		"alias": "宝应",
		"pinyin": "BaoYing",
		"abbr": "BY",
		"zip": "225800",
		"level": 3
	},
	{
		"code": "321081",
		"parent_code": "321000",
		"name": "仪征市",
		"alias": "仪征",
		"pinyin": "YiZheng",
		"abbr": "YZ",
		"zip": "211400",
		"level": 3
	},
	{
		"code": "321084",
		"parent_code": "321000",
		"name": "高邮市",
		"alias": "高邮",
		"pinyin": "GaoYou",
		"abbr": "GY",
		"zip": "225600",
		"level": 3
	},
	{
		"code": "321100",
		"parent_code": "320000",
		"name": "镇江市",
		"alias": "镇江",
		"pinyin": "ZhenJiang",
		"abbr": "ZJ",
		"zip": "212000",
		"level": 2
	},
	{
		"code": "321102",
		"parent_code": "321100",
		"name": "京口区",
		"alias": "京口区",
		"pinyin": "JingKouQu",
		"abbr": "JKQ",
		"zip": "212001",
		"level": 3
	},
	{
		"code": "321111",
		"parent_code": "321100",
		"name": "润州区",
		"alias": "润州区",
		"pinyin": "RunZhouQu",
		"abbr": "RZQ",
		"zip": "212004",
		"level": 3
	},
	{
		"code": "321112",
		"parent_code": "321100",
		"name": "丹徒区",
		"alias": "丹徒区",
		"pinyin": "DanTuQu",
		"abbr": "DTQ",
		"zip": "212001",
		"level": 3
	},
	{
		"code": "321181",
		"parent_code": "321100",
		"name": "丹阳市",
		"alias": "丹阳",
		"pinyin": "DanYang",
		"abbr": "DY",
		"zip": "212300",
		"level": 3
	},
	{
		"code": "321182",
		"parent_code": "321100",
		"name": "扬中市",
		"alias": "扬中",
		"pinyin": "YangZhong",
		"abbr": "YZ",
		"zip": "212200",
		"level": 3
	},
	{
		"code": "321183",
		"parent_code": "321100",
		"name": "句容市",
		"alias": "句容",
		"pinyin": "JuRong",
		"abbr": "JR",
		"zip": "212400",
		"level": 3
	},
	{
		"code": "321200",
		"parent_code": "321200",
		"name": "泰州市",
		"alias": "泰州",
		"pinyin": "TaiZhou",
		"abbr": "TZ",
		"zip": "225300",
		"level": 3
	},
	{
		"code": "321201",
		"parent_code": "321200",
		"name": "市辖区",
		"alias": "市辖区",
		"pinyin": "ShiXiaQu",
		"abbr": "SXQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "321202",
		"parent_code": "321200",
		"name": "海陵区",
		"alias": "海陵区",
		"pinyin": "HaiLingQu",
		"abbr": "HLQ",
		"zip": "225300",
		"level": 3
	},
	{
		"code": "321203",
		"parent_code": "321200",
		"name": "高港区",
		"alias": "高港区",
		"pinyin": "GaoGangQu",
		"abbr": "GGQ",
		"zip": "225321",
		"level": 3
	},
	{
		"code": "321281",
		"parent_code": "321200",
		"name": "兴化市",
		"alias": "兴化",
		"pinyin": "XingHua",
		"abbr": "XH",
		"zip": "225700",
		"level": 3
	},
	{
		"code": "321282",
		"parent_code": "321200",
		"name": "靖江市",
		"alias": "靖江",
		"pinyin": "JingJiang",
		"abbr": "JJ",
		"zip": "214500",
		"level": 3
	},
	{
		"code": "321283",
		"parent_code": "321200",
		"name": "泰兴市",
		"alias": "泰兴",
		"pinyin": "TaiXing",
		"abbr": "TX",
		"zip": "225400",
		"level": 3
	},
	{
		"code": "321300",
		"parent_code": "320000",
		"name": "宿迁市",
		"alias": "宿迁",
		"pinyin": "SuQian",
		"abbr": "SQ",
		"zip": "223800",
		"level": 2
	},
	{
		"code": "321302",
		"parent_code": "321300",
		"name": "宿城区",
		"alias": "宿城区",
		"pinyin": "SuChengQu",
		"abbr": "SCQ",
		"zip": "223800",
		"level": 3
	},
	{
		"code": "321311",
		"parent_code": "321300",
		"name": "宿豫区",
		"alias": "宿豫区",
		"pinyin": "SuYuQu",
		"abbr": "SYQ",
		"zip": "223800",
		"level": 3
	},
	{
		"code": "321322",
		"parent_code": "321300",
		"name": "沭阳县",
		"alias": "沭阳",
		"pinyin": "ShuYang",
		"abbr": "SY",
		"zip": "223600",
		"level": 3
	},
	{
		"code": "321323",
		"parent_code": "321300",
		"name": "泗阳县",
		"alias": "泗阳",
		"pinyin": "SiYang",
		"abbr": "SY",
		"zip": "223700",
		"level": 3
	},
	{
		"code": "321324",
		"parent_code": "321300",
		"name": "泗洪县",
		"alias": "泗洪",
		"pinyin": "SiHong",
		"abbr": "SH",
		"zip": "223900",
		"level": 3
	},
	{
		"code": "330000",
		"parent_code": null,
		"name": "浙江省",
		"alias": "浙江",
		"pinyin": "ZheJiang",
		"abbr": "ZJ",
		"zip": "310000",
		"level": 1
	},
	{
		"code": "330100",
		"parent_code": "330000",
		"name": "杭州市",
		"alias": "杭州",
		"pinyin": "HangZhou",
		"abbr": "HZ",
		"zip": "310000",
		"level": 2
	},
	{
		"code": "330102",
		"parent_code": "330100",
		"name": "上城区",
		"alias": "上城区",
		"pinyin": "ShangChengQu",
		"abbr": "SCQ",
		"zip": "311500",
		"level": 3
	},
	{
		"code": "330103",
		"parent_code": "330100",
		"name": "下城区",
		"alias": "下城区",
		"pinyin": "XiaChengQu",
		"abbr": "XCQ",
		"zip": "310006",
		"level": 3
	},
	{
		"code": "330104",
		"parent_code": "330100",
		"name": "江干区",
		"alias": "江干区",
		"pinyin": "JiangGanQu",
		"abbr": "JGQ",
		"zip": "310002",
		"level": 3
	},
	{
		"code": "330105",
		"parent_code": "330100",
		"name": "拱墅区",
		"alias": "拱墅区",
		"pinyin": "GongShuQu",
		"abbr": "GSQ",
		"zip": "310011",
		"level": 3
	},
	{
		"code": "330106",
		"parent_code": "330100",
		"name": "西湖区",
		"alias": "西湖区",
		"pinyin": "XiHuQu",
		"abbr": "XHQ",
		"zip": "310013",
		"level": 3
	},
	{
		"code": "330108",
		"parent_code": "330100",
		"name": "滨江区",
		"alias": "滨江区",
		"pinyin": "BinJiangQu",
		"abbr": "BJQ",
		"zip": "310051",
		"level": 3
	},
	{
		"code": "330109",
		"parent_code": "330100",
		"name": "萧山区",
		"alias": "萧山区",
		"pinyin": "XiaoShanQu",
		"abbr": "XSQ",
		"zip": "311200",
		"level": 3
	},
	{
		"code": "330110",
		"parent_code": "330100",
		"name": "余杭区",
		"alias": "余杭区",
		"pinyin": "YuHangQu",
		"abbr": "YHQ",
		"zip": "311100",
		"level": 3
	},
	{
		"code": "330122",
		"parent_code": "330100",
		"name": "桐庐县",
		"alias": "桐庐",
		"pinyin": "TongLu",
		"abbr": "TL",
		"zip": "311500",
		"level": 3
	},
	{
		"code": "330127",
		"parent_code": "330100",
		"name": "淳安县",
		"alias": "淳安",
		"pinyin": "ChunAn",
		"abbr": "CA",
		"zip": "311700",
		"level": 3
	},
	{
		"code": "330182",
		"parent_code": "330100",
		"name": "建德市",
		"alias": "建德",
		"pinyin": "JianDe",
		"abbr": "JD",
		"zip": "311600",
		"level": 3
	},
	{
		"code": "330183",
		"parent_code": "330100",
		"name": "富阳市",
		"alias": "富阳",
		"pinyin": "FuYang",
		"abbr": "FY",
		"zip": "311400",
		"level": 3
	},
	{
		"code": "330185",
		"parent_code": "330100",
		"name": "临安市",
		"alias": "临安",
		"pinyin": "LinAn",
		"abbr": "LA",
		"zip": "311300",
		"level": 3
	},
	{
		"code": "330200",
		"parent_code": "330000",
		"name": "宁波市",
		"alias": "宁波",
		"pinyin": "NingBo",
		"abbr": "NB",
		"zip": "315000",
		"level": 2
	},
	{
		"code": "330203",
		"parent_code": "330200",
		"name": "海曙区",
		"alias": "海曙区",
		"pinyin": "HaiShuQu",
		"abbr": "HSQ",
		"zip": "315000",
		"level": 3
	},
	{
		"code": "330204",
		"parent_code": "330200",
		"name": "江东区",
		"alias": "江东区",
		"pinyin": "JiangDongQu",
		"abbr": "JDQ",
		"zip": "315040",
		"level": 3
	},
	{
		"code": "330205",
		"parent_code": "330200",
		"name": "江北区",
		"alias": "江北区",
		"pinyin": "JiangBeiQu",
		"abbr": "JBQ",
		"zip": "315020",
		"level": 3
	},
	{
		"code": "330206",
		"parent_code": "330200",
		"name": "北仑区",
		"alias": "北仑区",
		"pinyin": "BeiLunQu",
		"abbr": "BLQ",
		"zip": "315800",
		"level": 3
	},
	{
		"code": "330211",
		"parent_code": "330200",
		"name": "镇海区",
		"alias": "镇海区",
		"pinyin": "ZhenHaiQu",
		"abbr": "ZHQ",
		"zip": "315200",
		"level": 3
	},
	{
		"code": "330212",
		"parent_code": "330200",
		"name": "鄞州区",
		"alias": "鄞州区",
		"pinyin": "YinZhouQu",
		"abbr": "YZQ",
		"zip": "315100",
		"level": 3
	},
	{
		"code": "330225",
		"parent_code": "330200",
		"name": "象山县",
		"alias": "象山",
		"pinyin": "XiangShan",
		"abbr": "XS",
		"zip": "315700",
		"level": 3
	},
	{
		"code": "330226",
		"parent_code": "330200",
		"name": "宁海县",
		"alias": "宁海",
		"pinyin": "NingHai",
		"abbr": "NH",
		"zip": "315600",
		"level": 3
	},
	{
		"code": "330281",
		"parent_code": "330200",
		"name": "余姚市",
		"alias": "余姚",
		"pinyin": "YuYao",
		"abbr": "YY",
		"zip": "315400",
		"level": 3
	},
	{
		"code": "330282",
		"parent_code": "330200",
		"name": "慈溪市",
		"alias": "慈溪",
		"pinyin": "CiXi",
		"abbr": "CX",
		"zip": "315300",
		"level": 3
	},
	{
		"code": "330283",
		"parent_code": "330200",
		"name": "奉化市",
		"alias": "奉化",
		"pinyin": "FengHua",
		"abbr": "FH",
		"zip": "315500",
		"level": 3
	},
	{
		"code": "330300",
		"parent_code": "330000",
		"name": "温州市",
		"alias": "温州",
		"pinyin": "WenZhou",
		"abbr": "WZ",
		"zip": "325000",
		"level": 2
	},
	{
		"code": "330302",
		"parent_code": "330300",
		"name": "鹿城区",
		"alias": "鹿城区",
		"pinyin": "LuChengQu",
		"abbr": "LCQ",
		"zip": "325000",
		"level": 3
	},
	{
		"code": "330303",
		"parent_code": "330300",
		"name": "龙湾区",
		"alias": "龙湾区",
		"pinyin": "LongWanQu",
		"abbr": "LWQ",
		"zip": "325024",
		"level": 3
	},
	{
		"code": "330304",
		"parent_code": "330300",
		"name": "瓯海区",
		"alias": "瓯海区",
		"pinyin": "OuHaiQu",
		"abbr": "OHQ",
		"zip": "325005",
		"level": 3
	},
	{
		"code": "330322",
		"parent_code": "330300",
		"name": "洞头县",
		"alias": "洞头",
		"pinyin": "DongTou",
		"abbr": "DT",
		"zip": "325700",
		"level": 3
	},
	{
		"code": "330324",
		"parent_code": "330300",
		"name": "永嘉县",
		"alias": "永嘉",
		"pinyin": "YongJia",
		"abbr": "YJ",
		"zip": "325100",
		"level": 3
	},
	{
		"code": "330326",
		"parent_code": "330300",
		"name": "平阳县",
		"alias": "平阳",
		"pinyin": "PingYang",
		"abbr": "PY",
		"zip": "325400",
		"level": 3
	},
	{
		"code": "330327",
		"parent_code": "330300",
		"name": "苍南县",
		"alias": "苍南",
		"pinyin": "CangNan",
		"abbr": "CN",
		"zip": "325800",
		"level": 3
	},
	{
		"code": "330328",
		"parent_code": "330300",
		"name": "文成县",
		"alias": "文成",
		"pinyin": "WenCheng",
		"abbr": "WC",
		"zip": "325300",
		"level": 3
	},
	{
		"code": "330329",
		"parent_code": "330300",
		"name": "泰顺县",
		"alias": "泰顺",
		"pinyin": "TaiShun",
		"abbr": "TS",
		"zip": "325500",
		"level": 3
	},
	{
		"code": "330381",
		"parent_code": "330300",
		"name": "瑞安市",
		"alias": "瑞安",
		"pinyin": "RuiAn",
		"abbr": "RA",
		"zip": "325200",
		"level": 3
	},
	{
		"code": "330382",
		"parent_code": "330300",
		"name": "乐清市",
		"alias": "乐清",
		"pinyin": "LeQing",
		"abbr": "LQ",
		"zip": "325600",
		"level": 3
	},
	{
		"code": "330400",
		"parent_code": "330000",
		"name": "嘉兴市",
		"alias": "嘉兴",
		"pinyin": "JiaXing",
		"abbr": "JX",
		"zip": "314000",
		"level": 2
	},
	{
		"code": "330402",
		"parent_code": "330400",
		"name": "南湖区",
		"alias": "南湖区",
		"pinyin": "NanHuQu",
		"abbr": "NHQ",
		"zip": "314000",
		"level": 3
	},
	{
		"code": "330411",
		"parent_code": "330400",
		"name": "秀洲区",
		"alias": "秀洲区",
		"pinyin": "XiuZhouQu",
		"abbr": "XZQ",
		"zip": "314001",
		"level": 3
	},
	{
		"code": "330421",
		"parent_code": "330400",
		"name": "嘉善县",
		"alias": "嘉善",
		"pinyin": "JiaShan",
		"abbr": "JS",
		"zip": "314100",
		"level": 3
	},
	{
		"code": "330424",
		"parent_code": "330400",
		"name": "海盐县",
		"alias": "海盐",
		"pinyin": "HaiYan",
		"abbr": "HY",
		"zip": "314300",
		"level": 3
	},
	{
		"code": "330481",
		"parent_code": "330400",
		"name": "海宁市",
		"alias": "海宁",
		"pinyin": "HaiNing",
		"abbr": "HN",
		"zip": "314400",
		"level": 3
	},
	{
		"code": "330482",
		"parent_code": "330400",
		"name": "平湖市",
		"alias": "平湖",
		"pinyin": "PingHu",
		"abbr": "PH",
		"zip": "314200",
		"level": 3
	},
	{
		"code": "330483",
		"parent_code": "330400",
		"name": "桐乡市",
		"alias": "桐乡",
		"pinyin": "TongXiang",
		"abbr": "TX",
		"zip": "314500",
		"level": 3
	},
	{
		"code": "330500",
		"parent_code": "330000",
		"name": "湖州市",
		"alias": "湖州",
		"pinyin": "HuZhou",
		"abbr": "HZ",
		"zip": "313000",
		"level": 2
	},
	{
		"code": "330502",
		"parent_code": "330500",
		"name": "吴兴区",
		"alias": "吴兴区",
		"pinyin": "WuXingQu",
		"abbr": "WXQ",
		"zip": "313000",
		"level": 3
	},
	{
		"code": "330503",
		"parent_code": "330500",
		"name": "南浔区",
		"alias": "南浔区",
		"pinyin": "NanXunQu",
		"abbr": "NXQ",
		"zip": "313009",
		"level": 3
	},
	{
		"code": "330521",
		"parent_code": "330500",
		"name": "德清县",
		"alias": "德清",
		"pinyin": "DeQing",
		"abbr": "DQ",
		"zip": "313200",
		"level": 3
	},
	{
		"code": "330522",
		"parent_code": "330500",
		"name": "长兴县",
		"alias": "长兴",
		"pinyin": "ZhangXing",
		"abbr": "ZX",
		"zip": "313100",
		"level": 3
	},
	{
		"code": "330523",
		"parent_code": "330500",
		"name": "安吉县",
		"alias": "安吉",
		"pinyin": "AnJi",
		"abbr": "AJ",
		"zip": "313300",
		"level": 3
	},
	{
		"code": "330600",
		"parent_code": "330000",
		"name": "绍兴市",
		"alias": "绍兴",
		"pinyin": "ShaoXing",
		"abbr": "SX",
		"zip": "312000",
		"level": 2
	},
	{
		"code": "330602",
		"parent_code": "330600",
		"name": "越城区",
		"alias": "越城区",
		"pinyin": "YueChengQu",
		"abbr": "YCQ",
		"zip": "312000",
		"level": 3
	},
	{
		"code": "330621",
		"parent_code": "330600",
		"name": "绍兴县",
		"alias": "绍兴",
		"pinyin": "ShaoXing",
		"abbr": "SX",
		"zip": "312000",
		"level": 3
	},
	{
		"code": "330624",
		"parent_code": "330600",
		"name": "新昌县",
		"alias": "新昌",
		"pinyin": "XinChang",
		"abbr": "XC",
		"zip": "312500",
		"level": 3
	},
	{
		"code": "330681",
		"parent_code": "330600",
		"name": "诸暨市",
		"alias": "诸暨",
		"pinyin": "ZhuJi",
		"abbr": "ZJ",
		"zip": "311800",
		"level": 3
	},
	{
		"code": "330682",
		"parent_code": "330600",
		"name": "上虞市",
		"alias": "上虞",
		"pinyin": "ShangYu",
		"abbr": "SY",
		"zip": "312300",
		"level": 3
	},
	{
		"code": "330683",
		"parent_code": "330600",
		"name": "嵊州市",
		"alias": "嵊州",
		"pinyin": "ShengZhou",
		"abbr": "SZ",
		"zip": "312400",
		"level": 3
	},
	{
		"code": "330700",
		"parent_code": "330000",
		"name": "金华市",
		"alias": "金华",
		"pinyin": "JinHua",
		"abbr": "JH",
		"zip": "321000",
		"level": 2
	},
	{
		"code": "330702",
		"parent_code": "330700",
		"name": "婺城区",
		"alias": "婺城区",
		"pinyin": "WuChengQu",
		"abbr": "WCQ",
		"zip": "321051",
		"level": 3
	},
	{
		"code": "330703",
		"parent_code": "330700",
		"name": "金东区",
		"alias": "金东区",
		"pinyin": "JinDongQu",
		"abbr": "JDQ",
		"zip": "321002",
		"level": 3
	},
	{
		"code": "330723",
		"parent_code": "330700",
		"name": "武义县",
		"alias": "武义",
		"pinyin": "WuYi",
		"abbr": "WY",
		"zip": "321200",
		"level": 3
	},
	{
		"code": "330726",
		"parent_code": "330700",
		"name": "浦江县",
		"alias": "浦江",
		"pinyin": "PuJiang",
		"abbr": "PJ",
		"zip": "322200",
		"level": 3
	},
	{
		"code": "330727",
		"parent_code": "330700",
		"name": "磐安县",
		"alias": "磐安",
		"pinyin": "PanAn",
		"abbr": "PA",
		"zip": "322300",
		"level": 3
	},
	{
		"code": "330781",
		"parent_code": "330700",
		"name": "兰溪市",
		"alias": "兰溪",
		"pinyin": "LanXi",
		"abbr": "LX",
		"zip": "321100",
		"level": 3
	},
	{
		"code": "330782",
		"parent_code": "330700",
		"name": "义乌市",
		"alias": "义乌",
		"pinyin": "YiWu",
		"abbr": "YW",
		"zip": "322000",
		"level": 3
	},
	{
		"code": "330783",
		"parent_code": "330700",
		"name": "东阳市",
		"alias": "东阳",
		"pinyin": "DongYang",
		"abbr": "DY",
		"zip": "322100",
		"level": 3
	},
	{
		"code": "330784",
		"parent_code": "330700",
		"name": "永康市",
		"alias": "永康",
		"pinyin": "YongKang",
		"abbr": "YK",
		"zip": "321300",
		"level": 3
	},
	{
		"code": "330800",
		"parent_code": "330000",
		"name": "衢州市",
		"alias": "衢州",
		"pinyin": "QuZhou",
		"abbr": "QZ",
		"zip": "324000",
		"level": 2
	},
	{
		"code": "330802",
		"parent_code": "330800",
		"name": "柯城区",
		"alias": "柯城区",
		"pinyin": "KeChengQu",
		"abbr": "KCQ",
		"zip": "324000",
		"level": 3
	},
	{
		"code": "330803",
		"parent_code": "330800",
		"name": "衢江区",
		"alias": "衢江区",
		"pinyin": "QuJiangQu",
		"abbr": "QJQ",
		"zip": "324000",
		"level": 3
	},
	{
		"code": "330822",
		"parent_code": "330800",
		"name": "常山县",
		"alias": "常山",
		"pinyin": "ChangShan",
		"abbr": "CS",
		"zip": "324200",
		"level": 3
	},
	{
		"code": "330824",
		"parent_code": "330800",
		"name": "开化县",
		"alias": "开化",
		"pinyin": "KaiHua",
		"abbr": "KH",
		"zip": "324300",
		"level": 3
	},
	{
		"code": "330825",
		"parent_code": "330800",
		"name": "龙游县",
		"alias": "龙游",
		"pinyin": "LongYou",
		"abbr": "LY",
		"zip": "324400",
		"level": 3
	},
	{
		"code": "330881",
		"parent_code": "330800",
		"name": "江山市",
		"alias": "江山",
		"pinyin": "JiangShan",
		"abbr": "JS",
		"zip": "324100",
		"level": 3
	},
	{
		"code": "330900",
		"parent_code": "330000",
		"name": "舟山市",
		"alias": "舟山",
		"pinyin": "ZhouShan",
		"abbr": "ZS",
		"zip": "316000",
		"level": 2
	},
	{
		"code": "330902",
		"parent_code": "330900",
		"name": "定海区",
		"alias": "定海区",
		"pinyin": "DingHaiQu",
		"abbr": "DHQ",
		"zip": "316000",
		"level": 3
	},
	{
		"code": "330903",
		"parent_code": "330900",
		"name": "普陀区",
		"alias": "普陀区",
		"pinyin": "PuTuoQu",
		"abbr": "PTQ",
		"zip": "316100",
		"level": 3
	},
	{
		"code": "330921",
		"parent_code": "330900",
		"name": "岱山县",
		"alias": "岱山",
		"pinyin": "DaiShan",
		"abbr": "DS",
		"zip": "316200",
		"level": 3
	},
	{
		"code": "330922",
		"parent_code": "330900",
		"name": "嵊泗县",
		"alias": "嵊泗",
		"pinyin": "ShengSi",
		"abbr": "SS",
		"zip": "202400",
		"level": 3
	},
	{
		"code": "331000",
		"parent_code": "330000",
		"name": "台州市",
		"alias": "台州",
		"pinyin": "TaiZhou",
		"abbr": "TZ",
		"zip": "318000",
		"level": 2
	},
	{
		"code": "331002",
		"parent_code": "331000",
		"name": "椒江区",
		"alias": "椒江区",
		"pinyin": "JiaoJiangQu",
		"abbr": "JJQ",
		"zip": "318000",
		"level": 3
	},
	{
		"code": "331003",
		"parent_code": "331000",
		"name": "黄岩区",
		"alias": "黄岩区",
		"pinyin": "HuangYanQu",
		"abbr": "HYQ",
		"zip": "318020",
		"level": 3
	},
	{
		"code": "331004",
		"parent_code": "331000",
		"name": "路桥区",
		"alias": "路桥区",
		"pinyin": "LuQiaoQu",
		"abbr": "LQQ",
		"zip": "318050",
		"level": 3
	},
	{
		"code": "331021",
		"parent_code": "331000",
		"name": "玉环县",
		"alias": "玉环",
		"pinyin": "YuHuan",
		"abbr": "YH",
		"zip": "317600",
		"level": 3
	},
	{
		"code": "331022",
		"parent_code": "331000",
		"name": "三门县",
		"alias": "三门",
		"pinyin": "SanMen",
		"abbr": "SM",
		"zip": "317100",
		"level": 3
	},
	{
		"code": "331023",
		"parent_code": "331000",
		"name": "天台县",
		"alias": "天台",
		"pinyin": "TianTai",
		"abbr": "TT",
		"zip": "317200",
		"level": 3
	},
	{
		"code": "331024",
		"parent_code": "331000",
		"name": "仙居县",
		"alias": "仙居",
		"pinyin": "XianJu",
		"abbr": "XJ",
		"zip": "317300",
		"level": 3
	},
	{
		"code": "331081",
		"parent_code": "331000",
		"name": "温岭市",
		"alias": "温岭",
		"pinyin": "WenLing",
		"abbr": "WL",
		"zip": "317500",
		"level": 3
	},
	{
		"code": "331082",
		"parent_code": "331000",
		"name": "临海市",
		"alias": "临海",
		"pinyin": "LinHai",
		"abbr": "LH",
		"zip": "317000",
		"level": 3
	},
	{
		"code": "331100",
		"parent_code": "330000",
		"name": "丽水市",
		"alias": "丽水",
		"pinyin": "LiShui",
		"abbr": "LS",
		"zip": "323000",
		"level": 2
	},
	{
		"code": "331102",
		"parent_code": "331100",
		"name": "莲都区",
		"alias": "莲都区",
		"pinyin": "LianDouQu",
		"abbr": "LDQ",
		"zip": "323000",
		"level": 3
	},
	{
		"code": "331121",
		"parent_code": "331100",
		"name": "青田县",
		"alias": "青田",
		"pinyin": "QingTian",
		"abbr": "QT",
		"zip": "323900",
		"level": 3
	},
	{
		"code": "331122",
		"parent_code": "331100",
		"name": "缙云县",
		"alias": "缙云",
		"pinyin": "JinYun",
		"abbr": "JY",
		"zip": "321400",
		"level": 3
	},
	{
		"code": "331123",
		"parent_code": "331100",
		"name": "遂昌县",
		"alias": "遂昌",
		"pinyin": "SuiChang",
		"abbr": "SC",
		"zip": "323300",
		"level": 3
	},
	{
		"code": "331124",
		"parent_code": "331100",
		"name": "松阳县",
		"alias": "松阳",
		"pinyin": "SongYang",
		"abbr": "SY",
		"zip": "323400",
		"level": 3
	},
	{
		"code": "331125",
		"parent_code": "331100",
		"name": "云和县",
		"alias": "云和",
		"pinyin": "YunHe",
		"abbr": "YH",
		"zip": "323600",
		"level": 3
	},
	{
		"code": "331126",
		"parent_code": "331100",
		"name": "庆元县",
		"alias": "庆元",
		"pinyin": "QingYuan",
		"abbr": "QY",
		"zip": "323800",
		"level": 3
	},
	{
		"code": "331127",
		"parent_code": "331100",
		"name": "景宁畲族自治县",
		"alias": "景宁畲族",
		"pinyin": "JingNingSheZu",
		"abbr": "JNSZ",
		"zip": "323500",
		"level": 3
	},
	{
		"code": "331181",
		"parent_code": "331100",
		"name": "龙泉市",
		"alias": "龙泉",
		"pinyin": "LongQuan",
		"abbr": "LQ",
		"zip": "323700",
		"level": 3
	},
	{
		"code": "340000",
		"parent_code": null,
		"name": "安徽省",
		"alias": "安徽",
		"pinyin": "AnHui",
		"abbr": "AH",
		"zip": "230000",
		"level": 1
	},
	{
		"code": "340100",
		"parent_code": "340000",
		"name": "合肥市",
		"alias": "合肥",
		"pinyin": "HeFei",
		"abbr": "HF",
		"zip": "230000",
		"level": 2
	},
	{
		"code": "340102",
		"parent_code": "340100",
		"name": "瑶海区",
		"alias": "瑶海区",
		"pinyin": "YaoHaiQu",
		"abbr": "YHQ",
		"zip": "230011",
		"level": 3
	},
	{
		"code": "340103",
		"parent_code": "340100",
		"name": "庐阳区",
		"alias": "庐阳区",
		"pinyin": "LuYangQu",
		"abbr": "LYQ",
		"zip": "230001",
		"level": 3
	},
	{
		"code": "340104",
		"parent_code": "340100",
		"name": "蜀山区",
		"alias": "蜀山区",
		"pinyin": "ShuShanQu",
		"abbr": "SSQ",
		"zip": "230061",
		"level": 3
	},
	{
		"code": "340111",
		"parent_code": "340100",
		"name": "包河区",
		"alias": "包河区",
		"pinyin": "BaoHeQu",
		"abbr": "BHQ",
		"zip": "230041",
		"level": 3
	},
	{
		"code": "340121",
		"parent_code": "340100",
		"name": "长丰县",
		"alias": "长丰",
		"pinyin": "ZhangFeng",
		"abbr": "ZF",
		"zip": "231100",
		"level": 3
	},
	{
		"code": "340122",
		"parent_code": "340100",
		"name": "肥东县",
		"alias": "肥东",
		"pinyin": "FeiDong",
		"abbr": "FD",
		"zip": "231600",
		"level": 3
	},
	{
		"code": "340123",
		"parent_code": "340100",
		"name": "肥西县",
		"alias": "肥西",
		"pinyin": "FeiXi",
		"abbr": "FX",
		"zip": "231200",
		"level": 3
	},
	{
		"code": "340124",
		"parent_code": "340100",
		"name": "庐江县",
		"alias": "庐江",
		"pinyin": "LuJiang",
		"abbr": "LJ",
		"zip": "",
		"level": 3
	},
	{
		"code": "340181",
		"parent_code": "340100",
		"name": "巢湖市",
		"alias": "巢湖",
		"pinyin": "ChaoHu",
		"abbr": "CH",
		"zip": "",
		"level": 3
	},
	{
		"code": "340200",
		"parent_code": "340000",
		"name": "芜湖市",
		"alias": "芜湖",
		"pinyin": "WuHu",
		"abbr": "WH",
		"zip": "241000",
		"level": 2
	},
	{
		"code": "340202",
		"parent_code": "340200",
		"name": "镜湖区",
		"alias": "镜湖区",
		"pinyin": "JingHuQu",
		"abbr": "JHQ",
		"zip": "241000",
		"level": 3
	},
	{
		"code": "340203",
		"parent_code": "340200",
		"name": "弋江区",
		"alias": "弋江区",
		"pinyin": "YiJiangQu",
		"abbr": "YJQ",
		"zip": "241000",
		"level": 3
	},
	{
		"code": "340207",
		"parent_code": "340200",
		"name": "鸠江区",
		"alias": "鸠江区",
		"pinyin": "JiuJiangQu",
		"abbr": "JJQ",
		"zip": "241000",
		"level": 3
	},
	{
		"code": "340208",
		"parent_code": "340200",
		"name": "三山区",
		"alias": "三山区",
		"pinyin": "SanShanQu",
		"abbr": "SSQ",
		"zip": "241000",
		"level": 3
	},
	{
		"code": "340221",
		"parent_code": "340200",
		"name": "芜湖县",
		"alias": "芜湖县",
		"pinyin": "WuHu",
		"abbr": "WH",
		"zip": "241100",
		"level": 3
	},
	{
		"code": "340222",
		"parent_code": "340200",
		"name": "繁昌县",
		"alias": "繁昌",
		"pinyin": "FanChang",
		"abbr": "FC",
		"zip": "241200",
		"level": 3
	},
	{
		"code": "340223",
		"parent_code": "340200",
		"name": "南陵县",
		"alias": "南陵",
		"pinyin": "NanLing",
		"abbr": "NL",
		"zip": "242400",
		"level": 3
	},
	{
		"code": "340225",
		"parent_code": "340200",
		"name": "无为县",
		"alias": "无为",
		"pinyin": "WuWei",
		"abbr": "WW",
		"zip": "",
		"level": 3
	},
	{
		"code": "340300",
		"parent_code": "340000",
		"name": "蚌埠市",
		"alias": "蚌埠",
		"pinyin": "BangBu",
		"abbr": "BB",
		"zip": "233000",
		"level": 2
	},
	{
		"code": "340302",
		"parent_code": "340300",
		"name": "龙子湖区",
		"alias": "龙子湖区",
		"pinyin": "LongZiHuQu",
		"abbr": "LZHQ",
		"zip": "233000",
		"level": 3
	},
	{
		"code": "340303",
		"parent_code": "340300",
		"name": "蚌山区",
		"alias": "蚌山区",
		"pinyin": "BangShanQu",
		"abbr": "BSQ",
		"zip": "233000",
		"level": 3
	},
	{
		"code": "340304",
		"parent_code": "340300",
		"name": "禹会区",
		"alias": "禹会区",
		"pinyin": "YuHuiQu",
		"abbr": "YHQ",
		"zip": "233010",
		"level": 3
	},
	{
		"code": "340311",
		"parent_code": "340300",
		"name": "淮上区",
		"alias": "淮上区",
		"pinyin": "HuaiShangQu",
		"abbr": "HSQ",
		"zip": "233002",
		"level": 3
	},
	{
		"code": "340321",
		"parent_code": "340300",
		"name": "怀远县",
		"alias": "怀远",
		"pinyin": "HuaiYuan",
		"abbr": "HY",
		"zip": "233400",
		"level": 3
	},
	{
		"code": "340322",
		"parent_code": "340300",
		"name": "五河县",
		"alias": "五河",
		"pinyin": "WuHe",
		"abbr": "WH",
		"zip": "233300",
		"level": 3
	},
	{
		"code": "340323",
		"parent_code": "340300",
		"name": "固镇县",
		"alias": "固镇",
		"pinyin": "GuZhen",
		"abbr": "GZ",
		"zip": "233200",
		"level": 3
	},
	{
		"code": "340400",
		"parent_code": "340000",
		"name": "淮南市",
		"alias": "淮南",
		"pinyin": "HuaiNan",
		"abbr": "HN",
		"zip": "232000",
		"level": 2
	},
	{
		"code": "340402",
		"parent_code": "340400",
		"name": "大通区",
		"alias": "大通区",
		"pinyin": "DaTongQu",
		"abbr": "DTQ",
		"zip": "232033",
		"level": 3
	},
	{
		"code": "340403",
		"parent_code": "340400",
		"name": "田家庵区",
		"alias": "田家庵区",
		"pinyin": "TianJiaAnQu",
		"abbr": "TJAQ",
		"zip": "232000",
		"level": 3
	},
	{
		"code": "340404",
		"parent_code": "340400",
		"name": "谢家集区",
		"alias": "谢家集区",
		"pinyin": "XieJiaJiQu",
		"abbr": "XJJQ",
		"zip": "232052",
		"level": 3
	},
	{
		"code": "340405",
		"parent_code": "340400",
		"name": "八公山区",
		"alias": "八公山区",
		"pinyin": "BaGongShanQu",
		"abbr": "BGSQ",
		"zip": "232072",
		"level": 3
	},
	{
		"code": "340406",
		"parent_code": "340400",
		"name": "潘集区",
		"alias": "潘集区",
		"pinyin": "PanJiQu",
		"abbr": "PJQ",
		"zip": "232082",
		"level": 3
	},
	{
		"code": "340421",
		"parent_code": "340400",
		"name": "凤台县",
		"alias": "凤台",
		"pinyin": "FengTai",
		"abbr": "FT",
		"zip": "232100",
		"level": 3
	},
	{
		"code": "340500",
		"parent_code": "340000",
		"name": "马鞍山市",
		"alias": "马鞍山",
		"pinyin": "MaAnShan",
		"abbr": "MAS",
		"zip": "243000",
		"level": 2
	},
	{
		"code": "340503",
		"parent_code": "340500",
		"name": "花山区",
		"alias": "花山区",
		"pinyin": "HuaShanQu",
		"abbr": "HSQ",
		"zip": "243000",
		"level": 3
	},
	{
		"code": "340504",
		"parent_code": "340500",
		"name": "雨山区",
		"alias": "雨山区",
		"pinyin": "YuShanQu",
		"abbr": "YSQ",
		"zip": "243071",
		"level": 3
	},
	{
		"code": "340506",
		"parent_code": "340500",
		"name": "博望区",
		"alias": "博望区",
		"pinyin": "BoWangQu",
		"abbr": "BWQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "340521",
		"parent_code": "340500",
		"name": "当涂县",
		"alias": "当涂",
		"pinyin": "DangTu",
		"abbr": "DT",
		"zip": "243100",
		"level": 3
	},
	{
		"code": "340522",
		"parent_code": "340500",
		"name": "含山县",
		"alias": "含山",
		"pinyin": "HanShan",
		"abbr": "HS",
		"zip": "",
		"level": 3
	},
	{
		"code": "340523",
		"parent_code": "340500",
		"name": "和县",
		"alias": "和县",
		"pinyin": "HeXian",
		"abbr": "HX",
		"zip": "",
		"level": 3
	},
	{
		"code": "340600",
		"parent_code": "340000",
		"name": "淮北市",
		"alias": "淮北",
		"pinyin": "HuaiBei",
		"abbr": "HB",
		"zip": "235000",
		"level": 2
	},
	{
		"code": "340602",
		"parent_code": "340600",
		"name": "杜集区",
		"alias": "杜集区",
		"pinyin": "DuJiQu",
		"abbr": "DJQ",
		"zip": "235047",
		"level": 3
	},
	{
		"code": "340603",
		"parent_code": "340600",
		"name": "相山区",
		"alias": "相山区",
		"pinyin": "XiangShanQu",
		"abbr": "XSQ",
		"zip": "235000",
		"level": 3
	},
	{
		"code": "340604",
		"parent_code": "340600",
		"name": "烈山区",
		"alias": "烈山区",
		"pinyin": "LieShanQu",
		"abbr": "LSQ",
		"zip": "235025",
		"level": 3
	},
	{
		"code": "340621",
		"parent_code": "340600",
		"name": "濉溪县",
		"alias": "濉溪",
		"pinyin": "SuiXi",
		"abbr": "SX",
		"zip": "235100",
		"level": 3
	},
	{
		"code": "340700",
		"parent_code": "340000",
		"name": "铜陵市",
		"alias": "铜陵",
		"pinyin": "TongLing",
		"abbr": "TL",
		"zip": "244000",
		"level": 2
	},
	{
		"code": "340702",
		"parent_code": "340700",
		"name": "铜官山区",
		"alias": "铜官山区",
		"pinyin": "TongGuanShanQu",
		"abbr": "TGSQ",
		"zip": "244000",
		"level": 3
	},
	{
		"code": "340703",
		"parent_code": "340700",
		"name": "狮子山区",
		"alias": "狮子山区",
		"pinyin": "ShiZiShanQu",
		"abbr": "SZSQ",
		"zip": "244031",
		"level": 3
	},
	{
		"code": "340711",
		"parent_code": "340700",
		"name": "郊区",
		"alias": "郊区",
		"pinyin": "JiaoQu",
		"abbr": "JQ",
		"zip": "244000",
		"level": 3
	},
	{
		"code": "340721",
		"parent_code": "340700",
		"name": "铜陵县",
		"alias": "铜陵",
		"pinyin": "TongLing",
		"abbr": "TL",
		"zip": "244100",
		"level": 3
	},
	{
		"code": "340800",
		"parent_code": "340000",
		"name": "安庆市",
		"alias": "安庆",
		"pinyin": "AnQing",
		"abbr": "AQ",
		"zip": "246000",
		"level": 2
	},
	{
		"code": "340802",
		"parent_code": "340800",
		"name": "迎江区",
		"alias": "迎江区",
		"pinyin": "YingJiangQu",
		"abbr": "YJQ",
		"zip": "246003",
		"level": 3
	},
	{
		"code": "340803",
		"parent_code": "340800",
		"name": "大观区",
		"alias": "大观区",
		"pinyin": "DaGuanQu",
		"abbr": "DGQ",
		"zip": "246004",
		"level": 3
	},
	{
		"code": "340811",
		"parent_code": "340800",
		"name": "宜秀区",
		"alias": "宜秀区",
		"pinyin": "YiXiuQu",
		"abbr": "YXQ",
		"zip": "246003",
		"level": 3
	},
	{
		"code": "340822",
		"parent_code": "340800",
		"name": "怀宁县",
		"alias": "怀宁",
		"pinyin": "HuaiNing",
		"abbr": "HN",
		"zip": "246100",
		"level": 3
	},
	{
		"code": "340823",
		"parent_code": "340800",
		"name": "枞阳县",
		"alias": "枞阳",
		"pinyin": "CongYang",
		"abbr": "CY",
		"zip": "246700",
		"level": 3
	},
	{
		"code": "340824",
		"parent_code": "340800",
		"name": "潜山县",
		"alias": "潜山",
		"pinyin": "QianShan",
		"abbr": "QS",
		"zip": "246300",
		"level": 3
	},
	{
		"code": "340825",
		"parent_code": "340800",
		"name": "太湖县",
		"alias": "太湖",
		"pinyin": "TaiHu",
		"abbr": "TH",
		"zip": "246400",
		"level": 3
	},
	{
		"code": "340826",
		"parent_code": "340800",
		"name": "宿松县",
		"alias": "宿松",
		"pinyin": "SuSong",
		"abbr": "SS",
		"zip": "246500",
		"level": 3
	},
	{
		"code": "340827",
		"parent_code": "340800",
		"name": "望江县",
		"alias": "望江",
		"pinyin": "WangJiang",
		"abbr": "WJ",
		"zip": "246200",
		"level": 3
	},
	{
		"code": "340828",
		"parent_code": "340800",
		"name": "岳西县",
		"alias": "岳西",
		"pinyin": "YueXi",
		"abbr": "YX",
		"zip": "246600",
		"level": 3
	},
	{
		"code": "340881",
		"parent_code": "340800",
		"name": "桐城市",
		"alias": "桐城",
		"pinyin": "TongCheng",
		"abbr": "TC",
		"zip": "231400",
		"level": 3
	},
	{
		"code": "341000",
		"parent_code": "340000",
		"name": "黄山市",
		"alias": "黄山",
		"pinyin": "HuangShan",
		"abbr": "HS",
		"zip": "245000",
		"level": 2
	},
	{
		"code": "341002",
		"parent_code": "341000",
		"name": "屯溪区",
		"alias": "屯溪区",
		"pinyin": "TunXiQu",
		"abbr": "TXQ",
		"zip": "245000",
		"level": 3
	},
	{
		"code": "341003",
		"parent_code": "341000",
		"name": "黄山区",
		"alias": "黄山区",
		"pinyin": "HuangShanQu",
		"abbr": "HSQ",
		"zip": "242700",
		"level": 3
	},
	{
		"code": "341004",
		"parent_code": "341000",
		"name": "徽州区",
		"alias": "徽州区",
		"pinyin": "HuiZhouQu",
		"abbr": "HZQ",
		"zip": "245061",
		"level": 3
	},
	{
		"code": "341021",
		"parent_code": "341000",
		"name": "歙县",
		"alias": "歙县",
		"pinyin": "SheXian",
		"abbr": "SX",
		"zip": "245200",
		"level": 3
	},
	{
		"code": "341022",
		"parent_code": "341000",
		"name": "休宁县",
		"alias": "休宁",
		"pinyin": "XiuNing",
		"abbr": "XN",
		"zip": "245400",
		"level": 3
	},
	{
		"code": "341023",
		"parent_code": "341000",
		"name": "黟县",
		"alias": "黟县",
		"pinyin": "YiXian",
		"abbr": "YX",
		"zip": "245500",
		"level": 3
	},
	{
		"code": "341024",
		"parent_code": "341000",
		"name": "祁门县",
		"alias": "祁门",
		"pinyin": "QiMen",
		"abbr": "QM",
		"zip": "245600",
		"level": 3
	},
	{
		"code": "341100",
		"parent_code": "340000",
		"name": "滁州市",
		"alias": "滁州",
		"pinyin": "ChuZhou",
		"abbr": "CZ",
		"zip": "239000",
		"level": 2
	},
	{
		"code": "341102",
		"parent_code": "341100",
		"name": "琅琊区",
		"alias": "琅琊区",
		"pinyin": "LangYaQu",
		"abbr": "LYQ",
		"zip": "239000",
		"level": 3
	},
	{
		"code": "341103",
		"parent_code": "341100",
		"name": "南谯区",
		"alias": "南谯区",
		"pinyin": "NanQiaoQu",
		"abbr": "NQQ",
		"zip": "239000",
		"level": 3
	},
	{
		"code": "341122",
		"parent_code": "341100",
		"name": "来安县",
		"alias": "来安",
		"pinyin": "LaiAn",
		"abbr": "LA",
		"zip": "239200",
		"level": 3
	},
	{
		"code": "341124",
		"parent_code": "341100",
		"name": "全椒县",
		"alias": "全椒",
		"pinyin": "QuanJiao",
		"abbr": "QJ",
		"zip": "239500",
		"level": 3
	},
	{
		"code": "341125",
		"parent_code": "341100",
		"name": "定远县",
		"alias": "定远",
		"pinyin": "DingYuan",
		"abbr": "DY",
		"zip": "233200",
		"level": 3
	},
	{
		"code": "341126",
		"parent_code": "341100",
		"name": "凤阳县",
		"alias": "凤阳",
		"pinyin": "FengYang",
		"abbr": "FY",
		"zip": "233100",
		"level": 3
	},
	{
		"code": "341181",
		"parent_code": "341100",
		"name": "天长市",
		"alias": "天长",
		"pinyin": "TianZhang",
		"abbr": "TZ",
		"zip": "239300",
		"level": 3
	},
	{
		"code": "341182",
		"parent_code": "341100",
		"name": "明光市",
		"alias": "明光",
		"pinyin": "MingGuang",
		"abbr": "MG",
		"zip": "239400",
		"level": 3
	},
	{
		"code": "341200",
		"parent_code": "340000",
		"name": "阜阳市",
		"alias": "阜阳",
		"pinyin": "FuYang",
		"abbr": "FY",
		"zip": "236000",
		"level": 2
	},
	{
		"code": "341202",
		"parent_code": "341200",
		"name": "颍州区",
		"alias": "颍州区",
		"pinyin": "YingZhouQu",
		"abbr": "YZQ",
		"zip": "236001",
		"level": 3
	},
	{
		"code": "341203",
		"parent_code": "341200",
		"name": "颍东区",
		"alias": "颍东区",
		"pinyin": "YingDongQu",
		"abbr": "YDQ",
		"zip": "236058",
		"level": 3
	},
	{
		"code": "341204",
		"parent_code": "341200",
		"name": "颍泉区",
		"alias": "颍泉区",
		"pinyin": "YingQuanQu",
		"abbr": "YQQ",
		"zip": "236045",
		"level": 3
	},
	{
		"code": "341221",
		"parent_code": "341200",
		"name": "临泉县",
		"alias": "临泉",
		"pinyin": "LinQuan",
		"abbr": "LQ",
		"zip": "236400",
		"level": 3
	},
	{
		"code": "341222",
		"parent_code": "341200",
		"name": "太和县",
		"alias": "太和",
		"pinyin": "TaiHe",
		"abbr": "TH",
		"zip": "236600",
		"level": 3
	},
	{
		"code": "341225",
		"parent_code": "341200",
		"name": "阜南县",
		"alias": "阜南",
		"pinyin": "FuNan",
		"abbr": "FN",
		"zip": "236300",
		"level": 3
	},
	{
		"code": "341226",
		"parent_code": "341200",
		"name": "颍上县",
		"alias": "颍上",
		"pinyin": "YingShang",
		"abbr": "YS",
		"zip": "236200",
		"level": 3
	},
	{
		"code": "341282",
		"parent_code": "341200",
		"name": "界首市",
		"alias": "界首",
		"pinyin": "JieShou",
		"abbr": "JS",
		"zip": "236500",
		"level": 3
	},
	{
		"code": "341300",
		"parent_code": "341300",
		"name": "宿州市",
		"alias": "宿州",
		"pinyin": "SuZhou",
		"abbr": "SZ",
		"zip": "234000",
		"level": 3
	},
	{
		"code": "341301",
		"parent_code": "341300",
		"name": "市辖区",
		"alias": "市辖区",
		"pinyin": "ShiXiaQu",
		"abbr": "SXQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "341302",
		"parent_code": "341300",
		"name": "埇桥区",
		"alias": "埇桥区",
		"pinyin": "YongQiaoQu",
		"abbr": "YQQ",
		"zip": "234000",
		"level": 3
	},
	{
		"code": "341321",
		"parent_code": "341300",
		"name": "砀山县",
		"alias": "砀山",
		"pinyin": "DangShan",
		"abbr": "DS",
		"zip": "235300",
		"level": 3
	},
	{
		"code": "341322",
		"parent_code": "341300",
		"name": "萧县",
		"alias": "萧县",
		"pinyin": "XiaoXian",
		"abbr": "XX",
		"zip": "235200",
		"level": 3
	},
	{
		"code": "341323",
		"parent_code": "341300",
		"name": "灵璧县",
		"alias": "灵璧",
		"pinyin": "LingBi",
		"abbr": "LB",
		"zip": "234200",
		"level": 3
	},
	{
		"code": "341324",
		"parent_code": "341300",
		"name": "泗县",
		"alias": "泗县",
		"pinyin": "SiXian",
		"abbr": "SX",
		"zip": "234300",
		"level": 3
	},
	{
		"code": "341500",
		"parent_code": "340000",
		"name": "六安市",
		"alias": "六安",
		"pinyin": "LiuAn",
		"abbr": "LA",
		"zip": "237000",
		"level": 2
	},
	{
		"code": "341502",
		"parent_code": "341500",
		"name": "金安区",
		"alias": "金安区",
		"pinyin": "JinAnQu",
		"abbr": "JAQ",
		"zip": "237005",
		"level": 3
	},
	{
		"code": "341503",
		"parent_code": "341500",
		"name": "裕安区",
		"alias": "裕安区",
		"pinyin": "YuAnQu",
		"abbr": "YAQ",
		"zip": "237010",
		"level": 3
	},
	{
		"code": "341521",
		"parent_code": "341500",
		"name": "寿县",
		"alias": "寿县",
		"pinyin": "ShouXian",
		"abbr": "SX",
		"zip": "232200",
		"level": 3
	},
	{
		"code": "341522",
		"parent_code": "341500",
		"name": "霍邱县",
		"alias": "霍邱",
		"pinyin": "HuoQiu",
		"abbr": "HQ",
		"zip": "237400",
		"level": 3
	},
	{
		"code": "341523",
		"parent_code": "341500",
		"name": "舒城县",
		"alias": "舒城",
		"pinyin": "ShuCheng",
		"abbr": "SC",
		"zip": "231300",
		"level": 3
	},
	{
		"code": "341524",
		"parent_code": "341500",
		"name": "金寨县",
		"alias": "金寨",
		"pinyin": "JinZhai",
		"abbr": "JZ",
		"zip": "237300",
		"level": 3
	},
	{
		"code": "341525",
		"parent_code": "341500",
		"name": "霍山县",
		"alias": "霍山",
		"pinyin": "HuoShan",
		"abbr": "HS",
		"zip": "237200",
		"level": 3
	},
	{
		"code": "341600",
		"parent_code": "340000",
		"name": "亳州市",
		"alias": "亳州",
		"pinyin": "BoZhou",
		"abbr": "BZ",
		"zip": "236800",
		"level": 2
	},
	{
		"code": "341602",
		"parent_code": "341600",
		"name": "谯城区",
		"alias": "谯城区",
		"pinyin": "QiaoChengQu",
		"abbr": "QCQ",
		"zip": "236800",
		"level": 3
	},
	{
		"code": "341621",
		"parent_code": "341600",
		"name": "涡阳县",
		"alias": "涡阳",
		"pinyin": "WoYang",
		"abbr": "WY",
		"zip": "233600",
		"level": 3
	},
	{
		"code": "341622",
		"parent_code": "341600",
		"name": "蒙城县",
		"alias": "蒙城",
		"pinyin": "MengCheng",
		"abbr": "MC",
		"zip": "233500",
		"level": 3
	},
	{
		"code": "341623",
		"parent_code": "341600",
		"name": "利辛县",
		"alias": "利辛",
		"pinyin": "LiXin",
		"abbr": "LX",
		"zip": "236700",
		"level": 3
	},
	{
		"code": "341700",
		"parent_code": "340000",
		"name": "池州市",
		"alias": "池州",
		"pinyin": "ChiZhou",
		"abbr": "CZ",
		"zip": "247000",
		"level": 2
	},
	{
		"code": "341702",
		"parent_code": "341700",
		"name": "贵池区",
		"alias": "贵池区",
		"pinyin": "GuiChiQu",
		"abbr": "GCQ",
		"zip": "247100",
		"level": 3
	},
	{
		"code": "341721",
		"parent_code": "341700",
		"name": "东至县",
		"alias": "东至",
		"pinyin": "DongZhi",
		"abbr": "DZ",
		"zip": "247200",
		"level": 3
	},
	{
		"code": "341722",
		"parent_code": "341700",
		"name": "石台县",
		"alias": "石台",
		"pinyin": "ShiTai",
		"abbr": "ST",
		"zip": "245100",
		"level": 3
	},
	{
		"code": "341723",
		"parent_code": "341700",
		"name": "青阳县",
		"alias": "青阳",
		"pinyin": "QingYang",
		"abbr": "QY",
		"zip": "242800",
		"level": 3
	},
	{
		"code": "341800",
		"parent_code": "340000",
		"name": "宣城市",
		"alias": "宣城",
		"pinyin": "XuanCheng",
		"abbr": "XC",
		"zip": "242000",
		"level": 2
	},
	{
		"code": "341802",
		"parent_code": "341800",
		"name": "宣州区",
		"alias": "宣州区",
		"pinyin": "XuanZhouQu",
		"abbr": "XZQ",
		"zip": "242000",
		"level": 3
	},
	{
		"code": "341821",
		"parent_code": "341800",
		"name": "郎溪县",
		"alias": "郎溪",
		"pinyin": "LangXi",
		"abbr": "LX",
		"zip": "242100",
		"level": 3
	},
	{
		"code": "341822",
		"parent_code": "341800",
		"name": "广德县",
		"alias": "广德",
		"pinyin": "GuangDe",
		"abbr": "GD",
		"zip": "242200",
		"level": 3
	},
	{
		"code": "341823",
		"parent_code": "341800",
		"name": "泾县",
		"alias": "泾县",
		"pinyin": "JingXian",
		"abbr": "JX",
		"zip": "242500",
		"level": 3
	},
	{
		"code": "341824",
		"parent_code": "341800",
		"name": "绩溪县",
		"alias": "绩溪",
		"pinyin": "JiXi",
		"abbr": "JX",
		"zip": "245300",
		"level": 3
	},
	{
		"code": "341825",
		"parent_code": "341800",
		"name": "旌德县",
		"alias": "旌德",
		"pinyin": "JingDe",
		"abbr": "JD",
		"zip": "242600",
		"level": 3
	},
	{
		"code": "341881",
		"parent_code": "341800",
		"name": "宁国市",
		"alias": "宁国",
		"pinyin": "NingGuo",
		"abbr": "NG",
		"zip": "242300",
		"level": 3
	},
	{
		"code": "350000",
		"parent_code": null,
		"name": "福建省",
		"alias": "福建",
		"pinyin": "FuJian",
		"abbr": "FJ",
		"zip": "350000",
		"level": 1
	},
	{
		"code": "350100",
		"parent_code": "350000",
		"name": "福州市",
		"alias": "福州",
		"pinyin": "FuZhou",
		"abbr": "FZ",
		"zip": "350000",
		"level": 2
	},
	{
		"code": "350102",
		"parent_code": "350100",
		"name": "鼓楼区",
		"alias": "鼓楼区",
		"pinyin": "GuLouQu",
		"abbr": "GLQ",
		"zip": "350001",
		"level": 3
	},
	{
		"code": "350103",
		"parent_code": "350100",
		"name": "台江区",
		"alias": "台江区",
		"pinyin": "TaiJiangQu",
		"abbr": "TJQ",
		"zip": "350004",
		"level": 3
	},
	{
		"code": "350104",
		"parent_code": "350100",
		"name": "仓山区",
		"alias": "仓山区",
		"pinyin": "CangShanQu",
		"abbr": "CSQ",
		"zip": "350007",
		"level": 3
	},
	{
		"code": "350105",
		"parent_code": "350100",
		"name": "马尾区",
		"alias": "马尾区",
		"pinyin": "MaWeiQu",
		"abbr": "MWQ",
		"zip": "350015",
		"level": 3
	},
	{
		"code": "350111",
		"parent_code": "350100",
		"name": "晋安区",
		"alias": "晋安区",
		"pinyin": "JinAnQu",
		"abbr": "JAQ",
		"zip": "350011",
		"level": 3
	},
	{
		"code": "350121",
		"parent_code": "350100",
		"name": "闽侯县",
		"alias": "闽侯",
		"pinyin": "MinHou",
		"abbr": "MH",
		"zip": "350100",
		"level": 3
	},
	{
		"code": "350122",
		"parent_code": "350100",
		"name": "连江县",
		"alias": "连江",
		"pinyin": "LianJiang",
		"abbr": "LJ",
		"zip": "350500",
		"level": 3
	},
	{
		"code": "350123",
		"parent_code": "350100",
		"name": "罗源县",
		"alias": "罗源",
		"pinyin": "LuoYuan",
		"abbr": "LY",
		"zip": "350600",
		"level": 3
	},
	{
		"code": "350124",
		"parent_code": "350100",
		"name": "闽清县",
		"alias": "闽清",
		"pinyin": "MinQing",
		"abbr": "MQ",
		"zip": "350800",
		"level": 3
	},
	{
		"code": "350125",
		"parent_code": "350100",
		"name": "永泰县",
		"alias": "永泰",
		"pinyin": "YongTai",
		"abbr": "YT",
		"zip": "350700",
		"level": 3
	},
	{
		"code": "350128",
		"parent_code": "350100",
		"name": "平潭县",
		"alias": "平潭",
		"pinyin": "PingTan",
		"abbr": "PT",
		"zip": "350400",
		"level": 3
	},
	{
		"code": "350181",
		"parent_code": "350100",
		"name": "福清市",
		"alias": "福清",
		"pinyin": "FuQing",
		"abbr": "FQ",
		"zip": "350300",
		"level": 3
	},
	{
		"code": "350182",
		"parent_code": "350100",
		"name": "长乐市",
		"alias": "长乐",
		"pinyin": "ZhangLe",
		"abbr": "ZL",
		"zip": "350200",
		"level": 3
	},
	{
		"code": "350200",
		"parent_code": "350000",
		"name": "厦门市",
		"alias": "厦门",
		"pinyin": "ShaMen",
		"abbr": "SM",
		"zip": "361000",
		"level": 2
	},
	{
		"code": "350203",
		"parent_code": "350200",
		"name": "思明区",
		"alias": "思明区",
		"pinyin": "SiMingQu",
		"abbr": "SMQ",
		"zip": "361001",
		"level": 3
	},
	{
		"code": "350205",
		"parent_code": "350200",
		"name": "海沧区",
		"alias": "海沧区",
		"pinyin": "HaiCangQu",
		"abbr": "HCQ",
		"zip": "361026",
		"level": 3
	},
	{
		"code": "350206",
		"parent_code": "350200",
		"name": "湖里区",
		"alias": "湖里区",
		"pinyin": "HuLiQu",
		"abbr": "HLQ",
		"zip": "361006",
		"level": 3
	},
	{
		"code": "350211",
		"parent_code": "350200",
		"name": "集美区",
		"alias": "集美区",
		"pinyin": "JiMeiQu",
		"abbr": "JMQ",
		"zip": "361021",
		"level": 3
	},
	{
		"code": "350212",
		"parent_code": "350200",
		"name": "同安区",
		"alias": "同安区",
		"pinyin": "TongAnQu",
		"abbr": "TAQ",
		"zip": "361100",
		"level": 3
	},
	{
		"code": "350213",
		"parent_code": "350200",
		"name": "翔安区",
		"alias": "翔安区",
		"pinyin": "XiangAnQu",
		"abbr": "XAQ",
		"zip": "361101",
		"level": 3
	},
	{
		"code": "350300",
		"parent_code": "350000",
		"name": "莆田市",
		"alias": "莆田",
		"pinyin": "PuTian",
		"abbr": "PT",
		"zip": "351100",
		"level": 2
	},
	{
		"code": "350302",
		"parent_code": "350300",
		"name": "城厢区",
		"alias": "城厢区",
		"pinyin": "ChengXiangQu",
		"abbr": "CXQ",
		"zip": "351100",
		"level": 3
	},
	{
		"code": "350303",
		"parent_code": "350300",
		"name": "涵江区",
		"alias": "涵江区",
		"pinyin": "HanJiangQu",
		"abbr": "HJQ",
		"zip": "351111",
		"level": 3
	},
	{
		"code": "350304",
		"parent_code": "350300",
		"name": "荔城区",
		"alias": "荔城区",
		"pinyin": "LiChengQu",
		"abbr": "LCQ",
		"zip": "351100",
		"level": 3
	},
	{
		"code": "350305",
		"parent_code": "350300",
		"name": "秀屿区",
		"alias": "秀屿区",
		"pinyin": "XiuYuQu",
		"abbr": "XYQ",
		"zip": "351152",
		"level": 3
	},
	{
		"code": "350322",
		"parent_code": "350300",
		"name": "仙游县",
		"alias": "仙游",
		"pinyin": "XianYou",
		"abbr": "XY",
		"zip": "351200",
		"level": 3
	},
	{
		"code": "350400",
		"parent_code": "350000",
		"name": "三明市",
		"alias": "三明",
		"pinyin": "SanMing",
		"abbr": "SM",
		"zip": "365000",
		"level": 2
	},
	{
		"code": "350402",
		"parent_code": "350400",
		"name": "梅列区",
		"alias": "梅列区",
		"pinyin": "MeiLieQu",
		"abbr": "MLQ",
		"zip": "365000",
		"level": 3
	},
	{
		"code": "350403",
		"parent_code": "350400",
		"name": "三元区",
		"alias": "三元区",
		"pinyin": "SanYuanQu",
		"abbr": "SYQ",
		"zip": "365001",
		"level": 3
	},
	{
		"code": "350421",
		"parent_code": "350400",
		"name": "明溪县",
		"alias": "明溪",
		"pinyin": "MingXi",
		"abbr": "MX",
		"zip": "365200",
		"level": 3
	},
	{
		"code": "350423",
		"parent_code": "350400",
		"name": "清流县",
		"alias": "清流",
		"pinyin": "QingLiu",
		"abbr": "QL",
		"zip": "365300",
		"level": 3
	},
	{
		"code": "350424",
		"parent_code": "350400",
		"name": "宁化县",
		"alias": "宁化",
		"pinyin": "NingHua",
		"abbr": "NH",
		"zip": "365400",
		"level": 3
	},
	{
		"code": "350425",
		"parent_code": "350400",
		"name": "大田县",
		"alias": "大田",
		"pinyin": "DaTian",
		"abbr": "DT",
		"zip": "366100",
		"level": 3
	},
	{
		"code": "350426",
		"parent_code": "350400",
		"name": "尤溪县",
		"alias": "尤溪",
		"pinyin": "YouXi",
		"abbr": "YX",
		"zip": "365100",
		"level": 3
	},
	{
		"code": "350427",
		"parent_code": "350400",
		"name": "沙县",
		"alias": "沙县",
		"pinyin": "ShaXian",
		"abbr": "SX",
		"zip": "365500",
		"level": 3
	},
	{
		"code": "350428",
		"parent_code": "350400",
		"name": "将乐县",
		"alias": "将乐",
		"pinyin": "JiangLe",
		"abbr": "JL",
		"zip": "353300",
		"level": 3
	},
	{
		"code": "350429",
		"parent_code": "350400",
		"name": "泰宁县",
		"alias": "泰宁",
		"pinyin": "TaiNing",
		"abbr": "TN",
		"zip": "354400",
		"level": 3
	},
	{
		"code": "350430",
		"parent_code": "350400",
		"name": "建宁县",
		"alias": "建宁",
		"pinyin": "JianNing",
		"abbr": "JN",
		"zip": "354500",
		"level": 3
	},
	{
		"code": "350481",
		"parent_code": "350400",
		"name": "永安市",
		"alias": "永安",
		"pinyin": "YongAn",
		"abbr": "YA",
		"zip": "366000",
		"level": 3
	},
	{
		"code": "350500",
		"parent_code": "350000",
		"name": "泉州市",
		"alias": "泉州",
		"pinyin": "QuanZhou",
		"abbr": "QZ",
		"zip": "362000",
		"level": 2
	},
	{
		"code": "350502",
		"parent_code": "350500",
		"name": "鲤城区",
		"alias": "鲤城区",
		"pinyin": "LiChengQu",
		"abbr": "LCQ",
		"zip": "362000",
		"level": 3
	},
	{
		"code": "350503",
		"parent_code": "350500",
		"name": "丰泽区",
		"alias": "丰泽区",
		"pinyin": "FengZeQu",
		"abbr": "FZQ",
		"zip": "362000",
		"level": 3
	},
	{
		"code": "350504",
		"parent_code": "350500",
		"name": "洛江区",
		"alias": "洛江区",
		"pinyin": "LuoJiangQu",
		"abbr": "LJQ",
		"zip": "362011",
		"level": 3
	},
	{
		"code": "350505",
		"parent_code": "350500",
		"name": "泉港区",
		"alias": "泉港区",
		"pinyin": "QuanGangQu",
		"abbr": "QGQ",
		"zip": "362801",
		"level": 3
	},
	{
		"code": "350521",
		"parent_code": "350500",
		"name": "惠安县",
		"alias": "惠安",
		"pinyin": "HuiAn",
		"abbr": "HA",
		"zip": "362100",
		"level": 3
	},
	{
		"code": "350524",
		"parent_code": "350500",
		"name": "安溪县",
		"alias": "安溪",
		"pinyin": "AnXi",
		"abbr": "AX",
		"zip": "362400",
		"level": 3
	},
	{
		"code": "350525",
		"parent_code": "350500",
		"name": "永春县",
		"alias": "永春",
		"pinyin": "YongChun",
		"abbr": "YC",
		"zip": "362600",
		"level": 3
	},
	{
		"code": "350526",
		"parent_code": "350500",
		"name": "德化县",
		"alias": "德化",
		"pinyin": "DeHua",
		"abbr": "DH",
		"zip": "362500",
		"level": 3
	},
	{
		"code": "350527",
		"parent_code": "350500",
		"name": "金门县",
		"alias": "金门",
		"pinyin": "JinMen",
		"abbr": "JM",
		"zip": "362000",
		"level": 3
	},
	{
		"code": "350581",
		"parent_code": "350500",
		"name": "石狮市",
		"alias": "石狮",
		"pinyin": "ShiShi",
		"abbr": "SS",
		"zip": "362700",
		"level": 3
	},
	{
		"code": "350582",
		"parent_code": "350500",
		"name": "晋江市",
		"alias": "晋江",
		"pinyin": "JinJiang",
		"abbr": "JJ",
		"zip": "362200",
		"level": 3
	},
	{
		"code": "350583",
		"parent_code": "350500",
		"name": "南安市",
		"alias": "南安",
		"pinyin": "NanAn",
		"abbr": "NA",
		"zip": "362300",
		"level": 3
	},
	{
		"code": "350600",
		"parent_code": "350000",
		"name": "漳州市",
		"alias": "漳州",
		"pinyin": "ZhangZhou",
		"abbr": "ZZ",
		"zip": "363000",
		"level": 2
	},
	{
		"code": "350602",
		"parent_code": "350600",
		"name": "芗城区",
		"alias": "芗城区",
		"pinyin": "XiangChengQu",
		"abbr": "XCQ",
		"zip": "363000",
		"level": 3
	},
	{
		"code": "350603",
		"parent_code": "350600",
		"name": "龙文区",
		"alias": "龙文区",
		"pinyin": "LongWenQu",
		"abbr": "LWQ",
		"zip": "363005",
		"level": 3
	},
	{
		"code": "350622",
		"parent_code": "350600",
		"name": "云霄县",
		"alias": "云霄",
		"pinyin": "YunXiao",
		"abbr": "YX",
		"zip": "363300",
		"level": 3
	},
	{
		"code": "350623",
		"parent_code": "350600",
		"name": "漳浦县",
		"alias": "漳浦",
		"pinyin": "ZhangPu",
		"abbr": "ZP",
		"zip": "363200",
		"level": 3
	},
	{
		"code": "350624",
		"parent_code": "350600",
		"name": "诏安县",
		"alias": "诏安",
		"pinyin": "ZhaoAn",
		"abbr": "ZA",
		"zip": "363500",
		"level": 3
	},
	{
		"code": "350625",
		"parent_code": "350600",
		"name": "长泰县",
		"alias": "长泰",
		"pinyin": "ZhangTai",
		"abbr": "ZT",
		"zip": "363900",
		"level": 3
	},
	{
		"code": "350626",
		"parent_code": "350600",
		"name": "东山县",
		"alias": "东山",
		"pinyin": "DongShan",
		"abbr": "DS",
		"zip": "363400",
		"level": 3
	},
	{
		"code": "350627",
		"parent_code": "350600",
		"name": "南靖县",
		"alias": "南靖",
		"pinyin": "NanJing",
		"abbr": "NJ",
		"zip": "363600",
		"level": 3
	},
	{
		"code": "350628",
		"parent_code": "350600",
		"name": "平和县",
		"alias": "平和",
		"pinyin": "PingHe",
		"abbr": "PH",
		"zip": "363700",
		"level": 3
	},
	{
		"code": "350629",
		"parent_code": "350600",
		"name": "华安县",
		"alias": "华安",
		"pinyin": "HuaAn",
		"abbr": "HA",
		"zip": "363800",
		"level": 3
	},
	{
		"code": "350681",
		"parent_code": "350600",
		"name": "龙海市",
		"alias": "龙海",
		"pinyin": "LongHai",
		"abbr": "LH",
		"zip": "363100",
		"level": 3
	},
	{
		"code": "350700",
		"parent_code": "350000",
		"name": "南平市",
		"alias": "南平",
		"pinyin": "NanPing",
		"abbr": "NP",
		"zip": "353000",
		"level": 2
	},
	{
		"code": "350702",
		"parent_code": "350700",
		"name": "延平区",
		"alias": "延平区",
		"pinyin": "YanPingQu",
		"abbr": "YPQ",
		"zip": "353000",
		"level": 3
	},
	{
		"code": "350721",
		"parent_code": "350700",
		"name": "顺昌县",
		"alias": "顺昌",
		"pinyin": "ShunChang",
		"abbr": "SC",
		"zip": "353200",
		"level": 3
	},
	{
		"code": "350722",
		"parent_code": "350700",
		"name": "浦城县",
		"alias": "浦城",
		"pinyin": "PuCheng",
		"abbr": "PC",
		"zip": "353400",
		"level": 3
	},
	{
		"code": "350723",
		"parent_code": "350700",
		"name": "光泽县",
		"alias": "光泽",
		"pinyin": "GuangZe",
		"abbr": "GZ",
		"zip": "354100",
		"level": 3
	},
	{
		"code": "350724",
		"parent_code": "350700",
		"name": "松溪县",
		"alias": "松溪",
		"pinyin": "SongXi",
		"abbr": "SX",
		"zip": "353500",
		"level": 3
	},
	{
		"code": "350725",
		"parent_code": "350700",
		"name": "政和县",
		"alias": "政和",
		"pinyin": "ZhengHe",
		"abbr": "ZH",
		"zip": "353600",
		"level": 3
	},
	{
		"code": "350781",
		"parent_code": "350700",
		"name": "邵武市",
		"alias": "邵武",
		"pinyin": "ShaoWu",
		"abbr": "SW",
		"zip": "354000",
		"level": 3
	},
	{
		"code": "350782",
		"parent_code": "350700",
		"name": "武夷山市",
		"alias": "武夷山",
		"pinyin": "WuYiShan",
		"abbr": "WYS",
		"zip": "354300",
		"level": 3
	},
	{
		"code": "350783",
		"parent_code": "350700",
		"name": "建瓯市",
		"alias": "建瓯",
		"pinyin": "JianOu",
		"abbr": "JO",
		"zip": "353100",
		"level": 3
	},
	{
		"code": "350784",
		"parent_code": "350700",
		"name": "建阳市",
		"alias": "建阳",
		"pinyin": "JianYang",
		"abbr": "JY",
		"zip": "354200",
		"level": 3
	},
	{
		"code": "350800",
		"parent_code": "350000",
		"name": "龙岩市",
		"alias": "龙岩",
		"pinyin": "LongYan",
		"abbr": "LY",
		"zip": "364000",
		"level": 2
	},
	{
		"code": "350802",
		"parent_code": "350800",
		"name": "新罗区",
		"alias": "新罗区",
		"pinyin": "XinLuoQu",
		"abbr": "XLQ",
		"zip": "364000",
		"level": 3
	},
	{
		"code": "350821",
		"parent_code": "350800",
		"name": "长汀县",
		"alias": "长汀",
		"pinyin": "ZhangTing",
		"abbr": "ZT",
		"zip": "366300",
		"level": 3
	},
	{
		"code": "350822",
		"parent_code": "350800",
		"name": "永定县",
		"alias": "永定",
		"pinyin": "YongDing",
		"abbr": "YD",
		"zip": "364100",
		"level": 3
	},
	{
		"code": "350823",
		"parent_code": "350800",
		"name": "上杭县",
		"alias": "上杭",
		"pinyin": "ShangHang",
		"abbr": "SH",
		"zip": "364200",
		"level": 3
	},
	{
		"code": "350824",
		"parent_code": "350800",
		"name": "武平县",
		"alias": "武平",
		"pinyin": "WuPing",
		"abbr": "WP",
		"zip": "364300",
		"level": 3
	},
	{
		"code": "350825",
		"parent_code": "350800",
		"name": "连城县",
		"alias": "连城",
		"pinyin": "LianCheng",
		"abbr": "LC",
		"zip": "366200",
		"level": 3
	},
	{
		"code": "350881",
		"parent_code": "350800",
		"name": "漳平市",
		"alias": "漳平",
		"pinyin": "ZhangPing",
		"abbr": "ZP",
		"zip": "364400",
		"level": 3
	},
	{
		"code": "350900",
		"parent_code": "350000",
		"name": "宁德市",
		"alias": "宁德",
		"pinyin": "NingDe",
		"abbr": "ND",
		"zip": "352100",
		"level": 2
	},
	{
		"code": "350902",
		"parent_code": "350900",
		"name": "蕉城区",
		"alias": "蕉城区",
		"pinyin": "JiaoChengQu",
		"abbr": "JCQ",
		"zip": "352100",
		"level": 3
	},
	{
		"code": "350921",
		"parent_code": "350900",
		"name": "霞浦县",
		"alias": "霞浦",
		"pinyin": "XiaPu",
		"abbr": "XP",
		"zip": "355100",
		"level": 3
	},
	{
		"code": "350922",
		"parent_code": "350900",
		"name": "古田县",
		"alias": "古田",
		"pinyin": "GuTian",
		"abbr": "GT",
		"zip": "352200",
		"level": 3
	},
	{
		"code": "350923",
		"parent_code": "350900",
		"name": "屏南县",
		"alias": "屏南",
		"pinyin": "PingNan",
		"abbr": "PN",
		"zip": "352300",
		"level": 3
	},
	{
		"code": "350924",
		"parent_code": "350900",
		"name": "寿宁县",
		"alias": "寿宁",
		"pinyin": "ShouNing",
		"abbr": "SN",
		"zip": "355500",
		"level": 3
	},
	{
		"code": "350925",
		"parent_code": "350900",
		"name": "周宁县",
		"alias": "周宁",
		"pinyin": "ZhouNing",
		"abbr": "ZN",
		"zip": "355400",
		"level": 3
	},
	{
		"code": "350926",
		"parent_code": "350900",
		"name": "柘荣县",
		"alias": "柘荣",
		"pinyin": "ZheRong",
		"abbr": "ZR",
		"zip": "355300",
		"level": 3
	},
	{
		"code": "350981",
		"parent_code": "350900",
		"name": "福安市",
		"alias": "福安",
		"pinyin": "FuAn",
		"abbr": "FA",
		"zip": "355000",
		"level": 3
	},
	{
		"code": "350982",
		"parent_code": "350900",
		"name": "福鼎市",
		"alias": "福鼎",
		"pinyin": "FuDing",
		"abbr": "FD",
		"zip": "355200",
		"level": 3
	},
	{
		"code": "360000",
		"parent_code": null,
		"name": "江西省",
		"alias": "江西",
		"pinyin": "JiangXi",
		"abbr": "JX",
		"zip": "330000",
		"level": 1
	},
	{
		"code": "360100",
		"parent_code": "360000",
		"name": "南昌市",
		"alias": "南昌",
		"pinyin": "NanChang",
		"abbr": "NC",
		"zip": "330000",
		"level": 2
	},
	{
		"code": "360102",
		"parent_code": "360100",
		"name": "东湖区",
		"alias": "东湖区",
		"pinyin": "DongHuQu",
		"abbr": "DHQ",
		"zip": "330006",
		"level": 3
	},
	{
		"code": "360103",
		"parent_code": "360100",
		"name": "西湖区",
		"alias": "西湖区",
		"pinyin": "XiHuQu",
		"abbr": "XHQ",
		"zip": "330009",
		"level": 3
	},
	{
		"code": "360104",
		"parent_code": "360100",
		"name": "青云谱区",
		"alias": "青云谱区",
		"pinyin": "QingYunPuQu",
		"abbr": "QYPQ",
		"zip": "330001",
		"level": 3
	},
	{
		"code": "360105",
		"parent_code": "360100",
		"name": "湾里区",
		"alias": "湾里区",
		"pinyin": "WanLiQu",
		"abbr": "WLQ",
		"zip": "330004",
		"level": 3
	},
	{
		"code": "360111",
		"parent_code": "360100",
		"name": "青山湖区",
		"alias": "青山湖区",
		"pinyin": "QingShanHuQu",
		"abbr": "QSHQ",
		"zip": "330006",
		"level": 3
	},
	{
		"code": "360121",
		"parent_code": "360100",
		"name": "南昌县",
		"alias": "南昌",
		"pinyin": "NanChang",
		"abbr": "NC",
		"zip": "330200",
		"level": 3
	},
	{
		"code": "360122",
		"parent_code": "360100",
		"name": "新建县",
		"alias": "新建",
		"pinyin": "XinJian",
		"abbr": "XJ",
		"zip": "330100",
		"level": 3
	},
	{
		"code": "360123",
		"parent_code": "360100",
		"name": "安义县",
		"alias": "安义",
		"pinyin": "AnYi",
		"abbr": "AY",
		"zip": "330500",
		"level": 3
	},
	{
		"code": "360124",
		"parent_code": "360100",
		"name": "进贤县",
		"alias": "进贤",
		"pinyin": "JinXian",
		"abbr": "JX",
		"zip": "331700",
		"level": 3
	},
	{
		"code": "360200",
		"parent_code": "360000",
		"name": "景德镇市",
		"alias": "景德镇",
		"pinyin": "JingDeZhen",
		"abbr": "JDZ",
		"zip": "333000",
		"level": 2
	},
	{
		"code": "360202",
		"parent_code": "360200",
		"name": "昌江区",
		"alias": "昌江区",
		"pinyin": "ChangJiangQu",
		"abbr": "CJQ",
		"zip": "333000",
		"level": 3
	},
	{
		"code": "360203",
		"parent_code": "360200",
		"name": "珠山区",
		"alias": "珠山区",
		"pinyin": "ZhuShanQu",
		"abbr": "ZSQ",
		"zip": "333000",
		"level": 3
	},
	{
		"code": "360222",
		"parent_code": "360200",
		"name": "浮梁县",
		"alias": "浮梁",
		"pinyin": "FuLiang",
		"abbr": "FL",
		"zip": "333400",
		"level": 3
	},
	{
		"code": "360281",
		"parent_code": "360200",
		"name": "乐平市",
		"alias": "乐平",
		"pinyin": "LePing",
		"abbr": "LP",
		"zip": "333300",
		"level": 3
	},
	{
		"code": "360300",
		"parent_code": "360000",
		"name": "萍乡市",
		"alias": "萍乡",
		"pinyin": "PingXiang",
		"abbr": "PX",
		"zip": "337000",
		"level": 2
	},
	{
		"code": "360302",
		"parent_code": "360300",
		"name": "安源区",
		"alias": "安源区",
		"pinyin": "AnYuanQu",
		"abbr": "AYQ",
		"zip": "337000",
		"level": 3
	},
	{
		"code": "360313",
		"parent_code": "360300",
		"name": "湘东区",
		"alias": "湘东区",
		"pinyin": "XiangDongQu",
		"abbr": "XDQ",
		"zip": "337032",
		"level": 3
	},
	{
		"code": "360321",
		"parent_code": "360300",
		"name": "莲花县",
		"alias": "莲花",
		"pinyin": "LianHua",
		"abbr": "LH",
		"zip": "337100",
		"level": 3
	},
	{
		"code": "360322",
		"parent_code": "360300",
		"name": "上栗县",
		"alias": "上栗",
		"pinyin": "ShangLi",
		"abbr": "SL",
		"zip": "337009",
		"level": 3
	},
	{
		"code": "360323",
		"parent_code": "360300",
		"name": "芦溪县",
		"alias": "芦溪",
		"pinyin": "LuXi",
		"abbr": "LX",
		"zip": "337200",
		"level": 3
	},
	{
		"code": "360400",
		"parent_code": "360000",
		"name": "九江市",
		"alias": "九江",
		"pinyin": "JiuJiang",
		"abbr": "JJ",
		"zip": "332000",
		"level": 2
	},
	{
		"code": "360402",
		"parent_code": "360400",
		"name": "庐山区",
		"alias": "庐山区",
		"pinyin": "LuShanQu",
		"abbr": "LSQ",
		"zip": "332005",
		"level": 3
	},
	{
		"code": "360403",
		"parent_code": "360400",
		"name": "浔阳区",
		"alias": "浔阳区",
		"pinyin": "XunYangQu",
		"abbr": "XYQ",
		"zip": "332000",
		"level": 3
	},
	{
		"code": "360421",
		"parent_code": "360400",
		"name": "九江县",
		"alias": "九江",
		"pinyin": "JiuJiang",
		"abbr": "JJ",
		"zip": "332100",
		"level": 3
	},
	{
		"code": "360423",
		"parent_code": "360400",
		"name": "武宁县",
		"alias": "武宁",
		"pinyin": "WuNing",
		"abbr": "WN",
		"zip": "332300",
		"level": 3
	},
	{
		"code": "360424",
		"parent_code": "360400",
		"name": "修水县",
		"alias": "修水",
		"pinyin": "XiuShui",
		"abbr": "XS",
		"zip": "332400",
		"level": 3
	},
	{
		"code": "360425",
		"parent_code": "360400",
		"name": "永修县",
		"alias": "永修",
		"pinyin": "YongXiu",
		"abbr": "YX",
		"zip": "330300",
		"level": 3
	},
	{
		"code": "360426",
		"parent_code": "360400",
		"name": "德安县",
		"alias": "德安",
		"pinyin": "DeAn",
		"abbr": "DA",
		"zip": "330400",
		"level": 3
	},
	{
		"code": "360427",
		"parent_code": "360400",
		"name": "星子县",
		"alias": "星子",
		"pinyin": "XingZi",
		"abbr": "XZ",
		"zip": "332800",
		"level": 3
	},
	{
		"code": "360428",
		"parent_code": "360400",
		"name": "都昌县",
		"alias": "都昌",
		"pinyin": "DouChang",
		"abbr": "DC",
		"zip": "332600",
		"level": 3
	},
	{
		"code": "360429",
		"parent_code": "360400",
		"name": "湖口县",
		"alias": "湖口",
		"pinyin": "HuKou",
		"abbr": "HK",
		"zip": "332500",
		"level": 3
	},
	{
		"code": "360430",
		"parent_code": "360400",
		"name": "彭泽县",
		"alias": "彭泽",
		"pinyin": "PengZe",
		"abbr": "PZ",
		"zip": "332700",
		"level": 3
	},
	{
		"code": "360481",
		"parent_code": "360400",
		"name": "瑞昌市",
		"alias": "瑞昌",
		"pinyin": "RuiChang",
		"abbr": "RC",
		"zip": "332200",
		"level": 3
	},
	{
		"code": "360482",
		"parent_code": "360400",
		"name": "共青城市",
		"alias": "共青城",
		"pinyin": "GongQingCheng",
		"abbr": "GQC",
		"zip": "",
		"level": 3
	},
	{
		"code": "360500",
		"parent_code": "360000",
		"name": "新余市",
		"alias": "新余",
		"pinyin": "XinYu",
		"abbr": "XY",
		"zip": "338000",
		"level": 2
	},
	{
		"code": "360502",
		"parent_code": "360500",
		"name": "渝水区",
		"alias": "渝水区",
		"pinyin": "YuShuiQu",
		"abbr": "YSQ",
		"zip": "338025",
		"level": 3
	},
	{
		"code": "360521",
		"parent_code": "360500",
		"name": "分宜县",
		"alias": "分宜",
		"pinyin": "FenYi",
		"abbr": "FY",
		"zip": "336600",
		"level": 3
	},
	{
		"code": "360600",
		"parent_code": "360600",
		"name": "鹰潭市",
		"alias": "鹰潭",
		"pinyin": "YingTan",
		"abbr": "YT",
		"zip": "335000",
		"level": 3
	},
	{
		"code": "360601",
		"parent_code": "360600",
		"name": "市辖区",
		"alias": "市辖区",
		"pinyin": "ShiXiaQu",
		"abbr": "SXQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "360602",
		"parent_code": "360600",
		"name": "月湖区",
		"alias": "月湖区",
		"pinyin": "YueHuQu",
		"abbr": "YHQ",
		"zip": "335000",
		"level": 3
	},
	{
		"code": "360622",
		"parent_code": "360600",
		"name": "余江县",
		"alias": "余江",
		"pinyin": "YuJiang",
		"abbr": "YJ",
		"zip": "335200",
		"level": 3
	},
	{
		"code": "360681",
		"parent_code": "360600",
		"name": "贵溪市",
		"alias": "贵溪",
		"pinyin": "GuiXi",
		"abbr": "GX",
		"zip": "335400",
		"level": 3
	},
	{
		"code": "360700",
		"parent_code": "360000",
		"name": "赣州市",
		"alias": "赣州",
		"pinyin": "GanZhou",
		"abbr": "GZ",
		"zip": "341000",
		"level": 2
	},
	{
		"code": "360702",
		"parent_code": "360700",
		"name": "章贡区",
		"alias": "章贡区",
		"pinyin": "ZhangGongQu",
		"abbr": "ZGQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "360721",
		"parent_code": "360700",
		"name": "赣县",
		"alias": "赣县",
		"pinyin": "GanXian",
		"abbr": "GX",
		"zip": "341100",
		"level": 3
	},
	{
		"code": "360722",
		"parent_code": "360700",
		"name": "信丰县",
		"alias": "信丰",
		"pinyin": "XinFeng",
		"abbr": "XF",
		"zip": "341600",
		"level": 3
	},
	{
		"code": "360723",
		"parent_code": "360700",
		"name": "大余县",
		"alias": "大余",
		"pinyin": "DaYu",
		"abbr": "DY",
		"zip": "341500",
		"level": 3
	},
	{
		"code": "360724",
		"parent_code": "360700",
		"name": "上犹县",
		"alias": "上犹",
		"pinyin": "ShangYou",
		"abbr": "SY",
		"zip": "341200",
		"level": 3
	},
	{
		"code": "360725",
		"parent_code": "360700",
		"name": "崇义县",
		"alias": "崇义",
		"pinyin": "ChongYi",
		"abbr": "CY",
		"zip": "341300",
		"level": 3
	},
	{
		"code": "360726",
		"parent_code": "360700",
		"name": "安远县",
		"alias": "安远",
		"pinyin": "AnYuan",
		"abbr": "AY",
		"zip": "342100",
		"level": 3
	},
	{
		"code": "360727",
		"parent_code": "360700",
		"name": "龙南县",
		"alias": "龙南",
		"pinyin": "LongNan",
		"abbr": "LN",
		"zip": "341700",
		"level": 3
	},
	{
		"code": "360728",
		"parent_code": "360700",
		"name": "定南县",
		"alias": "定南",
		"pinyin": "DingNan",
		"abbr": "DN",
		"zip": "341900",
		"level": 3
	},
	{
		"code": "360729",
		"parent_code": "360700",
		"name": "全南县",
		"alias": "全南",
		"pinyin": "QuanNan",
		"abbr": "QN",
		"zip": "341800",
		"level": 3
	},
	{
		"code": "360730",
		"parent_code": "360700",
		"name": "宁都县",
		"alias": "宁都",
		"pinyin": "NingDou",
		"abbr": "ND",
		"zip": "342800",
		"level": 3
	},
	{
		"code": "360731",
		"parent_code": "360700",
		"name": "于都县",
		"alias": "于都",
		"pinyin": "YuDou",
		"abbr": "YD",
		"zip": "342300",
		"level": 3
	},
	{
		"code": "360732",
		"parent_code": "360700",
		"name": "兴国县",
		"alias": "兴国",
		"pinyin": "XingGuo",
		"abbr": "XG",
		"zip": "342400",
		"level": 3
	},
	{
		"code": "360733",
		"parent_code": "360700",
		"name": "会昌县",
		"alias": "会昌",
		"pinyin": "HuiChang",
		"abbr": "HC",
		"zip": "342600",
		"level": 3
	},
	{
		"code": "360734",
		"parent_code": "360700",
		"name": "寻乌县",
		"alias": "寻乌",
		"pinyin": "XunWu",
		"abbr": "XW",
		"zip": "342200",
		"level": 3
	},
	{
		"code": "360735",
		"parent_code": "360700",
		"name": "石城县",
		"alias": "石城",
		"pinyin": "ShiCheng",
		"abbr": "SC",
		"zip": "342700",
		"level": 3
	},
	{
		"code": "360781",
		"parent_code": "360700",
		"name": "瑞金市",
		"alias": "瑞金",
		"pinyin": "RuiJin",
		"abbr": "RJ",
		"zip": "342500",
		"level": 3
	},
	{
		"code": "360782",
		"parent_code": "360700",
		"name": "南康市",
		"alias": "南康",
		"pinyin": "NanKang",
		"abbr": "NK",
		"zip": "341400",
		"level": 3
	},
	{
		"code": "360800",
		"parent_code": "360000",
		"name": "吉安市",
		"alias": "吉安",
		"pinyin": "JiAn",
		"abbr": "JA",
		"zip": "343000",
		"level": 2
	},
	{
		"code": "360802",
		"parent_code": "360800",
		"name": "吉州区",
		"alias": "吉州区",
		"pinyin": "JiZhouQu",
		"abbr": "JZQ",
		"zip": "343000",
		"level": 3
	},
	{
		"code": "360803",
		"parent_code": "360800",
		"name": "青原区",
		"alias": "青原区",
		"pinyin": "QingYuanQu",
		"abbr": "QYQ",
		"zip": "343009",
		"level": 3
	},
	{
		"code": "360821",
		"parent_code": "360800",
		"name": "吉安县",
		"alias": "吉安",
		"pinyin": "JiAn",
		"abbr": "JA",
		"zip": "343100",
		"level": 3
	},
	{
		"code": "360822",
		"parent_code": "360800",
		"name": "吉水县",
		"alias": "吉水",
		"pinyin": "JiShui",
		"abbr": "JS",
		"zip": "331600",
		"level": 3
	},
	{
		"code": "360823",
		"parent_code": "360800",
		"name": "峡江县",
		"alias": "峡江",
		"pinyin": "XiaJiang",
		"abbr": "XJ",
		"zip": "331400",
		"level": 3
	},
	{
		"code": "360824",
		"parent_code": "360800",
		"name": "新干县",
		"alias": "新干",
		"pinyin": "XinGan",
		"abbr": "XG",
		"zip": "331300",
		"level": 3
	},
	{
		"code": "360825",
		"parent_code": "360800",
		"name": "永丰县",
		"alias": "永丰",
		"pinyin": "YongFeng",
		"abbr": "YF",
		"zip": "331500",
		"level": 3
	},
	{
		"code": "360826",
		"parent_code": "360800",
		"name": "泰和县",
		"alias": "泰和",
		"pinyin": "TaiHe",
		"abbr": "TH",
		"zip": "343700",
		"level": 3
	},
	{
		"code": "360827",
		"parent_code": "360800",
		"name": "遂川县",
		"alias": "遂川",
		"pinyin": "SuiChuan",
		"abbr": "SC",
		"zip": "343900",
		"level": 3
	},
	{
		"code": "360828",
		"parent_code": "360800",
		"name": "万安县",
		"alias": "万安",
		"pinyin": "WanAn",
		"abbr": "WA",
		"zip": "343800",
		"level": 3
	},
	{
		"code": "360829",
		"parent_code": "360800",
		"name": "安福县",
		"alias": "安福",
		"pinyin": "AnFu",
		"abbr": "AF",
		"zip": "343200",
		"level": 3
	},
	{
		"code": "360830",
		"parent_code": "360800",
		"name": "永新县",
		"alias": "永新",
		"pinyin": "YongXin",
		"abbr": "YX",
		"zip": "343400",
		"level": 3
	},
	{
		"code": "360881",
		"parent_code": "360800",
		"name": "井冈山市",
		"alias": "井冈山",
		"pinyin": "JingGangShan",
		"abbr": "JGS",
		"zip": "343600",
		"level": 3
	},
	{
		"code": "360900",
		"parent_code": "360000",
		"name": "宜春市",
		"alias": "宜春",
		"pinyin": "YiChun",
		"abbr": "YC",
		"zip": "336000",
		"level": 2
	},
	{
		"code": "360902",
		"parent_code": "360900",
		"name": "袁州区",
		"alias": "袁州区",
		"pinyin": "YuanZhouQu",
		"abbr": "YZQ",
		"zip": "336000",
		"level": 3
	},
	{
		"code": "360921",
		"parent_code": "360900",
		"name": "奉新县",
		"alias": "奉新",
		"pinyin": "FengXin",
		"abbr": "FX",
		"zip": "330700",
		"level": 3
	},
	{
		"code": "360922",
		"parent_code": "360900",
		"name": "万载县",
		"alias": "万载",
		"pinyin": "WanZai",
		"abbr": "WZ",
		"zip": "336100",
		"level": 3
	},
	{
		"code": "360923",
		"parent_code": "360900",
		"name": "上高县",
		"alias": "上高",
		"pinyin": "ShangGao",
		"abbr": "SG",
		"zip": "336400",
		"level": 3
	},
	{
		"code": "360924",
		"parent_code": "360900",
		"name": "宜丰县",
		"alias": "宜丰",
		"pinyin": "YiFeng",
		"abbr": "YF",
		"zip": "336300",
		"level": 3
	},
	{
		"code": "360925",
		"parent_code": "360900",
		"name": "靖安县",
		"alias": "靖安",
		"pinyin": "JingAn",
		"abbr": "JA",
		"zip": "330600",
		"level": 3
	},
	{
		"code": "360926",
		"parent_code": "360900",
		"name": "铜鼓县",
		"alias": "铜鼓",
		"pinyin": "TongGu",
		"abbr": "TG",
		"zip": "336200",
		"level": 3
	},
	{
		"code": "360981",
		"parent_code": "360900",
		"name": "丰城市",
		"alias": "丰城",
		"pinyin": "FengCheng",
		"abbr": "FC",
		"zip": "331100",
		"level": 3
	},
	{
		"code": "360982",
		"parent_code": "360900",
		"name": "樟树市",
		"alias": "樟树",
		"pinyin": "ZhangShu",
		"abbr": "ZS",
		"zip": "331200",
		"level": 3
	},
	{
		"code": "360983",
		"parent_code": "360900",
		"name": "高安市",
		"alias": "高安",
		"pinyin": "GaoAn",
		"abbr": "GA",
		"zip": "330800",
		"level": 3
	},
	{
		"code": "361000",
		"parent_code": "360000",
		"name": "抚州市",
		"alias": "抚州",
		"pinyin": "FuZhou",
		"abbr": "FZ",
		"zip": "344000",
		"level": 2
	},
	{
		"code": "361002",
		"parent_code": "361000",
		"name": "临川区",
		"alias": "临川区",
		"pinyin": "LinChuanQu",
		"abbr": "LCQ",
		"zip": "344100",
		"level": 3
	},
	{
		"code": "361021",
		"parent_code": "361000",
		"name": "南城县",
		"alias": "南城",
		"pinyin": "NanCheng",
		"abbr": "NC",
		"zip": "344700",
		"level": 3
	},
	{
		"code": "361022",
		"parent_code": "361000",
		"name": "黎川县",
		"alias": "黎川",
		"pinyin": "LiChuan",
		"abbr": "LC",
		"zip": "344600",
		"level": 3
	},
	{
		"code": "361023",
		"parent_code": "361000",
		"name": "南丰县",
		"alias": "南丰",
		"pinyin": "NanFeng",
		"abbr": "NF",
		"zip": "344500",
		"level": 3
	},
	{
		"code": "361024",
		"parent_code": "361000",
		"name": "崇仁县",
		"alias": "崇仁",
		"pinyin": "ChongRen",
		"abbr": "CR",
		"zip": "344200",
		"level": 3
	},
	{
		"code": "361025",
		"parent_code": "361000",
		"name": "乐安县",
		"alias": "乐安",
		"pinyin": "LeAn",
		"abbr": "LA",
		"zip": "344300",
		"level": 3
	},
	{
		"code": "361026",
		"parent_code": "361000",
		"name": "宜黄县",
		"alias": "宜黄",
		"pinyin": "YiHuang",
		"abbr": "YH",
		"zip": "344400",
		"level": 3
	},
	{
		"code": "361027",
		"parent_code": "361000",
		"name": "金溪县",
		"alias": "金溪",
		"pinyin": "JinXi",
		"abbr": "JX",
		"zip": "344800",
		"level": 3
	},
	{
		"code": "361028",
		"parent_code": "361000",
		"name": "资溪县",
		"alias": "资溪",
		"pinyin": "ZiXi",
		"abbr": "ZX",
		"zip": "335300",
		"level": 3
	},
	{
		"code": "361029",
		"parent_code": "361000",
		"name": "东乡县",
		"alias": "东乡",
		"pinyin": "DongXiang",
		"abbr": "DX",
		"zip": "331800",
		"level": 3
	},
	{
		"code": "361030",
		"parent_code": "361000",
		"name": "广昌县",
		"alias": "广昌",
		"pinyin": "GuangChang",
		"abbr": "GC",
		"zip": "344900",
		"level": 3
	},
	{
		"code": "361100",
		"parent_code": "360000",
		"name": "上饶市",
		"alias": "上饶",
		"pinyin": "ShangRao",
		"abbr": "SR",
		"zip": "334000",
		"level": 2
	},
	{
		"code": "361102",
		"parent_code": "361100",
		"name": "信州区",
		"alias": "信州区",
		"pinyin": "XinZhouQu",
		"abbr": "XZQ",
		"zip": "334000",
		"level": 3
	},
	{
		"code": "361121",
		"parent_code": "361100",
		"name": "上饶县",
		"alias": "上饶",
		"pinyin": "ShangRao",
		"abbr": "SR",
		"zip": "334100",
		"level": 3
	},
	{
		"code": "361122",
		"parent_code": "361100",
		"name": "广丰县",
		"alias": "广丰",
		"pinyin": "GuangFeng",
		"abbr": "GF",
		"zip": "334600",
		"level": 3
	},
	{
		"code": "361123",
		"parent_code": "361100",
		"name": "玉山县",
		"alias": "玉山",
		"pinyin": "YuShan",
		"abbr": "YS",
		"zip": "334700",
		"level": 3
	},
	{
		"code": "361124",
		"parent_code": "361100",
		"name": "铅山县",
		"alias": "铅山",
		"pinyin": "QianShan",
		"abbr": "QS",
		"zip": "334500",
		"level": 3
	},
	{
		"code": "361125",
		"parent_code": "361100",
		"name": "横峰县",
		"alias": "横峰",
		"pinyin": "HengFeng",
		"abbr": "HF",
		"zip": "334300",
		"level": 3
	},
	{
		"code": "361126",
		"parent_code": "361100",
		"name": "弋阳县",
		"alias": "弋阳",
		"pinyin": "YiYang",
		"abbr": "YY",
		"zip": "334400",
		"level": 3
	},
	{
		"code": "361127",
		"parent_code": "361100",
		"name": "余干县",
		"alias": "余干",
		"pinyin": "YuGan",
		"abbr": "YG",
		"zip": "335100",
		"level": 3
	},
	{
		"code": "361128",
		"parent_code": "361100",
		"name": "鄱阳县",
		"alias": "鄱阳",
		"pinyin": "PoYang",
		"abbr": "PY",
		"zip": "333100",
		"level": 3
	},
	{
		"code": "361129",
		"parent_code": "361100",
		"name": "万年县",
		"alias": "万年",
		"pinyin": "WanNian",
		"abbr": "WN",
		"zip": "335500",
		"level": 3
	},
	{
		"code": "361130",
		"parent_code": "361100",
		"name": "婺源县",
		"alias": "婺源",
		"pinyin": "WuYuan",
		"abbr": "WY",
		"zip": "333200",
		"level": 3
	},
	{
		"code": "361181",
		"parent_code": "361100",
		"name": "德兴市",
		"alias": "德兴",
		"pinyin": "DeXing",
		"abbr": "DX",
		"zip": "334200",
		"level": 3
	},
	{
		"code": "370000",
		"parent_code": null,
		"name": "山东省",
		"alias": "山东",
		"pinyin": "ShanDong",
		"abbr": "SD",
		"zip": "250000",
		"level": 1
	},
	{
		"code": "370100",
		"parent_code": "370000",
		"name": "济南市",
		"alias": "济南",
		"pinyin": "JiNan",
		"abbr": "JN",
		"zip": "250000",
		"level": 2
	},
	{
		"code": "370102",
		"parent_code": "370100",
		"name": "历下区",
		"alias": "历下区",
		"pinyin": "LiXiaQu",
		"abbr": "LXQ",
		"zip": "250013",
		"level": 3
	},
	{
		"code": "370103",
		"parent_code": "370100",
		"name": "市中区",
		"alias": "市中区",
		"pinyin": "ShiZhongQu",
		"abbr": "SZQ",
		"zip": "250002",
		"level": 3
	},
	{
		"code": "370104",
		"parent_code": "370100",
		"name": "槐荫区",
		"alias": "槐荫区",
		"pinyin": "HuaiYinQu",
		"abbr": "HYQ",
		"zip": "250021",
		"level": 3
	},
	{
		"code": "370105",
		"parent_code": "370100",
		"name": "天桥区",
		"alias": "天桥区",
		"pinyin": "TianQiaoQu",
		"abbr": "TQQ",
		"zip": "250031",
		"level": 3
	},
	{
		"code": "370112",
		"parent_code": "370100",
		"name": "历城区",
		"alias": "历城区",
		"pinyin": "LiChengQu",
		"abbr": "LCQ",
		"zip": "250100",
		"level": 3
	},
	{
		"code": "370113",
		"parent_code": "370100",
		"name": "长清区",
		"alias": "长清区",
		"pinyin": "ZhangQingQu",
		"abbr": "ZQQ",
		"zip": "250300",
		"level": 3
	},
	{
		"code": "370124",
		"parent_code": "370100",
		"name": "平阴县",
		"alias": "平阴",
		"pinyin": "PingYin",
		"abbr": "PY",
		"zip": "250400",
		"level": 3
	},
	{
		"code": "370125",
		"parent_code": "370100",
		"name": "济阳县",
		"alias": "济阳",
		"pinyin": "JiYang",
		"abbr": "JY",
		"zip": "251400",
		"level": 3
	},
	{
		"code": "370126",
		"parent_code": "370100",
		"name": "商河县",
		"alias": "商河",
		"pinyin": "ShangHe",
		"abbr": "SH",
		"zip": "251600",
		"level": 3
	},
	{
		"code": "370181",
		"parent_code": "370100",
		"name": "章丘市",
		"alias": "章丘",
		"pinyin": "ZhangQiu",
		"abbr": "ZQ",
		"zip": "250200",
		"level": 3
	},
	{
		"code": "370200",
		"parent_code": "370000",
		"name": "青岛市",
		"alias": "青岛",
		"pinyin": "QingDao",
		"abbr": "QD",
		"zip": "266000",
		"level": 2
	},
	{
		"code": "370202",
		"parent_code": "370200",
		"name": "市南区",
		"alias": "市南区",
		"pinyin": "ShiNanQu",
		"abbr": "SNQ",
		"zip": "266001",
		"level": 3
	},
	{
		"code": "370203",
		"parent_code": "370200",
		"name": "市北区",
		"alias": "市北区",
		"pinyin": "ShiBeiQu",
		"abbr": "SBQ",
		"zip": "266011",
		"level": 3
	},
	{
		"code": "370211",
		"parent_code": "370200",
		"name": "黄岛区",
		"alias": "黄岛区",
		"pinyin": "HuangDaoQu",
		"abbr": "HDQ",
		"zip": "266500",
		"level": 3
	},
	{
		"code": "370212",
		"parent_code": "370200",
		"name": "崂山区",
		"alias": "崂山区",
		"pinyin": "LaoShanQu",
		"abbr": "LSQ",
		"zip": "266100",
		"level": 3
	},
	{
		"code": "370213",
		"parent_code": "370200",
		"name": "李沧区",
		"alias": "李沧区",
		"pinyin": "LiCangQu",
		"abbr": "LCQ",
		"zip": "266100",
		"level": 3
	},
	{
		"code": "370214",
		"parent_code": "370200",
		"name": "城阳区",
		"alias": "城阳区",
		"pinyin": "ChengYangQu",
		"abbr": "CYQ",
		"zip": "266041",
		"level": 3
	},
	{
		"code": "370281",
		"parent_code": "370200",
		"name": "胶州市",
		"alias": "胶州",
		"pinyin": "JiaoZhou",
		"abbr": "JZ",
		"zip": "266300",
		"level": 3
	},
	{
		"code": "370282",
		"parent_code": "370200",
		"name": "即墨市",
		"alias": "即墨",
		"pinyin": "JiMo",
		"abbr": "JM",
		"zip": "266200",
		"level": 3
	},
	{
		"code": "370283",
		"parent_code": "370200",
		"name": "平度市",
		"alias": "平度",
		"pinyin": "PingDu",
		"abbr": "PD",
		"zip": "266700",
		"level": 3
	},
	{
		"code": "370285",
		"parent_code": "370200",
		"name": "莱西市",
		"alias": "莱西",
		"pinyin": "LaiXi",
		"abbr": "LX",
		"zip": "266600",
		"level": 3
	},
	{
		"code": "370300",
		"parent_code": "370000",
		"name": "淄博市",
		"alias": "淄博",
		"pinyin": "ZiBo",
		"abbr": "ZB",
		"zip": "255000",
		"level": 2
	},
	{
		"code": "370302",
		"parent_code": "370300",
		"name": "淄川区",
		"alias": "淄川区",
		"pinyin": "ZiChuanQu",
		"abbr": "ZCQ",
		"zip": "255100",
		"level": 3
	},
	{
		"code": "370303",
		"parent_code": "370300",
		"name": "张店区",
		"alias": "张店区",
		"pinyin": "ZhangDianQu",
		"abbr": "ZDQ",
		"zip": "255022",
		"level": 3
	},
	{
		"code": "370304",
		"parent_code": "370300",
		"name": "博山区",
		"alias": "博山区",
		"pinyin": "BoShanQu",
		"abbr": "BSQ",
		"zip": "255200",
		"level": 3
	},
	{
		"code": "370305",
		"parent_code": "370300",
		"name": "临淄区",
		"alias": "临淄区",
		"pinyin": "LinZiQu",
		"abbr": "LZQ",
		"zip": "255400",
		"level": 3
	},
	{
		"code": "370306",
		"parent_code": "370300",
		"name": "周村区",
		"alias": "周村区",
		"pinyin": "ZhouCunQu",
		"abbr": "ZCQ",
		"zip": "255300",
		"level": 3
	},
	{
		"code": "370321",
		"parent_code": "370300",
		"name": "桓台县",
		"alias": "桓台",
		"pinyin": "HuanTai",
		"abbr": "HT",
		"zip": "256400",
		"level": 3
	},
	{
		"code": "370322",
		"parent_code": "370300",
		"name": "高青县",
		"alias": "高青",
		"pinyin": "GaoQing",
		"abbr": "GQ",
		"zip": "256300",
		"level": 3
	},
	{
		"code": "370323",
		"parent_code": "370300",
		"name": "沂源县",
		"alias": "沂源",
		"pinyin": "YiYuan",
		"abbr": "YY",
		"zip": "256100",
		"level": 3
	},
	{
		"code": "370400",
		"parent_code": "370000",
		"name": "枣庄市",
		"alias": "枣庄",
		"pinyin": "ZaoZhuang",
		"abbr": "ZZ",
		"zip": "277100",
		"level": 2
	},
	{
		"code": "370402",
		"parent_code": "370400",
		"name": "市中区",
		"alias": "市中区",
		"pinyin": "ShiZhongQu",
		"abbr": "SZQ",
		"zip": "277101",
		"level": 3
	},
	{
		"code": "370403",
		"parent_code": "370400",
		"name": "薛城区",
		"alias": "薛城区",
		"pinyin": "XueChengQu",
		"abbr": "XCQ",
		"zip": "277000",
		"level": 3
	},
	{
		"code": "370404",
		"parent_code": "370400",
		"name": "峄城区",
		"alias": "峄城区",
		"pinyin": "YiChengQu",
		"abbr": "YCQ",
		"zip": "277300",
		"level": 3
	},
	{
		"code": "370405",
		"parent_code": "370400",
		"name": "台儿庄区",
		"alias": "台儿庄区",
		"pinyin": "TaiErZhuangQu",
		"abbr": "TEZQ",
		"zip": "277400",
		"level": 3
	},
	{
		"code": "370406",
		"parent_code": "370400",
		"name": "山亭区",
		"alias": "山亭区",
		"pinyin": "ShanTingQu",
		"abbr": "STQ",
		"zip": "277200",
		"level": 3
	},
	{
		"code": "370481",
		"parent_code": "370400",
		"name": "滕州市",
		"alias": "滕州",
		"pinyin": "TengZhou",
		"abbr": "TZ",
		"zip": "277500",
		"level": 3
	},
	{
		"code": "370500",
		"parent_code": "370000",
		"name": "东营市",
		"alias": "东营",
		"pinyin": "DongYing",
		"abbr": "DY",
		"zip": "257000",
		"level": 2
	},
	{
		"code": "370502",
		"parent_code": "370500",
		"name": "东营区",
		"alias": "东营区",
		"pinyin": "DongYingQu",
		"abbr": "DYQ",
		"zip": "257029",
		"level": 3
	},
	{
		"code": "370503",
		"parent_code": "370500",
		"name": "河口区",
		"alias": "河口区",
		"pinyin": "HeKouQu",
		"abbr": "HKQ",
		"zip": "257200",
		"level": 3
	},
	{
		"code": "370521",
		"parent_code": "370500",
		"name": "垦利县",
		"alias": "垦利",
		"pinyin": "KenLi",
		"abbr": "KL",
		"zip": "257500",
		"level": 3
	},
	{
		"code": "370522",
		"parent_code": "370500",
		"name": "利津县",
		"alias": "利津",
		"pinyin": "LiJin",
		"abbr": "LJ",
		"zip": "257400",
		"level": 3
	},
	{
		"code": "370523",
		"parent_code": "370500",
		"name": "广饶县",
		"alias": "广饶",
		"pinyin": "GuangRao",
		"abbr": "GR",
		"zip": "257300",
		"level": 3
	},
	{
		"code": "370600",
		"parent_code": "370000",
		"name": "烟台市",
		"alias": "烟台",
		"pinyin": "YanTai",
		"abbr": "YT",
		"zip": "264000",
		"level": 2
	},
	{
		"code": "370602",
		"parent_code": "370600",
		"name": "芝罘区",
		"alias": "芝罘区",
		"pinyin": "ZhiFuQu",
		"abbr": "ZFQ",
		"zip": "264001",
		"level": 3
	},
	{
		"code": "370611",
		"parent_code": "370600",
		"name": "福山区",
		"alias": "福山区",
		"pinyin": "FuShanQu",
		"abbr": "FSQ",
		"zip": "265500",
		"level": 3
	},
	{
		"code": "370612",
		"parent_code": "370600",
		"name": "牟平区",
		"alias": "牟平区",
		"pinyin": "MouPingQu",
		"abbr": "MPQ",
		"zip": "264100",
		"level": 3
	},
	{
		"code": "370613",
		"parent_code": "370600",
		"name": "莱山区",
		"alias": "莱山区",
		"pinyin": "LaiShanQu",
		"abbr": "LSQ",
		"zip": "264600",
		"level": 3
	},
	{
		"code": "370634",
		"parent_code": "370600",
		"name": "长岛县",
		"alias": "长岛",
		"pinyin": "ZhangDao",
		"abbr": "ZD",
		"zip": "265800",
		"level": 3
	},
	{
		"code": "370681",
		"parent_code": "370600",
		"name": "龙口市",
		"alias": "龙口",
		"pinyin": "LongKou",
		"abbr": "LK",
		"zip": "265700",
		"level": 3
	},
	{
		"code": "370682",
		"parent_code": "370600",
		"name": "莱阳市",
		"alias": "莱阳",
		"pinyin": "LaiYang",
		"abbr": "LY",
		"zip": "265200",
		"level": 3
	},
	{
		"code": "370683",
		"parent_code": "370600",
		"name": "莱州市",
		"alias": "莱州",
		"pinyin": "LaiZhou",
		"abbr": "LZ",
		"zip": "261400",
		"level": 3
	},
	{
		"code": "370684",
		"parent_code": "370600",
		"name": "蓬莱市",
		"alias": "蓬莱",
		"pinyin": "PengLai",
		"abbr": "PL",
		"zip": "265600",
		"level": 3
	},
	{
		"code": "370685",
		"parent_code": "370600",
		"name": "招远市",
		"alias": "招远",
		"pinyin": "ZhaoYuan",
		"abbr": "ZY",
		"zip": "265400",
		"level": 3
	},
	{
		"code": "370686",
		"parent_code": "370600",
		"name": "栖霞市",
		"alias": "栖霞",
		"pinyin": "QiXia",
		"abbr": "QX",
		"zip": "265300",
		"level": 3
	},
	{
		"code": "370687",
		"parent_code": "370600",
		"name": "海阳市",
		"alias": "海阳",
		"pinyin": "HaiYang",
		"abbr": "HY",
		"zip": "265100",
		"level": 3
	},
	{
		"code": "370700",
		"parent_code": "370000",
		"name": "潍坊市",
		"alias": "潍坊",
		"pinyin": "WeiFang",
		"abbr": "WF",
		"zip": "261000",
		"level": 2
	},
	{
		"code": "370702",
		"parent_code": "370700",
		"name": "潍城区",
		"alias": "潍城区",
		"pinyin": "WeiChengQu",
		"abbr": "WCQ",
		"zip": "261021",
		"level": 3
	},
	{
		"code": "370703",
		"parent_code": "370700",
		"name": "寒亭区",
		"alias": "寒亭区",
		"pinyin": "HanTingQu",
		"abbr": "HTQ",
		"zip": "261100",
		"level": 3
	},
	{
		"code": "370704",
		"parent_code": "370700",
		"name": "坊子区",
		"alias": "坊子区",
		"pinyin": "FangZiQu",
		"abbr": "FZQ",
		"zip": "261200",
		"level": 3
	},
	{
		"code": "370705",
		"parent_code": "370700",
		"name": "奎文区",
		"alias": "奎文区",
		"pinyin": "KuiWenQu",
		"abbr": "KWQ",
		"zip": "261041",
		"level": 3
	},
	{
		"code": "370724",
		"parent_code": "370700",
		"name": "临朐县",
		"alias": "临朐",
		"pinyin": "LinQu",
		"abbr": "LQ",
		"zip": "262600",
		"level": 3
	},
	{
		"code": "370725",
		"parent_code": "370700",
		"name": "昌乐县",
		"alias": "昌乐",
		"pinyin": "ChangLe",
		"abbr": "CL",
		"zip": "262400",
		"level": 3
	},
	{
		"code": "370781",
		"parent_code": "370700",
		"name": "青州市",
		"alias": "青州",
		"pinyin": "QingZhou",
		"abbr": "QZ",
		"zip": "262500",
		"level": 3
	},
	{
		"code": "370782",
		"parent_code": "370700",
		"name": "诸城市",
		"alias": "诸城",
		"pinyin": "ZhuCheng",
		"abbr": "ZC",
		"zip": "262200",
		"level": 3
	},
	{
		"code": "370783",
		"parent_code": "370700",
		"name": "寿光市",
		"alias": "寿光",
		"pinyin": "ShouGuang",
		"abbr": "SG",
		"zip": "262700",
		"level": 3
	},
	{
		"code": "370784",
		"parent_code": "370700",
		"name": "安丘市",
		"alias": "安丘",
		"pinyin": "AnQiu",
		"abbr": "AQ",
		"zip": "262100",
		"level": 3
	},
	{
		"code": "370785",
		"parent_code": "370700",
		"name": "高密市",
		"alias": "高密",
		"pinyin": "GaoMi",
		"abbr": "GM",
		"zip": "261500",
		"level": 3
	},
	{
		"code": "370786",
		"parent_code": "370700",
		"name": "昌邑市",
		"alias": "昌邑",
		"pinyin": "ChangYi",
		"abbr": "CY",
		"zip": "261300",
		"level": 3
	},
	{
		"code": "370800",
		"parent_code": "370000",
		"name": "济宁市",
		"alias": "济宁",
		"pinyin": "JiNing",
		"abbr": "JN",
		"zip": "272100",
		"level": 2
	},
	{
		"code": "370802",
		"parent_code": "370800",
		"name": "市中区",
		"alias": "市中区",
		"pinyin": "ShiZhongQu",
		"abbr": "SZQ",
		"zip": "272133",
		"level": 3
	},
	{
		"code": "370811",
		"parent_code": "370800",
		"name": "任城区",
		"alias": "任城区",
		"pinyin": "RenChengQu",
		"abbr": "RCQ",
		"zip": "272113",
		"level": 3
	},
	{
		"code": "370826",
		"parent_code": "370800",
		"name": "微山县",
		"alias": "微山",
		"pinyin": "WeiShan",
		"abbr": "WS",
		"zip": "277600",
		"level": 3
	},
	{
		"code": "370827",
		"parent_code": "370800",
		"name": "鱼台县",
		"alias": "鱼台",
		"pinyin": "YuTai",
		"abbr": "YT",
		"zip": "272300",
		"level": 3
	},
	{
		"code": "370828",
		"parent_code": "370800",
		"name": "金乡县",
		"alias": "金乡",
		"pinyin": "JinXiang",
		"abbr": "JX",
		"zip": "272200",
		"level": 3
	},
	{
		"code": "370829",
		"parent_code": "370800",
		"name": "嘉祥县",
		"alias": "嘉祥",
		"pinyin": "JiaXiang",
		"abbr": "JX",
		"zip": "272400",
		"level": 3
	},
	{
		"code": "370830",
		"parent_code": "370800",
		"name": "汶上县",
		"alias": "汶上",
		"pinyin": "WenShang",
		"abbr": "WS",
		"zip": "272501",
		"level": 3
	},
	{
		"code": "370831",
		"parent_code": "370800",
		"name": "泗水县",
		"alias": "泗水",
		"pinyin": "SiShui",
		"abbr": "SS",
		"zip": "273200",
		"level": 3
	},
	{
		"code": "370832",
		"parent_code": "370800",
		"name": "梁山县",
		"alias": "梁山",
		"pinyin": "LiangShan",
		"abbr": "LS",
		"zip": "272600",
		"level": 3
	},
	{
		"code": "370881",
		"parent_code": "370800",
		"name": "曲阜市",
		"alias": "曲阜",
		"pinyin": "QuFu",
		"abbr": "QF",
		"zip": "273100",
		"level": 3
	},
	{
		"code": "370882",
		"parent_code": "370800",
		"name": "兖州市",
		"alias": "兖州",
		"pinyin": "YanZhou",
		"abbr": "YZ",
		"zip": "272000",
		"level": 3
	},
	{
		"code": "370883",
		"parent_code": "370800",
		"name": "邹城市",
		"alias": "邹城",
		"pinyin": "ZouCheng",
		"abbr": "ZC",
		"zip": "273500",
		"level": 3
	},
	{
		"code": "370900",
		"parent_code": "370000",
		"name": "泰安市",
		"alias": "泰安",
		"pinyin": "TaiAn",
		"abbr": "TA",
		"zip": "271000",
		"level": 2
	},
	{
		"code": "370902",
		"parent_code": "370900",
		"name": "泰山区",
		"alias": "泰山区",
		"pinyin": "TaiShanQu",
		"abbr": "TSQ",
		"zip": "271000",
		"level": 3
	},
	{
		"code": "370911",
		"parent_code": "370900",
		"name": "岱岳区",
		"alias": "岱岳区",
		"pinyin": "DaiYueQu",
		"abbr": "DYQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "370921",
		"parent_code": "370900",
		"name": "宁阳县",
		"alias": "宁阳",
		"pinyin": "NingYang",
		"abbr": "NY",
		"zip": "271400",
		"level": 3
	},
	{
		"code": "370923",
		"parent_code": "370900",
		"name": "东平县",
		"alias": "东平",
		"pinyin": "DongPing",
		"abbr": "DP",
		"zip": "271500",
		"level": 3
	},
	{
		"code": "370982",
		"parent_code": "370900",
		"name": "新泰市",
		"alias": "新泰",
		"pinyin": "XinTai",
		"abbr": "XT",
		"zip": "271200",
		"level": 3
	},
	{
		"code": "370983",
		"parent_code": "370900",
		"name": "肥城市",
		"alias": "肥城",
		"pinyin": "FeiCheng",
		"abbr": "FC",
		"zip": "271600",
		"level": 3
	},
	{
		"code": "371000",
		"parent_code": "370000",
		"name": "威海市",
		"alias": "威海",
		"pinyin": "WeiHai",
		"abbr": "WH",
		"zip": "264200",
		"level": 2
	},
	{
		"code": "371002",
		"parent_code": "371000",
		"name": "环翠区",
		"alias": "环翠区",
		"pinyin": "HuanCuiQu",
		"abbr": "HCQ",
		"zip": "264200",
		"level": 3
	},
	{
		"code": "371081",
		"parent_code": "371000",
		"name": "文登市",
		"alias": "文登",
		"pinyin": "WenDeng",
		"abbr": "WD",
		"zip": "264400",
		"level": 3
	},
	{
		"code": "371082",
		"parent_code": "371000",
		"name": "荣成市",
		"alias": "荣成",
		"pinyin": "RongCheng",
		"abbr": "RC",
		"zip": "264300",
		"level": 3
	},
	{
		"code": "371083",
		"parent_code": "371000",
		"name": "乳山市",
		"alias": "乳山",
		"pinyin": "RuShan",
		"abbr": "RS",
		"zip": "264500",
		"level": 3
	},
	{
		"code": "371100",
		"parent_code": "370000",
		"name": "日照市",
		"alias": "日照",
		"pinyin": "RiZhao",
		"abbr": "RZ",
		"zip": "276800",
		"level": 2
	},
	{
		"code": "371102",
		"parent_code": "371100",
		"name": "东港区",
		"alias": "东港区",
		"pinyin": "DongGangQu",
		"abbr": "DGQ",
		"zip": "276800",
		"level": 3
	},
	{
		"code": "371103",
		"parent_code": "371100",
		"name": "岚山区",
		"alias": "岚山区",
		"pinyin": "LanShanQu",
		"abbr": "LSQ",
		"zip": "276808",
		"level": 3
	},
	{
		"code": "371121",
		"parent_code": "371100",
		"name": "五莲县",
		"alias": "五莲",
		"pinyin": "WuLian",
		"abbr": "WL",
		"zip": "262300",
		"level": 3
	},
	{
		"code": "371122",
		"parent_code": "371100",
		"name": "莒县",
		"alias": "莒县",
		"pinyin": "JuXian",
		"abbr": "JX",
		"zip": "276500",
		"level": 3
	},
	{
		"code": "371200",
		"parent_code": "370000",
		"name": "莱芜市",
		"alias": "莱芜",
		"pinyin": "LaiWu",
		"abbr": "LW",
		"zip": "271100",
		"level": 2
	},
	{
		"code": "371202",
		"parent_code": "371200",
		"name": "莱城区",
		"alias": "莱城区",
		"pinyin": "LaiChengQu",
		"abbr": "LCQ",
		"zip": "271100",
		"level": 3
	},
	{
		"code": "371203",
		"parent_code": "371200",
		"name": "钢城区",
		"alias": "钢城区",
		"pinyin": "GangChengQu",
		"abbr": "GCQ",
		"zip": "271100",
		"level": 3
	},
	{
		"code": "371300",
		"parent_code": "370000",
		"name": "临沂市",
		"alias": "临沂",
		"pinyin": "LinYi",
		"abbr": "LY",
		"zip": "276000",
		"level": 2
	},
	{
		"code": "371302",
		"parent_code": "371300",
		"name": "兰山区",
		"alias": "兰山区",
		"pinyin": "LanShanQu",
		"abbr": "LSQ",
		"zip": "276002",
		"level": 3
	},
	{
		"code": "371311",
		"parent_code": "371300",
		"name": "罗庄区",
		"alias": "罗庄区",
		"pinyin": "LuoZhuangQu",
		"abbr": "LZQ",
		"zip": "276022",
		"level": 3
	},
	{
		"code": "371312",
		"parent_code": "371300",
		"name": "河东区",
		"alias": "河东区",
		"pinyin": "HeDongQu",
		"abbr": "HDQ",
		"zip": "276034",
		"level": 3
	},
	{
		"code": "371321",
		"parent_code": "371300",
		"name": "沂南县",
		"alias": "沂南",
		"pinyin": "YiNan",
		"abbr": "YN",
		"zip": "276300",
		"level": 3
	},
	{
		"code": "371322",
		"parent_code": "371300",
		"name": "郯城县",
		"alias": "郯城",
		"pinyin": "TanCheng",
		"abbr": "TC",
		"zip": "276100",
		"level": 3
	},
	{
		"code": "371323",
		"parent_code": "371300",
		"name": "沂水县",
		"alias": "沂水",
		"pinyin": "YiShui",
		"abbr": "YS",
		"zip": "276400",
		"level": 3
	},
	{
		"code": "371324",
		"parent_code": "371300",
		"name": "苍山县",
		"alias": "苍山",
		"pinyin": "CangShan",
		"abbr": "CS",
		"zip": "277700",
		"level": 3
	},
	{
		"code": "371325",
		"parent_code": "371300",
		"name": "费县",
		"alias": "费县",
		"pinyin": "FeiXian",
		"abbr": "FX",
		"zip": "273400",
		"level": 3
	},
	{
		"code": "371326",
		"parent_code": "371300",
		"name": "平邑县",
		"alias": "平邑",
		"pinyin": "PingYi",
		"abbr": "PY",
		"zip": "273300",
		"level": 3
	},
	{
		"code": "371327",
		"parent_code": "371300",
		"name": "莒南县",
		"alias": "莒南",
		"pinyin": "JuNan",
		"abbr": "JN",
		"zip": "276600",
		"level": 3
	},
	{
		"code": "371328",
		"parent_code": "371300",
		"name": "蒙阴县",
		"alias": "蒙阴",
		"pinyin": "MengYin",
		"abbr": "MY",
		"zip": "276200",
		"level": 3
	},
	{
		"code": "371329",
		"parent_code": "371300",
		"name": "临沭县",
		"alias": "临沭",
		"pinyin": "LinShu",
		"abbr": "LS",
		"zip": "276700",
		"level": 3
	},
	{
		"code": "371400",
		"parent_code": "370000",
		"name": "德州市",
		"alias": "德州",
		"pinyin": "DeZhou",
		"abbr": "DZ",
		"zip": "253000",
		"level": 2
	},
	{
		"code": "371402",
		"parent_code": "371400",
		"name": "德城区",
		"alias": "德城区",
		"pinyin": "DeChengQu",
		"abbr": "DCQ",
		"zip": "253011",
		"level": 3
	},
	{
		"code": "371421",
		"parent_code": "371400",
		"name": "陵县",
		"alias": "陵县",
		"pinyin": "LingXian",
		"abbr": "LX",
		"zip": "253500",
		"level": 3
	},
	{
		"code": "371422",
		"parent_code": "371400",
		"name": "宁津县",
		"alias": "宁津",
		"pinyin": "NingJin",
		"abbr": "NJ",
		"zip": "253400",
		"level": 3
	},
	{
		"code": "371423",
		"parent_code": "371400",
		"name": "庆云县",
		"alias": "庆云",
		"pinyin": "QingYun",
		"abbr": "QY",
		"zip": "253700",
		"level": 3
	},
	{
		"code": "371424",
		"parent_code": "371400",
		"name": "临邑县",
		"alias": "临邑",
		"pinyin": "LinYi",
		"abbr": "LY",
		"zip": "251500",
		"level": 3
	},
	{
		"code": "371425",
		"parent_code": "371400",
		"name": "齐河县",
		"alias": "齐河",
		"pinyin": "QiHe",
		"abbr": "QH",
		"zip": "251100",
		"level": 3
	},
	{
		"code": "371426",
		"parent_code": "371400",
		"name": "平原县",
		"alias": "平原",
		"pinyin": "PingYuan",
		"abbr": "PY",
		"zip": "253121",
		"level": 3
	},
	{
		"code": "371427",
		"parent_code": "371400",
		"name": "夏津县",
		"alias": "夏津",
		"pinyin": "XiaJin",
		"abbr": "XJ",
		"zip": "253200",
		"level": 3
	},
	{
		"code": "371428",
		"parent_code": "371400",
		"name": "武城县",
		"alias": "武城",
		"pinyin": "WuCheng",
		"abbr": "WC",
		"zip": "253300",
		"level": 3
	},
	{
		"code": "371481",
		"parent_code": "371400",
		"name": "乐陵市",
		"alias": "乐陵",
		"pinyin": "LeLing",
		"abbr": "LL",
		"zip": "253600",
		"level": 3
	},
	{
		"code": "371482",
		"parent_code": "371400",
		"name": "禹城市",
		"alias": "禹城",
		"pinyin": "YuCheng",
		"abbr": "YC",
		"zip": "251200",
		"level": 3
	},
	{
		"code": "371500",
		"parent_code": "370000",
		"name": "聊城市",
		"alias": "聊城",
		"pinyin": "LiaoCheng",
		"abbr": "LC",
		"zip": "252000",
		"level": 2
	},
	{
		"code": "371502",
		"parent_code": "371500",
		"name": "东昌府区",
		"alias": "东昌府区",
		"pinyin": "DongChangFuQu",
		"abbr": "DCFQ",
		"zip": "252000",
		"level": 3
	},
	{
		"code": "371521",
		"parent_code": "371500",
		"name": "阳谷县",
		"alias": "阳谷",
		"pinyin": "YangGu",
		"abbr": "YG",
		"zip": "252300",
		"level": 3
	},
	{
		"code": "371522",
		"parent_code": "371500",
		"name": "莘县",
		"alias": "莘县",
		"pinyin": "ShenXian",
		"abbr": "SX",
		"zip": "252400",
		"level": 3
	},
	{
		"code": "371523",
		"parent_code": "371500",
		"name": "茌平县",
		"alias": "茌平",
		"pinyin": "ChiPing",
		"abbr": "CP",
		"zip": "252100",
		"level": 3
	},
	{
		"code": "371524",
		"parent_code": "371500",
		"name": "东阿县",
		"alias": "东阿",
		"pinyin": "DongA",
		"abbr": "DA",
		"zip": "252200",
		"level": 3
	},
	{
		"code": "371525",
		"parent_code": "371500",
		"name": "冠县",
		"alias": "冠县",
		"pinyin": "GuanXian",
		"abbr": "GX",
		"zip": "252500",
		"level": 3
	},
	{
		"code": "371526",
		"parent_code": "371500",
		"name": "高唐县",
		"alias": "高唐",
		"pinyin": "GaoTang",
		"abbr": "GT",
		"zip": "252800",
		"level": 3
	},
	{
		"code": "371581",
		"parent_code": "371500",
		"name": "临清市",
		"alias": "临清",
		"pinyin": "LinQing",
		"abbr": "LQ",
		"zip": "252600",
		"level": 3
	},
	{
		"code": "371600",
		"parent_code": "370000",
		"name": "滨州市",
		"alias": "滨州",
		"pinyin": "BinZhou",
		"abbr": "BZ",
		"zip": "256600",
		"level": 2
	},
	{
		"code": "371602",
		"parent_code": "371600",
		"name": "滨城区",
		"alias": "滨城区",
		"pinyin": "BinChengQu",
		"abbr": "BCQ",
		"zip": "256600",
		"level": 3
	},
	{
		"code": "371621",
		"parent_code": "371600",
		"name": "惠民县",
		"alias": "惠民",
		"pinyin": "HuiMin",
		"abbr": "HM",
		"zip": "257100",
		"level": 3
	},
	{
		"code": "371622",
		"parent_code": "371600",
		"name": "阳信县",
		"alias": "阳信",
		"pinyin": "YangXin",
		"abbr": "YX",
		"zip": "251800",
		"level": 3
	},
	{
		"code": "371623",
		"parent_code": "371600",
		"name": "无棣县",
		"alias": "无棣",
		"pinyin": "WuDi",
		"abbr": "WD",
		"zip": "251900",
		"level": 3
	},
	{
		"code": "371624",
		"parent_code": "371600",
		"name": "沾化县",
		"alias": "沾化",
		"pinyin": "ZhanHua",
		"abbr": "ZH",
		"zip": "256800",
		"level": 3
	},
	{
		"code": "371625",
		"parent_code": "371600",
		"name": "博兴县",
		"alias": "博兴",
		"pinyin": "BoXing",
		"abbr": "BX",
		"zip": "256500",
		"level": 3
	},
	{
		"code": "371626",
		"parent_code": "371600",
		"name": "邹平县",
		"alias": "邹平",
		"pinyin": "ZouPing",
		"abbr": "ZP",
		"zip": "256200",
		"level": 3
	},
	{
		"code": "371700",
		"parent_code": "370000",
		"name": "菏泽市",
		"alias": "菏泽",
		"pinyin": "HeZe",
		"abbr": "HZ",
		"zip": "274000",
		"level": 2
	},
	{
		"code": "371702",
		"parent_code": "371700",
		"name": "牡丹区",
		"alias": "牡丹区",
		"pinyin": "MuDanQu",
		"abbr": "MDQ",
		"zip": "274009",
		"level": 3
	},
	{
		"code": "371721",
		"parent_code": "371700",
		"name": "曹县",
		"alias": "曹县",
		"pinyin": "CaoXian",
		"abbr": "CX",
		"zip": "274400",
		"level": 3
	},
	{
		"code": "371722",
		"parent_code": "371700",
		"name": "单县",
		"alias": "单县",
		"pinyin": "DanXian",
		"abbr": "DX",
		"zip": "274300",
		"level": 3
	},
	{
		"code": "371723",
		"parent_code": "371700",
		"name": "成武县",
		"alias": "成武",
		"pinyin": "ChengWu",
		"abbr": "CW",
		"zip": "274200",
		"level": 3
	},
	{
		"code": "371724",
		"parent_code": "371700",
		"name": "巨野县",
		"alias": "巨野",
		"pinyin": "JuYe",
		"abbr": "JY",
		"zip": "274900",
		"level": 3
	},
	{
		"code": "371725",
		"parent_code": "371700",
		"name": "郓城县",
		"alias": "郓城",
		"pinyin": "YunCheng",
		"abbr": "YC",
		"zip": "274700",
		"level": 3
	},
	{
		"code": "371726",
		"parent_code": "371700",
		"name": "鄄城县",
		"alias": "鄄城",
		"pinyin": "JuanCheng",
		"abbr": "JC",
		"zip": "274600",
		"level": 3
	},
	{
		"code": "371727",
		"parent_code": "371700",
		"name": "定陶县",
		"alias": "定陶",
		"pinyin": "DingTao",
		"abbr": "DT",
		"zip": "274100",
		"level": 3
	},
	{
		"code": "371728",
		"parent_code": "371700",
		"name": "东明县",
		"alias": "东明",
		"pinyin": "DongMing",
		"abbr": "DM",
		"zip": "274500",
		"level": 3
	},
	{
		"code": "410000",
		"parent_code": null,
		"name": "河南省",
		"alias": "河南",
		"pinyin": "HeNan",
		"abbr": "HN",
		"zip": "450000",
		"level": 1
	},
	{
		"code": "410100",
		"parent_code": "410000",
		"name": "郑州市",
		"alias": "郑州",
		"pinyin": "ZhengZhou",
		"abbr": "ZZ",
		"zip": "450000",
		"level": 2
	},
	{
		"code": "410102",
		"parent_code": "410100",
		"name": "中原区",
		"alias": "中原区",
		"pinyin": "ZhongYuanQu",
		"abbr": "ZYQ",
		"zip": "450007",
		"level": 3
	},
	{
		"code": "410103",
		"parent_code": "410100",
		"name": "二七区",
		"alias": "二七区",
		"pinyin": "ErQiQu",
		"abbr": "EQQ",
		"zip": "450000",
		"level": 3
	},
	{
		"code": "410104",
		"parent_code": "410100",
		"name": "管城回族区",
		"alias": "管城回族区",
		"pinyin": "GuanChengHuiZuQu",
		"abbr": "GCHZQ",
		"zip": "450000",
		"level": 3
	},
	{
		"code": "410105",
		"parent_code": "410100",
		"name": "金水区",
		"alias": "金水区",
		"pinyin": "JinShuiQu",
		"abbr": "JSQ",
		"zip": "450003",
		"level": 3
	},
	{
		"code": "410106",
		"parent_code": "410100",
		"name": "上街区",
		"alias": "上街区",
		"pinyin": "ShangJieQu",
		"abbr": "SJQ",
		"zip": "450041",
		"level": 3
	},
	{
		"code": "410108",
		"parent_code": "410100",
		"name": "惠济区",
		"alias": "惠济区",
		"pinyin": "HuiJiQu",
		"abbr": "HJQ",
		"zip": "450053",
		"level": 3
	},
	{
		"code": "410122",
		"parent_code": "410100",
		"name": "中牟县",
		"alias": "中牟",
		"pinyin": "ZhongMou",
		"abbr": "ZM",
		"zip": "451450",
		"level": 3
	},
	{
		"code": "410181",
		"parent_code": "410100",
		"name": "巩义市",
		"alias": "巩义",
		"pinyin": "GongYi",
		"abbr": "GY",
		"zip": "451200",
		"level": 3
	},
	{
		"code": "410182",
		"parent_code": "410100",
		"name": "荥阳市",
		"alias": "荥阳",
		"pinyin": "XingYang",
		"abbr": "XY",
		"zip": "450100",
		"level": 3
	},
	{
		"code": "410183",
		"parent_code": "410100",
		"name": "新密市",
		"alias": "新密",
		"pinyin": "XinMi",
		"abbr": "XM",
		"zip": "452300",
		"level": 3
	},
	{
		"code": "410184",
		"parent_code": "410100",
		"name": "新郑市",
		"alias": "新郑",
		"pinyin": "XinZheng",
		"abbr": "XZ",
		"zip": "451150",
		"level": 3
	},
	{
		"code": "410185",
		"parent_code": "410100",
		"name": "登封市",
		"alias": "登封",
		"pinyin": "DengFeng",
		"abbr": "DF",
		"zip": "452470",
		"level": 3
	},
	{
		"code": "410200",
		"parent_code": "410000",
		"name": "开封市",
		"alias": "开封",
		"pinyin": "KaiFeng",
		"abbr": "KF",
		"zip": "475000",
		"level": 2
	},
	{
		"code": "410202",
		"parent_code": "410200",
		"name": "龙亭区",
		"alias": "龙亭区",
		"pinyin": "LongTingQu",
		"abbr": "LTQ",
		"zip": "475100",
		"level": 3
	},
	{
		"code": "410203",
		"parent_code": "410200",
		"name": "顺河回族区",
		"alias": "顺河回族区",
		"pinyin": "ShunHeHuiZuQu",
		"abbr": "SHHZQ",
		"zip": "475000",
		"level": 3
	},
	{
		"code": "410204",
		"parent_code": "410200",
		"name": "鼓楼区",
		"alias": "鼓楼区",
		"pinyin": "GuLouQu",
		"abbr": "GLQ",
		"zip": "475000",
		"level": 3
	},
	{
		"code": "410205",
		"parent_code": "410200",
		"name": "禹王台区",
		"alias": "禹王台区",
		"pinyin": "YuWangTaiQu",
		"abbr": "YWTQ",
		"zip": "475003",
		"level": 3
	},
	{
		"code": "410211",
		"parent_code": "410200",
		"name": "金明区",
		"alias": "金明区",
		"pinyin": "JinMingQu",
		"abbr": "JMQ",
		"zip": "475002",
		"level": 3
	},
	{
		"code": "410221",
		"parent_code": "410200",
		"name": "杞县",
		"alias": "杞县",
		"pinyin": "QiXian",
		"abbr": "QX",
		"zip": "475200",
		"level": 3
	},
	{
		"code": "410222",
		"parent_code": "410200",
		"name": "通许县",
		"alias": "通许",
		"pinyin": "TongXu",
		"abbr": "TX",
		"zip": "475400",
		"level": 3
	},
	{
		"code": "410223",
		"parent_code": "410200",
		"name": "尉氏县",
		"alias": "尉氏",
		"pinyin": "WeiShi",
		"abbr": "WS",
		"zip": "475500",
		"level": 3
	},
	{
		"code": "410224",
		"parent_code": "410200",
		"name": "开封县",
		"alias": "开封",
		"pinyin": "KaiFeng",
		"abbr": "KF",
		"zip": "475100",
		"level": 3
	},
	{
		"code": "410225",
		"parent_code": "410200",
		"name": "兰考县",
		"alias": "兰考",
		"pinyin": "LanKao",
		"abbr": "LK",
		"zip": "475300",
		"level": 3
	},
	{
		"code": "410300",
		"parent_code": "410000",
		"name": "洛阳市",
		"alias": "洛阳",
		"pinyin": "LuoYang",
		"abbr": "LY",
		"zip": "471000",
		"level": 2
	},
	{
		"code": "410302",
		"parent_code": "410300",
		"name": "老城区",
		"alias": "老城区",
		"pinyin": "LaoChengQu",
		"abbr": "LCQ",
		"zip": "471002",
		"level": 3
	},
	{
		"code": "410303",
		"parent_code": "410300",
		"name": "西工区",
		"alias": "西工区",
		"pinyin": "XiGongQu",
		"abbr": "XGQ",
		"zip": "471000",
		"level": 3
	},
	{
		"code": "410304",
		"parent_code": "410300",
		"name": "瀍河回族区",
		"alias": "瀍河回族区",
		"pinyin": "ChanHeHuiZuQu",
		"abbr": "CHHZQ",
		"zip": "471002",
		"level": 3
	},
	{
		"code": "410305",
		"parent_code": "410300",
		"name": "涧西区",
		"alias": "涧西区",
		"pinyin": "JianXiQu",
		"abbr": "JXQ",
		"zip": "471003",
		"level": 3
	},
	{
		"code": "410306",
		"parent_code": "410300",
		"name": "吉利区",
		"alias": "吉利区",
		"pinyin": "JiLiQu",
		"abbr": "JLQ",
		"zip": "471012",
		"level": 3
	},
	{
		"code": "410311",
		"parent_code": "410300",
		"name": "洛龙区",
		"alias": "洛龙区",
		"pinyin": "LuoLongQu",
		"abbr": "LLQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "410322",
		"parent_code": "410300",
		"name": "孟津县",
		"alias": "孟津",
		"pinyin": "MengJin",
		"abbr": "MJ",
		"zip": "471100",
		"level": 3
	},
	{
		"code": "410323",
		"parent_code": "410300",
		"name": "新安县",
		"alias": "新安",
		"pinyin": "XinAn",
		"abbr": "XA",
		"zip": "471800",
		"level": 3
	},
	{
		"code": "410324",
		"parent_code": "410300",
		"name": "栾川县",
		"alias": "栾川",
		"pinyin": "LuanChuan",
		"abbr": "LC",
		"zip": "471500",
		"level": 3
	},
	{
		"code": "410325",
		"parent_code": "410300",
		"name": "嵩县",
		"alias": "嵩县",
		"pinyin": "SongXian",
		"abbr": "SX",
		"zip": "471400",
		"level": 3
	},
	{
		"code": "410326",
		"parent_code": "410300",
		"name": "汝阳县",
		"alias": "汝阳",
		"pinyin": "RuYang",
		"abbr": "RY",
		"zip": "471200",
		"level": 3
	},
	{
		"code": "410327",
		"parent_code": "410300",
		"name": "宜阳县",
		"alias": "宜阳",
		"pinyin": "YiYang",
		"abbr": "YY",
		"zip": "471600",
		"level": 3
	},
	{
		"code": "410328",
		"parent_code": "410300",
		"name": "洛宁县",
		"alias": "洛宁",
		"pinyin": "LuoNing",
		"abbr": "LN",
		"zip": "471700",
		"level": 3
	},
	{
		"code": "410329",
		"parent_code": "410300",
		"name": "伊川县",
		"alias": "伊川",
		"pinyin": "YiChuan",
		"abbr": "YC",
		"zip": "471300",
		"level": 3
	},
	{
		"code": "410381",
		"parent_code": "410300",
		"name": "偃师市",
		"alias": "偃师",
		"pinyin": "YanShi",
		"abbr": "YS",
		"zip": "471900",
		"level": 3
	},
	{
		"code": "410400",
		"parent_code": "410000",
		"name": "平顶山市",
		"alias": "平顶山",
		"pinyin": "PingDingShan",
		"abbr": "PDS",
		"zip": "467000",
		"level": 2
	},
	{
		"code": "410402",
		"parent_code": "410400",
		"name": "新华区",
		"alias": "新华区",
		"pinyin": "XinHuaQu",
		"abbr": "XHQ",
		"zip": "467002",
		"level": 3
	},
	{
		"code": "410403",
		"parent_code": "410400",
		"name": "卫东区",
		"alias": "卫东区",
		"pinyin": "WeiDongQu",
		"abbr": "WDQ",
		"zip": "467021",
		"level": 3
	},
	{
		"code": "410404",
		"parent_code": "410400",
		"name": "石龙区",
		"alias": "石龙区",
		"pinyin": "ShiLongQu",
		"abbr": "SLQ",
		"zip": "467045",
		"level": 3
	},
	{
		"code": "410411",
		"parent_code": "410400",
		"name": "湛河区",
		"alias": "湛河区",
		"pinyin": "ZhanHeQu",
		"abbr": "ZHQ",
		"zip": "467000",
		"level": 3
	},
	{
		"code": "410421",
		"parent_code": "410400",
		"name": "宝丰县",
		"alias": "宝丰",
		"pinyin": "BaoFeng",
		"abbr": "BF",
		"zip": "467400",
		"level": 3
	},
	{
		"code": "410422",
		"parent_code": "410400",
		"name": "叶县",
		"alias": "叶县",
		"pinyin": "YeXian",
		"abbr": "YX",
		"zip": "467200",
		"level": 3
	},
	{
		"code": "410423",
		"parent_code": "410400",
		"name": "鲁山县",
		"alias": "鲁山",
		"pinyin": "LuShan",
		"abbr": "LS",
		"zip": "467300",
		"level": 3
	},
	{
		"code": "410425",
		"parent_code": "410400",
		"name": "郏县",
		"alias": "郏县",
		"pinyin": "JiaXian",
		"abbr": "JX",
		"zip": "467100",
		"level": 3
	},
	{
		"code": "410481",
		"parent_code": "410400",
		"name": "舞钢市",
		"alias": "舞钢",
		"pinyin": "WuGang",
		"abbr": "WG",
		"zip": "462500",
		"level": 3
	},
	{
		"code": "410482",
		"parent_code": "410400",
		"name": "汝州市",
		"alias": "汝州",
		"pinyin": "RuZhou",
		"abbr": "RZ",
		"zip": "467500",
		"level": 3
	},
	{
		"code": "410500",
		"parent_code": "410000",
		"name": "安阳市",
		"alias": "安阳",
		"pinyin": "AnYang",
		"abbr": "AY",
		"zip": "455000",
		"level": 2
	},
	{
		"code": "410502",
		"parent_code": "410500",
		"name": "文峰区",
		"alias": "文峰区",
		"pinyin": "WenFengQu",
		"abbr": "WFQ",
		"zip": "455000",
		"level": 3
	},
	{
		"code": "410503",
		"parent_code": "410500",
		"name": "北关区",
		"alias": "北关区",
		"pinyin": "BeiGuanQu",
		"abbr": "BGQ",
		"zip": "455001",
		"level": 3
	},
	{
		"code": "410505",
		"parent_code": "410500",
		"name": "殷都区",
		"alias": "殷都区",
		"pinyin": "YinDouQu",
		"abbr": "YDQ",
		"zip": "455004",
		"level": 3
	},
	{
		"code": "410506",
		"parent_code": "410500",
		"name": "龙安区",
		"alias": "龙安区",
		"pinyin": "LongAnQu",
		"abbr": "LAQ",
		"zip": "455001",
		"level": 3
	},
	{
		"code": "410522",
		"parent_code": "410500",
		"name": "安阳县",
		"alias": "安阳",
		"pinyin": "AnYang",
		"abbr": "AY",
		"zip": "455100",
		"level": 3
	},
	{
		"code": "410523",
		"parent_code": "410500",
		"name": "汤阴县",
		"alias": "汤阴",
		"pinyin": "TangYin",
		"abbr": "TY",
		"zip": "456150",
		"level": 3
	},
	{
		"code": "410526",
		"parent_code": "410500",
		"name": "滑县",
		"alias": "滑县",
		"pinyin": "HuaXian",
		"abbr": "HX",
		"zip": "456400",
		"level": 3
	},
	{
		"code": "410527",
		"parent_code": "410500",
		"name": "内黄县",
		"alias": "内黄",
		"pinyin": "NeiHuang",
		"abbr": "NH",
		"zip": "456300",
		"level": 3
	},
	{
		"code": "410581",
		"parent_code": "410500",
		"name": "林州市",
		"alias": "林州",
		"pinyin": "LinZhou",
		"abbr": "LZ",
		"zip": "456500",
		"level": 3
	},
	{
		"code": "410600",
		"parent_code": "410000",
		"name": "鹤壁市",
		"alias": "鹤壁",
		"pinyin": "HeBi",
		"abbr": "HB",
		"zip": "458000",
		"level": 2
	},
	{
		"code": "410602",
		"parent_code": "410600",
		"name": "鹤山区",
		"alias": "鹤山区",
		"pinyin": "HeShanQu",
		"abbr": "HSQ",
		"zip": "458010",
		"level": 3
	},
	{
		"code": "410603",
		"parent_code": "410600",
		"name": "山城区",
		"alias": "山城区",
		"pinyin": "ShanChengQu",
		"abbr": "SCQ",
		"zip": "458000",
		"level": 3
	},
	{
		"code": "410611",
		"parent_code": "410600",
		"name": "淇滨区",
		"alias": "淇滨区",
		"pinyin": "QiBinQu",
		"abbr": "QBQ",
		"zip": "458030",
		"level": 3
	},
	{
		"code": "410621",
		"parent_code": "410600",
		"name": "浚县",
		"alias": "浚县",
		"pinyin": "JunXian",
		"abbr": "JX",
		"zip": "456250",
		"level": 3
	},
	{
		"code": "410622",
		"parent_code": "410600",
		"name": "淇县",
		"alias": "淇县",
		"pinyin": "QiXian",
		"abbr": "QX",
		"zip": "456750",
		"level": 3
	},
	{
		"code": "410700",
		"parent_code": "410000",
		"name": "新乡市",
		"alias": "新乡",
		"pinyin": "XinXiang",
		"abbr": "XX",
		"zip": "453000",
		"level": 2
	},
	{
		"code": "410702",
		"parent_code": "410700",
		"name": "红旗区",
		"alias": "红旗区",
		"pinyin": "HongQiQu",
		"abbr": "HQQ",
		"zip": "453000",
		"level": 3
	},
	{
		"code": "410703",
		"parent_code": "410700",
		"name": "卫滨区",
		"alias": "卫滨区",
		"pinyin": "WeiBinQu",
		"abbr": "WBQ",
		"zip": "453000",
		"level": 3
	},
	{
		"code": "410704",
		"parent_code": "410700",
		"name": "凤泉区",
		"alias": "凤泉区",
		"pinyin": "FengQuanQu",
		"abbr": "FQQ",
		"zip": "453011",
		"level": 3
	},
	{
		"code": "410711",
		"parent_code": "410700",
		"name": "牧野区",
		"alias": "牧野区",
		"pinyin": "MuYeQu",
		"abbr": "MYQ",
		"zip": "453002",
		"level": 3
	},
	{
		"code": "410721",
		"parent_code": "410700",
		"name": "新乡县",
		"alias": "新乡",
		"pinyin": "XinXiang",
		"abbr": "XX",
		"zip": "453700",
		"level": 3
	},
	{
		"code": "410724",
		"parent_code": "410700",
		"name": "获嘉县",
		"alias": "获嘉",
		"pinyin": "HuoJia",
		"abbr": "HJ",
		"zip": "453800",
		"level": 3
	},
	{
		"code": "410725",
		"parent_code": "410700",
		"name": "原阳县",
		"alias": "原阳",
		"pinyin": "YuanYang",
		"abbr": "YY",
		"zip": "453500",
		"level": 3
	},
	{
		"code": "410726",
		"parent_code": "410700",
		"name": "延津县",
		"alias": "延津",
		"pinyin": "YanJin",
		"abbr": "YJ",
		"zip": "453200",
		"level": 3
	},
	{
		"code": "410727",
		"parent_code": "410700",
		"name": "封丘县",
		"alias": "封丘",
		"pinyin": "FengQiu",
		"abbr": "FQ",
		"zip": "453300",
		"level": 3
	},
	{
		"code": "410728",
		"parent_code": "410700",
		"name": "长垣县",
		"alias": "长垣",
		"pinyin": "ZhangYuan",
		"abbr": "ZY",
		"zip": "453400",
		"level": 3
	},
	{
		"code": "410781",
		"parent_code": "410700",
		"name": "卫辉市",
		"alias": "卫辉",
		"pinyin": "WeiHui",
		"abbr": "WH",
		"zip": "453100",
		"level": 3
	},
	{
		"code": "410782",
		"parent_code": "410700",
		"name": "辉县市",
		"alias": "辉县",
		"pinyin": "HuiXian",
		"abbr": "HX",
		"zip": "453600",
		"level": 3
	},
	{
		"code": "410800",
		"parent_code": "410000",
		"name": "焦作市",
		"alias": "焦作",
		"pinyin": "JiaoZuo",
		"abbr": "JZ",
		"zip": "454000",
		"level": 2
	},
	{
		"code": "410802",
		"parent_code": "410800",
		"name": "解放区",
		"alias": "解放区",
		"pinyin": "JieFangQu",
		"abbr": "JFQ",
		"zip": "454000",
		"level": 3
	},
	{
		"code": "410803",
		"parent_code": "410800",
		"name": "中站区",
		"alias": "中站区",
		"pinyin": "ZhongZhanQu",
		"abbr": "ZZQ",
		"zip": "454191",
		"level": 3
	},
	{
		"code": "410804",
		"parent_code": "410800",
		"name": "马村区",
		"alias": "马村区",
		"pinyin": "MaCunQu",
		"abbr": "MCQ",
		"zip": "454171",
		"level": 3
	},
	{
		"code": "410811",
		"parent_code": "410800",
		"name": "山阳区",
		"alias": "山阳区",
		"pinyin": "ShanYangQu",
		"abbr": "SYQ",
		"zip": "454002",
		"level": 3
	},
	{
		"code": "410821",
		"parent_code": "410800",
		"name": "修武县",
		"alias": "修武",
		"pinyin": "XiuWu",
		"abbr": "XW",
		"zip": "454350",
		"level": 3
	},
	{
		"code": "410822",
		"parent_code": "410800",
		"name": "博爱县",
		"alias": "博爱",
		"pinyin": "BoAi",
		"abbr": "BA",
		"zip": "454450",
		"level": 3
	},
	{
		"code": "410823",
		"parent_code": "410800",
		"name": "武陟县",
		"alias": "武陟",
		"pinyin": "WuZhi",
		"abbr": "WZ",
		"zip": "454950",
		"level": 3
	},
	{
		"code": "410825",
		"parent_code": "410800",
		"name": "温县",
		"alias": "温县",
		"pinyin": "WenXian",
		"abbr": "WX",
		"zip": "454850",
		"level": 3
	},
	{
		"code": "410882",
		"parent_code": "410800",
		"name": "沁阳市",
		"alias": "沁阳",
		"pinyin": "QinYang",
		"abbr": "QY",
		"zip": "454550",
		"level": 3
	},
	{
		"code": "410883",
		"parent_code": "410800",
		"name": "孟州市",
		"alias": "孟州",
		"pinyin": "MengZhou",
		"abbr": "MZ",
		"zip": "454750",
		"level": 3
	},
	{
		"code": "410900",
		"parent_code": "410000",
		"name": "濮阳市",
		"alias": "濮阳",
		"pinyin": "PuYang",
		"abbr": "PY",
		"zip": "457000",
		"level": 2
	},
	{
		"code": "410902",
		"parent_code": "410900",
		"name": "华龙区",
		"alias": "华龙区",
		"pinyin": "HuaLongQu",
		"abbr": "HLQ",
		"zip": "457001",
		"level": 3
	},
	{
		"code": "410922",
		"parent_code": "410900",
		"name": "清丰县",
		"alias": "清丰",
		"pinyin": "QingFeng",
		"abbr": "QF",
		"zip": "457300",
		"level": 3
	},
	{
		"code": "410923",
		"parent_code": "410900",
		"name": "南乐县",
		"alias": "南乐",
		"pinyin": "NanLe",
		"abbr": "NL",
		"zip": "457400",
		"level": 3
	},
	{
		"code": "410926",
		"parent_code": "410900",
		"name": "范县",
		"alias": "范县",
		"pinyin": "FanXian",
		"abbr": "FX",
		"zip": "457500",
		"level": 3
	},
	{
		"code": "410927",
		"parent_code": "410900",
		"name": "台前县",
		"alias": "台前",
		"pinyin": "TaiQian",
		"abbr": "TQ",
		"zip": "457600",
		"level": 3
	},
	{
		"code": "410928",
		"parent_code": "410900",
		"name": "濮阳县",
		"alias": "濮阳",
		"pinyin": "PuYang",
		"abbr": "PY",
		"zip": "457100",
		"level": 3
	},
	{
		"code": "411000",
		"parent_code": "410000",
		"name": "许昌市",
		"alias": "许昌",
		"pinyin": "XuChang",
		"abbr": "XC",
		"zip": "461000",
		"level": 2
	},
	{
		"code": "411002",
		"parent_code": "411000",
		"name": "魏都区",
		"alias": "魏都区",
		"pinyin": "WeiDouQu",
		"abbr": "WDQ",
		"zip": "461000",
		"level": 3
	},
	{
		"code": "411023",
		"parent_code": "411000",
		"name": "许昌县",
		"alias": "许昌",
		"pinyin": "XuChang",
		"abbr": "XC",
		"zip": "461100",
		"level": 3
	},
	{
		"code": "411024",
		"parent_code": "411000",
		"name": "鄢陵县",
		"alias": "鄢陵",
		"pinyin": "YanLing",
		"abbr": "YL",
		"zip": "461200",
		"level": 3
	},
	{
		"code": "411025",
		"parent_code": "411000",
		"name": "襄城县",
		"alias": "襄城",
		"pinyin": "XiangCheng",
		"abbr": "XC",
		"zip": "461700",
		"level": 3
	},
	{
		"code": "411081",
		"parent_code": "411000",
		"name": "禹州市",
		"alias": "禹州",
		"pinyin": "YuZhou",
		"abbr": "YZ",
		"zip": "461670",
		"level": 3
	},
	{
		"code": "411082",
		"parent_code": "411000",
		"name": "长葛市",
		"alias": "长葛",
		"pinyin": "ZhangGe",
		"abbr": "ZG",
		"zip": "461500",
		"level": 3
	},
	{
		"code": "411100",
		"parent_code": "411100",
		"name": "漯河市",
		"alias": "漯河",
		"pinyin": "LuoHe",
		"abbr": "LH",
		"zip": "462000",
		"level": 3
	},
	{
		"code": "411101",
		"parent_code": "411100",
		"name": "市辖区",
		"alias": "市辖区",
		"pinyin": "ShiXiaQu",
		"abbr": "SXQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "411102",
		"parent_code": "411100",
		"name": "源汇区",
		"alias": "源汇区",
		"pinyin": "YuanHuiQu",
		"abbr": "YHQ",
		"zip": "462000",
		"level": 3
	},
	{
		"code": "411103",
		"parent_code": "411100",
		"name": "郾城区",
		"alias": "郾城区",
		"pinyin": "YanChengQu",
		"abbr": "YCQ",
		"zip": "462300",
		"level": 3
	},
	{
		"code": "411104",
		"parent_code": "411100",
		"name": "召陵区",
		"alias": "召陵区",
		"pinyin": "ZhaoLingQu",
		"abbr": "ZLQ",
		"zip": "462300",
		"level": 3
	},
	{
		"code": "411121",
		"parent_code": "411100",
		"name": "舞阳县",
		"alias": "舞阳",
		"pinyin": "WuYang",
		"abbr": "WY",
		"zip": "462400",
		"level": 3
	},
	{
		"code": "411122",
		"parent_code": "411100",
		"name": "临颍县",
		"alias": "临颍",
		"pinyin": "LinYing",
		"abbr": "LY",
		"zip": "462600",
		"level": 3
	},
	{
		"code": "411200",
		"parent_code": "410000",
		"name": "三门峡市",
		"alias": "三门峡",
		"pinyin": "SanMenXia",
		"abbr": "SMX",
		"zip": "472000",
		"level": 2
	},
	{
		"code": "411202",
		"parent_code": "411200",
		"name": "湖滨区",
		"alias": "湖滨区",
		"pinyin": "HuBinQu",
		"abbr": "HBQ",
		"zip": "472000",
		"level": 3
	},
	{
		"code": "411221",
		"parent_code": "411200",
		"name": "渑池县",
		"alias": "渑池",
		"pinyin": "MianChi",
		"abbr": "MC",
		"zip": "472400",
		"level": 3
	},
	{
		"code": "411222",
		"parent_code": "411200",
		"name": "陕县",
		"alias": "陕县",
		"pinyin": "ShanXian",
		"abbr": "SX",
		"zip": "472100",
		"level": 3
	},
	{
		"code": "411224",
		"parent_code": "411200",
		"name": "卢氏县",
		"alias": "卢氏",
		"pinyin": "LuShi",
		"abbr": "LS",
		"zip": "472200",
		"level": 3
	},
	{
		"code": "411281",
		"parent_code": "411200",
		"name": "义马市",
		"alias": "义马",
		"pinyin": "YiMa",
		"abbr": "YM",
		"zip": "472300",
		"level": 3
	},
	{
		"code": "411282",
		"parent_code": "411200",
		"name": "灵宝市",
		"alias": "灵宝",
		"pinyin": "LingBao",
		"abbr": "LB",
		"zip": "472500",
		"level": 3
	},
	{
		"code": "411300",
		"parent_code": "410000",
		"name": "南阳市",
		"alias": "南阳",
		"pinyin": "NanYang",
		"abbr": "NY",
		"zip": "473000",
		"level": 2
	},
	{
		"code": "411302",
		"parent_code": "411300",
		"name": "宛城区",
		"alias": "宛城区",
		"pinyin": "WanChengQu",
		"abbr": "WCQ",
		"zip": "473001",
		"level": 3
	},
	{
		"code": "411303",
		"parent_code": "411300",
		"name": "卧龙区",
		"alias": "卧龙区",
		"pinyin": "WoLongQu",
		"abbr": "WLQ",
		"zip": "473003",
		"level": 3
	},
	{
		"code": "411321",
		"parent_code": "411300",
		"name": "南召县",
		"alias": "南召",
		"pinyin": "NanZhao",
		"abbr": "NZ",
		"zip": "474650",
		"level": 3
	},
	{
		"code": "411322",
		"parent_code": "411300",
		"name": "方城县",
		"alias": "方城",
		"pinyin": "FangCheng",
		"abbr": "FC",
		"zip": "473200",
		"level": 3
	},
	{
		"code": "411323",
		"parent_code": "411300",
		"name": "西峡县",
		"alias": "西峡",
		"pinyin": "XiXia",
		"abbr": "XX",
		"zip": "474550",
		"level": 3
	},
	{
		"code": "411324",
		"parent_code": "411300",
		"name": "镇平县",
		"alias": "镇平",
		"pinyin": "ZhenPing",
		"abbr": "ZP",
		"zip": "474250",
		"level": 3
	},
	{
		"code": "411325",
		"parent_code": "411300",
		"name": "内乡县",
		"alias": "内乡",
		"pinyin": "NeiXiang",
		"abbr": "NX",
		"zip": "474350",
		"level": 3
	},
	{
		"code": "411326",
		"parent_code": "411300",
		"name": "淅川县",
		"alias": "淅川",
		"pinyin": "XiChuan",
		"abbr": "XC",
		"zip": "474450",
		"level": 3
	},
	{
		"code": "411327",
		"parent_code": "411300",
		"name": "社旗县",
		"alias": "社旗",
		"pinyin": "SheQi",
		"abbr": "SQ",
		"zip": "473300",
		"level": 3
	},
	{
		"code": "411328",
		"parent_code": "411300",
		"name": "唐河县",
		"alias": "唐河",
		"pinyin": "TangHe",
		"abbr": "TH",
		"zip": "473400",
		"level": 3
	},
	{
		"code": "411329",
		"parent_code": "411300",
		"name": "新野县",
		"alias": "新野",
		"pinyin": "XinYe",
		"abbr": "XY",
		"zip": "473500",
		"level": 3
	},
	{
		"code": "411330",
		"parent_code": "411300",
		"name": "桐柏县",
		"alias": "桐柏",
		"pinyin": "TongBai",
		"abbr": "TB",
		"zip": "474750",
		"level": 3
	},
	{
		"code": "411381",
		"parent_code": "411300",
		"name": "邓州市",
		"alias": "邓州",
		"pinyin": "DengZhou",
		"abbr": "DZ",
		"zip": "474150",
		"level": 3
	},
	{
		"code": "411400",
		"parent_code": "410000",
		"name": "商丘市",
		"alias": "商丘",
		"pinyin": "ShangQiu",
		"abbr": "SQ",
		"zip": "476000",
		"level": 2
	},
	{
		"code": "411402",
		"parent_code": "411400",
		"name": "梁园区",
		"alias": "梁园区",
		"pinyin": "LiangYuanQu",
		"abbr": "LYQ",
		"zip": "476000",
		"level": 3
	},
	{
		"code": "411403",
		"parent_code": "411400",
		"name": "睢阳区",
		"alias": "睢阳区",
		"pinyin": "SuiYangQu",
		"abbr": "SYQ",
		"zip": "476100",
		"level": 3
	},
	{
		"code": "411421",
		"parent_code": "411400",
		"name": "民权县",
		"alias": "民权",
		"pinyin": "MinQuan",
		"abbr": "MQ",
		"zip": "476800",
		"level": 3
	},
	{
		"code": "411422",
		"parent_code": "411400",
		"name": "睢县",
		"alias": "睢县",
		"pinyin": "SuiXian",
		"abbr": "SX",
		"zip": "476900",
		"level": 3
	},
	{
		"code": "411423",
		"parent_code": "411400",
		"name": "宁陵县",
		"alias": "宁陵",
		"pinyin": "NingLing",
		"abbr": "NL",
		"zip": "476700",
		"level": 3
	},
	{
		"code": "411424",
		"parent_code": "411400",
		"name": "柘城县",
		"alias": "柘城",
		"pinyin": "ZheCheng",
		"abbr": "ZC",
		"zip": "476200",
		"level": 3
	},
	{
		"code": "411425",
		"parent_code": "411400",
		"name": "虞城县",
		"alias": "虞城",
		"pinyin": "YuCheng",
		"abbr": "YC",
		"zip": "476300",
		"level": 3
	},
	{
		"code": "411426",
		"parent_code": "411400",
		"name": "夏邑县",
		"alias": "夏邑",
		"pinyin": "XiaYi",
		"abbr": "XY",
		"zip": "476400",
		"level": 3
	},
	{
		"code": "411481",
		"parent_code": "411400",
		"name": "永城市",
		"alias": "永城",
		"pinyin": "YongCheng",
		"abbr": "YC",
		"zip": "476600",
		"level": 3
	},
	{
		"code": "411500",
		"parent_code": "410000",
		"name": "信阳市",
		"alias": "信阳",
		"pinyin": "XinYang",
		"abbr": "XY",
		"zip": "464000",
		"level": 2
	},
	{
		"code": "411502",
		"parent_code": "411500",
		"name": "浉河区",
		"alias": "浉河区",
		"pinyin": "ShiHeQu",
		"abbr": "SHQ",
		"zip": "464000",
		"level": 3
	},
	{
		"code": "411503",
		"parent_code": "411500",
		"name": "平桥区",
		"alias": "平桥区",
		"pinyin": "PingQiaoQu",
		"abbr": "PQQ",
		"zip": "464100",
		"level": 3
	},
	{
		"code": "411521",
		"parent_code": "411500",
		"name": "罗山县",
		"alias": "罗山",
		"pinyin": "LuoShan",
		"abbr": "LS",
		"zip": "464200",
		"level": 3
	},
	{
		"code": "411522",
		"parent_code": "411500",
		"name": "光山县",
		"alias": "光山",
		"pinyin": "GuangShan",
		"abbr": "GS",
		"zip": "465450",
		"level": 3
	},
	{
		"code": "411523",
		"parent_code": "411500",
		"name": "新县",
		"alias": "新县",
		"pinyin": "XinXian",
		"abbr": "XX",
		"zip": "465550",
		"level": 3
	},
	{
		"code": "411524",
		"parent_code": "411500",
		"name": "商城县",
		"alias": "商城",
		"pinyin": "ShangCheng",
		"abbr": "SC",
		"zip": "465350",
		"level": 3
	},
	{
		"code": "411525",
		"parent_code": "411500",
		"name": "固始县",
		"alias": "固始",
		"pinyin": "GuShi",
		"abbr": "GS",
		"zip": "465200",
		"level": 3
	},
	{
		"code": "411526",
		"parent_code": "411500",
		"name": "潢川县",
		"alias": "潢川",
		"pinyin": "HuangChuan",
		"abbr": "HC",
		"zip": "465150",
		"level": 3
	},
	{
		"code": "411527",
		"parent_code": "411500",
		"name": "淮滨县",
		"alias": "淮滨",
		"pinyin": "HuaiBin",
		"abbr": "HB",
		"zip": "464400",
		"level": 3
	},
	{
		"code": "411528",
		"parent_code": "411500",
		"name": "息县",
		"alias": "息县",
		"pinyin": "XiXian",
		"abbr": "XX",
		"zip": "464300",
		"level": 3
	},
	{
		"code": "411600",
		"parent_code": "410000",
		"name": "周口市",
		"alias": "周口",
		"pinyin": "ZhouKou",
		"abbr": "ZK",
		"zip": "466000",
		"level": 2
	},
	{
		"code": "411602",
		"parent_code": "411600",
		"name": "川汇区",
		"alias": "川汇区",
		"pinyin": "ChuanHuiQu",
		"abbr": "CHQ",
		"zip": "466000",
		"level": 3
	},
	{
		"code": "411621",
		"parent_code": "411600",
		"name": "扶沟县",
		"alias": "扶沟",
		"pinyin": "FuGou",
		"abbr": "FG",
		"zip": "461300",
		"level": 3
	},
	{
		"code": "411622",
		"parent_code": "411600",
		"name": "西华县",
		"alias": "西华",
		"pinyin": "XiHua",
		"abbr": "XH",
		"zip": "466600",
		"level": 3
	},
	{
		"code": "411623",
		"parent_code": "411600",
		"name": "商水县",
		"alias": "商水",
		"pinyin": "ShangShui",
		"abbr": "SS",
		"zip": "466100",
		"level": 3
	},
	{
		"code": "411624",
		"parent_code": "411600",
		"name": "沈丘县",
		"alias": "沈丘",
		"pinyin": "ChenQiu",
		"abbr": "CQ",
		"zip": "466300",
		"level": 3
	},
	{
		"code": "411625",
		"parent_code": "411600",
		"name": "郸城县",
		"alias": "郸城",
		"pinyin": "DanCheng",
		"abbr": "DC",
		"zip": "477150",
		"level": 3
	},
	{
		"code": "411626",
		"parent_code": "411600",
		"name": "淮阳县",
		"alias": "淮阳",
		"pinyin": "HuaiYang",
		"abbr": "HY",
		"zip": "466700",
		"level": 3
	},
	{
		"code": "411627",
		"parent_code": "411600",
		"name": "太康县",
		"alias": "太康",
		"pinyin": "TaiKang",
		"abbr": "TK",
		"zip": "475400",
		"level": 3
	},
	{
		"code": "411628",
		"parent_code": "411600",
		"name": "鹿邑县",
		"alias": "鹿邑",
		"pinyin": "LuYi",
		"abbr": "LY",
		"zip": "477200",
		"level": 3
	},
	{
		"code": "411681",
		"parent_code": "411600",
		"name": "项城市",
		"alias": "项城",
		"pinyin": "XiangCheng",
		"abbr": "XC",
		"zip": "466200",
		"level": 3
	},
	{
		"code": "411700",
		"parent_code": "410000",
		"name": "驻马店市",
		"alias": "驻马店",
		"pinyin": "ZhuMaDian",
		"abbr": "ZMD",
		"zip": "463000",
		"level": 2
	},
	{
		"code": "411702",
		"parent_code": "411700",
		"name": "驿城区",
		"alias": "驿城区",
		"pinyin": "YiChengQu",
		"abbr": "YCQ",
		"zip": "463000",
		"level": 3
	},
	{
		"code": "411721",
		"parent_code": "411700",
		"name": "西平县",
		"alias": "西平",
		"pinyin": "XiPing",
		"abbr": "XP",
		"zip": "463900",
		"level": 3
	},
	{
		"code": "411722",
		"parent_code": "411700",
		"name": "上蔡县",
		"alias": "上蔡",
		"pinyin": "ShangCai",
		"abbr": "SC",
		"zip": "463800",
		"level": 3
	},
	{
		"code": "411723",
		"parent_code": "411700",
		"name": "平舆县",
		"alias": "平舆",
		"pinyin": "PingYu",
		"abbr": "PY",
		"zip": "463400",
		"level": 3
	},
	{
		"code": "411724",
		"parent_code": "411700",
		"name": "正阳县",
		"alias": "正阳",
		"pinyin": "ZhengYang",
		"abbr": "ZY",
		"zip": "463600",
		"level": 3
	},
	{
		"code": "411725",
		"parent_code": "411700",
		"name": "确山县",
		"alias": "确山",
		"pinyin": "QueShan",
		"abbr": "QS",
		"zip": "463200",
		"level": 3
	},
	{
		"code": "411726",
		"parent_code": "411700",
		"name": "泌阳县",
		"alias": "泌阳",
		"pinyin": "MiYang",
		"abbr": "MY",
		"zip": "463700",
		"level": 3
	},
	{
		"code": "411727",
		"parent_code": "411700",
		"name": "汝南县",
		"alias": "汝南",
		"pinyin": "RuNan",
		"abbr": "RN",
		"zip": "463300",
		"level": 3
	},
	{
		"code": "411728",
		"parent_code": "411700",
		"name": "遂平县",
		"alias": "遂平",
		"pinyin": "SuiPing",
		"abbr": "SP",
		"zip": "463100",
		"level": 3
	},
	{
		"code": "411729",
		"parent_code": "411700",
		"name": "新蔡县",
		"alias": "新蔡",
		"pinyin": "XinCai",
		"abbr": "XC",
		"zip": "463500",
		"level": 3
	},
	{
		"code": "419001",
		"parent_code": "410000",
		"name": "济源市",
		"alias": "济源",
		"pinyin": "JiYuan",
		"abbr": "JY",
		"zip": "454650",
		"level": 2
	},
	{
		"code": "420000",
		"parent_code": null,
		"name": "湖北省",
		"alias": "湖北",
		"pinyin": "HuBei",
		"abbr": "HB",
		"zip": "430000",
		"level": 1
	},
	{
		"code": "420100",
		"parent_code": "420000",
		"name": "武汉市",
		"alias": "武汉",
		"pinyin": "WuHan",
		"abbr": "WH",
		"zip": "430000",
		"level": 2
	},
	{
		"code": "420102",
		"parent_code": "420100",
		"name": "江岸区",
		"alias": "江岸区",
		"pinyin": "JiangAnQu",
		"abbr": "JAQ",
		"zip": "430014",
		"level": 3
	},
	{
		"code": "420103",
		"parent_code": "420100",
		"name": "江汉区",
		"alias": "江汉区",
		"pinyin": "JiangHanQu",
		"abbr": "JHQ",
		"zip": "430015",
		"level": 3
	},
	{
		"code": "420104",
		"parent_code": "420100",
		"name": "硚口区",
		"alias": "硚口区",
		"pinyin": "QiaoKouQu",
		"abbr": "QKQ",
		"zip": "430033",
		"level": 3
	},
	{
		"code": "420105",
		"parent_code": "420100",
		"name": "汉阳区",
		"alias": "汉阳区",
		"pinyin": "HanYangQu",
		"abbr": "HYQ",
		"zip": "430050",
		"level": 3
	},
	{
		"code": "420106",
		"parent_code": "420100",
		"name": "武昌区",
		"alias": "武昌区",
		"pinyin": "WuChangQu",
		"abbr": "WCQ",
		"zip": "430061",
		"level": 3
	},
	{
		"code": "420107",
		"parent_code": "420100",
		"name": "青山区",
		"alias": "青山区",
		"pinyin": "QingShanQu",
		"abbr": "QSQ",
		"zip": "430080",
		"level": 3
	},
	{
		"code": "420111",
		"parent_code": "420100",
		"name": "洪山区",
		"alias": "洪山区",
		"pinyin": "HongShanQu",
		"abbr": "HSQ",
		"zip": "430070",
		"level": 3
	},
	{
		"code": "420112",
		"parent_code": "420100",
		"name": "东西湖区",
		"alias": "东西湖区",
		"pinyin": "DongXiHuQu",
		"abbr": "DXHQ",
		"zip": "430040",
		"level": 3
	},
	{
		"code": "420113",
		"parent_code": "420100",
		"name": "汉南区",
		"alias": "汉南区",
		"pinyin": "HanNanQu",
		"abbr": "HNQ",
		"zip": "430090",
		"level": 3
	},
	{
		"code": "420114",
		"parent_code": "420100",
		"name": "蔡甸区",
		"alias": "蔡甸区",
		"pinyin": "CaiDianQu",
		"abbr": "CDQ",
		"zip": "430100",
		"level": 3
	},
	{
		"code": "420115",
		"parent_code": "420100",
		"name": "江夏区",
		"alias": "江夏区",
		"pinyin": "JiangXiaQu",
		"abbr": "JXQ",
		"zip": "430200",
		"level": 3
	},
	{
		"code": "420116",
		"parent_code": "420100",
		"name": "黄陂区",
		"alias": "黄陂区",
		"pinyin": "HuangBeiQu",
		"abbr": "HBQ",
		"zip": "430300",
		"level": 3
	},
	{
		"code": "420117",
		"parent_code": "420100",
		"name": "新洲区",
		"alias": "新洲区",
		"pinyin": "XinZhouQu",
		"abbr": "XZQ",
		"zip": "431400",
		"level": 3
	},
	{
		"code": "420200",
		"parent_code": "420000",
		"name": "黄石市",
		"alias": "黄石",
		"pinyin": "HuangShi",
		"abbr": "HS",
		"zip": "435000",
		"level": 2
	},
	{
		"code": "420202",
		"parent_code": "420200",
		"name": "黄石港区",
		"alias": "黄石港区",
		"pinyin": "HuangShiGangQu",
		"abbr": "HSGQ",
		"zip": "435002",
		"level": 3
	},
	{
		"code": "420203",
		"parent_code": "420200",
		"name": "西塞山区",
		"alias": "西塞山区",
		"pinyin": "XiSaiShanQu",
		"abbr": "XSSQ",
		"zip": "435001",
		"level": 3
	},
	{
		"code": "420204",
		"parent_code": "420200",
		"name": "下陆区",
		"alias": "下陆区",
		"pinyin": "XiaLuQu",
		"abbr": "XLQ",
		"zip": "435004",
		"level": 3
	},
	{
		"code": "420205",
		"parent_code": "420200",
		"name": "铁山区",
		"alias": "铁山区",
		"pinyin": "TieShanQu",
		"abbr": "TSQ",
		"zip": "435006",
		"level": 3
	},
	{
		"code": "420222",
		"parent_code": "420200",
		"name": "阳新县",
		"alias": "阳新",
		"pinyin": "YangXin",
		"abbr": "YX",
		"zip": "435200",
		"level": 3
	},
	{
		"code": "420281",
		"parent_code": "420200",
		"name": "大冶市",
		"alias": "大冶",
		"pinyin": "DaYe",
		"abbr": "DY",
		"zip": "435100",
		"level": 3
	},
	{
		"code": "420300",
		"parent_code": "420000",
		"name": "十堰市",
		"alias": "十堰",
		"pinyin": "ShiYan",
		"abbr": "SY",
		"zip": "442000",
		"level": 2
	},
	{
		"code": "420302",
		"parent_code": "420300",
		"name": "茅箭区",
		"alias": "茅箭区",
		"pinyin": "MaoJianQu",
		"abbr": "MJQ",
		"zip": "442012",
		"level": 3
	},
	{
		"code": "420303",
		"parent_code": "420300",
		"name": "张湾区",
		"alias": "张湾区",
		"pinyin": "ZhangWanQu",
		"abbr": "ZWQ",
		"zip": "442001",
		"level": 3
	},
	{
		"code": "420321",
		"parent_code": "420300",
		"name": "郧县",
		"alias": "郧县",
		"pinyin": "YunXian",
		"abbr": "YX",
		"zip": "442500",
		"level": 3
	},
	{
		"code": "420322",
		"parent_code": "420300",
		"name": "郧西县",
		"alias": "郧西",
		"pinyin": "YunXi",
		"abbr": "YX",
		"zip": "442600",
		"level": 3
	},
	{
		"code": "420323",
		"parent_code": "420300",
		"name": "竹山县",
		"alias": "竹山",
		"pinyin": "ZhuShan",
		"abbr": "ZS",
		"zip": "442200",
		"level": 3
	},
	{
		"code": "420324",
		"parent_code": "420300",
		"name": "竹溪县",
		"alias": "竹溪",
		"pinyin": "ZhuXi",
		"abbr": "ZX",
		"zip": "442300",
		"level": 3
	},
	{
		"code": "420325",
		"parent_code": "420300",
		"name": "房县",
		"alias": "房县",
		"pinyin": "FangXian",
		"abbr": "FX",
		"zip": "442100",
		"level": 3
	},
	{
		"code": "420381",
		"parent_code": "420300",
		"name": "丹江口市",
		"alias": "丹江口",
		"pinyin": "DanJiangKou",
		"abbr": "DJK",
		"zip": "441900",
		"level": 3
	},
	{
		"code": "420500",
		"parent_code": "420000",
		"name": "宜昌市",
		"alias": "宜昌",
		"pinyin": "YiChang",
		"abbr": "YC",
		"zip": "443000",
		"level": 2
	},
	{
		"code": "420502",
		"parent_code": "420500",
		"name": "西陵区",
		"alias": "西陵区",
		"pinyin": "XiLingQu",
		"abbr": "XLQ",
		"zip": "443000",
		"level": 3
	},
	{
		"code": "420503",
		"parent_code": "420500",
		"name": "伍家岗区",
		"alias": "伍家岗区",
		"pinyin": "WuJiaGangQu",
		"abbr": "WJGQ",
		"zip": "443001",
		"level": 3
	},
	{
		"code": "420504",
		"parent_code": "420500",
		"name": "点军区",
		"alias": "点军区",
		"pinyin": "DianJunQu",
		"abbr": "DJQ",
		"zip": "443006",
		"level": 3
	},
	{
		"code": "420505",
		"parent_code": "420500",
		"name": "猇亭区",
		"alias": "猇亭区",
		"pinyin": "XiaoTingQu",
		"abbr": "XTQ",
		"zip": "443007",
		"level": 3
	},
	{
		"code": "420506",
		"parent_code": "420500",
		"name": "夷陵区",
		"alias": "夷陵区",
		"pinyin": "YiLingQu",
		"abbr": "YLQ",
		"zip": "443100",
		"level": 3
	},
	{
		"code": "420525",
		"parent_code": "420500",
		"name": "远安县",
		"alias": "远安",
		"pinyin": "YuanAn",
		"abbr": "YA",
		"zip": "444200",
		"level": 3
	},
	{
		"code": "420526",
		"parent_code": "420500",
		"name": "兴山县",
		"alias": "兴山",
		"pinyin": "XingShan",
		"abbr": "XS",
		"zip": "443700",
		"level": 3
	},
	{
		"code": "420527",
		"parent_code": "420500",
		"name": "秭归县",
		"alias": "秭归",
		"pinyin": "ZiGui",
		"abbr": "ZG",
		"zip": "443600",
		"level": 3
	},
	{
		"code": "420528",
		"parent_code": "420500",
		"name": "长阳土家族自治县",
		"alias": "长阳土家族",
		"pinyin": "ZhangYangTuJiaZu",
		"abbr": "ZYTJZ",
		"zip": "443500",
		"level": 3
	},
	{
		"code": "420529",
		"parent_code": "420500",
		"name": "五峰土家族自治县",
		"alias": "五峰土家族",
		"pinyin": "WuFengTuJiaZu",
		"abbr": "WFTJZ",
		"zip": "443400",
		"level": 3
	},
	{
		"code": "420581",
		"parent_code": "420500",
		"name": "宜都市",
		"alias": "宜都",
		"pinyin": "YiDou",
		"abbr": "YD",
		"zip": "443300",
		"level": 3
	},
	{
		"code": "420582",
		"parent_code": "420500",
		"name": "当阳市",
		"alias": "当阳",
		"pinyin": "DangYang",
		"abbr": "DY",
		"zip": "444100",
		"level": 3
	},
	{
		"code": "420583",
		"parent_code": "420500",
		"name": "枝江市",
		"alias": "枝江",
		"pinyin": "ZhiJiang",
		"abbr": "ZJ",
		"zip": "443200",
		"level": 3
	},
	{
		"code": "420600",
		"parent_code": "420000",
		"name": "襄阳市",
		"alias": "襄阳",
		"pinyin": "XiangYang",
		"abbr": "XY",
		"zip": "441000",
		"level": 2
	},
	{
		"code": "420602",
		"parent_code": "420600",
		"name": "襄城区",
		"alias": "襄城区",
		"pinyin": "XiangChengQu",
		"abbr": "XCQ",
		"zip": "441021",
		"level": 3
	},
	{
		"code": "420606",
		"parent_code": "420600",
		"name": "樊城区",
		"alias": "樊城区",
		"pinyin": "FanChengQu",
		"abbr": "FCQ",
		"zip": "441001",
		"level": 3
	},
	{
		"code": "420607",
		"parent_code": "420600",
		"name": "襄州区",
		"alias": "襄州区",
		"pinyin": "XiangZhouQu",
		"abbr": "XZQ",
		"zip": "441100",
		"level": 3
	},
	{
		"code": "420624",
		"parent_code": "420600",
		"name": "南漳县",
		"alias": "南漳",
		"pinyin": "NanZhang",
		"abbr": "NZ",
		"zip": "441500",
		"level": 3
	},
	{
		"code": "420625",
		"parent_code": "420600",
		"name": "谷城县",
		"alias": "谷城",
		"pinyin": "GuCheng",
		"abbr": "GC",
		"zip": "441700",
		"level": 3
	},
	{
		"code": "420626",
		"parent_code": "420600",
		"name": "保康县",
		"alias": "保康",
		"pinyin": "BaoKang",
		"abbr": "BK",
		"zip": "441600",
		"level": 3
	},
	{
		"code": "420682",
		"parent_code": "420600",
		"name": "老河口市",
		"alias": "老河口",
		"pinyin": "LaoHeKou",
		"abbr": "LHK",
		"zip": "441800",
		"level": 3
	},
	{
		"code": "420683",
		"parent_code": "420600",
		"name": "枣阳市",
		"alias": "枣阳",
		"pinyin": "ZaoYang",
		"abbr": "ZY",
		"zip": "441200",
		"level": 3
	},
	{
		"code": "420684",
		"parent_code": "420600",
		"name": "宜城市",
		"alias": "宜城",
		"pinyin": "YiCheng",
		"abbr": "YC",
		"zip": "441400",
		"level": 3
	},
	{
		"code": "420700",
		"parent_code": "420000",
		"name": "鄂州市",
		"alias": "鄂州",
		"pinyin": "EZhou",
		"abbr": "EZ",
		"zip": "436000",
		"level": 2
	},
	{
		"code": "420702",
		"parent_code": "420700",
		"name": "梁子湖区",
		"alias": "梁子湖区",
		"pinyin": "LiangZiHuQu",
		"abbr": "LZHQ",
		"zip": "436064",
		"level": 3
	},
	{
		"code": "420703",
		"parent_code": "420700",
		"name": "华容区",
		"alias": "华容区",
		"pinyin": "HuaRongQu",
		"abbr": "HRQ",
		"zip": "436030",
		"level": 3
	},
	{
		"code": "420704",
		"parent_code": "420700",
		"name": "鄂城区",
		"alias": "鄂城区",
		"pinyin": "EChengQu",
		"abbr": "ECQ",
		"zip": "436000",
		"level": 3
	},
	{
		"code": "420800",
		"parent_code": "420000",
		"name": "荆门市",
		"alias": "荆门",
		"pinyin": "JingMen",
		"abbr": "JM",
		"zip": "448000",
		"level": 2
	},
	{
		"code": "420802",
		"parent_code": "420800",
		"name": "东宝区",
		"alias": "东宝区",
		"pinyin": "DongBaoQu",
		"abbr": "DBQ",
		"zip": "448004",
		"level": 3
	},
	{
		"code": "420804",
		"parent_code": "420800",
		"name": "掇刀区",
		"alias": "掇刀区",
		"pinyin": "DuoDaoQu",
		"abbr": "DDQ",
		"zip": "448124",
		"level": 3
	},
	{
		"code": "420821",
		"parent_code": "420800",
		"name": "京山县",
		"alias": "京山",
		"pinyin": "JingShan",
		"abbr": "JS",
		"zip": "431800",
		"level": 3
	},
	{
		"code": "420822",
		"parent_code": "420800",
		"name": "沙洋县",
		"alias": "沙洋",
		"pinyin": "ShaYang",
		"abbr": "SY",
		"zip": "448200",
		"level": 3
	},
	{
		"code": "420881",
		"parent_code": "420800",
		"name": "钟祥市",
		"alias": "钟祥",
		"pinyin": "ZhongXiang",
		"abbr": "ZX",
		"zip": "431900",
		"level": 3
	},
	{
		"code": "420900",
		"parent_code": "420000",
		"name": "孝感市",
		"alias": "孝感",
		"pinyin": "XiaoGan",
		"abbr": "XG",
		"zip": "432000",
		"level": 2
	},
	{
		"code": "420902",
		"parent_code": "420900",
		"name": "孝南区",
		"alias": "孝南区",
		"pinyin": "XiaoNanQu",
		"abbr": "XNQ",
		"zip": "432100",
		"level": 3
	},
	{
		"code": "420921",
		"parent_code": "420900",
		"name": "孝昌县",
		"alias": "孝昌",
		"pinyin": "XiaoChang",
		"abbr": "XC",
		"zip": "432900",
		"level": 3
	},
	{
		"code": "420922",
		"parent_code": "420900",
		"name": "大悟县",
		"alias": "大悟",
		"pinyin": "DaWu",
		"abbr": "DW",
		"zip": "432800",
		"level": 3
	},
	{
		"code": "420923",
		"parent_code": "420900",
		"name": "云梦县",
		"alias": "云梦",
		"pinyin": "YunMeng",
		"abbr": "YM",
		"zip": "432500",
		"level": 3
	},
	{
		"code": "420981",
		"parent_code": "420900",
		"name": "应城市",
		"alias": "应城",
		"pinyin": "YingCheng",
		"abbr": "YC",
		"zip": "432400",
		"level": 3
	},
	{
		"code": "420982",
		"parent_code": "420900",
		"name": "安陆市",
		"alias": "安陆",
		"pinyin": "AnLu",
		"abbr": "AL",
		"zip": "432600",
		"level": 3
	},
	{
		"code": "420984",
		"parent_code": "420900",
		"name": "汉川市",
		"alias": "汉川",
		"pinyin": "HanChuan",
		"abbr": "HC",
		"zip": "431600",
		"level": 3
	},
	{
		"code": "421000",
		"parent_code": "420000",
		"name": "荆州市",
		"alias": "荆州",
		"pinyin": "JingZhou",
		"abbr": "JZ",
		"zip": "434000",
		"level": 2
	},
	{
		"code": "421002",
		"parent_code": "421000",
		"name": "沙市区",
		"alias": "沙市区",
		"pinyin": "ShaShiQu",
		"abbr": "SSQ",
		"zip": "434000",
		"level": 3
	},
	{
		"code": "421003",
		"parent_code": "421000",
		"name": "荆州区",
		"alias": "荆州区",
		"pinyin": "JingZhouQu",
		"abbr": "JZQ",
		"zip": "434020",
		"level": 3
	},
	{
		"code": "421022",
		"parent_code": "421000",
		"name": "公安县",
		"alias": "公安",
		"pinyin": "GongAn",
		"abbr": "GA",
		"zip": "434300",
		"level": 3
	},
	{
		"code": "421023",
		"parent_code": "421000",
		"name": "监利县",
		"alias": "监利",
		"pinyin": "JianLi",
		"abbr": "JL",
		"zip": "433300",
		"level": 3
	},
	{
		"code": "421024",
		"parent_code": "421000",
		"name": "江陵县",
		"alias": "江陵",
		"pinyin": "JiangLing",
		"abbr": "JL",
		"zip": "434100",
		"level": 3
	},
	{
		"code": "421081",
		"parent_code": "421000",
		"name": "石首市",
		"alias": "石首",
		"pinyin": "ShiShou",
		"abbr": "SS",
		"zip": "434400",
		"level": 3
	},
	{
		"code": "421083",
		"parent_code": "421000",
		"name": "洪湖市",
		"alias": "洪湖",
		"pinyin": "HongHu",
		"abbr": "HH",
		"zip": "433200",
		"level": 3
	},
	{
		"code": "421087",
		"parent_code": "421000",
		"name": "松滋市",
		"alias": "松滋",
		"pinyin": "SongZi",
		"abbr": "SZ",
		"zip": "434200",
		"level": 3
	},
	{
		"code": "421100",
		"parent_code": "420000",
		"name": "黄冈市",
		"alias": "黄冈",
		"pinyin": "HuangGang",
		"abbr": "HG",
		"zip": "438000",
		"level": 2
	},
	{
		"code": "421102",
		"parent_code": "421100",
		"name": "黄州区",
		"alias": "黄州区",
		"pinyin": "HuangZhouQu",
		"abbr": "HZQ",
		"zip": "438000",
		"level": 3
	},
	{
		"code": "421121",
		"parent_code": "421100",
		"name": "团风县",
		"alias": "团风",
		"pinyin": "TuanFeng",
		"abbr": "TF",
		"zip": "438000",
		"level": 3
	},
	{
		"code": "421122",
		"parent_code": "421100",
		"name": "红安县",
		"alias": "红安",
		"pinyin": "HongAn",
		"abbr": "HA",
		"zip": "431500",
		"level": 3
	},
	{
		"code": "421123",
		"parent_code": "421100",
		"name": "罗田县",
		"alias": "罗田",
		"pinyin": "LuoTian",
		"abbr": "LT",
		"zip": "438600",
		"level": 3
	},
	{
		"code": "421124",
		"parent_code": "421100",
		"name": "英山县",
		"alias": "英山",
		"pinyin": "YingShan",
		"abbr": "YS",
		"zip": "438700",
		"level": 3
	},
	{
		"code": "421125",
		"parent_code": "421100",
		"name": "浠水县",
		"alias": "浠水",
		"pinyin": "XiShui",
		"abbr": "XS",
		"zip": "438200",
		"level": 3
	},
	{
		"code": "421126",
		"parent_code": "421100",
		"name": "蕲春县",
		"alias": "蕲春",
		"pinyin": "QiChun",
		"abbr": "QC",
		"zip": "436300",
		"level": 3
	},
	{
		"code": "421127",
		"parent_code": "421100",
		"name": "黄梅县",
		"alias": "黄梅",
		"pinyin": "HuangMei",
		"abbr": "HM",
		"zip": "435500",
		"level": 3
	},
	{
		"code": "421181",
		"parent_code": "421100",
		"name": "麻城市",
		"alias": "麻城",
		"pinyin": "MaCheng",
		"abbr": "MC",
		"zip": "438300",
		"level": 3
	},
	{
		"code": "421182",
		"parent_code": "421100",
		"name": "武穴市",
		"alias": "武穴",
		"pinyin": "WuXue",
		"abbr": "WX",
		"zip": "435400",
		"level": 3
	},
	{
		"code": "421200",
		"parent_code": "420000",
		"name": "咸宁市",
		"alias": "咸宁",
		"pinyin": "XianNing",
		"abbr": "XN",
		"zip": "437100",
		"level": 2
	},
	{
		"code": "421202",
		"parent_code": "421200",
		"name": "咸安区",
		"alias": "咸安区",
		"pinyin": "XianAnQu",
		"abbr": "XAQ",
		"zip": "437000",
		"level": 3
	},
	{
		"code": "421221",
		"parent_code": "421200",
		"name": "嘉鱼县",
		"alias": "嘉鱼",
		"pinyin": "JiaYu",
		"abbr": "JY",
		"zip": "437200",
		"level": 3
	},
	{
		"code": "421222",
		"parent_code": "421200",
		"name": "通城县",
		"alias": "通城",
		"pinyin": "TongCheng",
		"abbr": "TC",
		"zip": "437400",
		"level": 3
	},
	{
		"code": "421223",
		"parent_code": "421200",
		"name": "崇阳县",
		"alias": "崇阳",
		"pinyin": "ChongYang",
		"abbr": "CY",
		"zip": "437500",
		"level": 3
	},
	{
		"code": "421224",
		"parent_code": "421200",
		"name": "通山县",
		"alias": "通山",
		"pinyin": "TongShan",
		"abbr": "TS",
		"zip": "437600",
		"level": 3
	},
	{
		"code": "421281",
		"parent_code": "421200",
		"name": "赤壁市",
		"alias": "赤壁",
		"pinyin": "ChiBi",
		"abbr": "CB",
		"zip": "437300",
		"level": 3
	},
	{
		"code": "421300",
		"parent_code": "420000",
		"name": "随州市",
		"alias": "随州",
		"pinyin": "SuiZhou",
		"abbr": "SZ",
		"zip": "441300",
		"level": 2
	},
	{
		"code": "421303",
		"parent_code": "421300",
		"name": "曾都区",
		"alias": "曾都区",
		"pinyin": "CengDouQu",
		"abbr": "CDQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "421321",
		"parent_code": "421300",
		"name": "随县",
		"alias": "随县",
		"pinyin": "SuiXian",
		"abbr": "SX",
		"zip": "441300",
		"level": 3
	},
	{
		"code": "421381",
		"parent_code": "421300",
		"name": "广水市",
		"alias": "广水",
		"pinyin": "GuangShui",
		"abbr": "GS",
		"zip": "432700",
		"level": 3
	},
	{
		"code": "422800",
		"parent_code": "420000",
		"name": "恩施土家族苗族自治州",
		"alias": "恩施土家族苗族",
		"pinyin": "EnShiTuJiaZuMiaoZu",
		"abbr": "ESTJZMZ",
		"zip": "445400",
		"level": 2
	},
	{
		"code": "422801",
		"parent_code": "422800",
		"name": "恩施市",
		"alias": "恩施",
		"pinyin": "EnShi",
		"abbr": "ES",
		"zip": "445000",
		"level": 3
	},
	{
		"code": "422802",
		"parent_code": "422800",
		"name": "利川市",
		"alias": "利川",
		"pinyin": "LiChuan",
		"abbr": "LC",
		"zip": "445400",
		"level": 3
	},
	{
		"code": "422822",
		"parent_code": "422800",
		"name": "建始县",
		"alias": "建始",
		"pinyin": "JianShi",
		"abbr": "JS",
		"zip": "445300",
		"level": 3
	},
	{
		"code": "422823",
		"parent_code": "422800",
		"name": "巴东县",
		"alias": "巴东",
		"pinyin": "BaDong",
		"abbr": "BD",
		"zip": "444300",
		"level": 3
	},
	{
		"code": "422825",
		"parent_code": "422800",
		"name": "宣恩县",
		"alias": "宣恩",
		"pinyin": "XuanEn",
		"abbr": "XE",
		"zip": "445500",
		"level": 3
	},
	{
		"code": "422826",
		"parent_code": "422800",
		"name": "咸丰县",
		"alias": "咸丰",
		"pinyin": "XianFeng",
		"abbr": "XF",
		"zip": "445600",
		"level": 3
	},
	{
		"code": "422827",
		"parent_code": "422800",
		"name": "来凤县",
		"alias": "来凤",
		"pinyin": "LaiFeng",
		"abbr": "LF",
		"zip": "445700",
		"level": 3
	},
	{
		"code": "422828",
		"parent_code": "422800",
		"name": "鹤峰县",
		"alias": "鹤峰",
		"pinyin": "HeFeng",
		"abbr": "HF",
		"zip": "445800",
		"level": 3
	},
	{
		"code": "429004",
		"parent_code": "420000",
		"name": "仙桃市",
		"alias": "仙桃",
		"pinyin": "XianTao",
		"abbr": "XT",
		"zip": "433000",
		"level": 2
	},
	{
		"code": "429005",
		"parent_code": "420000",
		"name": "潜江市",
		"alias": "潜江",
		"pinyin": "QianJiang",
		"abbr": "QJ",
		"zip": "433100",
		"level": 2
	},
	{
		"code": "429006",
		"parent_code": "420000",
		"name": "天门市",
		"alias": "天门",
		"pinyin": "TianMen",
		"abbr": "TM",
		"zip": "431700",
		"level": 2
	},
	{
		"code": "429021",
		"parent_code": "420000",
		"name": "神农架林区",
		"alias": "神农架林区",
		"pinyin": "ShenNongJiaLinQu",
		"abbr": "SNJLQ",
		"zip": "442400",
		"level": 2
	},
	{
		"code": "430000",
		"parent_code": null,
		"name": "湖南省",
		"alias": "湖南",
		"pinyin": "HuNan",
		"abbr": "HN",
		"zip": "410000",
		"level": 1
	},
	{
		"code": "430100",
		"parent_code": "430000",
		"name": "长沙市",
		"alias": "长沙",
		"pinyin": "ZhangSha",
		"abbr": "ZS",
		"zip": "410000",
		"level": 2
	},
	{
		"code": "430102",
		"parent_code": "430100",
		"name": "芙蓉区",
		"alias": "芙蓉区",
		"pinyin": "FuRongQu",
		"abbr": "FRQ",
		"zip": "410006",
		"level": 3
	},
	{
		"code": "430103",
		"parent_code": "430100",
		"name": "天心区",
		"alias": "天心区",
		"pinyin": "TianXinQu",
		"abbr": "TXQ",
		"zip": "410002",
		"level": 3
	},
	{
		"code": "430104",
		"parent_code": "430100",
		"name": "岳麓区",
		"alias": "岳麓区",
		"pinyin": "YueLuQu",
		"abbr": "YLQ",
		"zip": "410006",
		"level": 3
	},
	{
		"code": "430105",
		"parent_code": "430100",
		"name": "开福区",
		"alias": "开福区",
		"pinyin": "KaiFuQu",
		"abbr": "KFQ",
		"zip": "410005",
		"level": 3
	},
	{
		"code": "430111",
		"parent_code": "430100",
		"name": "雨花区",
		"alias": "雨花区",
		"pinyin": "YuHuaQu",
		"abbr": "YHQ",
		"zip": "410007",
		"level": 3
	},
	{
		"code": "430112",
		"parent_code": "430100",
		"name": "望城区",
		"alias": "望城区",
		"pinyin": "WangChengQu",
		"abbr": "WCQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "430121",
		"parent_code": "430100",
		"name": "长沙县",
		"alias": "长沙",
		"pinyin": "ZhangSha",
		"abbr": "ZS",
		"zip": "410100",
		"level": 3
	},
	{
		"code": "430124",
		"parent_code": "430100",
		"name": "宁乡县",
		"alias": "宁乡",
		"pinyin": "NingXiang",
		"abbr": "NX",
		"zip": "410600",
		"level": 3
	},
	{
		"code": "430181",
		"parent_code": "430100",
		"name": "浏阳市",
		"alias": "浏阳",
		"pinyin": "LiuYang",
		"abbr": "LY",
		"zip": "410300",
		"level": 3
	},
	{
		"code": "430200",
		"parent_code": "430000",
		"name": "株洲市",
		"alias": "株洲",
		"pinyin": "ZhuZhou",
		"abbr": "ZZ",
		"zip": "412000",
		"level": 2
	},
	{
		"code": "430202",
		"parent_code": "430200",
		"name": "荷塘区",
		"alias": "荷塘区",
		"pinyin": "HeTangQu",
		"abbr": "HTQ",
		"zip": "412000",
		"level": 3
	},
	{
		"code": "430203",
		"parent_code": "430200",
		"name": "芦淞区",
		"alias": "芦淞区",
		"pinyin": "LuSongQu",
		"abbr": "LSQ",
		"zip": "412000",
		"level": 3
	},
	{
		"code": "430204",
		"parent_code": "430200",
		"name": "石峰区",
		"alias": "石峰区",
		"pinyin": "ShiFengQu",
		"abbr": "SFQ",
		"zip": "412005",
		"level": 3
	},
	{
		"code": "430211",
		"parent_code": "430200",
		"name": "天元区",
		"alias": "天元区",
		"pinyin": "TianYuanQu",
		"abbr": "TYQ",
		"zip": "412000",
		"level": 3
	},
	{
		"code": "430221",
		"parent_code": "430200",
		"name": "株洲县",
		"alias": "株洲",
		"pinyin": "ZhuZhou",
		"abbr": "ZZ",
		"zip": "412100",
		"level": 3
	},
	{
		"code": "430223",
		"parent_code": "430200",
		"name": "攸县",
		"alias": "攸县",
		"pinyin": "YouXian",
		"abbr": "YX",
		"zip": "412300",
		"level": 3
	},
	{
		"code": "430224",
		"parent_code": "430200",
		"name": "茶陵县",
		"alias": "茶陵",
		"pinyin": "ChaLing",
		"abbr": "CL",
		"zip": "412400",
		"level": 3
	},
	{
		"code": "430225",
		"parent_code": "430200",
		"name": "炎陵县",
		"alias": "炎陵",
		"pinyin": "YanLing",
		"abbr": "YL",
		"zip": "412500",
		"level": 3
	},
	{
		"code": "430281",
		"parent_code": "430200",
		"name": "醴陵市",
		"alias": "醴陵",
		"pinyin": "LiLing",
		"abbr": "LL",
		"zip": "412200",
		"level": 3
	},
	{
		"code": "430300",
		"parent_code": "430000",
		"name": "湘潭市",
		"alias": "湘潭",
		"pinyin": "XiangTan",
		"abbr": "XT",
		"zip": "411100",
		"level": 2
	},
	{
		"code": "430302",
		"parent_code": "430300",
		"name": "雨湖区",
		"alias": "雨湖区",
		"pinyin": "YuHuQu",
		"abbr": "YHQ",
		"zip": "411100",
		"level": 3
	},
	{
		"code": "430304",
		"parent_code": "430300",
		"name": "岳塘区",
		"alias": "岳塘区",
		"pinyin": "YueTangQu",
		"abbr": "YTQ",
		"zip": "411101",
		"level": 3
	},
	{
		"code": "430321",
		"parent_code": "430300",
		"name": "湘潭县",
		"alias": "湘潭",
		"pinyin": "XiangTan",
		"abbr": "XT",
		"zip": "411200",
		"level": 3
	},
	{
		"code": "430381",
		"parent_code": "430300",
		"name": "湘乡市",
		"alias": "湘乡",
		"pinyin": "XiangXiang",
		"abbr": "XX",
		"zip": "411400",
		"level": 3
	},
	{
		"code": "430382",
		"parent_code": "430300",
		"name": "韶山市",
		"alias": "韶山",
		"pinyin": "ShaoShan",
		"abbr": "SS",
		"zip": "411300",
		"level": 3
	},
	{
		"code": "430400",
		"parent_code": "430000",
		"name": "衡阳市",
		"alias": "衡阳",
		"pinyin": "HengYang",
		"abbr": "HY",
		"zip": "421000",
		"level": 2
	},
	{
		"code": "430405",
		"parent_code": "430400",
		"name": "珠晖区",
		"alias": "珠晖区",
		"pinyin": "ZhuHuiQu",
		"abbr": "ZHQ",
		"zip": "421002",
		"level": 3
	},
	{
		"code": "430406",
		"parent_code": "430400",
		"name": "雁峰区",
		"alias": "雁峰区",
		"pinyin": "YanFengQu",
		"abbr": "YFQ",
		"zip": "421001",
		"level": 3
	},
	{
		"code": "430407",
		"parent_code": "430400",
		"name": "石鼓区",
		"alias": "石鼓区",
		"pinyin": "ShiGuQu",
		"abbr": "SGQ",
		"zip": "421001",
		"level": 3
	},
	{
		"code": "430408",
		"parent_code": "430400",
		"name": "蒸湘区",
		"alias": "蒸湘区",
		"pinyin": "ZhengXiangQu",
		"abbr": "ZXQ",
		"zip": "421001",
		"level": 3
	},
	{
		"code": "430412",
		"parent_code": "430400",
		"name": "南岳区",
		"alias": "南岳区",
		"pinyin": "NanYueQu",
		"abbr": "NYQ",
		"zip": "421900",
		"level": 3
	},
	{
		"code": "430421",
		"parent_code": "430400",
		"name": "衡阳县",
		"alias": "衡阳",
		"pinyin": "HengYang",
		"abbr": "HY",
		"zip": "421200",
		"level": 3
	},
	{
		"code": "430422",
		"parent_code": "430400",
		"name": "衡南县",
		"alias": "衡南",
		"pinyin": "HengNan",
		"abbr": "HN",
		"zip": "421100",
		"level": 3
	},
	{
		"code": "430423",
		"parent_code": "430400",
		"name": "衡山县",
		"alias": "衡山",
		"pinyin": "HengShan",
		"abbr": "HS",
		"zip": "421300",
		"level": 3
	},
	{
		"code": "430424",
		"parent_code": "430400",
		"name": "衡东县",
		"alias": "衡东",
		"pinyin": "HengDong",
		"abbr": "HD",
		"zip": "421400",
		"level": 3
	},
	{
		"code": "430426",
		"parent_code": "430400",
		"name": "祁东县",
		"alias": "祁东",
		"pinyin": "QiDong",
		"abbr": "QD",
		"zip": "421600",
		"level": 3
	},
	{
		"code": "430481",
		"parent_code": "430400",
		"name": "耒阳市",
		"alias": "耒阳",
		"pinyin": "LeiYang",
		"abbr": "LY",
		"zip": "421800",
		"level": 3
	},
	{
		"code": "430482",
		"parent_code": "430400",
		"name": "常宁市",
		"alias": "常宁",
		"pinyin": "ChangNing",
		"abbr": "CN",
		"zip": "421500",
		"level": 3
	},
	{
		"code": "430500",
		"parent_code": "430000",
		"name": "邵阳市",
		"alias": "邵阳",
		"pinyin": "ShaoYang",
		"abbr": "SY",
		"zip": "422000",
		"level": 2
	},
	{
		"code": "430502",
		"parent_code": "430500",
		"name": "双清区",
		"alias": "双清区",
		"pinyin": "ShuangQingQu",
		"abbr": "SQQ",
		"zip": "422001",
		"level": 3
	},
	{
		"code": "430503",
		"parent_code": "430500",
		"name": "大祥区",
		"alias": "大祥区",
		"pinyin": "DaXiangQu",
		"abbr": "DXQ",
		"zip": "422000",
		"level": 3
	},
	{
		"code": "430511",
		"parent_code": "430500",
		"name": "北塔区",
		"alias": "北塔区",
		"pinyin": "BeiTaQu",
		"abbr": "BTQ",
		"zip": "422001",
		"level": 3
	},
	{
		"code": "430521",
		"parent_code": "430500",
		"name": "邵东县",
		"alias": "邵东",
		"pinyin": "ShaoDong",
		"abbr": "SD",
		"zip": "422800",
		"level": 3
	},
	{
		"code": "430522",
		"parent_code": "430500",
		"name": "新邵县",
		"alias": "新邵",
		"pinyin": "XinShao",
		"abbr": "XS",
		"zip": "422900",
		"level": 3
	},
	{
		"code": "430523",
		"parent_code": "430500",
		"name": "邵阳县",
		"alias": "邵阳",
		"pinyin": "ShaoYang",
		"abbr": "SY",
		"zip": "422100",
		"level": 3
	},
	{
		"code": "430524",
		"parent_code": "430500",
		"name": "隆回县",
		"alias": "隆回",
		"pinyin": "LongHui",
		"abbr": "LH",
		"zip": "422200",
		"level": 3
	},
	{
		"code": "430525",
		"parent_code": "430500",
		"name": "洞口县",
		"alias": "洞口",
		"pinyin": "DongKou",
		"abbr": "DK",
		"zip": "422300",
		"level": 3
	},
	{
		"code": "430527",
		"parent_code": "430500",
		"name": "绥宁县",
		"alias": "绥宁",
		"pinyin": "SuiNing",
		"abbr": "SN",
		"zip": "422600",
		"level": 3
	},
	{
		"code": "430528",
		"parent_code": "430500",
		"name": "新宁县",
		"alias": "新宁",
		"pinyin": "XinNing",
		"abbr": "XN",
		"zip": "422700",
		"level": 3
	},
	{
		"code": "430529",
		"parent_code": "430500",
		"name": "城步苗族自治县",
		"alias": "城步苗族",
		"pinyin": "ChengBuMiaoZu",
		"abbr": "CBMZ",
		"zip": "422500",
		"level": 3
	},
	{
		"code": "430581",
		"parent_code": "430500",
		"name": "武冈市",
		"alias": "武冈",
		"pinyin": "WuGang",
		"abbr": "WG",
		"zip": "422400",
		"level": 3
	},
	{
		"code": "430600",
		"parent_code": "430000",
		"name": "岳阳市",
		"alias": "岳阳",
		"pinyin": "YueYang",
		"abbr": "YY",
		"zip": "414000",
		"level": 2
	},
	{
		"code": "430602",
		"parent_code": "430600",
		"name": "岳阳楼区",
		"alias": "岳阳楼区",
		"pinyin": "YueYangLouQu",
		"abbr": "YYLQ",
		"zip": "414000",
		"level": 3
	},
	{
		"code": "430603",
		"parent_code": "430600",
		"name": "云溪区",
		"alias": "云溪区",
		"pinyin": "YunXiQu",
		"abbr": "YXQ",
		"zip": "414003",
		"level": 3
	},
	{
		"code": "430611",
		"parent_code": "430600",
		"name": "君山区",
		"alias": "君山区",
		"pinyin": "JunShanQu",
		"abbr": "JSQ",
		"zip": "414005",
		"level": 3
	},
	{
		"code": "430621",
		"parent_code": "430600",
		"name": "岳阳县",
		"alias": "岳阳",
		"pinyin": "YueYang",
		"abbr": "YY",
		"zip": "414100",
		"level": 3
	},
	{
		"code": "430623",
		"parent_code": "430600",
		"name": "华容县",
		"alias": "华容",
		"pinyin": "HuaRong",
		"abbr": "HR",
		"zip": "414200",
		"level": 3
	},
	{
		"code": "430624",
		"parent_code": "430600",
		"name": "湘阴县",
		"alias": "湘阴",
		"pinyin": "XiangYin",
		"abbr": "XY",
		"zip": "414600",
		"level": 3
	},
	{
		"code": "430626",
		"parent_code": "430600",
		"name": "平江县",
		"alias": "平江",
		"pinyin": "PingJiang",
		"abbr": "PJ",
		"zip": "410400",
		"level": 3
	},
	{
		"code": "430681",
		"parent_code": "430600",
		"name": "汨罗市",
		"alias": "汨罗",
		"pinyin": "MiLuo",
		"abbr": "ML",
		"zip": "414400",
		"level": 3
	},
	{
		"code": "430682",
		"parent_code": "430600",
		"name": "临湘市",
		"alias": "临湘",
		"pinyin": "LinXiang",
		"abbr": "LX",
		"zip": "414300",
		"level": 3
	},
	{
		"code": "430700",
		"parent_code": "430000",
		"name": "常德市",
		"alias": "常德",
		"pinyin": "ChangDe",
		"abbr": "CD",
		"zip": "415000",
		"level": 2
	},
	{
		"code": "430702",
		"parent_code": "430700",
		"name": "武陵区",
		"alias": "武陵区",
		"pinyin": "WuLingQu",
		"abbr": "WLQ",
		"zip": "415000",
		"level": 3
	},
	{
		"code": "430703",
		"parent_code": "430700",
		"name": "鼎城区",
		"alias": "鼎城区",
		"pinyin": "DingChengQu",
		"abbr": "DCQ",
		"zip": "415100",
		"level": 3
	},
	{
		"code": "430721",
		"parent_code": "430700",
		"name": "安乡县",
		"alias": "安乡",
		"pinyin": "AnXiang",
		"abbr": "AX",
		"zip": "415600",
		"level": 3
	},
	{
		"code": "430722",
		"parent_code": "430700",
		"name": "汉寿县",
		"alias": "汉寿",
		"pinyin": "HanShou",
		"abbr": "HS",
		"zip": "415900",
		"level": 3
	},
	{
		"code": "430723",
		"parent_code": "430700",
		"name": "澧县",
		"alias": "澧县",
		"pinyin": "LiXian",
		"abbr": "LX",
		"zip": "415500",
		"level": 3
	},
	{
		"code": "430724",
		"parent_code": "430700",
		"name": "临澧县",
		"alias": "临澧",
		"pinyin": "LinLi",
		"abbr": "LL",
		"zip": "415200",
		"level": 3
	},
	{
		"code": "430725",
		"parent_code": "430700",
		"name": "桃源县",
		"alias": "桃源",
		"pinyin": "TaoYuan",
		"abbr": "TY",
		"zip": "415700",
		"level": 3
	},
	{
		"code": "430726",
		"parent_code": "430700",
		"name": "石门县",
		"alias": "石门",
		"pinyin": "ShiMen",
		"abbr": "SM",
		"zip": "415300",
		"level": 3
	},
	{
		"code": "430781",
		"parent_code": "430700",
		"name": "津市市",
		"alias": "津市",
		"pinyin": "JinShi",
		"abbr": "JS",
		"zip": "415400",
		"level": 3
	},
	{
		"code": "430800",
		"parent_code": "430000",
		"name": "张家界市",
		"alias": "张家界",
		"pinyin": "ZhangJiaJie",
		"abbr": "ZJJ",
		"zip": "427000",
		"level": 2
	},
	{
		"code": "430802",
		"parent_code": "430800",
		"name": "永定区",
		"alias": "永定区",
		"pinyin": "YongDingQu",
		"abbr": "YDQ",
		"zip": "427000",
		"level": 3
	},
	{
		"code": "430811",
		"parent_code": "430800",
		"name": "武陵源区",
		"alias": "武陵源区",
		"pinyin": "WuLingYuanQu",
		"abbr": "WLYQ",
		"zip": "427400",
		"level": 3
	},
	{
		"code": "430821",
		"parent_code": "430800",
		"name": "慈利县",
		"alias": "慈利",
		"pinyin": "CiLi",
		"abbr": "CL",
		"zip": "427200",
		"level": 3
	},
	{
		"code": "430822",
		"parent_code": "430800",
		"name": "桑植县",
		"alias": "桑植",
		"pinyin": "SangZhi",
		"abbr": "SZ",
		"zip": "427100",
		"level": 3
	},
	{
		"code": "430900",
		"parent_code": "430000",
		"name": "益阳市",
		"alias": "益阳",
		"pinyin": "YiYang",
		"abbr": "YY",
		"zip": "413000",
		"level": 2
	},
	{
		"code": "430902",
		"parent_code": "430900",
		"name": "资阳区",
		"alias": "资阳区",
		"pinyin": "ZiYangQu",
		"abbr": "ZYQ",
		"zip": "413000",
		"level": 3
	},
	{
		"code": "430903",
		"parent_code": "430900",
		"name": "赫山区",
		"alias": "赫山区",
		"pinyin": "HeShanQu",
		"abbr": "HSQ",
		"zip": "413002",
		"level": 3
	},
	{
		"code": "430921",
		"parent_code": "430900",
		"name": "南县",
		"alias": "南县",
		"pinyin": "NanXian",
		"abbr": "NX",
		"zip": "413200",
		"level": 3
	},
	{
		"code": "430922",
		"parent_code": "430900",
		"name": "桃江县",
		"alias": "桃江",
		"pinyin": "TaoJiang",
		"abbr": "TJ",
		"zip": "413400",
		"level": 3
	},
	{
		"code": "430923",
		"parent_code": "430900",
		"name": "安化县",
		"alias": "安化",
		"pinyin": "AnHua",
		"abbr": "AH",
		"zip": "413500",
		"level": 3
	},
	{
		"code": "430981",
		"parent_code": "430900",
		"name": "沅江市",
		"alias": "沅江",
		"pinyin": "YuanJiang",
		"abbr": "YJ",
		"zip": "413100",
		"level": 3
	},
	{
		"code": "431000",
		"parent_code": "430000",
		"name": "郴州市",
		"alias": "郴州",
		"pinyin": "ChenZhou",
		"abbr": "CZ",
		"zip": "423000",
		"level": 2
	},
	{
		"code": "431002",
		"parent_code": "431000",
		"name": "北湖区",
		"alias": "北湖区",
		"pinyin": "BeiHuQu",
		"abbr": "BHQ",
		"zip": "423000",
		"level": 3
	},
	{
		"code": "431003",
		"parent_code": "431000",
		"name": "苏仙区",
		"alias": "苏仙区",
		"pinyin": "SuXianQu",
		"abbr": "SXQ",
		"zip": "423000",
		"level": 3
	},
	{
		"code": "431021",
		"parent_code": "431000",
		"name": "桂阳县",
		"alias": "桂阳",
		"pinyin": "GuiYang",
		"abbr": "GY",
		"zip": "424400",
		"level": 3
	},
	{
		"code": "431022",
		"parent_code": "431000",
		"name": "宜章县",
		"alias": "宜章",
		"pinyin": "YiZhang",
		"abbr": "YZ",
		"zip": "424200",
		"level": 3
	},
	{
		"code": "431023",
		"parent_code": "431000",
		"name": "永兴县",
		"alias": "永兴",
		"pinyin": "YongXing",
		"abbr": "YX",
		"zip": "423300",
		"level": 3
	},
	{
		"code": "431024",
		"parent_code": "431000",
		"name": "嘉禾县",
		"alias": "嘉禾",
		"pinyin": "JiaHe",
		"abbr": "JH",
		"zip": "424500",
		"level": 3
	},
	{
		"code": "431025",
		"parent_code": "431000",
		"name": "临武县",
		"alias": "临武",
		"pinyin": "LinWu",
		"abbr": "LW",
		"zip": "424300",
		"level": 3
	},
	{
		"code": "431026",
		"parent_code": "431000",
		"name": "汝城县",
		"alias": "汝城",
		"pinyin": "RuCheng",
		"abbr": "RC",
		"zip": "424100",
		"level": 3
	},
	{
		"code": "431027",
		"parent_code": "431000",
		"name": "桂东县",
		"alias": "桂东",
		"pinyin": "GuiDong",
		"abbr": "GD",
		"zip": "423500",
		"level": 3
	},
	{
		"code": "431028",
		"parent_code": "431000",
		"name": "安仁县",
		"alias": "安仁",
		"pinyin": "AnRen",
		"abbr": "AR",
		"zip": "423600",
		"level": 3
	},
	{
		"code": "431081",
		"parent_code": "431000",
		"name": "资兴市",
		"alias": "资兴",
		"pinyin": "ZiXing",
		"abbr": "ZX",
		"zip": "423400",
		"level": 3
	},
	{
		"code": "431100",
		"parent_code": "430000",
		"name": "永州市",
		"alias": "永州",
		"pinyin": "YongZhou",
		"abbr": "YZ",
		"zip": "425000",
		"level": 2
	},
	{
		"code": "431102",
		"parent_code": "431100",
		"name": "零陵区",
		"alias": "零陵区",
		"pinyin": "LingLingQu",
		"abbr": "LLQ",
		"zip": "425007",
		"level": 3
	},
	{
		"code": "431103",
		"parent_code": "431100",
		"name": "冷水滩区",
		"alias": "冷水滩区",
		"pinyin": "LengShuiTanQu",
		"abbr": "LSTQ",
		"zip": "425000",
		"level": 3
	},
	{
		"code": "431121",
		"parent_code": "431100",
		"name": "祁阳县",
		"alias": "祁阳",
		"pinyin": "QiYang",
		"abbr": "QY",
		"zip": "426100",
		"level": 3
	},
	{
		"code": "431122",
		"parent_code": "431100",
		"name": "东安县",
		"alias": "东安",
		"pinyin": "DongAn",
		"abbr": "DA",
		"zip": "425900",
		"level": 3
	},
	{
		"code": "431123",
		"parent_code": "431100",
		"name": "双牌县",
		"alias": "双牌",
		"pinyin": "ShuangPai",
		"abbr": "SP",
		"zip": "425200",
		"level": 3
	},
	{
		"code": "431124",
		"parent_code": "431100",
		"name": "道县",
		"alias": "道县",
		"pinyin": "DaoXian",
		"abbr": "DX",
		"zip": "425300",
		"level": 3
	},
	{
		"code": "431125",
		"parent_code": "431100",
		"name": "江永县",
		"alias": "江永",
		"pinyin": "JiangYong",
		"abbr": "JY",
		"zip": "425400",
		"level": 3
	},
	{
		"code": "431126",
		"parent_code": "431100",
		"name": "宁远县",
		"alias": "宁远",
		"pinyin": "NingYuan",
		"abbr": "NY",
		"zip": "425600",
		"level": 3
	},
	{
		"code": "431127",
		"parent_code": "431100",
		"name": "蓝山县",
		"alias": "蓝山",
		"pinyin": "LanShan",
		"abbr": "LS",
		"zip": "425800",
		"level": 3
	},
	{
		"code": "431128",
		"parent_code": "431100",
		"name": "新田县",
		"alias": "新田",
		"pinyin": "XinTian",
		"abbr": "XT",
		"zip": "425700",
		"level": 3
	},
	{
		"code": "431129",
		"parent_code": "431100",
		"name": "江华瑶族自治县",
		"alias": "江华瑶族",
		"pinyin": "JiangHuaYaoZu",
		"abbr": "JHYZ",
		"zip": "425500",
		"level": 3
	},
	{
		"code": "431200",
		"parent_code": "430000",
		"name": "怀化市",
		"alias": "怀化",
		"pinyin": "HuaiHua",
		"abbr": "HH",
		"zip": "418000",
		"level": 2
	},
	{
		"code": "431202",
		"parent_code": "431200",
		"name": "鹤城区",
		"alias": "鹤城区",
		"pinyin": "HeChengQu",
		"abbr": "HCQ",
		"zip": "418000",
		"level": 3
	},
	{
		"code": "431221",
		"parent_code": "431200",
		"name": "中方县",
		"alias": "中方",
		"pinyin": "ZhongFang",
		"abbr": "ZF",
		"zip": "418005",
		"level": 3
	},
	{
		"code": "431222",
		"parent_code": "431200",
		"name": "沅陵县",
		"alias": "沅陵",
		"pinyin": "YuanLing",
		"abbr": "YL",
		"zip": "419600",
		"level": 3
	},
	{
		"code": "431223",
		"parent_code": "431200",
		"name": "辰溪县",
		"alias": "辰溪",
		"pinyin": "ChenXi",
		"abbr": "CX",
		"zip": "419500",
		"level": 3
	},
	{
		"code": "431224",
		"parent_code": "431200",
		"name": "溆浦县",
		"alias": "溆浦",
		"pinyin": "XuPu",
		"abbr": "XP",
		"zip": "419300",
		"level": 3
	},
	{
		"code": "431225",
		"parent_code": "431200",
		"name": "会同县",
		"alias": "会同",
		"pinyin": "HuiTong",
		"abbr": "HT",
		"zip": "418300",
		"level": 3
	},
	{
		"code": "431226",
		"parent_code": "431200",
		"name": "麻阳苗族自治县",
		"alias": "麻阳苗族",
		"pinyin": "MaYangMiaoZu",
		"abbr": "MYMZ",
		"zip": "419400",
		"level": 3
	},
	{
		"code": "431227",
		"parent_code": "431200",
		"name": "新晃侗族自治县",
		"alias": "新晃侗族",
		"pinyin": "XinHuangDongZu",
		"abbr": "XHDZ",
		"zip": "419200",
		"level": 3
	},
	{
		"code": "431228",
		"parent_code": "431200",
		"name": "芷江侗族自治县",
		"alias": "芷江侗族",
		"pinyin": "ZhiJiangDongZu",
		"abbr": "ZJDZ",
		"zip": "419100",
		"level": 3
	},
	{
		"code": "431229",
		"parent_code": "431200",
		"name": "靖州苗族侗族自治县",
		"alias": "靖州苗族侗族",
		"pinyin": "JingZhouMiaoZuDongZu",
		"abbr": "JZMZDZ",
		"zip": "418400",
		"level": 3
	},
	{
		"code": "431230",
		"parent_code": "431200",
		"name": "通道侗族自治县",
		"alias": "通道侗族",
		"pinyin": "TongDaoDongZu",
		"abbr": "TDDZ",
		"zip": "418500",
		"level": 3
	},
	{
		"code": "431281",
		"parent_code": "431200",
		"name": "洪江市",
		"alias": "洪江",
		"pinyin": "HongJiang",
		"abbr": "HJ",
		"zip": "418200",
		"level": 3
	},
	{
		"code": "431300",
		"parent_code": "430000",
		"name": "娄底市",
		"alias": "娄底",
		"pinyin": "LouDi",
		"abbr": "LD",
		"zip": "417000",
		"level": 2
	},
	{
		"code": "431302",
		"parent_code": "431300",
		"name": "娄星区",
		"alias": "娄星区",
		"pinyin": "LouXingQu",
		"abbr": "LXQ",
		"zip": "417000",
		"level": 3
	},
	{
		"code": "431321",
		"parent_code": "431300",
		"name": "双峰县",
		"alias": "双峰",
		"pinyin": "ShuangFeng",
		"abbr": "SF",
		"zip": "417700",
		"level": 3
	},
	{
		"code": "431322",
		"parent_code": "431300",
		"name": "新化县",
		"alias": "新化",
		"pinyin": "XinHua",
		"abbr": "XH",
		"zip": "417600",
		"level": 3
	},
	{
		"code": "431381",
		"parent_code": "431300",
		"name": "冷水江市",
		"alias": "冷水江",
		"pinyin": "LengShuiJiang",
		"abbr": "LSJ",
		"zip": "417500",
		"level": 3
	},
	{
		"code": "431382",
		"parent_code": "431300",
		"name": "涟源市",
		"alias": "涟源",
		"pinyin": "LianYuan",
		"abbr": "LY",
		"zip": "417100",
		"level": 3
	},
	{
		"code": "433100",
		"parent_code": "430000",
		"name": "湘西土家族苗族自治州",
		"alias": "湘西土家族苗族",
		"pinyin": "XiangXiTuJiaZuMiaoZu",
		"abbr": "XXTJZMZ",
		"zip": "416000",
		"level": 2
	},
	{
		"code": "433101",
		"parent_code": "433100",
		"name": "吉首市",
		"alias": "吉首",
		"pinyin": "JiShou",
		"abbr": "JS",
		"zip": "416000",
		"level": 3
	},
	{
		"code": "433122",
		"parent_code": "433100",
		"name": "泸溪县",
		"alias": "泸溪",
		"pinyin": "LuXi",
		"abbr": "LX",
		"zip": "416100",
		"level": 3
	},
	{
		"code": "433123",
		"parent_code": "433100",
		"name": "凤凰县",
		"alias": "凤凰",
		"pinyin": "FengHuang",
		"abbr": "FH",
		"zip": "416200",
		"level": 3
	},
	{
		"code": "433124",
		"parent_code": "433100",
		"name": "花垣县",
		"alias": "花垣",
		"pinyin": "HuaYuan",
		"abbr": "HY",
		"zip": "416400",
		"level": 3
	},
	{
		"code": "433125",
		"parent_code": "433100",
		"name": "保靖县",
		"alias": "保靖",
		"pinyin": "BaoJing",
		"abbr": "BJ",
		"zip": "416500",
		"level": 3
	},
	{
		"code": "433126",
		"parent_code": "433100",
		"name": "古丈县",
		"alias": "古丈",
		"pinyin": "GuZhang",
		"abbr": "GZ",
		"zip": "416300",
		"level": 3
	},
	{
		"code": "433127",
		"parent_code": "433100",
		"name": "永顺县",
		"alias": "永顺",
		"pinyin": "YongShun",
		"abbr": "YS",
		"zip": "416700",
		"level": 3
	},
	{
		"code": "433130",
		"parent_code": "433100",
		"name": "龙山县",
		"alias": "龙山",
		"pinyin": "LongShan",
		"abbr": "LS",
		"zip": "416800",
		"level": 3
	},
	{
		"code": "440000",
		"parent_code": null,
		"name": "广东省",
		"alias": "广东",
		"pinyin": "GuangDong",
		"abbr": "GD",
		"zip": "510000",
		"level": 1
	},
	{
		"code": "440100",
		"parent_code": "440000",
		"name": "广州市",
		"alias": "广州",
		"pinyin": "GuangZhou",
		"abbr": "GZ",
		"zip": "510000",
		"level": 2
	},
	{
		"code": "440103",
		"parent_code": "440100",
		"name": "荔湾区",
		"alias": "荔湾区",
		"pinyin": "LiWanQu",
		"abbr": "LWQ",
		"zip": "510145",
		"level": 3
	},
	{
		"code": "440104",
		"parent_code": "440100",
		"name": "越秀区",
		"alias": "越秀区",
		"pinyin": "YueXiuQu",
		"abbr": "YXQ",
		"zip": "510180",
		"level": 3
	},
	{
		"code": "440105",
		"parent_code": "440100",
		"name": "海珠区",
		"alias": "海珠区",
		"pinyin": "HaiZhuQu",
		"abbr": "HZQ",
		"zip": "510220",
		"level": 3
	},
	{
		"code": "440106",
		"parent_code": "440100",
		"name": "天河区",
		"alias": "天河区",
		"pinyin": "TianHeQu",
		"abbr": "THQ",
		"zip": "510510",
		"level": 3
	},
	{
		"code": "440111",
		"parent_code": "440100",
		"name": "白云区",
		"alias": "白云区",
		"pinyin": "BaiYunQu",
		"abbr": "BYQ",
		"zip": "510440",
		"level": 3
	},
	{
		"code": "440112",
		"parent_code": "440100",
		"name": "黄埔区",
		"alias": "黄埔区",
		"pinyin": "HuangBuQu",
		"abbr": "HBQ",
		"zip": "510700",
		"level": 3
	},
	{
		"code": "440113",
		"parent_code": "440100",
		"name": "番禺区",
		"alias": "番禺区",
		"pinyin": "FanYuQu",
		"abbr": "FYQ",
		"zip": "511400",
		"level": 3
	},
	{
		"code": "440114",
		"parent_code": "440100",
		"name": "花都区",
		"alias": "花都区",
		"pinyin": "HuaDouQu",
		"abbr": "HDQ",
		"zip": "510800",
		"level": 3
	},
	{
		"code": "440115",
		"parent_code": "440100",
		"name": "南沙区",
		"alias": "南沙区",
		"pinyin": "NanShaQu",
		"abbr": "NSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "440116",
		"parent_code": "440100",
		"name": "萝岗区",
		"alias": "萝岗区",
		"pinyin": "LuoGangQu",
		"abbr": "LGQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "440183",
		"parent_code": "440100",
		"name": "增城市",
		"alias": "增城",
		"pinyin": "ZengCheng",
		"abbr": "ZC",
		"zip": "511300",
		"level": 3
	},
	{
		"code": "440184",
		"parent_code": "440100",
		"name": "从化市",
		"alias": "从化",
		"pinyin": "CongHua",
		"abbr": "CH",
		"zip": "510900",
		"level": 3
	},
	{
		"code": "440200",
		"parent_code": "440000",
		"name": "韶关市",
		"alias": "韶关",
		"pinyin": "ShaoGuan",
		"abbr": "SG",
		"zip": "512000",
		"level": 2
	},
	{
		"code": "440203",
		"parent_code": "440200",
		"name": "武江区",
		"alias": "武江区",
		"pinyin": "WuJiangQu",
		"abbr": "WJQ",
		"zip": "512026",
		"level": 3
	},
	{
		"code": "440204",
		"parent_code": "440200",
		"name": "浈江区",
		"alias": "浈江区",
		"pinyin": "ZhenJiangQu",
		"abbr": "ZJQ",
		"zip": "512023",
		"level": 3
	},
	{
		"code": "440205",
		"parent_code": "440200",
		"name": "曲江区",
		"alias": "曲江区",
		"pinyin": "QuJiangQu",
		"abbr": "QJQ",
		"zip": "512100",
		"level": 3
	},
	{
		"code": "440222",
		"parent_code": "440200",
		"name": "始兴县",
		"alias": "始兴",
		"pinyin": "ShiXing",
		"abbr": "SX",
		"zip": "512500",
		"level": 3
	},
	{
		"code": "440224",
		"parent_code": "440200",
		"name": "仁化县",
		"alias": "仁化",
		"pinyin": "RenHua",
		"abbr": "RH",
		"zip": "512300",
		"level": 3
	},
	{
		"code": "440229",
		"parent_code": "440200",
		"name": "翁源县",
		"alias": "翁源",
		"pinyin": "WengYuan",
		"abbr": "WY",
		"zip": "512600",
		"level": 3
	},
	{
		"code": "440232",
		"parent_code": "440200",
		"name": "乳源瑶族自治县",
		"alias": "乳源瑶族",
		"pinyin": "RuYuanYaoZu",
		"abbr": "RYYZ",
		"zip": "512700",
		"level": 3
	},
	{
		"code": "440233",
		"parent_code": "440200",
		"name": "新丰县",
		"alias": "新丰",
		"pinyin": "XinFeng",
		"abbr": "XF",
		"zip": "511100",
		"level": 3
	},
	{
		"code": "440281",
		"parent_code": "440200",
		"name": "乐昌市",
		"alias": "乐昌",
		"pinyin": "LeChang",
		"abbr": "LC",
		"zip": "512200",
		"level": 3
	},
	{
		"code": "440282",
		"parent_code": "440200",
		"name": "南雄市",
		"alias": "南雄",
		"pinyin": "NanXiong",
		"abbr": "NX",
		"zip": "512400",
		"level": 3
	},
	{
		"code": "440300",
		"parent_code": "440000",
		"name": "深圳市",
		"alias": "深圳",
		"pinyin": "ShenZhen",
		"abbr": "SZ",
		"zip": "518000",
		"level": 2
	},
	{
		"code": "440303",
		"parent_code": "440300",
		"name": "罗湖区",
		"alias": "罗湖区",
		"pinyin": "LuoHuQu",
		"abbr": "LHQ",
		"zip": "518002",
		"level": 3
	},
	{
		"code": "440304",
		"parent_code": "440300",
		"name": "福田区",
		"alias": "福田区",
		"pinyin": "FuTianQu",
		"abbr": "FTQ",
		"zip": "518031",
		"level": 3
	},
	{
		"code": "440305",
		"parent_code": "440300",
		"name": "南山区",
		"alias": "南山区",
		"pinyin": "NanShanQu",
		"abbr": "NSQ",
		"zip": "518052",
		"level": 3
	},
	{
		"code": "440306",
		"parent_code": "440300",
		"name": "宝安区",
		"alias": "宝安区",
		"pinyin": "BaoAnQu",
		"abbr": "BAQ",
		"zip": "518101",
		"level": 3
	},
	{
		"code": "440307",
		"parent_code": "440300",
		"name": "龙岗区",
		"alias": "龙岗区",
		"pinyin": "LongGangQu",
		"abbr": "LGQ",
		"zip": "518116",
		"level": 3
	},
	{
		"code": "440308",
		"parent_code": "440300",
		"name": "盐田区",
		"alias": "盐田区",
		"pinyin": "YanTianQu",
		"abbr": "YTQ",
		"zip": "518083",
		"level": 3
	},
	{
		"code": "440400",
		"parent_code": "440000",
		"name": "珠海市",
		"alias": "珠海",
		"pinyin": "ZhuHai",
		"abbr": "ZH",
		"zip": "519000",
		"level": 2
	},
	{
		"code": "440402",
		"parent_code": "440400",
		"name": "香洲区",
		"alias": "香洲区",
		"pinyin": "XiangZhouQu",
		"abbr": "XZQ",
		"zip": "519000",
		"level": 3
	},
	{
		"code": "440403",
		"parent_code": "440400",
		"name": "斗门区",
		"alias": "斗门区",
		"pinyin": "DouMenQu",
		"abbr": "DMQ",
		"zip": "519100",
		"level": 3
	},
	{
		"code": "440404",
		"parent_code": "440400",
		"name": "金湾区",
		"alias": "金湾区",
		"pinyin": "JinWanQu",
		"abbr": "JWQ",
		"zip": "519090",
		"level": 3
	},
	{
		"code": "440500",
		"parent_code": "440000",
		"name": "汕头市",
		"alias": "汕头",
		"pinyin": "ShanTou",
		"abbr": "ST",
		"zip": "515000",
		"level": 2
	},
	{
		"code": "440507",
		"parent_code": "440500",
		"name": "龙湖区",
		"alias": "龙湖区",
		"pinyin": "LongHuQu",
		"abbr": "LHQ",
		"zip": "515041",
		"level": 3
	},
	{
		"code": "440511",
		"parent_code": "440500",
		"name": "金平区",
		"alias": "金平区",
		"pinyin": "JinPingQu",
		"abbr": "JPQ",
		"zip": "515041",
		"level": 3
	},
	{
		"code": "440512",
		"parent_code": "440500",
		"name": "濠江区",
		"alias": "濠江区",
		"pinyin": "HaoJiangQu",
		"abbr": "HJQ",
		"zip": "515071",
		"level": 3
	},
	{
		"code": "440513",
		"parent_code": "440500",
		"name": "潮阳区",
		"alias": "潮阳区",
		"pinyin": "ChaoYangQu",
		"abbr": "CYQ",
		"zip": "515100",
		"level": 3
	},
	{
		"code": "440514",
		"parent_code": "440500",
		"name": "潮南区",
		"alias": "潮南区",
		"pinyin": "ChaoNanQu",
		"abbr": "CNQ",
		"zip": "515144",
		"level": 3
	},
	{
		"code": "440515",
		"parent_code": "440500",
		"name": "澄海区",
		"alias": "澄海区",
		"pinyin": "ChengHaiQu",
		"abbr": "CHQ",
		"zip": "515800",
		"level": 3
	},
	{
		"code": "440523",
		"parent_code": "440500",
		"name": "南澳县",
		"alias": "南澳",
		"pinyin": "NanAo",
		"abbr": "NA",
		"zip": "515900",
		"level": 3
	},
	{
		"code": "440600",
		"parent_code": "440000",
		"name": "佛山市",
		"alias": "佛山",
		"pinyin": "FuShan",
		"abbr": "FS",
		"zip": "528000",
		"level": 2
	},
	{
		"code": "440604",
		"parent_code": "440600",
		"name": "禅城区",
		"alias": "禅城区",
		"pinyin": "ChanChengQu",
		"abbr": "CCQ",
		"zip": "528000",
		"level": 3
	},
	{
		"code": "440605",
		"parent_code": "440600",
		"name": "南海区",
		"alias": "南海区",
		"pinyin": "NanHaiQu",
		"abbr": "NHQ",
		"zip": "528200",
		"level": 3
	},
	{
		"code": "440606",
		"parent_code": "440600",
		"name": "顺德区",
		"alias": "顺德区",
		"pinyin": "ShunDeQu",
		"abbr": "SDQ",
		"zip": "528300",
		"level": 3
	},
	{
		"code": "440607",
		"parent_code": "440600",
		"name": "三水区",
		"alias": "三水区",
		"pinyin": "SanShuiQu",
		"abbr": "SSQ",
		"zip": "528100",
		"level": 3
	},
	{
		"code": "440608",
		"parent_code": "440600",
		"name": "高明区",
		"alias": "高明区",
		"pinyin": "GaoMingQu",
		"abbr": "GMQ",
		"zip": "528500",
		"level": 3
	},
	{
		"code": "440700",
		"parent_code": "440000",
		"name": "江门市",
		"alias": "江门",
		"pinyin": "JiangMen",
		"abbr": "JM",
		"zip": "529000",
		"level": 2
	},
	{
		"code": "440703",
		"parent_code": "440700",
		"name": "蓬江区",
		"alias": "蓬江区",
		"pinyin": "PengJiangQu",
		"abbr": "PJQ",
		"zip": "529051",
		"level": 3
	},
	{
		"code": "440704",
		"parent_code": "440700",
		"name": "江海区",
		"alias": "江海区",
		"pinyin": "JiangHaiQu",
		"abbr": "JHQ",
		"zip": "529000",
		"level": 3
	},
	{
		"code": "440705",
		"parent_code": "440700",
		"name": "新会区",
		"alias": "新会区",
		"pinyin": "XinHuiQu",
		"abbr": "XHQ",
		"zip": "529100",
		"level": 3
	},
	{
		"code": "440781",
		"parent_code": "440700",
		"name": "台山市",
		"alias": "台山",
		"pinyin": "TaiShan",
		"abbr": "TS",
		"zip": "529200",
		"level": 3
	},
	{
		"code": "440783",
		"parent_code": "440700",
		"name": "开平市",
		"alias": "开平",
		"pinyin": "KaiPing",
		"abbr": "KP",
		"zip": "529300",
		"level": 3
	},
	{
		"code": "440784",
		"parent_code": "440700",
		"name": "鹤山市",
		"alias": "鹤山",
		"pinyin": "HeShan",
		"abbr": "HS",
		"zip": "529700",
		"level": 3
	},
	{
		"code": "440785",
		"parent_code": "440700",
		"name": "恩平市",
		"alias": "恩平",
		"pinyin": "EnPing",
		"abbr": "EP",
		"zip": "529400",
		"level": 3
	},
	{
		"code": "440800",
		"parent_code": "440000",
		"name": "湛江市",
		"alias": "湛江",
		"pinyin": "ZhanJiang",
		"abbr": "ZJ",
		"zip": "524000",
		"level": 2
	},
	{
		"code": "440802",
		"parent_code": "440800",
		"name": "赤坎区",
		"alias": "赤坎区",
		"pinyin": "ChiKanQu",
		"abbr": "CKQ",
		"zip": "524033",
		"level": 3
	},
	{
		"code": "440803",
		"parent_code": "440800",
		"name": "霞山区",
		"alias": "霞山区",
		"pinyin": "XiaShanQu",
		"abbr": "XSQ",
		"zip": "524002",
		"level": 3
	},
	{
		"code": "440804",
		"parent_code": "440800",
		"name": "坡头区",
		"alias": "坡头区",
		"pinyin": "PoTouQu",
		"abbr": "PTQ",
		"zip": "524057",
		"level": 3
	},
	{
		"code": "440811",
		"parent_code": "440800",
		"name": "麻章区",
		"alias": "麻章区",
		"pinyin": "MaZhangQu",
		"abbr": "MZQ",
		"zip": "524003",
		"level": 3
	},
	{
		"code": "440823",
		"parent_code": "440800",
		"name": "遂溪县",
		"alias": "遂溪",
		"pinyin": "SuiXi",
		"abbr": "SX",
		"zip": "524300",
		"level": 3
	},
	{
		"code": "440825",
		"parent_code": "440800",
		"name": "徐闻县",
		"alias": "徐闻",
		"pinyin": "XuWen",
		"abbr": "XW",
		"zip": "524100",
		"level": 3
	},
	{
		"code": "440881",
		"parent_code": "440800",
		"name": "廉江市",
		"alias": "廉江",
		"pinyin": "LianJiang",
		"abbr": "LJ",
		"zip": "524400",
		"level": 3
	},
	{
		"code": "440882",
		"parent_code": "440800",
		"name": "雷州市",
		"alias": "雷州",
		"pinyin": "LeiZhou",
		"abbr": "LZ",
		"zip": "524200",
		"level": 3
	},
	{
		"code": "440883",
		"parent_code": "440800",
		"name": "吴川市",
		"alias": "吴川",
		"pinyin": "WuChuan",
		"abbr": "WC",
		"zip": "524500",
		"level": 3
	},
	{
		"code": "440900",
		"parent_code": "440000",
		"name": "茂名市",
		"alias": "茂名",
		"pinyin": "MaoMing",
		"abbr": "MM",
		"zip": "525000",
		"level": 2
	},
	{
		"code": "440902",
		"parent_code": "440900",
		"name": "茂南区",
		"alias": "茂南区",
		"pinyin": "MaoNanQu",
		"abbr": "MNQ",
		"zip": "525011",
		"level": 3
	},
	{
		"code": "440903",
		"parent_code": "440900",
		"name": "茂港区",
		"alias": "茂港区",
		"pinyin": "MaoGangQu",
		"abbr": "MGQ",
		"zip": "525027",
		"level": 3
	},
	{
		"code": "440923",
		"parent_code": "440900",
		"name": "电白县",
		"alias": "电白",
		"pinyin": "DianBai",
		"abbr": "DB",
		"zip": "525400",
		"level": 3
	},
	{
		"code": "440981",
		"parent_code": "440900",
		"name": "高州市",
		"alias": "高州",
		"pinyin": "GaoZhou",
		"abbr": "GZ",
		"zip": "525200",
		"level": 3
	},
	{
		"code": "440982",
		"parent_code": "440900",
		"name": "化州市",
		"alias": "化州",
		"pinyin": "HuaZhou",
		"abbr": "HZ",
		"zip": "525100",
		"level": 3
	},
	{
		"code": "440983",
		"parent_code": "440900",
		"name": "信宜市",
		"alias": "信宜",
		"pinyin": "XinYi",
		"abbr": "XY",
		"zip": "525300",
		"level": 3
	},
	{
		"code": "441200",
		"parent_code": "440000",
		"name": "肇庆市",
		"alias": "肇庆",
		"pinyin": "ZhaoQing",
		"abbr": "ZQ",
		"zip": "526000",
		"level": 2
	},
	{
		"code": "441202",
		"parent_code": "441200",
		"name": "端州区",
		"alias": "端州区",
		"pinyin": "DuanZhouQu",
		"abbr": "DZQ",
		"zip": "526040",
		"level": 3
	},
	{
		"code": "441203",
		"parent_code": "441200",
		"name": "鼎湖区",
		"alias": "鼎湖区",
		"pinyin": "DingHuQu",
		"abbr": "DHQ",
		"zip": "526070",
		"level": 3
	},
	{
		"code": "441223",
		"parent_code": "441200",
		"name": "广宁县",
		"alias": "广宁",
		"pinyin": "GuangNing",
		"abbr": "GN",
		"zip": "526300",
		"level": 3
	},
	{
		"code": "441224",
		"parent_code": "441200",
		"name": "怀集县",
		"alias": "怀集",
		"pinyin": "HuaiJi",
		"abbr": "HJ",
		"zip": "526400",
		"level": 3
	},
	{
		"code": "441225",
		"parent_code": "441200",
		"name": "封开县",
		"alias": "封开",
		"pinyin": "FengKai",
		"abbr": "FK",
		"zip": "526500",
		"level": 3
	},
	{
		"code": "441226",
		"parent_code": "441200",
		"name": "德庆县",
		"alias": "德庆",
		"pinyin": "DeQing",
		"abbr": "DQ",
		"zip": "526600",
		"level": 3
	},
	{
		"code": "441283",
		"parent_code": "441200",
		"name": "高要市",
		"alias": "高要",
		"pinyin": "GaoYao",
		"abbr": "GY",
		"zip": "526100",
		"level": 3
	},
	{
		"code": "441284",
		"parent_code": "441200",
		"name": "四会市",
		"alias": "四会",
		"pinyin": "SiHui",
		"abbr": "SH",
		"zip": "526200",
		"level": 3
	},
	{
		"code": "441300",
		"parent_code": "440000",
		"name": "惠州市",
		"alias": "惠州",
		"pinyin": "HuiZhou",
		"abbr": "HZ",
		"zip": "516000",
		"level": 2
	},
	{
		"code": "441302",
		"parent_code": "441300",
		"name": "惠城区",
		"alias": "惠城区",
		"pinyin": "HuiChengQu",
		"abbr": "HCQ",
		"zip": "516001",
		"level": 3
	},
	{
		"code": "441303",
		"parent_code": "441300",
		"name": "惠阳区",
		"alias": "惠阳区",
		"pinyin": "HuiYangQu",
		"abbr": "HYQ",
		"zip": "516200",
		"level": 3
	},
	{
		"code": "441322",
		"parent_code": "441300",
		"name": "博罗县",
		"alias": "博罗",
		"pinyin": "BoLuo",
		"abbr": "BL",
		"zip": "516100",
		"level": 3
	},
	{
		"code": "441323",
		"parent_code": "441300",
		"name": "惠东县",
		"alias": "惠东",
		"pinyin": "HuiDong",
		"abbr": "HD",
		"zip": "516300",
		"level": 3
	},
	{
		"code": "441324",
		"parent_code": "441300",
		"name": "龙门县",
		"alias": "龙门",
		"pinyin": "LongMen",
		"abbr": "LM",
		"zip": "516800",
		"level": 3
	},
	{
		"code": "441400",
		"parent_code": "440000",
		"name": "梅州市",
		"alias": "梅州",
		"pinyin": "MeiZhou",
		"abbr": "MZ",
		"zip": "514000",
		"level": 2
	},
	{
		"code": "441402",
		"parent_code": "441400",
		"name": "梅江区",
		"alias": "梅江区",
		"pinyin": "MeiJiangQu",
		"abbr": "MJQ",
		"zip": "514000",
		"level": 3
	},
	{
		"code": "441421",
		"parent_code": "441400",
		"name": "梅县",
		"alias": "梅县",
		"pinyin": "MeiXian",
		"abbr": "MX",
		"zip": "514700",
		"level": 3
	},
	{
		"code": "441422",
		"parent_code": "441400",
		"name": "大埔县",
		"alias": "大埔",
		"pinyin": "DaBu",
		"abbr": "DB",
		"zip": "514200",
		"level": 3
	},
	{
		"code": "441423",
		"parent_code": "441400",
		"name": "丰顺县",
		"alias": "丰顺",
		"pinyin": "FengShun",
		"abbr": "FS",
		"zip": "514300",
		"level": 3
	},
	{
		"code": "441424",
		"parent_code": "441400",
		"name": "五华县",
		"alias": "五华",
		"pinyin": "WuHua",
		"abbr": "WH",
		"zip": "514400",
		"level": 3
	},
	{
		"code": "441426",
		"parent_code": "441400",
		"name": "平远县",
		"alias": "平远",
		"pinyin": "PingYuan",
		"abbr": "PY",
		"zip": "514600",
		"level": 3
	},
	{
		"code": "441427",
		"parent_code": "441400",
		"name": "蕉岭县",
		"alias": "蕉岭",
		"pinyin": "JiaoLing",
		"abbr": "JL",
		"zip": "514100",
		"level": 3
	},
	{
		"code": "441481",
		"parent_code": "441400",
		"name": "兴宁市",
		"alias": "兴宁",
		"pinyin": "XingNing",
		"abbr": "XN",
		"zip": "514500",
		"level": 3
	},
	{
		"code": "441500",
		"parent_code": "440000",
		"name": "汕尾市",
		"alias": "汕尾",
		"pinyin": "ShanWei",
		"abbr": "SW",
		"zip": "516600",
		"level": 2
	},
	{
		"code": "441502",
		"parent_code": "441500",
		"name": "城区",
		"alias": "城区",
		"pinyin": "ChengQu",
		"abbr": "CQ",
		"zip": "516601",
		"level": 3
	},
	{
		"code": "441521",
		"parent_code": "441500",
		"name": "海丰县",
		"alias": "海丰",
		"pinyin": "HaiFeng",
		"abbr": "HF",
		"zip": "516400",
		"level": 3
	},
	{
		"code": "441523",
		"parent_code": "441500",
		"name": "陆河县",
		"alias": "陆河",
		"pinyin": "LuHe",
		"abbr": "LH",
		"zip": "516700",
		"level": 3
	},
	{
		"code": "441581",
		"parent_code": "441500",
		"name": "陆丰市",
		"alias": "陆丰",
		"pinyin": "LuFeng",
		"abbr": "LF",
		"zip": "516500",
		"level": 3
	},
	{
		"code": "441600",
		"parent_code": "440000",
		"name": "河源市",
		"alias": "河源",
		"pinyin": "HeYuan",
		"abbr": "HY",
		"zip": "517000",
		"level": 2
	},
	{
		"code": "441602",
		"parent_code": "440000",
		"name": "源城区",
		"alias": "源城区",
		"pinyin": "YuanChengQu",
		"abbr": "YCQ",
		"zip": "517000",
		"level": 2
	},
	{
		"code": "441621",
		"parent_code": "441600",
		"name": "紫金县",
		"alias": "紫金",
		"pinyin": "ZiJin",
		"abbr": "ZJ",
		"zip": "517400",
		"level": 3
	},
	{
		"code": "441622",
		"parent_code": "441600",
		"name": "龙川县",
		"alias": "龙川",
		"pinyin": "LongChuan",
		"abbr": "LC",
		"zip": "517300",
		"level": 3
	},
	{
		"code": "441623",
		"parent_code": "441600",
		"name": "连平县",
		"alias": "连平",
		"pinyin": "LianPing",
		"abbr": "LP",
		"zip": "517100",
		"level": 3
	},
	{
		"code": "441624",
		"parent_code": "441600",
		"name": "和平县",
		"alias": "和平",
		"pinyin": "HePing",
		"abbr": "HP",
		"zip": "517200",
		"level": 3
	},
	{
		"code": "441625",
		"parent_code": "441600",
		"name": "东源县",
		"alias": "东源",
		"pinyin": "DongYuan",
		"abbr": "DY",
		"zip": "517500",
		"level": 3
	},
	{
		"code": "441700",
		"parent_code": "440000",
		"name": "阳江市",
		"alias": "阳江",
		"pinyin": "YangJiang",
		"abbr": "YJ",
		"zip": "529500",
		"level": 2
	},
	{
		"code": "441702",
		"parent_code": "441700",
		"name": "江城区",
		"alias": "江城区",
		"pinyin": "JiangChengQu",
		"abbr": "JCQ",
		"zip": "529525",
		"level": 3
	},
	{
		"code": "441721",
		"parent_code": "441700",
		"name": "阳西县",
		"alias": "阳西",
		"pinyin": "YangXi",
		"abbr": "YX",
		"zip": "529800",
		"level": 3
	},
	{
		"code": "441723",
		"parent_code": "441700",
		"name": "阳东县",
		"alias": "阳东",
		"pinyin": "YangDong",
		"abbr": "YD",
		"zip": "529931",
		"level": 3
	},
	{
		"code": "441781",
		"parent_code": "441700",
		"name": "阳春市",
		"alias": "阳春",
		"pinyin": "YangChun",
		"abbr": "YC",
		"zip": "529600",
		"level": 3
	},
	{
		"code": "441800",
		"parent_code": "440000",
		"name": "清远市",
		"alias": "清远",
		"pinyin": "QingYuan",
		"abbr": "QY",
		"zip": "511500",
		"level": 2
	},
	{
		"code": "441802",
		"parent_code": "441800",
		"name": "清城区",
		"alias": "清城区",
		"pinyin": "QingChengQu",
		"abbr": "QCQ",
		"zip": "511500",
		"level": 3
	},
	{
		"code": "441821",
		"parent_code": "441800",
		"name": "佛冈县",
		"alias": "佛冈",
		"pinyin": "FuGang",
		"abbr": "FG",
		"zip": "511600",
		"level": 3
	},
	{
		"code": "441823",
		"parent_code": "441800",
		"name": "阳山县",
		"alias": "阳山",
		"pinyin": "YangShan",
		"abbr": "YS",
		"zip": "513100",
		"level": 3
	},
	{
		"code": "441825",
		"parent_code": "441800",
		"name": "连山壮族瑶族自治县",
		"alias": "连山壮族瑶族",
		"pinyin": "LianShanZhuangZuYaoZu",
		"abbr": "LSZZYZ",
		"zip": "513200",
		"level": 3
	},
	{
		"code": "441826",
		"parent_code": "441800",
		"name": "连南瑶族自治县",
		"alias": "连南瑶族",
		"pinyin": "LianNanYaoZu",
		"abbr": "LNYZ",
		"zip": "513300",
		"level": 3
	},
	{
		"code": "441881",
		"parent_code": "441800",
		"name": "英德市",
		"alias": "英德",
		"pinyin": "YingDe",
		"abbr": "YD",
		"zip": "513000",
		"level": 3
	},
	{
		"code": "441882",
		"parent_code": "441800",
		"name": "连州市",
		"alias": "连州",
		"pinyin": "LianZhou",
		"abbr": "LZ",
		"zip": "513400",
		"level": 3
	},
	{
		"code": "441900",
		"parent_code": "440000",
		"name": "东莞市",
		"alias": "东莞",
		"pinyin": "DongGuan",
		"abbr": "DG",
		"zip": "523000",
		"level": 2
	},
	{
		"code": "442000",
		"parent_code": "440000",
		"name": "中山市",
		"alias": "中山",
		"pinyin": "ZhongShan",
		"abbr": "ZS",
		"zip": "528400",
		"level": 2
	},
	{
		"code": "445100",
		"parent_code": "440000",
		"name": "潮州市",
		"alias": "潮州",
		"pinyin": "ChaoZhou",
		"abbr": "CZ",
		"zip": "521000",
		"level": 2
	},
	{
		"code": "445102",
		"parent_code": "445100",
		"name": "湘桥区",
		"alias": "湘桥区",
		"pinyin": "XiangQiaoQu",
		"abbr": "XQQ",
		"zip": "521000",
		"level": 3
	},
	{
		"code": "445122",
		"parent_code": "445100",
		"name": "饶平县",
		"alias": "饶平",
		"pinyin": "RaoPing",
		"abbr": "RP",
		"zip": "515700",
		"level": 3
	},
	{
		"code": "445200",
		"parent_code": "440000",
		"name": "揭阳市",
		"alias": "揭阳",
		"pinyin": "JieYang",
		"abbr": "JY",
		"zip": "522000",
		"level": 2
	},
	{
		"code": "445202",
		"parent_code": "445200",
		"name": "榕城区",
		"alias": "榕城区",
		"pinyin": "RongChengQu",
		"abbr": "RCQ",
		"zip": "522095",
		"level": 3
	},
	{
		"code": "445222",
		"parent_code": "445200",
		"name": "揭西县",
		"alias": "揭西",
		"pinyin": "JieXi",
		"abbr": "JX",
		"zip": "515400",
		"level": 3
	},
	{
		"code": "445224",
		"parent_code": "445200",
		"name": "惠来县",
		"alias": "惠来",
		"pinyin": "HuiLai",
		"abbr": "HL",
		"zip": "515200",
		"level": 3
	},
	{
		"code": "445281",
		"parent_code": "445200",
		"name": "普宁市",
		"alias": "普宁",
		"pinyin": "PuNing",
		"abbr": "PN",
		"zip": "515300",
		"level": 3
	},
	{
		"code": "445300",
		"parent_code": "440000",
		"name": "云浮市",
		"alias": "云浮",
		"pinyin": "YunFu",
		"abbr": "YF",
		"zip": "527300",
		"level": 2
	},
	{
		"code": "445302",
		"parent_code": "445300",
		"name": "云城区",
		"alias": "云城区",
		"pinyin": "YunChengQu",
		"abbr": "YCQ",
		"zip": "527300",
		"level": 3
	},
	{
		"code": "445321",
		"parent_code": "445300",
		"name": "新兴县",
		"alias": "新兴",
		"pinyin": "XinXing",
		"abbr": "XX",
		"zip": "527400",
		"level": 3
	},
	{
		"code": "445322",
		"parent_code": "445300",
		"name": "郁南县",
		"alias": "郁南",
		"pinyin": "YuNan",
		"abbr": "YN",
		"zip": "527100",
		"level": 3
	},
	{
		"code": "445323",
		"parent_code": "445300",
		"name": "云安县",
		"alias": "云安",
		"pinyin": "YunAn",
		"abbr": "YA",
		"zip": "527500",
		"level": 3
	},
	{
		"code": "445381",
		"parent_code": "445300",
		"name": "罗定市",
		"alias": "罗定",
		"pinyin": "LuoDing",
		"abbr": "LD",
		"zip": "527200",
		"level": 3
	},
	{
		"code": "450000",
		"parent_code": null,
		"name": "广西壮族自治区",
		"alias": "广西",
		"pinyin": "GuangXiZhuangZu",
		"abbr": "GXZZ",
		"zip": "530000",
		"level": 1
	},
	{
		"code": "450100",
		"parent_code": "450000",
		"name": "南宁市",
		"alias": "南宁",
		"pinyin": "NanNing",
		"abbr": "NN",
		"zip": "530000",
		"level": 2
	},
	{
		"code": "450102",
		"parent_code": "450100",
		"name": "兴宁区",
		"alias": "兴宁区",
		"pinyin": "XingNingQu",
		"abbr": "XNQ",
		"zip": "530012",
		"level": 3
	},
	{
		"code": "450103",
		"parent_code": "450100",
		"name": "青秀区",
		"alias": "青秀区",
		"pinyin": "QingXiuQu",
		"abbr": "QXQ",
		"zip": "530022",
		"level": 3
	},
	{
		"code": "450105",
		"parent_code": "450100",
		"name": "江南区",
		"alias": "江南区",
		"pinyin": "JiangNanQu",
		"abbr": "JNQ",
		"zip": "530031",
		"level": 3
	},
	{
		"code": "450107",
		"parent_code": "450100",
		"name": "西乡塘区",
		"alias": "西乡塘区",
		"pinyin": "XiXiangTangQu",
		"abbr": "XXTQ",
		"zip": "530001",
		"level": 3
	},
	{
		"code": "450108",
		"parent_code": "450100",
		"name": "良庆区",
		"alias": "良庆区",
		"pinyin": "LiangQingQu",
		"abbr": "LQQ",
		"zip": "530200",
		"level": 3
	},
	{
		"code": "450109",
		"parent_code": "450100",
		"name": "邕宁区",
		"alias": "邕宁区",
		"pinyin": "YongNingQu",
		"abbr": "YNQ",
		"zip": "530200",
		"level": 3
	},
	{
		"code": "450122",
		"parent_code": "450100",
		"name": "武鸣县",
		"alias": "武鸣",
		"pinyin": "WuMing",
		"abbr": "WM",
		"zip": "530100",
		"level": 3
	},
	{
		"code": "450123",
		"parent_code": "450100",
		"name": "隆安县",
		"alias": "隆安",
		"pinyin": "LongAn",
		"abbr": "LA",
		"zip": "532700",
		"level": 3
	},
	{
		"code": "450124",
		"parent_code": "450100",
		"name": "马山县",
		"alias": "马山",
		"pinyin": "MaShan",
		"abbr": "MS",
		"zip": "530600",
		"level": 3
	},
	{
		"code": "450125",
		"parent_code": "450100",
		"name": "上林县",
		"alias": "上林",
		"pinyin": "ShangLin",
		"abbr": "SL",
		"zip": "530500",
		"level": 3
	},
	{
		"code": "450126",
		"parent_code": "450100",
		"name": "宾阳县",
		"alias": "宾阳",
		"pinyin": "BinYang",
		"abbr": "BY",
		"zip": "530400",
		"level": 3
	},
	{
		"code": "450127",
		"parent_code": "450100",
		"name": "横县",
		"alias": "横县",
		"pinyin": "HengXian",
		"abbr": "HX",
		"zip": "530300",
		"level": 3
	},
	{
		"code": "450200",
		"parent_code": "450000",
		"name": "柳州市",
		"alias": "柳州",
		"pinyin": "LiuZhou",
		"abbr": "LZ",
		"zip": "545000",
		"level": 2
	},
	{
		"code": "450202",
		"parent_code": "450200",
		"name": "城中区",
		"alias": "城中区",
		"pinyin": "ChengZhongQu",
		"abbr": "CZQ",
		"zip": "545001",
		"level": 3
	},
	{
		"code": "450203",
		"parent_code": "450200",
		"name": "鱼峰区",
		"alias": "鱼峰区",
		"pinyin": "YuFengQu",
		"abbr": "YFQ",
		"zip": "545005",
		"level": 3
	},
	{
		"code": "450204",
		"parent_code": "450200",
		"name": "柳南区",
		"alias": "柳南区",
		"pinyin": "LiuNanQu",
		"abbr": "LNQ",
		"zip": "545005",
		"level": 3
	},
	{
		"code": "450205",
		"parent_code": "450200",
		"name": "柳北区",
		"alias": "柳北区",
		"pinyin": "LiuBeiQu",
		"abbr": "LBQ",
		"zip": "545001",
		"level": 3
	},
	{
		"code": "450221",
		"parent_code": "450200",
		"name": "柳江县",
		"alias": "柳江",
		"pinyin": "LiuJiang",
		"abbr": "LJ",
		"zip": "545100",
		"level": 3
	},
	{
		"code": "450222",
		"parent_code": "450200",
		"name": "柳城县",
		"alias": "柳城",
		"pinyin": "LiuCheng",
		"abbr": "LC",
		"zip": "545200",
		"level": 3
	},
	{
		"code": "450223",
		"parent_code": "450200",
		"name": "鹿寨县",
		"alias": "鹿寨",
		"pinyin": "LuZhai",
		"abbr": "LZ",
		"zip": "545600",
		"level": 3
	},
	{
		"code": "450224",
		"parent_code": "450200",
		"name": "融安县",
		"alias": "融安",
		"pinyin": "RongAn",
		"abbr": "RA",
		"zip": "545400",
		"level": 3
	},
	{
		"code": "450225",
		"parent_code": "450200",
		"name": "融水苗族自治县",
		"alias": "融水苗族",
		"pinyin": "RongShuiMiaoZu",
		"abbr": "RSMZ",
		"zip": "545300",
		"level": 3
	},
	{
		"code": "450226",
		"parent_code": "450200",
		"name": "三江侗族自治县",
		"alias": "三江侗族",
		"pinyin": "SanJiangDongZu",
		"abbr": "SJDZ",
		"zip": "545500",
		"level": 3
	},
	{
		"code": "450300",
		"parent_code": "450000",
		"name": "桂林市",
		"alias": "桂林",
		"pinyin": "GuiLin",
		"abbr": "GL",
		"zip": "541000",
		"level": 2
	},
	{
		"code": "450302",
		"parent_code": "450300",
		"name": "秀峰区",
		"alias": "秀峰区",
		"pinyin": "XiuFengQu",
		"abbr": "XFQ",
		"zip": "541001",
		"level": 3
	},
	{
		"code": "450303",
		"parent_code": "450300",
		"name": "叠彩区",
		"alias": "叠彩区",
		"pinyin": "DieCaiQu",
		"abbr": "DCQ",
		"zip": "541001",
		"level": 3
	},
	{
		"code": "450304",
		"parent_code": "450300",
		"name": "象山区",
		"alias": "象山区",
		"pinyin": "XiangShanQu",
		"abbr": "XSQ",
		"zip": "541002",
		"level": 3
	},
	{
		"code": "450305",
		"parent_code": "450300",
		"name": "七星区",
		"alias": "七星区",
		"pinyin": "QiXingQu",
		"abbr": "QXQ",
		"zip": "541004",
		"level": 3
	},
	{
		"code": "450311",
		"parent_code": "450300",
		"name": "雁山区",
		"alias": "雁山区",
		"pinyin": "YanShanQu",
		"abbr": "YSQ",
		"zip": "541006",
		"level": 3
	},
	{
		"code": "450321",
		"parent_code": "450300",
		"name": "阳朔县",
		"alias": "阳朔",
		"pinyin": "YangShuo",
		"abbr": "YS",
		"zip": "541900",
		"level": 3
	},
	{
		"code": "450323",
		"parent_code": "450300",
		"name": "灵川县",
		"alias": "灵川",
		"pinyin": "LingChuan",
		"abbr": "LC",
		"zip": "541200",
		"level": 3
	},
	{
		"code": "450324",
		"parent_code": "450300",
		"name": "全州县",
		"alias": "全州",
		"pinyin": "QuanZhou",
		"abbr": "QZ",
		"zip": "541500",
		"level": 3
	},
	{
		"code": "450325",
		"parent_code": "450300",
		"name": "兴安县",
		"alias": "兴安",
		"pinyin": "XingAn",
		"abbr": "XA",
		"zip": "541300",
		"level": 3
	},
	{
		"code": "450326",
		"parent_code": "450300",
		"name": "永福县",
		"alias": "永福",
		"pinyin": "YongFu",
		"abbr": "YF",
		"zip": "541800",
		"level": 3
	},
	{
		"code": "450327",
		"parent_code": "450300",
		"name": "灌阳县",
		"alias": "灌阳",
		"pinyin": "GuanYang",
		"abbr": "GY",
		"zip": "541600",
		"level": 3
	},
	{
		"code": "450328",
		"parent_code": "450300",
		"name": "龙胜各族自治县",
		"alias": "龙胜各族",
		"pinyin": "LongShengGeZu",
		"abbr": "LSGZ",
		"zip": "541700",
		"level": 3
	},
	{
		"code": "450329",
		"parent_code": "450300",
		"name": "资源县",
		"alias": "资源",
		"pinyin": "ZiYuan",
		"abbr": "ZY",
		"zip": "541400",
		"level": 3
	},
	{
		"code": "450330",
		"parent_code": "450300",
		"name": "平乐县",
		"alias": "平乐",
		"pinyin": "PingLe",
		"abbr": "PL",
		"zip": "542400",
		"level": 3
	},
	{
		"code": "450331",
		"parent_code": "450300",
		"name": "荔浦县",
		"alias": "荔浦",
		"pinyin": "LiPu",
		"abbr": "LP",
		"zip": "546600",
		"level": 3
	},
	{
		"code": "450332",
		"parent_code": "450300",
		"name": "恭城瑶族自治县",
		"alias": "恭城瑶族",
		"pinyin": "GongChengYaoZu",
		"abbr": "GCYZ",
		"zip": "542500",
		"level": 3
	},
	{
		"code": "450400",
		"parent_code": "450000",
		"name": "梧州市",
		"alias": "梧州",
		"pinyin": "WuZhou",
		"abbr": "WZ",
		"zip": "543000",
		"level": 2
	},
	{
		"code": "450403",
		"parent_code": "450400",
		"name": "万秀区",
		"alias": "万秀区",
		"pinyin": "WanXiuQu",
		"abbr": "WXQ",
		"zip": "543000",
		"level": 3
	},
	{
		"code": "450405",
		"parent_code": "450400",
		"name": "长洲区",
		"alias": "长洲区",
		"pinyin": "ZhangZhouQu",
		"abbr": "ZZQ",
		"zip": "543002",
		"level": 3
	},
	{
		"code": "450421",
		"parent_code": "450400",
		"name": "苍梧县",
		"alias": "苍梧",
		"pinyin": "CangWu",
		"abbr": "CW",
		"zip": "543100",
		"level": 3
	},
	{
		"code": "450422",
		"parent_code": "450400",
		"name": "藤县",
		"alias": "藤县",
		"pinyin": "TengXian",
		"abbr": "TX",
		"zip": "543300",
		"level": 3
	},
	{
		"code": "450423",
		"parent_code": "450400",
		"name": "蒙山县",
		"alias": "蒙山",
		"pinyin": "MengShan",
		"abbr": "MS",
		"zip": "546700",
		"level": 3
	},
	{
		"code": "450481",
		"parent_code": "450400",
		"name": "岑溪市",
		"alias": "岑溪",
		"pinyin": "CenXi",
		"abbr": "CX",
		"zip": "543200",
		"level": 3
	},
	{
		"code": "450500",
		"parent_code": "450000",
		"name": "北海市",
		"alias": "北海",
		"pinyin": "BeiHai",
		"abbr": "BH",
		"zip": "536000",
		"level": 2
	},
	{
		"code": "450502",
		"parent_code": "450500",
		"name": "海城区",
		"alias": "海城区",
		"pinyin": "HaiChengQu",
		"abbr": "HCQ",
		"zip": "536000",
		"level": 3
	},
	{
		"code": "450503",
		"parent_code": "450500",
		"name": "银海区",
		"alias": "银海区",
		"pinyin": "YinHaiQu",
		"abbr": "YHQ",
		"zip": "536000",
		"level": 3
	},
	{
		"code": "450512",
		"parent_code": "450500",
		"name": "铁山港区",
		"alias": "铁山港区",
		"pinyin": "TieShanGangQu",
		"abbr": "TSGQ",
		"zip": "536017",
		"level": 3
	},
	{
		"code": "450521",
		"parent_code": "450500",
		"name": "合浦县",
		"alias": "合浦",
		"pinyin": "HePu",
		"abbr": "HP",
		"zip": "536100",
		"level": 3
	},
	{
		"code": "450600",
		"parent_code": "450000",
		"name": "防城港市",
		"alias": "防城港",
		"pinyin": "FangChengGang",
		"abbr": "FCG",
		"zip": "538000",
		"level": 2
	},
	{
		"code": "450602",
		"parent_code": "450600",
		"name": "港口区",
		"alias": "港口区",
		"pinyin": "GangKouQu",
		"abbr": "GKQ",
		"zip": "538001",
		"level": 3
	},
	{
		"code": "450603",
		"parent_code": "450600",
		"name": "防城区",
		"alias": "防城区",
		"pinyin": "FangChengQu",
		"abbr": "FCQ",
		"zip": "538021",
		"level": 3
	},
	{
		"code": "450621",
		"parent_code": "450600",
		"name": "上思县",
		"alias": "上思",
		"pinyin": "ShangSi",
		"abbr": "SS",
		"zip": "535500",
		"level": 3
	},
	{
		"code": "450681",
		"parent_code": "450600",
		"name": "东兴市",
		"alias": "东兴",
		"pinyin": "DongXing",
		"abbr": "DX",
		"zip": "538100",
		"level": 3
	},
	{
		"code": "450700",
		"parent_code": "450000",
		"name": "钦州市",
		"alias": "钦州",
		"pinyin": "QinZhou",
		"abbr": "QZ",
		"zip": "535000",
		"level": 2
	},
	{
		"code": "450702",
		"parent_code": "450700",
		"name": "钦南区",
		"alias": "钦南区",
		"pinyin": "QinNanQu",
		"abbr": "QNQ",
		"zip": "535000",
		"level": 3
	},
	{
		"code": "450703",
		"parent_code": "450700",
		"name": "钦北区",
		"alias": "钦北区",
		"pinyin": "QinBeiQu",
		"abbr": "QBQ",
		"zip": "535000",
		"level": 3
	},
	{
		"code": "450721",
		"parent_code": "450700",
		"name": "灵山县",
		"alias": "灵山",
		"pinyin": "LingShan",
		"abbr": "LS",
		"zip": "535400",
		"level": 3
	},
	{
		"code": "450722",
		"parent_code": "450700",
		"name": "浦北县",
		"alias": "浦北",
		"pinyin": "PuBei",
		"abbr": "PB",
		"zip": "535300",
		"level": 3
	},
	{
		"code": "450800",
		"parent_code": "450000",
		"name": "贵港市",
		"alias": "贵港",
		"pinyin": "GuiGang",
		"abbr": "GG",
		"zip": "537100",
		"level": 2
	},
	{
		"code": "450802",
		"parent_code": "450800",
		"name": "港北区",
		"alias": "港北区",
		"pinyin": "GangBeiQu",
		"abbr": "GBQ",
		"zip": "537100",
		"level": 3
	},
	{
		"code": "450803",
		"parent_code": "450800",
		"name": "港南区",
		"alias": "港南区",
		"pinyin": "GangNanQu",
		"abbr": "GNQ",
		"zip": "537132",
		"level": 3
	},
	{
		"code": "450804",
		"parent_code": "450800",
		"name": "覃塘区",
		"alias": "覃塘区",
		"pinyin": "TanTangQu",
		"abbr": "TTQ",
		"zip": "537121",
		"level": 3
	},
	{
		"code": "450821",
		"parent_code": "450800",
		"name": "平南县",
		"alias": "平南",
		"pinyin": "PingNan",
		"abbr": "PN",
		"zip": "537300",
		"level": 3
	},
	{
		"code": "450881",
		"parent_code": "450800",
		"name": "桂平市",
		"alias": "桂平",
		"pinyin": "GuiPing",
		"abbr": "GP",
		"zip": "537200",
		"level": 3
	},
	{
		"code": "450900",
		"parent_code": "450000",
		"name": "玉林市",
		"alias": "玉林",
		"pinyin": "YuLin",
		"abbr": "YL",
		"zip": "537000",
		"level": 2
	},
	{
		"code": "450902",
		"parent_code": "450900",
		"name": "玉州区",
		"alias": "玉州区",
		"pinyin": "YuZhouQu",
		"abbr": "YZQ",
		"zip": "537000",
		"level": 3
	},
	{
		"code": "450921",
		"parent_code": "450900",
		"name": "容县",
		"alias": "容县",
		"pinyin": "RongXian",
		"abbr": "RX",
		"zip": "537500",
		"level": 3
	},
	{
		"code": "450922",
		"parent_code": "450900",
		"name": "陆川县",
		"alias": "陆川",
		"pinyin": "LuChuan",
		"abbr": "LC",
		"zip": "537700",
		"level": 3
	},
	{
		"code": "450923",
		"parent_code": "450900",
		"name": "博白县",
		"alias": "博白",
		"pinyin": "BoBai",
		"abbr": "BB",
		"zip": "537600",
		"level": 3
	},
	{
		"code": "450924",
		"parent_code": "450900",
		"name": "兴业县",
		"alias": "兴业",
		"pinyin": "XingYe",
		"abbr": "XY",
		"zip": "537800",
		"level": 3
	},
	{
		"code": "450981",
		"parent_code": "450900",
		"name": "北流市",
		"alias": "北流",
		"pinyin": "BeiLiu",
		"abbr": "BL",
		"zip": "537400",
		"level": 3
	},
	{
		"code": "451000",
		"parent_code": "450000",
		"name": "百色市",
		"alias": "百色",
		"pinyin": "BaiSe",
		"abbr": "BS",
		"zip": "533000",
		"level": 2
	},
	{
		"code": "451002",
		"parent_code": "451000",
		"name": "右江区",
		"alias": "右江区",
		"pinyin": "YouJiangQu",
		"abbr": "YJQ",
		"zip": "533000",
		"level": 3
	},
	{
		"code": "451021",
		"parent_code": "451000",
		"name": "田阳县",
		"alias": "田阳",
		"pinyin": "TianYang",
		"abbr": "TY",
		"zip": "533600",
		"level": 3
	},
	{
		"code": "451022",
		"parent_code": "451000",
		"name": "田东县",
		"alias": "田东",
		"pinyin": "TianDong",
		"abbr": "TD",
		"zip": "531500",
		"level": 3
	},
	{
		"code": "451023",
		"parent_code": "451000",
		"name": "平果县",
		"alias": "平果",
		"pinyin": "PingGuo",
		"abbr": "PG",
		"zip": "531400",
		"level": 3
	},
	{
		"code": "451024",
		"parent_code": "451000",
		"name": "德保县",
		"alias": "德保",
		"pinyin": "DeBao",
		"abbr": "DB",
		"zip": "533700",
		"level": 3
	},
	{
		"code": "451025",
		"parent_code": "451000",
		"name": "靖西县",
		"alias": "靖西",
		"pinyin": "JingXi",
		"abbr": "JX",
		"zip": "533800",
		"level": 3
	},
	{
		"code": "451026",
		"parent_code": "451000",
		"name": "那坡县",
		"alias": "那坡",
		"pinyin": "NaPo",
		"abbr": "NP",
		"zip": "533900",
		"level": 3
	},
	{
		"code": "451027",
		"parent_code": "451000",
		"name": "凌云县",
		"alias": "凌云",
		"pinyin": "LingYun",
		"abbr": "LY",
		"zip": "533100",
		"level": 3
	},
	{
		"code": "451028",
		"parent_code": "451000",
		"name": "乐业县",
		"alias": "乐业",
		"pinyin": "LeYe",
		"abbr": "LY",
		"zip": "533200",
		"level": 3
	},
	{
		"code": "451029",
		"parent_code": "451000",
		"name": "田林县",
		"alias": "田林",
		"pinyin": "TianLin",
		"abbr": "TL",
		"zip": "533300",
		"level": 3
	},
	{
		"code": "451030",
		"parent_code": "451000",
		"name": "西林县",
		"alias": "西林",
		"pinyin": "XiLin",
		"abbr": "XL",
		"zip": "533500",
		"level": 3
	},
	{
		"code": "451031",
		"parent_code": "451000",
		"name": "隆林各族自治县",
		"alias": "隆林各族",
		"pinyin": "LongLinGeZu",
		"abbr": "LLGZ",
		"zip": "533400",
		"level": 3
	},
	{
		"code": "451100",
		"parent_code": "450000",
		"name": "贺州市",
		"alias": "贺州",
		"pinyin": "HeZhou",
		"abbr": "HZ",
		"zip": "542800",
		"level": 2
	},
	{
		"code": "451102",
		"parent_code": "451100",
		"name": "八步区",
		"alias": "八步区",
		"pinyin": "BaBuQu",
		"abbr": "BBQ",
		"zip": "542800",
		"level": 3
	},
	{
		"code": "451121",
		"parent_code": "451100",
		"name": "昭平县",
		"alias": "昭平",
		"pinyin": "ZhaoPing",
		"abbr": "ZP",
		"zip": "546800",
		"level": 3
	},
	{
		"code": "451122",
		"parent_code": "451100",
		"name": "钟山县",
		"alias": "钟山",
		"pinyin": "ZhongShan",
		"abbr": "ZS",
		"zip": "542600",
		"level": 3
	},
	{
		"code": "451123",
		"parent_code": "451100",
		"name": "富川瑶族自治县",
		"alias": "富川瑶族",
		"pinyin": "FuChuanYaoZu",
		"abbr": "FCYZ",
		"zip": "542700",
		"level": 3
	},
	{
		"code": "451200",
		"parent_code": "450000",
		"name": "河池市",
		"alias": "河池",
		"pinyin": "HeChi",
		"abbr": "HC",
		"zip": "547000",
		"level": 2
	},
	{
		"code": "451202",
		"parent_code": "451200",
		"name": "金城江区",
		"alias": "金城江区",
		"pinyin": "JinChengJiangQu",
		"abbr": "JCJQ",
		"zip": "547000",
		"level": 3
	},
	{
		"code": "451221",
		"parent_code": "451200",
		"name": "南丹县",
		"alias": "南丹",
		"pinyin": "NanDan",
		"abbr": "ND",
		"zip": "547200",
		"level": 3
	},
	{
		"code": "451222",
		"parent_code": "451200",
		"name": "天峨县",
		"alias": "天峨",
		"pinyin": "TianE",
		"abbr": "TE",
		"zip": "547300",
		"level": 3
	},
	{
		"code": "451223",
		"parent_code": "451200",
		"name": "凤山县",
		"alias": "凤山",
		"pinyin": "FengShan",
		"abbr": "FS",
		"zip": "547600",
		"level": 3
	},
	{
		"code": "451224",
		"parent_code": "451200",
		"name": "东兰县",
		"alias": "东兰",
		"pinyin": "DongLan",
		"abbr": "DL",
		"zip": "547400",
		"level": 3
	},
	{
		"code": "451225",
		"parent_code": "451200",
		"name": "罗城仫佬族自治县",
		"alias": "罗城仫佬族",
		"pinyin": "LuoChengMuLaoZu",
		"abbr": "LCMLZ",
		"zip": "546400",
		"level": 3
	},
	{
		"code": "451226",
		"parent_code": "451200",
		"name": "环江毛南族自治县",
		"alias": "环江毛南族",
		"pinyin": "HuanJiangMaoNanZu",
		"abbr": "HJMNZ",
		"zip": "547100",
		"level": 3
	},
	{
		"code": "451227",
		"parent_code": "451200",
		"name": "巴马瑶族自治县",
		"alias": "巴马瑶族",
		"pinyin": "BaMaYaoZu",
		"abbr": "BMYZ",
		"zip": "547500",
		"level": 3
	},
	{
		"code": "451228",
		"parent_code": "451200",
		"name": "都安瑶族自治县",
		"alias": "都安瑶族",
		"pinyin": "DouAnYaoZu",
		"abbr": "DAYZ",
		"zip": "530700",
		"level": 3
	},
	{
		"code": "451229",
		"parent_code": "451200",
		"name": "大化瑶族自治县",
		"alias": "大化瑶族",
		"pinyin": "DaHuaYaoZu",
		"abbr": "DHYZ",
		"zip": "530800",
		"level": 3
	},
	{
		"code": "451281",
		"parent_code": "451200",
		"name": "宜州市",
		"alias": "宜州",
		"pinyin": "YiZhou",
		"abbr": "YZ",
		"zip": "546300",
		"level": 3
	},
	{
		"code": "451300",
		"parent_code": "450000",
		"name": "来宾市",
		"alias": "来宾",
		"pinyin": "LaiBin",
		"abbr": "LB",
		"zip": "546100",
		"level": 2
	},
	{
		"code": "451302",
		"parent_code": "451300",
		"name": "兴宾区",
		"alias": "兴宾区",
		"pinyin": "XingBinQu",
		"abbr": "XBQ",
		"zip": "546100",
		"level": 3
	},
	{
		"code": "451321",
		"parent_code": "451300",
		"name": "忻城县",
		"alias": "忻城",
		"pinyin": "XinCheng",
		"abbr": "XC",
		"zip": "546200",
		"level": 3
	},
	{
		"code": "451322",
		"parent_code": "451300",
		"name": "象州县",
		"alias": "象州",
		"pinyin": "XiangZhou",
		"abbr": "XZ",
		"zip": "545800",
		"level": 3
	},
	{
		"code": "451323",
		"parent_code": "451300",
		"name": "武宣县",
		"alias": "武宣",
		"pinyin": "WuXuan",
		"abbr": "WX",
		"zip": "545900",
		"level": 3
	},
	{
		"code": "451324",
		"parent_code": "451300",
		"name": "金秀瑶族自治县",
		"alias": "金秀瑶族",
		"pinyin": "JinXiuYaoZu",
		"abbr": "JXYZ",
		"zip": "545700",
		"level": 3
	},
	{
		"code": "451381",
		"parent_code": "451300",
		"name": "合山市",
		"alias": "合山",
		"pinyin": "HeShan",
		"abbr": "HS",
		"zip": "546500",
		"level": 3
	},
	{
		"code": "451400",
		"parent_code": "450000",
		"name": "崇左市",
		"alias": "崇左",
		"pinyin": "ChongZuo",
		"abbr": "CZ",
		"zip": "532200",
		"level": 2
	},
	{
		"code": "451421",
		"parent_code": "451400",
		"name": "扶绥县",
		"alias": "扶绥",
		"pinyin": "FuSui",
		"abbr": "FS",
		"zip": "532100",
		"level": 3
	},
	{
		"code": "451422",
		"parent_code": "451400",
		"name": "宁明县",
		"alias": "宁明",
		"pinyin": "NingMing",
		"abbr": "NM",
		"zip": "532500",
		"level": 3
	},
	{
		"code": "451423",
		"parent_code": "451400",
		"name": "龙州县",
		"alias": "龙州",
		"pinyin": "LongZhou",
		"abbr": "LZ",
		"zip": "532400",
		"level": 3
	},
	{
		"code": "451424",
		"parent_code": "451400",
		"name": "大新县",
		"alias": "大新",
		"pinyin": "DaXin",
		"abbr": "DX",
		"zip": "532300",
		"level": 3
	},
	{
		"code": "451425",
		"parent_code": "451400",
		"name": "天等县",
		"alias": "天等",
		"pinyin": "TianDeng",
		"abbr": "TD",
		"zip": "532800",
		"level": 3
	},
	{
		"code": "451481",
		"parent_code": "451400",
		"name": "凭祥市",
		"alias": "凭祥",
		"pinyin": "PingXiang",
		"abbr": "PX",
		"zip": "532600",
		"level": 3
	},
	{
		"code": "460000",
		"parent_code": null,
		"name": "海南省",
		"alias": "海南",
		"pinyin": "HaiNan",
		"abbr": "HN",
		"zip": "571000",
		"level": 1
	},
	{
		"code": "460100",
		"parent_code": "460000",
		"name": "海口市",
		"alias": "海口",
		"pinyin": "HaiKou",
		"abbr": "HK",
		"zip": "570000",
		"level": 2
	},
	{
		"code": "460105",
		"parent_code": "460100",
		"name": "秀英区",
		"alias": "秀英区",
		"pinyin": "XiuYingQu",
		"abbr": "XYQ",
		"zip": "570311",
		"level": 3
	},
	{
		"code": "460106",
		"parent_code": "460100",
		"name": "龙华区",
		"alias": "龙华区",
		"pinyin": "LongHuaQu",
		"abbr": "LHQ",
		"zip": "570105",
		"level": 3
	},
	{
		"code": "460107",
		"parent_code": "460100",
		"name": "琼山区",
		"alias": "琼山区",
		"pinyin": "QiongShanQu",
		"abbr": "QSQ",
		"zip": "571100",
		"level": 3
	},
	{
		"code": "460108",
		"parent_code": "460100",
		"name": "美兰区",
		"alias": "美兰区",
		"pinyin": "MeiLanQu",
		"abbr": "MLQ",
		"zip": "570203",
		"level": 3
	},
	{
		"code": "460200",
		"parent_code": "460000",
		"name": "三亚市",
		"alias": "三亚",
		"pinyin": "SanYa",
		"abbr": "SY",
		"zip": "572000",
		"level": 2
	},
	{
		"code": "460300",
		"parent_code": "460000",
		"name": "三沙市",
		"alias": "三沙",
		"pinyin": "SanSha",
		"abbr": "SS",
		"zip": "",
		"level": 2
	},
	{
		"code": "460321",
		"parent_code": "460300",
		"name": "西沙群岛",
		"alias": "西沙群岛",
		"pinyin": "XiShaQunDao",
		"abbr": "XSQD",
		"zip": "",
		"level": 3
	},
	{
		"code": "460322",
		"parent_code": "460300",
		"name": "南沙群岛",
		"alias": "南沙群岛",
		"pinyin": "NanShaQunDao",
		"abbr": "NSQD",
		"zip": "",
		"level": 3
	},
	{
		"code": "460323",
		"parent_code": "460300",
		"name": "中沙群岛的岛礁及其海域",
		"alias": "中沙群岛的岛礁及其海域",
		"pinyin": "ZhongShaQunDaoDeDaoJiaoJiQiHaiYu",
		"abbr": "ZSQDDDJJQHY",
		"zip": "",
		"level": 3
	},
	{
		"code": "469001",
		"parent_code": "460000",
		"name": "五指山市",
		"alias": "五指山",
		"pinyin": "WuZhiShan",
		"abbr": "WZS",
		"zip": "572200",
		"level": 2
	},
	{
		"code": "469002",
		"parent_code": "460000",
		"name": "琼海市",
		"alias": "琼海",
		"pinyin": "QiongHai",
		"abbr": "QH",
		"zip": "571400",
		"level": 2
	},
	{
		"code": "469003",
		"parent_code": "460000",
		"name": "儋州市",
		"alias": "儋州",
		"pinyin": "DanZhou",
		"abbr": "DZ",
		"zip": "571700",
		"level": 2
	},
	{
		"code": "469005",
		"parent_code": "460000",
		"name": "文昌市",
		"alias": "文昌",
		"pinyin": "WenChang",
		"abbr": "WC",
		"zip": "571300",
		"level": 2
	},
	{
		"code": "469006",
		"parent_code": "460000",
		"name": "万宁市",
		"alias": "万宁",
		"pinyin": "WanNing",
		"abbr": "WN",
		"zip": "571500",
		"level": 2
	},
	{
		"code": "469007",
		"parent_code": "460000",
		"name": "东方市",
		"alias": "东方",
		"pinyin": "DongFang",
		"abbr": "DF",
		"zip": "572600",
		"level": 2
	},
	{
		"code": "469021",
		"parent_code": "460000",
		"name": "定安县",
		"alias": "定安",
		"pinyin": "DingAn",
		"abbr": "DA",
		"zip": "",
		"level": 2
	},
	{
		"code": "469022",
		"parent_code": "460000",
		"name": "屯昌县",
		"alias": "屯昌",
		"pinyin": "TunChang",
		"abbr": "TC",
		"zip": "",
		"level": 2
	},
	{
		"code": "469023",
		"parent_code": "460000",
		"name": "澄迈县",
		"alias": "澄迈",
		"pinyin": "ChengMai",
		"abbr": "CM",
		"zip": "",
		"level": 2
	},
	{
		"code": "469024",
		"parent_code": "460000",
		"name": "临高县",
		"alias": "临高",
		"pinyin": "LinGao",
		"abbr": "LG",
		"zip": "",
		"level": 2
	},
	{
		"code": "469025",
		"parent_code": "460000",
		"name": "白沙黎族自治县",
		"alias": "白沙黎族",
		"pinyin": "BaiShaLiZu",
		"abbr": "BSLZ",
		"zip": "571200",
		"level": 2
	},
	{
		"code": "469026",
		"parent_code": "460000",
		"name": "昌江黎族自治县",
		"alias": "昌江黎族",
		"pinyin": "ChangJiangLiZu",
		"abbr": "CJLZ",
		"zip": "571600",
		"level": 2
	},
	{
		"code": "469027",
		"parent_code": "460000",
		"name": "乐东黎族自治县",
		"alias": "乐东黎族",
		"pinyin": "LeDongLiZu",
		"abbr": "LDLZ",
		"zip": "571900",
		"level": 2
	},
	{
		"code": "469028",
		"parent_code": "460000",
		"name": "陵水黎族自治县",
		"alias": "陵水黎族",
		"pinyin": "LingShuiLiZu",
		"abbr": "LSLZ",
		"zip": "571800",
		"level": 2
	},
	{
		"code": "469029",
		"parent_code": "460000",
		"name": "保亭黎族苗族自治县",
		"alias": "保亭黎族苗族",
		"pinyin": "BaoTingLiZuMiaoZu",
		"abbr": "BTLZMZ",
		"zip": "",
		"level": 2
	},
	{
		"code": "469030",
		"parent_code": "460000",
		"name": "琼中黎族苗族自治县",
		"alias": "琼中黎族苗族",
		"pinyin": "QiongZhongLiZuMiaoZu",
		"abbr": "QZLZMZ",
		"zip": "572800",
		"level": 2
	},
	{
		"code": "500000",
		"parent_code": null,
		"name": "重庆市",
		"alias": "重庆",
		"pinyin": "ZhongQing",
		"abbr": "ZQ",
		"zip": "400000",
		"level": 1
	},
	{
		"code": "500101",
		"parent_code": "500000",
		"name": "万州区",
		"alias": "万州区",
		"pinyin": "WanZhouQu",
		"abbr": "WZQ",
		"zip": "404000",
		"level": 2
	},
	{
		"code": "500102",
		"parent_code": "500000",
		"name": "涪陵区",
		"alias": "涪陵区",
		"pinyin": "FuLingQu",
		"abbr": "FLQ",
		"zip": "408000",
		"level": 2
	},
	{
		"code": "500103",
		"parent_code": "500000",
		"name": "渝中区",
		"alias": "渝中区",
		"pinyin": "YuZhongQu",
		"abbr": "YZQ",
		"zip": "400012",
		"level": 2
	},
	{
		"code": "500104",
		"parent_code": "500000",
		"name": "大渡口区",
		"alias": "大渡口区",
		"pinyin": "DaDuKouQu",
		"abbr": "DDKQ",
		"zip": "400084",
		"level": 2
	},
	{
		"code": "500105",
		"parent_code": "500000",
		"name": "江北区",
		"alias": "江北区",
		"pinyin": "JiangBeiQu",
		"abbr": "JBQ",
		"zip": "400021",
		"level": 2
	},
	{
		"code": "500106",
		"parent_code": "500000",
		"name": "沙坪坝区",
		"alias": "沙坪坝区",
		"pinyin": "ShaPingBaQu",
		"abbr": "SPBQ",
		"zip": "400020",
		"level": 2
	},
	{
		"code": "500107",
		"parent_code": "500000",
		"name": "九龙坡区",
		"alias": "九龙坡区",
		"pinyin": "JiuLongPoQu",
		"abbr": "JLPQ",
		"zip": "400039",
		"level": 2
	},
	{
		"code": "500108",
		"parent_code": "500000",
		"name": "南岸区",
		"alias": "南岸区",
		"pinyin": "NanAnQu",
		"abbr": "NAQ",
		"zip": "400060",
		"level": 2
	},
	{
		"code": "500109",
		"parent_code": "500000",
		"name": "北碚区",
		"alias": "北碚区",
		"pinyin": "BeiBeiQu",
		"abbr": "BBQ",
		"zip": "400700",
		"level": 2
	},
	{
		"code": "500110",
		"parent_code": "500000",
		"name": "綦江区",
		"alias": "綦江区",
		"pinyin": "QiJiangQu",
		"abbr": "QJQ",
		"zip": "400800",
		"level": 2
	},
	{
		"code": "500111",
		"parent_code": "500000",
		"name": "大足区",
		"alias": "大足区",
		"pinyin": "DaZuQu",
		"abbr": "DZQ",
		"zip": "400900",
		"level": 2
	},
	{
		"code": "500112",
		"parent_code": "500000",
		"name": "渝北区",
		"alias": "渝北区",
		"pinyin": "YuBeiQu",
		"abbr": "YBQ",
		"zip": "401120",
		"level": 2
	},
	{
		"code": "500113",
		"parent_code": "500000",
		"name": "巴南区",
		"alias": "巴南区",
		"pinyin": "BaNanQu",
		"abbr": "BNQ",
		"zip": "401320",
		"level": 2
	},
	{
		"code": "500114",
		"parent_code": "500000",
		"name": "黔江区",
		"alias": "黔江区",
		"pinyin": "QianJiangQu",
		"abbr": "QJQ",
		"zip": "409700",
		"level": 2
	},
	{
		"code": "500115",
		"parent_code": "500000",
		"name": "长寿区",
		"alias": "长寿区",
		"pinyin": "ZhangShouQu",
		"abbr": "ZSQ",
		"zip": "401220",
		"level": 2
	},
	{
		"code": "500116",
		"parent_code": "500000",
		"name": "江津区",
		"alias": "江津区",
		"pinyin": "JiangJinQu",
		"abbr": "JJQ",
		"zip": "",
		"level": 2
	},
	{
		"code": "500117",
		"parent_code": "500000",
		"name": "合川区",
		"alias": "合川区",
		"pinyin": "HeChuanQu",
		"abbr": "HCQ",
		"zip": "",
		"level": 2
	},
	{
		"code": "500118",
		"parent_code": "500000",
		"name": "永川区",
		"alias": "永川区",
		"pinyin": "YongChuanQu",
		"abbr": "YCQ",
		"zip": "",
		"level": 2
	},
	{
		"code": "500119",
		"parent_code": "500000",
		"name": "南川区",
		"alias": "南川区",
		"pinyin": "NanChuanQu",
		"abbr": "NCQ",
		"zip": "",
		"level": 2
	},
	{
		"code": "500223",
		"parent_code": "500000",
		"name": "潼南县",
		"alias": "潼南",
		"pinyin": "TongNan",
		"abbr": "TN",
		"zip": "402660",
		"level": 2
	},
	{
		"code": "500224",
		"parent_code": "500000",
		"name": "铜梁县",
		"alias": "铜梁",
		"pinyin": "TongLiang",
		"abbr": "TL",
		"zip": "402560",
		"level": 2
	},
	{
		"code": "500226",
		"parent_code": "500000",
		"name": "荣昌县",
		"alias": "荣昌",
		"pinyin": "RongChang",
		"abbr": "RC",
		"zip": "402460",
		"level": 2
	},
	{
		"code": "500227",
		"parent_code": "500000",
		"name": "璧山县",
		"alias": "璧山",
		"pinyin": "BiShan",
		"abbr": "BS",
		"zip": "402760",
		"level": 2
	},
	{
		"code": "500228",
		"parent_code": "500000",
		"name": "梁平县",
		"alias": "梁平",
		"pinyin": "LiangPing",
		"abbr": "LP",
		"zip": "405200",
		"level": 2
	},
	{
		"code": "500229",
		"parent_code": "500000",
		"name": "城口县",
		"alias": "城口",
		"pinyin": "ChengKou",
		"abbr": "CK",
		"zip": "405900",
		"level": 2
	},
	{
		"code": "500230",
		"parent_code": "500000",
		"name": "丰都县",
		"alias": "丰都",
		"pinyin": "FengDou",
		"abbr": "FD",
		"zip": "408200",
		"level": 2
	},
	{
		"code": "500231",
		"parent_code": "500000",
		"name": "垫江县",
		"alias": "垫江",
		"pinyin": "DianJiang",
		"abbr": "DJ",
		"zip": "408300",
		"level": 2
	},
	{
		"code": "500232",
		"parent_code": "500000",
		"name": "武隆县",
		"alias": "武隆",
		"pinyin": "WuLong",
		"abbr": "WL",
		"zip": "408500",
		"level": 2
	},
	{
		"code": "500233",
		"parent_code": "500000",
		"name": "忠县",
		"alias": "忠县",
		"pinyin": "ZhongXian",
		"abbr": "ZX",
		"zip": "404300",
		"level": 2
	},
	{
		"code": "500234",
		"parent_code": "500000",
		"name": "开县",
		"alias": "开县",
		"pinyin": "KaiXian",
		"abbr": "KX",
		"zip": "405400",
		"level": 2
	},
	{
		"code": "500235",
		"parent_code": "500000",
		"name": "云阳县",
		"alias": "云阳",
		"pinyin": "YunYang",
		"abbr": "YY",
		"zip": "404500",
		"level": 2
	},
	{
		"code": "500236",
		"parent_code": "500000",
		"name": "奉节县",
		"alias": "奉节",
		"pinyin": "FengJie",
		"abbr": "FJ",
		"zip": "404600",
		"level": 2
	},
	{
		"code": "500237",
		"parent_code": "500000",
		"name": "巫山县",
		"alias": "巫山",
		"pinyin": "WuShan",
		"abbr": "WS",
		"zip": "404700",
		"level": 2
	},
	{
		"code": "500238",
		"parent_code": "500000",
		"name": "巫溪县",
		"alias": "巫溪",
		"pinyin": "WuXi",
		"abbr": "WX",
		"zip": "405800",
		"level": 2
	},
	{
		"code": "500240",
		"parent_code": "500000",
		"name": "石柱土家族自治县",
		"alias": "石柱土家族",
		"pinyin": "ShiZhuTuJiaZu",
		"abbr": "SZTJZ",
		"zip": "409100",
		"level": 2
	},
	{
		"code": "500241",
		"parent_code": "500000",
		"name": "秀山土家族苗族自治县",
		"alias": "秀山土家族苗族",
		"pinyin": "XiuShanTuJiaZuMiaoZu",
		"abbr": "XSTJZMZ",
		"zip": "409900",
		"level": 2
	},
	{
		"code": "500242",
		"parent_code": "500000",
		"name": "酉阳土家族苗族自治县",
		"alias": "酉阳土家族苗族",
		"pinyin": "YouYangTuJiaZuMiaoZu",
		"abbr": "YYTJZMZ",
		"zip": "409800",
		"level": 2
	},
	{
		"code": "500243",
		"parent_code": "500000",
		"name": "彭水苗族土家族自治县",
		"alias": "彭水苗族土家族",
		"pinyin": "PengShuiMiaoZuTuJiaZu",
		"abbr": "PSMZTJZ",
		"zip": "409600",
		"level": 2
	},
	{
		"code": "510000",
		"parent_code": null,
		"name": "四川省",
		"alias": "四川",
		"pinyin": "SiChuan",
		"abbr": "SC",
		"zip": "610000",
		"level": 1
	},
	{
		"code": "510100",
		"parent_code": "510000",
		"name": "成都市",
		"alias": "成都",
		"pinyin": "ChengDou",
		"abbr": "CD",
		"zip": "610000",
		"level": 2
	},
	{
		"code": "510104",
		"parent_code": "510100",
		"name": "锦江区",
		"alias": "锦江区",
		"pinyin": "JinJiangQu",
		"abbr": "JJQ",
		"zip": "610011",
		"level": 3
	},
	{
		"code": "510105",
		"parent_code": "510100",
		"name": "青羊区",
		"alias": "青羊区",
		"pinyin": "QingYangQu",
		"abbr": "QYQ",
		"zip": "610031",
		"level": 3
	},
	{
		"code": "510106",
		"parent_code": "510100",
		"name": "金牛区",
		"alias": "金牛区",
		"pinyin": "JinNiuQu",
		"abbr": "JNQ",
		"zip": "610036",
		"level": 3
	},
	{
		"code": "510107",
		"parent_code": "510100",
		"name": "武侯区",
		"alias": "武侯区",
		"pinyin": "WuHouQu",
		"abbr": "WHQ",
		"zip": "610041",
		"level": 3
	},
	{
		"code": "510108",
		"parent_code": "510100",
		"name": "成华区",
		"alias": "成华区",
		"pinyin": "ChengHuaQu",
		"abbr": "CHQ",
		"zip": "610066",
		"level": 3
	},
	{
		"code": "510112",
		"parent_code": "510100",
		"name": "龙泉驿区",
		"alias": "龙泉驿区",
		"pinyin": "LongQuanYiQu",
		"abbr": "LQYQ",
		"zip": "610100",
		"level": 3
	},
	{
		"code": "510113",
		"parent_code": "510100",
		"name": "青白江区",
		"alias": "青白江区",
		"pinyin": "QingBaiJiangQu",
		"abbr": "QBJQ",
		"zip": "610300",
		"level": 3
	},
	{
		"code": "510114",
		"parent_code": "510100",
		"name": "新都区",
		"alias": "新都区",
		"pinyin": "XinDouQu",
		"abbr": "XDQ",
		"zip": "610500",
		"level": 3
	},
	{
		"code": "510115",
		"parent_code": "510100",
		"name": "温江区",
		"alias": "温江区",
		"pinyin": "WenJiangQu",
		"abbr": "WJQ",
		"zip": "611130",
		"level": 3
	},
	{
		"code": "510121",
		"parent_code": "510100",
		"name": "金堂县",
		"alias": "金堂",
		"pinyin": "JinTang",
		"abbr": "JT",
		"zip": "610400",
		"level": 3
	},
	{
		"code": "510122",
		"parent_code": "510100",
		"name": "双流县",
		"alias": "双流",
		"pinyin": "ShuangLiu",
		"abbr": "SL",
		"zip": "610200",
		"level": 3
	},
	{
		"code": "510124",
		"parent_code": "510100",
		"name": "郫县",
		"alias": "郫县",
		"pinyin": "PiXian",
		"abbr": "PX",
		"zip": "611730",
		"level": 3
	},
	{
		"code": "510129",
		"parent_code": "510100",
		"name": "大邑县",
		"alias": "大邑",
		"pinyin": "DaYi",
		"abbr": "DY",
		"zip": "611330",
		"level": 3
	},
	{
		"code": "510131",
		"parent_code": "510100",
		"name": "蒲江县",
		"alias": "蒲江",
		"pinyin": "PuJiang",
		"abbr": "PJ",
		"zip": "611630",
		"level": 3
	},
	{
		"code": "510132",
		"parent_code": "510100",
		"name": "新津县",
		"alias": "新津",
		"pinyin": "XinJin",
		"abbr": "XJ",
		"zip": "611430",
		"level": 3
	},
	{
		"code": "510181",
		"parent_code": "510100",
		"name": "都江堰市",
		"alias": "都江堰",
		"pinyin": "DouJiangYan",
		"abbr": "DJY",
		"zip": "611830",
		"level": 3
	},
	{
		"code": "510182",
		"parent_code": "510100",
		"name": "彭州市",
		"alias": "彭州",
		"pinyin": "PengZhou",
		"abbr": "PZ",
		"zip": "611930",
		"level": 3
	},
	{
		"code": "510183",
		"parent_code": "510100",
		"name": "邛崃市",
		"alias": "邛崃",
		"pinyin": "QiongLai",
		"abbr": "QL",
		"zip": "611530",
		"level": 3
	},
	{
		"code": "510184",
		"parent_code": "510100",
		"name": "崇州市",
		"alias": "崇州",
		"pinyin": "ChongZhou",
		"abbr": "CZ",
		"zip": "611230",
		"level": 3
	},
	{
		"code": "510300",
		"parent_code": "510000",
		"name": "自贡市",
		"alias": "自贡",
		"pinyin": "ZiGong",
		"abbr": "ZG",
		"zip": "643000",
		"level": 2
	},
	{
		"code": "510302",
		"parent_code": "510300",
		"name": "自流井区",
		"alias": "自流井区",
		"pinyin": "ZiLiuJingQu",
		"abbr": "ZLJQ",
		"zip": "643000",
		"level": 3
	},
	{
		"code": "510303",
		"parent_code": "510300",
		"name": "贡井区",
		"alias": "贡井区",
		"pinyin": "GongJingQu",
		"abbr": "GJQ",
		"zip": "643020",
		"level": 3
	},
	{
		"code": "510304",
		"parent_code": "510300",
		"name": "大安区",
		"alias": "大安区",
		"pinyin": "DaAnQu",
		"abbr": "DAQ",
		"zip": "643010",
		"level": 3
	},
	{
		"code": "510311",
		"parent_code": "510300",
		"name": "沿滩区",
		"alias": "沿滩区",
		"pinyin": "YanTanQu",
		"abbr": "YTQ",
		"zip": "643030",
		"level": 3
	},
	{
		"code": "510321",
		"parent_code": "510300",
		"name": "荣县",
		"alias": "荣县",
		"pinyin": "RongXian",
		"abbr": "RX",
		"zip": "643100",
		"level": 3
	},
	{
		"code": "510322",
		"parent_code": "510300",
		"name": "富顺县",
		"alias": "富顺",
		"pinyin": "FuShun",
		"abbr": "FS",
		"zip": "643200",
		"level": 3
	},
	{
		"code": "510400",
		"parent_code": "510000",
		"name": "攀枝花市",
		"alias": "攀枝花",
		"pinyin": "PanZhiHua",
		"abbr": "PZH",
		"zip": "617000",
		"level": 2
	},
	{
		"code": "510402",
		"parent_code": "510400",
		"name": "东区",
		"alias": "东区",
		"pinyin": "DongQu",
		"abbr": "DQ",
		"zip": "617067",
		"level": 3
	},
	{
		"code": "510403",
		"parent_code": "510400",
		"name": "西区",
		"alias": "西区",
		"pinyin": "XiQu",
		"abbr": "XQ",
		"zip": "617012",
		"level": 3
	},
	{
		"code": "510411",
		"parent_code": "510400",
		"name": "仁和区",
		"alias": "仁和区",
		"pinyin": "RenHeQu",
		"abbr": "RHQ",
		"zip": "617061",
		"level": 3
	},
	{
		"code": "510421",
		"parent_code": "510400",
		"name": "米易县",
		"alias": "米易",
		"pinyin": "MiYi",
		"abbr": "MY",
		"zip": "617200",
		"level": 3
	},
	{
		"code": "510422",
		"parent_code": "510400",
		"name": "盐边县",
		"alias": "盐边",
		"pinyin": "YanBian",
		"abbr": "YB",
		"zip": "617100",
		"level": 3
	},
	{
		"code": "510500",
		"parent_code": "510000",
		"name": "泸州市",
		"alias": "泸州",
		"pinyin": "LuZhou",
		"abbr": "LZ",
		"zip": "646000",
		"level": 2
	},
	{
		"code": "510502",
		"parent_code": "510500",
		"name": "江阳区",
		"alias": "江阳区",
		"pinyin": "JiangYangQu",
		"abbr": "JYQ",
		"zip": "646000",
		"level": 3
	},
	{
		"code": "510503",
		"parent_code": "510500",
		"name": "纳溪区",
		"alias": "纳溪区",
		"pinyin": "NaXiQu",
		"abbr": "NXQ",
		"zip": "646300",
		"level": 3
	},
	{
		"code": "510504",
		"parent_code": "510500",
		"name": "龙马潭区",
		"alias": "龙马潭区",
		"pinyin": "LongMaTanQu",
		"abbr": "LMTQ",
		"zip": "646000",
		"level": 3
	},
	{
		"code": "510521",
		"parent_code": "510500",
		"name": "泸县",
		"alias": "泸县",
		"pinyin": "LuXian",
		"abbr": "LX",
		"zip": "646100",
		"level": 3
	},
	{
		"code": "510522",
		"parent_code": "510500",
		"name": "合江县",
		"alias": "合江",
		"pinyin": "HeJiang",
		"abbr": "HJ",
		"zip": "646200",
		"level": 3
	},
	{
		"code": "510524",
		"parent_code": "510500",
		"name": "叙永县",
		"alias": "叙永",
		"pinyin": "XuYong",
		"abbr": "XY",
		"zip": "646400",
		"level": 3
	},
	{
		"code": "510525",
		"parent_code": "510500",
		"name": "古蔺县",
		"alias": "古蔺",
		"pinyin": "GuLin",
		"abbr": "GL",
		"zip": "646500",
		"level": 3
	},
	{
		"code": "510600",
		"parent_code": "510000",
		"name": "德阳市",
		"alias": "德阳",
		"pinyin": "DeYang",
		"abbr": "DY",
		"zip": "618000",
		"level": 2
	},
	{
		"code": "510603",
		"parent_code": "510600",
		"name": "旌阳区",
		"alias": "旌阳区",
		"pinyin": "JingYangQu",
		"abbr": "JYQ",
		"zip": "618000",
		"level": 3
	},
	{
		"code": "510623",
		"parent_code": "510600",
		"name": "中江县",
		"alias": "中江",
		"pinyin": "ZhongJiang",
		"abbr": "ZJ",
		"zip": "618300",
		"level": 3
	},
	{
		"code": "510626",
		"parent_code": "510600",
		"name": "罗江县",
		"alias": "罗江",
		"pinyin": "LuoJiang",
		"abbr": "LJ",
		"zip": "618500",
		"level": 3
	},
	{
		"code": "510681",
		"parent_code": "510600",
		"name": "广汉市",
		"alias": "广汉",
		"pinyin": "GuangHan",
		"abbr": "GH",
		"zip": "618300",
		"level": 3
	},
	{
		"code": "510682",
		"parent_code": "510600",
		"name": "什邡市",
		"alias": "什邡",
		"pinyin": "ShenFang",
		"abbr": "SF",
		"zip": "618400",
		"level": 3
	},
	{
		"code": "510683",
		"parent_code": "510600",
		"name": "绵竹市",
		"alias": "绵竹",
		"pinyin": "MianZhu",
		"abbr": "MZ",
		"zip": "618200",
		"level": 3
	},
	{
		"code": "510700",
		"parent_code": "510000",
		"name": "绵阳市",
		"alias": "绵阳",
		"pinyin": "MianYang",
		"abbr": "MY",
		"zip": "621000",
		"level": 2
	},
	{
		"code": "510703",
		"parent_code": "510700",
		"name": "涪城区",
		"alias": "涪城区",
		"pinyin": "FuChengQu",
		"abbr": "FCQ",
		"zip": "621000",
		"level": 3
	},
	{
		"code": "510704",
		"parent_code": "510700",
		"name": "游仙区",
		"alias": "游仙区",
		"pinyin": "YouXianQu",
		"abbr": "YXQ",
		"zip": "621022",
		"level": 3
	},
	{
		"code": "510722",
		"parent_code": "510700",
		"name": "三台县",
		"alias": "三台",
		"pinyin": "SanTai",
		"abbr": "ST",
		"zip": "621100",
		"level": 3
	},
	{
		"code": "510723",
		"parent_code": "510700",
		"name": "盐亭县",
		"alias": "盐亭",
		"pinyin": "YanTing",
		"abbr": "YT",
		"zip": "621600",
		"level": 3
	},
	{
		"code": "510724",
		"parent_code": "510700",
		"name": "安县",
		"alias": "安县",
		"pinyin": "AnXian",
		"abbr": "AX",
		"zip": "622650",
		"level": 3
	},
	{
		"code": "510725",
		"parent_code": "510700",
		"name": "梓潼县",
		"alias": "梓潼",
		"pinyin": "ZiTong",
		"abbr": "ZT",
		"zip": "622150",
		"level": 3
	},
	{
		"code": "510726",
		"parent_code": "510700",
		"name": "北川羌族自治县",
		"alias": "北川羌族",
		"pinyin": "BeiChuanQiangZu",
		"abbr": "BCQZ",
		"zip": "622750",
		"level": 3
	},
	{
		"code": "510727",
		"parent_code": "510700",
		"name": "平武县",
		"alias": "平武",
		"pinyin": "PingWu",
		"abbr": "PW",
		"zip": "621550",
		"level": 3
	},
	{
		"code": "510781",
		"parent_code": "510700",
		"name": "江油市",
		"alias": "江油",
		"pinyin": "JiangYou",
		"abbr": "JY",
		"zip": "621700",
		"level": 3
	},
	{
		"code": "510800",
		"parent_code": "510000",
		"name": "广元市",
		"alias": "广元",
		"pinyin": "GuangYuan",
		"abbr": "GY",
		"zip": "628000",
		"level": 2
	},
	{
		"code": "510802",
		"parent_code": "510800",
		"name": "利州区",
		"alias": "利州区",
		"pinyin": "LiZhouQu",
		"abbr": "LZQ",
		"zip": "628017",
		"level": 3
	},
	{
		"code": "510811",
		"parent_code": "510800",
		"name": "元坝区",
		"alias": "元坝区",
		"pinyin": "YuanBaQu",
		"abbr": "YBQ",
		"zip": "628021",
		"level": 3
	},
	{
		"code": "510812",
		"parent_code": "510800",
		"name": "朝天区",
		"alias": "朝天区",
		"pinyin": "ChaoTianQu",
		"abbr": "CTQ",
		"zip": "628012",
		"level": 3
	},
	{
		"code": "510821",
		"parent_code": "510800",
		"name": "旺苍县",
		"alias": "旺苍",
		"pinyin": "WangCang",
		"abbr": "WC",
		"zip": "628200",
		"level": 3
	},
	{
		"code": "510822",
		"parent_code": "510800",
		"name": "青川县",
		"alias": "青川",
		"pinyin": "QingChuan",
		"abbr": "QC",
		"zip": "628100",
		"level": 3
	},
	{
		"code": "510823",
		"parent_code": "510800",
		"name": "剑阁县",
		"alias": "剑阁",
		"pinyin": "JianGe",
		"abbr": "JG",
		"zip": "628300",
		"level": 3
	},
	{
		"code": "510824",
		"parent_code": "510800",
		"name": "苍溪县",
		"alias": "苍溪",
		"pinyin": "CangXi",
		"abbr": "CX",
		"zip": "628400",
		"level": 3
	},
	{
		"code": "510900",
		"parent_code": "510000",
		"name": "遂宁市",
		"alias": "遂宁",
		"pinyin": "SuiNing",
		"abbr": "SN",
		"zip": "629000",
		"level": 2
	},
	{
		"code": "510903",
		"parent_code": "510900",
		"name": "船山区",
		"alias": "船山区",
		"pinyin": "ChuanShanQu",
		"abbr": "CSQ",
		"zip": "629000",
		"level": 3
	},
	{
		"code": "510904",
		"parent_code": "510900",
		"name": "安居区",
		"alias": "安居区",
		"pinyin": "AnJuQu",
		"abbr": "AJQ",
		"zip": "629000",
		"level": 3
	},
	{
		"code": "510921",
		"parent_code": "510900",
		"name": "蓬溪县",
		"alias": "蓬溪",
		"pinyin": "PengXi",
		"abbr": "PX",
		"zip": "629100",
		"level": 3
	},
	{
		"code": "510922",
		"parent_code": "510900",
		"name": "射洪县",
		"alias": "射洪",
		"pinyin": "SheHong",
		"abbr": "SH",
		"zip": "629200",
		"level": 3
	},
	{
		"code": "510923",
		"parent_code": "510900",
		"name": "大英县",
		"alias": "大英",
		"pinyin": "DaYing",
		"abbr": "DY",
		"zip": "629300",
		"level": 3
	},
	{
		"code": "511000",
		"parent_code": "510000",
		"name": "内江市",
		"alias": "内江",
		"pinyin": "NeiJiang",
		"abbr": "NJ",
		"zip": "641000",
		"level": 2
	},
	{
		"code": "511002",
		"parent_code": "511000",
		"name": "市中区",
		"alias": "市中区",
		"pinyin": "ShiZhongQu",
		"abbr": "SZQ",
		"zip": "641000",
		"level": 3
	},
	{
		"code": "511011",
		"parent_code": "511000",
		"name": "东兴区",
		"alias": "东兴区",
		"pinyin": "DongXingQu",
		"abbr": "DXQ",
		"zip": "641100",
		"level": 3
	},
	{
		"code": "511024",
		"parent_code": "511000",
		"name": "威远县",
		"alias": "威远",
		"pinyin": "WeiYuan",
		"abbr": "WY",
		"zip": "642450",
		"level": 3
	},
	{
		"code": "511025",
		"parent_code": "511000",
		"name": "资中县",
		"alias": "资中",
		"pinyin": "ZiZhong",
		"abbr": "ZZ",
		"zip": "641200",
		"level": 3
	},
	{
		"code": "511028",
		"parent_code": "511000",
		"name": "隆昌县",
		"alias": "隆昌",
		"pinyin": "LongChang",
		"abbr": "LC",
		"zip": "642150",
		"level": 3
	},
	{
		"code": "511100",
		"parent_code": "510000",
		"name": "乐山市",
		"alias": "乐山",
		"pinyin": "LeShan",
		"abbr": "LS",
		"zip": "614000",
		"level": 2
	},
	{
		"code": "511102",
		"parent_code": "511100",
		"name": "市中区",
		"alias": "市中区",
		"pinyin": "ShiZhongQu",
		"abbr": "SZQ",
		"zip": "614000",
		"level": 3
	},
	{
		"code": "511111",
		"parent_code": "511100",
		"name": "沙湾区",
		"alias": "沙湾区",
		"pinyin": "ShaWanQu",
		"abbr": "SWQ",
		"zip": "614900",
		"level": 3
	},
	{
		"code": "511112",
		"parent_code": "511100",
		"name": "五通桥区",
		"alias": "五通桥区",
		"pinyin": "WuTongQiaoQu",
		"abbr": "WTQQ",
		"zip": "614800",
		"level": 3
	},
	{
		"code": "511113",
		"parent_code": "511100",
		"name": "金口河区",
		"alias": "金口河区",
		"pinyin": "JinKouHeQu",
		"abbr": "JKHQ",
		"zip": "614700",
		"level": 3
	},
	{
		"code": "511123",
		"parent_code": "511100",
		"name": "犍为县",
		"alias": "犍为",
		"pinyin": "JianWei",
		"abbr": "JW",
		"zip": "614400",
		"level": 3
	},
	{
		"code": "511124",
		"parent_code": "511100",
		"name": "井研县",
		"alias": "井研",
		"pinyin": "JingYan",
		"abbr": "JY",
		"zip": "613100",
		"level": 3
	},
	{
		"code": "511126",
		"parent_code": "511100",
		"name": "夹江县",
		"alias": "夹江",
		"pinyin": "JiaJiang",
		"abbr": "JJ",
		"zip": "614100",
		"level": 3
	},
	{
		"code": "511129",
		"parent_code": "511100",
		"name": "沐川县",
		"alias": "沐川",
		"pinyin": "MuChuan",
		"abbr": "MC",
		"zip": "614500",
		"level": 3
	},
	{
		"code": "511132",
		"parent_code": "511100",
		"name": "峨边彝族自治县",
		"alias": "峨边彝族",
		"pinyin": "EBianYiZu",
		"abbr": "EBYZ",
		"zip": "614300",
		"level": 3
	},
	{
		"code": "511133",
		"parent_code": "511100",
		"name": "马边彝族自治县",
		"alias": "马边彝族",
		"pinyin": "MaBianYiZu",
		"abbr": "MBYZ",
		"zip": "614600",
		"level": 3
	},
	{
		"code": "511181",
		"parent_code": "511100",
		"name": "峨眉山市",
		"alias": "峨眉山",
		"pinyin": "EMeiShan",
		"abbr": "EMS",
		"zip": "614200",
		"level": 3
	},
	{
		"code": "511300",
		"parent_code": "510000",
		"name": "南充市",
		"alias": "南充",
		"pinyin": "NanChong",
		"abbr": "NC",
		"zip": "637000",
		"level": 2
	},
	{
		"code": "511302",
		"parent_code": "511300",
		"name": "顺庆区",
		"alias": "顺庆区",
		"pinyin": "ShunQingQu",
		"abbr": "SQQ",
		"zip": "637500",
		"level": 3
	},
	{
		"code": "511303",
		"parent_code": "511300",
		"name": "高坪区",
		"alias": "高坪区",
		"pinyin": "GaoPingQu",
		"abbr": "GPQ",
		"zip": "637100",
		"level": 3
	},
	{
		"code": "511304",
		"parent_code": "511300",
		"name": "嘉陵区",
		"alias": "嘉陵区",
		"pinyin": "JiaLingQu",
		"abbr": "JLQ",
		"zip": "637900",
		"level": 3
	},
	{
		"code": "511321",
		"parent_code": "511300",
		"name": "南部县",
		"alias": "南部",
		"pinyin": "NanBu",
		"abbr": "NB",
		"zip": "637300",
		"level": 3
	},
	{
		"code": "511322",
		"parent_code": "511300",
		"name": "营山县",
		"alias": "营山",
		"pinyin": "YingShan",
		"abbr": "YS",
		"zip": "638150",
		"level": 3
	},
	{
		"code": "511323",
		"parent_code": "511300",
		"name": "蓬安县",
		"alias": "蓬安",
		"pinyin": "PengAn",
		"abbr": "PA",
		"zip": "638250",
		"level": 3
	},
	{
		"code": "511324",
		"parent_code": "511300",
		"name": "仪陇县",
		"alias": "仪陇",
		"pinyin": "YiLong",
		"abbr": "YL",
		"zip": "637600",
		"level": 3
	},
	{
		"code": "511325",
		"parent_code": "511300",
		"name": "西充县",
		"alias": "西充",
		"pinyin": "XiChong",
		"abbr": "XC",
		"zip": "637200",
		"level": 3
	},
	{
		"code": "511381",
		"parent_code": "511300",
		"name": "阆中市",
		"alias": "阆中",
		"pinyin": "LangZhong",
		"abbr": "LZ",
		"zip": "637400",
		"level": 3
	},
	{
		"code": "511400",
		"parent_code": "510000",
		"name": "眉山市",
		"alias": "眉山",
		"pinyin": "MeiShan",
		"abbr": "MS",
		"zip": "620000",
		"level": 2
	},
	{
		"code": "511402",
		"parent_code": "511400",
		"name": "东坡区",
		"alias": "东坡区",
		"pinyin": "DongPoQu",
		"abbr": "DPQ",
		"zip": "620010",
		"level": 3
	},
	{
		"code": "511421",
		"parent_code": "511400",
		"name": "仁寿县",
		"alias": "仁寿",
		"pinyin": "RenShou",
		"abbr": "RS",
		"zip": "620500",
		"level": 3
	},
	{
		"code": "511422",
		"parent_code": "511400",
		"name": "彭山县",
		"alias": "彭山",
		"pinyin": "PengShan",
		"abbr": "PS",
		"zip": "620860",
		"level": 3
	},
	{
		"code": "511423",
		"parent_code": "511400",
		"name": "洪雅县",
		"alias": "洪雅",
		"pinyin": "HongYa",
		"abbr": "HY",
		"zip": "620360",
		"level": 3
	},
	{
		"code": "511424",
		"parent_code": "511400",
		"name": "丹棱县",
		"alias": "丹棱",
		"pinyin": "DanLeng",
		"abbr": "DL",
		"zip": "620200",
		"level": 3
	},
	{
		"code": "511425",
		"parent_code": "511400",
		"name": "青神县",
		"alias": "青神",
		"pinyin": "QingShen",
		"abbr": "QS",
		"zip": "620460",
		"level": 3
	},
	{
		"code": "511500",
		"parent_code": "510000",
		"name": "宜宾市",
		"alias": "宜宾",
		"pinyin": "YiBin",
		"abbr": "YB",
		"zip": "644000",
		"level": 2
	},
	{
		"code": "511502",
		"parent_code": "511500",
		"name": "翠屏区",
		"alias": "翠屏区",
		"pinyin": "CuiPingQu",
		"abbr": "CPQ",
		"zip": "644000",
		"level": 3
	},
	{
		"code": "511503",
		"parent_code": "511500",
		"name": "南溪区",
		"alias": "南溪区",
		"pinyin": "NanXiQu",
		"abbr": "NXQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "511521",
		"parent_code": "511500",
		"name": "宜宾县",
		"alias": "宜宾",
		"pinyin": "YiBin",
		"abbr": "YB",
		"zip": "644600",
		"level": 3
	},
	{
		"code": "511523",
		"parent_code": "511500",
		"name": "江安县",
		"alias": "江安",
		"pinyin": "JiangAn",
		"abbr": "JA",
		"zip": "644200",
		"level": 3
	},
	{
		"code": "511524",
		"parent_code": "511500",
		"name": "长宁县",
		"alias": "长宁",
		"pinyin": "ZhangNing",
		"abbr": "ZN",
		"zip": "644300",
		"level": 3
	},
	{
		"code": "511525",
		"parent_code": "511500",
		"name": "高县",
		"alias": "高县",
		"pinyin": "GaoXian",
		"abbr": "GX",
		"zip": "645150",
		"level": 3
	},
	{
		"code": "511526",
		"parent_code": "511500",
		"name": "珙县",
		"alias": "珙县",
		"pinyin": "GongXian",
		"abbr": "GX",
		"zip": "644500",
		"level": 3
	},
	{
		"code": "511527",
		"parent_code": "511500",
		"name": "筠连县",
		"alias": "筠连",
		"pinyin": "YunLian",
		"abbr": "YL",
		"zip": "645250",
		"level": 3
	},
	{
		"code": "511528",
		"parent_code": "511500",
		"name": "兴文县",
		"alias": "兴文",
		"pinyin": "XingWen",
		"abbr": "XW",
		"zip": "644400",
		"level": 3
	},
	{
		"code": "511529",
		"parent_code": "511500",
		"name": "屏山县",
		"alias": "屏山",
		"pinyin": "PingShan",
		"abbr": "PS",
		"zip": "645350",
		"level": 3
	},
	{
		"code": "511600",
		"parent_code": "510000",
		"name": "广安市",
		"alias": "广安",
		"pinyin": "GuangAn",
		"abbr": "GA",
		"zip": "638000",
		"level": 2
	},
	{
		"code": "511602",
		"parent_code": "511600",
		"name": "广安区",
		"alias": "广安区",
		"pinyin": "GuangAnQu",
		"abbr": "GAQ",
		"zip": "638550",
		"level": 3
	},
	{
		"code": "511621",
		"parent_code": "511600",
		"name": "岳池县",
		"alias": "岳池",
		"pinyin": "YueChi",
		"abbr": "YC",
		"zip": "638300",
		"level": 3
	},
	{
		"code": "511622",
		"parent_code": "511600",
		"name": "武胜县",
		"alias": "武胜",
		"pinyin": "WuSheng",
		"abbr": "WS",
		"zip": "638420",
		"level": 3
	},
	{
		"code": "511623",
		"parent_code": "511600",
		"name": "邻水县",
		"alias": "邻水",
		"pinyin": "LinShui",
		"abbr": "LS",
		"zip": "638520",
		"level": 3
	},
	{
		"code": "511681",
		"parent_code": "511600",
		"name": "华蓥市",
		"alias": "华蓥",
		"pinyin": "HuaYing",
		"abbr": "HY",
		"zip": "638650",
		"level": 3
	},
	{
		"code": "511700",
		"parent_code": "510000",
		"name": "达州市",
		"alias": "达州",
		"pinyin": "DaZhou",
		"abbr": "DZ",
		"zip": "635000",
		"level": 2
	},
	{
		"code": "511702",
		"parent_code": "511700",
		"name": "通川区",
		"alias": "通川区",
		"pinyin": "TongChuanQu",
		"abbr": "TCQ",
		"zip": "635000",
		"level": 3
	},
	{
		"code": "511722",
		"parent_code": "511700",
		"name": "宣汉县",
		"alias": "宣汉",
		"pinyin": "XuanHan",
		"abbr": "XH",
		"zip": "636150",
		"level": 3
	},
	{
		"code": "511723",
		"parent_code": "511700",
		"name": "开江县",
		"alias": "开江",
		"pinyin": "KaiJiang",
		"abbr": "KJ",
		"zip": "636250",
		"level": 3
	},
	{
		"code": "511724",
		"parent_code": "511700",
		"name": "大竹县",
		"alias": "大竹",
		"pinyin": "DaZhu",
		"abbr": "DZ",
		"zip": "635100",
		"level": 3
	},
	{
		"code": "511725",
		"parent_code": "511700",
		"name": "渠县",
		"alias": "渠县",
		"pinyin": "QuXian",
		"abbr": "QX",
		"zip": "635200",
		"level": 3
	},
	{
		"code": "511781",
		"parent_code": "511700",
		"name": "万源市",
		"alias": "万源",
		"pinyin": "WanYuan",
		"abbr": "WY",
		"zip": "636350",
		"level": 3
	},
	{
		"code": "511800",
		"parent_code": "510000",
		"name": "雅安市",
		"alias": "雅安",
		"pinyin": "YaAn",
		"abbr": "YA",
		"zip": "625000",
		"level": 2
	},
	{
		"code": "511802",
		"parent_code": "511800",
		"name": "雨城区",
		"alias": "雨城区",
		"pinyin": "YuChengQu",
		"abbr": "YCQ",
		"zip": "625000",
		"level": 3
	},
	{
		"code": "511803",
		"parent_code": "511800",
		"name": "名山区",
		"alias": "名山区",
		"pinyin": "MingShanQu",
		"abbr": "MSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "511822",
		"parent_code": "511800",
		"name": "荥经县",
		"alias": "荥经",
		"pinyin": "XingJing",
		"abbr": "XJ",
		"zip": "625200",
		"level": 3
	},
	{
		"code": "511823",
		"parent_code": "511800",
		"name": "汉源县",
		"alias": "汉源",
		"pinyin": "HanYuan",
		"abbr": "HY",
		"zip": "625300",
		"level": 3
	},
	{
		"code": "511824",
		"parent_code": "511800",
		"name": "石棉县",
		"alias": "石棉",
		"pinyin": "ShiMian",
		"abbr": "SM",
		"zip": "625400",
		"level": 3
	},
	{
		"code": "511825",
		"parent_code": "511800",
		"name": "天全县",
		"alias": "天全",
		"pinyin": "TianQuan",
		"abbr": "TQ",
		"zip": "625500",
		"level": 3
	},
	{
		"code": "511826",
		"parent_code": "511800",
		"name": "芦山县",
		"alias": "芦山",
		"pinyin": "LuShan",
		"abbr": "LS",
		"zip": "625600",
		"level": 3
	},
	{
		"code": "511827",
		"parent_code": "511800",
		"name": "宝兴县",
		"alias": "宝兴",
		"pinyin": "BaoXing",
		"abbr": "BX",
		"zip": "625700",
		"level": 3
	},
	{
		"code": "511900",
		"parent_code": "510000",
		"name": "巴中市",
		"alias": "巴中",
		"pinyin": "BaZhong",
		"abbr": "BZ",
		"zip": "636000",
		"level": 2
	},
	{
		"code": "511902",
		"parent_code": "510000",
		"name": "巴州区",
		"alias": "巴州区",
		"pinyin": "BaZhouQu",
		"abbr": "BZQ",
		"zip": "636601",
		"level": 2
	},
	{
		"code": "511921",
		"parent_code": "511900",
		"name": "通江县",
		"alias": "通江",
		"pinyin": "TongJiang",
		"abbr": "TJ",
		"zip": "636700",
		"level": 3
	},
	{
		"code": "511922",
		"parent_code": "511900",
		"name": "南江县",
		"alias": "南江",
		"pinyin": "NanJiang",
		"abbr": "NJ",
		"zip": "636600",
		"level": 3
	},
	{
		"code": "511923",
		"parent_code": "511900",
		"name": "平昌县",
		"alias": "平昌",
		"pinyin": "PingChang",
		"abbr": "PC",
		"zip": "636400",
		"level": 3
	},
	{
		"code": "512000",
		"parent_code": "510000",
		"name": "资阳市",
		"alias": "资阳",
		"pinyin": "ZiYang",
		"abbr": "ZY",
		"zip": "641300",
		"level": 2
	},
	{
		"code": "512002",
		"parent_code": "512000",
		"name": "雁江区",
		"alias": "雁江区",
		"pinyin": "YanJiangQu",
		"abbr": "YJQ",
		"zip": "641300",
		"level": 3
	},
	{
		"code": "512021",
		"parent_code": "512000",
		"name": "安岳县",
		"alias": "安岳",
		"pinyin": "AnYue",
		"abbr": "AY",
		"zip": "642350",
		"level": 3
	},
	{
		"code": "512022",
		"parent_code": "512000",
		"name": "乐至县",
		"alias": "乐至",
		"pinyin": "LeZhi",
		"abbr": "LZ",
		"zip": "641500",
		"level": 3
	},
	{
		"code": "512081",
		"parent_code": "512000",
		"name": "简阳市",
		"alias": "简阳",
		"pinyin": "JianYang",
		"abbr": "JY",
		"zip": "641400",
		"level": 3
	},
	{
		"code": "513200",
		"parent_code": "510000",
		"name": "阿坝藏族羌族自治州",
		"alias": "阿坝藏族羌族",
		"pinyin": "ABaCangZuQiangZu",
		"abbr": "ABCZQZ",
		"zip": "623000",
		"level": 2
	},
	{
		"code": "513221",
		"parent_code": "513200",
		"name": "汶川县",
		"alias": "汶川",
		"pinyin": "WenChuan",
		"abbr": "WC",
		"zip": "623000",
		"level": 3
	},
	{
		"code": "513222",
		"parent_code": "513200",
		"name": "理县",
		"alias": "理县",
		"pinyin": "LiXian",
		"abbr": "LX",
		"zip": "632100",
		"level": 3
	},
	{
		"code": "513223",
		"parent_code": "513200",
		"name": "茂县",
		"alias": "茂县",
		"pinyin": "MaoXian",
		"abbr": "MX",
		"zip": "623200",
		"level": 3
	},
	{
		"code": "513224",
		"parent_code": "513200",
		"name": "松潘县",
		"alias": "松潘",
		"pinyin": "SongPan",
		"abbr": "SP",
		"zip": "623300",
		"level": 3
	},
	{
		"code": "513225",
		"parent_code": "513200",
		"name": "九寨沟县",
		"alias": "九寨沟",
		"pinyin": "JiuZhaiGou",
		"abbr": "JZG",
		"zip": "623400",
		"level": 3
	},
	{
		"code": "513226",
		"parent_code": "513200",
		"name": "金川县",
		"alias": "金川",
		"pinyin": "JinChuan",
		"abbr": "JC",
		"zip": "624100",
		"level": 3
	},
	{
		"code": "513227",
		"parent_code": "513200",
		"name": "小金县",
		"alias": "小金",
		"pinyin": "XiaoJin",
		"abbr": "XJ",
		"zip": "624200",
		"level": 3
	},
	{
		"code": "513228",
		"parent_code": "513200",
		"name": "黑水县",
		"alias": "黑水",
		"pinyin": "HeiShui",
		"abbr": "HS",
		"zip": "623500",
		"level": 3
	},
	{
		"code": "513229",
		"parent_code": "513200",
		"name": "马尔康县",
		"alias": "马尔康",
		"pinyin": "MaErKang",
		"abbr": "MEK",
		"zip": "624000",
		"level": 3
	},
	{
		"code": "513230",
		"parent_code": "513200",
		"name": "壤塘县",
		"alias": "壤塘",
		"pinyin": "RangTang",
		"abbr": "RT",
		"zip": "624300",
		"level": 3
	},
	{
		"code": "513231",
		"parent_code": "513200",
		"name": "阿坝县",
		"alias": "阿坝",
		"pinyin": "ABa",
		"abbr": "AB",
		"zip": "624600",
		"level": 3
	},
	{
		"code": "513232",
		"parent_code": "513200",
		"name": "若尔盖县",
		"alias": "若尔盖",
		"pinyin": "RuoErGai",
		"abbr": "REG",
		"zip": "624500",
		"level": 3
	},
	{
		"code": "513233",
		"parent_code": "513200",
		"name": "红原县",
		"alias": "红原",
		"pinyin": "HongYuan",
		"abbr": "HY",
		"zip": "624400",
		"level": 3
	},
	{
		"code": "513300",
		"parent_code": "510000",
		"name": "甘孜藏族自治州",
		"alias": "甘孜藏族",
		"pinyin": "GanZiCangZu",
		"abbr": "GZCZ",
		"zip": "626000",
		"level": 2
	},
	{
		"code": "513321",
		"parent_code": "513300",
		"name": "康定县",
		"alias": "康定",
		"pinyin": "KangDing",
		"abbr": "KD",
		"zip": "626000",
		"level": 3
	},
	{
		"code": "513322",
		"parent_code": "513300",
		"name": "泸定县",
		"alias": "泸定",
		"pinyin": "LuDing",
		"abbr": "LD",
		"zip": "626100",
		"level": 3
	},
	{
		"code": "513323",
		"parent_code": "513300",
		"name": "丹巴县",
		"alias": "丹巴",
		"pinyin": "DanBa",
		"abbr": "DB",
		"zip": "626300",
		"level": 3
	},
	{
		"code": "513324",
		"parent_code": "513300",
		"name": "九龙县",
		"alias": "九龙",
		"pinyin": "JiuLong",
		"abbr": "JL",
		"zip": "626200",
		"level": 3
	},
	{
		"code": "513325",
		"parent_code": "513300",
		"name": "雅江县",
		"alias": "雅江",
		"pinyin": "YaJiang",
		"abbr": "YJ",
		"zip": "627450",
		"level": 3
	},
	{
		"code": "513326",
		"parent_code": "513300",
		"name": "道孚县",
		"alias": "道孚",
		"pinyin": "DaoFu",
		"abbr": "DF",
		"zip": "626400",
		"level": 3
	},
	{
		"code": "513327",
		"parent_code": "513300",
		"name": "炉霍县",
		"alias": "炉霍",
		"pinyin": "LuHuo",
		"abbr": "LH",
		"zip": "626500",
		"level": 3
	},
	{
		"code": "513328",
		"parent_code": "513300",
		"name": "甘孜县",
		"alias": "甘孜",
		"pinyin": "GanZi",
		"abbr": "GZ",
		"zip": "626700",
		"level": 3
	},
	{
		"code": "513329",
		"parent_code": "513300",
		"name": "新龙县",
		"alias": "新龙",
		"pinyin": "XinLong",
		"abbr": "XL",
		"zip": "626800",
		"level": 3
	},
	{
		"code": "513330",
		"parent_code": "513300",
		"name": "德格县",
		"alias": "德格",
		"pinyin": "DeGe",
		"abbr": "DG",
		"zip": "627250",
		"level": 3
	},
	{
		"code": "513331",
		"parent_code": "513300",
		"name": "白玉县",
		"alias": "白玉",
		"pinyin": "BaiYu",
		"abbr": "BY",
		"zip": "627150",
		"level": 3
	},
	{
		"code": "513332",
		"parent_code": "513300",
		"name": "石渠县",
		"alias": "石渠",
		"pinyin": "ShiQu",
		"abbr": "SQ",
		"zip": "627350",
		"level": 3
	},
	{
		"code": "513333",
		"parent_code": "513300",
		"name": "色达县",
		"alias": "色达",
		"pinyin": "SeDa",
		"abbr": "SD",
		"zip": "626600",
		"level": 3
	},
	{
		"code": "513334",
		"parent_code": "513300",
		"name": "理塘县",
		"alias": "理塘",
		"pinyin": "LiTang",
		"abbr": "LT",
		"zip": "627550",
		"level": 3
	},
	{
		"code": "513335",
		"parent_code": "513300",
		"name": "巴塘县",
		"alias": "巴塘",
		"pinyin": "BaTang",
		"abbr": "BT",
		"zip": "627650",
		"level": 3
	},
	{
		"code": "513336",
		"parent_code": "513300",
		"name": "乡城县",
		"alias": "乡城",
		"pinyin": "XiangCheng",
		"abbr": "XC",
		"zip": "627850",
		"level": 3
	},
	{
		"code": "513337",
		"parent_code": "513300",
		"name": "稻城县",
		"alias": "稻城",
		"pinyin": "DaoCheng",
		"abbr": "DC",
		"zip": "627750",
		"level": 3
	},
	{
		"code": "513338",
		"parent_code": "513300",
		"name": "得荣县",
		"alias": "得荣",
		"pinyin": "DeRong",
		"abbr": "DR",
		"zip": "627950",
		"level": 3
	},
	{
		"code": "513400",
		"parent_code": "510000",
		"name": "凉山彝族自治州",
		"alias": "凉山彝族",
		"pinyin": "LiangShanYiZu",
		"abbr": "LSYZ",
		"zip": "615000",
		"level": 2
	},
	{
		"code": "513401",
		"parent_code": "513400",
		"name": "西昌市",
		"alias": "西昌",
		"pinyin": "XiChang",
		"abbr": "XC",
		"zip": "615000",
		"level": 3
	},
	{
		"code": "513422",
		"parent_code": "513400",
		"name": "木里藏族自治县",
		"alias": "木里藏族",
		"pinyin": "MuLiCangZu",
		"abbr": "MLCZ",
		"zip": "615800",
		"level": 3
	},
	{
		"code": "513423",
		"parent_code": "513400",
		"name": "盐源县",
		"alias": "盐源",
		"pinyin": "YanYuan",
		"abbr": "YY",
		"zip": "615700",
		"level": 3
	},
	{
		"code": "513424",
		"parent_code": "513400",
		"name": "德昌县",
		"alias": "德昌",
		"pinyin": "DeChang",
		"abbr": "DC",
		"zip": "615500",
		"level": 3
	},
	{
		"code": "513425",
		"parent_code": "513400",
		"name": "会理县",
		"alias": "会理",
		"pinyin": "HuiLi",
		"abbr": "HL",
		"zip": "615100",
		"level": 3
	},
	{
		"code": "513426",
		"parent_code": "513400",
		"name": "会东县",
		"alias": "会东",
		"pinyin": "HuiDong",
		"abbr": "HD",
		"zip": "615200",
		"level": 3
	},
	{
		"code": "513427",
		"parent_code": "513400",
		"name": "宁南县",
		"alias": "宁南",
		"pinyin": "NingNan",
		"abbr": "NN",
		"zip": "615400",
		"level": 3
	},
	{
		"code": "513428",
		"parent_code": "513400",
		"name": "普格县",
		"alias": "普格",
		"pinyin": "PuGe",
		"abbr": "PG",
		"zip": "615300",
		"level": 3
	},
	{
		"code": "513429",
		"parent_code": "513400",
		"name": "布拖县",
		"alias": "布拖",
		"pinyin": "BuTuo",
		"abbr": "BT",
		"zip": "616350",
		"level": 3
	},
	{
		"code": "513430",
		"parent_code": "513400",
		"name": "金阳县",
		"alias": "金阳",
		"pinyin": "JinYang",
		"abbr": "JY",
		"zip": "616250",
		"level": 3
	},
	{
		"code": "513431",
		"parent_code": "513400",
		"name": "昭觉县",
		"alias": "昭觉",
		"pinyin": "ZhaoJue",
		"abbr": "ZJ",
		"zip": "616150",
		"level": 3
	},
	{
		"code": "513432",
		"parent_code": "513400",
		"name": "喜德县",
		"alias": "喜德",
		"pinyin": "XiDe",
		"abbr": "XD",
		"zip": "616750",
		"level": 3
	},
	{
		"code": "513433",
		"parent_code": "513400",
		"name": "冕宁县",
		"alias": "冕宁",
		"pinyin": "MianNing",
		"abbr": "MN",
		"zip": "615600",
		"level": 3
	},
	{
		"code": "513434",
		"parent_code": "513400",
		"name": "越西县",
		"alias": "越西",
		"pinyin": "YueXi",
		"abbr": "YX",
		"zip": "616650",
		"level": 3
	},
	{
		"code": "513435",
		"parent_code": "513400",
		"name": "甘洛县",
		"alias": "甘洛",
		"pinyin": "GanLuo",
		"abbr": "GL",
		"zip": "616850",
		"level": 3
	},
	{
		"code": "513436",
		"parent_code": "513400",
		"name": "美姑县",
		"alias": "美姑",
		"pinyin": "MeiGu",
		"abbr": "MG",
		"zip": "616450",
		"level": 3
	},
	{
		"code": "513437",
		"parent_code": "513400",
		"name": "雷波县",
		"alias": "雷波",
		"pinyin": "LeiBo",
		"abbr": "LB",
		"zip": "616550",
		"level": 3
	},
	{
		"code": "520000",
		"parent_code": null,
		"name": "贵州省",
		"alias": "贵州",
		"pinyin": "GuiZhou",
		"abbr": "GZ",
		"zip": "550000",
		"level": 1
	},
	{
		"code": "520100",
		"parent_code": "520000",
		"name": "贵阳市",
		"alias": "贵阳",
		"pinyin": "GuiYang",
		"abbr": "GY",
		"zip": "550000",
		"level": 2
	},
	{
		"code": "520102",
		"parent_code": "520100",
		"name": "南明区",
		"alias": "南明区",
		"pinyin": "NanMingQu",
		"abbr": "NMQ",
		"zip": "550002",
		"level": 3
	},
	{
		"code": "520103",
		"parent_code": "520100",
		"name": "云岩区",
		"alias": "云岩区",
		"pinyin": "YunYanQu",
		"abbr": "YYQ",
		"zip": "550001",
		"level": 3
	},
	{
		"code": "520111",
		"parent_code": "520100",
		"name": "花溪区",
		"alias": "花溪区",
		"pinyin": "HuaXiQu",
		"abbr": "HXQ",
		"zip": "550025",
		"level": 3
	},
	{
		"code": "520112",
		"parent_code": "520100",
		"name": "乌当区",
		"alias": "乌当区",
		"pinyin": "WuDangQu",
		"abbr": "WDQ",
		"zip": "550018",
		"level": 3
	},
	{
		"code": "520113",
		"parent_code": "520100",
		"name": "白云区",
		"alias": "白云区",
		"pinyin": "BaiYunQu",
		"abbr": "BYQ",
		"zip": "550014",
		"level": 3
	},
	{
		"code": "520121",
		"parent_code": "520100",
		"name": "开阳县",
		"alias": "开阳",
		"pinyin": "KaiYang",
		"abbr": "KY",
		"zip": "550300",
		"level": 3
	},
	{
		"code": "520122",
		"parent_code": "520100",
		"name": "息烽县",
		"alias": "息烽",
		"pinyin": "XiFeng",
		"abbr": "XF",
		"zip": "551100",
		"level": 3
	},
	{
		"code": "520123",
		"parent_code": "520100",
		"name": "修文县",
		"alias": "修文",
		"pinyin": "XiuWen",
		"abbr": "XW",
		"zip": "550200",
		"level": 3
	},
	{
		"code": "520181",
		"parent_code": "520100",
		"name": "清镇市",
		"alias": "清镇",
		"pinyin": "QingZhen",
		"abbr": "QZ",
		"zip": "551400",
		"level": 3
	},
	{
		"code": "520200",
		"parent_code": "520000",
		"name": "六盘水市",
		"alias": "六盘水",
		"pinyin": "LiuPanShui",
		"abbr": "LPS",
		"zip": "553000",
		"level": 2
	},
	{
		"code": "520203",
		"parent_code": "520200",
		"name": "六枝特区",
		"alias": "六枝特区",
		"pinyin": "LiuZhiTeQu",
		"abbr": "LZTQ",
		"zip": "553400",
		"level": 3
	},
	{
		"code": "520221",
		"parent_code": "520200",
		"name": "水城县",
		"alias": "水城",
		"pinyin": "ShuiCheng",
		"abbr": "SC",
		"zip": "553600",
		"level": 3
	},
	{
		"code": "520222",
		"parent_code": "520200",
		"name": "盘县",
		"alias": "盘县",
		"pinyin": "PanXian",
		"abbr": "PX",
		"zip": "561601",
		"level": 3
	},
	{
		"code": "520300",
		"parent_code": "520000",
		"name": "遵义市",
		"alias": "遵义",
		"pinyin": "ZunYi",
		"abbr": "ZY",
		"zip": "563000",
		"level": 2
	},
	{
		"code": "520302",
		"parent_code": "520300",
		"name": "红花岗区",
		"alias": "红花岗区",
		"pinyin": "HongHuaGangQu",
		"abbr": "HHGQ",
		"zip": "563000",
		"level": 3
	},
	{
		"code": "520303",
		"parent_code": "520300",
		"name": "汇川区",
		"alias": "汇川区",
		"pinyin": "HuiChuanQu",
		"abbr": "HCQ",
		"zip": "563000",
		"level": 3
	},
	{
		"code": "520321",
		"parent_code": "520300",
		"name": "遵义县",
		"alias": "遵义",
		"pinyin": "ZunYi",
		"abbr": "ZY",
		"zip": "563100",
		"level": 3
	},
	{
		"code": "520322",
		"parent_code": "520300",
		"name": "桐梓县",
		"alias": "桐梓",
		"pinyin": "TongZi",
		"abbr": "TZ",
		"zip": "563200",
		"level": 3
	},
	{
		"code": "520323",
		"parent_code": "520300",
		"name": "绥阳县",
		"alias": "绥阳",
		"pinyin": "SuiYang",
		"abbr": "SY",
		"zip": "563300",
		"level": 3
	},
	{
		"code": "520324",
		"parent_code": "520300",
		"name": "正安县",
		"alias": "正安",
		"pinyin": "ZhengAn",
		"abbr": "ZA",
		"zip": "563400",
		"level": 3
	},
	{
		"code": "520325",
		"parent_code": "520300",
		"name": "道真仡佬族苗族自治县",
		"alias": "道真仡佬族苗族",
		"pinyin": "DaoZhenGeLaoZuMiaoZu",
		"abbr": "DZGLZMZ",
		"zip": "563500",
		"level": 3
	},
	{
		"code": "520326",
		"parent_code": "520300",
		"name": "务川仡佬族苗族自治县",
		"alias": "务川仡佬族苗族",
		"pinyin": "WuChuanGeLaoZuMiaoZu",
		"abbr": "WCGLZMZ",
		"zip": "564300",
		"level": 3
	},
	{
		"code": "520327",
		"parent_code": "520300",
		"name": "凤冈县",
		"alias": "凤冈",
		"pinyin": "FengGang",
		"abbr": "FG",
		"zip": "564200",
		"level": 3
	},
	{
		"code": "520328",
		"parent_code": "520300",
		"name": "湄潭县",
		"alias": "湄潭",
		"pinyin": "MeiTan",
		"abbr": "MT",
		"zip": "564100",
		"level": 3
	},
	{
		"code": "520329",
		"parent_code": "520300",
		"name": "余庆县",
		"alias": "余庆",
		"pinyin": "YuQing",
		"abbr": "YQ",
		"zip": "564400",
		"level": 3
	},
	{
		"code": "520330",
		"parent_code": "520300",
		"name": "习水县",
		"alias": "习水",
		"pinyin": "XiShui",
		"abbr": "XS",
		"zip": "564600",
		"level": 3
	},
	{
		"code": "520381",
		"parent_code": "520300",
		"name": "赤水市",
		"alias": "赤水",
		"pinyin": "ChiShui",
		"abbr": "CS",
		"zip": "564700",
		"level": 3
	},
	{
		"code": "520382",
		"parent_code": "520300",
		"name": "仁怀市",
		"alias": "仁怀",
		"pinyin": "RenHuai",
		"abbr": "RH",
		"zip": "564500",
		"level": 3
	},
	{
		"code": "520400",
		"parent_code": "520000",
		"name": "安顺市",
		"alias": "安顺",
		"pinyin": "AnShun",
		"abbr": "AS",
		"zip": "561000",
		"level": 2
	},
	{
		"code": "520402",
		"parent_code": "520400",
		"name": "西秀区",
		"alias": "西秀区",
		"pinyin": "XiXiuQu",
		"abbr": "XXQ",
		"zip": "561000",
		"level": 3
	},
	{
		"code": "520421",
		"parent_code": "520400",
		"name": "平坝县",
		"alias": "平坝",
		"pinyin": "PingBa",
		"abbr": "PB",
		"zip": "561100",
		"level": 3
	},
	{
		"code": "520422",
		"parent_code": "520400",
		"name": "普定县",
		"alias": "普定",
		"pinyin": "PuDing",
		"abbr": "PD",
		"zip": "562100",
		"level": 3
	},
	{
		"code": "520423",
		"parent_code": "520400",
		"name": "镇宁布依族苗族自治县",
		"alias": "镇宁布依族苗族",
		"pinyin": "ZhenNingBuYiZuMiaoZu",
		"abbr": "ZNBYZMZ",
		"zip": "561200",
		"level": 3
	},
	{
		"code": "520424",
		"parent_code": "520400",
		"name": "关岭布依族苗族自治县",
		"alias": "关岭布依族苗族",
		"pinyin": "GuanLingBuYiZuMiaoZu",
		"abbr": "GLBYZMZ",
		"zip": "561300",
		"level": 3
	},
	{
		"code": "520425",
		"parent_code": "520400",
		"name": "紫云苗族布依族自治县",
		"alias": "紫云苗族布依族",
		"pinyin": "ZiYunMiaoZuBuYiZu",
		"abbr": "ZYMZBYZ",
		"zip": "550800",
		"level": 3
	},
	{
		"code": "520500",
		"parent_code": "520000",
		"name": "毕节市",
		"alias": "毕节",
		"pinyin": "BiJie",
		"abbr": "BJ",
		"zip": "",
		"level": 2
	},
	{
		"code": "520502",
		"parent_code": "520500",
		"name": "七星关区",
		"alias": "七星关区",
		"pinyin": "QiXingGuanQu",
		"abbr": "QXGQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520521",
		"parent_code": "520500",
		"name": "大方县",
		"alias": "大方",
		"pinyin": "DaFang",
		"abbr": "DF",
		"zip": "",
		"level": 3
	},
	{
		"code": "520522",
		"parent_code": "520500",
		"name": "黔西县",
		"alias": "黔西",
		"pinyin": "QianXi",
		"abbr": "QX",
		"zip": "",
		"level": 3
	},
	{
		"code": "520523",
		"parent_code": "520500",
		"name": "金沙县",
		"alias": "金沙",
		"pinyin": "JinSha",
		"abbr": "JS",
		"zip": "",
		"level": 3
	},
	{
		"code": "520524",
		"parent_code": "520500",
		"name": "织金县",
		"alias": "织金",
		"pinyin": "ZhiJin",
		"abbr": "ZJ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520525",
		"parent_code": "520500",
		"name": "纳雍县",
		"alias": "纳雍",
		"pinyin": "NaYong",
		"abbr": "NY",
		"zip": "",
		"level": 3
	},
	{
		"code": "520526",
		"parent_code": "520500",
		"name": "威宁彝族回族苗族自治县",
		"alias": "威宁彝族回族苗族",
		"pinyin": "WeiNingYiZuHuiZuMiaoZu",
		"abbr": "WNYZHZMZ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520527",
		"parent_code": "520500",
		"name": "赫章县",
		"alias": "赫章",
		"pinyin": "HeZhang",
		"abbr": "HZ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520600",
		"parent_code": "520000",
		"name": "铜仁市",
		"alias": "铜仁",
		"pinyin": "TongRen",
		"abbr": "TR",
		"zip": "",
		"level": 2
	},
	{
		"code": "520602",
		"parent_code": "520600",
		"name": "碧江区",
		"alias": "碧江区",
		"pinyin": "BiJiangQu",
		"abbr": "BJQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520603",
		"parent_code": "520600",
		"name": "万山区",
		"alias": "万山区",
		"pinyin": "WanShanQu",
		"abbr": "WSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520621",
		"parent_code": "520600",
		"name": "江口县",
		"alias": "江口",
		"pinyin": "JiangKou",
		"abbr": "JK",
		"zip": "",
		"level": 3
	},
	{
		"code": "520622",
		"parent_code": "520600",
		"name": "玉屏侗族自治县",
		"alias": "玉屏侗族",
		"pinyin": "YuPingDongZu",
		"abbr": "YPDZ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520623",
		"parent_code": "520600",
		"name": "石阡县",
		"alias": "石阡",
		"pinyin": "ShiQian",
		"abbr": "SQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520624",
		"parent_code": "520600",
		"name": "思南县",
		"alias": "思南",
		"pinyin": "SiNan",
		"abbr": "SN",
		"zip": "",
		"level": 3
	},
	{
		"code": "520625",
		"parent_code": "520600",
		"name": "印江土家族苗族自治县",
		"alias": "印江土家族苗族",
		"pinyin": "YinJiangTuJiaZuMiaoZu",
		"abbr": "YJTJZMZ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520626",
		"parent_code": "520600",
		"name": "德江县",
		"alias": "德江",
		"pinyin": "DeJiang",
		"abbr": "DJ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520627",
		"parent_code": "520600",
		"name": "沿河土家族自治县",
		"alias": "沿河土家族",
		"pinyin": "YanHeTuJiaZu",
		"abbr": "YHTJZ",
		"zip": "",
		"level": 3
	},
	{
		"code": "520628",
		"parent_code": "520600",
		"name": "松桃苗族自治县",
		"alias": "松桃苗族",
		"pinyin": "SongTaoMiaoZu",
		"abbr": "STMZ",
		"zip": "",
		"level": 3
	},
	{
		"code": "522300",
		"parent_code": "520000",
		"name": "黔西南布依族苗族自治州",
		"alias": "黔西南布依族苗族",
		"pinyin": "QianXiNanBuYiZuMiaoZu",
		"abbr": "QXNBYZMZ",
		"zip": "562400",
		"level": 2
	},
	{
		"code": "522301",
		"parent_code": "522300",
		"name": "兴义市",
		"alias": "兴义",
		"pinyin": "XingYi",
		"abbr": "XY",
		"zip": "562400",
		"level": 3
	},
	{
		"code": "522322",
		"parent_code": "522300",
		"name": "兴仁县",
		"alias": "兴仁",
		"pinyin": "XingRen",
		"abbr": "XR",
		"zip": "562300",
		"level": 3
	},
	{
		"code": "522323",
		"parent_code": "522300",
		"name": "普安县",
		"alias": "普安",
		"pinyin": "PuAn",
		"abbr": "PA",
		"zip": "561500",
		"level": 3
	},
	{
		"code": "522324",
		"parent_code": "522300",
		"name": "晴隆县",
		"alias": "晴隆",
		"pinyin": "QingLong",
		"abbr": "QL",
		"zip": "561400",
		"level": 3
	},
	{
		"code": "522325",
		"parent_code": "522300",
		"name": "贞丰县",
		"alias": "贞丰",
		"pinyin": "ZhenFeng",
		"abbr": "ZF",
		"zip": "562200",
		"level": 3
	},
	{
		"code": "522326",
		"parent_code": "522300",
		"name": "望谟县",
		"alias": "望谟",
		"pinyin": "WangMo",
		"abbr": "WM",
		"zip": "552300",
		"level": 3
	},
	{
		"code": "522327",
		"parent_code": "522300",
		"name": "册亨县",
		"alias": "册亨",
		"pinyin": "CeHeng",
		"abbr": "CH",
		"zip": "552200",
		"level": 3
	},
	{
		"code": "522328",
		"parent_code": "522300",
		"name": "安龙县",
		"alias": "安龙",
		"pinyin": "AnLong",
		"abbr": "AL",
		"zip": "552400",
		"level": 3
	},
	{
		"code": "522600",
		"parent_code": "520000",
		"name": "黔东南苗族侗族自治州",
		"alias": "黔东南苗族侗族",
		"pinyin": "QianDongNanMiaoZuDongZu",
		"abbr": "QDNMZDZ",
		"zip": "556000",
		"level": 2
	},
	{
		"code": "522601",
		"parent_code": "522600",
		"name": "凯里市",
		"alias": "凯里",
		"pinyin": "KaiLi",
		"abbr": "KL",
		"zip": "556000",
		"level": 3
	},
	{
		"code": "522622",
		"parent_code": "522600",
		"name": "黄平县",
		"alias": "黄平",
		"pinyin": "HuangPing",
		"abbr": "HP",
		"zip": "556100",
		"level": 3
	},
	{
		"code": "522623",
		"parent_code": "522600",
		"name": "施秉县",
		"alias": "施秉",
		"pinyin": "ShiBing",
		"abbr": "SB",
		"zip": "556200",
		"level": 3
	},
	{
		"code": "522624",
		"parent_code": "522600",
		"name": "三穗县",
		"alias": "三穗",
		"pinyin": "SanSui",
		"abbr": "SS",
		"zip": "556500",
		"level": 3
	},
	{
		"code": "522625",
		"parent_code": "522600",
		"name": "镇远县",
		"alias": "镇远",
		"pinyin": "ZhenYuan",
		"abbr": "ZY",
		"zip": "557700",
		"level": 3
	},
	{
		"code": "522626",
		"parent_code": "522600",
		"name": "岑巩县",
		"alias": "岑巩",
		"pinyin": "CenGong",
		"abbr": "CG",
		"zip": "557800",
		"level": 3
	},
	{
		"code": "522627",
		"parent_code": "522600",
		"name": "天柱县",
		"alias": "天柱",
		"pinyin": "TianZhu",
		"abbr": "TZ",
		"zip": "556600",
		"level": 3
	},
	{
		"code": "522628",
		"parent_code": "522600",
		"name": "锦屏县",
		"alias": "锦屏",
		"pinyin": "JinPing",
		"abbr": "JP",
		"zip": "556700",
		"level": 3
	},
	{
		"code": "522629",
		"parent_code": "522600",
		"name": "剑河县",
		"alias": "剑河",
		"pinyin": "JianHe",
		"abbr": "JH",
		"zip": "556400",
		"level": 3
	},
	{
		"code": "522630",
		"parent_code": "522600",
		"name": "台江县",
		"alias": "台江",
		"pinyin": "TaiJiang",
		"abbr": "TJ",
		"zip": "556300",
		"level": 3
	},
	{
		"code": "522631",
		"parent_code": "522600",
		"name": "黎平县",
		"alias": "黎平",
		"pinyin": "LiPing",
		"abbr": "LP",
		"zip": "557300",
		"level": 3
	},
	{
		"code": "522632",
		"parent_code": "522600",
		"name": "榕江县",
		"alias": "榕江",
		"pinyin": "RongJiang",
		"abbr": "RJ",
		"zip": "557200",
		"level": 3
	},
	{
		"code": "522633",
		"parent_code": "522600",
		"name": "从江县",
		"alias": "从江",
		"pinyin": "CongJiang",
		"abbr": "CJ",
		"zip": "557400",
		"level": 3
	},
	{
		"code": "522634",
		"parent_code": "522600",
		"name": "雷山县",
		"alias": "雷山",
		"pinyin": "LeiShan",
		"abbr": "LS",
		"zip": "557100",
		"level": 3
	},
	{
		"code": "522635",
		"parent_code": "522600",
		"name": "麻江县",
		"alias": "麻江",
		"pinyin": "MaJiang",
		"abbr": "MJ",
		"zip": "557600",
		"level": 3
	},
	{
		"code": "522636",
		"parent_code": "522600",
		"name": "丹寨县",
		"alias": "丹寨",
		"pinyin": "DanZhai",
		"abbr": "DZ",
		"zip": "557500",
		"level": 3
	},
	{
		"code": "522700",
		"parent_code": "520000",
		"name": "黔南布依族苗族自治州",
		"alias": "黔南布依族苗族",
		"pinyin": "QianNanBuYiZuMiaoZu",
		"abbr": "QNBYZMZ",
		"zip": "558200",
		"level": 2
	},
	{
		"code": "522701",
		"parent_code": "522700",
		"name": "都匀市",
		"alias": "都匀",
		"pinyin": "DouYun",
		"abbr": "DY",
		"zip": "558000",
		"level": 3
	},
	{
		"code": "522702",
		"parent_code": "522700",
		"name": "福泉市",
		"alias": "福泉",
		"pinyin": "FuQuan",
		"abbr": "FQ",
		"zip": "550500",
		"level": 3
	},
	{
		"code": "522722",
		"parent_code": "522700",
		"name": "荔波县",
		"alias": "荔波",
		"pinyin": "LiBo",
		"abbr": "LB",
		"zip": "558400",
		"level": 3
	},
	{
		"code": "522723",
		"parent_code": "522700",
		"name": "贵定县",
		"alias": "贵定",
		"pinyin": "GuiDing",
		"abbr": "GD",
		"zip": "551300",
		"level": 3
	},
	{
		"code": "522725",
		"parent_code": "522700",
		"name": "瓮安县",
		"alias": "瓮安",
		"pinyin": "WengAn",
		"abbr": "WA",
		"zip": "550400",
		"level": 3
	},
	{
		"code": "522726",
		"parent_code": "522700",
		"name": "独山县",
		"alias": "独山",
		"pinyin": "DuShan",
		"abbr": "DS",
		"zip": "558200",
		"level": 3
	},
	{
		"code": "522727",
		"parent_code": "522700",
		"name": "平塘县",
		"alias": "平塘",
		"pinyin": "PingTang",
		"abbr": "PT",
		"zip": "558300",
		"level": 3
	},
	{
		"code": "522728",
		"parent_code": "522700",
		"name": "罗甸县",
		"alias": "罗甸",
		"pinyin": "LuoDian",
		"abbr": "LD",
		"zip": "550100",
		"level": 3
	},
	{
		"code": "522729",
		"parent_code": "522700",
		"name": "长顺县",
		"alias": "长顺",
		"pinyin": "ZhangShun",
		"abbr": "ZS",
		"zip": "550700",
		"level": 3
	},
	{
		"code": "522730",
		"parent_code": "522700",
		"name": "龙里县",
		"alias": "龙里",
		"pinyin": "LongLi",
		"abbr": "LL",
		"zip": "551200",
		"level": 3
	},
	{
		"code": "522731",
		"parent_code": "522700",
		"name": "惠水县",
		"alias": "惠水",
		"pinyin": "HuiShui",
		"abbr": "HS",
		"zip": "550600",
		"level": 3
	},
	{
		"code": "522732",
		"parent_code": "522700",
		"name": "三都水族自治县",
		"alias": "三都水族",
		"pinyin": "SanDouShuiZu",
		"abbr": "SDSZ",
		"zip": "558100",
		"level": 3
	},
	{
		"code": "530000",
		"parent_code": null,
		"name": "云南省",
		"alias": "云南",
		"pinyin": "YunNan",
		"abbr": "YN",
		"zip": "650000",
		"level": 1
	},
	{
		"code": "530100",
		"parent_code": "530000",
		"name": "昆明市",
		"alias": "昆明",
		"pinyin": "KunMing",
		"abbr": "KM",
		"zip": "650000",
		"level": 2
	},
	{
		"code": "530102",
		"parent_code": "530100",
		"name": "五华区",
		"alias": "五华区",
		"pinyin": "WuHuaQu",
		"abbr": "WHQ",
		"zip": "650032",
		"level": 3
	},
	{
		"code": "530103",
		"parent_code": "530100",
		"name": "盘龙区",
		"alias": "盘龙区",
		"pinyin": "PanLongQu",
		"abbr": "PLQ",
		"zip": "650051",
		"level": 3
	},
	{
		"code": "530111",
		"parent_code": "530100",
		"name": "官渡区",
		"alias": "官渡区",
		"pinyin": "GuanDuQu",
		"abbr": "GDQ",
		"zip": "650220",
		"level": 3
	},
	{
		"code": "530112",
		"parent_code": "530100",
		"name": "西山区",
		"alias": "西山区",
		"pinyin": "XiShanQu",
		"abbr": "XSQ",
		"zip": "650100",
		"level": 3
	},
	{
		"code": "530113",
		"parent_code": "530100",
		"name": "东川区",
		"alias": "东川区",
		"pinyin": "DongChuanQu",
		"abbr": "DCQ",
		"zip": "654100",
		"level": 3
	},
	{
		"code": "530114",
		"parent_code": "530100",
		"name": "呈贡区",
		"alias": "呈贡区",
		"pinyin": "ChengGongQu",
		"abbr": "CGQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "530122",
		"parent_code": "530100",
		"name": "晋宁县",
		"alias": "晋宁",
		"pinyin": "JinNing",
		"abbr": "JN",
		"zip": "650600",
		"level": 3
	},
	{
		"code": "530124",
		"parent_code": "530100",
		"name": "富民县",
		"alias": "富民",
		"pinyin": "FuMin",
		"abbr": "FM",
		"zip": "650400",
		"level": 3
	},
	{
		"code": "530125",
		"parent_code": "530100",
		"name": "宜良县",
		"alias": "宜良",
		"pinyin": "YiLiang",
		"abbr": "YL",
		"zip": "652100",
		"level": 3
	},
	{
		"code": "530126",
		"parent_code": "530100",
		"name": "石林彝族自治县",
		"alias": "石林彝族",
		"pinyin": "ShiLinYiZu",
		"abbr": "SLYZ",
		"zip": "652200",
		"level": 3
	},
	{
		"code": "530127",
		"parent_code": "530100",
		"name": "嵩明县",
		"alias": "嵩明",
		"pinyin": "SongMing",
		"abbr": "SM",
		"zip": "651700",
		"level": 3
	},
	{
		"code": "530128",
		"parent_code": "530100",
		"name": "禄劝彝族苗族自治县",
		"alias": "禄劝彝族苗族",
		"pinyin": "LuQuanYiZuMiaoZu",
		"abbr": "LQYZMZ",
		"zip": "651500",
		"level": 3
	},
	{
		"code": "530129",
		"parent_code": "530100",
		"name": "寻甸回族彝族自治县",
		"alias": "寻甸回族彝族",
		"pinyin": "XunDianHuiZuYiZu",
		"abbr": "XDHZYZ",
		"zip": "655200",
		"level": 3
	},
	{
		"code": "530181",
		"parent_code": "530100",
		"name": "安宁市",
		"alias": "安宁",
		"pinyin": "AnNing",
		"abbr": "AN",
		"zip": "650300",
		"level": 3
	},
	{
		"code": "530300",
		"parent_code": "530000",
		"name": "曲靖市",
		"alias": "曲靖",
		"pinyin": "QuJing",
		"abbr": "QJ",
		"zip": "655000",
		"level": 2
	},
	{
		"code": "530302",
		"parent_code": "530300",
		"name": "麒麟区",
		"alias": "麒麟区",
		"pinyin": "QiLinQu",
		"abbr": "QLQ",
		"zip": "655000",
		"level": 3
	},
	{
		"code": "530321",
		"parent_code": "530300",
		"name": "马龙县",
		"alias": "马龙",
		"pinyin": "MaLong",
		"abbr": "ML",
		"zip": "655100",
		"level": 3
	},
	{
		"code": "530322",
		"parent_code": "530300",
		"name": "陆良县",
		"alias": "陆良",
		"pinyin": "LuLiang",
		"abbr": "LL",
		"zip": "655600",
		"level": 3
	},
	{
		"code": "530323",
		"parent_code": "530300",
		"name": "师宗县",
		"alias": "师宗",
		"pinyin": "ShiZong",
		"abbr": "SZ",
		"zip": "655700",
		"level": 3
	},
	{
		"code": "530324",
		"parent_code": "530300",
		"name": "罗平县",
		"alias": "罗平",
		"pinyin": "LuoPing",
		"abbr": "LP",
		"zip": "655800",
		"level": 3
	},
	{
		"code": "530325",
		"parent_code": "530300",
		"name": "富源县",
		"alias": "富源",
		"pinyin": "FuYuan",
		"abbr": "FY",
		"zip": "655500",
		"level": 3
	},
	{
		"code": "530326",
		"parent_code": "530300",
		"name": "会泽县",
		"alias": "会泽",
		"pinyin": "HuiZe",
		"abbr": "HZ",
		"zip": "654200",
		"level": 3
	},
	{
		"code": "530328",
		"parent_code": "530300",
		"name": "沾益县",
		"alias": "沾益",
		"pinyin": "ZhanYi",
		"abbr": "ZY",
		"zip": "655331",
		"level": 3
	},
	{
		"code": "530381",
		"parent_code": "530300",
		"name": "宣威市",
		"alias": "宣威",
		"pinyin": "XuanWei",
		"abbr": "XW",
		"zip": "655400",
		"level": 3
	},
	{
		"code": "530400",
		"parent_code": "530000",
		"name": "玉溪市",
		"alias": "玉溪",
		"pinyin": "YuXi",
		"abbr": "YX",
		"zip": "653100",
		"level": 2
	},
	{
		"code": "530402",
		"parent_code": "530400",
		"name": "红塔区",
		"alias": "红塔区",
		"pinyin": "HongTaQu",
		"abbr": "HTQ",
		"zip": "653100",
		"level": 3
	},
	{
		"code": "530421",
		"parent_code": "530400",
		"name": "江川县",
		"alias": "江川",
		"pinyin": "JiangChuan",
		"abbr": "JC",
		"zip": "652600",
		"level": 3
	},
	{
		"code": "530422",
		"parent_code": "530400",
		"name": "澄江县",
		"alias": "澄江",
		"pinyin": "ChengJiang",
		"abbr": "CJ",
		"zip": "652500",
		"level": 3
	},
	{
		"code": "530423",
		"parent_code": "530400",
		"name": "通海县",
		"alias": "通海",
		"pinyin": "TongHai",
		"abbr": "TH",
		"zip": "652700",
		"level": 3
	},
	{
		"code": "530424",
		"parent_code": "530400",
		"name": "华宁县",
		"alias": "华宁",
		"pinyin": "HuaNing",
		"abbr": "HN",
		"zip": "652800",
		"level": 3
	},
	{
		"code": "530425",
		"parent_code": "530400",
		"name": "易门县",
		"alias": "易门",
		"pinyin": "YiMen",
		"abbr": "YM",
		"zip": "651100",
		"level": 3
	},
	{
		"code": "530426",
		"parent_code": "530400",
		"name": "峨山彝族自治县",
		"alias": "峨山彝族",
		"pinyin": "EShanYiZu",
		"abbr": "ESYZ",
		"zip": "653200",
		"level": 3
	},
	{
		"code": "530427",
		"parent_code": "530400",
		"name": "新平彝族傣族自治县",
		"alias": "新平彝族傣族",
		"pinyin": "XinPingYiZuDaiZu",
		"abbr": "XPYZDZ",
		"zip": "653400",
		"level": 3
	},
	{
		"code": "530428",
		"parent_code": "530400",
		"name": "元江哈尼族彝族傣族自治县",
		"alias": "元江哈尼族彝族傣族",
		"pinyin": "YuanJiangHaNiZuYiZuDaiZu",
		"abbr": "YJHNZYZDZ",
		"zip": "653300",
		"level": 3
	},
	{
		"code": "530500",
		"parent_code": "530000",
		"name": "保山市",
		"alias": "保山",
		"pinyin": "BaoShan",
		"abbr": "BS",
		"zip": "678200",
		"level": 2
	},
	{
		"code": "530502",
		"parent_code": "530500",
		"name": "隆阳区",
		"alias": "隆阳区",
		"pinyin": "LongYangQu",
		"abbr": "LYQ",
		"zip": "678000",
		"level": 3
	},
	{
		"code": "530521",
		"parent_code": "530500",
		"name": "施甸县",
		"alias": "施甸",
		"pinyin": "ShiDian",
		"abbr": "SD",
		"zip": "678200",
		"level": 3
	},
	{
		"code": "530522",
		"parent_code": "530500",
		"name": "腾冲县",
		"alias": "腾冲",
		"pinyin": "TengChong",
		"abbr": "TC",
		"zip": "679100",
		"level": 3
	},
	{
		"code": "530523",
		"parent_code": "530500",
		"name": "龙陵县",
		"alias": "龙陵",
		"pinyin": "LongLing",
		"abbr": "LL",
		"zip": "678300",
		"level": 3
	},
	{
		"code": "530524",
		"parent_code": "530500",
		"name": "昌宁县",
		"alias": "昌宁",
		"pinyin": "ChangNing",
		"abbr": "CN",
		"zip": "678100",
		"level": 3
	},
	{
		"code": "530600",
		"parent_code": "530000",
		"name": "昭通市",
		"alias": "昭通",
		"pinyin": "ZhaoTong",
		"abbr": "ZT",
		"zip": "657000",
		"level": 2
	},
	{
		"code": "530602",
		"parent_code": "530600",
		"name": "昭阳区",
		"alias": "昭阳区",
		"pinyin": "ZhaoYangQu",
		"abbr": "ZYQ",
		"zip": "657000",
		"level": 3
	},
	{
		"code": "530621",
		"parent_code": "530600",
		"name": "鲁甸县",
		"alias": "鲁甸",
		"pinyin": "LuDian",
		"abbr": "LD",
		"zip": "657100",
		"level": 3
	},
	{
		"code": "530622",
		"parent_code": "530600",
		"name": "巧家县",
		"alias": "巧家",
		"pinyin": "QiaoJia",
		"abbr": "QJ",
		"zip": "654600",
		"level": 3
	},
	{
		"code": "530623",
		"parent_code": "530600",
		"name": "盐津县",
		"alias": "盐津",
		"pinyin": "YanJin",
		"abbr": "YJ",
		"zip": "657500",
		"level": 3
	},
	{
		"code": "530624",
		"parent_code": "530600",
		"name": "大关县",
		"alias": "大关",
		"pinyin": "DaGuan",
		"abbr": "DG",
		"zip": "657400",
		"level": 3
	},
	{
		"code": "530625",
		"parent_code": "530600",
		"name": "永善县",
		"alias": "永善",
		"pinyin": "YongShan",
		"abbr": "YS",
		"zip": "657300",
		"level": 3
	},
	{
		"code": "530626",
		"parent_code": "530600",
		"name": "绥江县",
		"alias": "绥江",
		"pinyin": "SuiJiang",
		"abbr": "SJ",
		"zip": "657700",
		"level": 3
	},
	{
		"code": "530627",
		"parent_code": "530600",
		"name": "镇雄县",
		"alias": "镇雄",
		"pinyin": "ZhenXiong",
		"abbr": "ZX",
		"zip": "657200",
		"level": 3
	},
	{
		"code": "530628",
		"parent_code": "530600",
		"name": "彝良县",
		"alias": "彝良",
		"pinyin": "YiLiang",
		"abbr": "YL",
		"zip": "657600",
		"level": 3
	},
	{
		"code": "530629",
		"parent_code": "530600",
		"name": "威信县",
		"alias": "威信",
		"pinyin": "WeiXin",
		"abbr": "WX",
		"zip": "657900",
		"level": 3
	},
	{
		"code": "530630",
		"parent_code": "530600",
		"name": "水富县",
		"alias": "水富",
		"pinyin": "ShuiFu",
		"abbr": "SF",
		"zip": "657800",
		"level": 3
	},
	{
		"code": "530700",
		"parent_code": "530000",
		"name": "丽江市",
		"alias": "丽江",
		"pinyin": "LiJiang",
		"abbr": "LJ",
		"zip": "674100",
		"level": 2
	},
	{
		"code": "530702",
		"parent_code": "530700",
		"name": "古城区",
		"alias": "古城区",
		"pinyin": "GuChengQu",
		"abbr": "GCQ",
		"zip": "674100",
		"level": 3
	},
	{
		"code": "530721",
		"parent_code": "530700",
		"name": "玉龙纳西族自治县",
		"alias": "玉龙纳西族",
		"pinyin": "YuLongNaXiZu",
		"abbr": "YLNXZ",
		"zip": "674100",
		"level": 3
	},
	{
		"code": "530722",
		"parent_code": "530700",
		"name": "永胜县",
		"alias": "永胜",
		"pinyin": "YongSheng",
		"abbr": "YS",
		"zip": "674200",
		"level": 3
	},
	{
		"code": "530723",
		"parent_code": "530700",
		"name": "华坪县",
		"alias": "华坪",
		"pinyin": "HuaPing",
		"abbr": "HP",
		"zip": "674800",
		"level": 3
	},
	{
		"code": "530724",
		"parent_code": "530700",
		"name": "宁蒗彝族自治县",
		"alias": "宁蒗彝族",
		"pinyin": "NingLangYiZu",
		"abbr": "NLYZ",
		"zip": "674300",
		"level": 3
	},
	{
		"code": "530800",
		"parent_code": "530000",
		"name": "普洱市",
		"alias": "普洱",
		"pinyin": "PuEr",
		"abbr": "PE",
		"zip": "665000",
		"level": 2
	},
	{
		"code": "530802",
		"parent_code": "530800",
		"name": "思茅区",
		"alias": "思茅区",
		"pinyin": "SiMaoQu",
		"abbr": "SMQ",
		"zip": "665000",
		"level": 3
	},
	{
		"code": "530821",
		"parent_code": "530800",
		"name": "宁洱哈尼族彝族自治县",
		"alias": "宁洱哈尼族彝族",
		"pinyin": "NingErHaNiZuYiZu",
		"abbr": "NEHNZYZ",
		"zip": "665100",
		"level": 3
	},
	{
		"code": "530822",
		"parent_code": "530800",
		"name": "墨江哈尼族自治县",
		"alias": "墨江哈尼族",
		"pinyin": "MoJiangHaNiZu",
		"abbr": "MJHNZ",
		"zip": "654800",
		"level": 3
	},
	{
		"code": "530823",
		"parent_code": "530800",
		"name": "景东彝族自治县",
		"alias": "景东彝族",
		"pinyin": "JingDongYiZu",
		"abbr": "JDYZ",
		"zip": "676200",
		"level": 3
	},
	{
		"code": "530824",
		"parent_code": "530800",
		"name": "景谷傣族彝族自治县",
		"alias": "景谷傣族彝族",
		"pinyin": "JingGuDaiZuYiZu",
		"abbr": "JGDZYZ",
		"zip": "666400",
		"level": 3
	},
	{
		"code": "530825",
		"parent_code": "530800",
		"name": "镇沅彝族哈尼族拉祜族自治县",
		"alias": "镇沅彝族哈尼族拉祜族",
		"pinyin": "ZhenYuanYiZuHaNiZuLaHuZu",
		"abbr": "ZYYZHNZLHZ",
		"zip": "666500",
		"level": 3
	},
	{
		"code": "530826",
		"parent_code": "530800",
		"name": "江城哈尼族彝族自治县",
		"alias": "江城哈尼族彝族",
		"pinyin": "JiangChengHaNiZuYiZu",
		"abbr": "JCHNZYZ",
		"zip": "665900",
		"level": 3
	},
	{
		"code": "530827",
		"parent_code": "530800",
		"name": "孟连傣族拉祜族佤族自治县",
		"alias": "孟连傣族拉祜族佤族",
		"pinyin": "MengLianDaiZuLaHuZuWaZu",
		"abbr": "MLDZLHZWZ",
		"zip": "665800",
		"level": 3
	},
	{
		"code": "530828",
		"parent_code": "530800",
		"name": "澜沧拉祜族自治县",
		"alias": "澜沧拉祜族",
		"pinyin": "LanCangLaHuZu",
		"abbr": "LCLHZ",
		"zip": "665600",
		"level": 3
	},
	{
		"code": "530829",
		"parent_code": "530800",
		"name": "西盟佤族自治县",
		"alias": "西盟佤族",
		"pinyin": "XiMengWaZu",
		"abbr": "XMWZ",
		"zip": "665700",
		"level": 3
	},
	{
		"code": "530900",
		"parent_code": "530000",
		"name": "临沧市",
		"alias": "临沧",
		"pinyin": "LinCang",
		"abbr": "LC",
		"zip": "677000",
		"level": 2
	},
	{
		"code": "530902",
		"parent_code": "530900",
		"name": "临翔区",
		"alias": "临翔区",
		"pinyin": "LinXiangQu",
		"abbr": "LXQ",
		"zip": "677000",
		"level": 3
	},
	{
		"code": "530921",
		"parent_code": "530900",
		"name": "凤庆县",
		"alias": "凤庆",
		"pinyin": "FengQing",
		"abbr": "FQ",
		"zip": "675900",
		"level": 3
	},
	{
		"code": "530922",
		"parent_code": "530900",
		"name": "云县",
		"alias": "云县",
		"pinyin": "YunXian",
		"abbr": "YX",
		"zip": "675800",
		"level": 3
	},
	{
		"code": "530923",
		"parent_code": "530900",
		"name": "永德县",
		"alias": "永德",
		"pinyin": "YongDe",
		"abbr": "YD",
		"zip": "677600",
		"level": 3
	},
	{
		"code": "530924",
		"parent_code": "530900",
		"name": "镇康县",
		"alias": "镇康",
		"pinyin": "ZhenKang",
		"abbr": "ZK",
		"zip": "677700",
		"level": 3
	},
	{
		"code": "530925",
		"parent_code": "530900",
		"name": "双江拉祜族佤族布朗族傣族自治县",
		"alias": "双江拉祜族佤族布朗族傣族",
		"pinyin": "ShuangJiangLaHuZuWaZuBuLangZuDaiZu",
		"abbr": "SJLHZWZBLZDZ",
		"zip": "677300",
		"level": 3
	},
	{
		"code": "530926",
		"parent_code": "530900",
		"name": "耿马傣族佤族自治县",
		"alias": "耿马傣族佤族",
		"pinyin": "GengMaDaiZuWaZu",
		"abbr": "GMDZWZ",
		"zip": "677500",
		"level": 3
	},
	{
		"code": "530927",
		"parent_code": "530900",
		"name": "沧源佤族自治县",
		"alias": "沧源佤族",
		"pinyin": "CangYuanWaZu",
		"abbr": "CYWZ",
		"zip": "677400",
		"level": 3
	},
	{
		"code": "532300",
		"parent_code": "530000",
		"name": "楚雄彝族自治州",
		"alias": "楚雄彝族",
		"pinyin": "ChuXiongYiZu",
		"abbr": "CXYZ",
		"zip": "675000",
		"level": 2
	},
	{
		"code": "532301",
		"parent_code": "532300",
		"name": "楚雄市",
		"alias": "楚雄",
		"pinyin": "ChuXiong",
		"abbr": "CX",
		"zip": "675000",
		"level": 3
	},
	{
		"code": "532322",
		"parent_code": "532300",
		"name": "双柏县",
		"alias": "双柏",
		"pinyin": "ShuangBai",
		"abbr": "SB",
		"zip": "675100",
		"level": 3
	},
	{
		"code": "532323",
		"parent_code": "532300",
		"name": "牟定县",
		"alias": "牟定",
		"pinyin": "MouDing",
		"abbr": "MD",
		"zip": "675500",
		"level": 3
	},
	{
		"code": "532324",
		"parent_code": "532300",
		"name": "南华县",
		"alias": "南华",
		"pinyin": "NanHua",
		"abbr": "NH",
		"zip": "675200",
		"level": 3
	},
	{
		"code": "532325",
		"parent_code": "532300",
		"name": "姚安县",
		"alias": "姚安",
		"pinyin": "YaoAn",
		"abbr": "YA",
		"zip": "675300",
		"level": 3
	},
	{
		"code": "532326",
		"parent_code": "532300",
		"name": "大姚县",
		"alias": "大姚",
		"pinyin": "DaYao",
		"abbr": "DY",
		"zip": "675400",
		"level": 3
	},
	{
		"code": "532327",
		"parent_code": "532300",
		"name": "永仁县",
		"alias": "永仁",
		"pinyin": "YongRen",
		"abbr": "YR",
		"zip": "651400",
		"level": 3
	},
	{
		"code": "532328",
		"parent_code": "532300",
		"name": "元谋县",
		"alias": "元谋",
		"pinyin": "YuanMou",
		"abbr": "YM",
		"zip": "651300",
		"level": 3
	},
	{
		"code": "532329",
		"parent_code": "532300",
		"name": "武定县",
		"alias": "武定",
		"pinyin": "WuDing",
		"abbr": "WD",
		"zip": "651600",
		"level": 3
	},
	{
		"code": "532331",
		"parent_code": "532300",
		"name": "禄丰县",
		"alias": "禄丰",
		"pinyin": "LuFeng",
		"abbr": "LF",
		"zip": "651200",
		"level": 3
	},
	{
		"code": "532500",
		"parent_code": "530000",
		"name": "红河哈尼族彝族自治州",
		"alias": "红河哈尼族彝族",
		"pinyin": "HongHeHaNiZuYiZu",
		"abbr": "HHHNZYZ",
		"zip": "662200",
		"level": 2
	},
	{
		"code": "532501",
		"parent_code": "532500",
		"name": "个旧市",
		"alias": "个旧",
		"pinyin": "GeJiu",
		"abbr": "GJ",
		"zip": "661000",
		"level": 3
	},
	{
		"code": "532502",
		"parent_code": "532500",
		"name": "开远市",
		"alias": "开远",
		"pinyin": "KaiYuan",
		"abbr": "KY",
		"zip": "661600",
		"level": 3
	},
	{
		"code": "532503",
		"parent_code": "532500",
		"name": "蒙自市",
		"alias": "蒙自",
		"pinyin": "MengZi",
		"abbr": "MZ",
		"zip": "",
		"level": 3
	},
	{
		"code": "532523",
		"parent_code": "532500",
		"name": "屏边苗族自治县",
		"alias": "屏边苗族",
		"pinyin": "PingBianMiaoZu",
		"abbr": "PBMZ",
		"zip": "661200",
		"level": 3
	},
	{
		"code": "532524",
		"parent_code": "532500",
		"name": "建水县",
		"alias": "建水",
		"pinyin": "JianShui",
		"abbr": "JS",
		"zip": "654300",
		"level": 3
	},
	{
		"code": "532525",
		"parent_code": "532500",
		"name": "石屏县",
		"alias": "石屏",
		"pinyin": "ShiPing",
		"abbr": "SP",
		"zip": "662200",
		"level": 3
	},
	{
		"code": "532527",
		"parent_code": "532500",
		"name": "泸西县",
		"alias": "泸西",
		"pinyin": "LuXi",
		"abbr": "LX",
		"zip": "652400",
		"level": 3
	},
	{
		"code": "532528",
		"parent_code": "532500",
		"name": "元阳县",
		"alias": "元阳",
		"pinyin": "YuanYang",
		"abbr": "YY",
		"zip": "662400",
		"level": 3
	},
	{
		"code": "532529",
		"parent_code": "532500",
		"name": "红河县",
		"alias": "红河",
		"pinyin": "HongHe",
		"abbr": "HH",
		"zip": "654400",
		"level": 3
	},
	{
		"code": "532530",
		"parent_code": "532500",
		"name": "金平苗族瑶族傣族自治县",
		"alias": "金平苗族瑶族傣族",
		"pinyin": "JinPingMiaoZuYaoZuDaiZu",
		"abbr": "JPMZYZDZ",
		"zip": "661500",
		"level": 3
	},
	{
		"code": "532531",
		"parent_code": "532500",
		"name": "绿春县",
		"alias": "绿春",
		"pinyin": "LvChun",
		"abbr": "LC",
		"zip": "662500",
		"level": 3
	},
	{
		"code": "532532",
		"parent_code": "532500",
		"name": "河口瑶族自治县",
		"alias": "河口瑶族",
		"pinyin": "HeKouYaoZu",
		"abbr": "HKYZ",
		"zip": "661300",
		"level": 3
	},
	{
		"code": "532600",
		"parent_code": "530000",
		"name": "文山壮族苗族自治州",
		"alias": "文山壮族苗族",
		"pinyin": "WenShanZhuangZuMiaoZu",
		"abbr": "WSZZMZ",
		"zip": "663200",
		"level": 2
	},
	{
		"code": "532601",
		"parent_code": "532600",
		"name": "文山市",
		"alias": "文山",
		"pinyin": "WenShan",
		"abbr": "WS",
		"zip": "",
		"level": 3
	},
	{
		"code": "532622",
		"parent_code": "532600",
		"name": "砚山县",
		"alias": "砚山",
		"pinyin": "YanShan",
		"abbr": "YS",
		"zip": "663100",
		"level": 3
	},
	{
		"code": "532623",
		"parent_code": "532600",
		"name": "西畴县",
		"alias": "西畴",
		"pinyin": "XiChou",
		"abbr": "XC",
		"zip": "663500",
		"level": 3
	},
	{
		"code": "532624",
		"parent_code": "532600",
		"name": "麻栗坡县",
		"alias": "麻栗坡",
		"pinyin": "MaLiPo",
		"abbr": "MLP",
		"zip": "663600",
		"level": 3
	},
	{
		"code": "532625",
		"parent_code": "532600",
		"name": "马关县",
		"alias": "马关",
		"pinyin": "MaGuan",
		"abbr": "MG",
		"zip": "663700",
		"level": 3
	},
	{
		"code": "532626",
		"parent_code": "532600",
		"name": "丘北县",
		"alias": "丘北",
		"pinyin": "QiuBei",
		"abbr": "QB",
		"zip": "663200",
		"level": 3
	},
	{
		"code": "532627",
		"parent_code": "532600",
		"name": "广南县",
		"alias": "广南",
		"pinyin": "GuangNan",
		"abbr": "GN",
		"zip": "663300",
		"level": 3
	},
	{
		"code": "532628",
		"parent_code": "532600",
		"name": "富宁县",
		"alias": "富宁",
		"pinyin": "FuNing",
		"abbr": "FN",
		"zip": "663400",
		"level": 3
	},
	{
		"code": "532800",
		"parent_code": "530000",
		"name": "西双版纳傣族自治州",
		"alias": "西双版纳傣族",
		"pinyin": "XiShuangBanNaDaiZu",
		"abbr": "XSBNDZ",
		"zip": "666100",
		"level": 2
	},
	{
		"code": "532801",
		"parent_code": "532800",
		"name": "景洪市",
		"alias": "景洪",
		"pinyin": "JingHong",
		"abbr": "JH",
		"zip": "666100",
		"level": 3
	},
	{
		"code": "532822",
		"parent_code": "532800",
		"name": "勐海县",
		"alias": "勐海",
		"pinyin": "MengHai",
		"abbr": "MH",
		"zip": "666200",
		"level": 3
	},
	{
		"code": "532823",
		"parent_code": "532800",
		"name": "勐腊县",
		"alias": "勐腊",
		"pinyin": "MengLa",
		"abbr": "ML",
		"zip": "666300",
		"level": 3
	},
	{
		"code": "532900",
		"parent_code": "530000",
		"name": "大理白族自治州",
		"alias": "大理白族",
		"pinyin": "DaLiBaiZu",
		"abbr": "DLBZ",
		"zip": "671000",
		"level": 2
	},
	{
		"code": "532901",
		"parent_code": "532900",
		"name": "大理市",
		"alias": "大理",
		"pinyin": "DaLi",
		"abbr": "DL",
		"zip": "671000",
		"level": 3
	},
	{
		"code": "532922",
		"parent_code": "532900",
		"name": "漾濞彝族自治县",
		"alias": "漾濞彝族",
		"pinyin": "YangBiYiZu",
		"abbr": "YBYZ",
		"zip": "672500",
		"level": 3
	},
	{
		"code": "532923",
		"parent_code": "532900",
		"name": "祥云县",
		"alias": "祥云",
		"pinyin": "XiangYun",
		"abbr": "XY",
		"zip": "672100",
		"level": 3
	},
	{
		"code": "532924",
		"parent_code": "532900",
		"name": "宾川县",
		"alias": "宾川",
		"pinyin": "BinChuan",
		"abbr": "BC",
		"zip": "671600",
		"level": 3
	},
	{
		"code": "532925",
		"parent_code": "532900",
		"name": "弥渡县",
		"alias": "弥渡",
		"pinyin": "MiDu",
		"abbr": "MD",
		"zip": "675600",
		"level": 3
	},
	{
		"code": "532926",
		"parent_code": "532900",
		"name": "南涧彝族自治县",
		"alias": "南涧彝族",
		"pinyin": "NanJianYiZu",
		"abbr": "NJYZ",
		"zip": "675700",
		"level": 3
	},
	{
		"code": "532927",
		"parent_code": "532900",
		"name": "巍山彝族回族自治县",
		"alias": "巍山彝族回族",
		"pinyin": "WeiShanYiZuHuiZu",
		"abbr": "WSYZHZ",
		"zip": "672400",
		"level": 3
	},
	{
		"code": "532928",
		"parent_code": "532900",
		"name": "永平县",
		"alias": "永平",
		"pinyin": "YongPing",
		"abbr": "YP",
		"zip": "672600",
		"level": 3
	},
	{
		"code": "532929",
		"parent_code": "532900",
		"name": "云龙县",
		"alias": "云龙",
		"pinyin": "YunLong",
		"abbr": "YL",
		"zip": "672700",
		"level": 3
	},
	{
		"code": "532930",
		"parent_code": "532900",
		"name": "洱源县",
		"alias": "洱源",
		"pinyin": "ErYuan",
		"abbr": "EY",
		"zip": "671200",
		"level": 3
	},
	{
		"code": "532931",
		"parent_code": "532900",
		"name": "剑川县",
		"alias": "剑川",
		"pinyin": "JianChuan",
		"abbr": "JC",
		"zip": "671300",
		"level": 3
	},
	{
		"code": "532932",
		"parent_code": "532900",
		"name": "鹤庆县",
		"alias": "鹤庆",
		"pinyin": "HeQing",
		"abbr": "HQ",
		"zip": "671500",
		"level": 3
	},
	{
		"code": "533100",
		"parent_code": "530000",
		"name": "德宏傣族景颇族自治州",
		"alias": "德宏傣族景颇族",
		"pinyin": "DeHongDaiZuJingPoZu",
		"abbr": "DHDZJPZ",
		"zip": "678600",
		"level": 2
	},
	{
		"code": "533102",
		"parent_code": "533100",
		"name": "瑞丽市",
		"alias": "瑞丽",
		"pinyin": "RuiLi",
		"abbr": "RL",
		"zip": "678600",
		"level": 3
	},
	{
		"code": "533103",
		"parent_code": "533100",
		"name": "芒市",
		"alias": "芒市",
		"pinyin": "MangShi",
		"abbr": "MS",
		"zip": "678400",
		"level": 3
	},
	{
		"code": "533122",
		"parent_code": "533100",
		"name": "梁河县",
		"alias": "梁河",
		"pinyin": "LiangHe",
		"abbr": "LH",
		"zip": "679200",
		"level": 3
	},
	{
		"code": "533123",
		"parent_code": "533100",
		"name": "盈江县",
		"alias": "盈江",
		"pinyin": "YingJiang",
		"abbr": "YJ",
		"zip": "679300",
		"level": 3
	},
	{
		"code": "533124",
		"parent_code": "533100",
		"name": "陇川县",
		"alias": "陇川",
		"pinyin": "LongChuan",
		"abbr": "LC",
		"zip": "678700",
		"level": 3
	},
	{
		"code": "533300",
		"parent_code": "530000",
		"name": "怒江傈僳族自治州",
		"alias": "怒江傈僳族",
		"pinyin": "NuJiangLiSuZu",
		"abbr": "NJLSZ",
		"zip": "673200",
		"level": 2
	},
	{
		"code": "533321",
		"parent_code": "533300",
		"name": "泸水县",
		"alias": "泸水",
		"pinyin": "LuShui",
		"abbr": "LS",
		"zip": "673100",
		"level": 3
	},
	{
		"code": "533323",
		"parent_code": "533300",
		"name": "福贡县",
		"alias": "福贡",
		"pinyin": "FuGong",
		"abbr": "FG",
		"zip": "673400",
		"level": 3
	},
	{
		"code": "533324",
		"parent_code": "533300",
		"name": "贡山独龙族怒族自治县",
		"alias": "贡山独龙族怒族",
		"pinyin": "GongShanDuLongZuNuZu",
		"abbr": "GSDLZNZ",
		"zip": "673500",
		"level": 3
	},
	{
		"code": "533325",
		"parent_code": "533300",
		"name": "兰坪白族普米族自治县",
		"alias": "兰坪白族普米族",
		"pinyin": "LanPingBaiZuPuMiZu",
		"abbr": "LPBZPMZ",
		"zip": "671400",
		"level": 3
	},
	{
		"code": "533400",
		"parent_code": "530000",
		"name": "迪庆藏族自治州",
		"alias": "迪庆藏族",
		"pinyin": "DiQingCangZu",
		"abbr": "DQCZ",
		"zip": "674400",
		"level": 2
	},
	{
		"code": "533421",
		"parent_code": "533400",
		"name": "香格里拉县",
		"alias": "香格里拉",
		"pinyin": "XiangGeLiLa",
		"abbr": "XGLL",
		"zip": "674400",
		"level": 3
	},
	{
		"code": "533422",
		"parent_code": "533400",
		"name": "德钦县",
		"alias": "德钦",
		"pinyin": "DeQin",
		"abbr": "DQ",
		"zip": "674500",
		"level": 3
	},
	{
		"code": "533423",
		"parent_code": "533400",
		"name": "维西傈僳族自治县",
		"alias": "维西傈僳族",
		"pinyin": "WeiXiLiSuZu",
		"abbr": "WXLSZ",
		"zip": "674600",
		"level": 3
	},
	{
		"code": "540000",
		"parent_code": null,
		"name": "西藏自治区",
		"alias": "西藏",
		"pinyin": "XiCang",
		"abbr": "XC",
		"zip": "850000",
		"level": 1
	},
	{
		"code": "540100",
		"parent_code": "540000",
		"name": "拉萨市",
		"alias": "拉萨",
		"pinyin": "LaSa",
		"abbr": "LS",
		"zip": "850000",
		"level": 2
	},
	{
		"code": "540102",
		"parent_code": "540100",
		"name": "城关区",
		"alias": "城关区",
		"pinyin": "ChengGuanQu",
		"abbr": "CGQ",
		"zip": "850000",
		"level": 3
	},
	{
		"code": "540121",
		"parent_code": "540100",
		"name": "林周县",
		"alias": "林周",
		"pinyin": "LinZhou",
		"abbr": "LZ",
		"zip": "851600",
		"level": 3
	},
	{
		"code": "540122",
		"parent_code": "540100",
		"name": "当雄县",
		"alias": "当雄",
		"pinyin": "DangXiong",
		"abbr": "DX",
		"zip": "851500",
		"level": 3
	},
	{
		"code": "540123",
		"parent_code": "540100",
		"name": "尼木县",
		"alias": "尼木",
		"pinyin": "NiMu",
		"abbr": "NM",
		"zip": "851300",
		"level": 3
	},
	{
		"code": "540124",
		"parent_code": "540100",
		"name": "曲水县",
		"alias": "曲水",
		"pinyin": "QuShui",
		"abbr": "QS",
		"zip": "850600",
		"level": 3
	},
	{
		"code": "540125",
		"parent_code": "540100",
		"name": "堆龙德庆县",
		"alias": "堆龙德庆",
		"pinyin": "DuiLongDeQing",
		"abbr": "DLDQ",
		"zip": "851400",
		"level": 3
	},
	{
		"code": "540126",
		"parent_code": "540100",
		"name": "达孜县",
		"alias": "达孜",
		"pinyin": "DaZi",
		"abbr": "DZ",
		"zip": "850100",
		"level": 3
	},
	{
		"code": "540127",
		"parent_code": "540100",
		"name": "墨竹工卡县",
		"alias": "墨竹工卡",
		"pinyin": "MoZhuGongKa",
		"abbr": "MZGK",
		"zip": "850200",
		"level": 3
	},
	{
		"code": "542100",
		"parent_code": "540000",
		"name": "昌都地区",
		"alias": "昌都地区",
		"pinyin": "ChangDouDeQu",
		"abbr": "CDDQ",
		"zip": "854000",
		"level": 2
	},
	{
		"code": "542121",
		"parent_code": "542100",
		"name": "昌都县",
		"alias": "昌都",
		"pinyin": "ChangDou",
		"abbr": "CD",
		"zip": "854000",
		"level": 3
	},
	{
		"code": "542122",
		"parent_code": "542100",
		"name": "江达县",
		"alias": "江达",
		"pinyin": "JiangDa",
		"abbr": "JD",
		"zip": "854100",
		"level": 3
	},
	{
		"code": "542123",
		"parent_code": "542100",
		"name": "贡觉县",
		"alias": "贡觉",
		"pinyin": "GongJue",
		"abbr": "GJ",
		"zip": "854200",
		"level": 3
	},
	{
		"code": "542124",
		"parent_code": "542100",
		"name": "类乌齐县",
		"alias": "类乌齐",
		"pinyin": "LeiWuQi",
		"abbr": "LWQ",
		"zip": "855600",
		"level": 3
	},
	{
		"code": "542125",
		"parent_code": "542100",
		"name": "丁青县",
		"alias": "丁青",
		"pinyin": "DingQing",
		"abbr": "DQ",
		"zip": "855700",
		"level": 3
	},
	{
		"code": "542126",
		"parent_code": "542100",
		"name": "察雅县",
		"alias": "察雅",
		"pinyin": "ChaYa",
		"abbr": "CY",
		"zip": "854300",
		"level": 3
	},
	{
		"code": "542127",
		"parent_code": "542100",
		"name": "八宿县",
		"alias": "八宿",
		"pinyin": "BaSu",
		"abbr": "BS",
		"zip": "854600",
		"level": 3
	},
	{
		"code": "542128",
		"parent_code": "542100",
		"name": "左贡县",
		"alias": "左贡",
		"pinyin": "ZuoGong",
		"abbr": "ZG",
		"zip": "854400",
		"level": 3
	},
	{
		"code": "542129",
		"parent_code": "542100",
		"name": "芒康县",
		"alias": "芒康",
		"pinyin": "MangKang",
		"abbr": "MK",
		"zip": "854500",
		"level": 3
	},
	{
		"code": "542132",
		"parent_code": "542100",
		"name": "洛隆县",
		"alias": "洛隆",
		"pinyin": "LuoLong",
		"abbr": "LL",
		"zip": "855400",
		"level": 3
	},
	{
		"code": "542133",
		"parent_code": "542100",
		"name": "边坝县",
		"alias": "边坝",
		"pinyin": "BianBa",
		"abbr": "BB",
		"zip": "855500",
		"level": 3
	},
	{
		"code": "542200",
		"parent_code": "540000",
		"name": "山南地区",
		"alias": "山南地区",
		"pinyin": "ShanNanDeQu",
		"abbr": "SNDQ",
		"zip": "856100",
		"level": 2
	},
	{
		"code": "542221",
		"parent_code": "542200",
		"name": "乃东县",
		"alias": "乃东",
		"pinyin": "NaiDong",
		"abbr": "ND",
		"zip": "856100",
		"level": 3
	},
	{
		"code": "542222",
		"parent_code": "542200",
		"name": "扎囊县",
		"alias": "扎囊",
		"pinyin": "ZhaNang",
		"abbr": "ZN",
		"zip": "850800",
		"level": 3
	},
	{
		"code": "542223",
		"parent_code": "542200",
		"name": "贡嘎县",
		"alias": "贡嘎",
		"pinyin": "GongGa",
		"abbr": "GG",
		"zip": "850700",
		"level": 3
	},
	{
		"code": "542224",
		"parent_code": "542200",
		"name": "桑日县",
		"alias": "桑日",
		"pinyin": "SangRi",
		"abbr": "SR",
		"zip": "856200",
		"level": 3
	},
	{
		"code": "542225",
		"parent_code": "542200",
		"name": "琼结县",
		"alias": "琼结",
		"pinyin": "QiongJie",
		"abbr": "QJ",
		"zip": "856800",
		"level": 3
	},
	{
		"code": "542226",
		"parent_code": "542200",
		"name": "曲松县",
		"alias": "曲松",
		"pinyin": "QuSong",
		"abbr": "QS",
		"zip": "856300",
		"level": 3
	},
	{
		"code": "542227",
		"parent_code": "542200",
		"name": "措美县",
		"alias": "措美",
		"pinyin": "CuoMei",
		"abbr": "CM",
		"zip": "856900",
		"level": 3
	},
	{
		"code": "542228",
		"parent_code": "542200",
		"name": "洛扎县",
		"alias": "洛扎",
		"pinyin": "LuoZha",
		"abbr": "LZ",
		"zip": "851200",
		"level": 3
	},
	{
		"code": "542229",
		"parent_code": "542200",
		"name": "加查县",
		"alias": "加查",
		"pinyin": "JiaCha",
		"abbr": "JC",
		"zip": "856400",
		"level": 3
	},
	{
		"code": "542231",
		"parent_code": "542200",
		"name": "隆子县",
		"alias": "隆子",
		"pinyin": "LongZi",
		"abbr": "LZ",
		"zip": "856600",
		"level": 3
	},
	{
		"code": "542232",
		"parent_code": "542200",
		"name": "错那县",
		"alias": "错那",
		"pinyin": "CuoNa",
		"abbr": "CN",
		"zip": "856700",
		"level": 3
	},
	{
		"code": "542233",
		"parent_code": "542200",
		"name": "浪卡子县",
		"alias": "浪卡子",
		"pinyin": "LangKaZi",
		"abbr": "LKZ",
		"zip": "851100",
		"level": 3
	},
	{
		"code": "542300",
		"parent_code": "540000",
		"name": "日喀则地区",
		"alias": "日喀则地区",
		"pinyin": "RiKaZeDeQu",
		"abbr": "RKZDQ",
		"zip": "857400",
		"level": 2
	},
	{
		"code": "542301",
		"parent_code": "542300",
		"name": "日喀则市",
		"alias": "日喀则",
		"pinyin": "RiKaZe",
		"abbr": "RKZ",
		"zip": "857000",
		"level": 3
	},
	{
		"code": "542322",
		"parent_code": "542300",
		"name": "南木林县",
		"alias": "南木林",
		"pinyin": "NanMuLin",
		"abbr": "NML",
		"zip": "857100",
		"level": 3
	},
	{
		"code": "542323",
		"parent_code": "542300",
		"name": "江孜县",
		"alias": "江孜",
		"pinyin": "JiangZi",
		"abbr": "JZ",
		"zip": "857400",
		"level": 3
	},
	{
		"code": "542324",
		"parent_code": "542300",
		"name": "定日县",
		"alias": "定日",
		"pinyin": "DingRi",
		"abbr": "DR",
		"zip": "858200",
		"level": 3
	},
	{
		"code": "542325",
		"parent_code": "542300",
		"name": "萨迦县",
		"alias": "萨迦",
		"pinyin": "SaJia",
		"abbr": "SJ",
		"zip": "857800",
		"level": 3
	},
	{
		"code": "542326",
		"parent_code": "542300",
		"name": "拉孜县",
		"alias": "拉孜",
		"pinyin": "LaZi",
		"abbr": "LZ",
		"zip": "858100",
		"level": 3
	},
	{
		"code": "542327",
		"parent_code": "542300",
		"name": "昂仁县",
		"alias": "昂仁",
		"pinyin": "AngRen",
		"abbr": "AR",
		"zip": "858500",
		"level": 3
	},
	{
		"code": "542328",
		"parent_code": "542300",
		"name": "谢通门县",
		"alias": "谢通门",
		"pinyin": "XieTongMen",
		"abbr": "XTM",
		"zip": "858900",
		"level": 3
	},
	{
		"code": "542329",
		"parent_code": "542300",
		"name": "白朗县",
		"alias": "白朗",
		"pinyin": "BaiLang",
		"abbr": "BL",
		"zip": "857300",
		"level": 3
	},
	{
		"code": "542330",
		"parent_code": "542300",
		"name": "仁布县",
		"alias": "仁布",
		"pinyin": "RenBu",
		"abbr": "RB",
		"zip": "857200",
		"level": 3
	},
	{
		"code": "542331",
		"parent_code": "542300",
		"name": "康马县",
		"alias": "康马",
		"pinyin": "KangMa",
		"abbr": "KM",
		"zip": "857500",
		"level": 3
	},
	{
		"code": "542332",
		"parent_code": "542300",
		"name": "定结县",
		"alias": "定结",
		"pinyin": "DingJie",
		"abbr": "DJ",
		"zip": "857900",
		"level": 3
	},
	{
		"code": "542333",
		"parent_code": "542300",
		"name": "仲巴县",
		"alias": "仲巴",
		"pinyin": "ZhongBa",
		"abbr": "ZB",
		"zip": "858800",
		"level": 3
	},
	{
		"code": "542334",
		"parent_code": "542300",
		"name": "亚东县",
		"alias": "亚东",
		"pinyin": "YaDong",
		"abbr": "YD",
		"zip": "857600",
		"level": 3
	},
	{
		"code": "542335",
		"parent_code": "542300",
		"name": "吉隆县",
		"alias": "吉隆",
		"pinyin": "JiLong",
		"abbr": "JL",
		"zip": "858700",
		"level": 3
	},
	{
		"code": "542336",
		"parent_code": "542300",
		"name": "聂拉木县",
		"alias": "聂拉木",
		"pinyin": "NieLaMu",
		"abbr": "NLM",
		"zip": "858300",
		"level": 3
	},
	{
		"code": "542337",
		"parent_code": "542300",
		"name": "萨嘎县",
		"alias": "萨嘎",
		"pinyin": "SaGa",
		"abbr": "SG",
		"zip": "858600",
		"level": 3
	},
	{
		"code": "542338",
		"parent_code": "542300",
		"name": "岗巴县",
		"alias": "岗巴",
		"pinyin": "GangBa",
		"abbr": "GB",
		"zip": "857700",
		"level": 3
	},
	{
		"code": "542400",
		"parent_code": "540000",
		"name": "那曲地区",
		"alias": "那曲地区",
		"pinyin": "NaQuDeQu",
		"abbr": "NQDQ",
		"zip": "852000",
		"level": 2
	},
	{
		"code": "542421",
		"parent_code": "542400",
		"name": "那曲县",
		"alias": "那曲",
		"pinyin": "NaQu",
		"abbr": "NQ",
		"zip": "852000",
		"level": 3
	},
	{
		"code": "542422",
		"parent_code": "542400",
		"name": "嘉黎县",
		"alias": "嘉黎",
		"pinyin": "JiaLi",
		"abbr": "JL",
		"zip": "852400",
		"level": 3
	},
	{
		"code": "542423",
		"parent_code": "542400",
		"name": "比如县",
		"alias": "比如",
		"pinyin": "BiRu",
		"abbr": "BR",
		"zip": "852300",
		"level": 3
	},
	{
		"code": "542424",
		"parent_code": "542400",
		"name": "聂荣县",
		"alias": "聂荣",
		"pinyin": "NieRong",
		"abbr": "NR",
		"zip": "853500",
		"level": 3
	},
	{
		"code": "542425",
		"parent_code": "542400",
		"name": "安多县",
		"alias": "安多",
		"pinyin": "AnDuo",
		"abbr": "AD",
		"zip": "853400",
		"level": 3
	},
	{
		"code": "542426",
		"parent_code": "542400",
		"name": "申扎县",
		"alias": "申扎",
		"pinyin": "ShenZha",
		"abbr": "SZ",
		"zip": "853100",
		"level": 3
	},
	{
		"code": "542427",
		"parent_code": "542400",
		"name": "索县",
		"alias": "索县",
		"pinyin": "SuoXian",
		"abbr": "SX",
		"zip": "852200",
		"level": 3
	},
	{
		"code": "542428",
		"parent_code": "542400",
		"name": "班戈县",
		"alias": "班戈",
		"pinyin": "BanGe",
		"abbr": "BG",
		"zip": "852500",
		"level": 3
	},
	{
		"code": "542429",
		"parent_code": "542400",
		"name": "巴青县",
		"alias": "巴青",
		"pinyin": "BaQing",
		"abbr": "BQ",
		"zip": "852100",
		"level": 3
	},
	{
		"code": "542430",
		"parent_code": "542400",
		"name": "尼玛县",
		"alias": "尼玛",
		"pinyin": "NiMa",
		"abbr": "NM",
		"zip": "852600",
		"level": 3
	},
	{
		"code": "542500",
		"parent_code": "540000",
		"name": "阿里地区",
		"alias": "阿里地区",
		"pinyin": "ALiDeQu",
		"abbr": "ALDQ",
		"zip": "859400",
		"level": 2
	},
	{
		"code": "542521",
		"parent_code": "542500",
		"name": "普兰县",
		"alias": "普兰",
		"pinyin": "PuLan",
		"abbr": "PL",
		"zip": "859500",
		"level": 3
	},
	{
		"code": "542522",
		"parent_code": "542500",
		"name": "札达县",
		"alias": "札达",
		"pinyin": "ZhaDa",
		"abbr": "ZD",
		"zip": "859600",
		"level": 3
	},
	{
		"code": "542523",
		"parent_code": "542500",
		"name": "噶尔县",
		"alias": "噶尔",
		"pinyin": "GaEr",
		"abbr": "GE",
		"zip": "859400",
		"level": 3
	},
	{
		"code": "542524",
		"parent_code": "542500",
		"name": "日土县",
		"alias": "日土",
		"pinyin": "RiTu",
		"abbr": "RT",
		"zip": "859700",
		"level": 3
	},
	{
		"code": "542525",
		"parent_code": "542500",
		"name": "革吉县",
		"alias": "革吉",
		"pinyin": "GeJi",
		"abbr": "GJ",
		"zip": "859100",
		"level": 3
	},
	{
		"code": "542526",
		"parent_code": "542500",
		"name": "改则县",
		"alias": "改则",
		"pinyin": "GaiZe",
		"abbr": "GZ",
		"zip": "859200",
		"level": 3
	},
	{
		"code": "542527",
		"parent_code": "542500",
		"name": "措勤县",
		"alias": "措勤",
		"pinyin": "CuoQin",
		"abbr": "CQ",
		"zip": "859300",
		"level": 3
	},
	{
		"code": "542600",
		"parent_code": "540000",
		"name": "林芝地区",
		"alias": "林芝地区",
		"pinyin": "LinZhiDeQu",
		"abbr": "LZDQ",
		"zip": "860100",
		"level": 2
	},
	{
		"code": "542621",
		"parent_code": "542600",
		"name": "林芝县",
		"alias": "林芝",
		"pinyin": "LinZhi",
		"abbr": "LZ",
		"zip": "860100",
		"level": 3
	},
	{
		"code": "542622",
		"parent_code": "542600",
		"name": "工布江达县",
		"alias": "工布江达",
		"pinyin": "GongBuJiangDa",
		"abbr": "GBJD",
		"zip": "860200",
		"level": 3
	},
	{
		"code": "542623",
		"parent_code": "542600",
		"name": "米林县",
		"alias": "米林",
		"pinyin": "MiLin",
		"abbr": "ML",
		"zip": "860500",
		"level": 3
	},
	{
		"code": "542624",
		"parent_code": "542600",
		"name": "墨脱县",
		"alias": "墨脱",
		"pinyin": "MoTuo",
		"abbr": "MT",
		"zip": "860700",
		"level": 3
	},
	{
		"code": "542625",
		"parent_code": "542600",
		"name": "波密县",
		"alias": "波密",
		"pinyin": "BoMi",
		"abbr": "BM",
		"zip": "860300",
		"level": 3
	},
	{
		"code": "542626",
		"parent_code": "542600",
		"name": "察隅县",
		"alias": "察隅",
		"pinyin": "ChaYu",
		"abbr": "CY",
		"zip": "860600",
		"level": 3
	},
	{
		"code": "542627",
		"parent_code": "542600",
		"name": "朗县",
		"alias": "朗县",
		"pinyin": "LangXian",
		"abbr": "LX",
		"zip": "860400",
		"level": 3
	},
	{
		"code": "610000",
		"parent_code": null,
		"name": "陕西省",
		"alias": "陕西",
		"pinyin": "ShaanXi",
		"abbr": "SX",
		"zip": "710000",
		"level": 1
	},
	{
		"code": "610100",
		"parent_code": "610000",
		"name": "西安市",
		"alias": "西安",
		"pinyin": "XiAn",
		"abbr": "XA",
		"zip": "710000",
		"level": 2
	},
	{
		"code": "610102",
		"parent_code": "610100",
		"name": "新城区",
		"alias": "新城区",
		"pinyin": "XinChengQu",
		"abbr": "XCQ",
		"zip": "710005",
		"level": 3
	},
	{
		"code": "610103",
		"parent_code": "610100",
		"name": "碑林区",
		"alias": "碑林区",
		"pinyin": "BeiLinQu",
		"abbr": "BLQ",
		"zip": "710001",
		"level": 3
	},
	{
		"code": "610104",
		"parent_code": "610100",
		"name": "莲湖区",
		"alias": "莲湖区",
		"pinyin": "LianHuQu",
		"abbr": "LHQ",
		"zip": "710003",
		"level": 3
	},
	{
		"code": "610111",
		"parent_code": "610100",
		"name": "灞桥区",
		"alias": "灞桥区",
		"pinyin": "BaQiaoQu",
		"abbr": "BQQ",
		"zip": "710038",
		"level": 3
	},
	{
		"code": "610112",
		"parent_code": "610100",
		"name": "未央区",
		"alias": "未央区",
		"pinyin": "WeiYangQu",
		"abbr": "WYQ",
		"zip": "710016",
		"level": 3
	},
	{
		"code": "610113",
		"parent_code": "610100",
		"name": "雁塔区",
		"alias": "雁塔区",
		"pinyin": "YanTaQu",
		"abbr": "YTQ",
		"zip": "710061",
		"level": 3
	},
	{
		"code": "610114",
		"parent_code": "610100",
		"name": "阎良区",
		"alias": "阎良区",
		"pinyin": "YanLiangQu",
		"abbr": "YLQ",
		"zip": "710089",
		"level": 3
	},
	{
		"code": "610115",
		"parent_code": "610100",
		"name": "临潼区",
		"alias": "临潼区",
		"pinyin": "LinTongQu",
		"abbr": "LTQ",
		"zip": "710600",
		"level": 3
	},
	{
		"code": "610116",
		"parent_code": "610100",
		"name": "长安区",
		"alias": "长安区",
		"pinyin": "ZhangAnQu",
		"abbr": "ZAQ",
		"zip": "710100",
		"level": 3
	},
	{
		"code": "610122",
		"parent_code": "610100",
		"name": "蓝田县",
		"alias": "蓝田",
		"pinyin": "LanTian",
		"abbr": "LT",
		"zip": "710500",
		"level": 3
	},
	{
		"code": "610124",
		"parent_code": "610100",
		"name": "周至县",
		"alias": "周至",
		"pinyin": "ZhouZhi",
		"abbr": "ZZ",
		"zip": "710400",
		"level": 3
	},
	{
		"code": "610125",
		"parent_code": "610100",
		"name": "户县",
		"alias": "户县",
		"pinyin": "HuXian",
		"abbr": "HX",
		"zip": "710300",
		"level": 3
	},
	{
		"code": "610126",
		"parent_code": "610100",
		"name": "高陵县",
		"alias": "高陵",
		"pinyin": "GaoLing",
		"abbr": "GL",
		"zip": "710200",
		"level": 3
	},
	{
		"code": "610200",
		"parent_code": "610000",
		"name": "铜川市",
		"alias": "铜川",
		"pinyin": "TongChuan",
		"abbr": "TC",
		"zip": "727000",
		"level": 2
	},
	{
		"code": "610202",
		"parent_code": "610200",
		"name": "王益区",
		"alias": "王益区",
		"pinyin": "WangYiQu",
		"abbr": "WYQ",
		"zip": "727000",
		"level": 3
	},
	{
		"code": "610203",
		"parent_code": "610200",
		"name": "印台区",
		"alias": "印台区",
		"pinyin": "YinTaiQu",
		"abbr": "YTQ",
		"zip": "727007",
		"level": 3
	},
	{
		"code": "610204",
		"parent_code": "610200",
		"name": "耀州区",
		"alias": "耀州区",
		"pinyin": "YaoZhouQu",
		"abbr": "YZQ",
		"zip": "727100",
		"level": 3
	},
	{
		"code": "610222",
		"parent_code": "610200",
		"name": "宜君县",
		"alias": "宜君",
		"pinyin": "YiJun",
		"abbr": "YJ",
		"zip": "727200",
		"level": 3
	},
	{
		"code": "610300",
		"parent_code": "610000",
		"name": "宝鸡市",
		"alias": "宝鸡",
		"pinyin": "BaoJi",
		"abbr": "BJ",
		"zip": "721000",
		"level": 2
	},
	{
		"code": "610302",
		"parent_code": "610300",
		"name": "渭滨区",
		"alias": "渭滨区",
		"pinyin": "WeiBinQu",
		"abbr": "WBQ",
		"zip": "721000",
		"level": 3
	},
	{
		"code": "610303",
		"parent_code": "610300",
		"name": "金台区",
		"alias": "金台区",
		"pinyin": "JinTaiQu",
		"abbr": "JTQ",
		"zip": "721001",
		"level": 3
	},
	{
		"code": "610304",
		"parent_code": "610300",
		"name": "陈仓区",
		"alias": "陈仓区",
		"pinyin": "ChenCangQu",
		"abbr": "CCQ",
		"zip": "721300",
		"level": 3
	},
	{
		"code": "610322",
		"parent_code": "610300",
		"name": "凤翔县",
		"alias": "凤翔",
		"pinyin": "FengXiang",
		"abbr": "FX",
		"zip": "721400",
		"level": 3
	},
	{
		"code": "610323",
		"parent_code": "610300",
		"name": "岐山县",
		"alias": "岐山",
		"pinyin": "QiShan",
		"abbr": "QS",
		"zip": "722400",
		"level": 3
	},
	{
		"code": "610324",
		"parent_code": "610300",
		"name": "扶风县",
		"alias": "扶风",
		"pinyin": "FuFeng",
		"abbr": "FF",
		"zip": "722200",
		"level": 3
	},
	{
		"code": "610326",
		"parent_code": "610300",
		"name": "眉县",
		"alias": "眉县",
		"pinyin": "MeiXian",
		"abbr": "MX",
		"zip": "722300",
		"level": 3
	},
	{
		"code": "610327",
		"parent_code": "610300",
		"name": "陇县",
		"alias": "陇县",
		"pinyin": "LongXian",
		"abbr": "LX",
		"zip": "721200",
		"level": 3
	},
	{
		"code": "610328",
		"parent_code": "610300",
		"name": "千阳县",
		"alias": "千阳",
		"pinyin": "QianYang",
		"abbr": "QY",
		"zip": "721100",
		"level": 3
	},
	{
		"code": "610329",
		"parent_code": "610300",
		"name": "麟游县",
		"alias": "麟游",
		"pinyin": "LinYou",
		"abbr": "LY",
		"zip": "721500",
		"level": 3
	},
	{
		"code": "610330",
		"parent_code": "610300",
		"name": "凤县",
		"alias": "凤县",
		"pinyin": "FengXian",
		"abbr": "FX",
		"zip": "721700",
		"level": 3
	},
	{
		"code": "610331",
		"parent_code": "610300",
		"name": "太白县",
		"alias": "太白",
		"pinyin": "TaiBai",
		"abbr": "TB",
		"zip": "721600",
		"level": 3
	},
	{
		"code": "610400",
		"parent_code": "610000",
		"name": "咸阳市",
		"alias": "咸阳",
		"pinyin": "XianYang",
		"abbr": "XY",
		"zip": "712000",
		"level": 2
	},
	{
		"code": "610402",
		"parent_code": "610400",
		"name": "秦都区",
		"alias": "秦都区",
		"pinyin": "QinDouQu",
		"abbr": "QDQ",
		"zip": "712000",
		"level": 3
	},
	{
		"code": "610403",
		"parent_code": "610400",
		"name": "杨陵区",
		"alias": "杨陵区",
		"pinyin": "YangLingQu",
		"abbr": "YLQ",
		"zip": "712100",
		"level": 3
	},
	{
		"code": "610404",
		"parent_code": "610400",
		"name": "渭城区",
		"alias": "渭城区",
		"pinyin": "WeiChengQu",
		"abbr": "WCQ",
		"zip": "712000",
		"level": 3
	},
	{
		"code": "610422",
		"parent_code": "610400",
		"name": "三原县",
		"alias": "三原",
		"pinyin": "SanYuan",
		"abbr": "SY",
		"zip": "713800",
		"level": 3
	},
	{
		"code": "610423",
		"parent_code": "610400",
		"name": "泾阳县",
		"alias": "泾阳",
		"pinyin": "JingYang",
		"abbr": "JY",
		"zip": "713700",
		"level": 3
	},
	{
		"code": "610424",
		"parent_code": "610400",
		"name": "乾县",
		"alias": "乾县",
		"pinyin": "GanXian",
		"abbr": "GX",
		"zip": "713300",
		"level": 3
	},
	{
		"code": "610425",
		"parent_code": "610400",
		"name": "礼泉县",
		"alias": "礼泉",
		"pinyin": "LiQuan",
		"abbr": "LQ",
		"zip": "713200",
		"level": 3
	},
	{
		"code": "610426",
		"parent_code": "610400",
		"name": "永寿县",
		"alias": "永寿",
		"pinyin": "YongShou",
		"abbr": "YS",
		"zip": "713400",
		"level": 3
	},
	{
		"code": "610427",
		"parent_code": "610400",
		"name": "彬县",
		"alias": "彬县",
		"pinyin": "BinXian",
		"abbr": "BX",
		"zip": "713500",
		"level": 3
	},
	{
		"code": "610428",
		"parent_code": "610400",
		"name": "长武县",
		"alias": "长武",
		"pinyin": "ZhangWu",
		"abbr": "ZW",
		"zip": "713600",
		"level": 3
	},
	{
		"code": "610429",
		"parent_code": "610400",
		"name": "旬邑县",
		"alias": "旬邑",
		"pinyin": "XunYi",
		"abbr": "XY",
		"zip": "711300",
		"level": 3
	},
	{
		"code": "610430",
		"parent_code": "610400",
		"name": "淳化县",
		"alias": "淳化",
		"pinyin": "ChunHua",
		"abbr": "CH",
		"zip": "711200",
		"level": 3
	},
	{
		"code": "610431",
		"parent_code": "610400",
		"name": "武功县",
		"alias": "武功",
		"pinyin": "WuGong",
		"abbr": "WG",
		"zip": "712200",
		"level": 3
	},
	{
		"code": "610481",
		"parent_code": "610400",
		"name": "兴平市",
		"alias": "兴平",
		"pinyin": "XingPing",
		"abbr": "XP",
		"zip": "713100",
		"level": 3
	},
	{
		"code": "610500",
		"parent_code": "610000",
		"name": "渭南市",
		"alias": "渭南",
		"pinyin": "WeiNan",
		"abbr": "WN",
		"zip": "714000",
		"level": 2
	},
	{
		"code": "610502",
		"parent_code": "610500",
		"name": "临渭区",
		"alias": "临渭区",
		"pinyin": "LinWeiQu",
		"abbr": "LWQ",
		"zip": "714000",
		"level": 3
	},
	{
		"code": "610521",
		"parent_code": "610500",
		"name": "华县",
		"alias": "华县",
		"pinyin": "HuaXian",
		"abbr": "HX",
		"zip": "714100",
		"level": 3
	},
	{
		"code": "610522",
		"parent_code": "610500",
		"name": "潼关县",
		"alias": "潼关",
		"pinyin": "TongGuan",
		"abbr": "TG",
		"zip": "714300",
		"level": 3
	},
	{
		"code": "610523",
		"parent_code": "610500",
		"name": "大荔县",
		"alias": "大荔",
		"pinyin": "DaLi",
		"abbr": "DL",
		"zip": "715100",
		"level": 3
	},
	{
		"code": "610524",
		"parent_code": "610500",
		"name": "合阳县",
		"alias": "合阳",
		"pinyin": "HeYang",
		"abbr": "HY",
		"zip": "715300",
		"level": 3
	},
	{
		"code": "610525",
		"parent_code": "610500",
		"name": "澄城县",
		"alias": "澄城",
		"pinyin": "ChengCheng",
		"abbr": "CC",
		"zip": "715200",
		"level": 3
	},
	{
		"code": "610526",
		"parent_code": "610500",
		"name": "蒲城县",
		"alias": "蒲城",
		"pinyin": "PuCheng",
		"abbr": "PC",
		"zip": "715500",
		"level": 3
	},
	{
		"code": "610527",
		"parent_code": "610500",
		"name": "白水县",
		"alias": "白水",
		"pinyin": "BaiShui",
		"abbr": "BS",
		"zip": "715600",
		"level": 3
	},
	{
		"code": "610528",
		"parent_code": "610500",
		"name": "富平县",
		"alias": "富平",
		"pinyin": "FuPing",
		"abbr": "FP",
		"zip": "711700",
		"level": 3
	},
	{
		"code": "610581",
		"parent_code": "610500",
		"name": "韩城市",
		"alias": "韩城",
		"pinyin": "HanCheng",
		"abbr": "HC",
		"zip": "715400",
		"level": 3
	},
	{
		"code": "610582",
		"parent_code": "610500",
		"name": "华阴市",
		"alias": "华阴",
		"pinyin": "HuaYin",
		"abbr": "HY",
		"zip": "714200",
		"level": 3
	},
	{
		"code": "610600",
		"parent_code": "610000",
		"name": "延安市",
		"alias": "延安",
		"pinyin": "YanAn",
		"abbr": "YA",
		"zip": "716000",
		"level": 2
	},
	{
		"code": "610602",
		"parent_code": "610600",
		"name": "宝塔区",
		"alias": "宝塔区",
		"pinyin": "BaoTaQu",
		"abbr": "BTQ",
		"zip": "716000",
		"level": 3
	},
	{
		"code": "610621",
		"parent_code": "610600",
		"name": "延长县",
		"alias": "延长",
		"pinyin": "YanZhang",
		"abbr": "YZ",
		"zip": "717100",
		"level": 3
	},
	{
		"code": "610622",
		"parent_code": "610600",
		"name": "延川县",
		"alias": "延川",
		"pinyin": "YanChuan",
		"abbr": "YC",
		"zip": "717200",
		"level": 3
	},
	{
		"code": "610623",
		"parent_code": "610600",
		"name": "子长县",
		"alias": "子长",
		"pinyin": "ZiZhang",
		"abbr": "ZZ",
		"zip": "717300",
		"level": 3
	},
	{
		"code": "610624",
		"parent_code": "610600",
		"name": "安塞县",
		"alias": "安塞",
		"pinyin": "AnSai",
		"abbr": "AS",
		"zip": "717400",
		"level": 3
	},
	{
		"code": "610625",
		"parent_code": "610600",
		"name": "志丹县",
		"alias": "志丹",
		"pinyin": "ZhiDan",
		"abbr": "ZD",
		"zip": "717500",
		"level": 3
	},
	{
		"code": "610626",
		"parent_code": "610600",
		"name": "吴起县",
		"alias": "吴起",
		"pinyin": "WuQi",
		"abbr": "WQ",
		"zip": "717600",
		"level": 3
	},
	{
		"code": "610627",
		"parent_code": "610600",
		"name": "甘泉县",
		"alias": "甘泉",
		"pinyin": "GanQuan",
		"abbr": "GQ",
		"zip": "716100",
		"level": 3
	},
	{
		"code": "610628",
		"parent_code": "610600",
		"name": "富县",
		"alias": "富县",
		"pinyin": "FuXian",
		"abbr": "FX",
		"zip": "727500",
		"level": 3
	},
	{
		"code": "610629",
		"parent_code": "610600",
		"name": "洛川县",
		"alias": "洛川",
		"pinyin": "LuoChuan",
		"abbr": "LC",
		"zip": "727400",
		"level": 3
	},
	{
		"code": "610630",
		"parent_code": "610600",
		"name": "宜川县",
		"alias": "宜川",
		"pinyin": "YiChuan",
		"abbr": "YC",
		"zip": "716200",
		"level": 3
	},
	{
		"code": "610631",
		"parent_code": "610600",
		"name": "黄龙县",
		"alias": "黄龙",
		"pinyin": "HuangLong",
		"abbr": "HL",
		"zip": "715700",
		"level": 3
	},
	{
		"code": "610632",
		"parent_code": "610600",
		"name": "黄陵县",
		"alias": "黄陵",
		"pinyin": "HuangLing",
		"abbr": "HL",
		"zip": "727300",
		"level": 3
	},
	{
		"code": "610700",
		"parent_code": "610000",
		"name": "汉中市",
		"alias": "汉中",
		"pinyin": "HanZhong",
		"abbr": "HZ",
		"zip": "723000",
		"level": 2
	},
	{
		"code": "610702",
		"parent_code": "610700",
		"name": "汉台区",
		"alias": "汉台区",
		"pinyin": "HanTaiQu",
		"abbr": "HTQ",
		"zip": "723000",
		"level": 3
	},
	{
		"code": "610721",
		"parent_code": "610700",
		"name": "南郑县",
		"alias": "南郑",
		"pinyin": "NanZheng",
		"abbr": "NZ",
		"zip": "723100",
		"level": 3
	},
	{
		"code": "610722",
		"parent_code": "610700",
		"name": "城固县",
		"alias": "城固",
		"pinyin": "ChengGu",
		"abbr": "CG",
		"zip": "723200",
		"level": 3
	},
	{
		"code": "610723",
		"parent_code": "610700",
		"name": "洋县",
		"alias": "洋县",
		"pinyin": "YangXian",
		"abbr": "YX",
		"zip": "723300",
		"level": 3
	},
	{
		"code": "610724",
		"parent_code": "610700",
		"name": "西乡县",
		"alias": "西乡",
		"pinyin": "XiXiang",
		"abbr": "XX",
		"zip": "723500",
		"level": 3
	},
	{
		"code": "610725",
		"parent_code": "610700",
		"name": "勉县",
		"alias": "勉县",
		"pinyin": "MianXian",
		"abbr": "MX",
		"zip": "724200",
		"level": 3
	},
	{
		"code": "610726",
		"parent_code": "610700",
		"name": "宁强县",
		"alias": "宁强",
		"pinyin": "NingQiang",
		"abbr": "NQ",
		"zip": "724400",
		"level": 3
	},
	{
		"code": "610727",
		"parent_code": "610700",
		"name": "略阳县",
		"alias": "略阳",
		"pinyin": "EYang",
		"abbr": "EY",
		"zip": "724300",
		"level": 3
	},
	{
		"code": "610728",
		"parent_code": "610700",
		"name": "镇巴县",
		"alias": "镇巴",
		"pinyin": "ZhenBa",
		"abbr": "ZB",
		"zip": "723600",
		"level": 3
	},
	{
		"code": "610729",
		"parent_code": "610700",
		"name": "留坝县",
		"alias": "留坝",
		"pinyin": "LiuBa",
		"abbr": "LB",
		"zip": "724100",
		"level": 3
	},
	{
		"code": "610730",
		"parent_code": "610700",
		"name": "佛坪县",
		"alias": "佛坪",
		"pinyin": "FuPing",
		"abbr": "FP",
		"zip": "723400",
		"level": 3
	},
	{
		"code": "610800",
		"parent_code": "610000",
		"name": "榆林市",
		"alias": "榆林",
		"pinyin": "YuLin",
		"abbr": "YL",
		"zip": "719000",
		"level": 2
	},
	{
		"code": "610802",
		"parent_code": "610800",
		"name": "榆阳区",
		"alias": "榆阳区",
		"pinyin": "YuYangQu",
		"abbr": "YYQ",
		"zip": "719000",
		"level": 3
	},
	{
		"code": "610821",
		"parent_code": "610800",
		"name": "神木县",
		"alias": "神木",
		"pinyin": "ShenMu",
		"abbr": "SM",
		"zip": "719300",
		"level": 3
	},
	{
		"code": "610822",
		"parent_code": "610800",
		"name": "府谷县",
		"alias": "府谷",
		"pinyin": "FuGu",
		"abbr": "FG",
		"zip": "719400",
		"level": 3
	},
	{
		"code": "610823",
		"parent_code": "610800",
		"name": "横山县",
		"alias": "横山",
		"pinyin": "HengShan",
		"abbr": "HS",
		"zip": "719100",
		"level": 3
	},
	{
		"code": "610824",
		"parent_code": "610800",
		"name": "靖边县",
		"alias": "靖边",
		"pinyin": "JingBian",
		"abbr": "JB",
		"zip": "718500",
		"level": 3
	},
	{
		"code": "610825",
		"parent_code": "610800",
		"name": "定边县",
		"alias": "定边",
		"pinyin": "DingBian",
		"abbr": "DB",
		"zip": "718600",
		"level": 3
	},
	{
		"code": "610826",
		"parent_code": "610800",
		"name": "绥德县",
		"alias": "绥德",
		"pinyin": "SuiDe",
		"abbr": "SD",
		"zip": "718000",
		"level": 3
	},
	{
		"code": "610827",
		"parent_code": "610800",
		"name": "米脂县",
		"alias": "米脂",
		"pinyin": "MiZhi",
		"abbr": "MZ",
		"zip": "718100",
		"level": 3
	},
	{
		"code": "610828",
		"parent_code": "610800",
		"name": "佳县",
		"alias": "佳县",
		"pinyin": "JiaXian",
		"abbr": "JX",
		"zip": "719200",
		"level": 3
	},
	{
		"code": "610829",
		"parent_code": "610800",
		"name": "吴堡县",
		"alias": "吴堡",
		"pinyin": "WuBao",
		"abbr": "WB",
		"zip": "718200",
		"level": 3
	},
	{
		"code": "610830",
		"parent_code": "610800",
		"name": "清涧县",
		"alias": "清涧",
		"pinyin": "QingJian",
		"abbr": "QJ",
		"zip": "718300",
		"level": 3
	},
	{
		"code": "610831",
		"parent_code": "610800",
		"name": "子洲县",
		"alias": "子洲",
		"pinyin": "ZiZhou",
		"abbr": "ZZ",
		"zip": "718400",
		"level": 3
	},
	{
		"code": "610900",
		"parent_code": "610000",
		"name": "安康市",
		"alias": "安康",
		"pinyin": "AnKang",
		"abbr": "AK",
		"zip": "725000",
		"level": 2
	},
	{
		"code": "610902",
		"parent_code": "610900",
		"name": "汉滨区",
		"alias": "汉滨区",
		"pinyin": "HanBinQu",
		"abbr": "HBQ",
		"zip": "725000",
		"level": 3
	},
	{
		"code": "610921",
		"parent_code": "610900",
		"name": "汉阴县",
		"alias": "汉阴",
		"pinyin": "HanYin",
		"abbr": "HY",
		"zip": "725100",
		"level": 3
	},
	{
		"code": "610922",
		"parent_code": "610900",
		"name": "石泉县",
		"alias": "石泉",
		"pinyin": "ShiQuan",
		"abbr": "SQ",
		"zip": "725200",
		"level": 3
	},
	{
		"code": "610923",
		"parent_code": "610900",
		"name": "宁陕县",
		"alias": "宁陕",
		"pinyin": "NingShan",
		"abbr": "NS",
		"zip": "711600",
		"level": 3
	},
	{
		"code": "610924",
		"parent_code": "610900",
		"name": "紫阳县",
		"alias": "紫阳",
		"pinyin": "ZiYang",
		"abbr": "ZY",
		"zip": "725300",
		"level": 3
	},
	{
		"code": "610925",
		"parent_code": "610900",
		"name": "岚皋县",
		"alias": "岚皋",
		"pinyin": "LanGao",
		"abbr": "LG",
		"zip": "725400",
		"level": 3
	},
	{
		"code": "610926",
		"parent_code": "610900",
		"name": "平利县",
		"alias": "平利",
		"pinyin": "PingLi",
		"abbr": "PL",
		"zip": "725500",
		"level": 3
	},
	{
		"code": "610927",
		"parent_code": "610900",
		"name": "镇坪县",
		"alias": "镇坪",
		"pinyin": "ZhenPing",
		"abbr": "ZP",
		"zip": "725600",
		"level": 3
	},
	{
		"code": "610928",
		"parent_code": "610900",
		"name": "旬阳县",
		"alias": "旬阳",
		"pinyin": "XunYang",
		"abbr": "XY",
		"zip": "725700",
		"level": 3
	},
	{
		"code": "610929",
		"parent_code": "610900",
		"name": "白河县",
		"alias": "白河",
		"pinyin": "BaiHe",
		"abbr": "BH",
		"zip": "725800",
		"level": 3
	},
	{
		"code": "611000",
		"parent_code": "610000",
		"name": "商洛市",
		"alias": "商洛",
		"pinyin": "ShangLuo",
		"abbr": "SL",
		"zip": "726000",
		"level": 2
	},
	{
		"code": "611002",
		"parent_code": "611000",
		"name": "商州区",
		"alias": "商州区",
		"pinyin": "ShangZhouQu",
		"abbr": "SZQ",
		"zip": "726000",
		"level": 3
	},
	{
		"code": "611021",
		"parent_code": "611000",
		"name": "洛南县",
		"alias": "洛南",
		"pinyin": "LuoNan",
		"abbr": "LN",
		"zip": "726100",
		"level": 3
	},
	{
		"code": "611022",
		"parent_code": "611000",
		"name": "丹凤县",
		"alias": "丹凤",
		"pinyin": "DanFeng",
		"abbr": "DF",
		"zip": "726200",
		"level": 3
	},
	{
		"code": "611023",
		"parent_code": "611000",
		"name": "商南县",
		"alias": "商南",
		"pinyin": "ShangNan",
		"abbr": "SN",
		"zip": "726300",
		"level": 3
	},
	{
		"code": "611024",
		"parent_code": "611000",
		"name": "山阳县",
		"alias": "山阳",
		"pinyin": "ShanYang",
		"abbr": "SY",
		"zip": "726400",
		"level": 3
	},
	{
		"code": "611025",
		"parent_code": "611000",
		"name": "镇安县",
		"alias": "镇安",
		"pinyin": "ZhenAn",
		"abbr": "ZA",
		"zip": "711500",
		"level": 3
	},
	{
		"code": "611026",
		"parent_code": "611000",
		"name": "柞水县",
		"alias": "柞水",
		"pinyin": "ZhaShui",
		"abbr": "ZS",
		"zip": "711400",
		"level": 3
	},
	{
		"code": "620000",
		"parent_code": null,
		"name": "甘肃省",
		"alias": "甘肃",
		"pinyin": "GanSu",
		"abbr": "GS",
		"zip": "730000",
		"level": 1
	},
	{
		"code": "620100",
		"parent_code": "620000",
		"name": "兰州市",
		"alias": "兰州",
		"pinyin": "LanZhou",
		"abbr": "LZ",
		"zip": "730000",
		"level": 2
	},
	{
		"code": "620102",
		"parent_code": "620100",
		"name": "城关区",
		"alias": "城关区",
		"pinyin": "ChengGuanQu",
		"abbr": "CGQ",
		"zip": "730030",
		"level": 3
	},
	{
		"code": "620103",
		"parent_code": "620100",
		"name": "七里河区",
		"alias": "七里河区",
		"pinyin": "QiLiHeQu",
		"abbr": "QLHQ",
		"zip": "730050",
		"level": 3
	},
	{
		"code": "620104",
		"parent_code": "620100",
		"name": "西固区",
		"alias": "西固区",
		"pinyin": "XiGuQu",
		"abbr": "XGQ",
		"zip": "730060",
		"level": 3
	},
	{
		"code": "620105",
		"parent_code": "620100",
		"name": "安宁区",
		"alias": "安宁区",
		"pinyin": "AnNingQu",
		"abbr": "ANQ",
		"zip": "730070",
		"level": 3
	},
	{
		"code": "620111",
		"parent_code": "620100",
		"name": "红古区",
		"alias": "红古区",
		"pinyin": "HongGuQu",
		"abbr": "HGQ",
		"zip": "730080",
		"level": 3
	},
	{
		"code": "620121",
		"parent_code": "620100",
		"name": "永登县",
		"alias": "永登",
		"pinyin": "YongDeng",
		"abbr": "YD",
		"zip": "730300",
		"level": 3
	},
	{
		"code": "620122",
		"parent_code": "620100",
		"name": "皋兰县",
		"alias": "皋兰",
		"pinyin": "GaoLan",
		"abbr": "GL",
		"zip": "730200",
		"level": 3
	},
	{
		"code": "620123",
		"parent_code": "620100",
		"name": "榆中县",
		"alias": "榆中",
		"pinyin": "YuZhong",
		"abbr": "YZ",
		"zip": "730100",
		"level": 3
	},
	{
		"code": "620200",
		"parent_code": "620000",
		"name": "嘉峪关市",
		"alias": "嘉峪关",
		"pinyin": "JiaYuGuan",
		"abbr": "JYG",
		"zip": "735100",
		"level": 2
	},
	{
		"code": "620300",
		"parent_code": "620000",
		"name": "金昌市",
		"alias": "金昌",
		"pinyin": "JinChang",
		"abbr": "JC",
		"zip": "737100",
		"level": 2
	},
	{
		"code": "620302",
		"parent_code": "620300",
		"name": "金川区",
		"alias": "金川区",
		"pinyin": "JinChuanQu",
		"abbr": "JCQ",
		"zip": "737103",
		"level": 3
	},
	{
		"code": "620321",
		"parent_code": "620300",
		"name": "永昌县",
		"alias": "永昌",
		"pinyin": "YongChang",
		"abbr": "YC",
		"zip": "737200",
		"level": 3
	},
	{
		"code": "620400",
		"parent_code": "620000",
		"name": "白银市",
		"alias": "白银",
		"pinyin": "BaiYin",
		"abbr": "BY",
		"zip": "730900",
		"level": 2
	},
	{
		"code": "620402",
		"parent_code": "620400",
		"name": "白银区",
		"alias": "白银区",
		"pinyin": "BaiYinQu",
		"abbr": "BYQ",
		"zip": "730900",
		"level": 3
	},
	{
		"code": "620403",
		"parent_code": "620400",
		"name": "平川区",
		"alias": "平川区",
		"pinyin": "PingChuanQu",
		"abbr": "PCQ",
		"zip": "730910",
		"level": 3
	},
	{
		"code": "620421",
		"parent_code": "620400",
		"name": "靖远县",
		"alias": "靖远",
		"pinyin": "JingYuan",
		"abbr": "JY",
		"zip": "730600",
		"level": 3
	},
	{
		"code": "620422",
		"parent_code": "620400",
		"name": "会宁县",
		"alias": "会宁",
		"pinyin": "HuiNing",
		"abbr": "HN",
		"zip": "730700",
		"level": 3
	},
	{
		"code": "620423",
		"parent_code": "620400",
		"name": "景泰县",
		"alias": "景泰",
		"pinyin": "JingTai",
		"abbr": "JT",
		"zip": "730400",
		"level": 3
	},
	{
		"code": "620500",
		"parent_code": "620000",
		"name": "天水市",
		"alias": "天水",
		"pinyin": "TianShui",
		"abbr": "TS",
		"zip": "741000",
		"level": 2
	},
	{
		"code": "620502",
		"parent_code": "620500",
		"name": "秦州区",
		"alias": "秦州区",
		"pinyin": "QinZhouQu",
		"abbr": "QZQ",
		"zip": "741000",
		"level": 3
	},
	{
		"code": "620503",
		"parent_code": "620500",
		"name": "麦积区",
		"alias": "麦积区",
		"pinyin": "MaiJiQu",
		"abbr": "MJQ",
		"zip": "741020",
		"level": 3
	},
	{
		"code": "620521",
		"parent_code": "620500",
		"name": "清水县",
		"alias": "清水",
		"pinyin": "QingShui",
		"abbr": "QS",
		"zip": "741400",
		"level": 3
	},
	{
		"code": "620522",
		"parent_code": "620500",
		"name": "秦安县",
		"alias": "秦安",
		"pinyin": "QinAn",
		"abbr": "QA",
		"zip": "741600",
		"level": 3
	},
	{
		"code": "620523",
		"parent_code": "620500",
		"name": "甘谷县",
		"alias": "甘谷",
		"pinyin": "GanGu",
		"abbr": "GG",
		"zip": "741200",
		"level": 3
	},
	{
		"code": "620524",
		"parent_code": "620500",
		"name": "武山县",
		"alias": "武山",
		"pinyin": "WuShan",
		"abbr": "WS",
		"zip": "741300",
		"level": 3
	},
	{
		"code": "620525",
		"parent_code": "620500",
		"name": "张家川回族自治县",
		"alias": "张家川回族",
		"pinyin": "ZhangJiaChuanHuiZu",
		"abbr": "ZJCHZ",
		"zip": "741500",
		"level": 3
	},
	{
		"code": "620600",
		"parent_code": "620000",
		"name": "武威市",
		"alias": "武威",
		"pinyin": "WuWei",
		"abbr": "WW",
		"zip": "733000",
		"level": 2
	},
	{
		"code": "620602",
		"parent_code": "620600",
		"name": "凉州区",
		"alias": "凉州区",
		"pinyin": "LiangZhouQu",
		"abbr": "LZQ",
		"zip": "733000",
		"level": 3
	},
	{
		"code": "620621",
		"parent_code": "620600",
		"name": "民勤县",
		"alias": "民勤",
		"pinyin": "MinQin",
		"abbr": "MQ",
		"zip": "733300",
		"level": 3
	},
	{
		"code": "620622",
		"parent_code": "620600",
		"name": "古浪县",
		"alias": "古浪",
		"pinyin": "GuLang",
		"abbr": "GL",
		"zip": "733100",
		"level": 3
	},
	{
		"code": "620623",
		"parent_code": "620600",
		"name": "天祝藏族自治县",
		"alias": "天祝藏族",
		"pinyin": "TianZhuCangZu",
		"abbr": "TZCZ",
		"zip": "733200",
		"level": 3
	},
	{
		"code": "620700",
		"parent_code": "620000",
		"name": "张掖市",
		"alias": "张掖",
		"pinyin": "ZhangYe",
		"abbr": "ZY",
		"zip": "734000",
		"level": 2
	},
	{
		"code": "620702",
		"parent_code": "620700",
		"name": "甘州区",
		"alias": "甘州区",
		"pinyin": "GanZhouQu",
		"abbr": "GZQ",
		"zip": "734000",
		"level": 3
	},
	{
		"code": "620721",
		"parent_code": "620700",
		"name": "肃南裕固族自治县",
		"alias": "肃南裕固族",
		"pinyin": "SuNanYuGuZu",
		"abbr": "SNYGZ",
		"zip": "734400",
		"level": 3
	},
	{
		"code": "620722",
		"parent_code": "620700",
		"name": "民乐县",
		"alias": "民乐",
		"pinyin": "MinLe",
		"abbr": "ML",
		"zip": "734500",
		"level": 3
	},
	{
		"code": "620723",
		"parent_code": "620700",
		"name": "临泽县",
		"alias": "临泽",
		"pinyin": "LinZe",
		"abbr": "LZ",
		"zip": "734200",
		"level": 3
	},
	{
		"code": "620724",
		"parent_code": "620700",
		"name": "高台县",
		"alias": "高台",
		"pinyin": "GaoTai",
		"abbr": "GT",
		"zip": "734300",
		"level": 3
	},
	{
		"code": "620725",
		"parent_code": "620700",
		"name": "山丹县",
		"alias": "山丹",
		"pinyin": "ShanDan",
		"abbr": "SD",
		"zip": "734100",
		"level": 3
	},
	{
		"code": "620800",
		"parent_code": "620000",
		"name": "平凉市",
		"alias": "平凉",
		"pinyin": "PingLiang",
		"abbr": "PL",
		"zip": "744000",
		"level": 2
	},
	{
		"code": "620802",
		"parent_code": "620800",
		"name": "崆峒区",
		"alias": "崆峒区",
		"pinyin": "KongDongQu",
		"abbr": "KDQ",
		"zip": "744000",
		"level": 3
	},
	{
		"code": "620821",
		"parent_code": "620800",
		"name": "泾川县",
		"alias": "泾川",
		"pinyin": "JingChuan",
		"abbr": "JC",
		"zip": "744300",
		"level": 3
	},
	{
		"code": "620822",
		"parent_code": "620800",
		"name": "灵台县",
		"alias": "灵台",
		"pinyin": "LingTai",
		"abbr": "LT",
		"zip": "744400",
		"level": 3
	},
	{
		"code": "620823",
		"parent_code": "620800",
		"name": "崇信县",
		"alias": "崇信",
		"pinyin": "ChongXin",
		"abbr": "CX",
		"zip": "744200",
		"level": 3
	},
	{
		"code": "620824",
		"parent_code": "620800",
		"name": "华亭县",
		"alias": "华亭",
		"pinyin": "HuaTing",
		"abbr": "HT",
		"zip": "744100",
		"level": 3
	},
	{
		"code": "620825",
		"parent_code": "620800",
		"name": "庄浪县",
		"alias": "庄浪",
		"pinyin": "ZhuangLang",
		"abbr": "ZL",
		"zip": "744600",
		"level": 3
	},
	{
		"code": "620826",
		"parent_code": "620800",
		"name": "静宁县",
		"alias": "静宁",
		"pinyin": "JingNing",
		"abbr": "JN",
		"zip": "743400",
		"level": 3
	},
	{
		"code": "620900",
		"parent_code": "620000",
		"name": "酒泉市",
		"alias": "酒泉",
		"pinyin": "JiuQuan",
		"abbr": "JQ",
		"zip": "735000",
		"level": 2
	},
	{
		"code": "620902",
		"parent_code": "620900",
		"name": "肃州区",
		"alias": "肃州区",
		"pinyin": "SuZhouQu",
		"abbr": "SZQ",
		"zip": "735000",
		"level": 3
	},
	{
		"code": "620921",
		"parent_code": "620900",
		"name": "金塔县",
		"alias": "金塔",
		"pinyin": "JinTa",
		"abbr": "JT",
		"zip": "735300",
		"level": 3
	},
	{
		"code": "620922",
		"parent_code": "620900",
		"name": "瓜州县",
		"alias": "瓜州",
		"pinyin": "GuaZhou",
		"abbr": "GZ",
		"zip": "743000",
		"level": 3
	},
	{
		"code": "620923",
		"parent_code": "620900",
		"name": "肃北蒙古族自治县",
		"alias": "肃北蒙古族",
		"pinyin": "SuBeiMengGuZu",
		"abbr": "SBMGZ",
		"zip": "736300",
		"level": 3
	},
	{
		"code": "620924",
		"parent_code": "620900",
		"name": "阿克塞哈萨克族自治县",
		"alias": "阿克塞哈萨克族",
		"pinyin": "AKeSaiHaSaKeZu",
		"abbr": "AKSHSKZ",
		"zip": "736400",
		"level": 3
	},
	{
		"code": "620981",
		"parent_code": "620900",
		"name": "玉门市",
		"alias": "玉门",
		"pinyin": "YuMen",
		"abbr": "YM",
		"zip": "735200",
		"level": 3
	},
	{
		"code": "620982",
		"parent_code": "620900",
		"name": "敦煌市",
		"alias": "敦煌",
		"pinyin": "DunHuang",
		"abbr": "DH",
		"zip": "736200",
		"level": 3
	},
	{
		"code": "621000",
		"parent_code": "620000",
		"name": "庆阳市",
		"alias": "庆阳",
		"pinyin": "QingYang",
		"abbr": "QY",
		"zip": "745000",
		"level": 2
	},
	{
		"code": "621002",
		"parent_code": "621000",
		"name": "西峰区",
		"alias": "西峰区",
		"pinyin": "XiFengQu",
		"abbr": "XFQ",
		"zip": "745000",
		"level": 3
	},
	{
		"code": "621021",
		"parent_code": "621000",
		"name": "庆城县",
		"alias": "庆城",
		"pinyin": "QingCheng",
		"abbr": "QC",
		"zip": "745100",
		"level": 3
	},
	{
		"code": "621022",
		"parent_code": "621000",
		"name": "环县",
		"alias": "环县",
		"pinyin": "HuanXian",
		"abbr": "HX",
		"zip": "745700",
		"level": 3
	},
	{
		"code": "621023",
		"parent_code": "621000",
		"name": "华池县",
		"alias": "华池",
		"pinyin": "HuaChi",
		"abbr": "HC",
		"zip": "745600",
		"level": 3
	},
	{
		"code": "621024",
		"parent_code": "621000",
		"name": "合水县",
		"alias": "合水",
		"pinyin": "HeShui",
		"abbr": "HS",
		"zip": "745400",
		"level": 3
	},
	{
		"code": "621025",
		"parent_code": "621000",
		"name": "正宁县",
		"alias": "正宁",
		"pinyin": "ZhengNing",
		"abbr": "ZN",
		"zip": "745300",
		"level": 3
	},
	{
		"code": "621026",
		"parent_code": "621000",
		"name": "宁县",
		"alias": "宁县",
		"pinyin": "NingXian",
		"abbr": "NX",
		"zip": "745200",
		"level": 3
	},
	{
		"code": "621027",
		"parent_code": "621000",
		"name": "镇原县",
		"alias": "镇原",
		"pinyin": "ZhenYuan",
		"abbr": "ZY",
		"zip": "744500",
		"level": 3
	},
	{
		"code": "621100",
		"parent_code": "620000",
		"name": "定西市",
		"alias": "定西",
		"pinyin": "DingXi",
		"abbr": "DX",
		"zip": "743000",
		"level": 2
	},
	{
		"code": "621102",
		"parent_code": "621100",
		"name": "安定区",
		"alias": "安定区",
		"pinyin": "AnDingQu",
		"abbr": "ADQ",
		"zip": "743000",
		"level": 3
	},
	{
		"code": "621121",
		"parent_code": "621100",
		"name": "通渭县",
		"alias": "通渭",
		"pinyin": "TongWei",
		"abbr": "TW",
		"zip": "743300",
		"level": 3
	},
	{
		"code": "621122",
		"parent_code": "621100",
		"name": "陇西县",
		"alias": "陇西",
		"pinyin": "LongXi",
		"abbr": "LX",
		"zip": "748100",
		"level": 3
	},
	{
		"code": "621123",
		"parent_code": "621100",
		"name": "渭源县",
		"alias": "渭源",
		"pinyin": "WeiYuan",
		"abbr": "WY",
		"zip": "748200",
		"level": 3
	},
	{
		"code": "621124",
		"parent_code": "621100",
		"name": "临洮县",
		"alias": "临洮",
		"pinyin": "LinTao",
		"abbr": "LT",
		"zip": "730500",
		"level": 3
	},
	{
		"code": "621125",
		"parent_code": "621100",
		"name": "漳县",
		"alias": "漳县",
		"pinyin": "ZhangXian",
		"abbr": "ZX",
		"zip": "748300",
		"level": 3
	},
	{
		"code": "621126",
		"parent_code": "621100",
		"name": "岷县",
		"alias": "岷县",
		"pinyin": "MinXian",
		"abbr": "MX",
		"zip": "748400",
		"level": 3
	},
	{
		"code": "621200",
		"parent_code": "620000",
		"name": "陇南市",
		"alias": "陇南",
		"pinyin": "LongNan",
		"abbr": "LN",
		"zip": "746000",
		"level": 2
	},
	{
		"code": "621202",
		"parent_code": "621200",
		"name": "武都区",
		"alias": "武都区",
		"pinyin": "WuDouQu",
		"abbr": "WDQ",
		"zip": "746000",
		"level": 3
	},
	{
		"code": "621221",
		"parent_code": "621200",
		"name": "成县",
		"alias": "成县",
		"pinyin": "ChengXian",
		"abbr": "CX",
		"zip": "742500",
		"level": 3
	},
	{
		"code": "621222",
		"parent_code": "621200",
		"name": "文县",
		"alias": "文县",
		"pinyin": "WenXian",
		"abbr": "WX",
		"zip": "746400",
		"level": 3
	},
	{
		"code": "621223",
		"parent_code": "621200",
		"name": "宕昌县",
		"alias": "宕昌",
		"pinyin": "DangChang",
		"abbr": "DC",
		"zip": "748500",
		"level": 3
	},
	{
		"code": "621224",
		"parent_code": "621200",
		"name": "康县",
		"alias": "康县",
		"pinyin": "KangXian",
		"abbr": "KX",
		"zip": "746500",
		"level": 3
	},
	{
		"code": "621225",
		"parent_code": "621200",
		"name": "西和县",
		"alias": "西和",
		"pinyin": "XiHe",
		"abbr": "XH",
		"zip": "742100",
		"level": 3
	},
	{
		"code": "621226",
		"parent_code": "621200",
		"name": "礼县",
		"alias": "礼县",
		"pinyin": "LiXian",
		"abbr": "LX",
		"zip": "742200",
		"level": 3
	},
	{
		"code": "621227",
		"parent_code": "621200",
		"name": "徽县",
		"alias": "徽县",
		"pinyin": "HuiXian",
		"abbr": "HX",
		"zip": "742300",
		"level": 3
	},
	{
		"code": "621228",
		"parent_code": "621200",
		"name": "两当县",
		"alias": "两当",
		"pinyin": "LiangDang",
		"abbr": "LD",
		"zip": "742400",
		"level": 3
	},
	{
		"code": "622900",
		"parent_code": "620000",
		"name": "临夏回族自治州",
		"alias": "临夏回族",
		"pinyin": "LinXiaHuiZu",
		"abbr": "LXHZ",
		"zip": "731100",
		"level": 2
	},
	{
		"code": "622901",
		"parent_code": "622900",
		"name": "临夏市",
		"alias": "临夏",
		"pinyin": "LinXia",
		"abbr": "LX",
		"zip": "731100",
		"level": 3
	},
	{
		"code": "622921",
		"parent_code": "622900",
		"name": "临夏县",
		"alias": "临夏",
		"pinyin": "LinXia",
		"abbr": "LX",
		"zip": "731800",
		"level": 3
	},
	{
		"code": "622922",
		"parent_code": "622900",
		"name": "康乐县",
		"alias": "康乐",
		"pinyin": "KangLe",
		"abbr": "KL",
		"zip": "731500",
		"level": 3
	},
	{
		"code": "622923",
		"parent_code": "622900",
		"name": "永靖县",
		"alias": "永靖",
		"pinyin": "YongJing",
		"abbr": "YJ",
		"zip": "731600",
		"level": 3
	},
	{
		"code": "622924",
		"parent_code": "622900",
		"name": "广河县",
		"alias": "广河",
		"pinyin": "GuangHe",
		"abbr": "GH",
		"zip": "731300",
		"level": 3
	},
	{
		"code": "622925",
		"parent_code": "622900",
		"name": "和政县",
		"alias": "和政",
		"pinyin": "HeZheng",
		"abbr": "HZ",
		"zip": "731200",
		"level": 3
	},
	{
		"code": "622926",
		"parent_code": "622900",
		"name": "东乡族自治县",
		"alias": "东乡族",
		"pinyin": "DongXiangZu",
		"abbr": "DXZ",
		"zip": "731400",
		"level": 3
	},
	{
		"code": "622927",
		"parent_code": "622900",
		"name": "积石山保安族东乡族撒拉族自治县",
		"alias": "积石山保安族东乡族撒拉族",
		"pinyin": "JiShiShanBaoAnZuDongXiangZuSaLaZu",
		"abbr": "JSSBAZDXZSLZ",
		"zip": "731700",
		"level": 3
	},
	{
		"code": "623000",
		"parent_code": "620000",
		"name": "甘南藏族自治州",
		"alias": "甘南藏族",
		"pinyin": "GanNanCangZu",
		"abbr": "GNCZ",
		"zip": "747000",
		"level": 2
	},
	{
		"code": "623001",
		"parent_code": "623000",
		"name": "合作市",
		"alias": "合作",
		"pinyin": "HeZuo",
		"abbr": "HZ",
		"zip": "747000",
		"level": 3
	},
	{
		"code": "623021",
		"parent_code": "623000",
		"name": "临潭县",
		"alias": "临潭",
		"pinyin": "LinTan",
		"abbr": "LT",
		"zip": "747500",
		"level": 3
	},
	{
		"code": "623022",
		"parent_code": "623000",
		"name": "卓尼县",
		"alias": "卓尼",
		"pinyin": "ZhuoNi",
		"abbr": "ZN",
		"zip": "747600",
		"level": 3
	},
	{
		"code": "623023",
		"parent_code": "623000",
		"name": "舟曲县",
		"alias": "舟曲",
		"pinyin": "ZhouQu",
		"abbr": "ZQ",
		"zip": "746300",
		"level": 3
	},
	{
		"code": "623024",
		"parent_code": "623000",
		"name": "迭部县",
		"alias": "迭部",
		"pinyin": "DieBu",
		"abbr": "DB",
		"zip": "747400",
		"level": 3
	},
	{
		"code": "623025",
		"parent_code": "623000",
		"name": "玛曲县",
		"alias": "玛曲",
		"pinyin": "MaQu",
		"abbr": "MQ",
		"zip": "747300",
		"level": 3
	},
	{
		"code": "623026",
		"parent_code": "623000",
		"name": "碌曲县",
		"alias": "碌曲",
		"pinyin": "LuQu",
		"abbr": "LQ",
		"zip": "747200",
		"level": 3
	},
	{
		"code": "623027",
		"parent_code": "623000",
		"name": "夏河县",
		"alias": "夏河",
		"pinyin": "XiaHe",
		"abbr": "XH",
		"zip": "747100",
		"level": 3
	},
	{
		"code": "630000",
		"parent_code": null,
		"name": "青海省",
		"alias": "青海",
		"pinyin": "QingHai",
		"abbr": "QH",
		"zip": "810000",
		"level": 1
	},
	{
		"code": "630100",
		"parent_code": "630000",
		"name": "西宁市",
		"alias": "西宁",
		"pinyin": "XiNing",
		"abbr": "XN",
		"zip": "810000",
		"level": 2
	},
	{
		"code": "630102",
		"parent_code": "630100",
		"name": "城东区",
		"alias": "城东区",
		"pinyin": "ChengDongQu",
		"abbr": "CDQ",
		"zip": "810000",
		"level": 3
	},
	{
		"code": "630103",
		"parent_code": "630100",
		"name": "城中区",
		"alias": "城中区",
		"pinyin": "ChengZhongQu",
		"abbr": "CZQ",
		"zip": "810000",
		"level": 3
	},
	{
		"code": "630104",
		"parent_code": "630100",
		"name": "城西区",
		"alias": "城西区",
		"pinyin": "ChengXiQu",
		"abbr": "CXQ",
		"zip": "810001",
		"level": 3
	},
	{
		"code": "630105",
		"parent_code": "630100",
		"name": "城北区",
		"alias": "城北区",
		"pinyin": "ChengBeiQu",
		"abbr": "CBQ",
		"zip": "810001",
		"level": 3
	},
	{
		"code": "630121",
		"parent_code": "630100",
		"name": "大通回族土族自治县",
		"alias": "大通回族土族",
		"pinyin": "DaTongHuiZuTuZu",
		"abbr": "DTHZTZ",
		"zip": "810100",
		"level": 3
	},
	{
		"code": "630122",
		"parent_code": "630100",
		"name": "湟中县",
		"alias": "湟中",
		"pinyin": "HuangZhong",
		"abbr": "HZ",
		"zip": "811600",
		"level": 3
	},
	{
		"code": "630123",
		"parent_code": "630100",
		"name": "湟源县",
		"alias": "湟源",
		"pinyin": "HuangYuan",
		"abbr": "HY",
		"zip": "812100",
		"level": 3
	},
	{
		"code": "632200",
		"parent_code": "630000",
		"name": "海北藏族自治州",
		"alias": "海北藏族",
		"pinyin": "HaiBeiCangZu",
		"abbr": "HBCZ",
		"zip": "810300",
		"level": 2
	},
	{
		"code": "632221",
		"parent_code": "632200",
		"name": "门源回族自治县",
		"alias": "门源回族",
		"pinyin": "MenYuanHuiZu",
		"abbr": "MYHZ",
		"zip": "810300",
		"level": 3
	},
	{
		"code": "632222",
		"parent_code": "632200",
		"name": "祁连县",
		"alias": "祁连",
		"pinyin": "QiLian",
		"abbr": "QL",
		"zip": "810400",
		"level": 3
	},
	{
		"code": "632223",
		"parent_code": "632200",
		"name": "海晏县",
		"alias": "海晏",
		"pinyin": "HaiYan",
		"abbr": "HY",
		"zip": "812200",
		"level": 3
	},
	{
		"code": "632224",
		"parent_code": "632200",
		"name": "刚察县",
		"alias": "刚察",
		"pinyin": "GangCha",
		"abbr": "GC",
		"zip": "812300",
		"level": 3
	},
	{
		"code": "632300",
		"parent_code": "630000",
		"name": "黄南藏族自治州",
		"alias": "黄南藏族",
		"pinyin": "HuangNanCangZu",
		"abbr": "HNCZ",
		"zip": "811300",
		"level": 2
	},
	{
		"code": "632321",
		"parent_code": "632300",
		"name": "同仁县",
		"alias": "同仁",
		"pinyin": "TongRen",
		"abbr": "TR",
		"zip": "811300",
		"level": 3
	},
	{
		"code": "632322",
		"parent_code": "632300",
		"name": "尖扎县",
		"alias": "尖扎",
		"pinyin": "JianZha",
		"abbr": "JZ",
		"zip": "811200",
		"level": 3
	},
	{
		"code": "632323",
		"parent_code": "632300",
		"name": "泽库县",
		"alias": "泽库",
		"pinyin": "ZeKu",
		"abbr": "ZK",
		"zip": "811400",
		"level": 3
	},
	{
		"code": "632324",
		"parent_code": "632300",
		"name": "河南蒙古族自治县",
		"alias": "河南蒙古族",
		"pinyin": "HeNanMengGuZu",
		"abbr": "HNMGZ",
		"zip": "811500",
		"level": 3
	},
	{
		"code": "632500",
		"parent_code": "630000",
		"name": "海南藏族自治州",
		"alias": "海南藏族",
		"pinyin": "HaiNanCangZu",
		"abbr": "HNCZ",
		"zip": "813000",
		"level": 2
	},
	{
		"code": "632521",
		"parent_code": "632500",
		"name": "共和县",
		"alias": "共和",
		"pinyin": "GongHe",
		"abbr": "GH",
		"zip": "813000",
		"level": 3
	},
	{
		"code": "632522",
		"parent_code": "632500",
		"name": "同德县",
		"alias": "同德",
		"pinyin": "TongDe",
		"abbr": "TD",
		"zip": "813200",
		"level": 3
	},
	{
		"code": "632523",
		"parent_code": "632500",
		"name": "贵德县",
		"alias": "贵德",
		"pinyin": "GuiDe",
		"abbr": "GD",
		"zip": "811700",
		"level": 3
	},
	{
		"code": "632524",
		"parent_code": "632500",
		"name": "兴海县",
		"alias": "兴海",
		"pinyin": "XingHai",
		"abbr": "XH",
		"zip": "813300",
		"level": 3
	},
	{
		"code": "632525",
		"parent_code": "632500",
		"name": "贵南县",
		"alias": "贵南",
		"pinyin": "GuiNan",
		"abbr": "GN",
		"zip": "813100",
		"level": 3
	},
	{
		"code": "632600",
		"parent_code": "630000",
		"name": "果洛藏族自治州",
		"alias": "果洛藏族",
		"pinyin": "GuoLuoCangZu",
		"abbr": "GLCZ",
		"zip": "814000",
		"level": 2
	},
	{
		"code": "632621",
		"parent_code": "632600",
		"name": "玛沁县",
		"alias": "玛沁",
		"pinyin": "MaQin",
		"abbr": "MQ",
		"zip": "814000",
		"level": 3
	},
	{
		"code": "632622",
		"parent_code": "632600",
		"name": "班玛县",
		"alias": "班玛",
		"pinyin": "BanMa",
		"abbr": "BM",
		"zip": "814300",
		"level": 3
	},
	{
		"code": "632623",
		"parent_code": "632600",
		"name": "甘德县",
		"alias": "甘德",
		"pinyin": "GanDe",
		"abbr": "GD",
		"zip": "814100",
		"level": 3
	},
	{
		"code": "632624",
		"parent_code": "632600",
		"name": "达日县",
		"alias": "达日",
		"pinyin": "DaRi",
		"abbr": "DR",
		"zip": "814200",
		"level": 3
	},
	{
		"code": "632625",
		"parent_code": "632600",
		"name": "久治县",
		"alias": "久治",
		"pinyin": "JiuZhi",
		"abbr": "JZ",
		"zip": "624700",
		"level": 3
	},
	{
		"code": "632626",
		"parent_code": "632600",
		"name": "玛多县",
		"alias": "玛多",
		"pinyin": "MaDuo",
		"abbr": "MD",
		"zip": "813500",
		"level": 3
	},
	{
		"code": "632700",
		"parent_code": "630000",
		"name": "玉树藏族自治州",
		"alias": "玉树藏族",
		"pinyin": "YuShuCangZu",
		"abbr": "YSCZ",
		"zip": "815000",
		"level": 2
	},
	{
		"code": "632722",
		"parent_code": "632700",
		"name": "杂多县",
		"alias": "杂多",
		"pinyin": "ZaDuo",
		"abbr": "ZD",
		"zip": "815300",
		"level": 3
	},
	{
		"code": "632723",
		"parent_code": "632700",
		"name": "称多县",
		"alias": "称多",
		"pinyin": "ChengDuo",
		"abbr": "CD",
		"zip": "815100",
		"level": 3
	},
	{
		"code": "632724",
		"parent_code": "632700",
		"name": "治多县",
		"alias": "治多",
		"pinyin": "ZhiDuo",
		"abbr": "ZD",
		"zip": "815400",
		"level": 3
	},
	{
		"code": "632725",
		"parent_code": "632700",
		"name": "囊谦县",
		"alias": "囊谦",
		"pinyin": "NangQian",
		"abbr": "NQ",
		"zip": "815200",
		"level": 3
	},
	{
		"code": "632726",
		"parent_code": "632700",
		"name": "曲麻莱县",
		"alias": "曲麻莱",
		"pinyin": "QuMaLai",
		"abbr": "QML",
		"zip": "815500",
		"level": 3
	},
	{
		"code": "632800",
		"parent_code": "630000",
		"name": "海西蒙古族藏族自治州",
		"alias": "海西蒙古族藏族",
		"pinyin": "HaiXiMengGuZuCangZu",
		"abbr": "HXMGZCZ",
		"zip": "816000",
		"level": 2
	},
	{
		"code": "632801",
		"parent_code": "632800",
		"name": "格尔木市",
		"alias": "格尔木",
		"pinyin": "GeErMu",
		"abbr": "GEM",
		"zip": "816000",
		"level": 3
	},
	{
		"code": "632802",
		"parent_code": "632800",
		"name": "德令哈市",
		"alias": "德令哈",
		"pinyin": "DeLingHa",
		"abbr": "DLH",
		"zip": "817000",
		"level": 3
	},
	{
		"code": "632821",
		"parent_code": "632800",
		"name": "乌兰县",
		"alias": "乌兰",
		"pinyin": "WuLan",
		"abbr": "WL",
		"zip": "817100",
		"level": 3
	},
	{
		"code": "632822",
		"parent_code": "632800",
		"name": "都兰县",
		"alias": "都兰",
		"pinyin": "DouLan",
		"abbr": "DL",
		"zip": "816100",
		"level": 3
	},
	{
		"code": "632823",
		"parent_code": "632800",
		"name": "天峻县",
		"alias": "天峻",
		"pinyin": "TianJun",
		"abbr": "TJ",
		"zip": "817200",
		"level": 3
	},
	{
		"code": "640000",
		"parent_code": null,
		"name": "宁夏回族自治区",
		"alias": "宁夏",
		"pinyin": "NingXiaHuiZu",
		"abbr": "NXHZ",
		"zip": "750000",
		"level": 1
	},
	{
		"code": "640100",
		"parent_code": "640000",
		"name": "银川市",
		"alias": "银川",
		"pinyin": "YinChuan",
		"abbr": "YC",
		"zip": "750000",
		"level": 2
	},
	{
		"code": "640104",
		"parent_code": "640100",
		"name": "兴庆区",
		"alias": "兴庆区",
		"pinyin": "XingQingQu",
		"abbr": "XQQ",
		"zip": "750001",
		"level": 3
	},
	{
		"code": "640105",
		"parent_code": "640100",
		"name": "西夏区",
		"alias": "西夏区",
		"pinyin": "XiXiaQu",
		"abbr": "XXQ",
		"zip": "750027",
		"level": 3
	},
	{
		"code": "640106",
		"parent_code": "640100",
		"name": "金凤区",
		"alias": "金凤区",
		"pinyin": "JinFengQu",
		"abbr": "JFQ",
		"zip": "750011",
		"level": 3
	},
	{
		"code": "640121",
		"parent_code": "640100",
		"name": "永宁县",
		"alias": "永宁",
		"pinyin": "YongNing",
		"abbr": "YN",
		"zip": "750100",
		"level": 3
	},
	{
		"code": "640122",
		"parent_code": "640100",
		"name": "贺兰县",
		"alias": "贺兰",
		"pinyin": "HeLan",
		"abbr": "HL",
		"zip": "750200",
		"level": 3
	},
	{
		"code": "640181",
		"parent_code": "640100",
		"name": "灵武市",
		"alias": "灵武",
		"pinyin": "LingWu",
		"abbr": "LW",
		"zip": "751400",
		"level": 3
	},
	{
		"code": "640200",
		"parent_code": "640000",
		"name": "石嘴山市",
		"alias": "石嘴山",
		"pinyin": "ShiZuiShan",
		"abbr": "SZS",
		"zip": "753000",
		"level": 2
	},
	{
		"code": "640202",
		"parent_code": "640200",
		"name": "大武口区",
		"alias": "大武口区",
		"pinyin": "DaWuKouQu",
		"abbr": "DWKQ",
		"zip": "753000",
		"level": 3
	},
	{
		"code": "640205",
		"parent_code": "640200",
		"name": "惠农区",
		"alias": "惠农区",
		"pinyin": "HuiNongQu",
		"abbr": "HNQ",
		"zip": "753200",
		"level": 3
	},
	{
		"code": "640221",
		"parent_code": "640200",
		"name": "平罗县",
		"alias": "平罗",
		"pinyin": "PingLuo",
		"abbr": "PL",
		"zip": "753400",
		"level": 3
	},
	{
		"code": "640300",
		"parent_code": "640000",
		"name": "吴忠市",
		"alias": "吴忠",
		"pinyin": "WuZhong",
		"abbr": "WZ",
		"zip": "751100",
		"level": 2
	},
	{
		"code": "640302",
		"parent_code": "640300",
		"name": "利通区",
		"alias": "利通区",
		"pinyin": "LiTongQu",
		"abbr": "LTQ",
		"zip": "751100",
		"level": 3
	},
	{
		"code": "640303",
		"parent_code": "640300",
		"name": "红寺堡区",
		"alias": "红寺堡区",
		"pinyin": "HongSiBaoQu",
		"abbr": "HSBQ",
		"zip": "751900",
		"level": 3
	},
	{
		"code": "640323",
		"parent_code": "640300",
		"name": "盐池县",
		"alias": "盐池",
		"pinyin": "YanChi",
		"abbr": "YC",
		"zip": "751500",
		"level": 3
	},
	{
		"code": "640324",
		"parent_code": "640300",
		"name": "同心县",
		"alias": "同心",
		"pinyin": "TongXin",
		"abbr": "TX",
		"zip": "751300",
		"level": 3
	},
	{
		"code": "640381",
		"parent_code": "640300",
		"name": "青铜峡市",
		"alias": "青铜峡",
		"pinyin": "QingTongXia",
		"abbr": "QTX",
		"zip": "751600",
		"level": 3
	},
	{
		"code": "640400",
		"parent_code": "640000",
		"name": "固原市",
		"alias": "固原",
		"pinyin": "GuYuan",
		"abbr": "GY",
		"zip": "756000",
		"level": 2
	},
	{
		"code": "640402",
		"parent_code": "640400",
		"name": "原州区",
		"alias": "原州区",
		"pinyin": "YuanZhouQu",
		"abbr": "YZQ",
		"zip": "756000",
		"level": 3
	},
	{
		"code": "640422",
		"parent_code": "640400",
		"name": "西吉县",
		"alias": "西吉",
		"pinyin": "XiJi",
		"abbr": "XJ",
		"zip": "756200",
		"level": 3
	},
	{
		"code": "640423",
		"parent_code": "640400",
		"name": "隆德县",
		"alias": "隆德",
		"pinyin": "LongDe",
		"abbr": "LD",
		"zip": "756300",
		"level": 3
	},
	{
		"code": "640424",
		"parent_code": "640400",
		"name": "泾源县",
		"alias": "泾源",
		"pinyin": "JingYuan",
		"abbr": "JY",
		"zip": "756400",
		"level": 3
	},
	{
		"code": "640425",
		"parent_code": "640400",
		"name": "彭阳县",
		"alias": "彭阳",
		"pinyin": "PengYang",
		"abbr": "PY",
		"zip": "756500",
		"level": 3
	},
	{
		"code": "640500",
		"parent_code": "640000",
		"name": "中卫市",
		"alias": "中卫",
		"pinyin": "ZhongWei",
		"abbr": "ZW",
		"zip": "755000",
		"level": 2
	},
	{
		"code": "640502",
		"parent_code": "640500",
		"name": "沙坡头区",
		"alias": "沙坡头区",
		"pinyin": "ShaPoTouQu",
		"abbr": "SPTQ",
		"zip": "751700",
		"level": 3
	},
	{
		"code": "640521",
		"parent_code": "640500",
		"name": "中宁县",
		"alias": "中宁",
		"pinyin": "ZhongNing",
		"abbr": "ZN",
		"zip": "751200",
		"level": 3
	},
	{
		"code": "640522",
		"parent_code": "640500",
		"name": "海原县",
		"alias": "海原",
		"pinyin": "HaiYuan",
		"abbr": "HY",
		"zip": "756100",
		"level": 3
	},
	{
		"code": "650000",
		"parent_code": null,
		"name": "新疆维吾尔自治区",
		"alias": "新疆",
		"pinyin": "XinJiangWeiWuEr",
		"abbr": "XJWWE",
		"zip": "830000",
		"level": 1
	},
	{
		"code": "650100",
		"parent_code": "650000",
		"name": "乌鲁木齐市",
		"alias": "乌鲁木齐",
		"pinyin": "WuLuMuQi",
		"abbr": "WLMQ",
		"zip": "830000",
		"level": 2
	},
	{
		"code": "650102",
		"parent_code": "650100",
		"name": "天山区",
		"alias": "天山区",
		"pinyin": "TianShanQu",
		"abbr": "TSQ",
		"zip": "830002",
		"level": 3
	},
	{
		"code": "650103",
		"parent_code": "650100",
		"name": "沙依巴克区",
		"alias": "沙依巴克区",
		"pinyin": "ShaYiBaKeQu",
		"abbr": "SYBKQ",
		"zip": "830000",
		"level": 3
	},
	{
		"code": "650104",
		"parent_code": "650100",
		"name": "新市区",
		"alias": "新市区",
		"pinyin": "XinShiQu",
		"abbr": "XSQ",
		"zip": "830011",
		"level": 3
	},
	{
		"code": "650105",
		"parent_code": "650100",
		"name": "水磨沟区",
		"alias": "水磨沟区",
		"pinyin": "ShuiMoGouQu",
		"abbr": "SMGQ",
		"zip": "830017",
		"level": 3
	},
	{
		"code": "650106",
		"parent_code": "650100",
		"name": "头屯河区",
		"alias": "头屯河区",
		"pinyin": "TouTunHeQu",
		"abbr": "TTHQ",
		"zip": "830023",
		"level": 3
	},
	{
		"code": "650107",
		"parent_code": "650100",
		"name": "达坂城区",
		"alias": "达坂城区",
		"pinyin": "DaBanChengQu",
		"abbr": "DBCQ",
		"zip": "830039",
		"level": 3
	},
	{
		"code": "650109",
		"parent_code": "650100",
		"name": "米东区",
		"alias": "米东区",
		"pinyin": "MiDongQu",
		"abbr": "MDQ",
		"zip": "831400",
		"level": 3
	},
	{
		"code": "650121",
		"parent_code": "650100",
		"name": "乌鲁木齐县",
		"alias": "乌鲁木齐",
		"pinyin": "WuLuMuQi",
		"abbr": "WLMQ",
		"zip": "830063",
		"level": 3
	},
	{
		"code": "650200",
		"parent_code": "650000",
		"name": "克拉玛依市",
		"alias": "克拉玛依",
		"pinyin": "KeLaMaYi",
		"abbr": "KLMY",
		"zip": "834000",
		"level": 2
	},
	{
		"code": "650202",
		"parent_code": "650200",
		"name": "独山子区",
		"alias": "独山子区",
		"pinyin": "DuShanZiQu",
		"abbr": "DSZQ",
		"zip": "838600",
		"level": 3
	},
	{
		"code": "650203",
		"parent_code": "650200",
		"name": "克拉玛依区",
		"alias": "克拉玛依区",
		"pinyin": "KeLaMaYiQu",
		"abbr": "KLMYQ",
		"zip": "834000",
		"level": 3
	},
	{
		"code": "650204",
		"parent_code": "650200",
		"name": "白碱滩区",
		"alias": "白碱滩区",
		"pinyin": "BaiJianTanQu",
		"abbr": "BJTQ",
		"zip": "834009",
		"level": 3
	},
	{
		"code": "650205",
		"parent_code": "650200",
		"name": "乌尔禾区",
		"alias": "乌尔禾区",
		"pinyin": "WuErHeQu",
		"abbr": "WEHQ",
		"zip": "834014",
		"level": 3
	},
	{
		"code": "652100",
		"parent_code": "650000",
		"name": "吐鲁番地区",
		"alias": "吐鲁番地区",
		"pinyin": "TuLuFanDeQu",
		"abbr": "TLFDQ",
		"zip": "838000",
		"level": 2
	},
	{
		"code": "652101",
		"parent_code": "652100",
		"name": "吐鲁番市",
		"alias": "吐鲁番",
		"pinyin": "TuLuFan",
		"abbr": "TLF",
		"zip": "838000",
		"level": 3
	},
	{
		"code": "652122",
		"parent_code": "652100",
		"name": "鄯善县",
		"alias": "鄯善",
		"pinyin": "ShanShan",
		"abbr": "SS",
		"zip": "838200",
		"level": 3
	},
	{
		"code": "652123",
		"parent_code": "652100",
		"name": "托克逊县",
		"alias": "托克逊",
		"pinyin": "TuoKeXun",
		"abbr": "TKX",
		"zip": "838100",
		"level": 3
	},
	{
		"code": "652200",
		"parent_code": "650000",
		"name": "哈密地区",
		"alias": "哈密地区",
		"pinyin": "HaMiDeQu",
		"abbr": "HMDQ",
		"zip": "839000",
		"level": 2
	},
	{
		"code": "652201",
		"parent_code": "652200",
		"name": "哈密市",
		"alias": "哈密",
		"pinyin": "HaMi",
		"abbr": "HM",
		"zip": "839000",
		"level": 3
	},
	{
		"code": "652222",
		"parent_code": "652200",
		"name": "巴里坤哈萨克自治县",
		"alias": "巴里坤哈萨克",
		"pinyin": "BaLiKunHaSaKe",
		"abbr": "BLKHSK",
		"zip": "839200",
		"level": 3
	},
	{
		"code": "652223",
		"parent_code": "652200",
		"name": "伊吾县",
		"alias": "伊吾",
		"pinyin": "YiWu",
		"abbr": "YW",
		"zip": "839300",
		"level": 3
	},
	{
		"code": "652300",
		"parent_code": "650000",
		"name": "昌吉回族自治州",
		"alias": "昌吉回族",
		"pinyin": "ChangJiHuiZu",
		"abbr": "CJHZ",
		"zip": "831100",
		"level": 2
	},
	{
		"code": "652301",
		"parent_code": "652300",
		"name": "昌吉市",
		"alias": "昌吉",
		"pinyin": "ChangJi",
		"abbr": "CJ",
		"zip": "831100",
		"level": 3
	},
	{
		"code": "652302",
		"parent_code": "652300",
		"name": "阜康市",
		"alias": "阜康",
		"pinyin": "FuKang",
		"abbr": "FK",
		"zip": "831500",
		"level": 3
	},
	{
		"code": "652323",
		"parent_code": "652300",
		"name": "呼图壁县",
		"alias": "呼图壁",
		"pinyin": "HuTuBi",
		"abbr": "HTB",
		"zip": "831200",
		"level": 3
	},
	{
		"code": "652324",
		"parent_code": "652300",
		"name": "玛纳斯县",
		"alias": "玛纳斯",
		"pinyin": "MaNaSi",
		"abbr": "MNS",
		"zip": "832200",
		"level": 3
	},
	{
		"code": "652325",
		"parent_code": "652300",
		"name": "奇台县",
		"alias": "奇台",
		"pinyin": "QiTai",
		"abbr": "QT",
		"zip": "831800",
		"level": 3
	},
	{
		"code": "652327",
		"parent_code": "652300",
		"name": "吉木萨尔县",
		"alias": "吉木萨尔",
		"pinyin": "JiMuSaEr",
		"abbr": "JMSE",
		"zip": "831700",
		"level": 3
	},
	{
		"code": "652328",
		"parent_code": "652300",
		"name": "木垒哈萨克自治县",
		"alias": "木垒哈萨克",
		"pinyin": "MuLeiHaSaKe",
		"abbr": "MLHSK",
		"zip": "831900",
		"level": 3
	},
	{
		"code": "652700",
		"parent_code": "650000",
		"name": "博尔塔拉蒙古自治州",
		"alias": "博尔塔拉蒙古",
		"pinyin": "BoErTaLaMengGu",
		"abbr": "BETLMG",
		"zip": "833400",
		"level": 2
	},
	{
		"code": "652701",
		"parent_code": "652700",
		"name": "博乐市",
		"alias": "博乐",
		"pinyin": "BoLe",
		"abbr": "BL",
		"zip": "833400",
		"level": 3
	},
	{
		"code": "652722",
		"parent_code": "652700",
		"name": "精河县",
		"alias": "精河",
		"pinyin": "JingHe",
		"abbr": "JH",
		"zip": "833300",
		"level": 3
	},
	{
		"code": "652723",
		"parent_code": "652700",
		"name": "温泉县",
		"alias": "温泉",
		"pinyin": "WenQuan",
		"abbr": "WQ",
		"zip": "833500",
		"level": 3
	},
	{
		"code": "652800",
		"parent_code": "650000",
		"name": "巴音郭楞蒙古自治州",
		"alias": "巴音郭楞蒙古",
		"pinyin": "BaYinGuoLengMengGu",
		"abbr": "BYGLMG",
		"zip": "841000",
		"level": 2
	},
	{
		"code": "652801",
		"parent_code": "652800",
		"name": "库尔勒市",
		"alias": "库尔勒",
		"pinyin": "KuErLei",
		"abbr": "KEL",
		"zip": "841000",
		"level": 3
	},
	{
		"code": "652822",
		"parent_code": "652800",
		"name": "轮台县",
		"alias": "轮台",
		"pinyin": "LunTai",
		"abbr": "LT",
		"zip": "841600",
		"level": 3
	},
	{
		"code": "652823",
		"parent_code": "652800",
		"name": "尉犁县",
		"alias": "尉犁",
		"pinyin": "WeiLi",
		"abbr": "WL",
		"zip": "841500",
		"level": 3
	},
	{
		"code": "652824",
		"parent_code": "652800",
		"name": "若羌县",
		"alias": "若羌",
		"pinyin": "RuoQiang",
		"abbr": "RQ",
		"zip": "841800",
		"level": 3
	},
	{
		"code": "652825",
		"parent_code": "652800",
		"name": "且末县",
		"alias": "且末",
		"pinyin": "QieMo",
		"abbr": "QM",
		"zip": "841900",
		"level": 3
	},
	{
		"code": "652826",
		"parent_code": "652800",
		"name": "焉耆回族自治县",
		"alias": "焉耆回族",
		"pinyin": "YanQiHuiZu",
		"abbr": "YQHZ",
		"zip": "841100",
		"level": 3
	},
	{
		"code": "652827",
		"parent_code": "652800",
		"name": "和静县",
		"alias": "和静",
		"pinyin": "HeJing",
		"abbr": "HJ",
		"zip": "841300",
		"level": 3
	},
	{
		"code": "652828",
		"parent_code": "652800",
		"name": "和硕县",
		"alias": "和硕",
		"pinyin": "HeShuo",
		"abbr": "HS",
		"zip": "841200",
		"level": 3
	},
	{
		"code": "652829",
		"parent_code": "652800",
		"name": "博湖县",
		"alias": "博湖",
		"pinyin": "BoHu",
		"abbr": "BH",
		"zip": "841400",
		"level": 3
	},
	{
		"code": "652900",
		"parent_code": "650000",
		"name": "阿克苏地区",
		"alias": "阿克苏地区",
		"pinyin": "AKeSuDeQu",
		"abbr": "AKSDQ",
		"zip": "843000",
		"level": 2
	},
	{
		"code": "652901",
		"parent_code": "652900",
		"name": "阿克苏市",
		"alias": "阿克苏",
		"pinyin": "AKeSu",
		"abbr": "AKS",
		"zip": "843000",
		"level": 3
	},
	{
		"code": "652922",
		"parent_code": "652900",
		"name": "温宿县",
		"alias": "温宿",
		"pinyin": "WenSu",
		"abbr": "WS",
		"zip": "843100",
		"level": 3
	},
	{
		"code": "652923",
		"parent_code": "652900",
		"name": "库车县",
		"alias": "库车",
		"pinyin": "KuChe",
		"abbr": "KC",
		"zip": "842000",
		"level": 3
	},
	{
		"code": "652924",
		"parent_code": "652900",
		"name": "沙雅县",
		"alias": "沙雅",
		"pinyin": "ShaYa",
		"abbr": "SY",
		"zip": "842200",
		"level": 3
	},
	{
		"code": "652925",
		"parent_code": "652900",
		"name": "新和县",
		"alias": "新和",
		"pinyin": "XinHe",
		"abbr": "XH",
		"zip": "842100",
		"level": 3
	},
	{
		"code": "652926",
		"parent_code": "652900",
		"name": "拜城县",
		"alias": "拜城",
		"pinyin": "BaiCheng",
		"abbr": "BC",
		"zip": "842300",
		"level": 3
	},
	{
		"code": "652927",
		"parent_code": "652900",
		"name": "乌什县",
		"alias": "乌什",
		"pinyin": "WuShen",
		"abbr": "WS",
		"zip": "843400",
		"level": 3
	},
	{
		"code": "652928",
		"parent_code": "652900",
		"name": "阿瓦提县",
		"alias": "阿瓦提",
		"pinyin": "AWaTi",
		"abbr": "AWT",
		"zip": "843200",
		"level": 3
	},
	{
		"code": "652929",
		"parent_code": "652900",
		"name": "柯坪县",
		"alias": "柯坪",
		"pinyin": "KePing",
		"abbr": "KP",
		"zip": "843600",
		"level": 3
	},
	{
		"code": "653000",
		"parent_code": "650000",
		"name": "克孜勒苏柯尔克孜自治州",
		"alias": "克孜勒苏柯尔克孜",
		"pinyin": "KeZiLeiSuKeErKeZi",
		"abbr": "KZLSKEKZ",
		"zip": "845350",
		"level": 2
	},
	{
		"code": "653001",
		"parent_code": "653000",
		"name": "阿图什市",
		"alias": "阿图什",
		"pinyin": "ATuShen",
		"abbr": "ATS",
		"zip": "845350",
		"level": 3
	},
	{
		"code": "653022",
		"parent_code": "653000",
		"name": "阿克陶县",
		"alias": "阿克陶",
		"pinyin": "AKeTao",
		"abbr": "AKT",
		"zip": "845550",
		"level": 3
	},
	{
		"code": "653023",
		"parent_code": "653000",
		"name": "阿合奇县",
		"alias": "阿合奇",
		"pinyin": "AHeQi",
		"abbr": "AHQ",
		"zip": "843500",
		"level": 3
	},
	{
		"code": "653024",
		"parent_code": "653000",
		"name": "乌恰县",
		"alias": "乌恰",
		"pinyin": "WuQia",
		"abbr": "WQ",
		"zip": "845450",
		"level": 3
	},
	{
		"code": "653100",
		"parent_code": "650000",
		"name": "喀什地区",
		"alias": "喀什地区",
		"pinyin": "KaShenDeQu",
		"abbr": "KSDQ",
		"zip": "844000",
		"level": 2
	},
	{
		"code": "653101",
		"parent_code": "653100",
		"name": "喀什市",
		"alias": "喀什",
		"pinyin": "KaShen",
		"abbr": "KS",
		"zip": "844000",
		"level": 3
	},
	{
		"code": "653121",
		"parent_code": "653100",
		"name": "疏附县",
		"alias": "疏附",
		"pinyin": "ShuFu",
		"abbr": "SF",
		"zip": "844100",
		"level": 3
	},
	{
		"code": "653122",
		"parent_code": "653100",
		"name": "疏勒县",
		"alias": "疏勒",
		"pinyin": "ShuLei",
		"abbr": "SL",
		"zip": "844200",
		"level": 3
	},
	{
		"code": "653123",
		"parent_code": "653100",
		"name": "英吉沙县",
		"alias": "英吉沙",
		"pinyin": "YingJiSha",
		"abbr": "YJS",
		"zip": "844500",
		"level": 3
	},
	{
		"code": "653124",
		"parent_code": "653100",
		"name": "泽普县",
		"alias": "泽普",
		"pinyin": "ZePu",
		"abbr": "ZP",
		"zip": "844800",
		"level": 3
	},
	{
		"code": "653125",
		"parent_code": "653100",
		"name": "莎车县",
		"alias": "莎车",
		"pinyin": "ShaChe",
		"abbr": "SC",
		"zip": "844700",
		"level": 3
	},
	{
		"code": "653126",
		"parent_code": "653100",
		"name": "叶城县",
		"alias": "叶城",
		"pinyin": "YeCheng",
		"abbr": "YC",
		"zip": "844900",
		"level": 3
	},
	{
		"code": "653127",
		"parent_code": "653100",
		"name": "麦盖提县",
		"alias": "麦盖提",
		"pinyin": "MaiGaiTi",
		"abbr": "MGT",
		"zip": "844600",
		"level": 3
	},
	{
		"code": "653128",
		"parent_code": "653100",
		"name": "岳普湖县",
		"alias": "岳普湖",
		"pinyin": "YuePuHu",
		"abbr": "YPH",
		"zip": "844400",
		"level": 3
	},
	{
		"code": "653129",
		"parent_code": "653100",
		"name": "伽师县",
		"alias": "伽师",
		"pinyin": "JiaShi",
		"abbr": "JS",
		"zip": "844300",
		"level": 3
	},
	{
		"code": "653130",
		"parent_code": "653100",
		"name": "巴楚县",
		"alias": "巴楚",
		"pinyin": "BaChu",
		"abbr": "BC",
		"zip": "843800",
		"level": 3
	},
	{
		"code": "653131",
		"parent_code": "653100",
		"name": "塔什库尔干塔吉克自治县",
		"alias": "塔什库尔干塔吉克",
		"pinyin": "TaShenKuErGanTaJiKe",
		"abbr": "TSKEGTJK",
		"zip": "845250",
		"level": 3
	},
	{
		"code": "653200",
		"parent_code": "650000",
		"name": "和田地区",
		"alias": "和田地区",
		"pinyin": "HeTianDeQu",
		"abbr": "HTDQ",
		"zip": "848000",
		"level": 2
	},
	{
		"code": "653201",
		"parent_code": "653200",
		"name": "和田市",
		"alias": "和田",
		"pinyin": "HeTian",
		"abbr": "HT",
		"zip": "848000",
		"level": 3
	},
	{
		"code": "653221",
		"parent_code": "653200",
		"name": "和田县",
		"alias": "和田",
		"pinyin": "HeTian",
		"abbr": "HT",
		"zip": "848000",
		"level": 3
	},
	{
		"code": "653222",
		"parent_code": "653200",
		"name": "墨玉县",
		"alias": "墨玉",
		"pinyin": "MoYu",
		"abbr": "MY",
		"zip": "848100",
		"level": 3
	},
	{
		"code": "653223",
		"parent_code": "653200",
		"name": "皮山县",
		"alias": "皮山",
		"pinyin": "PiShan",
		"abbr": "PS",
		"zip": "845150",
		"level": 3
	},
	{
		"code": "653224",
		"parent_code": "653200",
		"name": "洛浦县",
		"alias": "洛浦",
		"pinyin": "LuoPu",
		"abbr": "LP",
		"zip": "848200",
		"level": 3
	},
	{
		"code": "653225",
		"parent_code": "653200",
		"name": "策勒县",
		"alias": "策勒",
		"pinyin": "CeLei",
		"abbr": "CL",
		"zip": "848300",
		"level": 3
	},
	{
		"code": "653226",
		"parent_code": "653200",
		"name": "于田县",
		"alias": "于田",
		"pinyin": "YuTian",
		"abbr": "YT",
		"zip": "848400",
		"level": 3
	},
	{
		"code": "653227",
		"parent_code": "653200",
		"name": "民丰县",
		"alias": "民丰",
		"pinyin": "MinFeng",
		"abbr": "MF",
		"zip": "848500",
		"level": 3
	},
	{
		"code": "654000",
		"parent_code": "650000",
		"name": "伊犁哈萨克自治州",
		"alias": "伊犁哈萨克",
		"pinyin": "YiLiHaSaKe",
		"abbr": "YLHSK",
		"zip": "835000",
		"level": 2
	},
	{
		"code": "654002",
		"parent_code": "654000",
		"name": "伊宁市",
		"alias": "伊宁",
		"pinyin": "YiNing",
		"abbr": "YN",
		"zip": "835000",
		"level": 3
	},
	{
		"code": "654003",
		"parent_code": "654000",
		"name": "奎屯市",
		"alias": "奎屯",
		"pinyin": "KuiTun",
		"abbr": "KT",
		"zip": "833200",
		"level": 3
	},
	{
		"code": "654021",
		"parent_code": "654000",
		"name": "伊宁县",
		"alias": "伊宁",
		"pinyin": "YiNing",
		"abbr": "YN",
		"zip": "835100",
		"level": 3
	},
	{
		"code": "654022",
		"parent_code": "654000",
		"name": "察布查尔锡伯自治县",
		"alias": "察布查尔锡伯",
		"pinyin": "ChaBuChaErXiBo",
		"abbr": "CBCEXB",
		"zip": "835300",
		"level": 3
	},
	{
		"code": "654023",
		"parent_code": "654000",
		"name": "霍城县",
		"alias": "霍城",
		"pinyin": "HuoCheng",
		"abbr": "HC",
		"zip": "835200",
		"level": 3
	},
	{
		"code": "654024",
		"parent_code": "654000",
		"name": "巩留县",
		"alias": "巩留",
		"pinyin": "GongLiu",
		"abbr": "GL",
		"zip": "835400",
		"level": 3
	},
	{
		"code": "654025",
		"parent_code": "654000",
		"name": "新源县",
		"alias": "新源",
		"pinyin": "XinYuan",
		"abbr": "XY",
		"zip": "835800",
		"level": 3
	},
	{
		"code": "654026",
		"parent_code": "654000",
		"name": "昭苏县",
		"alias": "昭苏",
		"pinyin": "ZhaoSu",
		"abbr": "ZS",
		"zip": "835600",
		"level": 3
	},
	{
		"code": "654027",
		"parent_code": "654000",
		"name": "特克斯县",
		"alias": "特克斯",
		"pinyin": "TeKeSi",
		"abbr": "TKS",
		"zip": "835500",
		"level": 3
	},
	{
		"code": "654028",
		"parent_code": "654000",
		"name": "尼勒克县",
		"alias": "尼勒克",
		"pinyin": "NiLeiKe",
		"abbr": "NLK",
		"zip": "835700",
		"level": 3
	},
	{
		"code": "654200",
		"parent_code": "650000",
		"name": "塔城地区",
		"alias": "塔城地区",
		"pinyin": "TaChengDeQu",
		"abbr": "TCDQ",
		"zip": "834700",
		"level": 2
	},
	{
		"code": "654201",
		"parent_code": "654200",
		"name": "塔城市",
		"alias": "塔城",
		"pinyin": "TaCheng",
		"abbr": "TC",
		"zip": "834700",
		"level": 3
	},
	{
		"code": "654202",
		"parent_code": "654200",
		"name": "乌苏市",
		"alias": "乌苏",
		"pinyin": "WuSu",
		"abbr": "WS",
		"zip": "833000",
		"level": 3
	},
	{
		"code": "654221",
		"parent_code": "654200",
		"name": "额敏县",
		"alias": "额敏",
		"pinyin": "EMin",
		"abbr": "EM",
		"zip": "834600",
		"level": 3
	},
	{
		"code": "654223",
		"parent_code": "654200",
		"name": "沙湾县",
		"alias": "沙湾",
		"pinyin": "ShaWan",
		"abbr": "SW",
		"zip": "832100",
		"level": 3
	},
	{
		"code": "654224",
		"parent_code": "654200",
		"name": "托里县",
		"alias": "托里",
		"pinyin": "TuoLi",
		"abbr": "TL",
		"zip": "834500",
		"level": 3
	},
	{
		"code": "654225",
		"parent_code": "654200",
		"name": "裕民县",
		"alias": "裕民",
		"pinyin": "YuMin",
		"abbr": "YM",
		"zip": "834800",
		"level": 3
	},
	{
		"code": "654226",
		"parent_code": "654200",
		"name": "和布克赛尔蒙古自治县",
		"alias": "和布克赛尔蒙古",
		"pinyin": "HeBuKeSaiErMengGu",
		"abbr": "HBKSEMG",
		"zip": "834400",
		"level": 3
	},
	{
		"code": "654300",
		"parent_code": "650000",
		"name": "阿勒泰地区",
		"alias": "阿勒泰地区",
		"pinyin": "ALeiTaiDeQu",
		"abbr": "ALTDQ",
		"zip": "836500",
		"level": 2
	},
	{
		"code": "654301",
		"parent_code": "654300",
		"name": "阿勒泰市",
		"alias": "阿勒泰",
		"pinyin": "ALeiTai",
		"abbr": "ALT",
		"zip": "836500",
		"level": 3
	},
	{
		"code": "654321",
		"parent_code": "654300",
		"name": "布尔津县",
		"alias": "布尔津",
		"pinyin": "BuErJin",
		"abbr": "BEJ",
		"zip": "836600",
		"level": 3
	},
	{
		"code": "654322",
		"parent_code": "654300",
		"name": "富蕴县",
		"alias": "富蕴",
		"pinyin": "FuYun",
		"abbr": "FY",
		"zip": "836100",
		"level": 3
	},
	{
		"code": "654323",
		"parent_code": "654300",
		"name": "福海县",
		"alias": "福海",
		"pinyin": "FuHai",
		"abbr": "FH",
		"zip": "836400",
		"level": 3
	},
	{
		"code": "654324",
		"parent_code": "654300",
		"name": "哈巴河县",
		"alias": "哈巴河",
		"pinyin": "HaBaHe",
		"abbr": "HBH",
		"zip": "836700",
		"level": 3
	},
	{
		"code": "654325",
		"parent_code": "654300",
		"name": "青河县",
		"alias": "青河",
		"pinyin": "QingHe",
		"abbr": "QH",
		"zip": "836200",
		"level": 3
	},
	{
		"code": "654326",
		"parent_code": "654300",
		"name": "吉木乃县",
		"alias": "吉木乃",
		"pinyin": "JiMuNai",
		"abbr": "JMN",
		"zip": "836800",
		"level": 3
	},
	{
		"code": "659001",
		"parent_code": "650000",
		"name": "石河子市",
		"alias": "石河子",
		"pinyin": "ShiHeZi",
		"abbr": "SHZ",
		"zip": "832000",
		"level": 2
	},
	{
		"code": "659002",
		"parent_code": "650000",
		"name": "阿拉尔市",
		"alias": "阿拉尔",
		"pinyin": "ALaEr",
		"abbr": "ALE",
		"zip": "843300",
		"level": 2
	},
	{
		"code": "659003",
		"parent_code": "650000",
		"name": "图木舒克市",
		"alias": "图木舒克",
		"pinyin": "TuMuShuKe",
		"abbr": "TMSK",
		"zip": "843806",
		"level": 2
	},
	{
		"code": "659004",
		"parent_code": "650000",
		"name": "五家渠市",
		"alias": "五家渠",
		"pinyin": "WuJiaQu",
		"abbr": "WJQ",
		"zip": "831300",
		"level": 2
	},
	{
		"code": "710000",
		"parent_code": null,
		"name": "台湾省",
		"alias": "台湾",
		"pinyin": "TaiWan",
		"abbr": "TW",
		"zip": "",
		"level": 1
	},
	{
		"code": "710100",
		"parent_code": "710000",
		"name": "台北市",
		"alias": "台北",
		"pinyin": "TaiBei",
		"abbr": "TB",
		"zip": "",
		"level": 2
	},
	{
		"code": "710101",
		"parent_code": "710100",
		"name": "中正区",
		"alias": "中正区",
		"pinyin": "ZhongZhengQu",
		"abbr": "ZZQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710102",
		"parent_code": "710100",
		"name": "大同区",
		"alias": "大同区",
		"pinyin": "DaTongQu",
		"abbr": "DTQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710103",
		"parent_code": "710100",
		"name": "中山区",
		"alias": "中山区",
		"pinyin": "ZhongShanQu",
		"abbr": "ZSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710104",
		"parent_code": "710100",
		"name": "松山区",
		"alias": "松山区",
		"pinyin": "SongShanQu",
		"abbr": "SSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710105",
		"parent_code": "710100",
		"name": "大安区",
		"alias": "大安区",
		"pinyin": "DaAnQu",
		"abbr": "DAQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710106",
		"parent_code": "710100",
		"name": "万华区",
		"alias": "万华区",
		"pinyin": "WanHuaQu",
		"abbr": "WHQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710107",
		"parent_code": "710100",
		"name": "信义区",
		"alias": "信义区",
		"pinyin": "XinYiQu",
		"abbr": "XYQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710108",
		"parent_code": "710100",
		"name": "士林区",
		"alias": "士林区",
		"pinyin": "ShiLinQu",
		"abbr": "SLQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710109",
		"parent_code": "710100",
		"name": "北投区",
		"alias": "北投区",
		"pinyin": "BeiTouQu",
		"abbr": "BTQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710110",
		"parent_code": "710100",
		"name": "内湖区",
		"alias": "内湖区",
		"pinyin": "NeiHuQu",
		"abbr": "NHQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710111",
		"parent_code": "710100",
		"name": "南港区",
		"alias": "南港区",
		"pinyin": "NanGangQu",
		"abbr": "NGQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710112",
		"parent_code": "710100",
		"name": "文山区",
		"alias": "文山区",
		"pinyin": "WenShanQu",
		"abbr": "WSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710200",
		"parent_code": "710000",
		"name": "高雄市",
		"alias": "高雄",
		"pinyin": "GaoXiong",
		"abbr": "GX",
		"zip": "",
		"level": 2
	},
	{
		"code": "710201",
		"parent_code": "710200",
		"name": "新兴区",
		"alias": "新兴区",
		"pinyin": "XinXingQu",
		"abbr": "XXQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710202",
		"parent_code": "710200",
		"name": "前金区",
		"alias": "前金区",
		"pinyin": "QianJinQu",
		"abbr": "QJQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710203",
		"parent_code": "710200",
		"name": "芩雅区",
		"alias": "芩雅区",
		"pinyin": "QinYaQu",
		"abbr": "QYQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710204",
		"parent_code": "710200",
		"name": "盐埕区",
		"alias": "盐埕区",
		"pinyin": "YanChengQu",
		"abbr": "YCQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710205",
		"parent_code": "710200",
		"name": "鼓山区",
		"alias": "鼓山区",
		"pinyin": "GuShanQu",
		"abbr": "GSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710206",
		"parent_code": "710200",
		"name": "旗津区",
		"alias": "旗津区",
		"pinyin": "QiJinQu",
		"abbr": "QJQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710207",
		"parent_code": "710200",
		"name": "前镇区",
		"alias": "前镇区",
		"pinyin": "QianZhenQu",
		"abbr": "QZQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710208",
		"parent_code": "710200",
		"name": "三民区",
		"alias": "三民区",
		"pinyin": "SanMinQu",
		"abbr": "SMQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710209",
		"parent_code": "710200",
		"name": "左营区",
		"alias": "左营区",
		"pinyin": "ZuoYingQu",
		"abbr": "ZYQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710210",
		"parent_code": "710200",
		"name": "楠梓区",
		"alias": "楠梓区",
		"pinyin": "NanZiQu",
		"abbr": "NZQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710211",
		"parent_code": "710200",
		"name": "小港区",
		"alias": "小港区",
		"pinyin": "XiaoGangQu",
		"abbr": "XGQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710300",
		"parent_code": "710000",
		"name": "台南市",
		"alias": "台南",
		"pinyin": "TaiNan",
		"abbr": "TN",
		"zip": "",
		"level": 2
	},
	{
		"code": "710301",
		"parent_code": "710300",
		"name": "中西区",
		"alias": "中西区",
		"pinyin": "ZhongXiQu",
		"abbr": "ZXQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710302",
		"parent_code": "710300",
		"name": "东区",
		"alias": "东区",
		"pinyin": "DongQu",
		"abbr": "DQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710303",
		"parent_code": "710300",
		"name": "南区",
		"alias": "南区",
		"pinyin": "NanQu",
		"abbr": "NQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710304",
		"parent_code": "710300",
		"name": "北区",
		"alias": "北区",
		"pinyin": "BeiQu",
		"abbr": "BQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710305",
		"parent_code": "710300",
		"name": "安平区",
		"alias": "安平区",
		"pinyin": "AnPingQu",
		"abbr": "APQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710306",
		"parent_code": "710300",
		"name": "安南区",
		"alias": "安南区",
		"pinyin": "AnNanQu",
		"abbr": "ANQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710400",
		"parent_code": "710000",
		"name": "台中市",
		"alias": "台中",
		"pinyin": "TaiZhong",
		"abbr": "TZ",
		"zip": "",
		"level": 2
	},
	{
		"code": "710401",
		"parent_code": "710400",
		"name": "中区",
		"alias": "中区",
		"pinyin": "ZhongQu",
		"abbr": "ZQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710402",
		"parent_code": "710400",
		"name": "东区",
		"alias": "东区",
		"pinyin": "DongQu",
		"abbr": "DQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710403",
		"parent_code": "710400",
		"name": "南区",
		"alias": "南区",
		"pinyin": "NanQu",
		"abbr": "NQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710404",
		"parent_code": "710400",
		"name": "西区",
		"alias": "西区",
		"pinyin": "XiQu",
		"abbr": "XQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710405",
		"parent_code": "710400",
		"name": "北区",
		"alias": "北区",
		"pinyin": "BeiQu",
		"abbr": "BQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710406",
		"parent_code": "710400",
		"name": "北屯区",
		"alias": "北屯区",
		"pinyin": "BeiTunQu",
		"abbr": "BTQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710407",
		"parent_code": "710400",
		"name": "西屯区",
		"alias": "西屯区",
		"pinyin": "XiTunQu",
		"abbr": "XTQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710408",
		"parent_code": "710400",
		"name": "南屯区",
		"alias": "南屯区",
		"pinyin": "NanTunQu",
		"abbr": "NTQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710500",
		"parent_code": "710000",
		"name": "金门县",
		"alias": "金门",
		"pinyin": "JinMen",
		"abbr": "JM",
		"zip": "",
		"level": 2
	},
	{
		"code": "710600",
		"parent_code": "710000",
		"name": "南投县",
		"alias": "南投",
		"pinyin": "NanTou",
		"abbr": "NT",
		"zip": "",
		"level": 2
	},
	{
		"code": "710700",
		"parent_code": "710000",
		"name": "基隆市",
		"alias": "基隆",
		"pinyin": "JiLong",
		"abbr": "JL",
		"zip": "",
		"level": 2
	},
	{
		"code": "710701",
		"parent_code": "710700",
		"name": "仁爱区",
		"alias": "仁爱区",
		"pinyin": "RenAiQu",
		"abbr": "RAQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710702",
		"parent_code": "710700",
		"name": "信义区",
		"alias": "信义区",
		"pinyin": "XinYiQu",
		"abbr": "XYQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810202",
		"parent_code": "810200",
		"name": "油尖旺区",
		"alias": "油尖旺区",
		"pinyin": "YouJianWangQu",
		"abbr": "YJWQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810203",
		"parent_code": "810200",
		"name": "深水埗区",
		"alias": "深水埗区",
		"pinyin": "ShenShuiBuQu",
		"abbr": "SSBQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810204",
		"parent_code": "810200",
		"name": "黄大仙区",
		"alias": "黄大仙区",
		"pinyin": "HuangDaXianQu",
		"abbr": "HDXQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810205",
		"parent_code": "810200",
		"name": "观塘区",
		"alias": "观塘区",
		"pinyin": "GuanTangQu",
		"abbr": "GTQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810300",
		"parent_code": "810000",
		"name": "新界",
		"alias": "新界",
		"pinyin": "XinJie",
		"abbr": "XJ",
		"zip": "",
		"level": 2
	},
	{
		"code": "810301",
		"parent_code": "810300",
		"name": "北区",
		"alias": "北区",
		"pinyin": "BeiQu",
		"abbr": "BQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810302",
		"parent_code": "810300",
		"name": "大埔区",
		"alias": "大埔区",
		"pinyin": "DaBuQu",
		"abbr": "DBQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810303",
		"parent_code": "810300",
		"name": "沙田区",
		"alias": "沙田区",
		"pinyin": "ShaTianQu",
		"abbr": "STQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810304",
		"parent_code": "810300",
		"name": "西贡区",
		"alias": "西贡区",
		"pinyin": "XiGongQu",
		"abbr": "XGQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810305",
		"parent_code": "810300",
		"name": "元朗区",
		"alias": "元朗区",
		"pinyin": "YuanLangQu",
		"abbr": "YLQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810306",
		"parent_code": "810300",
		"name": "屯门区",
		"alias": "屯门区",
		"pinyin": "TunMenQu",
		"abbr": "TMQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810307",
		"parent_code": "810300",
		"name": "荃湾区",
		"alias": "荃湾区",
		"pinyin": "QuanWanQu",
		"abbr": "QWQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810308",
		"parent_code": "810300",
		"name": "葵青区",
		"alias": "葵青区",
		"pinyin": "KuiQingQu",
		"abbr": "KQQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810309",
		"parent_code": "810300",
		"name": "离岛区",
		"alias": "离岛区",
		"pinyin": "LiDaoQu",
		"abbr": "LDQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "820000",
		"parent_code": null,
		"name": "澳门特别行政区",
		"alias": "澳门",
		"pinyin": "Macau",
		"abbr": "MAC",
		"zip": "",
		"level": 1
	},
	{
		"code": "820100",
		"parent_code": "820000",
		"name": "澳门半岛",
		"alias": "澳门半岛",
		"pinyin": "AoMenBanDao",
		"abbr": "AMBD",
		"zip": "",
		"level": 2
	},
	{
		"code": "820200",
		"parent_code": "820000",
		"name": "离岛",
		"alias": "离岛",
		"pinyin": "LiDao",
		"abbr": "LD",
		"zip": "",
		"level": 2
	},
	{
		"code": "710703",
		"parent_code": "710700",
		"name": "中正区",
		"alias": "中正区",
		"pinyin": "ZhongZhengQu",
		"abbr": "ZZQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710704",
		"parent_code": "710700",
		"name": "中山区",
		"alias": "中山区",
		"pinyin": "ZhongShanQu",
		"abbr": "ZSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710705",
		"parent_code": "710700",
		"name": "安乐区",
		"alias": "安乐区",
		"pinyin": "AnLeQu",
		"abbr": "ALQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710706",
		"parent_code": "710700",
		"name": "暖暖区",
		"alias": "暖暖区",
		"pinyin": "NuanNuanQu",
		"abbr": "NNQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710707",
		"parent_code": "710700",
		"name": "七堵区",
		"alias": "七堵区",
		"pinyin": "QiDuQu",
		"abbr": "QDQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710800",
		"parent_code": "710000",
		"name": "新竹市",
		"alias": "新竹",
		"pinyin": "XinZhu",
		"abbr": "XZ",
		"zip": "",
		"level": 2
	},
	{
		"code": "710801",
		"parent_code": "710800",
		"name": "东区",
		"alias": "东区",
		"pinyin": "DongQu",
		"abbr": "DQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710802",
		"parent_code": "710800",
		"name": "北区",
		"alias": "北区",
		"pinyin": "BeiQu",
		"abbr": "BQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710803",
		"parent_code": "710800",
		"name": "香山区",
		"alias": "香山区",
		"pinyin": "XiangShanQu",
		"abbr": "XSQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710900",
		"parent_code": "710000",
		"name": "嘉义市",
		"alias": "嘉义",
		"pinyin": "JiaYi",
		"abbr": "JY",
		"zip": "",
		"level": 2
	},
	{
		"code": "710901",
		"parent_code": "710900",
		"name": "东区",
		"alias": "东区",
		"pinyin": "DongQu",
		"abbr": "DQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "710902",
		"parent_code": "710900",
		"name": "西区",
		"alias": "西区",
		"pinyin": "XiQu",
		"abbr": "XQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "711100",
		"parent_code": "710000",
		"name": "新北市",
		"alias": "新北",
		"pinyin": "XinBei",
		"abbr": "XB",
		"zip": "",
		"level": 2
	},
	{
		"code": "711200",
		"parent_code": "710000",
		"name": "宜兰县",
		"alias": "宜兰",
		"pinyin": "YiLan",
		"abbr": "YL",
		"zip": "",
		"level": 2
	},
	{
		"code": "711300",
		"parent_code": "710000",
		"name": "新竹县",
		"alias": "新竹",
		"pinyin": "XinZhu",
		"abbr": "XZ",
		"zip": "",
		"level": 2
	},
	{
		"code": "711400",
		"parent_code": "710000",
		"name": "桃园县",
		"alias": "桃园",
		"pinyin": "TaoYuan",
		"abbr": "TY",
		"zip": "",
		"level": 2
	},
	{
		"code": "711500",
		"parent_code": "710000",
		"name": "苗栗县",
		"alias": "苗栗",
		"pinyin": "MiaoLi",
		"abbr": "ML",
		"zip": "",
		"level": 2
	},
	{
		"code": "711700",
		"parent_code": "710000",
		"name": "彰化县",
		"alias": "彰化",
		"pinyin": "ZhangHua",
		"abbr": "ZH",
		"zip": "",
		"level": 2
	},
	{
		"code": "711900",
		"parent_code": "710000",
		"name": "嘉义县",
		"alias": "嘉义",
		"pinyin": "JiaYi",
		"abbr": "JY",
		"zip": "",
		"level": 2
	},
	{
		"code": "712100",
		"parent_code": "710000",
		"name": "云林县",
		"alias": "云林",
		"pinyin": "YunLin",
		"abbr": "YL",
		"zip": "",
		"level": 2
	},
	{
		"code": "712400",
		"parent_code": "710000",
		"name": "屏东县",
		"alias": "屏东",
		"pinyin": "PingDong",
		"abbr": "PD",
		"zip": "",
		"level": 2
	},
	{
		"code": "712500",
		"parent_code": "710000",
		"name": "台东县",
		"alias": "台东",
		"pinyin": "TaiDong",
		"abbr": "TD",
		"zip": "",
		"level": 2
	},
	{
		"code": "712600",
		"parent_code": "710000",
		"name": "花莲县",
		"alias": "花莲",
		"pinyin": "HuaLian",
		"abbr": "HL",
		"zip": "",
		"level": 2
	},
	{
		"code": "712700",
		"parent_code": "710000",
		"name": "澎湖县",
		"alias": "澎湖",
		"pinyin": "PengHu",
		"abbr": "PH",
		"zip": "",
		"level": 2
	},
	{
		"code": "810000",
		"parent_code": null,
		"name": "香港特别行政区",
		"alias": "香港",
		"pinyin": "HongKong",
		"abbr": "HK",
		"zip": "",
		"level": 1
	},
	{
		"code": "810100",
		"parent_code": "810000",
		"name": "香港岛",
		"alias": "香港岛",
		"pinyin": "XiangGangDao",
		"abbr": "XGD",
		"zip": "",
		"level": 2
	},
	{
		"code": "810101",
		"parent_code": "810100",
		"name": "中西区",
		"alias": "中西区",
		"pinyin": "ZhongXiQu",
		"abbr": "ZXQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810102",
		"parent_code": "810100",
		"name": "湾仔",
		"alias": "湾仔",
		"pinyin": "WanZi",
		"abbr": "WZ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810103",
		"parent_code": "810100",
		"name": "东区",
		"alias": "东区",
		"pinyin": "DongQu",
		"abbr": "DQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810104",
		"parent_code": "810100",
		"name": "南区",
		"alias": "南区",
		"pinyin": "NanQu",
		"abbr": "NQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "810200",
		"parent_code": "810000",
		"name": "九龙",
		"alias": "九龙",
		"pinyin": "JiuLong",
		"abbr": "JL",
		"zip": "",
		"level": 2
	},
	{
		"code": "810201",
		"parent_code": "810200",
		"name": "九龙城区",
		"alias": "九龙城区",
		"pinyin": "JiuLongChengQu",
		"abbr": "JLCQ",
		"zip": "",
		"level": 3
	},
	{
		"code": "150703",
		"parent_code": "150700",
		"name": "扎赉诺尔区",
		"alias": "扎赉诺尔区",
		"pinyin": "ZhaLaiNuoErQu",
		"abbr": "ZLNEQ",
		"zip": "021410",
		"level": 3
	},
	{
		"code": "220781",
		"parent_code": "220700",
		"name": "扶余市",
		"alias": "扶余市",
		"pinyin": "FuYuShi",
		"abbr": "FYS",
		"zip": "131200",
		"level": 3
	},
	{
		"code": "320117",
		"parent_code": "320100",
		"name": "溧水区",
		"alias": "溧水区",
		"pinyin": "LiShuiQu",
		"abbr": "LSQ",
		"zip": "211200",
		"level": 3
	},
	{
		"code": "320118",
		"parent_code": "320100",
		"name": "高淳区",
		"alias": "高淳区",
		"pinyin": "GaoChunQu",
		"abbr": "GCQ",
		"zip": "211300",
		"level": 3
	},
	{
		"code": "321204",
		"parent_code": "321200",
		"name": "姜堰区",
		"alias": "姜堰区",
		"pinyin": "JiangYanQu",
		"abbr": "JYQ",
		"zip": "225500",
		"level": 3
	},
	{
		"code": "441803",
		"parent_code": "441800",
		"name": "清新区",
		"alias": "清新区",
		"pinyin": "QingXinQu",
		"abbr": "QXQ",
		"zip": "511800",
		"level": 3
	},
	{
		"code": "445103",
		"parent_code": "445100",
		"name": "潮安区",
		"alias": "潮安区",
		"pinyin": "ChaoAnQu",
		"abbr": "CAQ",
		"zip": "515638",
		"level": 3
	},
	{
		"code": "445203",
		"parent_code": "445200",
		"name": "揭东区",
		"alias": "揭东区",
		"pinyin": "JieDongQu",
		"abbr": "JDQ",
		"zip": "515500",
		"level": 3
	},
	{
		"code": "450312",
		"parent_code": "450300",
		"name": "临桂区",
		"alias": "临桂区",
		"pinyin": "LinGuiQu",
		"abbr": "LGQ",
		"zip": "541199",
		"level": 3
	},
	{
		"code": "450406",
		"parent_code": "450400",
		"name": "龙圩区",
		"alias": "龙圩区",
		"pinyin": "LongXuQu",
		"abbr": "LXQ",
		"zip": "543004",
		"level": 3
	},
	{
		"code": "450903",
		"parent_code": "450900",
		"name": "福绵区",
		"alias": "福绵区",
		"pinyin": "FuMianQu",
		"abbr": "FMQ",
		"zip": "537000",
		"level": 3
	},
	{
		"code": "451402",
		"parent_code": "451400",
		"name": "江州区",
		"alias": "江州区",
		"pinyin": "JiangZhouQu",
		"abbr": "JZQ",
		"zip": "532200",
		"level": 3
	},
	{
		"code": "511603",
		"parent_code": "511600",
		"name": "前锋区",
		"alias": "前锋区",
		"pinyin": "QianFengQu",
		"abbr": "QFQ",
		"zip": "638019",
		"level": 3
	},
	{
		"code": "511703",
		"parent_code": "511700",
		"name": "达川区",
		"alias": "达川区",
		"pinyin": "DaChuanQu",
		"abbr": "DCQ",
		"zip": "635000",
		"level": 3
	},
	{
		"code": "511903",
		"parent_code": "511900",
		"name": "恩阳区",
		"alias": "恩阳区",
		"pinyin": "EnYangQu",
		"abbr": "EYQ",
		"zip": "636064",
		"level": 3
	},
	{
		"code": "520115",
		"parent_code": "520115",
		"name": "观山湖区",
		"alias": "观山湖区",
		"pinyin": "GuanShanHuQu",
		"abbr": "GSHQ",
		"zip": "550081",
		"level": 3
	},
	{
		"code": "532504",
		"parent_code": "532500",
		"name": "弥勒市",
		"alias": "弥勒市",
		"pinyin": "MiLeShi",
		"abbr": "MLS",
		"zip": "652399",
		"level": 3
	},
	{
		"code": "542431",
		"parent_code": "542400",
		"name": "双湖县",
		"alias": "双湖县",
		"pinyin": "ShuangHuXian",
		"abbr": "SHX",
		"zip": "853300",
		"level": 3
	},
	{
		"code": "630200",
		"parent_code": "630000",
		"name": "海东市",
		"alias": "海东市",
		"pinyin": "HaiDongShi",
		"abbr": "HDS",
		"zip": "810600",
		"level": 2
	},
	{
		"code": "630202",
		"parent_code": "630200",
		"name": "乐都区",
		"alias": "乐都区",
		"pinyin": "LeDuQu",
		"abbr": "LDQ",
		"zip": "810700",
		"level": 3
	},
	{
		"code": "630221",
		"parent_code": "630200",
		"name": "平安县",
		"alias": "平安县",
		"pinyin": "PingAnXian",
		"abbr": "PAX",
		"zip": "810600",
		"level": 3
	},
	{
		"code": "630222",
		"parent_code": "630200",
		"name": "民和回族土族自治县",
		"alias": "民和县",
		"pinyin": "MinHeXian",
		"abbr": "MHX",
		"zip": "810800",
		"level": 3
	},
	{
		"code": "630223",
		"parent_code": "630200",
		"name": "互助土族自治县",
		"alias": "互助县",
		"pinyin": "HuZhuXian",
		"abbr": "HZX",
		"zip": "810500",
		"level": 3
	},
	{
		"code": "630224",
		"parent_code": "630200",
		"name": "化隆回族自治县",
		"alias": "化隆县",
		"pinyin": "HuaLongXian",
		"abbr": "HLX",
		"zip": "810900",
		"level": 3
	},
	{
		"code": "630225",
		"parent_code": "630200",
		"name": "循化撒拉族自治县",
		"alias": "循化县",
		"pinyin": "XunHuaXian",
		"abbr": "XHX",
		"zip": "811100",
		"level": 3
	},
	{
		"code": "632701",
		"parent_code": "632700",
		"name": "玉树市",
		"alias": "玉树市",
		"pinyin": "YuShuShi",
		"abbr": "YSS",
		"zip": "815000",
		"level": 3
	},
	{
		"code": "652702",
		"parent_code": "652700",
		"name": "阿拉山口市",
		"alias": "阿拉山口市",
		"pinyin": "ALaShanKouShi",
		"abbr": "ALSKS",
		"zip": "833418",
		"level": 3
	}
];