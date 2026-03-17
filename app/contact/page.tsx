import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL, AGENCY_CITY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your brand. We'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Form */}
          <ContactForm />

          {/* Right — Info */}
          <div className="lg:pl-8">
            <h1 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Let&apos;s Build Something Together.
            </h1>
            <p className="font-body text-lg text-charcoal/70 mt-6">
              Tell us about your brand and what you&apos;re looking to achieve.
              We&apos;ll get back to you within 24 hours.
            </p>

            <div className="w-16 h-0.5 bg-gold my-8" />

            {/* Contact details */}
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-royal" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-body text-charcoal hover:text-royal transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <MapPin size={18} className="text-royal" />
              <span className="font-body text-charcoal/70">
                Based in {AGENCY_CITY} {/* TODO: Confirm city */}
              </span>
            </div>

            {/* Pitch */}
            <p className="font-body text-charcoal/70 leading-relaxed italic mt-8">
              We&apos;re a boutique collective. We take on a select number of
              clients to ensure every brand gets the attention it deserves. If
              you&apos;re serious about growth, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
