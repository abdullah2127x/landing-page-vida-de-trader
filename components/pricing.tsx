import Image from "next/image";
import { BrandButton } from "@/components/brand-button";
import { PrimaryHeading } from "@/components/primary-heading";
import { CheckCircle, Shield, ArrowRight } from "lucide-react";

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
    <section
      id="pricing"
      // className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center"
      className="relative py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-auto z-0">
        <Image
          src="/images/pricing-bg.png"
          alt="Pricing Background"
          fill
          className="object-cover"
        />
        {/* Soft dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-blue-dark/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        {/* <PrimaryHeading
          title={
            <>
              Investimento para viver uma{" "}
              <span className="text-gold">Vida de Trader</span>!
            </>
          }
          subtitle="Investimento"
        /> */}

        {/* Pricing Card */}
        <div className="mx-auto max-w-md lg:max-w-lg">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-blue-low/10 backdrop-blur-xs shadow-[0_0_50px_rgba(234,179,8,0.15)] flex flex-col p-6 sm:p-8 text-center">
            {/* Top gold accent glow inside the card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-transparent via-gold/80 to-transparent blur-[2px]" />

            <div className="space-y-10">
              {/* Pricing Information */}
              <div className="space-y-3">
                <p className="text-xl text-white-muted font-medium tracking-wide">
                  De{" "}
                  <span className="line-through text-white-muted">
                    R$ 499,00
                  </span>{" "}
                  por apenas
                </p>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-2xl font-bold text-gold">10x de</span>
                  <span className="text-6xl sm:text-7xl font-black text-gold tracking-tighter">
                    R$ 34
                  </span>
                  <span className="text-2xl font-bold text-gold">,80</span>
                </div>

                <p className="text-lg text-white-muted font-medium">
                  ou <strong className="text-white">R$ 297,00</strong> à vista
                </p>
              </div>

              {/* Distinguishing Divider */}
              <div className="h-px w-full bg-linear-to-r from-transparent via-slate-700 to-transparent" />

              {/* Features List */}
              <ul className="space-y-4 text-left max-w-sm mx-auto">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0" />
                    <span className="text-white-muted text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <div className="pt-4 space-y-4">
                <BrandButton asChild className="w-full text-xl py-8">
                  <a href="#pricing">
                    Quero garantir minha vaga
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                </BrandButton>

                {/* Trust signal */}
                <div className="flex items-center justify-center gap-2 text-sm text-white-muted font-medium">
                  <Shield className="h-5 w-5 text-gold/80" />
                  <span>Compra segura — 7 dias de garantia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
