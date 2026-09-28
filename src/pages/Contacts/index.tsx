import styles from "./styles.module.css";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de envio (EmailJS, Formspree ou fetch API)
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact_cards}>
        <div className={styles.contact_info}>
          <h2>Vamos conversar?</h2>
          <p>
            Envie uma mensagem para tirar dúvidas, contratar meus serviços ou
            deixar um feedback.
          </p>
        </div>

        <div className={styles.contact_form}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.contact_inputs}>
              <div className={styles.card_input}>
                <label htmlFor="name">Seu nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Digite seu nome"
                />
              </div>

              <div className={styles.card_input}>
                <label htmlFor="email">Seu email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Digite seu email"
                />
              </div>
            </div>

            <div className={styles.contact_textarea}>
              <div className={styles.textarea_div}>
                <label htmlFor="message">Sua mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Fala comigo!"
                ></textarea>
              </div>

              <div className={styles.button_div}>
                <button type="submit" className={styles.button}>
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
