import { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const hora = new Date().getHours();
    const saudacao =
      hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
    const texto = `${saudacao}! Sou o Nailson Rocha. Bora tirar esse projeto do papel?`;

    let index = 0;
    let timer: NodeJS.Timeout;

    const typeWriter = () => {
      if (index <= texto.length) {
        setPlaceholder(texto.slice(0, index));
        index++;
        timer = setTimeout(typeWriter, 60); // 60ms fica mais fluido
      }
    };

    typeWriter();

    return () => clearTimeout(timer);
  }, []);

  // Reseta o estado do botão após enviar com sucesso
  useEffect(() => {
    if (status === "sent") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mensagem.trim()) return;

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
        alert("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch {
      setStatus("idle");
      alert("Erro ao enviar mensagem. Verifique sua conexão.");
    }
  };

  return (
    <div className={styles.contactContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label htmlFor="mensagem" className={styles.srOnly}>
          Sua mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder={placeholder}
          className={styles.contactTextarea}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
          disabled={status === "sending"}
        />

        <div className={styles.contactButtonBox}>
          <button
            type="submit"
            className={styles.contactButton}
            disabled={status === "sending" || status === "sent"}
          >
            {status === "idle" && (
              <>
                Enviar{" "}
                <span className={styles.arrow} aria-hidden="true">
                  ➔
                </span>
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
