export const site = {
  name: "Robert F. Swenson III",
  shortName: "R. Swenson III",
  tagline: "I build systems that solve problems I actually have.",
  // Used for global SEO/social metadata (og:description, twitter:description,
  // default page description) — distinct from the visible hero tagline above.
  metaDescription:
    "Industrial operations professional and systems builder designing real-world infrastructure, automation, networking, security, monitoring, local AI, and software systems.",
  descriptor: "SYSTEMS • AUTOMATION • AI • NETWORKING • SECURITY",
  url: "https://portfolio.swensondigital.com",
  heroStatement: "I build systems that solve problems I actually have.",
  heroSupport:
    "From home infrastructure to AI-powered automation, I design, deploy, and operate real-world systems that make life simpler, safer, and more capable.",
  quote: ["Real problems.", "Practical systems.", "Continuous improvement."],
  philosophy: ["BUILD", "AUTOMATE", "SECURE", "LEARN", "IMPROVE", "REPEAT"],
} as const;

// Shared fallback social-card image for pages that don't have their own
// project-specific card. Static asset — Cloudflare Workers can't reliably
// render next/og ImageResponse routes within production resource limits,
// so social cards are pre-baked PNGs under /public rather than generated
// at request time.
export const socialImage = {
  url: "/social/portfolio.png",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.descriptor}`,
};

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

// Central place for external / contact links. Replace placeholders with
// real values once accounts exist — do not fabricate URLs elsewhere.
export const links = {
  email: "graydragon2@gmail.com",
  // TODO: set once a GitHub profile intended for this site exists.
  github: null as string | null,
  // TODO: set once a LinkedIn profile intended for this site exists.
  linkedin: null as string | null,
  // TODO: point at the hosted PDF once one is produced.
  resumePdf: null as string | null,
} as const;

export const swensonDigital = {
  name: "Swenson Digital",
  description:
    "Freelance and consulting work in systems, automation, and infrastructure — available for select engagements.",
} as const;
