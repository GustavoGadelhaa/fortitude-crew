import { motion } from 'framer-motion';
import { team } from '../constants';

const cardVars = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function TeamSection() {
  return (
    <section id="equipe" className="team">
      <div className="team__inner">
        <span className="section-eyebrow">Quem vai te guiar</span>
        <h2 className="section-title">
          NOSSA <span className="accent">EQUIPE</span>
        </h2>
        <p className="section-sub">
          Profissionais qualificados para guiar sua transformação
        </p>

        <div className="team__grid">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              className="team__card"
              variants={cardVars}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="team__img-wrapper">
                <img src={p.img} alt={p.name} className="team__img" loading="lazy" />
              </div>
              <div className="team__body">
                <span className="team__tag">{p.role}</span>
                <h3 className="team__name">{p.name}</h3>
                <p className="team__desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
