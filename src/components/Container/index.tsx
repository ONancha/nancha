import React from "react";
import styles from "./style.module.css";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  const containerClasses = `${styles.container} ${className}`.trim();

  return (
    <div className={containerClasses} {...props}>
      <div className={styles.container_conteudo}>{children}</div>
    </div>
  );
}
