// ContactForm/index.tsx
import { useEffect, useState } from "react";

import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const hora = new Date().getHours();

    let saudacao = "";

    if (hora < 12) {
      saudacao = "Bom dia";
    } else if (hora < 18) {
      saudacao = "Boa tarde";
    } else {
      saudacao = "Boa noite";
    }

    const texto = `${saudacao}! Eu sou Nakito. Transformo ideias em interfaces modernas, humanas e responsivas. Vamos tirar seu projeto do papel?`;

    let index = 0;

    const interval = setInterval(() => {
      setPlaceholder(texto.slice(0, index));
      index++;

      if (index > texto.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/movpgpye", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          mensagem,
          _subject: "Mensagem enviada pelo portfólio",
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setMensagem("");
      } else {
        setStatus("idle");
        alert("Erro ao enviar mensagem.");
      }
    } catch {
      setStatus("idle");
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <div className={styles.contactContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <textarea
          name="mensagem"
          placeholder={placeholder}
          className={styles.contactTextarea}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />

        <div className={styles.contactButtonBox}>
          <button
            type="submit"
            className={styles.contactButton}
            disabled={status === "sending"}
          >
            {status === "idle" && (
              <>
                Enviar <span className={styles.arrow}>➔</span>
              </>
            )}

            {status === "sending" && "Enviando..."}
            {status === "sent" && "Enviada ✓"}
          </button>
        </div>
      </form>
    </div>
  );
}
