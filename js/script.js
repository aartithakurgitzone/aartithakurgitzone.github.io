const MENU = [
  {
    id: "meadow-breakfast",
    name: "Meadow Breakfast Plate",
    category: "breakfast",
    categoryLabel: "Breakfast",
    price: 18,
    diet: "Vegetarian",
    desc: "Soft eggs, herbed ricotta, roasted tomatoes, and toasted country loaf with chili honey.",
    ingredients: "Eggs, ricotta, heirloom tomatoes, sourdough, chili honey, thyme",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
    alt: "Breakfast plate with eggs, avocado, and greens"
  },
  {
    id: "citrus-granola",
    name: "Citrus Granola Bowl",
    category: "breakfast",
    categoryLabel: "Breakfast",
    price: 14,
    diet: "Vegetarian",
    desc: "House granola, blood orange, pistachio, and thick yogurt finished with orange blossom.",
    ingredients: "Oats, pistachio, blood orange, yogurt, honey, orange blossom",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=900&q=80",
    alt: "Citrus and granola breakfast bowl"
  },
  {
    id: "herb-omelette",
    name: "Garden Herb Omelette",
    category: "breakfast",
    categoryLabel: "Breakfast",
    price: 16,
    diet: "Vegetarian",
    desc: "Folded eggs with chive, parsley, and goat cheese. Served with dressed leaves.",
    ingredients: "Eggs, goat cheese, chives, parsley, mixed greens, olive oil",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    alt: "Herb omelette with greens on a ceramic plate"
  },
  {
    id: "bloom-bowl",
    name: "The Bloom Bowl",
    category: "bowls",
    categoryLabel: "Bowls",
    price: 19,
    diet: "Vegetarian",
    desc: "Farro, roasted beet, citrus, avocado, and herb yogurt. Our most requested plate.",
    ingredients: "Farro, beet, citrus, avocado, herb yogurt, toasted seeds",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    alt: "Vegetable grain bowl with colorful produce"
  },
  {
    id: "harvest-bowl",
    name: "Harvest Grain Bowl",
    category: "bowls",
    categoryLabel: "Bowls",
    price: 17,
    diet: "Vegan",
    desc: "Brown rice, charred broccoli, chickpeas, pickled onion, and tahini lemon.",
    ingredients: "Brown rice, broccoli, chickpeas, red onion, tahini, lemon",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    alt: "Harvest bowl with vegetables and grains"
  },
  {
    id: "lemon-chicken",
    name: "Lemon-Thyme Chicken",
    category: "mains",
    categoryLabel: "Main Course",
    price: 28,
    diet: "",
    desc: "Slow-roasted chicken with preserved lemon, pan juices, and wilted greens.",
    ingredients: "Chicken, thyme, preserved lemon, garlic, greens, olive oil",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=900&q=80",
    alt: "Herb roast chicken on a wooden board"
  },
  {
    id: "dill-salmon",
    name: "Seared Salmon with Dill",
    category: "mains",
    categoryLabel: "Main Course",
    price: 32,
    diet: "",
    desc: "Crisp-skinned salmon, cucumber salad, dill cream, and crushed new potatoes.",
    ingredients: "Salmon, dill, cucumber, crème fraîche, potatoes, lemon",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    alt: "Seared salmon with vegetables"
  },
  {
    id: "mushroom-risotto",
    name: "Wild Mushroom Risotto",
    category: "mains",
    categoryLabel: "Main Course",
    price: 24,
    diet: "Vegetarian",
    desc: "Carnaroli rice, forest mushrooms, aged parmesan, and a finish of brown butter.",
    ingredients: "Carnaroli rice, mixed mushrooms, parmesan, butter, thyme",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",
    alt: "Mushroom risotto in a shallow bowl"
  },
  {
    id: "tomato-toast",
    name: "Heirloom Tomato Toast",
    category: "snacks",
    categoryLabel: "Snacks",
    price: 12,
    diet: "Vegetarian",
    desc: "Thick sourdough, ripe tomatoes, basil oil, and flaky salt. Simple on purpose.",
    ingredients: "Sourdough, heirloom tomato, basil, olive oil, sea salt",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80",
    alt: "Tomato toast on rustic bread"
  },
  {
    id: "berry-tart",
    name: "Honey & Berry Tart",
    category: "desserts",
    categoryLabel: "Desserts",
    price: 11,
    diet: "Vegetarian",
    desc: "Thin pastry, mascarpone, warm berries, and wildflower honey.",
    ingredients: "Pastry, mascarpone, mixed berries, honey, vanilla",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=80",
    alt: "Berry tart with cream"
  },
  {
    id: "olive-cake",
    name: "Olive Oil Cake with Berries",
    category: "desserts",
    categoryLabel: "Desserts",
    price: 10,
    diet: "Vegetarian",
    desc: "Tender crumb, citrus zest, and a spoon of yogurt cream.",
    ingredients: "Olive oil, citrus, yogurt, flour, sugar, eggs",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    alt: "Citrus cake with berries and cream"
  },
  {
    id: "chamomile-cooler",
    name: "Chamomile Citrus Cooler",
    category: "drinks",
    categoryLabel: "Drinks",
    price: 7,
    diet: "Vegetarian",
    desc: "Cold-steeped chamomile, grapefruit, honey, and sparkling water.",
    ingredients: "Chamomile, grapefruit, honey, sparkling water, mint",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80",
    alt: "Iced citrus drink with lemon and mint in a tall glass"
  },
  {
    id: "house-cold-brew",
    name: "House Cold Brew",
    category: "drinks",
    categoryLabel: "Drinks",
    price: 5,
    diet: "Vegan",
    desc: "Steeped overnight, served over ice with a strip of orange peel.",
    ingredients: "House coffee, filtered water, orange peel",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    alt: "Coffee cup and saucer on a table"
  }
];

const state = {
  filter: "all",
  cart: [],
  activeItem: null,
  lastFocus: null
};

const menuGrid = document.getElementById("menu-grid");
const header = document.getElementById("site-header");
const navToggle = document.querySelector(".nav-toggle");
const itemDialog = document.getElementById("item-dialog");
const cartDrawer = document.getElementById("cart-drawer");
const liveRegion = document.getElementById("live-region");
const backToTop = document.getElementById("back-to-top");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function money(value) {
  return `$${value.toFixed(0)}`;
}

function announce(message) {
  liveRegion.textContent = message;
}

function renderMenu() {
  menuGrid.innerHTML = MENU.map((item) => `
    <article class="menu-card" data-category="${item.category}" data-id="${item.id}">
      <button type="button" class="menu-card__media" data-open-item="${item.id}">
        <div class="menu-card__image">
          <img src="${item.image}" alt="${item.alt}" width="600" height="750" loading="lazy">
          <span class="menu-card__badge">${item.categoryLabel}</span>
        </div>
      </button>
      <div class="menu-card__meta">
        <h3>
          <button type="button" class="menu-card__title" data-open-item="${item.id}">${item.name}</button>
        </h3>
        <span class="price">${money(item.price)}</span>
      </div>
      <p>${item.desc}</p>
      <div class="menu-card__foot">
        <span class="dietary">${item.diet || "Kitchen plate"}</span>
        <button type="button" class="db-btn db-btn--small db-btn--ghost" data-add="${item.id}">Add</button>
      </div>
    </article>
  `).join("");
}

function applyFilter(category) {
  state.filter = category;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    const active = btn.dataset.filter === category;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("#menu-grid > .menu-card").forEach((card) => {
    const show = category === "all" || card.dataset.category === category;
    card.classList.toggle("is-hidden", !show);
  });
}

function getItem(id) {
  return MENU.find((item) => item.id === id);
}

function openDialog(id) {
  const item = getItem(id);
  if (!item) return;
  state.activeItem = item;
  state.lastFocus = document.activeElement;
  document.getElementById("dialog-image").src = item.image;
  document.getElementById("dialog-image").alt = item.alt;
  document.getElementById("dialog-category").textContent = item.categoryLabel;
  document.getElementById("dialog-title").textContent = item.name;
  document.getElementById("dialog-desc").textContent = item.desc;
  document.getElementById("dialog-ingredients").textContent = item.ingredients;
  document.getElementById("dialog-diet").textContent = item.diet ? `${item.diet} · Prepared in a shared kitchen` : "Prepared in a shared kitchen";
  document.getElementById("dialog-price").textContent = money(item.price);
  document.getElementById("dialog-qty").value = "1";
  itemDialog.hidden = false;
  itemDialog.classList.add("is-open");
  document.body.style.overflow = "hidden";
  itemDialog.querySelector(".dialog__close").focus();
}

function closeDialog() {
  itemDialog.classList.remove("is-open");
  itemDialog.hidden = true;
  if (!cartDrawer.classList.contains("is-open")) {
    document.body.style.overflow = "";
  }
  if (state.lastFocus) state.lastFocus.focus();
}

function cartCount() {
  return state.cart.reduce((sum, line) => sum + line.qty, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, line) => sum + line.qty * line.price, 0);
}

function updateCartBadges() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = String(cartCount());
  });
}

function addToCart(id, qty = 1) {
  const item = getItem(id);
  if (!item) return;
  const existing = state.cart.find((line) => line.id === id);
  if (existing) existing.qty += qty;
  else state.cart.push({ ...item, qty });
  updateCartBadges();
  renderCart();
  announce(`${item.name} added to order.`);
}

function renderCart() {
  const wrap = document.getElementById("cart-items");
  if (!state.cart.length) {
    wrap.innerHTML = `<p class="cart-empty">Your order is empty. Add a plate from the menu.</p>`;
  } else {
    wrap.innerHTML = state.cart.map((line) => `
      <div class="cart-item">
        <img src="${line.image}" alt="" width="72" height="72">
        <div>
          <strong>${line.name}</strong>
          <p>${line.qty} × ${money(line.price)}</p>
        </div>
        <button type="button" class="db-btn db-btn--small db-btn--ghost" data-remove="${line.id}" aria-label="Remove ${line.name}">Remove</button>
      </div>
    `).join("");
  }
  document.getElementById("cart-total").textContent = money(cartTotal());
}

function openCart() {
  state.lastFocus = document.activeElement;
  cartDrawer.hidden = false;
  cartDrawer.classList.add("is-open");
  document.body.style.overflow = "hidden";
  closeNav();
  cartDrawer.querySelector("[data-close-cart]").focus();
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.hidden = true;
  if (!itemDialog.classList.contains("is-open")) {
    document.body.style.overflow = "";
  }
}

function closeNav() {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
}

function openNav() {
  document.body.classList.add("nav-open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Close menu");
}

function trapFocus(container, event) {
  const focusable = container.querySelectorAll("button, [href], input, select, textarea");
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function setupReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    nodes.forEach((el) => el.classList.add("is-inview"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-inview");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  nodes.forEach((el) => observer.observe(el));
}

function setupParallax() {
  const nodes = document.querySelectorAll("[data-parallax]");
  if (prefersReduced || !nodes.length) return;
  let ticking = false;

  const update = () => {
    const viewportCenter = window.innerHeight / 2;
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      const offset = Math.max(-22, Math.min(22, (viewportCenter - (rect.top + rect.height / 2)) * 0.045));
      node.style.setProperty("--parallax-y", `${offset}px`);
    });
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  update();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

document.addEventListener("click", (event) => {
  const openItem = event.target.closest("[data-open-item]");
  if (openItem) {
    event.preventDefault();
    event.stopPropagation();
    openDialog(openItem.dataset.openItem);
    return;
  }

  const addBtn = event.target.closest("[data-add]");
  if (addBtn) {
    event.preventDefault();
    event.stopPropagation();
    addToCart(addBtn.dataset.add, 1);
    return;
  }

  if (event.target.closest("[data-open-cart]")) {
    openCart();
    return;
  }

  if (event.target.closest("[data-close-dialog]")) closeDialog();
  if (event.target.closest("[data-close-cart]")) closeCart();

  const remove = event.target.closest("[data-remove]");
  if (remove) {
    state.cart = state.cart.filter((line) => line.id !== remove.dataset.remove);
    updateCartBadges();
    renderCart();
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) applyFilter(filter.dataset.filter);

  const qtyStep = event.target.closest("[data-qty-step]");
  if (qtyStep) {
    const input = document.getElementById("dialog-qty");
    const next = Math.min(12, Math.max(1, Number(input.value) + Number(qtyStep.dataset.qtyStep)));
    input.value = String(next);
  }

  const navLink = event.target.closest(".nav-links a, .brand");
  if (navLink) closeNav();
});

navToggle.addEventListener("click", () => {
  if (document.body.classList.contains("nav-open")) closeNav();
  else openNav();
});

document.getElementById("dialog-add").addEventListener("click", () => {
  if (!state.activeItem) return;
  const qty = Math.min(12, Math.max(1, Number(document.getElementById("dialog-qty").value) || 1));
  addToCart(state.activeItem.id, qty);
  closeDialog();
  openCart();
});

document.getElementById("checkout-demo").addEventListener("click", () => {
  const note = document.getElementById("checkout-success");
  if (!state.cart.length) {
    announce("Add a dish before placing an order.");
    return;
  }
  note.classList.add("is-visible");
  state.cart = [];
  updateCartBadges();
  renderCart();
});

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const nameField = document.getElementById("guest-name").closest(".form-field");
  const emailField = document.getElementById("guest-email").closest(".form-field");
  const messageField = document.getElementById("guest-message").closest(".form-field");
  const name = document.getElementById("guest-name").value.trim();
  const email = document.getElementById("guest-email").value.trim();
  const message = document.getElementById("guest-message").value.trim();
  nameField.classList.toggle("is-invalid", !name);
  emailField.classList.toggle("is-invalid", !isValidEmail(email));
  messageField.classList.toggle("is-invalid", !message);
  if (!name || !isValidEmail(email) || !message) return;
  document.getElementById("form-success").classList.add("is-visible");
  event.target.reset();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDialog();
    closeCart();
    closeNav();
  }
  if (event.key === "Tab" && itemDialog.classList.contains("is-open")) {
    trapFocus(itemDialog, event);
  }
  if (event.key === "Tab" && cartDrawer.classList.contains("is-open")) {
    trapFocus(cartDrawer, event);
  }
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
  backToTop.classList.toggle("is-visible", window.scrollY > 600);
  const sections = ["home", "menu", "about", "contact"];
  let current = "home";
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < 120) current = id;
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`);
  });
}, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
  });
});

renderMenu();
renderCart();
setupReveal();
setupParallax();
header.classList.toggle("is-scrolled", window.scrollY > 12);
