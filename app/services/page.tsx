import { Metadata } from "next";
import { services } from "@/lib/services";
import ServiceCard from "@/components/services/ServiceCard";
import AnimatedFadeUp from "@/components/ui/AnimatedFadeUp";

export const metadata: Metadata = {
  title: "Services",
  description:
    "A complete suite of digital services designed to work individually or as a fully integrated strategy.",
};

export default function ServicesPage() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <AnimatedFadeUp>
            <h1 className="font-display text-5xl md:text-6xl text-charcoal">
              Everything Your Brand Needs. Nothing It Doesn&apos;t.
            </h1>
          </AnimatedFadeUp>
          <AnimatedFadeUp delay={0.15}>
            <p className="font-body text-lg text-charcoal/70 mt-6 max-w-2xl mx-auto">
              We offer a complete suite of digital services — each designed to
              work individually or as a fully integrated strategy.
            </p>
          </AnimatedFadeUp>
          <div className="w-16 h-0.5 bg-gold mx-auto my-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedFadeUp key={service.slug} delay={index * 0.05}>
              <ServiceCard
                name={service.name}
                slug={service.slug}
                tagline={service.tagline}
              />
            </AnimatedFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
