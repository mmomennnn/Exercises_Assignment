let userEmail = document.querySelector("#emailLoginInput");
let userPassword = document.querySelector("#passwordLoginInput");

let emailError = document.querySelector("#emailErrorMsg");
let passwordError = document.querySelector("#passwordErrorMsg");

let loginButton = document.querySelector("#loginBtn")


let usersArray = JSON.parse(localStorage.getItem("users"));

let validationFlags = {
    isNameValid : false,
    isEmailValid : false,
    isPasswordValid : false
}







// add event listner
loginButton.addEventListener("click", function (){
logIn();
});
userEmail.addEventListener("input", function (){
validateUserInput(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , userEmail , emailError , "isEmailValid");
validateForm();
});
userPassword.addEventListener("input", function (){
validateUserInput(/^[a-zA-Z0-9]{6,}$/ , userPassword , passwordError , "isPasswordValid");
validateForm();
});






function logIn(){
    if(loginUserCheck()==true){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Account Logged in successfully",
            showConfirmButton: false,
            timer: 1500
        });
        window.location.href = "./pages/home.html";

    }else{
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Invalid email or password, Please try again",
            showConfirmButton: "OK",
        });
    } 
}



function loginUserCheck(){
    for(let i=0; i < usersArray.length; i++){
        if(usersArray[i].email==userEmail.value && usersArray[i].password==userPassword.value){
            localStorage.setItem("userName", usersArray[i].name);
            return true;
        }
    }
    return false;
}






function validateUserInput(inputRegex , inputElement , error , flag){
    let isValid = inputRegex.test(inputElement.value);
    inputElement.classList.toggle("is-valid",isValid);
    inputElement.classList.toggle("is-invalid",!isValid);
    error.classList.toggle("invisible",isValid);
    validationFlags[flag]=isValid;
}




function validateForm(){
    loginButton.classList.toggle("disabled" , !(validationFlags.isEmailValid&&validationFlags.isPasswordValid));
}


function checkIsExisted(){
 for(let i=0 ;i<usersArray.length;i++){
    if(usersArray[i].email==userEmail.value){
        return true;
    }
    else {
        return false;
    }
 }
}