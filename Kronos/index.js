
//Navbar Interaction
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", e => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 33) {
    navbar.classList.add('fade');
  } 
  else {
    navbar.classList.remove('fade');
  } 
});

//Hamburguer Menu Interaction
const menuBtn = document.querySelector(".nav-menu");
const navOn = document.querySelector(".nav-container");
const menuCnt = document.querySelector(".nav-container-contact--img");
let hamburguerOn = false;
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if(!menuOpen) {
    navOn.classList.add("on");
    menuBtn.classList.add("open");
    menuCnt.classList.add("cnt-active");
    menuOpen = true;
    hamburguerOn = true;
  } else {
    navOn.classList.remove("on");
    menuBtn.classList.remove("open");
    menuCnt.classList.remove("cnt-active");
    menuOpen = false;
    hamburguerOn = false;
  }
});

//Slideshow Interaction
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2500); // Change image every 4 seconds
}
