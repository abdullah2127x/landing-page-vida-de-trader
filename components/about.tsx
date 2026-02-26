import Image from "next/image";
import { PrimaryHeading } from "@/components/primary-heading";
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
        <PrimaryHeading
          title={
            <>
              O que é o{" "}
              <span className="text-gold-gradient">Treinamento SMD</span>?
            </>
          }
          subtitle="Treinamento SMD"
        />
        <p className="-mt-12 mb-16 mx-auto max-w-2xl text-lg text-white-muted leading-relaxed text-center">
          O treinamento Smart Money Distribution é a metodologia que vai
          transformar sua visão sobre o mercado financeiro e te preparar para
          operar como um profissional.
        </p>

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
                className="group border-gold/15 bg-blue-low hover:border-gold/30 hover:bg-blue-low transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                    <topic.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-white-muted leading-relaxed">
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
