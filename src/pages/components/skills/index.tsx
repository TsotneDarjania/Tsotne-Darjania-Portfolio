import ComputerAnimation from "../computerAnimation";
import style from "./style.module.css";

export default function Skills() {
  return (
    <div id="skills" class={style.skills}>
      <div class={"custom-font-3 " + style.title}>Skills</div>
      <div class={style.content}>
        <div class={style.computerAnimation} data-aos="zoom-in-right">
          <ComputerAnimation height={550} width={450} />
        </div>

        <div class={style.textContent}>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/js-logo.png" alt="Javascript Logo" />
            <p>Javascript</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/ts-logo.png" alt="Typescript Logo" />
            <p>Typescript</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/node-logo.png" alt="Node JS Logo" />
            <p>Node JS</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/nestjs-logo.svg" alt="Node JS Logo" />
            <p>Nest JS</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/deno-logo.png" alt="Deno JS Logo" />
            <p>Deno</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/mongo-logo.png" alt="MongoDB Logo" />
            <p>Mongo DB</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/mysql-logo.png" alt="MySQL Logo" />
            <p>MySQL </p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/supabase-logo.png" alt="Supabase Logo" />
            <p>Supabase</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/react-logo.png" alt="React JS Logo" />
            <p>React</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/react-logo.png" alt="React JS Logo" />
            <p>React Native</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/solid-logo.svg" alt="Solid JS Logo" />
            <p>Solid JS</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/nextjs-logo.svg" alt="Next JS Logo" />
            <p>Next JS</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/pixijs-logo.png" alt="Pixi JS Logo" />
            <p>Pixi JS</p>
          </div>
          <div data-aos="flip-up" class={style.skillDiv + " custom-font-1"}>
            <img src="skills/phaser-logo.png" alt="Phaser JS Logo" />
            <p>Phaser JS</p>
          </div>
        </div>
      </div>

      <button
        onclick={() => {
          window.open("resume.pdf", "_blank");
        }}
        class={style.downloadButton + " custom-font-1"}
      >
        View My Resume.
      </button>
    </div>
  );
}
