/* Interactivity only: project filters, case-study modal, mobile menu, theme.
   All content is already in index.html (built by build.js from config.js). */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var P = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var SUN = '<svg viewBox="0 0 24 24" ' + P + '><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" ' + P + '><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>';

  $("#year").textContent = new Date().getFullYear();

  /* ---------- Project filters ---------- */
  $("#filters").addEventListener("click", function (e) {
    var b = e.target.closest(".filter"); if (!b) return;
    var f = b.getAttribute("data-filter");
    $$(".filter").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
    $$("#projectsGrid .project").forEach(function (card) {
      card.hidden = !(f === "all" || card.getAttribute("data-type") === f);
    });
  });

  /* ---------- Case study modal ---------- */
  var modal = $("#modal"), lastFocus = null;
  function openCase(id) {
    var src = $$("#cases [data-case]").filter(function (x) { return x.getAttribute("data-case") === id; })[0];
    if (!src) return;
    $("#modalBody").innerHTML = src.innerHTML;
    var h = $("#modalBody h2"); if (h) h.id = "modalTitle";
    lastFocus = document.activeElement;
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".modal-close").focus();
    try { history.replaceState(null, "", "#project-" + id); } catch (e) {}
  }
  function closeCase() {
    modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    try { history.replaceState(null, "", "#work"); } catch (e) {}
    if (lastFocus) lastFocus.focus();
  }
  $("#projectsGrid").addEventListener("click", function (e) {
    var c = e.target.closest(".project"); if (c) openCase(c.getAttribute("data-id"));
  });
  modal.addEventListener("click", function (e) { if (e.target.closest("[data-close]")) closeCase(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal.classList.contains("open")) closeCase(); });
  var m = location.hash.match(/^#project-(.+)$/); if (m) openCase(m[1]);

  /* ---------- Nav: mobile menu & theme ---------- */
  var links = $("#navLinks");
  $("#menuBtn").addEventListener("click", function () { links.classList.toggle("open"); });
  links.addEventListener("click", function (e) { if (e.target.tagName === "A") links.classList.remove("open"); });

  var root = document.documentElement, tBtn = $("#themeToggle");
  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : !window.matchMedia("(prefers-color-scheme: light)").matches;
  }
  function paintToggle() { tBtn.innerHTML = isDark() ? SUN : MOON; }
  tBtn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    paintToggle();
  });
  paintToggle();
})();
