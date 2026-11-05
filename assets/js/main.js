/* JUICE BAY — interactions (plain script so index.html works from file://) */
(function () {
  "use strict";

  const DATA = window.JB_DATA || { business: {}, menu: [] };
  const BIZ = DATA.business;
  const MENU = DATA.menu;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const imgPath = (slug, small) => `assets/img/${slug}${small ? "-sm" : ""}.webp`;

  /* ---------- header ---------- */
  const header = $(".site-header");
  const navToggle = $("#navToggle");
  const nav = $("#primary-nav");

  const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const closeNav = () => {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  };
  navToggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeNav();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
  document.addEventListener("click", (e) => {
    if (!document.body.classList.contains("nav-open")) return;
    if (!e.target.closest("#primary-nav") && !e.target.closest("#navToggle")) closeNav();
  });

  /* ---------- business details ---------- */
  $$("[data-phone]").forEach((el) => {
    el.textContent = BIZ.phone;
    el.setAttribute("href", "tel:" + BIZ.phoneDial);
  });
  if (BIZ.hours) {
    const h = $("#hoursText");
    if (h) h.innerHTML = esc(BIZ.hours) + '<br><small class="muted">Please call ahead on busy evenings.</small>';
  }
  if (BIZ.whatsapp) {
    const wa = document.createElement("a");
    wa.className = "btn btn-outline";
    wa.href = "https://wa.me/" + String(BIZ.whatsapp).replace(/\D/g, "");
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.textContent = "WhatsApp";
    $(".visit-actions").appendChild(wa);
    const note = $("#whatsappNote");
    if (note) note.hidden = true;
  }
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- menu ---------- */
  const grid = $("#productGrid");
  const filters = $("#filters");
  const countEl = $("#menuCount");
  const categories = ["All", ...Array.from(new Set(MENU.map((m) => m.category)))];
  let active = "All";
  let visible = 8;
  const STEP = 8;

  const cardHTML = (item) => `
    <article class="card">
      <div class="card-media">
        ${item.tags && item.tags.length ? `<span class="badge">${esc(item.tags[0])}</span>` : ""}
        <img src="${imgPath(item.img, true)}" srcset="${imgPath(item.img, true)} 480w, ${imgPath(item.img)} 900w"
             sizes="(max-width: 430px) 92vw, (max-width: 900px) 46vw, (max-width: 1080px) 31vw, 290px"
             alt="${esc(item.name)} at JUICE BAY" width="480" height="480" loading="lazy" decoding="async" />
      </div>
      <div class="card-body">
        <span class="card-cat">${esc(item.category)}</span>
        <h3 class="card-title">${esc(item.name)}</h3>
        <p class="card-desc">${esc(item.desc)}</p>
        <div class="card-foot">
          <span class="price">₹${item.price}<small>listed</small></span>
          <a class="card-link" href="tel:${BIZ.phoneDial}">Order by call →</a>
        </div>
      </div>
    </article>`;

  const loadMore = $("#loadMore");
  const renderMenu = (reset) => {
    const list = active === "All" ? MENU : MENU.filter((m) => m.category === active);
    if (reset) visible = STEP;
    grid.innerHTML = list.slice(0, visible).map(cardHTML).join("");
    const shown = Math.min(visible, list.length);
    countEl.textContent = `Showing ${shown} of ${list.length} item${list.length === 1 ? "" : "s"}${active === "All" ? "" : " in " + active.toLowerCase()}`;
    loadMore.hidden = shown >= list.length;
    loadMore.textContent = `Show ${Math.min(STEP, list.length - shown)} more`;
  };
  loadMore.addEventListener("click", () => {
    visible += STEP;
    renderMenu(false);
  });

  filters.innerHTML = categories
    .map((cat) => {
      const n = cat === "All" ? MENU.length : MENU.filter((m) => m.category === cat).length;
      return `<button class="chip" type="button" data-cat="${esc(cat)}" aria-pressed="${cat === active}">${esc(cat)}<span class="chip-count">${n}</span></button>`;
    })
    .join("");

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    active = btn.dataset.cat;
    $$(".chip", filters).forEach((c) => c.setAttribute("aria-pressed", String(c === btn)));
    renderMenu(true);
  });
  renderMenu(true);

  /* ---------- juice rail ---------- */
  const rail = $("#juiceRail");
  const railItems = MENU.filter((m) => m.category === "Juices" || m.category === "Mocktails").slice(0, 9);
  rail.innerHTML = railItems
    .map(
      (item) => `
    <li class="rail-card">
      <img src="${imgPath(item.img, true)}" alt="${esc(item.name)}" width="480" height="480" loading="lazy" decoding="async" />
      <div class="rail-body">
        <div><h3>${esc(item.name)}</h3><p>${esc(item.category)} · blended to order</p></div>
        <span class="rail-price">₹${item.price}</span>
      </div>
    </li>`
    )
    .join("");

  const railStep = () => Math.min(rail.clientWidth * 0.8, 640);
  $("#scrollPrev").addEventListener("click", () => rail.scrollBy({ left: -railStep(), behavior: "smooth" }));
  $("#scrollNext").addEventListener("click", () => rail.scrollBy({ left: railStep(), behavior: "smooth" }));

  /* ---------- gallery + lightbox ---------- */
  const galleryPicks = [
    ["tall", "strawberry-juice", "Strawberry juice"],
    ["", "nutella-milkshake", "Nutella milkshake"],
    ["", "special-fruit-salad", "Special fruit salad"],
    ["tall", "blue-curacao", "Blue Curacao mocktail"],
    ["wide", "fruit-salad", "Fresh fruit salad"],
    ["", "oreo-milkshake", "Oreo milkshake"],
    ["", "mosambi-juice", "Mosambi juice"],
    ["wide", "kitkat-thickshake", "KitKat thickshake"],
    ["", "virgin-mojito", "Virgin mojito"],
  ];
  const gallery = $("#galleryGrid");
  gallery.innerHTML = galleryPicks
    .map(
      ([cls, img, label]) => `
    <button class="g-item ${cls}" type="button" data-label="${esc(label)}" aria-label="View ${esc(label)} larger" data-src="${imgPath(img)}" data-alt="${esc(label + " — JUICE BAY")}">
      <img src="${imgPath(img, true)}" alt="${esc(label + " at JUICE BAY")}" loading="lazy" decoding="async" />
    </button>`
    )
    .join("");

  const lb = $("#lightbox");
  const lbImg = $("#lbImg");
  const lbCap = $("#lbCap");
  let lbReturn = null;
  const openLb = (btn) => {
    lbReturn = btn;
    lbImg.src = btn.dataset.src;
    lbImg.alt = btn.dataset.alt;
    lbCap.textContent = btn.dataset.alt;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  };
  const closeLb = () => {
    lb.hidden = true;
    lbImg.src = "";
    document.body.style.overflow = "";
    if (lbReturn) lbReturn.focus();
  };
  gallery.addEventListener("click", (e) => {
    const btn = e.target.closest(".g-item");
    if (btn) openLb(btn);
  });
  $("#lbClose").addEventListener("click", closeLb);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLb();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lb.hidden) closeLb();
  });

  /* ---------- reveal on scroll ---------- */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- enquiry form ---------- */
  const form = $("#enquiryForm");
  const status = $("#formStatus");
  const fields = {
    name: { el: $("#name"), err: $("#nameErr"), test: (v) => v.trim().length >= 2, msg: "Please tell us your name (2+ characters)." },
    phone: {
      el: $("#phone"),
      err: $("#phoneErr"),
      test: (v) => {
        const digits = v.replace(/\D/g, "");
        return /^(91)?[6-9]\d{9}$/.test(digits);
      },
      msg: "Enter a valid 10-digit Indian mobile number.",
    },
    msg: { el: $("#msg"), err: $("#msgErr"), test: (v) => v.trim().length >= 10, msg: "A little more detail helps (10+ characters)." },
  };

  const validateField = (f) => {
    const ok = f.test(f.el.value);
    const wrap = f.el.closest(".field");
    wrap.classList.toggle("has-error", !ok);
    f.el.setAttribute("aria-invalid", String(!ok));
    f.err.textContent = ok ? "" : f.msg;
    return ok;
  };

  Object.values(fields).forEach((f) => {
    f.el.addEventListener("input", () => {
      if (f.el.closest(".field").classList.contains("has-error")) validateField(f);
    });
    f.el.addEventListener("blur", () => validateField(f));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = Object.values(fields).map(validateField);
    const firstBad = Object.values(fields).find((f) => !f.test(f.el.value));
    if (results.includes(false)) {
      status.className = "form-status bad";
      status.textContent = "Please fix the highlighted fields and try again.";
      if (firstBad) firstBad.el.focus();
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "Sending…";
    status.className = "form-status";
    status.textContent = "";
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = 'Send enquiry <span aria-hidden="true">→</span>';
      form.reset();
      status.className = "form-status ok";
      status.textContent = "Thanks — your note looks good. This demo form doesn't send messages yet, so call " + BIZ.phone + " to reach the shop directly.";
    }, 800);
  });
})();
