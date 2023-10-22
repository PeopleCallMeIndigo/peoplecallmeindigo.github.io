//Navbar Interaction
let navbar = document.getElementById("navbar");
let hero = document.getElementById("hero");

let navPosition = hero.getBoundingClientRect().bottom -20;

window.addEventListener("scroll", e => {
  let scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition < 5) {
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
