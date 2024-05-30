window.onscroll = function () { headerOnScroll() };

function headerOnScroll() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementsByClassName("header")[0].classList.add("header-onscroll");
    } else {
        document.getElementsByClassName("header")[0].classList.remove("header-onscroll");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const changeHeaderState = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    };

    changeHeaderState();
    window.addEventListener('scroll', changeHeaderState);
});