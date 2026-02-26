import { Star, GraduationCap, ThumbsUp, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { PrimaryHeading } from "./primary-heading";
import { BrandButton } from "./brand-button";

const features = [
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
    <section id="features" className="relative py-24 bg-blue-dark">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col items-center">
        <PrimaryHeading
          title={
            <>
              BENEFÍCIOS DO{" "}
              <span className="text-gold font-bold">TREINAMENTO SMD</span>
            </>
          }
        />

        {/* features List */}
        <div className="flex flex-col gap-6 w-full mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gold/40 hover:border-gold/80 bg-linear-to-l from-blue-low to-blue-dark p-6 sm:p-8 flex items-center gap-6 sm:gap-8 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-blue-low shadow-inner drop-shadow-md group-hover:bg-blue-low transition-colors">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base sm:text-lg font-bold text-gold">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-white-muted font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <BrandButton
          asChild
          brandVariant="outline"
          className="px-10 py-7 text-sm sm:text-base border-4 border-gold "
        >
          <a href="#pricing">
            QUERO TER ACESSO AGORA
            <ChevronRight
              className="ml-2 h-6 w-6 text-gold group-hover:translate-x-1 transition-transform"
              strokeWidth={7}
            />
          </a>
        </BrandButton> */}
        <BrandButton
          asChild
          brandVariant="outline"
          className="px-10 py-7 text-sm sm:text-base border-4 border-gold"
        >
          <a
            className="inline-flex items-center justify-center"
            href="#pricing"
          >
            QUERO TER ACESSO AGORA
            <ChevronRight
              className="ml-2 h-6 w-6 text-gold group-hover:translate-x-1 transition-transform"
              strokeWidth={7}
            />
          </a>
        </BrandButton>
      </div>
    </section>
  );
}
