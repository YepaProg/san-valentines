const menuIcon = document.getElementById('menu-icon');
const responsiveMenu = document.getElementById('menu-responsive');
const header = document.getElementById('header');
const volverArriba = document.getElementById('volver-arriba');

// Volver arriba

window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        volverArriba.style.display = 'flex';
    } else {
        volverArriba.style.display = 'none';
    }
});

volverArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

menuIcon.addEventListener('click', () => {
    if (menuIcon.classList.contains('bx-menu')) {
        menuIcon.classList.replace('bx-menu', 'bx-x');
        responsiveMenu.style.display = 'flex';
    } else {
        menuIcon.classList.replace('bx-x', 'bx-menu');
        responsiveMenu.style.display = 'none';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        responsiveMenu.style.display = 'none';
        menuIcon.classList.replace('bx-x', 'bx-menu');
    }
});


// slider

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true, // Para que el carrusel sea infinito
        autoplay: {
            delay: 2000, // Cambia cada 3 segundos automáticamente
            disableOnInteraction: false, // Sigue moviéndose después de interactuar
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Permite hacer clic en los puntos
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: "coverflow", // Da un efecto 3D bonito
        grabCursor: true, // Cambia el cursor a una mano al pasar por encima
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    });
});

// timeline

// Seleccionamos todos los eventos de la línea de tiempo
const eventos = document.querySelectorAll('.event');

// Función que detecta si un evento está en pantalla
function mostrarEventos() {
    const trigger = window.innerHeight * 0.8; // Punto donde empieza a mostrar

    eventos.forEach(event => {
        const top = event.getBoundingClientRect().top;

        if (top < trigger) {
            event.classList.add('show');
        }
    });
}

// Escuchar el scroll y llamar a la función
window.addEventListener('scroll', mostrarEventos);

// Llamamos una vez para mostrar los eventos si ya están visibles al cargar
mostrarEventos();