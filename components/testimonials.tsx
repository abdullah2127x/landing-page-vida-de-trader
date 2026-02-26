import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Fernandes",
    role: "Trader desde 2023",
    initials: "LF",
    rating: 5,
    text: "O treinamento SMD mudou completamente minha visão do mercado. Antes eu operava no escuro, hoje entendo cada movimento institucional. Aprovado em mesa proprietária em 3 meses!",
  },
  {
    name: "Ana Carolina",
    role: "Trader desde 2022",
    initials: "AC",
    rating: 5,
    text: "A didática do Emerson é incomparável. Ele transforma conceitos complexos em algo simples e aplicável. Meus resultados melhoraram drasticamente após o treinamento.",
  },
  {
    name: "Rafael Oliveira",
    role: "Trader desde 2024",
    initials: "RO",
    rating: 5,
    text: "O suporte é excepcional. Sempre que tenho dúvidas, a equipe responde rapidamente. O conteúdo sobre Smart Money é o mais completo que já encontrei no Brasil.",
  },
  {
    name: "Gabriela Santos",
    role: "Trader desde 2023",
    initials: "GS",
    rating: 5,
    text: "Investi no treinamento e o retorno veio muito antes do esperado. As aulas sobre blocos de ordens e liquidez foram um divisor de águas na minha operação.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Depoimentos
          </p>
          <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl lg:text-5xl">
            Descubra por que escolher{" "}
            <span className="text-gold-gradient">nosso treinamento</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white-muted">
            Veja o que nossos alunos têm a dizer sobre a transformação que o
            treinamento SMD trouxe para suas vidas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Card
              key={testimonial.name}
              className="group relative overflow-hidden border-gold/15 bg-blue-low hover:border-gold/30 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Quote watermark */}
              <Quote className="absolute top-4 right-4 h-10 w-10 text-gold/[0.06]" />

              <CardContent className="relative p-8 space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white-muted leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-2 border-t border-gold/10">
                  <Avatar className="h-12 w-12 border-2 border-gold/20">
                    <AvatarFallback className="bg-gold/10 text-gold font-bold text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gold/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
