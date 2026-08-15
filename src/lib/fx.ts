/**
 * Lightweight animation utilities — scroll reveals, magnetic buttons, parallax,
 * inertia smooth-scrolling (Lenis).
 */

import Lenis from "lenis";

/** Buttery inertia scrolling for the whole page + eased anchor navigation. */
export function initSmoothScroll(): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  let raf = 0;
  const loop = (time: number) => {
    lenis.raf(time);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  // Anchor links glide instead of jumping.
  const onClick = (e: MouseEvent) => {
    const link = (e.target as HTMLElement).closest?.('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute("href")!;
    if (href.length < 2) return;
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: -90, duration: 1.4 });
  };
  document.addEventListener("click", onClick);

  return () => {
    cancelAnimationFrame(raf);
    document.removeEventListener("click", onClick);
    lenis.destroy();
  };
}

/** Observe all [data-reveal] elements and add .in when they enter the viewport. */
export function initReveal(): () => void {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

/** Magnetic hover effect for all [data-magnetic] elements (desktop only). */
export function initMagnetic(): () => void {
  if (window.matchMedia("(pointer: coarse)").matches) return () => {};

  const MAX_OFFSET = 8; // px — subtle pull, never a jump
  const LERP = 0.14;

  const cleanups: Array<() => void> = [];
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || "0.25");

    let raf = 0;
    let x = 0, y = 0, s = 1;          // applied offset / scale
    let tx = 0, ty = 0, ts = 1;       // targets
    let hovering = false;

    const tick = () => {
      x += (tx - x) * LERP;
      y += (ty - y) * LERP;
      s += (ts - s) * LERP;
      if (!hovering && Math.abs(x) < 0.1 && Math.abs(y) < 0.1 && Math.abs(s - 1) < 0.002) {
        x = y = 0; s = 1;
        el.style.transform = "";
        raf = 0;
        return;
      }
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${s.toFixed(3)})`;
      raf = requestAnimationFrame(tick);
    };
    const start = () => { if (!raf) raf = requestAnimationFrame(tick); };

    const clamp = (v: number) => Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, v));

    const onMove = (e: MouseEvent) => {
      hovering = true;
      const r = el.getBoundingClientRect();
      // Measure from the untransformed center, otherwise the offset feeds
      // back into itself and the button jitters.
      const cx = r.left + r.width / 2 - x;
      const cy = r.top + r.height / 2 - y;
      tx = clamp((e.clientX - cx) * strength);
      ty = clamp((e.clientY - cy) * strength);
      ts = 1.03;
      start();
    };
    const onLeave = () => {
      hovering = false;
      tx = 0; ty = 0; ts = 1;
      start();
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    cleanups.push(() => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = "";
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

/** Subtle parallax for [data-parallax="speed"] elements, centered on viewport middle. */
export function initParallax(): () => void {
  const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
  if (els.length === 0) return () => {};

  let raf = 0;
  const update = () => {
    raf = 0;
    const vh = window.innerHeight;
    for (const el of els) {
      const speed = parseFloat(el.dataset.parallax || "0.1");
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      const progress = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.setProperty("--parallax-y", `${(-progress * speed * 100).toFixed(2)}px`);
    }
  };
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    if (raf) cancelAnimationFrame(raf);
  };
}
