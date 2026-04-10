import styles from "./style.module.css";

type ContainerProps = {
  children: React.ReactNode;
  className?: string; // adiciona suporte a className
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <div className={styles.container_conteudo}>{children}</div>
    </div>
  );
}
