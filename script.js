
var hamburgerMenu=document.querySelector(".hamburger-menu");
window.onload = function(){
    if ((typeof hamburgerMenu != 'undefined') || (hamburgerMenu != null)){
        hamburgerMenu.addEventListener("click",()=>{
            document.querySelector(".page-header").classList.toggle
            ("change");
        });
    }

    
}




window.onscroll = function() {myFunction()};

var navbar = document.getElementById("page-header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset - 1>= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

