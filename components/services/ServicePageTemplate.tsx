import Link from "next/link";
import { Check } from "lucide-react";
import { Service, getRelatedServices } from "@/lib/services";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedFadeUp from "@/components/ui/AnimatedFadeUp";
import Button from "@/components/ui/Button";

interface ServicePageTemplateProps {
  service: Service;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const related = getRelatedServices(service.relatedSlugs);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedFadeUp>
            <h1 className="font-display text-5xl md:text-6xl text-charcoal">
              {service.name}
            </h1>
          </AnimatedFadeUp>
          <AnimatedFadeUp delay={0.15}>
            <p className="font-heading text-2xl text-charcoal/70 mt-4 italic">
              {service.tagline}
            </p>
          </AnimatedFadeUp>
          <div className="w-16 h-0.5 bg-gold mt-6" />
        </div>
      </section>

      {/* What It Is */}
      <section className="bg-warm-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <AnimatedFadeUp>
                <h2 className="font-display text-3xl text-charcoal">
                  What It Is
                </h2>
                <div className="w-16 h-0.5 bg-gold mt-4" />
                <p className="font-body text-lg text-charcoal/80 leading-relaxed mt-8">
                  {service.description}
                </p>
              </AnimatedFadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="What's Included" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {service.included.map((item, index) => (
              <AnimatedFadeUp key={index} delay={index * 0.05}>
                <div className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="text-royal flex-shrink-0 mt-1"
                  />
                  <span className="font-body text-charcoal/80">{item}</span>
                </div>
              </AnimatedFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-royal py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading title="Why It Matters" light={true} />
          <AnimatedFadeUp>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mt-8 leading-relaxed">
              {service.whyItMatters}
            </p>
          </AnimatedFadeUp>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="How We Approach It" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {service.approach.map((step, index) => (
              <AnimatedFadeUp key={index} delay={index * 0.1}>
                <div className="border-t-2 border-gold/30 pt-6">
                  <span className="font-display text-4xl text-royal/20">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading text-xl text-charcoal mt-2">
                    {step}
                  </h3>
                </div>
              </AnimatedFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedFadeUp>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal">
              Ready to get started?
            </h2>
          </AnimatedFadeUp>
          <AnimatedFadeUp delay={0.15}>
            <Button variant="primary" href="/contact" className="mt-8">
              Let&apos;s Talk
            </Button>
          </AnimatedFadeUp>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="bg-cream py-16">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="Related Services" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {related.map((r, index) => (
                <AnimatedFadeUp key={r.slug} delay={index * 0.1}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="block group"
                  >
                    <h3 className="font-heading text-xl text-charcoal group-hover:text-royal transition-colors">
                      {r.name}
                    </h3>
                    <p className="font-body text-sm text-charcoal/60 mt-1">
                      {r.tagline}
                    </p>
                  </Link>
                </AnimatedFadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
