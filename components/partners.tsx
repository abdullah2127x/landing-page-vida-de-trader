export default function Partners() {
  return (
    <section
      id="partners"
      className="relative w-full bg-section-gradient py-20 flex items-center justify-center overflow-hidden"
    >
      <div className="mx-auto max-w-4xl w-full px-6">
        {/* Bordered Box */}
        <div className="rounded-2xl border border-gold/20 bg-blue-dark/60 backdrop-blur-sm py-12 sm:py-16 px-8 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.05)]">
          <h3 className="text-white text-xl sm:text-2xl font-medium mb-12 sm:mb-16 tracking-wide">
            Parceiros
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-24 lg:gap-32 w-full">
            {/* Kinetick Logo Recreation */}
            <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              {/* Arrow SVG */}
              <div className="flex -space-x-1.5 align-middle">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  className="opacity-40"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  className="opacity-70"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-2xl font-medium tracking-[0.2em] leading-none mb-1">
                  KINETICK
                </span>
                <span className="text-white-muted text-[9px] tracking-widest font-light italic leading-none">
                  fast market data. unfiltered
                </span>
              </div>
            </div>

            {/* NinjaTrader Logo Recreation */}
            <div className="opacity-90 hover:opacity-100 ">
              <span className="text-[#FF4500] text-2xl font-bold tracking-widest">
                NINJA<span className="font-semibold">TRADER</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
