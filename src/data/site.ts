export const site = {
  name: "Robert F. Swenson III",
  shortName: "R. Swenson III",
  tagline: "I build systems that solve problems I actually have.",
  descriptor: "SYSTEMS • AUTOMATION • AI • NETWORKING • SECURITY",
  // NOTE: update this once the site has a real production domain.
  url: "https://robertswenson.dev",
  heroStatement: "I build systems that solve problems I actually have.",
  heroSupport:
    "From home infrastructure to AI-powered automation, I design, deploy, and operate real-world systems that make life simpler, safer, and more capable.",
  quote: ["Real problems.", "Practical systems.", "Continuous improvement."],
  philosophy: ["BUILD", "AUTOMATE", "SECURE", "LEARN", "IMPROVE", "REPEAT"],
} as const;

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
