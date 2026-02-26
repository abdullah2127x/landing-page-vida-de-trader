"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, prefix: "+", label: "Alunos Formados Online", suffix: "" },
  {
    value: 150,
    prefix: "+",
    label: "Alunos Aprovados em Mesa Proprietária",
    suffix: "",
  },
  { value: 99, prefix: "", label: "Alunos Satisfeitos", suffix: "%" },
];

function AnimatedCounter({
  target,
  prefix,
  suffix,
  isVisible,
}: {
  target: number;
  prefix: string;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="text-5xl font-extrabold text-gold sm:text-6xl lg:text-7xl tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="relative py-20 bg-section-gradient" ref={ref}>
      {/* Top separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative flex flex-col items-center gap-3 rounded-xl border border-gold/20 bg-linear-to-r from-blue-dark to-blue-light/20 p-8 text-center transition-all duration-300 hover:border-gold/40 hover:bg-linear-to-r hover:from-blue-dark hover:to-blue-light"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <AnimatedCounter
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <p className="relative text-sm font-medium uppercase tracking-wider text-white-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom separator line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
