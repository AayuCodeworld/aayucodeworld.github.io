// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header .container');
    header.insertBefore(navToggle, header.querySelector('.logo').nextSibling);

    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show-nav');
    });

    // Scroll-to-top button functionality
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerText = '↑';
    scrollTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
