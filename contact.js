document.addEventListener("DOMContentLoaded", () => {
    const contactItems = document.querySelectorAll(".contact-item");

    // Add arrival animations to contact-item elements
    contactItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = "translateY(20px)";
        
        // Delay animation based on index for staggered effect
        setTimeout(() => {
            item.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 200); // 200ms delay between each item
    });
});
