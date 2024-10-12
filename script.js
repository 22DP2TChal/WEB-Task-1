// Tumšais Režīms
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Hamburger izvēlne
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Modālais logs
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal .close');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
