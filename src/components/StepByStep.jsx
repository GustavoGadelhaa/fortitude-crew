import { motion } from 'framer-motion';
import { steps } from '../constants';

const nodeVars = {
  hidden: { opacity: 0, x: -30 },
  show: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.5, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] },
  }),
};

const cardVars = {
  hidden: { opacity: 0, x: 30 },
  show: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.5, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function StepByStep() {
  return (
    <section id="como-funciona" className="steps">
      <div className="steps__inner">
        <span className="section-eyebrow">Processo</span>
        <h2 className="section-title">
          COMO <span className="accent">FUNCIONA</span>
        </h2>
        <p className="section-sub">
          Passo a passo para sua transformação
        </p>

        <div className="steps__track">
          {steps.map((s, i) => (
            <div key={s.num} className="steps__item">
              <motion.div
                className="steps__node"
                variants={nodeVars}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="steps__num">{s.num}</div>
                {i < steps.length - 1 && <div className="steps__connector" />}
              </motion.div>

              <motion.div
                className="steps__card"
                variants={cardVars}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <span className="steps__emoji">{s.emoji}</span>
                <h3 className="steps__title">{s.title}</h3>
                <p className="steps__desc">{s.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
