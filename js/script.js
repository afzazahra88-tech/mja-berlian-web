document.addEventListener("DOMContentLoaded", () => {
    const heroSlides = document.querySelectorAll(".hero-slide");
    const heroDots = document.querySelectorAll(".hero-indicator .dot");
    const progressBar = document.querySelector(".progress-bar");
    const prevButton = document.querySelector(".hero-prev");
    const nextButton = document.querySelector(".hero-next");
    let currentSlide = 0;
    let slideInterval;
    function showSlide(index) {
        if (!heroSlides.length) return;
        const safeIndex = (index + heroSlides.length) % heroSlides.length;
        heroSlides.forEach(slide => slide.classList.remove("active"));
        heroDots.forEach(dot => dot.classList.remove("active"));
        heroSlides[safeIndex]?.classList.add("active");
        heroDots[safeIndex]?.classList.add("active");
        if (progressBar) progressBar.style.width = `${((safeIndex + 1) / heroSlides.length) * 100}%`;
        currentSlide = safeIndex;
    }
    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }
    function resetInterval() { if (!heroSlides.length) return; clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 6000); }
    if (heroSlides.length) {
        showSlide(0); resetInterval();
        heroDots.forEach((dot, index) => dot.addEventListener("click", () => { showSlide(index); resetInterval(); }));
        nextButton?.addEventListener("click", () => { nextSlide(); resetInterval(); });
        prevButton?.addEventListener("click", () => { prevSlide(); resetInterval(); });
    }
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.querySelector(".nav-menu");
    menuToggle?.addEventListener("click", () => { navMenu?.classList.toggle("active"); menuToggle.classList.toggle("active"); });
    document.querySelectorAll(".dropdown > a").forEach(link => {
        link.addEventListener("click", event => { if (window.innerWidth > 992) return; event.preventDefault(); link.closest(".dropdown")?.classList.toggle("active"); });
    });
    document.querySelectorAll(".nav-menu a:not(.dropdown > a)").forEach(link => {
        link.addEventListener("click", () => { navMenu?.classList.remove("active"); menuToggle?.classList.remove("active"); });
    });
    const navbar = document.querySelector(".navbar");
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", () => { navbar?.classList.toggle("scrolled", window.scrollY > 80); backToTop?.classList.toggle("show", window.scrollY > 500); });
    backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-menu li a");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => { if (window.scrollY >= section.offsetTop - 140) current = section.id; });
        navItems.forEach(item => {
            const href = item.getAttribute("href") || "";
            item.classList.toggle("active", href === `#${current}` || href.endsWith(`#${current}`));
        });
    });
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(item => item.classList.remove("active"));
            tabContents.forEach(item => item.classList.remove("active"));
            button.classList.add("active");
            document.getElementById(button.dataset.tab)?.classList.add("active");
        });
    });
    const revealElements = document.querySelectorAll(".section-title, .product-card, .join-card, .exclusive-card, .info-card");
    function revealOnScroll() { revealElements.forEach(element => { if (element.getBoundingClientRect().top < window.innerHeight - 100) element.classList.add("fade-up"); }); }
    window.addEventListener("scroll", revealOnScroll); revealOnScroll();
    const contactForm = document.getElementById("contactForm");
    contactForm?.addEventListener("submit", event => {
        event.preventDefault();
        const nama = document.getElementById("nama")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const phone = document.getElementById("phone")?.value || "";
        const pesan = document.getElementById("pesan")?.value || "";
        const message = `Halo Admin MJA Berlian\n\nNama: ${nama}\nEmail: ${email}\nNo HP: ${phone}\n\nPesan:\n${pesan}`;
        window.open(`https://wa.me/628217574171?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
});