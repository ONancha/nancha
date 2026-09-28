import { MdOutlineWeb } from "react-icons/md";
import styles from "./Frontend.module.css";

export function Frontend() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconWrapper}>
        <MdOutlineWeb className={styles.icon} aria-hidden="true" />
      </div>

      <h3 className={styles.cardTitle}>Desenvolvimento Frontend</h3>
      <p className={styles.cardDesc}>
        Construção de interfaces modernas, responsivas e focadas na experiência do usuário.
      </p>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Linguagens & Frameworks</h4>
        <div className={styles.pillsGroup}>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Ferramentas & Ecossistema</h4>
        <div className={styles.pillsGroup}>
          <span>Git & GitHub</span>
          <span>Vite</span>
          <span>Bootstrap</span>
          <span>Vercel</span>
          <span>Docker</span>
        </div>
      </div>
    </div>
  );
}