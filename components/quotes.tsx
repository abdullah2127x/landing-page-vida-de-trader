"use client";
import Image from "next/image";

type Card =
  | {
      type: "horizontal";
      title: string;
      heading: string;
    }
  | {
      type: "vertical";
      name: string;
      avatar: string;
      quote1: string;
      quote2: string;
    };
export default function Quotes() {
  const cards: Card[] = [
    {
      type: "horizontal",
      title: "Aprendizado Prático",
      heading:
        "Treinamento focado em prática real de mercado e desenvolvimento psicológico.",
    },
    {
      type: "vertical",
      name: "Carlos Silva",
      avatar: "/images/instructor-side.png",
      quote1:
        "Antes do curso eu operava sem estratégia clara. Hoje tenho um plano estruturado e consigo controlar minhas emoções no mercado.",
      quote2:
        "A didática é incrível e o suporte realmente faz diferença. Recomendo para qualquer pessoa que queira consistência.",
    },
    {
      type: "vertical",
      name: "Mariana Costa",
      avatar: "/images/instructor-side.png",
      quote1:
        "Eu tinha medo de investir por falta de conhecimento. O curso me deu confiança para começar com segurança.",
      quote2:
        "Aprendi gestão de risco e leitura de mercado de forma prática e objetiva.",
    },
    {
      type: "horizontal",
      title: "Resultados Comprovados",
      heading:
        "Veja como nossos alunos estão alcançando consistência e confiança no mercado financeiro.",
    },
    {
      type: "vertical",
      name: "João Pereira",
      avatar: "/images/instructor-side.png",
      quote1: "A metodologia aplicada é simples, direta e eficiente.",
      quote2:
        "Em poucos meses já percebi uma grande evolução na minha forma de operar.",
    },
    {
      type: "horizontal",
      title: "Aprendizado Prático",
      heading:
        "Treinamento focado em prática real de mercado e desenvolvimento psicológico.",
    },
    {
      type: "vertical",
      name: "Fernanda Lima",
      avatar: "/images/instructor-side.png",
      quote1:
        "Sempre quis entender como os profissionais operam. Agora tenho clareza nas minhas decisões.",
      quote2:
        "O conteúdo é direto ao ponto e aplicável desde o primeiro módulo.",
    },
    {
      type: "vertical",
      name: "Lucas Almeida",
      avatar: "/images/instructor-side.png",
      quote1: "O diferencial está na mentalidade ensinada durante o curso.",
      quote2: "Não é apenas técnica, é disciplina e estratégia.",
    },
    {
      type: "horizontal",
      title: "Mentoria Especializada",
      heading:
        "Acompanhamento próximo para acelerar seus resultados e corrigir erros rapidamente.",
    },
    {
      type: "vertical",
      name: "Patrícia Souza",
      avatar: "/images/instructor-side.png",
      quote1: "Eu não entendia nada sobre mercado financeiro antes.",
      quote2: "Hoje consigo analisar gráficos e tomar decisões com segurança.",
    },
    {
      type: "horizontal",
      title: "Transformação Real",
      heading:
        "Mais do que aprender a operar, você aprende a pensar como um trader profissional.",
    },
    {
      type: "vertical",
      name: "Rafael Mendes",
      avatar: "/images/instructor-side.png",
      quote1: "A clareza das aulas me surpreendeu positivamente.",
      quote2: "Tudo é explicado de forma prática e objetiva.",
    },
    {
      type: "vertical",
      name: "Beatriz Rocha",
      avatar: "/images/instructor-side.png",
      quote1: "O suporte ao aluno é rápido e eficiente.",
      quote2: "Isso fez toda diferença na minha evolução.",
    },
    {
      type: "horizontal",
      title: "Estratégia Validada",
      heading: "Método estruturado baseado em experiência real de mercado.",
    },
    {
      type: "vertical",
      name: "Thiago Martins",
      avatar: "/images/instructor-side.png",
      quote1: "Eu já tinha feito outros cursos, mas nenhum foi tão completo.",
      quote2: "Aqui aprendi a importância da consistência e gestão.",
    },
    {
      type: "horizontal",
      title: "Confiança Para Operar",
      heading:
        "Desenvolva segurança, técnica e mentalidade para atuar no mercado.",
    },
    {
      type: "vertical",
      name: "Camila Oliveira",
      avatar: "/images/instructor-side.png",
      quote1: "Hoje opero com muito mais tranquilidade e planejamento.",
      quote2: "O curso mudou totalmente minha visão sobre investimentos.",
    },
  ];

  return (
    <section
      id="quotes"
      className="relative w-full py-24 bg-blue-dark overflow-hidden"
    >
      {/* Container holding the 100vw sliding track */}
      <div className="w-full relative">
        {/* The 70px transparency fading on the left and right edges */}
        <div
          className="w-full flex gap-6 lg:gap-10 overflow-x-auto pb-12 pt-4 px-[70px] snap-x  snap-mandatory items-center"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            maskImage:
              "linear-gradient(to right, transparent, black 70px, black calc(100% - 70px), transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 70px, black calc(100% - 70px), transparent)",
          }}
        >
          {/* Mapped Cards Array (Horizontal & Vertical) */}
          {cards.map((c, idx) => {
            if (c.type === "vertical") {
              return (
                <div
                  key={idx}
                  className="w-[75vw] sm:w-[350px] h-auto min-h-[480px] shrink-0 snap-center rounded-xl bg-blue-dark border border-gold/10 hover:border-gold/30 p-8 sm:p-10 flex flex-col justify-between transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  <div className="space-y-6">
                    <p className="text-white-muted text-sm sm:text-[15px] leading-relaxed font-light">
                      {c.quote1}
                    </p>
                    <p className="text-white-muted text-sm sm:text-[15px] leading-relaxed font-light">
                      {c.quote2}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-10">
                    <div className="w-12 h-12 rounded-full bg-blue-low overflow-hidden relative shrink-0 border border-white-muted/20">
                      <Image
                        src={c.avatar!}
                        alt={c.name!}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white font-medium text-base">
                      {c.name}
                    </span>
                  </div>
                </div>
              );
            }

            if (c.type === "horizontal") {
              return (
                <div
                  key={idx}
                  className="w-[75vw] sm:w-[550px] h-auto min-h-[300px] shrink-0 snap-center rounded-xl bg-blue-dark border border-gold/10 hover:border-gold/30 p-8 sm:p-10 flex flex-col justify-center transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  <h3 className="text-gold text-lg md:text-xl font-medium mb-6 tracking-wide">
                    {c.title}
                  </h3>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {c.heading}
                  </h2>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* Hide scrollbar pseudo-element for webkit browsers */}
      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
