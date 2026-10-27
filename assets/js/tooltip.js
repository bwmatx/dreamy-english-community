/* ==========================================================================
   tooltip.js: tooltip menu ponsel (petunjuk ketuk logo DMC untuk menu).
   Tampil SETIAP muat ulang halaman di ponsel (tampil/sembunyi desktop
   dipegang penuh oleh CSS media query, bukan JS).
   Tombol "Mengerti" hanya menutup untuk sesi itu; tanpa penyimpanan apa pun.
   ========================================================================== */
(() => {
  "use strict";

  const doc = document;
  const tip = doc.querySelector(".tip-menu");
  if (!tip) return;

  const hide = () => tip.setAttribute("hidden", "");

  /* Tombol tutup ("Mengerti") */
  doc.querySelector("[data-tip-close]")?.addEventListener("click", hide);

  /* Ketuk logo = menu mulai dibuka: tooltip ikut menutup sendiri */
  doc.querySelector(".nav__brand")?.addEventListener("click", hide);
})();
