import { createSignal } from "solid-js";

// Playables are 2–4 MB single HTML files and the server's uplink is slow, so the
// first play used to sit on a black frame for 10–30 s. Instead we start downloading
// them in the background as soon as the page has loaded, keep each one as a blob URL,
// and the iframe opens instantly from memory. A click on a demo that hasn't finished
// yet jumps it to the front and shows progress in the frame.

export type Load = { loaded: number; total: number; url?: string; failed?: boolean };

const [loads, setLoads] = createSignal<Record<string, Load>>({});
const jobs = new Map<string, Promise<string | null>>();

export const loadOf = (src: string): Load | undefined => loads()[src];

function update(src: string, patch: Partial<Load>) {
  setLoads((all) => ({ ...all, [src]: { ...(all[src] ?? { loaded: 0, total: 0 }), ...patch } }));
}

async function download(src: string, expected: number) {
  update(src, { loaded: 0, total: expected });
  try {
    const res = await fetch(src);
    if (!res.ok || !res.body) throw new Error(String(res.status));
    // Content-Length is the gzipped size when the server compresses, while the stream
    // yields decoded bytes — so only trust it for uncompressed responses.
    const length = Number(res.headers.get("content-length"));
    const total = !res.headers.get("content-encoding") && length > 0 ? length : expected;
    const reader = res.body.getReader();
    const chunks: Uint8Array[] = [];
    let loaded = 0, lastPaint = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      loaded += value.length;
      if (loaded - lastPaint > 48 * 1024) { lastPaint = loaded; update(src, { loaded, total: Math.max(total, loaded) }); }
    }
    const url = URL.createObjectURL(new Blob(chunks, { type: "text/html" }));
    update(src, { loaded, total: loaded, url });
    return url;
  } catch {
    update(src, { failed: true });
    return null;
  }
}

/** Starts (or joins) the download of one demo. */
export function preload(src: string, expected: number) {
  let job = jobs.get(src);
  if (!job) { job = download(src, expected); jobs.set(src, job); }
  return job;
}

/** Downloads every demo one after another once the page itself has finished loading. */
export function preloadInBackground(list: { src: string; bytes: number }[]) {
  const run = async () => { for (const d of list) await preload(d.src, d.bytes); };
  const start = () => setTimeout(run, 300);
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}
