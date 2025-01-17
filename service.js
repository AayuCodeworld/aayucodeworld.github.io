// Script for smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add a click event to the footer
const footer = document.querySelector('footer');
footer.addEventListener('click', () => {
    alert('Thank you for visiting AayuCodeWorld!');
});
