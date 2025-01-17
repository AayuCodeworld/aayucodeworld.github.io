// script.js

// Example JavaScript functionality

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');

    const hireMeButton = document.querySelector('.hire-me');
    const downloadCvButton = document.querySelector('.download-cv');

    hireMeButton.addEventListener('click', () => {
        alert('Thank you for your interest!');
    });

    downloadCvButton.addEventListener('click', () => {
        alert('Your CV is being downloaded!');
    });
});
