"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Conteúdo", href: "#modules" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-midnight/95 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-gold/5"
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

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-gold-gradient text-midnight font-bold uppercase tracking-wide hover:opacity-90 transition-opacity px-6 rounded-lg"
          >
            <a href="#pricing">Quero Começar</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gold/10 bg-midnight/98 backdrop-blur-lg px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-base font-medium text-slate-300 hover:text-gold transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="w-full bg-gold-gradient text-midnight font-bold uppercase tracking-wide hover:opacity-90 transition-opacity rounded-lg mt-2"
          >
            <a href="#pricing" onClick={() => setIsMobileOpen(false)}>
              Quero Começar
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
