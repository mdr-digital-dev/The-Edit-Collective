import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { CONTACT_EMAIL, AGENCY_INSTAGRAM, AGENCY_LINKEDIN } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-cream-dark border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left — Logo & Tagline */}
        <div>
          <Link href="/" className="font-display text-xl text-charcoal">
            The Edit Collective
          </Link>
          <p className="font-heading text-lg italic text-charcoal/60 mt-2">
            Where strategy meets identity.
          </p>
        </div>

        {/* Center — Nav Links */}
        <div className="font-body text-sm space-y-3">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/work", label: "Work" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-charcoal/70 hover:text-royal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — Contact & Social */}
        <div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-body text-sm text-charcoal/70 hover:text-royal transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="flex gap-4 mt-4">
            <a
              href={AGENCY_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-charcoal/50 hover:text-royal transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href={AGENCY_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-charcoal/50 hover:text-royal transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Gold Divider + Copyright */}
      <div className="border-t border-gold/30">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="font-body text-sm text-charcoal/50">
            &copy; 2025 The Edit Collective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
