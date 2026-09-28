import { MdOutlineAnalytics } from "react-icons/md";
import styles from "./DataScience.module.css";

export function DataScience() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconWrapper}>
        <MdOutlineAnalytics className={styles.icon} aria-hidden="true" />
      </div>

      <h3 className={styles.cardTitle}>Data Science & Analytics</h3>
      <p className={styles.cardDesc}>
        Transformação de dados brutos em inteligência de negócio e modelos preditivos.
      </p>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Tecnologias & Ferramentas</h4>
        <div className={styles.pillsGroup}>
          <span>Python</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>SQL</span>
          <span>Matplotlib</span>
          <span>Scikit-Learn</span>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Práticas & Conceitos</h4>
        <div className={styles.pillsGroup}>
          <span>Análise Exploratória (EDA)</span>
          <span>Limpeza de Dados</span>
          <span>Pipelines ETL</span>
          <span>Estatística</span>
        </div>
      </div>
    </div>
  );
}