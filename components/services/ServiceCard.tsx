import Link from "next/link";

interface ServiceCardProps {
  name: string;
  slug: string;
  tagline: string;
}

export default function ServiceCard({ name, slug, tagline }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="bg-cream-dark p-8 group cursor-pointer border border-transparent hover:border-gold hover:bg-royal transition-all duration-300">
        <h3 className="font-heading text-2xl text-charcoal group-hover:text-cream transition-colors">
          {name}
        </h3>
        <p className="font-body text-sm text-charcoal/70 group-hover:text-cream/70 mt-3 transition-colors">
          {tagline}
        </p>
        <span className="text-royal group-hover:text-cream text-sm uppercase tracking-wider font-body mt-4 block transition-colors">
          Learn More &rarr;
        </span>
      </div>
    </Link>
  );
}
