/***********************************************************************************************
* 
* 界面元素：多语种切换
* 范围：通用
* 
************************************************************************************************/
//是否有定义
if (typeof (XUILABELS) == 'undefined') { var XUILABELS = {}; };

//初始化及扩展
$.extend(XUILABELS, {
	"uiid_lbl_guizeyuyan":{
		"zh_rcn":"规则语言：",
		"en_rus":"Rule Language：",
		"mn_rcn":" ："
	},
	"uiid_lbl_miaoshuyuyan":{
		"zh_rcn":"描述语言：",
		"en_rus":"Description Language：",
		"mn_rcn":" ："
	},
	"uiid_lbl_dataversion":{
		"zh_rcn":"版本：",
		"en_rus":"Version：",
		"mn_rcn":"："
	},
	"uiid_lbl_datastate_editing":{
		"zh_rcn":"（正在编辑版）",
		"en_rus":"（Editing Version）",
		"mn_rcn":"（  ）"
	},
	"uiid_lbl_datastate_released":{
		"zh_rcn":"（已发布版）",
		"en_rus":"（Released Version）",
		"mn_rcn":"（ ）"
	},
	"uiid_btn_search":{
		"zh_rcn":"刷新显示",
		"en_rus":"reshow",
		"mn_rcn":" "
	},
	"uiid_btn_clear":{
		"zh_rcn":"清空",
		"en_rus":"clear",
		"mn_rcn":""
	},
	"uiid_btn_openallchar":{
		"zh_rcn":"全部打开",
		"en_rus":"Open All",
		"mn_rcn":" "
	},
	"uiid_btn_closeallchar":{
		"zh_rcn":"全部关闭",
		"en_rus":"Close All",
		"mn_rcn":" "
	},
	"uiid_btn_printfile":{
		"zh_rcn":"导出文件",
		"en_rus":"Export",
		"mn_rcn":""
	},
	"uiid_lbl_dulixingshi":{
		"zh_rcn":"独立形式",
		"en_rus":"Isolate Form",
		"mn_rcn":" "
	},
	"uiid_lbl_cishouxingshi":{
		"zh_rcn":"词首形式",
		"en_rus":"Initial Form",
		"mn_rcn":"  "
	},
	"uiid_lbl_cizhongxingshi":{
		"zh_rcn":"词中形式",
		"en_rus":"Medial Form",
		"mn_rcn":"  "
	},
	"uiid_lbl_cimoxingshi":{
		"zh_rcn":"词末形式",
		"en_rus":"Final Form",
		"mn_rcn":"  "
	},
	"uiid_lbl_bianxingtitle":{
		"zh_rcn":"变形",
		"en_rus":"Vars",
		"mn_rcn":""
	},
	"uiid_lbl_bianxingbianhao":{
		"zh_rcn":"变形编号",
		"en_rus":"Variant No.",
		"mn_rcn":""
	},
	"uiid_lbl_zixingbianhao":{
		"zh_rcn":"字形编号",
		"en_rus":"Glyph No.",
		"mn_rcn":""
	},
	"uiid_lbl_dulixianshiguize":{
		"zh_rcn":"独立规则",
		"en_rus":"Isolate Rule",
		"mn_rcn":" "
	},
	"uiid_lbl_cizhongguize":{
		"zh_rcn":"词里|N规则",
		"en_rus":"Rule in Word",
		"mn_rcn":"   "
	},
	"uiid_lbl_guizeneirong":{
		"zh_rcn":"内容",
		"en_rus":"Rule",
		"mn_rcn":""
	},
	"uiid_lbl_guizejieshi":{
		"zh_rcn":"解释",
		"en_rus":"Explain",
		"mn_rcn":""
	},
	"uiid_lbl_guizejuli":{
		"zh_rcn":"举例",
		"en_rus":"UseCase",
		"mn_rcn":""
	},
	"uiid_txt_atleast_onelanguagechecked":{
		"zh_rcn":"至少选中一种语言！",
		"en_rus":"need to select one language,at least.",
		"mn_rcn":"    "
	},
	"uiid_txt_nowisdoing":{
		"zh_rcn":"现在正在处理中，请稍后....",
		"en_rus":"now is doing,please wait....",
		"mn_rcn":"      "
	},
	"uiid_lbl_webtitle":{
		"zh_rcn":"转换规则",
		"en_rus":"Tranffering Rules",
		"mn_rcn":"  "
	},
	"uiid_lbl_bianhao":{
		"zh_rcn":"编号",
		"en_rus":"Variant No.",
		"mn_rcn":""
	}
});
//获取相应语言的字符串资源
function getlanguagetext(lang,uiid){
	return XUILABELS[uiid][lang];
};
//从将规则内容和规则描述文件转义成网页格式
//1.回车换行，空格
//  控制：就是普通空格
//  换行：|N  注意一定要大写N
//2.字体颜色控制
//  ch(in)a，说明在显示china时候in部分用红色来显示。在客户端显示时替换一下即可。
//3.关键字替换：
//  当在一段文字描述里使用外部定义的关键字，那么使用关键字替换规则来描写。此规则全部有效。
//  如：【在#not_mongol_letter#后使用控制符】，或者【200D + #not_mongol_letter# +1823】。
//4.蒙古文字体：
//  当在一段非蒙古文标书文件里使用蒙古文字符串时，如果外部没有指定蒙古文字体样式，竖排时会造成横排蒙古文
//  所以在这些嵌入蒙古文字符串外围需要增加蒙古文字体类。
//  如：【在[letter]后】，替换后变成【在<span class="mongolnormal">letter</span>后】。

function getconvertedtext(lang,text){
  var rs = text;
  //转义：回车换行
  rs = rs.replace(/\|N/g,'<br>');
  //转义：空格
  rs = rs.replace(/(\s{1,})/gm,function(one,two){
  	if(one.length<=1){
  	  return ' ';
    }else{
      return ' '+ StringRepeat('&nbsp;',one.length-1);
    };
  });
  //转义字体颜色：目前只支持红色字体
  rs = rs.replace(/\((.*?)\)/g,"<font color='red'>$1</font>");
  //关键字（名词术语）转换
  rs = rs.replace(/#(.*?)#/g,function(one,two){
  	return getkeywordstext(lang,two);
  });
  //蒙古文字体样式
  rs = rs.replace(/\[(.*?)\]/g,"<span class='mongolnormal'>$1</span>");
  //返回
  return rs;
};
//字符串链接，按指定数量
function StringRepeat(s,n){
	return new Array(n+1).join(s);
} 