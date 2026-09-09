interface CaseStudySectionProps {
  id: string;
  label: string;
  heading?: string;
  children: React.ReactNode;
  /** "tight" trims only the desktop (lg+) vertical rhythm between chapters;
   *  mobile/tablet spacing is unchanged either way. Opt-in per case study. */
  spacing?: "default" | "tight";
  /** True for the first section in a case study only — tightens just the
   *  gap between the sticky nav and this section's content on phone widths
   *  (below sm). Tablet (sm+) and desktop (lg+) padding are untouched, and
   *  every later section's own spacing/rhythm is unaffected. */
  firstSection?: boolean;
}

export default function CaseStudySection({
  id,
  label,
  heading,
  children,
  spacing = "default",
  firstSection = false,
}: CaseStudySectionProps) {
  const basePt = firstSection ? "pt-16" : "pt-20";
  const paddingClass =
    spacing === "tight"
      ? `${basePt} sm:pt-24 pb-20 sm:pb-24 lg:py-[5.25rem]`
      : `${basePt} sm:pt-24 pb-20 sm:pb-24`;

  return (
    <section id={id} className={`scroll-mt-32 border-t border-border ${paddingClass}`}>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
        {label}
      </p>
      {heading && (
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl">
          {heading}
        </h2>
      )}
      <div className="mt-8 max-w-3xl">{children}</div>
    </section>
  );
}
