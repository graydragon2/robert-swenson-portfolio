export default function LocalAIMockup() {
  return (
    <div className="flex h-full w-full items-stretch bg-[#0a1310] font-body text-text-main">
      <div className="flex flex-1 flex-col justify-center gap-3 p-5 sm:p-6">
        <p className="text-base font-bold tracking-tight sm:text-lg">
          Local AI Infrastructure
        </p>
        <p className="font-mono text-[10px] uppercase tracking-wide text-accent-bright">
          Qwen · llama.cpp · CUDA
        </p>
        <ul className="mt-1 flex flex-col gap-1 text-[11px] text-text-muted">
          <li>Local.</li>
          <li>Private.</li>
          <li>Powerful.</li>
          <li>Practical.</li>
        </ul>
      </div>

      <div className="hidden flex-1 flex-col justify-center gap-3 border-l border-border/70 p-5 sm:flex sm:p-6">
        {/* stylized GPU card */}
        <div className="relative flex h-14 items-center rounded-[6px] border border-border-strong bg-gradient-to-r from-bg-raised to-bg-deep px-3 shadow-[0_0_18px_rgba(119,197,138,0.15)]">
          <div className="flex gap-[3px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="h-8 w-1 rounded-full bg-accent-primary/70" />
            ))}
          </div>
          <span className="ml-3 font-mono text-[9px] uppercase tracking-wide text-accent-bright">
            GTX 1080 · 8GB
          </span>
        </div>

        {/* terminal */}
        <div className="rounded-[6px] border border-border/70 bg-bg-deep/80 p-2.5 font-mono text-[9px] leading-relaxed text-text-muted">
          <p className="text-accent-bright">$ ./qwen --model qwen3-8b</p>
          <p>Initializing...</p>
          <p>
            CUDA: <span className="text-accent-bright">Enabled</span>
          </p>
          <p>Context: 4096</p>
          <p>API: http://localhost:8080/v1</p>
          <p>
            Status: <span className="text-accent-bright">Online</span>
          </p>
        </div>
      </div>
    </div>
  );
}
