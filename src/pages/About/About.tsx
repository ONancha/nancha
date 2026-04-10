import styles from "./About.module.css";

import Profile from "../../assets/images/teste10-photoaidcom-cropped.jpg";

export function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>Quem é Nakito?</h2>

      <div>
        <img src={Profile} className={styles.profile} alt="Foto de Nakito" />
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p>
            A tecnologia sempre esteve por perto, mas foi recentemente que ela
            deixou de ser um hobby para virar minha missão. Atualmente, curso
            <strong>
              {" "}
              Análise e Desenvolvimento de Sistemas na Gran Faculdade
            </strong>
            , onde mergulho fundo na arquitetura de sistemas para entregar
            soluções robustas.
          </p>

          <p>
            Meu codinome <strong>NakitoDEV</strong> carrega minha essência: a
            união do meu nome, Nailson, com o apelido carinhoso de infância que
            mainha me deu. Trago a resiliência no errar, a paciência na
            dificuldade e a verdade de quem sabe que, no fim do dia, um bom
            software se constrói com muito café e a teimosia de querer fazer
            sempre o melhor."
          </p>
        </div>
      </div>
    </section>
  );
}
