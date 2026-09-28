import styles from "./Projects.module.css";

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Landing Page Barbearia",
    description:
      "Projeto focado em responsividade, semântica HTML e estilização moderna.",
    status: "EM MANUTENÇÃO",
  },
  {
    id: 2,
    title: "Dashboard Financeiro",
    description:
      "Interface construída para praticar componentização e organização visual.",
    status: "EM MANUTENÇÃO",
  },
  {
    id: 3,
    title: "Clone Interface Streaming",
    description:
      "Projeto desenvolvido para estudo de layout moderno e responsividade.",
    status: "EM MANUTENÇÃO",
  },
  {
    id: 4,
    title: "Sistema CRUD React",
    description:
      "Aplicação criada para prática de estados, renderização e componentes.",
    status: "EM MANUTENÇÃO",
  },
];

export function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsHeading}>
        <h2>Projetos</h2>
        <p>
          Alguns projetos estão passando por melhorias visuais, responsividade e
          deploy.
        </p>
      </div>

      <div className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            <span className={styles.projectStatus}>{project.status}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
