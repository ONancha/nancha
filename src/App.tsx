import { BrowserRouter } from "react-router-dom";

import styles from "./App.module.css";

import "../src/styles/global.css";
import "../src/styles/theme.css";

import { Home } from "./pages/Home";
import { Container } from "./components/Container";
import { SectionHeading } from "./components/section-heading/SectionHeading";
import { About } from "./pages/About/About";
import { Habilidades } from "./pages/Habilidades/Habilidades";

function App() {
  return (
    <BrowserRouter>
      <Container className={styles.homeSection}>
        <SectionHeading className={styles.homeHeading} />
        <Home />
      </Container>

      <Container className={styles.skillsSection}>
        <Habilidades />
      </Container>

      <Container className={styles.aboutSection}>
        <About />
      </Container>
    </BrowserRouter>
  );
}

export default App;
