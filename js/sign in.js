let submitBtn=document.getElementById("submitBtn");
submitBtn.disabled=true;
function valid() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    if (email.indexOf("@") == -1 && email.length <= 0) {
        emailError.innerHTML="Please Enter a valid email";
        submitBtn.disabled=true;
    }else if (email.indexOf("@") > -1 && email.length > 0) {
        emailError.innerHTML="";
    };
    if (password.length < 4 || password.length > 60) {
        passwordError.innerHTML="Please Enter a valid password";
        submitBtn.disabled=true;
    }else if (password.length > 4 && password.length < 60) {
        passwordError.innerHTML="";
    };

    if(email.indexOf("@") > -1 && email.length > 0 && password.length > 4 && password.length < 60) {
        submitBtn.disabled=false;
    };
};