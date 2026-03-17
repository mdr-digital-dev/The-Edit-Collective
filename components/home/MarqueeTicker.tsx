export default function MarqueeTicker() {
  const tickerText =
    "Strategy · Branding · SEO · Content · Social · Email · Digital Audit · Website Creation · ";

  return (
    <div className="bg-royal py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-body uppercase tracking-[0.25em] text-sm text-cream px-4">
          {tickerText}
        </span>
        <span className="font-body uppercase tracking-[0.25em] text-sm text-cream px-4">
          {tickerText}
        </span>
      </div>
    </div>
  );
}
