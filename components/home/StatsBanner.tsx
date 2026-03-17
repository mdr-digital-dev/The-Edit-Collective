"use client";

import AnimatedFadeUp from "@/components/ui/AnimatedFadeUp";

const stats = [
  { label: "Built on Strategy", subLabel: "Performance-First Approach" },
  { label: "Rooted in Data", subLabel: "Tech & Finance DNA" },
  { label: "Driven by Story", subLabel: "Brand Narratives that Convert" },
];

export default function StatsBanner() {
  return (
    <section className="bg-warm-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedFadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-charcoal">
                  {stat.label}
                </p>
                <p className="font-body text-sm text-charcoal/60 mt-2 uppercase tracking-wider">
                  {stat.subLabel}
                </p>
              </div>
            ))}
          </div>
        </AnimatedFadeUp>
      </div>
    </section>
  );
}
