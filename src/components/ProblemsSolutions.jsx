import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const problems = [
  'Treinos padrão que qualquer um copia e cola',
  'Dietas genéricas que não levam em conta seus gostos',
  'Fazer tudo e mesmo assim não ver evolução',
  'Suporte demorado que te deixa mais perdido',
];

const solutions = [
  'Profissionais com experiência e qualificação',
  'Treino individualizado para o seu objetivo',
  'Dieta adaptada à sua rotina, realidade e alimentos favoritos',
  'Suporte ágil e eficiente',
  'Acompanhamento humanizado com foco em resultados sustentáveis',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

const itemR = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

function ListItem({ text, variant, bulletClass }) {
  return (
    <li className={variant}>
      <span className={bulletClass} />
      {text}
    </li>
  );
}

export default function ProblemsSolutions() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <section className="ps">
        <div className="ps__inner">
          <div className="ps__col">
            <div className="ps__col-header">
              <h3 className="ps__title ps__title--bad">CANSADO DE?</h3>
            </div>
            <div className="ps__list">
              {problems.map((p) => (
                <ListItem key={p} text={p} variant="ps__item ps__item--bad" bulletClass="ps__bullet ps__bullet--bad" />
              ))}
            </div>
          </div>

          <div className="ps__divider">
            <div className="ps__divider-line" />
            <span className="ps__divider-badge">VS</span>
            <div className="ps__divider-line" />
          </div>

          <div className="ps__col">
            <div className="ps__col-header">
              <h3 className="ps__title ps__title--good">AQUI VOCÊ <span className="accent">RECEBE</span></h3>
            </div>
            <div className="ps__list">
              {solutions.map((s) => (
                <ListItem key={s} text={s} variant="ps__item ps__item--good" bulletClass="ps__bullet ps__bullet--good" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ps">
      <div className="ps__inner">
        <motion.div
          className="ps__col"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="ps__col-header">
            <h3 className="ps__title ps__title--bad">CANSADO DE?</h3>
          </div>
          <div className="ps__list">
            {problems.map((p) => (
              <motion.li key={p} className="ps__item ps__item--bad" variants={item}>
                <span className="ps__bullet ps__bullet--bad" />
                {p}
              </motion.li>
            ))}
          </div>
        </motion.div>

        <div className="ps__divider">
          <div className="ps__divider-line" />
          <span className="ps__divider-badge">VS</span>
          <div className="ps__divider-line" />
        </div>

        <motion.div
          className="ps__col"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="ps__col-header">
            <h3 className="ps__title ps__title--good">AQUI VOCÊ <span className="accent">RECEBE</span></h3>
          </div>
          <div className="ps__list">
            {solutions.map((s) => (
              <motion.li key={s} className="ps__item ps__item--good" variants={itemR}>
                <span className="ps__bullet ps__bullet--good" />
                {s}
              </motion.li>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
