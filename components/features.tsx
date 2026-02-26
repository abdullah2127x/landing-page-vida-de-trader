import { Star, GraduationCap, ThumbsUp, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const benefits = [
  {
    icon: <Star className="h-6 w-6 text-gold fill-gold" />,
    title: "Conteúdo exclusivo",
    desc: "Nossa metodologia é exclusiva, desenvolvida para facilitar seu aprendizado e aprimoramento contínuo.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-gold" />,
    title: "Área de membros exclusiva",
    desc: "Área exclusiva para os alunos onde todos usam para tirar dúvidas.",
  },
  {
    icon: <ThumbsUp className="h-6 w-6 text-gold fill-gold" />,
    title: "Acesso vitalício ao conteúdo",
    desc: "As aulas estarão permanentemente gravadas no painel do aluno, para assistir sempre que preciso.",
  },
  {
    icon: <Headphones className="h-6 w-6 text-gold" />,
    title: "Suporte exclusivo",
    desc: "Suporte direto via Telegram e Whatsapp sem atendimento robotizado.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#0a0f1c]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white uppercase tracking-wide">
            BENEFÍCIOS DO <span className="text-gold font-bold">TREINAMENTO SMD</span>
          </h2>
        </div>

        {/* Benefits List */}
        <div className="flex flex-col gap-6 w-full mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gold/40 hover:border-gold/80 bg-gradient-to-r from-[#0d1428] to-[#0a0f1c] p-6 sm:p-8 flex items-center gap-6 sm:gap-8 transition-colors duration-300"
            >
              {/* Icon Container */}
              <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-[#050816] border border-[#1a233a] shadow-inner drop-shadow-md group-hover:bg-[#070b1e] transition-colors">
                {benefit.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base sm:text-lg font-bold text-gold">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-gold text-white bg-transparent hover:bg-gold/10 hover:text-white px-10 py-7 text-sm sm:text-base rounded-md uppercase tracking-wider font-light group transition-all"
        >
          <a href="#pricing">
            QUERO TER ACESSO AGORA
            <ChevronRight className="ml-2 h-5 w-5 text-gold group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </a>
        </Button>

      </div>
    </section>
  );
}
