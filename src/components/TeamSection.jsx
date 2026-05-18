import { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const togglePause = () => setPaused((p) => !p);

  return (
    <section id="equipe" className="team">
      <div className="team__inner">
        <h2 className="section-title">
          NOSSA <span className="accent">EQUIPE</span>
        </h2>
        <p className="section-sub">
          Profissionais qualificados para guiar sua transformação
        </p>

        {isMobile ? (
          <div className="team__marquee">
            <div className={`team__marquee-track${paused ? ' team__marquee-track--paused' : ''}`}>
              {[...team, ...team].map((p, i) => (
                <div key={`${p.name}-${i}`} className="team__card team__card--mobile" onClick={togglePause}>
                  <div className="team__img-wrapper">
                    <img src={p.img} alt={p.name} className="team__img" loading="lazy" />
                  </div>
                  <div className="team__body">
                    <span className="team__tag">{p.role}</span>
                    <h3 className="team__name">{p.name}</h3>
                    {p.cred && <span className="team__cred">{p.cred}</span>}
                    <p className="team__desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="team__grid">
            {team.map((p, i) => (
              <motion.div
                key={p.name}
                className="team__card"
                variants={cardVars}
                custom={i}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.1 } }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="team__img-wrapper">
                  <img src={p.img} alt={p.name} className="team__img" loading="lazy" />
                </div>
                <div className="team__body">
                  <span className="team__tag">{p.role}</span>
                  <h3 className="team__name">{p.name}</h3>
                  {p.cred && <span className="team__cred">{p.cred}</span>}
                  <p className="team__desc">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
