"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1800&h=1200&fit=crop&q=85"
        alt="The Edit Collective"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark gradient overlay — bottom-heavy so text reads clean */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-[#0d0d0d]/10" />

      {/* Content — anchored bottom left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-20 md:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="font-body text-[10px] tracking-[0.4em] text-white/50 uppercase mb-8">
            Boutique Digital Agency
          </p>

          {/* Headline */}
          <h1 className="font-display italic font-semibold text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(52px, 8vw, 110px)" }}>
            The Edit Your Brand<br />Has Been Waiting For.
          </h1>

          {/* Thin white rule */}
          <div className="w-12 h-px bg-white/30 my-8" />

          {/* Subtext + CTA row */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-8">
            <p className="font-body text-sm text-white/60 max-w-sm leading-relaxed">
              Strategy, storytelling, and digital ecosystems for brands that refuse to be ordinary.
            </p>
            <div className="flex items-center gap-8 shrink-0">
              <Link
                href="/contact"
                className="font-body text-xs tracking-[0.25em] uppercase text-white border border-white/30 px-7 py-3 hover:bg-white hover:text-[#0d0d0d] transition-all duration-300"
              >
                Start Your Edit
              </Link>
              <Link
                href="/work"
                className="font-body text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
              >
                Our Work →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2">
        <span className="font-body text-[9px] tracking-[0.3em] text-white/30 uppercase rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/20" />
      </div>
    </section>
  );
}
