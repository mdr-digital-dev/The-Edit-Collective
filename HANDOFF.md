# The Edit Collective — Project Handoff Document

**Last Updated:** April 10, 2026
**Built by:** MDR Digital / Claude Code
**Live URL:** https://the-edit-collective.vercel.app
**Repository:** https://github.com/mdr-digital-dev/The-Edit-Collective

---

## Project Overview

The Edit Collective is a marketing agency website targeting small businesses. The site serves as the primary online presence for the agency, showcasing services, pricing, client work, blog content, and lead generation tools.

**Brand positioning:** "The Edit Your Brand Has Been Waiting For" — editorial warmth meets modern tech energy. Think Stripe meets Kinfolk.

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
| Domain | Pending (currently on Vercel subdomain) |

---

## Site Map

```
/                          → Homepage
/services/websites         → Website Design & Development (pricing: $499 / $1,199)
/services/social-media     → Social Media Management (pricing: $1,000 / $2,500 per month)
/services/photo-video      → Photography & Video (pricing: $499 / $799 / $1,199)
/services/apps             → App Development (pricing: $2,999 / $4,999+)
/projects                  → Our Edits (portfolio page)
/blog                      → Blog index
/blog/why-your-small-business-needs-a-website-in-2026
/blog/5-social-media-mistakes-small-businesses-make
/blog/how-to-build-a-brand-people-remember
/contact                   → Contact form (Formspree)
/support                   → Client support ticket form (Formspree)
/audit                     → Free website audit tool
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
- **Gradient orbs:** Decorative `radial-gradient()` positioned absolute
- **Pill buttons:** `border-radius: 50px` on all CTAs
- **Hover lifts:** `translateY(-8px)` + shadow increase
- **Scroll animations:** `fade-up` class with IntersectionObserver + stagger delays

---

## Navigation

The nav is consistent across all pages:
- **Logo:** "The Edit Collective" (DM Serif Display, links to `/`)
- **Links:** About, Services (dropdown), Our Edits, Blog, Contact (pill button)
- **Services Dropdown:** Websites, Social Media, Photo & Video, App Development, Free Website Audit
- **Scroll behavior:** Frosted glass background (`backdrop-filter: blur(12px)`) appears on scroll
- **Mobile:** Hamburger menu at 768px breakpoint

---

## Forms

### Contact Form (`/contact`)
- **Provider:** Formspree
- **Form ID:** `xwpozwjy` (PLACEHOLDER — needs to be replaced with real Formspree ID)
- **Fields:** Name, Email, Business Name, Service (dropdown), Budget Range (dropdown), Project Description
- **Notification email:** Theeditcollectivechi@gmail.com (temporary — update when domain purchased)
- **Submission:** AJAX POST, shows success message inline

### Support Ticket Form (`/support`)
- **Provider:** Formspree (same ID — should be a separate form)
- **Fields:** Ticket Type (card selector), Name, Email, Company, Priority, Subject, Description
- **Ticket Types:** Website Update, Social Media, General Request
- **Generates:** Random ticket number on success (TEC-XXXX)

### Newsletter Signup (blog posts)
- **Location:** Bottom of each blog post
- **Submission:** Inline form with success message replacement
- **No backend connected yet** — needs email service integration (Mailchimp, ConvertKit, etc.)

---

## Website Audit Tool (`/audit`)

### How It Works
1. User enters a URL
2. Frontend calls `/api/fetch-url` (Vercel Edge Function)
3. Edge function fetches the target URL server-side (bypasses CORS)
4. Returns HTML content, load time, HTTPS status
5. Frontend parses HTML with DOMParser and runs 10 checks
6. Displays color-coded score (0-100) with detailed results

### The 10 Checks
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

### Email Capture
After results, users can "send the report" — triggers a mailto to `Theeditcollectivechi@gmail.com` with audit details.

---

## Service Pricing

### Website Design & Development
| Package | Price | Recurring |
|---------|-------|-----------|
| Starter (Landing Page) | $499 | $50/mo |
| Growth (Business Website) | Starting at $1,199 | $150–350/mo |

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

### App Development
| Package | Price |
|---------|-------|
| Loyalty App | $2,999 |
| Custom App | Starting at $4,999 |

---

## Portfolio / Our Edits

Current projects displayed:

| Project | URL | Type |
|---------|-----|------|
| Produce World | produceworldil.com | Website Design |
| PowerTech | powertechil.com | Website Design |
| Opa Kitchen | opa-kitchen.vercel.app | Website Design |
| Osteria Del Lago | osteria-del-lago.vercel.app | Website Design |
| Bob's Bagels | bobs-bagels.vercel.app | Website Design |
| National Mah Jongg League | nmjl-website.vercel.app | Website Design |

---

## Blog Posts

| Post | Category | Date |
|------|----------|------|
| Why Your Small Business Needs a Website in 2026 | Websites | April 8, 2026 |
| 5 Social Media Mistakes Small Businesses Make | Social Media | April 3, 2026 |
| How to Build a Brand People Actually Remember | Branding | March 27, 2026 |

Each post includes:
- Hero image (Unsplash)
- Pull quotes with taupe left border
- In-post CTA card (gradient background, links to `/contact`)
- Newsletter signup section at bottom

---

## Social Links

| Platform | Handle/URL |
|----------|-----------|
| Instagram | @theeditcollectivechi |
| LinkedIn | Not yet set (placeholder `#`) |

---

## Action Items / TODO

### Critical
- [ ] **Replace Formspree form ID** — Create account at formspree.io, set notification email, swap `xwpozwjy` in contact.html and support.html
- [ ] **Purchase domain** — Update email from Theeditcollectivechi@gmail.com to branded email
- [ ] **Set up newsletter backend** — Connect blog newsletter forms to Mailchimp/ConvertKit
- [ ] **Add LinkedIn URL** — Replace `#` placeholder in footer social links

### Important
- [ ] **Connect Vercel to correct repo** — Ensure the-edit-collective.vercel.app deploys from mdr-digital-dev/The-Edit-Collective
- [ ] **Replace placeholder testimonials** — Current testimonials are fictional; add real client quotes
- [ ] **Replace placeholder result stats** — Homepage stats (50+ Brands, $2M+, etc.) should reflect real numbers
- [ ] **Add real project screenshots** — Replace Unsplash images on project cards with actual screenshots
- [ ] **Mobile audit** — Full responsive testing across all breakpoints (375px, 390px, 768px, 1024px, 1440px)

### Nice to Have
- [ ] **Add privacy policy page**
- [ ] **Add terms of service page**
- [ ] **Set up Google Analytics / Plausible**
- [ ] **Add favicon**
- [ ] **SEO: Add sitemap.xml and robots.txt**
- [ ] **Performance: Consider migrating to Next.js for better performance and component reuse**
- [ ] **Add more blog posts** — Aim for 1-2 per week for SEO
- [ ] **Set up Open Graph images** for social sharing on each page

---

## Deployment

The site deploys automatically via Vercel when changes are pushed to the `main` branch of the GitHub repository.

```bash
# Push changes
git add -A
git commit -m "Description of changes"
git push

# Vercel auto-deploys in ~30 seconds
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
| Formspree | Needs account setup — currently using placeholder ID |
| Domain | Pending purchase |
| Email | Theeditcollectivechi@gmail.com (temporary) |

---

## Contact

**Michael Rodriguez** — MDR Digital
- Instagram: @theeditcollectivechi
- Email: Theeditcollectivechi@gmail.com (temporary)
