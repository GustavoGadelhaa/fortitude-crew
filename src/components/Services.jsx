import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';

const cardVars = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] },
  }),
};

const icons = [
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M32 8C24 8 12 16 12 28c0 8 6 14 12 18v10h16V46c6-4 12-10 12-18C52 16 40 8 32 8z" />
    <path d="M24 20c-2 2-4 6-4 10" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M40 20c2 2 4 6 4 10" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="22" r="2" fill="currentColor" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="12" r="6" />
    <path d="M20 60l4-20 8-8 8 8 4 20" />
    <path d="M28 32l-8-12" />
    <path d="M36 32l8-12" />
    <path d="M22 48h20" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="20" cy="20" r="10" />
    <circle cx="44" cy="20" r="10" />
    <path d="M32 38c-8 0-14 4-16 10h32c-2-6-8-10-16-10z" />
    <path d="M48 48l6 6m2-4l-4-4" strokeLinecap="round" />
  </svg>,
];

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);
  const angleRef = useRef(0);
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
      trackRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
    }
  }, []);

  const handlePointerDown = useCallback((e) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!draggingRef.current) return;
    const delta = (e.clientX - lastXRef.current) * 0.6;
    angleRef.current = (angleRef.current + delta) % 360;
    lastXRef.current = e.clientX;
    updateTransform();
  }, [updateTransform]);

  const handlePointerUp = useCallback(() => {
    draggingRef.current = false;
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    let lastTime = performance.now();
    const animate = (now) => {
      if (!draggingRef.current) {
        const delta = (now - lastTime) * 0.032;
        angleRef.current = (angleRef.current - delta) % 360;
        updateTransform();
      }
      lastTime = now;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isMobile, updateTransform]);

  return (
    <section id="servicos" className="services">
      <div className="services__inner">
        <span className="section-eyebrow">O que oferecemos</span>
        <h2 className="section-title">
          NOSSOS <span className="accent">SERVIÇOS</span>
        </h2>
        <p className="section-sub">
          Tudo que você precisa em um só lugar
        </p>

        {isMobile ? (
          <div className="services__carousel-3d"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            style={{ touchAction: 'none' }}
          >
            <div className="services__carousel-3d-track" ref={trackRef}>
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="services__card services__card--3d"
                  style={{ transform: `rotateY(${i * 120}deg) translateZ(80px)` }}
                >
                  <div className="services__card-line" />
                  <div className="services__icon-wrap">{icons[i]}</div>
                  <span className="services__badge">{s.badge}</span>
                  <h3 className="services__title">{s.title}</h3>
                  <p className="services__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="services__grid">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="services__card"
                variants={cardVars}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="services__card-line" />
                <div className="services__icon-wrap">{icons[i]}</div>
                <span className="services__badge">{s.badge}</span>
                <h3 className="services__title">{s.title}</h3>
                <p className="services__desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
