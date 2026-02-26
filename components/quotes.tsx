"use client";
import Image from "next/image";

export default function Quotes() {
  const cards = [
    {
      type: "horizontal",
    },
    {
      type: "vertical",
      name: "Aluno",
      avatar: "/images/instructor-side.png",
      quote1:
        "Participar do curso de trader fictício foi uma experiência transformadora para mim. Antes de ingressar, eu estava completamente perdido no mundo dos investimentos, sem entender como funcionavam as estratégias de mercado e com medo de arriscar meu dinheiro sem conhecimento adequado.",
      quote2:
        "Desde o primeiro dia de aula, percebi que estava no lugar certo. Os instrutores são extremamente capacitados e dedicados a transmitir seu conhecimento de uma forma clara e acessível. Aprendi conceitos que antes pareciam complexos de uma maneira simplificada e prática, o que me deu uma base sólida para começar a operar no mercado financeiro.",
    },
    {
      type: "horizontal",
    },
    {
      type: "vertical",
      name: "Aluno",
      avatar: "/images/instructor-side.png",
      quote1:
        "Participar do curso de trader fictício foi uma experiência transformadora para mim. Antes de ingressar, eu estava completamente perdido no mundo dos investimentos, sem entender como funcionavam as estratégias de mercado e com medo de arriscar meu dinheiro sem conhecimento adequado.",
      quote2:
        "Desde o primeiro dia de aula, percebi que estava no lugar certo. Os instrutores são extremamente capacitados e dedicados a transmitir seu conhecimento de uma forma clara e acessível. Aprendi conceitos que antes pareciam complexos de uma maneira simplificada e prática, o que me deu uma base sólida para começar a operar no mercado financeiro.",
    },
    {
      type: "horizontal",
    },
    {
      type: "vertical",
      name: "Aluno",
      avatar: "/images/instructor-side.png",
      quote1:
        "Participar do curso de trader fictício foi uma experiência transformadora para mim. Antes de ingressar, eu estava completamente perdido no mundo dos investimentos, sem entender como funcionavam as estratégias de mercado e com medo de arriscar meu dinheiro sem conhecimento adequado.",
      quote2:
        "Desde o primeiro dia de aula, percebi que estava no lugar certo. Os instrutores são extremamente capacitados e dedicados a transmitir seu conhecimento de uma forma clara e acessível. Aprendi conceitos que antes pareciam complexos de uma maneira simplificada e prática, o que me deu uma base sólida para começar a operar no mercado financeiro.",
    },
  ];

  return (
    <section
      id="quotes"
      className="relative w-full py-24 bg-[#01030a] overflow-hidden"
    >
      {/* Container holding the 100vw sliding track */}
      <div className="w-full relative">
        {/* The 70px transparency fading on the left and right edges */}
        <div
          className="w-full flex gap-6 lg:gap-10 overflow-x-auto pb-12 pt-4 px-[70px] snap-x snap-mandatory items-center"
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
                  className="w-[85vw] sm:w-[400px] h-auto min-h-[480px] shrink-0 snap-center rounded-xl bg-[#030614] border border-gold/10 hover:border-gold/30 p-8 sm:p-10 flex flex-col justify-between transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  <div className="space-y-6">
                    <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed font-light">
                      {c.quote1}
                    </p>
                    <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed font-light">
                      {c.quote2}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-10">
                    <div className="w-12 h-12 rounded-full bg-slate-800 overflow-hidden relative shrink-0 border border-slate-700">
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
                  className="w-[85vw] sm:w-[480px] h-auto min-h-[480px] shrink-0 snap-center rounded-xl bg-[#030614] border border-gold/10 hover:border-gold/30 p-8 sm:p-10 flex flex-col justify-center transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  <h3 className="text-gold text-lg md:text-xl font-medium mb-6 tracking-wide">
                    Depoimentos
                  </h3>
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight">
                    Descubra o por que escolher nosso treinamento é a melhor
                    opção pra você!
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
