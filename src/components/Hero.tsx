import Button from "@/components/Button";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[94vh] flex-col justify-center overflow-hidden border-b border-border bg-bg-deep">
      <HeroBackdrop />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-8 lg:px-8 lg:py-32">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent-bright sm:text-sm">
            {site.descriptor}
          </p>

          <h1 className="mt-6 text-[13vw] font-bold leading-[0.95] tracking-tight text-text-main sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-9xl">
            ROBERT F.
            <br />
            SWENSON III
          </h1>

          <p className="glow-text mt-10 max-w-xl text-2xl font-semibold leading-snug text-text-main sm:text-3xl lg:text-4xl">
            {site.heroStatement}
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            {site.heroSupport}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects" variant="primary">
              Explore Projects
            </Button>
            <Button href="/resume" variant="outline">
              View Resume
            </Button>
          </div>

          <div className="mt-14 border-t border-border pt-6">
            <p className="max-w-sm text-sm italic leading-relaxed text-text-muted">
              {site.quote.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <NetworkGraphic />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-4 hidden flex-col items-end gap-2.5 sm:right-8 md:flex">
        {site.philosophy.map((word, i) => (
          <span
            key={word}
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-text-muted/60"
            style={{ opacity: 1 - i * 0.08 }}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* deep radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_75%_10%,rgba(31,61,46,0.55),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_100%,rgba(119,197,138,0.10),transparent_65%)]" />

      {/* faint architecture grid */}
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      {/* layered mountain / ridge silhouette for atmospheric depth */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[55%] w-full"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 320 L120 260 L260 300 L400 200 L560 270 L700 180 L860 250 L1000 190 L1160 260 L1300 210 L1440 280 L1440 500 L0 500 Z"
          fill="#0B1510"
          opacity="0.9"
        />
        <path
          d="M0 380 L160 330 L320 370 L480 300 L640 350 L800 290 L960 355 L1120 310 L1280 365 L1440 330 L1440 500 L0 500 Z"
          fill="#0E1813"
        />
        <path
          d="M0 430 L200 410 L380 440 L560 405 L760 445 L960 400 L1160 440 L1440 415 L1440 500 L0 500 Z"
          fill="#07100C"
        />
      </svg>

      {/* fog band */}
      <div className="absolute inset-x-0 bottom-[18%] h-32 bg-gradient-to-t from-transparent via-bg-deep/40 to-transparent blur-2xl" />

      {/* vignette + noise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(7,16,12,0.75)_100%)]" />
      <div className="bg-noise absolute inset-0" />
    </div>
  );
}

function NetworkGraphic() {
  const nodes = [
    { x: 60, y: 40, r: 4.5 },
    { x: 230, y: 15, r: 4.5 },
    { x: 350, y: 95, r: 4.5 },
    { x: 130, y: 150, r: 8 },
    { x: 280, y: 195, r: 4.5 },
    { x: 45, y: 245, r: 4.5 },
    { x: 200, y: 270, r: 4.5 },
    { x: 340, y: 245, r: 4.5 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [1, 4],
    [4, 7],
  ];

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-accent-bright/10 blur-3xl"
      />
      <svg
        viewBox="0 0 400 300"
        className="relative h-auto w-full max-w-md text-accent-bright/80"
        aria-hidden="true"
      >
        <defs>
          <filter id="hero-node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="currentColor"
            strokeOpacity={0.4}
            strokeWidth={1}
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="#07100C"
            stroke="currentColor"
            strokeWidth={1.5}
            filter={n.r > 6 ? "url(#hero-node-glow)" : undefined}
          />
        ))}
      </svg>
    </div>
  );
}
