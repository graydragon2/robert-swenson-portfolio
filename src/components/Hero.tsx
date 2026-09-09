import Image from "next/image";
import Button from "@/components/Button";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-bg-deep">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/portfolio/backgrounds/hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* legibility scrim: darker on the left/bottom where text sits */}
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,10,8,0.8)_0%,rgba(5,10,8,0.5)_35%,rgba(5,10,8,0.15)_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,10,8,0.6)_0%,transparent_45%)]" />
        <div className="bg-noise absolute inset-0 opacity-60" />
      </div>

      {/* vertical philosophy strip, far left edge */}
      <div className="pointer-events-none absolute inset-y-0 left-3 z-10 hidden flex-col items-center justify-center gap-3 sm:left-6 md:flex">
        {site.philosophy.map((word) => (
          <span
            key={word}
            className="font-mono text-[10px] uppercase tracking-[0.35em] text-text-muted/70"
          >
            {word}
          </span>
        ))}
      </div>

      {/* floating quote card, upper right */}
      <div className="absolute right-4 top-24 z-10 hidden max-w-[15rem] rounded-[10px] border border-border/70 bg-bg-deep/40 px-4 py-3 backdrop-blur-sm sm:right-6 sm:top-28 md:block lg:right-10">
        <p className="text-xs italic leading-relaxed text-text-main/90">
          {site.quote.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>

      {/* grounding tagline, lower right — general region only, never a precise location */}
      <div className="absolute bottom-8 right-4 z-10 hidden text-right sm:right-6 md:block lg:right-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted/60">
          Homelab // South Georgia
          <br />
          Systems online
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold leading-[0.95] tracking-tight text-text-main sm:text-7xl md:text-8xl lg:text-[6.5rem]">
            ROBERT F.
            <br />
            SWENSON III
          </h1>

          <p className="mt-5 font-mono text-xs uppercase tracking-[0.3em] text-accent-bright sm:text-sm">
            {site.descriptor}
          </p>

          <p className="glow-text mt-8 text-2xl font-semibold leading-snug text-text-main sm:text-3xl">
            {site.heroStatement}
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            {site.heroSupport}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects" variant="primary">
              Explore Projects
              <span aria-hidden="true">→</span>
            </Button>
            <Button href="/resume" variant="outline">
              View Resume
              <span aria-hidden="true">↓</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
