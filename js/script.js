// Performance optimized menu toggle
const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.header .navbar');

// Use event delegation for better performance
menu.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navbar.classList.toggle('active');
};

// Hide navbar when a link is clicked (for mobile UX)
navbar.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navbar.classList.remove('active');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

// Optimized partners slider
var partnersSwiper = new Swiper('.partners-swiper', {
    slidesPerView: 8,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4000, // smooth continuous scroll
    grabCursor: true,
    freeMode: true,
    freeModeMomentum: false,
    breakpoints: {
        1200: { slidesPerView: 8 },
        900: { slidesPerView: 5 },
        600: { slidesPerView: 3 },
        400: { slidesPerView: 2 }
    }
});