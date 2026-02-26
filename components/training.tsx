"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const trainingModules = [
  {
    id: 1,
    subtitle: "INTRODUÇÃO A",
    title: "TEORIA DE DOW",
    description: "",
  },
  {
    id: 2,
    subtitle: "",
    title: "ESTRUTURAS DE MERCADO",
    description: "MÚLTIPLOS TIME FRAMES (SEGUIR O FLOW)",
  },
  {
    id: 3,
    subtitle: "",
    title: "BOS E CHOCH",
    description: "QUEBRA DE ESTRUTURA E MUDANÇA DE CARACTERÍSTICA",
  },
  {
    id: 4,
    subtitle: "",
    title: "BLOCOS DE ORDENS INSTITUCIONAIS",
    description: "ORDER BLOCK / BREAKER BLOCK",
  },
  {
    id: 5,
    subtitle: "",
    title: "DESEQUILIBRIO DO PREÇO",
    description: "(IMBALANCE / FVG)",
  },
  {
    id: 6,
    subtitle: "INTRODUÇÃO A",
    title: "WYCKOFF",
    description: "",
  },
];

export default function Training() {
  return (
    <section id="training" className="relative py-24 bg-[#0a0f1c] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white uppercase tracking-wide">
            CONTEÚDOS <span className="text-gold font-bold">DO TREINAMENTO</span>
          </h2>
        </div>

        {/* Custom Styles for Swiper Navigation & Pagination to match the design */}
        <style jsx global>{`
          .training-slider .swiper-button-next,
          .training-slider .swiper-button-prev {
            color: #EAB308; /* Gold */
            width: 25px;
            height: 25px;
            margin-top: -12px;
          }
          .training-slider .swiper-button-next::after,
          .training-slider .swiper-button-prev::after {
            font-size: 16px;
            font-weight: bold;
          }
          .training-slider .swiper-pagination-bullet {
            background: #ffffff;
            opacity: 0.2;
            width: 8px;
            height: 8px;
            transition: all 0.3s ease;
          }
          .training-slider .swiper-pagination-bullet-active {
            background: #ffffff;
            opacity: 1;
            transform: scale(1.2);
          }
          .training-slider .swiper-pagination {
            bottom: 0px !important;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: fit-content;
            left: 50% !important;
            transform: translateX(-50%);
          }
          /* Custom navigation positioning */
          .swiper-nav-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-top: 40px;
          }
          .training-slider {
            padding-bottom: 80px; /* Space for pagination */
          }
        `}</style>

        {/* Swiper Carousel */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={60}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="training-slider w-full"
        >
          {trainingModules.map((module) => (
            <SwiperSlide key={module.id} className="w-[280px]! sm:w-[320px]! transition-all duration-300">
              <div className="group relative w-full h-[320px] sm:h-[400px] bg-black/50 rounded-lg overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/training/image0.png"
                    alt={module.title}
                    fill
                    className="object-cover opacity-50 group-[.swiper-slide-active]:opacity-90 transition-opacity duration-300"
                  />
                  {/* Gradient overlay to ensure text is readable and match the dark aesthetic */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#020b1e]/90 via-[#020b1e]/60 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end text-center opacity-40 group-[.swiper-slide-active]:opacity-100 transition-opacity duration-300">
                  
                  {module.subtitle && (
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#a1a1aa] mb-1">
                      {module.subtitle}
                    </p>
                  )}
                  
                  <h3 className="text-xl font-bold uppercase tracking-wide text-gold mb-2 leading-tight">
                    {module.title}
                  </h3>
                  
                  {module.description && (
                    <p className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                      {module.description}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation and Pagination Wrapper */}
          <div className="swiper-nav-container">
            <div className="custom-prev cursor-pointer text-gold hover:text-white transition-colors">
              {/* Left Arrow */}
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L2 10L10 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="custom-pagination w-auto!"></div>
            
            <div className="custom-next cursor-pointer text-gold hover:text-white transition-colors">
              {/* Right Arrow */}
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L10 10L2 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </Swiper>

      </div>
    </section>
  );
}