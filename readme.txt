================================================================================
                                  CATATAN 
       SKEMA SERTIFIKASI: ASISTEN PENGEMBANG WEB (JUNIOR WEB DEVELOPER)
                 STANDAR SKKNI NO 282 TAHUN 2016
================================================================================
Peserta : Muh Arya Pangestu
Proyek  : SIPUS DIGITAL (Sistem Informasi Layanan Perpustakaan)
Basis   : Web Responsif (HTML5 Semantik, CSS3, JavaScript ES6, Canvas 2D)
================================================================================


================================================================================
I. 12 PERTANYAAN ESSAY UJIAN TERTULIS
================================================================================

[SOAL 01]
Bagaimana langkah kamu menerapkan mockup atau rancangan user interface menjadi 
tampilan web yang berfungsi?
--------------------------------------------------------------------------------
* KATA KUNCI: Bedah Desain -> Kerangka HTML -> Gaya CSS -> Logika JS -> Validasi
* JAWABAN:
  Saya memulai dengan mempelajari mockup untuk memahami struktur layout dan 
  hierarki konten. Kemudian saya membuat kerangka semantik dengan HTML5, 
  menambahkan gaya visual menggunakan CSS responsif, dan menambahkan logika 
  interaktif (seperti tombol submit dan form) via JavaScript, lalu menguji 
  kesesuaiannya dengan rancangan awal.


[SOAL 02]
Apa saja komponen utama yang kamu gunakan untuk memastikan tampilan antarmuka 
responsif di berbagai ukuran layar?
--------------------------------------------------------------------------------
* KATA KUNCI: CSS Grid/Flexbox, Media Queries, Satuan Relatif (%, rem, vh)
* JAWABAN:
  Menggunakan Responsive Grid System / Flexbox untuk tata letak dinamis, aturan 
  Media Queries pada CSS untuk mengatur breakpoint layar (desktop, tablet, mobile), 
  serta memakai satuan relatif (% dan rem) untuk ukuran font, margin, dan gambar 
  agar proporsional di segala resolusi.


[SOAL 03]
Bagaimana kamu memastikan konsistensi warna, tipografi, dan layout agar sesuai 
dengan desain mockup yang diberikan?
--------------------------------------------------------------------------------
* KATA KUNCI: Style Guide, Variabel CSS (:root), Sistem Container Terpusat
* JAWABAN:
  Saya menetapkan kode warna heksadesimal dan jenis font dari style guide ke 
  dalam CSS Custom Properties (variabel :root). Untuk layout, saya menggunakan 
  sistem container dan komponen modular, serta selalu melakukan perbandingan 
  visual (side-by-side inspect) antara halaman web dan file mockup.


[SOAL 04]
Mengapa kita perlu memahami cara kerja eksekusi source code dalam pengembangan web?
--------------------------------------------------------------------------------
* KATA KUNCI: Identifikasi Bug Cepat & Optimasi Performa Halaman
* JAWABAN:
  Karena setiap komponen web (HTML, CSS, dan JavaScript) dieksekusi secara 
  berurutan dan memiliki karakteristik berbeda. Memahami alur eksekusi membantu 
  kita mengidentifikasi kesalahan (debugging) dengan cepat, mencegah script 
  memblokir tampilan (render-blocking), dan mengoptimalkan kecepatan akses web.


[SOAL 05]
Mengapa penting mengetahui perbedaan antara eksekusi di sisi klien dan sisi server?
--------------------------------------------------------------------------------
* KATA KUNCI: Keamanan Data & Pembagian Beban Kerja Aplikasi
* JAWABAN:
  Karena menentukan arsitektur yang aman dan efisien: Sisi klien (frontend) 
  menangani antarmuka dan interaksi cepat pengguna, sedangkan sisi server 
  (backend) mengelola autentikasi, database, dan logika bisnis sensitif agar 
  tidak bisa dimanipulasi atau diakses langsung oleh publik.


[SOAL 06]
Mengapa kita perlu memahami struktur kontrol seperti percabangan dan pengulangan 
dalam pemrograman web?
--------------------------------------------------------------------------------
* KATA KUNCI: Pengambilan Keputusan & Otomasi Render Data
* JAWABAN:
  Karena hampir semua interaksi aplikasi web memerlukan logika kontrol: 
  Percabangan (if-else) diperlukan untuk pengambilan keputusan (seperti 
  validasi input form dan kalkulasi denda), sedangkan pengulangan (loop) 
  diperlukan untuk menampilkan daftar data array ke dalam tabel HTML secara dinamis.


[SOAL 07]
Mengapa kita perlu memahami dan mengikuti coding guidelines dalam proyek web?
--------------------------------------------------------------------------------
* KATA KUNCI: Konsistensi Tim & Kemudahan Perawatan Jangka Panjang (Maintainability)
* JAWABAN:
  Karena pengembangan aplikasi web umumnya dikerjakan secara tim. Mengikuti 
  coding guidelines menjamin standarisasi struktur, membuat kode mudah dibaca 
  oleh programmer lain, meminimalkan konflik kode saat kolaborasi, dan 
  mempermudah pemeliharaan (maintenance) di masa depan.


[SOAL 08]
Mengapa kita perlu memahami cara kerja browser dalam merender HTML, CSS, dan JavaScript?
--------------------------------------------------------------------------------
* KATA KUNCI: DOM & CSSOM Tree, Pencegahan Layout Shift (CLS)
* JAWABAN:
  Karena browser adalah platform utama tempat web dieksekusi. Memahami tahap 
  rendering (pembentukan DOM, CSSOM, Layout, hingga Paint) membantu kita 
  menghindari pergeseran tata letak yang janggal (Cumulative Layout Shift) dan 
  menempatkan script JavaScript secara efisien agar halaman termuat mulus.


[SOAL 09]
Jelaskan alasan pentingnya menuliskan komentar pada baris kode yang kompleks 
dalam source code, dan bagaimana cara menuliskannya secara tepat?
--------------------------------------------------------------------------------
* KATA KUNCI: Jelaskan "Mengapa" (Why) Bukan Mengulang "Apa" (What)
* JAWABAN:
  - Alasan: Membantu pengembang lain (atau diri sendiri di masa mendatang) 
    memahami maksud algoritma yang rumit.
  - Cara Tepat: Komentar ditulis ringkas tepat di atas blok kode, berfokus 
    menjelaskan alasan bisnis dan tujuan fungsi (mengapa kode dibuat seperti itu), 
    bukan sekadar mengulang apa yang sudah jelas terbaca dari sintaks kode.


[SOAL 10]
Bagaimana memastikan source code memiliki komentar yang cukup untuk setiap 
bagian utama program?
--------------------------------------------------------------------------------
* KATA KUNCI: Pemberian Komentar di 4 Titik Wajib Program
* JAWABAN:
  Dengan menerapkan standar komentar pada 4 bagian utama:
  1. Deskripsi Header File/Modul: Penjelasan kegunaan keseluruhan file.
  2. Dokumentasi Fungsi/Prosedur: Menjelaskan parameter input dan output yang dihasilkan.
  3. Penjelasan Variabel Kunci: Definisi konstanta aturan bisnis (misal BATAS_HARI, TARIF_DENDA).
  4. Penanda Blok Logika Kompleks: Keterangan rumus perhitungan atau penutup blok kode.


[SOAL 11]
Apa yang dimaksud dengan efisiensi dalam konteks pemanfaatan komponen reusable 
pada pengembangan web?
--------------------------------------------------------------------------------
* KATA KUNCI: Prinsip DRY (Don't Repeat Yourself) & Hemat Sumber Daya
* JAWABAN:
  Efisiensi berarti penghematan waktu, biaya, dan beban kerja dengan 
  memanfaatkan kembali potongan kode, fungsi utilitas, atau pustaka yang sudah 
  teruji untuk berbagai kebutuhan tanpa perlu menulis ulang dari nol (mencegah 
  duplikasi kode).


[SOAL 12]
Jelaskan mengapa pemanfaatan library atau komponen yang telah ada dapat 
menurunkan risiko kesalahan (error) dan meningkatkan efisiensi tim pengembang?
--------------------------------------------------------------------------------
* KATA KUNCI: Sudah Teruji Komunitas (Battle-Tested) & Fokus pada Fitur Utama
* JAWABAN:
  Karena komponen atau library yang mapan telah:
  1. Diuji secara luas (tested & validated) oleh komunitas global sehingga 
     minim bug dan kompatibel antar browser.
  2. Memiliki dokumentasi dan API standar yang mempercepat integrasi tim.
  3. Mengurangi duplikasi kode sehingga tim dapat mencurahkan energi pada 
     logika bisnis utama (business logic) aplikasi, bukan membuang waktu 
     memprogram fungsi dasar dari nol.



================================================================================
II. 6 PERTANYAAN WAWANCARA ASESOR PENGUJI LSP
================================================================================

[WAWANCARA 01]
Bagaimana menerapkan mockup/rancangan user interface dari aplikasi yang akan 
dikembangkan agar dapat berfungsi dengan baik di berbagai perangkat?
--------------------------------------------------------------------------------
* KATA KUNCI: HTML Semantik + CSS Flex/Grid + Pengujian Device Toolbar Browser
* JAWABAN:
  "Saya mengkonversi rancangan mockup ke HTML5 semantik, menerapkan layout 
  responsif menggunakan CSS Flexbox & CSS Grid dengan breakpoint media queries, 
  serta menguji langsung kelayakan responsivitasnya melalui Device Toolbar 
  Inspector di browser pada resolusi desktop, tablet, dan smartphone."


[WAWANCARA 02]
Bagaimana prosedur untuk menjalankan atau mengeksekusi source code yang 
menampilkan teks, grafik, dan multimedia pada halaman web? Jika saya ingin 
menambahkan grafik ke sebuah halaman web, maka apa yang perlu saya lakukan?
--------------------------------------------------------------------------------
* KATA KUNCI: Elemen <canvas> + getContext('2d') + Event Listener Pointer
* JAWABAN:
  "Prosedurnya adalah browser mem-parsing tag HTML terkait (seperti <p>, <video>, 
  <audio>, atau <canvas>). Jika ingin menambahkan grafik interaktif, saya 
  menyematkan elemen <canvas id='signatureCanvas'>, mengambil context 2D di 
  JavaScript via canvas.getContext('2d'), dan menggambar garis goresan 
  berdasarkan tangkapan koordinat mouse atau touch event."


[WAWANCARA 03]
Apa saja yang perlu dilakukan jika dalam program yang telah ditulis tidak 
menerapkan standar pemrograman yang telah ditetapkan?
--------------------------------------------------------------------------------
* KATA KUNCI: Refactoring Kode, Standarisasi Indentasi, & Penamaan camelCase
* JAWABAN:
  "Melakukan refactoring kode: merapikan indentasi (konsisten 4 spasi), mengganti 
  penamaan variabel dan fungsi agar deskriptif (format camelCase), memecah fungsi 
  panjang menjadi fungsi-fungsi kecil yang modular, dan menghapus kode yang tidak 
  terpakai (dead code)."


[WAWANCARA 04]
Bagaimana prosedur penulisan kode sumber yang sesuai dengan guidelines atau 
best practices? Jika anda menulis sebuah source code, best practice apa yang 
akan anda terapkan agar keterbacaan kode lebih baik?
--------------------------------------------------------------------------------
* KATA KUNCI: Clean Code, Pemisahan Modular File, & Penamaan Self-Explanatory
* JAWABAN:
  "Menerapkan prinsip Clean Code: memisahkan berkas secara modular (struktur di 
  HTML, styling di CSS, logika di JS), memberi nama variabel dan fungsi yang 
  self-explanatory (misal hitungDenda(), renderTabel()), serta mencantumkan 
  komentar pembuka untuk menjelaskan peran setiap modul."


[WAWANCARA 05]
Bagaimana anda menerapkan perulangan dan percabangan dalam menyelesaikan sebuah 
studi kasus tertentu yang diterapkan dalam pemrograman berbasis web? Kalau saya 
ingin menampilkan seluruh data dalam array, maka apa yang harus anda lakukan? 
Apakah perlu melibatkan perulangan?
--------------------------------------------------------------------------------
* KATA KUNCI: Percabangan If-Else Denda + Perulangan forEach Wajib Digunakan
* JAWABAN:
  "Percabangan if-else saya gunakan untuk menghitung status denda (jika durasi > 
  7 hari maka denda Rp 2.000/hari, jika tidak maka denda Rp 0). Untuk 
  menampilkan data array ke tabel, PERULANGAN MUTLAK DIPERLUKAN, di mana saya 
  memanfaatkan method array.forEach() untuk mengiterasi setiap elemen objek dan 
  men-generate baris <tr> tabel secara dinamis."


[WAWANCARA 06]
Bagaimana memastikan kode efisien melalui penggunaan library dan reusable components?
--------------------------------------------------------------------------------
* KATA KUNCI: Pustaka Siap Pakai (SweetAlert2, Icons) & Reusable Utility Function
* JAWABAN:
  "Dengan mengintegrasikan library pihak ketiga yang ringan dan terpercaya 
  (seperti SweetAlert2 untuk dialog notifikasi modern dan FontAwesome untuk 
  ikon antarmuka), serta membuat fungsi utilitas yang reusable (seperti fungsi 
  formatRupiah() dengan Intl.NumberFormat) yang dapat dipanggil berkali-kali 
  di seluruh sistem tanpa redundansi."

================================================================================
                    SUKSES UJI KOMPETENSI LSP / BNSP
================================================================================
