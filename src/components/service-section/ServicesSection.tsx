// components/services-section/ServicesSection.tsx
import styles from "./ServicesSection.module.css";
import { HiCheckBadge } from "react-icons/hi2";

export function ServicesSection() {
  return (
    <section className={styles.servicesWrapper}>
      <div>
        <p className={styles.servicesIntro}>
          Quer saber o que eu entrego? Confira as soluções logo abaixo.
        </p>
      </div>

      <div className={styles.servicesContainer}>
        <ul className={styles.servicesList}>
          <li className={styles.serviceItem}>
            <HiCheckBadge className={styles.serviceIcon} />
            Interfaces Modernas
          </li>

          <li className={styles.serviceItem}>
            <HiCheckBadge className={styles.serviceIcon} />
            Experiência Intuitiva
          </li>

          <li className={styles.serviceItem}>
            <HiCheckBadge className={styles.serviceIcon} />
            Sistemas Escaláveis
          </li>

          <li className={styles.serviceItem}>
            <HiCheckBadge className={styles.serviceIcon} />
            Alta Performance
          </li>

          <li className={styles.serviceItem}>
            <HiCheckBadge className={styles.serviceIcon} />
            Integração com APIs
          </li>
        </ul>
      </div>
    </section>
  );
}
