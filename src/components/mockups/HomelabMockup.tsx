const nodes = ["security-core", "graydragon-ai", "pi4-core", "pi3b-river"];

export default function HomelabMockup() {
  return (
    <div className="flex h-full w-full items-stretch bg-[#0a1310] font-body text-text-main">
      <div className="flex flex-1 flex-col justify-center gap-2 p-5 sm:p-6">
        <p className="text-base font-bold tracking-tight sm:text-lg">Homelab</p>
        <p className="font-mono text-[10px] uppercase tracking-wide text-accent-bright">
          Small nodes. Big possibilities.
        </p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {["Linux", "Docker", "KVM", "Monitoring", "Security", "Automation"].map(
            (t) => (
              <span
                key={t}
                className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-wide text-text-muted"
              >
                {t}
              </span>
            )
          )}
        </div>
      </div>

      <div className="hidden flex-1 flex-col justify-center gap-2 border-l border-border/70 p-5 sm:flex sm:p-6">
        {nodes.map((n, i) => (
          <div
            key={n}
            className="flex items-center gap-2 rounded-[6px] border border-border/70 bg-bg-raised/70 px-2.5 py-1.5"
          >
            <span className="flex gap-0.5">
              {Array.from({ length: 4 }).map((_, j) => (
                <span
                  key={j}
                  className={`h-3 w-0.5 rounded-full ${
                    j === i % 4 ? "bg-accent-bright" : "bg-border-strong"
                  }`}
                />
              ))}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wide text-text-main">
              {n}
            </span>
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent-bright" />
          </div>
        ))}
      </div>
    </div>
  );
}
