// components/hero-content/HeroContent.tsx
import styles from "./HeroContent.module.css";

export function HeroContent() {
  return (
    <section className={styles.content}>
      <h1 className={styles.title}>
        Desenvolvedor <span className={styles.highlight}> front-end</span> & Web
        Design.
      </h1>

      <p className={styles.description}>
        Eu crio aplicações simples, dinâmicas e interativas, e adoro o que faço.
      </p>
    </section>
  );
}
