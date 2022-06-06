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