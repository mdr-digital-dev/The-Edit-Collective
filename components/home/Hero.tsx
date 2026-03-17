"use client";

import Button from "@/components/ui/Button";
import AnimatedFadeUp from "@/components/ui/AnimatedFadeUp";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
        {/* Left side */}
        <div className="bg-cream flex items-center px-8 md:px-16 py-24">
          <AnimatedFadeUp>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
              Where Strategy Becomes Identity.
            </h1>
            <p className="font-body text-lg text-charcoal/70 mt-6 max-w-lg">
              The Edit Collective is a boutique digital agency for brands that
              refuse to be ordinary. We build digital ecosystems rooted in
              technology, finance, and the art of storytelling.
            </p>
            <div className="flex gap-4 mt-8">
              <Button variant="primary" href="/contact">
                Work With Us
              </Button>
              <Button variant="secondary" href="/services">
                Our Services
              </Button>
            </div>
          </AnimatedFadeUp>
        </div>

        {/* Right side */}
        <div className="bg-cream-dark hidden lg:flex items-center justify-center min-h-[600px]">
          <div className="font-heading text-xl text-charcoal/20">
            Editorial Image
          </div>
        </div>
      </div>
    </section>
  );
}
