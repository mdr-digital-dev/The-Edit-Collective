"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Creative Strategy",
    description:
      "Strategic frameworks that give your brand direction and purpose.",
    link: "/services/creative-strategy",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that reach, engage, and convert your audience.",
    link: "/services/seo",
  },
  {
    number: "03",
    title: "Brand Storytelling",
    description:
      "Narratives that connect your brand to the people who matter most.",
    link: "/services/content-creation",
  },
  {
    number: "04",
    title: "Web & Content",
    description:
      "Websites and content ecosystems built for performance and impact.",
    link: "/services/website-creation",
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Our Expertise
          </p>
          <h2 className="font-display italic font-semibold text-4xl md:text-5xl text-charcoal">
            What We Do
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-white p-8 border-l-4 border-gold group cursor-default transition-all duration-300 hover:bg-[#0857B4]"
            >
              <p className="font-body text-xs text-gold tracking-widest mb-3">
                {service.number}
              </p>
              <h3 className="font-display italic text-2xl text-charcoal group-hover:text-cream transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-sm text-charcoal/70 group-hover:text-cream/70 transition-colors mt-2">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="font-body text-xs uppercase tracking-widest text-royal group-hover:text-gold transition-colors mt-4 inline-block"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
