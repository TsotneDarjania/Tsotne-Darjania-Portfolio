import { createSignal, onCleanup, onMount } from "solid-js";

export function Navigation() {
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", onScroll));
  });

  return (
    <header class={"nav" + (scrolled() ? " scrolled" : "")}>
      <div class="container nav-inner">
        <a href="#top" class="nav-logo">
          Tsotne<em>.</em>
        </a>

        <nav class="nav-links">
          <a class="nav-link" href="#skills">
            Skills
          </a>
          <a class="nav-link" href="#projects">
            Projects
          </a>
          <a class="nav-link" href="#experience">
            Experience
          </a>
          <a class="nav-link" href="#contact">
            Contact
          </a>
          <a
            class="btn btn-primary nav-cta"
            href="resume.html"
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
