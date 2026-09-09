const navItems = [
  "Dashboard",
  "Intelligence",
  "Tasks",
  "Calendar",
  "Knowledge",
  "Automation",
  "Systems",
  "AI Providers",
  "Settings",
];

export default function GraydragonMockup() {
  return (
    <div className="flex h-full w-full bg-[#0a1310] font-body text-text-main">
      {/* sidebar */}
      <div className="hidden w-36 flex-shrink-0 flex-col border-r border-border/70 bg-bg-deep/60 py-3 sm:flex">
        <div className="flex items-center gap-1.5 px-3 pb-3">
          <span className="h-2 w-2 rounded-full bg-accent-bright shadow-[0_0_6px_rgba(119,197,138,0.9)]" />
          <span className="font-mono text-[10px] uppercase tracking-wide text-text-main">
            Graydragon
          </span>
        </div>
        <nav className="flex flex-col gap-0.5 px-2">
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
        </nav>
      </div>

      {/* main */}
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div>
          <p className="text-sm font-semibold text-text-main sm:text-base">
            Good morning, Robert.
          </p>
          <p className="font-mono text-[10px] text-text-muted">
            Tuesday, September 9, 2026
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ["3", "Priority Items"],
            ["12", "Calendar Events"],
            ["5", "Waiting On"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[8px] border border-border/70 bg-bg-raised/70 px-2.5 py-2"
            >
              <p className="text-lg font-bold text-text-main sm:text-xl">
                {value}
              </p>
              <p className="font-mono text-[8.5px] uppercase tracking-wide text-text-muted">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-[8px] border border-border/70 bg-bg-raised/70 p-2.5">
            <p className="font-mono text-[9px] uppercase tracking-wide text-accent-bright">
              System Status
            </p>
            <ul className="mt-1.5 flex flex-col gap-1">
              {["AI Server Online", "Automation Running", "Vault Sync Healthy"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 font-mono text-[9px] text-text-muted"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="hidden rounded-[8px] border border-border/70 bg-bg-raised/70 p-2.5 sm:block">
            <p className="font-mono text-[9px] uppercase tracking-wide text-accent-bright">
              Recent Intelligence
            </p>
            <ul className="mt-1.5 flex flex-col gap-1 font-mono text-[9px] text-text-muted">
              <li>Mortgage rate update available</li>
              <li>3 relevant emails</li>
              <li>Today&apos;s focus ready</li>
            </ul>
            <svg viewBox="0 0 100 24" className="mt-2 h-6 w-full text-accent-bright/70">
              <polyline
                points="0,20 15,15 30,17 45,8 60,12 75,4 100,6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
