"use client";

import Image from "next/image";
import { useState } from "react";

interface ScreenshotFrameProps {
  src?: string;
  alt: string;
  label: string;
  aspect?: "video" | "wide" | "cinematic";
  glow?: boolean;
  accentSeed?: number;
}

const ratios: Record<NonNullable<ScreenshotFrameProps["aspect"]>, string> = {
  video: "aspect-video",
  wide: "aspect-[21/9]",
  cinematic: "aspect-[16/8] sm:aspect-[21/9]",
};

export default function ScreenshotFrame({
  src,
  alt,
  label,
  aspect = "video",
  glow = false,
  accentSeed = 0,
}: ScreenshotFrameProps) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;

  return (
    <div className="relative">
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 -z-10 rounded-[24px] bg-accent-bright/10 blur-2xl sm:-inset-6 sm:blur-3xl"
        />
      )}
      <div
        className={`relative ${ratios[aspect]} w-full overflow-hidden rounded-[14px] border border-border bg-bg-raised shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)]`}
      >
        {showImage ? (
          <Image
            src={src as string}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <SystemInterfacePlaceholder label={label} seed={accentSeed} />
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(119,197,138,0.12)]"
        />
      </div>
    </div>
  );
}

function SystemInterfacePlaceholder({
  label,
  seed,
}: {
  label: string;
  seed: number;
}) {
  const bars = [62, 40, 78, 34, 55, 70, 46];
  const rotated = bars.slice(seed % bars.length).concat(bars.slice(0, seed % bars.length));

  return (
    <div className="bg-grid absolute inset-0 flex flex-col bg-[radial-gradient(ellipse_at_top_right,rgba(119,197,138,0.08),transparent_60%)]">
      <div className="flex items-center gap-2 border-b border-border/80 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-text-muted/30" />
        <span className="h-2 w-2 rounded-full bg-text-muted/30" />
        <span className="h-2 w-2 rounded-full bg-text-muted/30" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-text-muted/70">
          {label}
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent-bright/80">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-bright shadow-[0_0_8px_rgba(119,197,138,0.9)]" />
          live
        </span>
      </div>

      <div className="flex flex-1 items-end gap-4 p-6 sm:p-8">
        <div className="flex h-full flex-1 items-end gap-2 sm:gap-3">
          {rotated.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[3px] bg-gradient-to-t from-accent-primary/70 to-accent-bright/40"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="hidden h-full w-px bg-border sm:block" />
        <div className="hidden flex-col justify-end gap-3 sm:flex">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-28 rounded-[8px] border border-border bg-bg-deep/60 px-3 py-2"
            >
              <div className="h-1.5 w-10 rounded-full bg-text-muted/25" />
              <div className="mt-2 h-1.5 w-16 rounded-full bg-accent-bright/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
