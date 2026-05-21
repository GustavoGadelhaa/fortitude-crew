import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = [
  {
    src: '/evolucao.png',
    label: '"O Gustavo entrou em um bulking longo sem acompanhamento durante um bom tempo, sem controle de qualidade alimentar, acabou ganhando mais peso do que o necessário, um erro comum.\n\nNosso trabalho foi corrigir isso com consistência: saímos de um quadro de obesidade, com alto percentual de gordura, para um físico mais ativo metabolicamente, com baixo percentual e, principalmente, sustentável.\n\nHoje ele mantém rotina, aproveita finais de semana, não abre mão do prazer em comer e, ainda assim, sustenta um físico estético, com abdômen aparente, boa performance e saúde física e mental em dia. (Seguimos inclusive no trabalho de implementar cada vez mais frutas e vegetais na dieta, isso que vem sendo um sucesso"',
  },
  {
    src: '/evolucao2.png',
    label: '"O trabalho com o Cadu vem sendo construído desde o início com foco total na preparação dele pra estreia nos palcos do fisiculturismo natural.\n\nAgora, faltando 7 semanas pra competição, a gente já tem um nível de condicionamento que permite testar estratégias de carb up e até trabalhar com mais calorias na dieta, mantendo ainda assim uma boa perda de gordura.\n\nEsse é um exemplo claro do que eu considero um bom trabalho: controle das variáveis, ajustes constantes, treino bem direcionado com correção de pontos fracos e, principalmente, disciplina por parte do aluno.\n\nEm nenhum momento foi necessário usar estratégia mirabolante. Fisiculturismo é isso: estratégia, consistência e planejamento bem feito."',
  },
  {
    src: '/evoalucaofeminina.png',
    label: '"A Livia é uma paciente diabética tipo 1, então além do cuidado convencional, temos toda a atenção com o controle glicêmico.\n\nAo longo do processo, tivemos uma boa evolução na recomposição corporal. Em alguns momentos houve pequenas oscilações, que faz parte de um processo que não é linear, e seguimos ajustando tudo com calma e estratégia.\n\nHoje, o maior avanço está na base: estamos evoluindo na inclusão de frutas e vegetais, melhorando a qualidade da alimentação e a relação com a comida.\n\nResultado que vai além de estética: mais saúde, mais controle e um estilo de vida mais sustentável"',
  },
  {
    src: '/evolucao3.png',
    label: '"O Luís é a prova de que genética sem direção não constrói um físico de alto nível.\n\nQuando ele chegou até mim, estava com mais de 100kg, treinando sem estratégia, comendo sem planejamento e acumulando volume sem qualidade. Apesar da estrutura absurda, faltava desenvolvimento muscular em pontos importantes e, principalmente, faltava organização.\n\nO objetivo dele era competir. E foi exatamente aí que começamos a construir tudo da forma certa.\n\nEm cerca de 4 meses de preparação, conseguimos transformar completamente o físico dele. Na pesagem da competição, ele subiu com 79kg, saindo de mais de 100kg no início do processo. Foram mais de 18kg reduzidos durante a preparação, mantendo qualidade muscular e elevando o nível do físico de forma absurda.\n\nAlém do condicionamento, conseguimos melhorar pontos que antes eram negligenciados, principalmente glúteos e posteriores, trazendo muito mais equilíbrio e densidade muscular.\n\nNada disso veio de mágica.\nVeio de disciplina, constância e um planejamento individualizado de treino, dieta e manipulação feito para a realidade dele.\n\nResultado não é sobre ter genética boa.\nÉ sobre saber potencializar aquilo que você já tem."',
  },
];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const toggleAutoplay = () => {
    if (!swiperInstance) return;
    if (swiperInstance.autoplay.running) {
      swiperInstance.autoplay.stop();
    } else {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <section id="depoimentos" className="testimonials">
      <div className="testimonials__inner">
        <span className="section-eyebrow">Resultados Reais</span>
        <h2 className="section-title">
          ANTES <span className="accent">E</span> DEPOIS
        </h2>
        <p className="section-sub">
          A evolução dos nossos alunos fala por si
        </p>

        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            onSwiper={setSwiperInstance}
            loop={true}
            speed={600}
            autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: false }}
            className="testimonials__swiper"
          >
            {images.map((img) => (
              <SwiperSlide key={img.src} onClick={toggleAutoplay}>
                <div className="testimonials__card testimonials__card--mobile">
                  <div className="testimonials__img-wrapper">
                    <img src={img.src} alt="Evolução" className="testimonials__img" loading="lazy" />
                  </div>
                  <div className="testimonials__body">
                    <p className="testimonials__label">{img.label}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <motion.div
            className="testimonials__grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {images.map((img) => (
              <motion.div
                key={img.src}
                className="testimonials__card"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
                }}
              >
                <div className="testimonials__img-wrapper">
                  <img src={img.src} alt="Evolução" className="testimonials__img" loading="lazy" />
                </div>
                <div className="testimonials__body">
                  <p className="testimonials__label">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
