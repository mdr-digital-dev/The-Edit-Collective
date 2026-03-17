import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-[#0857B4] py-28 text-center">
      <h2 className="font-display italic font-semibold text-4xl md:text-5xl text-cream">
        Ready to Elevate Your Brand?
      </h2>
      <div className="mx-auto w-16 h-px bg-cream/30 my-8" />
      <Link
        href="/contact"
        className="font-body text-xs uppercase tracking-widest px-10 py-4 inline-block border border-cream text-cream hover:bg-cream hover:text-[#0857B4] transition-all duration-300"
      >
        Let&rsquo;s Talk
      </Link>
      <p className="font-body text-sm text-cream/40 mt-6">
        No retainers. No fluff. Just results.
      </p>
    </section>
  );
}
