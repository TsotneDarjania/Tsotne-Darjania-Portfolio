import { createSignal, onCleanup, onMount, Show } from "solid-js";

const FIRST = "Tsotne";
const SECOND = "Darjania";
const LETTER_STAGGER = 45; // ms between letters
const COUNT_DELAY = 250; // counter/bar start
const COUNT_DURATION = 1550; // counter/bar fill time (matches CSS)
const HOLD = 2100; // how long the intro stays before the curtain lifts
const EXIT = 1050; // curtain slide duration incl. accent trail (matches CSS)

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function Intro(props: { onDone: () => void }) {
  const [leaving, setLeaving] = createSignal(false);
  const [gone, setGone] = createSignal(false);
  const [count, setCount] = createSignal(0);

  onMount(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      props.onDone();
      return;
    }

    document.body.style.overflow = "hidden";

    // 0 → 100 counter, eased like the loading bar
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - start - COUNT_DELAY) / COUNT_DURATION));
      setCount(Math.round(easeInOutCubic(p) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const t1 = setTimeout(() => setLeaving(true), HOLD);
    const t2 = setTimeout(() => {
      document.body.style.overflow = "";
      setGone(true);
      props.onDone();
    }, HOLD + EXIT);

    onCleanup(() => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    });
  });

  const letter = (ch: string, index: number, extraClass = "") => (
    <span
      class={"intro-letter " + extraClass}
      style={{ "animation-delay": `${150 + index * LETTER_STAGGER}ms` }}
    >
      {ch}
    </span>
  );

  return (
    <Show when={!gone()}>
      {/* terracotta layer that trails behind the ink curtain on exit */}
      <div class={"intro-accent" + (leaving() ? " leaving" : "")} aria-hidden="true" />

      <div class={"intro" + (leaving() ? " leaving" : "")} aria-hidden="true">
        <div class="intro-glow" />

        <div class="intro-inner">
          <p class="intro-eyebrow">Portfolio — Senior Web &amp; Game Developer</p>

          <h1 class="intro-title">
            <span class="intro-word">
              {FIRST.split("").map((ch, i) => letter(ch, i))}
            </span>
            <span class="intro-word">
              {SECOND.split("").map((ch, i) => letter(ch, FIRST.length + i))}
              {letter(".", FIRST.length + SECOND.length, "intro-dot")}
            </span>
          </h1>

          <div class="intro-progress">
            <span class="intro-bar">
              <span class="intro-bar-fill" />
            </span>
            <span class="intro-count">{count()}%</span>
          </div>
        </div>

        <span class="intro-corner intro-corner-br">TBILISI, GE</span>
      </div>
    </Show>
  );
}
