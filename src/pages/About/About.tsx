import styles from "./About.module.css";
import profileImg from "../../assets/images/teste10-photoaidcom-cropped.jpg";

export function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>Sobre Mim</h2>

      <img
        src={profileImg}
        className={styles.profile}
        alt="Foto de perfil de Nailson Rocha"
      />

      <div className={styles.textContent}>
        <p>
          Minha base técnica como desenvolvedor Full Stack me deu o domínio
          necessário para construir aplicações completas, estruturar APIs e
          manipular bancos de dados com autonomia. Com essa bagagem consolidada,
          direciono meu foco para a Ciência de Dados, unindo engenharia de
          software e análise estatística.
        </p>

        <p>
          Essa transição me permite conectar o melhor dos dois mundos: sei como
          extrair, limpar e modelar grandes volumes de dados, mas também como
          transformar essas análises em microsserviços, dashboards e soluções
          prontas para integração em produtos de software em produção.
        </p>

        <p>
          Busco resolver problemas complexos gerando insights estratégicos a
          partir dos dados. Minha meta é aplicar visão analítica, aprendizado
          contínuo e boas práticas de código para entregar soluções inteligentes
          que tragam impacto real para os negócios.
        </p>
      </div>
    </section>
  );
}
