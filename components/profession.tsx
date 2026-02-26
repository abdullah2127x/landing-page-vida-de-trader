import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Profession() {
  return (
    <section
      id="profession"
      className="relative min-h-[600px] flex items-center overflow-hidden py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/profession-bg.png"
          alt="Profession Background"
          fill
          className="object-cover object-center sm:object-right"
          priority
        />
        {/* Dark overlay for text readability on mobile/smaller screens */}
        <div className="absolute inset-x-0 bottom-0 h-[400px] bg-linear-to-t from-midnight via-midnight/80 to-transparent pointer-events-none lg:h-full lg:w-[60%] lg:bg-linear-to-r lg:from-midnight lg:via-midnight/80 lg:to-transparent z-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full flex flex-col justify-center">
        <div className="max-w-2xl space-y-8 text-left">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded border shadow-[0_0_15px_rgba(234,179,8,0.3)] border-gold/40 bg-gold/10">
              <span className="text-2xl font-black text-gold">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black leading-none tracking-widest text-white">
                VIDA DE
              </span>
              <span className="text-base mt-1 font-black leading-none tracking-widest text-gold">
                TRADER
              </span>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold uppercase text-gold sm:text-4xl lg:text-5xl leading-tight">
            Desvende os segredos <br className="hidden sm:block" />
            do mercado financeiro
          </h2>

          <p className="max-w-md text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Explore uma nova perspectiva do mercado financeiro através de
            conceitos revolucionários que desafiam as convenções tradicionais.
          </p>

          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gold-gradient text-midnight font-bold uppercase tracking-wide hover:opacity-90 transition-all hover:scale-105 px-8 py-7 text-sm sm:text-base rounded-md group"
            >
              <a href="#pricing">
                Quero Fazer Parte
                <ChevronRight
                  className="ml-2 h-6 w-6 font-black group-hover:translate-x-1 transition-transform"
                  strokeWidth={3}
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
