import { HiCheckBadge } from "react-icons/hi2";
import styles from "./ServicesSection.module.css";

const servicesList = [
  "Engenharia de Dados & ETL",
  "Modelagem de Bancos de Dados",
  "Pipelines e Automação",
  "APIs e Integrações Backend",
  "Monitoramento & DevOps",
];

export function ServicesSection() {
  return (
    <section className={styles.servicesWrapper}>
      <p className={styles.servicesIntro}>
        Quer saber o que eu entrego? Confira as soluções logo abaixo.
      </p>

      <ul className={styles.servicesList}>
        {servicesList.map((service, index) => (
          <li key={index} className={styles.serviceItem}>
            <HiCheckBadge className={styles.serviceIcon} aria-hidden="true" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}