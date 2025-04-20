// JavaScript for responsive navbar toggle

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const navToggle = document.createElement('button');
    navToggle.setAttribute('aria-label', 'Toggle navigation menu');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;'; // Hamburger icon

    // Insert the toggle button before the ul in navbar
    const navUl = navbar.querySelector('ul');
    navbar.insertBefore(navToggle, navUl);

    navToggle.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });
});
