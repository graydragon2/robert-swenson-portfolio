import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import NodeCard from "@/components/NodeCard";
import { infraNodes } from "@/data/infrastructure";
import { socialImage } from "@/data/site";

const title = "Infrastructure — Robert F. Swenson III";
const description =
  "The homelab, networking, and AI infrastructure behind Robert F. Swenson III's projects — four nodes connected through a private WireGuard network, with a shared monitoring layer.";

export const metadata: Metadata = {
  title: "Infrastructure",
  description,
  alternates: {
    canonical: "/infrastructure",
  },
  openGraph: {
    type: "website",
    url: "/infrastructure",
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage.url],
  },
};

export default function InfrastructurePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-bg-deep py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[url('/portfolio/backgrounds/systems-background.svg')] bg-cover bg-center opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,16,12,0.55)_0%,rgba(7,16,12,0.85)_100%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Infrastructure"
            title="A small, deliberate network"
            description="A small, deliberate network connecting four primary nodes through WireGuard, with shared monitoring and observability. Everything here is self-hosted, self-maintained, and running for real, daily use — not a demo environment."
            align="center"
          />

          <div className="mt-16 overflow-x-auto rounded-[20px] border border-border bg-bg-raised/50 p-4 sm:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element -- static vector diagram, sharp at any size */}
            <img
              src="/portfolio/diagrams/infrastructure-topology.svg"
              alt="Infrastructure topology: security-core, graydragon-ai, pi4-core, and pi3b-river connected through a private WireGuard network."
              className="h-auto w-full lg:min-w-[720px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
            Nodes
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
            Four nodes, each doing one job well
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {infraNodes.map((node) => (
              <NodeCard key={node.id} node={node} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bg-deep py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
            Design Principle
          </p>
          <p className="mt-5 text-2xl font-medium leading-relaxed text-text-main sm:text-3xl">
            Security-sensitive workloads, AI inference, and networking each
            run on the node best suited to them — connected through
            WireGuard and observed through one shared Prometheus/Grafana
            layer.
          </p>
          <p className="mt-6 text-base leading-relaxed text-text-muted">
            The goal is infrastructure that stays understandable as it
            grows, not a pile of one-off boxes.
          </p>
        </div>
      </section>
    </div>
  );
}
