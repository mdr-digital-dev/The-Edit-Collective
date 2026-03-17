import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-cream py-24 text-center">
      <h2 className="font-display italic font-semibold text-4xl md:text-5xl text-charcoal">
        Ready to Elevate Your Brand?
      </h2>
      <div className="mx-auto w-20 h-px bg-gold my-8" />
      <Link
        href="/contact"
        className="bg-[#0857B4] text-cream font-body text-xs uppercase tracking-widest px-10 py-4 inline-block hover:bg-[#064499] transition-colors duration-300"
      >
        Let&rsquo;s Talk
      </Link>
      <p className="font-body text-sm text-charcoal/50 mt-6">
        No retainers. No fluff. Just results.
      </p>
    </section>
  );
}
