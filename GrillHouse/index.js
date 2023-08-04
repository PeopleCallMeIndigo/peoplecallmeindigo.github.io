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

let aside = document.getElementById("aside");

window.addEventListener("scroll", e => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 500) {
      aside.classList.remove('gogo');
    } 
    else {
      aside.classList.add('gogo');
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
    menuOpen = true;
    hamburguerOn = true;
  } else {
    navOn.classList.remove("on");
    menuBtn.classList.remove("open");
    menuOpen = false;
    hamburguerOn = false;
  }
});

//Auto clic on start
document.getElementById("englishFlag").click();

//Menu PDF Interaction
const englishPdf = document.getElementById("menu-pdf-english");
const spanishPdf = document.getElementById("menu-pdf-spanish");
const english = document.getElementById("englishFlag");
const spanish = document.getElementById("spanishFlag");
let englishOn = false;
let spanishOn = false;

english.addEventListener("click", () => {
    if (!englishOn) {
        englishPdf.classList.add('menu-pdf-gogo');
        englishOn = true;
        if (spanishhOn = true) {
            spanishPdf.classList.remove('menu-pdf-gogo');
            spanishOn = false;
        }
        else {
            spanishOn = true;
        }
    }

    else {
        englishPdf.classList.remove('menu-pdf-gogo');
        englishOn = false;
    }
});

spanish.addEventListener("click", () => {
    if (!spanishOn) {
        spanishPdf.classList.add('menu-pdf-gogo');
        spanishOn = true;
        if (englishOn = true) {
            englishPdf.classList.remove('menu-pdf-gogo');
            englishOn = false;
        }
        else {
            englishOn = true;
        }
    }

    else {
        spanishPdf.classList.remove('menu-pdf-gogo');
        spanishOn = false;
    }
});

//Testimonial Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


