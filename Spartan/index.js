
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


// Force Reset Scroll to Top - Must Be At Last
history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});
  