/* Slider Script */ 
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 5){
        counter = 1;
      }
    }, 8000);
  
//Navbar Interaction
let navbar = document.getElementById("navbar");
let hero = document.getElementById("hero");

let navPosition = hero.getBoundingClientRect().bottom -20;

window.addEventListener("scroll", e => {
  let scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition < 10) {
    navbar.classList.remove('fade');
  } 
  else if(scrollPosition > 4000 && scrollPosition < 100300) {
    navbar.classList.remove('sticky');
  }
  else if(scrollPosition > navPosition) {
    navbar.classList.add('sticky');
    navbar.classList.add('active');
    navbar.classList.remove('fade');
  } 
  else{
    navbar.classList.remove('sticky');
    navbar.classList.remove('active');
    navbar.classList.add('fade');
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