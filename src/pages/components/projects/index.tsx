import { createSignal, For, onCleanup, onMount, Show } from "solid-js";

type Demo = {
  title: string;
  desc: string;
  chips: string[];
  src: string;
  thumb?: string;
};

// Playable ads built at Sett — each is one self-contained HTML file.
const playables: Demo[] = [
  {
    title: "Colossal Beauty",
    desc: "A complete gameplay loop — art, audio and logic — shipped as one self-contained HTML file for MRAID ad networks.",
    chips: ["3.9 MB single file", "60 fps", "MRAID"],
    src: "playables/colossal-beauty.html",
  },
  {
    title: "Liquid Sand",
    desc: "Real-time particle physics tuned to stay buttery-smooth on low-end mobile devices — inside an ad build.",
    chips: ["3.0 MB single file", "Physics", "Mobile-first"],
    src: "playables/liquid-sand.html",
  },
  {
    title: "Desert Auto-Shooter",
    desc: "An auto-shooter combat loop engineered for instant engagement — playable within the first second.",
    chips: ["2.1 MB single file", "60 fps", "Instant load"],
    src: "playables/desert-auto-shooter.html",
  },
];

// Production slot games — I built the full front-end, and korgaming.com itself.
const slots: Demo[] = [
  {
    title: "Gods of Olympus",
    desc: "Feature-rich video slot with a full bonus game, running in the browser on desktop and mobile.",
    chips: ["Base + bonus game", "Desktop & mobile"],
    src: "https://frontend-games.staging.korgaming.com/?app=gods_of_olympus",
    thumb: "slot-thumbs/gods-of-olympus.png",
  },
  {
    title: "CandyMan",
    desc: "Candy-themed slot with cascading animation work and a dedicated bonus round.",
    chips: ["Base + bonus game", "Desktop & mobile"],
    src: "https://frontend-games.staging.korgaming.com/?app=candy_man",
    thumb: "slot-thumbs/candyman.png",
  },
  {
    title: "Viking Glory",
    desc: "Norse-themed slot with heavy animation sequences kept at a locked 60 fps.",
    chips: ["Base + bonus game", "Desktop & mobile"],
    src: "https://frontend-games.staging.korgaming.com/?app=viking_glory",
    thumb: "slot-thumbs/viking-glory.png",
  },
];

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.9-6.86a1.04 1.04 0 0 0 0-1.76L9.56 4.26A1.04 1.04 0 0 0 8 5.14z" />
    </svg>
  );
}

// Only one demo runs at a time — starting one stops whichever was playing.
const [activeDemo, setActiveDemo] = createSignal<string | null>(null);

// Slot games open in a fullscreen modal instead of playing inline.
const [slotModal, setSlotModal] = createSignal<Demo | null>(null);

function openSlotModal(demo: Demo) {
  setActiveDemo(null);
  setSlotModal(demo);
  document.documentElement.style.overflow = "hidden";
}

function closeSlotModal() {
  setSlotModal(null);
  document.documentElement.style.overflow = "";
}

/** Poster with a play button; mounts the iframe only after a click. */
function DemoFrame(props: {
  demo: Demo;
  ratio: "portrait" | "landscape";
  onPlay?: () => void;
}) {
  const playing = () => activeDemo() === props.demo.src;
  const setPlaying = (on: boolean) => setActiveDemo(on ? props.demo.src : null);

  return (
    <div class={`demo-frame demo-frame-${props.ratio}`}>
      <Show
        when={playing()}
        fallback={
          <button
            class="demo-cover"
            style={
              props.demo.thumb
                ? { "background-image": `url(${props.demo.thumb})` }
                : undefined
            }
            onClick={() => (props.onPlay ? props.onPlay() : setPlaying(true))}
            aria-label={`Play ${props.demo.title}`}
          >
            <span class="demo-play-btn">
              <PlayIcon />
            </span>
            <span class="demo-cover-hint">Tap to play</span>
          </button>
        }
      >
        <iframe
          class="demo-iframe"
          src={props.demo.src}
          title={props.demo.title}
          allow="autoplay; fullscreen"
        />
      </Show>
    </div>
  );
}

export function Projects() {
  onMount(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSlotModal();
    };
    window.addEventListener("keydown", onKey);
    onCleanup(() => {
      window.removeEventListener("keydown", onKey);
      closeSlotModal();
    });
  });

  return (
    <section id="projects" class="section">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="section-num">02</span>
          <h2 class="section-title">Play my work</h2>
        </div>

        <p class="proj-lede" data-reveal>
          Don't take my word for it — these are real production builds,
          embedded live. Press play.
        </p>

        {/* --- Playable ads --- */}
        <div class="proj-group" data-reveal>
          <div class="proj-group-head">
            <h3 class="proj-group-title">Playable Ads</h3>
            <span class="proj-badge">Built at Sett</span>
          </div>
          <p class="proj-group-sub">
            Complete game loops delivered as single self-contained HTML files —
            no external requests, ready for any ad network.
          </p>
        </div>

        <div class="playable-grid">
          <For each={playables}>
            {(demo, i) => (
              <article
                class="demo-card"
                data-reveal
                style={{ "--d": `${i() * 90}ms` }}
              >
                <DemoFrame demo={demo} ratio="portrait" />
                <h4 class="demo-title">{demo.title}</h4>
                <p class="demo-desc">{demo.desc}</p>
                <div class="chip-row">
                  <For each={demo.chips}>{(chip) => <span class="chip">{chip}</span>}</For>
                </div>
              </article>
            )}
          </For>
        </div>

        {/* --- Slot games --- */}
        <div class="proj-group proj-group-gap" data-reveal>
          <div class="proj-group-head">
            <h3 class="proj-group-title">Slot Games</h3>
            <span class="proj-badge">Front-End · KOR Gaming</span>
          </div>
          <p class="proj-group-sub">
            Production casino slots where I engineered the entire front-end —
            and{" "}
            <a
              class="proj-inline-link"
              href="https://korgaming.com/en/games"
              target="_blank"
              rel="noopener"
            >
              korgaming.com
            </a>{" "}
            itself, where the full catalog lives.
          </p>
        </div>

        <div class="slot-grid">
          <For each={slots}>
            {(demo, i) => (
              <article
                class="demo-card"
                data-reveal
                style={{ "--d": `${i() * 90}ms` }}
              >
                <DemoFrame
                  demo={demo}
                  ratio="landscape"
                  onPlay={() => openSlotModal(demo)}
                />
                <h4 class="demo-title">{demo.title}</h4>
                <p class="demo-desc">{demo.desc}</p>
                <div class="chip-row">
                  <For each={demo.chips}>{(chip) => <span class="chip">{chip}</span>}</For>
                </div>
              </article>
            )}
          </For>
        </div>
      </div>

      {/* Fullscreen slot modal — dark overlay, click outside or Esc to close */}
      <Show when={slotModal()}>
        <div class="slot-modal-overlay" onClick={closeSlotModal}>
          <div class="slot-modal" onClick={(e) => e.stopPropagation()}>
            <div class="slot-modal-head">
              <span class="slot-modal-title">{slotModal()!.title}</span>
              <button
                class="slot-modal-close"
                onClick={closeSlotModal}
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div class="slot-modal-frame">
              <iframe
                class="demo-iframe"
                src={slotModal()!.src}
                title={slotModal()!.title}
                allow="autoplay; fullscreen"
              />
            </div>
          </div>
        </div>
      </Show>
    </section>
  );
}
