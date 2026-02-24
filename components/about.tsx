import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Droplets, ShieldAlert, BarChart3 } from "lucide-react";

const topics = [
  {
    icon: TrendingUp,
    title: "Movimentação do Preço",
    description:
      "Entenda a lógica por trás dos movimentos do preço e como identificar oportunidades reais de entrada.",
  },
  {
    icon: Droplets,
    title: "Liquidez",
    description:
      "Identifique as zonas de liquidez do mercado para antecipar movimentos institucionais.",
  },
  {
    icon: ShieldAlert,
    title: "Manipulação",
    description:
      "Reconheça as estruturas de manipulação do varejo e posicione-se como um profissional.",
  },
  {
    icon: BarChart3,
    title: "Gerenciamento Profissional",
    description:
      "Gerencie seus trades de forma profissional com planilhas e técnicas avançadas de gestão.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Treinamento SMD
          </p>
          <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl lg:text-5xl">
            O que é o{" "}
            <span className="text-gold-gradient">Treinamento SMD</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            O treinamento Smart Money Distribution é a metodologia que vai
            transformar sua visão sobre o mercado financeiro e te preparar para
            operar como um profissional.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Platform Image */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold/20 via-gold/5 to-gold/20 blur-sm group-hover:blur-md transition-all" />
            <div className="relative overflow-hidden rounded-2xl border border-gold/20">
              <Image
                src="/images/trading-platform.png"
                alt="Plataforma de trading com análise de mercado"
                width={700}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Topic Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((topic, i) => (
              <Card
                key={topic.title}
                className="group border-gold/15 bg-midnight-light/50 hover:border-gold/30 hover:bg-midnight-light transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                    <topic.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{topic.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
