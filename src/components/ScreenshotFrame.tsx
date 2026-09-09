"use client";

import Image from "next/image";
import { useState } from "react";

interface ScreenshotFrameProps {
  src?: string;
  alt: string;
  label: string;
  aspect?: "video" | "wide" | "cinematic" | "editorial" | "supporting";
  /** "default" keeps the bordered card treatment; "artwork" de-cards the
   *  frame (shadow + radius only) for flagship/case-study hero imagery. */
  frame?: "default" | "artwork";
  /** "contain" letterboxes real application screenshots on a dark backing
   *  so no interface content is cropped; "cover" (default) fills the frame. */
  fit?: "cover" | "contain";
  glow?: boolean;
  priority?: boolean;
}

const ratios: Record<NonNullable<ScreenshotFrameProps["aspect"]>, string> = {
  video: "aspect-video",
  wide: "aspect-[21/9]",
  cinematic: "aspect-[16/8] sm:aspect-[21/9]",
  // Taller on mobile so real screenshots read large and legible; widens
  // into an editorial banner once there's room for it alongside copy.
  editorial: "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/9]",
  // Taller, closer-to-square ratio for supporting-project cards on desktop
  // so the artwork reads as visually dominant against a compact text block;
  // shorter and wider on mobile/tablet to avoid the artwork dominating the
  // card's total height on phones.
  supporting: "aspect-[16/10] lg:aspect-[4/3]",
};

export default function ScreenshotFrame({
  src,
  alt,
  label,
  aspect = "video",
  frame = "default",
  fit = "cover",
  glow = false,
  priority = false,
}: ScreenshotFrameProps) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;
  const bordered = frame === "default";

  return (
    <div className="relative">
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 -z-10 rounded-[24px] bg-accent-bright/10 blur-2xl sm:-inset-6 sm:blur-3xl"
        />
      )}
      <div
        className={`relative ${ratios[aspect]} w-full overflow-hidden rounded-[14px] bg-bg-raised shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] ${
          bordered ? "border border-border" : ""
        }`}
      >
        {showImage ? (
          <Image
            src={src as string}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className={
              // Below lg, technical diagrams/screenshots must never be
              // cropped — object-cover on a narrow aspect ratio clips wide
              // artwork (e.g. architecture diagrams). Desktop keeps the
              // existing per-project fit behavior unchanged.
              fit === "contain"
                ? "object-contain"
                : "object-contain lg:object-cover"
            }
            priority={priority}
            loading={priority ? undefined : "lazy"}
            onError={() => setErrored(true)}
          />
        ) : (
          <AwaitingScreenshot label={label} />
        )}
        {bordered && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(119,197,138,0.12)]"
          />
        )}
      </div>
    </div>
  );
}

function AwaitingScreenshot({ label }: { label: string }) {
  return (
    <div
      className="bg-grid absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_top_right,rgba(119,197,138,0.06),transparent_60%)]"
      role="img"
      aria-label={`${label} — screenshot not yet available`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border-strong text-accent-bright/70">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 15l4.5-4.5a2 2 0 0 1 2.8 0L15 15" />
          <path d="M13.5 13.5 15.7 11.3a2 2 0 0 1 2.8 0L21 14" />
          <circle cx="8" cy="8.5" r="1.25" />
        </svg>
      </div>
      <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
        {label}
      </p>
    </div>
  );
}
