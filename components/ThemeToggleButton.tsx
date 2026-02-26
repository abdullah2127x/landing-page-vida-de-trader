"use client";

import { ThemeToggleButton } from "./ui/skiper-ui/skiper26";

export default function ThemeToggle() {
  return (
    <div className="flex items-center justify-center">
      <ThemeToggleButton variant="rectangle" start="bottom-up" className="size-8" />
    </div>
  );
}
