"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedFadeUp from "@/components/ui/AnimatedFadeUp";

const steps = [
  { number: "01", title: "Audit & Discover" },
  { number: "02", title: "Strategize" },
  { number: "03", title: "Build & Create" },
  { number: "04", title: "Launch & Optimize" },
];

export default function ProcessSection() {
  return (
    <section className="bg-cream-dark py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="How We Work" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <AnimatedFadeUp key={step.number} delay={index * 0.1}>
              <div className="pt-6 border-t-2 border-gold/30">
                <span className="font-display text-5xl text-royal/20">
                  {step.number}
                </span>
                <h3 className="font-heading text-xl text-charcoal mt-2">
                  {step.title}
                </h3>
              </div>
            </AnimatedFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
