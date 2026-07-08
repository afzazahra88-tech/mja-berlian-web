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
];