//Navbar Interaction
let navbar = document.getElementById("top");

window.addEventListener("scroll", e => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    navbar.classList.add('fade');
  } 
  else {
    navbar.classList.remove('fade');
  } 
});

//SideBar Interaction
let bot = document.getElementById("sidebar");

window.addEventListener("scroll", e => {
  let skrillexP = 0;
  skrillexP = window.scrollY;
  if (skrillexP > 600) {
    bot.classList.add('sageOn');
    bot.classList.remove('sageOff');
  }
  else {
    bot.classList.remove('sageOn');
    bot.classList.add('sageOff');
  }
});

//Hamburguer Menu Interaction
const menuBtn = document.querySelector(".nav-menu");
const navOn = document.querySelector(".nav-container");
let hamburguerOn = false;
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if(!menuOpen) {
    navOn.classList.add("on");
    menuBtn.classList.add("open");
    menuOpen = true;
    hamburguerOn = true;
  } else {
    navOn.classList.remove("on");
    menuBtn.classList.remove("open");
    menuOpen = false;
    hamburguerOn = false;
  }
});

//Slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("rooms-slide");
    var dots = document.getElementsByClassName("room");
    if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides [i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots [i].className = dots[i].className.replace("active", "");
        }
    slides [slideIndex-1].style.display = "flex";
    dots [slideIndex-1].className += " active"; 
}
