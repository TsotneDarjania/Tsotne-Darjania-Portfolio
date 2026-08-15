export function Hero() {
  return (
    <section id="top" class="hero">
      <div class="container hero-grid">
        <div>
          <p class="hero-eyebrow" data-reveal>
            Tbilisi, Georgia — Available for work
          </p>

          <h1 class="hero-title" data-reveal style={{ "--d": "80ms" }}>
            Tsotne
            <br />
            Darjania<span class="accent-dot">.</span>
          </h1>

          <p class="hero-role" data-reveal style={{ "--d": "160ms" }}>
            Senior Web &amp; Game Developer
          </p>

          <p class="hero-bio" data-reveal style={{ "--d": "240ms" }}>
            Hi, I'm Tsotne — a Senior Web &amp; Game Developer bridging the gap
            between high-end rendering and aggressive performance
            optimization. Over the last 6+ years, I've engineered everything
            from real-time browser games to high-converting Ad-Tech
            creatives. I specialize in pairing visual polish (PixiJS, WebGL)
            with complex front-end logic (React, TypeScript), while
            leveraging Agentic AI to scale production. My core focus is
            turning strict technical constraints into buttery-smooth, 60 FPS
            experiences that drive real user acquisition and retention.
          </p>

          <div class="hero-actions" data-reveal style={{ "--d": "320ms" }}>
            <a
              class="btn btn-primary"
              href="resume.html"
              target="_blank"
              rel="noopener"
            >
              View Resume
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
            <a class="btn btn-ghost" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div class="hero-visual" data-reveal style={{ "--d": "200ms" }}>
          <div class="hero-blob" data-parallax="0.28" />
          <div class="hero-portrait-wrap">
            <img
              class="hero-portrait"
              src="me.jpg"
              alt="Tsotne Darjania"
              data-parallax="0.12"
            />
          </div>
          <div class="hero-chip hero-chip-1" data-parallax="0.34">
            <b>60 FPS</b> on low-end mobile
          </div>
          <div class="hero-chip hero-chip-2" data-parallax="0.2">
            <b>&lt;5MB</b> single-file builds
          </div>
        </div>
      </div>

      <span class="hero-scroll-hint">Scroll</span>
    </section>
  );
}
