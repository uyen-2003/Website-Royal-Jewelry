function registerUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var formSubmit = document.getElementById("formSubmit");

    // Kiểm tra thông tin đăng ký
    if (username === "") {
        alert("Please enter username.");
        return false;
    }
    if (password === "") {
        alert("Please enter password");
        return false;
    }
    if (confirm_password !== password) {
        alert("Confirmation password does not match.");
        return false;
    }
    if (email === "") {
        alert("Please enter the email.");
        return false;
    }
    if (phone === "") {
        alert("Please enter the phone number.");
        return false;
    }

    
    alert("Sign Up Success!");
    return true;
    
}