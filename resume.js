// Simple script for navigation and user interaction

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    // Highlight the current page in the navigation
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
        }
    });

    // Display a message when the footer is clicked
    const footer = document.querySelector('footer');
    footer.addEventListener('click', () => {
        alert('Thank you for visiting AayuCodeWorld!');
    });
});
