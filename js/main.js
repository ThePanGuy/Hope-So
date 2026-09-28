const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !message || !email.includes("@")) {
    if (status) {
      status.textContent = "Add your name, a valid email, and a message.";
    }
    return;
  }

  const button = form.querySelector("button[type=submit]");
  if (button) {
    button.disabled = true;
  }
  if (status) {
    status.textContent = "Sending…";
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
        status.textContent = "Your message was sent. We will reply by email.";
      }
    } else if (status) {
      status.textContent = "The message could not be sent. Please try again.";
    }
  } catch {
    if (status) {
      status.textContent = "The message could not be sent. Please try again.";
    }
  } finally {
    if (button) {
      button.disabled = false;
    }
  }
});
