export default function StatsBanner() {
  return (
    <section className="bg-[#FFF9E9] py-20 border-t border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col items-center text-center py-8 md:py-0 md:px-16">
            <span className="font-display italic font-semibold text-6xl text-charcoal leading-none">
              50+
            </span>
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/40 mt-3">
              Brands Served
            </span>
          </div>
          <div className="hidden md:block w-px bg-charcoal/10 h-16 self-center" />
          <div className="flex flex-col items-center text-center py-8 md:py-0 md:px-16">
            <span className="font-display italic font-semibold text-6xl text-charcoal leading-none">
              3 Yrs
            </span>
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/40 mt-3">
              Of Excellence
            </span>
          </div>
          <div className="hidden md:block w-px bg-charcoal/10 h-16 self-center" />
          <div className="flex flex-col items-center text-center py-8 md:py-0 md:px-16">
            <span className="font-display italic font-semibold text-6xl text-charcoal leading-none">
              100%
            </span>
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/40 mt-3">
              Client Dedication
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
