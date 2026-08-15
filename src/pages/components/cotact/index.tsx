import { createSignal } from "solid-js";

const EMAIL = "tsotnedarjania1997@gmail.com";

export default function Contact() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [status, setStatus] = createSignal<"idle" | "sending" | "sent" | "error">("idle");

  async function submitForm(e: Event) {
    e.preventDefault();
    if (!name() || !email() || !message()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contactform/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name(),
          email: email(),
          subject: `Portfolio contact from ${name()}`,
          message: message(),
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("sent");
    } catch {
      // No backend available — fall back to the visitor's mail client.
      const body = encodeURIComponent(`${message()}\n\n— ${name()} (${email()})`);
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        "Portfolio contact"
      )}&body=${body}`;
      setStatus("idle");
    }
  }

  return (
    <section id="contact" class="section">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="section-num">04</span>
          <h2 class="section-title">Get in touch</h2>
        </div>

        <div class="contact-grid">
          <div data-reveal>
            <p class="contact-lede">
              Have a project that needs to feel <em>alive</em>? Let's talk.
            </p>
            <div class="contact-meta">
              <a href={`mailto:${EMAIL}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {EMAIL}
              </a>
              <a href="https://github.com/TsotneDarjania" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                github.com/TsotneDarjania
              </a>
              <a
                href="https://www.linkedin.com/in/tsotne-darjania-58380b231/"
                target="_blank"
                rel="noopener"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                linkedin.com/in/tsotne-darjania
              </a>
            </div>
          </div>

          <form class="contact-form" data-reveal style={{ "--d": "120ms" }} onSubmit={submitForm}>
            <div class="field">
              <input
                id="cf-name"
                type="text"
                placeholder=" "
                required
                value={name()}
                onInput={(e) => setName(e.currentTarget.value)}
              />
              <label for="cf-name">Name</label>
            </div>

            <div class="field">
              <input
                id="cf-email"
                type="email"
                placeholder=" "
                required
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
              />
              <label for="cf-email">Email</label>
            </div>

            <div class="field">
              <textarea
                id="cf-message"
                placeholder=" "
                required
                value={message()}
                onInput={(e) => setMessage(e.currentTarget.value)}
              />
              <label for="cf-message">Message</label>
            </div>

            <button
              class="btn btn-primary contact-submit"
              type="submit"
              disabled={status() === "sending"}
            >
              {status() === "sent"
                ? "Sent — thank you!"
                : status() === "sending"
                  ? "Sending…"
                  : "Send Message"}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
            </button>

            <p class="form-note">
              I usually reply within a day. Or just email me directly — whatever's easier.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
