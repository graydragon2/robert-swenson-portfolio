interface TopoNode {
  id: string;
  x: number;
  y: number;
  r: number;
  label: string;
  sublabel?: string;
  sublabel2?: string;
  icon: IconKey;
  status?: boolean;
}

interface TopoEdge {
  from: string;
  to: string;
  dashed?: boolean;
}

type IconKey =
  | "cloud"
  | "shield"
  | "hub"
  | "server"
  | "chip"
  | "router"
  | "antenna"
  | "camera"
  | "database"
  | "monitor";

const nodes: TopoNode[] = [
  { id: "internet", x: 500, y: 40, r: 20, label: "INTERNET", icon: "cloud" },
  {
    id: "firewall",
    x: 500,
    y: 130,
    r: 22,
    label: "FIREWALL / ROUTER",
    icon: "shield",
  },
  {
    id: "core",
    x: 500,
    y: 225,
    r: 30,
    label: "CORE NETWORK",
    icon: "hub",
  },
  {
    id: "security-core",
    x: 190,
    y: 350,
    r: 28,
    label: "SECURITY-CORE",
    sublabel: "Security • Monitoring",
    sublabel2: "Docker • KVM",
    icon: "server",
    status: true,
  },
  {
    id: "graydragon-ai",
    x: 410,
    y: 350,
    r: 28,
    label: "GRAYDRAGON-AI",
    sublabel: "Local AI Inference",
    sublabel2: "Qwen • llama.cpp",
    icon: "chip",
    status: true,
  },
  {
    id: "pi4-core",
    x: 630,
    y: 350,
    r: 28,
    label: "PI4-CORE",
    sublabel: "Network Core • VPN",
    sublabel2: "WireGuard • Monitoring",
    icon: "router",
    status: true,
  },
  {
    id: "pi3b-river",
    x: 860,
    y: 420,
    r: 24,
    label: "PI3B-RIVER",
    sublabel: "Remote Node",
    sublabel2: "Monitoring • Telemetry",
    icon: "antenna",
    status: true,
  },
  {
    id: "cameras",
    x: 110,
    y: 470,
    r: 18,
    label: "CAMERAS",
    sublabel: "(Reolink)",
    icon: "camera",
  },
  {
    id: "storage",
    x: 260,
    y: 470,
    r: 18,
    label: "STORAGE",
    sublabel: "(NAS)",
    icon: "database",
  },
  {
    id: "cloud-apis",
    x: 410,
    y: 470,
    r: 18,
    label: "CLOUD APIS",
    sublabel: "(Gmail, Calendar)",
    icon: "cloud",
  },
  {
    id: "clients",
    x: 630,
    y: 470,
    r: 18,
    label: "CLIENTS",
    sublabel: "(LAN / VPN)",
    icon: "monitor",
  },
];

const edges: TopoEdge[] = [
  { from: "internet", to: "firewall" },
  { from: "firewall", to: "core" },
  { from: "core", to: "security-core" },
  { from: "core", to: "graydragon-ai" },
  { from: "core", to: "pi4-core" },
  { from: "pi4-core", to: "pi3b-river", dashed: true },
  { from: "security-core", to: "cameras" },
  { from: "security-core", to: "storage" },
  { from: "graydragon-ai", to: "cloud-apis", dashed: true },
  { from: "pi4-core", to: "clients" },
];

function nodeById(id: string) {
  const n = nodes.find((node) => node.id === id);
  if (!n) throw new Error(`Unknown topology node: ${id}`);
  return n;
}

function curvePath(a: TopoNode, b: TopoNode) {
  const midY = (a.y + b.y) / 2;
  return `M ${a.x} ${a.y} C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`;
}

export default function TopologyDiagram({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="relative w-full">
      {title && (
        <div className="mb-4 sm:absolute sm:mb-0 sm:left-1 sm:top-0 sm:z-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
            {title}
          </p>
          {subtitle && (
            <p className="mt-1 text-sm text-text-muted">{subtitle}</p>
          )}
        </div>
      )}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 1000 545"
          className="h-auto w-full min-w-[680px]"
          role="img"
          aria-label="Network topology: internet through firewall and core network, fanning out to security-core, graydragon-ai, pi4-core, and remote node pi3b-river, with cameras, storage, cloud APIs, and clients."
        >
        <defs>
          <filter id="topo-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="topo-bg" cx="50%" cy="10%" r="80%">
            <stop offset="0%" stopColor="#1F3D2E" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1F3D2E" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1000" height="545" fill="url(#topo-bg)" />

        <g className="text-border" fill="none" stroke="currentColor" strokeWidth="1">
          {edges
            .filter((e) => !e.dashed)
            .map((e, i) => (
              <path
                key={i}
                d={curvePath(nodeById(e.from), nodeById(e.to))}
                className="text-accent-bright/40"
                stroke="currentColor"
              />
            ))}
          {edges
            .filter((e) => e.dashed)
            .map((e, i) => (
              <path
                key={i}
                d={curvePath(nodeById(e.from), nodeById(e.to))}
                className="text-accent-bright/30"
                stroke="currentColor"
                strokeDasharray="5 6"
              />
            ))}
          {edges
            .filter((e) => !e.dashed)
            .map((e, i) => (
              <path
                key={`flow-${i}`}
                d={curvePath(nodeById(e.from), nodeById(e.to))}
                className="topo-flow text-accent-bright"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2 14"
                strokeLinecap="round"
              />
            ))}
        </g>

        {nodes.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              className="fill-bg-raised text-border-strong"
              stroke="currentColor"
              strokeWidth={1.5}
              filter={n.r >= 28 ? "url(#topo-glow)" : undefined}
            />
            <g
              transform={`translate(${n.x - 9}, ${n.y - 9})`}
              className="text-accent-bright"
              stroke="currentColor"
              fill="none"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <NodeIcon icon={n.icon} />
            </g>
            {n.status && (
              <circle
                cx={n.x + n.r * 0.68}
                cy={n.y - n.r * 0.68}
                r={4}
                className="fill-accent-bright"
              />
            )}
            <text
              x={n.x}
              y={n.y + n.r + 20}
              textAnchor="middle"
              className="fill-current text-text-main"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontSize: 13,
                letterSpacing: "0.04em",
                fontWeight: 500,
              }}
            >
              {n.label}
            </text>
            {n.sublabel && (
              <text
                x={n.x}
                y={n.y + n.r + 36}
                textAnchor="middle"
                className="fill-current text-text-muted"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontSize: 10.5,
                  letterSpacing: "0.03em",
                }}
              >
                {n.sublabel}
              </text>
            )}
            {n.sublabel2 && (
              <text
                x={n.x}
                y={n.y + n.r + 50}
                textAnchor="middle"
                className="fill-current text-text-muted/70"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontSize: 9.5,
                  letterSpacing: "0.03em",
                }}
              >
                {n.sublabel2}
              </text>
            )}
          </g>
        ))}
        </svg>
      </div>
    </div>
  );
}

function NodeIcon({ icon }: { icon: IconKey }) {
  switch (icon) {
    case "cloud":
      return <path d="M4 13a3 3 0 0 1 1-5.8 4 4 0 0 1 7.6-1A3.5 3.5 0 0 1 14 13H4Z" />;
    case "shield":
      return <path d="M9 1 3 3v5c0 4 2.6 6.6 6 8 3.4-1.4 6-4 6-8V3L9 1Z" />;
    case "hub":
      return (
        <>
          <circle cx="9" cy="9" r="2.6" />
          <path d="M9 1.5V4M9 14v2.5M1.5 9H4M14 9h2.5M3.5 3.5 5.3 5.3M12.7 12.7l1.8 1.8M3.5 14.5l1.8-1.8M12.7 5.3l1.8-1.8" />
        </>
      );
    case "server":
      return (
        <>
          <rect x="1.5" y="2" width="15" height="5.5" rx="1" />
          <rect x="1.5" y="10.5" width="15" height="5.5" rx="1" />
          <circle cx="4.5" cy="4.75" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="4.5" cy="13.25" r="0.8" fill="currentColor" stroke="none" />
        </>
      );
    case "chip":
      return (
        <>
          <rect x="4" y="4" width="10" height="10" rx="1.2" />
          <path d="M7 1.5V4M11 1.5V4M7 14v2.5M11 14v2.5M1.5 7H4M1.5 11H4M14 7h2.5M14 11h2.5" />
        </>
      );
    case "router":
      return (
        <>
          <rect x="1.5" y="7" width="15" height="6" rx="1.2" />
          <path d="M5 7V4.5M9 7V3M13 7V4.5" />
          <circle cx="13.5" cy="10" r="0.8" fill="currentColor" stroke="none" />
        </>
      );
    case "antenna":
      return (
        <>
          <path d="M9 17V8" />
          <path d="M9 8 4 2M9 8l5-6" />
          <path d="M5.5 5.2A5 5 0 0 0 9 12a5 5 0 0 0 3.5-6.8" opacity="0" />
          <circle cx="9" cy="8" r="1.4" fill="currentColor" stroke="none" />
        </>
      );
    case "camera":
      return (
        <>
          <rect x="1.5" y="5" width="12" height="9" rx="1.5" />
          <path d="M13.5 8 17 6v6l-3.5-2Z" />
          <circle cx="7.5" cy="9.5" r="2" />
        </>
      );
    case "database":
      return (
        <>
          <ellipse cx="9" cy="4" rx="6.5" ry="2.3" />
          <path d="M2.5 4v10c0 1.3 2.9 2.3 6.5 2.3s6.5-1 6.5-2.3V4" />
          <path d="M2.5 9c0 1.3 2.9 2.3 6.5 2.3s6.5-1 6.5-2.3" />
        </>
      );
    case "monitor":
      return (
        <>
          <rect x="1.5" y="2.5" width="15" height="10" rx="1.2" />
          <path d="M6 16h6M9 12.5V16" />
        </>
      );
    default:
      return null;
  }
}
