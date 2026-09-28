import styles from "./SectionHeading.module.css";
import logo from "../../assets/images/nakito.svg";
import { MenuToggle } from "../MenuToggle/MenuToggle";

type SectionHeadingProps = {
  imageSrc?: string;
  className?: string;
};

export function SectionHeading({
  imageSrc = logo,
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={`${styles.headingContainer} ${className}`.trim()}>
      <div className={styles.headingContent}>
        <div className={styles.imageWrapper}>
          <img
            src={imageSrc}
            className={styles.headingImage}
            alt="Logo Nailson"
          />
        </div>
        <nav aria-label="Navegação principal">
          <MenuToggle />
        </nav>
      </div>
    </header>
  );
}
