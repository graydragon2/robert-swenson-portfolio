import type { InfraNode } from "@/data/infrastructure";

export default function NodeCard({ node }: { node: InfraNode }) {
  return (
    <div className="flex flex-col rounded-[14px] border border-border bg-bg-raised p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-sans text-base font-semibold tracking-wide text-text-main">
            {node.name}
          </h3>
          <p className="mt-1 text-sm text-text-muted">{node.role}</p>
        </div>
        <span className="flex flex-shrink-0 items-center gap-1.5 rounded-md border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-accent-bright">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
          {node.status}
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-wide text-text-muted">
        <dt>Host</dt>
        <dd className="text-right text-text-main">{node.host}</dd>
      </dl>

      <ul className="mt-4 flex flex-wrap gap-2">
        {node.responsibilities.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
