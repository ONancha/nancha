import { useState } from "react";
import styles from "./MenuToggle.module.css";

export function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <nav className={styles.mainNav}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="">
                Trabalhos
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="">
                Artigos
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="">
                Currículo
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.contactSection}>
          <p className={styles.contactTitle}>DIGA OLÁ</p>
          <a
            className={styles.contactLink}
            href="mailto:nailsonrochadev@gmail.com?subject=Contato pelo portfólio&body=Olá Nailson, vi seu portfólio e gostaria de falar com você."
          >
            nailsonrochadev@gmail.com
          </a>

          <a className={styles.contactLink} href="">
            Telegram
          </a>
        </div>

        <nav className={styles.socialNav}>
          <ul className={styles.socialList}>
            <li>
              <a className={styles.socialLink} href="#">
                WA
              </a>
            </li>
            <li>
              <a className={styles.socialLink} href="#">
                TW
              </a>
            </li>
            <li>
              <a className={styles.socialLink} href="#">
                GH
              </a>
            </li>
            <li>
              <a className={styles.socialLink} href="#">
                LN
              </a>
            </li>
            <li>
              <a className={styles.socialLink} href="#">
                YT
              </a>
            </li>
            <li>
              <a className={styles.socialLink} href="#">
                IG
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
