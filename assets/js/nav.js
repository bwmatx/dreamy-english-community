/* ==========================================================================
   nav.js: perilaku bar navigasi.
   1) Nav menjadi solid saat halaman digulir
   2) Menu sheet di ponsel: dibuka lewat ketukan logo DMC (desktop: logo
      tetap tautan beranda). Tutup lewat tombol X, tautan, atau ESC.
   ========================================================================== */
(() => {
  "use strict";

  const doc = document;
  const body = doc.body;
  const isMobileNav = window.matchMedia("(max-width: 809.98px)");

  /* ----------
     1) Nav solid saat digulir
     ---------- */
  const navTick = () =>
    body.classList.toggle("nav-solid", window.scrollY > 8);
  navTick();
  window.addEventListener("scroll", navTick, { passive: true });

  /* ----------
     2) Menu sheet
     ---------- */
  const brand = doc.querySelector(".nav__brand");
  const setMenu = (open) => {
    body.classList.toggle("menu-open", open);
    if (brand) brand.setAttribute("aria-expanded", String(open));
    /* stagger tiap tautan di sheet */
    doc.querySelectorAll(".nav__sheet a").forEach((a, i) =>
      a.style.setProperty("--i", String(i))
    );
  };

  brand?.addEventListener("click", (e) => {
    if (!isMobileNav.matches) return; /* desktop: biarkan tautan berjalan */
    e.preventDefault();
    setMenu(!body.classList.contains("menu-open"));
  });

  /* tombol X menutup sheet */
  doc.querySelector("[data-close-menu]")?.addEventListener("click", () =>
    setMenu(false)
  );

  /* tautan di dalam sheet juga menutup menu */
  doc.querySelectorAll(".nav__sheet a").forEach((a) =>
    a.addEventListener("click", () => setMenu(false))
  );

  /* ESC menutup sheet yang terbuka */
  doc.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && body.classList.contains("menu-open")) {
      setMenu(false);
    }
  });
})();
