import styles from "./Frontend.module.css";

import { MdOutlineWeb } from "react-icons/md";

export function Frontend() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.header}>
        <MdOutlineWeb className={styles.iconFront} />
        <h2>Frontend</h2>
        <p>Acho massa transformar rabiscos em interfaces.</p>
      </div>
      <div className={styles.creationSection}>
        <p>Minhas tecnologias:</p>
        <p>HTML, CSS, JavaScript, React, Node, Express, Git</p>
      </div>

      <div className={styles.processSection}>
        <p className={styles.processTitle}>Ferramentas que utilizo:</p>
        <ul className={styles.processList}>
          <li>Bootstrap</li>
          <li>GitHub</li>
          <li>Vercel</li>
          <li>VS Code</li>
          <li>Docker</li>
          <li>Scrum</li>
        </ul>
      </div>
    </div>
  );
}
