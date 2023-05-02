/*Change nav color when scrolling down*/
const nav = document.querySelector('.navigation');

window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if (top >=5) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }

}


/* Aside bar functionality */
const openMenu = () => {
    document.querySelector(".backdrop").className = "backdrop active";
    document.querySelector("aside").className = "active";
}

const closeMenu = () => {
    document.querySelector(".backdrop").className = "backdrop";
    document.querySelector("aside").className = "";
}

document.getElementById("menu-bars-button").onclick = e => {
    e.preventDefault();
    openMenu();
}

document.querySelector(".backdrop").onclick = e => {
    closeMenu();
}

