const barsBtn = document.querySelector(".navbar--bars-btn");
const navMenu = document.querySelector(".navbar--links");

barsBtn.addEventListener("click", function () {
    this.classList.toggle("is-active");
    navMenu.classList.toggle("show");
});