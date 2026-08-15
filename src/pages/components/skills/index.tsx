import { createSignal, For, onCleanup, onMount } from "solid-js";

/** Counts up from 0 to target once its own element scrolls into view. */
function StatNumber(props: {
  prefix?: string;
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [n, setN] = createSignal(0);
  let el: HTMLSpanElement | undefined;

  onMount(() => {
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(props.target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const duration = props.duration ?? 1800;
          const start = performance.now();
          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            setN(Math.round(props.target * easeOutCubic(p)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    onCleanup(() => io.disconnect());
  });

  // Reserve the final digit width up front so the static suffix never shifts.
  const digits = String(props.target).length;

  return (
    <span class="stat-value">
      {props.prefix}
      <span ref={el} class="stat-num" style={{ "min-width": `${digits}ch` }}>
        {n()}
      </span>
      {props.suffix}
    </span>
  );
}

type BentoCard = {
  span: 2 | 3;
  title: string;
  sub: string;
  icon: () => any;
  chips: string[];
  delay: number;
};

const cards: BentoCard[] = [
  {
    span: 3,
    title: "Game & Graphics",
    sub: "Real-time rendering, physics and animation for the browser.",
    delay: 0,
    icon: () => (
      // gamepad
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="6" x2="10" y1="12" y2="12" />
        <line x1="8" x2="8" y1="10" y2="14" />
        <line x1="15" x2="15.01" y1="13" y2="13" />
        <line x1="18" x2="18.01" y1="11" y2="11" />
        <rect width="20" height="12" x="2" y="6" rx="2" />
      </svg>
    ),
    chips: ["PixiJS", "Phaser", "Three.js", "WebGL", "Canvas API", "Matter.js", "GSAP"],
  },
  {
    span: 3,
    title: "Modern Front-End",
    sub: "Product-grade interfaces with clean architecture and state.",
    delay: 90,
    icon: () => (
      // layout
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    chips: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "SSR / ISR"],
  },
  {
    span: 2,
    title: "Performance & Ad-Tech",
    sub: "Every kilobyte and every frame accounted for.",
    delay: 180,
    icon: () => (
      // gauge
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    ),
    chips: ["MRAID 3.0", "Asset Minification", "Webpack", "Node.js", "Core Web Vitals"],
  },
  {
    span: 2,
    title: "Tooling & DevOps",
    sub: "From local build to shipped product.",
    delay: 270,
    icon: () => (
      // terminal
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" x2="20" y1="19" y2="19" />
      </svg>
    ),
    chips: ["Vite", "ESBuild", "Docker", "Git", "GitHub Actions", "AWS"],
  },
  {
    span: 2,
    title: "AI & Agentic Workflows",
    sub: "Leveraging LLMs and Agentic AI to scale production cycles.",
    delay: 360,
    icon: () => (
      // sparkles
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
      </svg>
    ),
    chips: ["Prompt Engineering", "Agentic AI", "AI-Assisted Dev", "LLM Integration"],
  },
];

const stats = [
  {
    prefix: "",
    target: 6,
    suffix: "+",
    label: "years of shipping production JavaScript & TypeScript",
  },
  {
    prefix: "",
    target: 60,
    suffix: "fps",
    label: "browser games on resource-constrained mobile devices",
  },
  {
    prefix: "<",
    target: 5,
    suffix: "MB",
    label: "fully self-contained interactive ad builds",
  },
];

export default function Skills() {
  return (
    <section id="skills" class="section">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="section-num">01</span>
          <h2 class="section-title">What I work with</h2>
        </div>

        <div class="bento">
          <For each={cards}>
            {(card) => (
              <article
                class={`bento-card bento-span-${card.span}`}
                data-reveal
                style={{ "--d": `${card.delay}ms` }}
              >
                <div class="bento-card-icon">{card.icon()}</div>
                <h3 class="bento-card-title">{card.title}</h3>
                <p class="bento-card-sub">{card.sub}</p>
                <div class="chip-row">
                  <For each={card.chips}>{(chip) => <span class="chip">{chip}</span>}</For>
                </div>
              </article>
            )}
          </For>

          <article
            class="bento-card bento-span-6 bento-stats"
            data-reveal
            style={{ "--d": "450ms" }}
          >
            <For each={stats}>
              {(stat) => (
                <div class="stat-row">
                  <StatNumber prefix={stat.prefix} target={stat.target} suffix={stat.suffix} />
                  <span class="stat-label">{stat.label}</span>
                </div>
              )}
            </For>
          </article>
        </div>
      </div>
    </section>
  );
}
