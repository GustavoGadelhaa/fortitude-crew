import { motion } from 'framer-motion';
import Logo from './Logo';
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
        <motion.div {...fadeUp(0)}>
          <Logo size={140} />
        </motion.div>

        <motion.div className="hero__divider" {...fadeUp(0.1)} />

        <motion.h1 className="hero__title" {...fadeUp(0.2)}>
          SUA EVOLUÇÃO <span className="accent">COMEÇA</span><br />
          COM DISCIPLINA
        </motion.h1>

        <motion.p className="hero__sub" {...fadeUp(0.3)}>
          Consultoria de nutrição e treinamento para resultados reais e sustentáveis.
          Método comprovado por atletas e alunos em todo o Brasil.
        </motion.p>

        <motion.div className="hero__actions" {...fadeUp(0.4)}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            QUERO TRANSFORMAR MEU CORPO
          </a>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            PRÉ-INSCREVA-SE
          </a>
          <a href="#equipe" className="btn btn--ghost">
            CONHEÇA A EQUIPE
          </a>
        </motion.div>


      </div>

      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Role</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
