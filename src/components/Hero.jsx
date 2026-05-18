import { motion } from 'framer-motion';
import { WHATSAPP_URL, FORM_URL } from '../constants';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay },
});

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__noise" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__content">
        <motion.h1 className="hero__title" {...fadeUp(0.1)}>
          SUA EVOLUÇÃO COMEÇA <span className="accent">AGORA</span>
        </motion.h1>

        <motion.p className="hero__sub" {...fadeUp(0.3)}>
          Consultoria de nutrição e treinamento para resultados reais e sustentáveis.
          Método comprovado por atletas e alunos em todo o Brasil.
        </motion.p>

        <motion.div className="hero__actions" {...fadeUp(0.4)}>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            PRÉ-INSCRIÇÃO
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.55)}>
          <img src="/logomelhorsemfundocortada.png" alt="Fortitude Crew" className="hero__logo-img" />
        </motion.div>

      </div>

    </section>
  );
}
