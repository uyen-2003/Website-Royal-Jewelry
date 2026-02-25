/*bấm nút đăng nhập */
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var formSubmit = document.getElementById("formSubmit");

    // Kiểm tra nếu trường username hoặc password không được điền
    if (username === '' || password === '') {
        formSubmit.disabled = true;
    } else {
        formSubmit.disabled = false;
    }

}
function loginUser() {
    // Lấy giá trị từ các trường tài khoản và mật khẩu
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra thông tin đăng nhập (ở đây chỉ là một ví dụ đơn giản)
    if (username === "admin" && password === "admin") {
        // Đăng nhập thành công, chuyển hướng đến trang chủ
        window.location.href = "/form_DangKy.html";
    } else {
        // Đăng nhập không thành công, hiển thị thông báo lỗi
        alert("Login information is incorrect. Please try again.");
    }
}

function loginWithFacebook() {
    // Xử lý đăng nhập bằng Facebook
    alert("Login with Facebook");
}

function loginWithTwitter() {
    // Xử lý đăng nhập bằng Twitter
    alert("Login with Twitter");
}

//ẩn hiện mật khẩu
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});
/* $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  }); */

/* (function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	

})(jQuery); */
