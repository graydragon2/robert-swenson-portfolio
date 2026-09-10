export const summary =
  "Industrial operations leader and hands-on systems builder with 21 years at RYAM, including 15 years as a Digester Lead Operator. Experienced in safety-critical process operations, troubleshooting interconnected systems, team coordination, and operational decision-making. Outside of work, design, integrate, operate, and troubleshoot Linux infrastructure, networking, security monitoring, automation, observability, local AI, and web applications. Seeking systems administration, network administration, infrastructure, NOC, automation, or related technical roles where operational discipline and practical systems experience can be applied.";

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Systems",
    skills: [
      "Linux",
      "Windows",
      "macOS",
      "Raspberry Pi OS",
      "Docker",
      "KVM",
      "systemd",
      "self-hosted services",
    ],
  },
  {
    label: "Networking & Security",
    skills: [
      "TCP/IP",
      "DNS",
      "VPN",
      "WireGuard",
      "Wazuh",
      "Suricata",
      "Pi-hole",
      "switches & routers",
      "network troubleshooting",
    ],
  },
  {
    label: "Monitoring & Operations",
    skills: [
      "Prometheus",
      "Grafana",
      "Uptime Kuma",
      "Portainer",
      "monitoring & alerting",
      "service health",
      "operational troubleshooting",
    ],
  },
  {
    label: "Development",
    skills: [
      "Git/GitHub",
      "REST APIs",
      "HTML/CSS",
      "Python",
      "JavaScript/TypeScript",
      "databases",
      "FastAPI",
      "React/Next.js",
    ],
  },
  {
    label: "AI & Automation",
    skills: [
      "Claude Code",
      "ChatGPT",
      "AI coding agents",
      "requirements specification",
      "testing & debugging",
      "workflow design",
      "llama.cpp",
      "Qwen",
      "local inference integration",
    ],
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
    title: "Digester Lead Operator",
    place: "RYAM — Jesup, Georgia",
    description:
      "Lead and coordinate complex digester operations in a continuous industrial production environment, monitoring interconnected process systems, alarms, and equipment behavior to identify abnormal conditions and determine operational response. Troubleshoot process and equipment problems using real-time and historical data, coordinating across operations, maintenance, and supervision, and make and communicate operational decisions during equipment failures, process disruptions, and shift transitions.",
  },
  {
    period: "2005 — 2011",
    title: "Operator I",
    place: "RYAM — Jesup, Georgia",
    description:
      "Operated and monitored industrial production equipment and process systems, responded to changing conditions, and developed broad knowledge of plant systems, procedures, and safety requirements. Promoted to Digester Lead Operator in 2011.",
  },
  {
    period: "2002 — 2005",
    title: "Vending Operations",
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
  {
    period: "",
    title: "College coursework",
    place: "Georgia College & State University",
  },
  {
    period: "",
    title: "Technical coursework",
    place: "Altamaha Technical College / Coastal Pines Technical College",
  },
  { period: "Current", title: "CCNA-focused networking self-study", place: "" },
  { period: "1993", title: "High School Diploma", place: "" },
];

export const currentLearning: string[] = ["CCNA-focused networking self-study"];

export const credentials: string[] = [
  "FCC Amateur Radio Extra Class License — KT4SW",
  "PADI Open Water Diver",
];
