/* ==========================================================
                    DETAIL PRODUK
========================================================== */

// =============================================
// AMBIL PARAMETER ID DARI URL
// contoh:
// detail-produk.html?id=PD0027
// =============================================

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

// =============================================
// CARI PRODUK BERDASARKAN ID
// =============================================

const product = products.find(item => item.id === productId);

// =============================================
// JIKA PRODUK TIDAK DITEMUKAN
// =============================================

if (!product) {

    document.querySelector(".detail-product").innerHTML = `

        <div class="container">

            <div class="product-not-found">

                <i class="fa-solid fa-circle-exclamation"></i>

                <h2>

                    Produk Tidak Ditemukan

                </h2>

                <p>

                    Maaf, produk yang Anda cari tidak tersedia.

                </p>

                <a
                    href="produk.html"
                    class="primary-btn">

                    Kembali ke Produk

                </a>

            </div>

        </div>

    `;

    throw new Error("Produk tidak ditemukan.");

}

// =============================================
// MENAMPILKAN INFORMASI PRODUK
// =============================================

document.getElementById("productTitle").textContent = product.nama;

document.getElementById("breadcrumbName").textContent = product.nama;

document.getElementById("detailImage").src = product.gambar;

document.getElementById("detailImage").alt = product.nama;

document.getElementById("detailCategory").textContent = product.kategori;

document.getElementById("detailName").textContent = product.nama;

document.getElementById("detailPrice").textContent = product.harga;

document.getElementById("detailCode").textContent = product.kode;

document.getElementById("detailDescription").textContent = product.deskripsi;
/* ==========================================================
                SPESIFIKASI PRODUK
========================================================== */

const specificationTable = document.getElementById("specificationTable");

if (product.spesifikasi && specificationTable) {

    specificationTable.innerHTML = "";

    Object.entries(product.spesifikasi).forEach(([key, value]) => {

        // Mengubah nama field agar lebih rapi
        const label = key
            .replace(/([A-Z])/g, " $1")
            .trim();

        specificationTable.innerHTML += `

            <tr>

                <th>${label}</th>

                <td>${value}</td>

            </tr>

        `;

    });

}
/* ==========================================================
                PRODUK TERKAIT
========================================================== */

const relatedContainer = document.getElementById("relatedProducts");

if (relatedContainer) {

    const relatedProducts = products.filter(item =>

        item.kategori === product.kategori &&
        item.id !== product.id

    ).slice(0, 4);

    relatedContainer.innerHTML = "";

    relatedProducts.forEach(item => {

        relatedContainer.innerHTML += `

            <div class="product-card">

                <a href="detail-produk.html?id=${item.id}">

                    <div class="product-image">

                        <img
                            src="${item.gambar}"
                            alt="${item.nama}">

                    </div>

                </a>

                <div class="product-info">

                    <span class="product-category">

                        ${item.kategori}

                    </span>

                    <h3>

                        ${item.nama}

                    </h3>

                    <p class="product-price">

                        ${item.harga}

                    </p>

                    <a
                        href="detail-produk.html?id=${item.id}"
                        class="detail-btn">

                        Lihat Detail

                    </a>

                </div>

            </div>

        `;

    });

}