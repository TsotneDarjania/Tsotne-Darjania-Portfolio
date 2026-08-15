import { onMount } from "solid-js";

import { Navigation } from "./components/nav";
import { Hero } from "./components/hero";
import Skills from "./components/skills";
import Experience from "./components/experiece";
import Contact from "./components/cotact";
import Footer from "./components/footer";
import { Projects } from "./components/projects";

export default function HomePage() {
  onMount(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
