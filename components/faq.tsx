import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrandButton } from "@/components/brand-button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { PrimaryHeading } from "@/components/primary-heading";

const questions = [
  {
    q: "O treinamento funciona para qualquer mercado?",
    a: "Sim! A metodologia Smart Money se aplica a qualquer mercado financeiro — Forex, Futuros, Ações e Criptomoedas. Os conceitos são universais e podem ser adaptados a diferentes ativos e timeframes.",
  },
  {
    q: "Preciso ter experiência prévia?",
    a: "Não! O treinamento foi desenhado tanto para iniciantes quanto para traders com experiência. Começamos dos fundamentos e avançamos até conceitos avançados de Smart Money de forma progressiva.",
  },
  {
    q: "Como funciona o treinamento?",
    a: "O treinamento é 100% online com vídeo-aulas gravadas na área de membros. Você pode assistir no seu ritmo, quando e onde quiser. Além disso, contamos com mentorias mensais ao vivo para tirar dúvidas.",
  },
  {
    q: "O conteúdo é gravado?",
    a: "Sim! Todas as aulas ficam permanentemente gravadas no painel do aluno. Você tem acesso vitalício para assistir quantas vezes precisar, sem limite de tempo.",
  },
  {
    q: "Como faço para acessar o treinamento?",
    a: "Após a confirmação do pagamento, você receberá um e-mail com os dados de acesso à área de membros. O acesso é imediato e você pode começar a estudar na hora.",
  },
  {
    q: "Existe alguma garantia?",
    a: "Sim! Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu investimento sem perguntas.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <PrimaryHeading
          title={
            <>
              Perguntas <span className="font-extrabold block">Frequentes</span>
            </>
          }
          // subtitle="Dúvidas Frequentes"
        />

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {questions.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-gold/75  rounded-xl px-6 bg-blue-low hover:border-gold transition-colors data-[state=open]:border-gold data-[state=open]:bg-blue-low"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-white-muted hover:text-gold transition-colors py-5 data-[state=open]:text-gold ">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-white-muted leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        
        <div className="mt-14 text-center">
          <BrandButton
  asChild
  brandVariant="outline"
  className="px-10 py-7 text-sm sm:text-base border-4 border-gold"
>
  <a className="inline-flex items-center justify-center" href="#pricing">
    Quero acessar o conteúdo
    <ChevronRight
      className="ml-2 h-6 w-6 text-gold group-hover:translate-x-1 transition-transform"
      strokeWidth={7}
    />
  </a>
</BrandButton>
        </div>
      </div>
    </section>
  );
}
