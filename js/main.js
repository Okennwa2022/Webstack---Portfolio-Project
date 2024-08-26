// Global variables
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');

// Toggle navigation
const toggleMenu = () =>{
    navMobile.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu);
