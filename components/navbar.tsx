"use client";

import { useState, useEffect } from "react";
import { BrandButton } from "@/components/brand-button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import ThemeToggleButton from "./ThemeToggleButton";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Conteúdo", href: "#modules" },
  { label: "O Curso", href: "#trade" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Programa", href: "#training" },
  { label: "Instrutor", href: "#instructor" },
  { label: "Depoimentos", href: "#quotes" },
  { label: "Investimento", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// Major links for desktop
const desktopLinks = [
  { label: "Início", href: "#hero" },
  { label: "Conteúdo", href: "#modules" },
  { label: "Instrutor", href: "#instructor" },
  { label: "Investimento", href: "#pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-low/90 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-gold/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center">
            <span className="text-2xl font-black text-gold group-hover:text-gold-light transition-colors">
              V
            </span>
            <div className="absolute inset-0 border-2 border-gold/30 rotate-45 scale-75 group-hover:scale-90 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase tracking-widest text-white">
              Vida de
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-gold">
              Trader
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Only 4) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {desktopLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white-muted transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggleButton />
          <BrandButton asChild className="px-6 rounded-lg">
            <a href="#pricing">Quero Começar</a>
          </BrandButton>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="text-white hover:text-gold transition-colors focus:outline-none p-2"
                aria-label="Menu"
              >
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-blue-low border-l border-gold/20 p-0 sm:max-w-xs focus:outline-none"
              showCloseButton={false}
            >
              <SheetHeader className="p-6 border-b border-gold/10 flex flex-row items-center justify-between">
                <SheetTitle className="text-left">
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-8 w-8 items-center justify-center">
                      <span className="text-xl font-black text-gold">V</span>
                      <div className="absolute inset-0 border-2 border-gold/30 rotate-45 scale-75" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-widest text-white">
                        Vida de
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gold">
                        Trader
                      </span>
                    </div>
                  </div>
                </SheetTitle>
                <SheetClose className="text-white-muted hover:text-gold transition-colors">
                  <X size={24} />
                </SheetClose>
              </SheetHeader>
              <div className="flex flex-col px-6 py-8 space-y-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-white-muted hover:text-gold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4">
                  <BrandButton
                    asChild
                    className="w-full text-midnight font-bold uppercase tracking-wide hover:opacity-90 transition-opacity rounded-lg"
                  >
                    <a href="#pricing" onClick={() => setIsOpen(false)}>
                      Quero Começar
                    </a>
                  </BrandButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
