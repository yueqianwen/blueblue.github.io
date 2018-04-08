/****************************/
//全局通用变量
var global_now_uilanguage = 'mn_rcn';//界面语言
var global_def_rulelanguage = ['mn_rcn'];//['zh_rcn','mn_rcn','en_rus'];//规则内容语言
var global_def_desclanguage = ['mn_rcn'];//['zh_rcn','mn_rcn','en_rus'];//规则描述语言
var global_spinner = null;
var global_isdoing = false;
var global_isshow_latincode = false; // 是否显示latincode
var global_ismouseover = false; //鼠标经过是否起效
//通用初始化
function doInitializeForAllchars() {
	/**
    //根据网址参数确定界面语言
    var urlrequest = GetRequest();
    var urllang = urlrequest['lang'];
    if(urllang=='zh_rcn'){//中文
      global_now_uilanguage = 'zh_rcn';
      global_def_rulelanguage = ['mn_rcn'];
      global_def_desclanguage = ['mn_rcn'];
    }else if(urllang=='mn_rcn'){//蒙古文
      global_now_uilanguage = 'mn_rcn';
      global_def_rulelanguage = ['mn_rcn'];
      global_def_desclanguage = ['mn_rcn'];
    }else if(urllang=='en_rus'){//英文
      global_now_uilanguage = 'en_rus';
      global_def_rulelanguage = ['en_rus'];
      global_def_desclanguage = ['en_rus'];
    };
    */
    //初始化界面语言
    doInitFaceWordFix();
    //初始化：事件绑定
    $('#uiid_btn_openallchar').click(onShowAllCharClick);
    $('#uiid_btn_closeallchar').click(onCloseAllCharClick);
    $('#msyy_mn,#msyy_zh,#msyy_en').click(onSearchCharClick);
    $('#gzyy_mn,#gzyy_zh,#gzyy_en').click(onSearchCharClick);
    $('#createcode').click(onClickCreateCode);
    //初始化：默认值
	doInitializeDefautCheck();
    //初始化字符
    doInitializeLoadChars(false,all_char_list.editstate);
    
    //弹出画面：规则统计
    $('#webtitle_ver').click(onClickOpenTotal);
    $('#total_closedialog_btn').click(onClickCloseTotal);
    /**
    //弹出画面：导出文件
    $('#uiid_btn_printfile').click(onOpenPrintFile);
    $('#printfile_closedialog_btn').click(onClosePrintFile);
    $('#printfile_print_btn').click(onClickPrintFile);
    //初始化版本选择框
    doInitializeSelectVersion();
*/
    //初始化结束
    return true;
};
//初始化固定的界面语言：转换规则，描述语言，规则语言，版本，全部打开，全部关闭，导出文件
function doInitFaceWordFix(){
	var itemlist = ['uiid_lbl_webtitle','uiid_lbl_miaoshuyuyan','uiid_lbl_guizeyuyan','uiid_lbl_dataversion','uiid_btn_openallchar','uiid_btn_closeallchar','uiid_btn_printfile'];
	for (x in itemlist){
		var item  = $('#' + itemlist[x]);
		var label = getlanguagetext(global_now_uilanguage,itemlist[x]);
		item.html(label);
	}
	//蒙古文CSS
	if(global_now_uilanguage=='mn_rcn'){
		$('#uiid_lbl_webtitle').addClass('changelanguagemongol');
		$('#uiid_lbl_miaoshuyuyan,#uiid_lbl_guizeyuyan,#uiid_lbl_dataversion').addClass('changelanguagemongol_searchtitle');
		$('#uiid_btn_printfile,#uiid_btn_openallchar,#uiid_btn_closeallchar').addClass('changelanguagemongol_btn');
	}else{
		$('#uiid_lbl_webtitle').removeClass('changelanguagemongol');
		$('#uiid_lbl_miaoshuyuyan,#uiid_lbl_guizeyuyan,#uiid_lbl_dataversion').removeClass('changelanguagemongol_searchtitle');
		$('#uiid_btn_printfile,#uiid_btn_openallchar,#uiid_btn_closeallchar').removeClass('changelanguagemongol_btn');
	}
}
//键盘事件
function onKeyDown(event){
	var keycode = event.keyCode;
	if(keycode == 17){//CTRL键
		
	}else if(keycode == 18){//ALT键
		if(global_ismouseover == false){
			global_ismouseover = true;
		}else{
			global_ismouseover = false;
		}
		$('.overrulebgcolor').removeClass('overrulebgcolor');
	}else{
	}
}
//点击改变背景色：规则
function onClickRuleChangeBgColor(e,self,xclass){
	//设置背景色
	if(self.is('.' + xclass)){
		self.removeClass(xclass);
	}else{
		if(e.ctrlKey==false){
			$('.' + xclass).removeClass(xclass);
		}
		self.addClass(xclass);
	}
}
//鼠标经过改变背景色
function onHoverRuleChangeBgColor(self,xclass){
	//设置背景色
	if(self.is('.' + xclass)){
		self.removeClass(xclass);
	}else{
		$('.' + xclass).removeClass(xclass);
		self.addClass(xclass);
	}
}

//检查是否忙碌状态
function doCheckBusyState(issetbusy){
  if(global_isdoing){
    return true;
  };
  if(issetbusy){
    global_isdoing = true;
    doShowBusyDialog(true);
  }else{
    return false;
  };
};

//设置清闲状态
function doSetIdleState(){
  global_isdoing = false;
  doShowBusyDialog(false);
};
/**
//按钮事件：切换语言
function onChangeLanguageClick(lang){
  if(doCheckBusyState(true)){
    doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_nowisdoing'), '系统提示');
    return;
  };
  setTimeout('doChangeLanguage("'+lang+'")',200);
}

//按钮事件：切换语言
function doChangeLanguage(lang){
	var gotolang=global_now_uilanguage;
	if(lang=='zh'){//切换到中文
		gotolang='zh_rcn';
	}else if (lang=='en'){//切换到英文
		gotolang='en_rus';
	}else if (lang=='mn'){//切换到蒙古文
		gotolang='mn_rcn';
	}else{//其他
		gotolang=global_now_uilanguage;
	};
	var items=$("[uilang]");
    $.each(items,function(index,dom){
    	var item=$(dom);
    	var id = item.attr('id');
    	var label = getconvertedtext(gotolang,getlanguagetext(gotolang,id));
    	item.html(label);
    	//蒙古文CSS
    	if(gotolang=='mn_rcn'){
    		//检索条件标题
    		if(id=='uiid_lbl_miaoshuyuyan' || id=='uiid_lbl_guizeyuyan' || id=='uiid_lbl_dataversion'){
    			$('#uiid_lbl_miaoshuyuyan,#uiid_lbl_guizeyuyan,#uiid_lbl_dataversion').addClass('changelanguagemongol_searchtitle');
    		}
    		//按钮特殊处理
    		if(id=='uiid_btn_search' || id=='uiid_btn_openallchar' || id=='uiid_btn_closeallchar'){
    			$('#uiid_btn_search,#uiid_btn_openallchar,#uiid_btn_closeallchar').addClass('changelanguagemongol_btn');
    		}
    		items.addClass('changelanguagemongol');
    	}else{
    		$('#uiid_lbl_miaoshuyuyan,#uiid_lbl_guizeyuyan,#uiid_lbl_dataversion').removeClass('changelanguagemongol_searchtitle');
    		$('#uiid_btn_search,#uiid_btn_openallchar,#uiid_btn_closeallchar').removeClass('changelanguagemongol_btn');
    		items.removeClass('changelanguagemongol');
    	}
    	//英文CSS
    	if(gotolang=='en_rus'){
    	}else{
    	}
    	//中文CSS
    	if(gotolang=='zh_rcn'){
    	}else{
    	}
    });
	global_now_uilanguage=gotolang;
	//切换内容：
	if(all_char_list.editstate == 1){//正在编辑
		uiid = 'uiid_lbl_datastate_editing';
	}else{//已经发布
		uiid = 'uiid_lbl_datastate_released';
	}
	doRefreshDataBody('uiid_lbl_datastate_editstate',uiid);
	//停止spin
	doSetIdleState();
};
//点击checkbox按钮事件：保证至少有一个被选中
function doClickCheckedCount(){
	var self=$(this);
	var parent = self.parents("td:first");
	var num = parent.find(':checkbox:checked').length;
	if(num<=0){
		doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_atleast_onelanguagechecked'), '系统提示');
	};
};
*/

//过滤显示语言内容事件
function onSearchCharClick(){
	/**
  if(doCheckBusyState(false)){
    doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_nowisdoing'), '系统提示');
    return;
  };
  setTimeout('doSearchChar()',200);
  */
};

//刷新按钮事件
function doSearchChar(){
	//初始化
	var gzyy = getCheckBoxValue('gzyy');
	var msyy = getCheckBoxValue('msyy');
	/**
	//至少选择一种语言
	if ((gzyy.length<=0)||(msyy.length<=0)){
		doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_atleast_onelanguagechecked'), '系统提示');
		return;
	};
	//规则语言
	if(gzyy.length<=0){//没有任何语言被选中
		$("#mn_gznr_title,#mn_gznr_content,#mn_gznr_img").removeClass("display_hide");
		$("#zh_gznr_title,#zh_gznr_content,#zh_gznr_img").removeClass("display_hide");
		$("#en_gznr_title,#en_gznr_content,#en_gznr_img").removeClass("display_hide");
	}else{
		if($.inArray("1", gzyy)==-1){//蒙古语
			$("#mn_gznr_title,#mn_gznr_content,#mn_gznr_img").addClass("display_hide");
		}else{
			$("#mn_gznr_title,#mn_gznr_content,#mn_gznr_img").removeClass("display_hide");
		};
		if($.inArray("2", gzyy)==-1){//中文
			$("#zh_gznr_title,#zh_gznr_content,#zh_gznr_img").addClass("display_hide");
		}else{
			$("#zh_gznr_title,#zh_gznr_content,#zh_gznr_img").removeClass("display_hide");
		};
		if($.inArray("3", gzyy)==-1){//英文
			$("#en_gznr_title,#en_gznr_content,#en_gznr_img").addClass("display_hide");
		}else{
			$("#en_gznr_title,#en_gznr_content,#en_gznr_img").removeClass("display_hide");
		};
	}
	//描述语言
	if(msyy == 0){//没有任何语言被选中
		$("#mn_gzjs_title,#mn_gzjs_content,#mn_gzjs_img").removeClass("display_hide");
		$("#zh_gzjs_title,#zh_gzjs_content,#zh_gzjs_img").removeClass("display_hide");
		$("#en_gzjs_title,#en_gzjs_content,#en_gzjs_img").removeClass("display_hide");
	}else{
		if($.inArray("1", msyy)==-1){//蒙古语
			$("#mn_gzjs_title,#mn_gzjs_content,#mn_gzjs_img").addClass("display_hide");
		}else{
			$("#mn_gzjs_title,#mn_gzjs_content,#mn_gzjs_img").removeClass("display_hide");
		}
		if($.inArray("2", msyy)==-1){//中文
			$("#zh_gzjs_title,#zh_gzjs_content,#zh_gzjs_img").addClass("display_hide");
		}else{
			$("#zh_gzjs_title,#zh_gzjs_content,#zh_gzjs_img").removeClass("display_hide");
		}
		if($.inArray("3", msyy)==-1){//英文
			$("#en_gzjs_title,#en_gzjs_content,#en_gzjs_img").addClass("display_hide");
		}else{
			$("#en_gzjs_title,#en_gzjs_content,#en_gzjs_img").removeClass("display_hide");
		}
		//规则解释的第一个语言需要特殊背景色显示
		$("#mn_gzjs_content,#zh_gzjs_content,#en_gzjs_content").removeClass("defaultrulebgcolor");
		$("#mn_gzjs_img,#zh_gzjs_img,#en_gzjs_img").removeClass("defaultrulebgcolor");
		if($.inArray("1", msyy) > -1){
			$("#mn_gzjs_content,#mn_gzjs_img").addClass("defaultrulebgcolor");
		}else if($.inArray("2", msyy) > -1){
			$("#zh_gzjs_content,#zh_gzjs_img").addClass("defaultrulebgcolor");
		}else if($.inArray("3", msyy) > -1){
			$("#en_gzjs_content,#en_gzjs_img").addClass("defaultrulebgcolor");
		}else{//默认：蒙文
			$("#mn_gzjs_content,#mn_gzjs_img").addClass("defaultrulebgcolor");
		}
    };
    */
};
//全部打开
function onShowAllCharClick(){
  if(doCheckBusyState(true)){
    doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_nowisdoing'), '系统提示');
    return;
  };
  setTimeout('doShowAllChar()',200);
};

function doShowAllChar(){
	$("#allcharstable table").show();
	$("#allcharstable table tbody").show();
	$("img[id^='charletters_img']").attr('src','./image/allclose.png');
	$("img[id^='topisolate_img']").attr('src','./image/lineclose.png');
	$("img[id^='topinitial_img']").attr('src','./image/lineclose.png');
	$("img[id^='topmedial_img']").attr('src','./image/lineclose.png');
	$("img[id^='topfinal_img']").attr('src','./image/lineclose.png');
	$("img[id^='bottomisolate_img']").attr('src','./image/lineclose.png');
	$("img[id^='bottominitial_img']").attr('src','./image/lineclose.png');
	$("img[id^='bottommedial_img']").attr('src','./image/lineclose.png');
	$("img[id^='bottomfinal_img']").attr('src','./image/lineclose.png');
	doSetIdleState();
};

//全部关闭
function onCloseAllCharClick(){
  if(doCheckBusyState(true)){
    doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_nowisdoing'), '系统提示');
    return;
  };
  setTimeout('doCloseAllChar()',200);
};
function doCloseAllChar(){
	$("#allcharstable table").hide();
	$("img[id^='charletters_img']").attr('src','./image/allopen.png');
	doSetIdleState();
}

//展开关闭：字母
function doShowChars(id){
  if(doCheckBusyState(false)){
    doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_nowisdoing'), '系统提示');
    return;
  };
  $("#charsframe" + id).toggle();
  if($("#charsframe" + id).is(":hidden")){
 	 $("#charletters_img" + id).attr('src','./image/allopen.png');
  }else{
 	 $("#charletters_img" + id).attr('src','./image/allclose.png');
  }
}

//展开关闭：原型，词首，词中，词末
function doShowCharTable(flag,id){
    if(doCheckBusyState(false)){
      doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_nowisdoing'), '系统提示');
      return;
    };
	if(flag==1){//原型
		$("#chartableisolate" + id).toggle();
		if($("#chartableisolate" + id).is(":hidden")){
			$("#topisolate_img" + id).attr('src','./image/lineopen.png');
			$("#bottomisolate_img" + id).attr('src','./image/lineopen.png');
		}else{
			$("#topisolate_img" + id).attr('src','./image/lineclose.png');
			$("#bottomisolate_img" + id).attr('src','./image/lineclose.png');
		}
	}
	if(flag==2){//词首
		$("#chartableinitial" + id).toggle();
		if($("#chartableinitial" + id).is(":hidden")){
			$("#topinitial_img" + id).attr('src','./image/lineopen.png');
			$("#bottominitial_img" + id).attr('src','./image/lineopen.png');
		}else{
			$("#topinitial_img" + id).attr('src','./image/lineclose.png');
			$("#bottominitial_img" + id).attr('src','./image/lineclose.png');
		}
	}
	if(flag==3){//词首
		$("#chartablemedial" + id).toggle();
		if($("#chartablemedial" + id).is(":hidden")){
			$("#topmedial_img" + id).attr('src','./image/lineopen.png');
			$("#bottommedial_img" + id).attr('src','./image/lineopen.png');
		}else{
			$("#topmedial_img" + id).attr('src','./image/lineclose.png');
			$("#bottommedial_img" + id).attr('src','./image/lineclose.png');
		}
	}
	if(flag==4){//词末
		$("#chartablefinal" + id).toggle();
		if($("#chartablefinal" + id).is(":hidden")){
			$("#topfinal_img" + id).attr('src','./image/lineopen.png');
			$("#bottomfinal_img" + id).attr('src','./image/lineopen.png');
		}else{
			$("#topfinal_img" + id).attr('src','./image/lineclose.png');
			$("#bottomfinal_img" + id).attr('src','./image/lineclose.png');
		}
	}
}
/**
//Dialog打开：导出文件
function onOpenPrintFile(){
    if(doCheckBusyState(true)){
	    doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_nowisdoing'), '系统提示');
	    return;
	};
    //弹出画面
	var dialogwindow = $("#printfile_dialog_display");
    dialogwindow.dialog('close')
    dialogwindow.dialog({
        top:30,
        title: '导出文件',
        modal:true
    });
    dialogwindow.dialog('open');
    //初始化：版本选择框，语言选择框
    doInitializePrintFileSelectVersion();
    doInitializePrintFileSelectLang();
    doSetIdleState();
}
//导出文件画面：关闭
function onClosePrintFile(){
	document.getElementById("printfengpi").checked=true; 
    $('#printfile_dialog_display').dialog('close');
}
//导出PDF
function onClickPrintFile(){
	//初始化
	var lang    = $("#printfile_lang").combobox('getValue');
	var version = $("#printfile_verison").combobox('getValue');
	$("#printfileform").submit();
	//关闭窗口 
	onClosePrintFile();
}
*/
//切换语言：内容语言
function doRefreshDataBody(id,uiid){
	var oid = $('#' + id);
	var text = getlanguagetext(global_now_uilanguage,uiid);
	oid.text(text);
	//添加蒙古字体
	if(global_now_uilanguage=='mn_rcn'){
		oid.addClass('changelanguagemongol_searchtitle');
	}else{
		oid.removeClass('changelanguagemongol_searchtitle');
	}
}

//初始化画面时，加载全部字母
function doInitializeLoadChars(isFromFirstCreate){
	//加载规则版本号
	$("#webtitle_ver").empty();
	var vertext = '（V' + all_char_list.version + '    '+all_char_list.lastupdate+'）';

	$("#webtitle_ver").append(vertext);
	//当前数据发布状态
	if(all_char_list.editstate == 1){//正在编辑
		uiid = 'uiid_lbl_datastate_editing';
	}else{//已经发布
		uiid = 'uiid_lbl_datastate_released';
	}

	doRefreshDataBody('uiid_lbl_datastate_editstate',uiid);
	//规则解释的第一个语言需要特殊背景色显示
	var mn_gzjsbgcolor = '';
	var zh_gzjsbgcolor = '';
	var en_gzjsbgcolor = '';
	if($.inArray("mn_rcn", global_def_desclanguage)>-1){
		mn_gzjsbgcolor ='defaultrulebgcolor';
	}else if($.inArray("zh_rcn", global_def_desclanguage)>-1){
		zh_gzjsbgcolor ='defaultrulebgcolor';
	}else if($.inArray("en_rus", global_def_desclanguage)>-1){
		en_gzjsbgcolor ='defaultrulebgcolor';
	}else{//默认：蒙文
		mn_gzjsbgcolor ='defaultrulebgcolor';
	}
	//初始化：规则内容语言，描述内容语言
	//规则内容
	if($.inArray("mn_rcn", global_def_rulelanguage)>-1){
		var mn_displaygznr = '';
	}else{
		var mn_displaygznr = 'display_hide';
	}
	if($.inArray("zh_rcn", global_def_rulelanguage)>-1){
		zh_displaygznr = '';
	}else{
		zh_displaygznr = 'display_hide';
	}
	if($.inArray("en_rus", global_def_rulelanguage)>-1){
		var en_displaygznr = '';
	}else{
		var en_displaygznr = 'display_hide';
	}
	//规则解释
	if($.inArray("mn_rcn", global_def_desclanguage)>-1){
		var mn_displaygzjs = '';
	}else{
		var mn_displaygzjs = 'display_hide';
	}
	if($.inArray("zh_rcn", global_def_desclanguage)>-1){
		var zh_displaygzjs = '';
	}else{
		var zh_displaygzjs = 'display_hide';
	}
	if($.inArray("en_rus", global_def_desclanguage)>-1){
		var en_displaygzjs = '';
	}else{
		var en_displaygzjs = 'display_hide';
	}
	//根据默认语言设置相应字体
	if(global_now_uilanguage == 'mn_rcn'){
		var uilangclass = 'changelanguagemongol';
	}else{
		var uilangclass = '';
	}
	
	//统计：变形数，规则数
	var bianx_num = 0;
	var guize_dl_num = 0;
	var guize_cz_num = 0;
	var guize_cz_default_num = 0;//默认变形规则
    var guize_cz_force_num  = 0;//强制变形规则
	//加载字母
	var allcharframe = $('#allcharframework');
	allcharframe.empty();
	var tablehtml = "<table border=0 height='100%' class='allcharstable' id='allcharstable'>";
	var bxrowspan = 500;
	var latintext = '';
		$.each(all_char_list.charlist, function (i, v){
			bianx_num += (v.isolate.length + v.initial.length + v.medial.length + v.final.length);
			if(global_isshow_latincode){
				latintext = "<div class='latincode'>(" + v.latincode + ")</div>";
			}
		    tablehtml += 
		    	//表头
		    	"<tr>" +
	    		     "<td class='onechars_title'>" + 
	    				 "<div><a href='javascript:void(0)' onclick='doShowChars(" + i + ")'> <img src='./image/allopen.png' id='charletters_img" + i + "'/></a></div>" + 
	    				 "<div class='charvalue mongolnormal'>"+ v.charvalue + "</div>" + 
	    		         "<div class='unicode'>"+ v.unicode + "</div>" + 
	    				 "<div class='latinname'>" + v.latinname + "</div>" + 
	    				  latintext + 
	    		     "</td>" + 
    		     "</tr>"  +
				 "<tr>"   +
    		    	 "<td>"  +
   						"<table border=0 height='100%' class='defcharsfont defcharstable' id='charsframe" + i + "' style='display:none'>";
			   //独立形式.START ------------------------------------------------------------------------------------------------------------------------------
			   if(v.isolate.length >=1){
			   	   	tablehtml += 
				   				 "<tr>" +
						    		"<td colspan=9 class='deformations'>" + 
											"<a href='javascript:void(0)' onclick='doShowCharTable(1," + i +")'><img src='./image/lineopen.png' class='deformationstop_img' id='topisolate_img" + i + "'/></a>" + 
											/**
											"<a href='topology.php?unicode=" + v.unicode + "&position=isolate' class='pologyhref' target='_blank'>
										*/
											"<span id='uiid_lbl_dulixingshi' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_dulixingshi') + "</span></a>" + 
											"<span class='deformations_count'>（" + v.isolate.length + "）</span>" + 
											/**
											"<a href='javascript:void(0)' onclick='doShowCharTable(1," + i +")'><img src='./image/lineopen.png' class='deformationsbottom_img' id='bottomisolate_img" + i + "'/></a>" + 
									*/
									"</td>" +
						    	 "</tr>" +
								 "<tbody id='chartableisolate" + i + "' style='display:table-row-group'>" +
								 "<tr>" +
			    					"<td rowspan=" + bxrowspan + " class='charchoose'><span id='uiid_lbl_bianxingtitle' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_bianxingtitle') + " </span></td>"
			    				 "</tr>" ;
					$.each(v.isolate, function (ii, vv){
						guize_cz_num += vv.rules.length;
						tablehtml += "<tr>" +
									 	"<td rowspan=" + (vv.rules.length*11+3)  + " class='charletter mongolnormal'>" + vv.bianxingvalue + "<br><span class='font_bianxingno'>("+vv.bianxingno+")</span></td>" +
									 "</tr>" +
				    				 "<tr class='singleshowguize'>" +
				    					"<td class='title_dlrule' colspan=2><span id='uiid_lbl_dulixianshiguize' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_dulixianshiguize') + "</span></td>" +
				    					"<td class='content_dlruleindex font_blue' colspan=1>"  + vv.ruleindex + "</td>" + 
				    					"<td class='content_rules' colspan=3>"  + getconvertedtext(global_now_uilanguage,vv.ruleisolate) + "</td>" + 
				    					/**
				    					"<td class='content_img td_heightdefault'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='-1' rulefiled='-1' charcode='" + v.unicode + "' postype=0 ruletype=0 bxno='" + vv.bianxingno + "' ruleno=0 src='./image/editit.png'/></td>" +
				    				 */
				    				 "</tr>" +
				    				 "<tr>" +
				    					"<td rowspan=" + (vv.rules.length*11+1) + " class='title_czrule'><span id='uiid_lbl_cizhongguize' class='"+ uilangclass +"' uilang>" + getconvertedtext(global_now_uilanguage,getlanguagetext(global_now_uilanguage,'uiid_lbl_cizhongguize')) + "</span></td>" +
				    				 "</tr>";
						$.each(vv.rules, function (iii, vvv){
							if(vvv.isexcluderule == '1'){
								guize_cz_force_num += 1;
							}else{
								guize_cz_default_num += 1;
							}
			    		    tablehtml +=    "<tr>" +
			    		    					"<td rowspan=11 class='numbercharno td_heightdefault'>" + vvv.ruleno + "</td>" +
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=10 class='numbercharindex td_heightdefault content_czruleindex " + getRuleIDColor(vvv) + "'>" + vvv.ruleindex + "</td>" +
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=4 class='title_rule'><span id='uiid_lbl_guizejieshi' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizejieshi') + "</span></td>" +			    		    			 	
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_mn " + mn_displaygzjs + "' id='mn_gzjs_title'>MN</td>" +
			    		    					"<td class='content_mn mongolnormal " + mn_displaygzjs + " " + mn_gzjsbgcolor + "' id='mn_gzjs_content'>" + getconvertedtext('mn_rcn',vvv.description_mn_rcn)  + "</td>" +
			    		    					/**
			    		    					"<td class='content_img td_heightdefault " + mn_displaygzjs + " " + mn_gzjsbgcolor + "' id='mn_gzjs_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=1 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				*/
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_zh " + zh_displaygzjs + "' id='zh_gzjs_title'>ZH</td>" +
			    		    					"<td class='content_zh mongolhorizontal " + zh_displaygzjs + " " + zh_gzjsbgcolor + "' id='zh_gzjs_content'>" + getconvertedtext('zh_rcn',vvv.description_zh_rcn)  + "</td>" +
			    		    					/**
			    		    					"<td class='content_img td_heightdefault " + zh_displaygzjs + " " + zh_gzjsbgcolor + "' id='zh_gzjs_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=2 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				*/
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_en " + en_displaygzjs + "' id='en_gzjs_title'>EN</td>" +
			    		    					"<td class='content_en mongolhorizontal " + en_displaygzjs + " " + en_gzjsbgcolor + "' id='en_gzjs_content'>" + getconvertedtext('en_rus',vvv.description_en_rus)  + "</td>" +
			    		    					/**
			    		    					"<td class='content_img td_heightdefault " + en_displaygzjs + " " + en_gzjsbgcolor + "' id='en_gzjs_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=3 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				*/
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=4 class='title_rule'><span id='uiid_lbl_guizeneirong' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizeneirong') + "</span></td>" +
				    		    			"<tr>" +
			    		    					//"<td rowspan=3 class='title_rule'><span id='uiid_lbl_guizeneirong' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizeneirong') + "</span></td>" +
			    		    					"<td class='td_heightdefault title_mn " + mn_displaygznr + "' id='mn_gznr_title'>MN</td>" +
			    		    					"<td class='content_mn mongolnormal " + mn_displaygznr + "' id='mn_gznr_content'>" + getconvertedtext('mn_rcn',vvv.rulevalue) + "</td>" +
			    		    					/**
			    		    					"<td class='content_img td_heightdefault " + mn_displaygznr + "' id='mn_gznr_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=4 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				*/
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_zh " + zh_displaygznr + "' id='zh_gznr_title'>ZH</td>" +
			    		    					"<td class='content_zh mongolhorizontal " + zh_displaygznr + "' id='zh_gznr_content'>" + getconvertedtext('zh_rcn',vvv.rulevalue) + "</td>" +
			    		    					/**
			    		    					"<td class='content_img td_heightdefault " + zh_displaygznr + "' id='zh_gznr_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=5 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				*/
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_en " + en_displaygznr + "' id='en_gznr_title'>EN</td>" +
			    		    					"<td class='content_en mongolhorizontal " + en_displaygznr + "' id='en_gznr_content'>" + getconvertedtext('en_rus',vvv.rulevalue) + "</td>" +
			    		    					/**
			    		    					"<td class='content_img td_heightdefault " + en_displaygznr + "' id='en_gznr_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=6 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				*/
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='title_rule'><span id='uiid_lbl_guizejuli' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizejuli') + "</span></td>" +
			    		    					"<td class='td_heightdefault title_mn'>MN</td>" +
			    		    					"<td class='content_mn mongolnormal'>" + getconvertedtext('mn_rcn',vvv.rulesample) +"</td>" +
			    		    					/**
			    		    					"<td class='content_img td_heightdefault'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=7 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				*/
			    		    				"</tr>";
						});
				    });
					tablehtml += "</tbody>";
				}
				//独立形式.END ------------------------------------------------------------------------------------------------------------------------------

			    //词首形式.START ------------------------------------------------------------------------------------------------------------------------------
				if(v.initial.length >=1){
					tablehtml += "<tr>" + 
						    		"<td colspan=9 class='deformations'>" + 
										"<a href='javascript:void(0)' onclick='doShowCharTable(2," + i +")'><img src='./image/lineopen.png' class='deformationstop_img' id='topinitial_img" + i + "'/></a>" + 
										/**
										"<a href='topology.php?unicode=" + v.unicode + "&position=initial' class='pologyhref' target='_blank'>
										*/
										"<span id='uiid_lbl_cishouxingshi' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_cishouxingshi') + "</span></a>" + 
										"<span class='deformations_count'>（" + v.initial.length + "）</span>" + 
										/**
										"<a href='javascript:void(0)' onclick='doShowCharTable(2," + i +")'><img src='./image/lineopen.png' class='deformationsbottom_img' id='bottominitial_img" + i + "'/></a>" + 
									*/
									"</td>" +
						    	 "</tr>" +
								 "<tbody id='chartableinitial" + i + "' style='display:table-row-group'>" +
								 "<tr>" +
			    					"<td rowspan=" + bxrowspan + " class='charchoose'><span id='uiid_lbl_bianxingtitle' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_bianxingtitle') + " </span></td>"
			    				 "</tr>" ;
					$.each(v.initial, function (ii, vv){
						guize_cz_num += vv.rules.length;
						tablehtml += "<tr>" +
									 	"<td rowspan=" + (vv.rules.length*11+3) + " class='charletter mongolnormal'>" + vv.bianxingvalue + "<br><span class='font_bianxingno'>("+vv.bianxingno+")</span></td>" +
									 "</tr>" +
				    				 "<tr class='singleshowguize'>" +
				    					"<td class='title_dlrule' colspan=2><span id='uiid_lbl_dulixianshiguize' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_dulixianshiguize') + "</span></td>" +
				    					"<td class='content_dlruleindex font_blue' colspan=1>"  + vv.ruleindex + "</td>" + 
				    					"<td class='content_rules' colspan=3>"  + getconvertedtext(global_now_uilanguage,vv.ruleisolate) + "</td>" + 
				    					
				    				 "</tr>" +
				    				 "<tr>" +
				    					"<td rowspan=" + (vv.rules.length*11+1) + " class='title_czrule'><span id='uiid_lbl_cizhongguize' class='"+ uilangclass +"' uilang>" + getconvertedtext(global_now_uilanguage,getlanguagetext(global_now_uilanguage,'uiid_lbl_cizhongguize')) + "</span></td>" +
				    				 "</tr>";
						$.each(vv.rules, function (iii, vvv){
							if(vvv.isexcluderule == '1'){
								guize_cz_force_num += 1;
							}else{
								guize_cz_default_num += 1;
							}
			    		    tablehtml +=    "<tr>" +
			    		    					"<td rowspan=11 class='numbercharno td_heightdefault'>" + vvv.ruleno + "</td>" +
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=10 class='numbercharindex td_heightdefault content_czruleindex " + getRuleIDColor(vvv) + "'>" + vvv.ruleindex + "</td>" +
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=4 class='title_rule'><span id='uiid_lbl_guizejieshi' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizejieshi') + "</span></td>" +			    		    			 	
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_mn " + mn_displaygzjs + "' id='mn_gzjs_title'>MN</td>" +
			    		    					"<td rowspan=3 class='content_mn mongolnormal " + mn_displaygzjs + " " + mn_gzjsbgcolor + "' id='mn_gzjs_content'>" + getconvertedtext('mn_rcn',vvv.description_mn_rcn)  + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + mn_displaygzjs + " " + mn_gzjsbgcolor + "' id='mn_gzjs_img'></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_zh " + zh_displaygzjs + "' id='zh_gzjs_title'>ZH</td>" +
			    		    					"<td class='content_zh mongolhorizontal " + zh_displaygzjs + " " + zh_gzjsbgcolor + "' id='zh_gzjs_content'>" + getconvertedtext('zh_rcn',vvv.description_zh_rcn)  + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + zh_displaygzjs + " " + zh_gzjsbgcolor + "' id='zh_gzjs_img'></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_en " + en_displaygzjs + "' id='en_gzjs_title'>EN</td>" +
			    		    					"<td class='content_en mongolhorizontal " + en_displaygzjs + " " + en_gzjsbgcolor + "' id='en_gzjs_content'>" + getconvertedtext('en_rus',vvv.description_en_rus)  + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + en_displaygzjs + " " + en_gzjsbgcolor + "' id='en_gzjs_img'></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=4 class='title_rule'><span id='uiid_lbl_guizeneirong' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizeneirong') + "</span></td>" +
				    		    			"<tr>" +
			    		    					//"<td rowspan=3 class='title_rule'><span id='uiid_lbl_guizeneirong' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizeneirong') + "</span></td>" +
			    		    					"<td rowspan=3  class='td_heightdefault title_mn " + mn_displaygznr + "' id='mn_gznr_title'>MN</td>" +
			    		    					"<td rowspan=3  class='content_mn mongolnormal " + mn_displaygznr + "' id='mn_gznr_content'>" + getconvertedtext('mn_rcn',vvv.rulevalue) + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + mn_displaygznr + "' id='mn_gznr_img'></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_zh " + zh_displaygznr + "' id='zh_gznr_title'>ZH</td>" +
			    		    					"<td class='content_zh mongolhorizontal " + zh_displaygznr + "' id='zh_gznr_content'>" + getconvertedtext('zh_rcn',vvv.rulevalue) + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + zh_displaygznr + "' id='zh_gznr_img'></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_en " + en_displaygznr + "' id='en_gznr_title'>EN</td>" +
			    		    					"<td class='content_en mongolhorizontal " + en_displaygznr + "' id='en_gznr_content'>" + getconvertedtext('en_rus',vvv.rulevalue) + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + en_displaygznr + "' id='en_gznr_img'></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='title_rule'><span id='uiid_lbl_guizejuli' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizejuli') + "</span></td>" +
			    		    					"<td class='td_heightdefault title_mn'>MN</td>" +
			    		    					"<td class='content_mn mongolnormal'>" + getconvertedtext('mn_rcn',vvv.rulesample) +"</td>" +
			    		    					//"<td class='content_img td_heightdefault'></td>" +
			    		    				"</tr>";
						});
				    });
					tablehtml += "</tbody>";
				}
				//词首形式.END ------------------------------------------------------------------------------------------------------------------------------
				
			    //词中形式.START ------------------------------------------------------------------------------------------------------------------------------
				if(v.medial.length >=1){
					tablehtml += "<tr>" + 
						    		"<td colspan=9 class='deformations'>" + 
										"<a href='javascript:void(0)' onclick='doShowCharTable(3," + i +")'><img src='./image/lineopen.png' class='deformationstop_img' id='topmedial_img" + i + "'/></a>" + 
										/**
										"<a href='topology.php?unicode=" + v.unicode + "&position=medial' class='pologyhref' target='_blank'>
										*/
										"<span id='uiid_lbl_cizhongxingshi' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_cizhongxingshi') + "</span></a>" + 
										"<span class='deformations_count'>（" + v.medial.length + "）</span>" + 
										//"<a href='javascript:void(0)' onclick='doShowCharTable(3," + i +")'><img src='./image/lineopen.png' class='deformationsbottom_img' id='bottommedial_img" + i + "'/></a>" + 
									"</td>" +
						    	 "</tr>" +
								 "<tbody id='chartablemedial" + i + "' style='display:table-row-group'>" +
								 "<tr>" +
			    					"<td rowspan=" + bxrowspan + " class='charchoose'><span id='uiid_lbl_bianxingtitle' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_bianxingtitle') + " </span></td>"
			    				 "</tr>" ;
					$.each(v.medial, function (ii, vv){
						guize_cz_num += vv.rules.length;
						tablehtml += "<tr>" +
									 	"<td rowspan=" + (vv.rules.length*11+3)  + " class='charletter mongolnormal'>" + vv.bianxingvalue + "<br><span class='font_bianxingno'>("+vv.bianxingno+")</span></td>" +
									 "</tr>" +
				    				 "<tr class='singleshowguize'>" +
				    					"<td class='title_dlrule' colspan=2><span id='uiid_lbl_dulixianshiguize' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_dulixianshiguize') + "</span></td>" +
				    					"<td class='content_dlruleindex font_blue' colspan=1>"  + vv.ruleindex + "</td>" + 
				    					"<td class='content_rules' colspan=3>"  + getconvertedtext(global_now_uilanguage,vv.ruleisolate) + "</td>" + 
				    					//"<td class='content_img td_heightdefault'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='-1' rulefiled='-1' charcode='" + v.unicode + "' postype=2 ruletype=0 bxno='" + vv.bianxingno + "' ruleno=0 src='./image/editit.png'/></td>" +
				    				 "</tr>" +
				    				 "<tr>" +
				    					"<td rowspan=" + (vv.rules.length*11+1) + " class='title_czrule'><span id='uiid_lbl_cizhongguize' class='"+ uilangclass +"' uilang>" + getconvertedtext(global_now_uilanguage,getlanguagetext(global_now_uilanguage,'uiid_lbl_cizhongguize')) + "</span></td>" +
				    				 "</tr>";
						$.each(vv.rules, function (iii, vvv){
							if(vvv.isexcluderule == '1'){
								guize_cz_force_num += 1;
							}else{
								guize_cz_default_num += 1;
							}
			    		    tablehtml +=    "<tr>" +
			    		    					"<td rowspan=11 class='numbercharno td_heightdefault'>" + vvv.ruleno + "</td>" +
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=10 class='numbercharindex td_heightdefault content_czruleindex " + getRuleIDColor(vvv) + "'>" + vvv.ruleindex + "</td>" +
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=4 class='title_rule'><span id='uiid_lbl_guizejieshi' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizejieshi') + "</span></td>" +			    		    			 	
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_mn " + mn_displaygzjs + "' id='mn_gzjs_title'>MN</td>" +
			    		    					"<td class='content_mn mongolnormal " + mn_displaygzjs + " " + mn_gzjsbgcolor + "' id='mn_gzjs_content'>" + getconvertedtext('mn_rcn',vvv.description_mn_rcn)  + "</td>" +
			    		    			
			    		    			    //"<td class='content_img td_heightdefault " + mn_displaygzjs + " " + mn_gzjsbgcolor + "' id='mn_gzjs_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=1 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_zh " + zh_displaygzjs + "' id='zh_gzjs_title'>ZH</td>" +
			    		    					"<td class='content_zh mongolhorizontal " + zh_displaygzjs + " " + zh_gzjsbgcolor + "' id='zh_gzjs_content'>" + getconvertedtext('zh_rcn',vvv.description_zh_rcn)  + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + zh_displaygzjs + " " + zh_gzjsbgcolor + "' id='zh_gzjs_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=2 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_en " + en_displaygzjs + "' id='en_gzjs_title'>EN</td>" +
			    		    					"<td class='content_en mongolhorizontal " + en_displaygzjs + " " + en_gzjsbgcolor + "' id='en_gzjs_content'>" + getconvertedtext('en_rus',vvv.description_en_rus)  + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + en_displaygzjs + " " + en_gzjsbgcolor + "' id='en_gzjs_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=3 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=4 class='title_rule'><span id='uiid_lbl_guizeneirong' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizeneirong') + "</span></td>" +
				    		    			"<tr>" +
			    		    					//"<td rowspan=3 class='title_rule'><span id='uiid_lbl_guizeneirong' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizeneirong') + "</span></td>" +
			    		    					"<td class='td_heightdefault title_mn " + mn_displaygznr + "' id='mn_gznr_title'>MN</td>" +
			    		    					"<td class='content_mn mongolnormal " + mn_displaygznr + "' id='mn_gznr_content'>" + getconvertedtext('mn_rcn',vvv.rulevalue) + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + mn_displaygznr + "' id='mn_gznr_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=4 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_zh " + zh_displaygznr + "' id='zh_gznr_title'>ZH</td>" +
			    		    					"<td class='content_zh mongolhorizontal " + zh_displaygznr + "' id='zh_gznr_content'>" + getconvertedtext('zh_rcn',vvv.rulevalue) + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + zh_displaygznr + "' id='zh_gznr_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=5 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_en " + en_displaygznr + "' id='en_gznr_title'>EN</td>" +
			    		    					"<td class='content_en mongolhorizontal " + en_displaygznr + "' id='en_gznr_content'>" + getconvertedtext('en_rus',vvv.rulevalue) + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + en_displaygznr + "' id='en_gznr_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=6 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='title_rule'><span id='uiid_lbl_guizejuli' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizejuli') + "</span></td>" +
			    		    					"<td class='td_heightdefault title_mn'>MN</td>" +
			    		    					"<td class='content_mn mongolnormal'>" + getconvertedtext('mn_rcn',vvv.rulesample) +"</td>" +
			    		    					//"<td class='content_img td_heightdefault'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=7 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>";
						});
				    });
					tablehtml += "</tbody>";
				}
				//词中形式.END ------------------------------------------------------------------------------------------------------------------------------
				
			    //词末形式.START ------------------------------------------------------------------------------------------------------------------------------
				if(v.final.length >=1){
					tablehtml += "<tr>" + 
						    		"<td colspan=9 class='deformations'>" + 
										"<a href='javascript:void(0)' onclick='doShowCharTable(4," + i +")'><img src='./image/lineopen.png' class='deformationstop_img' id='topfinal_img" + i + "'/></a>" + 
										/**
										"<a href='topology.php?unicode=" + v.unicode + "&position=final' class='pologyhref' target='_blank'>
									*/
										"<span id='uiid_lbl_cimoxingshi' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_cimoxingshi') + "</span></a>" + 
										"<span class='deformations_count'>（" + v.final.length + "）</span>" + 
										//"<a href='javascript:void(0)' onclick='doShowCharTable(4," + i +")'><img src='./image/lineopen.png' class='deformationsbottom_img' id='bottomfinal_img" + i + "'/></a>" + 
									"</td>" +
						    	 "</tr>" +
								 "<tbody id='chartablefinal" + i + "' style='display:table-row-group'>" +
								 "<tr>" +
			    					"<td rowspan=" + bxrowspan + " class='charchoose'><span id='uiid_lbl_bianxingtitle' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_bianxingtitle') + " </span></td>"
			    				 "</tr>" ;
					$.each(v.final, function (ii, vv){
						guize_cz_num += vv.rules.length;
						tablehtml += "<tr>" +
									 	"<td rowspan=" + (vv.rules.length*11+3)  + " class='charletter mongolnormal'>" + vv.bianxingvalue + "<br><span class='font_bianxingno'>("+vv.bianxingno+")</span></td>" +
									 "</tr>" +
				    				 "<tr class='singleshowguize'>" +
				    					"<td class='title_dlrule' colspan=2><span id='uiid_lbl_dulixianshiguize' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_dulixianshiguize') + "</span></td>" +
				    					"<td class='content_dlruleindex font_blue' colspan=1>"  + vv.ruleindex + "</td>" + 
				    					"<td class='content_rules' colspan=3>"  + getconvertedtext(global_now_uilanguage,vv.ruleisolate) + "</td>" + 
				    					//"<td class='content_img td_heightdefault'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='-1' rulefiled='-1' charcode='" + v.unicode + "' postype=3 ruletype=0 bxno='" + vv.bianxingno + "' ruleno=0 src='./image/editit.png'/></td>" +
				    				 "</tr>" +
				    				 "<tr>" +
				    					"<td rowspan=" + (vv.rules.length*11+1) + " class='title_czrule'><span id='uiid_lbl_cizhongguize' class='"+ uilangclass +"' uilang>" + getconvertedtext(global_now_uilanguage,getlanguagetext(global_now_uilanguage,'uiid_lbl_cizhongguize')) + "</span></td>" +
				    				 "</tr>";
						$.each(vv.rules, function (iii, vvv){
							if(vvv.isexcluderule == '1'){
								guize_cz_force_num += 1;
							}else{
								guize_cz_default_num += 1;
							}
			    		    tablehtml +=    "<tr>" +
			    		    					"<td rowspan=11 class='numbercharno td_heightdefault'>" + vvv.ruleno + "</td>" +
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=10 class='numbercharindex td_heightdefault content_czruleindex " + getRuleIDColor(vvv) + "'>" + vvv.ruleindex + "</td>" +
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=4 class='title_rule'><span id='uiid_lbl_guizejieshi' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizejieshi') + "</span></td>" +			    		    			 	
			    		    			    "</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=3 class='td_heightdefault title_mn " + mn_displaygzjs + "' id='mn_gzjs_title'>MN</td>" +
			    		    					"<td rowspan=3 class='content_mn mongolnormal " + mn_displaygzjs + " " + mn_gzjsbgcolor + "' id='mn_gzjs_content'>" + getconvertedtext('mn_rcn',vvv.description_mn_rcn)  + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + mn_displaygzjs + " " + mn_gzjsbgcolor + "' id='mn_gzjs_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=1 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_zh " + zh_displaygzjs + "' id='zh_gzjs_title'>ZH</td>" +
			    		    					"<td class='content_zh mongolhorizontal " + zh_displaygzjs + " " + zh_gzjsbgcolor + "' id='zh_gzjs_content'>" + getconvertedtext('zh_rcn',vvv.description_zh_rcn)  + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + zh_displaygzjs + " " + zh_gzjsbgcolor + "' id='zh_gzjs_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=2 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_en " + en_displaygzjs + "' id='en_gzjs_title'>EN</td>" +
			    		    					"<td class='content_en mongolhorizontal " + en_displaygzjs + " " + en_gzjsbgcolor + "' id='en_gzjs_content'>" + getconvertedtext('en_rus',vvv.description_en_rus)  + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + en_displaygzjs + " " + en_gzjsbgcolor + "' id='en_gzjs_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=3 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td rowspan=4 class='title_rule'><span id='uiid_lbl_guizeneirong' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizeneirong') + "</span></td>" +
				    		    			"<tr>" +
			    		    					//"<td rowspan=3 class='title_rule'><span id='uiid_lbl_guizeneirong' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizeneirong') + "</span></td>" +
			    		    					"<td rowspan=3 class='td_heightdefault title_mn " + mn_displaygznr + "' id='mn_gznr_title'>MN</td>" +
			    		    					"<td rowspan=3 class='content_mn mongolnormal " + mn_displaygznr + "' id='mn_gznr_content'>" + getconvertedtext('mn_rcn',vvv.rulevalue) + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + mn_displaygznr + "' id='mn_gznr_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=4 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_zh " + zh_displaygznr + "' id='zh_gznr_title'>ZH</td>" +
			    		    					"<td class='content_zh mongolhorizontal " + zh_displaygznr + "' id='zh_gznr_content'>" + getconvertedtext('zh_rcn',vvv.rulevalue) + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + zh_displaygznr + "' id='zh_gznr_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=5 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='td_heightdefault title_en " + en_displaygznr + "' id='en_gznr_title'>EN</td>" +
			    		    					"<td class='content_en mongolhorizontal " + en_displaygznr + "' id='en_gznr_content'>" + getconvertedtext('en_rus',vvv.rulevalue) + "</td>" +
			    		    					//"<td class='content_img td_heightdefault " + en_displaygznr + "' id='en_gznr_img'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=6 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>" +
			    		    				"<tr>" +
			    		    					"<td class='title_rule'><span id='uiid_lbl_guizejuli' class='"+ uilangclass +"' uilang>" + getlanguagetext(global_now_uilanguage,'uiid_lbl_guizejuli') + "</span></td>" +
			    		    					"<td class='td_heightdefault title_mn'>MN</td>" +
			    		    					"<td class='content_mn mongolnormal'>" + getconvertedtext('mn_rcn',vvv.rulesample) +"</td>" +
			    		    					//"<td class='content_img td_heightdefault'><img class='img_edit' charindex='" + i + "' postindex='" + ii + "' ruleindex='" + iii + "' rulefiled=7 charcode='" + v.unicode + "' postype=0 ruletype=1 bxno='" + vv.bianxingno + "' ruleno='" + vvv.ruleno + "' src='./image/editit.png'/></td>" +
			    		    				"</tr>";
						});
				    });
					tablehtml += "</tbody>";
				}
				//词末形式.END ------------------------------------------------------------------------------------------------------------------------------
				tablehtml += "</table>";
		});
    tablehtml += "</td></tr></table>";
    allcharframe.append(tablehtml);
    //弹出画面：发布意见
    //$(".img_edit").click(doClickEditRuleButton);
    //$('#publishproposal_closedialog_btn').click(onClickClosePublishproposal);
    //$('#publishproposal_send_btn').click(onClickSendPubLish);
    //统计信息
    allcharframe.attr('bianx_num',bianx_num);
    allcharframe.attr('guize_dl_num',bianx_num);
    allcharframe.attr('guize_cz_num',guize_cz_num);
    allcharframe.attr('guize_cz_default_num',guize_cz_default_num);
    allcharframe.attr('guize_cz_force_num',guize_cz_force_num);
    //////////绑定事件//////////
    var tablechoose = $('.charchoose,.charletter,.title_czrule,.title_dlrule,.numbercharno,.content_dlruleindex,.content_czruleindex,.title_rule,.title_mn,.title_zh,.title_en,.content_mn,.content_zh,.content_en,.content_rules');//表格变形区域
    //背景色变换:点击
    tablechoose.click(function(e){
		//独立规则cell，鼠标经过任意td，获取整各cell
		var cls = $(this).attr('class');
		if(cls.indexOf('title_dlrule')!=-1 || cls.indexOf('content_dlruleindex')!=-1 || cls.indexOf('content_rules')!=-1){
			var this_self = $(this).parent();
			clickflag = false;
		}else{
			var this_self = $(this);
		}
    	onClickRuleChangeBgColor(e,this_self,'clickrulebgcolor');
    });
    //背景色变换:鼠标经过离开
    ///变形区域Cell///
    tablechoose.hover(function(){
    	if(global_ismouseover==true){
			//独立规则cell，鼠标经过任意td，获取整各cell
			var cls = $(this).attr('class');
			if(cls.indexOf('title_dlrule')!=-1 || cls.indexOf('content_dlruleindex')!=-1 || cls.indexOf('content_rules')!=-1) {
				var this_self = $(this).parent();
			}else{
				var this_self = $(this);
			}
    		onHoverRuleChangeBgColor(this_self,'overrulebgcolor');
    	}
    });
    ///全局Table区域///
    $('.onechars_title,.deformations').hover(function(){
    	if(global_ismouseover==true){
    		onHoverRuleChangeBgColor($(this),'overrulebgcolor');
    	}
    });
    //Ctrl + 鼠标事件
	$(document).keydown(function(){
		onKeyDown(event);
	});
}

//编辑图标 打开 Dialog
//charindex = 字母下标（数字）
//ruleindex = 规则下标（数字）
//rulefiled = 1（规则解释-蒙文），2（规则解解释-中文），3（规则解释-英文）
//            4（规则内容-蒙文），5（规则内容-中文），6（规则内容-英文）
//            7（规则举例）
//charcode='180a'
//postype=0（独立）,1（词首）,2（词中）,3（词末）
//ruletype=0(独立显示规则),1（词中显示规则）
//bxno=12(变形编号)
//ruleno=12(规则编号)
function doClickEditRuleButton(){
    if(doCheckBusyState(false)){
      doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_nowisdoing'), '系统提示');
      return;
    };
	var img = $(this);
	var charindex = img.attr("charindex");
	var postindex = img.attr("postindex");//（独立）（词首）（词中）（词末）
	var ruleindex = img.attr("ruleindex");
	var rulefiled = img.attr("rulefiled");
	var charcode  = img.attr("charcode"); 
	var postype   = img.attr("postype"); 
	var ruletype  = img.attr("ruletype"); 
	var bxno      = img.attr("bxno"); 
	var ruleno    = img.attr("ruleno");
	var dialogcontent = $("#dialog_allcharsframe");
	dialogcontent.empty();
	var allchars  = all_char_list.charlist[charindex];
	if(postype==0){//独立
		var postchars = allchars.isolate[postindex];
	}
	if(postype==1){//词首
		var postchars = allchars.initial[postindex];
	}
	if(postype==2){//词中
		var postchars = allchars.medial[postindex];
	}
	if(postype==3){//词末
		var postchars = allchars.final[postindex];
	}
	//
	if(rulefiled == 1){//（规则解释-蒙文）
		var content = getconvertedtext('mn_rcn',postchars.rules[ruleindex].description_mn_rcn);
	}
	if(rulefiled == 2){//（规则解解释-中文）
		var content = getconvertedtext('zh_rcn',postchars.rules[ruleindex].description_zh_rcn);
	}
	if(rulefiled == 3){//（规则解释-英文）
		var content = getconvertedtext('en_rus',postchars.rules[ruleindex].description_en_rus);
	}
	if(rulefiled == 4){//（规则内容-蒙文）
		var content = getconvertedtext('mn_rcn',postchars.rules[ruleindex].rulevalue);
	}
	if(rulefiled == 5){//（规则内容-中文）
		var content = getconvertedtext('zh_rcn',postchars.rules[ruleindex].rulevalue);
	}
	if(rulefiled == 6){//（规则内容-英文）
		var content = getconvertedtext('en_rus',postchars.rules[ruleindex].rulevalue);
	}
	if(rulefiled == 7){//（规则举例）
		var content = getconvertedtext('mn_rcn',postchars.rules[ruleindex].rulesample);
	}
	//独立显示规则
	if(ruletype==1){
		var ruleindexno = postchars.rules[ruleindex].ruleindex;
		var zixingindex = postchars.rules[ruleindex].ruleno;
		var ruleisolate = '';
	}else{
		var ruleindexno = postchars.ruleindex;
		var zixingindex = postchars.zixingindex;
		var ruleisolate = postchars.ruleisolate;
	}
	var tablehtml = '<div class="widget_area_small">' +
				    	'<span class="dialog_char uivertical mongolnormal">' + allchars.charvalue + '</span>' +
				    	'<span class="dialog_unicode">' + allchars.unicode + '</span>' +
				    	'<span class="dialog_laicode">' + allchars.latincode + '</span>' +
				        '<div class="widget_area_small-line"></div>' +
				    '</div>' +
		    
				    '<div class="dialog_charts">' +
				        '<table width="100%" class="dialog_chartable">' +
				        	'<tr>' +
				        		'<td class="dialog_title">字母形式' +'</td>' +
				        		'<td class="dialog_content">' + doGetTextForPublishproposal('postype',postype)  + '</td>' +
				        		'<td class="dialog_title">字母变形</td>' +
				        		'<td class="dialog_content_mn mongolnormal"><span class="uivertical">' + postchars.bianxingvalue + '</span></td>' +
				        	'</tr>' +
				        	'<tr>' +
				        		'<td class="dialog_title">变形编号' + '</td>' +
				        		'<td class="dialog_content">' + postchars.bianxingno + '</td>' +
				        		'<td class="dialog_title">规则编号' + '</td>' +
				        		'<td class="dialog_content">' + ruleindexno + '</td>' +
				        	'</tr>' +
				        	'<tr>' +
				        		'<td colspan=1  class="dialog_title">' + doGetTextForPublishproposal('ruletype',ruletype) + '</td>' +
			        			'<td colspan=3  class="dialog_content">' +
				        				'<span class="dialog_no">' + zixingindex + '</span>' +
				        				'<span class="dialog_index">' + getconvertedtext(global_now_uilanguage,ruleisolate) + '<span>' +
				        		'</td>' +
				        	'</tr>';

	      if(ruletype == 1){//词中规则
	      	 var mnclass = '';
	      	 if(rulefiled==1 || rulefiled==4){
	      	 	mnclass = ' dialog_content_mn';
	      	 }
		     tablehtml +=   '<tr>' +
				        		'<td colspan=1 valign="top">' +
				        			'<div class="dialog_gztitle">' + doGetTextForPublishproposal('rulefiled',rulefiled) + '</div>' +
				        		'</td>' +
				        		'<td colspan=3>' +
				        			'<div class="dialog_gzcontent mongolhorizontal' + mnclass + '">' +
				        				content +
				        			'</div>' +
				        		'</td>' +
				        	'</tr>';
		   }
		   tablehtml += '</table>' +
				   '</div>';
	dialogcontent.append(tablehtml);
	//读取数据
	$('#mail_name').val(dialogcontent.attr('useralias'));
	$('#mail_address').val(dialogcontent.attr('usermail'));
	//保存发表意见的相关数据
	dialogcontent.attr("unicoce",allchars.unicode)
	dialogcontent.attr("bxno",allchars.charindex)
	dialogcontent.attr("gzno",ruleindexno)
	dialogcontent.attr("isduli",ruletype)
	
    //弹出画面
	var dialogwindow = $("#publishproposal_dialog_display");
    dialogwindow.dialog('close')
    dialogwindow.dialog({
        top:30,
        title: '意见反馈',
        modal:true
    });
    dialogwindow.dialog('open');
    //清空意见内容 验证码
    $('#mail_content,#mail_code').val('');
    //更新验证码
    onClickCreateCode();
}

//关闭意见反馈Dialog
function onClickClosePublishproposal(){
    $('#publishproposal_dialog_display').dialog('close');
}

//返回规则编号颜色
function getRuleIDColor(item){
  if(item.isexcluderule == '1') {
  	  return 'font_magenta';
  }else if (item.ismscmodel == '1'){
  	  return 'font_maroon';
  }else{
      return 'font_blue';
  };
}

//规则统计弹出画面：打开
function onClickOpenTotal(){
	var allcharframe = $('#allcharframework');
	$("#chars_num,#bianxing_num,#guize_duli_num,#guize_cizhong_num,#guize_cizhong_default_num,#guize_cizhong_force_num").empty();
	$('#chars_num').append(all_char_list.charlist.length);
    $('#bianxing_num').append(allcharframe.attr('bianx_num'));
    $('#guize_duli_num').append(allcharframe.attr('guize_dl_num'));
    $('#guize_cizhong_num').append(allcharframe.attr('guize_cz_num'));
    $('#guize_cizhong_default_num').append(allcharframe.attr('guize_cz_default_num'));
    $('#guize_cizhong_force_num').append(allcharframe.attr('guize_cz_force_num'));
    //弹出画面
	var dialogwindow = $("#total_dialog_display");
    dialogwindow.dialog('close')
    dialogwindow.dialog({
        top:30,
        title: '规则统计',
        modal:true
    });
    dialogwindow.dialog('open');
}

//规则统计弹出画面：关闭
function onClickCloseTotal(){
    $('#total_dialog_display').dialog('close');
}

//按钮事件：意见反馈
function onClickSendPubLish(){
	//判断是否重复进入
	if(doCheckBusyState(true)){
		doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_nowisdoing'), '系统提示');
		return;
	};
	/**
	//初始化变量
	var dialogcontent=$('#dialog_allcharsframe');
	var useralias= $('#mail_name').val().trim();
	var usermail = $('#mail_address').val().trim();
	var usertext = $('#mail_content').val().trim();
	var capcode = $('#mail_code').val().trim();
	//有效性判断：用户名称（不能有特殊转移符）
	if(useralias.length == 0){
	   doSetIdleState();
       doDialogInformation('请输入您的姓名！','系统提示');
       return false;
	}
	var reg = /^(([^\^\.<>%&',;=?$"':#@!~\]\[{}\\/`\|])*)$/; 
    if (!reg.test(useralias)) {
	   doSetIdleState();
       doDialogInformation('姓名不可以有特殊字符，请重新填写！','系统提示');
       return false;
  	}
	//有效性判断：邮件地址
	if(usermail.length == 0){
	    doSetIdleState();
		doDialogInformation('请输入您的邮箱件地址！','系统提示');
		return false;
	}
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if (!reg.test(usermail)) {
	   doSetIdleState();
       doDialogInformation('邮箱格式不正确，请重新填写！','系统提示');
       return false;
  	}
	//有效性判断：用户意见
	if(usertext.length==0){
		doSetIdleState();
		doDialogInformation('请输入您要发表的意见内容！','系统提示');
		return false;
	}
	//有效性判断：验证码
	if(capcode.length==0){
		doSetIdleState();
		doDialogInformation('请输入验证码！','系统提示');
		return false;
	}
	*/
	//将用户名和用户地址写入网页元素属性里
	dialogcontent.attr('useralias',useralias);
	dialogcontent.attr('usermail',usermail);
	
	//与服务器通信
	var unicoce   = dialogcontent.attr("unicoce");
	var bxno      = dialogcontent.attr("bxno");
	var gzno      = dialogcontent.attr("gzno");;
	var isduli    = dialogcontent.attr("isduli");
	$.ajax({
	    //url:'./doadvice.php',
	    type:'post',
	    dataType:'json',
	    data:{version:all_char_list.version,unicoce:unicoce,bxno:bxno,gzno:gzno,isduli:isduli,useralias:useralias,usermail:usermail,usertext:usertext,capcode:capcode},
	    /**
	    error:function(){
	       doSetIdleState();
	       doDialogInformation('error','系统提示');
	    },
	    success:function(data){
	       doSetIdleState();
	       if(data.result==true){
	       	    var title = '系统提示';
	       	    var msg   = '提交意见成功，谢谢您的支持！ <br>' + 
	       	    	        '用户编号：' + data.uscode + '<br>' +
	       	    		    '意见编号：' + data.qacode;
	       		doDialogInformation(msg ,title,function(){ $('#publishproposal_dialog_display').dialog('close'); });
	       }else{
	       	   	var title = '系统提示';
	       	   	var msg   = '抱歉，提交意见失败！<br>' + 
	       	   	            data.rsmsg + '[' + data.rscode + ']';
	       		doDialogInformation(msg, title);
	       }
	    }
	    */
	});
}

//根据img的属性转换界面中文语言
function doGetTextForPublishproposal(attr,id){
	if(attr == 'rulefiled'){//规则字段(规则解释[蒙,中,英]，规则内容[蒙,中,英]，规则举例)
		switch(id)
		{
		case '1':
		  return '规则解释<br>(蒙古文)';
		  break;
		case '2':
		  return '规则解释<br>(中文)';
		  break;
		case '3':
		  return '规则解释<br>(英文)';
		  break;
		case '4':
		  return '规则内容<br>(蒙古文)';
		  break;
		case '5':
		  return '规则内容<br>(中文)';
		  break;
		case '6':
		  return '规则内容<br>(英文)';
		  break;
		case '7':
		  return '规则举例';
		  break;
		default:
		  return '未知 rulefiled';
		}
	}
	if(attr == 'postype'){
		switch(id)
		{
		case '0':
		  return '独立形式';
		  break;
		case '1':
		  return '词首形式';
		  break;
		case '2':
		  return '词中形式';
		  break;
		case '3':
		  return '词末形式';
		  break;
		default:
		  return '未知 postype';
		}
	}
	if(attr == 'ruletype'){
		switch(id)
		{
		case '0':
		  return '独立规则';
		  break;
		case '1':
		  return '词中规则';
		  break;
		default:
		  return '未知 ruletype';
		}
	}
	
}

//获取复选框组的数值数组
function getCheckBoxValue(name) {
    var value = [];
    $("input[name='" + name + "']:checked").each(function () {
        value.push($(this).attr('value'));
    });
    return value;
}

//通用对话框：无模提示信息对话框
//支持默认参数，如果不指定参数，那么采用默认值，如果要传入参数，那么顺序为：(content,title)
function doDialogInformation() {
    //初始化
    var closeit = function () {$('#dialoginformation').dialog('close');};
    var content = arguments[0] ? arguments[0] : '未知提示信息';
    var title = arguments[1] ? arguments[1] : '提示信息';
    var okcb = arguments[2] ? arguments[2] : null;
    //显示对话框
    var dlg = $('#dialoginformation');
    dlg.dialog('close');
    dlg.dialog({
                content:content,
                title: title,
                iconCls:"icon-save",
                top:300,
                modal: false,
                buttons: [{
                    text: '确定',
                    iconCls: 'icon-ok',
                    handler: function(){ dlg.dialog('close'); },
                    onClick: okcb
                }]
            });
    dlg.dialog('open');
    //dlg.dialog('center');
};


//响应验证码切事件【看不清，换一张】
function onClickCreateCode() {
	$("#codepng").attr("src","./docaptcha.php?" + Math.random()*10000) 
}

/**
//通用对话框：正在处理中，正在通信中....（无模式）
function doShowBusyDialog(ishow) {
    //临时显示与否开关变量，以后省事。
    var usesplash = true;
    //是否显示
    if (!usesplash) { return true; };
    //初始化
    var spin = $('#spinbusy');
    
    if(global_spinner==null){
        var opts = {
          lines: 12, // The number of lines to draw
          length: 25, // The length of each line
          width: 3, // The line thickness
          radius: 18, // The radius of the inner circle
          corners: 1, // Corner roundness (0..1)
          rotate: 0, // The rotation offset
          direction: 1, // 1: clockwise, -1: counterclockwise
          color: 'red', // #rgb or #rrggbb or array of colors
          speed: 1, // Rounds per second
          trail: 100, // Afterglow percentage
          shadow: false, // Whether to render a shadow
          hwaccel: false, // Whether to use hardware acceleration
          className: 'spindoing', // The CSS class to assign to the spinner
          zIndex: 2000000000, // The z-index (defaults to 2000000000)
          top: '50%', // Top position relative to parent
          left: '50%' // Left position relative to parent
        };
        global_spinner = new Spinner(opts);
    }
    //动画显示
    if (ishow) {
        global_spinner.spin(document.getElementById('spinbusy'));
    } else {
        global_spinner.stop();
    };
};

//初始化版本列表选择框
function doInitializeSelectVersion(){
	var versioncombobox = $('#version_select');
    if (versioncombobox.length<=0){  return true; };
    versioncombobox.combobox({
        mode: 'local',
        multiple: false,
        editable: false,
        valueField: 'id',
        textField: 'name',
        value:getDefaultDataVersionID(),
        data:global_data_version_list,
        onSelect: function (record) {
          //版本未变动
          if(all_char_list.version==record.name){ return true; };
          //检查忙碌状态
          if(doCheckBusyState(true)){
            doDialogInformation(getlanguagetext(global_now_uilanguage,'uiid_txt_nowisdoing'), '系统提示');
            return false;
          };
          //为了能显示动画，也需要timer事件
          setTimeout('doChangeDataVersion("'+all_char_list.version+'","'+record.name+'")',200);
        }
    });
};
//切换版本
function doChangeDataVersion(fmVersion,toVersion){
  $('#dataversionscriptitem').remove();
  doLoadScript('dataversionscriptitem','./data/xunifont_allchars_'+toVersion+'.js',function(){
	//恢复check默认值
	doInitializeDefautCheck();
    //初始化字符
    doInitializeLoadChars(true);
    doSetIdleState();
  });
};
*/
//初始化语言列表选择框：导出文件
function doInitializePrintFileSelectLang(){
	var versioncombobox = $('#printfile_lang');
    if (versioncombobox.length<=0){  return true; };
    versioncombobox.combobox({
        mode: 'local',
        multiple: false,
        editable: false,
        valueField: 'id',
        textField: 'name',
        value: 'zh_rcn',
        data:[{ 'id':'zh_rcn', 'name': '中文' },{ 'id':'mn_rcn', 'name': '蒙文' },{ 'id':'en_rus', 'name': '英文' }],
        onSelect: function (record) {

        }
    });
};
/**
//初始化版本列表选择框：导出文件
function doInitializePrintFileSelectVersion(){
	var versioncombobox = $('#printfile_verison');
    if (versioncombobox.length<=0){  return true; };
    versioncombobox.combobox({
        mode: 'local',
        multiple: false,
        editable: false,
        valueField: 'name',
        textField: 'name',
        value:global_data_version_default,
        data:global_data_version_list,
        onSelect: function (record) {

        }
    });
};

//获取最新版本号的name值,用于默认文件
function getDefaultDataVersionName(){
  return global_data_version_default;
};

//获取最新版本号的ID值,用于默认文件
function getDefaultDataVersionID(){
  var rs=1;
  $.each(global_data_version_list, function (n, value) {
    if(value.name==global_data_version_default){
      rs = value.id;
    };
  });
  return rs;
};
*/
//获取网址参数数组
function GetRequest(){
  var url = location.search;
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) { 
      theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
    }
  }
  return theRequest; 
};

//动态加载脚本（支持跨域）
function doLoadScript(id,url,callback){
	var head = document.head || document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type= 'text/javascript';
	script.id= id;
	script.src= url;
	script.onload = script.onreadystatechange = function() {
	  if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ) {
	  	//回调：成功
	  	callback();
	    //Handle memory leak in IE 
	    script.onload = script.onreadystatechange = null;  
	  }
	};
	head.appendChild(script);
};

//初始化CheckBox默认值
function doInitializeDefautCheck(){
	//规则语言
	if($.inArray("mn_rcn", global_def_rulelanguage)>-1){  
		document.getElementById("gzyy_mn").checked=true; //$("#gzyy_mn").attr("checked", true);
	}else{
		document.getElementById("gzyy_mn").checked=false;
	}
	if($.inArray("zh_rcn", global_def_rulelanguage)>-1){
		document.getElementById("gzyy_zh").checked=true;
	}else{
		document.getElementById("gzyy_zh").checked=false;
	}
	if($.inArray("en_rus", global_def_rulelanguage)>-1){
		document.getElementById("gzyy_en").checked=true;
	}else{
		document.getElementById("gzyy_en").checked=false;
	}
	//描述语言
	if($.inArray("mn_rcn", global_def_desclanguage)>-1){
		document.getElementById("msyy_mn").checked=true;
	}else{
		document.getElementById("msyy_mn").checked=false;
	}
	if($.inArray("zh_rcn", global_def_desclanguage)>-1){
		document.getElementById("msyy_zh").checked=true; 
	}else{
		document.getElementById("msyy_zh").checked=false; 
	}
	if($.inArray("en_rus", global_def_desclanguage)>-1){
		document.getElementById("msyy_en").checked=true; 
	}else{
		document.getElementById("msyy_en").checked=false; 
	}
}
