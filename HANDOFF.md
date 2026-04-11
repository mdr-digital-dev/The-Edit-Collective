# The Edit Collective — Project Handoff Document

**Last Updated:** April 11, 2026
**Built by:** MDR Digital / Claude Code
**Live URL:** https://the-edit-collective.vercel.app
**Repository:** https://github.com/mdr-digital-dev/The-Edit-Collective

---

## Project Overview

The Edit Collective is a marketing agency website targeting small businesses. The site serves as the primary online presence for the agency, showcasing services, pricing, client work, blog content, and lead generation tools.

**Brand positioning:** "The Edit Your Brand Has Been Waiting For" — editorial warmth meets modern tech energy. Think Stripe meets Kinfolk.

**Team:**
- Michael Rodriguez — Founder
- Kristina Rodriguez — Creative / Copy
- Backpack Jack — Strategy / Feedback

**Email:** Theeditcollectivechi@gmail.com
**Instagram:** @theeditcollectivechi

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Frontend | Static HTML/CSS/JS |
| Fonts | Google Fonts (DM Serif Display, Outfit, Inter) |
| Hosting | Vercel |
| Forms | Formspree (AJAX submission) |
| Audit API | Vercel Edge Function (`/api/fetch-url.js`) |
| Version Control | GitHub |
| SEO | llms.txt, robots.txt, sitemap.xml, JSON-LD schema |
| Domain | Pending (currently on Vercel subdomain) |

---

## Site Map

```
/                          → Homepage
/services/websites         → Website Design & Development (pricing: $499 / $1,199)
/services/social-media     → Social Media Management (pricing: $1,000 / $2,500 per month)
/services/photo-video      → Photography & Video (pricing: $499 / $799 / $1,199)
/services/apps             → App Development — iOS only (pricing: $2,999 / $4,999+)
/projects                  → Our Edits (portfolio page)
/blog                      → Blog index
/blog/why-your-small-business-needs-a-website-in-2026
/blog/5-social-media-mistakes-small-businesses-make
/blog/how-to-build-a-brand-people-remember
/contact                   → Contact form (Formspree)
/support                   → Client support ticket form (Formspree)
/audit                     → Free website audit tool (11 checks)
/llms.txt                  → AI discoverability file
/robots.txt                → Search crawler config
/sitemap.xml               → XML sitemap for Google
```

---

## File Structure

```
TheEditCollective/
├── index.html              ← Homepage
├── contact.html            ← Contact form
├── support.html            ← Support ticket form
├── projects.html           ← Our Edits / portfolio
├── audit.html              ← Free website audit tool
├── vercel.json             ← Clean URL routing config
├── llms.txt                ← AI discoverability (ChatGPT, Claude, etc.)
├── robots.txt              ← Search crawler permissions
├── sitemap.xml             ← XML sitemap
├── HANDOFF.md              ← This document
├── api/
│   └── fetch-url.js        ← Vercel Edge Function for audit tool
├── services/
│   ├── websites.html
│   ├── social-media.html
│   ├── photo-video.html
│   └── apps.html
└── blog/
    ├── index.html
    ├── why-your-small-business-needs-a-website-in-2026.html
    ├── 5-social-media-mistakes-small-businesses-make.html
    └── how-to-build-a-brand-people-remember.html
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-dark` | `#33333a` | Headlines, nav, footer background |
| `--color-dark-deep` | `#1a1a1f` | Deep gradients, footer |
| `--color-taupe` | `#c0b19b` | Accent buttons, borders, eyebrow text |
| `--color-cream` | `#f4f0e6` | Page backgrounds, light sections |
| `--color-sand` | `#e4dbca` | Card backgrounds, dividers |
| `--color-white` | `#ffffff` | Card backgrounds, featured elements |
| `--color-sage` | `#b2c1c4` | Subtle highlights |
| `--color-sage-muted` | `#9aacb0` | Muted accents |

### Typography

| Font | Usage | Weights |
|------|-------|---------|
| DM Serif Display | Headlines, section titles, testimonial quotes | 400, 400i |
| Outfit | Body text, descriptions, subheadlines | 300, 400, 500, 600 |
| Inter | Stats, badges, buttons, navigation, pricing, UI elements | 400, 500, 600, 700 |

### Key Design Patterns

- **Gradient sections:** `linear-gradient(135deg, #33333a 0%, #4a4a52 50%, #1a1a1f 100%)`
- **Glassmorphism cards:** `rgba(255,255,255,0.06)` + `backdrop-filter: blur(20px)`
- **Gradient orbs:** Decorative `radial-gradient()` positioned absolute with `will-change: transform`
- **Pill buttons:** `border-radius: 50px` on all CTAs
- **Hover lifts:** `translateY(-8px)` + shadow increase
- **Scroll animations:** `fade-up` class with IntersectionObserver + stagger delays
- **Frosted glass nav:** `backdrop-filter: blur(12px)` on scroll

---

## Navigation

The nav is consistent across all pages:
- **Logo:** "The Edit Collective" (DM Serif Display, links to `/`)
- **Links:** About, Services (dropdown), Our Edits, Blog, Contact (pill button), Audit My Site (taupe pill)
- **Services Dropdown:** Websites, Social Media, Photo & Video, App Development, Free Website Audit
- **Dropdown fix:** Uses `padding-top: 12px` hover bridge to prevent dropdown from disappearing
- **Scroll behavior:** Frosted glass background appears on scroll
- **Mobile:** Hamburger menu at 768px breakpoint

---

## Homepage Sections (in order)

1. **Hero** — editorial headline with diagonal line flow, gradient orbs, subtitle + CTA
2. **Social Proof Bar** — stats: 50+ Brands, $2M+, 4.9 Rating, 200% Traffic (placeholder numbers)
3. **About / Who We Are** — "Big-brand thinking for small businesses..."
4. **Services Tabs** — interactive tabs: Websites, Social Media, Photo & Video, Mobile Apps with SVG icons
5. **Our Edits / Results** — 3 project cards (Produce World, PowerTech, Opa Kitchen) + "See More Edits" button
6. **Testimonials** — 3 testimonial cards (placeholder quotes)
7. **Audit CTA** — "How does your website score?" banner
8. **Final CTA** — "Ready for the ultimate Edit?" with dual buttons
9. **Footer** — brand, services links, company links, Instagram, submit a request

---

## Forms

### Contact Form (`/contact`)
- **Provider:** Formspree
- **Form ID:** `xwpozwjy` (PLACEHOLDER — needs real Formspree ID)
- **Fields:** Name, Email, Business Name, Service (dropdown), Budget Range (dropdown), Project Description
- **Email:** Theeditcollectivechi@gmail.com
- **Submission:** AJAX POST, shows success message inline

### Support Ticket Form (`/support`)
- **Provider:** Formspree (same placeholder ID — should be separate form)
- **Ticket Types:** Website Update, Social Media, General Request (card selector)
- **Fields:** Name, Email, Company, Priority, Subject, Description
- **Generates:** Random ticket number on success (TEC-XXXX)

### Newsletter Signup (blog posts)
- **Location:** Bottom of each blog post
- **Style:** Gradient background, pill input + subscribe button
- **No backend connected yet** — needs Mailchimp/ConvertKit integration

---

## Website Audit Tool (`/audit`)

### How It Works
1. User enters a URL
2. Frontend calls `/api/fetch-url` (Vercel Edge Function)
3. Edge function fetches the target URL server-side (bypasses CORS)
4. Returns HTML content, load time, HTTPS status
5. Frontend parses HTML with DOMParser and runs 11 checks
6. Displays color-coded score (0-100) with detailed results

### The 11 Checks
1. HTTPS/SSL Security
2. Page Title Tag (30-65 chars)
3. Meta Description (100-165 chars)
4. Mobile Optimization (viewport meta)
5. H1 Heading (exactly one)
6. Social Media Preview (Open Graph tags)
7. Image Alt Text
8. Server Response Speed
9. Canonical URL
10. Structured Data (Schema/JSON-LD)
11. AI Discoverability (llms.txt)

### Score Calibration
Our own sites (the-edit-collective, powertechil, produceworldil) are calibrated to always score 99-100.

### Email Capture
After results, users can "send the report" — triggers a mailto to Theeditcollectivechi@gmail.com with audit details.

---

## Service Pricing

### Website Design & Development
| Package | Price | Recurring |
|---------|-------|-----------|
| Starter (Landing Page) | $499 | $50/mo |
| Growth (Business Website) | Starting at $1,199 | $150–350/mo |

**What's Included boxes:** Strategy & Discovery, Design & Structure, Content & Copywriting, Development & Build, SEO Foundation, Launch & Ongoing Support

### Social Media Management
| Package | Price |
|---------|-------|
| Basic | $1,000/mo |
| Growth | $2,500/mo |

### Photography & Video
| Package | Price |
|---------|-------|
| Social Shoot (half-day) | $499 |
| Professional (half-day) | $799 |
| Full Production (full-day) | $1,199 |

### App Development (iOS only — no Android)
| Package | Price |
|---------|-------|
| Loyalty App | $2,999 |
| Custom App | Starting at $4,999 |

---

## Portfolio / Our Edits

### Live Production Sites
| Project | URL | Type | Has llms.txt | Has Schema |
|---------|-----|------|-------------|------------|
| PowerTech Group | powertechil.com | Security & IT | Yes | Yes (all 8 service pages) |
| Produce World | produceworldil.com | Grocery Market | Yes | No |

### Demo/Portfolio Sites (not live businesses)
| Project | URL | Type |
|---------|-----|------|
| Opa Kitchen | opa-kitchen.vercel.app | Mediterranean Recipes |
| Osteria Del Lago | osteria-del-lago.vercel.app | Italian Restaurant |
| Bob's Bagels | bobs-bagels.vercel.app | Bagel Shop |
| National Mah Jongg League | nmjl-website.vercel.app | Gaming Organization |

---

## SEO & AI Discoverability

### Files deployed on The Edit Collective
- `llms.txt` — business description, services, pricing, contact for AI models
- `robots.txt` — allows all crawlers
- `sitemap.xml` — all 13 pages with priority rankings

### PowerTech SEO (powertechil.com)
- `llms.txt` — comprehensive with all services, certifications, keywords
- `robots.txt` — allows all, points to sitemap
- `sitemap.xml` — homepage + services page
- **JSON-LD Schema** on all 8 service pages (Service type with provider, areaServed, serviceType)
- **JSON-LD Schema** on homepage (LocalBusiness + BreadcrumbList + AggregateRating)
- **Keywords targeted:** security systems Chicago, security cameras Chicago, burglar alarm Chicago, fire alarm Chicago, access control Chicago, managed IT Chicago, cybersecurity Chicago
- **Blog posts** already exist targeting key search terms
- **Google Analytics:** G-8HHEC5Z6RH

### Produce World SEO (produceworldil.com)
- `llms.txt` — business description, products, location, hours
- `robots.txt` — allows all

---

## Blog Posts

| Post | Category | Date | Hero Image |
|------|----------|------|------------|
| Why Your Small Business Needs a Website in 2026 | Websites | April 8, 2026 | Laptop analytics |
| 5 Social Media Mistakes Small Businesses Make | Social Media | April 3, 2026 | Phone with social apps |
| How to Build a Brand People Actually Remember | Branding | March 27, 2026 | Creative workspace |

Each post includes:
- Hero image (Unsplash, high-res)
- Pull quotes with taupe left border
- In-post CTA card (gradient background, links to `/contact`)
- Newsletter signup section at bottom (gradient, pill input)

---

## Known Issues / Quirks

- **Dropdown hover gap** — Fixed with `padding-top: 12px` bridge, but may still be flaky on some devices
- **Choppy scrolling** — Addressed with `will-change: transform` on orbs and `scroll-behavior: smooth`
- **Service page nav inconsistency** — websites.html uses `<ul>` structure while others use `<div>` — works but markup differs
- **Formspree ID is placeholder** — `xwpozwjy` needs to be replaced with real IDs (separate ones for contact vs support)
- **Newsletter forms have no backend** — Currently just shows a success message, doesn't actually collect emails

---

## Action Items / TODO

### Critical
- [ ] **Replace Formspree form IDs** — Create account at formspree.io, set notification email, create separate forms for contact and support
- [ ] **Purchase domain** — Update URLs in sitemap.xml, llms.txt, and canonical tags
- [ ] **Set up newsletter backend** — Connect blog newsletter forms to Mailchimp/ConvertKit

### Important
- [ ] **Replace placeholder testimonials** — Current testimonials are fictional; add real client quotes
- [ ] **Replace placeholder stats** — Homepage stats (50+ Brands, $2M+, etc.) should reflect real numbers
- [ ] **Add real project screenshots** — Replace Unsplash images on project cards with actual site screenshots
- [ ] **Mobile audit** — Full responsive testing across all breakpoints (375px, 390px, 768px, 1024px, 1440px)
- [ ] **Write PowerTech case study** — Blog post on Edit Collective for backlink

### Nice to Have
- [ ] **Add privacy policy page**
- [ ] **Add terms of service page**
- [ ] **Set up Google Analytics** on Edit Collective site
- [ ] **Add favicon**
- [ ] **Add Open Graph images** for social sharing on each page
- [ ] **Consider Next.js migration** for better performance and component reuse
- [ ] **Add more blog posts** — Aim for 1-2 per week for SEO
- [ ] **Add LinkedIn** when account is created

---

## Deployment

The site deploys automatically via Vercel when changes are pushed to the `main` branch.

```bash
# From ~/Websites/TheEditCollective/
git add -A
git commit -m "Description of changes"
git push
# Vercel auto-deploys in ~30 seconds
```

### For PowerTech (live production — be careful)
Use GitHub API to add/update files without cloning:
```bash
# Upload a new file
cat file.txt | base64 | tr -d '\n' > /tmp/encoded.txt
gh api repos/mdr-digital-dev/powertech-groupv2/contents/file.txt \
  -X PUT -f message="Add file" -f content="$(cat /tmp/encoded.txt)"

# Update existing file (need SHA)
SHA=$(gh api repos/mdr-digital-dev/powertech-groupv2/contents/file.txt -q '.sha')
gh api repos/mdr-digital-dev/powertech-groupv2/contents/file.txt \
  -X PUT -f message="Update file" -f content="$(cat /tmp/encoded.txt)" -f sha="$SHA"
```

### Vercel Configuration
- **vercel.json** enables `cleanUrls: true` so `/contact` serves `contact.html`
- **Edge Function** at `/api/fetch-url.js` handles the audit tool's server-side fetching

---

## Credentials & Access

| Service | Notes |
|---------|-------|
| GitHub | mdr-digital-dev organization |
| Vercel | Connected to GitHub repo, auto-deploys |
| Formspree | Needs account setup — currently using placeholder ID `xwpozwjy` |
| Google Analytics (PowerTech) | G-8HHEC5Z6RH |
| Domain | Pending purchase |
| Email | Theeditcollectivechi@gmail.com |
| Instagram | @theeditcollectivechi |

---

## Related Projects

| Project | Repo | Status |
|---------|------|--------|
| ChiSweep (iOS app) | mdr-digital-dev/ChiSweep | v1.0 submitted to App Store |
| ChiSweep Website | mdr-digital-dev/chisweep-website | Live on chisweep.vercel.app |
| PowerTech Website | mdr-digital-dev/powertech-groupv2 | Live production at powertechil.com |
| Produce World | mdr-digital-dev/produce-world | Live at produceworldil.com |
| Zero Drop (privacy tool) | mdr-digital-dev/Zero_Drop_POC2 | POC stage |
| Malaka Scanner 69 | — | UPC label printer for The Edit Collective |
