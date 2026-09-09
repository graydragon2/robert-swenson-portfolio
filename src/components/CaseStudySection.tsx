interface CaseStudySectionProps {
  id: string;
  label: string;
  heading?: string;
  children: React.ReactNode;
  /** "tight" trims only the desktop (lg+) vertical rhythm between chapters;
   *  mobile/tablet spacing is unchanged either way. Opt-in per case study. */
  spacing?: "default" | "tight";
}

export default function CaseStudySection({
  id,
  label,
  heading,
  children,
  spacing = "default",
}: CaseStudySectionProps) {
  const paddingClass =
    spacing === "tight" ? "py-20 sm:py-24 lg:py-[5.25rem]" : "py-20 sm:py-24";

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
