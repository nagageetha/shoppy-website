
document.addEventListener("DOMContentLoaded",function(){
var sidenavbar=document.querySelector(".side-navbar")



window.shownavbar = function () {
    console.log("Opening sidebar..."); // Debugging
    sidenavbar.style.left = "0";
};

window.closenavbar = function () {
    console.log("Closing sidebar..."); // Debugging
    sidenavbar.style.left = "-50%"; // Hide sidebar
};



})