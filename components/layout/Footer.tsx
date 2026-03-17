import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { CONTACT_EMAIL, AGENCY_INSTAGRAM, AGENCY_LINKEDIN } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 — Logo & Social */}
          <div>
            <Link href="/" className="font-display italic text-xl text-cream">
              The Edit Collective
            </Link>
            <p className="font-body text-sm italic text-cream/50 mt-2">
              Where strategy meets identity.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={AGENCY_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gold hover:text-gold/70 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={AGENCY_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gold hover:text-gold/70 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-6">
              Navigation
            </p>
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
                className="font-body text-sm text-cream/60 hover:text-cream transition-colors block py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Get In Touch */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-6">
              Get In Touch
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <Link
              href="/contact"
              className="font-body text-sm text-gold hover:text-gold/70 transition-colors mt-4 block"
            >
              Start a Project →
            </Link>
          </div>
        </div>

        {/* Gold divider */}
        <div className="w-full h-px bg-gold/20 my-8" />

        {/* Copyright */}
        <p className="font-body text-xs text-cream/30 text-center">
          &copy; {new Date().getFullYear()} The Edit Collective. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
