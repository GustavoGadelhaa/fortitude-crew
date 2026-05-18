import { useState, useEffect, useRef, useCallback } from 'react';
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
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const lastXRef = useRef(0);
  const draggingRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const updateTransform = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
  }, []);

  const handlePointerDown = useCallback((e) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!draggingRef.current) return;
    const delta = e.clientX - lastXRef.current;
    posRef.current += delta;
    lastXRef.current = e.clientX;
    updateTransform();
  }, [updateTransform]);

  const handlePointerUp = useCallback(() => {
    draggingRef.current = false;
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const cardWidth = 280 + 16;
    const totalWidth = cardWidth * team.length;
    let lastTime = performance.now();

    const animate = (now) => {
      if (!draggingRef.current) {
        const delta = (now - lastTime) * 0.04;
        posRef.current -= delta;
        if (posRef.current <= -totalWidth) posRef.current += totalWidth;
        updateTransform();
      }
      lastTime = now;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isMobile, updateTransform, team.length]);

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
          <div className="team__marquee"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            style={{ touchAction: 'none' }}
          >
            <div className="team__marquee-track" ref={trackRef}>
              {[...team, ...team].map((p, i) => (
                <div key={`${p.name}-${i}`} className="team__card team__card--mobile">
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
