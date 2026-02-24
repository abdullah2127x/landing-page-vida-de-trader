import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Shield,
  ArrowRight,
  Zap,
} from "lucide-react";

const features = [
  "Acesso vitalício a todas as aulas",
  "Grupo exclusivo de suporte no Telegram",
  "Mentorias mensais ao vivo",
  "Planilhas de gestão profissional",
  "Atualizações contínuas de conteúdo",
  "Certificado de conclusão digital",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-section-gradient">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Investimento
          </p>
          <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl lg:text-5xl">
            Investimento para viver uma{" "}
            <span className="text-gold-gradient">Vida de Trader</span>!
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto max-w-2xl">
          <Card className="relative overflow-hidden border-gold/30 bg-midnight-light/80 animate-glow-pulse">
            {/* Top gold accent bar */}
            <div className="h-1 bg-gold-gradient" />

            <CardContent className="p-10 lg:p-14 space-y-8 text-center">
              {/* Badge */}
              <Badge
                variant="outline"
                className="border-gold/30 text-gold bg-gold/5 text-sm px-4 py-1.5"
              >
                <Zap className="h-3.5 w-3.5 mr-1.5" />
                Oferta por tempo limitado
              </Badge>

              {/* Original Price */}
              <div className="space-y-2">
                <p className="text-lg text-slate-400">
                  De{" "}
                  <span className="line-through text-slate-500">
                    R$ 499,00
                  </span>
                </p>
                <p className="text-sm text-slate-400 uppercase tracking-wide">
                  por apenas
                </p>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-2xl font-bold text-gold">10x de</span>
                  <span className="text-6xl font-black text-gold sm:text-7xl">
                    R$ 34
                  </span>
                  <span className="text-2xl font-bold text-gold">,80</span>
                </div>
                <p className="text-base text-slate-400">
                  ou{" "}
                  <strong className="text-white">R$ 297,00</strong> à vista
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 text-left max-w-md mx-auto pt-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="w-full bg-gold-gradient text-midnight font-bold uppercase tracking-wider text-lg hover:opacity-90 transition-all hover:scale-[1.02] py-7 rounded-xl group"
              >
                <a href="#pricing">
                  Comprar agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              {/* Trust signal */}
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Shield className="h-4 w-4" />
                <span>Compra segura — 7 dias de garantia</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
