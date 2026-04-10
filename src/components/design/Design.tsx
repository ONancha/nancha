import styles from "./Design.module.css";

import { RiOrganizationChart } from "react-icons/ri";

export function Design() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.header}>
        <RiOrganizationChart className={styles.iconBack} />
        <h2>Designer</h2>
        <p>
          Valorizo código limpo, boas práticas e soluções construídas com
          clareza e propósito.
        </p>
      </div>
      <div className={styles.creationSection}>
        <p>Coisas que gosto de criar:</p>
        <p>Sites organizados, telas limpas e ideias que façam sentido.</p>
      </div>

      <div className={styles.processSection}>
        <p className={styles.processTitle}>Como as ideias começam pra mim:</p>
        <ul className={styles.processList}>
          <li>Papel e caneta</li>
          <li>Canva</li>
          <li>Café e foco</li>
        </ul>
      </div>
    </div>
  );
}
