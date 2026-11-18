# Sea Turtle Village — Website starter

Website statis responsif untuk Yayasan Winartadharmasegara / Sea Turtle Village.

## Isi paket
- `index.html` — website utama
- `styles.css` — desain responsif
- `config.js` — pengaturan nomor WhatsApp dan identitas
- `app.js` — menu dan formulir minat adopsi/donasi via WhatsApp
- `admin.html` — dashboard draf lokal (bukan admin online multi-user)

## Sebelum dipublikasikan
1. Buka `config.js`.
2. Ganti `628XXXXXXXXXX` dengan nomor WhatsApp resmi dalam format internasional, misalnya `6281234567890`.
3. Periksa nama yayasan, alamat, deskripsi program, dan semua klaim kegiatan.
4. Ganti foto contoh dengan foto asli yang dimiliki/diizinkan untuk digunakan oleh yayasan.
5. Tambahkan logo resmi yayasan dan Sea Turtle Village bila tersedia.
6. Periksa seluruh informasi adopsi dan donasi. Jangan menambahkan rekening pribadi; gunakan kanal resmi yayasan dan jelaskan peruntukan serta pelaporan dana.
7. Buka `index.html` di browser untuk uji awal.

## Cara hosting gratis dengan GitHub Pages
1. Buat akun di https://github.com/ jika belum punya.
2. Buat repository baru, misalnya `sea-turtle-village`.
3. Unggah seluruh file dari folder ini ke repository.
4. Buka **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
6. Tunggu proses publikasi. GitHub akan menampilkan alamat website gratis berbentuk `https://username.github.io/sea-turtle-village/`.

Alternatif: Cloudflare Pages dapat digunakan untuk hosting statis gratis. Buat proyek Pages dan hubungkan repository GitHub.

## Tentang formulir
Formulir adopsi dan donasi pada versi ini membuka WhatsApp dengan pesan yang telah disusun. Data tidak otomatis masuk database atau Google Sheets. Untuk pendaftaran online yang tersimpan dan bisa dikelola, hubungkan Google Forms ke Google Sheets dan pasang tautannya pada website.

## Tentang dashboard admin
`admin.html` adalah papan draf lokal untuk membantu menulis berita. Data disimpan hanya di browser yang digunakan dan tidak tersinkron ke pengunjung lain. Jangan menganggapnya sebagai dashboard aman. Untuk dashboard online multi-admin diperlukan autentikasi dan backend/database; opsi gratis dapat dirancang dengan Google Forms + Sheets dan akses Google yang dibatasi.

## Foto
Foto pada template memakai URL gambar eksternal dari Unsplash sebagai placeholder visual. Pastikan menggantinya dengan dokumentasi asli atau gambar yang lisensinya telah diperiksa sebelum publikasi.
