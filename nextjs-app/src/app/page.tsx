import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";
import WhyAISection from "@/components/WhyAISection";
import PlatformSection from "@/components/PlatformSection";
import ServicesSection from "@/components/ServicesSection";
import IntegrationSection from "@/components/IntegrationSection";
import ResultsSection from "@/components/ResultsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <VideoSection />
        <WhyAISection />
        <PlatformSection />
        <ServicesSection />
        <IntegrationSection />
        <ResultsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
