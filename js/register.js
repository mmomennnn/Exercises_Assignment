let userName = document.querySelector("#userNameInput");
let userEmail = document.querySelector("#emailInput");
let userPassword = document.querySelector("#passwordInput");

let nameError = document.querySelector("#userNameErrorMsg");
let emailError = document.querySelector("#emailErrorMsg");
let passwordError = document.querySelector("#passwordErrorMsg");

let signUpButton = document.querySelector("#signUpBtn")

let usersArray = [];

let validationFlags = {
    isNameValid : false,
    isEmailValid : false,
    isPasswordValid : false
}



if (localStorage.getItem("users")){
    usersArray = JSON.parse(localStorage.getItem("users"));
}

// add event listner
signUpButton.addEventListener("click", function (){
signUp();
});
userName.addEventListener("input", function (){
validateUserInput(/^[a-zA-Z0-9]{3,}$/ , userName , nameError , "isNameValid");
validateForm();
});
userEmail.addEventListener("input", function (){
validateUserInput(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , userEmail , emailError , "isEmailValid");
validateForm();
});
userPassword.addEventListener("input", function (){
validateUserInput(/^[a-zA-Z0-9]{6,}$/ , userPassword , passwordError , "isPasswordValid");
validateForm();
});





function signUp(){
    if(checkIsExisted()==true){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Email already registered , Please use a different Email",
            showConfirmButton: "OK",
        });  
    }else{
        let user = {
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value
        }
        usersArray.push(user);
        localStorage.setItem("users", JSON.stringify(usersArray));
        console.log("hello");
        Swal.fire({
            title: "Email created successfully",
            icon: "success",
            draggable: true
        });
        window.location.href = "../index.html"
    } 
}







function validateUserInput(inputRegex , inputElement , error , flag){
    let isValid = inputRegex.test(inputElement.value);
    inputElement.classList.toggle("is-valid",isValid);
    inputElement.classList.toggle("is-invalid",!isValid);
    error.classList.toggle("invisible",isValid);
    validationFlags[flag]=isValid;
}






function validateForm(){
    signUpButton.classList.toggle("disabled" , !(validationFlags.isNameValid&&validationFlags.isEmailValid&&validationFlags.isPasswordValid));
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