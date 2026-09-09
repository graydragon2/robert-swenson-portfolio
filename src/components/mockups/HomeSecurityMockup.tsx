export default function HomeSecurityMockup() {
  return (
    <div className="relative flex h-full w-full flex-col bg-[#060d0a] font-body text-text-main">
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-border/70 bg-bg-deep/60 px-4 py-2">
        <div>
          <p className="text-xs font-semibold sm:text-sm">Home Security</p>
          <p className="font-mono text-[9px] text-text-muted">
            Context-Aware. Smarter Security.
          </p>
        </div>
        <span className="rounded-md border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-accent-bright">
          Home Mode
        </span>
      </div>

      <div className="relative flex flex-1">
        {/* camera scene */}
        <div className="relative flex-1 overflow-hidden bg-[radial-gradient(ellipse_at_50%_30%,#1a2b22,transparent_70%)]">
          {/* night sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050a08] via-[#0a1310] to-[#0d1a14]" />
          {/* house silhouette */}
          <svg viewBox="0 0 300 140" className="absolute bottom-0 h-3/4 w-full" preserveAspectRatio="xMidYMax slice">
            <path d="M40 140 L40 90 L90 55 L140 90 L140 140 Z" fill="#0e1813" />
            <rect x="95" y="105" width="18" height="35" fill="#060c09" />
            <rect x="55" y="100" width="14" height="14" fill="#2a3a30" opacity="0.6" />
          </svg>
          {/* vehicle box */}
          <div className="absolute bottom-8 left-[18%] h-12 w-24 rounded-[3px] border-2 border-accent-bright/90 sm:h-14 sm:w-28">
            <span className="absolute -top-4 left-0 rounded bg-accent-bright/90 px-1 font-mono text-[8px] font-semibold text-bg-deep">
              Vehicle 0.97
            </span>
          </div>
          {/* person box */}
          <div className="absolute bottom-10 right-[22%] h-14 w-6 rounded-[3px] border-2 border-accent-bright/90 sm:h-16">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-accent-bright/90 px-1 font-mono text-[8px] font-semibold text-bg-deep">
              Person 0.92
            </span>
          </div>
        </div>

        {/* status panel */}
        <div className="hidden w-32 flex-shrink-0 flex-col gap-2 border-l border-border/70 bg-bg-deep/60 p-2.5 sm:flex">
          {[
            ["Home Mode", "Armed"],
            ["People", "2 Home"],
            ["Vehicles", "1 On Property"],
            ["Cameras", "All Online"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="font-mono text-[8px] uppercase tracking-wide text-text-muted">
                {label}
              </p>
              <p className="text-[10.5px] font-medium text-text-main">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* tab bar */}
      <div className="flex gap-3 border-t border-border/70 bg-bg-deep/60 px-4 py-1.5 font-mono text-[8.5px] uppercase tracking-wide text-text-muted">
        <span className="text-accent-bright">Cameras</span>
        <span>Presence</span>
        <span className="hidden sm:inline">Zones</span>
        <span className="hidden sm:inline">Incidents</span>
        <span className="hidden sm:inline">AI Verification</span>
      </div>
    </div>
  );
}
