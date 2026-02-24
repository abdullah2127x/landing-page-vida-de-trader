import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background V Shape */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[40rem] font-black text-gold/[0.03] leading-none"
          aria-hidden="true"
        >
          V
        </span>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-sm text-gold">
              <span className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse" />
              Treinamento Smart Money
            </div>

            <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Desvende os{" "}
              <span className="text-gold-gradient">segredos</span>
              <br />
              do mercado{" "}
              <span className="text-gold-gradient">financeiro</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-slate-400 mx-auto lg:mx-0">
              Explore uma nova perspectiva do mercado financeiro através de
              conceitos revolucionários. Desenvolva habilidades de um trader
              profissional com a metodologia Smart Money.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gold-gradient text-midnight font-bold uppercase tracking-wide hover:opacity-90 transition-all hover:scale-105 px-8 py-6 text-base rounded-lg group"
              >
                <a href="#pricing">
                  Quero me tornar um trader
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50 px-8 py-6 text-base rounded-lg transition-all"
              >
                <a href="#about">Saiba mais</a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gold accent frame */}
              <div className="absolute -inset-4 border border-gold/20 rounded-2xl rotate-3 hidden lg:block" />
              <div className="absolute -inset-2 border border-gold/10 rounded-2xl -rotate-2 hidden lg:block" />

              <div className="relative overflow-hidden rounded-2xl gold-glow">
                <Image
                  src="/images/hero-trader.png"
                  alt="Trader profissional no mercado financeiro"
                  width={600}
                  height={700}
                  className="object-cover rounded-2xl"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
