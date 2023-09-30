//JavaScript
document.getElementById('playVid').onclick = function () {
    document.getElementById('video').play();
  };
  
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
let questionOpenA = false;
let questionOpenB = false;
let questionOpenC = false;
  


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


//Projects Section Interaction
const project_boxA = document.querySelector(".project_box_a");
const project_imgA = document.querySelector(".project_img_a");
let projectOpenA = false;
  
function projectDescA () {
    if (!projectOpenA) {
        project_boxA.classList.remove("hide");
        project_imgA.classList.add("hide");
        projectOpenA = true;
    }
    else {
        project_boxA.classList.add("hide");
        project_imgA.classList.remove("hide");
        projectOpenA = false;
    }
}

const project_boxB = document.querySelector(".project_box_b");
const project_imgB = document.querySelector(".project_img_b");
let projectOpenB = false;
  
function projectDescB () {
    if (!projectOpenB) {
        project_boxB.classList.remove("hide");
        project_imgB.classList.add("hide");
        projectOpenB = true;
    }
    else {
        project_boxB.classList.add("hide");
        project_imgB.classList.remove("hide");
        projectOpenB = false;
    }
}

const project_boxC = document.querySelector(".project_box_c");
const project_imgC = document.querySelector(".project_img_c");
let projectOpenC = false;
  
function projectDescC () {
    if (!projectOpenC) {
        project_boxC.classList.remove("hide");
        project_imgC.classList.add("hide");
        projectOpenC = true;
    }
    else {
        project_boxC.classList.add("hide");
        project_imgC.classList.remove("hide");
        projectOpenC = false;
    }
}

const project_boxD = document.querySelector(".project_box_d");
const project_imgD = document.querySelector(".project_img_d");
let projectOpenD = false;
  
function projectDescD () {
    if (!projectOpenD) {
        project_boxD.classList.remove("hide");
        project_imgD.classList.add("hide");
        projectOpenD = true;
    }
    else {
        project_boxD.classList.add("hide");
        project_imgD.classList.remove("hide");
        projectOpenD = false;
    }
}

const project_boxE = document.querySelector(".project_box_e");
const project_imgE = document.querySelector(".project_img_e");
let projectOpenE = false;
  
function projectDescE () {
    if (!projectOpenE) {
        project_boxE.classList.remove("hide");
        project_imgE.classList.add("hide");
        projectOpenE = true;
    }
    else {
        project_boxE.classList.add("hide");
        project_imgE.classList.remove("hide");
        projectOpenE = false;
    }
}

const project_boxF = document.querySelector(".project_box_f");
const project_imgF = document.querySelector(".project_img_f");
let projectOpenF = false;
  
function projectDescF () {
    if (!projectOpenF) {
        project_boxF.classList.remove("hide");
        project_imgF.classList.add("hide");
        projectOpenF = true;
    }
    else {
        project_boxF.classList.add("hide");
        project_imgF.classList.remove("hide");
        projectOpenF = false;
    }
}





//Team Menu Interaction
const team_boxA = document.querySelector(".team_box_a");
const team_boxB = document.querySelector(".team_box_b");
const team_imgA = document.querySelector(".team_img_a");
const team_imgB = document.querySelector(".team_img_b");
let teamOpenA = false;
let teamOpenB = false;
  
function teamDescA () {
    if (!teamOpenA) {
        team_boxA.classList.remove("hide");
        team_imgA.classList.add("hide");
        teamOpenA = true;
    }
    else {
        team_boxA.classList.add("hide");
        team_imgA.classList.remove("hide");
        teamOpenA = false;
    }
}

function teamDescB () {
    if (!teamOpenB) {
        team_boxB.classList.remove("hide");
        team_imgB.classList.add("hide");
        teamOpenB = true;
    }
    else {
        team_boxB.classList.add("hide");
        team_imgB.classList.remove("hide");
        teamOpenB = false;
    }
}
  