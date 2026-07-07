
/* ==========================================================
        MJA BERLIAN WEBSITE
        MAIN JS
        PART 1
========================================================== */


/* ==========================================================
                HERO SLIDER SETUP
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
// Ambil elemen slide
const heroSlides = document.querySelectorAll(".hero-slide");

// Dot indicator
const heroDots = document.querySelectorAll(".hero-indicator .dot");

// Progress bar
const progressBar = document.querySelector(".progress-bar");

// Index slide aktif
let currentSlide = 0;

// total slide
const totalSlides = heroSlides.length;


/* ==========================================================
                SHOW SLIDE FUNCTION
========================================================== */

function showSlide(index) {

    // reset semua slide
    heroSlides.forEach(slide => {

        slide.classList.remove("active");

    });

    // reset dots
    heroDots.forEach(dot => {

        dot.classList.remove("active");

    });

    // aktifkan slide sekarang
    heroSlides[index].classList.add("active");

    // aktifkan dot
    heroDots[index].classList.add("active");

    // update progress bar
    if (progressBar) {

        progressBar.style.width = ((index + 1) / totalSlides) * 100 + "%";

    }

    // update index
    currentSlide = index;

}


/* ==========================================================
                NEXT & PREV SLIDE
========================================================== */

function nextSlide() {

    let next = currentSlide + 1;

    if (next >= totalSlides) {

        next = 0;

    }

    showSlide(next);

}

function prevSlide() {

    let prev = currentSlide - 1;

    if (prev < 0) {

        prev = totalSlides - 1;

    }

    showSlide(prev);

}


/* ==========================================================
                AUTO SLIDER
========================================================== */

let slideInterval = setInterval(nextSlide, 6000);


/* ==========================================================
                RESET AUTO SLIDE
========================================================== */

function resetInterval() {

    clearInterval(slideInterval);

    slideInterval = setInterval(nextSlide, 6000);

}


/* ==========================================================
                DOT CLICK EVENT
========================================================== */

heroDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        resetInterval();

    });

});

/* ==========================================================
        MAIN JS
        PART 2
========================================================== */


/* ==========================================================
                HAMBURGER MENU
========================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* ==========================================================
                CLOSE MENU ON CLICK LINK
========================================================== */

const navLinks = document.querySelectorAll(".nav-menu li a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ==========================================================
                STICKY NAVBAR ON SCROLL
========================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ==========================================================
                BACK TO TOP BUTTON
========================================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ==========================================================
                ACTIVE MENU ON SCROLL
========================================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-menu li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + current) {

            item.classList.add("active");

        }

    });

});

/* ==========================================================
        MAIN JS
        PART 3 (FINAL)
========================================================== */


/* ==========================================================
                PRODUCT FILTER
========================================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        // remove active
        filterButtons.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        productCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || filter === category) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ==========================================================
                ABOUT TABS
========================================================== */

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        // reset button
        tabButtons.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        const tab = btn.getAttribute("data-tab");

        tabContents.forEach(content => {

            content.classList.remove("active");

            if (content.id === tab) {

                content.classList.add("active");

            }

        });

    });

});


/* ==========================================================
                TESTIMONIAL AUTO SLIDER
========================================================== */

const testimonials = document.querySelectorAll(".testimonial-card");

let testIndex = 0;

function showTestimonial(index) {

    testimonials.forEach(t => t.style.display = "none");

    if (testimonials[index]) {

        testimonials[index].style.display = "block";

    }

}

if (testimonials.length > 0) {

    showTestimonial(0);

    setInterval(() => {

        testIndex++;

        if (testIndex >= testimonials.length) {

            testIndex = 0;

        }

        showTestimonial(testIndex);

    }, 5000);

}


/* ==========================================================
                SCROLL REVEAL SIMPLE
========================================================== */

const revealElements = document.querySelectorAll(
    ".section-title, .product-card, .join-card, .exclusive-card, .info-card"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            el.classList.add("fade-up");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==========================================================
                WHATSAPP FORM SUBMIT
========================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const pesan = document.getElementById("pesan").value;

        const message = `
Halo Admin MJA Berlian 👋

Nama: ${nama}
Email: ${email}
No HP: ${phone}

Pesan:
${pesan}
        `;

        const waURL = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;

        window.open(waURL, "_blank");

    });

}
});