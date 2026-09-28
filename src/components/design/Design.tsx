import { MdOutlineBrush } from "react-icons/md";
import styles from "./Design.module.css";

export function Design() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconWrapper}>
        <MdOutlineBrush className={styles.icon} aria-hidden="true" />
      </div>

      <h3 className={styles.cardTitle}>UI/UX & Web Design</h3>
      <p className={styles.cardDesc}>
        Concepção visual com foco em arquitetura limpa, clareza e usabilidade.
      </p>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>O que desenvolvo</h4>
        <div className={styles.pillsGroup}>
          <span>Design de Interfaces</span>
          <span>Prototipagem</span>
          <span>Layouts Responsivos</span>
          <span>Sistemas de Cores</span>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Processo & Ferramentas</h4>
        <div className={styles.pillsGroup}>
          <span>Wireframing</span>
          <span>Figma</span>
          <span>Canva</span>
          <span>Papel & Caneta</span>
        </div>
      </div>
    </div>
  );
}