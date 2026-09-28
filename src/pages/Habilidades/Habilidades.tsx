import { DataScience } from "../../components/datascience/DataScience";
import { Frontend } from "../../components/frontend/Frontend";
import { Design } from "../../components/design/Design";
import styles from "./Habilidades.module.css";

export function Habilidades() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsHeading}>
        <h2 className={styles.title}>Habilidades & Tecnologias</h2>
        <p className={styles.subtitle}>
          Conjunto de ferramentas e conceitos que aplico no desenvolvimento de software e análise de dados.
        </p>
      </div>

      <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
          <DataScience />
        </div>
        <div className={styles.skillCard}>
          <Frontend />
        </div>
        <div className={styles.skillCard}>
          <Design />
        </div>
      </div>
    </section>
  );
}