import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p className={styles.footerCall}>Vamos criar algo incrível juntos?</p>
        <a
          href="mailto:nailsonrochadev@gmail.com"
          className={styles.footerEmail}
        >
          nailsonrochadev@gmail.com
        </a>
      </div>

      <hr className={styles.footerDivider} aria-hidden="true" />

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Nailson Rocha. Todos os direitos reservados.</p>
        <p className={styles.footerTech}>Feito com React & TypeScript</p>
      </div>
    </footer>
  );
}
