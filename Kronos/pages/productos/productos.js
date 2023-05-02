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

//Slide Interaction
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function itemClicked() {
  slideCurrent(1);
  document.getElementById("rigidoss").focus()
}

function itemClickedInst() {
  slideCurrent(17);
  document.getElementById("folletoss").focus()
}

function itemClickedStickers() {
  slideCurrent(33);
  document.getElementById("numeradoss").focus()
}

function itemClickedEmpaques() {
  slideCurrent(47);
  document.getElementById("papell").focus()
}

function itemClickedGS() {
  slideCurrent(57);
  document.getElementById("arcoss").focus()
}

function itemClickedSe() {
  slideCurrent(69);
  document.getElementById("fijass").focus()
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("productos-presentation");
    var dots = document.getElementsByClassName("productos-container--tipo");
    if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides [i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots [i].className = dots[i].className.replace(" active", "");
        }
    slides [slideIndex-1].style.display = "flex";
    dots [slideIndex-1].className += " active"; 
}



//Slide Interaction Elements
var indexSlide = 1;
slidesShow(indexSlide);

function slidesPlus(n) {
  slidesShow(indexSlide += n);
}

function slideCurrent(n) {
  slidesShow(indexSlide = n);
}

function slidesShow(n) {
    var p;
    var products = document.getElementsByClassName("productos-presentation-desc-card");
    var dotss = document.getElementsByClassName("productos-navigation-cnt--link");
    if (n > products.length) {indexSlide = 1}
        if (n < 1) {indexSlide = products.length}
        for (p = 0; p < products.length; p++) {
          products [p].style.display = "none";
        }
        for (p = 0; p < dotss.length; p++) {
            dotss [p].className = dotss[p].className.replace(" active", "");
        }
    products [indexSlide-1].style.display = "flex";
}




