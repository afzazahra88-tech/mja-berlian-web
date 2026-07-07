document.addEventListener("DOMContentLoaded", () => {
    const productList = typeof products !== "undefined" ? products : [];
    const productGrid = document.getElementById("productGrid");
    const productCount = document.getElementById("productCount");
    const searchInput = document.getElementById("searchProduct");
    const pagination = document.getElementById("pagination");
    if (!productGrid) return;
    const params = new URLSearchParams(window.location.search);
    const kategori = (params.get("kategori") || "").toLowerCase();
    const productsPerPage = 9;
    let currentPage = 1;
    let filteredProducts = productList.filter(product => !kategori || product.kategori.toLowerCase() === kategori);
    const escapeHtml = value => String(value ?? "").replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
    const formatKategori = value => value ? value.charAt(0).toUpperCase() + value.slice(1) : "Produk";
    function applySearch() {
        const keyword = (searchInput?.value || "").toLowerCase().trim();
        filteredProducts = productList.filter(product => {
            const sameCategory = !kategori || product.kategori.toLowerCase() === kategori;
            const searchable = `${product.nama} ${product.kode} ${product.kategori} ${product.subkategori || ""}`.toLowerCase();
            return sameCategory && searchable.includes(keyword);
        });
        currentPage = 1;
        displayProducts();
        createPagination();
    }
    function displayProducts() {
        productGrid.innerHTML = "";
        const start = (currentPage - 1) * productsPerPage;
        const pageProducts = filteredProducts.slice(start, start + productsPerPage);
        if (pageProducts.length === 0) {
            productGrid.innerHTML = `<div class="empty-product"><i class="fa-solid fa-box-open"></i><h3>Tidak ada produk ditemukan</h3><p>Coba gunakan kata kunci atau kategori lain.</p></div>`;
            if (productCount) productCount.textContent = "0 Produk";
            return;
        }
        productGrid.innerHTML = pageProducts.map(product => `
            <article class="product-card">
                <a href="detail-produk.html?id=${encodeURIComponent(product.id)}" aria-label="Lihat detail ${escapeHtml(product.nama)}">
                    <div class="product-image"><img src="${escapeHtml(product.gambar)}" alt="${escapeHtml(product.nama)}" loading="lazy" onerror="this.src='images/logo.png'"></div>
                </a>
                <div class="product-info">
                    <span class="product-category">${escapeHtml(formatKategori(product.kategori))}</span>
                    <h3>${escapeHtml(product.nama)}</h3>
                    <p class="product-price">${escapeHtml(product.harga)}</p>
                    <a href="detail-produk.html?id=${encodeURIComponent(product.id)}" class="detail-btn">Lihat Detail <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </article>
        `).join("");
        if (productCount) {
            const first = start + 1;
            const last = Math.min(start + pageProducts.length, filteredProducts.length);
            productCount.textContent = `Menampilkan ${first}-${last} dari ${filteredProducts.length} produk`;
        }
    }
    function createPagination() {
        if (!pagination) return;
        pagination.innerHTML = "";
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        if (totalPages <= 1) return;
        const buttons = [`<button class="page-btn" data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""}><i class="fa-solid fa-angle-left"></i></button>`];
        for (let i = 1; i <= totalPages; i++) buttons.push(`<button class="page-btn ${currentPage === i ? "active" : ""}" data-page="${i}">${i}</button>`);
        buttons.push(`<button class="page-btn" data-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""}><i class="fa-solid fa-angle-right"></i></button>`);
        pagination.innerHTML = buttons.join("");
    }
    pagination?.addEventListener("click", event => {
        const button = event.target.closest(".page-btn");
        if (!button || button.disabled) return;
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        const page = Number(button.dataset.page);
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        displayProducts();
        createPagination();
        window.scrollTo({ top: 250, behavior: "smooth" });
    });
    searchInput?.addEventListener("input", applySearch);
    document.querySelectorAll(".category-link").forEach(link => {
        const linkKategori = new URL(link.href).searchParams.get("kategori")?.toLowerCase() || "";
        if ((!kategori && !linkKategori) || kategori === linkKategori) link.classList.add("active");
    });
    displayProducts();
    createPagination();
});