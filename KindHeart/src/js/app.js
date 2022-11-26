const hamburguerMenu = document.querySelector(".nav-hamburguer-menu");
const navMenu = document.querySelector(".nav-links");

hamburguerMenu.addEventListener("click", function () {
    this.classList.toggle("is-active");
    navMenu.classList.toggle("show");
});
