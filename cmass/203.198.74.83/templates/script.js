// Modifing by 

// open window functions
//dim on 20080331 by user comment
/*function showMonthSelect() {
	var i=0;
	var obj = document.getElementsByName('SelectYear')[0];
	var MonthObj = document.getElementsByName('SelectMonth');
	var yearSelectedValue = obj.options.value;
	
	for (i=0; i< MonthObj.length; i++) {
		MonthObj[i].style.visibility = 'hidden';
		MonthObj[i].disabled = true;
	}
	
	
	document.getElementById(yearSelectedValue).style.visibility = 'visible';
	document.getElementById(yearSelectedValue).disabled = false;
}*/

var newWin;

function newWindow(url, winType) 
{

        win_name = "intranet_popup";
        win_size = "resizable,scrollbars,status,top=40,left=40,width=400,height=400";
        if(winType==0){
                win_name = "intranet_popup0";
                win_size = "resizable,scrollbars,status,top=40,left=40,width=400,height=400";
        }
        if(winType==1){
                win_name = "intranet_popup1";
                win_size = "resizable,scrollbars,status,top=40,left=40,width=600,height=400";
        }
        if(winType==2){
                win_name = "intranet_popup2";
                win_size = "resizable,scrollbars,status,top=40,left=40,width=500,height=400";
        }
        if(winType==3){
                win_name = "intranet_popup3";
                win_size = "toolbar,location,resizable,scrollbars,status,top=40,left=40,width=600,height=400";
        }
        if(winType==4){
                win_name = "intranet_popup4";
                win_size = "menubar,resizable,scrollbars,status,top=40,left=40,width=600,height=400";
        }
        if(winType==5){
                win_name = "intranet_popup5";
                win_size = "menubar,toolbar,resizable,scrollbars,status,top=40,left=40,width=620,height=400";
        }
        if(winType==6){
                win_name = "intranet_popup6";
                win_size = "resizable,scrollbars,status,top=40,left=40,width=500,height=350";
        }
        if(winType==7){
                win_name = "intranet_popup7";
                win_size = "toolbar,resizable,scrollbars,status,top=40,left=40,width=600,height=400";
        }
        if(winType==8){
                win_name = "intranet_popup8";
                win_size = "menubar,toolbar,resizable,scrollbars,status,top=40,left=40,width=800,height=500";
        }
        if(winType==9){
                win_name = "intranet_popup9";
                win_size = "resizable,scrollbars,status,top=40,left=500,width=500,height=500";
        }
        if(winType==10){
                win_name = "intranet_popup10";
                win_size = "resizable,scrollbars,status,top=40,left=40,width=800,height=600";
        }
        if(winType==11){
                win_name = "intranet_popup11";
                win_size = "resizable,scrollbars,status,top=40,left=40,width=500,height=500";
        }
        if(winType==12){
                win_name = "intranet_popup12";
                win_size = "resizable,scrollbars,status,top=40,left=40,width=630,height=400";
        }
		if(winType==13){
                                // backend status window
                win_name = "intranet_popup13";
                win_size = "scrollbars=no,top=140,left=140,width=400,height=300";
        }
		if(winType==14){
				win_name = "intranet_popup14";
				win_size = "menubar,resizable,scrollbars,status,top=40,left=40,width=630,height=600";
        }
		if(winType==15){
				win_name = "intranet_popup15";
				win_size = "resizable,scrollbars,status,top=40,left=40,width=500,height=550";
        }
        if(winType==16)
        {	        
                win_name = "intranet_popup16";
                win_size = "menubar,resizable,scrollbars,status,top=40,left=40,width=600,height=500";
        }
        if(winType==17)
        {	        
			//For powervoice use	        
			win_name = "intranet_popup17";
			win_size = "menubar=no,resizable,scrollbars,status,top=40,left=40,width=580,height=310";
        }
        if(winType==18)
        {	        
			//For powervoice use	        
			win_name = "intranet_popup18";
			win_size = "menubar=no,resizable,scrollbars=no,status,top=40,left=40,width=380,height=200";
        }
        if(winType==19)
        {	        
			//For Merit Summary iportfolio v2.5	        
			win_name = "intranet_popup19";
			win_size = "resizable,scrollbars,status=0,top=40,left=40,width=670,height=540";
        }
				if(winType==21){
		//for HTML editor page
			win_name = "ec_popup21";
			win_size = "status,top=30,left=130,width=720,height=520";

				}
				if(winType==22){
			//for iPortfolio Assessment Statistic Report Pop-up
			win_name = "ec_popup22";
			win_size = "toolbar,location,resizable,scrollbars,status,top=10,left=10,width=700,height=500";
				}
				if(winType==23){
		// for printing
		win_name = "ec_popup23";
		win_size = "menubar,resizable,scrollbars,top=40,left=40,width=640,height=480";
				}
		if(winType==24){
			//for print mode of attendance
            win_name = "intranet_popup24";
            win_size = "menubar,resizable,scrollbars,status,top=40,left=40,width=800,height=700";
        }
				if(winType==27){
		//for iPortfolio SAMS import
		win_name = "ec_popup27";
		win_size = "resizable,scrollbars=1,top=110,left=150,width=560,height=410";
		}
		if(winType==28){
		//for iPortfolio report printing
		win_name = "ec_popup28";
		win_size = "menubar,resizable,scrollbars=1,top=20,left=20,width=800,height=570";
		}
				if(winType==93){
			//for iPortfolio Learning Portfolio
			win_name = "ec_popup93";
			win_size = "toolbar,location,resizable,scrollbars,status,top=10,left=10,width=800,height=600";
				}
				if(winType==94){
			//for iPortfolio Learning Portfolio
			win_name = "ec_popup94";
			win_size = "toolbar,location,resizable,scrollbars,status,top=10,left=10,width=800,height=300";
				}
				if(winType==95){
			//for full screen
			win_name = "ec_popup95";
			win_size = "toolbar,location,resizable,scrollbars,status,fullscreen=yes,top=0,left=0";
				}
		if(winType==30){
			// iCalendar 
            win_name = "intranet_popup30";
            win_size = "menubar,toolbar,resizable,scrollbars,status,top=40,left=40,width=1000,height=500";
        }
				
        
//	if (newWin!=null && (navigator.appName=="Netscape")) newWin.close();
        newWin = window.open (url, win_name, win_size);
	if ((navigator.appName=="Netscape") || (navigator.appName=="Microsoft Internet Explorer" && navigator.appVersion.indexOf("MSIE")>1))
		 newWin.focus();

}

function newWindowNotClose(url, winType,name) {
        var newWindow;
        win_name = name;
        win_size = "resizable,scrollbars,status,top=40,left=40,width=400,height=400";
        if(winType==0){
                win_size = "resizable,scrollbars,status,top=40,left=40,width=400,height=400";
        }
        if(winType==1){
                win_size = "resizable,scrollbars,status,top=40,left=40,width=600,height=400";
        }
        if(winType==2){
                win_size = "resizable,scrollbars,status,top=40,left=40,width=500,height=400";
        }
        if(winType==3){
                win_size = "toolbar,location,resizable,scrollbars,status,top=40,left=40,width=600,height=400";
        }
        if(winType==4){
                win_size = "menubar,resizable,scrollbars,status,top=40,left=40,width=600,height=400";
        }
        if(winType==5){
                win_size = "menubar,toolbar,resizable,scrollbars,status,top=40,left=40,width=600,height=400";
        }
        if(winType==6){
                win_size = "menubar,resizable,scrollbars,status,top=40,left=40,width=500,height=350";
        }
        if(winType==7){
                win_size = "toolbar,resizable,scrollbars,status,top=40,left=40,width=600,height=400";
        }
        if(winType==8){
                win_size = "menubar,toolbar,resizable,scrollbars,status,top=40,left=40,width=800,height=500";
        }
        if(winType==9){
                win_size = "resizable,scrollbars,status,top=40,left=500,width=500,height=500";
        }
        if(winType==10){
                win_size = "resizable,scrollbars,status,top=40,left=40,width=800,height=600";
        }
        if(winType==11){
                win_size = "resizable,scrollbars,status,top=40,left=40,width=500,height=500";
        }
        if(winType==12){
                win_size = "menubar,resizable,scrollbars,status,top=40,left=40,width=630,height=400";
        }
        if(winType==13){
		win_size = "status,top=30,left=130,width=720,height=520";
		}
		if(winType==14){
		win_size = "menubar,resizable,scrollbars,top=40,left=40,width=640,height=480";
		}
//        if (navigator.appName=="Microsoft Internet Explorer" && navigator.appVersion >="4")
        newWindow = window.open (url, win_name, win_size);
        if (navigator.appName=="Netscape" && navigator.appVersion >= "3") newWindow.focus();
}

// trim functions
function LTrim(str){
        var whitespace = new String(" \t\n\r");
        var s = new String(str);
        if (whitespace.indexOf(s.charAt(0)) != -1) {
                var j=0, i = s.length;
                while (j < i && whitespace.indexOf(s.charAt(j)) != -1)
                        j++;
                s = s.substring(j, i);
        }
        return s;
}
function RTrim(str){
        var whitespace = new String(" \t\n\r");
        var s = new String(str);
        if (whitespace.indexOf(s.charAt(s.length-1)) != -1) {
                var i = s.length - 1;       // Get length of string
                while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1)
                        i--;
                s = s.substring(0, i+1);
        }
        return s;
}
function Trim(str){
        return RTrim(LTrim(str));
}

// form validation functions
function setChecked(val, obj, element_name){
        len=obj.elements.length;
        var i=0;
        for( i=0 ; i<len ; i++) {
                if (obj.elements[i].name==element_name)
                obj.elements[i].checked=val;
        }
}
function countChecked(obj, element_name){
        len=obj.elements.length;
        var i=0;
        var j=0;
        for( i=0 ; i<len ; i++) {
                if (obj.elements[i].name==element_name && obj.elements[i].checked)
                j=j+1;
        }
        return j;
}
function returnChecked(obj, element_name){
        len=obj.elements.length;
        var i=0;
        for( i=0 ; i<len ; i++) {
                if (obj.elements[i].name==element_name && obj.elements[i].checked)
				{
					//alert(obj.elements[i].value);
                return obj.elements[i].value;
				}
        }
        return null;
}
function check_text(f, msg){
        if(Trim(f.value)==""){
                alert(msg);
                f.value="";
                f.focus();
                return false;
        }else{
                return true;
        }
}
function check_select(f, msg, g){
        if(Trim(f.options[f.selectedIndex].value)==g){
                alert(msg);
                f.focus();
                return false;
        }else{
                return true;
        }
}
function check_checkbox(obj,element){
        if(countChecked(obj,element)==0){
                return false;
        } else {
                return true;
        }
}

function check_int(f,d,msg){
        if(isNaN(parseInt(f.value)) || parseInt(f.value)==0){
                alert(msg);
                f.value=d;
                f.focus();
                return false;
        }else{
                f.value=parseInt(f.value);
                return true;
        }
}

function check_positive_int (f,msg,d,rollback)
{
     value = parseInt(f.value);
     if (isNaN(value) || value < 0)
     {
         alert(msg);
         f.focus();
         if (rollback==1)
         {
         	f.value=d;
     	}
         return false;
     }
     else
     {
         f.value = value;
         return true;
     }
}
function check_positive_nonzero_int (f,msg)
{
     value = parseInt(f.value);
     if (isNaN(value) || value <= 0)
     {
         alert(msg);
         f.focus();
         return false;
     }
     else
     {
         f.value = value;
         return true;
     }
}
function check_percentage (f,msg)
{
	value = parseFloat(f.value);
	
	if (value == null || isNaN(value) || value < 0 || value > 100 || !IsNumeric(f.value))
	{
		alert(msg);
		f.focus();
		return false;
	}
	else
	{
		f.value = value;
        return true;
	}
}
function check_date(obj, msg){
        var err = 0;
        d_a = obj.value;
        if (d_a.length != 10) err = 1;
        d_b = parseInt(d_a.substring(0, 4),10)        // year
        d_c = d_a.substring(4, 5)                                // '-'
        d_d = parseInt(d_a.substring(5, 7),10)        // month
        d_e = d_a.substring(7, 8)                                // '-'
        d_f = parseInt(d_a.substring(8, 10),10)        // day
        // basic error checking
        if(d_b<0 || d_b>3000 || isNaN(d_b)) err = 1;
        if(d_c != '-') err = 1;
        if(d_d<1 || d_d>12 || isNaN(d_d)) err = 1;
        if(d_e != '-') err = 1;
        if(d_f<1 || d_f>31 || isNaN(d_f)) err = 1;
        // advanced error checking
        // months with 30 days
        if((d_d==4 || d_d==6 || d_d==9 || d_d==11) && (d_f==31)) err = 1;
        // february, leap year
        if(d_d==2){ // feb
                var d_g = parseInt(d_b/4)
                if(isNaN(d_g)) err = 1;
                if(d_f>29) err = 1;
                if(d_f==29 && ((d_b/4)!=parseInt(d_b/4))) err = 1;
        }
        if(err==1){
                alert(msg);
                obj.focus();
                return false;
        }else{
                return true;
        }
}
function check_time(obj,msg)
{
        var err = 0;
        d_a = obj.value;
        if (d_a.length != 8) err = 1;
        d_b = parseInt(d_a.substring(0, 2),10)        // hr
        d_c = d_a.substring(2, 3)                                // ':'
        d_d = parseInt(d_a.substring(3, 5),10)        // min
        d_e = d_a.substring(5, 6)                                // ':'
        d_f = parseInt(d_a.substring(6, 8),10)        // sec
        // basic error checking
        if(d_b<0 || d_b>23 || isNaN(d_b)) err = 1;
        if(d_c != ':') err = 1;
        if(d_d<0 || d_d>59 || isNaN(d_d)) err = 1;
        if(d_e != ':') err = 1;
        if(d_f<0 || d_f>59 || isNaN(d_f)) err = 1;
        if(err==1){
                alert(msg);
                obj.focus();
                return false;
        }else{
                return true;
        }
}

function check_time2(obj,msg)
{
        var err = 0;
        d_a = obj.value;
        if (d_a.length != 5) err = 1;
        
        if(isNaN(d_a.substring(0, 2)) || isNaN(d_a.substring(3, 5)))	err=1;
        
        if(err!=1)
        {
	        d_b = parseInt(d_a.substring(0, 2),10)        // hr
	        d_c = d_a.substring(2, 3)                                // ':'
	        d_d = parseInt(d_a.substring(3, 5),10)        // min
	        // basic error checking
	        if(d_b<0 || d_b>23 || isNaN(d_b)) err = 1;
	        if(d_c != ':') err = 1;
	        if(d_d<0 || d_d>59 || isNaN(d_d)) err = 1;
		}
	
        if(err==1){
                alert(msg);
                obj.focus();
                return false;
        }else{
                return true;
        }
}

function compareDate(s1,s2)
{		
        y1 = parseInt(s1.substring(0,4),10);
        y2 = parseInt(s2.substring(0,4),10);
        m1 = parseInt(s1.substring(5,7),10);
        m2 = parseInt(s2.substring(5,7),10);
        d1 = parseInt(s1.substring(8,10),10);
        d2 = parseInt(s2.substring(8,10),10);

        if (y1 > y2)
        {
                return 1;
        }
        else if (y1 < y2)
        {
                return -1;
        }
        else if (m1 > m2)
        {
                return 1;
        }
        else if (m1 < m2)
        {
                return -1;
        }
        else if (d1 > d2)
        {
                return 1;
        }
        else if (d1 < d2)
        {
                return -1;
        }
        return 0;


}

function checkRegEx(str,msg){
        var RE1 = new RegExp("[^0-9a-zA-Z]");
        if (RE1.test(str)){
                alert(msg);
                return false;
        }else{
                return true;
        }
}

function checkRegEx2(str,msg){
        var RE1 = new RegExp("[^0-9a-zA-Z_]");
        if (RE1.test(str)){
                alert(msg);
                return false;
        }else{
                return true;
        }
}

function validateEmail(obj,msg){
        //var re = /^[\w_.-]+@[\w-]+(\.\w+)+$/;
        //var re = /^.+@.+\..{2,3}$/;
        //var re = /^[\w_\.\-]+@[\w_\-]+\.[\w]{2,3}$/;
        var re = /^([\w_\.\-])+\@(([\w_\.\-])+\.)+([\w]{2,4})+$/;	
        if (re.test(obj.value)) {
                return true;
        }else{
                alert(msg);
                obj.focus();
                return false;
        }
}
function validateFilename(str){
        var re = /[:<>\\\/\|\*\?"]/;
        if (re.test(str)) {
                alert(globalAlertMsg25);
                return false;
        }else{
                return true;
        }
}
function validateURL(obj,msg){
        var re = /http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/;
        if (re.test(obj.value)) {
                return true;
        }else{
                alert(msg);
                obj.focus();
                return false;
        }
}

// page functions
function gopage(page, obj){
        obj.pageNo.value=page;
        obj.submit();
}
function sortPage(a, b, obj){
	    obj.order.value=a;
        obj.field.value=b;
        obj.pageNo.value=1;
        obj.submit();
}

// menu bar functions
function checkNew(page){
        self.location.href=page;
}
function checkPost(obj,url){
        obj.action=url;
        obj.method = "post";
        obj.submit();
}
function checkGet(obj,url){
        obj.action=url;
        obj.method = "get";
        obj.submit();
}
function AlertPost (obj,url,msg){
        if(confirm(msg)){
           obj.action=url;
           obj.method = "post";
           obj.submit();
        }
}
function checkRemoveAll(obj,url){
        if(confirm(globalAlertMsgRemoveAll)){
           obj.action=url;
           obj.method = "get";
           obj.submit();
        }
}

function checkEdit(obj,element,page){
        if(countChecked(obj,element)==1) {
                obj.action=page;
                obj.submit();
        } else {
                alert(globalAlertMsg1);
        }
}
function checkRemove(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                if(confirm(globalAlertMsg3)){	            
                obj.action=page;                
                obj.method="POST";
                obj.submit();				             
                }
        }
}
function checkReject(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                if(confirm(globalAlertMsgReject)){
                obj.action=page;
                obj.method="POST";
                obj.submit();
                }
        }
}
function checkRejectNoDel(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                if(confirm(globalAlertMsgRejectNoDel)){
                obj.action=page;
                obj.method="POST";
                obj.submit();
                }
        }
}
function checkRestore(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                obj.action=page;
                obj.submit();
        }
}
function checkApprove(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                if(confirm(globalAlertMsg4)){
                obj.action=page;
                obj.submit();
                }
        }
}
function checkActivate(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                if(confirm(globalAlertActivate)){
                obj.action=page;
                obj.submit();
                }
        }
}

function checkSuspend(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                if(confirm(globalAlertMsg5)){
                obj.action=page;
                obj.submit();
                }
        }
}

function checkPublish(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                if(confirm(globalAlertMsg26)){
                obj.action=page;
                obj.submit();
                }
        }
}

function checkUnpublish(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                if(confirm(globalAlertMsg27)){
                obj.action=page;
                obj.submit();
                }
        }
}

function checkSwap(obj,element,page){
        if(countChecked(obj,element)!=2)
                alert(globalAlertMsg6);
        else{
                if(confirm(globalAlertMsg7)){
                obj.action=page;
                obj.submit();
                }
        }
}
function checkImport(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                obj.action=page;
                obj.submit();
        }
}
function checkIdentity(obj,element){
        if(countChecked(obj,element)==0){
                alert(globalAlertMsg14);
                return false;
        }else{
                return true;
        }
}
function checkRole(obj,element,page){
        if(countChecked(obj,element)==0){
                alert(globalAlertMsg2);
        }else{
                obj.action=page;
                obj.submit();
        }
}
function checkArchive(obj,element,page){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                if(confirm(globalAlertMsg21)){
                obj.action=page;
                obj.submit();
                }
        }
}

function checkAlert(obj,element,page,msg){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                if(confirm(msg)){
                obj.action=page;
                obj.method="POST";
                obj.submit();
                }
        }
}
function checkPrompt(obj,element,page,msg,data,defaultmsg){
        if(countChecked(obj,element)==0)
                alert(globalAlertMsg2);
        else{
                var inputdata = prompt(msg,defaultmsg);
                if (inputdata==null) return;
                else {
                data.value = inputdata;
                obj.action=page;
                obj.method="POST";
                obj.submit();
                }
        }
}

function countOption(obj){
        checkOption(obj);
        var j = 0;
        for(i=0; i<obj.length; i++){
                if(obj.options[i].selected == true){
                        j = j+1;
                }
        }
        return j;
}

function checkOption(obj){
        for(i=0; i<obj.length; i++){
                if(obj.options[i].value== ''){
                        obj.options[i] = null;
                }
        }
}

function checkOptionAll(obj){
        checkOption(obj);
        for(i=0; i<obj.length; i++){
                obj.options[i].selected = true;
        }
}

function checkOptionNone(obj){
        for(i=0; i<obj.length; i++){
                obj.options[i].selected = false;
        }
}

function checkOptionAdd(obj, text, value){
        obj.options[obj.length] = new Option(text, value, false, false);
}

function checkOptionRemove(obj){
        checkOption(obj);
        i = obj.selectedIndex;
        while(i!=-1){
                obj.options[i] = null;
                i = obj.selectedIndex;
        }
}

function checkOptionClear(obj){
        i = obj.length;
        while(i!=-1){
                obj.options[i] = null;
                i = i - 1;;
        }
}

function checkOptionTransfer(from,to){
        checkOption(from);
        checkOption(to);
        i = from.selectedIndex;
        while(i!=-1){
                to.options[to.length] = new Option(from.options[i].text, from.options[i].value, false, false);
                from.options[i] = null;
                i = from.selectedIndex;
        }
}

function jGET_MULTIPLE_OPTIONS_VALUE(obj)
{
	var jReturnArray = new Array();
	var jCount = 0;
	for (var i=0; i<obj.options.length; i++)
	{
		if (obj.options[i].selected)
		{
			if(obj.options[i].value>0)
			{
				jReturnArray[jCount] = obj.options[i].value;
				jCount++;
			}
		}
	}

	return jReturnArray;
}

// browser checker
function Browser() {
        var b=navigator.appName;
        if (b=="Netscape") this.b="ns";
        else if ((b=="Opera") || (navigator.userAgent.indexOf("Opera")>0)) this.b = "opera";
        else if (b=="Microsoft Internet Explorer") this.b="ie";
        if (!b) alert('Unidentified browser./nThis browser is not supported,');
        this.version=navigator.appVersion;
        this.v=parseInt(this.version);
        this.ns=(this.b=="ns" && this.v>=4);
        this.ns4=(this.b=="ns" && this.v==4);
        this.ns6=(this.b=="ns" && this.v==5);
        this.ie=(this.b=="ie" && this.v>=4);
        this.ie4=(this.version.indexOf('MSIE 4')>0);
        this.ie5=(this.version.indexOf('MSIE 5')>0);
        this.ie55=(this.version.indexOf('MSIE 5.5')>0);
        this.opera=(this.b=="opera");
        this.dom=(document.createElement && document.appendChild && document.getElementsByTagName)?true:false;
        this.def=(this.ie||this.dom); // most used browsers, for faster if loops
        var ua=navigator.userAgent.toLowerCase();
        if (ua.indexOf("win")>-1) this.platform="win32";
        else if (ua.indexOf("mac")>-1) this.platform="mac";
        else this.platform="other";
}
is = new Browser();
if(is.ie) {
document.writeln("<link rel=stylesheet href=/templates/ie.css>");
document.writeln("<META HTTP-EQUIV='Pragma' CONTENT='no-cache'>");
}

// filesystem functions
function fs_view(url){
        newWindow(url,6);
}
function fs_openfolder(folder, obj, page){
        obj.path.value = (folder == "..") ? obj.path.value.substring(0,obj.path.value.lastIndexOf("/")) : obj.path.value + "/" + folder;
        obj.action = page;
        obj.submit();
}
function fs_newfolder(obj, page){
        folder = prompt(globalAlertMsg8, "New_Folder");
        if(folder!=null && Trim(folder)!=""){
                if(validateFilename(folder)){
                        obj.folderName.value = folder;
                        obj.action = page;
                        obj.submit();
                }
        }
}
function fs_fileupload(obj, page){
        if(check_int(obj.no_file, 1, globalAlertMsg9)){
                obj.action = page;
                obj.submit();
        }
}
function fs_attachfile(obj, element, target){
        var x = "";
        for(var i=0;i<obj.elements.length;i++){
                if (obj.elements[i].name==element && obj.elements[i].checked){
                        if (x!='') x = x + " : ";
                        x = x + obj.path.value + '/' + obj.elements[i].value
                }
        }
        target.value = x;
        self.close();
}
function fs_rename(obj, element, page){
        var flag=0;
        if(countChecked(obj,element)==1) {
                filename = prompt(globalAlertMsg10, returnChecked(obj, element))
                if(filename!=null && Trim(filename)!=""){
                        if(validateFilename(filename)){
                                for(var i=0 ; i<obj.elements.length ; i++) {
                                        if (obj.elements[i].name==element && obj.elements[i].value==filename)
                                        flag=1;
                                }
                                if(flag==1){
                                        alert(globalAlertMsg11);
                                }else{
                                        obj.newName.value = filename;
                                        obj.action = page;
                                        obj.submit();
                                }
                        }
                }
        } else {
                alert(globalAlertMsg1);
        }
}

function fs_unzip(obj, element, page){
        var flag=0;
        if(countChecked(obj,element)==1) {
                filename = returnChecked(obj,element);
                filename = filename.toLowerCase();
                if(filename.indexOf(".zip")!=-1){
                        if(confirm(globalAlertMsg12)){
                                obj.action = page;
                                obj.submit();
                        }
                }else{
                        alert(filename + globalAlertMsg13);
                }
        } else {
                alert(globalAlertMsg1);
        }
}

function fs_move(obj, element, page){
        if(countChecked(obj,element)==0)
        alert(globalAlertMsg2);
        else{
                obj.action = page;
                obj.submit();
        }
}

function fs_copy(obj, element, page){
        if(countChecked(obj,element)==0)
        alert(globalAlertMsg2);
        else{
                obj.action = page;
                obj.submit();
        }
}

// front end view functions
function fe_view_announcement(id, ct){
        newWindow('http://www.cmass.edu.hk/home/view_announcement.php?AnnouncementID='+id+'&ct='+ct,12);
}

function fe_view_event(id, NoBack){
        newWindow('http://www.cmass.edu.hk/home/view_event.php?EventID='+id+'&NoBack='+NoBack,6);
}

function fe_view_event_by_date(ts){
        newWindow('http://www.cmass.edu.hk/home/view_event_by_date.php?ts='+ts,6);
}

function fe_view_event_by_type(tp){
        newWindow('http://www.cmass.edu.hk/home/view_event_by_type.php?tp='+tp,6);
}

function fe_view_polling(id){
        newWindow('http://www.cmass.edu.hk/home/view_pollresult.php?PollingID='+id,2);
}

function fe_eclass(id){
        newWindow('http://www.cmass.edu.hk/home/eclass/login.php?uc_id='+id,8);
}

function fe_eclass_guest(id){
        newWindow('http://www.cmass.edu.hk/home/eclass/guest.php?c_id='+id,8);
}

function fe_directory(id){
        newWindow('http://www.cmass.edu.hk/view.php?GroupID='+id,1);
}

function fe_pastpoll(){
        newWindow('http://www.cmass.edu.hk/home/view_pastpoll.php',1);
}

function fe_view_timetable(id){
        newWindow('http://www.cmass.edu.hk/home/school/timetable/index.php?GroupID='+id,10);
}

function fe_view_chat(id){
        newWindow('http://www.cmass.edu.hk/home/school/chat/index.php?GroupID='+id,10);
}

function fe_view_bulletin(id){
        newWindow('http://www.cmass.edu.hk/home/school/bulletin/index.php?GroupID='+id,10);
}

function fe_view_links(id){
        newWindow('http://www.cmass.edu.hk/home/school/links/index.php?GroupID='+id,10);
}

function fe_view_files(id){
        newWindow('http://www.cmass.edu.hk/home/school/files/index.php?GroupID='+id,10);
}

function fe_view_settings(id){
         newWindow('http://www.cmass.edu.hk/home/school/settings/index.php?GroupID='+id,10);
         
}

function fe_view_homework_detail(id){
        newWindow('http://www.cmass.edu.hk/home/homework/view.php?hid='+id,1);
}

function fe_view_day_rb(ts){
         newWindow('http://www.cmass.edu.hk/home/resource/dayview.php?ts='+ts,1);
}
function fe_view_qb(id){
         newWindow('http://www.cmass.edu.hk/home/school/qb/index.php?GroupID='+id,10);
}

function fe_view_all_event(){
         newWindow('http://www.cmass.edu.hk/home/allevent.php',9);
}


function open_tv()
{
         tv_window = window.open('http://www.cmass.edu.hk/home/plugin/campustv/','tv_window','scrollbars=0,toolbar=0,menubar=0,resizable=1,dependent=0,status=0,width=780,height=550,left=25,top=25')
}

function open_bulletin_msg(id)
{
         newWindowNotClose('http://www.cmass.edu.hk/home/school/bulletin/message.php?BulletinID='+id,10,"intranet_bulletin");
}

function qb_open_source_document(id, isEng)
{
         newWindowNotClose('http://www.cmass.edu.hk/home/school/qb/view_source.php?qid='+id+'&isEng='+isEng,10,"intranet_qb_source");
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function check_numeric(f,d,msg){
        if(f.value=='' || !IsNumeric(f.value)){
                alert(msg);
                f.value=d;
                f.focus();
                return false;
        }else{
                return true;
        }
}

function IsNumeric(sText)
{
   var ValidChars = "0123456789.";
   var Char;

   for (i = 0; i < sText.length; i++)
   {
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1)
        {
            return false;
        }
   }
   return true;

}

function displayTable(tableID, myStyle){
	//block, none, inline
	var currentStyle = document.all[tableID].style.display;
	var newStyle = "none";
	
	if (typeof(myStyle)!="undefined")
	{
		newStyle = myStyle;
	} else
	{
		newStyle = (currentStyle=="none") ? "block" : "none";
	}

	document.all[tableID].style.display = newStyle;

	return;
}

// Return today in the format of YYYY-MM-DD
function getToday()
{
	// Array of month Names
	var month=new Array(12);
	month[0]="01";
	month[1]="02";
	month[2]="03";
	month[3]="04";
	month[4]="05";
	month[5]="06";
	month[6]="07";
	month[7]="08";
	month[8]="09";
	month[9]="10";
	month[10]="11";
	month[11]="12";

	var now = new Date();
	var today = now.getFullYear() + "-" + month[now.getMonth()] + "-" + now.getDate();

	return today;
}



function setCookie(name, value)
{
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;

	document.cookie = name + "=" + escape (value) +
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
	((path == null) ? "" : ("; path=" + path)) +
	((domain == null) ? "" : ("; domain=" + domain)) +
	((secure == true) ? "; secure" : "");
}

function getCookie(name) {
	var bikky = document.cookie;
	var index = bikky.indexOf(name + "=");
	if (index == -1) return null;
	index = bikky.indexOf("=", index) + 1;
	// first character
	var endstr = bikky.indexOf(";", index);
	if (endstr == -1) endstr = bikky.length;
	// last character
	return unescape(bikky.substring(index, endstr));

}

function isCookieEnabled() {
	if (document.all)
	{
		if (!navigator.cookieEnabled)
		{
			return false;
		}
		else
			return true;
	} else
	{
		setCookie('temp','temp');
		var temp = getCookie('temp');
		if (!temp)
		{
			return false;
	    } else
			return true;
	}

}


/* Used in :
	/staff2/data/daily/staff_status_in.php
	/staff2/data/daily/staff_status_in_list.php
	/staff2/data/daily/staff_status_out.php
	/staff2/data/daily/staff_status_out_list.php
*/
function setDivVisible(state, lay, lay2)
{
	var DivRef = document.getElementById(lay);
	var lay_used = (lay2!="") ? lay2 : "lyrShim";
	var IfrRef = document.getElementById(lay_used);
	if (state)
	{
		DivRef.style.display = 'block';
		IfrRef.style.width = DivRef.offsetWidth;
		IfrRef.style.height = DivRef.offsetHeight;
		IfrRef.style.top = DivRef.style.top;
		IfrRef.style.left = DivRef.style.left;
		IfrRef.style.zIndex = DivRef.style.zIndex - 1;
		IfrRef.style.display = 'block';
	} else
	{
		DivRef.style.display = 'none';
		IfrRef.style.display = 'none';
	}
}


/* Used in :
	/staff2/data/daily/staff_status_in.php
	/staff2/data/daily/staff_status_in_list.php
	/staff2/data/daily/staff_status_out.php
	/staff2/data/daily/staff_status_out_list.php
*/
function getPostion(obj, direction){
	var objStr = "obj";
	var pos_value = 0;

	while (typeof(eval(objStr))!="undefined" && eval(objStr + ".tagName")!="BODY")
	{
		pos_value += eval(objStr + "." + direction);
		objStr += ".offsetParent";
	}

	return pos_value;
}

function getObjectPosition(obj){
	this.pos_left = getPostion(obj, "offsetLeft");
	this.pos_top = getPostion(obj, "offsetTop") + obj.offsetHeight - document.body.scrollTop;

	return this;
}


/*
Floating Menu script-  Roy Whittle (http://www.javascript-fx.com/)
Script featured on/available at http://www.dynamicdrive.com/
This notice must stay intact for use
*/
function JSFX_FloatTopDiv(SpecY)
{
	
	var startX = 0,	
	startY = 19;
	
	if (typeof(SpecY) != "undefined")
	{
		startY = SpecY;
	}
	
	var ns = (navigator.appName.indexOf("Netscape") != -1);
	var d = document;
	function ml(id)
	{
		var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
		if(d.layers)el.style=el;
		el.sP=function(x,y){this.style.left=x;this.style.top=y;};
		el.x = startX;
		if (verticalpos=="fromtop")
		el.y = startY;
		else{
		el.y = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
		el.y -= startY;
		}
		return el;
	}
	window.stayTopLeft=function()
	{
		if (verticalpos=="fromtop"){
		var pY = ns ? pageYOffset : document.body.scrollTop;
		ftlObj.y += (pY + startY - ftlObj.y)/8;
		}
		else{
		var pY = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
		ftlObj.y += (pY - startY - ftlObj.y)/8;
		}

		if (parseInt(ftlObj.y)>parseInt(getPostion(document.getElementById('hidden_image'), "offsetTop")))
		{
			ftlObj.sP(ftlObj.x, ftlObj.y);
		} else
		{
			ftlObj.sP(ftlObj.x, parseInt(getPostion(document.getElementById('hidden_image'), "offsetTop")));
		}
		setTimeout("stayTopLeft()", 15);
	}
	ftlObj = ml("divStayTopLeft");
	stayTopLeft();
}


function jChangeContent( objID, new_content ) 
{
	var obj = document.getElementById(objID);
	if (obj!=null)
	{
		obj.innerHTML = new_content;
	}
}

/*
* function for valid numeric strings
*/
function jIS_NUMERIC(jParString)	
{
	var strValidChars = "0123456789.-";
	var strChar;
	var blnResult = true;

	if (jParString.length == 0) return false;

	//  test jParString consists of valid characters listed above
	for (i = 0; i < jParString.length && blnResult == true; i++)
	{
		strChar = jParString.charAt(i);
		if (strValidChars.indexOf(strChar) == -1)
		{
			blnResult = false;
		}
	}
	return blnResult;
}

/*
* function to check whether value is in a array
*/
function jIN_ARRAY(jParArray, jParString)	
{
	var len = jParArray.length;
	for ( var x = 0 ; x <= len ; x++ ) {
		if ( jParArray[x] == jParString ) return true;
	}
	return false;
}

function findPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent)
	{
		curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
		while (obj = obj.offsetParent)
		{
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		}
	}
	return [curleft,curtop];
}

function strReplaceAll(s, t, f){
	var tmp1=s;
	var tmp2="";

	while (tmp1.indexOf(t)!=-1)
	{
		tmp2=tmp2+tmp1.substring(0,tmp1.indexOf(t))+f;
		tmp1=tmp1.substring(tmp1.indexOf(t)+t.length);
	}
	tmp2=tmp2+tmp1;

	return tmp2;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function checkPick(obj,element,page,type){
	if(countChecked(obj,element)==0)
		alert(globalAlertMsg2)
	else{
		if (page == 'public.php' || page == 'http://www.cmass.edu.hk/private.php') {
			switch (type) {
			    case 1 :
			        msg = globalAlertActivate; break;
			    case 2 :
			        msg = globalAlertDeactivate; break;
			    default :
			        msg = "Are you sure?" ; break;
			}
			if(confirm(msg)){
				obj.action=page;
				obj.submit();
			}
		}
		else
		{
			obj.action=page;
			obj.submit();
		}
	}
}

/*
* Modified by Key 2008-08-01
* Updated the checkPick Fucntion , not only to check the page name instead of alert variable
*/
function jCheckPick(obj,element,page,type, isAlert)
{
	if(countChecked(obj,element)==0)
		alert(globalAlertMsg2);
	else
	{
		if (isAlert == 1)
		{
			switch (type) 
			{
			    case 1 :
			        msg = globalAlertActivate; break;
			    case 2 :
			        msg = globalAlertDeactivate; break;
			    default :
			        msg = "Are you sure?" ; break;
			}
			if(confirm(msg))
			{
				obj.action=page;
				obj.submit();
			}
		}
		else
		{
			obj.action=page;
			obj.submit();
		}
	}
} // end function check pick

// Combine Date and Time 
function toTimeStr(date_o, hr_o, min_o) {
    var hr_v = parseInt(hr_o.options[hr_o.selectedIndex].value);
	if (hr_v<10) {
	    hr_v = "0"+hr_v;
	}
	min_v = parseInt(min_o.options[min_o.selectedIndex].value);
	if (min_v<10) {
	    min_v = "0"+min_v;
	}
	var time1 = date_o.value + hr_v + min_v;
	return time1;
}

// Compare Start Time & End Time and Compare Start Date & End Date in hr/min input box
function compareTimeInput(date_s, hr_s, min_s, date_e, hr_e, min_e) {
	var time1 = toTimeStrByInput(date_s, hr_s, min_s);
	var time2 = toTimeStrByInput(date_e, hr_e, min_e);

	if (time1>time2) {
	    return false;
	}else {
		return true;
	}
}

// Combine Date and Time by input box
function toTimeStrByInput(date_o, hr_o, min_o) {
    var hr_v = parseInt(hr_o.value);
	if (hr_v<10) {
	    hr_v = "0"+hr_v;
	}
	min_v = parseInt(min_o.value);
	if (min_v<10) {
	    min_v = "0"+min_v;
	}
	var time1 = date_o.value + hr_v + min_v;
	return time1;
}

// Compare Start Time & End Time and Compare Start Date & End Date in hr/min selection box
function compareTime(date_s, hr_s, min_s, date_e, hr_e, min_e) {
	var time1 = toTimeStr(date_s, hr_s, min_s);
	var time2 = toTimeStr(date_e, hr_e, min_e);

	if (time1>time2) {
	    return false;
	}else {
		return true;
	}
}



// Submit to Pop-up Windows for Ip v2.5
function checkEditContent(obj,element,page){
        if(countChecked(obj,element)==1) {
                obj.action=page;
                obj.target='_blank';
                obj.submit();
                obj.target='';
        } else {
                alert(globalAlertMsg1);
        }
}

//Add more files 
function jAddMoreFileField(jFormObj, jTableName, jFileNumberName, jFileFieldName)
{
	// prepare td contents
	// manipulate jInsertTableRow()

	if (document.all || document.getElementById)
	{
		var table = document.all ? document.all[jTableName] : document.getElementById(jTableName);
		var file_no = parseInt(document.getElementById(jFileNumberName).value);

		if (document.all)
		{
			var td = "<input class=file type=file name='" + jFileFieldName + (file_no + 1) + "' size='40' /><input type=hidden name='" + jFileFieldName + (file_no + 1) + "_hidden' />";
			jInsertTableRow(table, file_no, td);
			document.getElementById(jFileNumberName).value = file_no + 1;
		}
	}
}

function jInsertTableRow(jTableName, jFileNumber){
	// first argument is jTableName
	// other arguments after will be td contents

	var row = jTableName.insertRow(jFileNumber);

	for(var i=2; i<arguments.length; i++){
        cell = row.insertCell(i-2);
		cell.innerHTML = arguments[i];
    }
}

// generate options from jArrData and bold selected option
function jSelectPresetTextECLASS(jArrData, jTarget, jMenu, jPos, jOtherFunction)
{

	var listStr = "";
	var fieldValue;
	var count = 0;
	var btn_hide = (typeof(js_btn_hide)!="undefined") ? js_btn_hide : "";

	listStr += "<table bgcolor='#ffffff' style='border:1px solid #FFFFFF;' border='0' cellpadding='0' cellspacing='0'>";
	var box_height = (jArrData.length>10) ? "200" : "105";
	listStr += "<tr><td bgcolor='#CCCCCC' style='border-left:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-right:1px solid #CCCCCC'>&nbsp;<a href=\"javascript:void(0)\" onClick=\"document.getElementById('" + jMenu + "').style.display= 'none';setDivVisible(false, '"+jMenu+"', 'lyrShim')\" title=\""+btn_hide+"\" ><font face='arial' color='#FFFFFF'><b>x</b></font></a></td></tr>";
	listStr += "<tr><td style='border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-right:1px solid #CCCCCC'><div style=\"overflow: auto; height: " + box_height + "px; width: 160px\"><table width=\"90%\" border='0' align='center' class='tbclip'>";

	if (typeof(jArrData)=="undefined" || jArrData.length==0)
	{
		if (typeof(js_preset_no_record)!="undefined")
		{
			listStr += "<tr><td class='guide' align='center'>"+js_preset_no_record+"</td></tr>";
		}
	} else
	{
		for (var i = 0; i < jArrData.length; i++)
		{
			for (var j = 0; j < jArrData[i].length; j++)
			{
				fieldValue = document.getElementById(jTarget).value.replace(/&/g, "&amp;").replace(/'/g, "&#96;").replace(/`/g, "&#96;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

				listStr += "<tr><td style=\"border-bottom:1px #CCCCCC solid; background-color: ";
				if (fieldValue == jArrData[i][j])
				{
					listStr += "#FFF2C3";
				} else
				{
					listStr += "#FFFFFF";
				}
				listStr += "\">";

				if (fieldValue == jArrData[i][j])
				{
					listStr += "<b>";
				}
				jOtherFunctionTxt = (jOtherFunction=="jPRESET_ELE()") ? "if(typeof(jPresetELE)!='undefined'){jPRESET_ELE('"+i+"', '"+j+"');}" : "";
				listStr += "<a href=\"javascript:void(0)\" onClick=\"document.getElementById('" + jTarget + "').value = '" + jArrData[i][j] + "' ;document.getElementById('" + jMenu + "').style.display= 'none';setDivVisible(false, '"+jMenu+"', 'lyrShim');"+jOtherFunctionTxt+"\" title=\"" + jArrData[i][j] + "\">" + jArrData[i][j] + "</a>";

				if (fieldValue == jArrData[i][j])
				{
					listStr += "</b>";
				}

				listStr += "</td></tr>";
				count ++;
			}
		}
	}

	listStr += "</table></div></td></tr></table>";

	document.getElementById(jMenu).innerHTML = listStr;

	document.getElementById(jMenu).style.position = "absolute";
	document.getElementById(jMenu).style.zIndex = "9999999";
	document.getElementById(jMenu).style.textalign = "left";

	var pos = findPos(document.getElementById("posimg" + jPos));

	document.getElementById(jMenu).style.left = (pos[0] + 0) + "px";
	document.getElementById(jMenu).style.top = pos[1] + "px";
	document.getElementById(jMenu).style.display= 'block';

	setDivVisible(true, jMenu, "lyrShim");

}

function Big5FileUploadHandler(jFormObj, jFileName, jFileNo) {

	for (var i = 1; i <= jFileNo; i++)
	{
		chk_undefined = "typeof(jFormObj." + jFileName + i + ")!='undefined'";
		chk_empty = "jFormObj." + jFileName + i + ".value != ''";
		if (eval(chk_undefined))
		{
			if (eval(chk_empty))
			{
				eval("var Ary = jFormObj." + jFileName + i + ".value.split('\\\\')");
				eval("jFormObj." + jFileName + i + "_hidden.value=Ary[Ary.length-1]");
			}
		}
	}

	return true;
}

function check(from, to)
{
	checkOption(from);
	checkOption(to);
	i = from.selectedIndex;
	while(i!=-1)
	{
		to.options[to.length] = new Option(from.options[i].text, from.options[i].value, false, false);
		from.options[i] = null;
		i = from.selectedIndex;
	}
}

function postInstantForm(obj, url, method, winType, winName) {
	winType = (typeof(winType)=="number") ? winType.toString() : winType;
	var aWin = (winType.indexOf(",")!=-1) ? eval("newWindow('',"+winType+")") : newWindow("",winType);
	var frmTargetOrg = obj.target;
	var frmActionOrg = obj.action;
	var frmMethodOrg = obj.method;

	obj.target = winName;
	if (method!="" && typeof(obj.method)!="object")
	{
		obj.method = method;
	}
	obj.action = url;
	obj.submit();

	obj.target = frmTargetOrg;
	obj.action = frmActionOrg;
	if (typeof(obj.method)!="object")
	{
		obj.method = frmMethodOrg;
	}

	return;
}

function getFileExtension(f) {
		
	var filename = f.value;
	if(filename.length == 0)
		return "";
		
	var dot = filename.lastIndexOf(".");
	if( dot == -1 )
		return "";
		
	var extension = filename.substr(dot,filename.length);
	
	return extension;
}

function Select_All_Selection_Option(SelectObj,SelectValue) {
	var SelectIndex = 0;
	
	if (SelectValue == "") {
		return true;
	}
	else {
		for (var j=0; j< SelectObj[0].length; j++) {
			if (SelectObj[0].options[j].value == SelectValue) {
				SelectIndex = j;
				break;
			}
		}
		
		for (var i=0; i< SelectObj.length; i++) {
			SelectObj[i].selectedIndex = SelectIndex;
		}
		
		return true;
	}
}