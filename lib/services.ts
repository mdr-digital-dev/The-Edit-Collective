export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  included: string[];
  whyItMatters: string;
  approach: string[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "seo",
    name: "SEO",
    tagline: "Get Found. Stay Found.",
    description:
      "Search engine optimization isn't just about rankings — it's about building a brand that earns authority over time. We combine technical precision with content strategy to create SEO programs that compound in value. From keyword architecture to site speed and backlink building, we treat SEO as a long-term investment in your brand's discoverability and digital equity.",
    included: [
      "Technical SEO audit",
      "Keyword research & mapping",
      "On-page optimization",
      "Content gap analysis",
      "Local SEO setup",
      "Monthly reporting dashboard",
    ],
    whyItMatters:
      "93% of online experiences start with a search engine. A brand that can't be found isn't really in the game. SEO is the foundation of sustainable organic growth.",
    approach: ["Audit", "Architect", "Optimize"],
    relatedSlugs: ["digital-brand-audit", "content-creation", "website-creation"],
  },
  {
    slug: "digital-brand-audit",
    name: "Digital Brand Audit",
    tagline: "See Your Brand The Way Your Audience Does.",
    description:
      "Before you can grow, you need an honest assessment of where you stand. Our Digital Brand Audit is a comprehensive review of your entire digital ecosystem — from your website and social media presence to your SEO health, content strategy, and competitive positioning. We identify gaps, surface opportunities, and deliver a clear roadmap for what needs to change and why.",
    included: [
      "Website UX & performance review",
      "SEO health check",
      "Social media analysis",
      "Content audit",
      "Competitor benchmarking",
      "Brand voice consistency review",
      "Full PDF report with prioritized recommendations",
    ],
    whyItMatters:
      "Most brands are leaving significant growth on the table because they've never taken a step back to see the full picture. An audit gives you clarity — and a competitive edge.",
    approach: ["Assess", "Analyze", "Recommend"],
    relatedSlugs: ["seo", "social-media", "creative-strategy"],
  },
  {
    slug: "content-creation",
    name: "Content Creation Strategy",
    tagline: "Content With Intent. Strategy With Soul.",
    description:
      "Content without strategy is noise. We build content ecosystems that serve a purpose — attracting, engaging, and converting your ideal audience. From content pillars and editorial calendars to tone of voice guides and production workflows, we create the architecture for a brand that has something real to say.",
    included: [
      "Content pillar development",
      "Brand voice & messaging guide",
      "Editorial calendar (3-month)",
      "Content format strategy (long-form, short-form, video, social)",
      "SEO-integrated blog strategy",
      "Performance benchmarks",
    ],
    whyItMatters:
      "Brands that publish consistent, strategic content generate 3× more leads and build authority that paid ads simply can't buy.",
    approach: ["Define Voice", "Build Architecture", "Execute Calendar"],
    relatedSlugs: ["copywriting", "social-media", "digital-content"],
  },
  {
    slug: "social-media",
    name: "Social Media Strategy",
    tagline: "More Than Posts. A Platform Presence.",
    description:
      "Social media is the living, breathing face of your brand. We design social strategies that go beyond content calendars — building community, driving engagement, and creating a visual identity that stops the scroll. Whether you're growing from scratch or optimizing an existing presence, we bring intentional strategy to every platform.",
    included: [
      "Platform audit & selection strategy",
      "Content pillars & posting cadence",
      "Visual identity guide for social",
      "Community engagement playbook",
      "Hashtag & discovery strategy",
      "Influencer/partnership framework",
      "Monthly analytics reporting",
    ],
    whyItMatters:
      "Your social media is often the first impression. A strong, consistent presence builds trust before a prospect ever visits your website.",
    approach: ["Audit", "Design System", "Launch Strategy"],
    relatedSlugs: ["content-creation", "digital-content", "creative-strategy"],
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    tagline: "The Highest ROI Channel You're Not Maximizing.",
    description:
      "Email marketing remains the most direct line to your audience — and when done right, delivers an average ROI of $42 for every $1 spent. We build email ecosystems that nurture leads, retain customers, and drive repeat revenue. From welcome flows to re-engagement campaigns, every email is designed with purpose and precision.",
    included: [
      "Email platform setup & audit",
      "List segmentation strategy",
      "Automated flow builds (welcome, nurture, win-back)",
      "Monthly campaign calendar",
      "A/B testing framework",
      "Deliverability optimization",
      "Performance reporting",
    ],
    whyItMatters:
      "Your email list is an asset you own — no algorithm can take it from you. Building it strategically is one of the most powerful long-term investments a brand can make.",
    approach: ["Build the List", "Design the Flows", "Optimize & Scale"],
    relatedSlugs: ["content-creation", "copywriting", "creative-strategy"],
  },
  {
    slug: "website-creation",
    name: "Website Creation",
    tagline: "Your Digital Flagship. Built to Convert.",
    description:
      "Your website is the center of your digital universe. We design and build websites that look exceptional, perform technically, and convert visitors into customers. Rooted in our technology and finance background, we build with both aesthetics and performance in mind — clean code, fast load times, SEO-ready architecture, and a UX that guides every visitor toward action.",
    included: [
      "Discovery & strategy session",
      "Wireframes & UX design",
      "Custom design (Figma)",
      "Development (Next.js, Webflow, or WordPress)",
      "Copywriting integration",
      "SEO foundation setup",
      "QA & launch support",
      "30-day post-launch support",
    ],
    whyItMatters:
      "75% of users judge a brand's credibility by its website. A great website isn't a cost — it's infrastructure.",
    approach: ["Discover", "Design", "Build & Launch"],
    relatedSlugs: ["seo", "copywriting", "digital-brand-audit"],
  },
  {
    slug: "copywriting",
    name: "Copywriting",
    tagline: "Words That Work. Copy That Converts.",
    description:
      "Great copy is the difference between a brand that blends in and one that stands out. We write with strategy, not just flair — every word chosen to advance your brand narrative, speak to your audience, and drive action. From website copy and brand manifestos to ad creative and email campaigns, we bring your voice to life in writing.",
    included: [
      "Brand voice guide",
      "Website copy (all pages)",
      "Campaign taglines & ad copy",
      "Email sequence copy",
      "Blog & long-form content",
      "Social media captions",
      "Product descriptions",
    ],
    whyItMatters:
      "Messaging is the foundation of all marketing. When your copy is clear, compelling, and consistent, every other channel performs better.",
    approach: ["Define Voice", "Research Audience", "Write & Refine"],
    relatedSlugs: ["content-creation", "email-marketing", "creative-strategy"],
  },
  {
    slug: "digital-content",
    name: "Digital Content",
    tagline: "Content That Looks as Good as Your Brand Deserves.",
    description:
      "We produce the visual and multimedia content that brings your digital strategy to life. From branded graphics and social assets to video scripts and short-form video production, we create content that performs — optimized for each platform and aligned with your brand identity.",
    included: [
      "Social media graphics (templates + custom)",
      "Branded video scripts",
      "Short-form video editing & direction",
      "Photography art direction",
      "Infographics & data visualization",
      "Presentation design",
    ],
    whyItMatters:
      "In a content-saturated world, quality is a differentiator. Brands that invest in professional, consistent content signal trust and authority at every touchpoint.",
    approach: ["Brief", "Produce", "Distribute"],
    relatedSlugs: ["content-creation", "social-media", "creative-strategy"],
  },
  {
    slug: "creative-strategy",
    name: "Creative Strategy",
    tagline: "The Blueprint Behind Every Bold Brand Move.",
    description:
      "Creative strategy is the connective tissue between your brand identity and your marketing execution. It's where insight meets inspiration. We develop the strategic frameworks that give your creative work direction — ensuring every campaign, piece of content, and brand interaction is purposeful, differentiated, and built to land with your audience. This is our secret sauce.",
    included: [
      "Brand positioning & messaging framework",
      "Campaign concept development",
      "Creative brief templates",
      "Content angle & hook strategy",
      "Offer positioning",
      "Competitive differentiation map",
      "Quarterly creative roadmap",
    ],
    whyItMatters:
      "Without a creative strategy, execution is guesswork. With one, every piece of content has a job to do — and does it well.",
    approach: ["Insight", "Concept", "Framework"],
    relatedSlugs: ["digital-brand-audit", "content-creation", "copywriting"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}
