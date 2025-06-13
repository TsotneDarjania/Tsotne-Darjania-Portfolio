import { onMount } from "solid-js";
import Contact from "./components/cotact";
import Experience from "./components/experiece";
import Footer from "./components/footer";
import { Projects } from "./components/projects";
import Skills from "./components/skills";
import style from "./style.module.css";
import { Hero } from "./components/hero";
import { Navigation } from "./components/nav";

export default function HomePage() {
  onMount(() => {
    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to top after rendering
    }, 100); // You can adjust the delay time if needed
  });

  return (
    <div class={style.homePage}>
      {/* Header */}
      <Navigation />
      {/* Hero */}
      <Hero />

      <div class={style.menuContent}>
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Experience */}
        <Experience />
        {/*  Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
