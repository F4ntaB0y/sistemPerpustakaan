# CATATAN HAFALAN CEPAT UJIAN & WAWANCARA
**Skema Sertifikasi:** Asisten Pengembang Web (Junior Web Developer)  
**Standar:** SKKNI No 282 Tahun 2016  
**Peserta:** Muh Arya Pangestu  
**Proyek:** SIPUS DIGITAL (Sistem Informasi Perpustakaan)  

---

## 📝 BAGIAN 1: 12 SOAL ESSAY TERTULIS

### 1. Bagaimana langkah kamu menerapkan mockup atau rancangan user interface menjadi tampilan web yang berfungsi?
* **Kata Kunci:** `Bedah Desain` &rarr; `Kerangka HTML` &rarr; `Gaya CSS` &rarr; `Logika JS` &rarr; `Validasi`
* **Jawaban:**  
  Saya memulai dengan mempelajari mockup untuk memahami struktur layout dan hierarki konten. Kemudian saya membuat kerangka semantik dengan **HTML5**, menambahkan gaya visual menggunakan **CSS responsif**, dan menambahkan logika interaktif (seperti tombol submit dan form) via **JavaScript**, lalu menguji kesesuaiannya dengan rancangan awal.

---

### 2. Apa saja komponen utama yang kamu gunakan untuk memastikan tampilan antarmuka responsif di berbagai ukuran layar?
* **Kata Kunci:** `CSS Grid / Flexbox`, `Media Queries`, `Satuan Relatif (%, rem, vh)`
* **Jawaban:**  
  Menggunakan **Responsive Grid System / Flexbox** untuk tata letak dinamis, aturan **Media Queries** pada CSS untuk mengatur breakpoint layar (desktop, tablet, mobile), serta memakai **satuan relatif (% dan rem)** untuk ukuran font, margin, dan gambar agar proporsional di segala resolusi.

---

### 3. Bagaimana kamu memastikan konsistensi warna, tipografi, dan layout agar sesuai dengan desain mockup yang diberikan?
* **Kata Kunci:** `Style Guide`, `Variabel CSS (:root)`, `Sistem Container Terpusat`
* **Jawaban:**  
  Saya menetapkan kode warna heksadesimal dan jenis font dari style guide ke dalam **CSS Custom Properties (variabel `:root`)**. Untuk layout, saya menggunakan **sistem container dan komponen modular**, serta selalu melakukan perbandingan visual (*side-by-side inspect*) antara halaman web dan file mockup.

---

### 4. Mengapa kita perlu memahami cara kerja eksekusi source code dalam pengembangan web?
* **Kata Kunci:** `Identifikasi Bug Cepat` & `Optimasi Performa Halaman`
* **Jawaban:**  
  Karena setiap komponen web (HTML, CSS, dan JavaScript) dieksekusi secara berurutan dan memiliki karakteristik berbeda. Memahami alur eksekusi membantu kita **mengidentifikasi kesalahan (*debugging*) dengan cepat**, mencegah script memblokir tampilan (*render-blocking*), dan mengoptimalkan kecepatan akses web.

---

### 5. Mengapa penting mengetahui perbedaan antara eksekusi di sisi klien dan sisi server?
* **Kata Kunci:** `Keamanan Data` & `Pembagian Beban Kerja Aplikasi`
* **Jawaban:**  
  Karena menentukan arsitektur yang aman dan efisien: **Sisi klien (frontend)** menangani antarmuka dan interaksi cepat pengguna, sedangkan **sisi server (backend)** mengelola autentikasi, database, dan logika bisnis sensitif agar tidak bisa dimanipulasi atau diakses langsung oleh publik.

---

### 6. Mengapa kita perlu memahami struktur kontrol seperti percabangan dan pengulangan dalam pemrograman web?
* **Kata Kunci:** `Pengambilan Keputusan` & `Otomasi Render Data`
* **Jawaban:**  
  Karena hampir semua interaksi aplikasi web memerlukan logika kontrol: **Percabangan (`if-else`)** diperlukan untuk pengambilan keputusan (seperti validasi input form dan kalkulasi denda), sedangkan **pengulangan (`loop`)** diperlukan untuk menampilkan daftar data array ke dalam tabel HTML secara dinamis.

---

### 7. Mengapa kita perlu memahami dan mengikuti coding guidelines dalam proyek web?
* **Kata Kunci:** `Konsistensi Tim` & `Kemudahan Perawatan Jangka Panjang (Maintainability)`
* **Jawaban:**  
  Karena pengembangan aplikasi web umumnya dikerjakan secara tim. Mengikuti coding guidelines menjamin **standarisasi struktur**, membuat kode mudah dibaca oleh programmer lain, meminimalkan konflik kode saat kolaborasi, dan mempermudah pemeliharaan (*maintenance*) di masa depan.

---

### 8. Mengapa kita perlu memahami cara kerja browser dalam merender HTML, CSS, dan JavaScript?
* **Kata Kunci:** `DOM & CSSOM Tree` & `Menghindari Cumulative Layout Shift (CLS)`
* **Jawaban:**  
  Karena browser adalah platform utama tempat web dieksekusi. Memahami tahap rendering (pembentukan DOM, CSSOM, Layout, hingga Paint) membantu kita **menghindari pergeseran tata letak yang janggal** dan menempatkan script JavaScript secara efisien agar halaman termuat mulus.

---

### 9. Jelaskan alasan pentingnya menuliskan komentar pada baris kode yang kompleks dalam source code, dan bagaimana cara menuliskannya secara tepat?
* **Kata Kunci:** `Jelaskan "Mengapa" (Why) Bukan Mengulang "Apa" (What)`
* **Jawaban:**  
  * **Alasan:** Membantu pengembang lain (atau diri sendiri di kemudian hari) memahami maksud algoritma yang rumit.  
  * **Cara Tepat:** Komentar ditulis ringkas tepat di atas blok kode, berfokus menjelaskan *alasan bisnis dan tujuan fungsi* (mengapa kode dibuat seperti itu), bukan sekadar mengulang apa yang sudah jelas terbaca dari sintaks kode.

---

### 10. Bagaimana memastikan source code memiliki komentar yang cukup untuk setiap bagian utama program?
* **Kata Kunci:** `Pemberian Komentar di 4 Titik Wajib Program`
* **Jawaban:**  
  Dengan menerapkan standar komentar pada 4 bagian utama:
  1. **Deskripsi Header File/Modul:** Penjelasan kegunaan keseluruhan file.
  2. **Dokumentasi Fungsi/Prosedur:** Menjelaskan parameter input dan output yang dihasilkan.
  3. **Penjelasan Variabel Kunci:** Definisi konstanta aturan bisnis (misal BATAS_HARI, TARIF_DENDA).
  4. **Penanda Blok Logika Kompleks:** Keterangan rumus perhitungan atau akhir penutup blok kode.

---

### 11. Apa yang dimaksud dengan efisiensi dalam konteks pemanfaatan komponen reusable pada pengembangan web?
* **Kata Kunci:** `Prinsip DRY (Don't Repeat Yourself)` & `Hemat Sumber Daya`
* **Jawaban:**  
  Efisiensi berarti **penghematan waktu, biaya, dan beban kerja** dengan memanfaatkan kembali potongan kode, fungsi utilitas, atau pustaka yang sudah teruji untuk berbagai kebutuhan tanpa perlu menulis ulang dari nol (mencegah duplikasi kode).

---

### 12. Jelaskan mengapa pemanfaatan library atau komponen yang telah ada dapat menurunkan risiko kesalahan (error) dan meningkatkan efisiensi tim pengembang?
* **Kata Kunci:** `Sudah Teruji Komunitas (Battle-Tested)` & `Fokus pada Fitur Utama`
* **Jawaban:**  
  Karena komponen atau library yang mapan telah:
  1. **Diuji secara luas (*tested & validated*)** oleh komunitas global sehingga minim bug dan kompatibel antar browser.
  2. **Memiliki dokumentasi dan API standar** yang mempercepat proses integrasi anggota tim.
  3. **Mengurangi duplikasi kode** sehingga tim dapat mencurahkan energi pada logika bisnis utama (*business logic*) aplikasi, bukan membuang waktu memprogram fungsi dasar.

---

## 🎙️ BAGIAN 2: 6 SOAL WAWANCARA ASESOR

### W1. Bagaimana menerapkan mockup/rancangan user interface agar dapat berfungsi dengan baik di berbagai perangkat?
* **Kata Kunci:** `HTML Semantik` + `CSS Flex/Grid` + `Pengujian Device Toolbar Browser`
* **Jawaban:**  
  Saya mengkonversi rancangan mockup ke HTML5 semantik, menerapkan layout responsif menggunakan **CSS Flexbox & CSS Grid** dengan breakpoint media queries, serta menguji langsung kelayakan responsivitasnya melalui **Device Toolbar Inspector di browser** pada resolusi desktop, tablet, dan smartphone.

---

### W2. Bagaimana prosedur eksekusi source code teks, grafik, dan multimedia pada web? Jika ingin menambahkan grafik, apa yang dilakukan?
* **Kata Kunci:** `Elemen <canvas>` + `getContext('2d')` + `Event Pointer`
* **Jawaban:**  
  Prosedurnya adalah browser mem-parsing tag HTML terkait (seperti `<p>`, `<video>`, `<audio>`, atau `<canvas>`). Jika ingin menambahkan grafik interaktif, saya menyematkan elemen **`<canvas id="signatureCanvas">`**, mengambil context 2D di JavaScript via **`canvas.getContext('2d')`**, dan menggambar garis goresan berdasarkan tangkapan koordinat mouse atau touch event.

---

### W3. Apa saja yang perlu dilakukan jika dalam program yang telah ditulis tidak menerapkan standar pemrograman yang telah ditetapkan?
* **Kata Kunci:** `Refactoring Kode`, `Standarisasi Indentasi`, & `Penamaan camelCase`
* **Jawaban:**  
  Melakukan **refactoring kode**: merapikan indentasi (konsisten 4 spasi), mengganti penamaan variabel/fungsi agar deskriptif (format camelCase), memecah fungsi panjang menjadi fungsi-fungsi kecil yang modular, dan menghapus kode yang tidak terpakai (*dead code*).

---

### W4. Bagaimana prosedur penulisan kode sumber yang sesuai dengan guidelines? Best practice apa yang diterapkan agar keterbacaan lebih baik?
* **Kata Kunci:** `Clean Code`, `Pemisahan Modular File`, & `Penamaan Self-Explanatory`
* **Jawaban:**  
  Menerapkan prinsip **Clean Code**: memisahkan berkas secara modular (struktur di HTML, styling di CSS, logika di JS), memberi nama variabel dan fungsi yang *self-explanatory* (misal `hitungDenda()`, `renderTabel()`), serta mencantumkan komentar pembuka untuk menjelaskan peran setiap modul.

---

### W5. Bagaimana menerapkan perulangan dan percabangan dalam studi kasus web? Kalau ingin menampilkan seluruh data array, apa yang dilakukan? Apakah perlu perulangan?
* **Kata Kunci:** `Percabangan If-Else Denda` + `Perulangan forEach Wajib Digunakan`
* **Jawaban:**  
  Percabangan `if-else` saya gunakan untuk menghitung status denda (jika durasi > 7 hari maka denda Rp 2.000/hari, jika tidak maka denda Rp 0). Untuk menampilkan data array ke tabel, **perulangan MUTLAK DIPERLUKAN**, di mana saya memanfaatkan **`array.forEach()`** untuk mengiterasi setiap elemen objek dan men-generate baris `<tr>` tabel secara dinamis.

---

### W6. Bagaimana memastikan kode efisien melalui penggunaan library dan reusable components?
* **Kata Kunci:** `Pustaka Siap Pakai (SweetAlert2, Icons)` & `Reusable Utility Function`
* **Jawaban:**  
  Dengan mengintegrasikan library pihak ketiga yang ringan dan terpercaya (seperti **SweetAlert2** untuk dialog notifikasi modern dan **FontAwesome** untuk ikon antarmuka), serta membuat fungsi utilitas yang reusable (seperti fungsi `formatRupiah()` dengan `Intl.NumberFormat`) yang dapat dipanggil berkali-kali di seluruh sistem tanpa redundansi.
