$(function(){
	//show and hide form sign in
	$("#btn_signin").click(function(e){
		$(".formSignin").show();
		$("body").css("overflow-y", "hidden");
		 $(".form_signin").addClass('show_form_sigin');
		 $(".blur_body").addClass('show_blur_body');
		 $(".title_signin").addClass('active_sigin');
		 $(".title_signup").removeClass('active_sigin');
		 $('.form_signin p').css({
			display: 'block'
		});
		 event.presentDefault();
	});
	$(".btn_close_signin ,.blur_body").click(function(e) {
		$(".form_signin").removeClass('show_form_sigin');
		$(".form_signup").removeClass('show_form_sigup');
		$("body").css("overflow-y", "visible");
		$(".blur_body").removeClass('show_blur_body');
	});
 
	//show form sign up
	$(".title_signup").click(function(event) {
		$(".formSignin").hide();
		$(".form_signup").addClass('show_form_sigup');
		$(".title_signup").addClass('active_sigin');
		$('.title_signup, .com3').unbind('mouseenter mouseleave');
		$(".title_signin").removeClass('active_sigin');
		$('.form_signin p').css({
			display: 'none'
		});
	})
	$(".title_signin").click(function(event) {
		$(".formSignin").show();
		 $('.form_signin p').css({
			display: 'block'
		});
		$(".title_signup").removeClass('active_sigin');
		$(this).addClass('active_sigin');
		$(".form_signup").removeClass('show_form_sigup')
		$(".formSignin").addClass('show_form_sigin');
	});
});