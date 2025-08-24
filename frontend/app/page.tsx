import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import ClientComponents from "@/components/landing/ClientComponents";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProblemSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <ClientComponents />
    </div>
  );
}
