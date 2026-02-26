import Image from "next/image";
import { PrimaryHeading } from "./primary-heading";

export default function Instructor() {
  return (
    <section
      id="instructor"
      className="relative w-full overflow-hidden bg-blue-dark flex items-center min-h-[500px] lg:min-h-[700px]"
    >
      {/* Background Image Container (Left Side) */}
      <div className="absolute top-0 left-0 w-full lg:w-[65%] h-full z-0">
        <Image
          src="/images/instructor-side.png"
          alt="Emerson Somenzari"
          fill
          priority
          className="object-cover object-top lg:object-top-left opacity-30 lg:opacity-100"
        />

        {/* Desktop Gradient: Blends the image horizontally into the dark background on the right */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent from-40% via-[#01030a]/80 via-80% to-[#01030a] to-100% hidden lg:block" />

        {/* Mobile Gradient: Blends the image vertically into the dark background at the bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-[#01030a] from-10% via-[#01030a]/60 via-40% to-transparent lg:hidden" />
      </div>

      {/* Content Container (Right Side) */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 flex justify-end">
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-20 lg:py-24">
          {/* Header */}
          {/* <PrimaryHeading
            title={
              <>
                QUEM É{" "}
                <span className="text-gold font-bold">EMERSON SOMENZARI?</span>
              </>
            }
          /> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white uppercase tracking-wide mb-8 drop-shadow-md">
            QUEM É{" "}
            <span className="text-gold font-bold">EMERSON SOMENZARI?</span>
          </h2>

          {/* Biography Text */}
          <div className="space-y-6 text-sm sm:text-base text-white-muted leading-relaxed font-light">
            <p>
              Desde 2019,{" "}
              <strong className="text-white font-semibold">
                Emerson Somenzari
              </strong>{" "}
              atua como trader e se destaca ao ensinar a estratégia Smart Money
              de forma didática, acessível e de fácil compreensão.
            </p>

            <p>
              Possui um profundo conhecimento do mercado financeiro, sendo
              reconhecido como uma referência quando o assunto é{" "}
              <strong className="text-white font-semibold">Smart Money</strong>.
            </p>

            <p>
              Sua perspectiva única dos gráficos foi aprimorada por meio de
              estudos e treinamentos com mentores dos{" "}
              <strong className="text-white font-semibold">
                Estados Unidos e Portugal
              </strong>
              , trazendo para o Brasil o que há de mais avançado na técnica,
              adaptando-a para uma abordagem simples e objetiva. Foi assim que
              surgiu o{" "}
              <strong className="text-white font-semibold">
                Treinamento Smart Money Descomplicado
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
