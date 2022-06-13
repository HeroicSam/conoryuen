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

const slideOptions = {

};

const header = document.querySelector('header');
const sectionOne = document.querySelector('main');
const headerName = document.querySelector('.name');
const menu = document.querySelector('.menu');

const faders = document.querySelectorAll('.fade-in');
const leftSliders = document.querySelectorAll('.left-slide');
const rightSliders = document.querySelectorAll('.right-slide');

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                headerName.classList.add('nav-scrolled');
                menu.classList.add('nav-scrolled-2');
                header.classList.remove('nav-unscrolled');
                menu.classList.remove('nav-unscrolled-2');
                header.classList.add('header-display');
            } else {
                header.classList.remove('header-display');
                headerName.classList.remove('nav-scrolled');
                menu.classList.remove('nav-scrolled-2');
                header.classList.add('nav-unscrolled');
                menu.classList.add('nav-unscrolled-2');
            }
        });

}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
    // threshold: 1,
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
});


const slideOnScrollLeft = new IntersectionObserver(function(
    entries,
    slideOnScrollLeft
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, slideOptions); 

leftSliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

const slideOnScrollRight = new IntersectionObserver(function(
    entries,
    slideOnScrollRight
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, slideOptions); 

rightSliders.forEach(slider => {
    appearOnScroll.observe(slider);
});


const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('nav');
let menuToggle = false;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    console.log(menuToggle);
        if (!menuToggle) {
        mobileMenu.classList.add('nav-open')
        mobileMenu.classList.remove('nav-close')
        menuToggle = true;
    } else {
        mobileMenu.classList.remove('nav-open')
        mobileMenu.classList.add('nav-close')
        menuToggle = false;
    };
    // mobileMenu.classList.toggle('nav-open');
});

// jQuery

$(document).ready(function() {
    $("#hotswaps").hover(function() {
        $(".img-container").css("background-color","black");
    });
});

$(document).ready(function() {
    $("#allodds").hover(function() {
        $(".img-container").css("background-color","green");
    });
});

$(document).ready(function() {
    $("#personal").hover(function() {
        $(".img-container").css("background-color","blue");
    });
});