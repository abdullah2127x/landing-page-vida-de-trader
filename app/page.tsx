import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import About from "@/components/about";
import Benefits from "@/components/benefits";
import Profession from "@/components/profession";
import Instructor from "@/components/instructor";
import Modules from "@/components/modules";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Trade from "@/components/trade";
import Features from "@/components/features";
import Training from "@/components/training";
import Quotes from "@/components/quotes";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <Profession />
        <Stats />
        <Trade />

        {/* extra */}
        <About />
        <Benefits />
        <Features />
        <Training />
        <Instructor />
        <Quotes />
        <Pricing />
        <Partners />
        <FAQ />


        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
