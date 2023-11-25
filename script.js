console.log('Hello world');
const header = document.querySelector('.header');
const mobileNav = document.querySelector('.mobile-nav-toggle');

mobileNav.addEventListener('click', () => {
    header.classList.toggle('active');
    });


// active link with scroll
const navLinks = document.querySelectorAll('.nav-link');
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
