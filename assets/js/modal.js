/* ==========================================================================
   modal.js: kontrol modal ("Join" dan "Under Development") dengan animasi
   pop-in/pop-out. Mendukung pembukaan otomatis modal dev diawal, tombol
   "Coba Demo", tombol kontak, serta jebakan fokus keyboard (ESC / Tab).
   ========================================================================== */
(() => {
  "use strict";

  const doc = document;
  const body = doc.body;
  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lastFocus = null;

  function openModal(modal) {
    if (!modal) return;
    lastFocus = doc.activeElement;
    modal.hidden = false;
    body.classList.add("modal-open");
    modal.classList.remove("modal--out");
    modal.classList.add("modal--in");
    const focusTarget = modal.querySelector(
      "[data-close-dev-modal], .modal__close, [data-close-modal], button, a[href]"
    );
    if (focusTarget) focusTarget.focus();
  }

  function closeModal(modal) {
    if (!modal || modal.hidden) return;
    modal.classList.remove("modal--in");
    modal.classList.add("modal--out");
    const done = () => {
      modal.hidden = true;
      modal.classList.remove("modal--out");
      // Hanya hapus modal-open jika tidak ada modal lain yang terbuka
      if (!doc.querySelector(".modal:not([hidden])")) {
        body.classList.remove("modal-open");
      }
    };
    if (reduceMotion) done();
    else window.setTimeout(done, 230);
    if (lastFocus) lastFocus.focus();
  }

  /* Modal Join */
  const joinModal = doc.getElementById("modal-join") || doc.querySelector(".modal:not(#modal-dev)");
  doc.querySelectorAll("[data-open-modal]").forEach((b) =>
    b.addEventListener("click", () => openModal(joinModal))
  );

  /* Modal Development */
  const devModal = doc.getElementById("modal-dev");
  if (devModal) {
    // Buka otomatis di awal halaman jika memiliki atribut data-auto-open (dengan jeda halus untuk animasi pop-in)
    if (devModal.hasAttribute("data-auto-open")) {
      const initDevModal = () => {
        openModal(devModal);
      };
      if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", () => {
          window.setTimeout(initDevModal, reduceMotion ? 0 : 300);
        });
      } else {
        window.setTimeout(initDevModal, reduceMotion ? 0 : 300);
      }
    }

    // Tombol tutup modal dev (termasuk tombol "Coba Demo" dan 'X')
    doc.querySelectorAll("[data-close-dev-modal]").forEach((b) =>
      b.addEventListener("click", () => closeModal(devModal))
    );

    // Tombol pembuka kembali modal dev (mis. dari footer status)
    doc.querySelectorAll("[data-open-dev-modal]").forEach((b) =>
      b.addEventListener("click", () => openModal(devModal))
    );
  }

  /* Tombol tutup modal umum / join */
  doc.querySelectorAll("[data-close-modal]").forEach((b) =>
    b.addEventListener("click", (e) => {
      const parentModal = e.target.closest(".modal") || joinModal;
      closeModal(parentModal);
    })
  );

  /* Papan latar menutup modal terkait */
  doc.querySelectorAll(".modal__backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      const parentModal = e.target.closest(".modal");
      if (parentModal) closeModal(parentModal);
    });
  });

  /* Keyboard shortcut & focus trap */
  doc.addEventListener("keydown", (e) => {
    const activeModal = doc.querySelector(".modal:not([hidden])");
    if (!activeModal) return;

    if (e.key === "Escape") {
      closeModal(activeModal);
      return;
    }

    if (e.key === "Tab") {
      const focusables = activeModal.querySelectorAll(
        "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && doc.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && doc.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  });
})();
