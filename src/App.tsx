import styles from "./App.module.css";

import "../src/styles/global.css";
import "../src/styles/theme.css";

import { Home } from "./pages/Home";
import { Container } from "./components/Container";
import { SectionHeading } from "./components/section-heading/SectionHeading";
import { About } from "./pages/About/About";
import { Habilidades } from "./pages/Habilidades/Habilidades";
import { Experiencia } from "./pages/Experiencia/Experiencia";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Container className={styles.homeSection}>
        <SectionHeading className={styles.homeHeading} />
        <Home />
      </Container>

      <Container className={styles.skillsSection}>
        <Habilidades />
      </Container>

      <Container className={styles.experienceSection}>
        <Experiencia />
      </Container>

      <Container className={styles.projectsSection}>
        <Projects />
      </Container>

      <Container className={styles.aboutSection}>
        <About />
      </Container>
      <Footer />
    </>
  );
}

export default App;
