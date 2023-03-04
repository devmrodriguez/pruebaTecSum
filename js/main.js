/* Hace que nuestro menú se quede fijo al momento de hacer scroll */
window.onscroll = function () {
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20) {
        header.classList.add('nav_mod');
    }
    else if (scroll < 20) {
        header.classList.remove('nav_mod');
    }
}

/* Animaciones al momento de hacer scroll */
AOS.init({
    duration: 1000,
});

/* Preloader */
window.addEventListener('load', function () {
    document.getElementById('contenedor-preloader').classList.toggle('contenedor-preloader2');
});

