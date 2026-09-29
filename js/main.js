const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const menu = document.querySelector("#site-menu");
const toggles = document.querySelectorAll("[data-menu-toggle]");

function setMenu(open) {
  if (!menu) {
    return;
  }
  menu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
  toggles.forEach((button) => {
    button.setAttribute("aria-expanded", String(open));
  });
  if (open) {
    menu.querySelector("a, button")?.focus();
  }
}

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    setMenu(menu?.hidden !== false);
  });
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

const sticky = document.querySelector(".sticky-bar");
if (sticky) {
  const onScroll = () => {
    sticky.classList.toggle("is-visible", window.scrollY > 140);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

const slides = [...document.querySelectorAll(".line-slide")];
if (slides.length > 1) {
  let index = 0;
  const show = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === index;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
  };
  show(0);
  document.querySelector("[data-line='prev']")?.addEventListener("click", () => show(index - 1));
  document.querySelector("[data-line='next']")?.addEventListener("click", () => show(index + 1));
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!motion.matches) {
    window.setInterval(() => show(index + 1), 4200);
  }
}

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

const messages = {
  el: {
    invalid: "Συμπληρώστε το όνομά σας, ένα έγκυρο email και ένα μήνυμα.",
    sending: "Αποστολή…",
    sent: "Το μήνυμά σας στάλθηκε. Θα σας απαντήσουμε με email.",
    failed: "Το μήνυμα δεν στάλθηκε. Δοκιμάστε ξανά.",
  },
  en: {
    invalid: "Add your name, a valid email, and a message.",
    sending: "Sending…",
    sent: "Your message was sent. We will reply by email.",
    failed: "The message could not be sent. Please try again.",
  },
};
const text = messages[document.documentElement.lang] || messages.en;

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailOk || !message || name.length > 120 || message.length > 4000) {
    if (status) {
      status.textContent = text.invalid;
    }
    return;
  }

  const button = form.querySelector("button[type=submit]");
  if (button) {
    button.disabled = true;
  }
  if (status) {
    status.textContent = text.sending;
  }

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    const result = await response.json();

    if (response.ok && result.success) {
      form.reset();
      if (status) {
        status.textContent = text.sent;
      }
    } else if (status) {
      status.textContent = text.failed;
    }
  } catch {
    if (status) {
      status.textContent = text.failed;
    }
  } finally {
    if (button) {
      button.disabled = false;
    }
  }
});

document.querySelectorAll("a[hreflang]").forEach((link) => {
  link.addEventListener("click", () => {
    try {
      localStorage.setItem("lang", link.hreflang);
    } catch {}
  });
});
