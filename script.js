let password = document.getElementById("password");
let passwordcheck = document.getElementById("passwordcheck");

function valpass(){
    if(password.value != passwordcheck.value){
        passwordcheck.setCustomValidity("Passwords don't match!");
    }
    else{
        passwordcheck.setCustomValidity("");
    }
}

password.onchange = valpass;
passwordcheck.onkeyup = valpass;

let login = document.getElementById("loginbutton");

