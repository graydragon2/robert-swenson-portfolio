export const summary =
  "Systems-focused technology professional with hands-on experience building and operating Linux infrastructure, home networking systems, monitoring platforms, AI automation, security tooling, self-hosted services, and custom applications. Brings more than 20 years of industrial operations experience, including leadership, process troubleshooting, reliability thinking, and high-accountability decision-making.";

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Systems & Linux",
    skills: ["Linux administration", "systemd services", "Docker", "KVM"],
  },
  {
    label: "Networking",
    skills: ["WireGuard", "Pi-hole", "network topology", "Cisco fundamentals"],
  },
  {
    label: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "Uptime Kuma", "Portainer"],
  },
  {
    label: "Security",
    skills: ["Wazuh", "Suricata", "presence-aware security design"],
  },
  {
    label: "AI & Automation",
    skills: [
      "llama.cpp",
      "CUDA inference",
      "OpenAI-compatible APIs",
      "workflow automation",
    ],
  },
  {
    label: "Development",
    skills: ["TypeScript", "Python", "Next.js", "API integration"],
  },
];

export interface ExperienceItem {
  period: string;
  title: string;
  place: string;
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "2011 — Present",
    title: "Lead Operator",
    place: "Rayonier Advanced Materials / RYAM — Jesup, Georgia",
  },
  {
    period: "2005 — 2011",
    title: "Operator I",
    place: "Rayonier Advanced Materials / RYAM — Jesup, Georgia",
  },
  {
    period: "2002 — 2005",
    title: "Employee",
    place: "McDaniel Vending",
  },
  {
    period: "1997 — 2001",
    title: "Correctional Officer II",
    place: "Rogers State Prison",
  },
  {
    period: "Approx. 1994 — 1997",
    title: "HVAC Technician",
    place: "Blue Collar Air Conditioning",
  },
];

export interface EducationItem {
  period: string;
  title: string;
  place: string;
}

export const education: EducationItem[] = [
  { period: "1993", title: "High School Graduate", place: "" },
  { period: "", title: "College coursework", place: "Georgia College" },
  {
    period: "",
    title: "Technical coursework",
    place: "Altamaha Technical College",
  },
];

export const currentLearning: string[] = [
  "Cisco networking / CCNA studies",
  "Linux infrastructure",
  "Cybersecurity",
  "Automation",
  "AI systems",
];
