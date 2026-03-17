"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left — Image with overlay quote */}
      <div className="relative min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=700&fit=crop&q=80"
          alt="The Edit Collective team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/60" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <blockquote className="font-display italic text-3xl text-white leading-relaxed text-center">
            &ldquo;We don&rsquo;t just run campaigns. We build brands that
            last.&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Right — About copy */}
      <div className="bg-cream p-12 md:p-16 flex flex-col justify-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
          Who We Are
        </p>
        <h2 className="font-display italic font-semibold text-3xl md:text-4xl text-charcoal mb-6">
          Strategy Meets Identity
        </h2>
        <p className="font-body text-charcoal/80 leading-relaxed">
          The Edit Collective was built at the intersection of technology,
          finance, and culture. Our team brings boardroom strategy to the
          digital world — translating data, insight, and creativity into
          brands that connect and convert.
        </p>
        <Link
          href="/about"
          className="font-body text-xs uppercase tracking-widest border border-charcoal text-charcoal px-7 py-3 mt-8 self-start hover:bg-charcoal hover:text-cream transition-all duration-300 inline-block"
        >
          Meet the Team
        </Link>
      </div>
    </section>
  );
}
