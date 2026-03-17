import Link from "next/link";

const featured = [
  {
    name: "SEO",
    tagline: "Get Found. Stay Found.",
    href: "/services/seo",
  },
  {
    name: "Social Media Strategy",
    tagline: "More Than Posts. A Platform Presence.",
    href: "/services/social-media",
  },
  {
    name: "Creative Strategy",
    tagline: "The Blueprint Behind Every Bold Brand Move.",
    href: "/services/creative-strategy",
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-royal py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((service) => (
            <div key={service.name} className="bg-cream p-8">
              <h3 className="font-heading text-2xl text-charcoal">
                {service.name}
              </h3>
              <p className="font-body text-sm text-charcoal/70 mt-2">
                {service.tagline}
              </p>
              <Link
                href={service.href}
                className="font-body text-royal uppercase tracking-wider text-sm mt-4 inline-block hover:text-royal-deep"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
