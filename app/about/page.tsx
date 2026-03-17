import { Metadata } from "next";
import { Target, Eye, Gem } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedFadeUp from "@/components/ui/AnimatedFadeUp";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A family agency with roots in technology, finance, and social media — built to bring brands to life in the digital age.",
};

const values = [
  {
    icon: Target,
    title: "Intentionality",
    description:
      "Every touchpoint is deliberate. We don't do filler — every decision serves the brand.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Strategy you can see and understand. No black boxes, no jargon walls.",
  },
  {
    icon: Gem,
    title: "Craft",
    description:
      "Excellence in execution, always. We sweat the details because the details are the brand.",
  },
];

const team = [
  { name: "Alex Morgan", title: "Founder & Creative Director" },
  { name: "Jordan Ellis", title: "Head of Strategy" },
  { name: "Casey Rivera", title: "Digital Marketing Lead" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-24 md:py-32 relative">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-royal" />
        <div className="max-w-7xl mx-auto px-6 pl-12">
          <AnimatedFadeUp>
            <h1 className="font-display text-5xl md:text-6xl text-charcoal">
              We Are The Edit Collective.
            </h1>
          </AnimatedFadeUp>
          <AnimatedFadeUp delay={0.15}>
            <p className="font-body text-lg text-charcoal/70 mt-6 max-w-2xl">
              A family agency with roots in technology, finance, and social media
              — built to bring brands to life in the digital age.
            </p>
          </AnimatedFadeUp>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-warm-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedFadeUp>
            <div className="space-y-6 font-body text-charcoal/80 leading-relaxed">
              <p>
                The Edit Collective was born from a belief that great brands
                aren&apos;t built by accident. They&apos;re curated,
                intentionally — at the intersection of strategy, aesthetics, and
                digital intelligence.
              </p>
              <p>
                With deep roots in technology and finance, we bring a
                data-driven, business-first lens to creative work.
              </p>
              <p>
                We&apos;re a family agency. That means we&apos;re invested in
                your brand the way you are. We move fast, think long-term, and
                treat every client like a founding partner.
              </p>
            </div>
          </AnimatedFadeUp>
          <AnimatedFadeUp delay={0.2}>
            <div className="bg-cream-dark aspect-square flex items-center justify-center">
              <span className="font-display text-8xl text-royal/10">TEC</span>
            </div>
          </AnimatedFadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24">
        <SectionHeading title="Our Values" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-7xl mx-auto px-6">
          {values.map((value, index) => (
            <AnimatedFadeUp key={value.title} delay={index * 0.1}>
              <div>
                <value.icon size={32} className="text-royal mb-4" />
                <h3 className="font-heading text-2xl mb-3">{value.title}</h3>
                <p className="font-body text-charcoal/70">
                  {value.description}
                </p>
              </div>
            </AnimatedFadeUp>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-warm-white py-24">
        <SectionHeading title="The Collective" />
        {/* TODO: Replace with actual team photos and bios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-7xl mx-auto px-6">
          {team.map((member, index) => (
            <AnimatedFadeUp key={member.name} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-charcoal/10 mx-auto mb-6" />
                <h3 className="font-heading text-xl">{member.name}</h3>
                <p className="font-body text-sm text-charcoal/60 mt-1">
                  {member.title}
                </p>
              </div>
            </AnimatedFadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedFadeUp>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">
              Want to work with a team that&apos;s as invested as you are?
            </h2>
          </AnimatedFadeUp>
          <AnimatedFadeUp delay={0.15}>
            <Button variant="primary" href="/contact">
              Start a Conversation
            </Button>
          </AnimatedFadeUp>
        </div>
      </section>
    </>
  );
}
