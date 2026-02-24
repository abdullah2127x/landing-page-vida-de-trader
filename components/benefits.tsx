import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Clock,
  Headphones,
  ArrowRight,
} from "lucide-react";

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
    <section id="benefits" className="relative py-24 lg:py-32 bg-section-gradient">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Vantagens
          </p>
          <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl lg:text-5xl">
            Benefícios do{" "}
            <span className="text-gold-gradient">Treinamento SMD</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Card
              key={benefit.title}
              className="group relative overflow-hidden border-gold/15 bg-midnight-light/50 hover:border-gold/40 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Top gold accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardContent className="p-8 space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gold">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50 px-10 py-6 text-base uppercase font-bold tracking-wide rounded-lg group transition-all"
          >
            <a href="#pricing">
              Quero ter acesso agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
