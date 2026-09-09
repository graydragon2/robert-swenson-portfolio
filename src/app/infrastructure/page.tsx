import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import TopologyDiagram from "@/components/TopologyDiagram";
import NodeCard from "@/components/NodeCard";
import { infraNodes } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "The homelab, networking, and AI infrastructure behind Robert F. Swenson III's projects — four nodes, a WireGuard mesh, and a shared monitoring layer.",
};

export default function InfrastructurePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-bg-deep py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(31,61,46,0.4),transparent_65%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Infrastructure"
            title="A small, deliberate network"
            description="Four nodes, one WireGuard mesh, and a shared monitoring layer. Everything here is self-hosted, self-maintained, and running for real, daily use — not a demo environment."
            align="center"
          />

          <div className="mt-16 rounded-[20px] border border-border bg-bg-raised/50 p-4 sm:p-10">
            <TopologyDiagram />
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
            run on the node best suited to them — connected through a single
            WireGuard mesh and observed through one shared Prometheus/Grafana
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
