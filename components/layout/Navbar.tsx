"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";

const navServices = [
  { name: "SEO", slug: "seo" },
  { name: "Digital Brand Audit", slug: "digital-brand-audit" },
  { name: "Content Creation Strategy", slug: "content-creation" },
  { name: "Social Media Strategy", slug: "social-media" },
  { name: "Email Marketing", slug: "email-marketing" },
  { name: "Website Creation", slug: "website-creation" },
  { name: "Copywriting", slug: "copywriting" },
  { name: "Digital Content", slug: "digital-content" },
  { name: "Creative Strategy", slug: "creative-strategy" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const linkClass = (href: string) =>
    `transition-colors ${
      isActive(href)
        ? "text-charcoal border-b-2 border-gold pb-0.5"
        : "text-charcoal/70 hover:text-charcoal"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="font-display text-xl text-charcoal">
            The Edit Collective
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-wider">
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link href="/services" className={linkClass("/services")}>
                Services
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-cream shadow-lg border border-charcoal/5 py-4 px-6 min-w-[240px]">
                  {navServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block py-2 text-charcoal/70 hover:text-royal transition-colors normal-case tracking-normal text-sm"
                    >
                      {s.name}
                    </Link>
                  ))}
                  <div className="border-t border-charcoal/10 mt-2 pt-2">
                    <Link
                      href="/services"
                      className="block py-2 text-royal hover:text-royal-deep transition-colors normal-case tracking-normal text-sm font-medium"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/work" className={linkClass("/work")}>
              Work
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" href="/contact">
              Start a Project
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-charcoal p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-charcoal mb-1.5" />
            <span className="block w-6 h-0.5 bg-charcoal mb-1.5" />
            <span className="block w-6 h-0.5 bg-charcoal" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-royal z-[100] flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-6 text-cream"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center gap-8">
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
                className="font-display text-2xl text-cream hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  );
}
