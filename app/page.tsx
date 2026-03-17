import Hero from "@/components/home/Hero";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import AboutTeaser from "@/components/home/AboutTeaser";
import ProcessSection from "@/components/home/ProcessSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import StatsBanner from "@/components/home/StatsBanner";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <ServicesSnapshot />
      <AboutTeaser />
      <ProcessSection />
      <FeaturedServices />
      <StatsBanner />
      <CTABanner />
    </>
  );
}
