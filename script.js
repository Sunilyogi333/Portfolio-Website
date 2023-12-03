// Header

const header = document.querySelector('.header');
const mobileNav = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

// navbar show/hide on click
mobileNav.addEventListener('click', () => {
    header.classList.toggle('active');
    });

//Closing sidebar when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('active');
    });
}
); 

// Closing sidebar when clicking outside of it
window.addEventListener('click', (e) => {
    if (!header.contains(e.target) && !e.target.classList.contains('mobile-nav-toggle')) {
        header.classList.remove('active');
    }
});

// active link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if(window.scrollY >= (section.offsetTop) - section.clientHeight / 3) {
            current = section.id;
            console.log(current);
        }
    });
    navLinks.forEach(navLink => {
        navLink.classList.remove('opened');
        if(navLink.href.includes(current)) {
            navLink.classList.add('opened');
        }
    });
});
