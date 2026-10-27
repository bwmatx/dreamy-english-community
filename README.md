# Dreamy English Community · Pacitan

Website komunitas berbasis **HTML + CSS + JS murni** (tanpa framework),
terinspirasi rasa/laman utama situs suatu aplikasi pelacak langkah,
tetapi **seluruh kode, tipografi, warna, ilustrasi, dan kata-kata
adalah karya asli**, dibuat dari nol untuk komunitas di Pacitan.

## Peta file

```
website/
├── index.html              ← laman utama (hero, fitur, program, testimoni, FAQ, CTA)
├── programs.html           ← laman program (sekaligus demo transisi antar halaman)
└── assets/
    ├── css/style.css       ← semua gaya (token desain di :root)
    ├── vendor/
    │   └── bootstrap-icons/ ← Bootstrap Icons (CSS + font lokal, tetap jalan offline)
    ├── js/                 ← satu modul JS per fungsi (tidak bercampur)
    │   ├── i18n.js         ← kamus EN/ID/DE + logika pemilih bahasa melayang (popup bendera)
    │   ├── transition.js   ← tirai transisi antar halaman
    │   ├── nav.js          ← nav solid + menu sheet ponsel (buka via logo)
    │   ├── reveal.js       ← reveal on scroll + latar per section
    │   ├── faq.js          ← akordion FAQ
    │   ├── modal.js        ← dialog "Join", jebakan fokus
    │   ├── stats.js        ← penghitung statistik + tahun footer
    │   ├── tilt.js         ← tepet 3D kartu
    │   └── tooltip.js      ← tooltip menu ponsel (ketuk logo), tiap muat ulang
    └── img/
        ├── favicon.webp    ← favicon tab browser & shortcut icon
        ├── DMC.webp        ← logo wordmark DMC (nav kiri/ketuk-menu ponsel, tirai, modal, og:image)
        ├── founder.svg     ← foto placeholder pendiri (siluet; ganti foto asli)
        └── co-founder.svg  ← foto placeholder co-pendiri (siluet; ganti foto asli)
```

## Daftar fitur (pemetaan ke permintaan)

| Permintaan             | Implementasi                                                                                                                                                                                                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Responsivitas          | Mobile-first (ponsel < 810px: logo tengah membuka sheet menu), desktop `min-width: 810px` (logo kiri + link seksi), pasangan `max-width: 809.98px`/`min-width: 810px`, varian lanskap, chip ponsel 420px/300px                                                                                  |
| Page animation         | `body-fade` masuk, hero & section `reveal` bertahap (IntersectionObserver)                                                                                                                                                                                                                      |
| Page transition        | Tirai dua lapis warna coral/ink saat berpindah `index.html` ⇄ `programs.html`                                                                                                                                                                                                                   |
| Transisi warna section | `data-bg` per section → latar `body` bergeser halus (cubic-bezier .9s)                                                                                                                                                                                                                          |
| Modal CTA              | Dialog “Join” pop-in overshoot + item berjeda, klik backdrop/ESC menutup                                                                                                                                                                                                                        |
| Pilihan bahasa         | Tombol melayang fixed kanan bawah (tidak terpengaruh gulir), popup 3 pilihan berbendera SVG murni (UK/Indonesia/Jerman) dengan nama bahasa + centang; klik/tap, animasi pop halus, tutup via luar/ESC; konten murni satu bahasa, pilihan tersimpan (localStorage), `lang` + `meta` ikut berubah |
| Ikon                   | Emotikon diganti ikon Bootstrap Icons (chip, bintang dekoratif, ikon sajian) memakai font lokal di `assets/vendor`                                                                                                                                                                              |
| Section founder        | Kartu pendiri & co-pendiri di bawah testimonial: foto besar selebar kartu (bingkai membulat 4:3) berisi siluet SVG, peran + latar belakang tiga bahasa (data-i18n), tombol Instagram (tab baru), efek tilt ikut kelas `card`, desktop dua kartu berdampingan `repeat(2, 1fr)`                   |
| Kredit footer          | Baris "Developed and designed by" + chip `adhiwibowo` → `adhiwibowo.my.id` (tab baru), teks ikut tiga bahasa                                                                                                                                                                                    |
| Tooltip menu ponsel    | Kartu kecil bergaya kartu di bawah logo (< 810px), panah ke logo, tombol "Mengerti"; tampil ulang setiap muat, tiga bahasa (`tip.*`)                                                                                                                                                            |
| Sticker text           | `-webkit-text-stroke` + `paint-order: stroke fill` + bayangan keras                                                                                                                                                                                                                             |
| Hover 3D               | Tombol melempar bayangan, kartu tilt via pointer                                                                                                                                                                                                                                                |
| Marquee                | Strip teks berjalan (jeda saat hover)                                                                                                                                                                                                                                                           |
| Aksesibilitas          | Skip link, `aria-*` lengkap, `prefers-reduced-motion` mematikan semua animasi                                                                                                                                                                                                                   |

## Hal yang perlu diganti pemilik (cari `TODO`)

1. Tautan WhatsApp/Instagram (nav, modal, footer): masih `#`.
2. Angka statistik & testimoni di `index.html`: placeholder fiksi.
3. Ritme sesi di `programs.html`: sesuaikan kebiasaan komunitas.
4. Font Google (Baloo 2 + Nunito): bisa dibawa lokal ke `assets/fonts`.
5. Digital Class (kelas online): tautan detail di kartu index diganti badge "Coming soon" (tidak menaut ke halaman program); catatan polos "Coming soon" pada detail dan chip programs.html dihapus begitu kelasnya siap dijalankan.
6. Section founder (`index.html`): foto, nama, dan keterangan pendiri & co-pendiri masih placeholder (siluet SVG, nama fiktif); ganti dengan foto dan data asli. Akun Instagram di kedua kartu masih `instagram.com`; ganti href dengan akun asli masing-masing.
