export default function MarqueeTicker() {
  const tickerText =
    "Brand Strategy · Digital Marketing · SEO · Creative Direction · Social Media · Content · Web Design · ";

  return (
    <div className="bg-[#1A1A1A] py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-body uppercase tracking-[0.3em] text-sm text-[#C8A96E] px-4">
          {tickerText}
        </span>
        <span className="font-body uppercase tracking-[0.3em] text-sm text-[#C8A96E] px-4">
          {tickerText}
        </span>
      </div>
    </div>
  );
}
