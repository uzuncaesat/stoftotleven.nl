import HeroSection from "@/components/home/HeroSection";
import DienstenSection from "@/components/home/DienstenSection";
import AboutHatish from "@/components/home/AboutHatish";
import ProjectenSection from "@/components/home/ProjectenSection";
import FAQSection from "@/components/home/FAQSection";
import CTABand from "@/components/home/CTABand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DienstenSection />
      <AboutHatish />
      <ProjectenSection />
      <FAQSection />
      <CTABand />
    </>
  );
}
