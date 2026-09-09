import type { ArchitectureSpec } from "@/data/projects";

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-nowrap items-stretch gap-3 overflow-x-auto pb-2">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-shrink-0 items-stretch gap-3">
          <div className="flex min-w-[9rem] items-center justify-center rounded-[10px] border border-border bg-bg-raised px-4 py-3 text-center font-mono text-xs uppercase tracking-wide text-text-main">
            {step}
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="flex items-center text-accent-bright"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function TreeDiagram({
  root,
  branches,
}: {
  root: string;
  branches: { label: string; items: string[] }[];
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-[10px] border border-border-strong bg-bg-raised px-5 py-3 font-mono text-xs uppercase tracking-wide text-accent-bright">
        {root}
      </div>
      <span aria-hidden="true" className="h-6 w-px bg-border" />
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {branches.map((branch) => (
          <div
            key={branch.label}
            className="flex flex-col rounded-[12px] border border-border bg-bg-raised p-4"
          >
            <p className="font-mono text-[11px] uppercase tracking-wide text-accent-bright">
              {branch.label}
            </p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {branch.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[11px] text-text-muted"
                >
                  <span className="text-accent-bright/70">›</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ArchitectureDiagram({
  spec,
}: {
  spec: ArchitectureSpec;
}) {
  if (spec.variant === "tree") {
    return <TreeDiagram root={spec.root} branches={spec.branches} />;
  }
  return <FlowDiagram steps={spec.steps} />;
}
