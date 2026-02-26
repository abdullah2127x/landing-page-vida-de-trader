import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vida de Trader | Domine o Mercado Financeiro com Smart Money",
  description:
    "Aprenda a metodologia Smart Money com Emerson Somenzari. Desvende os segredos do mercado financeiro e viva a Vida de Trader.",
  keywords: [
    "trader",
    "smart money",
    "mercado financeiro",
    "trading",
    "curso trader",
    "vida de trader",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased`}>
         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>

        {children}
         </ThemeProvider>
      </body>
    </html>
  );
}
