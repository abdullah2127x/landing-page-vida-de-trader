import { Separator } from "@/components/ui/separator";
import { Instagram, Youtube, Send } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Send, href: "#", label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-blue-low">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          {/* Logo */}
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

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-white-muted hover:border-gold/50 hover:text-gold hover:bg-gold/5 transition-all"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-gold/10" />

        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <p className="text-sm text-white-muted">
            Copyright © Vida de Trader {new Date().getFullYear()} — Todos
            os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-white-muted">
            <a href="#" className="hover:text-gold transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
