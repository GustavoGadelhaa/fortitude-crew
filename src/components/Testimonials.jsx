import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = [
  {
    src: '/evolucao.png',
    label: '"O Gustavo entrou em um bulking longo sem acompanhamento durante um bom tempo, sem controle de qualidade alimentar, acabou ganhando mais peso do que o necessário, um erro comum.\n\nNosso trabalho foi corrigir isso com consistência: saímos de um quadro de obesidade, com alto percentual de gordura, para um físico mais ativo metabolicamente, com baixo percentual e, principalmente, sustentável.\n\nHoje ele mantém rotina, aproveita finais de semana, não abre mão do prazer em comer e, ainda assim, sustenta um físico estético, com abdômen aparente, boa performance e saúde física e mental em dia.\n\n(Seguimos inclusive no trabalho de implementar cada vez mais frutas e vegetais na dieta, isso que vem sendo um sucesso"',
    pos: 'center',
  },
  {
    src: '/evolucao3.png',
    label: '"O Luís é a prova de que genética sem direção não constrói um físico de alto nível.\n\nQuando chegou, estava com mais de 100kg, treinando sem estratégia e acumulando volume sem qualidade. Faltava desenvolvimento muscular e organização.\n\nO objetivo era competir. Em cerca de 4 meses, transformamos tudo: na pesagem subiu com 79kg — mais de 18kg reduzidos mantendo qualidade muscular.\n\nMelhoramos pontos negligenciados, principalmente glúteos e posteriores, trazendo equilíbrio e densidade. Nada disso veio de mágica. Veio de disciplina, constância e planejamento individualizado.\n\nResultado não é sobre ter genética boa. É sobre saber potencializar o que você já tem."',
    pos: 'center 30%',
  },
  {
    src: '/evolucao2.png',
    label: '"O trabalho com o Cadu vem sendo construído desde o início com foco total na preparação dele pra estreia nos palcos do fisiculturismo natural.\n\nAgora, faltando 7 semanas pra competição, a gente já tem um nível de condicionamento que permite testar estratégias de carb up e até trabalhar com mais calorias na dieta, mantendo ainda assim uma boa perda de gordura.\n\nEsse é um exemplo claro do que eu considero um bom trabalho: controle das variáveis, ajustes constantes, treino bem direcionado com correção de pontos fracos e, principalmente, disciplina por parte do aluno.\n\nEm nenhum momento foi necessário usar estratégia mirabolante. Fisiculturismo é isso: estratégia, consistência e planejamento bem feito."',
    pos: 'center',
  },
  {
    src: '/evoalucaofeminina.png',
    label: '"A Livia é uma paciente diabética tipo 1, então além do cuidado convencional, temos toda a atenção com o controle glicêmico.\n\nAo longo do processo, tivemos uma boa evolução na recomposição corporal. Em alguns momentos houve pequenas oscilações, que faz parte de um processo que não é linear, e seguimos ajustando tudo com calma e estratégia.\n\nHoje, o maior avanço está na base: estamos evoluindo na inclusão de frutas e vegetais, melhorando a qualidade da alimentação e a relação com a comida.\n\nResultado que vai além de estética: mais saúde, mais controle e um estilo de vida mais sustentável"',
    pos: 'center',
  },
];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const trackRef = useRef(null);
  const stepRef = useRef(0);

  const visibleCards = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, images.length - visibleCards);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const updateStep = useCallback(() => {
    if (trackRef.current) {
      const card = trackRef.current.children[0];
      if (card) {
        const style = getComputedStyle(trackRef.current);
        const gap = parseFloat(style.gap) || 24;
        stepRef.current = card.getBoundingClientRect().width + gap;
      }
    }
  }, []);

  useEffect(() => {
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, [updateStep]);

  const prev = () => setSlideIndex((i) => Math.max(i - 1, 0));
  const next = () => setSlideIndex((i) => Math.min(i + 1, maxIndex));

  const toggleAutoplay = () => {
    if (!swiperInstance) return;
    if (swiperInstance.autoplay.running) {
      swiperInstance.autoplay.stop();
    } else {
      swiperInstance.autoplay.start();
    }
  };

  const showArrows = images.length > visibleCards;

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
          <>
            <span className="testimonials__swipe-hint">⟵ Role para o lado ⟶</span>
            <Swiper
              modules={[Autoplay]}
              onSwiper={setSwiperInstance}
              loop={true}
              speed={600}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: false }}
              className="testimonials__swiper"
            >
            {images.map((img) => (
              <SwiperSlide key={img.src} onClick={toggleAutoplay}>
                <div className="testimonials__card testimonials__card--mobile">
                  <div className="testimonials__img-wrapper">
                    <img src={img.src} alt="Evolução" className="testimonials__img" loading="lazy" style={{ objectPosition: img.pos }} />
                  </div>
                  <div className="testimonials__body">
                    <p className="testimonials__label">{img.label}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </>
        ) : (
          <div className="testimonials__carousel">
            {showArrows && (
              <button
                className="testimonials__arrow testimonials__arrow--left"
                onClick={prev}
                disabled={slideIndex === 0}
                aria-label="Anterior"
              >
                ‹
              </button>
            )}

            <div className="testimonials__viewport">
              <motion.div
                className="testimonials__track"
                ref={trackRef}
                animate={{ x: -(slideIndex * stepRef.current) }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {images.map((img) => (
                  <motion.div
                    key={img.src}
                    className="testimonials__card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    viewport={{ once: true }}
                  >
                    <div className="testimonials__img-wrapper">
                      <img src={img.src} alt="Evolução" className="testimonials__img" loading="lazy" style={{ objectPosition: img.pos }} />
                    </div>
                    <div className="testimonials__body">
                      <p className="testimonials__label">{img.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {showArrows && (
              <button
                className="testimonials__arrow testimonials__arrow--right"
                onClick={next}
                disabled={slideIndex >= maxIndex}
                aria-label="Próximo"
              >
                ›
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
