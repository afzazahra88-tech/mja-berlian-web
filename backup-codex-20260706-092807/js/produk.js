/* ==========================================================
                    PRODUK MJA BERLIAN
========================================================== */

// ===============================
// ELEMENT
// ===============================

const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const searchInput = document.getElementById("searchProduct");
const pagination = document.getElementById("pagination");

// ===============================
// DATA
// ===============================

let filteredProducts = [...products];

let currentPage = 1;

const productsPerPage = 9;

// ===============================
// AMBIL PARAMETER URL
// contoh:
// produk.html?kategori=perhiasan
// ===============================

const params = new URLSearchParams(window.location.search);

const kategori = params.get("kategori");

// ===============================
// FILTER BERDASARKAN URL
// ===============================

if (kategori) {

    filteredProducts = products.filter(product =>

        product.kategori === kategori

    );

}

// ===============================
// FORMAT RUPIAH
// ===============================

function formatHarga(harga) {

    if (typeof harga === "string") return harga;

    return new Intl.NumberFormat("id-ID", {

        style: "currency",

        currency: "IDR",

        maximumFractionDigits: 0

    }).format(harga);

}
/* ==========================================================
                MENAMPILKAN PRODUK
========================================================== */

function displayProducts() {

    productGrid.innerHTML = "";

    // Hitung produk yang akan ditampilkan sesuai halaman
    const start = (currentPage - 1) * productsPerPage;

    const end = start + productsPerPage;

    const pageProducts = filteredProducts.slice(start, end);

    // Jika tidak ada produk
    if (pageProducts.length === 0) {

        productGrid.innerHTML = `

            <div class="empty-product">

                <i class="fa-solid fa-box-open"></i>

                <h3>Tidak ada produk ditemukan</h3>

                <p>Coba gunakan kata kunci lain.</p>

            </div>

        `;

        productCount.innerHTML = "0 Produk";

        return;

    }

    // Membuat card produk
    pageProducts.forEach(product => {

        productGrid.innerHTML += `

        <div class="product-card">

            <a href="detail-produk.html?id=${product.id}">

                <div class="product-image">

                    <img src="${product.gambar}"

                        alt="${product.nama}">

                </div>

            </a>

            <div class="product-info">

                <span class="product-category">

                    ${product.kategori}

                </span>

                <h3>

                    ${product.nama}

                </h3>

                <p class="product-price">

                    ${formatHarga(product.harga)}

                </p>

                <a

                    href="detail-produk.html?id=${product.id}"

                    class="detail-btn">

                    Lihat Detail

                    <i class="fa-solid fa-arrow-right"></i>

                </a>

            </div>

        </div>

        `;

    });

    // Menampilkan jumlah produk
    productCount.innerHTML =
        `Menampilkan ${filteredProducts.length} Produk`;

}
/* ==========================================================
                    SEARCH PRODUK
========================================================== */

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    // Ambil kategori dari URL
    if (kategori) {

        filteredProducts = products.filter(product => {

            return product.kategori === kategori &&
                   product.nama.toLowerCase().includes(keyword);

        });

    } else {

        filteredProducts = products.filter(product =>

            product.nama.toLowerCase().includes(keyword)

        );

    }

    currentPage = 1;

    displayProducts();

    createPagination();

});


/* ==========================================================
                    PAGINATION
========================================================== */

function createPagination() {

    pagination.innerHTML = "";

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    if (totalPages <= 1) return;

    // Tombol Previous

    pagination.innerHTML += `

        <button
            class="page-btn"
            onclick="changePage(${currentPage - 1})"
            ${currentPage === 1 ? "disabled" : ""}>

            <i class="fa-solid fa-angle-left"></i>

        </button>

    `;

    // Nomor halaman

    for (let i = 1; i <= totalPages; i++) {

        pagination.innerHTML += `

            <button
                class="page-btn ${currentPage === i ? "active" : ""}"

                onclick="changePage(${i})">

                ${i}

            </button>

        `;

    }

    // Tombol Next

    pagination.innerHTML += `

        <button
            class="page-btn"
            onclick="changePage(${currentPage + 1})"
            ${currentPage === totalPages ? "disabled" : ""}>

            <i class="fa-solid fa-angle-right"></i>

        </button>

    `;

}


/* ==========================================================
                GANTI HALAMAN
========================================================== */

function changePage(page) {

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    if (page < 1 || page > totalPages) return;

    currentPage = page;

    displayProducts();

    createPagination();

    window.scrollTo({

        top: 250,

        behavior: "smooth"

    });

}


/* ==========================================================
                    LOAD HALAMAN
========================================================== */

displayProducts();

createPagination();