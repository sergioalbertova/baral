function actualizarNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 100) {

        navbar.style.background = "#102923";
        navbar.style.top = "0";

    } else {

        if (navbar.classList.contains("navbar-interna")) {

            navbar.style.background = "#102923";
            navbar.style.top = "58px";

        } else {

            navbar.style.background = "rgba(0,0,0,.25)";
            navbar.style.top = "58px";

        }

    }

}

window.addEventListener("load", actualizarNavbar);
window.addEventListener("scroll", actualizarNavbar);