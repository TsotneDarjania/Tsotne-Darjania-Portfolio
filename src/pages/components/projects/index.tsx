import style from "./style.module.css";

export function Projects() {
  return (
    <div id="projects" class={style.projects}>
      <div class={"custom-font-3 " + style.title}>Projects</div>

      <div data-aos="fade-up" data-aos-duration="3000" class={style.project}>
        <div class={style.projectIntro}>
          <img src="project-1.png" class={style.projectImage} alt="project" />
          <p class={style.projectText + " custom-font-1"}>
            <span class={style.projectTitle + " custom-font-3"}>
              Guacamole (Slot Game)
            </span>
            <br />
            Guacamole is a real-money slot game I worked on while developing
            games at Profai. Built with <strong>Phaser.js</strong>, the project
            focused on delivering smooth gameplay, dynamic animations, and a
            responsive user experience. I was responsible for implementing the
            core spin mechanic, including symbol logic, win detection, and
            payout flow. The project also involved optimizing performance for
            low-latency feedback and ensuring the game adhered to modern slot
            game patterns and standards.
          </p>
        </div>
        <div class={style.projectIndicators}>
          <button
            onclick={() => {
              window.open(
                "https://lobby.profairgames.com/slot/0d7fac03-18de-42d4-aeb1-adc0c5a7d762?demo=true"
              );
            }}
            class={style.gitHuButton + " custom-font-1"}
          >
            {" "}
            Live Link{" "}
          </button>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" class={style.project}>
        <div class={style.projectIntro}>
          <img src="project-2.png" class={style.projectImage} alt="project" />
          <p class={style.projectText + " custom-font-1"}>
            <span class={style.projectTitle + " custom-font-3"}>
              Marble Arena
            </span>
            <br />
            Marble Arena is a web-based 2D marble tournament simulator built
            with <strong>Phaser.js</strong>. The platform features real-time
            animated fixtures, live betting functionality, dynamic leaderboards,
            and an integrated YouTube channel with over <strong>6 000</strong>{" "}
            subscribers. I developed the full simulation engine, server-client
            data flow, and web interface, creating a scalable system that
            combines entertainment, competition, and community engagement.
          </p>
        </div>
        <div class={style.projectIndicators}>
          <button
            onclick={() => {
              window.open(
                "https://github.com/TsotneDarjania/marble-arena-production"
              );
            }}
            class={style.gitHuButton + " custom-font-1"}
          >
            GitHub
          </button>
          <button
            onclick={() => {
              window.open(
                "https://www.youtube.com/channel/UCZ_Ulx3qid6zZtcCLT7CFKQ"
              );
            }}
            class={style.gitHuButton + " custom-font-1"}
          >
            Youtube Channel
          </button>
          <button
            onclick={() => {
              window.open("https://m-arena.com");
            }}
            class={style.gitHuButton + " custom-font-1"}
          >
            {" "}
            Live Link{" "}
          </button>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" class={style.project}>
        <div class={style.projectIntro}>
          <img src="project-5.png" class={style.projectImage} alt="project" />
          <p class={style.projectText + " custom-font-1"}>
            <span class={style.projectTitle + " custom-font-3"}>
              Amazing Tours - Island Travel Website
            </span>
            <br />
            Created a full-featured website for <strong>Amazing Tours</strong>,
            a company offering premium island travel experiences. Using{" "}
            <strong>Framer</strong>, I built an intuitive and visually engaging
            platform where users can discover, explore, and book island
            adventures with ease.
          </p>
        </div>
        <div class={style.projectIndicators}>
          <button
            onclick={() => {
              window.open("https://www.amazingtours.is/");
            }}
            class={style.gitHuButton + " custom-font-1"}
          >
            Live Link
          </button>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" class={style.project}>
        <div class={style.projectIntro}>
          <img
            src="project-6.png"
            class={style.projectImage}
            alt="Penalty Game"
          />
          <p class={style.projectText + " custom-font-1"}>
            <span class={style.projectTitle + " custom-font-3"}>
              Penalty Game - Casino-Style Browser Game
            </span>
            <br />
            Developed a high-performance, browser-based penalty shootout game at{" "}
            <strong>Onaim</strong> using <strong>PixiJS</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>JavaScript</strong>.
            Designed with a modular architecture and responsive UI, the game
            features smooth animations and a real-time betting experience for
            casino platforms.
          </p>
        </div>
        <div class={style.projectIndicators}>
          <button
            onclick={() => {
              window.open("https://penalty-game-pi.vercel.app/"); // Replace with actual URL
            }}
            class={style.gitHuButton + " custom-font-1"}
          >
            Live Link
          </button>
          <button
            onclick={() => {
              window.open("https://github.com/TsotneDarjania/penalty-game");
            }}
            class={style.gitHuButton + " custom-font-1"}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
