const navItems = [
  "Overview",
  "Nodes",
  "Services",
  "Network",
  "Security",
  "Monitoring",
  "Logs",
  "Settings",
];

export default function NetworkCommandCenterMockup() {
  return (
    <div className="flex h-full w-full bg-[#0a1310] font-body text-text-main">
      <div className="hidden w-32 flex-shrink-0 flex-col gap-0.5 border-r border-border/70 bg-bg-deep/60 py-3 px-2 sm:flex">
        {navItems.map((item, i) => (
          <span
            key={item}
            className={`truncate rounded-[5px] px-2 py-1 font-mono text-[9.5px] uppercase tracking-wide ${
              i === 0
                ? "bg-accent-primary/40 text-accent-bright"
                : "text-text-muted"
            }`}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold sm:text-base">
            Network Command Center
          </p>
          <span className="flex items-center gap-1.5 rounded-md border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-accent-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
            All Systems Operational
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            ["4", "Nodes Online"],
            ["23", "Services"],
            ["1.2 Gb/s", "Traffic"],
            ["0", "Alerts"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[8px] border border-border/70 bg-bg-raised/70 px-2 py-2"
            >
              <p className="text-base font-bold text-text-main sm:text-lg">
                {value}
              </p>
              <p className="font-mono text-[8px] uppercase tracking-wide text-text-muted">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-[8px] border border-border/70 bg-bg-raised/70 p-2.5">
            <p className="font-mono text-[9px] uppercase tracking-wide text-accent-bright">
              Network Traffic
            </p>
            <svg viewBox="0 0 100 30" className="mt-2 h-8 w-full">
              <polyline
                points="0,25 10,20 20,22 30,12 40,16 50,8 60,14 70,6 80,10 90,4 100,9"
                fill="none"
                stroke="#77C58A"
                strokeWidth="1.5"
              />
              <polyline
                points="0,28 10,26 20,27 30,24 40,25 50,22 60,24 70,20 80,22 90,18 100,20"
                fill="none"
                stroke="#8D9C92"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="hidden flex-col items-center justify-center rounded-[8px] border border-border/70 bg-bg-raised/70 p-2.5 sm:flex">
            <p className="self-start font-mono text-[9px] uppercase tracking-wide text-accent-bright">
              Service Health
            </p>
            <div className="relative mt-1 flex h-14 w-14 items-center justify-center rounded-full border-4 border-accent-bright/70">
              <span className="text-[11px] font-bold text-text-main">98%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
