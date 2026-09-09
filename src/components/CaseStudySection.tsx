interface CaseStudySectionProps {
  id: string;
  label: string;
  heading?: string;
  children: React.ReactNode;
}

export default function CaseStudySection({
  id,
  label,
  heading,
  children,
}: CaseStudySectionProps) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-border py-16 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
        {label}
      </p>
      {heading && (
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl">
          {heading}
        </h2>
      )}
      <div className="mt-7 max-w-3xl">{children}</div>
    </section>
  );
}
