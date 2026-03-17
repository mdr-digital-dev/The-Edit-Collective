import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-royal py-24 text-center">
      <h2 className="font-display text-4xl md:text-5xl text-cream">
        Ready to Elevate Your Brand?
      </h2>
      <Link
        href="/contact"
        className="inline-block mt-8 px-8 py-3 border-2 border-cream text-cream font-body uppercase tracking-widest text-sm hover:bg-cream hover:text-royal transition-all duration-300"
      >
        Let&rsquo;s Talk
      </Link>
    </section>
  );
}
