import { onMount, type Component } from "solid-js";
import AOS from "aos";

import styles from "./App.module.css";
import HomePage from "./pages/homepage";
import "aos/dist/aos.css"; // Import AOS styles

const App: Component = () => {
  onMount(() => {
    AOS.init({
      duration: 800, // optional: sets animation duration
      once: true, // optional: only animate once
    });
  });

  return (
    <div class={styles.App}>
      <HomePage />
    </div>
  );
};

export default App;
