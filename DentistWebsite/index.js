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