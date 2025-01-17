

// Reveal Sections on Scroll
const revealSections = () => {
    const sections = document.querySelectorAll('.blog-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
};

// Call revealSections on scroll and load
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Highlight Navigation Links on Scroll
const highlightNav = () => {
    const sections = document.querySelectorAll('.blog-section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section, index) => {
        if (scrollPosition > section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLinks[index]) navLinks[index].classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNav);
