/* ==========================================================================
   tilt.js: interaksi animasi kartu
   1) Desktop: tepet halus 3D pada kartu saat kursor bergerak (pointermove).
   2) Mobile: animasi hover otomatis saat kartu masuk ke tengah layar
      (scroll-driven), dan kembali normal saat kartu lain di bawahnya masuk
      ke tengah layar. Hanya untuk elemen kartu (bukan button).
   ========================================================================== */
(() => {
  "use strict";

  const doc = document;
  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointerQuery =
    window.matchMedia("(hover: hover) and (pointer: fine)");

  /* ------------------------------------------------------------------------
     1. Desktop: tilt 3D interaktif pada pergerakan kursor
     ------------------------------------------------------------------------ */
  function initDesktopTilt() {
    if (!finePointerQuery.matches || reduceMotion) return;

    doc.querySelectorAll(".card, .quote, .program").forEach((el) => {
      if (el.dataset.tiltInit) return;
      el.dataset.tiltInit = "true";
      el.classList.add("tilt");

      el.addEventListener("pointermove", (e) => {
        if (window.innerWidth <= 810) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--rx", `${(-py * 5).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(px * 6).toFixed(2)}deg`);
        el.style.transform =
          "perspective(700px) rotateX(var(--rx)) rotateY(var(--ry))";
      });

      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* ------------------------------------------------------------------------
     2. Mobile: kartu aktif di tengah layar saat di-scroll
     ------------------------------------------------------------------------ */
  const isMobileMode = () =>
    window.innerWidth <= 810 || !finePointerQuery.matches;

  let activeCard = null;
  let ticking = false;

  function updateMobileCenterCard() {
    if (!isMobileMode() || reduceMotion) {
      if (activeCard) {
        activeCard.classList.remove("is-active");
        activeCard = null;
      }
      return;
    }

    // Hanya kartu (.card, .quote), tidak menargetkan button apapun
    const cards = doc.querySelectorAll(".card, .quote");
    if (!cards.length) return;

    const viewportCenter = window.innerHeight / 2;
    let closestCard = null;
    let minDistance = Infinity;

    cards.forEach((card) => {
      // Abaikan kartu yang berada di dalam dialog modal
      if (card.closest(".modal")) return;

      const rect = card.getBoundingClientRect();
      // Hanya cek jika kartu terlihat di viewport
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;

      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      // Kartu harus berada di rentang tengah layar
      const maxAllowedDist = Math.max(rect.height * 0.8, window.innerHeight * 0.35);

      if (distance < maxAllowedDist && distance < minDistance) {
        minDistance = distance;
        closestCard = card;
      }
    });

    if (closestCard !== activeCard) {
      if (activeCard) {
        activeCard.classList.remove("is-active");
      }
      if (closestCard) {
        closestCard.classList.add("is-active");
      }
      activeCard = closestCard;
    }
  }

  function onScrollOrResize() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateMobileCenterCard();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize, { passive: true });
  window.addEventListener("orientationchange", onScrollOrResize, { passive: true });

  initDesktopTilt();
  updateMobileCenterCard();

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", () => {
      initDesktopTilt();
      updateMobileCenterCard();
    });
  }
})();
