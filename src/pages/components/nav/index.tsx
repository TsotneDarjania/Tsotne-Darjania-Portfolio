import { createSignal, onCleanup, onMount } from "solid-js";
import style from "./style.module.css";

export function Navigation() {
  let navigationRef: HTMLImageElement | undefined;

  let line1Ref: HTMLDivElement | undefined;
  let line2Ref: HTMLDivElement | undefined;
  let line3Ref: HTMLDivElement | undefined;

  let ulRef: HTMLUListElement | undefined;

  const handleScroll = () => {
    // Change the threshold value (e.g., 50) as per your design
    if (window.scrollY > 50) {
      navigationRef!.classList.add(style.scrolled);
    } else {
      navigationRef!.classList.remove(style.scrolled);
    }
  };

  // Set up the scroll event listener
  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return (
    <nav ref={navigationRef} class={style.nav}>
      {/* Hambuerger Menu */}
      <div
        onclick={() => {
          line1Ref!.classList.toggle(style.line1Active);
          line2Ref!.classList.toggle(style.line2Active);
          line3Ref!.classList.toggle(style.line3Active);

          ulRef!.classList.toggle(style.ulActive);
        }}
        class={style.hamburgerMenu}
      >
        <div ref={line1Ref} class={style.line1}></div>
        <div ref={line2Ref} class={style.line2}></div>
        <div ref={line3Ref} class={style.line3}></div>
      </div>

      <ul ref={ulRef} class={style.ul}>
        <button
          onclick={() => {
            line1Ref!.classList.toggle(style.line1Active);
            line2Ref!.classList.toggle(style.line2Active);
            line3Ref!.classList.toggle(style.line3Active);

            ulRef!.classList.remove(style.ulActive);
          }}
          class={style.menuButton + " custom-font-3"}
        >
          <a href="#skills">Skills</a>
        </button>
        <button
          onclick={() => {
            line1Ref!.classList.toggle(style.line1Active);
            line2Ref!.classList.toggle(style.line2Active);
            line3Ref!.classList.toggle(style.line3Active);

            ulRef!.classList.remove(style.ulActive);
          }}
          class={style.menuButton + " custom-font-3"}
        >
          <a href="#projects">Projects</a>
        </button>
        <button
          onclick={() => {
            line1Ref!.classList.toggle(style.line1Active);
            line2Ref!.classList.toggle(style.line2Active);
            line3Ref!.classList.toggle(style.line3Active);

            ulRef!.classList.remove(style.ulActive);
          }}
          class={style.menuButton + " custom-font-3"}
        >
          <a href="#experience"> Experience</a>
        </button>
        <button
          onclick={() => {
            line1Ref!.classList.toggle(style.line1Active);
            line2Ref!.classList.toggle(style.line2Active);
            line3Ref!.classList.toggle(style.line3Active);

            ulRef!.classList.remove(style.ulActive);
          }}
          class={style.menuButton + " custom-font-3"}
        >
          <a href="#contact">Contact</a>
        </button>
      </ul>
    </nav>
  );
}
