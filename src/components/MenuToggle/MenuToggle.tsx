import { useState } from "react";
import styles from "./MenuToggle.module.css";

export function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.toggleButton} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <nav className={styles.mainNav}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <a
                className={styles.menuLink}
                href="#trabalhos"
                onClick={closeMenu}
              >
                Trabalhos
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                className={styles.menuLink}
                href="#artigos"
                onClick={closeMenu}
              >
                Artigos
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                className={styles.menuLink}
                href="/nailson.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
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
            onClick={closeMenu}
          >
            nailsonrochadev@gmail.com
          </a>

          <a
            className={styles.contactLink}
            href="https://t.me/devnakito"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Telegram
          </a>
        </div>

        <nav className={styles.socialNav}>
          <ul className={styles.socialList}>
            <li>
              <a
                className={styles.socialLink}
                href="https://wa.me/5571996251971?text=Olá,%20Nakito!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                WA
              </a>
            </li>
            <li>
              <a
                className={styles.socialLink}
                href="https://x.com/nakitodev"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                TW
              </a>
            </li>
            <li>
              <a
                className={styles.socialLink}
                href="https://github.com/devnakito"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                GH
              </a>
            </li>
            <li>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/in/devnakito/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                LN
              </a>
            </li>
            <li>
              <a
                className={styles.socialLink}
                href="https://www.youtube.com/@DevNakito"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                YT
              </a>
            </li>
            <li>
              <a
                className={styles.socialLink}
                href="https://www.instagram.com/devnakito/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                IG
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
