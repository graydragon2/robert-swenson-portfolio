export type ProjectStatus =
  | "ACTIVE"
  | "OPERATIONAL"
  | "IN DEVELOPMENT"
  | "ONGOING";

export interface ArchitectureFlow {
  variant: "flow";
  steps: string[];
}

export interface ArchitectureTree {
  variant: "tree";
  root: string;
  branches: {
    label: string;
    items: string[];
  }[];
}

export type ArchitectureSpec = ArchitectureFlow | ArchitectureTree;

export interface InfraSpec {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  host: string;
  deployment: string;
  featured: boolean;
  technologies: string[];
  architecture: ArchitectureSpec;
  infraSpecs?: InfraSpec[];
  problem: string[];
  requirements: string[];
  build: string[];
  challenges: string[];
  currentState: string[];
  nextSteps: string[];
  note?: string;
  conceptArt?: boolean;
  image?: string;
  imageAlt?: string;
  /** "contain" letterboxes real application screenshots so no interface
   *  content is cropped; omit for artwork/concept renders that can safely fill the frame. */
  imageFit?: "cover" | "contain";
  /** Exact document <title> for this project's page (used as-is, bypassing
   *  the site-wide title template) and for social share cards. */
  metaTitle?: string;
  /** Social/SEO description for this project's page (og:description,
   *  twitter:description, <meta name="description">). */
  metaDescription?: string;
}

export const projects: Project[] = [
  {
    slug: "graydragon",
    title: "GRAYDRAGON",
    subtitle: "Personal Intelligence System",
    summary:
      "A local-first AI and automation system that helps me think, remember, organize, automate, and operate my digital life.",
    description:
      "Graydragon is a personal operating system and AI-assisted second brain designed to help manage attention, memory, waiting-on items, daily context, automation, email, calendar data, and local intelligence processing. It combines software automation, local AI infrastructure, system services, dashboards, APIs, and connected data.",
    tags: ["AI", "AUTOMATION", "LINUX", "TYPESCRIPT", "APIS"],
    status: "ACTIVE",
    host: "UBUNTU",
    deployment: "SELF-HOSTED",
    featured: true,
    technologies: [
      "TypeScript",
      "Node.js",
      "Linux systemd services",
      "llama.cpp",
      "CUDA",
      "Gmail API",
      "Google Calendar API",
      "OpenAI-compatible inference API",
    ],
    architecture: {
      variant: "flow",
      steps: [
        "Google Gmail",
        "Google Calendar",
        "Local Vault",
        "Automation Scripts",
        "AI Provider Layer",
        "Graydragon AI Server",
        "Dashboard",
        "System Services",
      ],
    },
    infraSpecs: [
      { label: "GPU", value: "NVIDIA GTX 1080 8GB" },
      { label: "MODEL", value: "Qwen3-8B Q3_K_L" },
      { label: "INFERENCE", value: "llama.cpp CUDA" },
      { label: "API", value: "OpenAI-compatible" },
      { label: "CONTEXT", value: "4096 tokens" },
    ],
    problem: [
      "Attention, memory, and daily context get scattered across email, calendars, notes, and half-finished automations.",
      "Most 'productivity' tools require manually feeding them information instead of pulling from where the information already lives.",
      "Relying entirely on third-party AI APIs creates cost, privacy, and availability tradeoffs for something meant to run every day.",
    ],
    requirements: [
      "Pull real context automatically from Gmail and Calendar rather than requiring manual entry.",
      "Generate a daily brief that reflects what actually needs attention.",
      "Run core intelligence processing locally, with the option to fall back to hosted providers.",
      "Track waiting-on items and follow-ups without needing a separate task manager.",
      "Run as reliable, restart-safe Linux services rather than scripts babysat by hand.",
      "Expose a dashboard for system health so failures are visible instead of silent.",
    ],
    build: [
      "The system is organized around a local vault of notes and state, a set of automation scripts that pull from Gmail and Calendar, and an AI provider abstraction layer that can route requests to either the local Graydragon AI server or a hosted provider.",
      "The Graydragon AI server runs llama.cpp with CUDA acceleration on an NVIDIA GTX 1080, serving a Qwen3-8B model behind an OpenAI-compatible API so the rest of the system doesn't need to know which provider is answering.",
      "Daily processing runs as scheduled Linux systemd services: pulling mail and calendar data, generating a brief, updating the vault, and validating that the pipeline actually ran instead of assuming it did.",
      "A dashboard surfaces system and service health so problems in the pipeline are visible rather than discovered days later.",
    ],
    challenges: [
      "Designing a provider abstraction that treats local and hosted AI as interchangeable, without hard-coding assumptions from either.",
      "Keeping a local 8GB-GPU model useful within a 4096-token context window for real daily-use tasks.",
      "Making automation trustworthy enough to run unattended — including validating that scheduled jobs actually completed, not just that they were scheduled.",
    ],
    currentState: [
      "Daily intelligence processing, Gmail and Calendar integration, and automated brief generation are running in production as systemd services.",
      "Local AI infrastructure serves inference through an OpenAI-compatible endpoint, with provider abstraction in place to swap or add providers.",
      "A dashboard reports system and service health, and scheduled jobs include production validation checks.",
    ],
    nextSteps: [
      "Expand local-first personal knowledge processing to reduce reliance on hosted AI providers further while keeping provider flexibility.",
      "Broaden automation coverage beyond email and calendar into other recurring personal-operations tasks.",
      "Continue hardening the dashboard and monitoring around the AI provider layer.",
    ],
    note: "The system is being intentionally designed to reduce dependence on third-party AI APIs while retaining provider flexibility. Graydragon is under active, ongoing development — the interface shown is concept art representing the system's direction, not a finished production screenshot.",
    conceptArt: true,
    image: "/portfolio/projects/graydragon-concept.png",
    imageAlt:
      "Graydragon concept interface: a personal intelligence dashboard showing daily intelligence signal, system context, and local AI status.",
    metaTitle: "Graydragon Personal Intelligence System | Robert F. Swenson III",
    metaDescription:
      "A local-first personal intelligence and automation platform combining structured knowledge, scheduled intelligence processing, email and calendar integration, self-hosted AI, monitoring, and automated workflows.",
  },
  {
    slug: "home-security",
    title: "HOME SECURITY",
    subtitle: "Context-Aware Security Platform",
    summary:
      "An intelligent home security platform combining cameras, presence detection, incident correlation, zones, trusted people, vehicle recognition, and AI verification.",
    description:
      "A custom Reolink-based security platform designed to understand context rather than simply generate motion alerts. It correlates camera activity with presence, zones, known people, and known vehicles to decide what actually deserves attention.",
    tags: ["PYTHON", "COMPUTER VISION", "REOLINK", "AI", "PRESENCE"],
    status: "ACTIVE",
    host: "UBUNTU",
    deployment: "SELF-HOSTED",
    featured: true,
    technologies: [
      "Python",
      "Reolink camera APIs",
      "Computer vision / AI verification",
      "Wi-Fi / MAC-based presence detection",
      "Docker",
    ],
    architecture: {
      variant: "flow",
      steps: [
        "Camera",
        "Detection",
        "Zone",
        "Presence Context",
        "Incident Engine",
        "AI Verification",
        "Alert",
      ],
    },
    problem: [
      "Motion-based security alerts are noisy: wind, headlights, and pets generate the same alert as an actual event.",
      "Alert fatigue means real events get ignored along with the false ones.",
      "Most consumer security systems have no concept of who is normally present, so they can't tell 'someone I know' from 'someone unknown.'",
    ],
    requirements: [
      "Correlate camera detections with zones so an event's location carries meaning, not just 'motion somewhere.'",
      "Track resident presence — including Wi-Fi/MAC-based detection and manual override — to establish house-level occupancy state.",
      "Support distinct security modes (HOME, AWAY, NIGHT, GUEST, VACATION) that change how events are evaluated.",
      "Maintain a trusted people and known/authorized vehicle list to reduce false positives from expected activity.",
      "Run detections through an AI verification step before escalating to a human-facing alert.",
      "Give incidents a real lifecycle (OPEN, QUIET, RESOLVED) instead of a single fire-and-forget notification.",
    ],
    build: [
      "Camera feeds and detections come from a Reolink camera topology, normalized into a common detection format regardless of which camera generated the event.",
      "Detections are mapped to zones, and cross-referenced against a presence engine that tracks arrivals, departures, Wi-Fi/MAC presence, and manual overrides to compute a house-level occupancy state and a presence confidence score.",
      "An incident engine correlates detections, zone, and presence context, applies the active security mode, and checks the event against trusted people and known/authorized vehicles before deciding whether it warrants AI verification.",
      "Events that pass verification are escalated as incidents with a lifecycle — OPEN when new, QUIET once acknowledged or expected, RESOLVED once closed out — instead of a single alert with no state.",
    ],
    challenges: [
      "Resolving presence conflicts — for example, a phone reporting 'home' while a camera detects nobody in expected zones.",
      "Suppressing alerts for context that is genuinely benign without suppressing alerts for events that only look benign.",
      "Keeping the trusted people, known vehicle, and zone data current enough that the system doesn't quietly go stale.",
    ],
    currentState: [
      "Camera health monitoring, zones, presence detection (including Wi-Fi/MAC and manual override), and security modes are running.",
      "Incident correlation and the OPEN / QUIET / RESOLVED lifecycle are in place, with trusted people and known/authorized vehicle lists feeding suppression logic.",
      "AI verification sits in the pipeline before alerts are escalated, aimed at reducing meaningless notifications while preserving awareness of events that matter.",
    ],
    nextSteps: [
      "Continue refining presence-conflict detection between device-based and camera-based signals.",
      "Expand known-vehicle and authorized-visitor handling for less common scenarios (deliveries, service visits).",
      "Tighten AI verification accuracy to further reduce false suppressions and false escalations.",
    ],
    image: "/portfolio/projects/home-security.png",
    imageAlt:
      "Home Security dashboard: security status HOME with automatic presence detection, 5/5 cameras online, 0 active alerts, and AI verification controls.",
    imageFit: "contain",
    metaTitle: "Context-Aware Home Security Platform | Robert F. Swenson III",
    metaDescription:
      "A self-hosted security platform combining presence awareness, security modes, zones, incident correlation, trusted people and vehicles, camera monitoring, and AI-assisted verification.",
  },
  {
    slug: "network-command-center",
    title: "NETWORK COMMAND CENTER",
    subtitle: "Home Infrastructure Platform",
    summary:
      "A centralized platform for monitoring, managing, and understanding my network, servers, services, and remote infrastructure.",
    description:
      "A centralized control and monitoring interface for home network and distributed infrastructure — node health, service health, network status, and remote node visibility in one place, so complex infrastructure stays understandable at a glance.",
    tags: ["NETWORKING", "DOCKER", "WIREGUARD", "LINUX", "MONITORING"],
    status: "ACTIVE",
    host: "UBUNTU / RASPBERRY PI",
    deployment: "SELF-HOSTED",
    featured: true,
    technologies: [
      "Prometheus",
      "Grafana",
      "WireGuard",
      "Docker",
      "Pi-hole",
      "Portainer",
    ],
    architecture: {
      variant: "flow",
      steps: [
        "Nodes & Services",
        "Exporters",
        "Prometheus",
        "Grafana",
        "WireGuard Mesh",
        "Command Center Dashboard",
      ],
    },
    problem: [
      "A growing set of self-hosted nodes and services becomes hard to reason about without a single place to look.",
      "Remote nodes on the network need visibility without exposing them directly to the internet.",
      "Infrastructure that's only understandable by SSH-ing into each box separately doesn't scale, even at home-lab size.",
    ],
    requirements: [
      "Provide node-level and service-level health status across every machine in the environment.",
      "Give remote nodes secure connectivity back to core infrastructure via WireGuard rather than public exposure.",
      "Centralize monitoring dashboards (Prometheus/Grafana) instead of spreading status across each host.",
      "Keep DNS-level filtering (Pi-hole) and container management (Portainer) visible from the same platform.",
      "Make infrastructure topology legible at a glance rather than requiring tribal knowledge.",
    ],
    build: [
      "Each node runs exporters that feed Prometheus, which Grafana turns into dashboards for node health, service health, and network status.",
      "WireGuard forms the connective mesh between core infrastructure and remote nodes, so a Raspberry Pi elsewhere on the network can report telemetry back without being publicly reachable.",
      "Pi-hole handles DNS-level filtering and Portainer handles container lifecycle, both surfaced through the same command-center view rather than as separate, disconnected tools.",
      "The dashboard layer ties node health, service health, and topology together so the state of the whole environment is visible without hopping between machines.",
    ],
    challenges: [
      "Keeping WireGuard connectivity resilient across nodes with different network conditions (including a remote Raspberry Pi client).",
      "Avoiding dashboard sprawl — consolidating Prometheus/Grafana, Pi-hole, and Portainer views into something coherent instead of just more tabs.",
      "Balancing how much detail to surface at a glance versus how much to leave one click deeper.",
    ],
    currentState: [
      "Node health, service health, and network status are monitored centrally through Prometheus and Grafana.",
      "WireGuard connects core infrastructure to remote nodes, including a Raspberry Pi client reporting telemetry from elsewhere on the network.",
      "Pi-hole and Portainer are integrated into the same operational picture as the monitoring stack.",
    ],
    nextSteps: [
      "Add more granular alerting on top of existing metrics rather than relying on manual dashboard checks.",
      "Extend topology visibility as more nodes and services are added.",
      "Continue consolidating the command-center view as the single source of truth for infrastructure state.",
    ],
    image: "/portfolio/projects/network-command-center.png",
    imageAlt:
      "Network Command Center dashboard: network score 100/Excellent, AI-generated network analyst summary, and healthy status across internet, DNS, devices, and security.",
    imageFit: "contain",
    metaTitle: "Home Network Command Center | Robert F. Swenson III",
    metaDescription:
      "A centralized interface for monitoring and managing home network infrastructure, services, devices, availability, performance, and system health.",
  },
  {
    slug: "homelab",
    title: "HOMELAB",
    subtitle: "Self-Hosted Infrastructure",
    summary:
      "A distributed Linux homelab supporting networking, monitoring, security, AI, storage, VPN connectivity, and application hosting.",
    description:
      "A distributed Linux homelab supporting networking, monitoring, security, AI, storage, VPN connectivity, and application hosting — the physical and virtual foundation the other projects run on.",
    tags: ["LINUX", "DOCKER", "KVM", "PROMETHEUS", "GRAFANA"],
    status: "OPERATIONAL",
    host: "UBUNTU / RASPBERRY PI",
    deployment: "SELF-HOSTED",
    featured: false,
    technologies: [
      "Ubuntu Server",
      "Docker",
      "KVM",
      "Prometheus",
      "Grafana",
      "Wazuh",
      "Suricata",
      "Pi-hole",
      "Portainer",
      "Uptime Kuma",
      "WireGuard",
    ],
    architecture: {
      variant: "tree",
      root: "Homelab",
      branches: [
        {
          label: "SECURITY-CORE (Ubuntu Server)",
          items: [
            "Wazuh",
            "Suricata",
            "Prometheus",
            "Grafana",
            "Portainer",
            "Uptime Kuma",
            "Pi-hole",
            "Docker",
            "KVM",
            "Security application",
            "Automation workloads",
          ],
        },
        {
          label: "GRAYDRAGON-AI",
          items: [
            "Local LLM inference",
            "llama.cpp",
            "CUDA",
            "Qwen models",
            "OpenAI-compatible API",
          ],
        },
        {
          label: "PI4-CORE",
          items: [
            "WireGuard server",
            "Prometheus",
            "Grafana",
            "Pi-hole",
            "Blackbox exporter",
            "Speedtest exporter",
            "Portainer",
          ],
        },
        {
          label: "PI3B-RIVER",
          items: [
            "Remote WireGuard client",
            "Monitoring exporters",
            "Remote infrastructure telemetry",
          ],
        },
      ],
    },
    problem: [
      "Running several distinct systems (security, AI, monitoring, networking) needs a reliable, coherent physical and virtual foundation instead of ad-hoc single-purpose boxes.",
      "Security tooling, AI workloads, and general services have different resource and isolation needs.",
      "Remote nodes need to participate in the same network fabric without weakening its security posture.",
    ],
    requirements: [
      "Separate security-sensitive workloads (Wazuh, Suricata) from general application hosting while keeping them observable together.",
      "Give AI inference its own dedicated node with GPU access rather than competing with other services.",
      "Provide a WireGuard-based core for connecting distributed nodes, including a remote Raspberry Pi.",
      "Standardize on Docker and KVM for workload isolation and portability across nodes.",
    ],
    build: [
      "SECURITY-CORE, an Ubuntu Server host, runs Wazuh and Suricata for security monitoring, Prometheus/Grafana/Uptime Kuma for observability, Pi-hole for DNS filtering, and Portainer for container management, alongside Docker and KVM for general workloads and automation.",
      "GRAYDRAGON-AI is a dedicated node for local LLM inference, running llama.cpp with CUDA acceleration to serve Qwen models behind an OpenAI-compatible API.",
      "PI4-CORE, a Raspberry Pi, runs the WireGuard server along with Prometheus, Grafana, Pi-hole, and blackbox/speedtest exporters — acting as a lightweight, always-on core for networking and monitoring.",
      "PI3B-RIVER is a remote Raspberry Pi acting as a WireGuard client elsewhere on the network, running monitoring exporters so its telemetry feeds back into the same observability stack.",
    ],
    challenges: [
      "Balancing resource allocation between security tooling, AI inference, and general services across a small number of physical nodes.",
      "Keeping a Raspberry Pi-based core reliable enough to depend on for WireGuard and monitoring.",
      "Maintaining consistent observability (Prometheus/Grafana) across nodes with very different hardware profiles.",
    ],
    currentState: [
      "All four nodes — SECURITY-CORE, GRAYDRAGON-AI, PI4-CORE, and PI3B-RIVER — are operational and integrated into the same monitoring and networking fabric.",
      "Security tooling, AI inference, monitoring, DNS filtering, and container management are each running on the node best suited to them.",
      "WireGuard connects core and remote nodes, giving PI3B-RIVER visibility from elsewhere on the network without public exposure.",
    ],
    nextSteps: [
      "Continue expanding storage and backup strategy across nodes.",
      "Add capacity as AI and security workloads grow.",
      "Formalize documentation of the topology as more services are added.",
    ],
    image: "/portfolio/projects/homelab.png",
    imageAlt:
      "Homelab node overview: security-core, pi4-core, pi3b-river, and graydragon-ai, each shown online with their core responsibilities.",
    metaTitle: "Homelab & Multi-Node Infrastructure | Robert F. Swenson III",
    metaDescription:
      "A self-hosted multi-node Linux infrastructure environment using WireGuard, Docker, KVM, monitoring, security tooling, and remote systems integration.",
  },
  {
    slug: "local-ai",
    title: "LOCAL AI INFRASTRUCTURE",
    subtitle: "Self-Hosted Inference Platform",
    summary:
      "Self-hosted local inference platform using llama.cpp, NVIDIA GPU acceleration, OpenAI-compatible APIs, and Qwen models.",
    description:
      "A self-hosted local inference platform using llama.cpp, NVIDIA GPU acceleration, OpenAI-compatible APIs, and Qwen models — the AI infrastructure layer that other projects, including Graydragon, build on.",
    tags: ["LLM", "CUDA", "LLAMA.CPP", "SELF-HOSTED", "AI"],
    status: "ACTIVE",
    host: "UBUNTU",
    deployment: "SELF-HOSTED",
    featured: false,
    technologies: [
      "llama.cpp",
      "CUDA",
      "NVIDIA GTX 1080 8GB",
      "Qwen3-8B",
      "OpenAI-compatible API",
    ],
    architecture: {
      variant: "flow",
      steps: [
        "Qwen3-8B Model",
        "llama.cpp (CUDA)",
        "NVIDIA GTX 1080",
        "OpenAI-Compatible API",
        "Downstream Applications",
      ],
    },
    infraSpecs: [
      { label: "GPU", value: "NVIDIA GTX 1080 8GB" },
      { label: "MODEL", value: "Qwen3-8B Q3_K_L" },
      { label: "INFERENCE", value: "llama.cpp CUDA" },
      { label: "API", value: "OpenAI-compatible" },
      { label: "CONTEXT", value: "4096 tokens" },
    ],
    problem: [
      "Depending entirely on hosted AI providers introduces cost, privacy, and availability tradeoffs for daily-use automation.",
      "Consumer-grade GPU hardware (an 8GB GTX 1080) constrains which models and quantizations are practical to run locally.",
      "Applications built on top of AI shouldn't need to know or care whether inference is local or hosted.",
    ],
    requirements: [
      "Run a capable open-weight model locally within an 8GB GPU's memory budget.",
      "Expose inference through an OpenAI-compatible API so existing tooling and libraries work without modification.",
      "Keep the provider layer swappable so local and hosted inference can be used interchangeably.",
    ],
    build: [
      "llama.cpp with CUDA acceleration serves a Qwen3-8B model at Q3_K_L quantization on an NVIDIA GTX 1080, chosen to fit within 8GB of VRAM while remaining usable for real tasks.",
      "The server exposes an OpenAI-compatible API, so anything built to talk to a hosted provider can point at this endpoint instead with no code changes.",
      "A 4096-token context window is treated as a known constraint that shapes how requests are structured upstream, rather than something to work around silently.",
    ],
    challenges: [
      "Fitting a useful model and context window into an 8GB consumer GPU without an unacceptable quality tradeoff.",
      "Keeping the OpenAI-compatible surface close enough to the real API that downstream tools don't need special cases.",
      "Deciding what should run locally versus fall back to a hosted provider.",
    ],
    currentState: [
      "The GTX 1080 serves Qwen3-8B through llama.cpp behind an OpenAI-compatible endpoint in daily use.",
      "Graydragon and other internal tooling consume this endpoint as a first-class provider, not an experiment.",
    ],
    nextSteps: [
      "Evaluate additional quantization and model options as they become practical on the existing hardware.",
      "Expand context-window handling for longer-running tasks.",
      "Continue reducing reliance on hosted providers where local inference is sufficient.",
    ],
    image: "/portfolio/projects/local-ai.png",
    imageAlt:
      "Local AI Gateway: graydragon-ai node running Qwen3-8B Q3_K_L on a GTX 1080 8GB, serving local, private, GPU-accelerated inference.",
    metaTitle: "Local AI Infrastructure | Robert F. Swenson III",
    metaDescription:
      "Self-hosted GPU-based AI infrastructure using llama.cpp, CUDA, Qwen, and an OpenAI-compatible API for private local inference and system integration.",
  },
  {
    slug: "mortgage-intelligence",
    title: "MORTGAGE INTELLIGENCE",
    subtitle: "Rate Tracking & Decision Support",
    summary:
      "Automated mortgage-rate tracking and decision support system designed around refinance thresholds and long-term financial planning.",
    description:
      "An automated mortgage-rate tracking and decision-support system built around refinance thresholds and long-term financial planning — turning a manual, easy-to-forget check into a monitored, data-backed decision.",
    tags: ["AUTOMATION", "DATA", "MONITORING", "DASHBOARD"],
    status: "ACTIVE",
    host: "UBUNTU",
    deployment: "SELF-HOSTED",
    featured: false,
    technologies: ["Python", "Scheduled automation", "Dashboarding"],
    architecture: {
      variant: "flow",
      steps: [
        "Rate Sources",
        "Automated Collection",
        "Threshold Evaluation",
        "Dashboard",
        "Decision Support",
      ],
    },
    problem: [
      "Refinance opportunities are time-sensitive and easy to miss when tracking rates means remembering to check manually.",
      "Rate data on its own doesn't answer the real question: does this specific move make sense given the numbers that matter for this loan.",
    ],
    requirements: [
      "Automatically collect current mortgage-rate data on a schedule instead of relying on manual checks.",
      "Evaluate rates against defined refinance thresholds relevant to the actual loan and financial plan.",
      "Present results on a dashboard rather than in scattered notes or spreadsheets.",
    ],
    build: [
      "A scheduled collection job pulls current rate data and logs it over time, rather than only capturing a single point-in-time snapshot.",
      "Collected rates are evaluated against defined refinance thresholds to flag when conditions actually justify a closer look.",
      "A dashboard presents current rates, history, and threshold status, turning the process into a monitored system instead of a recurring manual chore.",
    ],
    challenges: [
      "Defining thresholds that reflect real breakeven math rather than a simple 'rate went down' check.",
      "Keeping data collection reliable over long, mostly-uneventful stretches where nothing changes.",
    ],
    currentState: [
      "Automated rate tracking and threshold evaluation run on a schedule, with results visible on a dashboard.",
      "The system functions as ongoing monitoring rather than a one-time calculator.",
    ],
    nextSteps: [
      "Expand the model behind threshold evaluation as more real-world data accumulates.",
      "Add longer-horizon trend tracking to support broader financial planning, not just refinance timing.",
    ],
    image: "/portfolio/projects/mortgage-intelligence.png",
    imageAlt:
      "Mortgage Intelligence dashboard: 30-year rate trend line against a refinance target, with current average, target, and tracked balance.",
    metaTitle: "Mortgage Intelligence & Rate Monitoring | Robert F. Swenson III",
    metaDescription:
      "An automated mortgage intelligence system that monitors lending conditions, tracks rate movement, and surfaces decision-relevant changes.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getSecondaryProjects(): Project[] {
  return projects.filter((p) => !p.featured);
}
