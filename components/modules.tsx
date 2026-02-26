import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  ArrowUpDown,
  Layers,
  Scale,
  TrendingDown,
  Percent,
} from "lucide-react";

const modules = [
  {
    number: "01",
    icon: LineChart,
    title: "Estruturas de Mercado",
    description:
      "Aprenda a identificar e analisar as estruturas que o mercado cria antes de realizar movimentos significativos.",
  },
  {
    number: "02",
    icon: ArrowUpDown,
    title: "BOS e CHOCH",
    description:
      "Domine os conceitos de Break of Structure e Change of Character para operar reversões e continuações.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Blocos de Ordens",
    description:
      "Identifique order blocks institucionais e use-os como zonas de alta probabilidade de entrada.",
  },
  {
    number: "04",
    icon: Scale,
    title: "Desequilíbrio do Preço",
    description:
      "Compreenda os imbalances e fair value gaps para encontrar os melhores pontos de atuação.",
  },
  {
    number: "05",
    icon: TrendingDown,
    title: "Teoria de Dow",
    description:
      "Fundamentos da teoria de Dow aplicados ao contexto moderno do mercado financeiro.",
  },
  {
    number: "06",
    icon: Percent,
    title: "Premium e Discount",
    description:
      "Aprenda a identificar zonas de desconto para compra e zonas premium para venda com precisão.",
  },
];

export default function Modules() {
  return (
    <section id="modules" className="relative py-24 lg:py-32 bg-section-gradient">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Grade Curricular
          </p>
          <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl lg:text-5xl">
            Conteúdos do{" "}
            <span className="text-gold-gradient">Treinamento</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Cada módulo foi cuidadosamente elaborado para construir sua base de
            conhecimento de forma progressiva e prática.
          </p>
        </div>

        {/* Course Descriptions */}
        <div className="mx-auto max-w-5xl space-y-8 mb-16 text-left">
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-gold">
              Vida de Trader - Página de Vendas
            </h3>
            <p className="text-sm md:text-base text-white font-medium leading-relaxed">
              <span className="text-slate-300 font-bold">PT-BR |</span> Emerson Somenzari se destaca como trader, conhecido por sua habilidade em ensinar a estratégia Smart Money de forma clara e acessível. Com amplo conhecimento do mercado financeiro, ele é reconhecido como uma autoridade nesse campo.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-gold">
              Vida de Trader - Landing Page
            </h3>
            <p className="text-sm md:text-base text-white font-medium leading-relaxed">
              <span className="text-gold font-bold">EN |</span> Emerson Somenzari excels as a trader, renowned for his clear and accessible instruction on the Smart Money strategy. With deep expertise in the financial market, he's widely acknowledged as a top authority in this field.
            </p>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <Card
              key={mod.number}
              className="group relative overflow-hidden border-gold/15 bg-midnight-light/50 hover:border-gold/40 transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Module number watermark */}
              <span className="absolute top-4 right-4 text-6xl font-black text-gold/[0.06] select-none">
                {mod.number}
              </span>

              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                    <mod.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold/60">
                    Módulo {mod.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{mod.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {mod.description}
                </p>
              </CardContent>

              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
