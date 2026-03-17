import { Metadata } from "next";
import AnimatedFadeUp from "@/components/ui/AnimatedFadeUp";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A curated look at what we've built, launched, and transformed.",
};

const projects = [
  {
    name: "Meridian Financial",
    service: "Brand Strategy",
    description:
      "Complete brand identity and digital presence for a fintech startup.",
  },
  {
    name: "Lune Skincare",
    service: "Website Creation",
    description:
      "E-commerce platform designed for conversion and brand storytelling.",
  },
  {
    name: "Atlas Ventures",
    service: "SEO & Content",
    description:
      "Organic growth strategy that 3× monthly qualified traffic.",
  },
  {
    name: "Vero Coffee Co.",
    service: "Social Media",
    description:
      "Community-driven social strategy for an artisan coffee brand.",
  },
  {
    name: "Prism Architecture",
    service: "Creative Strategy",
    description:
      "Positioning and campaign strategy for a luxury design firm.",
  },
  {
    name: "Haven Wellness",
    service: "Digital Audit",
    description:
      "Full digital ecosystem audit and strategic roadmap.",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-charcoal">
            The Edit in Action.
          </h1>
          <p className="font-body text-lg text-charcoal/70 mt-6 max-w-2xl mx-auto">
            A curated look at what we&apos;ve built, launched, and transformed.
          </p>
        </div>
        <div className="w-16 h-0.5 bg-gold mx-auto my-12" />
      </section>

      {/* Project Grid */}
      <section className="bg-cream pb-16">
        {/* TODO: Replace with real case studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {projects.map((project, index) => (
            <AnimatedFadeUp key={project.name} delay={index * 0.1}>
              <div className="group relative overflow-hidden bg-cream-dark aspect-[4/3] cursor-pointer">
                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <h3 className="font-heading text-xl text-charcoal">
                    {project.name}
                  </h3>
                  <span className="font-body text-xs uppercase tracking-wider text-royal mt-2">
                    {project.service}
                  </span>
                  <p className="font-body text-sm text-charcoal/60 mt-3">
                    {project.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-royal/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-cream font-body uppercase tracking-wider text-sm">
                    View Project &rarr;
                  </span>
                </div>
              </div>
            </AnimatedFadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark py-24 text-center mt-16">
        <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">
          Have a project in mind? Let&apos;s build it.
        </h2>
        <Button variant="primary" href="/contact">
          Start a Project
        </Button>
      </section>
    </>
  );
}
