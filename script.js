$(document).ready(function(){
	var load=0,valid=false,valid1=false;
	$("#log").animate({ top:"5em" },200);
	$("#log").animate({ top:"7em"},200);
	$("#login").click(function(){
		$("#l1").show();
		$("#l2").hide();
		$("#signup").css("backgroundColor","white");
		$("#signup").css("color","black");
		$("#login").css("backgroundColor","#3e3e3e");
		$("#login").css("color","white");
		$("#log").show();
		$("#sign").hide();
		$("#log").animate({ top:"5em" },200);
		$("#log").animate({ top:"7em"},200);
		
	});
	$("#signup").click(function(){
		$("#l2").show();
		$("#l1").hide();
		$("#login").css("backgroundColor","white");
		$("#login").css("color","black");
		$("#signup").css("backgroundColor","#3e3e3e");
		$("#signup").css("color","white");
		$("#sign").show();
		$("#log").hide();
		$("#sign").animate({ top:"5em" },200);
		$("#sign").animate({ top:"7em"},200);
	});
	
	$("#email1").blur(function(){
		var l=$(this).offset().left+$(this).outerWidth()+10,t=$(this).offset().top+10;
		var mail = /^\w+[\w\-\.\+]*@\w+[a-zA-Z0-9\.\-]*\w+\.[a-z]{2,4}$/;
		if (mail.test($("#email1").val()))
		{
			valid1=true;
			$("#email-id").hide();
		}
		else
		{
			valid1=false;
			$("#email-id").show();
			$("#pass-short").hide();
			$("#email-div").hide();
			$("#uname-div").hide();
			$("#fname-div").hide();
		}
	
	});
	$("#remail").blur(function(){
		if($("#remail").val()!=$("#email1").val())
		{
			valid=false;
			$("#email-div").show();
			$("#email-id").hide();
			$("#pass-short").hide();
			$("#uname-div").hide();
			$("#fname-div").hide();
		}
		else{	
			valid=true;
			$("#email-div").hide();
		}
	});
	
	$("#pwd1").blur(function(){
		var l=$(this).offset().left+$(this).outerWidth()+10,t=$(this).offset().top+10;
		if($("#pwd1").val().length<8)
		{
			valid=false;
			$("#pass-short").show();
			$("#email-id").hide();
			$("#email-div").hide();
			$("#uname-div").hide();
			$("#fname-div").hide();
		}
		else	
		{
			valid=true;
			$("#pass-short").hide();
		}
	});
	$("#uname").blur(function(){
		var exp= /^[a-zA-Z]+$/;
		if(!exp.test($("#uname").val()))
		{
			valid=false;
			$("#uname-div").show();
			$("#email-div").hide();
			$("#email-id").hide();
			$("#pass-short").hide();
			$("#fname-div").hide();
		}
		else{
			valid=true;
			$("#uname-div").hide();
		}
	});
	$("#fname").blur(function(){
		var exp= /^[a-z\ A-Z]+$/;
		if(!exp.test($("#fname").val()))
		{
			valid=false;
			$("#fname-div").show();
			$("#email-div").hide();
			$("#email-id").hide();
			$("#pass-short").hide();
			$("#uname-div").hide();
		}
		else{
			valid=true;
			$("#fname-div").hide();
		}
	});
	$("#signing").submit(function(e){
		var box=document.getElementById("term");
		if(valid!=true||!box.checked)
			e.preventDefault();
	});
});
