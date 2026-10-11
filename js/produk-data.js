const products = [
    {
        id: "PD0027",
        kode: "PD0027",
        nama: "PREMIUM MAN 01",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/man01.jpg",
        deskripsi: "Cincin pria dengan tampilan elegan, rapi, dan berkarisma. Rangkaian berlian tersusun solid dengan satu berlian utama di bagian tengah, cocok untuk eksekutif muda dan pebisnis.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 65 pcs",
            BeratBerlian: "+/- 0.60 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 6.51 gram"
        }
    },
    {
        id: "PD0028",
        kode: "PD0028",
        nama: "PREMIUM MAN 02",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/man02.jpg",
        deskripsi: "Cincin pria berdesain tegas dan eksklusif dengan detail berlian natural yang memperkuat kesan profesional dan percaya diri.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 13 pcs",
            BeratBerlian: "+/- 0.40 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 10.00 gram"
        }
    },
    {
        id: "PD0029",
        kode: "PD0029",
        nama: "PREMIUM MAN 03",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/man03.jpg",
        deskripsi: "Cincin untuk kaum pria yang indah, simpel, nampak rapi dan berkarisma, yang tersusun oleh rangkaian berlian solid dan rapat. Cocok digunakan oleh para eksekutif muda dan pebisnis, dari semua level umur.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 28 pcs",
            BeratBerlian: "+/- 0.60 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 11.00 gram"
        }
    },
    {
        id: "PD0030",
        kode: "PD0030",
        nama: "PREMIUM MAN 04",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/man04.jpg",
        deskripsi: "Cincin untuk kaum pria yang indah, simpel, nampak rapi dan berkarisma, yang tersusun oleh rangkaian berlian solid dan rapat. Cocok digunakan oleh para eksekutif muda dan pebisnis, dari semua level umur.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 9 pcs",
            BeratBerlian: "+/- 0.50 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 8.00 gram"
        }
    },
    {
        id: "PD0031",
        kode: "PD0031",
        nama: "PREMIUM LADY 01",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/lady01.jpg",
        deskripsi: "Cincin berlian untuk wanita yang simpel dan nampak indah, cocok digunakan disetiap waktu dan tempat, cincin ini sangat pas digunakan oleh para wanita karir, pebisnis, ataupun eksekutif senior.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 6 pcs",
            BeratBerlian: "+/- 0.60 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 4.50 gram"
        }
    },
    {
        id: "PD0032",
        kode: "PD0032",
        nama: "PREMIUM LADY 02",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/lady02.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah, elegan dan tidak kaku dengan motif kelopak bunga ditengah, cocok digunakan disetiap waktu dan tempat, cincin ini sangat pas digunakan oleh para wanita karir dan ibu muda ataupun gadis belia.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 9 pcs",
            BeratBerlian: "+/- 0.90 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 4.41 gram"
        }
    },
    {
        id: "PD0033",
        kode: "PD0033",
        nama: "PREMIUM LADY 03",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/lady03.jpg",
        deskripsi: "Cincin berlian untuk wanita yang simpel dan nampak indah, cocok digunakan disetiap waktu dan tempat, cincin ini sangat pas digunakan oleh para wanita karir, pebisnis, ataupun eksekutif senior.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 37 pcs",
            BeratBerlian: "+/- 0.80 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 4.00 gram"
        }
    },
    {
        id: "PD0034",
        kode: "PD0034",
        nama: "PREMIUM LADY 04",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/lady04.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah, elegan dan tidak kaku dengan motif kelopak bunga ditengah, cocok digunakan disetiap waktu dan tempat, cincin ini sangat pas digunakan oleh para wanita karir dan ibu muda ataupun gadis belia.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 6 pcs",
            BeratBerlian: "+/- 0.40 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 4.00 gram"
        }
    },
    {
        id: "PD0035",
        kode: "PD0035",
        nama: "PREMIUM LADY 05",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/lady05.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah, elegan dan tidak kaku dengan motif kelopak bunga ditengah, cocok digunakan disetiap waktu dan tempat, cincin ini sangat pas digunakan oleh para wanita karir dan ibu muda ataupun gadis belia.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 9 pcs",
            BeratBerlian: "+/- 0.70 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 4.00 gram"
        }
    },
    {
        id: "PD0037",
        kode: "PD0037",
        nama: "PREMIUM LADY 06",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/lady06.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah, elegan dan tidak kaku dengan motif kelopak bunga ditengah, cocok digunakan disetiap waktu dan tempat, cincin ini sangat pas digunakan oleh para wanita karir dan ibu muda ataupun gadis belia.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 2 pcs",
            BeratBerlian: "+/- 0.60 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 5.00 gram"
        }
    },
    {
        id: "PD0044",
        kode: "PD0044",
        nama: "HIGH MAN 01",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highman01.jpg",
        deskripsi: "Cincin untuk kaum pria yang indah, simpel, nampak tegas dan kokoh, cincin ini pantas untuk para pebisnis dan eksekutif, karena kesederhananya cincin ini akan pas jika digunakan dalam semua waktu dan event.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 24 pcs",
            BeratBerlian: "+/- 1.00 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 10.00 gram"
        }
    },
    {
        id: "PD0038",
        kode: "PD0038",
        nama: "PREMIUM LADY 07",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/lady07.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah, elegan dan tidak kaku dengan motif kelopak bunga ditengah, cocok digunakan disetiap waktu dan tempat, cincin ini sangat pas digunakan oleh para wanita karir dan ibu muda ataupun gadis belia.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 2 pcs",
            BeratBerlian: "+/- 0.60 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 5.00 gram"
        }
    },
    {
        id: "PD0039",
        kode: "PD0039",
        nama: "LIOTIN PREMIUM 01",
        kategori: "perhiasan",
        subkategori: "kalung",
        harga: "Rp 7.800.000",
        gambar: "images/produk/kalung/prem01.jpg",
        deskripsi: "Liontin berlian untuk wanita yang simpel dan nampak indah, dengan taburan berlian diseluruh permukaannya cocok digunakan digunakan disetiap waktu dan tempat, liontin ini sangat pas digunakan oleh para wanita karir, pebisnis, ataupun eksekutif senior.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 86 pcs",
            BeratBerlian: "+/- 0.60 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 5.00 gram"
        }
    },
    {
        id: "PD0040",
        kode: "PD0040",
        nama: "LIOTIN PREMIUM 02",
        kategori: "perhiasan",
        subkategori: "kalung",
        harga: "Rp 7.800.000",
        gambar: "images/produk/kalung/prem02.jpg",
        deskripsi: "Liontin berlian untuk wanita yang simpel dan nampak indah, dengan taburan berlian diseluruh permukaannya cocok digunakan digunakan disetiap waktu dan tempat, liontin ini sangat pas digunakan oleh para wanita karir, pebisnis, ataupun eksekutif senior.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 78 pcs",
            BeratBerlian: "+/- 0.50 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 5.00 gram"
        }
    },
    {
        id: "PD0042",
        kode: "PD0042",
        nama: "LIOTIN PREMIUM 03",
        kategori: "perhiasan",
        subkategori: "kalung",
        harga: "Rp 7.800.000",
        gambar: "images/produk/kalung/prem03.jpg",
        deskripsi: "Liontin berlian untuk wanita yang simpel dan nampak indah, dengan taburan berlian diseluruh permukaannya cocok digunakan digunakan disetiap waktu dan tempat, liontin ini sangat pas digunakan oleh para wanita karir, pebisnis, ataupun eksekutif senior.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 11 pcs",
            BeratBerlian: "+/- 0.30 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 3.00 gram"
        }
    },
    {
        id: "PD0057",
        kode: "PD0057",
        nama: "LIOTIN HIGH 01",
        kategori: "perhiasan",
        subkategori: "kalung",
        harga: "Rp 9.800.000",
        gambar: "images/produk/kalung/high01.jpg",
        deskripsi: "Liontin berlian untuk wanita yang indah mempesona, cocok digunakan dalam menghadiri kegiatan penting dan pesta, Liontin ini sangat pas digunakan oleh para wanita karir dan ibu rumah tangga.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 7 pcs",
            BeratBerlian: "+/- 0.25 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 5.00 gram"
        }
    },
    {
        id: "PD0058",
        kode: "PD0058",
        nama: "LIOTIN HIGH 02",
        kategori: "perhiasan",
        subkategori: "kalung",
        harga: "Rp 9.800.000",
        gambar: "images/produk/kalung/high02.jpg",
        deskripsi: "Liontin berlian untuk wanita yang indah mempesona, cocok digunakan dalam menghadiri kegiatan penting dan pesta, Liontin ini sangat pas digunakan oleh para wanita karir dan ibu rumah tangga.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 16 pcs",
            BeratBerlian: "+/- 0.50 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 5.00 gram"
        }
    },
    {
        id: "PD0061",
        kode: "PD0061",
        nama: "LIOTIN HIGH 03",
        kategori: "perhiasan",
        subkategori: "kalung",
        harga: "Rp 9.800.000",
        gambar: "images/produk/kalung/high03.jpg",
        deskripsi: "Liontin berlian untuk wanita yang indah mempesona, cocok digunakan dalam menghadiri kegiatan penting dan pesta, Liontin ini sangat pas digunakan oleh para wanita karir dan ibu rumah tangga.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 23 pcs",
            BeratBerlian: "+/- 0.50 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 5.00 gram"
        }
    },
    {
        id: "PD0045",
        kode: "PD0045",
        nama: "HIGH MAN 02",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/HIGHMAN02.jpg",
        deskripsi: "Cincin untuk kaum pria yang indah, simpel, nampak tegas dan kokoh, cincin ini membawa citra menawan ala para bangsawan klasik. Cocok digunakan oleh para eksekutif senior dan pebisnis, dari semua level umur.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 26 pcs",
            BeratBerlian: "+/- 1.00 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 13.00 gram"
        }
    },
    {
        id: "PD0047",
        kode: "PD0047",
        nama: "HIGH MAN 03",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highman03.jpg",
        deskripsi: "Cincin untuk kaum pria yang indah, simpel, nampak tegas dan kokoh, cincin ini membawa citra menawan ala para bangsawan klasik. Cocok digunakan oleh para eksekutif senior dan pebisnis, dari semua level umur.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 39 pcs",
            BeratBerlian: "+/- 1.82 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 13.07 gram"
        }
    },
    {
        id: "PD0048",
        kode: "PD0048",
        nama: "HIGH MAN 04",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highman04.jpg",
        deskripsi: "Cincin untuk kaum pria yang indah, simpel, nampak tegas dan kokoh, cincin ini membawa citra menawan ala para bangsawan klasik. Cocok digunakan oleh para eksekutif senior dan pebisnis, dari semua level umur.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 39 pcs",
            BeratBerlian: "+/- 1.82 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 13.07 gram"
        }
    },
    {
        id: "PD0049",
        kode: "PD0049",
        nama: "HIGH MAN 05",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highman05.jpg",
        deskripsi: "Cincin untuk kaum pria yang indah, simpel, nampak tegas dan kokoh, cincin berlogo MJA ini melambangkan kesuksesan dan kebersamaan seperti semangat yang diusung oleh MJA sendiri. Cocok digunakan oleh para eksekutif dan pebisnis, dari semua level umur.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 45 pcs",
            BeratBerlian: "+/- 1.50 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 11.45 gram"
        }
    },
    {
        id: "PD0050",
        kode: "PD0050",
        nama: "HIGH MAN 06",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highman06.jpg",
        deskripsi: "Cincin untuk kaum pria yang indah, simpel, nampak tegas dan kokoh. Cocok digunakan oleh para eksekutif dan pebisnis, dari semua level umur.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 41 pcs",
            BeratBerlian: "+/- 1.50 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 10.00 gram"
        }
    },
    {
        id: "PD0043",
        kode: "PD0043",
        nama: "GIWANG PREMIUM 01",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 7.800.000",
        gambar: "images/produk/cincin/giwangpremium01.jpg",
        deskripsi: "Giwang berlian untuk wanita yang simpel dan nampak indah, dengan taburan berlian diseluruh permukaannya cocok digunakan digunakan disetiap waktu dan tempat, Giwang ini sangat pas digunakan oleh para wanita karir, pebisnis, ataupun eksekutif senior.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 46 pcs",
            BeratBerlian: "+/- 0.60 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 4.50 Gram"
        }
    },
    {
        id: "PD0053",
        kode: "PD0053",
        nama: "HIGH LADY 03",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highlady03.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah mempesona dengan motif tetes air bertingkat, cocok digunakan dalam menghadiri kegiatan penting dan pesta, cincin ini sangat pas digunakan oleh para wanita karir dan ibu rumah tangga.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 77 pcs",
            BeratBerlian: "+/- 1.25 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 6.803 gram"
        }
    },
    {
        id: "PD0056",
        kode: "PD0056",
        nama: "HIGH LADY 06",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highlady06.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah mempesona, cocok digunakan dalam menghadiri kegiatan penting dan pesta, cincin ini sangat pas digunakan oleh para wanita karir dan ibu rumah tangga.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 87 pcs",
            BeratBerlian: "+/- 1.25 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 8.00 gram"
        }
    },
    {
        id: "PD0055",
        kode: "PD0055",
        nama: "HIGH LADY 05",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highlady05.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah mempesona, cocok digunakan dalam menghadiri kegiatan penting dan pesta, cincin ini sangat pas digunakan oleh para wanita karir dan ibu rumah tangga.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 29 pcs",
            BeratBerlian: "+/- 1.00 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 5.19 gram"
        }
    },
    {
        id: "PD0054",
        kode: "PD0054",
        nama: "HIGH LADY 04",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highlady04.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah mempesona, cocok digunakan dalam menghadiri kegiatan penting dan pesta, cincin ini sangat pas digunakan oleh para wanita karir dan ibu rumah tangga.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 29 pcs",
            BeratBerlian: "+/- 1.00 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 5.19 gram"
        }
    },
    {
        id: "PD0052",
        kode: "PD0052",
        nama: "HIGH LADY 02",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highlady02.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah mempesona, cocok digunakan dalam menghadiri kegiatan penting dan pesta, cincin ini sangat pas digunakan oleh para wanita karir dan ibu rumah tangga.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 97 pcs",
            BeratBerlian: "+/- 1.00 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 7.892 gram"
        }
    },
    {
        id: "PD0051",
        kode: "PD0051",
        nama: "HIGH LADY 01",
        kategori: "perhiasan",
        subkategori: "cincin",
        harga: "Rp 9.800.000",
        gambar: "images/produk/cincin/highlady01.jpg",
        deskripsi: "Cincin berlian untuk wanita yang indah mempesona, cocok digunakan dalam menghadiri kegiatan penting dan pesta, cincin ini sangat pas digunakan oleh para wanita karir dan ibu rumah tangga.",
        spesifikasi: {
            JenisBerlian: "Natural Diamond",
            JumlahBerlian: "+/- 39 pcs",
            BeratBerlian: "+/- 1.40 karat",
            BahanRing: "Palladium Silver",
            BeratTotal: "+/- 7.00 gram"
        }
    }
];
