//Navbar Interaction
let navbar = document.getElementById("navbar");
let navtop = document.getElementById("nav-top");
let hero = document.getElementById("hero");

let navPosition = hero.getBoundingClientRect().bottom -20;

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


//Questions Menu Interaction
const question_experience = document.querySelector(".experience");
const question_portfolio = document.querySelector(".portfolio");
const question_work = document.querySelector(".work");
const question_industry = document.querySelector(".industry");
const question_business = document.querySelector(".business");
let questionOpenA = false;
let questionOpenB = false;
let questionOpenC = false;
let questionOpenD = false;
let questionOpenE = false;
  


  function questionsExperienceFunction () {
    if (!questionOpenA) {
        question_experience.classList.add("hide");
        questionOpenA = true;
    }
    else {
        question_experience.classList.remove("hide");
        questionOpenA = false;
    }
  }

  function questionsPortfolioFunction () {
    if (!questionOpenB) {
        question_portfolio.classList.remove("hide");
        questionOpenB = true;
    }
    else {
        question_portfolio.classList.add("hide");
        questionOpenB = false;
    }
  }

  function questionsWorkFunction () {
    if (!questionOpenC) {
        question_work.classList.remove("hide");
        questionOpenC = true;
    }
    else {
        question_work.classList.add("hide");
        questionOpenC = false;
    }
  }

  function questionsIndustryFunction () {
    if (!questionOpenD) {
        question_industry.classList.remove("hide");
        questionOpenD = true;
    }
    else {
        question_industry.classList.add("hide");
        questionOpenD = false;
    }
  }

  function questionsBusinessFunction () {
    if (!questionOpenE) {
        question_business.classList.remove("hide");
        questionOpenE = true;
    }
    else {
        question_business.classList.add("hide");
        questionOpenE = false;
    }
  }