import { motion } from 'framer-motion';

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
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="testimonials">
      <div className="testimonials__inner">
        <span className="section-eyebrow">Resultados Reais</span>
        <h2 className="section-title">
          ANTES & <span className="accent">DEPOIS</span>
        </h2>
        <p className="section-sub">
          A evolução dos nossos alunos fala por si
        </p>

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
      </div>
    </section>
  );
}
