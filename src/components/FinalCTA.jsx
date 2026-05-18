import { motion } from 'framer-motion';
import { WHATSAPP_URL, FORM_URL } from '../constants';

export default function FinalCTA() {
  return (
    <section id="contato" className="cta">
      <span id="pre-inscricao" style={{ position: 'absolute', top: '-80px' }} />
      <div className="cta__bg" />

      <motion.div
        className="cta__content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className="cta__title">
          PRONTO PARA COMEÇAR SUA<br />
          <span className="accent">TRANSFORMAÇÃO?</span>
        </h2>
        <p className="cta__sub">
          Entre em contato agora e descubra como podemos te ajudar a alcançar seus objetivos.
        </p>
        <div className="cta__actions">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--large"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            FALAR COM A EQUIPE
          </motion.a>
          <motion.a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--large"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            PRÉ-INSCRIÇÃO
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
