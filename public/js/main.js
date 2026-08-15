// LavaiLavem Turismo — FAQ
// Todo o conteúdo já existe no HTML (server-side), este script só liga o
// comportamento interativo por cima: acordeão, busca e o banner de cookies.
(function () {
  "use strict";

  /* ---------- Ano no rodapé ---------- */
  var anoEl = document.getElementById("ano-atual");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ---------- Acordeão das perguntas ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));

  items.forEach(function (item) {
    var trigger = item.querySelector(".faq-trigger");
    if (!trigger) return;
    trigger.addEventListener("click", function () {
      var isOpen = item.getAttribute("data-open") === "true";
      item.setAttribute("data-open", isOpen ? "false" : "true");
      trigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  });

  /* ---------- Busca ao vivo ---------- */
  var searchInput = document.getElementById("faq-search");
  var statusEl = document.getElementById("faq-search-status");
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));

  function normalize(str) {
    return (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var query = normalize(searchInput.value.trim());
      var visibleCount = 0;

      items.forEach(function (item) {
        var text = normalize(item.textContent);
        var matches = query === "" || text.indexOf(query) !== -1;
        item.classList.toggle("hidden", !matches);
        if (matches) {
          visibleCount++;
          // abre automaticamente o item quando o usuário está buscando algo específico
          if (query !== "") {
            item.setAttribute("data-open", "true");
            var t = item.querySelector(".faq-trigger");
            if (t) t.setAttribute("aria-expanded", "true");
          }
        }
      });

      // esconde seções inteiras que ficaram sem nenhuma pergunta visível
      sections.forEach(function (section) {
        var sectionItems = section.querySelectorAll(".faq-item");
        if (!sectionItems.length) return;
        var anyVisible = Array.prototype.some.call(sectionItems, function (el) {
          return !el.classList.contains("hidden");
        });
        section.classList.toggle("hidden", !anyVisible);
      });

      if (statusEl) {
        statusEl.textContent =
          query === ""
            ? ""
            : visibleCount === 0
            ? "Nenhuma pergunta encontrada. Tente outro termo ou fale com a gente pelo WhatsApp."
            : visibleCount + " pergunta(s) encontrada(s).";
      }
    });
  }

  /* ---------- Banner de cookies (LGPD) ---------- */
  var CONSENT_KEY = "lavailavem_cookie_consent";
  var banner = document.getElementById("cookie-banner");
  var acceptBtn = document.getElementById("cookie-accept");
  var rejectBtn = document.getElementById("cookie-reject");

  function getConsent() {
    try {
      return window.localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {
      /* localStorage indisponível — o banner volta a aparecer na próxima visita */
    }
  }

  function hideBanner() {
    if (!banner) return;
    banner.classList.add("translate-y-full");
    window.setTimeout(function () {
      banner.classList.add("hidden");
    }, 300);
  }

  function showBanner() {
    if (!banner) return;
    banner.classList.remove("hidden");
    // força reflow para a transição funcionar
    void banner.offsetWidth;
    banner.classList.remove("translate-y-full");
  }

  if (banner && !getConsent()) {
    window.setTimeout(showBanner, 600);
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", function () {
      setConsent("all");
      hideBanner();
      // Ponto de integração: ative aqui scripts de análise/marketing
      // somente depois do consentimento (ex.: Google Analytics, Meta Pixel).
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", function () {
      setConsent("essential");
      hideBanner();
    });
  }
})();
