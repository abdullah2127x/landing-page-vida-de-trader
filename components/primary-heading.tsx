import React from "react";
import { cn } from "@/lib/utils";

interface PrimaryHeadingProps {
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function PrimaryHeading({
  title,
  subtitle,
  className,
}: PrimaryHeadingProps) {
  return (
    <div className={cn("text-center space-y-4 mb-16", className)}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
