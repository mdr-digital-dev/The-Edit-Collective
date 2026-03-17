"use client";

import Link from "next/link";
import { Lightbulb, BarChart3, BookOpen, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedFadeUp from "@/components/ui/AnimatedFadeUp";

const services = [
  {
    icon: <Lightbulb size={28} />,
    title: "Creative Strategy",
    description:
      "Strategic frameworks that give your brand direction and purpose.",
    link: "/services/creative-strategy",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that reach, engage, and convert your audience.",
    link: "/services/seo",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Brand Storytelling",
    description:
      "Narratives that connect your brand to the people who matter most.",
    link: "/services/content-creation",
  },
  {
    icon: <Globe size={28} />,
    title: "Web & Content",
    description:
      "Websites and content ecosystems built for performance and impact.",
    link: "/services/website-creation",
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="bg-warm-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="What We Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <AnimatedFadeUp key={service.title} delay={index * 0.1}>
              <div className="bg-cream-dark p-8 border border-transparent hover:border-gold transition-all duration-300">
                <div className="text-royal mb-4">{service.icon}</div>
                <h3 className="font-heading text-2xl text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-charcoal/70 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="font-body text-royal uppercase tracking-wider text-sm hover:text-royal-deep"
                >
                  Explore &rarr;
                </Link>
              </div>
            </AnimatedFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
