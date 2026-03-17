"use client";

import Button from "@/components/ui/Button";
import AnimatedFadeUp from "@/components/ui/AnimatedFadeUp";

export default function AboutTeaser() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
      {/* Left — Quote */}
      <div className="bg-royal p-12 md:p-16 flex items-center">
        <AnimatedFadeUp>
          <blockquote className="font-display text-3xl md:text-4xl text-cream italic leading-relaxed">
            &ldquo;We don&rsquo;t just run campaigns. We build brands that
            last.&rdquo;
          </blockquote>
        </AnimatedFadeUp>
      </div>

      {/* Right — About copy */}
      <div className="bg-cream p-12 md:p-16 flex flex-col justify-center">
        <AnimatedFadeUp>
          <p className="font-body text-charcoal/80 leading-relaxed">
            The Edit Collective was built at the intersection of technology,
            finance, and culture. Our team brings boardroom strategy to the
            digital world — translating data, insight, and creativity into
            brands that connect and convert.
          </p>
          <Button variant="secondary" href="/about" className="mt-8 self-start">
            Meet the Team
          </Button>
        </AnimatedFadeUp>
      </div>
    </section>
  );
}
