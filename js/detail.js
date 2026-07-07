document.addEventListener("DOMContentLoaded", () => {
    const productList = typeof products !== "undefined" ? products : [];
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id") || productList[0]?.id;
    const product = productList.find(item => item.id === productId);
    const detailSection = document.querySelector(".detail-product");
    const setText = (id, value) => { const element = document.getElementById(id); if (element) element.textContent = value || "-"; };
    if (!product) {
        if (detailSection) detailSection.innerHTML = `<div class="container"><div class="product-not-found"><i class="fa-solid fa-circle-exclamation"></i><h2>Produk Tidak Ditemukan</h2><p>Maaf, produk yang Anda cari tidak tersedia.</p><a href="produk.html" class="primary-btn">Kembali ke Produk</a></div></div>`;
        return;
    }
    document.title = `${product.nama} | MJA Berlian`;
    setText("productTitle", product.nama);
    setText("breadcrumbName", product.nama);
    setText("detailCategory", product.kategori.charAt(0).toUpperCase() + product.kategori.slice(1));
    setText("detailName", product.nama);
    setText("detailPrice", product.harga);
    setText("detailCode", product.kode);
    setText("detailDescription", product.deskripsi);
    const image = document.getElementById("detailImage");
    if (image) { image.src = product.gambar; image.alt = product.nama; image.onerror = () => { image.src = "images/logo.png"; }; }
    const waButton = document.getElementById("waButton");
    if (waButton) {
        const message = `Halo Admin MJA Berlian, saya ingin konsultasi produk ${product.nama} (${product.kode}).`;
        waButton.href = `https://wa.me/628217574171?text=${encodeURIComponent(message)}`;
    }
    const specificationTable = document.getElementById("specificationTable");
    if (specificationTable) {
        const entries = Object.entries(product.spesifikasi || {});
        specificationTable.innerHTML = entries.length ? entries.map(([key, value]) => `<tr><th>${key.replace(/([A-Z])/g, " $1").trim()}</th><td>${value}</td></tr>`).join("") : `<tr><th>Informasi</th><td>Detail tambahan tersedia melalui admin MJA Berlian.</td></tr>`;
    }
    const relatedContainer = document.getElementById("relatedProducts");
    if (relatedContainer) {
        const relatedProducts = productList.filter(item => item.kategori === product.kategori && item.id !== product.id).slice(0, 4);
        relatedContainer.innerHTML = relatedProducts.length ? relatedProducts.map(item => `
            <article class="product-card">
                <a href="detail-produk.html?id=${encodeURIComponent(item.id)}"><div class="product-image"><img src="${item.gambar}" alt="${item.nama}" loading="lazy" onerror="this.src='images/logo.png'"></div></a>
                <div class="product-info"><span class="product-category">${item.kategori.charAt(0).toUpperCase() + item.kategori.slice(1)}</span><h3>${item.nama}</h3><p class="product-price">${item.harga}</p><a href="detail-produk.html?id=${encodeURIComponent(item.id)}" class="detail-btn">Lihat Detail <i class="fa-solid fa-arrow-right"></i></a></div>
            </article>`).join("") : `<div class="empty-product"><i class="fa-solid fa-box-open"></i><h3>Belum ada produk terkait</h3><p>Lihat katalog untuk pilihan produk lainnya.</p><a href="produk.html" class="primary-btn">Lihat Produk</a></div>`;
    }
});