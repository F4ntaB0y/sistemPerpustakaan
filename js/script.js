/**
 * SIPUS - Sistem Informasi Perpustakaan
 * Modul Sirkulasi Peminjaman & Pengembalian Buku
 */

'use strict';

// Database lokal transaksi peminjaman aktif
let dataPeminjaman = [
  { 
    id: 1, 
    kode: 'TRX-101', 
    peminjam: 'Ahmad Dahlan', 
    kategori: 'Teknologi', 
    judul: 'Pemrograman Web Modern', 
    hari: 4, 
    denda: 0, 
    status: 'Dipinjam' 
  },
  { 
    id: 2, 
    kode: 'TRX-102', 
    peminjam: 'Siti Rahmawati', 
    kategori: 'Sains', 
    judul: 'Fisika Terapan & Robotika', 
    hari: 9, 
    denda: 4000, 
    status: 'Terlambat' 
  },
  { 
    id: 3, 
    kode: 'TRX-103', 
    peminjam: 'Budi Santoso', 
    kategori: 'Bisnis', 
    judul: 'Manajemen Keuangan Digital', 
    hari: 3, 
    denda: 0, 
    status: 'Dipinjam' 
  }
];

/**
 * Aturan Bisnis: Perhitungan Denda Keterlambatan
 * Standar peminjaman: 7 hari. Denda keterlambatan: Rp 2.000 / hari.
 */
function kalkulasiDenda(lamaPinjam) {
  const BATAS_HARI = 7;
  const TARIF_DENDA = 2000;

  if (lamaPinjam > BATAS_HARI) {
    const hariTerlambat = lamaPinjam - BATAS_HARI;
    return {
      denda: hariTerlambat * TARIF_DENDA,
      status: 'Terlambat'
    };
  } else {
    return {
      denda: 0,
      status: 'Dipinjam'
    };
  }
}

/**
 * Format mata uang Rupiah
 */
function formatRupiah(nilai) {
  return 'Rp ' + nilai.toLocaleString('id-ID');
}

/**
 * Perbarui ringkasan statistik transaksi di dashboard
 */
function perbaruiStatistik() {
  const totalBuku = dataPeminjaman.length;
  const totalTerlambat = dataPeminjaman.filter(item => item.status === 'Terlambat').length;
  const totalDenda = dataPeminjaman.reduce((acc, curr) => acc + curr.denda, 0);

  const elTotal = document.getElementById('statTotalBuku');
  const elTerlambat = document.getElementById('statTotalTerlambat');
  const elDenda = document.getElementById('statTotalDenda');

  if (elTotal) elTotal.textContent = totalBuku;
  if (elTerlambat) elTerlambat.textContent = totalTerlambat;
  if (elDenda) elDenda.textContent = formatRupiah(totalDenda);
}

/**
 * Menampilkan seluruh daftar peminjaman ke dalam tabel
 */
function renderTabel(daftar = dataPeminjaman) {
  const tbody = document.getElementById('tabelPeminjaman');
  if (!tbody) return;

  tbody.innerHTML = '';

  if (daftar.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; color: #64748b; padding: 1.5rem;">
          Tidak ada data transaksi peminjaman ditemukan.
        </td>
      </tr>
    `;
    return;
  }

  daftar.forEach((item, index) => {
    const tr = document.createElement('tr');
    const badgeClass = item.status === 'Dipinjam' ? 'badge-active' : 'badge-late';

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td><code>${item.kode}</code></td>
      <td><strong>${item.peminjam}</strong></td>
      <td>${item.judul}</td>
      <td><span style="font-size: 0.8rem; color: #64748b;">${item.kategori}</span></td>
      <td>${item.hari} Hari</td>
      <td>${formatRupiah(item.denda)}</td>
      <td><span class="badge ${badgeClass}">${item.status}</span></td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="kembalikanBuku(${item.id})" title="Kembalikan Buku">
          <i class="fa-solid fa-check"></i> Selesai
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/**
 * Penanganan form pencatatan peminjaman buku baru
 */
function simpanPeminjaman(e) {
  e.preventDefault();

  const peminjam = document.getElementById('namaPeminjam').value.trim();
  const kategori = document.getElementById('kategoriBuku').value;
  const judul = document.getElementById('judulBuku').value.trim();
  const hari = parseInt(document.getElementById('lamaPinjam').value, 10);

  // Validasi input
  if (peminjam.length < 3 || judul.length < 3) {
    Swal.fire({
      icon: 'warning',
      title: 'Data Belum Lengkap',
      text: 'Nama peminjam dan judul buku wajib diisi minimal 3 karakter.'
    });
    return;
  }

  if (isNaN(hari) || hari <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Durasi Tidak Sesuai',
      text: 'Lama peminjaman minimal 1 hari.'
    });
    return;
  }

  // Hitung status dan denda
  const perhitungan = kalkulasiDenda(hari);
  const kodeUnik = 'TRX-' + (dataPeminjaman.length + 101);

  // Buat objek data transaksi baru
  const transaksiBaru = {
    id: Date.now(),
    kode: kodeUnik,
    peminjam: peminjam,
    kategori: kategori,
    judul: judul,
    hari: hari,
    denda: perhitungan.denda,
    status: perhitungan.status
  };

  dataPeminjaman.push(transaksiBaru);
  renderTabel();
  perbaruiStatistik();

  // Reset form
  document.getElementById('formPeminjaman').reset();

  // Notifikasi konfirmasi
  Swal.fire({
    icon: 'success',
    title: 'Peminjaman Berhasil Dicatat',
    text: `Buku "${judul}" berhasil dipinjam oleh ${peminjam}.`,
    timer: 2000,
    showConfirmButton: false
  });
}

/**
 * Fitur Pencarian Cepat (Filter nama peminjam, judul buku, atau kategori)
 */
function cariTransaksi() {
  const keyword = document.getElementById('searchTransaksi').value.toLowerCase().trim();

  const hasilFilter = dataPeminjaman.filter(item => {
    return item.peminjam.toLowerCase().includes(keyword) ||
           item.judul.toLowerCase().includes(keyword) ||
           item.kategori.toLowerCase().includes(keyword) ||
           item.kode.toLowerCase().includes(keyword);
  });

  renderTabel(hasilFilter);
}

/**
 * Konfirmasi pengembalian / penutupan transaksi peminjaman
 */
function kembalikanBuku(id) {
  const item = dataPeminjaman.find(d => d.id === id);
  if (!item) return;

  Swal.fire({
    title: 'Proses Pengembalian?',
    text: `Konfirmasi pengembalian buku "${item.judul}" oleh ${item.peminjam}.`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#2563eb',
    cancelButtonColor: '#64748b',
    confirmButtonText: 'Ya, Kembalikan',
    cancelButtonText: 'Batal'
  }).then((result) => {
    if (result.isConfirmed) {
      dataPeminjaman = dataPeminjaman.filter(d => d.id !== id);
      renderTabel();
      perbaruiStatistik();

      Swal.fire({
        icon: 'success',
        title: 'Buku Telah Dikembalikan',
        text: 'Transaksi peminjaman telah diselesaikan.',
        timer: 1600,
        showConfirmButton: false
      });
    }
  });
}

/* ==========================================================================
   MODUL PARAF DIGITAL (Canvas 2D Serah Terima Buku)
   ========================================================================== */

let canvas, ctx;
let isDrawing = false;

function inisialisasiCanvasParaf() {
  canvas = document.getElementById('canvasTtd');
  if (!canvas) return;

  ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth || 340;
  canvas.height = 130;

  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#0f172a';

  // Event listener mouse
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }
  });

  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseleave', () => isDrawing = false);
}

function bersihkanParaf() {
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function unduhBuktiParaf() {
  const link = document.createElement('a');
  link.download = `bukti-paraf-peminjam.png`;
  link.href = canvas.toDataURL();
  link.click();
}

/* ==========================================================================
   INISIALISASI APLIKASI
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderTabel();
  perbaruiStatistik();
  inisialisasiCanvasParaf();

  // Event submit formulir
  const form = document.getElementById('formPeminjaman');
  if (form) form.addEventListener('submit', simpanPeminjaman);

  // Event pencarian cepat
  const searchInput = document.getElementById('searchTransaksi');
  if (searchInput) searchInput.addEventListener('input', cariTransaksi);

  // Event tombol canvas
  const btnClear = document.getElementById('btnBersihkanParaf');
  if (btnClear) btnClear.addEventListener('click', bersihkanParaf);

  const btnSave = document.getElementById('btnUnduhParaf');
  if (btnSave) btnSave.addEventListener('click', unduhBuktiParaf);
});
