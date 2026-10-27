/* ==========================================================================
   modal.js: modal "Join" dengan animasi pop-in/pop-out.
   Buka dari tombol [data-open-modal]; tutup dari tombol/papan klik/ESC.
   Fokus dijebak di dalam modal selagi terbuka.
   ========================================================================== */
(() => {
  "use strict";

  const doc = document;
  const body = doc.body;
  const modal = doc.querySelector(".modal");
  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lastFocus = null;

  function openModal() {
    if (!modal) return;
    lastFocus = doc.activeElement;
    modal.hidden = false;
    body.classList.add("modal-open");
    modal.classList.add("modal--in");
    modal.querySelector(".modal__close").focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.classList.remove("modal--in");
    modal.classList.add("modal--out");
    const done = () => {
      modal.hidden = true;
      modal.classList.remove("modal--out");
      body.classList.remove("modal-open");
    };
    if (reduceMotion) done();
    else window.setTimeout(done, 230);
    if (lastFocus) lastFocus.focus();
  }

  doc.querySelectorAll("[data-open-modal]").forEach((b) =>
    b.addEventListener("click", openModal)
  );
  doc.querySelectorAll("[data-close-modal]").forEach((b) =>
    b.addEventListener("click", closeModal)
  );

  doc.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();

    /* jebakan fokus sederhana: tab/shift-tab berputar dalam modal */
    if (!modal || modal.hidden || e.key !== "Tab") return;
    const focusables = modal.querySelectorAll(
      "button, a[href], [tabindex]:not([tabindex='-1'])"
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && doc.activeElement === first) {
      last.focus();
      e.preventDefault();
    } else if (!e.shiftKey && doc.activeElement === last) {
      first.focus();
      e.preventDefault();
    }
  });

  /* klik pada papan latar menutup modal */
  modal?.querySelector(".modal__backdrop")?.addEventListener("click", closeModal);
})();
