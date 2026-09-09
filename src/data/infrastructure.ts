export interface InfraNode {
  id: string;
  name: string;
  role: string;
  host: string;
  status: "ONLINE" | "OPERATIONAL";
  responsibilities: string[];
}

export const infraNodes: InfraNode[] = [
  {
    id: "security-core",
    name: "SECURITY-CORE",
    role: "Security, monitoring & automation host",
    host: "Ubuntu Server",
    status: "ONLINE",
    responsibilities: [
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
    id: "graydragon-ai",
    name: "GRAYDRAGON-AI",
    role: "Local AI inference node",
    host: "Ubuntu + NVIDIA GTX 1080",
    status: "ONLINE",
    responsibilities: [
      "Local LLM inference",
      "llama.cpp",
      "CUDA",
      "Qwen models",
      "OpenAI-compatible API",
    ],
  },
  {
    id: "pi4-core",
    name: "PI4-CORE",
    role: "Network core & VPN gateway",
    host: "Raspberry Pi 4",
    status: "ONLINE",
    responsibilities: [
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
    id: "pi3b-river",
    name: "PI3B-RIVER",
    role: "Remote telemetry node",
    host: "Raspberry Pi 3B",
    status: "ONLINE",
    responsibilities: [
      "Remote WireGuard client",
      "Monitoring exporters",
      "Remote infrastructure telemetry",
    ],
  },
];

export const infraTopology = {
  chain: ["Internet", "Firewall / Router", "Core Network"],
  branchNodeIds: ["security-core", "graydragon-ai", "pi4-core", "pi3b-river"],
  leaves: ["Cameras", "Clients", "Storage", "Cloud APIs"],
};
