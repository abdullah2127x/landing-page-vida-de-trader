import Image from "next/image";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Trader desde 2019 no mercado financeiro",
  "Especialista em Smart Money e Price Action",
  "Mais de 500 alunos formados com resultados",
  "Referência em didática e ensino acessível",
  "Aprovação de +150 alunos em mesas proprietárias",
];

export default function Instructor() {
  return (
    <section id="instructor" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            O Mentor
          </p>
          <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl lg:text-5xl">
            Quem é{" "}
            <span className="text-gold-gradient">Emerson Somenzari</span>?
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 blur-xl opacity-60" />
              <div className="relative overflow-hidden rounded-2xl border border-gold/20">
                <Image
                  src="/images/instructor.png"
                  alt="Emerson Somenzari — Trader e Mentor"
                  width={500}
                  height={600}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Emerson Somenzari é trader ativo no mercado financeiro desde 2019 e
              se destaca pela capacidade de ensinar a estratégia{" "}
              <strong className="text-gold">Smart Money</strong> de forma
              didática, acessível e facilmente compreensível.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Possui um profundo conhecimento do mercado financeiro, sendo
              reconhecido como referência quando o assunto é{" "}
              <strong className="text-gold">Smart Money Distribution</strong>.
              Sua metodologia já transformou a vida de centenas de traders.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 pt-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
