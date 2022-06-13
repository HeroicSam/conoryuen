// Change page functions
// function changePageHome() {
//     window.location.href="../home.html"
// }

// function changePageAbout() {
//     window.location.href="./about.html"
// }

// function changePagePortfolio() {
//     window.location.href="./portfolio.html"
// }

// function changePageContact() {
//     window.location.href="./contact.html"
// }

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const header = document.querySelector('header');
const sectionOne = document.querySelector('main');

const faders = document.querySelectorAll('.fade-in');

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                header.classList.add('nav-scrolled');
            } else {
                header.classList.remove('nav-scrolled');
            }
        });

}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

const menuBtn = document.querySelector('.menu-btn');
console.log(menuBtn);
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});