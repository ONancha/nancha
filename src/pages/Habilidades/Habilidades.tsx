import { Design } from "../../components/design/Design";
import { Frontend } from "../../components/frontend/Frontend";
import styles from "./Habilidades.module.css";

export function Habilidades() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div>
        <Design />
      </div>
      <div>
        <Frontend />
      </div>
    </section>
  );
}
