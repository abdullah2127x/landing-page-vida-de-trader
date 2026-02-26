"use client";

import * as React from "react"; 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";

interface BrandButtonProps extends React.ComponentProps<typeof Button> {
  asChild?: boolean;
  glow?: boolean;
  brandVariant?: VariantProps<typeof Button>["variant"];
}

// const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(
//   (
//     {
//       className,
//       glow = false,
//       asChild = false,
//       brandVariant = "default",
//       ...props
//     },
//     ref,
//   ) => {
//     return (
//       <Button
//         ref={ref}
//         variant={brandVariant}
//         asChild={asChild}
//         className={cn(
//           "bg-gold font-bold uppercase tracking-wider rounded-xl transition-all hover:opacity-90 active:scale-95",
//           glow &&
//             "shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]",
//           className,
//         )}
//         {...props}
//       />
//     );
//   },
// );
// BrandButton.displayName = "BrandButton";



const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(
  (
    {
      className,
      glow = false,
      asChild = false,
      brandVariant = "default",
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        variant={brandVariant}
        asChild={asChild}
        className={cn(
          brandVariant === "default" &&
            "bg-gold text-black hover:bg-gold/90",

          glow &&
            "shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]",

          className
        )}
        {...props}
      />
    );
  },
);

export { BrandButton };