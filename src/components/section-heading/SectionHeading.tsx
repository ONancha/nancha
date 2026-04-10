import styles from "./SectionHeading.module.css";

import logo from "../../assets/images/nakito.svg";
import { MenuToggle } from "../MenuToggle/MenuToggle";

type SectionHeadingProps = {
  imageSrc?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  imageSrc = logo,
  className,
}: SectionHeadingProps) {
  return (
    <section className={`${styles.headingContainer} ${className || ""}`}>
      <div className={styles.headingContent}>
        <div className={styles.imageWrapper}>
          <img
            src={imageSrc}
            className={styles.headingImage}
            alt="Nakito logo"
          />
        </div>
        <div>
          <MenuToggle />
        </div>
      </div>
    </section>
  );
}
