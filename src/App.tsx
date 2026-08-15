import { onCleanup, onMount, type Component } from "solid-js";

import HomePage from "./pages/homepage";
import { Intro } from "./pages/components/intro";
import { initParallax, initReveal, initSmoothScroll } from "./lib/fx";

const App: Component = () => {
  const disposers: Array<() => void> = [];

  onMount(() => {
    disposers.push(initParallax());
  });

  // Scroll reveals + smooth scrolling start only after the intro curtain
  // lifts, so the hero staggers in right as the page is uncovered.
  const onIntroDone = () => {
    disposers.push(initReveal(), initSmoothScroll());
  };

  onCleanup(() => disposers.forEach((fn) => fn()));

  return (
    <>
      <Intro onDone={onIntroDone} />
      <HomePage />
    </>
  );
};

export default App;
