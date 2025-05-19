document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
    const userNumber = document.getElementById("number").value;
    //console.log(userNumber);
    const userPassword = document.getElementById("password").value;
    //console.log(userPassword);
    const errorMessage = document.getElementById("error");
//valid phone number
const validNumber = /^01[0-9]{9}$/;
const validPassword = /^[A-Za-z0-9]{4,10}$/;

if(!validNumber.test(userNumber)){
    errorMessage.textContent = "Please Input valid Number";
    errorMessage.style.color ="red";
    errorMessage.style.fontWeight ="bold";
    return;

}
if(!validPassword.test(userPassword)){
    errorMessage.textContent = "Please Input valid Password";
    errorMessage.style.color ="red";
    errorMessage.style.fontWeight ="bold";
    return;

}
//input field clear
document.getElementById("number").value="";
document.getElementById("password").value="";

//login new window
window.location.href="DashBoard.html";1

})