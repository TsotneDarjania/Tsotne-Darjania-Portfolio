import { For } from "solid-js";

type Job = {
  period: string;
  role: string;
  company: string;
  location: string;
  points: string[];
  tags: string[];
};

/** Source of truth: Tsotne_Darjania resume (2026). */
const jobs: Job[] = [
  {
    period: "May 2025 — Present",
    role: "Front-End Developer, Interactive Web Experiences",
    company: "Sett.ai",
    location: "Tel Aviv, Israel · Remote",
    points: [
      "Engineer high-performance, single-file HTML5 interactives for mobile marketing campaigns — sub-5MB self-contained builds with zero external requests.",
      "Collaborate with proprietary Agentic AI systems to generate and refine interactive concepts, cutting production cycles from weeks to minutes.",
      "Optimize rendering with PixiJS and advanced Webpack configs (Base64 asset inlining, aggressively minimized payloads).",
      "Tune first-3-second engagement hooks from user-interaction telemetry, measurably reducing early drop-offs and improving conversion.",
    ],
    tags: ["Agentic AI", "MRAID 3.0", "PixiJS", "Webpack"],
  },
  {
    period: "Jun 2024 — Apr 2025",
    role: "Game Developer",
    company: "Onaim",
    location: "Remote",
    points: [
      "Architected browser-based casino games with PixiJS, React and TypeScript, holding a consistent 60 FPS on low-end mobile devices.",
      "Built internal tooling — a custom scene editor and runtime engine for configuring dynamic layouts, animations and visual assets.",
      "Automated asset loading/packaging pipelines (JSON, Blob, JSZip), reducing manual integration effort by ~30%.",
      "Tuned memory allocation, texture atlases and GC behaviour, substantially cutting mobile browser crash rates.",
    ],
    tags: ["PixiJS", "React", "TypeScript", "60 FPS"],
  },
  {
    period: "Jun 2022 — Jan 2024",
    role: "Instructor, Full-Stack JavaScript",
    company: "Digital Institute",
    location: "Tbilisi, Georgia",
    points: [
      "Taught full-stack JavaScript cohorts — HTML, CSS, React, Next.js, Node.js, MongoDB — through live coding sessions and code reviews.",
      "Mentored junior developers on architecture, clean code, Agile and Git CI/CD workflows, preparing them for enterprise environments.",
    ],
    tags: ["Mentorship", "React", "Node.js"],
  },
  {
    period: "Jun 2020 — Jan 2022",
    role: "Web Developer",
    company: "Digido",
    location: "Tbilisi, Georgia",
    points: [
      "Built customer-facing dashboards and internal operational tools with React, Next.js and TypeScript.",
      "Shipped complex UI modules — real-time charts, dynamic filtering — streamlining operations workflows.",
      "Configured SSR and ISR, trimming bundle sizes and lifting Core Web Vitals and SEO performance.",
    ],
    tags: ["Next.js", "SSR / ISR", "Dashboards"],
  },
  {
    period: "Jan 2019 — Jun 2020",
    role: "JavaScript Software Engineer",
    company: "Profair Games",
    location: "Tbilisi, Georgia",
    points: [
      "Developed HTML5 slot games with PixiJS and Phaser — stable frame rates and smooth cross-platform animation.",
      "Integrated Matter.js physics and Three.js 3D effects into bonus rounds that extended average session duration.",
      "Optimized rendering pipelines and asset preloading, cutting initial load times by ~25%.",
    ],
    tags: ["Phaser", "Matter.js", "Slot Games"],
  },
];

export default function Experience() {
  return (
    <section id="experience" class="section">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="section-num">03</span>
          <h2 class="section-title">Experience</h2>
        </div>

        <div class="timeline">
          <For each={jobs}>
            {(job, i) => (
              <article
                class="tl-item"
                data-reveal
                style={{ "--d": `${Math.min(i() * 70, 280)}ms` }}
              >
                <span class="tl-dot" />
                <p class="tl-period">{job.period}</p>
                <h3 class="tl-role">{job.role}</h3>
                <p class="tl-company">
                  <b>{job.company}</b> · {job.location}
                </p>
                <ul class="tl-points">
                  <For each={job.points}>{(point) => <li>{point}</li>}</For>
                </ul>
                <div class="tl-tags">
                  <For each={job.tags}>{(tag) => <span class="tl-tag">{tag}</span>}</For>
                </div>
              </article>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
