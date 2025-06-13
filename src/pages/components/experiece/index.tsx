import style from "./style.module.css";

export default function Experience() {
  return (
    <div id="experience" class={style.experience}>
      <div class={"custom-font-3 " + style.title}>Experience</div>
      <div class={style.content}>
        {/* Left */}
        <div data-aos="fade-right" class={style.work}>
          <div class={style.workLeftContent}>
            <img
              class={style.workImage}
              src="profairgames.jpg"
              alt="ProFairGames"
            />
            <h2 class={style.workTitle + " custom-font-1"}>Profair Games</h2>
            <p class={style.workData + " custom-font-1"}> 2018 - 2020 </p>

            <p class={style.workDescription + " custom-font-1"}>
              At Profair Game, I started as an intern and progressed to a
              JavaScript Developer role. I worked on a browser-based gambling
              game, utilizing Phaser.js and Three.js for game development. My
              responsibilities included developing dynamic game features,
              optimizing performance, and collaborating with a team to deliver
              engaging gaming experiences.
            </p>
            <p class={style.workPosition + " custom-font-1"}>
              Position: Javascript Developer
            </p>
            <p class={style.workTechnologies + " custom-font-1"}>
              Technologies: JavaScript, Phaser.js, Three.js, Node.js, Nest JS,
              MongoDB
            </p>
          </div>
        </div>

        {/* Right */}
        <div data-aos="fade-left" class={style.work}>
          <div class={style.workFakeRightContent}> </div>
          <div class={style.workRightContent}>
            <img class={style.workImage} src="digital.jpg" alt="ProFairGames" />
            <h2 class={style.workTitle + " custom-font-1"}>
              Digital Institute
            </h2>
            <p class={style.workData + " custom-font-1"}> 2020-2022 </p>
            <p class={style.workDescription + " custom-font-1"}>
              Digital Institute is a leading educational institution
              specializing in tech training. As an Instructor, I taught courses
              on Node.js, React, and Networking Basics. My role involved
              creating detailed curriculum, delivering lectures, and guiding
              students through practical projects to build their skills in these
              areas.
            </p>
            <p class={style.workPosition + " custom-font-1"}>
              Position: Instructor
            </p>
            <p class={style.workTechnologies + " custom-font-1"}>
              Technologies: Node.js, React, JavaScript, Networking Concepts
            </p>
          </div>
        </div>

        {/* Left */}
        <div data-aos="fade-right" class={style.work}>
          <div class={style.workLeftContent}>
            <img class={style.workImage} src="digido.jpg" alt="ProFairGames" />
            <h2 class={style.workTitle + " custom-font-1"}>DIGIDO</h2>
            <p class={style.workData + " custom-font-1"}> 2022 - 2024</p>

            <p class={style.workDescription + " custom-font-1"}>
              Digido is a company specializing in cutting-edge web development
              solutions. As a Web Developer, I worked on developing and
              maintaining websites using Next.js and Framer. My responsibilities
              included creating responsive web applications, optimizing
              performance, and ensuring a seamless user experience.
            </p>
            <p class={style.workPosition + " custom-font-1"}>
              Position: Web Developer
            </p>
            <p class={style.workTechnologies + " custom-font-1"}>
              Technologies: Node JS, Express JS, Next.js, Framer, TypeScript,
              Supabase
            </p>
          </div>
        </div>

        {/* Right */}
        <div data-aos="fade-left" class={style.work}>
          <div class={style.workFakeRightContent}> </div>
          <div class={style.workRightContent}>
            <img
              class={style.workImage}
              src="onaim_logo.jpg"
              alt="ProFairGames"
            />
            <h2 class={style.workTitle + " custom-font-1"}>OnAim</h2>
            <p class={style.workData + " custom-font-1"}> 2024 - Present</p>
            <p class={style.workDescription + " custom-font-1"}>
              Worked as a browser game developer at <strong>onAim</strong>,
              focusing on real-time web games using
              <strong> Phaser.js</strong>, <strong>PixiJS</strong>, and{" "}
              <strong>TypeScript</strong>. Built and optimized gameplay
              mechanics, interactive animations, and multiplayer systems for a
              variety of online games.
            </p>
            <p class={style.workPosition + " custom-font-1"}>
              Position: Game Developer
            </p>
            <p class={style.workTechnologies + " custom-font-1"}>
              Pixi JS, Phaser JS, JavaScript, TypeScript
            </p>
          </div>
        </div>
        {/* Dottes */}
        <div class={style.dottes}>
          {
            // Dottes
            Array.from({ length: 270 }, (_, i) => (
              <div class={style.dot} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
