var clicked = false;
var menubutton = document.getElementById("main");

document.getElementById("main").addEventListener("click", function( e ){
    e = window.event || e; 
    if(this === e.target) {
        if(menubutton.className.includes("menu-opened")) menubutton.className = "menu-button";
        else menubutton.className = "menu-button menu-opened";
    }
});