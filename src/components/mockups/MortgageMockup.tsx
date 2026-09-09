export default function MortgageMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0a1310] p-4 font-body text-text-main sm:p-6">
      <div>
        <p className="text-sm font-bold tracking-tight sm:text-base">
          Mortgage Intelligence
        </p>
        <p className="mt-0.5 text-[10.5px] text-text-muted">
          Turning a once-a-year question into a data-backed decision.
        </p>
      </div>

      <div className="relative mt-3 flex-1 rounded-[8px] border border-border/70 bg-bg-raised/70 p-2.5">
        <p className="font-mono text-[8.5px] uppercase tracking-wide text-text-muted">
          30-Year Fixed Rate
        </p>
        <svg viewBox="0 0 200 60" className="mt-1 h-full w-full">
          <polyline
            points="0,15 20,20 40,18 60,28 80,25 100,35 120,32 140,42 160,38 180,46 200,44"
            fill="none"
            stroke="#77C58A"
            strokeWidth="2"
          />
          <circle cx="180" cy="46" r="3" fill="#77C58A" />
        </svg>
        <span className="absolute right-3 top-8 rounded-md border border-accent-bright/60 bg-bg-deep/90 px-2 py-1 font-mono text-[10px] font-semibold text-accent-bright">
          6.12%
        </span>
      </div>

      <div className="mt-3 hidden grid-cols-3 gap-2 sm:grid">
        {[
          ["Current Rate", "6.12%"],
          ["Target Rate", "5.50%"],
          ["Potential Savings", "~$220/mo"],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="font-mono text-[8px] uppercase tracking-wide text-text-muted">
              {label}
            </p>
            <p className="text-[11px] font-semibold text-text-main">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
