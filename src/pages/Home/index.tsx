import styles from "./styles.module.css";

import { ContactForm } from "../../components/contact-form/ContactForm";
import { HeroContent } from "../../components/hero-content/HeroContent";
import { ServicesSection } from "../../components/service-section/ServicesSection";

export function Home() {
  return (
    <section className={styles.home}>
      <div>
        <HeroContent />
      </div>

      <div>
        <ContactForm />
      </div>

      <div>
        <ServicesSection />
      </div>
    </section>
  );
}
