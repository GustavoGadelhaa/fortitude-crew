import { motion } from 'framer-motion';

const problems = [
  'Treinos padrão que qualquer um copia e cola',
  'Dietas genéricas que não levam em conta seus gostos',
  'Fazer tudo e mesmo assim não ver evolução',
  'Suporte demorado que te deixa mais perdido',
];

const solutions = [
  'Profissionais formados e pós-graduados em Educação Física e Nutrição',
  'Treino individualizado para o seu objetivo',
  'Dieta adaptada à sua rotina, realidade e alimentos favoritos',
  'Suporte ágil pelo WhatsApp de segunda a segunda',
  'Acompanhamento humanizado com foco em resultados',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const itemR = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function ProblemsSolutions() {
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
            <svg className="ps__col-icon ps__col-icon--bad" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M15 9l-6 6M9 9l6 6" />
            </svg>
            <h3 className="ps__title">
              CANSADO DE?
            </h3>
          </div>
          <div className="ps__list">
            {problems.map((p) => (
              <motion.li key={p} className="ps__item ps__item--bad" variants={item}>
                <svg className="ps__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
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
            <svg className="ps__col-icon ps__col-icon--good" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <h3 className="ps__title">
              AQUI VOCÊ <span className="accent">RECEBE</span>
            </h3>
          </div>
          <div className="ps__list">
            {solutions.map((s) => (
              <motion.li key={s} className="ps__item ps__item--good" variants={itemR}>
                <svg className="ps__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {s}
              </motion.li>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
