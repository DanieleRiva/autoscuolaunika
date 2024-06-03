window.onscroll = function () { headerOnScroll() };
window.onload = function () { onLoad() };

function headerOnScroll() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementsByClassName("header")[0].classList.add("header-onscroll");
    } else {
        document.getElementsByClassName("header")[0].classList.remove("header-onscroll");
    }
}

function onLoad() {
    resizeHeaderDivider();
    checkPrivacyPolicy();
}

function resizeHeaderDivider() {
    var headerHeight = document.getElementById('nav-mobile').offsetHeight;
    document.getElementById('nav-mobile-spacer').style.height = (headerHeight) + "px";
    document.getElementById("header-mobile").style.marginTop = (headerHeight) + "px";
}

function hamburgerBtn() {
    document.getElementById("header-mobile").classList.toggle("mobile-header-visible");
    document.getElementById("header-mobile").classList.toggle("mobile-header-hidden");
    document.getElementById("close-header").classList.toggle("mobile-header-visible");
    document.getElementById("close-header").classList.toggle("mobile-header-hidden");

    if (document.getElementById("header-mobile").classList.contains("mobile-header-visible"))
        document.getElementById("hamburger-btn").src = "imgs/header/hamburger_close.svg";
    else
        document.getElementById("hamburger-btn").src = "imgs/header/hamburger_open.svg";
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.getElementsByClassName('scroll-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navLinksMobile = document.querySelectorAll('.nav-link-mobile');

    const changeHeaderState = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }

        navLinksMobile.forEach((link) => link.classList.remove('active'));
        if (navLinksMobile[index]) {
            navLinksMobile[index].classList.add('active');
        }
    };

    changeHeaderState();
    window.addEventListener('scroll', changeHeaderState);
});

function checkPrivacyPolicy() {
    if (document.querySelector("iframe").src == "about:blank") {
        document.getElementById("map-warning").style.display = "block";
        document.querySelector("iframe").style.visibility = "collapse";
    }
    else {
        document.getElementById("map-warning").style.display = "none";
        document.querySelector("iframe").style.visibility = "visible";
    }

    window.setInterval(checkPrivacyPolicy, 5000);
}