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
            // lazy-load target image if needed
            const targetImg = heroSlides[safeIndex]?.querySelector('img');
            if (targetImg && targetImg.dataset.src && !targetImg.dataset.loaded) {
                targetImg.src = targetImg.dataset.src;
                targetImg.dataset.loaded = 'true';
            }
            // preload next image for smooth transition
            const nextIndex = (safeIndex + 1) % heroSlides.length;
            const nextImg = heroSlides[nextIndex]?.querySelector('img');
            if (nextImg && nextImg.dataset.src && !nextImg.dataset.loaded) {
                const imgPre = new Image();
                imgPre.src = nextImg.dataset.src;
                imgPre.onload = () => nextImg.dataset.loaded = 'true';
            }
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
        menuToggle?.addEventListener("click", () => {
            const isActive = navMenu?.classList.toggle("active");
            menuToggle.classList.toggle("active");
            try {
                menuToggle.setAttribute('aria-expanded', navMenu?.classList.contains('active') ? 'true' : 'false');
                navMenu?.setAttribute('aria-hidden', navMenu?.classList.contains('active') ? 'false' : 'true');
            } catch (e) {}
        });
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
    const tabTriggers = document.querySelectorAll(".tab-button, .tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    function activateTab(name, shouldScroll = true){
        if(!name) return;
        // deactivate triggers and contents
        document.querySelectorAll('.tab-button, .tab-btn').forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        // activate matching triggers
        document.querySelectorAll(`[data-tab="${name}"]`).forEach(t => t.classList.add('active'));
        // show content
        const content = document.getElementById(name);
        if(content){
            content.classList.add('active');
            // lazy-load iframe inside this tab if present
            const iframe = content.querySelector('iframe[data-src]');
            if(iframe && !iframe.dataset.loaded){
                iframe.src = iframe.dataset.src;
                iframe.dataset.loaded = 'true';
            }
        }
        // set ARIA on triggers and contents
        document.querySelectorAll('.tab-button, .tab-btn').forEach(t => t.setAttribute('aria-selected', t.classList.contains('active') ? 'true' : 'false'));
        tabContents.forEach(c => c.setAttribute('aria-hidden', c.classList.contains('active') ? 'false' : 'true'));
        // bring about section into view
        if (shouldScroll) {
            const tentang = document.getElementById('tentang');
            tentang?.scrollIntoView({behavior:'smooth'});
        }
    }
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const name = trigger.dataset.tab || trigger.getAttribute('data-tab');
            activateTab(name);
        });
    });
    // Activate initially visible tab content (if any)
    (function(){
        const initial = document.querySelector('.tab-content.active');
        if(initial && initial.id) activateTab(initial.id, false);
    })();

    const homeProductContainer = document.getElementById("productContainer");
    if (homeProductContainer && typeof products !== "undefined") {
        const productFilterButtons = document.querySelectorAll(".product-filter .filter-btn");
        const escapeProduct = value => String(value ?? "").replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
        const renderHomeProducts = filter => {
            const visibleProducts = products
                .filter(product => filter === "all" || product.kategori === filter)
                .slice(0, 6);

            homeProductContainer.innerHTML = visibleProducts.length
                ? visibleProducts.map(product => `
                    <article class="product-card">
                        <a href="detail-produk.html?id=${encodeURIComponent(product.id)}" aria-label="Lihat detail ${escapeProduct(product.nama)}">
                            <div class="product-image">
                                <img src="${escapeProduct(product.gambar)}" alt="${escapeProduct(product.nama)}" loading="lazy" onerror="this.src='images/logo.png'">
                            </div>
                        </a>
                        <div class="product-info">
                            <span class="product-category">${escapeProduct(product.subkategori || product.kategori)}</span>
                            <h3>${escapeProduct(product.nama)}</h3>
                            <p>${escapeProduct(product.deskripsi || "Produk berlian pilihan MJA Berlian.")}</p>
                            <div class="product-footer">
                                <span class="product-price">${escapeProduct(product.harga)}</span>
                                <a href="detail-produk.html?id=${encodeURIComponent(product.id)}" class="detail-btn" aria-label="Lihat detail ${escapeProduct(product.nama)}">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </article>
                `).join("")
                : `<div class="empty-product"><i class="fa-solid fa-box-open"></i><h3>Produk belum tersedia</h3><p>Silakan cek kembali katalog produk MJA Berlian.</p></div>`;
        };

        productFilterButtons.forEach(button => {
            button.addEventListener("click", () => {
                productFilterButtons.forEach(item => item.classList.remove("active"));
                button.classList.add("active");
                renderHomeProducts(button.dataset.filter || "all");
            });
        });

        renderHomeProducts("all");
    }

    const testimonialSlider = document.getElementById("testimonialSlider");
    if (testimonialSlider) {
        testimonialSlider.innerHTML = `
            <article class="testimonial-card">
                <div class="testimonial-stars" aria-label="Rating 5 dari 5">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h3>Mitra MJA Berlian</h3>
                <span>Komunitas Bisnis</span>
                <p>Produknya mudah dikenalkan, sistemnya jelas, dan pelatihannya membantu kami lebih percaya diri saat menjalankan bisnis.</p>
            </article>
        `;
    }
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

    /* Lazy-load images across the page and prefer .webp when available */
    (function(){
        function supportsWebP(cb){
            const img = new Image();
            img.onload = function(){ cb(img.width === 1 && img.height === 1); };
            img.onerror = function(){ cb(false); };
            img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4TAYAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
        }
        supportsWebP(function(support){
            const imgs = Array.from(document.querySelectorAll('img'));
            imgs.forEach(img => {
                // normalize dataset.src
                if (!img.dataset.src) img.dataset.src = img.getAttribute('src') || '';
            });
            const loadImage = (img) => {
                if (img.dataset.loaded) return;
                const src = img.dataset.src || img.getAttribute('src') || '';
                if (!src) return;
                if (support){
                    const webp = src.replace(/\.(jpe?g|png)$/i, '.webp');
                    img.src = webp;
                    img.onerror = () => { img.src = src; img.onerror = null; };
                } else {
                    img.src = src;
                }
                img.dataset.loaded = 'true';
            };
            if ('IntersectionObserver' in window){
                const obs = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting){
                            loadImage(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                }, {rootMargin: '300px'});
                document.querySelectorAll('img[data-src], img[loading="lazy"]').forEach(img => {
                    // load immediately if visible already
                    if (img.getBoundingClientRect().top < window.innerHeight + 300){
                        loadImage(img);
                    } else {
                        obs.observe(img);
                    }
                });
            } else {
                // fallback: load all
                document.querySelectorAll('img[data-src], img[loading="lazy"]').forEach(loadImage);
            }
        });
    })();

});
