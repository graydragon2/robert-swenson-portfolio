interface CaseStudySectionProps {
  id: string;
  label: string;
  heading?: string;
  children: React.ReactNode;
  /** "tight" trims only the desktop (lg+) vertical rhythm between chapters;
   *  mobile/tablet spacing is unchanged either way. Opt-in per case study. */
  spacing?: "default" | "tight";
  /** True for the first section in a case study only — tightens the
   *  mobile/tablet gap between the sticky nav and this section's content
   *  (below lg only) without touching the rhythm between later sections. */
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
  const lgPt = spacing === "tight" ? "lg:pt-[5.25rem]" : "lg:pt-24";
  const lgPb = spacing === "tight" ? "lg:pb-[5.25rem]" : "lg:pb-24";
  const ptClass = firstSection ? `pt-16 sm:pt-20 ${lgPt}` : `pt-20 sm:pt-24 ${lgPt}`;
  const pbClass = `pb-20 sm:pb-24 ${lgPb}`;
  const paddingClass = `${ptClass} ${pbClass}`;

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
