import { PrimaryHeading } from "@/components/primary-heading";
import { Card, CardContent } from "./ui/card";
import { BrandButton } from "./brand-button"; 
import { BookOpen, Users, Clock, Headphones, ArrowRight } from "lucide-react";


const benefits = [
  {
    icon: BookOpen,
    title: "Conteúdo exclusivo",
    description:
      "Módulos completos com vídeo-aulas gravadas e material de apoio exclusivo para sua evolução.",
  },
  {
    icon: Users,
    title: "Área de membros",
    description:
      "Acesse uma área exclusiva com todos os conteúdos organizados e prontos para estudo.",
  },
  {
    icon: Clock,
    title: "Acesso vitalício ao conteúdo",
    description:
      "As aulas estarão permanentemente gravadas no painel do aluno, para assistir sempre que precisar.",
  },
  {
    icon: Headphones,
    title: "Suporte exclusivo",
    description:
      "Suporte direto via Telegram e WhatsApp sem atendimento robotizado. Tire suas dúvidas com a equipe.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative py-24 lg:py-32 bg-section-gradient"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PrimaryHeading
          title={
            <>
              Benefícios do{" "}
              <span className="text-gold-gradient">Treinamento SMD</span>
            </>
          }
          subtitle="Vantagens"
        />

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Card
              key={benefit.title}
              className="group relative overflow-hidden border-gold/15 bg-blue-dark hover:border-gold/40 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Top gold accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardContent className="p-8 space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gold">{benefit.title}</h3>
                <p className="text-sm text-white-muted leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-14 text-center">
          <BrandButton
            asChild
            brandVariant="outline"
            className="px-10 py-6 text-base tracking-wide border-gold/40"
          >
            <a href="#pricing">
              Quero ter acesso agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </BrandButton>
        </div> */}
      </div>
    </section>
  );
}
