const steps = [
  { number: "01", title: "Audit & Discover" },
  { number: "02", title: "Strategize" },
  { number: "03", title: "Build & Create" },
  { number: "04", title: "Launch & Optimize" },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#1A1A1A] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="font-display italic font-semibold text-4xl text-cream">
          How We Work
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-gold/30 pt-8">
              <span className="font-display text-6xl font-semibold text-[#0857B4]/40 leading-none block">
                {step.number}
              </span>
              <h3 className="font-display italic text-xl text-cream mt-2">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
