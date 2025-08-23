var welcomeMsg = document.querySelector("#welcomeMessage");
var loginBtn = document.querySelector("#logOutBtn");


if (localStorage.getItem("userName")){
    welcomeMsg.innerHTML = `Welcome, ${localStorage.getItem("userName")}`;
}

function logOut() {
    localStorage.removeItem("userName");
    window.location.href = "./../index.html";
}


loginBtn.addEventListener("click", logOut);