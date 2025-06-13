import { createSignal, onCleanup, onMount } from "solid-js";

import style from "./style.module.css";

export function Hero() {
  return (
    <div class={style.hero}>
      <div class={style.content}>
        <div data-aos="fade-right" class={style.textContent}>
          <p class={style.heroTitle + " custom-font-1"}>
            Hi, I'm Tsotne - a full-stack JavaScript developer who likes
            building things that are fast, clean, and actually fun to use.
          </p>
          <p class={style.heroText + " custom-font-1"}>
            I've spent the past few years working on browser casino games, web
            apps, and interactive interfaces — handling both the visuals and the
            logic behind them. I enjoy projects where I get to solve real
            problems, work with real-time systems, and make everything feel
            smooth from start to finish.
          </p>
        </div>
        <img data-aos="fade-left" class={style.myImage} src="me.jpg" alt="" />
      </div>
    </div>
  );
}
