import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Experiencia.module.css";

export function Experiencia() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const trajetoria = [
    {
      titulo: "Santo Barbeiro",
      funcao: "Micro-empreendedor",
      data: "2018 - 2026",
      desc: "Gestão operacional de barbearia própria, com foco em atendimento personalizado, controle financeiro e execução de técnicas avançadas de visagismo e acabamento.",
    },
    {
      titulo: "Atualize Suporte Técnico",
      funcao: "Proprietário",
      data: "2017 - 2018",
      desc: "Serviços de manutenção avançada em smartphones e tablets. Diagnóstico de hardware, reparos em placas, substituição de componentes e otimização de sistemas Android e iOS.",
    },
    {
      titulo: "Barbearia Clênio Carvalho",
      funcao: "Barbeiro",
      data: "2016 - 2017",
      desc: "Execução de serviços de barbearia profissional com foco em alta produtividade. Atendimento direto ao público e aplicação de padrões rigorosos de higiene e estética.",
    },
    {
      titulo: "Diamantina Palace Hotel",
      funcao: "Recepcionista",
      data: "2014 - 2015",
      desc: "Atendimento bilíngue em recepção hoteleira. Coordenação de check-ins/check-outs, gestão de reservas via sistema e suporte direto ao hóspede em situações críticas.",
    },
    {
      titulo: "Polícia do Exército (PE)",
      funcao: "Praça do Exército",
      data: "2012 - 2013",
      desc: "Atuação como Soldado no Canil da PE. Atividades de vigilância estratégica, adestramento auxiliar, segurança de instalações e cumprimento de normas de disciplina e hierarquia.",
    },
    {
      titulo: "Daimarú Magazine",
      funcao: "Estagiário",
      data: "2009 - 2011",
      desc: "Suporte operacional no setor comercial. Controle de entrada e saída de mercadorias, organização de estoque, pesagem técnica e atendimento ao cliente.",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const firstCard = timelineRef.current.querySelector(
        `.${styles.timelineCard}`
      ) as HTMLElement;

      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 20; // Largura do card + gap
        timelineRef.current.scrollBy({
          left: direction === "left" ? -cardWidth : cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.experienciaDesc}>
        <h2 className={styles.title}>
          <span className={styles.titleDest}>Experiência</span> Profissional
        </h2>
        <p className={styles.introText}>
          "A vida me apresentou diferentes caminhos e eu fiz questão de
          aproveitar cada um deles. O que para alguns talvez seja perda de
          tempo, eu chamo de conhecimento. Lembro que eu não entendia o porquê
          mudava tanto de ambiente, cheguei a achar que tinha sérios problemas,
          mas são com os desafios da vida que aprendemos, e cada área me
          condecorou com uma habilidade fundamental para minha vida profissional
          e pessoal. Obrigado a todas as minhas lideranças por cada semente
          plantada que me possibilitou..."
        </p>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.timelineWrapper} ref={timelineRef}>
          {trajetoria.map((item, index) => (
            <div key={index} className={styles.timelineCard}>
              <span className={styles.dateExperience}>{item.data}</span>
              <div className={styles.content}>
                <h3>{item.titulo}</h3>
                <p className={styles.descFunc}>{item.funcao}</p>
                <p>{item.desc}</p>
              </div>
              <div className={styles.stepIndicator}>
                {index + 1} / {trajetoria.length}
              </div>
            </div>
          ))}
        </div>

        {/* BOTÕES POSICIONADOS LOGO ABAIXO DOS CARDS */}
        <div className={styles.controlsContainer}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => handleScroll("left")}
            aria-label="Experiência anterior"
          >
            <FiChevronLeft />
          </button>

          <button
            type="button"
            className={styles.navButton}
            onClick={() => handleScroll("right")}
            aria-label="Próxima experiência"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}