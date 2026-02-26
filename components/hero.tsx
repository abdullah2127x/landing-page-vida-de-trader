import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        {/* <div className="absolute inset-0 bg-midnight/70 sm:bg-midnight/60 bg-gradient-to-b from-transparent to-midnight" /> */}
      </div>

      {/* Ambient glow */}
      {/* <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none z-0" /> */}

      {/* <div className="relative bg-red-300 opacity-80 z-10 mx-auto max-w-5xl px-6 lg:px-8 w-full flex flex-col items-center justify-center">
        
        <div className="space-y-8 text-center max-w-4xl flex flex-col items-center">
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

          <p className="max-w-2xl text-lg leading-relaxed text-slate-300 mx-auto">
            Explore uma nova perspectiva do mercado financeiro através de
            conceitos revolucionários. Desenvolva habilidades de um trader
            profissional com a metodologia Smart Money.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row justify-center w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="bg-gold-gradient text-midnight font-bold uppercase tracking-wide hover:opacity-90 transition-all hover:scale-105 px-8 py-6 text-base rounded-lg group w-full sm:w-auto"
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
              className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50 px-8 py-6 text-base rounded-lg transition-all w-full sm:w-auto backdrop-blur-sm"
            >
              <a href="#about">Saiba mais</a>
            </Button>
          </div>
        </div>
      </div> */}
    </section>
  );
}
