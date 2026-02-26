import Image from "next/image";

export default function Trade() {
  return (
    <section
      id="trade"
      className="relative py-24 lg:py-32 overflow-hidden bg-blue-dark"
    >
      {/* Background container restricted to the left side */}
      {/* <div className="absolute inset-y-0 left-0 w-full lg:w-[55%]">
        <div className="absolute inset-0 bg-[#020b1e]" />

        <div
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="absolute inset-0  bg-[radial-gradient(circle_at_center,rgba(10,35,90,0.6)_0%,rgba(2,11,30,0)_100%)] pointer-events-none" />

        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#01030a] to-transparent pointer-events-none hidden lg:block" />
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 flex-col-reverse lg:flex-row items-center">
          {/* Left Column - Image with Glow */}
          <div className="relative flex justify-center lg:justify-end w-full">
            {/* The deep blue/cyan Glow Effect behind the image, exactly like the reference */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-600/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-[500px] aspect-[4/3]">
              <Image
                src="/images/trade.png"
                alt="Gráfico de crescimento dourado"
                fill
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8 max-w-xl text-left">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-wide text-white uppercase">
              O QUE É O{" "}
              <span className="text-gold font-bold">TREINAMENTO SMD?</span>
            </h2>

            <div className="space-y-6 text-sm sm:text-base text-white-muted leading-relaxed font-light">
              <p>
                No{" "}
                <span className="text-gold font-semibold">
                  Treinamento Smart Money Descomplicado
                </span>
                , você vai aprender as estratégias dos investidores
                institucionais, permitindo que você{" "}
                <span className="text-gold font-semibold">
                  aprenda a tomar decisões financeiras como um profissional
                </span>
                .
              </p>

              <p>
                Seja parte de uma comunidade exclusiva que domina o mercado
                financeiro,{" "}
                <span className="text-gold font-semibold">
                  maximizando lucros e minimizando riscos
                </span>
                . Não perca a chance de transformar sua jornada e alcançar tão
                sonhada consistência. Junte-se a nós e comece sua jornada rumo
                ao topo do mundo financeiro hoje mesmo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
