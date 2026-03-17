"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left — Blue panel */}
      <div className="bg-[#0857B4] flex flex-col justify-between px-10 md:px-16 py-20">
        {/* Top label */}
        <p className="font-body text-xs tracking-[0.3em] text-gold uppercase">
          Boutique Digital Agency
        </p>

        {/* Middle content */}
        <div>
          <h1 className="font-display italic font-semibold text-6xl md:text-7xl lg:text-8xl leading-none text-cream">
            The Edit Your Brand Has Been Waiting For.
          </h1>
          <div className="w-16 h-px bg-gold my-8" />
          <p className="font-body text-base text-cream/70 max-w-md">
            The Edit Collective is a boutique digital agency for brands that
            refuse to be ordinary. We build digital ecosystems rooted in
            technology, finance, and the art of storytelling.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <Link
              href="/contact"
              className="border border-gold text-gold px-7 py-3 font-body text-xs tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 inline-block"
            >
              Work With Us
            </Link>
            <Link
              href="/services"
              className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
            >
              Our Services →
            </Link>
          </div>
        </div>

        {/* Bottom stat line */}
        <p className="font-body text-xs text-cream/40 tracking-wider">
          50+ Brands · 3 Years · 100% Dedicated
        </p>
      </div>

      {/* Right — Image panel */}
      <div className="relative min-h-[50vh] lg:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&h=900&fit=crop&q=80"
          alt="The Edit Collective — boutique digital agency"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0857B4] via-transparent to-transparent" />
      </div>
    </section>
  );
}
